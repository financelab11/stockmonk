import type { StockStory } from "./types";

export const AFRM: StockStory = {
  "ticker": "AFRM",
  "kicker": "Fintech & Crypto · Brokers, Exchanges & Other",
  "title": "Affirm takes a merchant fee, then decides whether to keep the loan",
  "dek": "Operating income went from -$1.20B in FY2023 to +$417.0M in FY2026 as funding costs settled and the loan book scaled. The P/E of 9.5x is not what it appears, because most of the net income arrived in a single quarter.",
  "readingMinutes": 9,
  "takeaways": [
    "Operating income moved from -$1.20B in FY2023 to $417.0M in FY2026 as funding costs normalised, and the trailing margin is 35.6%.",
    "Net income of $2.03B in the June 2026 quarter produced a 132.7% trailing net margin, so the 9.8x P/E is not a valuation of the lending business.",
    "Free cash flow of $817.0M is 53.9% of revenue, a figure that reflects loan sales as much as operating profit.",
    "Thirty-four analysts carry a $96 mean target against a $58 price, and three of the last four quarters missed on EPS."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1820953/000162828026059279/afrm-20260630.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001820953&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Funding spreads, not merchant sign-ups, explain the swing in Affirm's profitability. The company was originating loans at a loss when warehouse and securitisation costs widened, and the same origination volume became profitable as spreads normalised. Operating income went from -$1.20B in FY2023 to $417.0M in FY2026, and the trailing operating margin is 35.6%. The product did not change; the price of money did. That is a useful reminder that a lender's margin is a spread before it is a franchise.",
      "The business is a merchant fee at checkout plus interest on the loans Affirm chooses to keep. Merchants pay a discount fee because the instalment option raises conversion and basket size, and the fee is recognised when the sale happens. The second decision is whether to hold the loan or sell it: selling converts it to cash and removes the credit risk at the cost of the interest spread, and that choice determines how capital-intensive the business is in any year.",
      "The earnings multiple is distorted by an accounting item. P/E of 9.8x divides the price by earnings that include a $2.03B net income quarter, and the trailing net margin of 132.7% is not a trading margin. On free cash flow the multiple is 24.2x with a 4.1% yield, and on EBITDA 32.3x, above the 23.1x peer median. The cash and EBITDA multiples describe the business; the earnings multiple describes an event."
    ],
    "quote": "Affirm's profit depends less on how many merchants it signs than on what it costs to fund the loans those merchants generate."
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
      "Merchant integrations determine the volume, and the take rate determines how much of it Affirm keeps. Each integration puts the instalment option in front of a merchant's customers at the moment of purchase, which is why the merchant network is the distribution engine and why a small number of large retail partners can matter more than the total count. Revenue grew 26.1% on a trailing basis, and the reported figures do not split merchant discount fees from consumer interest.",
      "The estimates assume the volume growth continues and the margin holds. EPS is modelled at $3.96 for FY2027 and $5.06 for FY2028, below the $5.53 reported for FY2026 because that year includes the one-off quarter. The operating margin has to stay near 30% for those numbers to hold, and that is the assumption that matters: a return to the funding spreads of FY2023 would take the company back to a loss regardless of volume.",
      "Take rate is the variable the accounts do not show. A merchant discount fee is charged as a percentage of the transaction, so revenue per dollar of volume depends on the mix of merchants and on how hard the largest partners negotiate. A shift toward large retail partners with more bargaining power would show up as slower revenue growth on the same volume, and the reported figures do not separate the two. That is why 26.1% trailing growth is less informative than the margin."
    ],
    "bullets": [
      {
        "title": "Merchant fee",
        "detail": "The discount fee is charged as a percentage of the transaction and recognised at the point of sale, so revenue moves with retail volume rather than with the loan book."
      },
      {
        "title": "Retain or sell",
        "detail": "Selling a loan converts it to cash and removes the credit risk; holding keeps the spread and takes the risk, and the mix decides the capital intensity."
      },
      {
        "title": "Funding mix",
        "detail": "Warehouse lines, forward-flow buyers and securitisation each carry a different cost and a different amount of capital tied up."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Operating leverage arrived with better funding, and the margin record shows it. Operating margin went from -74.6% in FY2024 to -7.8% in FY2025, 28.9% in FY2026 and 35.6% trailing, and Q1 FY2027 reached 47.5%. Revenue grew 29.6% in FY2026 while the operating line turned positive, the combination that makes a lender profitable. The net line is not comparable because of the one-off quarter.",
      "The return measures are the tell. Return on invested capital is 3.4%, below the 8.6% peer median and far below Robinhood's 15.7%, while return on equity is 35.0%, flattered by a small equity base and a large loan book funded with debt. That combination, high equity return and low capital return, is what leverage looks like. It works while spreads are stable and becomes uncomfortable when they are not."
    ]
  },
  "cash": {
    "paragraphs": [
      "Warehouse lines and securitisation mean Affirm's cash flow is a financing decision before it is an operating result. Free cash flow of $817.0M is 53.9% of revenue, which is not a margin a lender earns; it is what happens when loans are sold and the proceeds arrive in the operating section. Capex of $238.3M in FY2026 is small next to the loan book, so the cash statement is shaped by lending rather than by capital spending.",
      "The balance sheet carries $8.2B of net debt, 9.5x EBITDA, with interest cover of 1.1x. For a lender that is the relevant fact: operating earnings cover the interest bill about once, so the spread between asset yield and funding cost has very little room. A percentage point move in funding costs would matter more than a ten percent change in volume, the opposite of how a software business behaves."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Nine times earnings is among the lowest multiples in the fintech peer group, and it is not a bargain. The earnings include a $2.03B quarter, so the denominator is inflated; on free cash flow the multiple is 24.2x and on EBITDA 32.3x, above the 23.1x peer median. The three multiples disagree because they measure three different things, and the EBITDA one is the closest to the operating reality.",
      "The peer gap on EBITDA is not explained by growth. Affirm grows 26.1%, Toast 22.1% and Shift4 27.0%; Affirm trades at 32.3x EBITDA, Toast at 31.3x and Shift4 at 7.7x. The difference is the balance sheet: Shift4's multiple is on a payment processor's earnings, Affirm's on a lender's. A lender with 1.1x interest cover should not trade at a premium to a processor, which is the question the multiple raises.",
      "What would justify the price is the operating margin holding near 30% while revenue compounds in the twenties and funding costs stay contained. What would break it is a widening of spreads or a rise in credit losses on interest-bearing plans, either of which would compress the margin faster than volume could offset. The 52-week range of $42 to $90 and a 12.7% one-year decline show how quickly that judgement moves."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Thirty-four analysts cover Affirm, the widest coverage in the group, with a mean target of $96 against a $58 price and a range of $66 to $115. A 66% gap between the mean target and the price is a strong statement, and it sits oddly with three EPS misses in the last four quarters.",
      "The revisions are flat to modestly positive: 2.7% over 30 days, 0% over 60 and 6.4% over 90. EPS is modelled at $3.96 for FY2027 against $5.53 reported for FY2026, so the consensus expects the earnings base to fall as the one-off quarter rolls out of the comparison. The targets assume the shares re-rate toward the mean even as the earnings base normalises, which is the tension in the published view."
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
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
