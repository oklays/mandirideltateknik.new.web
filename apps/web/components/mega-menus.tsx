import Link from "next/link";
import { 
  ShoppingCart, 
  Wrench, 
  Zap, 
  Magnet, 
  Droplet 
} from "lucide-react";

export function LayananMegaMenu() {
  const services = [
    {
      title: "Supplier Pompa Industri",
      desc: "Ready Stock Berbagai Macam Brand Pompa Air Industri",
      icon: ShoppingCart,
      href: "/services",
    },
    {
      title: "Jasa Servis dan Perbaikan",
      desc: "Jasa Servis dan Perbaikan Pompa, Electrical Panel dan Dinamo Motor",
      icon: Wrench,
      href: "/services",
    },
    {
      title: "Electrical Panel",
      desc: "Perakitan Electrical Panel Berbagai Macam Fungsi",
      icon: Zap,
      href: "/services",
    },
    {
      title: "Supplier / Distributor Dinamo motor",
      desc: "Ready Stock Berbagai Macam Brand Dinamo Motor",
      icon: Magnet,
      href: "/services",
    },
    {
      title: "Fire Hydrant System",
      desc: "Mendukung Pengadaan Fire Hydrant, Servis Overhoul dan Aksesoris Hydrant",
      icon: Droplet,
      href: "/services",
    },
  ];

  return (
    <div className="absolute left-1/2 top-[calc(100%+1.5rem)] z-50 w-[800px] -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[calc(100%+0rem)] transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
      <div className="pt-4">
        <div className="rounded-2xl bg-white p-6 shadow-glow border border-bms-divider ring-1 ring-black/5">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 grid grid-cols-2 gap-4">
              {services.map((s, i) => (
                <Link key={i} href={s.href} className="flex gap-4 rounded-xl p-4 transition-colors hover:bg-slate-50 group/item">
                  <div className="mt-1 flex-shrink-0 text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-bms-primary group-hover/item:text-primary transition-colors">{s.title}</h4>
                    <p className="mt-1 text-xs text-bms-secondary leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <div className="relative h-48 w-full overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
                  alt="Welder" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="rounded-xl bg-[#5995c0] p-5 text-white">
                <h4 className="font-display font-bold text-lg leading-tight">Konsultasi Sekarang Gratis</h4>
                <p className="mt-2 text-xs text-white/90 leading-relaxed">
                  Konsultasikan kebutuhan Anda dengan salah satu engineer terbaik kami secara gratis sekarang, dan dapatkan solusi yang tepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProdukMegaMenu() {
  const products = [
    "POMPA EBARA", "POMPA LEO", "CMP MOTOR", "DIESEL FIRE PUMP",
    "POMPA CNP", "POMPA SOUTHERN CROSS", "TECO MOTOR", "ELECTRIC FIRE PUMP",
    "POMPA TORISHIMA", "POMPA FLUGO", "ABB MOTOR", "JOCKEY FIRE PUMP",
    "POMPA GRUNDFOS", "POMPA DRAKOS", "SIEMENS MOTOR", "PANEL FIRE HYDRANT",
    "POMPA CRI", "POMPA MCKARLEN", "YUEMA MOTOR", "PILLAR FIRE HYDRANT",
    "POMPA TSURUMI", "POMPA KSB", "ELEKTRIM MOTOR", "BOX HYDRANT",
    "POMPA HCP", "POMPA SHOWFOU", "FRANKLIN MOTOR", "SPRINKLER HYDRANT"
  ];

  return (
    <div className="absolute left-1/2 top-[calc(100%+1.5rem)] z-50 w-[1000px] -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[calc(100%+0rem)] transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
      <div className="pt-4">
        <div className="rounded-2xl bg-white p-8 shadow-glow border border-bms-divider ring-1 ring-black/5">
          <div className="grid grid-cols-4 gap-y-4 gap-x-6">
            {products.map((p, i) => (
              <Link key={i} href={`/products/${p.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="group/item flex items-center gap-2 text-sm text-bms-primary hover:text-primary transition-colors">
                <span className="text-primary/50 group-hover/item:text-primary transition-colors font-medium">›</span>
                <span className="font-medium uppercase text-xs">{p}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-bms-divider">
            <div className="text-center w-full">
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {["EBARA", "GRUNDFOS", "TORISHIMA", "CNP", "LEO", "SOUTHERN CROSS"].map(brand => (
                  <span key={brand} className="font-display font-bold text-xl text-slate-800 tracking-wider">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
