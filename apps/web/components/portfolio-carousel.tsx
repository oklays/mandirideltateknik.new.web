"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, SectionHeading, Shell } from "@mdt/ui";

const portfolioItems = [
  {
    id: 1,
    title: "Penguatan Sistem Pompa Gedung Komersial",
    category: "Instalasi Pompa",
    image: "/background-1-1.png",
  },
  {
    id: 2,
    title: "Peremajaan Fire Pump dan Panel Hydrant",
    category: "Fire Hydrant System",
    image: "/background-1-1.png",
  },
  {
    id: 3,
    title: "Servis Pompa Utilitas untuk Fasilitas Industri",
    category: "Servis & Maintenance",
    image: "/background-1-1.png",
  },
  {
    id: 4,
    title: "Instalasi Panel Kontrol Pompa Submersible",
    category: "Electrical Panel",
    image: "/background-1-1.png",
  }
];

export function PortfolioCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-24 border-t border-bms-divider">
      <Shell className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            description="Beberapa proyek unggulan yang telah kami selesaikan untuk berbagai sektor industri dan komersial."
            eyebrow="Portfolio"
            title="Hasil Kerja Kami"
          />
          <div className="flex gap-2 pb-4">
            <button 
              onClick={() => scroll('left')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-bms-divider bg-white text-bms-primary hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Previous portfolio"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-bms-divider bg-white text-bms-primary hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Next portfolio"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {portfolioItems.map((item) => (
            <Card key={item.id} className="min-w-[320px] md:min-w-[400px] snap-start flex-shrink-0 group cursor-pointer overflow-hidden p-0 border border-bms-divider">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="p-6 bg-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  {item.category}
                </p>
                <h3 className="font-display text-2xl uppercase tracking-wide text-bms-primary line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </Shell>
    </section>
  );
}
