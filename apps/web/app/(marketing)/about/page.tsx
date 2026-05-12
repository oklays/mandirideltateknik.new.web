import { getSiteSettings } from "@mdt/lib";
import { Card, SectionHeading, Shell } from "@mdt/ui";
import { CheckCircle2, ShieldCheck, MapPin, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | PT Mandiri Delta Teknik",
  description: "Profil PT Mandiri Delta Teknik, supplier pompa industri, servis pompa, dan kontraktor fire hydrant berpengalaman sejak 2009."
};

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

const sectors = [
  "Pabrik Manufaktur",
  "Gedung Komersial & Perkantoran",
  "Hotel & Apartemen",
  "Pusat Perbelanjaan (Mall)",
  "Rumah Sakit",
  "Kawasan Industri",
  "Warehouse & Logistik",
  "Fasilitas Utilitas (Water Treatment)"
];

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <main className="py-20 md:py-24 bg-bms-bg min-h-screen">
      <Shell className="space-y-16">
        <SectionHeading
          description={`${settings.company_name} hadir untuk membantu perusahaan, gedung, dan fasilitas industri mendapatkan solusi pompa air dan sistem fire hydrant yang lebih andal sejak tahun 2009.`}
          eyebrow="Tentang Kami"
          title="Mitra Teknis Terpercaya untuk Sistem Pompa & Fluida Industri"
        />

        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <Card className="space-y-5 p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-primary">
                Profil Perusahaan
              </p>
              <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-bms-primary">
                Kesiapan teknis di lapangan adalah komitmen kami.
              </h2>
              <p className="text-sm leading-8 text-bms-secondary">
                Fokus utama kami adalah membantu klien mendapatkan sistem yang stabil dan mudah
                dirawat. Mulai dari pengadaan pompa industri multi-brand, perbaikan unit existing, sampai instalasi
                sistem fire hydrant, setiap layanan dirancang dengan pendekatan yang praktis dan terukur.
              </p>
              <p className="text-sm leading-8 text-bms-secondary">
                Sebagai entitas resmi, PT Mandiri Delta Teknik memiliki legalitas lengkap (NIB, NPWP) untuk mendukung proses procurement dan registrasi vendor di perusahaan Anda.
              </p>
            </Card>

            <Card className="space-y-5 p-8 border-cta/30 bg-cta/5">
              <p className="text-xs uppercase tracking-[0.28em] text-cta">
                Visi & Misi
              </p>
              <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-bms-primary">Visi</h3>
              <p className="text-sm leading-7 text-bms-secondary mb-4">
                Menjadi penyedia solusi sistem fluida dan pemadam kebakaran yang paling diandalkan oleh industri di Indonesia berkat keunggulan teknis dan kecepatan respons.
              </p>
              <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-bms-primary pt-2">Misi</h3>
              <ul className="space-y-2 text-sm leading-7 text-bms-secondary">
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Menyediakan unit dengan standar kualitas tinggi (multi-brand).</li>
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Memberikan dukungan purna jual dan servis yang responsif.</li>
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> Membantu klien menekan angka downtime operasional.</li>
              </ul>
            </Card>
          </div>

          <div className="grid gap-6">
            {values.map((value) => (
              <Card className="space-y-3 p-6" key={value.title}>
                <p className="text-xs uppercase tracking-[0.28em] text-primary">Nilai Perusahaan</p>
                <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-bms-primary">{value.title}</h3>
                <p className="text-sm leading-7 text-bms-secondary">
                  {value.description}
                </p>
              </Card>
            ))}

            <Card className="space-y-4 p-6 border-bms-divider">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="font-display text-xl uppercase tracking-[0.08em] text-bms-primary">Tim Sales Engineering</h3>
              </div>
              <p className="text-sm leading-7 text-bms-secondary">
                Didukung oleh tim engineer yang berpengalaman di lapangan. Kami bukan sekadar tim sales yang membagikan katalog, melainkan partner teknis yang akan membantu menghitung kebutuhan kapasitas (head & flow) dan memberikan rekomendasi tepat guna.
              </p>
            </Card>
          </div>
        </div>

        {/* Sectors & Area Layer */}
        <div className="grid gap-8 md:grid-cols-2 pt-8">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="h-6 w-6 text-cta" />
              <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-bms-primary">Sektor Yang Dilayani</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sectors.map((sector, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-bms-secondary">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {sector}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-cta" />
              <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-bms-primary">Area Layanan</h3>
            </div>
            <p className="text-sm leading-7 text-bms-secondary mb-4">
              Kantor pusat dan workshop kami berlokasi strategis di Cibitung, Bekasi. Memungkinkan kami untuk merespons kebutuhan klien dengan cepat, khususnya di area kawasan industri:
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full border border-bms-divider bg-slate-50 text-xs font-bold text-bms-primary">Bekasi</span>
              <span className="px-3 py-1 rounded-full border border-bms-divider bg-slate-50 text-xs font-bold text-bms-primary">Cikarang</span>
              <span className="px-3 py-1 rounded-full border border-bms-divider bg-slate-50 text-xs font-bold text-bms-primary">Karawang</span>
              <span className="px-3 py-1 rounded-full border border-bms-divider bg-slate-50 text-xs font-bold text-bms-primary">Cibitung</span>
              <span className="px-3 py-1 rounded-full border border-bms-divider bg-slate-50 text-xs font-bold text-bms-primary">Jakarta Raya</span>
              <span className="px-3 py-1 rounded-full border border-bms-divider bg-slate-50 text-xs font-bold text-bms-primary">Bogor & Depok</span>
            </div>
          </Card>
        </div>
      </Shell>
    </main>
  );
}
