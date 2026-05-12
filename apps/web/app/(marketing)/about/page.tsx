import { getSiteSettings } from "@mdt/lib";
import { Card, SectionHeading, Shell } from "@mdt/ui";

const values = [
  {
    title: "Respons teknis",
    description: "Tim kami bergerak cepat untuk memahami kondisi lapangan dan urgensi operasional."
  },
  {
    title: "Presisi solusi",
    description: "Rekomendasi disusun berdasarkan kebutuhan sistem, bukan sekadar daftar produk."
  },
  {
    title: "Kemitraan jangka panjang",
    description: "Kami menjaga hubungan purna jual, servis, dan dukungan maintenance setelah proyek berjalan."
  }
];

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <main className="py-20 md:py-24">
      <Shell className="space-y-16">
        <SectionHeading
          description={`${settings.company_name} hadir untuk membantu perusahaan, gedung, dan fasilitas industri mendapatkan solusi pompa air dan sistem fire hydrant yang lebih andal.`}
          eyebrow="Tentang Kami"
          title="Mitra teknis untuk sistem pompa dan fluida industri"
        />

        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-5">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">
              Profil Singkat
            </p>
            <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-bms-primary">
              Kami membangun kepercayaan lewat kesiapan teknis di lapangan.
            </h2>
            <p className="text-sm leading-8 text-bms-secondary">
              Fokus utama kami adalah membantu klien mendapatkan sistem yang stabil dan mudah
              dirawat. Mulai dari pengadaan pompa industri, perbaikan unit existing, sampai sistem
              fire hydrant, setiap layanan dirancang dengan pendekatan yang praktis dan terukur.
            </p>
            <p className="text-sm leading-8 text-bms-secondary">
              Kami percaya bahwa keputusan teknis yang tepat akan mengurangi downtime, menekan
              biaya kegagalan, dan meningkatkan keandalan operasi jangka panjang.
            </p>
          </Card>

          <div className="grid gap-6">
            {values.map((value) => (
              <Card className="space-y-3" key={value.title}>
                <p className="text-xs uppercase tracking-[0.28em] text-primary">Nilai Kami</p>
                <h3 className="font-display text-3xl uppercase tracking-[0.08em] text-bms-primary">{value.title}</h3>
                <p className="text-sm leading-7 text-bms-secondary">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Shell>
    </main>
  );
}

