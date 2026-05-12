import type { MetadataRoute } from "next";
import { getPublishedBlogPosts, getPublicServices } from "@mdt/lib";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const [posts, services] = await Promise.all([getPublishedBlogPosts(), getPublicServices()]);

  return [
    "",
    "/about",
    "/services",
    "/blog",
    "/contact",
    ...services.map((service) => `/services/${service.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`)
  ].map((path) => ({
    changeFrequency: path.startsWith("/blog/") ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
    url: `${baseUrl}${path}`
  }));
}

