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
      "Ready stock berbagai brand pompa air industri dengan dukungan pemilihan unit sesuai kebutuhan lapangan.",
    description:
      "<p>Kami menyediakan berbagai pompa industri untuk kebutuhan gedung, manufaktur, utility plant, dan infrastruktur air. Tim kami membantu pemilihan tipe pompa, sizing awal, hingga koordinasi pengadaan agar proses pembelian lebih efisien.</p><p>Layanan ini cocok untuk proyek baru, penggantian unit existing, maupun kebutuhan maintenance stock.</p>",
    image_path: null,
    is_featured: true,
    sort_order: 1,
    created_at: "2026-04-25T00:00:00.000Z",
    updated_at: "2026-04-25T00:00:00.000Z"
  },
  {
    id: "svc-2",
    title: "Instalasi dan Servis Pompa",
    slug: "instalasi-dan-servis-pompa",
    excerpt:
      "Perbaikan, overhoul, alignment, dan pengujian performa untuk pompa, panel listrik, dan dinamo motor.",
    description:
      "<p>Tim teknisi kami menangani instalasi baru, troubleshooting, overhoul, penggantian spare part, hingga preventive maintenance untuk menjaga performa sistem tetap stabil.</p><p>Pendekatan kami fokus pada diagnosis akar masalah, efisiensi downtime, dan rekomendasi teknis yang dapat ditindaklanjuti.</p>",
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
      "Pengadaan, instalasi, servis, dan pengembangan sistem fire hydrant untuk fasilitas komersial dan industri.",
    description:
      "<p>Kami mendukung pengadaan fire pump, panel, pillar hydrant, box hydrant, hingga servis sistem yang sudah berjalan. Setiap pekerjaan dirancang agar siap integrasi dengan kebutuhan gedung dan standar operasional keselamatan.</p><p>Layanan mencakup koordinasi lapangan, commissioning, dan evaluasi kondisi existing system.</p>",
    image_path: null,
    is_featured: true,
    sort_order: 3,
    created_at: "2026-04-25T00:00:00.000Z",
    updated_at: "2026-04-25T00:00:00.000Z"
  },
  {
    id: "svc-4",
    title: "Solusi Fluida Industri",
    slug: "solusi-fluida-industri",
    excerpt:
      "Rangkaian dukungan teknis untuk transfer fluid, booster, dewatering, dan sistem distribusi air bertekanan.",
    description:
      "<p>Kami membantu merancang solusi fluida yang lebih stabil untuk industri, utilitas bangunan, dan aplikasi proses. Fokus kami adalah performa sistem, ketahanan operasional, dan kemudahan maintenance jangka panjang.</p><p>Setiap rekomendasi mempertimbangkan kapasitas, head, kondisi media, dan target keandalan operasional.</p>",
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

