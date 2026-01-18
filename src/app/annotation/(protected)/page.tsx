import { getSessionUser } from "@/lib/firebase/session";
import DailyStatusDashboard from "./DailyStatusDashboard";

export default async function AnnotationDashboardPage() {
  const user = await getSessionUser();

  // ProtectedLayout already redirects, but keep this for type safety.
  if (!user) return null;

  const organizerEmails = process.env.ORGANIZER_EMAILS?.split(",") || [];
  const isOrganizer = !!user.email && organizerEmails.includes(user.email);

  return <DailyStatusDashboard userEmail={user.email ?? ""} isOrganizer={isOrganizer} />;
}
