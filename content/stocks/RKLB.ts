import type { StockStory } from "./types";

export const RKLB: StockStory = {
  "ticker": "RKLB",
  "kicker": "Space · Small launch and space systems",
  "title": "Rocket Lab runs two businesses on one balance sheet",
  "dek": "Electron sells launches, space systems sells components, and Neutron is the expensive bet in between. Revenue grew 52.5% while free cash flow fell to -$371.1M.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $769.1M trailing twelve months, +52.5% year over year.",
    "Profitability: -29.1% operating margin and -21.5% net margin.",
    "Cash: -$371.1M free cash flow, a -48.3% margin.",
    "Scorecard: 43/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1819994/000181999426000013/rklb-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001819994&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Rocket Lab USA, Inc. generated $769.1M of revenue over the last twelve months, +52.5% versus the prior year. The business depends on contract wins, launch execution and the path from backlog to cash flow.",
      "The latest reported quarter was Q2 FY26, with $234.1M of revenue and an operating margin of -24.6%. The stock closed at $55.05 on 2026-11-17, giving a market capitalization of $37B.",
      "The shares sit 15% of the way up their 52-week range ($37.57 to $151.00). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Launch is a fixed-cost business sold by the mission. Each additional Electron spreads the same range, recovery and engineering costs across more revenue."
  },
  "whatItDoes": {
    "paragraphs": [
      "Electron is a small rocket aimed at the part of the market that cannot fill a larger vehicle. It has been sold to government agencies, aerospace prime contractors and commercial constellation operators. Photon, the company's satellite platform, extends a launch customer relationship into the spacecraft itself, and the components business sells subsystems to customers who never buy a launch.",
      "The two halves have different cycles. Launch revenue depends on cadence and on a small number of missions slipping or moving forward. Space systems revenue depends on how much content Rocket Lab wins per satellite and on how many satellites its customers build. Vertical integration helps: parts designed in-house can be sold to rivals as well as used on company spacecraft."
    ],
    "bullets": [
      {
        "title": "Electron",
        "detail": "Small orbital launch sold per mission. Cadence is the revenue driver and reliability is the licence to keep selling it."
      },
      {
        "title": "Space systems",
        "detail": "Spacecraft, subsystems and components sold to primes, agencies and constellation builders. Less lumpy than launch."
      },
      {
        "title": "Neutron",
        "detail": "An eight-tonne payload class rocket under development. It widens the addressable market but consumes cash before it earns any."
      },
      {
        "title": "Customers",
        "detail": "Government and defence buyers, aerospace primes, and commercial operators. One large programme can move a quarter."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "A launch is priced per mission, but most of the cost is fixed: the launch site, the ground crew, recovery operations, engineering support and the factory that builds the vehicle. Once those exist, the contribution from one more flight is high. That is why cadence matters more than price. A grounded fleet does not shrink the cost base, it just stops the revenue.",
      "Space systems works on manufacturing economics. Each contract has a bill of materials, engineering hours and an expected margin, and the blended gross margin of 37.3% is the average across both halves. Components tend to carry better margins than full spacecraft integration because the scope is narrower and the customer owns the schedule risk.",
      "Neither line yet generates enough gross profit to cover the operating base. Development spending on Neutron, plus the sales and administration needed to bid for government work, produced the -29.1% operating margin. The operating leverage only appears if gross profit grows faster than that fixed cost block."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 76.5% a year across the fiscal years in the dataset, and the latest quarter changed +62.0% year over year. Third-party estimates for the current fiscal year point to $982.9M of revenue and -$0.31 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of -29.1% and return on invested capital of -19.2% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -29.1%, the net margin is -21.5% and diluted EPS is -$0.27. The latest quarter's operating margin was -24.6%.",
      "Return on equity is -7.3%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY26: revenue of $234.1M, an operating margin of -24.6% and a net margin of -21.0%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$371.1M, a -48.3% margin. The balance sheet carries $1.3B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was -$371.1M over the last twelve months and net debt was -$1.3B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $93.15; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "20 analysts contribute to the third-party consensus. The mean target is $93.15, with a range of $58.00 to $127.00.",
      "Current-year estimates call for $982.9M of revenue and -$0.31 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 20 analysts with a mean target of $93.15; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Rocket Lab's risks are operational before they are financial. The balance sheet is strong; the uncertainty sits in launch schedules, development milestones and a customer base that includes governments.",
    "items": [
      {
        "title": "Launch failure",
        "severity": "High",
        "detail": "A failed Electron mission can ground the fleet for an extended investigation, stopping launch revenue and delaying customer satellites at the same time.",
        "watch": "Mission outcomes, the gap between launches, and any return-to-flight statement."
      },
      {
        "title": "Neutron development",
        "severity": "High",
        "detail": "The larger rocket is the growth story and the largest consumer of cash. Slippage pushes revenue out and keeps the cost base running.",
        "watch": "First-flight timing, engine test progress and development spending."
      },
      {
        "title": "Customer concentration",
        "severity": "Medium",
        "detail": "Government and prime contractor programmes are large relative to total revenue, so a single award or cancellation moves the outlook.",
        "watch": "Backlog disclosure, contract mix and the share of revenue from the largest customers."
      },
      {
        "title": "Cash burn",
        "severity": "Medium",
        "detail": "Free cash flow of -$371.1M against $1.34B of net cash leaves a finite runway if development costs keep rising.",
        "watch": "Quarterly cash used in operations, capital expenditure and any new financing."
      },
      {
        "title": "Competitive pricing",
        "severity": "Medium",
        "detail": "Larger launch providers can price small missions aggressively when they have spare capacity, which caps what Electron can charge.",
        "watch": "Average revenue per launch and the mix of dedicated versus rideshare missions."
      }
    ],
    "watchlist": [
      {
        "title": "Launch cadence",
        "detail": "The number of Electron missions per quarter is the cleanest read on launch revenue and factory utilisation."
      },
      {
        "title": "Backlog",
        "detail": "Contracted work tells you how much of next year's revenue is already committed rather than hoped for."
      },
      {
        "title": "Cash used in operations",
        "detail": "The gap between gross profit and cash burn shows how much of the loss is investment versus day-to-day cost."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Rocket Lab has built a real space business with two revenue lines, a credible launch record and $769.1M of trailing sales. It has not yet shown that the business can pay for itself: operating margin is -29.1% and free cash flow is -$371.1M.",
      "What the numbers show is that a 37.3% gross margin is not the same as a viable business. Gross profit has to cover development, bidding and administration before anything reaches shareholders, and Neutron is a large fixed cost that arrives before its revenue does.",
      "Three things are genuinely unknown: when Neutron flies, how much of the backlog converts within twelve months, and whether space systems margins hold as volume grows. The $1.34B cash balance gives management time to answer them."
    ],
    "questions": [
      "How many Electron missions per year does the cost base need to break even?",
      "How much of the $769.1M revenue base is recurring versus one-off mission work?",
      "What does a Neutron delay of one year do to the cash balance?",
      "Is space systems growth coming from content per satellite or from more satellites?"
    ]
  }
};
