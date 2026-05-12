export declare function getEnv(): {
    DEFAULT_LOCALE: string;
    SUPABASE_STORAGE_BUCKET: string;
    NEXT_PUBLIC_ADMIN_URL?: string | undefined;
    NEXT_PUBLIC_SITE_URL?: string | undefined;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string | undefined;
    NEXT_PUBLIC_SUPABASE_URL?: string | undefined;
    SUPABASE_SERVICE_ROLE_KEY?: string | undefined;
};
export declare function hasPublicSupabaseEnv(): boolean;
export declare function hasServiceRoleEnv(): boolean;
