import { cookies } from "next/headers";

import { getFirebaseAdminAuth } from "@/lib/firebase/admin";

export const SESSION_COOKIE_NAME = "__session";
export const SESSION_EXPIRES_IN_DAYS = 5;
export const SESSION_EXPIRES_IN_MS = SESSION_EXPIRES_IN_DAYS * 24 * 60 * 60 * 1000;

export type SessionUser = {
  uid: string;
  email: string | null;
  name: string | null;
};

export async function getSessionUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!sessionCookie) return null;

  try {
    const decoded = await getFirebaseAdminAuth().verifySessionCookie(
      sessionCookie,
      true
    );
    return {
      uid: decoded.uid,
      email: (decoded.email as string | undefined) ?? null,
      name: (decoded.name as string | undefined) ?? null,
    };
  } catch {
    return null;
  }
}
