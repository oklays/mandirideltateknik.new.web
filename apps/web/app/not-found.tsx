import Link from "next/link";
import { Card, Shell } from "@mdt/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center bg-[var(--background)]">
      <Shell>
        <Card className="space-y-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            404
          </p>
          <h1 className="font-display text-4xl uppercase tracking-[0.08em]">
            Halaman tidak ditemukan
          </h1>
          <p className="text-sm leading-7 text-[var(--muted-foreground)]">
            Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
          </p>
          <div className="flex justify-center">
            <Link
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-5 text-sm font-medium uppercase tracking-[0.08em] text-white transition hover:bg-[var(--accent-strong)]"
              href="/"
            >
              Kembali ke beranda
            </Link>
          </div>
        </Card>
      </Shell>
    </div>
  );
}
