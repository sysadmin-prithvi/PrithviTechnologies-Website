import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Annotation for Autonomous Vehicles: A Deep Dive | xequals.ai",
  description:
    "Master frame-by-frame video annotation techniques for self-driving cars. Learn 3D cuboids, temporal tracking, and AI-assisted workflows that cut costs by 50-60%.",
  alternates: { canonical: "/resources/video-annotation-autonomous-vehicles-deep-dive" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
