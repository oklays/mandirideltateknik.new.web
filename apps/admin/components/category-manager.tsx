"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { Category, CategoryInput } from "@mdt/lib";
import { categorySchema, slugify } from "@mdt/lib";
import { Button, Card, Input } from "@mdt/ui";

type CategoryManagerProps = {
  categories: Category[];
};

const emptyValues: CategoryInput = {
  name: "",
  slug: ""
};

export function CategoryManager({ categories }: CategoryManagerProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const { handleSubmit, register, reset, setValue } = useForm<CategoryInput>({
    defaultValues: emptyValues
  });

  async function onSubmit(values: CategoryInput) {
    const parsed = categorySchema.safeParse(values);
    if (!parsed.success) {
      setMessage(parsed.error.issues[0]?.message ?? "Data kategori tidak valid.");
      return;
    }

    const response = await fetch("/api/categories", {
      body: JSON.stringify({
        id: selectedCategory?.id ?? null,
        ...parsed.data
      }),
      headers: { "Content-Type": "application/json" },
      method: selectedCategory ? "PUT" : "POST"
    });
    const result = (await response.json()) as { message: string };
    setMessage(result.message);
    if (response.ok) router.refresh();
  }

  async function removeCategory(id: string) {
    const response = await fetch("/api/categories", {
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
      method: "DELETE"
    });
    const result = (await response.json()) as { message: string };
    setMessage(result.message);
    if (response.ok) {
      setSelectedCategory(null);
      reset(emptyValues);
      router.refresh();
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <Card className="space-y-4 bg-white/90">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl uppercase tracking-[0.08em]">Kategori</h2>
          <Button
            onClick={() => {
              setSelectedCategory(null);
              reset(emptyValues);
            }}
            size="sm"
            variant="secondary"
          >
            Baru
          </Button>
        </div>
        <div className="space-y-3">
          {categories.map((category) => (
            <div className="rounded-2xl border border-black/10 bg-white px-4 py-4" key={category.id}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-[0.08em]">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">{category.slug}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      setSelectedCategory(category);
                      reset({ name: category.name, slug: category.slug });
                    }}
                    size="sm"
                    variant="secondary"
                  >
                    Edit
                  </Button>
                  <Button onClick={() => removeCategory(category.id)} size="sm" variant="danger">
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
            {selectedCategory ? "Edit kategori" : "Tambah kategori"}
          </p>
          <h2 className="font-display text-3xl uppercase tracking-[0.08em]">
            Form kategori artikel
          </h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="space-y-2 text-sm">
            <span>Nama</span>
            <Input
              {...register("name")}
              onBlur={(event) => {
                setValue("slug", slugify(event.target.value));
              }}
            />
          </label>
          <label className="space-y-2 text-sm">
            <span>Slug</span>
            <Input {...register("slug")} />
          </label>
          {message ? <p className="text-sm text-[var(--muted-foreground)]">{message}</p> : null}
          <Button size="lg" type="submit">
            {selectedCategory ? "Simpan kategori" : "Buat kategori"}
          </Button>
        </form>
      </Card>
    </div>
  );
}

