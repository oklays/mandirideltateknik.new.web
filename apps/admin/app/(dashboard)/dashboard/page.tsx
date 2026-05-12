import { getDashboardSummary } from "@bms/lib";
import { Card } from "@bms/ui";

export default async function DashboardPage() {
  const summary = await getDashboardSummary();

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="space-y-3 bg-white/90">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Services</p>
          <p className="font-display text-5xl uppercase tracking-[0.08em]">
            {summary.serviceCount}
          </p>
        </Card>
        <Card className="space-y-3 bg-white/90">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Published Posts</p>
          <p className="font-display text-5xl uppercase tracking-[0.08em]">
            {summary.publishedPostCount}
          </p>
        </Card>
        <Card className="space-y-3 bg-white/90">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Contacts</p>
          <p className="font-display text-5xl uppercase tracking-[0.08em]">
            {summary.contactCount}
          </p>
        </Card>
      </div>

      <Card className="space-y-4 bg-white/90">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Latest Contact</p>
        {summary.latestContact ? (
          <div className="space-y-2">
            <h2 className="font-display text-3xl uppercase tracking-[0.08em]">
              {summary.latestContact.name}
            </h2>
            <p className="text-sm text-[var(--muted-foreground)]">{summary.latestContact.email}</p>
            <p className="text-sm leading-7 text-[var(--muted-foreground)]">
              {summary.latestContact.message}
            </p>
          </div>
        ) : (
          <p className="text-sm text-[var(--muted-foreground)]">Belum ada kontak masuk.</p>
        )}
      </Card>
    </div>
  );
}

