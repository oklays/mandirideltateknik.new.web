import Link from "next/link";
import { ArrowRight, ShieldCheck, Wrench } from "lucide-react";
import { getFeaturedServices, getPublishedBlogPosts, getSiteSettings } from "@mdt/lib";
import { Badge, Card, SectionHeading, Shell } from "@mdt/ui";
import { PromoSlider } from "../../components/promo-slider";
import { ProductCategories } from "../../components/product-categories";
import { PortfolioCarousel } from "../../components/portfolio-carousel";
import { TestimonialsCarousel } from "../../components/testimonials-carousel";

const proofPoints = [
  "Supplier pompa industri multi-brand",
  "Servis dan overhoul pompa",
  "Fire hydrant system",
  "Dukungan teknis responsif"
];

const portfolioHighlights = [
  {
    title: "Penguatan Sistem Pompa Gedung Komersial",
    client: "Gedung Komersial (Jakarta)",
    problem: "Pompa booster existing sering over-heat dan tekanan tidak stabil di lantai atas.",
    solution: "Penggantian dengan Vertical Multistage Pump + panel VSD untuk efisiensi energi.",
    result: "Tekanan air stabil 24/7 dan penghematan konsumsi listrik pompa hingga 30%."
  },
  {
    title: "Peremajaan Fire Pump dan Panel Hydrant",
    client: "Kawasan Pabrik Manufaktur (Cikarang)",
    problem: "Diesel fire pump sulit distarter otomatis dan panel alarm tidak responsif.",
    solution: "Overhaul total diesel pump, penggantian modul kontrol AMF, dan kalibrasi pressure switch.",
    result: "Sistem hydrant kembali lulus uji pressure test dan siap beroperasi otomatis."
  },
  {
    title: "Instalasi Submersible Sewage Pump",
    client: "Fasilitas IPAL Industri (Bekasi)",
    problem: "Pompa air limbah existing sering macet akibat material padat.",
    solution: "Suplai dan instalasi Heavy Duty Submersible Pump tipe cutter/grinder.",
    result: "Proses transfer limbah lancar tanpa insiden clogging selama 1 tahun terakhir."
  }
];

const whyChooseUs = [
  "Berpengalaman sejak 2009",
  "Dukungan sales engineering",
  "Multi-brand pump supplier",
  "Siap membantu sizing awal",
  "Dukungan end-to-end (Suplai, Instalasi, Servis)",
  "Respons teknis cepat"
];

const trustedSectors = [
  "Gedung Komersial", "Pabrik Manufaktur", "Kawasan Industri", "Hotel & Apartemen", "Rumah Sakit", "Logistik & Warehouse"
];

export default async function HomePage() {
  const [services, posts, settings] = await Promise.all([
    getFeaturedServices(),
    getPublishedBlogPosts(),
    getSiteSettings()
  ]);

  return (
    <main>
      <PromoSlider />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/background-1-1.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />
        </div>
        <Shell className="relative z-10 grid gap-12 py-20 md:grid-cols-2 md:py-32">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
              Industrial Premium Profile
            </span>
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cta">
                Solusi Pompa Air Terpercaya
              </p>
              <h1 className="max-w-4xl font-display text-4xl uppercase leading-tight tracking-[0.04em] text-white sm:text-5xl md:text-8xl">
                {settings.hero_title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-blue-100 overflow-hidden md:text-lg md:leading-8">
                {settings.hero_subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex h-14 items-center justify-center rounded-lg bg-cta px-6 text-base font-medium uppercase tracking-[0.08em] text-bms-primary shadow-glow transition hover:bg-cta-hover"
                href="/request-quotation"
              >
                Minta Penawaran Pompa
              </Link>
              <Link
                className="inline-flex h-14 items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 text-base font-medium uppercase tracking-[0.08em] text-white transition hover:bg-white/20"
                href="/services"
              >
                Lihat Layanan
              </Link>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {proofPoints.map((point) => (
                <div
                  className="stagger-in flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white"
                  key={point}
                >
                  <ShieldCheck className="h-4 w-4 text-cta" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div>{/* Empty right column for background image visibility */}</div>
        </Shell>
      </section>

      <section className="bg-bms-bg py-24">
        <Shell className="space-y-12">
          <SectionHeading
            description="Empat pilar utama layanan kami dirancang untuk mendukung pengadaan, kestabilan operasional, dan kesiapan sistem air di lingkungan industri maupun komersial."
            eyebrow="Layanan Utama"
            title="Layanan yang langsung menjawab kebutuhan sistem"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Card className="group flex h-full flex-col justify-between gap-6" key={service.id}>
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">
                    {service.slug}
                  </p>
                  <h3 className="font-display text-3xl uppercase tracking-[0.08em] text-bms-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-7 text-bms-secondary">
                    {service.excerpt}
                  </p>
                </div>
                <Link
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-colors group-hover:text-cta"
                  href={`/services/${service.slug}`}
                >
                  Pelajari lebih lanjut <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Shell>
      </section>

      {/* Trusted Sectors */}
      <section className="border-y border-bms-divider bg-white py-12">
        <Shell>
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bms-secondary text-center">
              Telah Dipercaya Oleh Berbagai Sektor Industri
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {trustedSectors.map((sector) => (
                <div key={sector} className="px-4 py-2 rounded-full border border-bms-divider bg-bms-bg text-sm font-medium text-bms-primary">
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <section className="border-y border-bms-divider bg-bms-section py-24">
        <Shell className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-primary/10">
            <img 
              src="/background-1-1.png" 
              alt="Industrial Facility Image" 
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
          
          <div className="space-y-8">
            <SectionHeading
              description="Pendekatan kami menggabungkan kecepatan respons, analisis teknis, dan orientasi hasil lapangan sehingga solusi yang diberikan tidak berhenti di penawaran, tetapi benar-benar siap dijalankan."
              eyebrow="Tentang Kami"
              title="Bukan sekadar menjual unit, tetapi menyiapkan sistem"
            />
            <div className="grid gap-6">
              {portfolioHighlights.map((highlight) => (
                <div
                  className="rounded-xl border border-bms-divider bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  key={highlight.title}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                    Case Study
                  </p>
                  <h3 className="font-display text-xl uppercase tracking-[0.08em] text-bms-primary mb-4">
                    {highlight.title}
                  </h3>
                  <div className="space-y-2 text-sm text-bms-secondary">
                    <p><strong className="text-bms-primary">Klien:</strong> {highlight.client}</p>
                    <p><strong className="text-bms-primary">Masalah:</strong> {highlight.problem}</p>
                    <p><strong className="text-bms-primary">Solusi:</strong> {highlight.solution}</p>
                    <p><strong className="text-cta">Hasil:</strong> {highlight.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      {/* Why Choose Us */}
      <section className="bg-bms-bg py-24">
        <Shell>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <SectionHeading
                description="Sebagai mitra pengadaan dan servis, kami memastikan setiap klien mendapatkan rekomendasi teknis yang efisien dan tidak over-spec."
                eyebrow="Mengapa Kami?"
                title="Mengapa Memilih PT Mandiri Delta Teknik?"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((reason, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-white border border-bms-divider shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-cta shrink-0" />
                  <span className="text-sm font-medium text-bms-primary">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <ProductCategories />

      <PortfolioCarousel />

      <TestimonialsCarousel />

      <section className="bg-bms-bg py-24">
        <Shell className="space-y-12">
          <SectionHeading
            description="Artikel singkat untuk membantu tim operasional dan procurement mengambil keputusan yang lebih tepat."
            eyebrow="Insights"
            title="Wawasan teknis terbaru"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {posts.slice(0, 2).map((post) => (
              <Card className="space-y-6" key={post.id}>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">
                    Artikel Pilihan
                  </p>
                  <h3 className="font-display text-3xl uppercase tracking-[0.08em] text-bms-primary">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-7 text-bms-secondary">
                    {post.excerpt}
                  </p>
                </div>
                <Link
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-colors hover:text-cta"
                  href={`/blog/${post.slug}`}
                >
                  Baca artikel <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Shell>
      </section>

      <section className="pb-24">
        <Shell>
          <Card className="grid gap-8 overflow-hidden p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Ada kebutuhan?
              </p>
              <h2 className="font-display text-4xl uppercase tracking-[0.08em] md:text-5xl">
                Segera hubungi kami untuk konsultasi pompa, servis, atau fire hydrant.
              </h2>
            </div>
            <Link
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-6 text-base font-medium uppercase tracking-[0.08em] text-white shadow-glow transition hover:bg-primary/90 whitespace-nowrap"
              href="/request-quotation"
            >
              Minta Penawaran
            </Link>
          </Card>
        </Shell>
      </section>
    </main>
  );
}
