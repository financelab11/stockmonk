# Supabase setup

Project URL: `https://fqzfmvnmmiisvtgnsyqa.supabase.co`

## Apply the schema

The full schema is in `migrations/202611170001_initial_schema.sql`.

### Dashboard (no CLI login needed)

1. Open the Supabase SQL editor for the project.
2. Paste the migration and run it once.
3. Confirm tables and the `data_freshness` rows exist.

### CLI

```bash
supabase link --project-ref fqzfmvnmmiisvtgnsyqa
supabase db push
```

A database password or a Supabase access token is required for the CLI path.

## Required secrets

- `NEXT_PUBLIC_SUPABASE_URL` — public project URL.
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` — public key used by the app.
- `SUPABASE_SERVICE_ROLE_KEY` — server-only; used by `pnpm sync:supabase` and
  GitHub Actions. Never expose it to the browser.

## Push the current datasets

```bash
pnpm sync:supabase
```

This upserts companies, prices, financial periods, metrics, segments, consensus,
targets and forward estimates, then calls `refresh_company_snapshots()` and
`refresh_data_freshness()`. It records an `ingestion_runs` row.

## Realtime, RLS and daily jobs

- All tables are in the `supabase_realtime` publication; RLS applies to
  realtime.
- Market/research tables are public read; watchlists and profiles are
  owner-only.
- `pg_cron` runs `refresh_company_snapshots()` at 02:15 UTC and
  `refresh_data_freshness()` at 02:30 UTC daily.
- `.github/workflows/daily-refresh.yml` refreshes the file datasets and runs
  `pnpm sync:supabase`; the weekly workflow also syncs GCC.

## Verify

After deploy, open `/api/health/db`. It returns `{ ok: true, datasets: [...] }`
when the schema is applied and the publishable key can read `data_freshness`.
