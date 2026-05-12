import { NextResponse } from "next/server";
import { siteSettingsSchema, updateSiteSettings } from "@mdt/lib";
import { getCurrentAdminContext } from "@/lib/auth";

export async function PUT(request: Request) {
  const context = await getCurrentAdminContext();
  if (!context) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const body = await request.json();
  const parsed = siteSettingsSchema.safeParse(body);

  if (!parsed.success || !body.id) {
    return NextResponse.json({ message: "Payload settings tidak valid." }, { status: 400 });
  }

  await updateSiteSettings(body.id, parsed.data);
  return NextResponse.json({ message: "Pengaturan berhasil diperbarui." });
}
