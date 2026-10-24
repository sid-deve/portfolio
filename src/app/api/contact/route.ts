import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendContactNotification } from "@/lib/mailer";

export const runtime = "nodejs";

// Basic in-memory rate limit: max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  // Parse body — guard against oversized payloads
  let body: Record<string, unknown>;
  try {
    const text = await req.text();
    if (text.length > 20_000) {
      return NextResponse.json({ error: "Payload too large." }, { status: 413 });
    }
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name    = typeof body.name    === "string" ? body.name.trim()    : "";
  const email   = typeof body.email   === "string" ? body.email.trim()   : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  // Validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }
  if (name.length > 100) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }
  if (email.length > 254) {
    return NextResponse.json({ error: "Email is too long." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message must be under 5,000 characters." }, { status: 400 });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // 1. Save to Supabase — this is the primary action
  const { data: inserted, error: dbError } = await supabase
    .from("contact_messages")
    .insert([{ name, email, subject: subject || null, message }])
    .select("id, created_at")
    .single();

  if (dbError) {
    // Do NOT expose DB error details to the client
    console.error("[contact] Supabase insert error:", dbError.message);
    return NextResponse.json(
      { error: "Failed to save your message. Please try again." },
      { status: 500 }
    );
  }

  // 2. Send email notification — failure here does NOT fail the request
  const submittedAt = new Date(inserted.created_at).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const mailResult = await sendContactNotification({
    name,
    email,
    subject,
    message,
    submittedAt,
  });

  if (!mailResult.ok) {
    // Message is already saved — just log the mail failure, don't error out
    console.warn("[contact] Email notification failed (message saved):", mailResult.error);
  }

  return NextResponse.json({ ok: true, id: inserted.id });
}
