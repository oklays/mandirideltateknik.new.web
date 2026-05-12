import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    title: service.title
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <main className="py-20 md:py-24">
      <Shell className="space-y-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Detail Layanan
          </p>
          <h1 className="font-display text-5xl uppercase tracking-[0.08em] md:text-6xl">
            {service.title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-[var(--muted-foreground)]">
            {service.excerpt}
          </p>
        </div>

        <Card className="prose-bms max-w-none">
          <div dangerouslySetInnerHTML={{ __html: service.description }} />
        </Card>
      </Shell>
    </main>
  );
}

