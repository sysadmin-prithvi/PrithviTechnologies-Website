export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/firebase/session";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function GET(req: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

    const organizerEmails = process.env.ORGANIZER_EMAILS?.split(",") || [];
    if (!user.email || !organizerEmails.includes(user.email)) {
      return NextResponse.json({ error: "Forbidden: Organizer access required" }, { status: 403 });
    }

  let supabase: ReturnType<typeof supabaseAdmin>;
  try {
    supabase = supabaseAdmin();
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Supabase not configured" },
      { status: 500 }
    );
  }

  // Fetch all daily status records
  const { data: records, error: recordsError } = await supabase
    .from("daily_status")
    .select("*")
    .order("date", { ascending: false })
    .order("created_at", { ascending: false });

  if (recordsError) {
    return NextResponse.json({ error: recordsError.message }, { status: 500 });
  }

  // Fetch all problem noted records for quality check context
  const { data: qualityChecks, error: qcError } = await supabase
    .from("problem_noted")
    .select("*")
    .order("created_at", { ascending: false });

  if (qcError) {
    // We can still proceed even if QC records fail, but we log it
    console.error("Failed to fetch quality checks:", qcError);
  }

  return NextResponse.json({
    data: {
      records: records || [],
      qualityChecks: qualityChecks || [],
    },
  });
}
