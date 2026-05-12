"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { BlogPost, BlogPostInput, Category } from "@bms/lib";
import { blogPostSchema, slugify } from "@bms/lib";
import { Button, Card, Input, Textarea } from "@bms/ui";
import { RichTextEditor } from "./rich-text-editor";

type BlogManagerProps = {
  categories: Category[];
  posts: BlogPost[];
};

const emptyValues: BlogPostInput = {
  category_id: null,
  content: "",
  excerpt: "",
  featured_image_path: null,
  published_at: new Date().toISOString(),
  seo_description: null,
  seo_title: null,
  slug: "",
  status: "draft",
  title: ""
};

export function BlogManager({ categories, posts }: BlogManagerProps) {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(posts[0]?.id ?? null);
  const [message, setMessage] = useState<string | null>(null);
  const selectedPost = useMemo(
    () => posts.find((post) => post.id === selectedId),
    [posts, selectedId]
  );

  const { handleSubmit, register, reset, setValue, watch } = useForm<BlogPostInput>({
    defaultValues: selectedPost
      ? {
          category_id: selectedPost.category_id,
          content: selectedPost.content,
          excerpt: selectedPost.excerpt,
          featured_image_path: selectedPost.featured_image_path,
          published_at: selectedPost.published_at,
          seo_description: selectedPost.seo_description,
          seo_title: selectedPost.seo_title,
          slug: selectedPost.slug,
          status: selectedPost.status,
          title: selectedPost.title
        }
      : emptyValues
  });

  async function uploadImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      body: formData,
      method: "POST"
    });

    const result = (await response.json()) as { message?: string; path?: string };

    if (!response.ok || !result.path) {
      throw new Error(result.message ?? "Upload gagal.");
    }

    setValue("featured_image_path", result.path);
    setMessage("Media berhasil diunggah.");
  }

  async function onSubmit(values: BlogPostInput) {
    const parsed = blogPostSchema.safeParse(values);
    if (!parsed.success) {
      setMessage(parsed.error.issues[0]?.message ?? "Data artikel tidak valid.");
      return;
    }

    const response = await fetch("/api/blog-posts", {
      body: JSON.stringify({
        id: selectedId,
        ...parsed.data
      }),
      headers: { "Content-Type": "application/json" },
      method: selectedId ? "PUT" : "POST"
    });

    const result = (await response.json()) as { message: string };
    setMessage(result.message);
    if (response.ok) router.refresh();
  }

  async function removePost(id: string) {
    const response = await fetch("/api/blog-posts", {
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
      method: "DELETE"
    });
    const result = (await response.json()) as { message: string };
    setMessage(result.message);
    if (response.ok) {
      setSelectedId(null);
      reset(emptyValues);
      router.refresh();
    }
  }

  function selectForEdit(post: BlogPost) {
    setSelectedId(post.id);
    reset({
      category_id: post.category_id,
      content: post.content,
      excerpt: post.excerpt,
      featured_image_path: post.featured_image_path,
      published_at: post.published_at,
      seo_description: post.seo_description,
      seo_title: post.seo_title,
      slug: post.slug,
      status: post.status,
      title: post.title
    });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
      <Card className="space-y-4 bg-white/90">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl uppercase tracking-[0.08em]">Artikel</h2>
          <Button
            onClick={() => {
              setSelectedId(null);
              reset(emptyValues);
            }}
            size="sm"
            variant="secondary"
          >
            Baru
          </Button>
        </div>

        <div className="space-y-3">
          {posts.map((post) => (
            <div className="rounded-2xl border border-black/10 bg-white px-4 py-4" key={post.id}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-1">
                  <h3 className="font-display text-2xl uppercase tracking-[0.08em]">{post.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {post.status === "published" ? "Published" : "Draft"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => selectForEdit(post)} size="sm" variant="secondary">
                    Edit
                  </Button>
                  <Button onClick={() => removePost(post.id)} size="sm" variant="danger">
                    Hapus
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="space-y-5 bg-white/90">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
            {selectedId ? "Edit artikel" : "Tambah artikel"}
          </p>
          <h2 className="font-display text-3xl uppercase tracking-[0.08em]">
            Form pengelolaan blog
          </h2>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="space-y-2 text-sm">
            <span>Judul</span>
            <Input
              {...register("title")}
              onBlur={(event) => {
                if (!watch("slug")) {
                  setValue("slug", slugify(event.target.value));
                }
              }}
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span>Slug</span>
              <Input {...register("slug")} />
            </label>
            <label className="space-y-2 text-sm">
              <span>Status</span>
              <select
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm"
                {...register("status")}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span>Kategori</span>
              <select
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm"
                {...register("category_id")}
              >
                <option value="">Tanpa kategori</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm">
              <span>Tanggal publish</span>
              <Input {...register("published_at")} type="datetime-local" />
            </label>
          </div>

          <label className="space-y-2 text-sm">
            <span>Excerpt</span>
            <Textarea {...register("excerpt")} className="min-h-[120px]" />
          </label>

          <div className="space-y-2 text-sm">
            <span>Konten artikel</span>
            <RichTextEditor onChange={(value) => setValue("content", value)} value={watch("content")} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span>SEO title</span>
              <Input {...register("seo_title")} />
            </label>
            <label className="space-y-2 text-sm">
              <span>SEO description</span>
              <Input {...register("seo_description")} />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <label className="space-y-2 text-sm">
              <span>Featured image path</span>
              <Input {...register("featured_image_path")} />
            </label>
            <label className="space-y-2 text-sm">
              <span className="block">Upload image</span>
              <input
                accept="image/*"
                className="block text-sm"
                onChange={async (event) => {
                  const file = event.target.files?.[0];
                  if (!file) return;
                  await uploadImage(file);
                }}
                type="file"
              />
            </label>
          </div>

          {message ? <p className="text-sm text-[var(--muted-foreground)]">{message}</p> : null}

          <Button size="lg" type="submit">
            {selectedId ? "Simpan artikel" : "Buat artikel"}
          </Button>
        </form>
      </Card>
    </div>
  );
}

