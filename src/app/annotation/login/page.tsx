"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/firebase/auth-context";
import LoginForm from "./LoginForm";

export default function AnnotationLoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (user) {
    router.replace("/annotation");
    return null;
  }

  return <LoginForm />;
}
