import type {
  BlogPost,
  Category,
  ContactSubmission,
  DashboardSummary,
  Service,
  SiteSettings
} from "./types";

export const seedSiteSettings: SiteSettings = {
  id: "site-settings-demo",
  company_name: "PT Mandiri Delta Teknik",
  tagline: "Solusi pompa air terpercaya untuk industri, gedung, dan utilitas kritikal.",
  whatsapp: "+6289652480933",
  email: "marketing1@mandirideltateknik.com",
  address: "Ruko Central Selang Blok A.18 RT.009/RW.028 Wanasari Cibitung Kabupaten Bekasi Jawa Barat",
  hero_title: "Solusi Pompa Air Terpercaya untuk Sistem Industri dan Bangunan",
  hero_subtitle:
    "PT Mandiri Delta Teknik menghadirkan suplai pompa, instalasi, servis, dan dukungan fire hydrant dengan pendekatan teknis yang cepat, presisi, dan siap proyek.",
  seo_defaults: {
    title: "PT Mandiri Delta Teknik",
    description:
      "Supplier pompa industri, jasa servis pompa, fire hydrant system, dan solusi fluida industri."
  },
  updated_at: "2026-05-02T00:00:00.000Z"
};

export const seedServices: Service[] = [
  {
    id: "svc-1",
    title: "Supplier Pompa Industri",
    slug: "supplier-pompa-industri",
    excerpt:
      "Supplier pompa industri ready stock berbagai brand terkemuka untuk proyek gedung dan manufaktur.",
    description: `
      <p class="lead">PT Mandiri Delta Teknik menyediakan berbagai pompa industri untuk kebutuhan transfer air, booster, fire pump, wastewater, dewatering, cooling system, dan utility plant. Kami mendukung pengadaan pompa dari skala kecil hingga kapasitas besar.</p>
      
      <h3>Jenis Pompa yang Kami Sediakan</h3>
      <ul>
        <li>Centrifugal pump</li>
        <li>End suction pump</li>
        <li>Booster pump</li>
        <li>Submersible pump</li>
        <li>Fire pump (Diesel & Electric)</li>
        <li>Jockey pump</li>
        <li>Vertical multistage pump</li>
      </ul>

      <h3>Brand yang Tersedia</h3>
      <p>Kami mensuplai brand pompa terkemuka yang sudah teruji di dunia industri, antara lain: <strong>Ebara, Grundfos, CNP, Torishima, KSB, Tsurumi, Southern Cross, LEO, CRI, dan HCP.</strong></p>

      <h3>Cocok Untuk Aplikasi</h3>
      <ul>
        <li>Gedung komersial & Perkantoran</li>
        <li>Pabrik & Manufaktur</li>
        <li>Kawasan industri</li>
        <li>Hotel & Apartemen</li>
        <li>Rumah sakit</li>
        <li>Pusat perbelanjaan (Mall)</li>
        <li>Warehouse & Logistik</li>
        <li>Utility plant & Water Treatment</li>
      </ul>

      <h3>Proses Kerja Pengadaan</h3>
      <ol>
        <li><strong>Konsultasi kebutuhan:</strong> Diskusi awal mengenai target aplikasi pompa.</li>
        <li><strong>Review kapasitas dan spesifikasi:</strong> Analisis Head, Flow Rate, dan Material yang sesuai.</li>
        <li><strong>Rekomendasi unit:</strong> Pemilihan brand dan tipe yang paling efisien.</li>
        <li><strong>Penawaran harga:</strong> Pengajuan penawaran resmi untuk procurement.</li>
        <li><strong>Pengadaan:</strong> Penyediaan unit dengan lead time yang jelas.</li>
        <li><strong>Instalasi / testing (opsional):</strong> Dukungan pemasangan jika dibutuhkan.</li>
      </ol>
    `,
    image_path: null,
    is_featured: true,
    sort_order: 1,
    created_at: "2026-04-25T00:00:00.000Z",
    updated_at: "2026-04-25T00:00:00.000Z"
  },
  {
    id: "svc-2",
    title: "Servis Pompa Industri",
    slug: "servis-pompa-industri",
    excerpt:
      "Jasa servis pompa industri, overhaul, alignment, dan perbaikan untuk menjaga performa sistem operasional Anda.",
    description: `
      <p class="lead">Tim teknisi kami menangani instalasi baru, troubleshooting, overhaul, penggantian spare part, hingga preventive maintenance untuk menjaga performa sistem pompa dan panel tetap stabil.</p>
      
      <h3>Layanan Servis Kami Mencakup</h3>
      <ul>
        <li><strong>Overhaul Pompa:</strong> Pembongkaran total, pembersihan, dan penggantian komponen internal yang aus.</li>
        <li><strong>Alignment Pompa & Motor:</strong> Penyelarasan presisi menggunakan alat khusus untuk mengurangi getaran dan keausan bearing.</li>
        <li><strong>Penggantian Spare Part:</strong> Mechanical seal, bearing, impeller, dan shaft pompa.</li>
        <li><strong>Servis Panel Kontrol:</strong> Perbaikan sistem kelistrikan SDP/MDP/VSD dan penggantian kontaktor/relay.</li>
        <li><strong>Perawatan Berkala:</strong> Inspeksi rutin untuk mencegah downtime mendadak.</li>
      </ul>

      <h3>Mengapa Servis Rutin Penting?</h3>
      <p>Pompa industri yang beroperasi terus-menerus akan mengalami penurunan efisiensi. Suara berisik, getaran tinggi, atau penurunan tekanan adalah tanda awal. Servis yang tepat waktu akan menghemat biaya energi dan mencegah kerusakan fatal yang memaksa penggantian unit baru.</p>

      <h3>Proses Servis</h3>
      <ol>
        <li>Inspeksi & Diagnosa awal di lokasi (on-site).</li>
        <li>Penyusunan laporan kerusakan (troubleshooting report).</li>
        <li>Persetujuan penawaran biaya perbaikan.</li>
        <li>Pelaksanaan servis (di workshop atau on-site).</li>
        <li>Testing & Commissioning.</li>
      </ol>
    `,
    image_path: null,
    is_featured: true,
    sort_order: 2,
    created_at: "2026-04-25T00:00:00.000Z",
    updated_at: "2026-04-25T00:00:00.000Z"
  },
  {
    id: "svc-3",
    title: "Fire Hydrant System",
    slug: "fire-hydrant-system",
    excerpt:
      "Layanan pengadaan, instalasi, dan maintenance fire hydrant system lengkap dengan panel kontrol.",
    description: `
      <p class="lead">Kami mendukung pengadaan fire pump, panel, pillar hydrant, box hydrant, hingga servis sistem yang sudah berjalan. Setiap pekerjaan dirancang agar siap berintegrasi dengan standar keselamatan bangunan dan industri.</p>
      
      <h3>Cakupan Layanan Hydrant</h3>
      <ul>
        <li><strong>Suplai Pompa Pemadam:</strong> Diesel Fire Pump, Electric Fire Pump, dan Jockey Pump berstandar industri.</li>
        <li><strong>Instalasi Panel Hydrant:</strong> Perakitan panel kontrol yang mengatur logika sekuens menyalanya ketiga pompa hydrant otomatis berdasarkan sensor tekanan.</li>
        <li><strong>Aksesoris Jaringan:</strong> Penyediaan hydrant box (indoor/outdoor), hydrant pillar, fire hose, nozzle, siamese connection, dan valve.</li>
        <li><strong>Maintenance & Testing:</strong> Pengujian tekanan berkala (pressure test), pengecekan baterai diesel, dan simulasi alarm kebakaran.</li>
      </ul>

      <h3>Keunggulan Kami</h3>
      <p>Pemasangan fire hydrant tidak boleh kompromi. Kami memastikan setiap komponen, mulai dari head hidrolik hingga respons panel, dikalibrasi dengan presisi tinggi agar sistem 100% siap saat kondisi darurat.</p>
    `,
    image_path: null,
    is_featured: true,
    sort_order: 3,
    created_at: "2026-04-25T00:00:00.000Z",
    updated_at: "2026-04-25T00:00:00.000Z"
  },
  {
    id: "svc-4",
    title: "Electrical Panel & Dinamo",
    slug: "electrical-panel-dan-dinamo",
    excerpt:
      "Pembuatan panel listrik (SDP, MDP, VSD) dan suplai dinamo motor induksi untuk penggerak sistem pompa.",
    description: `
      <p class="lead">Sistem pompa tidak akan berjalan optimal tanpa dukungan kelistrikan yang baik. Kami memproduksi panel kontrol kustom dan mendistribusikan dinamo motor berkualitas untuk melengkapi instalasi mekanikal Anda.</p>
      
      <h3>Layanan Kelistrikan Industri</h3>
      <ul>
        <li><strong>Perakitan Panel Kontrol:</strong> Pembuatan panel Star-Delta, Soft Starter, VSD/VFD (Variable Speed Drive), panel booster, dan transfer switch (ATS/AMF).</li>
        <li><strong>Suplai Dinamo Motor:</strong> Penyediaan motor induksi 3-phase (TECO, Siemens, ABB, dll) untuk penggerak utama pompa dan mesin industri.</li>
        <li><strong>Upgrade Sistem:</strong> Modernisasi panel konvensional menjadi sistem inverter (VSD) untuk efisiensi energi yang jauh lebih baik.</li>
      </ul>

      <h3>Standar Keselamatan Tinggi</h3>
      <p>Setiap panel yang kami produksi melalui uji beban dan kelayakan isolasi, menggunakan komponen kontaktor dan breaker yang original demi mencegah risiko korsleting atau gagal operasi di lapangan.</p>
    `,
    image_path: null,
    is_featured: false,
    sort_order: 4,
    created_at: "2026-04-25T00:00:00.000Z",
    updated_at: "2026-04-25T00:00:00.000Z"
  }
];

export const seedCategories: Category[] = [
  {
    id: "cat-1",
    name: "Wawasan Teknis",
    slug: "wawasan-teknis",
    created_at: "2026-04-25T00:00:00.000Z"
  },
  {
    id: "cat-2",
    name: "Maintenance",
    slug: "maintenance",
    created_at: "2026-04-25T00:00:00.000Z"
  }
];

export const seedBlogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Cara Memilih Pompa Industri Sesuai Kebutuhan Sistem",
    slug: "cara-memilih-pompa-industri",
    excerpt:
      "Panduan ringkas untuk mencocokkan kapasitas, head, media, dan skenario operasional sebelum membeli pompa.",
    content:
      "<h2>Mulai dari kebutuhan sistem</h2><p>Pemilihan pompa tidak berhenti di merek. Data seperti flow rate, total dynamic head, jenis fluida, duty cycle, dan ruang instalasi perlu dipetakan sejak awal agar pompa bekerja efisien.</p><h2>Evaluasi biaya siklus hidup</h2><p>Harga pembelian awal penting, tetapi biaya listrik, spare part, dan downtime sering lebih besar dalam jangka panjang. Karena itu kami selalu mendorong pemilihan berdasarkan total cost of ownership.</p>",
    featured_image_path: null,
    status: "published",
    published_at: "2026-04-20T00:00:00.000Z",
    category_id: "cat-1",
    seo_title: "Cara Memilih Pompa Industri",
    seo_description: "Panduan memilih pompa industri berdasarkan kebutuhan sistem.",
    created_at: "2026-04-20T00:00:00.000Z",
    updated_at: "2026-04-20T00:00:00.000Z"
  },
  {
    id: "post-2",
    title: "Tanda Sistem Fire Pump Perlu Servis Lebih Cepat",
    slug: "tanda-sistem-fire-pump-perlu-servis",
    excerpt:
      "Beberapa gejala lapangan yang sering diabaikan sebelum sistem fire pump mengalami penurunan performa.",
    content:
      "<h2>Perhatikan tekanan dan suara kerja</h2><p>Perubahan tekanan, getaran, atau suara kerja yang tidak wajar sering menjadi indikasi awal adanya masalah pada alignment, mechanical seal, bearing, atau panel kontrol.</p><h2>Jangan menunggu gagal total</h2><p>Program inspeksi dan servis berkala akan menurunkan risiko downtime mendadak dan membantu memastikan sistem kesiapsiagaan tetap terjaga.</p>",
    featured_image_path: null,
    status: "published",
    published_at: "2026-04-18T00:00:00.000Z",
    category_id: "cat-2",
    seo_title: "Tanda Sistem Fire Pump Perlu Servis",
    seo_description: "Gejala umum fire pump yang perlu segera ditindaklanjuti.",
    created_at: "2026-04-18T00:00:00.000Z",
    updated_at: "2026-04-18T00:00:00.000Z"
  }
];

export const seedContacts: ContactSubmission[] = [
  {
    id: "contact-1",
    name: "Rizky Pratama",
    email: "rizky@example.com",
    phone: "081234567890",
    company: "PT Sentra Utility",
    message: "Mohon penawaran untuk fire pump dan panel hydrant.",
    created_at: "2026-04-24T08:30:00.000Z"
  }
];

export const seedDashboardSummary: DashboardSummary = {
  serviceCount: seedServices.length,
  publishedPostCount: seedBlogPosts.length,
  contactCount: seedContacts.length,
  latestContact: seedContacts[0]
};

