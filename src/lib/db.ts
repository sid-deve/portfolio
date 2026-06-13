/**
 * Simple JSON-file based data store.
 * Works in Node.js runtime without any native bindings.
 * Data persists in `data/` folder at project root.
 */
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json");
const USERS_FILE = path.join(DATA_DIR, "users.json");

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

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
  source: string; // e.g. "contact_form"
  createdAt: string;
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function readJSON<T>(file: string, fallback: T): T {
  ensureDir();
  if (!fs.existsSync(file)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8")) as T;
  } catch {
    return fallback;
  }
}

function writeJSON<T>(file: string, data: T) {
  ensureDir();
  fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf-8");
}

function nanoid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// ── Contact submissions ───────────────────────────────────────────────────────

export function getContacts(): ContactSubmission[] {
  return readJSON<ContactSubmission[]>(CONTACTS_FILE, []);
}

export function addContact(data: Omit<ContactSubmission, "id" | "createdAt" | "read">): ContactSubmission {
  const contacts = getContacts();
  const entry: ContactSubmission = {
    id: nanoid(),
    ...data,
    createdAt: new Date().toISOString(),
    read: false,
  };
  contacts.unshift(entry);
  writeJSON(CONTACTS_FILE, contacts);

  // Also add to users if email not already there
  addUserIfNew({ email: data.email, name: data.name, source: "contact_form" });

  return entry;
}

export function markContactRead(id: string): boolean {
  const contacts = getContacts();
  const idx = contacts.findIndex((c) => c.id === id);
  if (idx === -1) return false;
  contacts[idx].read = true;
  writeJSON(CONTACTS_FILE, contacts);
  return true;
}

export function deleteContact(id: string): boolean {
  const contacts = getContacts();
  const next = contacts.filter((c) => c.id !== id);
  if (next.length === contacts.length) return false;
  writeJSON(CONTACTS_FILE, next);
  return true;
}

// ── Site users ────────────────────────────────────────────────────────────────

export function getUsers(): SiteUser[] {
  return readJSON<SiteUser[]>(USERS_FILE, []);
}

export function addUserIfNew(data: Omit<SiteUser, "id" | "createdAt">): SiteUser | null {
  const users = getUsers();
  if (users.some((u) => u.email === data.email)) return null;
  const entry: SiteUser = {
    id: nanoid(),
    ...data,
    createdAt: new Date().toISOString(),
  };
  users.unshift(entry);
  writeJSON(USERS_FILE, users);
  return entry;
}

export function deleteUser(id: string): boolean {
  const users = getUsers();
  const next = users.filter((u) => u.id !== id);
  if (next.length === users.length) return false;
  writeJSON(USERS_FILE, next);
  return true;
}
