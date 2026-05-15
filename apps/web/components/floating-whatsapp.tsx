"use client";

import Link from "next/link";
import * as gtag from "../lib/gtag";

const WhatsAppIcon = ({ className }: { className?: string }) => (
// ... (keep SVG)
);

export function FloatingWhatsApp() {
  const trackClick = (label: string) => {
    gtag.event({
      action: "click_whatsapp",
      category: "engagement",
      label: label,
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <div className="animate-fade-in-up rounded-lg bg-white p-3 shadow-lg border border-bms-divider text-xs font-medium text-bms-secondary">
        Butuh bantuan? Chat kami!
      </div>
      <Link
        href="https://wa.me/6289652480933"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("Sales Engineering 1")}
        className="group flex items-center justify-end gap-3"
      >
        <span className="scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 origin-right bg-white text-bms-primary text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md border border-bms-divider">
          Sales Engineering 1
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform">
          <WhatsAppIcon className="h-6 w-6" />
        </div>
      </Link>

      <Link
        href="https://wa.me/6285811111856"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("Sales Engineering 2")}
        className="group flex items-center justify-end gap-3"
      >
        <span className="scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 origin-right bg-white text-bms-primary text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md border border-bms-divider">
          Sales Engineering 2
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform">
          <WhatsAppIcon className="h-6 w-6" />
        </div>
      </Link>

      <Link
        href="https://wa.me/6281217241737"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("Sales Engineering 3")}
        className="group flex items-center justify-end gap-3"
      >
        <span className="scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 origin-right bg-white text-bms-primary text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md border border-bms-divider">
          Sales Engineering 3
        </span>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform">
          <WhatsAppIcon className="h-7 w-7" />
        </div>
      </Link>
    </div>
  );
}
