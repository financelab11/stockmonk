import type { StockStory } from "./types";

export const HOOD: StockStory = {
  "ticker": "HOOD",
  "kicker": "Fintech & Crypto · Brokers, Exchanges & Other",
  "title": "Robinhood's revenue rises and falls with whatever retail traders are doing",
  "dek": "Options, equity and crypto activity, net interest on customer cash and Gold subscriptions all feed one line. A 47.3% operating margin is the reward for a fixed cost base against a volatile revenue mix.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $5.1B trailing twelve months, +20.9% year over year.",
    "Profitability: 47.3% operating margin and 39.0% net margin.",
    "Cash: $2.8B free cash flow, a 54.9% margin.",
    "Scorecard: 50/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000023/hood-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001783879&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Robinhood Markets, Inc. generated $5.1B of revenue over the last twelve months, +20.9% versus the prior year. The economics depend on credit losses, funding costs, take rates and the ability to grow without buying customers.",
      "The latest reported quarter was Q3 FY26, with $1.4B of revenue and an operating margin of 43.9%. The stock closed at $69.19 on 2026-11-17, giving a market capitalization of $62.3B.",
      "The shares sit 7% of the way up their 52-week range ($63.51 to $139.75). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A brokerage earns when customers trade. Nothing in the model controls how much they trade, which is why the revenue line is a sentiment indicator as much as a business metric."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product is simple at the surface: a free account, commission-free trading, and a clean interface. Underneath, the company has to run clearing, custody, margin lending, regulatory reporting and a crypto operation. Those functions are why the cost base is largely fixed and why scale matters so much.",
      "The customer base skews younger and less experienced than an incumbent brokerage's. That is both the opportunity and the risk: younger customers adopt new products quickly, including options and crypto, but they also trade in bursts and their activity drops when markets are quiet or when they lose money.",
      "Gold, the paid subscription tier, is the attempt to convert engagement into a recurring relationship. It raises the interest paid on cash, adds research and gives access to lending features. Subscription revenue is small relative to transactions, but it is the most predictable line the company has."
    ],
    "bullets": [
      {
        "title": "Transaction revenue",
        "detail": "Payments for order flow on equities and options, plus spreads on crypto. The largest and most cyclical line."
      },
      {
        "title": "Net interest",
        "detail": "Earned on customer cash, margin loans and the firm's own portfolio. Rises with rates and with balances."
      },
      {
        "title": "Subscriptions",
        "detail": "Gold and related paid services. Small, recurring and the most stable part of the mix."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Gross margin is 95.1%, which is what a broker looks like when the cost of revenue is mostly clearing and exchange fees rather than goods. Nearly all revenue falls through to gross profit, and the operating margin is decided by how much the company spends on technology, marketing, compliance and customer support.",
      "That cost base is largely fixed. Adding a customer costs marketing and onboarding, but once the account exists the marginal cost of an extra trade is small. This is why the operating margin can move from 38.5% in Q1 FY2026 to 54.2% in Q2 FY2026 without any change in strategy — revenue moved and costs did not.",
      "The interest engine has a different character. It grows with customer cash balances and with short-term rates, and it does not require customers to trade. In a quiet market, interest revenue becomes a larger share of the total and cushions the transaction line. That balance between the two is what makes the earnings less volatile than the trading volume alone would suggest."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 58.9% a year across the fiscal years in the dataset, and the latest quarter changed +11.8% year over year. Third-party estimates for the current fiscal year point to $5.3B of revenue and $2.09 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 47.3% and return on invested capital of 10.5% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 47.3%, the net margin is 39.0% and diluted EPS is $2.17. The latest quarter's operating margin was 43.9%.",
      "Return on equity is 19.7%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $1.4B, an operating margin of 43.9% and a net margin of 32.9%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $2.8B, a 54.9% margin. Net debt is $8B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $2.8B over the last twelve months and net debt was $8B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 31.4x trailing earnings and 28.1x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $126.77; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "30 analysts contribute to the third-party consensus. The mean target is $126.77, with a range of $59.00 to $170.00.",
      "Current-year estimates call for $5.3B of revenue and $2.09 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 30 analysts with a mean target of $126.77; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Robinhood's risk is demand, not execution. The company can control its costs and its products; it cannot control how much its customers choose to trade.",
    "items": [
      {
        "title": "Retail engagement cycle",
        "severity": "High",
        "detail": "Revenue fell from $1.81B in FY2021 to $1.36B in FY2022 with no product failure. A quiet or falling market reduces activity across every line at once.",
        "watch": "Monthly active users, trades per account and the mix between options, equities and crypto."
      },
      {
        "title": "Options and crypto concentration",
        "severity": "High",
        "detail": "The highest-revenue activities are also the highest-risk for customers. A regulatory change or a customer-protection action could remove revenue quickly.",
        "watch": "Revenue by asset class and any change in payment-for-order-flow arrangements."
      },
      {
        "title": "Interest rate dependence",
        "severity": "Medium",
        "detail": "Net interest revenue rises with rates and customer cash. Falling rates reduce it without any offset in cost.",
        "watch": "Net interest revenue and the average customer cash balance."
      },
      {
        "title": "Regulatory and conduct risk",
        "severity": "Medium",
        "detail": "Order routing, crypto listing and options approval are all supervised activities. Rule changes can alter the economics directly.",
        "watch": "Disclosure on regulatory examinations, fines and changes to product permissions."
      },
      {
        "title": "Balance-sheet opacity",
        "severity": "Low",
        "detail": "A $7.99B net debt figure dominated by customer-related items is easy to misread in either direction.",
        "watch": "Segregation of customer assets, margin lending balances and corporate borrowings."
      },
      {
        "title": "Valuation on peak activity",
        "severity": "Medium",
        "detail": "At 36.7x earnings and 15.9x sales, the price assumes recent engagement levels persist.",
        "watch": "The revenue run-rate against the FY2022 and FY2023 comparison periods."
      }
    ],
    "watchlist": [
      {
        "title": "Monthly active users",
        "detail": "The base that produces every revenue line. Growth here precedes revenue growth."
      },
      {
        "title": "Revenue mix",
        "detail": "A shift toward interest and subscriptions would make the earnings less cyclical and support a higher multiple."
      },
      {
        "title": "Operating margin",
        "detail": "It has ranged from 38.5% to 54.2% in six quarters. The level, not the direction, is what the price assumes."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Robinhood is a retail brokerage with $5.08B of trailing revenue, a 47.3% operating margin and $2.79B of free cash flow. It has gone from a $3.69B loss in FY2021 to $1.88B of net income in FY2025, and the recovery came from revenue growth against a cost base that was already built.",
      "The business is best understood as a high-margin, fixed-cost platform whose revenue is set by customer activity. That makes it unusually profitable in strong markets and unusually exposed in weak ones, and it explains why the quarterly operating margin moves by fifteen points without any management decision.",
      "The valuation already assumes a healthy level of engagement. The question a reader has to answer is whether the last two years represent a new baseline or a cyclical peak, and the monthly active user trend is the best evidence either way."
    ],
    "questions": [
      "What share of revenue comes from options and crypto, and how has that mix changed?",
      "How much of net interest revenue would disappear if short-term rates fell?",
      "Are monthly active users growing, or is revenue per user doing all the work?",
      "What would a return to FY2022 activity levels do to the operating margin?"
    ]
  }
};
