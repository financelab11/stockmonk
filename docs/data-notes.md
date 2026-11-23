# Data notes

## Sources

| Layer | Source | Used for |
| --- | --- | --- |
| Fundamentals | SimFin (free tier) | Income statement, balance sheet, cash flow, derived ratios for All companies |
| Regulatory flows | SEC EDGAR XBRL company facts + 10-K instance files | Revenue, net income, EPS and segment/geography facts for research names |
| Prices | SimFin daily adjusted prices | Price charts, 52-week range, returns, market cap and multiple history |
| Analyst consensus | Yahoo Finance (primary), Nasdaq (cross-check / fallback) | Attributed target range, recommendation distribution, forward estimates, EPS surprises |
| Segment mix | Company 10-K XBRL dimensional facts | Reportable segments, product categories and geography mix |
| Logos | CompaniesMarketCap logo CDN | Local brand thumbnails; initials fallback in the UI |

The SimFin API key is read only by build-time ingestion scripts. It is never
imported into a React component or exposed through `NEXT_PUBLIC_*`.

## Refresh pipeline

```bash
pnpm ingest:edgar      # SEC XBRL facts for the 229 research names
pnpm ingest:simfin     # SimFin statements + prices, merged with SEC flows
pnpm ingest:fallback   # SEC + market fallback for thin-coverage names
pnpm backfill:filings  # copy latest 10-K URLs into processed records
pnpm ingest:consensus  # third-party consensus snapshots
pnpm ingest:segments   # 10-K segment and geography mixes
pnpm build:data        # regenerate public/data/stocks.json + search-index.json
```

Each script writes deterministic JSON under `data/` and `public/data/`. The app
reads the processed files at build/revalidate time, so a deploy picks up new
data without any client-side API keys.

## Fiscal periods

- Annual periods are keyed by the fiscal year **end date** derived from SEC
  facts. SEC's own `fy` field is not used because it reflects the filing year,
  not the economic period.
- Only `fp === "FY"` or `form === "10-K"` facts define an annual period.
- Quarterly flow facts are derived from cumulative YTD XBRL values by pairing
  periods that share a start date. Q4 is FY minus Q1–Q3.
- TTM is the sum of the latest four discrete quarters. It is labelled with the
  most recent quarter's fiscal year and report date.
- SimFin report dates are matched to SEC periods within 7 days. SEC values win
  for revenue, gross profit, operating income, net income and diluted EPS; the
  remaining lines stay on SimFin.

## Known caveats

- **GOOGL one-time gains.** Alphabet's Q2 2026 net income and Q1 2026 EPS
  include large non-operating gains. Article copy flags this and the margin
  charts show the spike rather than smoothing it away.
- **AAPL EPS source.** Apple's Q4 FY2026 diluted EPS is `$2.10` per SEC.
  Nasdaq's adjusted figure is `$2.05`; the Yahoo consensus estimate was
  `$1.9852`. The report labels the source next to the number.
- **Bank metrics.** JPM does not have a meaningful free-cash-flow margin, ROIC
  or net-debt/EBITDA in this dataset. Those cells render as "n/a" and the
  report explains why rather than substituting a misleading proxy.
- **Segment definitions.** Apple and Lilly use curated member lists (product
  categories and therapeutic areas) because their XBRL dimensions do not map
  cleanly to reportable segments. All other research names use reportable
  segments. The label above each chart names the basis.
- **Consensus is third-party.** Target means, ranges, recommendation counts and
  estimates belong to the named providers. They are shown with attribution and
  are not Stockmonk ratings or price targets. Consensus snapshots can lag the
  market and are refreshed independently of prices.
- **Data-thin companies.** A small number of names with limited filings or
  price history show a lighter profile: no segment mix, no consensus snapshot
  and no full narrative. Their pages say so.

## Universe

The coverage universe lives in `config/coverage.ts` (229 companies plus SPY as a
benchmark). The research ticker list in `config/universe.ts` derives from those
coverage groups, so every name receives a full report. All 229 names have a
hand-written `content/stocks/{ticker}.ts` narrative, authored against a
per-company brief that draws on the processed dataset and the latest SEC
filing. The original ten core names are:

`NVDA, MSFT, AAPL, GOOGL, AMZN, META, AVGO, TSLA, LLY, JPM`

`GOOGL` maps to SimFin ticker `GOOG`; processed files always use the app ticker
`GOOGL`.

Story authoring uses a factual brief per company:

```bash
pnpm stories:briefs      # data/raw/story-briefs/{ticker}.md (not committed)
pnpm stories:materialize # valid skeleton for a ticker without a story
pnpm stories:index       # regenerate content/stocks/index.ts
pnpm audit:stories       # duplicate text, length and vendor-leak checks
```

Quantitative claims in `content/stocks/{ticker}.ts` must trace to the brief, a
processed field or the cited SEC filing.

## Attribution and licensing

- Fundamentals: SimFin — <https://simfin.com/>
- Filings: SEC EDGAR — <https://www.sec.gov/edgar/search/>
- Consensus: Yahoo Finance and Nasdaq, named on every consensus panel.
- Logos: CompaniesMarketCap logo CDN, used for identification only. See
  `public/logos/ATTRIBUTION.md`. Missing or removed logos fall back to a
  typographic monogram.
