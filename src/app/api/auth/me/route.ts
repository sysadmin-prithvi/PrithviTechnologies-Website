export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/firebase/session";

export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ user: null, isOrganizer: false });
  }

  const organizerEmails = process.env.ORGANIZER_EMAILS?.split(",") || [];
  const isOrganizer = !!user.email && organizerEmails.includes(user.email);

  return NextResponse.json({ user, isOrganizer });
}
