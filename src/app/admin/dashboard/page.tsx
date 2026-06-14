"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import {
  LayoutDashboard,
  Mail,
  Users,
  LogOut,
  CheckCheck,
  Trash2,
  Shield,
  Eye,
  EyeOff,
  RefreshCw,
  X,
  ChevronRight,
  Bell,
  TrendingUp,
  Database,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { SKIcon } from "@/components/ui/SKLogo";
import type { ContactSubmission, SiteUser } from "@/lib/db";

type Tab = "overview" | "contacts" | "users";

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({
  label,
  value,
  icon: Icon,
  color,
  badge,
}: {
  label: string;
  value: number;
  icon: React.ElementType;
  color: string;
  badge?: number;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-zinc-400">{label}</p>
          <p className="mt-1 text-3xl font-bold text-white">{value}</p>
          {badge !== undefined && badge > 0 && (
            <p className="mt-1 text-xs text-amber-400 font-medium flex items-center gap-1">
              <Bell className="h-3 w-3" /> {badge} new
            </p>
          )}
        </div>
        <div className={`rounded-xl p-3 ${color}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-4 -right-4 h-20 w-20 rounded-full opacity-10" style={{ background: "currentColor" }} />
    </div>
  );
}

// ── Contact Detail Modal ──────────────────────────────────────────────────────
function ContactModal({
  contact,
  onClose,
  onMarkRead,
  onDelete,
}: {
  contact: ContactSubmission;
  onClose: () => void;
  onMarkRead: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-[rgb(18,21,38)] p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-zinc-500 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-semibold text-white mb-4">Message Detail</h2>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wide">From</p>
            <p className="text-sm font-medium text-white mt-0.5">{contact.name}</p>
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wide">Email</p>
            <a href={`mailto:${contact.email}`} className="text-sm text-violet-400 hover:underline mt-0.5 inline-block">
              {contact.email}
            </a>
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wide">Received</p>
            <p className="text-sm text-zinc-300 mt-0.5">{new Date(contact.createdAt).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-wide">Message</p>
            <p className="mt-1 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap">
              {contact.message}
            </p>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          {!contact.read && (
            <button
              onClick={() => { onMarkRead(contact.id); onClose(); }}
              className="flex items-center gap-2 rounded-full bg-emerald-600/20 border border-emerald-500/30 px-4 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-600/30 transition-colors"
            >
              <CheckCheck className="h-4 w-4" /> Mark as read
            </button>
          )}
          <button
            onClick={() => { onDelete(contact.id); onClose(); }}
            className="flex items-center gap-2 rounded-full bg-red-600/20 border border-red-500/30 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-600/30 transition-colors"
          >
            <Trash2 className="h-4 w-4" /> Delete
          </button>
          <a
            href={`mailto:${contact.email}`}
            className="ml-auto flex items-center gap-2 rounded-full bg-violet-600/20 border border-violet-500/30 px-4 py-2 text-sm font-medium text-violet-400 hover:bg-violet-600/30 transition-colors"
          >
            Reply
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("overview");
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [users, setUsers] = useState<SiteUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [search, setSearch] = useState("");

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

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const markRead = async (id: string) => {
    await fetch("/api/admin/contacts", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, read: true } : c)));
  };

  const deleteContact = async (id: string) => {
    await fetch(`/api/admin/contacts?id=${id}`, { method: "DELETE" });
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const deleteUser = async (id: string) => {
    await fetch(`/api/admin/users?id=${id}`, { method: "DELETE" });
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const unreadCount = contacts.filter((c) => !c.read).length;

  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.message.toLowerCase().includes(search.toLowerCase())
  );

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const NAV: { id: Tab; label: string; icon: React.ElementType; badge?: number }[] = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "contacts", label: "Messages", icon: Mail, badge: unreadCount },
    { id: "users", label: "Users", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-[rgb(10,12,24)] text-zinc-100">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 flex w-60 flex-col border-r border-white/10 bg-white/[0.03] backdrop-blur-xl">
        {/* Brand */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
          <SKIcon size={20} />
          <div>
            <p className="text-xs font-semibold text-white leading-tight">Admin Panel</p>
            <p className="text-[10px] text-zinc-500">Portfolio Dashboard</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {NAV.map(({ id, label, icon: Icon, badge }) => (
            <button
              key={id}
              onClick={() => { setTab(id); setSearch(""); }}
              className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                tab === id
                  ? "bg-violet-600/20 text-violet-300 border border-violet-500/20"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
              {badge !== undefined && badge > 0 && (
                <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-black">
                  {badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 px-3 py-4 space-y-2">
          <Link
            href="/admin/db"
            className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <Database className="h-4 w-4" /> DB Viewer
            <ExternalLink className="ml-auto h-3 w-3 opacity-40" />
          </Link>
          <button
            onClick={fetchData}
            className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <RefreshCw className="h-4 w-4" /> Refresh
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="pl-60">
        {/* Top bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[rgb(10,12,24)]/90 px-8 py-4 backdrop-blur-xl">
          <div>
            <h1 className="text-lg font-semibold text-white">
              {tab === "overview" && "Overview"}
              {tab === "contacts" && "Contact Messages"}
              {tab === "users" && "Site Users"}
            </h1>
            <p className="text-xs text-zinc-500">
              {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
          {(tab === "contacts" || tab === "users") && (
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${tab}…`}
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white outline-none w-56 focus:border-violet-400/60 focus:ring-4 focus:ring-violet-500/15 transition"
            />
          )}
        </div>

        <div className="p-8">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="h-10 w-10 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
            </div>
          ) : (
            <>
              {/* ── OVERVIEW ─────────────────────────────────────────────── */}
              {tab === "overview" && (
                <div className="space-y-8">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <StatCard
                      label="Total Messages"
                      value={contacts.length}
                      icon={Mail}
                      color="bg-violet-600/30"
                      badge={unreadCount}
                    />
                    <StatCard
                      label="Unread Messages"
                      value={unreadCount}
                      icon={Bell}
                      color="bg-amber-500/30"
                    />
                    <StatCard
                      label="Total Users"
                      value={users.length}
                      icon={Users}
                      color="bg-sky-600/30"
                    />
                  </div>

                  {/* Recent messages */}
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h2 className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-violet-400" /> Recent Messages
                      </h2>
                      <button
                        onClick={() => setTab("contacts")}
                        className="text-xs text-violet-400 hover:text-violet-300"
                      >
                        View all →
                      </button>
                    </div>
                    <div className="space-y-2">
                      {contacts.slice(0, 5).map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setSelectedContact(c)}
                          className="w-full flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left hover:bg-white/[0.06] transition-colors"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-white truncate">{c.name}</span>
                              {!c.read && (
                                <span className="shrink-0 h-2 w-2 rounded-full bg-amber-400" />
                              )}
                            </div>
                            <p className="text-xs text-zinc-500 truncate mt-0.5">{c.email}</p>
                          </div>
                          <p className="text-xs text-zinc-600 shrink-0">
                            {new Date(c.createdAt).toLocaleDateString()}
                          </p>
                          <ChevronRight className="h-4 w-4 text-zinc-600 shrink-0" />
                        </button>
                      ))}
                      {contacts.length === 0 && (
                        <p className="text-sm text-zinc-600 text-center py-8">No messages yet.</p>
                      )}
                    </div>
                  </div>

                  {/* Recent users */}
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h2 className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                        <Users className="h-4 w-4 text-sky-400" /> Recent Users
                      </h2>
                      <button
                        onClick={() => setTab("users")}
                        className="text-xs text-sky-400 hover:text-sky-300"
                      >
                        View all →
                      </button>
                    </div>
                    <div className="space-y-2">
                      {users.slice(0, 5).map((u) => (
                        <div
                          key={u.id}
                          className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600/20 border border-sky-500/20 text-sm font-medium text-sky-400">
                            {u.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">{u.name}</p>
                            <p className="text-xs text-zinc-500 truncate">{u.email}</p>
                          </div>
                          <p className="text-xs text-zinc-600 shrink-0">
                            {new Date(u.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                      {users.length === 0 && (
                        <p className="text-sm text-zinc-600 text-center py-8">No users yet.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ── CONTACTS ─────────────────────────────────────────────── */}
              {tab === "contacts" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-zinc-500">
                      {filteredContacts.length} message{filteredContacts.length !== 1 ? "s" : ""}
                      {unreadCount > 0 && ` · ${unreadCount} unread`}
                    </p>
                  </div>
                  {filteredContacts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] py-20 text-center">
                      <Mail className="h-10 w-10 text-zinc-700 mb-3" />
                      <p className="text-zinc-500">No messages found.</p>
                    </div>
                  ) : (
                    filteredContacts.map((c) => (
                      <div
                        key={c.id}
                        className={`flex items-start gap-4 rounded-2xl border px-5 py-4 transition-colors ${
                          c.read
                            ? "border-white/8 bg-white/[0.02]"
                            : "border-amber-500/20 bg-amber-500/5"
                        }`}
                      >
                        {/* Avatar */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600/20 border border-violet-500/20 text-sm font-semibold text-violet-300">
                          {c.name.charAt(0).toUpperCase()}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-semibold text-white">{c.name}</span>
                            {!c.read && (
                              <span className="rounded-full bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-400">
                                New
                              </span>
                            )}
                            <span className="text-xs text-zinc-500">{new Date(c.createdAt).toLocaleString()}</span>
                          </div>
                          <a href={`mailto:${c.email}`} className="text-xs text-violet-400 hover:underline mt-0.5 inline-block">
                            {c.email}
                          </a>
                          <p className="mt-1 text-sm text-zinc-300 line-clamp-2">{c.message}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex shrink-0 items-center gap-2">
                          <button
                            onClick={() => setSelectedContact(c)}
                            className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-400 hover:text-white transition-colors"
                            title="View"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          {!c.read && (
                            <button
                              onClick={() => markRead(c.id)}
                              className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                              title="Mark as read"
                            >
                              <EyeOff className="h-4 w-4" />
                            </button>
                          )}
                          <button
                            onClick={() => deleteContact(c.id)}
                            className="rounded-lg border border-red-500/20 bg-red-500/10 p-2 text-red-400 hover:bg-red-500/20 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* ── USERS ────────────────────────────────────────────────── */}
              {tab === "users" && (
                <div className="space-y-3">
                  <p className="text-sm text-zinc-500 mb-2">
                    {filteredUsers.length} user{filteredUsers.length !== 1 ? "s" : ""}
                  </p>
                  {filteredUsers.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] py-20 text-center">
                      <Users className="h-10 w-10 text-zinc-700 mb-3" />
                      <p className="text-zinc-500">No users found.</p>
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-2xl border border-white/10">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10 bg-white/[0.03]">
                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500">User</th>
                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500">Email</th>
                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500">Source</th>
                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500">Joined</th>
                            <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-zinc-500">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredUsers.map((u, i) => (
                            <tr
                              key={u.id}
                              className={`border-b border-white/5 transition-colors hover:bg-white/[0.03] ${
                                i % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"
                              }`}
                            >
                              <td className="px-5 py-3">
                                <div className="flex items-center gap-3">
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600/20 border border-sky-500/20 text-xs font-semibold text-sky-400">
                                    {u.name.charAt(0).toUpperCase()}
                                  </div>
                                  <span className="font-medium text-white">{u.name}</span>
                                </div>
                              </td>
                              <td className="px-5 py-3">
                                <a href={`mailto:${u.email}`} className="text-violet-400 hover:underline">
                                  {u.email}
                                </a>
                              </td>
                              <td className="px-5 py-3">
                                <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-2 py-0.5 text-xs text-sky-400">
                                  {u.source.replace(/_/g, " ")}
                                </span>
                              </td>
                              <td className="px-5 py-3 text-zinc-500">
                                {new Date(u.createdAt).toLocaleDateString()}
                              </td>
                              <td className="px-5 py-3 text-right">
                                <button
                                  onClick={() => deleteUser(u.id)}
                                  className="rounded-lg border border-red-500/20 bg-red-500/10 p-1.5 text-red-400 hover:bg-red-500/20 transition-colors"
                                  title="Delete user"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Contact detail modal */}
      {selectedContact && (
        <ContactModal
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
          onMarkRead={markRead}
          onDelete={deleteContact}
        />
      )}
    </div>
  );
}
