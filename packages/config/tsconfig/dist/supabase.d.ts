import type { Database } from "./types";
export declare function createBrowserSupabaseClient(): import("@supabase/supabase-js").SupabaseClient<Database, "public", {
    Tables: {
        blog_posts: {
            Row: import("./types").BlogPost;
            Insert: Omit<import("./types").BlogPost, "id" | "created_at" | "updated_at"> & {
                id?: string;
                created_at?: string;
                updated_at?: string;
            };
            Update: Partial<Omit<import("./types").BlogPost, "id" | "created_at">> & {
                updated_at?: string;
            };
            Relationships: [{
                foreignKeyName: "blog_posts_category_id_fkey";
                columns: ["category_id"];
                referencedRelation: "categories";
                referencedColumns: ["id"];
            }];
        };
        categories: {
            Row: import("./types").Category;
            Insert: Omit<import("./types").Category, "id" | "created_at"> & {
                id?: string;
                created_at?: string;
            };
            Update: Partial<Omit<import("./types").Category, "id" | "created_at">>;
            Relationships: [];
        };
        contacts: {
            Row: import("./types").ContactSubmission;
            Insert: Omit<import("./types").ContactSubmission, "id" | "created_at"> & {
                id?: string;
                created_at?: string;
            };
            Update: never;
            Relationships: [];
        };
        profiles: {
            Row: import("./types").Profile;
            Insert: Omit<import("./types").Profile, "created_at"> & {
                created_at?: string;
            };
            Update: Partial<Omit<import("./types").Profile, "created_at">>;
            Relationships: [];
        };
        services: {
            Row: import("./types").Service;
            Insert: Omit<import("./types").Service, "id" | "created_at" | "updated_at"> & {
                id?: string;
                created_at?: string;
                updated_at?: string;
            };
            Update: Partial<Omit<import("./types").Service, "id" | "created_at">> & {
                updated_at?: string;
            };
            Relationships: [];
        };
        site_settings: {
            Row: import("./types").SiteSettings;
            Insert: Omit<import("./types").SiteSettings, "id" | "updated_at"> & {
                id?: string;
                updated_at?: string;
            };
            Update: Partial<Omit<import("./types").SiteSettings, "id">> & {
                updated_at?: string;
            };
            Relationships: [];
        };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
}, never, {
    PostgrestVersion: "12";
}>;
export declare function createServerSupabaseClient(cookieStore: {
    get: (name: string) => {
        value?: string;
    } | undefined;
} | Promise<{
    get: (name: string) => {
        value?: string;
    } | undefined;
}>): Promise<import("@supabase/supabase-js").SupabaseClient<Database, "public", {
    Tables: {
        blog_posts: {
            Row: import("./types").BlogPost;
            Insert: Omit<import("./types").BlogPost, "id" | "created_at" | "updated_at"> & {
                id?: string;
                created_at?: string;
                updated_at?: string;
            };
            Update: Partial<Omit<import("./types").BlogPost, "id" | "created_at">> & {
                updated_at?: string;
            };
            Relationships: [{
                foreignKeyName: "blog_posts_category_id_fkey";
                columns: ["category_id"];
                referencedRelation: "categories";
                referencedColumns: ["id"];
            }];
        };
        categories: {
            Row: import("./types").Category;
            Insert: Omit<import("./types").Category, "id" | "created_at"> & {
                id?: string;
                created_at?: string;
            };
            Update: Partial<Omit<import("./types").Category, "id" | "created_at">>;
            Relationships: [];
        };
        contacts: {
            Row: import("./types").ContactSubmission;
            Insert: Omit<import("./types").ContactSubmission, "id" | "created_at"> & {
                id?: string;
                created_at?: string;
            };
            Update: never;
            Relationships: [];
        };
        profiles: {
            Row: import("./types").Profile;
            Insert: Omit<import("./types").Profile, "created_at"> & {
                created_at?: string;
            };
            Update: Partial<Omit<import("./types").Profile, "created_at">>;
            Relationships: [];
        };
        services: {
            Row: import("./types").Service;
            Insert: Omit<import("./types").Service, "id" | "created_at" | "updated_at"> & {
                id?: string;
                created_at?: string;
                updated_at?: string;
            };
            Update: Partial<Omit<import("./types").Service, "id" | "created_at">> & {
                updated_at?: string;
            };
            Relationships: [];
        };
        site_settings: {
            Row: import("./types").SiteSettings;
            Insert: Omit<import("./types").SiteSettings, "id" | "updated_at"> & {
                id?: string;
                updated_at?: string;
            };
            Update: Partial<Omit<import("./types").SiteSettings, "id">> & {
                updated_at?: string;
            };
            Relationships: [];
        };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
}, never, {
    PostgrestVersion: "12";
}>>;
export declare function createReadOnlySupabaseClient(): import("@supabase/supabase-js").SupabaseClient<Database, "public", "public", {
    Tables: {
        blog_posts: {
            Row: import("./types").BlogPost;
            Insert: Omit<import("./types").BlogPost, "id" | "created_at" | "updated_at"> & {
                id?: string;
                created_at?: string;
                updated_at?: string;
            };
            Update: Partial<Omit<import("./types").BlogPost, "id" | "created_at">> & {
                updated_at?: string;
            };
            Relationships: [{
                foreignKeyName: "blog_posts_category_id_fkey";
                columns: ["category_id"];
                referencedRelation: "categories";
                referencedColumns: ["id"];
            }];
        };
        categories: {
            Row: import("./types").Category;
            Insert: Omit<import("./types").Category, "id" | "created_at"> & {
                id?: string;
                created_at?: string;
            };
            Update: Partial<Omit<import("./types").Category, "id" | "created_at">>;
            Relationships: [];
        };
        contacts: {
            Row: import("./types").ContactSubmission;
            Insert: Omit<import("./types").ContactSubmission, "id" | "created_at"> & {
                id?: string;
                created_at?: string;
            };
            Update: never;
            Relationships: [];
        };
        profiles: {
            Row: import("./types").Profile;
            Insert: Omit<import("./types").Profile, "created_at"> & {
                created_at?: string;
            };
            Update: Partial<Omit<import("./types").Profile, "created_at">>;
            Relationships: [];
        };
        services: {
            Row: import("./types").Service;
            Insert: Omit<import("./types").Service, "id" | "created_at" | "updated_at"> & {
                id?: string;
                created_at?: string;
                updated_at?: string;
            };
            Update: Partial<Omit<import("./types").Service, "id" | "created_at">> & {
                updated_at?: string;
            };
            Relationships: [];
        };
        site_settings: {
            Row: import("./types").SiteSettings;
            Insert: Omit<import("./types").SiteSettings, "id" | "updated_at"> & {
                id?: string;
                updated_at?: string;
            };
            Update: Partial<Omit<import("./types").SiteSettings, "id">> & {
                updated_at?: string;
            };
            Relationships: [];
        };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
}, {
    PostgrestVersion: "12";
}>;
export declare function createServiceRoleClient(): import("@supabase/supabase-js").SupabaseClient<Database, "public", "public", {
    Tables: {
        blog_posts: {
            Row: import("./types").BlogPost;
            Insert: Omit<import("./types").BlogPost, "id" | "created_at" | "updated_at"> & {
                id?: string;
                created_at?: string;
                updated_at?: string;
            };
            Update: Partial<Omit<import("./types").BlogPost, "id" | "created_at">> & {
                updated_at?: string;
            };
            Relationships: [{
                foreignKeyName: "blog_posts_category_id_fkey";
                columns: ["category_id"];
                referencedRelation: "categories";
                referencedColumns: ["id"];
            }];
        };
        categories: {
            Row: import("./types").Category;
            Insert: Omit<import("./types").Category, "id" | "created_at"> & {
                id?: string;
                created_at?: string;
            };
            Update: Partial<Omit<import("./types").Category, "id" | "created_at">>;
            Relationships: [];
        };
        contacts: {
            Row: import("./types").ContactSubmission;
            Insert: Omit<import("./types").ContactSubmission, "id" | "created_at"> & {
                id?: string;
                created_at?: string;
            };
            Update: never;
            Relationships: [];
        };
        profiles: {
            Row: import("./types").Profile;
            Insert: Omit<import("./types").Profile, "created_at"> & {
                created_at?: string;
            };
            Update: Partial<Omit<import("./types").Profile, "created_at">>;
            Relationships: [];
        };
        services: {
            Row: import("./types").Service;
            Insert: Omit<import("./types").Service, "id" | "created_at" | "updated_at"> & {
                id?: string;
                created_at?: string;
                updated_at?: string;
            };
            Update: Partial<Omit<import("./types").Service, "id" | "created_at">> & {
                updated_at?: string;
            };
            Relationships: [];
        };
        site_settings: {
            Row: import("./types").SiteSettings;
            Insert: Omit<import("./types").SiteSettings, "id" | "updated_at"> & {
                id?: string;
                updated_at?: string;
            };
            Update: Partial<Omit<import("./types").SiteSettings, "id">> & {
                updated_at?: string;
            };
            Relationships: [];
        };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
}, {
    PostgrestVersion: "12";
}>;
