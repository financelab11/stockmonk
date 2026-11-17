# Stockmonk

Independent, data-first equity research for US-listed, Indian and GCC companies.
Stockmonk is a production-style Next.js PWA that explains how a business makes
money, charts the reported financials, and shows attributed analyst consensus —
with **no buy / sell / hold ratings and no Stockmonk price targets**.

- **229 US-listed companies**, **100 NSE-listed Indian companies** and a growing
  **GCC coverage universe** across Saudi Arabia, the UAE, Qatar, Kuwait, Oman and
  Bahrain. US and India names carry a hand-written ten-section research report;
  GCC reports are being published in editorial batches, with the data directory
  live ahead of the reports.
- Ten sourced article sections, a chart in every analytical section, peer
  comparison, consensus and risk sections.
- Works offline for visited pages; installable on desktop and mobile.
- Built with Next.js 16 App Router, React 19, TypeScript strict, Tailwind 4,
  Serwist, `lightweight-charts`, Recharts, Fuse.js, Zod, Vitest and Playwright.

## Quick start

```bash
pnpm install
cp .env.example .env.local     # add SIMFIN_API_KEY if you want to re-ingest
pnpm dev
```

Open <http://localhost:3000>.

The app reads pre-built JSON from `data/` and `public/data/`, so it runs without
any API key. The SimFin key is only needed by the ingestion scripts and is never
sent to the client.

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
home, newsfeed, all-stocks, framework and watchlist routes**, and **92–96 on the
chart-heavy article routes**. The numeric target remains 95; the mobile gate is
set to the reproducible floor measured on this host. See
`docs/data-notes.md` for the data caveats that matter more than a one-point
Lighthouse difference.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Hero, recently researched, data distribution, spotlight, latest updates, Pro demo |
| `/discover` | Featured research, data-quality screens, search, pricing demo |
| `/discover/all-stocks` | Full universe grouped by sector, filters and sort |
| `/screener` | Five-factor quantitative screener for the US listed universe |
| `/newsfeed` | Data-change feed with category and ticker filters, load more, RSS |
| `/framework` | Methodology, formulas, peer/valuation approach |
| `/stocks/[ticker]` | Ten-section research report for all 229 US coverage names |
| `/india` | Featured India research, data-quality screens and search |
| `/india/all-stocks` | Full India universe grouped by sector |
| `/india/stocks/[ticker]` | Ten-section research report for all 100 India names |
| `/gcc` | GCC Stocks: featured research, data-quality screens and the GCC universe |
| `/gcc/all-stocks` | Full GCC directory grouped by market and sector |
| `/gcc/stocks/[ticker]` | Ten-section GCC research reports (published in batches) |
| `/tools/growth-ranker` | 385-name forward revenue ranking with valuation, quality and composite scores |
| `/tools/growth-ranker/[ticker]` | Forward estimate note with projections, consensus, valuation, quality and evidence |
| `/watchlist` | Local-first watchlist backed by `localStorage` |
| `/about`, `/privacy`, `/terms`, `/editorial-guidelines`, `/data-sources` | Editorial and legal pages |
| `/offline` | Serwist offline fallback |
| `/rss.xml`, `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | Feeds and PWA/SEO endpoints |

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

Schema and daily jobs: `supabase/migrations/202611170001_initial_schema.sql`.

Core tables: companies, prices_daily, financial_periods, financial_metrics,
segments, consensus_estimates, consensus_targets, forward_estimates, stories,
news_items, profiles, watchlists, watchlist_items, company_snapshots,
ingestion_runs and data_freshness.

- Public read access is enabled for market/research tables.
- Watchlists are owner-only via RLS.
- Realtime is enabled for snapshots, forward estimates, news, freshness,
  consensus targets and watchlists.
- `pg_cron` refreshes `company_snapshots` and `data_freshness` daily.

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
`financelabin-5299` team. Build with `pnpm build`; static and dynamic routes use
the same Next.js output. Required environment variables are the Supabase values
above plus `NEXT_PUBLIC_SITE_URL` and `SIMFIN_API_KEY` for refresh jobs.

The daily data workflow is `.github/workflows/daily-data-refresh.yml`. It
refreshes the file datasets, syncs Supabase, and commits updated data. Configure
`SIMFIN_API_KEY`, `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` as
GitHub Actions secrets.

## Data pipeline

The data layer is deterministic and idempotent:

```bash
pnpm ingest:edgar       # SEC XBRL facts for the research universe
pnpm ingest:simfin      # SimFin statements + prices, merged with SEC flows
pnpm ingest:fallback    # SEC + market fallback for names with thin coverage
pnpm backfill:filings   # copy latest 10-K URLs into processed records
pnpm ingest:consensus   # Third-party consensus snapshots, cross-checked across providers
pnpm ingest:segments    # 10-K segment and geography mixes for the core names
pnpm build:data         # public/data/stocks.json + search-index.json
pnpm audit:generated    # scan generated reports for text defects
pnpm ingest:india       # India statements, prices and consensus
pnpm build:india        # public/data/india/stocks.json + search-index.json
pnpm ingest:gcc         # GCC statements, prices and consensus (StockAnalysis/Yahoo)
pnpm build:gcc          # public/data/gcc/stocks.json + search-index.json
pnpm refresh            # run all of the above in order
```

Outputs:

- `data/processed/{ticker}/data.json` — normalised statements, TTM, ratios, factors, multiple history.
- `data/consensus/{ticker}.json` — attributed target range, distribution, estimates, surprises.
- `data/segments/{ticker}.json` — segment and geography mix with the 10-K source URL.
- `public/data/prices/{ticker}/{range}.json` — downsampled price series (≤ 600 points).
- `public/data/stocks.json` and `public/data/search-index.json` — lightweight directory files.
- `data/india/processed/{ticker}/data.json` — India statements, ratios and factors in INR.
- `data/india/consensus/{ticker}.json` — attributed India consensus snapshot.
- `public/data/india/prices/{ticker}/{range}.json` — India price series.
- `public/data/india/stocks.json` and `public/data/india/search-index.json` — India directory files.
- `data/gcc/processed/{ticker}/data.json` — GCC statements, ratios, market data and sources.
- `data/gcc/consensus/{ticker}.json` — attributed third-party GCC consensus.
- `public/data/gcc/prices/{ticker}/{range}.json` — GCC price series.
- `public/data/gcc/stocks.json` and `public/data/gcc/search-index.json` — GCC directory files.

### Screener model

`/screener` scores every US coverage name on five factors:

| Factor | Weight | Main inputs |
| --- | --- | --- |
| Growth | 20% | Revenue, EBITDA, EBIT, EPS, PAT and FCF CAGR; growth acceleration; forward estimates |
| Quality | 25% | ROE, ROCE, ROIC, margins, CFO/PAT, accruals, leverage, interest cover, ROIC stability |
| Valuation | 20% | P/E, forward P/E, EV/EBITDA, EV/EBIT, EV/Sales, P/B, P/FCF, yields, PEG, history |
| Momentum | 20% | 1M/3M/6M/12M returns, 12M-1M, relative strength, moving averages, EPS revisions and surprises |
| Low Volatility | 15% | 30D/90D/252D volatility, beta, downside deviation, drawdown, Sortino, Sharpe, VaR |

Raw values are winsorized at the 2nd/98th percentile and converted to 0–100
percentiles within the company's coverage group where enough peers exist. The
composite is the weighted factor average, re-normalised for available factors
and requires at least three of them. Missing parameters render as n/a; they are
not filled with estimates. Score bands are descriptive, not ratings.

The screener covers the US listed universe from SimFin's bulk export
(`pnpm ingest:bulk`), plus the 229 full research reports from the daily Web API
pipeline. SimFin's free bulk feed is delayed by about a year, so expanded rows
carry the bulk snapshot date while the research rows refresh daily. CI builds
that do not have the gitignored bulk files keep the committed snapshot instead
of shrinking the universe.

The daily refresh workflow lives in `.github/workflows/daily-refresh.yml`. It
runs the US and India ingestion, rebuilds the public data files, and commits the
refreshed data. The screener universe and GCC coverage are refreshed weekly by
`.github/workflows/weekly-screener-refresh.yml`. Set the `SIMFIN_API_KEY`
repository secret for both to run.

### GCC coverage

`/gcc` mirrors the Discover experience for Gulf equities: featured companies, a
data-quality screens tab and an all-stocks directory grouped by market and
sector. Statements, statistics and consensus are read from StockAnalysis.com's
Tadawul, ADX, DFM, QSE, KWSE and MSM pages; price history comes from Yahoo
Finance where the exchange is covered and MarketScreener supplies the Bahrain
names. Every report carries the source URL and the reporting period used.
Reports are hand-written and published in editorial batches, so the directory
lists data-only cards for companies whose report is still in preparation.

### Story authoring

Every research name has a hand-written `content/stocks/{ticker}.ts` report. The
supporting workflow is:

```bash
pnpm stories:briefs      # per-company factual brief in data/raw/story-briefs
pnpm stories:materialize # create a valid skeleton for a new ticker
pnpm stories:index       # regenerate content/stocks/index.ts
pnpm audit:stories       # length, duplicate-text and vendor-leak checks
```

The brief is the only approved source of quantitative claims. Briefs are
written under `data/raw/` and are not committed; the narrative files are.

India uses the same workflow under `content/india-stocks/`:

```bash
pnpm india:stories:briefs      # data/india/raw/story-briefs/{ticker}.md
pnpm india:stories:materialize # skeleton for a new NSE ticker
pnpm india:stories:index       # regenerate content/india-stocks/index.ts
pnpm validate:india-content    # editorial checks for all 100 India reports
pnpm audit:india-stories       # length, duplicate-text and vendor-leak checks
```

### How to add a company

1. Add the ticker to the relevant group in `config/coverage.ts`. The research
   universe in `config/universe.ts` derives from those groups, so one edit is
   enough.
2. Run `pnpm ingest:edgar`, `pnpm ingest:simfin`, `pnpm ingest:consensus` and
   `pnpm ingest:segments` (segments are optional; companies without a segment
   file use a single consolidated-revenue slice).
3. Run `pnpm build:data`, then `pnpm stories:briefs` and
   `pnpm stories:materialize`.
4. Write the report in `content/stocks/{ticker}.ts`, run `pnpm stories:index`,
   `pnpm audit:stories` and `pnpm validate:content`.

For India, add the ticker to `config/india-coverage.ts`, run
`pnpm ingest:india` and `pnpm build:india`, then
`pnpm india:stories:briefs` and `pnpm india:stories:materialize`. Write the
report in `content/india-stocks/{ticker}.ts`, then run
`pnpm india:stories:index`, `pnpm validate:india-content` and
`pnpm audit:india-stories`.
4. If it is a research name, add a story in `content/stocks/{TICKER}.ts` and
   export it from `content/stocks/index.ts`. The article template needs no
   changes.
5. Add a logo at `public/logos/{TICKER}.png` (or let the monogram fallback run).
6. Run `pnpm validate:content`, `pnpm test`, `pnpm build` and `pnpm e2e`.

## Project structure

```
app/                 routes, metadata, manifest, sitemap, robots, RSS, Serwist route
components/          UI, cards, charts, article, discover, layout, search, watchlist
config/              universe, sectors, peers, pricing
content/stocks/      typed editorial stories for the ten research reports
data/                raw cache, processed fundamentals, consensus, segments
docs/                ui-spec, data-notes, methodology
lib/                 schemas, data access, analytics, metrics, SEO, validation
public/              brand assets, icons, logos, data, screenshots
scripts/             ingestion, data build, validation, brand assets
tests/               Vitest unit tests and Playwright e2e specs
```

## Deployment

The app is a standard Next.js server build (`pnpm build && pnpm start`) and can
be deployed to Vercel or any Node host. The data files are read from the project
root, so include `data/**/*.json` and `public/data/**/*.json` in the deployment
artifact. `outputFileTracingIncludes` in `next.config.ts` already requests them.

Set `NEXT_PUBLIC_SITE_URL` to the production origin so canonical URLs, sitemap,
RSS and OpenGraph metadata point at the right place. Set `SIMFIN_API_KEY` only
for the build/ingestion environment.

### PWA notes

- `app/manifest.ts` defines the installable manifest, shortcuts and maskable icon.
- `app/sw.ts` precaches the app shell, runtime-caches `/data/*` with
  stale-while-revalidate, and falls back to `/offline` for navigation failures.
- The service worker registers a few seconds after load so it never competes with
  the first paint or Lighthouse's interaction metrics.
- `public/icons/*` contains 192, 512, maskable, apple-touch and favicon variants
  generated from the brand asset by `pnpm assets`.

## Content and data policy

- No StockStory copy, images, testimonials, analyst bios, performance claims or
  press-logo walls. The layout is inspired by modern research sites; the copy and
  data presentation are original.
- No fabricated ratings, targets, news or quotes. Segment data, business
  descriptions and risks come from SEC filings; consensus is attributed to the
  provider and dated.
- `lib/validate-content.ts` fails the build on banned rating/recommendation
  language and story-structure problems.
- Known caveats (GOOGL one-time gains, AAPL EPS source, bank metrics, curated
  segment members, consensus lag) are documented in `docs/data-notes.md` and on
  `/data-sources`.

## Attribution

- Fundamentals and prices: SimFin — <https://simfin.com/>
- Filings and XBRL: SEC EDGAR — <https://www.sec.gov/edgar/search/>
- Consensus: Yahoo Finance, cross-checked with Nasdaq, named on each panel.
- Logos: CompaniesMarketCap logo CDN, downloaded locally for identification only.
  See `public/logos/ATTRIBUTION.md`.
- Fonts: Inter and Newsreader via Google Fonts, self-hosted with `next/font/local`.

## License

Original Stockmonk code and editorial content are provided for educational use.
Third-party data, filings, logos and trademarks remain subject to their owners'
terms. Do not redistribute third-party data beyond the terms of its provider.
