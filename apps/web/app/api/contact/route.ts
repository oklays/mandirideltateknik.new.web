import { NextResponse } from "next/server";
import { submitContact } from "@bms/lib";
import { contactFormSchema } from "@bms/lib";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.issues[0]?.message ?? "Data tidak valid." },
        { status: 400 }
      );
    }

    const result = await submitContact(parsed.data);

    return NextResponse.json({
      message:
        result.mode === "demo"
          ? "Demo mode aktif. Supabase belum dikonfigurasi, tetapi alur formulir sudah siap."
          : "Pesan Anda sudah kami terima. Tim kami akan segera menghubungi Anda."
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat mengirim formulir."
      },
      { status: 500 }
    );
  }
}

