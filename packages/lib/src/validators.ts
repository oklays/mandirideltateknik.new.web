import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Nama wajib diisi."),
  email: z.string().email("Gunakan alamat email yang valid."),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Pesan minimal 10 karakter.")
});

export const serviceSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  excerpt: z.string().min(12),
  description: z.string().min(20),
  image_path: z.string().nullable(),
  is_featured: z.boolean(),
  sort_order: z.coerce.number().int().min(0)
});

export const categorySchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2)
});

export const blogPostSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  excerpt: z.string().min(12),
  content: z.string().min(20),
  featured_image_path: z.string().nullable(),
  status: z.enum(["draft", "published"]),
  published_at: z.string().nullable(),
  category_id: z.string().uuid().nullable(),
  seo_title: z.string().nullable(),
  seo_description: z.string().nullable()
});

export const siteSettingsSchema = z.object({
  company_name: z.string().min(3),
  tagline: z.string().min(6),
  whatsapp: z.string().min(6),
  email: z.string().email(),
  address: z.string().min(6),
  hero_title: z.string().min(8),
  hero_subtitle: z.string().min(12),
  seo_defaults: z.record(z.string(), z.any())
});

