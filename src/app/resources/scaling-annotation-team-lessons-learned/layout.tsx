import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scaling Your Annotation Team: Lessons Learned | xequals.ai",
  description:
    "Real-world strategies for managing distributed annotation teams from 10 to 100+ members. Achieve 5x growth while improving quality and retention 25%.",
  alternates: { canonical: "/resources/scaling-annotation-team-lessons-learned" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
