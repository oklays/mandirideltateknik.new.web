"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, SectionHeading, Shell } from "@mdt/ui";

const testimonials = [
  {
    title: "PDAM TIRTA BUMI SENTOSA KAB.KEBUMEN",
    description: "Jl. Masjid Agung No.1, Area Sawah, Wates, Kulon Progo Regency, Special Region of Yogyakarta 55651",
  },
  {
    title: "PDAM Tirta Binangun Kab. Kulon Progo",
    description: "Jl. Masjid Agung No.1, Area Sawah, Wates, Kulon Progo Regency, Special Region of Yogyakarta 55651",
  },
  {
    title: "PT. QL TRIMITRA",
    description: "Tari Kolot, RT.01/RW.02, Cinangsi, Kec. Cikalongkulon, Kabupaten Cianjur, Jawa Barat 43291",
  },
  {
    title: "PT. KEMIRA INDONESIA",
    description: "Jl. Rembang Industri III, Bunut Utara, Pandean, Kec. Rembang, Pasuruan, Jawa Timur 67152",
  },
  {
    title: "CV. MUKTI WIJAYA FIBRETECH",
    description: "Jl. Lapangan Bola, RT.003/RW.003, Sumur Batu, Bantargebang, RT.002/RW.005, Jawa, Barat, Kota Bks, Jawa Barat 17154",
  },
  {
    title: "PT. MODERN PLASTIC INDUSTRY",
    description: "Kawasan Industri Delta Silicone II, Jl. Beringin No.12/1-A, Cibatu, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17550",
  },
  {
    title: "PT. SANKEI GOHSYU INDUSTRIES",
    description: "MM2100 Industrial Town Blok J-8, Cikarang Barat, Gandamekar, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17155",
  },
];

export function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-bms-bg py-24 border-t border-bms-divider">
      <Shell className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            description="Apa yang klien kami katakan tentang kolaborasi dan hasil kerja PT Mandiri Delta Teknik."
            eyebrow="Testimonials"
            title="Kepercayaan Klien"
          />
          <div className="flex gap-2 pb-4">
            <button 
              onClick={() => scroll('left')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-bms-divider bg-white text-bms-primary hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-bms-divider bg-white text-bms-primary hover:bg-slate-50 transition-colors shadow-sm"
              aria-label="Next testimonial"
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
          {testimonials.map((item, index) => (
            <Card key={index} className="min-w-[320px] md:min-w-[400px] snap-start flex-shrink-0 bg-white border border-bms-divider p-8 space-y-6 relative overflow-hidden">
              <Quote className="absolute -top-4 -right-4 h-24 w-24 text-bms-bg opacity-50" />
              <div className="space-y-4 relative z-10">
                <h3 className="font-display text-xl uppercase tracking-wide text-bms-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-bms-secondary">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Shell>
    </section>
  );
}
