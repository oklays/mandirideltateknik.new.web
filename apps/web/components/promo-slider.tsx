"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const promos = [
  { id: 1, image: "/landingpage-banner.png", alt: "Promo Khusus 1" },
  { id: 2, image: "/landingpage-banner.png", alt: "Promo Khusus 2" },
  { id: 3, image: "/landingpage-banner.png", alt: "Promo Khusus 3" },
];

export function PromoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % promos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + promos.length) % promos.length);

  return (
    <section className="relative w-full overflow-hidden bg-bms-bg group">
      <div 
        className="flex transition-transform duration-500 ease-out items-center"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {promos.map((promo, index) => (
          <div key={promo.id} className="w-full flex-shrink-0 relative flex items-center justify-center">
            <Image 
              src={promo.image} 
              alt={promo.alt} 
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              priority={index === 0}
            />
            {/* Optional overlay for better text readability if there was text */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>
        ))}
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full backdrop-blur-sm transition shadow-sm text-bms-primary hover:text-primary z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full backdrop-blur-sm transition shadow-sm text-bms-primary hover:text-primary z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {promos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "w-2.5 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
