import type { StockStory } from "./types";

export const HOOD: StockStory = {
  ticker: "HOOD",
  kicker: "Fintech & Crypto · Brokers, Exchanges & Other",
  title: "Robinhood's revenue rises and falls with whatever retail traders are doing",
  dek: "Options, equity and crypto activity, net interest on customer cash and Gold subscriptions all feed one line. A 47.3% operating margin is the reward for a fixed cost base against a volatile revenue mix.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $5.08B, up 20.9%, though the latest quarter slowed to 11.8%.",
    "Operating margin reached 47.3% on a trailing basis after a $3.69B loss in FY2021.",
    "Free cash flow of $2.79B is 54.9% of revenue, the strongest cash conversion in the peer group.",
    "Reported net debt of $7.99B reflects a broker balance sheet, not corporate borrowing in the usual sense.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1783879/000178387926000023/hood-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001783879&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Robinhood is a retail brokerage app. Customers open an account, deposit cash, and buy and sell stocks, exchange-traded funds, options, gold and crypto. The company also runs a cash management product, a subscription tier called Gold, and a set of educational and news features meant to keep users opening the app.",
      "The business has three revenue engines. Transaction-based revenue comes from routing customer orders and from crypto spreads. Net interest revenue comes from customer cash balances, margin lending and the firm's own securities portfolio. Subscription revenue comes from Gold and from paid services. All three move with customer engagement rather than with a subscription contract.",
      "The transformation is stark. Operating income went from -$3.69B in FY2021 to +$2.11B in FY2025, and the trailing operating margin is 47.3%. At $80.91 the equity is worth $72.86B, inside a 52-week range of $63.52 to $140.16, with a one-year return of -36.3% against +113.0% over five years.",
    ],
    quote:
      "A brokerage earns when customers trade. Nothing in the model controls how much they trade, which is why the revenue line is a sentiment indicator as much as a business metric.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is simple at the surface: a free account, commission-free trading, and a clean interface. Underneath, the company has to run clearing, custody, margin lending, regulatory reporting and a crypto operation. Those functions are why the cost base is largely fixed and why scale matters so much.",
      "The customer base skews younger and less experienced than an incumbent brokerage's. That is both the opportunity and the risk: younger customers adopt new products quickly, including options and crypto, but they also trade in bursts and their activity drops when markets are quiet or when they lose money.",
      "Gold, the paid subscription tier, is the attempt to convert engagement into a recurring relationship. It raises the interest paid on cash, adds research and gives access to lending features. Subscription revenue is small relative to transactions, but it is the most predictable line the company has.",
    ],
    bullets: [
      {
        title: "Transaction revenue",
        detail:
          "Payments for order flow on equities and options, plus spreads on crypto. The largest and most cyclical line.",
      },
      {
        title: "Net interest",
        detail:
          "Earned on customer cash, margin loans and the firm's own portfolio. Rises with rates and with balances.",
      },
      {
        title: "Subscriptions",
        detail:
          "Gold and related paid services. Small, recurring and the most stable part of the mix.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin is 95.1%, which is what a broker looks like when the cost of revenue is mostly clearing and exchange fees rather than goods. Nearly all revenue falls through to gross profit, and the operating margin is decided by how much the company spends on technology, marketing, compliance and customer support.",
      "That cost base is largely fixed. Adding a customer costs marketing and onboarding, but once the account exists the marginal cost of an extra trade is small. This is why the operating margin can move from 38.5% in Q1 FY2026 to 54.2% in Q2 FY2026 without any change in strategy — revenue moved and costs did not.",
      "The interest engine has a different character. It grows with customer cash balances and with short-term rates, and it does not require customers to trade. In a quiet market, interest revenue becomes a larger share of the total and cushions the transaction line. That balance between the two is what makes the earnings less volatile than the trading volume alone would suggest.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew 20.9% on a trailing basis and 11.8% in the latest quarter. The annual series is $1.81B, $1.36B, $1.86B, $2.95B and $4.47B, which is not a smooth curve: it fell in FY2022, recovered through FY2023 and then accelerated. That shape is the retail trading cycle, not a product roadmap.",
      "The quarterly record shows the same volatility. Revenue went from $989.0M in Q2 FY2025 to $1.27B, $1.28B, $1.07B, $1.31B and $1.42B. A 20% swing between consecutive quarters is normal here, which makes any single quarter a poor guide to the year.",
      "The third-party estimates project $5.32B of revenue this fiscal year and $6.87B next, with EPS of $2.10 rising to $2.93. The implied next-year growth is well above the trailing rate, which assumes either a stronger trading environment or continued growth in interest and subscription revenue.",
    ],
  },
  performance: {
    paragraphs: [
      "The margin record is the most interesting part of this company. Operating margins over the last six quarters were 44.7%, 49.8%, 51.5%, 38.5%, 54.2% and 43.9%. Net income ranged from $350.0M to $605.0M, and diluted EPS from $0.38 to $0.66. The variation is almost entirely revenue-driven.",
      "The comparison with FY2021 is worth keeping in view. That year the company lost $3.69B on $1.81B of revenue, a loss more than twice the revenue, which is not an operating outcome in any ordinary sense. By FY2023 the loss was $541.0M, and by FY2024 the company earned $1.41B. The swing from there to $1.88B in FY2025 shows how quickly a fixed cost base becomes profitable once revenue covers it.",
      "Return on equity is 19.7% and return on invested capital is 10.5%. Those are good numbers for a broker, and they are flattered by the fact that the balance sheet is mostly customer-related rather than capital invested in the business.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is $2.79B on a trailing basis, a 54.9% margin, and the annual series moved from -$948.0M in FY2021 to +$1.26B in FY2025. The cash generation is genuine, and it is the strongest in the peer group on a margin basis.",
      "The reported net debt of $7.99B, or 3.2x EBITDA, needs context. A broker holds customer cash, securities borrowed and margin loans on both sides of the balance sheet, and those items dominate the totals. The figure is not comparable to an industrial company's borrowings, and interest cover is not disclosed in a form that helps.",
      "What the cash supports is product expansion and, potentially, capital returns. The company does not need to fund a loan book or a fabrication plant; its investment is software and people. That is why a 54.9% free cash flow margin is possible at all.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $80.91 the equity is worth $72.86B. The P/E is 36.7x, EV/EBITDA 32.3x, price-to-free-cash-flow 26.1x and EV/sales 15.9x. Unlike several peers, these four are broadly consistent, which means the market is valuing profit and cash flow rather than an option on future revenue.",
      "The peer comparison is stark. PayPal trades at 10.4x earnings and 7.8x free cash flow on 4.4% revenue growth. Toast at 36.6x earnings on 22.1% growth. Affirm at 9.5x earnings, distorted by a one-off. Robinhood's 36.7x earnings sits at the top of the group alongside Toast, and it is being paid for 20.9% growth and a 47.3% operating margin.",
      "The question the multiple asks is whether the current revenue level is a floor or a peak. If retail engagement stays at recent levels, 36.7x is a full but defensible price for a high-margin franchise. If activity mean-reverts toward the FY2022–FY2023 pattern, the earnings base shrinks and the multiple expands on its own.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty analysts contribute to the attributed third-party consensus, with a mean target of $128.87 and a range of $59.00 to $170.00. The range spans nearly three times from bottom to top, which is what happens when the earnings depend on an activity level nobody can forecast.",
      "Current-year estimates are $5.32B of revenue and EPS of $2.10, rising to $6.87B and $2.93 next year. Twenty-five and twenty-six analysts contribute to those annual figures, making this one of the better-covered names in the group.",
      "Those are third-party forecasts, not a Stockmonk view. The EPS path from $2.10 to $2.93 implies profit growth of roughly 40% on revenue growth of roughly 30%, which requires the operating margin to hold at a high level while revenue grows.",
    ],
  },
  risks: {
    intro:
      "Robinhood's risk is demand, not execution. The company can control its costs and its products; it cannot control how much its customers choose to trade.",
    items: [
      {
        title: "Retail engagement cycle",
        severity: "High",
        detail:
          "Revenue fell from $1.81B in FY2021 to $1.36B in FY2022 with no product failure. A quiet or falling market reduces activity across every line at once.",
        watch:
          "Monthly active users, trades per account and the mix between options, equities and crypto.",
      },
      {
        title: "Options and crypto concentration",
        severity: "High",
        detail:
          "The highest-revenue activities are also the highest-risk for customers. A regulatory change or a customer-protection action could remove revenue quickly.",
        watch:
          "Revenue by asset class and any change in payment-for-order-flow arrangements.",
      },
      {
        title: "Interest rate dependence",
        severity: "Medium",
        detail:
          "Net interest revenue rises with rates and customer cash. Falling rates reduce it without any offset in cost.",
        watch:
          "Net interest revenue and the average customer cash balance.",
      },
      {
        title: "Regulatory and conduct risk",
        severity: "Medium",
        detail:
          "Order routing, crypto listing and options approval are all supervised activities. Rule changes can alter the economics directly.",
        watch:
          "Disclosure on regulatory examinations, fines and changes to product permissions.",
      },
      {
        title: "Balance-sheet opacity",
        severity: "Low",
        detail:
          "A $7.99B net debt figure dominated by customer-related items is easy to misread in either direction.",
        watch:
          "Segregation of customer assets, margin lending balances and corporate borrowings.",
      },
      {
        title: "Valuation on peak activity",
        severity: "Medium",
        detail:
          "At 36.7x earnings and 15.9x sales, the price assumes recent engagement levels persist.",
        watch:
          "The revenue run-rate against the FY2022 and FY2023 comparison periods.",
      },
    ],
    watchlist: [
      {
        title: "Monthly active users",
        detail:
          "The base that produces every revenue line. Growth here precedes revenue growth.",
      },
      {
        title: "Revenue mix",
        detail:
          "A shift toward interest and subscriptions would make the earnings less cyclical and support a higher multiple.",
      },
      {
        title: "Operating margin",
        detail:
          "It has ranged from 38.5% to 54.2% in six quarters. The level, not the direction, is what the price assumes.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Robinhood is a retail brokerage with $5.08B of trailing revenue, a 47.3% operating margin and $2.79B of free cash flow. It has gone from a $3.69B loss in FY2021 to $1.88B of net income in FY2025, and the recovery came from revenue growth against a cost base that was already built.",
      "The business is best understood as a high-margin, fixed-cost platform whose revenue is set by customer activity. That makes it unusually profitable in strong markets and unusually exposed in weak ones, and it explains why the quarterly operating margin moves by fifteen points without any management decision.",
      "The valuation already assumes a healthy level of engagement. The question a reader has to answer is whether the last two years represent a new baseline or a cyclical peak, and the monthly active user trend is the best evidence either way.",
    ],
    questions: [
      "What share of revenue comes from options and crypto, and how has that mix changed?",
      "How much of net interest revenue would disappear if short-term rates fell?",
      "Are monthly active users growing, or is revenue per user doing all the work?",
      "What would a return to FY2022 activity levels do to the operating margin?",
    ],
  },
};
