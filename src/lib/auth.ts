import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

// ── Admin credentials (hardcoded, single admin) ───────────────────────────────
export const ADMIN_EMAIL = "yadavsid50k@gmail.com";
// bcrypt hash of "Sid1#Mon"
export const ADMIN_PASSWORD_HASH =
  "$2b$12$If383JTreyRpda/qpuS8mODA6Wcx8xUjo/t51S/v04zR/Vj7M4p.u";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "super-secret-admin-key-change-in-production-32ch"
);
const COOKIE_NAME = "admin_token";
const MAX_AGE = 60 * 60 * 8; // 8 hours

// ── Token helpers ─────────────────────────────────────────────────────────────

export async function signToken(email: string): Promise<string> {
  return new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as { email: string; role: string };
  } catch {
    return null;
  }
}

// ── Cookie helpers (server-side) ──────────────────────────────────────────────

export async function getAdminSession() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function setAdminCookie(token: string) {
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function clearAdminCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}
