import type { StockStory } from "./types";

export const PLMR: StockStory = {
  ticker: "PLMR",
  kicker: "Specialty Financials · Insurance - Property & Casualty",
  title: "Palomar insures the earthquake cover most carriers will not write",
  dek: "Revenue grew 58.4% and the P/E is 8.1x, which looks too cheap until you notice that net income exceeded revenue in one quarter. Fast premium growth also flatters cash flow, because premium arrives before claims are paid.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $1.23B, up 58.4%, with the latest quarter up 58.0%.",
    "Net margin of 41.1% exceeds the operating margin of 22.8%, which is not a normal relationship.",
    "Free cash flow of $451.7M is 36.6% of revenue, helped by the growth of the claims float.",
    "A P/E of 8.1x next to an EV/EBITDA of 50.2x means at least one of the two is measuring something unusual.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1761312/000119312526067364/plmr-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001761312&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Palomar Holdings is a specialty property insurer. It writes residential and commercial earthquake cover, Hawaii hurricane, residential flood, inland marine, commercial all-risk and specialty homeowners policies, along with assumed reinsurance and coverage for real estate investors. These are risks that standard homeowners and commercial carriers either decline or price poorly.",
      "The company was incorporated in 2013, is based in La Jolla, California and employs about 191 people. It distributes through retail agents, wholesale brokers, program administrators and carrier partnerships rather than a large employed sales force. That structure lets a small insurer reach a national book without building a national branch network.",
      "Revenue grew from $247.8M in FY2021 to $876.0M in FY2025, with operating income rising from $57.1M to $253.4M. The trailing growth rate is 58.4%. At $155.71 the equity is worth $4.09B, near the top of a 52-week range of $100.81 to $162.08, and the five-year return is 64.7%.",
    ],
    quote:
      "Specialty property insurance is a pricing business. The carrier that understands an unusual peril can charge for it; the one that does not declines the risk or loses money on it.",
  },
  whatItDoes: {
    paragraphs: [
      "The core products are peril-specific. Earthquake is the franchise: Palomar writes residential and commercial quake cover in California and other exposed states, a line most carriers avoid because the accumulation risk is hard to model. Hurricane in Hawaii, flood and inland marine follow the same logic — narrow perils with limited competition and a real need for cover.",
      "Alongside the direct lines, the company assumes reinsurance and participates in fronting arrangements. In a fronting arrangement, another carrier issues the policy and Palomar keeps a share of the economics, or Palomar issues the policy and cedes most of it. Those structures add premium and fee income without requiring the same capital as direct writing, which is part of why revenue can grow this fast with 191 employees.",
      "The distribution mix matters for growth quality. Business written through program administrators and carrier partnerships depends on the partner's appetite and is easier to add than business won agent by agent. It is also easier to lose if the partner changes direction.",
    ],
    bullets: [
      {
        title: "Earthquake and wind",
        detail:
          "Residential and commercial quake, Hawaii hurricane and specialty homeowners. The franchise lines and the highest accumulation risk.",
      },
      {
        title: "Flood and inland marine",
        detail:
          "Residential flood and commercial inland marine. Adjacent perils sold to a similar customer base.",
      },
      {
        title: "Assumed reinsurance and fronting",
        detail:
          "Premium taken from other carriers' books. Capital-light, fee-like, and the fastest-growing part of the mix.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Premium is collected, claims are paid later, and the gap is invested. If premium exceeds claims and expenses, the underwriting itself is profitable; if not, investment income has to cover the difference. That is the combined-ratio framework, and for a catastrophe-exposed property insurer the ratio is decided by a small number of events in any given year.",
      "Reinsurance is central. Palomar buys protection against large single losses and against aggregations of smaller ones, ceding premium in exchange. The retained share determines how much of a catastrophe lands on the company's own results. A specialty property insurer that grew 58% has also grown its exposure, and the reinsurance programme is what keeps a single event from being existential.",
      "The third revenue stream is fee-like: fronting and program arrangements where Palomar earns a margin on premium it does not fully retain. That income is less capital-intensive than direct underwriting, but it depends on carrier partners remaining willing to delegate.",
    ],
  },
  growth: {
    paragraphs: [
      "The growth record is exceptional for an insurer: $247.8M, $327.1M, $375.9M, $553.9M and $876.0M across five years. Operating income rose from $57.1M to $253.4M over the same period. Few property carriers grow at that rate without taking on disproportionate catastrophe exposure.",
      "The trailing rate is 58.4% and the latest quarter grew 58.0%, so the pace has not yet slowed. The third-party consensus, however, projects $1.19B of revenue this fiscal year — below the $1.23B trailing figure — and then $1.48B next year. A forecast that starts below the current run-rate implies either an expected slowdown or a different revenue definition.",
      "The drivers are new program partnerships, expansion into adjacent perils, and rate increases in property lines. What would slow growth is a quiet catastrophe year that makes competing carriers hungry for the same business, or a partner ending a fronting arrangement. Neither shows up in the loss ratio until it is already affecting premium.",
    ],
  },
  performance: {
    paragraphs: [
      "The operating margin has drifted down as the revenue base has grown: 29.5%, 27.4% and 28.7% in the three quarters of FY2025, then 19.2%, 22.2% and 21.9% in FY2026. The trailing figure is 22.8%. Growth has come with a lower margin, which is what happens when new business is added at competitive prices or when the mix shifts toward lower-margin program arrangements.",
      "The net line is where the file needs care. Trailing net margin is 41.1%, higher than the operating margin of 22.8%, and Q4 FY2025 recorded net income of $345.7M on revenue of $253.4M. Net income exceeding revenue in a quarter is not an underwriting outcome; something arrived below the operating line that will not repeat every year.",
      "That single quarter is why the reported EPS of $7.98 and the P/E of 8.1x are not the bargain they appear to be. A reader valuing this company has to strip out the item and ask what a normal year looks like.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is $451.7M on a trailing basis, a 36.6% margin. The annual series rose from $87.8M in FY2021 to $409.0M in FY2025, with a dip to $116.1M in FY2023. Insurance cash flow is structurally positive when premium is growing, because the premium arrives before the claims are paid.",
      "That is also the trap. In a year of 58% growth, the increase in reserves and unearned premium adds to operating cash flow without adding to profit. The free cash flow figure overstates the cash the business would generate if it stopped growing, which matters when the growth rate is this high.",
      "Interest cover of 33.0x indicates that debt service is not a constraint. The balance sheet is dominated by the investment portfolio backing reserves, and the dataset does not provide a net debt figure for the corporate entity.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $155.71 the equity is worth $4.09B. The P/E is 8.1x, EV/EBITDA 50.2x, EV/sales 3.3x and price-to-free-cash-flow 9.1x. An 8.1x earnings multiple on an insurer growing 58% would be remarkable; a 50.2x EV/EBITDA multiple on the same company is absurd. Both cannot be right, and the resolution is in what each denominator contains.",
      "The P/E divides a trailing net income that includes a quarter where net income exceeded revenue. The EV/EBITDA multiple reflects a small EBITDA base relative to the equity value. Neither is a clean measure of the underwriting business. Price to book against a normalised return on equity, and the combined ratio through a catastrophe cycle, are the measures that fit.",
      "Against the peers, Kinsale trades at 8.9x free cash flow and 47.8x EV/EBITDA, Ryan Specialty at 21.1x free cash flow and 22.9x EV/EBITDA, and Evercore at 6.3x and 9.3x. The dispersion is not a ranking; it is a set of different businesses with different accounting.",
    ],
  },
  analysts: {
    paragraphs: [
      "Six analysts contribute to the attributed third-party consensus, with a mean target of $162.33 and a range of $153.00 to $175.00. That is the narrowest range in this batch, which is unusual for an insurer with catastrophe exposure and suggests the analysts share a model.",
      "Current-year estimates are $1.19B of revenue and EPS of $10.26, rising to $1.48B and $11.61 next year. Seven analysts contribute to each annual figure. The implied EPS growth is modest relative to the revenue growth, which is consistent with margins normalising as the book expands.",
      "Those are third-party forecasts, not a Stockmonk view. Note that the current-year revenue estimate sits below the trailing figure, so the consensus is not extrapolating the 58.4% growth rate forward.",
    ],
  },
  risks: {
    intro:
      "Palomar's risks are concentrated in the perils it chooses to underwrite. A specialty property insurer is paid for taking risks others avoid, and the bill arrives in a single event.",
    items: [
      {
        title: "Catastrophe accumulation",
        severity: "High",
        detail:
          "Earthquake and hurricane cover concentrate exposure geographically. One event can exceed a full year of underwriting profit.",
        watch:
          "Probable maximum loss disclosure, modelled loss estimates and the geographic spread of the book.",
      },
      {
        title: "Reinsurance dependence",
        severity: "High",
        detail:
          "The company cedes a large share of its risk. A harder reinsurance market raises the cost of protection or reduces the capacity available.",
        watch:
          "Cession ratios, reinsurance pricing at renewal and counterparty credit quality.",
      },
      {
        title: "Reserve adequacy",
        severity: "High",
        detail:
          "Fast premium growth means reserves are being established on a book with limited history. If losses develop worse than expected, prior-year charges follow.",
        watch:
          "Prior-year development and the ratio of reserves to earned premium.",
      },
      {
        title: "Growth quality",
        severity: "Medium",
        detail:
          "Assumed reinsurance and fronting arrangements add premium without the same capital or underwriting control as direct business.",
        watch:
          "The mix between direct, assumed and fronting premium, and the margin on each.",
      },
      {
        title: "Partner concentration",
        severity: "Medium",
        detail:
          "Distribution through program administrators and carrier partnerships means a small number of relationships can drive a large share of growth.",
        watch:
          "Concentration disclosure among program and carrier partners.",
      },
      {
        title: "One-off items in reported earnings",
        severity: "Medium",
        detail:
          "A quarter in which net income exceeded revenue distorts both the P/E and the EPS comparison.",
        watch:
          "The reconciliation between operating income and net income each quarter.",
      },
    ],
    watchlist: [
      {
        title: "Combined ratio",
        detail:
          "The measure of underwriting profitability, and the one that decides whether growth is adding value.",
      },
      {
        title: "Reinsurance programme",
        detail:
          "Retention levels and renewal pricing determine how much of a catastrophe lands on the company.",
      },
      {
        title: "Premium mix",
        detail:
          "Direct versus assumed versus fronting: the mix explains the margin trend.",
      },
      {
        title: "Prior-year development",
        detail:
          "The fastest way for a growing insurer to discover that its pricing was wrong.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Palomar is a specialty property insurer with $1.23B of trailing revenue, a 22.8% operating margin and $451.7M of free cash flow. It has grown revenue more than threefold in five years by writing earthquake, hurricane, flood and inland marine cover that standard carriers avoid.",
      "The headline multiples are misleading in both directions. An 8.1x P/E rests on a year with a one-off gain, and a 50.2x EV/EBITDA rests on a small EBITDA base. Neither tells you what the underwriting business is worth, and the free cash flow is inflated by the float that comes with 58% premium growth.",
      "The honest assessment is that this is a well-run specialty carrier in the fastest-growing part of its cycle. The question is how much of the growth is durable once property pricing softens, and whether the reinsurance programme is sized for the exposure the company now carries.",
    ],
    questions: [
      "What was the one-off item in Q4 FY2025, and how large is it relative to a normal quarter?",
      "How much of premium is ceded, and at what retention?",
      "What share of revenue comes from assumed reinsurance and fronting rather than direct writing?",
      "What would a bad catastrophe year do to the combined ratio and to capital?",
    ],
  },
};
