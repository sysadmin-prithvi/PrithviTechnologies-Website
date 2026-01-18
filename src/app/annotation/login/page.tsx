import { redirect } from "next/navigation";

import { getSessionUser } from "@/lib/firebase/session";
import LoginForm from "./LoginForm";

export default async function AnnotationLoginPage() {
  const user = await getSessionUser();
  if (user) redirect("/annotation");

  return <LoginForm />;
}
