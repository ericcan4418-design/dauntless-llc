import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Simple secret check — Eric uses ?secret=dauntless2026 to view leads
const SECRET = process.env.LEADS_SECRET || "dauntless2026";

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supaKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supaUrl || !supaKey) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }

  // Try dedicated table first
  const r1 = await fetch(
    `${supaUrl}/rest/v1/dauntless_applications?order=created_at.desc&limit=50&select=*`,
    { headers: { apikey: supaKey, Authorization: `Bearer ${supaKey}` } }
  );

  if (r1.ok) {
    const rows = await r1.json();
    return NextResponse.json({ source: "dauntless_applications", count: rows.length, leads: rows });
  }

  // Fallback: read from leads table filtered by vapi_notes containing "Situation:"
  const r2 = await fetch(
    `${supaUrl}/rest/v1/leads?vapi_notes=like.*Situation:*&order=created_at.desc&limit=50&select=id,first_name,last_name,email,phone,state,status,vapi_notes,created_at`,
    { headers: { apikey: supaKey, Authorization: `Bearer ${supaKey}` } }
  );

  if (r2.ok) {
    const rows = await r2.json();
    return NextResponse.json({ source: "leads (fallback)", count: rows.length, leads: rows });
  }

  return NextResponse.json({ error: "Could not fetch leads", status1: r1.status, status2: r2.status }, { status: 500 });
}
