"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { ContactFormInput } from "@mdt/lib";
import { contactFormSchema } from "@mdt/lib";
import { Button, Card, Input, Textarea } from "@mdt/ui";

type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

type ExtendedFormInput = {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  category: string;
  brandType: string;
  capacity: string;
  message: string;
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset
  } = useForm<ExtendedFormInput>({
    defaultValues: {
      company: "",
      email: "",
      message: "",
      name: "",
      phone: "",
      location: "",
      category: "",
      brandType: "",
      capacity: ""
    }
  });

  async function onSubmit(values: ExtendedFormInput) {
    // Combine the extra fields into the single message field for the backend
    const combinedMessage = `
Kategori: ${values.category || '-'}
Lokasi Proyek: ${values.location || '-'}
Brand/Tipe: ${values.brandType || '-'}
Kapasitas (HP/kW): ${values.capacity || '-'}

Deskripsi Tambahan:
${values.message}
    `.trim();

    const payloadToValidate: ContactFormInput = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      company: values.company,
      message: combinedMessage
    };

    const parsed = contactFormSchema.safeParse(payloadToValidate);

    if (!parsed.success) {
      setFormState({
        status: "error",
        message: parsed.error.issues[0]?.message ?? "Data belum lengkap."
      });
      return;
    }

    const response = await fetch("/api/contact", {
      body: JSON.stringify(parsed.data),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    const result = (await response.json()) as { message: string };

    if (!response.ok) {
      setFormState({ status: "error", message: result.message });
      return;
    }

    setFormState({ status: "success", message: result.message });
    reset();
  }

  return (
    <Card className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          Hubungi Tim Kami
        </p>
        <h2 className="font-display text-3xl uppercase tracking-[0.08em] text-bms-primary">
          Ceritakan kebutuhan proyek Anda
        </h2>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="font-medium">Nama Lengkap *</span>
            <Input placeholder="Nama lengkap" {...register("name", { required: true })} />
            {errors.name ? <p className="text-xs text-red-400">Nama wajib diisi</p> : null}
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-medium">Email *</span>
            <Input placeholder="email@perusahaan.com" type="email" {...register("email", { required: true })} />
            {errors.email ? <p className="text-xs text-red-400">Email wajib diisi</p> : null}
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="font-medium">No. WhatsApp *</span>
            <Input placeholder="08xxxxxxxxxx" {...register("phone", { required: true })} />
            {errors.phone ? <p className="text-xs text-red-400">WhatsApp wajib diisi</p> : null}
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-medium">Nama Perusahaan</span>
            <Input placeholder="Nama perusahaan / Institusi" {...register("company")} />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="font-medium">Lokasi Proyek</span>
            <Input placeholder="Cth: Cikarang, Bekasi, Jakarta" {...register("location")} />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-medium">Kategori Kebutuhan</span>
            <select 
              className="flex h-10 w-full rounded-md border border-[var(--input)] bg-[var(--background)] px-3 py-2 text-sm ring-offset-[var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...register("category")}
            >
              <option value="">Pilih Kategori...</option>
              <option value="Supplier Pompa">Supplier Pompa</option>
              <option value="Servis Pompa">Servis Pompa</option>
              <option value="Fire Hydrant">Fire Hydrant</option>
              <option value="Electrical Panel">Electrical Panel</option>
              <option value="Dinamo Motor">Dinamo Motor</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="font-medium">Brand / Tipe Unit (opsional)</span>
            <Input placeholder="Cth: Ebara FS, Grundfos CR" {...register("brandType")} />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-medium">Kapasitas / HP / kW (opsional)</span>
            <Input placeholder="Cth: 500 GPM, 30 kW" {...register("capacity")} />
          </label>
        </div>

        <label className="space-y-2 text-sm">
          <span className="font-medium">Deskripsi Kebutuhan *</span>
          <Textarea
            placeholder="Jelaskan kebutuhan operasional pompa, fire hydrant, atau servis untuk proyek Anda."
            className="min-h-[120px]"
            {...register("message", { required: true })}
          />
          {errors.message ? (
            <p className="text-xs text-red-400">Deskripsi wajib diisi</p>
          ) : null}
        </label>

        {formState.message ? (
          <p
            className={
              formState.status === "success" ? "text-sm font-medium text-[#20bd5a]" : "text-sm font-medium text-red-500"
            }
          >
            {formState.message}
          </p>
        ) : null}

        <Button disabled={isSubmitting} size="lg" type="submit" className="w-full sm:w-auto">
          {isSubmitting ? "Mengirim..." : "Kirim Permintaan Konsultasi"}
        </Button>
      </form>
    </Card>
  );
}
