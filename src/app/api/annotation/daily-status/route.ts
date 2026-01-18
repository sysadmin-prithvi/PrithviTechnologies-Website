export const runtime = "nodejs";

import { NextResponse } from "next/server";

import { getSessionUser } from "@/lib/firebase/session";
import { supabaseAdmin } from "@/lib/supabase/admin";

type DailyStatusInsert = {
  date: string;
  project_id: string;
  task: string;
  image_count: number;
  note?: string | null;
};

export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as DailyStatusInsert | null;
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { date, project_id, task, image_count, note } = body;

  if (!date || !project_id || !task || typeof image_count !== "number") {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
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

  const { data, error } = await supabase
    .from("daily_status")
    .insert({
      user_uid: user.uid,
      user_email: user.email ?? "",
      date,
      project_id,
      task,
      image_count,
      note: note ?? null,
    })
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function GET(req: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const username = url.searchParams.get("user_email");
  const date = url.searchParams.get("date");
  const task = url.searchParams.get("task");
  const projectId = url.searchParams.get("project_id");

  let supabase: ReturnType<typeof supabaseAdmin>;
  try {
    supabase = supabaseAdmin();
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Supabase not configured" },
      { status: 500 }
    );
  }

  let query = supabase
    .from("daily_status")
    .select("*")
    .order("date", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(200);

  if (username) query = query.eq("user_email", username);
  if (date) query = query.eq("date", date);
  if (task) query = query.eq("task", task);
  if (projectId) query = query.eq("project_id", projectId);

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}
