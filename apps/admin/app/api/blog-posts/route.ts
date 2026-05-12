import { NextResponse } from "next/server";
import { blogPostSchema, deleteBlogPost, upsertBlogPost } from "@bms/lib";
import { getCurrentAdminContext } from "@/lib/auth";

export async function POST(request: Request) {
  const context = await getCurrentAdminContext();
  if (!context) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const body = await request.json();
  const parsed = blogPostSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Payload artikel tidak valid." }, { status: 400 });
  }

  await upsertBlogPost(null, parsed.data);
  return NextResponse.json({ message: "Artikel berhasil dibuat." });
}

export async function PUT(request: Request) {
  const context = await getCurrentAdminContext();
  if (!context) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const body = await request.json();
  const parsed = blogPostSchema.safeParse(body);

  if (!parsed.success || !body.id) {
    return NextResponse.json({ message: "Payload artikel tidak valid." }, { status: 400 });
  }

  await upsertBlogPost(body.id, parsed.data);
  return NextResponse.json({ message: "Artikel berhasil diperbarui." });
}

export async function DELETE(request: Request) {
  const context = await getCurrentAdminContext();
  if (!context) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const body = await request.json();

  if (!body.id) {
    return NextResponse.json({ message: "ID artikel wajib diisi." }, { status: 400 });
  }

  await deleteBlogPost(body.id);
  return NextResponse.json({ message: "Artikel berhasil dihapus." });
}
