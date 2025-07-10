'use client';

import { createClient } from '@supabase/supabase-js';

// Client-side Supabase client
export function createBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase client credentials');
  }
  
  return createClient(supabaseUrl, supabaseAnonKey);
}
