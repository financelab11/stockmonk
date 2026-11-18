import type { StockStory } from "./types";

export const FOUR: StockStory = {
  "ticker": "FOUR",
  "kicker": "Fintech & Crypto · Application Software",
  "title": "Shift4's earnings look thin only until amortisation is added back",
  "dek": "Revenue of $4.92B produces a 2.6% net margin but $624.0M of free cash flow. Acquired intangibles are charged against profit without consuming cash, which is why the P/E and the price-to-free-cash-flow tell different stories.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $4.9B trailing twelve months, +27.0% year over year.",
    "Profitability: 8.2% operating margin and 2.6% net margin.",
    "Cash: $624M free cash flow, a 12.7% margin.",
    "Scorecard: 60/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1794669/000179466926000010/four-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001794669&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Shift4 Payments, Inc. generated $4.9B of revenue over the last twelve months, +27.0% versus the prior year. The economics depend on credit losses, funding costs, take rates and the ability to grow without buying customers.",
      "The latest reported quarter was Q3 FY26, with $1.3B of revenue and an operating margin of 9.9%. The stock closed at $41.41 on 2026-11-17, giving a market capitalization of $3.1B.",
      "The shares sit 17% of the way up their 52-week range ($34.56 to $75.35). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Payments companies are judged on spread and volume. When they grow by acquisition, the income statement also carries the accounting for everything they bought."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core product is payment acceptance: a merchant takes a card, Shift4 authorises it, settles it, and keeps a small percentage of the transaction. Around that sit the software integrations that make the acceptance work inside a hotel's property management system, a restaurant's till, a stadium's concessions or a gaming floor's cage.",
      "That vertical focus is the differentiator. A generic terminal provider has to be configured for each industry; Shift4 starts from software the industry already uses. Hospitality and gaming are the strongest examples, because the payment flow is complicated and the cost of failure is high, which supports both stickiness and pricing.",
      "The company also sells hardware, gateways and business tools, and it has expanded internationally through acquisitions. Each acquired business brings its own merchant base, its own technology and its own intangible assets, which is why the balance sheet and the income statement carry more complexity than a single-product processor's."
    ],
    "bullets": [
      {
        "title": "Payment spread",
        "detail": "A percentage of each transaction after network and interchange costs. The largest revenue line and the thinnest margin per dollar."
      },
      {
        "title": "Software and services",
        "detail": "Integrated products sold alongside payments. Higher margin and the reason merchants stay."
      },
      {
        "title": "Acquired portfolios",
        "detail": "Businesses bought for their merchant bases and technology. They add revenue and amortisation in roughly equal measure."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The economics are volume times spread. A merchant processing a large amount through Shift4 pays a small percentage, of which the card networks and issuing banks take the majority. What remains is gross profit. That is why gross margin is 23.1%: the company is reporting the whole processing revenue and the network costs that come with it.",
      "On top of the spread sits software and services revenue, which carries a much better margin and grows with the number of products sold per merchant. The operating margin of 8.2% is the result of stacking that software gross profit on top of the processing spread and then paying for a large sales organisation and the corporate costs of an acquisitive group.",
      "The operating leverage comes from volume and product attach. Fixed costs — technology, compliance, corporate — do not scale with transactions, so each additional dollar of spread contributes disproportionately. The quarterly operating margin moving from 4.5% in Q1 FY2026 to 9.9% in Q3 FY2026 on a modest revenue increase is that leverage at work."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 33.7% a year across the fiscal years in the dataset, and the latest quarter changed +12.1% year over year. Third-party estimates for the current fiscal year point to $5B of revenue and $5.09 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 8.2% and return on invested capital of 94.2% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 8.2%, the net margin is 2.6% and diluted EPS is -$0.01. The latest quarter's operating margin was 9.9%.",
      "Return on equity is 8.0%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $1.3B, an operating margin of 9.9% and a net margin of 2.9%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $624M, a 12.7% margin. The balance sheet carries $1.2B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $624M over the last twelve months and net debt was -$1.2B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 24.4x trailing earnings and 2.0x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $49.18; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "22 analysts contribute to the third-party consensus. The mean target is $49.18, with a range of $38.00 to $77.00.",
      "Current-year estimates call for $5B of revenue and $5.09 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 22 analysts with a mean target of $49.18; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Shift4's risks come from two directions: the payments spread it earns, and the acquisition programme that produced its scale.",
    "items": [
      {
        "title": "Acquisition integration",
        "severity": "High",
        "detail": "Growth has come from buying businesses. Each deal brings technology, staff and merchant relationships that have to be kept, and integration failures show up as churn a year later.",
        "watch": "Organic revenue growth disclosure, retention of acquired merchant bases, and any goodwill impairment."
      },
      {
        "title": "Spread compression",
        "severity": "High",
        "detail": "The gross margin of 23.1% is a spread over network costs. Larger processors can undercut on price to win accounts.",
        "watch": "Gross margin and revenue as a percentage of processed volume."
      },
      {
        "title": "Vertical concentration",
        "severity": "Medium",
        "detail": "Hospitality, gaming and restaurants are cyclical. A downturn in travel or discretionary spending hits the merchant base directly.",
        "watch": "Volume growth by vertical where disclosed, and the pace of new merchant signings."
      },
      {
        "title": "Interest and leverage",
        "severity": "Medium",
        "detail": "The net cash position is comfortable today, but acquisition debt has been part of the strategy and the net line is already sensitive to interest.",
        "watch": "Interest expense, debt maturities and the net-debt-to-EBITDA ratio after any new deal."
      },
      {
        "title": "Growth quality",
        "severity": "Medium",
        "detail": "Trailing growth of 27.0% against a latest quarter of 12.1% suggests a meaningful part of the reported rate is purchased rather than organic.",
        "watch": "The gap between reported and organic growth each quarter."
      },
      {
        "title": "Accounting complexity",
        "severity": "Low",
        "detail": "Amortisation, acquisition costs and adjustments make the headline earnings hard to compare across years.",
        "watch": "The reconciliation from operating income to net income and the trend in amortisation."
      }
    ],
    "watchlist": [
      {
        "title": "Organic growth",
        "detail": "The number that separates the underlying business from the acquisition programme."
      },
      {
        "title": "Gross margin",
        "detail": "The spread over network costs is the core unit economic and the first place price competition appears."
      },
      {
        "title": "Amortisation and interest",
        "detail": "The two lines that explain why net income is so much lower than operating income."
      },
      {
        "title": "Net cash",
        "detail": "At $1.24B it funds the next acquisition; a fall would change the story."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Shift4 is an integrated payments company with $4.92B of trailing revenue, an 8.2% operating margin and $624.0M of free cash flow. It has grown revenue every year in the series and turned a $49.2M operating loss in FY2021 into a $351.0M profit in FY2025, largely by acquiring businesses and integrating them into its vertical software channel.",
      "The apparent contradiction between a 25.9x P/E and a 2.2x EV/EBITDA is the most instructive part of the file. It resolves once amortisation of acquired intangibles and interest are separated from cash flow, and it explains why the free cash flow yield is 18.9% while the net margin is 2.6%.",
      "The real question is whether the growth is repeatable without more acquisitions. The latest quarter's 12.1% growth against a 27.0% trailing rate is the first piece of evidence, and it points to a business that needs to prove it can grow the merchant base it already owns."
    ],
    "questions": [
      "What was organic revenue growth in the latest quarter, excluding acquisitions?",
      "How much of the free cash flow comes from amortisation add-backs rather than operating improvement?",
      "What is the retention rate on merchant bases acquired in the last three years?",
      "How much acquisition debt matures in the next three years?"
    ]
  }
};
