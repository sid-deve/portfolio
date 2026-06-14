/**
 * Data store — works in both environments:
 *
 * LOCAL DEV  → persists to `data/*.json` via Node.js `fs`
 * VERCEL     → in-memory (persists across requests on the same warm instance;
 *              data resets on cold starts / new deployments — acceptable for a
 *              portfolio contact store, no external DB needed)
 *
 * The runtime check (`IS_NODE_FS`) lets the same code run in both environments
 * without any Vercel-specific packages.
 */

// ── Types ────────────────────────────────────────────────────────────────────

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  read: boolean;
};

export type SiteUser = {
  id: string;
  email: string;
  name: string;
  source: string;
  createdAt: string;
};

// ── Runtime detection ─────────────────────────────────────────────────────────

const IS_NODE_FS =
  typeof process !== "undefined" &&
  process.versions?.node !== undefined &&
  // Vercel sets this env var; local dev doesn't
  !process.env.VERCEL;

// ── In-memory store (always initialised; used on Vercel) ─────────────────────

// Use globalThis so the store survives hot-module-reloads in dev too
const g = globalThis as typeof globalThis & {
  __contacts?: ContactSubmission[];
  __users?: SiteUser[];
};
if (!g.__contacts) g.__contacts = [];
if (!g.__users)    g.__users    = [];

// ── FS helpers (local only) ───────────────────────────────────────────────────

function fsRead<T>(file: string, fallback: T): T {
  try {
    // Dynamic require so bundlers don't try to include `fs` in Edge chunks
    const fs   = require("fs")   as typeof import("fs");   // eslint-disable-line
    const path = require("path") as typeof import("path"); // eslint-disable-line
    const full = path.join(process.cwd(), "data", file);
    if (!fs.existsSync(full)) return fallback;
    return JSON.parse(fs.readFileSync(full, "utf-8")) as T;
  } catch {
    return fallback;
  }
}

function fsWrite(file: string, data: unknown): void {
  try {
    const fs   = require("fs")   as typeof import("fs");   // eslint-disable-line
    const path = require("path") as typeof import("path"); // eslint-disable-line
    const dir  = path.join(process.cwd(), "data");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, file), JSON.stringify(data, null, 2), "utf-8");
  } catch {
    // silently ignore on read-only filesystems
  }
}

// ── Nano-id ───────────────────────────────────────────────────────────────────

function nanoid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// ── Contact submissions ───────────────────────────────────────────────────────

export function getContacts(): ContactSubmission[] {
  if (IS_NODE_FS) {
    // Sync in-memory with file on every read (local dev)
    g.__contacts = fsRead<ContactSubmission[]>("contacts.json", []);
  }
  return g.__contacts!;
}

export function addContact(
  data: Omit<ContactSubmission, "id" | "createdAt" | "read">
): ContactSubmission {
  const contacts = getContacts();
  const entry: ContactSubmission = {
    id: nanoid(),
    ...data,
    createdAt: new Date().toISOString(),
    read: false,
  };
  contacts.unshift(entry);
  g.__contacts = contacts;
  if (IS_NODE_FS) fsWrite("contacts.json", contacts);

  addUserIfNew({ email: data.email, name: data.name, source: "contact_form" });
  return entry;
}

export function markContactRead(id: string): boolean {
  const contacts = getContacts();
  const idx = contacts.findIndex((c) => c.id === id);
  if (idx === -1) return false;
  contacts[idx].read = true;
  g.__contacts = contacts;
  if (IS_NODE_FS) fsWrite("contacts.json", contacts);
  return true;
}

export function deleteContact(id: string): boolean {
  const contacts = getContacts();
  const next = contacts.filter((c) => c.id !== id);
  if (next.length === contacts.length) return false;
  g.__contacts = next;
  if (IS_NODE_FS) fsWrite("contacts.json", next);
  return true;
}

// ── Site users ────────────────────────────────────────────────────────────────

export function getUsers(): SiteUser[] {
  if (IS_NODE_FS) {
    g.__users = fsRead<SiteUser[]>("users.json", []);
  }
  return g.__users!;
}

export function addUserIfNew(
  data: Omit<SiteUser, "id" | "createdAt">
): SiteUser | null {
  const users = getUsers();
  if (users.some((u) => u.email === data.email)) return null;
  const entry: SiteUser = {
    id: nanoid(),
    ...data,
    createdAt: new Date().toISOString(),
  };
  users.unshift(entry);
  g.__users = users;
  if (IS_NODE_FS) fsWrite("users.json", users);
  return entry;
}

export function deleteUser(id: string): boolean {
  const users = getUsers();
  const next = users.filter((u) => u.id !== id);
  if (next.length === users.length) return false;
  g.__users = next;
  if (IS_NODE_FS) fsWrite("users.json", next);
  return true;
}
