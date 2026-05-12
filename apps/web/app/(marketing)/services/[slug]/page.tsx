import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPublicServices, getServiceBySlug } from "@mdt/lib";
import { Card, Shell } from "@mdt/ui";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const services = await getPublicServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) return {};

  return {
    description: service.excerpt,
    title: `${service.title} | PT Mandiri Delta Teknik`,
    openGraph: {
      title: `${service.title} | PT Mandiri Delta Teknik`,
      description: service.excerpt,
      type: "article"
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  // Create FAQ Schema (JSON-LD) for Services
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.excerpt,
    "provider": {
      "@type": "LocalBusiness",
      "name": "PT Mandiri Delta Teknik",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ruko Central Selang Blok A.18 RT.009/RW.028 Wanasari",
        "addressLocality": "Cibitung",
        "addressRegion": "Jawa Barat"
      }
    }
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
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                <Link href="/services" className="hover:text-cta transition-colors">Layanan</Link>
                <span>/</span>
                <span className="text-bms-secondary">Detail</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.04em] text-bms-primary">
                {service.title}
              </h1>
            </div>

            <Card className="p-8 md:p-12 overflow-hidden bg-white border-bms-divider">
              <div 
                className="prose prose-slate prose-lg max-w-none 
                prose-headings:font-display prose-headings:uppercase prose-headings:tracking-[0.08em] prose-headings:text-bms-primary
                prose-p:text-bms-secondary prose-p:leading-8
                prose-li:text-bms-secondary prose-li:leading-7
                prose-strong:text-bms-primary
                [&_.lead]:text-xl [&_.lead]:text-bms-primary [&_.lead]:font-medium [&_.lead]:mb-10"
                dangerouslySetInnerHTML={{ __html: service.description }} 
              />
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="sticky top-28 space-y-6">
              <Card className="p-6 border-cta/30 bg-cta/5">
                <h3 className="font-display text-xl uppercase tracking-[0.08em] text-bms-primary mb-4">
                  Konsultasikan Kebutuhan Anda
                </h3>
                <p className="text-sm text-bms-secondary mb-6 leading-6">
                  Tim teknis kami siap berdiskusi langsung mengenai proyek pengadaan, permasalahan sistem, atau penjadwalan survey lapangan (on-site).
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/6289652480933?text=Halo%20PT%20Mandiri%20Delta%20Teknik,%20saya%20ingin%20konsultasi%20mengenai%20layanan:%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-full items-center justify-center rounded-lg bg-[#25D366] px-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#20bd5a]"
                  >
                    Chat via WhatsApp
                  </a>
                  <Link
                    href="/request-quotation"
                    className="flex h-12 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-primary/90"
                  >
                    Jadwalkan Survey
                  </Link>
                </div>
              </Card>

              <Card className="p-6 border-bms-divider">
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary mb-4">Jam Operasional</h3>
                <ul className="space-y-2 text-sm text-bms-secondary">
                  <li className="flex justify-between border-b border-bms-divider pb-2">
                    <span>Senin - Jumat</span>
                    <span className="font-medium text-bms-primary">08:00 - 17:00</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span>Sabtu & Minggu</span>
                    <span className="font-medium text-bms-primary">Tutup</span>
                  </li>
                </ul>
              </Card>
            </div>
          </aside>
        </div>
      </Shell>
    </main>
  );
}
