"use client";

import { Button, Card, Shell } from "@bms/ui";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center bg-[var(--background)]">
      <Shell>
        <Card className="space-y-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Terjadi Kendala
          </p>
          <h1 className="font-display text-4xl uppercase tracking-[0.08em]">{error.message}</h1>
          <p className="text-sm leading-7 text-[var(--muted-foreground)]">
            Coba muat ulang halaman atau ulangi beberapa saat lagi.
          </p>
          <div className="flex justify-center">
            <Button onClick={reset}>Coba Lagi</Button>
          </div>
        </Card>
      </Shell>
    </div>
  );
}

