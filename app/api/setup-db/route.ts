import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== "dauntless_setup_2026") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  const sql = `CREATE TABLE IF NOT EXISTS dauntless_applications (id uuid DEFAULT gen_random_uuid() PRIMARY KEY, created_at timestamptz DEFAULT now(), first_name text, last_name text, email text, phone text, city text, state text, situation text, why_apply text, calendly_booked boolean DEFAULT false);`;

  const r = await fetch(`${url}/rest/v1/rpc/exec_sql`, {
    method: "POST",
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ sql }),
  });

  return NextResponse.json({ status: r.status, body: await r.text() });
}
