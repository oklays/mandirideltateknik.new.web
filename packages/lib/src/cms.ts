import { createReadOnlySupabaseClient, createServiceRoleClient } from "./supabase";
import {
  seedBlogPosts,
  seedCategories,
  seedContacts,
  seedDashboardSummary,
  seedServices,
  seedSiteSettings
} from "./content";
import { hasPublicSupabaseEnv, hasServiceRoleEnv } from "./env";
import type {
  BlogPost,
  BlogPostInput,
  Category,
  CategoryInput,
  ContactFormInput,
  ContactSubmission,
  DashboardSummary,
  Profile,
  Service,
  ServiceInput,
  SiteSettings,
  SiteSettingsInput
} from "./types";

function sortServices(services: Service[]) {
  return [...services].sort((a, b) => a.sort_order - b.sort_order);
}

function sortPosts(posts: BlogPost[]) {
  return [...posts].sort((a, b) => {
    const aDate = a.published_at ?? a.created_at;
    const bDate = b.published_at ?? b.created_at;

    return bDate.localeCompare(aDate);
  });
}

export async function getSiteSettings() {
  if (!hasPublicSupabaseEnv()) return seedSiteSettings;

  try {
    const supabase = createReadOnlySupabaseClient();
    const { data, error } = await supabase
      .from("site_settings")
      .select("*")
      .limit(1)
      .single();

    if (error || !data) return seedSiteSettings;

    return data as SiteSettings;
  } catch {
    return seedSiteSettings;
  }
}

export async function getPublicServices() {
  if (!hasPublicSupabaseEnv()) return sortServices(seedServices);

  try {
    const supabase = createReadOnlySupabaseClient();
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data) return sortServices(seedServices);

    return data as Service[];
  } catch {
    return sortServices(seedServices);
  }
}

export async function getServiceBySlug(slug: string) {
  const services = await getPublicServices();
  return services.find((service) => service.slug === slug) ?? null;
}

export async function getFeaturedServices() {
  const services = await getPublicServices();
  return services.filter((service) => service.is_featured);
}

export async function getCategories() {
  if (!hasPublicSupabaseEnv()) return seedCategories;

  try {
    const supabase = createReadOnlySupabaseClient();
    const { data, error } = await supabase.from("categories").select("*").order("name");

    if (error || !data) return seedCategories;

    return data as Category[];
  } catch {
    return seedCategories;
  }
}

export async function getPublishedBlogPosts() {
  if (!hasPublicSupabaseEnv()) return sortPosts(seedBlogPosts.filter((post) => post.status === "published"));

  try {
    const supabase = createReadOnlySupabaseClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error || !data) return sortPosts(seedBlogPosts.filter((post) => post.status === "published"));

    return data as BlogPost[];
  } catch {
    return sortPosts(seedBlogPosts.filter((post) => post.status === "published"));
  }
}

export async function getAllBlogPosts() {
  if (!hasServiceRoleEnv()) return sortPosts(seedBlogPosts);

  try {
    const supabase = createServiceRoleClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) return sortPosts(seedBlogPosts);

    return data as BlogPost[];
  } catch {
    return sortPosts(seedBlogPosts);
  }
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await getPublishedBlogPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function getContacts() {
  if (!hasServiceRoleEnv()) return seedContacts;

  try {
    const supabase = createServiceRoleClient();
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) return seedContacts;

    return data as ContactSubmission[];
  } catch {
    return seedContacts;
  }
}

export async function getDashboardSummary() {
  if (!hasServiceRoleEnv()) return seedDashboardSummary;

  try {
    const [services, posts, contacts] = await Promise.all([
      getPublicServices(),
      getPublishedBlogPosts(),
      getContacts()
    ]);

    const summary: DashboardSummary = {
      serviceCount: services.length,
      publishedPostCount: posts.length,
      contactCount: contacts.length,
      latestContact: contacts[0] ?? null
    };

    return summary;
  } catch {
    return seedDashboardSummary;
  }
}

export async function submitContact(input: ContactFormInput) {
  if (!hasServiceRoleEnv()) {
    return { ok: true, mode: "demo" as const };
  }

  const supabase = createServiceRoleClient();
  const { error } = await supabase.from("contacts").insert({
    company: input.company ?? null,
    email: input.email,
    message: input.message,
    name: input.name,
    phone: input.phone ?? null
  });

  if (error) {
    throw new Error(error.message);
  }

  return { ok: true, mode: "live" as const };
}

export async function getProfileById(id: string) {
  if (!hasServiceRoleEnv()) {
    return {
      id,
      role: "admin",
      full_name: "Demo Admin",
      created_at: new Date().toISOString()
    } as Profile;
  }

  const supabase = createServiceRoleClient();
  const { data, error } = await supabase.from("profiles").select("*").eq("id", id).single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Profile;
}

export async function upsertService(id: string | null, input: ServiceInput) {
  if (!hasServiceRoleEnv()) {
    return { ok: true, mode: "demo" as const };
  }

  const supabase = createServiceRoleClient();
  const payload = {
    ...input,
    updated_at: new Date().toISOString()
  };

  const query = id
    ? supabase.from("services").update(payload).eq("id", id)
    : supabase.from("services").insert(payload);

  const { error } = await query;

  if (error) throw new Error(error.message);

  return { ok: true, mode: "live" as const };
}

export async function deleteService(id: string) {
  if (!hasServiceRoleEnv()) return { ok: true, mode: "demo" as const };

  const supabase = createServiceRoleClient();
  const { error } = await supabase.from("services").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return { ok: true, mode: "live" as const };
}

export async function upsertCategory(id: string | null, input: CategoryInput) {
  if (!hasServiceRoleEnv()) {
    return { ok: true, mode: "demo" as const };
  }

  const supabase = createServiceRoleClient();
  const query = id
    ? supabase.from("categories").update(input).eq("id", id)
    : supabase.from("categories").insert(input);

  const { error } = await query;

  if (error) throw new Error(error.message);

  return { ok: true, mode: "live" as const };
}

export async function deleteCategory(id: string) {
  if (!hasServiceRoleEnv()) return { ok: true, mode: "demo" as const };

  const supabase = createServiceRoleClient();
  const { error } = await supabase.from("categories").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return { ok: true, mode: "live" as const };
}

export async function upsertBlogPost(id: string | null, input: BlogPostInput) {
  if (!hasServiceRoleEnv()) {
    return { ok: true, mode: "demo" as const };
  }

  const supabase = createServiceRoleClient();
  const payload = {
    ...input,
    updated_at: new Date().toISOString()
  };

  const query = id
    ? supabase.from("blog_posts").update(payload).eq("id", id)
    : supabase.from("blog_posts").insert(payload);

  const { error } = await query;

  if (error) throw new Error(error.message);

  return { ok: true, mode: "live" as const };
}

export async function deleteBlogPost(id: string) {
  if (!hasServiceRoleEnv()) return { ok: true, mode: "demo" as const };

  const supabase = createServiceRoleClient();
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return { ok: true, mode: "live" as const };
}

export async function updateSiteSettings(id: string, input: SiteSettingsInput) {
  if (!hasServiceRoleEnv()) {
    return { ok: true, mode: "demo" as const };
  }

  const supabase = createServiceRoleClient();
  const { error } = await supabase
    .from("site_settings")
    .update({
      ...input,
      updated_at: new Date().toISOString()
    })
    .eq("id", id);

  if (error) throw new Error(error.message);

  return { ok: true, mode: "live" as const };
}
