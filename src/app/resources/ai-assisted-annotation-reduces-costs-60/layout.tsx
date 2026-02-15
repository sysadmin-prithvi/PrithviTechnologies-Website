import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How AI‑Assisted Annotation Reduces Costs by 60% | xequals.ai",
  description:
    "Discover how pre‑labeling, active learning, and human‑in‑the‑loop workflows cut annotation costs by up to 60% while accelerating delivery.",
  alternates: { canonical: "/resources/ai-assisted-annotation-reduces-costs-60" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
