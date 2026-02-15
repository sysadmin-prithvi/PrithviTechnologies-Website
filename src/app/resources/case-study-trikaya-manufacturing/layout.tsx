import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trikaya Manufacturing Case Study: 95%+ Defect Detection Accuracy | xequals.ai",
  description:
    "How XEqualsAI built a production-grade data pipeline with 60,000+ annotated images, achieving 95%+ model accuracy for Trikaya Manufacturing's automated defect detection system.",
  alternates: { canonical: "/resources/case-study-trikaya-manufacturing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
