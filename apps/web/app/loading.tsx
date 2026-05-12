import { Shell } from "@mdt/ui";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[var(--background)] py-24">
      <Shell>
        <div className="animate-pulse space-y-6">
          <div className="h-8 w-48 rounded-full bg-white/10" />
          <div className="h-24 rounded-[32px] bg-white/10" />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="h-64 rounded-[28px] bg-white/10" />
            <div className="h-64 rounded-[28px] bg-white/10" />
            <div className="h-64 rounded-[28px] bg-white/10" />
          </div>
        </div>
      </Shell>
    </div>
  );
}

