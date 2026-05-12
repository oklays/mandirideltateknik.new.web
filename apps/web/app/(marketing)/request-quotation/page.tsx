import { getSiteSettings } from "@mdt/lib";
import { Card, SectionHeading, Shell } from "@mdt/ui";
import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Quotation (RFQ) | PT Mandiri Delta Teknik",
  description: "Minta penawaran harga (quotation) untuk kebutuhan suplai pompa industri, instalasi fire hydrant, atau servis pompa. Tim sales engineering kami akan merespons dengan cepat."
};

export default async function RequestQuotationPage() {
  const settings = await getSiteSettings();

  return (
    <main className="py-20 md:py-24 bg-bms-bg min-h-screen">
      <Shell className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-8">
          <SectionHeading
            description="Kirimkan spesifikasi proyek, brand yang diinginkan, serta target operasional Anda. Tim procurement atau engineering kami akan memberikan penawaran harga (Quotation) yang akurat dan kompetitif."
            eyebrow="Request For Quotation (RFQ)"
            title="Minta Penawaran Kebutuhan Sistem Anda"
          />
          <Card className="space-y-6 p-6 border-cta/30 bg-cta/5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">Jalur Fast Track</p>
              <h3 className="mt-2 text-xl font-display uppercase tracking-[0.08em] text-bms-primary">Butuh Respons Cepat?</h3>
              <p className="mt-2 text-sm text-bms-secondary leading-7">
                Jika Anda memiliki Bill of Quantity (BoQ) atau spesifikasi Nameplate Pompa existing, silakan hubungi WhatsApp Sales Engineering kami langsung untuk mempercepat proses identifikasi.
              </p>
            </div>
            <div className="space-y-4 pt-4 border-t border-bms-divider">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Sales Engineering 1</p>
                <p className="mt-1 text-base text-bms-primary font-medium">0896-5248-0933 (WhatsApp)</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Sales Engineering 2</p>
                <p className="mt-1 text-base text-bms-primary font-medium">0858-1111-1856 (WhatsApp)</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Sales Engineering 3</p>
                <p className="mt-1 text-base text-bms-primary font-medium">0812-1724-1737 (WhatsApp)</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Email</p>
                <p className="mt-1 text-base text-bms-primary font-medium">marketing1@mandirideltateknik.com</p>
              </div>
            </div>
          </Card>

          <Card className="space-y-4 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-bms-primary">Proses Pengajuan:</h3>
            <ul className="space-y-3 text-sm text-bms-secondary">
              <li className="flex gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</span>
                Isi form dengan detail spesifikasi/kebutuhan.
              </li>
              <li className="flex gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</span>
                Tim Sales Engineering akan mereview data (1x24 jam kerja).
              </li>
              <li className="flex gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</span>
                Penerbitan Penawaran Resmi (Quotation) via Email / WA.
              </li>
            </ul>
          </Card>
        </div>

        <div>
          <ContactForm />
        </div>
      </Shell>
    </main>
  );
}
