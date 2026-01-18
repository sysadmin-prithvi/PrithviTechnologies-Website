export const runtime = "nodejs";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { getFirebaseAdminAuth } from "@/lib/firebase/admin";
import {
  SESSION_COOKIE_NAME,
  SESSION_EXPIRES_IN_MS,
} from "@/lib/firebase/session";

export async function POST(req: Request) {
  const { idToken } = (await req.json().catch(() => ({}))) as {
    idToken?: string;
  };

  if (!idToken) {
    return NextResponse.json({ error: "Missing idToken" }, { status: 400 });
  }

  try {
    const adminAuth = getFirebaseAdminAuth();

    // Ensures the token is valid and not revoked.
    await adminAuth.verifyIdToken(idToken, true);

    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn: SESSION_EXPIRES_IN_MS,
    });

    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: Math.floor(SESSION_EXPIRES_IN_MS / 1000),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to create session";

    // If the Admin SDK isn't configured, expose a clear error so the UI can show it.
    if (message.includes("Missing Firebase Admin env vars")) {
      return NextResponse.json({ error: message }, { status: 500 });
    }

    // For invalid/expired tokens, return 401 so the client can retry sign-in.
    return NextResponse.json({ error: message }, { status: 401 });
  }
}
