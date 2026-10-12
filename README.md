# CHA Hub Suite

A suite of 7 browser-based tools for managing cash handling equipment — machine registry, AMC renewals, quotes, and service tracking.

**No installation. No server. Just open `index.html` in Chrome.**

## Tools

| Tool | File | For |
|------|------|-----|
| Machine Hub | `ART_Machine_Hub.html` | Full machine registry — search, edit, import, export |
| Renewal Tracker | `ART_Renewal_Tracker.html` | AMC/warranty contracts expiring in 30/60/90 days |
| Quote Helper | `ART_Quote_Helper.html` | Instant customer/serial lookup for quotes |
| Repair Quote Builder | `ART_Repair_Quote.html` | Spare-parts quotes with auto totals |
| New Machine Entry | `ART_New_Machine_Entry.html` | Register newly sold machines |
| Data Hub | `ART_Phase4_DataHub.html` | Bulk AMC updates, ERP imports |
| PDF Invoice Reader | `ART_PDF_Invoice_Reader.html` | OCR for scanned invoices |

## Quick Start

1. Open `index.html` in Google Chrome
2. Pick a tool from the dashboard

That's it. All data is embedded — works offline.

## Live Data (Supabase)

To connect to a live database instead of embedded data:

1. Create a free project at [supabase.com](https://supabase.com)
2. Run `supabase/schema.sql` in the SQL editor
3. Edit `config.js`:
   ```js
   supabaseUrl: "https://your-project.supabase.co",
   supabaseAnonKey: "your-anon-key",
   ```
4. Reload — tools will fetch live data automatically

## Custom Branding

Edit `config.js`:
```js
companyName: "Your Company",
divisionName: "Your Division",
shortName: "YC",
appTitle: "Equipment Hub",
```

## License

MIT — free for commercial use. See `LICENSE`.
