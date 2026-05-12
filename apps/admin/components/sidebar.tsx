import Link from "next/link";
import { LayoutDashboard, Mail, Newspaper, Settings, ShieldCheck, Wrench } from "lucide-react";

const links = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/content/services", icon: Wrench, label: "Services" },
  { href: "/content/blog", icon: Newspaper, label: "Blog Posts" },
  { href: "/content/categories", icon: ShieldCheck, label: "Categories" },
  { href: "/contacts", icon: Mail, label: "Contacts" },
  { href: "/settings", icon: Settings, label: "Site Settings" }
];

export function Sidebar() {
  return (
    <aside className="rounded-[32px] border border-black/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur">
      <div className="space-y-8">
        <div>
          <p className="font-display text-3xl uppercase tracking-[0.14em] text-[var(--accent)]">
            BMS CMS
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
            Pusat pengelolaan konten dan lead masuk.
          </p>
        </div>

        <nav className="space-y-2">
          {links.map(({ href, icon: Icon, label }) => (
            <Link
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-black/5"
              href={href}
              key={href}
            >
              <Icon className="h-4 w-4 text-[var(--accent)]" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

