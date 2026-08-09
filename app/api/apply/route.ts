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

    // Lazy import so it's never bundled at build time
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error: dbError } = await supabase
      .from("dauntless_applications")
      .insert([{ first_name, last_name, email, phone, city, state, situation, why_apply }]);

    if (dbError) console.error("Supabase:", dbError.message);

    return NextResponse.json({
      success: true,
      redirect: process.env.CALENDLY_URL || "https://calendly.com/eric-can4418/30min",
    });
  } catch (err) {
    console.error("Apply error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
