-- ─────────────────────────────────────────────────────────────────
-- Migration: Create contact_messages table
-- Run this in: Supabase Dashboard → SQL Editor → New query
-- ─────────────────────────────────────────────────────────────────

create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(name) between 1 and 100),
  email       text not null check (char_length(email) between 3 and 254),
  subject     text             check (char_length(subject) <= 150),
  message     text not null check (char_length(message) between 1 and 5000),
  created_at  timestamptz not null default now()
);

-- Index for fast sorting by date in admin queries
create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

-- ─────────────────────────────────────────────────────────────────
-- Row Level Security
-- Public visitors: INSERT only via service-role (server-side API)
-- No public SELECT / UPDATE / DELETE allowed
-- ─────────────────────────────────────────────────────────────────

alter table public.contact_messages enable row level security;

-- Drop any existing policies before recreating
drop policy if exists "service_role_all" on public.contact_messages;

-- Service-role key bypasses RLS automatically in Supabase.
-- This policy ensures the anon/authenticated roles cannot access rows.
-- (No policy = deny by default when RLS is enabled)

-- Optional: explicit deny for anon just to be thorough
create policy "block_anon_select"
  on public.contact_messages
  for select
  to anon
  using (false);

create policy "block_anon_insert"
  on public.contact_messages
  for insert
  to anon
  with check (false);

-- Comment for clarity
comment on table public.contact_messages is
  'Contact form submissions from portfolio website. Only accessible via service-role key on the server.';
