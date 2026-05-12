"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Shell } from "@bms/ui";
import { ChevronDown, Menu, X } from "lucide-react";
import { LayananMegaMenu, ProdukMegaMenu } from "./mega-menus";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-bms-divider bg-bms-section/90 backdrop-blur-xl shadow-card">
      <Shell className="flex h-20 items-center justify-between gap-4">
        <Link className="flex items-center" href="/">
          <Image 
            src="/logo-landscape-transparent.png" 
            alt="Mandiri Delta Teknik" 
            width={180} 
            height={50} 
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-bms-secondary md:flex">
          <Link className="transition-colors hover:text-primary" href="/">
            Beranda
          </Link>
          <Link className="transition-colors hover:text-primary" href="/about">
            Tentang
          </Link>
          <div className="group flex h-20 items-center">
            <Link className="transition-colors hover:text-primary flex items-center gap-1" href="/services">
              Layanan
              <ChevronDown className="h-4 w-4 opacity-50 transition-transform duration-300 group-hover:-rotate-180" />
            </Link>
            <LayananMegaMenu />
          </div>
          <div className="group flex h-20 items-center">
            <Link className="transition-colors hover:text-primary flex items-center gap-1" href="/products">
              Produk
              <ChevronDown className="h-4 w-4 opacity-50 transition-transform duration-300 group-hover:-rotate-180" />
            </Link>
            <ProdukMegaMenu />
          </div>
          <Link className="transition-colors hover:text-primary" href="/blog">
            Blog
          </Link>
          <Link className="transition-colors hover:text-primary" href="/contact">
            Kontak
          </Link>
        </nav>

        <Link
          className="hidden h-10 items-center justify-center rounded-lg bg-cta px-4 text-sm font-medium uppercase tracking-[0.08em] text-bms-primary shadow-sm transition hover:bg-cta-hover md:inline-flex"
          href="/contact"
        >
          Konsultasi Proyek
        </Link>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden flex items-center justify-center p-2 text-bms-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Shell>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-bms-divider shadow-xl py-4 px-6 flex flex-col gap-4">
          <Link className="py-2 text-sm font-medium text-bms-secondary hover:text-primary transition-colors" href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Beranda
          </Link>
          <Link className="py-2 text-sm font-medium text-bms-secondary hover:text-primary transition-colors" href="/about" onClick={() => setIsMobileMenuOpen(false)}>
            Tentang
          </Link>
          <Link className="py-2 text-sm font-medium text-bms-secondary hover:text-primary transition-colors" href="/services" onClick={() => setIsMobileMenuOpen(false)}>
            Layanan
          </Link>
          <Link className="py-2 text-sm font-medium text-bms-secondary hover:text-primary transition-colors" href="/products" onClick={() => setIsMobileMenuOpen(false)}>
            Produk
          </Link>
          <Link className="py-2 text-sm font-medium text-bms-secondary hover:text-primary transition-colors" href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
            Blog
          </Link>
          <Link className="py-2 text-sm font-medium text-bms-secondary hover:text-primary transition-colors" href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Kontak
          </Link>
          <div className="pt-4 mt-2 border-t border-bms-divider">
            <Link
              className="flex h-10 w-full items-center justify-center rounded-lg bg-cta px-4 text-sm font-medium uppercase tracking-[0.08em] text-bms-primary shadow-sm transition hover:bg-cta-hover"
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Konsultasi Proyek
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
