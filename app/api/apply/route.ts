import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CALENDLY  = "https://calendly.com/eric-can4418/30min";
const MAX_BODY  = 8_000;

// ── In-memory rate limiter (5 req / 60s per IP)
const rateMap = new Map<string, { count: number; resetAt: number }>();
function checkRate(ip: string): boolean {
  const now = Date.now();
  const e   = rateMap.get(ip);
  if (!e || now > e.resetAt) { rateMap.set(ip, { count: 1, resetAt: now + 60_000 }); return true; }
  if (e.count >= 5) return false;
  e.count++;
  return true;
}

// ── Strip HTML, trim, cap length
function clean(v: unknown, max = 200): string {
  return typeof v === "string" ? v.replace(/<[^>]*>/g, "").trim().slice(0, max) : "";
}

export async function POST(req: NextRequest) {
  const redirect = process.env.CALENDLY_URL || CALENDLY;

  // Rate limit
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRate(ip)) {
    return NextResponse.json({ error: "Too many requests. Try again in a minute." }, { status: 429 });
  }

  // Reject huge bodies
  const cl = parseInt(req.headers.get("content-length") ?? "0");
  if (cl > MAX_BODY) return NextResponse.json({ error: "Request too large." }, { status: 413 });

  try {
    const raw = await req.json();

    const first_name = clean(raw.first_name, 80);
    const last_name  = clean(raw.last_name,  80);
    const email      = clean(raw.email,     200);
    const phone      = clean(raw.phone,      30);
    const city       = clean(raw.city,      100);
    const state      = clean(raw.state,      50);
    const situation  = clean(raw.situation,  50);
    const why_apply  = clean(raw.why_apply, 2000);

    if (!first_name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supaKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supaUrl && supaKey) {
      // ── Try dedicated dauntless_applications table first (created via migration)
      const appPayload = {
        first_name,
        last_name,
        email,
        phone,
        city,
        state,
        situation,
        why_apply,
      };

      const r1 = await fetch(`${supaUrl}/rest/v1/dauntless_applications`, {
        method:  "POST",
        headers: {
          apikey:          supaKey,
          Authorization:   `Bearer ${supaKey}`,
          "Content-Type":  "application/json",
          Prefer:          "return=minimal",
        },
        body: JSON.stringify(appPayload),
      });

      if (r1.ok) {
        console.log("[apply] Saved to dauntless_applications ✓");
      } else {
        const err1 = await r1.text();
        console.warn("[apply] dauntless_applications insert failed:", r1.status, err1);

        // ── Fallback: write to existing leads table with correct column mapping
        // Maps Dauntless fields → leads schema (all NOT NULL fields get safe defaults)
        const leadsPayload = {
          first_name,
          last_name:      last_name  || "—",
          email,
          phone,
          state:          state      || city || "Unknown",
          vertical:       "Not Sure Yet",   // CHECK constraint values: Pest Control | Solar | Insurance | Not Sure Yet
          has_experience: false,             // boolean NOT NULL
          status:         "active",          // leads schema default
          touch_number:   0,
          opted_out:      false,
          replied:        false,
          zoom_booked:    false,
          vapi_notes:     [
            situation && `Situation: ${situation}`,
            city      && `City: ${city}`,
            why_apply && `Why: ${why_apply}`,
          ].filter(Boolean).join(" | ") || null,
        };

        const r2 = await fetch(`${supaUrl}/rest/v1/leads`, {
          method:  "POST",
          headers: {
            apikey:         supaKey,
            Authorization:  `Bearer ${supaKey}`,
            "Content-Type": "application/json",
            Prefer:         "return=minimal",
          },
          body: JSON.stringify(leadsPayload),
        });

        if (r2.ok) {
          console.log("[apply] Saved to leads (fallback) ✓");
        } else {
          console.error("[apply] Both inserts failed:", r2.status, await r2.text());
        }
      }
    }

    return NextResponse.json({ success: true, redirect });

  } catch (err) {
    console.error("[apply] Error:", err);
    return NextResponse.json({ success: true, redirect }); // never lose the conversion
  }
}
