import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getProductBySlug, getAllProducts } from "@mdt/lib";
import { Shell, SectionHeading, Card } from "@mdt/ui";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.seo_title,
    description: product.seo_description,
    openGraph: {
      title: product.seo_title,
      description: product.seo_description,
      type: "website"
    }
  };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Create FAQ Schema (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description.replace(/<[^>]+>/g, ""),
    "brand": {
      "@type": "Brand",
      "name": product.title.replace("Pompa ", "").replace("Dinamo Motor ", "")
    },
    "category": product.category
  };

  return (
    <main className="py-20 md:py-24 bg-bms-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Shell>
        <div className="grid gap-12 lg:grid-cols-[1fr_350px]">
          {/* Main Content */}
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                <Link href="/products" className="hover:text-cta transition-colors">Produk</Link>
                <span>/</span>
                <span className="text-bms-secondary">{product.category}</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.04em] text-bms-primary">
                {product.title}
              </h1>
              <p className="text-lg leading-8 text-bms-secondary">
                {product.excerpt}
              </p>
            </div>

            {/* Description */}
            <div className="prose prose-slate prose-lg max-w-none text-bms-secondary">
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>

            {/* Features & Applications Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-bms-primary">Keunggulan</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm text-bms-secondary">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-bms-primary">Aplikasi</h3>
                <ul className="space-y-3">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex gap-3 text-sm text-bms-secondary">
                      <CheckCircle2 className="h-5 w-5 text-cta shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Related Services CTA */}
            <Card className="p-8 bg-bms-section border-primary/20">
              <div className="space-y-4">
                <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-bms-primary">Layanan Terkait</h3>
                <p className="text-sm text-bms-secondary leading-7">
                  Selain supply unit {product.title}, Mandiri Delta Teknik juga melayani jasa instalasi, alignment, pembuatan panel kontrol (SDP/MDP/VSD), hingga overhaul pompa industri.
                </p>
                <Link
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-colors hover:text-cta"
                  href="/services"
                >
                  Lihat Semua Layanan <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="sticky top-28 space-y-6">
              <Card className="p-6 border-cta/30 bg-cta/5">
                <h3 className="font-display text-xl uppercase tracking-[0.08em] text-bms-primary mb-4">
                  Butuh Unit Ini?
                </h3>
                <p className="text-sm text-bms-secondary mb-6 leading-6">
                  Konsultasikan spesifikasi teknis (Head, Flow Rate, kW) yang Anda butuhkan dengan Sales Engineering kami untuk mendapatkan rekomendasi dan penawaran terbaik.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/6289652480933?text=Halo%20PT%20Mandiri%20Delta%20Teknik,%20saya%20ingin%20konsultasi%20kebutuhan%20unit%20mengenai%20produk%20ini:%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-full items-center justify-center rounded-lg bg-[#25D366] px-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#20bd5a]"
                  >
                    Minta Penawaran
                  </a>
                  <Link
                    href="/request-quotation"
                    className="flex h-12 w-full items-center justify-center rounded-lg border border-bms-primary/20 bg-white px-4 text-sm font-bold uppercase tracking-[0.08em] text-bms-primary transition hover:bg-slate-50"
                  >
                    Kirim Form RFQ
                  </Link>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </Shell>
    </main>
  );
}
