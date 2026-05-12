"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createBrowserSupabaseClient, hasPublicSupabaseEnv } from "@bms/lib";
import { Button, Card, Input } from "@bms/ui";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const isConfigured = hasPublicSupabaseEnv();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured) {
      router.push("/dashboard");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const supabase = createBrowserSupabaseClient();
      const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

      if (authError) {
        throw new Error(authError.message);
      }

      router.push("/dashboard");
      router.refresh();
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Login gagal.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="mx-auto max-w-lg space-y-6 bg-white/90">
      <div className="space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
          Admin CMS
        </p>
        <h1 className="font-display text-5xl uppercase tracking-[0.08em]">Masuk ke dashboard</h1>
        <p className="text-sm leading-7 text-[var(--muted-foreground)]">
          Gunakan akun Supabase Auth untuk mengelola layanan, artikel, dan kontak masuk.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="space-y-2 text-sm">
          <span>Email</span>
          <Input onChange={(event) => setEmail(event.target.value)} type="email" value={email} />
        </label>
        <label className="space-y-2 text-sm">
          <span>Password</span>
          <Input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            value={password}
          />
        </label>
        {error ? <p className="text-sm text-red-500">{error}</p> : null}
        <Button className="w-full" disabled={loading} size="lg" type="submit">
          {isConfigured ? (loading ? "Memproses..." : "Masuk") : "Masuk ke Demo Mode"}
        </Button>
      </form>

      {!isConfigured ? (
        <p className="text-center text-sm text-[var(--muted-foreground)]">
          Supabase belum diatur. Anda tetap bisa masuk ke mode demo melalui tombol di atas.
        </p>
      ) : null}

      <p className="text-center text-sm text-[var(--muted-foreground)]">
        Kembali ke situs publik? <Link className="text-[var(--accent)]" href={process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}>Buka website</Link>
      </p>
    </Card>
  );
}
