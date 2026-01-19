// src/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url) {
  console.error("❌ Missing VITE_SUPABASE_URL in your .env file");
}
if (!anon) {
  console.error("❌ Missing VITE_SUPABASE_ANON_KEY in your .env file");
}

const supabase = createClient(url!, anon!);
export default supabase;