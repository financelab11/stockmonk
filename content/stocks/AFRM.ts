import type { StockStory } from "./types";

export const AFRM: StockStory = {
  "ticker": "AFRM",
  "kicker": "Fintech & Crypto · Brokers, Exchanges & Other",
  "title": "Affirm takes a merchant fee, then decides whether to keep the loan",
  "dek": "Operating income went from -$1.20B in FY2023 to +$417.0M in FY2026 as funding costs settled and the loan book scaled. The P/E of 9.5x is not what it appears, because most of the net income arrived in a single quarter.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $1.5B trailing twelve months, +26.1% year over year.",
    "Profitability: 35.6% operating margin and 160.2% net margin.",
    "Cash: $817M free cash flow, a 53.9% margin.",
    "Scorecard: 78/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1820953/000162828026059279/afrm-20260630.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001820953&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Affirm Holdings, Inc. generated $1.5B of revenue over the last twelve months, +26.1% versus the prior year. The economics depend on credit losses, funding costs, take rates and the ability to grow without buying customers.",
      "The latest reported quarter was Q1 FY27, with $393.4M of revenue and an operating margin of 47.5%. The stock closed at $59.44 on 2026-11-17, giving a market capitalization of $20.2B.",
      "The shares sit 36% of the way up their 52-week range ($42.10 to $90.44). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A buy-now-pay-later lender is a funding business wearing a checkout button. The credit decision and the cost of capital decide the profit, not the interface."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core product is an instalment plan embedded in a merchant's checkout, online and in stores. Affirm also offers a consumer app where borrowers can find merchants and manage plans, a debit card, and longer-term interest-bearing loans. The merchant side is the distribution engine: each integration puts Affirm in front of that merchant's customers at the moment of purchase.",
      "Merchants accept a lower ticket price in exchange for higher conversion and larger baskets. That is the value proposition, and it is why the merchant discount fee exists at all. The fee is the price of a sale that might otherwise not happen, which also means Affirm's revenue is sensitive to retail volumes and to the mix of merchants on the platform.",
      "The consumers are a mix of prime and near-prime borrowers. Promotional plans with no interest are cheap for the borrower and expensive for the merchant; interest-bearing plans shift the cost to the consumer and carry the credit risk. The blend between those two determines both revenue and loss rates."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Three revenue streams feed the business: merchant discount fees at the point of sale, interest and fees from consumers on longer plans, and servicing income on loans owned by others. The merchant fee is charged as a percentage of the transaction and is recognised when the sale happens. Interest income accrues over the life of the loan.",
      "The cost side is dominated by funding. Affirm raises money through warehouse facilities, forward-flow arrangements that commit buyers to purchase loans, and securitisation. Each channel has a different cost and a different amount of capital tied up. When funding spreads widened, the company was originating loans at a loss; as spreads normalised, the same origination volume became profitable. That is the mechanism behind the swing from a $1.20B operating loss to a $417.0M operating profit.",
      "The second decision is whether to hold or sell. Selling a loan converts it to cash and removes the credit risk, at the cost of giving up the interest spread. Holding keeps the spread and takes the risk. That choice, more than the checkout interface, determines how capital-intensive the business is in any given year."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 31.7% a year across the fiscal years in the dataset, and the latest quarter changed +22.8% year over year. Third-party estimates for the current fiscal year point to $5.6B of revenue and $3.96 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 35.6% and return on invested capital of n/a are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 35.6%, the net margin is 160.2% and diluted EPS is $5.77. The latest quarter's operating margin was 47.5%.",
      "Return on equity is -244.5%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q1 FY27: revenue of $393.4M, an operating margin of 47.5% and a net margin of 41.7%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $817M, a 53.9% margin. The balance sheet carries $3B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $817M over the last twelve months and net debt was -$3B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 8.3x trailing earnings and 19.8x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $95.75; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "34 analysts contribute to the third-party consensus. The mean target is $95.75, with a range of $66.00 to $115.00.",
      "Current-year estimates call for $5.6B of revenue and $3.96 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 34 analysts with a mean target of $95.75; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Affirm's risks all trace back to the same three variables: the cost of funding, the credit quality of the borrower, and the willingness of merchants to keep paying for conversion.",
    "items": [
      {
        "title": "Funding costs",
        "severity": "High",
        "detail": "The company does not take deposits. It funds loans through warehouse lines, forward-flow buyers and securitisation, all of which reprice with credit markets.",
        "watch": "Funding spreads, the mix of committed versus uncommitted facilities, and the share of originations sold."
      },
      {
        "title": "Credit losses",
        "severity": "High",
        "detail": "Interest-bearing plans put consumer credit risk on the balance sheet. Loss rates rise faster than revenue in a weakening labour market.",
        "watch": "Provision expense, delinquencies and net charge-offs as a share of the loan book."
      },
      {
        "title": "Merchant concentration and fee pressure",
        "severity": "Medium",
        "detail": "A large share of volume can come from a small number of retail partners, and those partners negotiate hard on the discount fee.",
        "watch": "Merchant concentration disclosure and the trend in revenue as a percentage of volume."
      },
      {
        "title": "Consumer spending cycle",
        "severity": "Medium",
        "detail": "Revenue is tied to checkout volume in discretionary retail categories, which fall early in a downturn.",
        "watch": "Volume growth against the growth in active merchants, which separates share gains from market growth."
      },
      {
        "title": "Accounting noise in earnings",
        "severity": "Medium",
        "detail": "FY2026 net income was several times operating income because of an item below the operating line. Valuations built on that figure are unreliable.",
        "watch": "The reconciliation between operating income and net income in each quarterly filing."
      },
      {
        "title": "Regulatory treatment of instalment lending",
        "severity": "Low",
        "detail": "Consumer credit rules and disclosure requirements can change the economics of promotional plans.",
        "watch": "Any change to how deferred interest and late fees must be disclosed or priced."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "The 35.6% trailing figure is the proof that the model works; watch whether it holds through a funding cycle."
      },
      {
        "title": "Funding mix",
        "detail": "How much of the book is sold versus held determines both cash flow and credit exposure."
      },
      {
        "title": "Credit losses",
        "detail": "The interest-bearing book is where a consumer downturn would appear first."
      },
      {
        "title": "Revenue per unit of volume",
        "detail": "The merchant discount fee is the core take rate; a declining trend means merchants are winning the negotiation."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Affirm is a point-of-sale lender with $1.52B of trailing revenue, a 35.6% operating margin and $817.0M of free cash flow. It moved from a $1.20B operating loss in FY2023 to a $417.0M operating profit in FY2026, and the repair came from funding costs and scale rather than from a new product.",
      "The reported P/E of 9.5x should be set aside. It divides the price by earnings that include a single $2.03B quarter. On free cash flow the multiple is 28.3x, which is a growth multiple, and the case for paying it rests on the operating margin holding at current levels while revenue compounds in the twenties.",
      "The thing to understand about this business is that the balance sheet is the product. Every decision about holding or selling a loan trades cash today for interest later, and the company's results will look different depending on which way it leans in any given year."
    ],
    "questions": [
      "What share of originations is sold rather than held, and how has that changed?",
      "What funding cost is assumed in the current operating margin?",
      "How much of revenue comes from the largest merchant partners?",
      "What drove the $2.03B of net income in Q4 FY2026, and will it recur?"
    ]
  }
};
