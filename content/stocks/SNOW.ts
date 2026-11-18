import type { StockStory } from "./types";

export const SNOW: StockStory = {
  "ticker": "SNOW",
  "kicker": "Software · Cloud data platforms",
  "title": "Snowflake sells compute by the second and still loses money on paper",
  "dek": "A 67.0% gross margin and a 22.0% free-cash-flow margin sit alongside a 22.8% operating loss. The distance between those numbers is the whole investment question.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $5.4B trailing twelve months, +32.0% year over year.",
    "Profitability: -22.8% operating margin and -20.1% net margin.",
    "Cash: $1.2B free cash flow, a 22.0% margin.",
    "Scorecard: 53/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001640147&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Snowflake Inc. generated $5.4B of revenue over the last twelve months, +32.0% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q2 FY27, with $1.5B of revenue and an operating margin of -17.0%. The stock closed at $272.94 on 2026-11-17, giving a market capitalization of $96.3B.",
      "The shares sit 58% of the way up their 52-week range ($118.30 to $384.56). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Consumption pricing means the customer's data strategy becomes the revenue line. It also means the customer's cost control becomes the growth rate."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core product is a data warehouse that runs on cloud infrastructure. Around it sit data engineering tools, data sharing between organisations, a marketplace for third-party data and, more recently, application and AI workloads that run close to the data. The strategic idea is that data is more valuable when it can be combined, and combining is easier when everything lives in one governed platform.",
      "Customers are enterprises with large and messy data estates: retailers analysing transactions, financial firms running risk models, healthcare organisations combining clinical and operational records. The buying centre is usually the data engineering or analytics team, with information technology and security approving the platform.",
      "Snowflake employed 2,495 people. That is a small organisation for $5.43B of revenue, and it reflects a product that runs on rented infrastructure. The company does not own data centres; it pays cloud providers for storage and compute and charges customers for the service on top."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is consumption of credits. A customer buys a commitment, then draws it down as it runs queries. Gross margin is 67.0%, which is lower than a pure software company's because the cloud infrastructure that powers the queries is a real cost of revenue. Snowflake is, in part, reselling compute with software on top.",
      "The operating loss of 22.8% comes from sales and marketing and research and development spending that is large relative to revenue. The company is still building its customer base and its product surface, and it is doing so with a direct sales force that is expensive per dollar of new revenue.",
      "The difference between the operating loss and the free-cash-flow profit is the most important thing to understand about the financial statements. Free cash flow adds back share-based compensation and the amortisation of capitalised commissions, and it benefits from customers paying in advance. The cash is real, but part of it is funded by dilution rather than by profit."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 61.4% a year across the fiscal years in the dataset, and the latest quarter changed +35.1% year over year. Third-party estimates for the current fiscal year point to $6.3B of revenue and $2.23 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of -22.8% and return on invested capital of -77.1% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -22.8%, the net margin is -20.1% and diluted EPS is -$3.19. The latest quarter's operating margin was -17.0%.",
      "Return on equity is -56.2%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY27: revenue of $1.5B, an operating margin of -17.0% and a net margin of -12.4%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $1.2B, a 22.0% margin. The balance sheet carries $673.1M of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $1.2B over the last twelve months and net debt was -$673.1M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $434.09; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "47 analysts contribute to the third-party consensus. The mean target is $434.09, with a range of $280.00 to $540.00.",
      "Current-year estimates call for $6.3B of revenue and $2.23 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 47 analysts with a mean target of $434.09; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Snowflake's risks are competitive and financial. The product is strong and the cash flow is positive, but the company is still loss-making and the valuation assumes years of fast growth.",
    "items": [
      {
        "title": "Consumption optimisation",
        "severity": "High",
        "detail": "Customers can lower their bill by using the platform more efficiently. Revenue then falls without any customer leaving.",
        "watch": "Product revenue growth and commentary on consumption patterns."
      },
      {
        "title": "Competition from cloud platforms",
        "severity": "High",
        "detail": "The largest cloud providers sell competing data warehouses and can bundle them into existing infrastructure agreements.",
        "watch": "Win rates, customer additions and pricing."
      },
      {
        "title": "Path to profitability",
        "severity": "High",
        "detail": "A 22.8% operating loss is narrowing, but the company has never reported an operating profit. A slower growth year would delay breakeven further.",
        "watch": "Operating margin and the growth of sales and marketing spend."
      },
      {
        "title": "Thin net cash",
        "severity": "Medium",
        "detail": "$673.1M of net cash is small relative to the cost base. A downturn could force a financing.",
        "watch": "Cash and investments against operating cash burn."
      },
      {
        "title": "Share-based compensation",
        "severity": "Medium",
        "detail": "Free cash flow depends on adding back share-based pay. Dilution is a real cost to per-share value.",
        "watch": "Diluted share count and stock compensation as a share of revenue."
      }
    ],
    "watchlist": [
      {
        "title": "Product revenue growth",
        "detail": "The consumption model shows up here first. A deceleration is the leading signal."
      },
      {
        "title": "Operating margin",
        "detail": "Negative 17.0% is an improvement from negative 42.9%. The pace of improvement matters more than the level."
      },
      {
        "title": "Net cash",
        "detail": "$673.1M is the buffer. Watch it against the quarterly cash burn."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Snowflake is a high-growth data platform with a genuine architectural advantage and a cash-generative business underneath the accounting loss. The 67.0% gross margin shows the software economics; the 22.0% free-cash-flow margin shows that customers pay.",
      "The losses are narrowing and the cash flow is positive, which is the right direction. The valuation, at 17.5x sales, assumes that the direction continues for several years. The thin net cash position is the detail that makes the assumption matter.",
      "A reader should separate three questions: how much of growth is new data versus new customers, how much of the cash flow is add-backs, and how much runway the balance sheet provides if growth slows."
    ],
    "questions": [
      "How much of revenue growth comes from existing customers consuming more?",
      "What would a 20% reduction in customer consumption do to the operating loss?",
      "How large is share-based compensation relative to revenue?",
      "How many quarters of operating expenses does $673.1M of net cash cover if growth slows?"
    ]
  }
};
