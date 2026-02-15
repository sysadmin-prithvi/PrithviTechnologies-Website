import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Practices for Image Annotation in Computer Vision | xequals.ai",
  description:
    "Master the essential techniques and workflows that ensure high-quality labeled data for production-grade computer vision models. Improve annotation speed by 40% and consistency by 30%.",
  alternates: { canonical: "/resources/best-practices-image-annotation-computer-vision" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
