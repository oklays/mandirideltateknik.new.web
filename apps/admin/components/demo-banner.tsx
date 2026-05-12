type DemoBannerProps = {
  mode: "demo" | "live";
};

export function DemoBanner({ mode }: DemoBannerProps) {
  if (mode === "live") return null;

  return (
    <div className="rounded-2xl border border-dashed border-[var(--accent)] bg-[rgba(198,93,47,0.08)] px-4 py-3 text-sm text-[var(--foreground)]">
      Demo mode aktif. Dashboard dapat dijelajahi tanpa koneksi Supabase penuh. Login, penyimpanan
      data live, dan upload media memerlukan konfigurasi environment.
    </div>
  );
}

