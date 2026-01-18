import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { getSessionUser } from "@/lib/firebase/session";

export default async function AnnotationProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getSessionUser();
  if (!user) redirect("/annotation/login");

  return children;
}
