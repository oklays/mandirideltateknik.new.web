import { z } from "zod";
export declare const contactFormSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    company: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    name: string;
    email: string;
    phone?: string | undefined;
    company?: string | undefined;
}, {
    message: string;
    name: string;
    email: string;
    phone?: string | undefined;
    company?: string | undefined;
}>;
export declare const serviceSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodString;
    excerpt: z.ZodString;
    description: z.ZodString;
    image_path: z.ZodNullable<z.ZodString>;
    is_featured: z.ZodBoolean;
    sort_order: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    slug: string;
    excerpt: string;
    description: string;
    image_path: string | null;
    is_featured: boolean;
    sort_order: number;
}, {
    title: string;
    slug: string;
    excerpt: string;
    description: string;
    image_path: string | null;
    is_featured: boolean;
    sort_order: number;
}>;
export declare const categorySchema: z.ZodObject<{
    name: z.ZodString;
    slug: z.ZodString;
}, "strip", z.ZodTypeAny, {
    slug: string;
    name: string;
}, {
    slug: string;
    name: string;
}>;
export declare const blogPostSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodString;
    excerpt: z.ZodString;
    content: z.ZodString;
    featured_image_path: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["draft", "published"]>;
    published_at: z.ZodNullable<z.ZodString>;
    category_id: z.ZodNullable<z.ZodString>;
    seo_title: z.ZodNullable<z.ZodString>;
    seo_description: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "draft" | "published";
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured_image_path: string | null;
    published_at: string | null;
    category_id: string | null;
    seo_title: string | null;
    seo_description: string | null;
}, {
    status: "draft" | "published";
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured_image_path: string | null;
    published_at: string | null;
    category_id: string | null;
    seo_title: string | null;
    seo_description: string | null;
}>;
export declare const siteSettingsSchema: z.ZodObject<{
    company_name: z.ZodString;
    tagline: z.ZodString;
    whatsapp: z.ZodString;
    email: z.ZodString;
    address: z.ZodString;
    hero_title: z.ZodString;
    hero_subtitle: z.ZodString;
    seo_defaults: z.ZodRecord<z.ZodString, z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    email: string;
    company_name: string;
    tagline: string;
    whatsapp: string;
    address: string;
    hero_title: string;
    hero_subtitle: string;
    seo_defaults: Record<string, any>;
}, {
    email: string;
    company_name: string;
    tagline: string;
    whatsapp: string;
    address: string;
    hero_title: string;
    hero_subtitle: string;
    seo_defaults: Record<string, any>;
}>;
