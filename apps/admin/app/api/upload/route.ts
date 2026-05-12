import { NextResponse } from "next/server";
import { createServiceRoleClient, getEnv, hasServiceRoleEnv } from "@bms/lib";
import { getCurrentAdminContext } from "@/lib/auth";

export async function POST(request: Request) {
  const context = await getCurrentAdminContext();
  if (!context) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });

  if (!hasServiceRoleEnv()) {
    return NextResponse.json(
      { message: "Upload membutuhkan koneksi Supabase aktif." },
      { status: 400 }
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ message: "File upload tidak ditemukan." }, { status: 400 });
  }

  const env = getEnv();
  const supabase = createServiceRoleClient();
  const filePath = `blog/${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const { error } = await supabase.storage
    .from(env.SUPABASE_STORAGE_BUCKET)
    .upload(filePath, file, { upsert: true });

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  const { data } = supabase.storage.from(env.SUPABASE_STORAGE_BUCKET).getPublicUrl(filePath);

  return NextResponse.json({ path: data.publicUrl });
}
