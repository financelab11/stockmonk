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

## Copy and number conventions

- Position the product as independent equity research. Lead with understanding
  the business, never with stock picks.
- Percentile labels always go through `formatOrdinal` (`72nd`, `51st`, `93rd`);
  never concatenate `th`. Ordinals are baked into `factorChips` detail strings,
  so after changing chip copy run `pnpm chips:rebuild && pnpm build:data &&
  pnpm build:india && pnpm build:gcc && pnpm build:screener`.
- INR figures render in crore (`₹7,822 Cr`) through `formatCompactCurrency`;
  USD stays `$4.5B`/`$303B`. Never hard-code `₹…B`/`₹…T`.
- A segment chart is only a "revenue mix" when more than one segment is
  disclosed. A single consolidated line renders as "Reported revenue" with a
  note that no split is disclosed.
- Show the price date next to "Last close"; some India series are weekly, so the
  date can land on a weekend. The footer says "Market prices as of" and refers
  to market data only, not filing periods.
- Discover leads with the research library, not a Pro upsell. Pro appears once,
  after the results. Prices are labelled "vs prior close" and fundamentals say
  "(TTM)" so a percentage never appears without a period.
- Navigation: primary nav is Discover, Screener and Newsfeed. India, GCC, the
  growth ranker, watchlist, methodology and company pages live under More. The
  mobile bar is Discover, Screener, Watchlist, More. Header search is a global
  overlay that queries the US, India and GCC search indexes (`/` or Cmd/Ctrl+K).
- Report section 10 is "Key takeaways and what to monitor" (not "the bottom
  line for learners").

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

- GitHub: `financelab11/stockmonk`, remote `origin`, single branch `main`
  (repository default).
- Vercel: project `stockmonk` under team `financelabin-5299`, production domain
  **https://stockmonk.vercel.app**.
- Build `pnpm build`, install `pnpm install`, Node 24.x, framework preset
  Next.js.
- Vercel env (production, preview, development): `NEXT_PUBLIC_SUPABASE_URL`,
  `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `NEXT_PUBLIC_SITE_URL`. Server-side
  jobs additionally need `SIMFIN_API_KEY` and `SUPABASE_SERVICE_ROLE_KEY` (or
  `SUPABASE_DB_PASSWORD` when using `pnpm sync:supabase:direct`).

## Current deployment state

- Everything is committed and pushed to `origin/main` (and mirrored to
  `origin/master`).
- Supabase schema is applied to project `fqzfmvnmmiisvtgnsyqa` (Tokyo pooler,
  `aws-0-ap-northeast-1.pooler.supabase.com:6543`).
- Data is loaded through the direct Postgres fallback: 852 companies, 290,637
  prices, 14,839 statements, 1,716 consensus estimates, 385 forward estimates
  and 852 snapshots. `pnpm sync:supabase:direct` refreshes it with
  `SUPABASE_DB_PASSWORD`; `pnpm sync:supabase` does the same over PostgREST with
  `SUPABASE_SERVICE_ROLE_KEY`. Both paths are verified.
- Vercel production env also holds `SUPABASE_SERVICE_ROLE_KEY` (Secret, server
  only) alongside the three public Supabase values.
- GitHub Actions secrets are configured by hand in the repository
  (`SIMFIN_API_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_DB_PASSWORD`, plus
  `SUPABASE_SERVICE_ROLE_KEY`). The repository token cannot read or write them
  (`403` on `/actions/secrets`), so the token cannot trigger or inspect runs
  either; verify the daily refresh from the Actions tab.
- Vercel production is deployed from the CLI (`vercel --prod --yes
  --archive=tgz`) and healthy: site returns 200 and `/api/health/db` returns
  200 with live freshness rows.
- GitHub-linked auto-deploy **is** active: the project is linked to
  `financelab11/stockmonk` with production branch `main`, so every push to
  `main` builds a production deployment. Pushing is automated by
  `.githooks/post-commit`, which makes "commit" the only manual step.
- The supplied GitHub token can read and push commits but cannot change
  repository settings (`PATCH /repos` returns 403), so the default-branch
  switch and Actions secrets must be done in the GitHub UI.
- `master` is still the repository default and is now stale; delete it or
  switch the default to `main` in GitHub settings.

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
