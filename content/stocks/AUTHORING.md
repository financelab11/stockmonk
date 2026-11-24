# Stockmonk story authoring guide

Every company in the coverage universe has a `StockStory` file. The file must
read like a short research report written by a sector analyst, not like a
generated template. Use the research pack and the current report as the factual
base, then rewrite the prose so it is specific to that business.

## Inputs

- Research pack: `data/raw/research-packs/{TICKER}.md`
- Current report: `content/stocks/{TICKER}.ts`
- Processed financials: `data/processed/{TICKER}/data.json`
- Optional segment file: `data/segments/{TICKER}.json`
- Optional consensus file: `data/consensus/{TICKER}.json`

The research pack and the current report are the only approved sources of
quantitative claims. If a number is not in them, do not use it. Qualitative
statements about products, customers, competitors and industry structure are
allowed when they are durable and supported by the bespoke sections or a filing.
Avoid dated news, specific contract values, customer names that are not public,
and claims that could be wrong next quarter.

## What to keep

Keep these fields exactly as they are in the skeleton unless the brief gives a
better value:

- `ticker`
- `filingUrl` (must remain an `https://www.sec.gov/...` URL)
- `irUrl`
- `readingMinutes` (between 9 and 12)

Everything else should be rewritten.

## Required shape

The `StockStory` type is in `content/stocks/types.ts`. The ten sections are:

1. `bigPicture`
2. `whatItDoes`
3. `howItMakesMoney`
4. `growth`
5. `performance`
6. `cash`
7. `valuation`
8. `analysts`
9. `risks`
10. `bottomLine`

Hard minimums enforced by `lib/validate-content.ts`:

- `title` at least 20 characters
- `dek` at least 60 characters
- at least 3 `takeaways`
- at least 2 paragraphs in each required block
- at least 5 `risks.items`
- at least 3 `risks.watchlist` items
- at least 3 `bottomLine.questions`
- no banned wording: "we recommend", "buy rating", "sell rating", "hold
  rating", "strong buy", "timely buy", "underperform", "our price target",
  "price target of ours", "guarantee"

## Editorial rules

- No buy, sell or hold ratings.
- No Stockmonk price targets. Third-party consensus may be described as
  attributed third-party consensus, not as our view. Name the provider and date
  in the `analysts` section only.
- Do not use rating labels in prose: "buy rating", "sell rating", "hold rating",
  "strong buy", "timely buy" or "underperform". Describe the distribution
  qualitatively.
- Do not mention data vendors outside the attributed consensus sentence.
- Do not use the word "guarantee" even in a negative sentence if it can be
  avoided.
- Write in plain English. Short sentences. Explain the mechanism before the
  metric.
- Use the company's real business model: what it sells, who pays, why they
  renew, what the unit economics are, what the capital intensity is.
- Make the sections answer different questions. Do not repeat the same
  paragraph in several sections.
- Use bullets where a list is clearer than prose.
- Vary sentence openings and section structure between companies. Do not reuse
  an opening formula or a full sentence from another report.
- Avoid generic filler such as "the company operates in a dynamic industry",
  "investors should watch", "it remains to be seen", "only time will tell",
  "landscape", "leverage synergies", "robust" and "poised for growth".

## Section guidance

- `bigPicture`: what the company is, the one question that matters, and the
  latest revenue/margin/price context.
- `whatItDoes`: products, customers, segment mix, geography, and how the pieces
  fit together.
- `howItMakesMoney`: revenue model, pricing, gross margin, cost structure, and
  the operating leverage mechanism.
- `growth`: the realistic growth drivers, the historical rate, and what would
  slow it down.
- `performance`: margins and returns, with the trend across the annual and
  quarterly tables.
- `cash`: free cash flow, working capital, capex, debt and what the cash flow
  supports.
- `valuation`: the multiples, what they assume, and how the peer set compares.
- `analysts`: third-party consensus, estimate direction, and what the numbers
  imply without endorsing them.
- `risks`: five specific risks, each with a severity and a concrete thing to
  watch.
- `bottomLine`: the facts, what is not known, and three or four questions the
  reader should answer next.

## Workflow

1. Read the research pack.
2. Read the current story.
3. Rewrite the seven data-driven sections, preserving the bespoke sections.
4. Set `narrativeSource: "curated"` and `narrativeUpdatedAt` to the current date.
5. Run `pnpm validate:content`, `pnpm typecheck` and `pnpm audit:research`.
6. Do not edit `content/stocks/index.ts`, other companies, or shared code.

`pnpm audit:research` fails on cross-company sentence reuse, banned boilerplate,
rating labels, short paragraphs and missing sections. It is the editorial gate.
