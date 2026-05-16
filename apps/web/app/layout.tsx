import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import { getSiteSettings } from "@mdt/lib";
import { Suspense } from "react";
import "./globals.css";
import { FloatingWhatsApp } from "../components/floating-whatsapp";
import { GoogleAnalytics } from "../components/google-analytics";

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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WK4DX258');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WK4DX258"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

