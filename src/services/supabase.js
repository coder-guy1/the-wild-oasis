import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jmeesgvoxxjjdltxpolq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZWVzZ3ZveHhqamRsdHhwb2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMTAzNTYsImV4cCI6MjAxNzc4NjM1Nn0.EthrpDlVP71d4N5m6zvyL1J8MN7zXUM3EcklmElpcGU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
