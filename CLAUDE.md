# Stockmonk — project context

Read this file before changing the project. It is the shared context for coding
agents and contributors. If a change alters structure, data flow, deployment or
conventions, update this file in the same commit.

## What Stockmonk is

Stockmonk is an independent, data-first equity research PWA focused on the US
market. It explains how a business makes money, charts reported financials and
shows attributed third-party consensus. It never publishes buy/sell/hold ratings
or Stockmonk price targets.

Coverage: **3,696 scored US companies**. The 500-name research library keeps its
bespoke ten-section reports; every other score name gets the four-factor score and
the full evidence page, with research coverage marked as coming soon. India and
GCC coverage have been removed from the product, the codebase, the file datasets
and the database. SimFin has been removed completely; SEC EDGAR supplies
fundamentals and Yahoo Finance supplies prices, market data and company profiles.

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
pnpm build               # content validator + scores + screener + portfolios + Next build
pnpm build:web           # Vercel build; reuses committed score/portfolio artifacts
pnpm start
pnpm typecheck
pnpm lint
pnpm test
pnpm e2e
pnpm lhci
pnpm build:portfolios    # rebuild public/data/portfolios from the 3,696-name screen
pnpm build:portfolio-logos # regenerate the 105 name-relevant SVG logos
pnpm validate:portfolios # weights, universe, ETF, research-link and logo gate
pnpm sync:portfolios     # upsert portfolio tables (database password required)
pnpm sync:supabase       # push file datasets to Supabase (service role required)
pnpm ingest:edgar        # SEC XBRL fundamentals for the research names
pnpm ingest:fundamentals # Yahoo prices, market data and profiles
pnpm refresh             # EDGAR, Yahoo fundamentals, consensus, segments, benchmark
pnpm refresh:prices      # Yahoo closes for the US research names
pnpm refresh:stories     # regenerate data-driven sections for generated stories
pnpm detect:events       # compare filings/earnings/quarters/consensus with stories
pnpm stories:rewrite     # rewrite stories queued by detect:events
pnpm research:packs      # rebuild per-company research packs
pnpm research:apply      # apply curated rewrite batches to the seven data sections
pnpm research:normalize  # normalise analyst-distribution language
pnpm audit:research      # editorial/repetition gate
pnpm audit:freshness     # price/consensus/story freshness gate
pnpm audit:stories       # newest-quarter and explicit-price check
pnpm audit:numbers       # advisory numeric-drift report
```

## Important paths

| Path                                                  | Purpose                                                    |
| ----------------------------------------------------- | ---------------------------------------------------------- |
| `app/`                                                | App Router pages and API routes                            |
| `components/`                                         | Server/client components; design tokens from `globals.css` |
| `lib/data.ts`                                         | US data access (server-only, cached)                       |
| `lib/schemas.ts`                                      | Zod schemas for processed company data                     |
| `lib/portfolios/`                                     | Portfolio contracts, schemas, categories and data loader   |
| `config/portfolio-specs.ts`                           | 105 model-portfolio definitions and strategy rules         |
| `config/portfolio-themes.ts`                          | Curated theme membership from the coverage universe        |
| `public/data/portfolios/`                             | Generated index and one JSON file per model portfolio      |
| `config/universe.ts`                                  | US research universe and ticker aliases                    |
| `data/{processed,consensus,prices,segments,earnings}` | US file datasets                                           |
| `public/data/`                                        | Browser-served JSON, search index and price history        |
| `content/stocks/`                                     | US editorial reports                                       |
| `scripts/`                                            | Ingestion, build, validation and sync scripts              |
| `supabase/migrations/`                                | Database schema and removal migrations                     |
| `utils/supabase/`                                     | Browser/server/middleware clients                          |
| `middleware.ts`                                       | Supabase session refresh                                   |

## Routes

- `/`, `/discover`, `/discover/all-stocks`, `/screener`
- `/portfolio` - model-portfolio discovery, search, filters and sorting
- `/portfolio/[slug]` - overview/constituents tabs via `?tab=overview|constituents`
- `/portfolio/[slug]/report` - long-form portfolio research report
- `/stocks/[ticker]` - US report, 10 sections
- `/stocks/[ticker]/scores` - per-company score evidence
- `/watchlist`, `/about`, `/framework`, `/framework/scores`, `/data-sources`, legal pages
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
  operating margin, growth percentile, revenue, name and the four V2
  component scores plus the V2 composite. Data quality is a 14-point coverage
  score: High is 14, Moderate 11–13, Limited 10 or fewer.
- Navigation: primary nav is Portfolio, Discover and Screener. Watchlist,
  methodology and company pages live under More. The mobile bar is Portfolio,
  Discover, Screener, More; Watchlist is inside More. Header search is a US-only
  global overlay (`/` or Cmd/Ctrl+K).

## Refreshing the datasets

```bash
FORCE_REFRESH=1 pnpm refresh      # EDGAR, Yahoo fundamentals, consensus, segments, benchmark
pnpm refresh:prices               # Yahoo closes for all 500 US names
pnpm build:data && pnpm build:scores && pnpm build:screener && pnpm build:portfolios
pnpm validate:portfolios
pnpm audit:freshness              # fails if the US price snapshot is older than 5 days
```

GitHub Actions cron is UTC and starts scheduled runs late under load, so the
daily workflow tries 07:00–12:00 UTC and runs the first attempt after 03:00
America/New_York when `data/story-freshness.json` is not from today. If the
refresh fails after the guard, the remaining attempts retry it. The weekly SEC
workflow uses the same date-guard pattern over 16:00–19:00 UTC on Saturday and
records `data/weekly-sec-refresh.json` only after the rebuild succeeds. Isolated
Yahoo/OTC ticker failures are recorded in the metadata and tolerated; only a
systemic failure (no records or more than 5% failures) fails the daily job.

`SKIP_PRICES=1` skips the price upsert when syncing Supabase. Known source gaps:
PSTG and ACLX have no current Yahoo history (delisted) and CRNX last traded
2026-08-31; those dates are last-traded, not failed refreshes. SPOT, MNDY, NBIS
and CAMT file Form 20-F and therefore report annually, so their pages use annual
periods.

## Screening data

- `public/data/screener.json` and `public/data/screener-factors.json` hold the
  full 3,696-name score universe. The 500 research names remain the only names
  with a full ten-section report; every other row links straight to score
  evidence with "Research coverage coming soon".
- `config/score-universe.json` is the generated list of 3,196 additional names.
  Swap it from a CSV with `SCORE_UNIVERSE_FILE=... pnpm build:universe`; never
  hand-edit the generated file.
- `pnpm build:screener` rebuilds both files from `data/processed` (research) and
  `data/score-inputs` (score-only). The build warns rather than failing when a
  name has no processed data yet.
- Every row shares the same SEC fundamentals and Yahoo price snapshot. See
  "Supabase" for the database counts.

## V2 scores

- `lib/scoring-v2/` contains the deterministic four-factor engine: Growth 25%,
  Quality 35%, Valuation 25%, Technical 15%.
- `pnpm build:scores` writes `public/data/v2/scores.json` and one evidence file
  per company under `public/data/v2/companies/` for all 3,696 score names, then
  attaches the summary to `public/data/stocks.json` for the 500 research names.
- `pnpm build:kpis` writes the sector/theme KPI module under
  `public/data/v2/kpis/`; unavailable KPIs are marked N/A with a reason.
- `pnpm sync:v2` upserts the normalized `research_scores`,
  `research_evidence`, `company_kpis` and `research_articles` tables when a
  direct database password is configured.
- Every component has a coverage ratio. Below 70% it is `provisional`; if any
  component is below 70% the composite is `Incomplete` rather than a synthetic
  total. N/A inputs are excluded from the denominator, never scored as zero.
  The public pages show the provisional/incomplete state and the formula, but
  not numeric coverage percentages or per-metric source labels.
- Technical scores use SPY and sector ETFs. `pnpm ingest:benchmark` refreshes
  SPY, QQQ, IWM, DIA plus XLK, XLC, XLY, XLP, XLV, XLF, XLI, XLE, XLU, XLB and
  XLRE. Portfolio comparisons use the same benchmark files.
- The methodology is documented at `/framework/scores`; the article scorecard links
  to it. Scores are descriptive, not ratings or recommendations.
- Every company article follows the 10-section structure: investment snapshot,
  business model, industry and competition, growth drivers, financial performance,
  cash flow and balance sheet, valuation, expectations and catalysts, risks and
  thesis breakers, and investment conclusion. The scorecard appears in the
  snapshot and links to the per-company evidence audit at
  `/stocks/{ticker}/scores`.
- `pnpm build:scores` must run after `pnpm build:data` and before
  `pnpm build:screener` so the score fields reach the universe and the screener.

## Portfolio module

- `config/portfolio-specs.ts` defines 105 distinct strategies: 10 quantitative,
  15 thematic, 15 sector, 10 fundamental, 10 technical, 10 single-factor, 10
  multi-factor, 5 growth, 5 value, 5 quality/dividend, 5 defensive and 5
  small/mid-cap. Names, slugs, theses, factor weights, filters and benchmarks
  are explicit; do not generate superficial variants from the same holdings.
- `pnpm build:portfolios` ranks the existing 3,696-name screener rows with the
  existing V2 Growth/Quality/Valuation/Technical scores, applies strategy
  filters, selects and caps weights, verifies 100% totals, and writes
  `public/data/portfolios/index.json` plus one file per strategy.
- Thematic and narrow sector strategies use `config/portfolio-themes.ts`
  membership or precise industry labels. Never fill a theme with unrelated
  sector names. Every constituent must exist in the screener universe; ETFs,
  mutual funds and invented tickers are rejected by `pnpm validate:portfolios`.
- The 500 research-covered names link to `/stocks/{ticker}`; other names link
  to `/stocks/{ticker}/scores`. Missing research is shown, not hidden or
  duplicated.
- Performance is a clearly labelled **current-constituent simulation** from
  actual Yahoo price history, price-only and before fees. It is not a live
  track record. Rebalance events are only recorded events; review proposals are
  rules-based, dated, explainable and explicitly "proposed - not executed".
  Chart data is stored at full daily resolution and validated against the same
  benchmark-period return metrics, so the chart endpoint and KPI cannot drift.
  Construction and scheduled-review dates are always the first of the month.
- Portfolio bookmarks are local-first under `stockmonk:portfolios:v1` and appear
  in `/watchlist`. `202611270001_portfolios.sql` defines the relational
  persistence shape; no server sync is required for the current UI.
- Regenerate after changing the screener, scores, benchmark history or any
  portfolio spec: run `pnpm build:portfolios`, `pnpm build:portfolio-logos`
  and `pnpm validate:portfolios`. `build:web` consumes committed portfolio
  artifacts and does not need `data/score-inputs` on Vercel.
- `scripts/apply-portfolio-migration` is applied via Supabase;
  `pnpm sync:portfolios` upserts categories, portfolios, methodology,
  constituents, simulated performance, reports, review proposals and score
  snapshots.
  Bookmarks stay owner-only and local-first in the web UI until auth-backed
  bookmarks are enabled.

## Research report freshness

- Every story carries `narrativeUpdatedAt` and a generated entry in
  `data/story-freshness.json` with the latest price, quarter, 10-K/10-Q, 8-K,
  consensus and segment dates.
- `pnpm detect:events` compares those sources with the story metadata and the
  previous `data/state/pipeline-state.json`. A new quarter, filing, earnings
  release, material consensus revision or segment change marks the story
  `rewrite-pending`; a stale price marks it `data-stale`; a reviewed source gap
  is labelled `source-gap`.
- `pnpm audit:stories --strict` fails on any queued, stale or undated story.
  `pnpm audit:freshness --strict` also fails when the price or consensus source
  is too old. `pnpm audit:numbers` is an advisory report of prose numbers that
  look stale or cannot be traced to the current pack.
- `pnpm refresh:stories` regenerates the data-driven sections for stories that
  are still marked `generated` or `auto-curated`. Stories marked `curated` or
  `handwritten` are skipped so bespoke analysis is not overwritten.
- `pnpm stories:rewrite` rewrites the queued stories. With
  `REWRITE_PROVIDER=openai` and `REWRITE_API_KEY` (or `OPENAI_API_KEY`) it
  produces a full ten-section rewrite and validates every number against the
  research pack. Without a provider it uses the deterministic generator for the
  seven data sections and keeps the bespoke business-model, risk and bottom-line
  sections, marking the result `auto-curated`.
- `pnpm audit:research` is the editorial gate: it checks the seven data-driven
  sections for cross-company sentence reuse, banned boilerplate, rating labels,
  short paragraphs and missing sections. Stories marked `auto-curated` are
  exempt from the cross-company sentence-reuse check because their data sections
  are machine-refreshed; they still face every other editorial check.
- The daily workflow runs ingest, `detect:events`, `stories:rewrite`, a second
  `detect:events`, strict freshness/story audits, Supabase sync and commits
  `data`, `public/data` and `content`. The rewrite provider is optional; the
  deterministic fallback keeps data sections current without an LLM key.
- Curated reports are refreshed with `pnpm research:packs` and
  `pnpm research:apply` when a material new filing changes the analysis. The
  pack builder is `scripts/build-research-packs.ts` and now includes the latest
  8-K earnings release; rewrites live under `data/raw/rewrites`.
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
- `pnpm ingest:edgar` writes `data/processed/{ticker}/sec.json` for research
  names and `data/score-inputs/{ticker}/sec.json` for score-only names. It
  handles 10-K/10-Q filers, 20-F/IFRS filers (converted to USD with Yahoo FX),
  bank and insurer tag variants, and a predecessor-CIK merge for
  holding-company reorganisations such as XOM. The weekly job uses SEC's bulk
  companyfacts archive (`pnpm fetch:companyfacts`) so it does not make 3,000
  individual API requests.
- `pnpm ingest:fundamentals` combines `sec.json` with Yahoo prices, market cap,
  share count and profile, then writes `data.json` and `prices.json` to the
  research or score-only directory. Public price ranges are written only for
  the 500 chart pages; the score/screener artifacts are rebuilt separately.
- Score-only `data.json` and `prices.json` are gitignored and rebuilt daily.
  `sec.json` is versioned because it only changes when a filing lands.
- The daily workflow opens at 03:00 America/New_York and refreshes prices,
  consensus, scores and screener data. It is split into a data job and a
  narrative/sync job so neither exceeds GitHub's 6-hour runner limit. A separate
  Saturday job refreshes the SEC statements from the bulk archive.
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
- company_snapshots, ingestion_runs, data_freshness, story_freshness
- research_scores, research_evidence, company_kpis, research_articles

Realtime is enabled for snapshots, news, freshness, consensus targets and
watchlists. `pg_cron` refreshes `company_snapshots` at 03:30 UTC and
`data_freshness` at 03:45 UTC as a safety net; `pnpm sync:supabase` also calls
both refresh functions after every successful data sync.

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
  contains the 500 US research names; no SimFin provenance remains.
- All 500 reports are marked `curated`. `pnpm audit:research` passes with zero
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

_Context snapshot 2026-11-26: 3,696 scored US names (500 with full research
reports), 6 database migration(s)._
<!-- AUTO_CONTEXT_END -->
