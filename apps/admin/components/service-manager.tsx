"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { Service, ServiceInput } from "@bms/lib";
import { serviceSchema, slugify } from "@bms/lib";
import { Button, Card, Input, Textarea } from "@bms/ui";

type ServiceManagerProps = {
  services: Service[];
};

const emptyValues: ServiceInput = {
  description: "",
  excerpt: "",
  image_path: null,
  is_featured: false,
  slug: "",
  sort_order: 0,
  title: ""
};

export function ServiceManager({ services }: ServiceManagerProps) {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(services[0]?.id ?? null);
  const [message, setMessage] = useState<string | null>(null);
  const selectedService = useMemo(
    () => services.find((service) => service.id === selectedId),
    [selectedId, services]
  );

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
    formState: { isSubmitting }
  } = useForm<ServiceInput>({
    defaultValues: selectedService
      ? {
          description: selectedService.description,
          excerpt: selectedService.excerpt,
          image_path: selectedService.image_path,
          is_featured: selectedService.is_featured,
          slug: selectedService.slug,
          sort_order: selectedService.sort_order,
          title: selectedService.title
        }
      : emptyValues
  });

  async function onSubmit(values: ServiceInput) {
    const parsed = serviceSchema.safeParse(values);
    if (!parsed.success) {
      setMessage(parsed.error.issues[0]?.message ?? "Data layanan belum valid.");
      return;
    }

    const response = await fetch("/api/services", {
      body: JSON.stringify({
        id: selectedId,
        ...parsed.data
      }),
      headers: { "Content-Type": "application/json" },
      method: selectedId ? "PUT" : "POST"
    });

    const result = (await response.json()) as { message: string };
    setMessage(result.message);

    if (response.ok) {
      router.refresh();
    }
  }

  async function handleDelete(id: string) {
    const response = await fetch("/api/services", {
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

  function selectForEdit(service: Service) {
    setSelectedId(service.id);
    reset({
      description: service.description,
      excerpt: service.excerpt,
      image_path: service.image_path,
      is_featured: service.is_featured,
      slug: service.slug,
      sort_order: service.sort_order,
      title: service.title
    });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
      <Card className="space-y-4 bg-white/90">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl uppercase tracking-[0.08em]">Data Services</h2>
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
          {services.map((service) => (
            <div
              className="rounded-2xl border border-black/10 bg-white px-4 py-4"
              key={service.id}
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-1">
                  <h3 className="font-display text-2xl uppercase tracking-[0.08em]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">{service.excerpt}</p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => selectForEdit(service)} size="sm" variant="secondary">
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(service.id)} size="sm" variant="danger">
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
            {selectedId ? "Edit service" : "Tambah service"}
          </p>
          <h2 className="font-display text-3xl uppercase tracking-[0.08em]">
            Form pengelolaan layanan
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
          <label className="space-y-2 text-sm">
            <span>Slug</span>
            <Input {...register("slug")} />
          </label>
          <label className="space-y-2 text-sm">
            <span>Excerpt</span>
            <Textarea {...register("excerpt")} className="min-h-[120px]" />
          </label>
          <label className="space-y-2 text-sm">
            <span>Deskripsi HTML</span>
            <Textarea {...register("description")} className="min-h-[220px]" />
          </label>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span>Image path</span>
              <Input {...register("image_path")} />
            </label>
            <label className="space-y-2 text-sm">
              <span>Urutan</span>
              <Input {...register("sort_order")} type="number" />
            </label>
          </div>
          <label className="flex items-center gap-3 text-sm">
            <input type="checkbox" {...register("is_featured")} />
            Tampilkan sebagai layanan unggulan
          </label>

          {message ? <p className="text-sm text-[var(--muted-foreground)]">{message}</p> : null}

          <Button disabled={isSubmitting} size="lg" type="submit">
            {isSubmitting ? "Menyimpan..." : selectedId ? "Simpan perubahan" : "Buat service"}
          </Button>
        </form>
      </Card>
    </div>
  );
}

