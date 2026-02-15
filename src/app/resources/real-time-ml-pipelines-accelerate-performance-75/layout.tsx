import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Real‑Time ML Pipelines Accelerate Model Performance by 75% | xequals.ai",
  description:
    "Discover how streaming data pipelines, online learning, and feature stores boost ML model performance by up to 75% while reducing inference latency.",
  alternates: { canonical: "/resources/real-time-ml-pipelines-accelerate-performance-75" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
