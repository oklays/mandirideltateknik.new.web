export type Product = {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  description: string;
  applications: string[];
  features: string[];
  image_path: string | null;
  seo_title: string;
  seo_description: string;
};

export const productsData: Product[] = [
  {
    id: "prod-ebara",
    title: "Pompa Ebara",
    slug: "pompa-ebara",
    category: "Pompa Industri",
    excerpt: "Pompa centrifugal berkualitas tinggi untuk transfer air bersih, booster, dan kebutuhan industri.",
    description: "<p>Ebara adalah salah satu pemimpin global dalam industri pompa yang dikenal karena ketahanannya dan efisiensi operasional yang tinggi. Cocok digunakan pada aplikasi gedung bertingkat, pabrik, hingga infrastruktur perairan massal.</p>",
    applications: ["Transfer air bersih", "Sistem booster gedung", "Sistem pendingin (Chiller)", "Dewatering"],
    features: ["Efisiensi tinggi", "Tahan lama", "Mudah dalam perawatan", "Varian cast iron dan stainless steel"],
    image_path: null,
    seo_title: "Pompa Ebara Industri Ready Stock | PT Mandiri Delta Teknik",
    seo_description: "Supplier pompa Ebara untuk kebutuhan industri, gedung, dan utilitas. Ready stock untuk berbagai kapasitas."
  },
  {
    id: "prod-grundfos",
    title: "Pompa Grundfos",
    slug: "pompa-grundfos",
    category: "Pompa Industri",
    excerpt: "Solusi pompa hemat energi dan cerdas untuk sirkulasi air, booster, dan industri.",
    description: "<p>Grundfos memberikan solusi pompa inovatif dengan tingkat efisiensi energi tertinggi. Dilengkapi dengan teknologi pintar untuk memastikan pasokan air yang konsisten untuk aplikasi komersial maupun industrial plant.</p>",
    applications: ["Sirkulasi air panas/dingin", "Booster system", "Water treatment", "Proses industri"],
    features: ["Hemat energi", "Integrasi smart control", "Desain ringkas", "Performa presisi"],
    image_path: null,
    seo_title: "Pompa Grundfos Asli | PT Mandiri Delta Teknik",
    seo_description: "Jual Pompa Grundfos bergaransi untuk sirkulasi, booster, dan utilitas industri."
  },
  {
    id: "prod-cnp",
    title: "Pompa CNP",
    slug: "pompa-cnp",
    category: "Pompa Industri",
    excerpt: "Vertical multistage centrifugal pump handal untuk sistem RO dan boiler feed.",
    description: "<p>CNP sangat diandalkan untuk kebutuhan tekanan tinggi seperti boiler feed pump dan sistem Reverse Osmosis (RO). Tersedia dalam material stainless steel penuh yang aman untuk air minum dan cairan korosif ringan.</p>",
    applications: ["Sistem RO (Reverse Osmosis)", "Boiler feed", "High pressure wash", "Water supply"],
    features: ["Tekanan sangat tinggi", "Full stainless steel options", "Suara halus", "Instalasi vertikal hemat ruang"],
    image_path: null,
    seo_title: "Pompa CNP Multistage | PT Mandiri Delta Teknik",
    seo_description: "Distributor pompa CNP vertikal multistage untuk kebutuhan RO, boiler, dan industri."
  },
  {
    id: "prod-torishima",
    title: "Pompa Torishima",
    slug: "pompa-torishima",
    category: "Pompa Industri",
    excerpt: "Pompa sentrifugal kapasitas besar untuk irigasi, cooling tower, dan municipal water.",
    description: "<p>Torishima adalah pilihan utama untuk kapasitas transfer air skala besar. Banyak digunakan pada plant industri berat, irigasi skala besar, dan suplai air perkotaan.</p>",
    applications: ["Municipal water supply", "Irigasi", "Cooling tower besar", "Power plant"],
    features: ["Kapasitas sangat besar", "Konstruksi heavy duty", "Desain hidrolik optimal", "Sangat handal"],
    image_path: null,
    seo_title: "Pompa Torishima Kapasitas Besar | PT Mandiri Delta Teknik",
    seo_description: "Supplier pompa Torishima untuk cooling tower, irigasi, dan utilitas pabrik."
  },
  {
    id: "prod-ksb",
    title: "Pompa KSB",
    slug: "pompa-ksb",
    category: "Pompa Industri",
    excerpt: "Pompa dan valve Jerman berstandar global untuk kimia, air limbah, dan building services.",
    description: "<p>Dengan standar engineering Jerman, KSB menawarkan ketahanan ekstra untuk aplikasi berat seperti pengolahan air limbah, proses kimia, hingga sirkulasi termal ekstrim.</p>",
    applications: ["Air limbah (Wastewater)", "Chemical process", "Building services", "Thermal oil"],
    features: ["Material tahan kimia", "Performa sangat stabil", "Sertifikasi industri global", "Life cycle cost rendah"],
    image_path: null,
    seo_title: "Pompa KSB Asli | PT Mandiri Delta Teknik",
    seo_description: "Supplier Pompa KSB untuk aplikasi limbah, kimia, dan sistem utilitas."
  },
  {
    id: "prod-tsurumi",
    title: "Pompa Tsurumi",
    slug: "pompa-tsurumi",
    category: "Pompa Industri",
    excerpt: "Submersible pump terkuat untuk dewatering, air kotor, dan limbah.",
    description: "<p>Tsurumi adalah legenda dalam hal pompa celup (submersible). Sangat tangguh menghadapi kondisi ekstrim di lapangan seperti air berlumpur, proyek konstruksi, dan IPAL.</p>",
    applications: ["Dewatering konstruksi", "Pengolahan limbah (IPAL)", "Banjir & drainase", "Pertambangan"],
    features: ["Anti-wicking cable entry", "Dual inside mechanical seal", "Desain heavy duty", "Tahan abrasi"],
    image_path: null,
    seo_title: "Pompa Submersible Tsurumi | PT Mandiri Delta Teknik",
    seo_description: "Jual Pompa Tsurumi untuk limbah, IPAL, dan dewatering proyek konstruksi."
  },
  {
    id: "prod-diesel-fire",
    title: "Diesel Fire Pump",
    slug: "diesel-fire-pump",
    category: "Fire Hydrant",
    excerpt: "Pompa pemadam kebakaran bertenaga diesel sebagai back-up saat listrik padam.",
    description: "<p>Komponen paling krusial dalam sistem pemadam kebakaran. Diesel Fire Pump memastikan sistem hydrant dan sprinkler tetap mendapatkan tekanan air yang dibutuhkan meskipun sumber listrik utama gedung terputus.</p>",
    applications: ["Gedung bertingkat", "Pabrik / Warehouse", "Fasilitas Minyak & Gas", "Rumah Sakit"],
    features: ["Standar NFPA 20 (opsional)", "Panel kontrol otomatis (AMF/ATS)", "Kapasitas tangki besar", "Sistem pendingin heat exchanger"],
    image_path: null,
    seo_title: "Diesel Fire Pump NFPA | PT Mandiri Delta Teknik",
    seo_description: "Supplier Diesel Fire Pump berkualitas untuk sistem hydrant gedung dan industri."
  },
  {
    id: "prod-electric-fire",
    title: "Electric Fire Pump",
    slug: "electric-fire-pump",
    category: "Fire Hydrant",
    excerpt: "Pompa utama sistem pemadam kebakaran dengan motor listrik berkapasitas besar.",
    description: "<p>Electric Fire Pump bekerja sebagai penyuplai tekanan utama saat terjadi penurunan tekanan drastis pada sistem hydrant akibat pilar atau sprinkler yang aktif. Merupakan garis pertahanan utama dalam Fire Fighting System.</p>",
    applications: ["Gedung bertingkat", "Pabrik komersial", "Hotel & Apartemen", "Kawasan Industri"],
    features: ["End suction / Horizontal split case", "Motor listrik efisiensi tinggi", "Standar proteksi IP55+", "Integrasi dengan Fire Alarm System"],
    image_path: null,
    seo_title: "Electric Fire Pump | PT Mandiri Delta Teknik",
    seo_description: "Distributor Electric Fire Pump terpercaya untuk instalasi hydrant dan sprinkler."
  },
  {
    id: "prod-jockey-pump",
    title: "Jockey Fire Pump",
    slug: "jockey-fire-pump",
    category: "Fire Hydrant",
    excerpt: "Pompa penstabil tekanan otomatis untuk mencegah electric fire pump menyala tiba-tiba.",
    description: "<p>Jockey pump bertugas menjaga agar tekanan air di dalam pipa hydrant tetap stabil dari kebocoran kecil, sehingga pompa utama (Electric/Diesel) tidak cepat rusak akibat sering menyala mati secara tiba-tiba.</p>",
    applications: ["Sistem Hydrant", "Sistem Sprinkler", "Sistem perpipaan bertekanan"],
    features: ["Vertical multistage type", "Start/stop otomatis via pressure switch", "Tekanan tinggi, kapasitas kecil", "Hemat listrik"],
    image_path: null,
    seo_title: "Jockey Fire Pump | PT Mandiri Delta Teknik",
    seo_description: "Jockey Fire Pump untuk penstabil tekanan sistem pemadam kebakaran."
  },
  {
    id: "prod-panel-hydrant",
    title: "Panel Fire Hydrant",
    slug: "panel-fire-hydrant",
    category: "Fire Hydrant",
    excerpt: "Pusat komando kelistrikan dan kontrol logika untuk sistem pompa pemadam kebakaran.",
    description: "<p>Panel kontrol khusus yang mengatur sekuens menyalanya Jockey, Electric, dan Diesel Pump berdasarkan pembacaan pressure switch, serta memberikan alarm indikasi ke ruang kontrol utama.</p>",
    applications: ["Ruang pompa hydrant", "Integrasi MCFA gedung", "Monitoring jarak jauh"],
    features: ["Sistem Wye-Delta / Soft Starter", "Battery charger terintegrasi", "Lampu indikasi lengkap", "Standar keamanan kelistrikan industri"],
    image_path: null,
    seo_title: "Panel Kontrol Fire Hydrant | PT Mandiri Delta Teknik",
    seo_description: "Pembuatan dan perakitan Panel Fire Hydrant (Jockey, Electric, Diesel) sesuai standar."
  },
  {
    id: "prod-dinamo-teco",
    title: "Dinamo Motor TECO",
    slug: "dinamo-motor-teco",
    category: "Dinamo Motor",
    excerpt: "Motor induksi listrik standar industri yang tangguh dan mudah dirawat.",
    description: "<p>TECO menyediakan jajaran electric motor 3-phase yang sangat diandalkan untuk menggerakkan pompa, kompresor, fan, dan mesin konveyor dengan tingkat efisiensi yang teruji.</p>",
    applications: ["Penggerak pompa industri", "Blower & Fan", "Conveyor belt", "Mesin kompresor"],
    features: ["Standard IE1/IE2/IE3", "Casing cast iron kokoh", "Proteksi IP55", "Insulation class F/H"],
    image_path: null,
    seo_title: "Dinamo Motor TECO 3 Phase | PT Mandiri Delta Teknik",
    seo_description: "Distributor Dinamo Motor TECO / Electric Motor untuk penggerak pompa dan mesin industri."
  }
];

export function getAllProducts(): Product[] {
  return productsData;
}

export function getProductBySlug(slug: string): Product | null {
  return productsData.find((p) => p.slug === slug) ?? null;
}

export function getProductsByCategory(category: string): Product[] {
  return productsData.filter((p) => p.category === category);
}
