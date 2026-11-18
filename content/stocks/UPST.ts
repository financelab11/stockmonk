import type { StockStory } from "./types";

export const UPST: StockStory = {
  "ticker": "UPST",
  "kicker": "Fintech & Crypto · Credit Services",
  "title": "Upstart's marketplace only works while its bank partners keep buying loans",
  "dek": "Revenue fell from $848.6M in FY2021 to $513.6M in FY2023 when funding dried up, then recovered to $1.34B. A 4.6% operating margin shows how little cushion the model carries when the buyers of loans step back.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $1.3B trailing twelve months, +38.6% year over year.",
    "Profitability: 4.6% operating margin and -35.8% net margin.",
    "Cash: -$187M free cash flow, a -14.0% margin.",
    "Scorecard: 61/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1647639/000164763926000027/upst-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001647639&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Upstart Holdings, Inc. generated $1.3B of revenue over the last twelve months, +38.6% versus the prior year. The economics depend on credit losses, funding costs, take rates and the ability to grow without buying customers.",
      "The latest reported quarter was Q3 FY26, with $370.5M of revenue and an operating margin of 9.7%. The stock closed at $18.13 on 2026-11-17, giving a market capitalization of $1.8B.",
      "The shares sit 0% of the way up their 52-week range ($18.08 to $52.10). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A marketplace is only as strong as its capital partners. When they stop buying, the platform either shrinks or becomes a balance-sheet lender."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product set covers personal loans, automotive refinancing and home equity lines, plus a small business offering. Each is the same underlying machinery applied to a different asset: a borrower, a risk model, a loan, and an institutional buyer.",
      "The bank partners are the customers that matter, not the borrowers. A partner needs loans that perform, documentation that satisfies its regulator, and a process that fits its own underwriting. Upstart's job is to deliver applications that the partner would not have approved on its own criteria but that perform well — that is the value the model has to prove.",
      "There is one reported revenue line, so the statements do not split referral fees from servicing fees from interest income on loans held. The mix matters: fee income is capital-light and repeatable, while interest income means the company is carrying the loan and the risk."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "When a loan is funded, Upstart is paid a fee based on its size. It also earns ongoing servicing fees for collecting payments and managing the relationship, and it earns interest on any loans it holds on its own balance sheet. The first two are the marketplace economics; the third is lending economics and belongs in a different risk bucket.",
      "The cost base is engineering, credit analytics and the compliance apparatus needed to sell loans to regulated institutions. Those costs are largely fixed, which means each additional dollar of loan volume carries a high incremental margin. That is why the operating margin can swing from 1.8% in a weak quarter to 9.7% in a strong one without a change in strategy.",
      "The funding side is what makes the model fragile. Upstart raises money through warehouse facilities and forward-flow agreements, and it has used convertible debt. If the cost of that money rises above what a partner will pay for a loan, the transaction does not happen — no fee, no revenue, and the fixed cost base keeps running."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 36.7% a year across the fiscal years in the dataset, and the latest quarter changed +33.7% year over year. Third-party estimates for the current fiscal year point to $1.4B of revenue and $1.84 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 4.6% and return on invested capital of 11.5% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Partner network",
        "detail": "Each bank or credit union that joins adds funding capacity. Concentration in a few partners is the structural weakness."
      },
      {
        "title": "Model performance",
        "detail": "If the loans perform better than the partner's own models would have predicted, the partner buys more. If not, it stops."
      },
      {
        "title": "Product expansion",
        "detail": "Auto refinance and home equity broaden the addressable volume beyond personal loans but need the same partner appetite."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 4.6%, the net margin is -35.8% and diluted EPS is $0.59. The latest quarter's operating margin was 9.7%.",
      "Return on equity is -54.0%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $370.5M, an operating margin of 9.7% and a net margin of 9.9%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$187M, a -14.0% margin. The balance sheet carries $461.5M of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was -$187M over the last twelve months and net debt was -$461.5M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and 15.2x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $30.50; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "16 analysts contribute to the third-party consensus. The mean target is $30.50, with a range of $18.00 to $46.00.",
      "Current-year estimates call for $1.4B of revenue and $1.84 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 16 analysts with a mean target of $30.5; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "The risks here are concentrated in the funding relationship. Upstart does not need borrowers to like it; it needs institutions to keep buying the loans its model produces.",
    "items": [
      {
        "title": "Funding partner concentration",
        "severity": "High",
        "detail": "A marketplace depends on a small number of institutions. One partner pausing purchases can remove a large share of volume quickly.",
        "watch": "Partner count, concentration disclosure, and any committed forward-flow arrangements."
      },
      {
        "title": "Credit model performance",
        "severity": "High",
        "detail": "The entire value proposition is that the model selects borrowers better than a traditional score. If vintages produce worse losses than predicted, partners reprice or withdraw.",
        "watch": "Cumulative loss curves by vintage, especially for loans originated in the last two years."
      },
      {
        "title": "Interest rate sensitivity",
        "severity": "High",
        "detail": "The FY2022 experience showed how fast a rate move can make originations uneconomic.",
        "watch": "The spread between origination cost and what partners pay, and the level of warehouse funding costs."
      },
      {
        "title": "Balance sheet creep",
        "severity": "Medium",
        "detail": "When loans cannot be sold they are held, which converts a fee business into a lending business and consumes cash.",
        "watch": "Loans held for sale and loans held for investment as a share of total assets."
      },
      {
        "title": "Regulatory scrutiny of model-based underwriting",
        "severity": "Medium",
        "detail": "Lending models used to price credit must satisfy fair-lending and explainability expectations at partner institutions.",
        "watch": "Any disclosure about model validation requirements or changes to partner underwriting standards."
      },
      {
        "title": "Thin margins",
        "severity": "Medium",
        "detail": "A 4.6% operating margin leaves almost no room for a rise in funding costs or a decline in loan volume.",
        "watch": "Operating margin each quarter against the revenue growth rate."
      }
    ],
    "watchlist": [
      {
        "title": "Loans held on balance sheet",
        "detail": "The clearest early warning that the marketplace is not clearing."
      },
      {
        "title": "Operating margin",
        "detail": "It swings from negative to high single digits on small revenue changes; the trend matters more than any quarter."
      },
      {
        "title": "Partner purchases",
        "detail": "Volume sold to institutions, not applications received, is the real demand signal."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Upstart is an AI-driven lending marketplace with $1.34B of trailing revenue, a 4.6% operating margin and -$187.0M of free cash flow. It has recovered from the FY2023 trough, when revenue fell to $513.6M and the operating loss reached $256.5M, but the recovery has not yet produced a comfortable margin.",
      "The business model is genuinely capital-light when it works and genuinely capital-hungry when it does not. That binary quality is why the shares trade at 1.3x sales after a 38.6% growth year, and why the five-year return is -93.5%.",
      "The thing to watch is not the loan application volume but the flow of loans to partners. Everything else — margin, cash flow, the size of the balance sheet — follows from whether those partners keep buying."
    ],
    "questions": [
      "How concentrated is loan purchase volume among the largest funding partners?",
      "How are the loans originated in the last two years performing against the model's predictions?",
      "What share of revenue comes from fees versus interest on loans held?",
      "What funding spread does the current 4.6% operating margin assume?"
    ]
  }
};
