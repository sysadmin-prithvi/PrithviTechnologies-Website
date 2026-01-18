import type { ReactNode } from "react";

export const metadata = {
  title: "Annotation Tracking",
};

export default function AnnotationLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-10">{children}</main>
    </div>
  );
}
