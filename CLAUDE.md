# Stockmonk — project context

Read this file before changing the project. It is the shared context for coding
agents and contributors. If a change alters structure, data flow, deployment or
conventions, update this file in the same commit.

## What Stockmonk is

Stockmonk is an independent, data-first equity research PWA. It explains how a
business makes money, charts reported financials and shows attributed third-party
consensus. It never publishes buy/sell/hold ratings or Stockmonk price targets.

Coverage:
- **US:** 229 hand-written ten-section reports plus an expanded screener universe.
- **India:** 100 hand-written reports and a forward-growth ranker covering 385
  companies with consensus/valuation/quality metrics.
- **GCC:** 200-name universe, 90+ hand-written reports published in batches.

## Stack

- Next.js 16.4 App Router, React 19, TypeScript strict
- Tailwind CSS 4 with tokens in `app/globals.css`
- Zod schemas in `lib/schemas.ts`, `lib/growth-ranker/types.ts`
- Serwist PWA, lightweight-charts, Recharts, Fuse.js
- Supabase (`@supabase/supabase-js`, `@supabase/ssr`) for database/auth/realtime
- Vitest unit tests, Playwright e2e, Lighthouse CI
- pnpm

## Commands

```bash
pnpm dev                 # local dev
pnpm build               # validators + screener data + Next build
pnpm start
pnpm typecheck
pnpm lint
pnpm test
pnpm e2e
pnpm lhci
pnpm sync:supabase       # push file datasets to Supabase (service role required)
pnpm build:growth-ranker # rebuild the 385-name forward-estimate snapshot
```

## Important paths

| Path | Purpose |
| --- | --- |
| `app/` | App Router pages and API routes |
| `components/` | Server/client components; design tokens from `globals.css` |
| `lib/data.ts` | US data access (server-only, cached) |
| `lib/india-data.ts` | India data access |
| `lib/gcc-data.ts` | GCC data access |
| `lib/schemas.ts` | Zod schemas for processed company data |
| `lib/growth-ranker/` | Forward-estimate types, dataset reader, ranking |
| `data/{processed,consensus,prices,segments}` | US file datasets |
| `data/india/`, `data/gcc/` | India/GCC processed datasets |
| `data/growth-ranker/estimates.json` | Committed 385-name forward snapshot |
| `public/data/` | Browser-served JSON and price history |
| `content/stocks/`, `content/india-stocks/`, `content/gcc-stories/` | Editorial reports |
| `scripts/` | Ingestion, build, validation and sync scripts |
| `supabase/migrations/` | Database schema and daily jobs |
| `utils/supabase/` | Browser/server/middleware clients |
| `middleware.ts` | Supabase session refresh |

## Routes

- `/`, `/discover`, `/discover/all-stocks`, `/screener`, `/newsfeed`
- `/stocks/[ticker]` — US report
- `/india`, `/india/all-stocks`, `/india/stocks/[ticker]`
- `/gcc`, `/gcc/all-stocks`, `/gcc/stocks/[ticker]`
- `/tools/growth-ranker`, `/tools/growth-ranker/[ticker]`
- `/watchlist`, `/about`, `/framework`, `/data-sources`, legal pages
- `/tools/growth-ranker` is server-rendered from the committed dataset; it has no
  upload or run UI.
- `/api/tools/growth-ranker/export` — CSV of all forward estimates.

## Product rules (non-negotiable)

1. No buy, sell or hold ratings. No Stockmonk price targets.
2. Consensus is third-party, attributed and dated. Never present it as our own.
3. Historical growth is reference only in the forward ranker; it must not feed
   projections, CAGR or ranking.
4. Every quantitative claim in an editorial report must trace to a processed field
   or a cited filing.
5. Prefer server components and static content; client islands only for state.
6. Add a Zod schema before adding a data field.
7. Use design tokens/component classes; avoid ad-hoc colours.
8. Verify before shipping: typecheck, lint, test, build, e2e.

## Data pipeline

- US: SimFin/EDGAR ingestion, processed JSON, screener data, hand-written stories.
- India: Screener.in statements + Yahoo Finance consensus/prices, processed JSON.
- GCC: StockAnalysis/Yahoo ingestion, processed JSON, batched reports.
- Forward ranker: Yahoo consensus + Screener.in consolidated statements +
  Refinitiv/LSEG fallback, built into `data/growth-ranker/estimates.json`.
- `data/growth-ranker/raw/` and `Refinitiv/` are local ingestion inputs and are
  gitignored.

## Supabase

Project URL and publishable key are in `.env.local` / Vercel env. The service-role
key is server-only and must never be exposed with `NEXT_PUBLIC_`.

Schema lives in `supabase/migrations/202611170001_initial_schema.sql`:
- companies, aliases, coverage groups
- prices_daily, financial_periods, financial_metrics, segments, fx_rates
- consensus_estimates, consensus_targets, forward_estimates
- stories, news_items
- profiles, watchlists, watchlist_items
- company_snapshots, ingestion_runs, data_freshness

Realtime is enabled for snapshots, forward estimates, news, freshness, consensus
targets and watchlists. `pg_cron` refreshes `company_snapshots` at 02:15 UTC and
`data_freshness` at 02:30 UTC daily.

The app can run from files without Supabase. Supabase is the shared/realtime
store and the base for auth/watchlists. `pnpm sync:supabase` performs idempotent
upserts and logs an `ingestion_runs` row.

Client helpers:
- `utils/supabase/client.ts` — browser
- `utils/supabase/server.ts` — server components/route handlers
- `utils/supabase/middleware.ts` — session refresh
- `lib/supabase/admin.ts` — service-role admin (server only)

## Deployment

- GitHub: `financelab11` account; repository to be created/connected.
- Vercel: team `financelabin-5299`; deploy from the GitHub repository.
- Build command: `pnpm build`; install: `pnpm install`.
- Required Vercel env: `NEXT_PUBLIC_SUPABASE_URL`,
  `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `NEXT_PUBLIC_SITE_URL`,
  `SIMFIN_API_KEY` (only for refresh jobs), `SUPABASE_SERVICE_ROLE_KEY` (server
  jobs only).

## Current deployment state

- Local repository is committed on `master`; see `git log -1` for the latest
  commit. No `origin` remote is configured yet.
- Supabase schema is applied to project `fqzfmvnmmiisvtgnsyqa` (Tokyo pooler,
  `aws-0-ap-northeast-1.pooler.supabase.com:6543`).
- Data is loaded through the direct Postgres fallback: 852 companies, 290,637
  prices, 14,839 statements, 1,676 consensus estimates, 385 forward estimates
  and 852 snapshots. `pnpm sync:supabase:direct` refreshes it with
  `SUPABASE_DB_PASSWORD`.
- Vercel project `stockmonk` is linked under `financelabin-5299` and deployed
  in production at **https://stockmonk.vercel.app**. Supabase public env vars
  and `NEXT_PUBLIC_SITE_URL` are configured for production, preview and
  development. The deployment was made from the CLI; GitHub auto-deploy still
  needs the repository link.
- GitHub repo creation is blocked by token permissions. The supplied token
  authenticates as `financelab11` but returns 403 for repository creation
  (Administration write missing). Create an empty `financelab11/stockmonk`
  repository or supply a token with repository-creation rights, then add
  `origin` and push.

## Change protocol

Every change should:
1. update this file if architecture, routes, data flow, schema or conventions change;
2. run the relevant verification;
3. be committed to GitHub with a descriptive message.

The intent is that a new agent can read `CLAUDE.md`, `README.md` and the latest
commit and start without re-reading the whole repository.

<!-- AUTO_CONTEXT_START -->
_Context snapshot 2026-11-17: 229 US names, 100 India names, 187 GCC names, 385 forward estimates, 1 database migration(s)._
<!-- AUTO_CONTEXT_END -->
