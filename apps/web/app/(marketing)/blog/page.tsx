import Link from "next/link";
import { formatDate, getCategories, getPublishedBlogPosts } from "@bms/lib";
import { Card, SectionHeading, Shell } from "@bms/ui";

export default async function BlogPage() {
  const [categories, posts] = await Promise.all([getCategories(), getPublishedBlogPosts()]);
  const categoryMap = new Map(categories.map((category) => [category.id, category.name]));

  return (
    <main className="py-20 md:py-24">
      <Shell className="space-y-12">
        <SectionHeading
          description="Konten yang membantu tim operasional, procurement, dan manajemen fasilitas memahami keputusan teknis dengan lebih cepat."
          eyebrow="Blog"
          title="Insight praktis dari dunia pompa dan utilitas"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
             <Card className="flex flex-col group overflow-hidden border border-bms-divider shadow-sm hover:shadow-md transition-shadow p-0" key={post.id}>
               <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                 {post.featured_image_path ? (
                    <img src={post.featured_image_path} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 ) : (
                    <img src="/background-1-1.png" alt={post.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                 )}
               </div>
               <div className="p-6 flex flex-col flex-grow">
                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                   {categoryMap.get(post.category_id ?? "") ?? "Artikel"}
                 </p>
                 <h2 className="font-display text-2xl uppercase tracking-[0.08em] text-bms-primary mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                   {post.title}
                 </h2>
                 <p className="text-sm leading-relaxed text-bms-secondary mb-6 line-clamp-3 flex-grow">
                   {post.excerpt}
                 </p>
                 <div className="flex items-center justify-between mt-auto pt-4 border-t border-bms-divider">
                   <p className="text-xs font-medium text-slate-400">
                     {formatDate(post.published_at)}
                   </p>
                   <Link className="text-xs font-bold uppercase tracking-[0.18em] text-primary hover:text-cta transition-colors" href={`/blog/${post.slug}`}>
                     Baca artikel →
                   </Link>
                 </div>
               </div>
             </Card>
          ))}
        </div>
      </Shell>
    </main>
  );
}

