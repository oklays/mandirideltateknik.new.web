import { NextResponse } from "next/server";
import { categorySchema, deleteCategory, upsertCategory } from "@mdt/lib";
import { getCurrentAdminContext } from "@/lib/auth";

export async function POST(request: Request) {
  const context = await getCurrentAdminContext();
  if (!context) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const body = await request.json();
  const parsed = categorySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Payload kategori tidak valid." }, { status: 400 });
  }

  await upsertCategory(null, parsed.data);
  return NextResponse.json({ message: "Kategori berhasil dibuat." });
}

export async function PUT(request: Request) {
  const context = await getCurrentAdminContext();
  if (!context) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const body = await request.json();
  const parsed = categorySchema.safeParse(body);

  if (!parsed.success || !body.id) {
    return NextResponse.json({ message: "Payload kategori tidak valid." }, { status: 400 });
  }

  await upsertCategory(body.id, parsed.data);
  return NextResponse.json({ message: "Kategori berhasil diperbarui." });
}

export async function DELETE(request: Request) {
  const context = await getCurrentAdminContext();
  if (!context) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const body = await request.json();

  if (!body.id) {
    return NextResponse.json({ message: "ID kategori wajib diisi." }, { status: 400 });
  }

  await deleteCategory(body.id);
  return NextResponse.json({ message: "Kategori berhasil dihapus." });
}
