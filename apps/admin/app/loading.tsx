export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse bg-[var(--background)] p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="h-10 w-64 rounded-full bg-black/10" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="h-40 rounded-[32px] bg-black/10" />
          <div className="h-40 rounded-[32px] bg-black/10" />
          <div className="h-40 rounded-[32px] bg-black/10" />
        </div>
      </div>
    </div>
  );
}

