import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function MarketingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SiteHeader />
      {children}
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}

