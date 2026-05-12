"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { ContactFormInput } from "@bms/lib";
import { contactFormSchema } from "@bms/lib";
import { Button, Card, Input, Textarea } from "@bms/ui";

type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset
  } = useForm<ContactFormInput>({
    defaultValues: {
      company: "",
      email: "",
      message: "",
      name: "",
      phone: ""
    }
  });

  async function onSubmit(values: ContactFormInput) {
    const parsed = contactFormSchema.safeParse(values);

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
            <span>Nama</span>
            <Input placeholder="Nama lengkap" {...register("name")} />
            {errors.name ? <p className="text-xs text-red-400">{errors.name.message}</p> : null}
          </label>

          <label className="space-y-2 text-sm">
            <span>Email</span>
            <Input placeholder="email@perusahaan.com" type="email" {...register("email")} />
            {errors.email ? <p className="text-xs text-red-400">{errors.email.message}</p> : null}
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span>No. WhatsApp</span>
            <Input placeholder="08xxxxxxxxxx" {...register("phone")} />
          </label>

          <label className="space-y-2 text-sm">
            <span>Perusahaan</span>
            <Input placeholder="Nama perusahaan" {...register("company")} />
          </label>
        </div>

        <label className="space-y-2 text-sm">
          <span>Kebutuhan</span>
          <Textarea
            placeholder="Jelaskan kebutuhan pompa, fire hydrant, servis, atau proyek Anda."
            {...register("message")}
          />
          {errors.message ? (
            <p className="text-xs text-red-400">{errors.message.message}</p>
          ) : null}
        </label>

        {formState.message ? (
          <p
            className={
              formState.status === "success" ? "text-sm text-emerald-300" : "text-sm text-red-400"
            }
          >
            {formState.message}
          </p>
        ) : null}

        <Button disabled={isSubmitting} size="lg" type="submit">
          {isSubmitting ? "Mengirim..." : "Kirim Permintaan"}
        </Button>
      </form>
    </Card>
  );
}

