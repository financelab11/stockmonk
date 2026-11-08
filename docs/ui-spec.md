# Stockmonk UI specification

## Product intent

Stockmonk is an independent, educational equity-research library. It borrows the
*information architecture* of modern retail research sites — a browseable
universe, a small number of deep reports, clear factor summaries and a premium
reading experience — without copying any third-party copy, imagery, performance
claims or analyst personas.

The product never issues a rating, recommendation or price target of its own.
Valuation is always framed as **attributed third-party analyst consensus** or as
a **multiple the market is currently paying**, with the source named next to it.

## Visual direction

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#ffffff` | Page background |
| `--paper-deep` | `#f6f7fb` | Section bands and table headers |
| `--surface` | `#ffffff` | Cards, tables, reading panes |
| `--ink` | `#12122b` | Primary text |
| `--ink-soft` | `#343a52` | Body copy |
| `--muted` | `#5b6178` | Secondary labels |
| `--faint` | `#6a7188` | Tertiary labels (AA on white) |
| `--line` | `#e7e8f0` | Hairlines and card borders |
| `--brand` | `#2456d8` | Links, screen accents |
| `--brand-deep` | `#1b1464` | Hero gradient end, footer |
| `--brand-bright` | `#8b3dff` | Gradient end, charts |
| `--coral` | `#ff7a45` | Primary CTA |
| `--positive` | `#0d6b4d` | Positive data |
| `--danger` | `#c62f3e` | Negative data |
| `--night` | `#12122b` | Primary buttons, dark chart cards |

- **Display type:** Newsreader (variable serif), tight tracking, optical sizing.
  Used for hero headlines, article section titles and large numerals.
- **UI type:** Inter (variable sans) for navigation, labels, tables and body.
- **Numerals:** tabular figures for every table and metric.
- **Shape:** 8–16 px radii, 1 px cool hairlines, restrained shadows.
- **Motion:** 150–420 ms ease-out; honour `prefers-reduced-motion`.
- **Density:** generous editorial spacing on marketing pages, compact data
  tables on directory pages.
- **Charts:** dark chart cards with a blue→violet→green palette; skeletons
  until visible; every chart exposes a data table.

## Layout shell

1. **Utility strip** — "Filings, financials and sourced estimates. No recommendations."
   links to editorial guidelines and data sources.
2. **Header** — brand lockup, primary nav (Discover, Newsfeed, Framework,
   Watchlist), search trigger, Pro call-to-action. Sticky with a hairline
   border on scroll; collapses to a sheet on mobile.
3. **Main** — max width 1200 px (`--container`), 24 px gutters.
4. **Footer** — brand summary, sitemap columns, data-source credits, and the
   mandatory disclaimer on every page:
   > For informational and educational purposes only. Not investment advice.
   > Stockmonk is not a registered investment adviser and does not provide buy,
   > sell or hold recommendations.

## Component inventory

| Component | Notes |
| --- | --- |
| `SiteHeader` | Server shell + client mobile menu/search trigger |
| `SiteFooter` | Disclaimer, links, attribution |
| `Disclaimer` | Inline callout variant for articles and legal pages |
| `Discover search` | Fuse.js over `/data/search-index.json`, URL `?q=` state |
| `StockLogo` | Local PNG with initials fallback |
| `TickerBadge` | Monospace ticker + exchange label |
| `PriceChart` | Lazy `lightweight-charts`; ranges 1M/3M/6M/YTD/1Y/5Y/MAX |
| `Sparkline` | Inline SVG, server rendered, no JS |
| `Metric` | Label, value, delta, context line |
| `FactorChip` | Tone-coded factor label with tooltip text |
| `StockCard` | Logo, ticker, price, 1Y sparkline, three metrics |
| `StockTable` | Sortable/filterable directory (URL state) |
| `SegmentBars` | Horizontal bars with revenue and share |
| `GrowthChart` | Recharts bar + line (lazy) |
| `MarginChart` | Recharts multi-line (lazy) |
| `ValuationChart` | Multiple history line (lazy) |
| `ConsensusPanel` | Attributed target range + distribution + estimates |
| `SurpriseChart` | EPS actual vs estimate (lazy) |
| `RiskList` | Severity-tagged qualitative risks |
| `ScorecardChart` | Radar of universe percentile ranks |
| `SourceNote` | Numbered citation row under every section |
| `ProCTA` | Stockmonk Pro end-of-article conversion block |
| `WatchlistButton` | localStorage toggle, accessible pressed state |

## Page templates

### Home
Hero with an editorial thesis, "Browse the research" CTA, recently researched
cards, stock spotlight, recent data updates, framework explainer, Pro feature
rows and a closing Pro CTA.

### Discover
Filter rail (sector, research-only, sort), search field, research cards, full
universe preview. URL state: `q`, `sector`, `sort`, `view`.

### All stocks
Dense table of All companies. URL state mirrors Discover; sticky table head.

### Stock report (research)
Two-column article: 760 px reading column + 280 px sticky rail (key stats, table
of contents, watchlist, sources). Ten numbered sections in this order:

1. The big picture
2. What the company does
3. How it makes money
4. Growth drivers
5. Financial performance
6. Cash flow and balance sheet
7. Valuation
8. What analysts expect
9. Risks and what to watch
10. The bottom line for learners

Every section carries at least one chart or data visual and a numbered source
note. The report ends with the Stockmonk Pro CTA and disclaimer.

### Stock page (supporting)
Compact profile: price chart, snapshot metrics, factor chips, latest quarters,
"research coverage" upsell. No fabricated ten-section article.

### Newsfeed
A transparent "what changed in the data" feed built from earnings dates, 52-week
range position, estimate revisions and factor changes. No invented headlines.

### Watchlist
Client-only, localStorage-backed, empty state with suggested research names.

### Framework / About / Editorial guidelines / Data sources / Privacy / Terms
Editorial long-form pages with the same typography and disclaimer.

### Offline
Serwist fallback page with cached-shell messaging and links.

## Accessibility

- WCAG 2.2 AA contrast; focus rings visible on every interactive element.
- Skip link, semantic landmarks, one `h1` per page.
- Charts have text summaries and data tables behind `<details>`.
- All icon-only buttons have `aria-label`.
- Charts respect reduced motion; no autoplaying animation.
- Touch targets ≥ 44 px.

## Performance budget

| Metric | Budget |
| --- | --- |
| LCP | < 2.0 s (mobile) |
| CLS | < 0.05 |
| INP | < 200 ms |
| JS per route | < 180 kB gzip (article route) |
| Lighthouse Performance | ≥ 95 |
| Accessibility / Best practices / SEO | ≥ 95 |

Charts are dynamically imported only when visible; the price chart is loaded on
idle after the hero content. Fonts are self-hosted with `next/font/local` and
`font-display: swap`.
