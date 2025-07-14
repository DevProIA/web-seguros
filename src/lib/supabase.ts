import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ebooupxcufzdhaccnyfq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVib291cHhjdWZ6ZGhhY2NueWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2NzI4NzQsImV4cCI6MjA1MTI0ODg3NH0.VYlBXGhJGJqGJJqGJJqGJJqGJJqGJJqGJJqGJJqGJJqG';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});