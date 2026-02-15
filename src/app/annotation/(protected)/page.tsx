"use client";

import { useAuth } from "@/lib/firebase/auth-context";
import DailyStatusDashboard from "./DailyStatusDashboard";

const ORGANIZER_EMAILS = (process.env.NEXT_PUBLIC_ORGANIZER_EMAILS ?? "").split(",").filter(Boolean);

export default function AnnotationDashboardPage() {
  const { user } = useAuth();

  if (!user) return null;

  const isOrganizer = !!user.email && ORGANIZER_EMAILS.includes(user.email);

  return <DailyStatusDashboard userEmail={user.email ?? ""} isOrganizer={isOrganizer} />;
}
