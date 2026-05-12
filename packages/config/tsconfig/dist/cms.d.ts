import type { BlogPost, BlogPostInput, Category, CategoryInput, ContactFormInput, ContactSubmission, DashboardSummary, Profile, Service, ServiceInput, SiteSettings, SiteSettingsInput } from "./types";
export declare function getSiteSettings(): Promise<SiteSettings>;
export declare function getPublicServices(): Promise<Service[]>;
export declare function getServiceBySlug(slug: string): Promise<Service | null>;
export declare function getFeaturedServices(): Promise<Service[]>;
export declare function getCategories(): Promise<Category[]>;
export declare function getPublishedBlogPosts(): Promise<BlogPost[]>;
export declare function getAllBlogPosts(): Promise<BlogPost[]>;
export declare function getBlogPostBySlug(slug: string): Promise<BlogPost | null>;
export declare function getContacts(): Promise<ContactSubmission[]>;
export declare function getDashboardSummary(): Promise<DashboardSummary>;
export declare function submitContact(input: ContactFormInput): Promise<{
    ok: boolean;
    mode: "demo";
} | {
    ok: boolean;
    mode: "live";
}>;
export declare function getProfileById(id: string): Promise<Profile>;
export declare function upsertService(id: string | null, input: ServiceInput): Promise<{
    ok: boolean;
    mode: "demo";
} | {
    ok: boolean;
    mode: "live";
}>;
export declare function deleteService(id: string): Promise<{
    ok: boolean;
    mode: "demo";
} | {
    ok: boolean;
    mode: "live";
}>;
export declare function upsertCategory(id: string | null, input: CategoryInput): Promise<{
    ok: boolean;
    mode: "demo";
} | {
    ok: boolean;
    mode: "live";
}>;
export declare function deleteCategory(id: string): Promise<{
    ok: boolean;
    mode: "demo";
} | {
    ok: boolean;
    mode: "live";
}>;
export declare function upsertBlogPost(id: string | null, input: BlogPostInput): Promise<{
    ok: boolean;
    mode: "demo";
} | {
    ok: boolean;
    mode: "live";
}>;
export declare function deleteBlogPost(id: string): Promise<{
    ok: boolean;
    mode: "demo";
} | {
    ok: boolean;
    mode: "live";
}>;
export declare function updateSiteSettings(id: string, input: SiteSettingsInput): Promise<{
    ok: boolean;
    mode: "demo";
} | {
    ok: boolean;
    mode: "live";
}>;
