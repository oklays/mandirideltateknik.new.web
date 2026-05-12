insert into public.site_settings (
  id,
  company_name,
  tagline,
  whatsapp,
  email,
  address,
  hero_title,
  hero_subtitle,
  seo_defaults
)
values (
  '0f8426e5-ecf7-4a38-b427-9fe713082b91',
  'PT Mandiri Delta Teknik',
  'Solusi pompa air terpercaya untuk industri, gedung, dan utilitas kritikal.',
  '+6289652480933',
  'marketing1@mandirideltateknik.com',
  'Ruko Central Selang Blok A.18 RT.009/RW.028 Wanasari Cibitung Kabupaten Bekasi Jawa Barat',
  'Solusi Pompa Air Terpercaya untuk Sistem Industri dan Bangunan',
  'PT Mandiri Delta Teknik menghadirkan suplai pompa, instalasi, servis, dan dukungan fire hydrant dengan pendekatan teknis yang cepat, presisi, dan siap proyek.',
  '{"title":"PT Mandiri Delta Teknik","description":"Supplier pompa industri, jasa servis pompa, fire hydrant system, dan solusi fluida industri."}'::jsonb
)
on conflict (id) do update
set
  company_name = excluded.company_name,
  tagline = excluded.tagline,
  whatsapp = excluded.whatsapp,
  email = excluded.email,
  address = excluded.address,
  hero_title = excluded.hero_title,
  hero_subtitle = excluded.hero_subtitle,
  seo_defaults = excluded.seo_defaults;

insert into public.services (id, title, slug, excerpt, description, is_featured, sort_order)
values
  (
    'eb62189c-7119-4385-b8d4-420df0cbf9a0',
    'Supplier Pompa Industri',
    'supplier-pompa-industri',
    'Ready stock berbagai brand pompa air industri dengan dukungan pemilihan unit sesuai kebutuhan lapangan.',
    '<p>Kami menyediakan berbagai pompa industri untuk kebutuhan gedung, manufaktur, utility plant, dan infrastruktur air. Tim kami membantu pemilihan tipe pompa, sizing awal, hingga koordinasi pengadaan agar proses pembelian lebih efisien.</p><p>Layanan ini cocok untuk proyek baru, penggantian unit existing, maupun kebutuhan maintenance stock.</p>',
    true,
    1
  ),
  (
    '4a1184db-7bd7-4b9b-9159-eb6f9d36420a',
    'Instalasi dan Servis Pompa',
    'instalasi-dan-servis-pompa',
    'Perbaikan, overhoul, alignment, dan pengujian performa untuk pompa, panel listrik, dan dinamo motor.',
    '<p>Tim teknisi kami menangani instalasi baru, troubleshooting, overhoul, penggantian spare part, hingga preventive maintenance untuk menjaga performa sistem tetap stabil.</p><p>Pendekatan kami fokus pada diagnosis akar masalah, efisiensi downtime, dan rekomendasi teknis yang dapat ditindaklanjuti.</p>',
    true,
    2
  ),
  (
    'cbef395e-c1ca-4a38-9eb6-003b9eb9bc48',
    'Fire Hydrant System',
    'fire-hydrant-system',
    'Pengadaan, instalasi, servis, dan pengembangan sistem fire hydrant untuk fasilitas komersial dan industri.',
    '<p>Kami mendukung pengadaan fire pump, panel, pillar hydrant, box hydrant, hingga servis sistem yang sudah berjalan. Setiap pekerjaan dirancang agar siap integrasi dengan kebutuhan gedung dan standar operasional keselamatan.</p><p>Layanan mencakup koordinasi lapangan, commissioning, dan evaluasi kondisi existing system.</p>',
    true,
    3
  ),
  (
    '99063378-a5ec-48ae-bbe0-a7a122f1ea0d',
    'Solusi Fluida Industri',
    'solusi-fluida-industri',
    'Rangkaian dukungan teknis untuk transfer fluid, booster, dewatering, dan sistem distribusi air bertekanan.',
    '<p>Kami membantu merancang solusi fluida yang lebih stabil untuk industri, utilitas bangunan, dan aplikasi proses. Fokus kami adalah performa sistem, ketahanan operasional, dan kemudahan maintenance jangka panjang.</p><p>Setiap rekomendasi mempertimbangkan kapasitas, head, kondisi media, dan target keandalan operasional.</p>',
    false,
    4
  )
on conflict (id) do nothing;

insert into public.categories (id, name, slug)
values
  ('26d82f81-bb7d-44aa-811a-06e9bc5ef6af', 'Wawasan Teknis', 'wawasan-teknis'),
  ('62151f16-f62f-4567-9d2d-e7f16c0a28e0', 'Maintenance', 'maintenance')
on conflict (id) do nothing;

insert into public.blog_posts (
  id,
  title,
  slug,
  excerpt,
  content,
  status,
  published_at,
  category_id,
  seo_title,
  seo_description
)
values
  (
    '6779bd88-f818-4261-a803-f5ea0c9a7f52',
    'Cara Memilih Pompa Industri Sesuai Kebutuhan Sistem',
    'cara-memilih-pompa-industri',
    'Panduan ringkas untuk mencocokkan kapasitas, head, media, dan skenario operasional sebelum membeli pompa.',
    '<h2>Mulai dari kebutuhan sistem</h2><p>Pemilihan pompa tidak berhenti di merek. Data seperti flow rate, total dynamic head, jenis fluida, duty cycle, dan ruang instalasi perlu dipetakan sejak awal agar pompa bekerja efisien.</p><h2>Evaluasi biaya siklus hidup</h2><p>Harga pembelian awal penting, tetapi biaya listrik, spare part, dan downtime sering lebih besar dalam jangka panjang. Karena itu kami selalu mendorong pemilihan berdasarkan total cost of ownership.</p>',
    'published',
    timezone('utc', now()) - interval '5 day',
    '26d82f81-bb7d-44aa-811a-06e9bc5ef6af',
    'Cara Memilih Pompa Industri',
    'Panduan memilih pompa industri berdasarkan kebutuhan sistem.'
  ),
  (
    '4cf6c0d3-7427-417d-b63d-ab488b628a91',
    'Tanda Sistem Fire Pump Perlu Servis Lebih Cepat',
    'tanda-sistem-fire-pump-perlu-servis',
    'Beberapa gejala lapangan yang sering diabaikan sebelum sistem fire pump mengalami penurunan performa.',
    '<h2>Perhatikan tekanan dan suara kerja</h2><p>Perubahan tekanan, getaran, atau suara kerja yang tidak wajar sering menjadi indikasi awal adanya masalah pada alignment, mechanical seal, bearing, atau panel kontrol.</p><h2>Jangan menunggu gagal total</h2><p>Program inspeksi dan servis berkala akan menurunkan risiko downtime mendadak dan membantu memastikan sistem kesiapsiagaan tetap terjaga.</p>',
    'published',
    timezone('utc', now()) - interval '7 day',
    '62151f16-f62f-4567-9d2d-e7f16c0a28e0',
    'Tanda Sistem Fire Pump Perlu Servis',
    'Gejala umum fire pump yang perlu segera ditindaklanjuti.'
  )
on conflict (id) do nothing;

insert into public.contacts (id, name, email, phone, company, message)
values (
  '37393f40-e335-40cf-8172-ad6d775f7c3b',
  'Rizky Pratama',
  'rizky@example.com',
  '081234567890',
  'PT Sentra Utility',
  'Mohon penawaran untuk fire pump dan panel hydrant.'
)
on conflict (id) do nothing;
