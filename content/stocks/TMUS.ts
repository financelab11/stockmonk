import type { StockStory } from "./types";

export const TMUS: StockStory = {
  "ticker": "TMUS",
  "kicker": "Telecom · US wireless",
  "title": "T-Mobile sells monthly connectivity and has learned to keep the cash",
  "dek": "Revenue is $93.8B and free cash flow is $18.7B. The network is already built, so the story turns on service revenue per account and on $82.8B of net debt.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $93.8B trailing twelve months, +9.3% year over year.",
    "Profitability: 20.7% operating margin and -124.2% net margin.",
    "Cash: $18.7B free cash flow, a 19.9% margin.",
    "Scorecard: 52/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1283699/000128369926000010/tmus-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001283699&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "T-Mobile US, Inc. generated $93.8B of revenue over the last twelve months, +9.3% versus the prior year. The key question is whether audience, content or network scale can be monetised without giving away the margin.",
      "The latest reported quarter was Q3 FY26, with $23.6B of revenue and an operating margin of 24.0%. The stock closed at $167.90 on 2026-11-17, giving a market capitalization of $177.9B.",
      "The shares sit 30% of the way up their 52-week range ($143.75 to $224.75). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "In wireless the network is the product and the subscriber is the annuity. Growth comes from taking accounts from rivals or selling more services to the ones already there."
  },
  "whatItDoes": {
    "paragraphs": [
      "The customer base splits into three. Postpaid phone accounts are the most valuable: monthly bills, long relationships, and the highest revenue per account. Prepaid serves customers who do not want a credit check, with lower revenue per user and higher churn. Wholesale sells network capacity to other brands that resell it under their own names.",
      "Everything is sold in one country, which is the most important structural fact. There is no international segment to offset a weak domestic quarter and no new geography to enter. Growth has to come from share gains, price increases or new services such as home broadband over the wireless network. The company employs 75,000 people and does not report a segment split in this dataset."
    ],
    "bullets": [
      {
        "title": "Postpaid",
        "detail": "Phone and data plans billed monthly. The core profit pool and the number analysts track most closely."
      },
      {
        "title": "Prepaid",
        "detail": "No-contract plans sold to value-focused and credit-constrained customers. Lower revenue per user, higher turnover."
      },
      {
        "title": "Wholesale and equipment",
        "detail": "Capacity sold to other brands, plus phones and accessories. Devices move revenue without moving much profit."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Service revenue is the engine: a recurring monthly charge that costs almost nothing extra to deliver once the network exists. Equipment revenue is a pass-through. That mix explains why the gross margin is 28.1%, a figure that looks low for a telecom until you remember that handset sales are included in revenue at close to cost.",
      "The cost base is mostly fixed: network operations, spectrum, roaming, customer care, commissions and advertising. Spreading those costs over more revenue is what drove the operating margin from 8.6% in FY2021 to 20.7% today, with operating income rising from $6.89B to $18.28B on 10% more revenue.",
      "The unit economics that matter are the cost of acquiring a subscriber against the lifetime service margin. Promotions and device subsidies raise acquisition cost, and a customer who switches for a free phone is more likely to switch again when the next offer appears."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 11.9% a year across the fiscal years in the dataset, and the latest quarter changed +7.4% year over year. Third-party estimates for the current fiscal year point to $94.8B of revenue and $11.20 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 20.7% and return on invested capital of 11.0% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 20.7%, the net margin is -124.2% and diluted EPS is $10.38. The latest quarter's operating margin was 24.0%.",
      "Return on equity is -206.9%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $23.6B, an operating margin of 24.0% and a net margin of 14.6%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $18.7B, a 19.9% margin. Net debt is $82.8B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $18.7B over the last twelve months and net debt was $82.8B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and 7.7x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $226.24; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "25 analysts contribute to the third-party consensus. The mean target is $226.24, with a range of $169.00 to $296.00.",
      "Current-year estimates call for $94.8B of revenue and $11.20 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 25 analysts with a mean target of $226.24; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "The balance sheet is the constraint and the US market is the boundary. Most of the risks below show up either in service revenue or in the debt schedule.",
    "items": [
      {
        "title": "Price competition",
        "severity": "High",
        "detail": "Every new postpaid account comes from a rival. Promotions and device subsidies can win customers who leave just as quickly.",
        "watch": "Postpaid phone net additions and the level of promotional subsidies in the quarter."
      },
      {
        "title": "Leverage",
        "severity": "High",
        "detail": "$82.8B of net debt makes the equity sensitive to refinancing costs. Higher rates raise the claim on cash flow before shareholders see it.",
        "watch": "Net debt to EBITDA, the maturity schedule and interest expense."
      },
      {
        "title": "Network and spectrum spending",
        "severity": "Medium",
        "detail": "Coverage and capacity require continuous investment. A new spectrum auction or a technology cycle can lift capex for several years.",
        "watch": "Capital expenditure as a share of service revenue."
      },
      {
        "title": "Market saturation",
        "severity": "Medium",
        "detail": "The US population does not grow fast enough to supply new subscribers. Growth must come from price or from new services.",
        "watch": "Service revenue growth and revenue per account."
      },
      {
        "title": "Regulation",
        "severity": "Medium",
        "detail": "Spectrum rules, roaming terms and consumer protection requirements can change what the network is allowed to charge or carry.",
        "watch": "Licence conditions and any new consumer rules affecting pricing."
      }
    ],
    "watchlist": [
      {
        "title": "Service revenue",
        "detail": "The recurring line is the profit engine; equipment revenue is noise by comparison."
      },
      {
        "title": "Capex",
        "detail": "Free cash flow has been lifted by a falling capital budget, and that tailwind does not last forever."
      },
      {
        "title": "Debt reduction",
        "detail": "Every dollar of net debt repaid is a dollar of interest that drops to the equity."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "T-Mobile is a scale wireless operator with a 20.7% operating margin and $18.7B of free cash flow. It earns a return on invested capital of 11.0% and carries $82.8B of net debt at 2.4x EBITDA.",
      "The trailing net margin of -124.2% is an accounting artifact of one quarter, not a collapse. A reader who takes that number at face value would draw exactly the wrong conclusion about the year.",
      "What is genuinely uncertain is growth. A 7.5x EBITDA multiple already assumes little, so the shares do not need rapid growth to justify the price, but they do need service revenue to stop falling and the debt to remain serviceable."
    ],
    "questions": [
      "How much of recent revenue growth came from price rather than net new accounts?",
      "What is the interest cost on the debt, and when does it need refinancing?",
      "Can fixed wireless broadband grow without cannibalising the mobile base?",
      "What would a price war do to the 20.7% operating margin?"
    ]
  }
};
