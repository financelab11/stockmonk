import type { StockStory } from "./types";

export const ASTS: StockStory = {
  "ticker": "ASTS",
  "kicker": "Space · Direct-to-device satellite broadband",
  "title": "AST SpaceMobile is building a cell tower the size of a satellite",
  "dek": "Revenue is real but small next to the capital being spent: $115.3M of sales, a -698.8% operating margin and $683.7M of net debt after a $1.6B cash burn.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $115.3M trailing twelve months, +2256.9% year over year.",
    "Profitability: -698.8% operating margin and -557.2% net margin.",
    "Cash: -$1.6B free cash flow, a -1420.7% margin.",
    "Scorecard: 48/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1780312/000178031226000006/asts-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001780312&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "AST SpaceMobile, Inc. generated $115.3M of revenue over the last twelve months, +2256.9% versus the prior year. The business depends on contract wins, launch execution and the path from backlog to cash flow.",
      "The latest reported quarter was Q2 FY26, with $31.5M of revenue and an operating margin of -948.0%. The stock closed at $27.59 on 2026-11-17, giving a market capitalization of $10.8B.",
      "The shares sit 1% of the way up their 52-week range ($27.01 to $133.86). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A satellite operator's economics are decided before the first subscriber signs up: how much capital each satellite costs, how much capacity it adds, and how many years that capacity earns revenue."
  },
  "whatItDoes": {
    "paragraphs": [
      "The service is aimed at places where terrestrial coverage stops: rural areas, ships, aircraft and disaster zones. AST SpaceMobile does not plan to sell to consumers directly. The commercial model runs through mobile network operators, which already own the billing relationship and the spectrum rights, and which would hand traffic to the satellite network when a phone cannot see a tower.",
      "Building that requires three things at once: satellites with unusually large antennas, launch capacity to put them in orbit, and ground gateways that connect the constellation to terrestrial networks. The company manufactures its satellites itself, which gives it control over cost and design changes but also means factory throughput becomes a constraint on how fast the network grows."
    ],
    "bullets": [
      {
        "title": "SpaceMobile satellites",
        "detail": "Large-antenna spacecraft designed to connect standard handsets directly, without a special device or terminal."
      },
      {
        "title": "Mobile operator partners",
        "detail": "Wholesale distribution. The operator keeps the subscriber; the satellite network supplies coverage the tower network cannot."
      },
      {
        "title": "Ground segment",
        "detail": "Gateways and network integration that route traffic between the constellation and terrestrial core networks."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The intended revenue model is wholesale: operators pay for capacity or share the revenue from subscribers who roam onto the satellite network. That is attractive because it avoids building a consumer brand, but it also means AST SpaceMobile does not set retail prices and depends on partners to market the service.",
      "Costs behave very differently from revenue. Satellites are built and launched years before they carry meaningful traffic, and each one depreciates whether or not it is full. Ground infrastructure and engineering are largely fixed. The result is that costs arrive first and revenue arrives later, which is exactly what a -698.8% operating margin looks like.",
      "The reported gross margin of 34.5% should not be read as a steady-state number. With the constellation incomplete and revenue lumpy, it mostly reflects the cost of the work recognised in the period rather than the economics of a finished network."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 64.1% a year across the fiscal years in the dataset, and the latest quarter changed +2626.6% year over year. Third-party estimates for the current fiscal year point to $166M of revenue and -$2.29 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of -698.8% and return on invested capital of -20.7% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Satellite deployments",
        "detail": "Each launch adds capacity. The constellation has to reach a usable density before service quality supports broad marketing."
      },
      {
        "title": "Operator agreements",
        "detail": "Coverage only earns revenue where a partner is allowed to use the spectrum and has customers to roam onto it."
      },
      {
        "title": "Government demand",
        "detail": "Defence and civil agencies value resilient coverage that does not depend on terrestrial infrastructure."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -698.8%, the net margin is -557.2% and diluted EPS is -$6.09. The latest quarter's operating margin was -948.0%.",
      "Return on equity is -26.8%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY26: revenue of $31.5M, an operating margin of -948.0% and a net margin of -732.6%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$1.6B, a -1420.7% margin. Net debt is $683.7M.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was -$1.6B over the last twelve months and net debt was $683.7M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $63.35; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "12 analysts contribute to the third-party consensus. The mean target is $63.35, with a range of $39.00 to $108.00.",
      "Current-year estimates call for $166M of revenue and -$2.29 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 12 analysts with a mean target of $63.35; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "The risks here are capital and execution risks before they are competitive ones. The technology has been demonstrated in principle; the open question is whether it can be deployed fast enough to earn a return on the capital already committed.",
    "items": [
      {
        "title": "Launch and deployment schedule",
        "severity": "High",
        "detail": "The constellation only earns money once enough satellites are in orbit. A launch delay pushes revenue out while fixed costs continue.",
        "watch": "Satellites launched per quarter, satellite production rate and contracted launch slots."
      },
      {
        "title": "Financing",
        "severity": "High",
        "detail": "Free cash flow of -$1.6B and $683.7M of net debt mean the company depends on continued access to capital.",
        "watch": "Cash balance, debt maturities, interest cost and share count."
      },
      {
        "title": "Regulatory and spectrum access",
        "severity": "High",
        "detail": "Satellite coverage needs permission in each country and coordination with terrestrial spectrum holders. Approval is country by country.",
        "watch": "New market authorisations and the number of operators able to market the service."
      },
      {
        "title": "Capacity economics",
        "severity": "Medium",
        "detail": "A satellite covering a large area shares a limited amount of throughput among many users. Revenue per satellite depends on how much traffic it can actually carry.",
        "watch": "Disclosed capacity per satellite and usage per covered market."
      },
      {
        "title": "Competition",
        "severity": "Medium",
        "detail": "Terrestrial build-out, other direct-to-device constellations and incumbent satellite operators all compete for the same coverage gap.",
        "watch": "Operator partnerships, pricing terms and competing service launches."
      }
    ],
    "watchlist": [
      {
        "title": "Satellites in service",
        "detail": "The count of working satellites is the real production metric; revenue follows it with a lag."
      },
      {
        "title": "Cash and debt",
        "detail": "Track the split between equity raised and borrowings, because debt adds a fixed claim ahead of shareholders."
      },
      {
        "title": "Operator launches",
        "detail": "Signed partners are not revenue until service is switched on in their markets."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "AST SpaceMobile has a plausible product, a small amount of early revenue and a very large capital requirement. The trailing numbers — $115.3M of revenue, a -698.8% operating margin, -$1.6B of free cash flow and $683.7M of net debt — describe a company still in construction.",
      "The point to carry away is that revenue growth of 2256.9% tells you almost nothing when the base was near zero. What matters is the absolute revenue, the cost per satellite, the capacity each satellite adds and the price operators pay for it.",
      "Two facts are unknown and decisive: how many satellites must be in orbit before service is commercially usable, and how the next round of financing is structured. The balance sheet, not the income statement, will determine the outcome from here."
    ],
    "questions": [
      "How much revenue does one satellite generate per year once the network is live?",
      "What share of the $1.6B burn is satellites and what share is launch?",
      "How many operators have actually switched the service on rather than signed an agreement?",
      "What does the debt cost, and when does it mature?"
    ]
  }
};
