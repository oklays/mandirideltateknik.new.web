import { getSiteSettings } from "@mdt/lib";
import { Card, SectionHeading, Shell } from "@mdt/ui";
import { ContactForm } from "@/components/contact-form";

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <main className="py-20 md:py-24">
      <Shell className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-8">
          <SectionHeading
            description="Sampaikan kebutuhan pengadaan, servis, fire hydrant, atau konsultasi teknis. Tim kami akan membantu menindaklanjuti dengan cepat."
            eyebrow="Kontak"
            title="Mari mulai diskusi kebutuhan sistem Anda"
          />
          <Card className="space-y-4">
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
          </Card>
        </div>

        <ContactForm />
      </Shell>

      <Shell className="mt-20">
        <div className="mb-8">
          <SectionHeading
            description="Kunjungi kantor pusat kami untuk berkonsultasi secara langsung mengenai kebutuhan sistem industri Anda."
            eyebrow="Lokasi Kami"
            title="Temukan Kami di Peta"
          />
        </div>
        <div className="overflow-hidden rounded-xl border border-bms-divider shadow-sm h-[450px] relative">
          <iframe 
            src="https://maps.google.com/maps?q=-6.2560979,107.0853128+(PT.+MANDIRI+DELTA+TEKNIK)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="Lokasi PT. MANDIRI DELTA TEKNIK"
          ></iframe>
        </div>
        <div className="mt-4 text-right">
          <a 
            href="https://www.google.com/maps/place/PT.+MANDIRI+DELTA+TEKNIK/@-6.2560926,107.0827379,924m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e698f8cd367510f:0x910453e02fb05226!8m2!3d-6.2560979!4d107.0853128!16s%2Fg%2F11yk0stq6f?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-primary hover:text-cta transition-colors"
          >
            Buka di Google Maps <span className="text-lg leading-none">›</span>
          </a>
        </div>
      </Shell>
    </main>
  );
}

