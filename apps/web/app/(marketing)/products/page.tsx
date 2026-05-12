import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllProducts } from "@mdt/lib";
import { Card, SectionHeading, Shell } from "@mdt/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk Pompa Industri, Fire Hydrant & Motor | Mandiri Delta Teknik",
  description: "Katalog produk PT Mandiri Delta Teknik. Menyediakan Pompa Ebara, Grundfos, CNP, Fire Pump, Panel Hydrant, dan Dinamo Motor untuk kebutuhan industri."
};

export default async function ProductsIndexPage() {
  const products = getAllProducts();

  // Group products by category
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <main className="py-20 md:py-24">
      <Shell className="space-y-16">
        <SectionHeading
          description="Rangkaian unit pompa, fire hydrant, dan motor listrik dari berbagai brand terkemuka untuk mendukung kelancaran operasional fasilitas Anda."
          eyebrow="Katalog Produk"
          title="Solusi Unit Handal untuk Industri & Gedung"
        />

        <div className="space-y-16">
          {categories.map((category) => {
            const categoryProducts = products.filter((p) => p.category === category);
            return (
              <section key={category} className="space-y-8">
                <div className="border-b border-bms-divider pb-4">
                  <h2 className="font-display text-3xl uppercase tracking-[0.08em] text-bms-primary">
                    {category}
                  </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.map((product) => (
                    <Card className="group flex h-full flex-col justify-between gap-6" key={product.id}>
                      <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-primary">
                          {product.category}
                        </p>
                        <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-bms-primary">
                          {product.title}
                        </h3>
                        <p className="text-sm leading-7 text-bms-secondary">
                          {product.excerpt}
                        </p>
                      </div>
                      <Link
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-colors group-hover:text-cta"
                        href={`/products/${product.slug}`}
                      >
                        Lihat Spesifikasi <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Shell>
    </main>
  );
}
