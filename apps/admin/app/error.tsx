"use client";

import { Button, Card } from "@mdt/ui";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6">
      <Card className="max-w-xl space-y-4 bg-white/90 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Admin Error</p>
        <h1 className="font-display text-4xl uppercase tracking-[0.08em]">{error.message}</h1>
        <p className="text-sm leading-7 text-[var(--muted-foreground)]">
          Coba ulangi tindakan atau muat ulang halaman.
        </p>
        <div className="flex justify-center">
          <Button onClick={reset}>Coba Lagi</Button>
        </div>
      </Card>
    </div>
  );
}

