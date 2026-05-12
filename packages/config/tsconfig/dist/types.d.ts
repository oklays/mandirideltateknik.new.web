export type Json = string | number | boolean | null | {
    [key: string]: Json | undefined;
} | Json[];
export type Role = "admin" | "editor";
export type BlogStatus = "draft" | "published";
export type Service = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    description: string;
    image_path: string | null;
    is_featured: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
};
export type Category = {
    id: string;
    name: string;
    slug: string;
    created_at: string;
};
export type BlogPost = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured_image_path: string | null;
    status: BlogStatus;
    published_at: string | null;
    category_id: string | null;
    seo_title: string | null;
    seo_description: string | null;
    created_at: string;
    updated_at: string;
};
export type ContactSubmission = {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    company: string | null;
    message: string;
    created_at: string;
};
export type SiteSettings = {
    id: string;
    company_name: string;
    tagline: string;
    whatsapp: string;
    email: string;
    address: string;
    hero_title: string;
    hero_subtitle: string;
    seo_defaults: Json;
    updated_at: string;
};
export type Profile = {
    id: string;
    role: Role;
    full_name: string | null;
    created_at: string;
};
export type Database = {
    public: {
        Tables: {
            blog_posts: {
                Row: BlogPost;
                Insert: Omit<BlogPost, "id" | "created_at" | "updated_at"> & {
                    id?: string;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: Partial<Omit<BlogPost, "id" | "created_at">> & {
                    updated_at?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "blog_posts_category_id_fkey";
                        columns: ["category_id"];
                        referencedRelation: "categories";
                        referencedColumns: ["id"];
                    }
                ];
            };
            categories: {
                Row: Category;
                Insert: Omit<Category, "id" | "created_at"> & {
                    id?: string;
                    created_at?: string;
                };
                Update: Partial<Omit<Category, "id" | "created_at">>;
                Relationships: [];
            };
            contacts: {
                Row: ContactSubmission;
                Insert: Omit<ContactSubmission, "id" | "created_at"> & {
                    id?: string;
                    created_at?: string;
                };
                Update: never;
                Relationships: [];
            };
            profiles: {
                Row: Profile;
                Insert: Omit<Profile, "created_at"> & {
                    created_at?: string;
                };
                Update: Partial<Omit<Profile, "created_at">>;
                Relationships: [];
            };
            services: {
                Row: Service;
                Insert: Omit<Service, "id" | "created_at" | "updated_at"> & {
                    id?: string;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: Partial<Omit<Service, "id" | "created_at">> & {
                    updated_at?: string;
                };
                Relationships: [];
            };
            site_settings: {
                Row: SiteSettings;
                Insert: Omit<SiteSettings, "id" | "updated_at"> & {
                    id?: string;
                    updated_at?: string;
                };
                Update: Partial<Omit<SiteSettings, "id">> & {
                    updated_at?: string;
                };
                Relationships: [];
            };
        };
        Views: Record<string, never>;
        Functions: Record<string, never>;
        Enums: Record<string, never>;
        CompositeTypes: Record<string, never>;
    };
};
export type DashboardSummary = {
    serviceCount: number;
    publishedPostCount: number;
    contactCount: number;
    latestContact: ContactSubmission | null;
};
export type ContactFormInput = {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
};
export type ServiceInput = Omit<Service, "id" | "created_at" | "updated_at">;
export type CategoryInput = Omit<Category, "id" | "created_at">;
export type BlogPostInput = Omit<BlogPost, "id" | "created_at" | "updated_at">;
export type SiteSettingsInput = Omit<SiteSettings, "id" | "updated_at">;
