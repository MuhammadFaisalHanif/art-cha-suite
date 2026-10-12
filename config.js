// ============================================================
// CHA Hub Suite — Configuration
// ============================================================
// Edit these values for your company. All tools read branding
// and Supabase settings from here.
//
// For open-source users:
//  1. Create a free Supabase project at https://supabase.com
//  2. Run the schema from supabase/schema.sql
//  3. Paste your project URL and anon key below
// ============================================================

var CHA_CONFIG = {
  // ---- Branding (shown in headers, titles, exports) ----
  companyName: "Your Company",
  divisionName: "Equipment Division",
  shortName: "EC",
  appTitle: "Equipment Hub Suite",

  // ---- Supabase (live data) ----
  // Leave empty to use embedded demo data (offline mode)
  supabaseUrl: "",
  supabaseAnonKey: "",

  // ---- Defaults ----
  currency: "AED",
  vatRate: 0.05,
  dateFormat: "en-GB"
};
