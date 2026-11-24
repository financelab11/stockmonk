# Stockmonk — project context

Read this file before changing the project. It is the shared context for coding
agents and contributors. If a change alters structure, data flow, deployment or
conventions, update this file in the same commit.

## What Stockmonk is

Stockmonk is an independent, data-first equity research PWA focused on the US
market. It explains how a business makes money, charts reported financials and
shows attributed third-party consensus. It never publishes buy/sell/hold ratings
or Stockmonk price targets.

Coverage: **229 hand-written ten-section US reports** and a matching 229-row
quantitative screener. India and GCC coverage have been removed from the product,
the codebase, the file datasets and the database. SimFin has been removed
completely; SEC EDGAR supplies fundamentals and Yahoo Finance supplies prices,
market data and company profiles.

## Stack

- Next.js 16.4 App Router, React 19, TypeScript strict
- Tailwind CSS 4 with tokens in `app/globals.css`
- Zod schemas in `lib/schemas.ts`
- Serwist PWA, lightweight-charts, Recharts, Fuse.js
- Supabase (`@supabase/supabase-js`, `@supabase/ssr`) for database/auth/realtime
- Vitest unit tests, Playwright e2e, Lighthouse CI
- pnpm

## Commands

```bash
pnpm dev                 # local dev
pnpm build               # content validator + screener data + Next build
pnpm start
pnpm typecheck
pnpm lint
pnpm test
pnpm e2e
pnpm lhci
pnpm sync:supabase       # push file datasets to Supabase (service role required)
pnpm ingest:edgar        # SEC XBRL fundamentals for the research names
pnpm ingest:fundamentals # Yahoo prices, market data and profiles
pnpm refresh             # EDGAR, Yahoo fundamentals, consensus, segments, benchmark
pnpm refresh:prices      # Yahoo closes for the US research names
pnpm refresh:stories     # regenerate data-driven sections for generated stories
pnpm research:packs      # rebuild per-company research packs
pnpm research:apply      # apply curated rewrite batches to the seven data sections
pnpm research:normalize  # normalise analyst-distribution language
pnpm audit:research      # editorial/repetition gate
```

## Important paths

| Path                                                   | Purpose                                                    |
| ------------------------------------------------------ | ---------------------------------------------------------- |
| `app/`                                                 | App Router pages and API routes                            |
| `components/`                                          | Server/client components; design tokens from `globals.css` |
| `lib/data.ts`                                          | US data access (server-only, cached)                       |
| `lib/schemas.ts`                                       | Zod schemas for processed company data                     |
| `config/universe.ts`                                   | US research universe and ticker aliases                    |
| `data/{processed,consensus,prices,segments,earnings}`  | US file datasets                                           |
| `public/data/`                                         | Browser-served JSON, search index and price history        |
| `content/stocks/`                                      | US editorial reports                                       |
| `scripts/`                                             | Ingestion, build, validation and sync scripts              |
| `supabase/migrations/`                                 | Database schema and removal migrations                     |
| `utils/supabase/`                                      | Browser/server/middleware clients                          |
| `middleware.ts`                                        | Supabase session refresh                                   |

## Routes

- `/`, `/discover`, `/discover/all-stocks`, `/screener`
- `/stocks/[ticker]` — US report
- `/watchlist`, `/about`, `/framework`, `/data-sources`, legal pages
- `/api/data/screener-export` — CSV of the filtered US screener
- `/api/data/screener-count` — live count for the filter UI
- Legacy `/india/*`, `/gcc/*` and `/tools/growth-ranker/*` URLs permanently
  redirect to `/discover` or `/screener`; the pages no longer exist.

## Copy and number conventions

- Position the product as independent equity research. Lead with understanding
  the business, never with stock picks.
- Percentile labels always go through `formatOrdinal` (`72nd`, `51st`, `93rd`);
  never concatenate `th`. Ordinals are baked into `factorChips` detail strings,
  so after changing chip copy run `pnpm chips:rebuild && pnpm build:data &&
  pnpm build:screener`.
- Currency is USD everywhere: `$4.5B`, `$303B`. The India crore/lakh formatting
  has been removed.
- A segment chart is only a "revenue mix" when more than one segment is
  disclosed. A single consolidated line renders as "Reported revenue" with a
  note that no split is disclosed.
- Show the price date next to "Last close". The footer says "Market prices as
  of" and refers to market data only, not filing periods.
- Discover leads with the research directory. There is no hero, carousel or
  in-page Pro upsell; Pro appears only as the header link. Prices are labelled
  "vs prior close" and fundamentals say "(TTM)" so a percentage never appears
  without a period.
- Discover opens directly on the US directory: Featured Research / Data Quality
  / All Companies views. Cards carry the company name, ticker and sector,
  growth and profitability classifications, price, 1Y return, sparkline,
  revenue, operating margin and market cap. The directory defaults to 1Y
  returns, highest first, with market cap as the tie-breaker and missing
  returns last. Sort options also cover market cap, revenue growth, EPS growth,
  operating margin, growth percentile, revenue and name. Data quality is a
  14-point coverage score: High is 14, Moderate 11–13, Limited 10 or fewer.
- Navigation: primary nav is Discover and Screener. Watchlist, methodology and
  company pages live under More. The mobile bar is Discover, Screener,
  Watchlist, More. Header search is a US-only global overlay (`/` or
  Cmd/Ctrl+K).

## Refreshing the datasets

```bash
FORCE_REFRESH=1 pnpm refresh      # EDGAR, Yahoo fundamentals, consensus, segments, benchmark
pnpm refresh:prices               # Yahoo closes for all 229 US names
pnpm build:data && pnpm build:screener
pnpm audit:freshness              # fails if the US price snapshot is older than 3 days
```

`SKIP_PRICES=1` skips the price upsert when syncing Supabase. Known source gaps:
PSTG and ACLX have no current Yahoo history (delisted) and CRNX last traded
2026-08-31; those dates are last-traded, not failed refreshes. SPOT, MNDY, NBIS
and CAMT file Form 20-F and therefore report annually, so their pages use annual
periods.

## Screening data

- `public/data/screener.json` and `public/data/screener-factors.json` hold
  exactly the 229 research names. There is no bulk or expanded universe feed.
- `pnpm build:screener` rebuilds both files from `data/processed`. The build
  fails if it cannot produce one row per research ticker.
- Every row shares the same SEC fundamentals and Yahoo price snapshot. See
  "Supabase" for the database counts.

## Research report freshness

- `pnpm audit:stories` compares every story's newest quarter and explicit price
  with the dataset; it exits non-zero when a report is behind.
- `pnpm refresh:stories` regenerates the data-driven sections for stories that
  are still marked `generated`. Stories marked `curated` or `handwritten` are
  skipped so bespoke analysis is not overwritten.
- `pnpm audit:research` is the editorial gate: it checks the seven data-driven
  sections for cross-company sentence reuse, banned boilerplate, rating labels,
  short paragraphs and missing sections.
- The daily workflow runs the ingest, price refresh, story refresh for generated
  names, freshness audits and commits `data`, `public/data` and `content`.
- Curated reports are refreshed with `pnpm research:packs` and
  `pnpm research:apply` when a material new filing changes the analysis. The
  pack builder is `scripts/build-research-packs.ts`; rewrites live under
  `data/raw/rewrites` and are applied only to the seven data-driven sections.
- Never hand-edit a generated section to a specific number; change the data or
  the generator instead.
- Report section 10 is "Key takeaways and what to monitor" (not "the bottom
  line for learners").

## Product rules (non-negotiable)

1. No buy, sell or hold ratings. No Stockmonk price targets.
2. Consensus is third-party, attributed and dated. Never present it as our own.
3. Every quantitative claim in an editorial report must trace to a processed
   field or a cited filing.
4. Prefer server components and static content; client islands only for state.
5. Add a Zod schema before adding a data field.
6. Use design tokens/component classes; avoid ad-hoc colours.
7. Verify before shipping: typecheck, lint, test, build, e2e.

## Data pipeline

- US: SEC EDGAR XBRL fundamentals + Yahoo Finance prices/market data, processed
  JSON, screener data, hand-written stories. `data/raw/` is local ingestion input
  and is gitignored.
- `pnpm ingest:edgar` writes `data/processed/{ticker}/sec.json`. It handles
  10-K/10-Q filers, 20-F/IFRS filers (converted to USD with Yahoo FX), bank and
  insurer tag variants, and a predecessor-CIK merge for holding-company
  reorganisations such as XOM.
- `pnpm ingest:fundamentals` combines `sec.json` with Yahoo prices, market cap,
  share count and profile, then writes `data.json`, `prices.json`, the public
  price ranges, `stocks.json`, `search-index.json` and `meta.json`.
- No India, GCC, forward-ranker or SimFin pipelines remain. The `data/india`,
  `data/gcc`, `data/growth-ranker`, `public/data/india`, `public/data/gcc`,
  `public/logos/india`, `content/india-stocks` and `content/gcc-stories`
  directories were deleted, along with their scripts and workflows.

## Supabase

Project URL and publishable key are in `.env.local` / Vercel env. The service-role
key is server-only and must never be exposed with `NEXT_PUBLIC_`.

Schema lives in `supabase/migrations/202611170001_initial_schema.sql`, with
`202611230001_remove_india_gcc.sql` deleting the India/GCC companies, stories,
aliases and coverage groups, dropping the India-only `forward_estimates` table
and `forward_growth_ranking` view, and restricting `companies.market` to `US`.
`202611230002_remove_simfin.sql` removes any remaining SimFin keys from company
metadata, story sources, freshness rows and ingestion logs.

Tables:

- companies, aliases, coverage groups
- prices_daily, financial_periods, financial_metrics, segments, fx_rates
- consensus_estimates, consensus_targets
- stories
- profiles, watchlists, watchlist_items
- company_snapshots, ingestion_runs, data_freshness

Realtime is enabled for snapshots, news, freshness, consensus targets and
watchlists. `pg_cron` refreshes `company_snapshots` at 02:15 UTC and
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
- **Hobby plan function budget.** A deployment may contain at most 12 bundled
  serverless functions. Keep the dynamic route count low and never add a
  blanket `outputFileTracingIncludes` rule: a `"/*": ["./data/**/*.json"]`
  entry pulls thousands of files into every function, which makes Vercel count
  the output as way over the budget and fails the deploy with
  `exceeded_serverless_functions_per_deployment` even though `next build`
  succeeds. Import datasets through literal paths (or a directory-scoped
  read) so Next's own tracing stays small.
- Vercel env (production, preview, development): `NEXT_PUBLIC_SUPABASE_URL`,
  `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `NEXT_PUBLIC_SITE_URL`. Server-side
  jobs additionally need `SUPABASE_SERVICE_ROLE_KEY` (or
  `SUPABASE_DB_PASSWORD` when using `pnpm sync:supabase:direct`). No vendor
  fundamentals key is required.

## Current deployment state

- Everything is committed and pushed to `origin/main`.
- Supabase schema is applied to project `fqzfmvnmmiisvtgnsyqa` (Tokyo pooler,
  `aws-0-ap-northeast-1.pooler.supabase.com:6543`).
- Migrations `202611230001_remove_india_gcc.sql` and
  `202611230002_remove_simfin.sql` have been applied. The `companies` table
  contains the 229 US research names; no SimFin provenance remains.
- All 229 reports are marked `curated`. `pnpm audit:research` passes with zero
  cross-company duplicate sentences and zero banned boilerplate.
- `pnpm sync:supabase:direct` refreshes the US data with `SUPABASE_DB_PASSWORD`;
  `pnpm sync:supabase` does the same over PostgREST with
  `SUPABASE_SERVICE_ROLE_KEY`.
- GitHub-linked auto-deploy is active: every push to `main` builds a production
  deployment on Vercel. Pushing is automated by `.githooks/post-commit`.

## Change protocol

Every change should:

1. update this file if architecture, routes, data flow, schema or conventions change;
2. run the relevant verification;
3. be committed to GitHub with a descriptive message.

The intent is that a new agent can read `CLAUDE.md`, `README.md` and the latest
commit and start without re-reading the whole repository.

<!-- AUTO_CONTEXT_START -->
_Context snapshot 2026-11-24: 229 US names, 4 database migration(s)._
<!-- AUTO_CONTEXT_END -->
