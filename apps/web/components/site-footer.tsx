import Link from "next/link";
import Image from "next/image";
import { getSiteSettings } from "@mdt/lib";
import { Shell } from "@mdt/ui";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export async function SiteFooter() {
  const settings = await getSiteSettings();

  return (
    <footer className="bg-[#1f2022] text-[#9ca3af]">
      <Shell className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        {/* Column 1: Logo & Info */}
        <div className="space-y-6">
          <Link href="/">
            <Image src="/logo.png" alt={settings.company_name} width={160} height={60} className="object-contain" />
          </Link>
          <p className="text-sm leading-relaxed text-[#9ca3af]">
            Mitra terpercaya Anda untuk kebutuhan pompa, panel elektrik, hydrant, dan servis industri. Menjadikan operasional lancar dan efisien sejak 2009.
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <Phone className="h-4 w-4 text-slate-400 flex-shrink-0" />
              <span className="text-sm">0896-5248-0933</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-4 w-4 text-slate-400 flex-shrink-0" />
              <span className="text-sm">marketing1@mandirideltateknik.com</span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
              <span className="text-sm leading-relaxed">
                Head Office : Ruko Central Selang Blok A.18 RT.009/RW.028 Wanasari Cibitung Kabupaten Bekasi Jawa Barat<br />
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: Perusahaan */}
        <div className="space-y-6 lg:pl-6">
          <h4 className="text-white font-serif text-lg tracking-wide">Perusahaan</h4>
          <div className="flex flex-col gap-4 text-sm">
            <Link className="hover:text-white transition-colors" href="/about">Tentang Kami</Link>
            <Link className="hover:text-white transition-colors" href="#">Tim Kami</Link>
            <Link className="hover:text-white transition-colors" href="#">Karir</Link>
            <Link className="hover:text-white transition-colors" href="#">Pers</Link>
          </div>
        </div>

        {/* Column 3: Layanan */}
        <div className="space-y-6">
          <h4 className="text-white font-serif text-lg tracking-wide">Layanan</h4>
          <div className="flex flex-col gap-4 text-sm">
            <Link className="hover:text-white transition-colors" href="/services">Pompa Industri</Link>
            <Link className="hover:text-white transition-colors" href="/services">Panel Elektrik</Link>
            <Link className="hover:text-white transition-colors" href="/services">Dinamo Motor</Link>
            <Link className="hover:text-white transition-colors" href="/services">Fire Hydrant System</Link>
            <Link className="hover:text-white transition-colors" href="/services">Servis & Maintenance</Link>
          </div>
        </div>

        {/* Column 4: Subscribe */}
        <div className="space-y-6">
          <h4 className="text-white font-serif text-lg tracking-wide">Subscribe Mandiri Delta Teknik</h4>
          <p className="text-sm leading-relaxed text-[#9ca3af]">
            Dapatkan informasi terbaru seputar promo, produk terbaru, dan penawaran layanan langsung ke email Anda.
          </p>
          <form className="flex flex-col xl:flex-row gap-3 mt-4">
            <input
              type="email"
              placeholder="Masukkan alamat email Anda"
              className="bg-[#2a2a2a] border border-[#3f3f46] text-sm text-white px-4 py-3 rounded-md focus:outline-none focus:border-slate-400 w-full"
            />
            <button
              type="button"
              className="bg-[#d4b996] text-[#1a1a1a] font-semibold px-6 py-3 rounded-md hover:bg-[#c2a683] transition-colors whitespace-nowrap"
            >
              Berlangganan
            </button>
          </form>
        </div>
      </Shell>

      {/* Bottom Footer */}
      <div className="border-t border-[#333]">
        <Shell className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9ca3af]">
            &copy; {new Date().getFullYear()} {settings.company_name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:border-slate-400 hover:text-white transition-all">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="Twitter" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:border-slate-400 hover:text-white transition-all">
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:border-slate-400 hover:text-white transition-all">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
        </Shell>
      </div>
    </footer>
  );
}

