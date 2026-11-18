import type { StockStory } from "./types";

export const PYPL: StockStory = {
  "ticker": "PYPL",
  "kicker": "Fintech & Crypto · Credit Services",
  "title": "PayPal is a mature network growing 4.4% while its margin drifts down",
  "dek": "Operating margin has slipped from 18.1% to 16.3% over six quarters. At 10.4x earnings and 7.8x free cash flow the shares are priced for little growth, and the third-party mean target sits below the market price.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $34.3B trailing twelve months, +4.4% year over year.",
    "Profitability: 17.0% operating margin and 13.8% net margin.",
    "Cash: $6.3B free cash flow, a 18.4% margin.",
    "Scorecard: 54/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1633917/000163391726000024/pypl-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001633917&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "PayPal Holdings, Inc. generated $34.3B of revenue over the last twelve months, +4.4% versus the prior year. The economics depend on credit losses, funding costs, take rates and the ability to grow without buying customers.",
      "The latest reported quarter was Q3 FY26, with $8.6B of revenue and an operating margin of 16.3%. The stock closed at $58.11 on 2026-11-17, giving a market capitalization of $48.3B.",
      "The shares sit 77% of the way up their 52-week range ($38.46 to $63.93). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A payments network earns a percentage of what flows through it. Growth comes from more volume or a higher take rate, and PayPal is currently getting a little of the first and losing a little of the second."
  },
  "whatItDoes": {
    "paragraphs": [
      "The branded business is the PayPal button and the Venmo app: a consumer chooses to pay with an account they already have, and the merchant pays a fee for the conversion and the fraud protection that come with it. That is the highest-margin part of the network because the consumer relationship belongs to PayPal.",
      "The unbranded business is Braintree: card processing embedded in a merchant's own checkout, where the consumer never sees a PayPal brand. It is lower margin, because the processing economics are closer to a conventional acquirer's, but it grows quickly and brings large merchants into the group.",
      "Venmo adds a peer-to-peer network and a consumer app with its own monetisation path through cards, pay-with-Venmo at merchants and instant transfers. PayPal Credit adds a lending product. The pieces fit together as a set of ways to be present at a transaction, at different margins and different levels of consumer ownership."
    ],
    "bullets": [
      {
        "title": "Branded checkout",
        "detail": "The PayPal button and Venmo at merchant checkouts. Highest margin, most exposed to competitive pressure at the point of sale."
      },
      {
        "title": "Braintree",
        "detail": "Unbranded card processing for large merchants and platforms. Faster growth, thinner spread."
      },
      {
        "title": "Credit and transfers",
        "detail": "PayPal Credit, Xoom and related services. Adds revenue per customer and introduces credit risk."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is a fee on the value of transactions processed, plus fees on transfers, credit and subscriptions. Gross margin is 50.3%, which reflects the network costs and the funding costs that sit in cost of revenue. The operating margin of 17.0% is what remains after technology, sales, marketing and corporate costs.",
      "The margin mechanism is mix. Branded checkout carries a higher take rate than Braintree because the consumer relationship is PayPal's and the merchant is paying for conversion. When Braintree grows faster than branded checkout, total volume rises and the blended take rate falls. That is exactly the pattern in the recent quarters: revenue up, operating margin down.",
      "The cost base is largely fixed in technology and compliance, but marketing and sales scale with customer acquisition. That means operating leverage is available if branded volume grows, and margin compression is the outcome if it does not."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 11.0% a year across the fiscal years in the dataset, and the latest quarter changed +2.0% year over year. Third-party estimates for the current fiscal year point to $34.5B of revenue and $5.58 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 17.0% and return on invested capital of 20.3% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 17.0%, the net margin is 13.8% and diluted EPS is $5.24. The latest quarter's operating margin was 16.3%.",
      "Return on equity is 24.3%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $8.6B, an operating margin of 16.3% and a net margin of 12.5%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $6.3B, a 18.4% margin. Net debt is $3.2B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $6.3B over the last twelve months and net debt was $3.2B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 10.2x trailing earnings and 7.6x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $57.31; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "33 analysts contribute to the third-party consensus. The mean target is $57.31, with a range of $36.00 to $80.00.",
      "Current-year estimates call for $34.5B of revenue and $5.58 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 33 analysts with a mean target of $57.31; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "PayPal's risks are competitive rather than financial. The balance sheet is conservative, the cash flow is reliable, and the question is whether the branded franchise holds its place at checkout.",
    "items": [
      {
        "title": "Share loss at branded checkout",
        "severity": "High",
        "detail": "Merchant-specific checkout products and other wallets compete directly for the consumer's default payment method. Losing that default removes the highest-margin volume.",
        "watch": "Branded volume growth against total volume growth, and the trend in the blended take rate."
      },
      {
        "title": "Margin mix",
        "severity": "High",
        "detail": "Braintree grows faster than branded checkout at a lower take rate. The operating margin has already fallen from 18.1% to 16.3%.",
        "watch": "Operating margin and the split between branded and unbranded volume."
      },
      {
        "title": "Consumer credit losses",
        "severity": "Medium",
        "detail": "PayPal Credit and buy-now-pay-later products put consumer credit risk on the balance sheet.",
        "watch": "Provision expense and delinquency trends in the credit portfolio."
      },
      {
        "title": "Regulatory change",
        "severity": "Medium",
        "detail": "Interchange rules, wallet regulation and cross-border requirements can change pricing and product design.",
        "watch": "Any change to the treatment of digital wallets or to interchange economics."
      },
      {
        "title": "Buyback-dependent per-share growth",
        "severity": "Medium",
        "detail": "With revenue growing 4.4%, EPS growth depends partly on retiring shares. That works only while the multiple stays low.",
        "watch": "Share count and the proportion of free cash flow spent on repurchases."
      },
      {
        "title": "Venmo monetisation",
        "severity": "Low",
        "detail": "Venmo is a large consumer network with a smaller revenue base than its user count implies. Slower monetisation leaves value on the table.",
        "watch": "Venmo revenue growth and the share of users with a monetised product."
      }
    ],
    "watchlist": [
      {
        "title": "Branded volume growth",
        "detail": "The highest-margin part of the network and the part under most competitive pressure."
      },
      {
        "title": "Take rate",
        "detail": "Revenue as a percentage of total payment volume; the single best measure of mix and pricing power."
      },
      {
        "title": "Operating margin",
        "detail": "Six quarters of decline is the trend the valuation is reacting to."
      },
      {
        "title": "Share count",
        "detail": "With low revenue growth, repurchases are doing much of the per-share work."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "PayPal is a large payments network with $34.30B of trailing revenue, a 17.0% operating margin, $6.30B of free cash flow and modest leverage. It grows slowly, earns 24.3% on equity and trades at 10.4x earnings and 7.8x free cash flow.",
      "The tension in the file is between the returns and the trend. A 20.3% return on invested capital is a good business; a margin falling from 18.1% to 16.3% in six quarters is a business under pressure. The market has resolved that tension by paying a low multiple, and the mean analyst target sits below the current price.",
      "What is not known from the statements is the split between branded and unbranded volume, which is the number that would explain the margin trend. Without it, a reader can see the effect but not the cause."
    ],
    "questions": [
      "How fast is branded checkout volume growing compared with Braintree?",
      "What is the take rate on each, and how has the blend shifted?",
      "How much of the EPS growth comes from share repurchases rather than operating profit?",
      "What would stop the operating margin decline?"
    ]
  }
};
