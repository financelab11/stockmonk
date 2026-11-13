# Forward Revenue Growth Ranker

Route: `/tools/growth-ranker` (linked from the India Stocks tabs, primary nav and footer).

## What it does

1. Accepts CSV, XLSX or a pasted ticker/name list (up to 2,500 rows, 25 MB).
2. Detects ticker/name/exchange/market-cap columns; supports Refinitiv RIC identifiers.
3. Resolves rows against the current India directory, with fuzzy suggestions and manual overrides.
4. Applies a market-cap threshold in INR crore or USD million using a dated FX rate.
5. Runs a resumable batch: FY0 selection, consensus mapping, forward extension or a bespoke model.
6. Ranks by base-case forward revenue CAGR `(FY+3 / FY0)^(1/3) − 1`.

Historical growth is shown only as reference in each note. It is never read by the
forecast engine, the CAGR or the ranking.

## Configuration

All defaults live in `config/growth-ranker.ts`:

- `defaultMarketCapThreshold` — 1,000 INR crore.
- `minConsensusAnalysts` — 3.
- `divergenceFlagPct` — 0.10.
- `extensionFade` — 0.85 applied to forward consensus growth for extended years.
- `concurrency` / `retries` — 3 / 2.
- `fiscalYearEnd` — March 31 (base year is selected from actual report dates).

### FX

The dated reference rate is `data/fx/usd-inr.json` (`rate`, `asOf`, `source`).
Override with both:

```
GROWTH_RANKER_USD_INR=88.0
GROWTH_RANKER_FX_ASOF=2026-11-12
```

USD thresholds are disabled when no dated rate is available.

### Bespoke analyst model

The deterministic engine is consensus-led. To enable the bespoke model and the
independent sanity check, configure an OpenAI-compatible endpoint:

```
GROWTH_RANKER_LLM_BASE_URL=https://api.example.com/v1
GROWTH_RANKER_LLM_API_KEY=...
GROWTH_RANKER_LLM_MODEL=...
```

Without it, companies with no consensus are **skipped**, never invented.

### Job storage

Jobs are JSON files in the OS temp directory by default and survive page refresh
and server restart. Redirect them with `GROWTH_RANKER_JOB_DIR`.

## Providers

`lib/growth-ranker/providers.ts` defines swappable adapters:

- `ConsensusProvider`
- `EvidenceProvider`
- `AnalystProvider`

The current implementations read the India consensus dataset, NSE filing links and
the optional OpenAI-compatible model. A MarketScreener/Yahoo revenue-estimate
adapter can be added without touching the ranking or UI.

## Data coverage

Resolution uses the current India directory (100 names). Large uploads are accepted;
names outside coverage remain unmatched and can be exported as a coverage-gap CSV.
The attached Refinitiv workbook contains ~1,074 names above ₹1,000 crore, of which
89 currently resolve and 83 produce a forward estimate; the rest need fundamentals
and consensus ingested before they can enter the ranking.

## Verification

- `tests/unit/growth-ranker.test.ts` — CSV/XLSX parsing, fiscal year, CAGR, FX,
  estimate selection, zero-history-weight, ranking/export.
- `tests/e2e/growth-ranker.spec.ts` — paste → map → resolve → filter → run →
  refresh → results → drill-down.
