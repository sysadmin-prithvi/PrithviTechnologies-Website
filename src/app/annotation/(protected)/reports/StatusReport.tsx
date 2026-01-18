"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, ArrowLeft, RefreshCw } from "lucide-react";
import { Link } from "lucide-react";

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

type QualityCheckRow = {
  id: number;
  project_id: string;
  image_id: string;
  qc_username: string;
  comment: string;
  created_at: string;
};

export default function StatusReport() {
  const router = useRouter();
  const [records, setRecords] = useState<DailyStatusRow[]>([]);
  const [qualityChecks, setQualityChecks] = useState<QualityCheckRow[]>([]);
  const [isOrganizer, setIsOrganizer] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkOrganizer = async () => {
    try {
      const res = await fetch("/api/auth/me");
      const json = await res.json();
      setIsOrganizer(json.isOrganizer);
      if (json.isOrganizer) {
        loadData();
      } else {
        setLoading(false);
      }
    } catch (err) {
      setError("Failed to verify organizer status");
      setLoading(false);
    }
  };

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/annotation/reports");
      if (!res.ok) {
        throw new Error("Failed to fetch reports");
      }
      const json = await res.json();
      setRecords(json.data.records || []);
      setQualityChecks(json.data.qualityChecks || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOrganizer();
  }, []);

  const downloadCSV = () => {
    if (records.length === 0) return;

    const headers = ["User Email", "Date", "Project ID", "Task", "Image Count", "Note", "Logged At"];
    const rows = records.map((r) => [
      r.user_email,
      r.date,
      r.project_id,
      r.task,
      r.image_count,
      r.note || "",
      new Date(r.created_at).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `annotation_status_report_${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      await signOut(firebaseAuth).catch(() => undefined);
      router.replace("/annotation/login");
      router.refresh();
    }
  };

  if (!loading && isOrganizer === false) {
    return (
      <div className="container mx-auto py-32 flex flex-col items-center justify-center space-y-4">
        <div className="bg-destructive/10 p-6 rounded-full">
          <ArrowLeft className="h-12 w-12 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="text-muted-foreground text-center max-w-md">
          You do not have organizer privileges to view this report. 
          Please contact an organizer if you believe this is an error.
        </p>
        <Button onClick={() => router.push("/annotation")}>
          Return to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push("/annotation")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Status Report</h1>
            <p className="text-muted-foreground">Annotation and Quality Check status of all users</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={loadData} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button onClick={downloadCSV} disabled={records.length === 0 || loading}>
            <Download className="h-4 w-4 mr-2" />
            Download CSV
          </Button>
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="p-6 border-b bg-muted/50">
          <h2 className="text-xl font-semibold">Daily Annotation & QC Logs</h2>
          <p className="text-sm text-muted-foreground">Complete log of all activities</p>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User Email</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Project ID</TableHead>
                <TableHead>Task</TableHead>
                <TableHead className="text-right">Image Count</TableHead>
                <TableHead>Note</TableHead>
                <TableHead>Logged At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    Loading records...
                  </TableCell>
                </TableRow>
              ) : records.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    No records found.
                  </TableCell>
                </TableRow>
              ) : (
                records.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">{record.user_email}</TableCell>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.project_id}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        record.task === "Annotation" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                      }`}>
                        {record.task}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">{record.image_count}</TableCell>
                    <TableCell className="max-w-xs truncate" title={record.note || ""}>
                      {record.note || "-"}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-xs">
                      {new Date(record.created_at).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {qualityChecks.length > 0 && (
        <Card className="overflow-hidden">
          <div className="p-6 border-b bg-muted/50">
            <h2 className="text-xl font-semibold">Quality Check Issues Noted</h2>
            <p className="text-sm text-muted-foreground">Specific problems flagged during QC</p>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>QC User</TableHead>
                  <TableHead>Project ID</TableHead>
                  <TableHead>Image ID</TableHead>
                  <TableHead>Comment</TableHead>
                  <TableHead>Logged At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {qualityChecks.map((qc) => (
                  <TableRow key={qc.id}>
                    <TableCell className="font-medium">{qc.qc_username}</TableCell>
                    <TableCell>{qc.project_id}</TableCell>
                    <TableCell>{qc.image_id}</TableCell>
                    <TableCell className="max-w-md whitespace-normal">{qc.comment}</TableCell>
                    <TableCell className="text-muted-foreground text-xs">
                      {new Date(qc.created_at).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      {error && (
        <div className="bg-destructive/15 text-destructive p-4 rounded-md text-sm">
          {error}
        </div>
      )}
    </div>
  );
}
