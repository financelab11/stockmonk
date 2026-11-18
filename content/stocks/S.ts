import type { StockStory } from "./types";

export const S: StockStory = {
  "ticker": "S",
  "kicker": "Software & Cyber · Endpoint and XDR",
  "title": "SentinelOne's agents are sticky, but its income statement is still catching up",
  "dek": "Revenue passed $1B and free cash flow turned positive, yet a 29.5% operating loss shows how much of the model still depends on outspending larger rivals.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $1.1B trailing twelve months, +21.1% year over year.",
    "Profitability: -29.5% operating margin and -31.0% net margin.",
    "Cash: $56.5M free cash flow, a 5.1% margin.",
    "Scorecard: 44/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000020/s-20260131.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001583708&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "SentinelOne, Inc. generated $1.1B of revenue over the last twelve months, +21.1% versus the prior year. The model depends on net revenue retention, sales efficiency and the cost of acquiring the next customer.",
      "The latest reported quarter was Q2 FY27, with $292M of revenue and an operating margin of -31.1%. The stock closed at $21.15 on 2026-11-17, giving a market capitalization of $7.4B.",
      "The shares sit 64% of the way up their 52-week range ($11.81 to $26.50). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Endpoint security is a replacement market. Every dollar SentinelOne wins comes out of an incumbent's renewal, which makes bundling a bigger risk than any single rival."
  },
  "whatItDoes": {
    "paragraphs": [
      "The platform covers prevention, detection, response and hunting in one agent. Customers add modules for cloud workloads, identity protection and the data lake without deploying a second sensor, which is the mechanism behind expansion revenue: the same installed base can be billed for more over time.",
      "Buyers are security teams at enterprises and mid-sized companies, usually reached through channel partners who bundle the licence into a wider reseller agreement. The company reports one consolidated revenue line, so there is no segment disclosure to lean on. The dataset also gives no geography split."
    ],
    "bullets": [
      {
        "title": "The agent",
        "detail": "A single sensor on the endpoint that scores behaviour locally rather than waiting for a signature update or a cloud verdict."
      },
      {
        "title": "The data layer",
        "detail": "Telemetry from every agent lands in a common store, which is what makes cross-domain detection and module attachment possible."
      },
      {
        "title": "The buying route",
        "detail": "Channel-led sales into security budgets that are already allocated, so growth depends on displacing an incumbent rather than creating a new line item."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is a subscription per protected endpoint or workload, billed annually and recognised over the term. Pricing scales with the size of the estate and with how many modules are switched on. That is a good model when estates grow and a difficult one when a customer consolidates vendors and renegotiates at renewal.",
      "Gross margin is 72.5%, well below what a pure licence business would show. The difference is the cost of running the backend: storing and querying telemetry for every customer is a real expense that grows with usage rather than staying flat. Operating margin is -29.5% because sales and research spending still exceed the gross profit pool.",
      "The strange part of the statement is the coexistence of a 29.5% operating loss and a 5.1% free-cash-flow margin. That pattern is typical of software companies that pay a meaningful part of compensation in stock and collect cash annually in advance: the expense is recognised over twelve months while the cash arrives on day one. It is not an accounting trick, but it does mean the cash flow looks better than the economic result until stock compensation is counted."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 66.8% a year across the fiscal years in the dataset, and the latest quarter changed +20.6% year over year. Third-party estimates for the current fiscal year point to $1.2B of revenue and $0.32 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of -29.5% and return on invested capital of -31.6% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -29.5%, the net margin is -31.0% and diluted EPS is -$1.01. The latest quarter's operating margin was -31.1%.",
      "Return on equity is -23.7%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY27: revenue of $292M, an operating margin of -31.1% and a net margin of -32.0%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $56.5M, a 5.1% margin. The balance sheet carries $628.7M of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $56.5M over the last twelve months and net debt was -$628.7M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $24.92; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "30 analysts contribute to the third-party consensus. The mean target is $24.92, with a range of $17.50 to $31.00.",
      "Current-year estimates call for $1.2B of revenue and $0.32 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 30 analysts with a mean target of $24.92; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "The balance sheet is not the constraint here. The risks are competitive, operational and structural, and they all land on the same line: how much a customer will pay per endpoint at the next renewal.",
    "items": [
      {
        "title": "Bundled endpoint protection",
        "severity": "High",
        "detail": "Larger platform vendors can include endpoint protection inside an existing agreement at little incremental cost. That compresses price even when the product is technically competitive.",
        "watch": "Average revenue per endpoint, discounting at renewal and win rates against platform suites."
      },
      {
        "title": "Net revenue retention",
        "severity": "High",
        "detail": "If existing customers stop adding modules, growth has to come entirely from new logos, which is the more expensive kind.",
        "watch": "Disclosed retention rates and the mix of expansion versus new business in each quarter."
      },
      {
        "title": "The gap between cash and profit",
        "severity": "Medium",
        "detail": "Positive free cash flow alongside a 29.5% operating loss depends on stock compensation and upfront billing. Neither is infinite.",
        "watch": "Stock-based compensation as a share of revenue and the trend in diluted share count."
      },
      {
        "title": "Sales efficiency",
        "severity": "Medium",
        "detail": "Security buying committees are slow and channel-dependent. If the cost of winning a dollar of new revenue rises, the path to operating profit lengthens.",
        "watch": "Sales and marketing spend relative to the incremental revenue it produces."
      },
      {
        "title": "Change in what endpoints are",
        "severity": "Medium",
        "detail": "AI-assisted development and agent-run workloads can shift where code executes. A sensor built for human-operated machines may need re-architecting for machine-operated ones.",
        "watch": "Product launches aimed at AI workloads and the revenue attached to cloud and container coverage."
      }
    ],
    "watchlist": [
      {
        "title": "Net revenue retention",
        "detail": "The cleanest single measure of whether the platform is widening inside accounts or just holding on."
      },
      {
        "title": "Free-cash-flow margin",
        "detail": "Watch whether the 5.1% margin expands as revenue grows, or stays flat because spending grows with it."
      },
      {
        "title": "Gross margin",
        "detail": "A move below 70% would suggest the data platform costs more to run than the pricing assumes."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "SentinelOne has built a genuine product with a real installed base and has crossed the point where cash flow is positive. It has not yet shown that endpoint security can be sold profitably at scale against vendors that give the function away as part of something larger.",
      "The educational point is the difference between the three profit lines. Gross margin tells you about delivery cost, operating margin tells you about the cost of running the company, and free cash flow tells you about timing. Here they diverge sharply, and each one is answering a different question.",
      "What would settle the argument is not a single good quarter. It is a year in which revenue growth holds near 20% while the operating loss narrows for reasons other than stock compensation."
    ],
    "questions": [
      "How much of the revenue base is module expansion rather than new customers?",
      "What happens to pricing when a customer's platform vendor includes endpoint protection?",
      "How large is stock compensation relative to the free cash flow being reported?",
      "Does the 72.5% gross margin hold as data volumes grow?"
    ]
  }
};
