import type { ReactNode } from "react";
import { AuthProvider } from "@/lib/firebase/auth-context";

export const metadata = {
  title: "Annotation Tracking",
};

export default function AnnotationLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-10">
        <AuthProvider>{children}</AuthProvider>
      </main>
    </div>
  );
}
