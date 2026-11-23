# Methodology

This is the short version of the formulas used across the app. The public page
`/framework#methodology` renders the same rules in context.

## Periods

- Annual periods are keyed by fiscal year end. SEC facts use `fp === "FY"` or
  `form === "10-K"`; Form 20-F annual facts follow the same rule.
- Quarterly flows are derived from cumulative YTD facts by pairing periods with
  the same start date. Q4 = FY − Q1 − Q2 − Q3.
- TTM = the latest four discrete quarters. It is labelled with the latest
  quarter's fiscal year and report date.
- IFRS filers that report annually are shown by fiscal year and converted to
  USD at the period-end exchange rate.

## Growth and margins

| Metric | Formula |
| --- | --- |
| Revenue growth (TTM) | `TTM revenue / prior TTM revenue - 1` |
| Latest-quarter growth | `latest quarter revenue / same quarter prior FY - 1` |
| Gross margin | `gross profit / revenue` |
| Operating margin | `operating income / revenue` |
| Net margin | `net income / revenue` |
| FCF margin | `(operating cash flow - capex) / revenue` |

Capex is treated as a positive outflow. Margins use the same period in the
numerator and denominator.

## Returns and balance sheet

- **ROIC** = NOPAT / invested capital, where invested capital is total debt plus
  total equity. Annual periods use the average of the current and prior year;
  TTM uses the latest period-end balance sheet. NOPAT uses the reported effective
  tax rate where available; otherwise 21% is used.
- **Net debt** = total debt − cash and investments. Negative values are shown as
  net cash.
- **Net debt / EBITDA** = net debt / trailing EBITDA. Marked n/a for banks.
- **Interest cover** = operating income / interest expense. Marked n/a when
  interest expense is not meaningful.

## Valuation

- **P/E** = share price / trailing diluted EPS.
- **EV/EBITDA** = (market cap + net debt) / trailing EBITDA.
- **EV/Sales** = (market cap + net debt) / trailing revenue.
- **P/FCF** = market cap / trailing free cash flow; n/a when FCF is negative.
- **FCF yield** = trailing free cash flow / market cap.
- **Forward P/E (NTM)** uses the attributed consensus current-fiscal-year EPS
  when available; otherwise it is shown as n/a.

Multiple history is sampled monthly from Yahoo Finance adjusted prices and
trailing reported fundamentals, scaled from the latest market capitalisation.
The own-history range uses the last five years of samples.

## Factor screens

Factor chips are percentile ranks within the 229-company coverage universe:

- Growth: revenue growth and EPS growth percentiles.
- Profitability: operating margin and ROIC percentiles.
- Cash: free-cash-flow margin percentile.
- Balance sheet: inverse net debt/EBITDA percentile, with net cash shown
  explicitly.
- Valuation: inverse EV/EBITDA and P/E percentiles (lower multiples rank higher
  on the cheapness screen).

A percentile is descriptive. It is not a rating, a recommendation or a forecast.

## Peer sets

Peer sets live in `config/peers.ts` and are editorial. The report names the basis
(e.g. "semiconductor and AI infrastructure comparables") and the peer median
always excludes the subject company. TSLA has no direct US-listed EV peer in the
universe, so its comparison set is explicitly labelled as selected consumer and
platform comparables.

## Consensus

`data/consensus/{ticker}.json` stores the provider, source URL, as-of date,
target high/low/mean, recommendation distribution, forward estimates and recent
EPS surprises. Every panel shows the provider and date. Stockmonk does not
convert consensus into a rating or its own target.

## Validation and caveats

- `lib/validate-content.ts` checks story structure and banned rating language.
- `tests/unit/data-integrity.test.ts` validates every processed, consensus,
  segment and price file.
- Known caveats: GOOGL one-time gains, AAPL's adjusted vs SEC EPS, bank metrics,
  curated segment members, consensus lag and the absence of machine-readable
  guidance. See `docs/data-notes.md`.
