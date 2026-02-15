"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

import { firebaseAuth } from "@/lib/firebase/client";
import { supabaseBrowser } from "@/lib/supabase/client";
import { useAuth } from "@/lib/firebase/auth-context";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type DailyStatusRow = {
  id: number;
  user_email: string;
  date: string;
  project_id: string;
  task: string;
  image_count: number;
  note: string | null;
  created_at: string;
};

type Filters = {
  user_email: string;
  date: string;
  task: string;
  project_id: string;
};

type FormState = {
  date: string;
  project_id: string;
  task: string;
  image_count: number;
  note: string;
};

export default function DailyStatusDashboard({ userEmail, isOrganizer }: { userEmail: string; isOrganizer?: boolean }) {
  const router = useRouter();
  const { user } = useAuth();

  const [filters, setFilters] = useState<Filters>({
    user_email: userEmail,
    date: "",
    task: "",
    project_id: "",
  });

  const [form, setForm] = useState<FormState>(() => ({
    date: new Date().toISOString().slice(0, 10),
    project_id: "",
    task: "Annotation",
    image_count: 0,
    note: "",
  }));

  const [rows, setRows] = useState<DailyStatusRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const load = async () => {
    setError(null);
    setLoading(true);
    try {
      const sb = supabaseBrowser();
      let query = sb
        .from("daily_status")
        .select("*")
        .order("date", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(200);

      if (filters.user_email) query = query.eq("user_email", filters.user_email);
      if (filters.date) query = query.eq("date", filters.date);
      if (filters.task) query = query.eq("task", filters.task);
      if (filters.project_id) query = query.eq("project_id", filters.project_id);

      const { data, error: sbError } = await query;
      if (sbError) throw new Error(sbError.message);
      setRows((data as DailyStatusRow[]) ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load records");
      setRows([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load current user's recent records by default.
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setSubmitting(true);

    try {
      const sb = supabaseBrowser();
      const { error: sbError } = await sb.from("daily_status").insert({
        user_uid: user?.uid ?? "",
        user_email: userEmail,
        date: form.date,
        project_id: form.project_id,
        task: form.task,
        image_count: Number(form.image_count),
        note: form.note || null,
      });

      if (sbError) throw new Error(sbError.message);

      setSuccess("Daily status submitted.");
      setForm((prev) => ({ ...prev, project_id: "", image_count: 0, note: "" }));
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit daily status");
    } finally {
      setSubmitting(false);
    }
  };

  const logout = async () => {
    await signOut(firebaseAuth).catch(() => undefined);
    router.replace("/annotation/login");
  };

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Annotation Tracking</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Logged in as <span className="font-medium">{userEmail || "(no email)"}</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          {isOrganizer && (
            <Button variant="outline" onClick={() => router.push("/annotation/reports")}>
              View Reports
            </Button>
          )}
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold">Submit Daily Status</h2>

        <form onSubmit={submit} className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Date</label>
            <Input
              type="date"
              value={form.date}
              onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Project ID</label>
            <Input
              value={form.project_id}
              onChange={(e) => setForm((p) => ({ ...p, project_id: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Task</label>
            <Select
              value={form.task}
              onValueChange={(v) => setForm((p) => ({ ...p, task: v }))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select task" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Annotation">Annotation</SelectItem>
                <SelectItem value="Quality Check">Quality Check</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Image Count</label>
            <Input
              type="number"
              min={0}
              value={form.image_count}
              onChange={(e) => setForm((p) => ({ ...p, image_count: Number(e.target.value) }))}
              required
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium">Note</label>
            <Textarea
              value={form.note}
              onChange={(e) => setForm((p) => ({ ...p, note: e.target.value }))}
              rows={3}
            />
          </div>

          <div className="md:col-span-2 flex items-center gap-3">
            <Button type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </Button>
            {success ? <span className="text-sm text-green-600">{success}</span> : null}
            {error ? <span className="text-sm text-destructive">{error}</span> : null}
          </div>
        </form>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">Daily Status Records</h2>
          <Button variant="outline" onClick={load} disabled={loading}>
            {loading ? "Loading..." : "Refresh"}
          </Button>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">User Email</label>
            <Input
              value={filters.user_email}
              onChange={(e) => setFilters((p) => ({ ...p, user_email: e.target.value }))}
              placeholder="(optional)"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Date</label>
            <Input
              type="date"
              value={filters.date}
              onChange={(e) => setFilters((p) => ({ ...p, date: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Task</label>
            <Select
              value={filters.task}
              onValueChange={(v) => setFilters((p) => ({ ...p, task: v === "__all" ? "" : v }))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__all">All</SelectItem>
                <SelectItem value="Annotation">Annotation</SelectItem>
                <SelectItem value="Quality Check">Quality Check</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Project ID</label>
            <Input
              value={filters.project_id}
              onChange={(e) => setFilters((p) => ({ ...p, project_id: e.target.value }))}
              placeholder="(optional)"
            />
          </div>

          <div className="md:col-span-4 flex items-center gap-3">
            <Button onClick={load} disabled={loading}>
              Search
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setFilters({ user_email: userEmail, date: "", task: "", project_id: "" });
                setRows([]);
              }}
            >
              Clear
            </Button>
            {error ? <span className="text-sm text-destructive">{error}</span> : null}
          </div>
        </div>

        <div className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Task</TableHead>
                <TableHead>Image Count</TableHead>
                <TableHead>Note</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-muted-foreground">
                    No records.
                  </TableCell>
                </TableRow>
              ) : (
                rows.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell>{r.user_email}</TableCell>
                    <TableCell>{r.date}</TableCell>
                    <TableCell>{r.project_id}</TableCell>
                    <TableCell>{r.task}</TableCell>
                    <TableCell>{r.image_count}</TableCell>
                    <TableCell className="whitespace-normal">{r.note ?? ""}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
