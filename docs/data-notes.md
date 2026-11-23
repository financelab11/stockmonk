# Data notes

## Sources

| Layer | Source | Used for |
| --- | --- | --- |
| Fundamentals | SEC EDGAR XBRL company facts | Income statement, balance sheet and cash flow for all 229 companies |
| Prices and profile | Yahoo Finance | Daily adjusted prices, 52-week range, returns, market capitalisation, share count and company profile |
| Analyst consensus | Yahoo Finance (primary), Nasdaq (cross-check / fallback) | Attributed target range, recommendation distribution, forward estimates, EPS surprises |
| Segment mix | Company 10-K XBRL dimensional facts | Reportable segments, product categories and geography mix |
| Logos | CompaniesMarketCap logo CDN | Local brand thumbnails; initials fallback in the UI |

The pipeline needs no fundamentals-vendor key. SEC EDGAR and Yahoo Finance are
public sources; the only server-side secret is the Supabase service role used by
the database sync.

## Refresh pipeline

```bash
pnpm ingest:edgar        # SEC XBRL statements for the 229 research names
pnpm ingest:fundamentals # Yahoo prices, market data and company profiles
pnpm ingest:consensus    # third-party consensus snapshots
pnpm ingest:segments     # 10-K segment and geography mixes
pnpm build:data          # regenerate public/data/stocks.json + search-index.json
```

Each script writes deterministic JSON under `data/` and `public/data/`. The app
reads the processed files at build/revalidate time, so a deploy picks up new
data without any client-side API keys.

## Fiscal periods

- Annual periods are keyed by the fiscal year **end date** derived from SEC
  facts. SEC's own `fy` field is not used because it reflects the filing year,
  not the economic period.
- Only `fp === "FY"` or `form === "10-K"` facts define an annual period. A
  `20-F` annual report is treated the same way for foreign private issuers.
- Quarterly flow facts are derived from cumulative YTD XBRL values by pairing
  periods that share a start date. Q4 is FY minus Q1–Q3.
- TTM is the sum of the latest four discrete quarters. It is labelled with the
  most recent quarter's fiscal year and report date.
- Balance-sheet values are point-in-time facts matched to the period end. Debt
  is the reported long-term debt plus short-term borrowings/commercial paper;
  cash and investments include short- and long-term marketable securities.
- IFRS filers are converted to USD using the Yahoo Finance period-end FX rate.
  Their XBRL history is annual, so those pages show annual periods.

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
- **Foreign private issuers.** Companies that file Form 20-F report annually,
  so EDGAR has no quarterly XBRL statements. Spotify, monday.com, Nebius and
  Camtek are shown by fiscal year; On Holding has a partial interim XBRL record.
  IFRS figures are converted to USD at the period-end Yahoo Finance FX rate.
- **Delisted names.** ACLX, CRNX and PSTG were acquired in 2026 and no longer
  have a live Yahoo quote. Their last available price series is kept and dated
  rather than dropping them from the 229-name library.

## Universe

The coverage universe lives in `config/coverage.ts` (229 companies plus SPY as a
benchmark). The research ticker list in `config/universe.ts` derives from those
coverage groups, so every name receives a full report. All 229 names have a
hand-written `content/stocks/{ticker}.ts` narrative, authored against a
per-company brief that draws on the processed dataset and the latest SEC
filing. The original ten core names are:

`NVDA, MSFT, AAPL, GOOGL, AMZN, META, AVGO, TSLA, LLY, JPM`

`GOOGL` uses Alphabet's SEC CIK; processed files always use the app ticker
`GOOGL`. Yahoo's quote symbol is also `GOOGL`.

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

- Fundamentals: SEC EDGAR — <https://www.sec.gov/edgar/search/>
- Prices, market data and company profiles: Yahoo Finance — <https://finance.yahoo.com/>
- Consensus: Yahoo Finance and Nasdaq, named on every consensus panel.
- Logos: CompaniesMarketCap logo CDN, used for identification only. See
  `public/logos/ATTRIBUTION.md`. Missing or removed logos fall back to a
  typographic monogram.
