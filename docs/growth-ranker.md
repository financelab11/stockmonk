# Forward Revenue Growth Ranker

Route: `/tools/growth-ranker` (linked from the India Stocks tabs, primary nav and footer).

A display module for a completed, committed snapshot of **385 Indian companies**
with forward revenue estimates, valuation metrics and quality metrics.

## Data sources

- **Universe:** top Indian companies by market cap from the Refinitiv India
  Multifactor workbook.
- **Consensus:** Yahoo Finance revenue estimates (`0y` and `+1y` revenue mean and
  analyst count).
- **Forward fallback:** LSEG SmartEstimate revenue growth from the Refinitiv
  workbook where Yahoo consensus is missing.
- **Peer fallback:** median forward growth of consensus-covered companies in the
  same GICS sector.
- **Reported fundamentals:** Screener.in annual statements, balance sheet, cash
  flow and ROCE.
- **Valuation:** Yahoo Finance trailing/forward P/E, EV/EBITDA, PEG and free cash
  flow, with computed fallbacks.

Raw ingestion is cached under `data/growth-ranker/raw/` (gitignored). The committed
snapshot is `data/growth-ranker/estimates.json`.

## Forecast rules

- FY0 is the last completed fiscal year from Screener.in.
- FY+1/FY+2 use Yahoo consensus means when usable.
- FY+3 extends consensus-implied growth, faded 15%.
- If consensus is missing, FY+1 uses LSEG forward growth, otherwise the sector
  peer median; later years fade that forward growth.
- Historical growth is displayed only as context. It is never an input to the
  projection, CAGR or ranking.

## Ranking

Composite score:

- 50% growth percentile — base-case 3Y forward revenue CAGR.
- 30% valuation percentile — forward P/E and PEG (lower is better).
- 20% quality percentile — ROCE, ROE, EBIT margin and operating leverage.

Missing components are reweighted transparently. Banks and other financials
naturally show fewer EBIT/EV metrics; valuation still uses P/E and PEG.

## Columns

- Growth: 3Y forward CAGR.
- Valuation: P/E, forward P/E, EV/EBITDA, PEG, P/FCF.
- Quality: ROCE, ROE, EBIT %, EBIT growth, operating leverage.
- Composite score and method (consensus + extension, bespoke forward, bespoke
  peer).

## Routes

- `/tools/growth-ranker` — full ranked table.
- `/tools/growth-ranker/[ticker]` — projections, consensus check, valuation,
  quality, score breakdown, evidence and historical reference.
- `/api/tools/growth-ranker/export` — CSV of all ranked estimates.

## Regenerating

```bash
# 1. Extract the universe from the Refinitiv workbook
python scripts/extract-refinitiv.py

# 2. Ingest Yahoo consensus + Screener fundamentals (cached, resumable)
npx tsx scripts/ingest-growth-ranker.ts

# 3. Build the committed estimates snapshot
npx tsx scripts/build-growth-ranker-estimates.ts
```

## Verification

- `tests/unit/growth-ranker.test.ts` — dataset size, CAGR formula, scores,
  ranking order and CSV export.
- `tests/e2e/growth-ranker.spec.ts` — 200+ rows, valuation/quality columns and a
  detail page.
