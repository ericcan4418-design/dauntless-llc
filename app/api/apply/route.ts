import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CALENDLY     = "https://calendly.com/eric-can4418/30min";
const MAX_BODY     = 8_000; // 8 KB max body — rejects oversized payloads

// ── In-memory rate limiter (resets on cold start — good enough for edge abuse)
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT   = 5;   // max 5 submissions
const RATE_WINDOW  = 60_000; // per 60 seconds per IP

function checkRate(ip: string): boolean {
  const now  = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true; // allowed
  }
  if (entry.count >= RATE_LIMIT) return false; // blocked
  entry.count++;
  return true;
}

// ── Basic sanitizer — strips HTML tags, trims, max length
function clean(s: unknown, max = 200): string {
  if (typeof s !== "string") return "";
  return s.replace(/<[^>]*>/g, "").trim().slice(0, max);
}

export async function POST(req: NextRequest) {
  const redirect = process.env.CALENDLY_URL || CALENDLY;

  // ── Rate limit by IP
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!checkRate(ip)) {
    return NextResponse.json({ error: "Too many requests. Try again in a minute." }, { status: 429 });
  }

  // ── Reject oversized bodies
  const contentLength = parseInt(req.headers.get("content-length") || "0");
  if (contentLength > MAX_BODY) {
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  }

  try {
    const raw = await req.json();

    // ── Sanitize all fields
    const first_name = clean(raw.first_name, 80);
    const last_name  = clean(raw.last_name,  80);
    const email      = clean(raw.email,      200);
    const phone      = clean(raw.phone,      30);
    const city       = clean(raw.city,       100);
    const state      = clean(raw.state,      50);
    const situation  = clean(raw.situation,  50);
    const why_apply  = clean(raw.why_apply,  2000);

    // ── Validate required fields
    if (!first_name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // ── Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ── Save to Supabase (best-effort — never block the conversion)
    const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supaKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supaUrl && supaKey) {
      const name  = [first_name, last_name].filter(Boolean).join(" ");
      const notes = [
        city      && `City: ${city}`,
        state     && `State: ${state}`,
        situation && `Situation: ${situation}`,
        why_apply && `Why: ${why_apply}`,
      ].filter(Boolean).join(" | ");

      const r = await fetch(`${supaUrl}/rest/v1/leads`, {
        method: "POST",
        headers: {
          apikey: supaKey,
          Authorization: `Bearer ${supaKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ name, email, phone, source: "dauntless", status: "new", notes }),
      });

      if (!r.ok) {
        console.error("[apply] Supabase insert failed:", r.status, await r.text().catch(() => ""));
      }
    }

    return NextResponse.json({ success: true, redirect });

  } catch (err) {
    console.error("[apply] Error:", err);
    // Still redirect — never lose the conversion to a server error
    return NextResponse.json({ success: true, redirect });
  }
}
