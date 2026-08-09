import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, phone, city, state, situation, why_apply } = body;

    if (!first_name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceKey) {
      console.error("Missing Supabase env vars");
      // Still redirect to Calendly — don't block the conversion
      return NextResponse.json({
        success: true,
        redirect: process.env.CALENDLY_URL || "https://calendly.com/eric-can4418/30min",
      });
    }

    // Direct REST API insert — no SDK dependency at build time
    const insertRes = await fetch(`${supabaseUrl}/rest/v1/dauntless_applications`, {
      method: "POST",
      headers: {
        apikey:          serviceKey,
        Authorization:   `Bearer ${serviceKey}`,
        "Content-Type":  "application/json",
        Prefer:          "return=minimal",
      },
      body: JSON.stringify({ first_name, last_name, email, phone, city, state, situation, why_apply }),
    });

    if (!insertRes.ok) {
      const errText = await insertRes.text();
      console.error("Supabase insert failed:", insertRes.status, errText);
      // Don't block — still redirect
    }

    return NextResponse.json({
      success: true,
      redirect: process.env.CALENDLY_URL || "https://calendly.com/eric-can4418/30min",
    });
  } catch (err) {
    console.error("Apply error:", err);
    // Even on hard error — redirect to Calendly so conversion isn't lost
    return NextResponse.json({
      success: true,
      redirect: "https://calendly.com/eric-can4418/30min",
    });
  }
}
