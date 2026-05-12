import { getAllBlogPosts, getCategories } from "@bms/lib";
import { BlogManager } from "@/components/blog-manager";

export default async function BlogAdminPage() {
  const [categories, posts] = await Promise.all([getCategories(), getAllBlogPosts()]);

  return <BlogManager categories={categories} posts={posts} />;
}

