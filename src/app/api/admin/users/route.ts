import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getUsers, deleteUser } from "@/lib/db";

export const runtime = "nodejs";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET() {
  const session = await getAdminSession();
  if (!session) return unauthorized();
  return NextResponse.json(getUsers());
}

export async function DELETE(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) return unauthorized();

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  const ok = deleteUser(id);
  return NextResponse.json({ ok });
}
