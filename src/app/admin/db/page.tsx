"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  Database,
  ArrowLeft,
  RefreshCw,
  Download,
  Mail,
  Users,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import type { ContactSubmission, SiteUser } from "@/lib/db";

type SortDir = "asc" | "desc";

function TableHead({
  col,
  label,
  sort,
  dir,
  onSort,
}: {
  col: string;
  label: string;
  sort: string;
  dir: SortDir;
  onSort: (col: string) => void;
}) {
  const active = sort === col;
  return (
    <th
      className="cursor-pointer select-none whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500 hover:text-zinc-300 transition-colors"
      onClick={() => onSort(col)}
    >
      <span className="inline-flex items-center gap-1">
        {label}
        {active ? (
          dir === "asc" ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />
        ) : (
          <ChevronDown className="h-3 w-3 opacity-30" />
        )}
      </span>
    </th>
  );
}

function exportCSV<T extends Record<string, unknown>>(rows: T[], filename: string) {
  if (!rows.length) return;
  const keys = Object.keys(rows[0]);
  const csv = [
    keys.join(","),
    ...rows.map((r) =>
      keys.map((k) => JSON.stringify(String(r[k] ?? ""))).join(",")
    ),
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

export default function DBViewer() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [users, setUsers] = useState<SiteUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"contacts" | "users">("contacts");
  const [search, setSearch] = useState("");

  // contacts sort
  const [cSort, setCSort] = useState("createdAt");
  const [cDir, setCDir] = useState<SortDir>("desc");
  // users sort
  const [uSort, setUSort] = useState("createdAt");
  const [uDir, setUDir] = useState<SortDir>("desc");

  const fetchData = useCallback(async () => {
    setLoading(true);
    const [c, u] = await Promise.all([
      fetch("/api/admin/contacts").then((r) => r.json()),
      fetch("/api/admin/users").then((r) => r.json()),
    ]);
    if (Array.isArray(c)) setContacts(c);
    if (Array.isArray(u)) setUsers(u);
    setLoading(false);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleSort = (which: "c" | "u", col: string) => {
    if (which === "c") {
      if (cSort === col) setCDir((d) => (d === "asc" ? "desc" : "asc"));
      else { setCSort(col); setCDir("asc"); }
    } else {
      if (uSort === col) setUDir((d) => (d === "asc" ? "desc" : "asc"));
      else { setUSort(col); setUDir("asc"); }
    }
  };

  function sortRows<T extends Record<string, unknown>>(rows: T[], col: string, dir: SortDir): T[] {
    return [...rows].sort((a, b) => {
      const av = String(a[col] ?? "");
      const bv = String(b[col] ?? "");
      return dir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
    });
  }

  const filteredContacts = sortRows(
    contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        c.message.toLowerCase().includes(search.toLowerCase())
    ),
    cSort,
    cDir
  );

  const filteredUsers = sortRows(
    users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    ),
    uSort,
    uDir
  );

  return (
    <div className="min-h-screen bg-[rgb(10,12,24)] text-zinc-100 p-6">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-600/20">
            <Database className="h-4 w-4 text-violet-400" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Database Viewer</h1>
            <p className="text-xs text-zinc-500">Live read from <code className="text-violet-400">data/*.json</code></p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchData}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Refresh
          </button>
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Dashboard
          </Link>
        </div>
      </div>

      {/* Credentials box */}
      <div className="mb-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
        <p className="text-xs font-semibold text-amber-400 mb-2">🔐 Admin Credentials</p>
        <div className="grid gap-1 font-mono text-xs text-zinc-300 sm:grid-cols-2">
          <p><span className="text-zinc-500">Email:</span> yadavsid50k@gmail.com</p>
          <p><span className="text-zinc-500">Password:</span> Sid1#Mon</p>
          <p><span className="text-zinc-500">Login URL:</span>{" "}
            <Link href="/admin/login" className="text-violet-400 hover:underline">/admin/login</Link>
          </p>
          <p><span className="text-zinc-500">Dashboard URL:</span>{" "}
            <Link href="/admin/dashboard" className="text-violet-400 hover:underline">/admin/dashboard</Link>
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        {[
          { label: "contacts.json", value: contacts.length, icon: Mail, color: "text-violet-400" },
          { label: "users.json", value: users.length, icon: Users, color: "text-sky-400" },
          { label: "Unread", value: contacts.filter((c) => !c.read).length, icon: Mail, color: "text-amber-400" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
            <Icon className={`h-5 w-5 ${color}`} />
            <div>
              <p className="text-xl font-bold text-white">{value}</p>
              <p className="text-xs font-mono text-zinc-500">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table tabs + search */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1">
          {(["contacts", "users"] as const).map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setSearch(""); }}
              className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-colors ${
                tab === t
                  ? "bg-violet-600/30 text-violet-300 border border-violet-500/30"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t === "contacts" ? `Messages (${contacts.length})` : `Users (${users.length})`}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search…"
            className="rounded-xl border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white outline-none w-44 focus:border-violet-400/60 transition"
          />
          <button
            onClick={() =>
              tab === "contacts"
                ? exportCSV(filteredContacts as unknown as Record<string, unknown>[], "contacts.csv")
                : exportCSV(filteredUsers as unknown as Record<string, unknown>[], "users.csv")
            }
            className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <Download className="h-3.5 w-3.5" /> Export CSV
          </button>
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex items-center justify-center py-24">
          <div className="h-8 w-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          {tab === "contacts" && (
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  {[
                    { col: "id", label: "ID" },
                    { col: "name", label: "Name" },
                    { col: "email", label: "Email" },
                    { col: "message", label: "Message" },
                    { col: "createdAt", label: "Created At" },
                    { col: "read", label: "Read" },
                  ].map(({ col, label }) => (
                    <TableHead
                      key={col}
                      col={col}
                      label={label}
                      sort={cSort}
                      dir={cDir}
                      onSort={(c) => handleSort("c", c)}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredContacts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-16 text-center text-zinc-600">
                      No records found.
                    </td>
                  </tr>
                ) : (
                  filteredContacts.map((c, i) => (
                    <tr
                      key={c.id}
                      className={`border-b border-white/5 transition-colors hover:bg-white/[0.04] ${
                        i % 2 === 0 ? "" : "bg-white/[0.015]"
                      } ${!c.read ? "border-l-2 border-l-amber-500/60" : ""}`}
                    >
                      <td className="px-4 py-2.5 font-mono text-[10px] text-zinc-600">{c.id}</td>
                      <td className="px-4 py-2.5 font-medium text-white">{c.name}</td>
                      <td className="px-4 py-2.5 text-violet-400">
                        <a href={`mailto:${c.email}`} className="hover:underline">{c.email}</a>
                      </td>
                      <td className="px-4 py-2.5 text-zinc-400 max-w-xs">
                        <span className="line-clamp-1">{c.message}</span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2.5 text-xs text-zinc-500">
                        {new Date(c.createdAt).toLocaleString()}
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          c.read
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-amber-500/10 text-amber-400"
                        }`}>
                          {c.read ? "read" : "unread"}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}

          {tab === "users" && (
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  {[
                    { col: "id", label: "ID" },
                    { col: "name", label: "Name" },
                    { col: "email", label: "Email" },
                    { col: "source", label: "Source" },
                    { col: "createdAt", label: "Created At" },
                  ].map(({ col, label }) => (
                    <TableHead
                      key={col}
                      col={col}
                      label={label}
                      sort={uSort}
                      dir={uDir}
                      onSort={(c) => handleSort("u", c)}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-16 text-center text-zinc-600">
                      No records found.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((u, i) => (
                    <tr
                      key={u.id}
                      className={`border-b border-white/5 transition-colors hover:bg-white/[0.04] ${
                        i % 2 === 0 ? "" : "bg-white/[0.015]"
                      }`}
                    >
                      <td className="px-4 py-2.5 font-mono text-[10px] text-zinc-600">{u.id}</td>
                      <td className="px-4 py-2.5 font-medium text-white">
                        <div className="flex items-center gap-2">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600/20 text-[10px] font-bold text-sky-400">
                            {u.name.charAt(0).toUpperCase()}
                          </span>
                          {u.name}
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-violet-400">
                        <a href={`mailto:${u.email}`} className="hover:underline">{u.email}</a>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-2 py-0.5 text-xs text-sky-400">
                          {u.source.replace(/_/g, " ")}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2.5 text-xs text-zinc-500">
                        {new Date(u.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* File paths */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
        <p className="mb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wide">Storage locations</p>
        <div className="space-y-1 font-mono text-xs text-zinc-500">
          <p><span className="text-violet-400">contacts</span> → <span className="text-zinc-400">data/contacts.json</span></p>
          <p><span className="text-sky-400">users</span> → <span className="text-zinc-400">data/users.json</span></p>
        </div>
      </div>
    </div>
  );
}
