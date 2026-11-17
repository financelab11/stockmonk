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

## GitHub Actions secrets

Add these in **GitHub → repository → Settings → Secrets and variables →
Actions → New repository secret**. Values live in `.env.local` locally (never
committed) or in the Supabase dashboard under **Project Settings → API** /
**Database**.

Required for the daily refresh and database sync:

| Secret | Where to get it |
| --- | --- |
| `SIMFIN_API_KEY` | SimFin account → API key (`.env.local`) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project Settings → API → Project URL |
| `SUPABASE_DB_PASSWORD` | Supabase → Project Settings → Database (`.env.local`) |

Optional overrides: `SUPABASE_SERVICE_ROLE_KEY` (enables the REST sync path
instead of direct Postgres), `SUPABASE_DB_HOST`, `SUPABASE_DB_USER`. When they
are absent or empty the scripts fall back to the Tokyo pooler
(`aws-0-ap-northeast-1.pooler.supabase.com:6543`, user
`postgres.fqzfmvnmmiisvtgnsyqa`).

## Push the current datasets

```bash
# REST path (service-role key)
pnpm sync:supabase

# Direct Postgres fallback (database password; Tokyo pooler)
pnpm sync:supabase:direct
```

The direct path uses `aws-0-ap-northeast-1.pooler.supabase.com:6543` with user
`postgres.fqzfmvnmmiisvtgnsyqa`. Override with `SUPABASE_DB_HOST`,
`SUPABASE_DB_PORT` and `SUPABASE_DB_USER` if the project moves.

Both paths dedupe rows on the conflict key, retry transient network failures,
and add forward-only Indian tickers so the `companies` table always holds the
852-name universe. Set `SKIP_PRICES=1` for a fast run that leaves
`prices_daily` untouched (the REST path re-upserts ~290k price rows otherwise,
which takes tens of minutes).

This upserts companies, prices, financial periods, metrics, segments, consensus,
targets and forward estimates, then calls `refresh_company_snapshots()` and
`refresh_data_freshness()`. It records an `ingestion_runs` row.

Current load: 852 companies, 290,637 daily prices, 14,839 statements, 1,716
consensus estimates, 385 forward estimates and 852 snapshots.

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
