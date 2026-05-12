import Link from "next/link";
import { getPublicServices } from "@bms/lib";
import { Card, SectionHeading, Shell } from "@bms/ui";

export default async function ServicesPage() {
  const services = await getPublicServices();

  return (
    <main className="py-20 md:py-24">
      <Shell className="space-y-12">
        <SectionHeading
          description="Seluruh layanan kami dirancang untuk membantu proses pengadaan, kesiapan sistem, dan keberlangsungan operasional fasilitas Anda."
          eyebrow="Layanan"
          title="Layanan berbasis kebutuhan teknis lapangan"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card className="space-y-5" key={service.id}>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">{service.slug}</p>
              <h2 className="font-display text-4xl uppercase tracking-[0.08em]">{service.title}</h2>
              <p className="text-sm leading-7 text-[var(--muted-foreground)]">{service.excerpt}</p>
              <Link className="text-sm font-semibold uppercase tracking-[0.18em]" href={`/services/${service.slug}`}>
                Lihat detail
              </Link>
            </Card>
          ))}
        </div>
      </Shell>
    </main>
  );
}

