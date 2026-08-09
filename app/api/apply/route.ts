import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CALENDLY = "https://calendly.com/eric-can4418/30min";

export async function POST(req: NextRequest) {
  const redirect = process.env.CALENDLY_URL || CALENDLY;
  try {
    const body = await req.json();
    const { first_name, last_name, email, phone, city, state, situation, why_apply } = body;

    if (!first_name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (url && key) {
      // Insert into leads table (exists) with source=dauntless
      const name = [first_name, last_name].filter(Boolean).join(" ");
      const notes = `City: ${city || "—"}, State: ${state || "—"}, Situation: ${situation || "—"}, Why: ${why_apply || "—"}`;

      const r = await fetch(`${url}/rest/v1/leads`, {
        method: "POST",
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ name, email, phone, source: "dauntless", status: "new", notes }),
      });

      if (!r.ok) console.error("Supabase leads insert:", r.status, await r.text());
    }

    return NextResponse.json({ success: true, redirect });
  } catch (err) {
    console.error("Apply error:", err);
    return NextResponse.json({ success: true, redirect });
  }
}
