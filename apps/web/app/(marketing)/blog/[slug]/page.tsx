import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate, getBlogPostBySlug, getPublishedBlogPosts } from "@bms/lib";
import { Card, Shell } from "@bms/ui";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPublishedBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return {};

  return {
    description: post.seo_description ?? post.excerpt,
    title: post.seo_title ?? post.title
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="py-20 md:py-24">
      <Shell className="space-y-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Blog Detail
          </p>
          <h1 className="max-w-5xl font-display text-5xl uppercase tracking-[0.08em] md:text-6xl">
            {post.title}
          </h1>
          <p className="text-sm text-[var(--muted-foreground)]">{formatDate(post.published_at)}</p>
        </div>

        <Card className="prose-bms max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Card>
      </Shell>
    </main>
  );
}

