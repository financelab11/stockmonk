import type { StockStory } from "./types";

export const FICO: StockStory = {
  "ticker": "FICO",
  "kicker": "Software · Credit analytics and decisioning",
  "title": "Fair Isaac earns a royalty on the number that decides who gets credit",
  "dek": "A three-digit score, embedded in lending workflows for decades, produces an 86.1% gross margin. The trailing operating margin of 49.9% and a 3.9x leverage ratio are the two numbers that frame the risk.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $2.5B trailing twelve months, +27.3% year over year.",
    "Profitability: 49.9% operating margin and 32.9% net margin.",
    "Cash: $1.1B free cash flow, a 42.2% margin.",
    "Scorecard: 66/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/814547/000081454726000042/fico-20260930.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000814547&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Fair Isaac Corp. generated $2.5B of revenue over the last twelve months, +27.3% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q4 FY26, with $657M of revenue and an operating margin of 40.6%. The stock closed at $676.52 on 2026-11-17, giving a market capitalization of $14.5B.",
      "The shares sit 7% of the way up their 52-week range ($586.05 to $1,858.91). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A scoring model that is written into loan contracts is not easily replaced. The question is how much of the price of that position the company can charge before customers build around it."
  },
  "whatItDoes": {
    "paragraphs": [
      "The scores segment sells the FICO Score to lenders, either directly or through the credit bureaus that distribute it. Each time a lender pulls a score, a fee is earned. Volume therefore tracks consumer lending activity: mortgage originations, card applications, auto loans and personal credit checks. In a refinancing boom the volume rises; when rates slow mortgage activity, it falls.",
      "The software segment sells decision management tools. A bank uses them to automate an origination decision, a fraud check or a collections strategy. These are subscription and licence arrangements with implementation work attached, sold to large financial institutions and increasingly to telcos, insurers and retailers. It is a slower-growing, stickier business than scores.",
      "The company employed 3,302 people. That is a small headcount for $2.53B of revenue, and it is the clearest evidence that the product is a formula and a codebase rather than a labour-intensive service. Software implementation partners do much of the integration work."
    ],
    "bullets": [
      {
        "title": "Scores",
        "detail": "Per-score fees earned when a lender pulls a credit score. Volume follows lending activity and pricing follows contract renewals."
      },
      {
        "title": "Software",
        "detail": "Decisioning, fraud and customer-management applications sold on subscription and licence terms."
      },
      {
        "title": "Analytics",
        "detail": "Custom models and consulting. Small in revenue, useful for keeping the scores and software products close to customer workflows."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The scores business is close to a toll on lending. The marginal cost of producing another score is negligible, so almost every incremental dollar of score revenue reaches operating profit. That is why a 27.3% revenue increase translated into operating income rising from $924.9M to $1.27B between FY2025 and FY2026.",
      "The software business is less extreme. Implementation, hosting and support cost money, and enterprise sales cycles are long. But once a lender has built its credit policy into a decision engine, ripping it out means rebuilding the policy, retraining staff and revalidating the model with regulators. Renewal rates are high for the same reason the score is sticky: the cost of change is organisational, not technical.",
      "The cost base is mostly people and computing. There is no factory and little capital expenditure, which is why free cash flow tracks net income closely. The constraint on growth is not capacity; it is the number of lenders willing to change how they make decisions."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 11.9% a year across the fiscal years in the dataset, and the latest quarter changed +27.4% year over year. Third-party estimates for the current fiscal year point to $2.6B of revenue and $44.44 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 49.9% and return on invested capital of 89.6% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 49.9%, the net margin is 32.9% and diluted EPS is $36.40. The latest quarter's operating margin was 40.6%.",
      "Return on equity is -21.6%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q4 FY26: revenue of $657M, an operating margin of 40.6% and a net margin of 26.6%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $1.1B, a 42.2% margin. Net debt is $5B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $1.1B over the last twelve months and net debt was $5B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 17.3x trailing earnings and 15.2x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $821.37; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "19 analysts contribute to the third-party consensus. The mean target is $821.37, with a range of $481.00 to $1,230.97.",
      "Current-year estimates call for $2.6B of revenue and $44.44 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 19 analysts with a mean target of $821.37; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "The business risk is pricing power; the financial risk is leverage. Both are amplified by a customer base that has a strong incentive to build alternatives to a toll it pays on every loan.",
    "items": [
      {
        "title": "Customer pushback on score pricing",
        "severity": "High",
        "detail": "Lenders and bureaus pay per score. If the price rises faster than their own economics, they have a reason to develop or adopt alternative models.",
        "watch": "Score revenue per unit, contract renewal commentary and any shift in bureau arrangements."
      },
      {
        "title": "Mortgage and lending volumes",
        "severity": "High",
        "detail": "Score revenue tracks how many credit decisions are made. A slow mortgage market reduces volume regardless of price.",
        "watch": "Mortgage origination activity and consumer lending growth."
      },
      {
        "title": "Leverage",
        "severity": "High",
        "detail": "$4.99B of net debt at 3.9x EBITDA leaves little room for a profit decline before the capital-return programme has to be cut.",
        "watch": "The net-debt-to-EBITDA ratio and the pace of buybacks."
      },
      {
        "title": "Regulatory treatment of scoring models",
        "severity": "Medium",
        "detail": "Credit scoring is scrutinised by regulators and used in regulated lending decisions. A change in how scores must be explained or validated would raise costs.",
        "watch": "Rule changes affecting model risk management and adverse-action notices."
      },
      {
        "title": "Software implementation risk",
        "severity": "Medium",
        "detail": "Large decisioning projects can run late and cost more than expected, which shows up as weaker software margins.",
        "watch": "Software revenue growth against the cost of professional services."
      }
    ],
    "watchlist": [
      {
        "title": "Score volume",
        "detail": "The number of scores pulled is the cleanest read on the lending cycle."
      },
      {
        "title": "Net debt to EBITDA",
        "detail": "At 3.9x there is limited headroom. A rise above 4x would change the capital-return story."
      },
      {
        "title": "Book equity",
        "detail": "Negative equity is an artefact of buybacks, but it makes reported returns hard to read."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Fair Isaac owns a standard. That is a rare asset, and it produces margins that most software companies can only aspire to. The 86.1% gross margin and 42.2% free-cash-flow margin are the numbers that describe the quality of the franchise.",
      "The 57.9% decline over the past year says the market has re-examined the price of that franchise. The brief does not say why, and a reader should not guess. What the statements do show is a company growing revenue at 27.3%, carrying $4.99B of net debt and buying back stock with borrowed money.",
      "The useful next step is to separate the durability of the score from the durability of its pricing. One is a moat. The other is a negotiation that happens at every contract renewal."
    ],
    "questions": [
      "How much of score revenue growth came from price rather than volume?",
      "What happens to the capital-return plan if EBITDA falls 15%?",
      "How much of the software segment is recurring subscription versus implementation?",
      "Why did revenue step up so sharply in Q2 FY2026 and then decline?"
    ]
  }
};
