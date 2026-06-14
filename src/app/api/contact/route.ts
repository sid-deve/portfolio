import { NextRequest, NextResponse } from "next/server";
import { addContact } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({})) as {
    name?: string;
    email?: string;
    message?: string;
  };

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const entry = addContact({ name: name.trim(), email: email.trim(), message: message.trim() });
  return NextResponse.json({ ok: true, id: entry.id });
}
