"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

import { firebaseAuth } from "@/lib/firebase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      router.replace("/annotation");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-start mb-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/xequalsai_icon.svg" alt="XEqualsAI" width={40} height={40} className="rounded-lg" />
          <span className="text-xl font-bold">XEqualsAI</span>
        </Link>
      </div>

      <div className="mx-auto max-w-md">
        <Card className="p-6">
          <h1 className="text-2xl font-semibold">Annotator Login</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Sign in with your in-house annotator account.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  className="h-12 border border-slate-400 dark:border-slate-600 focus-visible:border-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input
                  className="h-12 border border-slate-400 dark:border-slate-600 focus-visible:border-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </div>

            {error ? <div className="text-sm text-destructive">{error}</div> : null}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
