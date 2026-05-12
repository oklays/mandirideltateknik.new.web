import { NextResponse } from "next/server";
import { serviceSchema, upsertService, deleteService } from "@mdt/lib";
import { getCurrentAdminContext } from "@/lib/auth";

export async function POST(request: Request) {
  const context = await getCurrentAdminContext();
  if (!context) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const body = await request.json();
  const parsed = serviceSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Payload service tidak valid." }, { status: 400 });
  }

  await upsertService(null, parsed.data);
  return NextResponse.json({ message: "Service berhasil dibuat." });
}

export async function PUT(request: Request) {
  const context = await getCurrentAdminContext();
  if (!context) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const body = await request.json();
  const parsed = serviceSchema.safeParse(body);

  if (!parsed.success || !body.id) {
    return NextResponse.json({ message: "Payload service tidak valid." }, { status: 400 });
  }

  await upsertService(body.id, parsed.data);
  return NextResponse.json({ message: "Service berhasil diperbarui." });
}

export async function DELETE(request: Request) {
  const context = await getCurrentAdminContext();
  if (!context) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  const body = await request.json();

  if (!body.id) {
    return NextResponse.json({ message: "ID service wajib diisi." }, { status: 400 });
  }

  await deleteService(body.id);
  return NextResponse.json({ message: "Service berhasil dihapus." });
}
