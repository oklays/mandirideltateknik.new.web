import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Shell, SectionHeading, Card } from "@bms/ui";

// Mock data to handle dynamic product categories
// If admin adds new categories, they can be matched here or fetched from a CMS/DB
const categoryData: Record<string, { title: string, description: string, products: {name: string, desc: string}[] }> = {
  "pompa-booster-dan-hydrant": {
    title: "Pompa Booster dan Hydrant",
    description: "Solusi pompa tekanan tinggi untuk kebutuhan booster dan sistem pemadam kebakaran (fire hydrant) standar industri.",
    products: [
      { name: "Pompa Booster Sentrifugal", desc: "Pompa untuk meningkatkan tekanan air pada gedung bertingkat." },
      { name: "Electric Fire Pump", desc: "Pompa pemadam utama berpenggerak motor listrik." },
      { name: "Diesel Fire Pump", desc: "Pompa pemadam cadangan berpenggerak mesin diesel." },
      { name: "Jockey Pump", desc: "Pompa penstabil tekanan air pada instalasi pipa hydrant." }
    ]
  },
  "pompa-sentrifugal": {
    title: "Pompa Sentrifugal",
    description: "Pompa transfer air bersih dan utilitas umum untuk berbagai aplikasi komersial dan pabrik.",
    products: [
      { name: "End Suction Pump", desc: "Pompa sentrifugal horizontal standar industri." },
      { name: "Multistage Pump", desc: "Pompa tekanan tinggi dengan multi-impeller." },
      { name: "Split Casing Pump", desc: "Pompa kapasitas besar untuk transfer air utama." }
    ]
  },
  "panel-elektrik": {
    title: "Panel Elektrik",
    description: "Perakitan panel kontrol elektrikal untuk sinkronisasi, automasi, dan perlindungan motor pompa.",
    products: [
      { name: "Panel Star Delta", desc: "Panel starter motor untuk pompa industri." },
      { name: "Panel Inverter (VFD)", desc: "Panel kontrol kecepatan motor variabel." },
      { name: "Panel Hydrant (NFPA)", desc: "Panel kontrol khusus untuk sistem pemadam kebakaran." }
    ]
  }
};

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = categoryData[slug] || {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
    description: "Daftar produk dan spesifikasi lengkap untuk kategori ini.",
    products: [
      { name: "Produk 1", desc: "Spesifikasi dan detail produk pertama." },
      { name: "Produk 2", desc: "Spesifikasi dan detail produk kedua." },
      { name: "Produk 3", desc: "Spesifikasi dan detail produk ketiga." }
    ]
  };

  return (
    <main className="py-20 md:py-24 bg-bms-bg min-h-screen">
      <Shell className="space-y-12">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary hover:text-cta transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Kembali
          </Link>
          <SectionHeading
            description={data.description}
            eyebrow="Kategori Produk"
            title={data.title}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.products.map((product, idx) => (
            <Card key={idx} className="flex flex-col gap-4 border border-bms-divider shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 w-full bg-slate-200 rounded-lg overflow-hidden relative">
                <img src="/background-1-1.png" alt={product.name} className="w-full h-full object-cover opacity-60 mix-blend-multiply" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-2xl text-slate-800 opacity-50 uppercase">{data.title.split(" ")[0]}</span>
                </div>
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wide text-bms-primary">
                {product.name}
              </h3>
              <p className="text-sm leading-relaxed text-bms-secondary">
                {product.desc}
              </p>
              <div className="mt-auto pt-4 border-t border-bms-divider">
                <Link href="/contact" className="text-xs font-bold uppercase tracking-[0.18em] text-primary hover:text-cta transition-colors inline-flex items-center gap-1">
                  Minta Penawaran <span className="text-lg leading-none">›</span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Shell>
    </main>
  );
}
