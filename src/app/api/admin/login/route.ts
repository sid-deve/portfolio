import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { ADMIN_EMAIL, ADMIN_PASSWORD_HASH, signToken, setAdminCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { email, password } = body as { email?: string; password?: string };

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const emailMatch = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
  const passMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);

  if (!emailMatch || !passMatch) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const token = await signToken(email);
  await setAdminCookie(token);

  return NextResponse.json({ ok: true });
}
