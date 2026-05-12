import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return {
    host: baseUrl,
    rules: {
      allow: "/",
      userAgent: "*"
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
