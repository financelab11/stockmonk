import type { StockStory } from "./types";

export const SYM: StockStory = {
  "ticker": "SYM",
  "kicker": "Automation · Warehouse robotics",
  "title": "Symbotic builds warehouses, and its cash flow is a timing story",
  "dek": "Revenue of $2.65B at a 21.3% gross margin leaves almost no operating profit, yet free cash flow was $524.6M. The gap is working capital, not profitability.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $2.6B trailing twelve months, +20.6% year over year.",
    "Profitability: -0.0% operating margin and 0.3% net margin.",
    "Cash: no meaningful free-cash-flow multiple, a n/a margin.",
    "factor summary: 33/100 average percentile across the factor set."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1837240/000183724025000278/sym-20250927.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001837240&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Symbotic Inc. generated $2.6B of revenue over the last twelve months, +20.6% versus the prior year. The business depends on contract wins, launch execution and the path from backlog to cash flow.",
      "The latest reported quarter was Q3 FY26, with $720.8M of revenue and an operating margin of 4.6%. The stock closed at $34.97 on Nov 23, 2026, giving a market capitalization of $21.2B.",
      "The shares sit 8% of the way up their 52-week range ($30.33 to $87.88). The analysis uses reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "SYM is a Space, Defense & Autonomy business with $2.6B of trailing revenue. The useful question is what the current margin and growth rate imply about the next few years, not whether the last quarter beat a forecast."
  },
  "whatItDoes": {
    "paragraphs": [
      "The Symbotic System combines hardware and software. Robots travel on a modular structure and move cases between storage and outbound; the software orchestrates inventory, sequencing and replenishment. Because the system is installed inside a customer's building, the sale includes design, construction, commissioning and then ongoing support.",
      "Customers are a small number of very large retailers and wholesalers. That is a deliberate strategy: a single site is a large contract, and a customer with a national network can replicate the design across many buildings. It also means the revenue line is exposed to a handful of capital budgets."
    ],
    "bullets": [
      {
        "title": "The system",
        "detail": "Robots, structures and software installed inside a distribution centre as one integrated product."
      },
      {
        "title": "Deployment revenue",
        "detail": "Design, construction and commissioning, recognised as milestones are met over the build."
      },
      {
        "title": "Support and software",
        "detail": "Maintenance, spare parts and software updates after commissioning. The recurring layer of the model."
      },
      {
        "title": "Customer base",
        "detail": "A small number of large US retailers and wholesalers, each with multiple sites that can be replicated."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is recognised as a site is built, so the income statement follows construction progress rather than the signing of a contract. A large deployment can take several quarters, and the margin on it is set by the original bid. If installation takes longer or costs more than planned, the extra cost lands on the company.",
      "The 21.3% gross margin is the economics of systems integration: a lot of purchased hardware and subcontract labour passes through the income statement at a modest markup. Software and support carry better margins, but they only become material once a site is running and the installed base is large.",
      "That is the operating leverage mechanism. Each new site adds deployment revenue at a thin margin and a small amount of high-margin recurring revenue afterwards. The recurring layer compounds as the installed base grows, which is why the quarterly operating margin moved from negative to 4.6% as the base matured."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 89.4% a year across the fiscal years in the dataset, and the latest quarter changed +21.7% year over year. Third-party estimates for the current fiscal year point to $3.6B of revenue and $0.80 of EPS.",
      "growth matters when it produces a return on capital. The operating margin of -0.0% and return on invested capital of -0.0% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Backlog",
        "detail": "Contracted revenue provides visibility."
      },
      {
        "title": "Launch cadence",
        "detail": "More launches spread fixed costs and prove reliability."
      },
      {
        "title": "Government budgets",
        "detail": "Defense and space spending fund the addressable market."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -0.0%, the net margin is 0.3% and diluted EPS is $0.04. The latest quarter's operating margin was 4.6%. The quarter shown is the latest reported period in the dataset.",
      "Return on equity is 1.2%. Capital intensity should be measured against the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow after capex over the trailing period was n/a, a n/a margin. The balance sheet carries $1.7B of net cash. The cash figures are trailing twelve-month values unless the section says otherwise.",
      "cash conversion connects earnings to distributable cash and the capital returned to owners. Net income has outrun free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 2578.8x trailing earnings and 502.2x EV/EBITDA. The valuation reflects the growth and margin record described above, not for the past alone.",
      "The attributed third-party mean target is $57.15; that is a consensus figure, not a Stockmonk price target. The peer comparison sets out the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "16 analysts contribute to the third-party consensus. The mean target is $57.15, with a range of $33.00 to $87.00. The consensus is a third-party snapshot and can change without notice.",
      "Current-year estimates call for $3.6B of revenue and $0.80 of EPS. Third-party estimates can change without notice; they are shown for context, not as a recommendation."
    ]
  },
  "risks": {
    "intro": "Symbotic's risks are concentration, project execution and the quality of its cash conversion. The balance sheet is strong; the uncertainty is whether the recurring layer grows fast enough to carry the deployment business.",
    "items": [
      {
        "title": "Customer concentration",
        "severity": "High",
        "detail": "A small number of large retailers account for most revenue. One paused capital programme would be visible immediately.",
        "watch": "Revenue by customer, site count and the largest customer's share."
      },
      {
        "title": "Project execution",
        "severity": "High",
        "detail": "Deployments are priced before they are built. A delayed or over-budget installation consumes the margin on that site and possibly others.",
        "watch": "Gross margin per quarter and any contract loss provisions."
      },
      {
        "title": "Working-capital reversal",
        "severity": "Medium",
        "detail": "Free cash flow has swung by hundreds of millions between years. A slowdown in milestone payments would turn the inflow into an outflow.",
        "watch": "Deferred revenue, receivables and operating cash flow excluding working capital."
      },
      {
        "title": "Margin proof",
        "severity": "Medium",
        "detail": "Three positive quarters do not establish a durable operating margin for a business that lost money at every stage of its growth.",
        "watch": "Operating margin against revenue growth for the next four quarters."
      },
      {
        "title": "Technology competition",
        "severity": "Low",
        "detail": "Warehouse automation has several credible suppliers, and customers can choose to automate more slowly.",
        "watch": "Win rates, pricing and the size of the opportunity pipeline."
      }
    ],
    "watchlist": [
      {
        "title": "Recurring revenue share",
        "detail": "Software and support are the high-margin layer. Its share of total revenue is the key to the margin story."
      },
      {
        "title": "Operating margin",
        "detail": "The move from negative to 4.6% needs to hold through a full year."
      },
      {
        "title": "Deferred revenue",
        "detail": "It shows how much cash has been collected for work not yet recognised, which drives the free-cash-flow swings."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Symbotic has real scale, a $1.75B net cash position and a business that has just produced three consecutive quarters of positive operating margin. It also has a 21.3% gross margin, a history of operating losses and cash flow that moves with project timing.",
      "The distinction to keep in view is that free cash flow and profit measure different things. A $524.6M inflow alongside a zero operating margin is a working-capital event, and working capital reverses.",
      "The question that matters is whether the recurring software and support layer becomes large enough to make the consolidated margin durable, or whether the company remains a project business with a cash balance."
    ],
    "questions": [
      "How much of revenue is recurring support and software rather than deployment?",
      "What share of revenue comes from the largest customer?",
      "How much of the $524.6M free cash flow came from deferred revenue?",
      "Can the 4.6% operating margin hold for four quarters?"
    ]
  },
  "narrativeSource": "auto-curated",
  "narrativeUpdatedAt": "2026-11-24"
};
