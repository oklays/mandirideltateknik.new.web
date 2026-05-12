import { DemoBanner } from "@/components/demo-banner";
import { Sidebar } from "@/components/sidebar";
import { requireAdminContext } from "@/lib/auth";

export default async function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const context = await requireAdminContext();

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="space-y-6">
          <div className="rounded-[32px] border border-black/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                  Admin Workspace
                </p>
                <h1 className="font-display text-4xl uppercase tracking-[0.08em]">
                  Halo, {context.profile.full_name ?? context.user.email}
                </h1>
              </div>
              <div className="text-sm text-[var(--muted-foreground)]">
                Mode: {context.mode === "demo" ? "Demo" : "Live"}
              </div>
            </div>
          </div>

          <DemoBanner mode={context.mode} />
          {children}
        </div>
      </div>
    </div>
  );
}

