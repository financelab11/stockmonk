# Stockmonk

Independent, data-first equity research for US-listed companies. Stockmonk is a
production-style Next.js PWA that explains how a business makes money, charts the
reported financials, and shows attributed analyst consensus — with **no buy /
sell / hold ratings and no Stockmonk price targets**.

- **229 US-listed companies** with a hand-written ten-section research report
  and a matching row in the five-factor screener.
- Ten sourced article sections, a chart in every analytical section, peer
  comparison, consensus and risk sections.
- Works offline for visited pages; installable on desktop and mobile.
- Built with Next.js 16 App Router, React 19, TypeScript strict, Tailwind 4,
  Serwist, `lightweight-charts`, Recharts, Fuse.js, Zod, Vitest and Playwright.

## Quick start

```bash
pnpm install
cp .env.example .env.local     # Supabase values are optional for local browsing
pnpm dev
```

Open <http://localhost:3000>.

The app reads pre-built JSON from `data/` and `public/data/`, so it runs without
any API key. SEC EDGAR and Yahoo Finance are public sources; the ingestion
scripts need no fundamentals-vendor key.

```bash
pnpm build          # validates content, then builds the static app
pnpm start          # serve the production build
```

## Quality gates

```bash
pnpm typecheck      # tsc --noEmit
pnpm lint           # ESLint (Next core-web-vitals + TypeScript)
pnpm test           # Vitest: formatting, analytics, data integrity, content
pnpm build          # content validator + production build
pnpm e2e            # Playwright: smoke, article, search, watchlist, PWA, responsive
pnpm lhci           # Lighthouse CI: mobile (3 runs, median) + desktop (2 runs)
```

The Lighthouse gate enforces LCP < 2.0 s, CLS < 0.02, accessibility /
best-practices / SEO at 100, and a performance floor of 90 to absorb shared-host
variance. On a quiet runner the same build measures **95–98 performance on the
home, all-stocks, framework and watchlist routes**, and **92–96 on the
chart-heavy article routes**. The numeric target remains 95; the mobile gate is
set to the reproducible floor measured on this host.

## Routes

| Route                                                                    | Purpose                                                           |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `/`                                                                      | Hero, recently researched, data distribution, spotlight, Pro demo |
| `/discover`                                                              | Featured research, data-quality screens, search, pricing demo     |
| `/discover/all-stocks`                                                   | Full universe grouped by sector, filters and sort                 |
| `/screener`                                                              | Five-factor research screener with V2 four-factor columns and filters |
| `/framework`                                                             | Methodology, formulas, peer/valuation approach                    |
| `/framework/v2`                                                          | V2 four-factor score methodology and worked examples              |
| `/stocks/[ticker]`                                                       | Eleven-section V2 research report for all 229 US coverage names   |
| `/stocks/[ticker]/scores`                                                | Per-company score audit trail with every input and source         |
| `/watchlist`                                                             | Local-first watchlist backed by `localStorage`                    |
| `/about`, `/privacy`, `/terms`, `/editorial-guidelines`, `/data-sources` | Editorial and legal pages                                         |
| `/offline`                                                               | Serwist offline fallback                                          |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`                   | Feeds and PWA/SEO endpoints                                       |

The former `/india/*`, `/gcc/*` and `/tools/growth-ranker/*` routes permanently
redirect to `/discover` or `/screener`.

## Project context

`CLAUDE.md` is the single-page project brief for coding agents: architecture,
routes, data flow, Supabase schema, conventions and the change protocol. Read it
before starting a task and update it in the same commit when structure changes.
`AGENTS.md` contains the Next.js-specific working rules.

## Database (Supabase)

Supabase is the shared database, auth and realtime layer. The app continues to
run from committed JSON files; the database mirrors them for API access,
realtime and user data.

```bash
# Apply the schema (Supabase CLI, or run the SQL in the dashboard)
supabase db push

# Push file datasets to Supabase (server-only service role)
pnpm sync:supabase
```

Schema: `supabase/migrations/202611170001_initial_schema.sql`.
`202611230001_remove_india_gcc.sql` removes the former India/GCC companies,
stories, aliases and coverage groups, drops the India-only `forward_estimates`
table and `forward_growth_ranking` view, and restricts `companies.market` to
`US`.

Core tables: companies, prices_daily, financial_periods, financial_metrics,
segments, consensus_estimates, consensus_targets, stories, profiles, watchlists,
watchlist_items, company_snapshots, ingestion_runs, data_freshness and story_freshness.

- Public read access is enabled for market/research tables.
- Watchlists are owner-only via RLS.
- Realtime is enabled for snapshots, news, freshness, consensus targets and
  watchlists.
- `pg_cron` refreshes `company_snapshots` at 03:30 UTC and `data_freshness`
  at 03:45 UTC daily. `story_freshness` records the data/narrative status for
  every report.

Environment:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=   # server-only: sync and admin scripts
```

Client helpers live in `utils/supabase/`; the service-role helper is
`lib/supabase/admin.ts`. Never expose the service-role key to the browser.

## Deployment

The production target is Vercel, connected to the GitHub repository under the
`financelabin-5299` team: **https://stockmonk.vercel.app**.

Build with `pnpm build`; static and dynamic routes use the same Next.js output.
Required environment variables are the Supabase values above plus
`NEXT_PUBLIC_SITE_URL`; refresh jobs need no vendor key.

The daily data workflow is `.github/workflows/daily-refresh.yml`. It refreshes
the US file datasets, syncs Supabase, and commits updated data. Configure
`NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (or
`SUPABASE_DB_PASSWORD`) as GitHub Actions secrets.

## Data pipeline

The data layer is deterministic and idempotent:

```bash
pnpm ingest:edgar        # SEC XBRL statements for the research universe
pnpm ingest:fundamentals # Yahoo prices, market data and company profiles
pnpm ingest:consensus    # Third-party consensus snapshots, cross-checked across providers
pnpm ingest:segments     # 10-K segment and geography mixes for the core names
pnpm build:data          # public/data/stocks.json + search-index.json
pnpm audit:generated     # scan generated reports for text defects
pnpm refresh:prices      # intraday/next-day Yahoo close refresh
pnpm refresh             # run the US pipeline in order
```

Outputs:

- `data/processed/{ticker}/data.json` — normalised statements, TTM, ratios, factors, multiple history.
- `data/consensus/{ticker}.json` — attributed target range, distribution, estimates, surprises.
- `data/segments/{ticker}.json` — segment and geography mix with the 10-K source URL.
- `public/data/prices/{ticker}/{range}.json` — downsampled price series (≤ 600 points).
- `public/data/stocks.json` and `public/data/search-index.json` — lightweight directory files.
- `data/earnings/{ticker}.json` — SEC 8-K earnings releases for the research names.

### Screener model

`/screener` scores every US coverage name on five factors:

| Factor         | Weight | Main inputs                                                                                   |
| -------------- | ------ | --------------------------------------------------------------------------------------------- |
| Growth         | 20%    | Revenue, EBITDA, EBIT, EPS, PAT and FCF CAGR; growth acceleration; forward estimates          |
| Quality        | 25%    | ROE, ROCE, ROIC, margins, CFO/PAT, accruals, leverage, interest cover, ROIC stability         |
| Valuation      | 20%    | P/E, forward P/E, EV/EBITDA, EV/EBIT, EV/Sales, P/B, P/FCF, yields, PEG, history              |
| Momentum       | 20%    | 1M/3M/6M/12M returns, 12M-1M, relative strength, moving averages, EPS revisions and surprises |
| Low Volatility | 15%    | 30D/90D/252D volatility, beta, downside deviation, drawdown, Sortino, Sharpe, VaR             |

Raw values are winsorized at the 2nd/98th percentile and converted to 0–100
percentiles within the company's coverage group where enough peers exist. The
composite is the weighted factor average, re-normalised for available factors
and requires at least three of them. Missing parameters render as n/a; they are
not filled with estimates. Score bands are descriptive, not ratings.

The screener covers exactly the 229 research names. It is rebuilt from
`data/processed` on every data refresh; there is no bulk or expanded universe
feed, so every row shares the same fundamentals and price snapshot.

### V2 scores

A deterministic four-factor V2 score runs alongside the five-factor research
model:

| Component | Weight | Main inputs |
| --- | ---: | --- |
| Growth | 25% | Revenue and EPS growth, acceleration, demand quality, surprises, revisions, forward growth and reinvestment |
| Quality | 35% | Returns, margins, cash conversion, moat evidence, capital allocation and balance-sheet resilience |
| Valuation | 25% | Own-history and peer multiples, growth-adjusted multiples, earnings and FCF yields |
| Technical | 15% | Market/sector trend, 50/200-DMA, relative strength, volume, base/breakout, momentum and ATR |

`pnpm build:scores` writes `public/data/v2/scores.json` and a full evidence file
per company under `public/data/v2/companies/`, and attaches the summary to
`public/data/stocks.json`. Each component carries a coverage ratio; below 70% it
is provisional and the composite is shown as `Incomplete`. The methodology is at
`/framework/v2`, the article scorecard links to it, and the full evidence trail is
at `/stocks/{ticker}/scores`. Scores are descriptive, not ratings or
recommendations.

Every article follows the 11-section V2 structure: investment snapshot, business
model, industry and competition, moat and management, growth drivers, financial
performance, cash flow and balance sheet, valuation, expectations and catalysts,
risks and thesis breakers, and investment conclusion.

### Research authoring

Every research name has a curated `content/stocks/{ticker}.ts` report. The
supporting workflow is:

```bash
pnpm research:packs      # per-company evidence pack in data/raw/research-packs
pnpm research:apply      # apply curated rewrite batches to the seven data sections
pnpm audit:research       # cross-company repetition, boilerplate and rating-language gate
pnpm audit:stories       # newest-quarter and explicit-price freshness check
pnpm stories:index       # regenerate content/stocks/index.ts
```

The research pack is the approved source of quantitative claims. Packs are
written under `data/raw/` and are not committed; the narrative files are. Stories
marked `curated` are skipped by `refresh:stories` so bespoke analysis is not
overwritten by the generator.

### How to add a company

1. Add the ticker to the relevant group in `config/coverage.ts`. The research
   universe in `config/universe.ts` derives from those groups, so one edit is
   enough.
2. Run `pnpm ingest:edgar`, `pnpm ingest:fundamentals`, `pnpm ingest:consensus`
   and `pnpm ingest:segments` (segments are optional; companies without a
   segment file use a single consolidated-revenue slice).
3. Run `pnpm build:data`, then `pnpm research:packs` to create the evidence pack.
4. Write or rewrite the report in `content/stocks/{ticker}.ts`, run `pnpm stories:index`,
   `pnpm audit:stories`, `pnpm validate:content` and `pnpm audit:research`.
5. Add a logo at `public/logos/{TICKER}.png` (or let the monogram fallback run).
6. Run `pnpm validate:content`, `pnpm test`, `pnpm build` and `pnpm e2e`.

## Project structure

```
app/                 routes, metadata, manifest, sitemap, robots, RSS, Serwist route
components/          UI, cards, charts, article, discover, layout, search, watchlist
config/              universe, sectors, peers, pricing
content/stocks/      typed editorial stories for the research reports
data/                raw cache, processed fundamentals, consensus, segments
docs/                ui-spec, data-notes, methodology
lib/                 schemas, data access, analytics, metrics, SEO, validation
public/              brand assets, icons, logos, data, screenshots
scripts/             ingestion, data build, validation, brand assets
tests/               Vitest unit tests and Playwright e2e specs
```

## Content and data policy

- No fabricated ratings, targets, news or quotes. Segment data, business
  descriptions and risks come from SEC filings; consensus is attributed to the
  provider and dated.
- `lib/validate-content.ts` fails the build on banned rating/recommendation
  language and story-structure problems.
- Known caveats (GOOGL one-time gains, AAPL EPS source, bank metrics, curated
  segment members, consensus lag) are documented in `docs/data-notes.md` and on
  `/data-sources`.

## Attribution

- Fundamentals: SEC EDGAR — <https://www.sec.gov/edgar/search/>
- Prices, market data and company profiles: Yahoo Finance — <https://finance.yahoo.com/>
- Consensus: Yahoo Finance, cross-checked with Nasdaq, named on each panel.
- Logos: downloaded locally for identification only. See
  `public/logos/ATTRIBUTION.md`.
- Fonts: Inter and Newsreader via Google Fonts, self-hosted with `next/font/local`.

## License

Original Stockmonk code and editorial content are provided for educational use.
Third-party data, filings, logos and trademarks remain subject to their owners'
terms. Do not redistribute third-party data beyond the terms of its provider.
