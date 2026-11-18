import type { StockStory } from "./types";

export const IBM: StockStory = {
  "ticker": "IBM",
  "kicker": "Technology · Enterprise software and services",
  "title": "IBM's cash flow is steadier than its revenue",
  "dek": "Revenue compounded at 2.7% a year, yet free cash flow stayed above $9B in every year of the record. The gap between the two lines is the business model, and it is what the multiple is built on.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $69.9B trailing twelve months, +6.8% year over year.",
    "Profitability: 15.0% operating margin and 16.0% net margin.",
    "Cash: $14.7B free cash flow, a 21.0% margin.",
    "Scorecard: 59/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/51143/000005114326000010/ibm-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000051143&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "INTERNATIONAL BUSINESS MACHINES CORP. generated $69.9B of revenue over the last twelve months, +6.8% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q3 FY26, with $17.1B of revenue and an operating margin of 14.6%. The stock closed at $231.09 on 2026-11-17, giving a market capitalization of $218.4B.",
      "The shares sit 24% of the way up their 52-week range ($199.19 to $332.46). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "IBM is not a growth company. It is a cash-flow company that occasionally grows, and the two are valued differently."
  },
  "whatItDoes": {
    "paragraphs": [
      "Software is the largest and most valuable part. It includes Red Hat's operating system and container tools, automation and integration products, data and AI platforms, and the transaction-processing software that runs core banking and insurance systems. Much of it is subscription or term licence, renewed annually, which makes revenue predictable once the contract is signed.",
      "Consulting is the people business. It sells business transformation, systems integration, cloud migration and managed services, usually on multi-year contracts. Revenue is recognised as work is performed, margins are lower than software, and the segment is sensitive to how many projects clients are willing to start.",
      "Infrastructure is the hardware business: mainframes, storage and Power servers. It is cyclical and tied to product generations. A new mainframe launch drives a wave of upgrades and pulls through software and services, and the years between launches are quieter. That cycle is why quarterly revenue ranges from $15.92B to $19.69B within a single fiscal year."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Software revenue is recurring and high-margin. A customer that runs core banking on IBM software does not switch systems casually, so renewals are the base of the revenue and price increases are possible at renewal. Consulting revenue is project-based and people-intensive: the company bills for time and materials or commits to a fixed outcome, and the margin depends on utilisation and on how well the project is scoped.",
      "The cost structure is dominated by people. Services delivery, software development, sales and administration all sit in operating expense, which is why a 58.0% gross margin turns into a 15.0% operating margin. The company has a large fixed cost base in headcount and real estate, and revenue growth spreads that base slowly.",
      "Hardware is the smallest lever but the most visible. A mainframe cycle lifts revenue and margin at the same time, because the hardware carries a reasonable margin and pulls through high-margin software. When the cycle is between generations, the same dynamic works in reverse."
    ],
    "bullets": [
      {
        "title": "Software",
        "detail": "Subscriptions and term licences. Recurring, high margin, and the reason the cash flow is stable."
      },
      {
        "title": "Consulting",
        "detail": "Multi-year projects and managed services. Lower margin, people-heavy, and sensitive to client budgets."
      },
      {
        "title": "Infrastructure",
        "detail": "Mainframes, storage and Power servers. Cyclical, tied to product launches, and a pull-through for software."
      }
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 2.7% a year across the fiscal years in the dataset, and the latest quarter changed +4.7% year over year. Third-party estimates for the current fiscal year point to $70.6B of revenue and $12.42 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 15.0% and return on invested capital of n/a are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 15.0%, the net margin is 16.0% and diluted EPS is $11.75. The latest quarter's operating margin was 14.6%.",
      "Return on equity is n/a. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $17.1B, an operating margin of 14.6% and a net margin of 12.8%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $14.7B, a 21.0% margin. The balance sheet carries $32.4B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $14.7B over the last twelve months and net debt was -$32.4B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 19.6x trailing earnings and 14.6x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $259.85; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "23 analysts contribute to the third-party consensus. The mean target is $259.85, with a range of $174.00 to $300.00.",
      "Current-year estimates call for $70.6B of revenue and $12.42 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 23 analysts with a mean target of $259.85; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "IBM's risks are competitive and execution-related. The balance sheet is a source of strength; the uncertainty is whether the software and consulting franchises grow faster than their markets.",
    "items": [
      {
        "title": "Consulting demand",
        "severity": "High",
        "detail": "Consulting is the largest people business and it depends on clients starting new projects. In a budget squeeze, discretionary work is deferred first.",
        "watch": "Consulting bookings, backlog and revenue growth."
      },
      {
        "title": "Mainframe cycle",
        "severity": "Medium",
        "detail": "Infrastructure revenue and the software attached to it rise and fall with product launches. A long gap between generations leaves a hole.",
        "watch": "Infrastructure revenue and commentary on the next product cycle."
      },
      {
        "title": "Competition from cloud platforms",
        "severity": "High",
        "detail": "Large cloud vendors sell integrated software and infrastructure that overlaps with IBM's middleware and consulting offerings.",
        "watch": "Software revenue growth and renewal rates."
      },
      {
        "title": "Acquisition integration",
        "severity": "Medium",
        "detail": "IBM has bought much of its recent growth. Large acquisitions add goodwill and amortisation, and they only pay off if the acquired revenue grows.",
        "watch": "Goodwill, intangible amortisation and segment growth."
      },
      {
        "title": "Currency and geographic exposure",
        "severity": "Low",
        "detail": "Revenue is spread across more than 170 countries, so a strong dollar reduces reported revenue even when local demand is stable.",
        "watch": "Constant-currency growth versus reported growth."
      }
    ],
    "watchlist": [
      {
        "title": "Free cash flow",
        "detail": "$14.66B is the number that supports the dividend, the buyback and the acquisitions."
      },
      {
        "title": "Software renewal rates",
        "detail": "Recurring revenue is the base. A decline in renewals shows up in cash flow before it shows up in revenue."
      },
      {
        "title": "Consulting bookings",
        "detail": "Bookings lead revenue in services by several quarters."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "IBM is a mature technology company with a software annuity, a services business and a hardware cycle. The 58.0% gross margin and $14.66B of free cash flow show that the underlying products are valuable. The 15.0% operating margin shows how much of that value is consumed by the cost of selling and delivering them.",
      "The valuation is full on earnings and reasonable on cash flow. A 6.3% free-cash-flow yield with 2.7% revenue growth is a defensible proposition for an investor seeking income and stability, but it is not a growth investment.",
      "The reader should watch three lines: software renewals, consulting bookings and the mainframe cycle. Together they explain most of the variance in a year that otherwise looks boring."
    ],
    "questions": [
      "How much of the FY2025 revenue jump was acquired rather than organic?",
      "What share of software revenue renews annually, and at what price increase?",
      "How dependent is the cash flow on depreciation of acquired assets?",
      "What would a weak mainframe year do to the 21.0% free-cash-flow margin?"
    ]
  }
};
