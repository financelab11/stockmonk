# Stockmonk

Independent, data-first equity research for US-listed companies. Stockmonk is a
production-style Next.js PWA that explains how a business makes money, charts the
reported financials, and shows attributed analyst consensus — with **no buy /
sell / hold ratings and no Stockmonk price targets**.

- **229 companies** in the coverage universe, each with a hand-written
  ten-section research report. Every report is authored against a per-company
  factual brief, with quantitative claims tied to the processed dataset and
  the latest SEC filing.
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
| `/newsfeed` | Data-change feed with category and ticker filters, load more, RSS |
| `/framework` | Methodology, formulas, peer/valuation approach |
| `/stocks/[ticker]` | Ten-section research report for all 229 coverage names |
| `/watchlist` | Local-first watchlist backed by `localStorage` |
| `/about`, `/privacy`, `/terms`, `/editorial-guidelines`, `/data-sources` | Editorial and legal pages |
| `/offline` | Serwist offline fallback |
| `/rss.xml`, `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | Feeds and PWA/SEO endpoints |

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
pnpm audit:generated    # scan all 229 generated reports for text defects
pnpm refresh            # run all of the above in order
```

Outputs:

- `data/processed/{ticker}/data.json` — normalised statements, TTM, ratios, factors, multiple history.
- `data/consensus/{ticker}.json` — attributed target range, distribution, estimates, surprises.
- `data/segments/{ticker}.json` — segment and geography mix with the 10-K source URL.
- `public/data/prices/{ticker}/{range}.json` — downsampled price series (≤ 600 points).
- `public/data/stocks.json` and `public/data/search-index.json` — lightweight directory files.

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
