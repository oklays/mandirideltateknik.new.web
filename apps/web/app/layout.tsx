import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import { getSiteSettings } from "@bms/lib";
import "./globals.css";
import { FloatingWhatsApp } from "../components/floating-whatsapp";

const displayFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"]
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const seo = settings.seo_defaults as { description?: string; title?: string };

  return {
    description: seo.description ?? settings.tagline,
    metadataBase: new URL(baseUrl),
    openGraph: {
      description: seo.description ?? settings.tagline,
      siteName: settings.company_name,
      title: seo.title ?? settings.company_name,
      type: "website"
    },
    title: {
      default: settings.company_name,
      template: `%s | ${settings.company_name}`
    },
    icons: {
      icon: "/favicon.ico",
    }
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${displayFont.variable} ${bodyFont.variable}`} lang="id">
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

