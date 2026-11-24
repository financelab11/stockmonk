import type { StockStory } from "./types";

export const MNDY: StockStory = {
  "ticker": "MNDY",
  "kicker": "Software & Cyber · Work management",
  "title": "monday.com has $1.7B of cash and a per-seat model to defend",
  "dek": "Revenue grew 26.7% to $1.23B and the operating line reached breakeven. The open question is whether a bill that scales with headcount survives a market where AI does more of the work.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $1.2B trailing twelve months, +26.7% year over year.",
    "Profitability: -0.1% operating margin and 9.6% net margin.",
    "Cash: $313.3M free cash flow, a 25.4% margin.",
    "factor summary: 60/100 average percentile across the factor set."
  ],
  "filingUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001845338&type=10-K&dateb=&owner=include&count=40",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001845338&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "monday.com Ltd. generated $1.2B of revenue over the last twelve months, +26.7% versus the prior year. The model depends on net revenue retention, sales efficiency and the cost of acquiring the next customer.",
      "The latest reported quarter was not available, with n/a of revenue and an operating margin of n/a. The stock closed at $73.99 on Nov 23, 2026, giving a market capitalization of $3.1B.",
      "The shares sit 15% of the way up their 52-week range ($57.50 to $164.49). The analysis uses reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "MNDY is a Software & Cyber business with $1.2B of trailing revenue. The useful question is what the current margin and growth rate imply about the next few years, not whether the last quarter beat a forecast."
  },
  "whatItDoes": {
    "paragraphs": [
      "The customer base spans small businesses buying a handful of seats and enterprises deploying thousands. The low end is served by self-service: a free trial, a card payment, an onboarding template. The high end is served by a sales team that sells governance, security controls and the integration work needed to connect the workspace to a company's identity and data systems.",
      "That dual motion is the defining feature of the business. It gives monday.com a very large addressable market and a low cost of acquiring the smallest customers, while exposing it to the churn that comes with small customers. The company employs 1,549 people and is headquartered in Tel Aviv, reporting in dollars."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Each user on a paid plan generates a monthly subscription, and the tier determines the feature set and the price. Gross margin is 89.2%, the highest in the peer group, because the product is hosted software with no hardware, no implementation services of consequence and no data-processing cost that scales badly. Almost every dollar of revenue after hosting falls through to gross profit.",
      "The operating margin is -0.1%, so essentially all of that gross profit is spent on sales, marketing and engineering. That is a deliberate choice rather than a structural problem: the company has been buying growth with paid acquisition and a large sales team, and the 25.4% free-cash-flow margin shows the underlying business produces cash while doing it.",
      "The risk embedded in the model is the monthly plan. A customer on a monthly contract can leave in thirty days, and small teams do. Annual contracts and larger accounts are what convert a fast-growing revenue line into a durable one, which is why the mix between the two matters more here than the headline growth rate."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 58.4% a year across the fiscal years in the dataset, and the latest quarter changed not available year over year. Third-party estimates for the current fiscal year point to $1.5B of revenue and $6.41 of EPS.",
      "growth matters when it produces a return on capital. The operating margin of -0.1% and return on invested capital of -0.2% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Net revenue retention",
        "detail": "Expansion within existing customers compounds revenue."
      },
      {
        "title": "New customer adds",
        "detail": "New logos broaden the base and fund future expansion."
      },
      {
        "title": "Operating leverage",
        "detail": "Scale should improve margins as sales and R&D mature."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -0.1%, the net margin is 9.6% and diluted EPS is $2.24. The latest quarter's operating margin was not available. The quarter shown is the latest reported period in the dataset.",
      "Return on equity is 9.5%. Capital intensity should be measured against the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin."
    ],
    "bullets": [
      {
        "title": "Gross margin, 89.2%",
        "detail": "What the product earns before the cost of selling it. Very few software companies reach this level."
      },
      {
        "title": "Operating margin, -0.1%",
        "detail": "What is left after sales, marketing and engineering. Effectively breakeven, which is new for this company."
      },
      {
        "title": "Free-cash-flow margin, 25.4%",
        "detail": "Cash collected in advance against costs recognised over time. The most flattering of the three, and the reason the company can fund growth from its own operations."
      }
    ]
  },
  "cash": {
    "paragraphs": [
      "The cash statement over the trailing period was $313.3M, a 25.4% margin. The balance sheet carries $1.7B of net cash. The cash figures are trailing twelve-month values unless the section says otherwise.",
      "cash conversion connects earnings to distributable cash and the capital returned to owners. Net income has outrun free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 26.3x trailing earnings and 121.3x EV/EBITDA. The valuation reflects the growth and margin record described above, not for the past alone.",
      "The attributed third-party mean target is $100.93; that is a consensus figure, not a Stockmonk price target. The peer comparison sets out the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "23 analysts contribute to the third-party consensus. The mean target is $100.93, with a range of $80.00 to $165.00. The consensus is a third-party snapshot and can change without notice.",
      "Current-year estimates call for $1.5B of revenue and $6.41 of EPS. Third-party estimates can change without notice; they are shown for context, not as a recommendation."
    ]
  },
  "risks": {
    "intro": "monday.com's risks are competitive and structural. It carries more cash than debt, has a high gross margin and no capital spending to speak of, so the threats are to pricing, retention and the unit being priced.",
    "items": [
      {
        "title": "Per-seat pricing and AI",
        "severity": "High",
        "detail": "If AI assistants handle coordination and status updates, the number of humans needing a seat can fall even as the work continues. A per-seat bill shrinks with the headcount it is attached to.",
        "watch": "Revenue per paid seat, the mix of annual versus monthly plans, and the pricing of AI features."
      },
      {
        "title": "Bundled competition",
        "severity": "High",
        "detail": "Productivity suites and development platforms include basic project tracking at no extra cost. For a customer already paying for one of those suites, the case for a separate subscription has to be strong.",
        "watch": "Win rates in accounts that already use a bundled alternative and average revenue per account."
      },
      {
        "title": "Small-customer churn",
        "severity": "Medium",
        "detail": "The self-service motion brings in many small accounts that can leave quickly. That is cheap to acquire and expensive to keep replacing.",
        "watch": "Net dollar retention and the split between self-service and sales-assisted revenue."
      },
      {
        "title": "Multi-product execution",
        "severity": "Medium",
        "detail": "Growth depends on selling CRM and development products alongside the core workspace. A second product that fails to attach adds cost without adding revenue.",
        "watch": "The share of customers using more than one product."
      },
      {
        "title": "Currency and geography",
        "severity": "Low",
        "detail": "The company reports in dollars, is headquartered in Israel and sells globally. Currency moves and regional conditions affect costs and demand unevenly.",
        "watch": "The split of revenue by region and the effect of exchange rates on operating expenses."
      }
    ],
    "watchlist": [
      {
        "title": "Net dollar retention",
        "detail": "With a large self-service base, expansion inside accounts is what separates durable growth from a leaky funnel."
      },
      {
        "title": "Revenue per customer",
        "detail": "The clearest early signal of whether AI features are raising the value of a seat or eroding the need for one."
      },
      {
        "title": "Cash balance",
        "detail": "At $1.67B against a $4.5B market capitalisation, what the company does with the cash matters as much as what it sells."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "monday.com has grown from $308.1M to $1.23B in five years, reached operating breakeven, and done it while generating a quarter of revenue as free cash flow. Those are the marks of a business that has found product-market fit and is learning to be efficient.",
      "The complication is that the product is priced per person in a category that AI is actively reshaping, and that the customer base leans toward the smaller end where churn is highest. Neither problem is fatal; both cap how much the growth is worth.",
      "The reader should finish by separating the operating business from the balance sheet. A $4.5B market capitalisation with $1.67B of net cash is mostly a bet on the remaining operating value, and that value depends on retention."
    ],
    "questions": [
      "What share of revenue is annual rather than monthly?",
      "Is revenue per seat rising as AI features are added, or flat?",
      "How much of growth comes from customers using more than one product?",
      "What is the plan for $1.67B of net cash?"
    ]
  },
  "narrativeSource": "auto-curated",
  "narrativeUpdatedAt": "2026-11-24"
};
