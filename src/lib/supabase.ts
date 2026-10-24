/**
 * Server-only Supabase client using the service-role key.
 * Never import this in any client component — it must stay server-side only.
 */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables."
  );
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    // Service-role clients should never persist sessions
    persistSession: false,
    autoRefreshToken: false,
  },
});

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  created_at: string;
};
