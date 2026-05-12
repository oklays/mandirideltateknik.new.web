"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { SiteSettings } from "@mdt/lib";
import { siteSettingsSchema } from "@mdt/lib";
import { Button, Card, Input, Textarea } from "@mdt/ui";

type SettingsFormProps = {
  settings: SiteSettings;
};

type SettingsFormValues = {
  address: string;
  company_name: string;
  email: string;
  hero_subtitle: string;
  hero_title: string;
  tagline: string;
  whatsapp: string;
};

export function SettingsForm({ settings }: SettingsFormProps) {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const { handleSubmit, register } = useForm<SettingsFormValues>({
    defaultValues: {
      address: settings.address,
      company_name: settings.company_name,
      email: settings.email,
      hero_subtitle: settings.hero_subtitle,
      hero_title: settings.hero_title,
      tagline: settings.tagline,
      whatsapp: settings.whatsapp
    }
  });

  async function onSubmit(values: SettingsFormValues) {
    const parsed = siteSettingsSchema.safeParse({
      ...values,
      seo_defaults: settings.seo_defaults
    });
    if (!parsed.success) {
      setMessage(parsed.error.issues[0]?.message ?? "Pengaturan belum valid.");
      return;
    }

    const response = await fetch("/api/settings", {
      body: JSON.stringify({
        id: settings.id,
        ...parsed.data
      }),
      headers: { "Content-Type": "application/json" },
      method: "PUT"
    });
    const result = (await response.json()) as { message: string };
    setMessage(result.message);
    if (response.ok) router.refresh();
  }

  return (
    <Card className="space-y-5 bg-white/90">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Site settings</p>
        <h2 className="font-display text-3xl uppercase tracking-[0.08em]">
          Konten identitas perusahaan
        </h2>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span>Nama perusahaan</span>
            <Input {...register("company_name")} />
          </label>
          <label className="space-y-2 text-sm">
            <span>Email</span>
            <Input {...register("email")} />
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span>WhatsApp</span>
            <Input {...register("whatsapp")} />
          </label>
          <label className="space-y-2 text-sm">
            <span>Tagline</span>
            <Input {...register("tagline")} />
          </label>
        </div>
        <label className="space-y-2 text-sm">
          <span>Alamat</span>
          <Textarea {...register("address")} className="min-h-[100px]" />
        </label>
        <label className="space-y-2 text-sm">
          <span>Hero title</span>
          <Input {...register("hero_title")} />
        </label>
        <label className="space-y-2 text-sm">
          <span>Hero subtitle</span>
          <Textarea {...register("hero_subtitle")} className="min-h-[140px]" />
        </label>
        {message ? <p className="text-sm text-[var(--muted-foreground)]">{message}</p> : null}
        <Button size="lg" type="submit">
          Simpan pengaturan
        </Button>
      </form>
    </Card>
  );
}
