import type { StockStory } from "./types";

export const DDOG: StockStory = {
  "ticker": "DDOG",
  "kicker": "Software · Observability platforms",
  "title": "Datadog charges by usage, which is both the model and the risk",
  "dek": "A 79.6% gross margin and a 2.3% operating margin do not usually appear in the same company. The 28.7% free-cash-flow margin is what fills the gap, and it depends on customers consuming more every year.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $4.3B trailing twelve months, +33.2% year over year.",
    "Profitability: 2.3% operating margin and 6.1% net margin.",
    "Cash: $1.2B free cash flow, a 28.7% margin.",
    "Scorecard: 60/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001561550&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Datadog, Inc. generated $4.3B of revenue over the last twelve months, +33.2% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q3 FY26, with $1.2B of revenue and an operating margin of 6.2%. The stock closed at $165.18 on 2026-11-17, giving a market capitalization of $59.6B.",
      "The shares sit 33% of the way up their 52-week range ($98.01 to $300.68). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Consumption pricing makes the customer's growth your growth. It also makes the customer's cost-cutting your problem, and engineering budgets are the first place a chief technology officer looks when cloud bills rise."
  },
  "whatItDoes": {
    "paragraphs": [
      "The platform has grown by adding products next to each other. Infrastructure monitoring was the original product. Application performance monitoring came next, then log management, then security, then digital experience monitoring for browsers and mobile apps. A customer can buy one product and add others without changing vendors, which is the basis of the expansion model.",
      "Customers range from small engineering teams to large enterprises with thousands of services. The land-and-expand motion starts with a single team and a single product, then spreads as other teams see the dashboards. That is why the company tracks the number of customers using multiple products, and why the average revenue per customer rises over time.",
      "Datadog employed 2,185 people. That is a small headcount for $4.28B of revenue, and it is possible because the product is software and the infrastructure is rented. Research and development and sales are the two large cost lines; the cost of running the platform is the third and it scales with usage."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is metered. A customer's bill is a function of hosts, log volume, custom metrics and the number of products in use. Gross margin is 79.6%, which means the cloud infrastructure and support costs consume about a fifth of revenue. That is lower than a traditional software company's gross margin because Datadog pays cloud providers for storage and compute on the customer's behalf.",
      "The operating margin of 2.3% is the interesting number. Sales and marketing is expensive because the company is still adding customers and products, and research and development is heavy because the product surface keeps widening. The business is choosing growth over near-term profit, and the choice shows up as a thin operating margin.",
      "Free cash flow of $1.23B, a 28.7% margin, is much higher than operating income. A gap that wide usually comes from share-based compensation, which is added back in the cash-flow statement, and from customers paying in advance. Both are real, and both mean the cash figure overstates the profit available to a shareholder who does not want dilution."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 45.4% a year across the fiscal years in the dataset, and the latest quarter changed +35.2% year over year. Third-party estimates for the current fiscal year point to $4.5B of revenue and $2.74 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 2.3% and return on invested capital of 16.3% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 2.3%, the net margin is 6.1% and diluted EPS is $0.72. The latest quarter's operating margin was 6.2%.",
      "Return on equity is 5.6%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $1.2B, an operating margin of 6.2% and a net margin of 9.9%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $1.2B, a 28.7% margin. The balance sheet carries $4.2B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $1.2B over the last twelve months and net debt was -$4.2B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 227.6x trailing earnings and 337.9x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $269.65; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "48 analysts contribute to the third-party consensus. The mean target is $269.65, with a range of $171.00 to $330.00.",
      "Current-year estimates call for $4.5B of revenue and $2.74 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 48 analysts with a mean target of $269.65; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Datadog's risks are about consumption and competition. The balance sheet is strong and the cash flow is real; the uncertainty is whether customers keep expanding usage at the current rate.",
    "items": [
      {
        "title": "Usage optimisation",
        "severity": "High",
        "detail": "Customers can cut their bill by sending less data. A cost-conscious engineering budget reduces revenue without losing the customer.",
        "watch": "Revenue growth against customer count, and commentary on optimisation."
      },
      {
        "title": "Competition from platform vendors",
        "severity": "High",
        "detail": "Cloud providers and large software vendors bundle monitoring into existing agreements, which pressures pricing and land opportunities.",
        "watch": "Win rates and the growth rate of new logos."
      },
      {
        "title": "Multiple compression",
        "severity": "High",
        "detail": "At 14.1x sales, a growth slowdown of a few points can halve the multiple without any change in the business.",
        "watch": "The forward sales multiple against the growth rate."
      },
      {
        "title": "Thin operating margin",
        "severity": "Medium",
        "detail": "A 2.3% operating margin leaves little room for a rise in cloud costs or sales spending before the company reports an operating loss.",
        "watch": "Operating margin and the cost of revenue."
      },
      {
        "title": "Share-based compensation",
        "severity": "Medium",
        "detail": "Free cash flow adds back share-based pay. If dilution runs ahead of revenue, per-share value grows more slowly than the business.",
        "watch": "Diluted share count and the stock-compensation line."
      }
    ],
    "watchlist": [
      {
        "title": "Net revenue retention",
        "detail": "The single best measure of whether existing customers are consuming more."
      },
      {
        "title": "Operating margin",
        "detail": "6.2% in the latest quarter is the first sign of leverage. It needs to keep rising."
      },
      {
        "title": "Free cash flow versus operating income",
        "detail": "A wide gap means add-backs are doing the work. Track the size of it."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Datadog is a fast-growing software company with a genuine product advantage and a pricing model that grows with its customers. The 79.6% gross margin shows the product economics; the 2.3% operating margin shows how much it is spending to grow.",
      "The valuation is the issue. At 14.1x sales and 52.7x free cash flow, the market has already assumed several more years of rapid growth. That is not unreasonable given the record, but it leaves little margin for a slowdown.",
      "The reader should decide whether the cash flow or the earnings is the better measure of the business. If the gap is mostly compensation, the true cost is dilution. If it is mostly deferred revenue, the cash is real but the timing is flattered."
    ],
    "questions": [
      "How much of revenue growth comes from existing customers versus new ones?",
      "What happens to revenue if customers cut log volumes by a fifth?",
      "How large is share-based compensation relative to revenue?",
      "What growth rate justifies 14.1x sales?"
    ]
  }
};
