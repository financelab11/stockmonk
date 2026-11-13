# Forward Revenue Growth Ranker

Route: `/tools/growth-ranker` (linked from the India Stocks tabs, primary nav and footer).

This is a **display module**. Upload, column mapping, name resolution, market-cap
filtering and batch runs have been removed. The page reads a completed snapshot of
forward estimates and shows every company that produced one.

## Dataset

`data/growth-ranker/estimates.json` contains:

- provenance: source workbook, job id, generation date;
- the FX rate used for the market-cap threshold;
- processed / estimated / skipped counts;
- full forecast results validated by `forecastResultSchema`.

Current snapshot: 89 names processed, 83 estimates, 6 skipped for lack of consensus.
The universe was the Refinitiv India Multifactor SectorNeutral 1000Cr workbook,
resolved to the Stockmonk India directory.

Regenerating the snapshot is an offline data task; the web app no longer exposes a
run button or job API.

## Ranking rules

- Rank by base-case three-year forward revenue CAGR:
  `(FY+3 / FY0)^(1/3) − 1`.
- FY0 is the last completed fiscal year and is shown explicitly.
- Bear and bull cases are a sensitivity band; they do not enter the rank.
- Historical revenue is displayed on each detail page as context only. It is not
  an input to the projection, the CAGR or the ranking.
- No consensus means no estimate. Skipped names are not filled with invented
  numbers.

## Routes

- `/tools/growth-ranker` — full ranked table (all estimates, no filtering UI).
- `/tools/growth-ranker/[ticker]` — projection, assumptions, risks, consensus
  check, sourced evidence and historical reference.

Both are server-rendered; there is no client-side wizard or polling.

## Verification

- `tests/unit/growth-ranker.test.ts` — dataset integrity, CAGR recomputation,
  ranking order and CSV export.
- `tests/e2e/growth-ranker.spec.ts` — full table renders and a detail page opens.
