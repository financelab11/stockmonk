import type { StockStory } from "./types";

export const FICO: StockStory = {
  "ticker": "FICO",
  "kicker": "Software · Credit analytics and decisioning",
  "title": "Fair Isaac earns a royalty on the number that decides who gets credit",
  "dek": "A three-digit score, embedded in lending workflows for decades, produces an 86.1% gross margin. The trailing operating margin of 49.9% and a 3.9x leverage ratio are the two numbers that frame the risk.",
  "readingMinutes": 9,
  "takeaways": [
    "Scores produced 65.2% of revenue and the consolidated gross margin is 86.1%, so incremental score volume reaches profit almost untouched.",
    "FY2026 revenue rose 27.3% to $2.5B, but quarterly revenue fell from $691.7M in the March quarter to $657.0M in the September quarter.",
    "Net debt of $5.0B is 3.9x EBITDA, and buybacks have left reported book equity negative.",
    "The shares are down 59.0% in a year, leaving 18.3x earnings and 14.3x free cash flow for a 49.9% operating margin."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/814547/000081454726000042/fico-20260930.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000814547&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Fair Isaac's fiscal 2026 was a tale of two halves. Revenue rose 27.3% to $2.5B and the operating margin reached 49.9%, but the quarterly sequence peaked at $691.7M in the March quarter and fell to $674.2M and then $657.0M. The March quarter also carried a 58.2% operating margin and $11.14 of EPS, against 40.6% and $8.20 in Q4 FY2026. The reported numbers show a business that stepped up sharply and then gave some of it back, which is why the shares have de-rated.",
      "The Scores segment is 65.2% of revenue and the Software segment 34.8%, with the Americas at 89.7%. Scores earns a fee each time a lender pulls a credit score, so volume tracks mortgage, card and auto lending rather than subscription seats. The marginal cost of another score is negligible, which is why the consolidated gross margin is 86.1%. Software is subscription and licence revenue attached to decision engines; it is stickier but slower, and it carries implementation cost that scores do not.",
      "The valuation debate has flipped from premium to distress. At $716 the shares trade at 18.3x earnings, 15.8x EV/EBITDA, 8.0x sales and 14.3x free cash flow, with a 7.0% free-cash-flow yield. The 52-week high is $1.9K, and the stock is down 59.0% over the year. Net debt of $5.0B is 3.9x EBITDA and interest cover is 5.7x, so the balance sheet is the constraint. The question is whether the de-rating reflects a durable pricing reset or a cyclical fall in lending volumes."
    ],
    "quote": "Fair Isaac sells a standard that lenders pay for at every credit decision, and $5.0B of net debt leaves little room for that price to be renegotiated."
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
      "Revenue grew 4.6% in FY2022, 9.9% in FY2023, 13.5% in FY2024, 15.9% in FY2025 and 27.3% in FY2026, which makes the latest year the outlier rather than the trend. The quarterly path shows why: $512.0M, $691.7M, $674.2M and $657.0M. Consensus expects $2.6B in FY2027, up just 2.2%, and $2.8B in FY2028, up 6.5%. That forecast assumes the FY2026 step-up holds but stops growing, which is an unusual shape for a subscription business.",
      "The mix matters more than the total. Scores is 65.2% of revenue and carries the highest incremental margin; Software is 34.8% and grows more slowly. Within Scores, the volume driver is lending activity, and the price driver is contract renewal. Neither unit volume nor price is disclosed, so the split between the two cannot be observed. That is the central analytical gap: a 27.3% revenue increase could be pricing power, a refinancing wave, or both.",
      "The durability question is whether lenders can route around the score. A FICO Score is embedded in credit policy, investor agreements and secondary-market documentation, so replacing it is an organisational project rather than a software swap. That is the moat. The pricing question is separate: a per-score fee that rises faster than lenders' own economics gives them a reason to fund alternatives. The reported growth does not say which force is winning."
    ],
    "bullets": [
      {
        "title": "Score volume",
        "detail": "Mortgage, card and auto lending drive the number of pulls. A slow mortgage market reduces volume regardless of price."
      },
      {
        "title": "Score pricing",
        "detail": "Contract renewals set the fee per pull. Lenders and bureaus have a direct incentive to develop alternatives if the price outruns their economics."
      },
      {
        "title": "Software annuity",
        "detail": "Decision engines are embedded in credit policy, fraud checks and collections. Renewals are high because ripping one out means rebuilding the policy."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The gross margin was 86.1%, operating margin 49.9% and net margin 32.9%. The gap between the operating and net figures is mostly interest and tax: $5.0B of net debt at 3.9x EBITDA carries a real cost, and interest cover is 5.7x. The quarterly margin moved from 58.2% in March to 53.8% in June and 40.6% in September, while revenue fell from $691.7M to $657.0M.",
      "Return on invested capital was 69.3%, the highest in this peer group and far above the 18.8% median. Return on equity was negative 21.6%, which is not an operating failure: buybacks have pushed book equity below zero, so the ratio has no economic meaning. The operating return is the one to use, and it says the franchise earns extraordinary returns on the capital actually employed in the business. The leverage sits outside that calculation.",
      "The peer comparison explains the gap. FICO's 49.9% operating margin is far above the 27.7% peer median, and its 69.3% ROIC is far above the 18.8% median, yet it trades at 15.8x EV/EBITDA against a 25.5x median. The discount is not an operating judgment; it is a balance-sheet and durability judgment. Microsoft, on 26.0x earnings and a 47.1% operating margin, shows the multiple a comparable margin can command."
    ]
  },
  "cash": {
    "paragraphs": [
      "The cash statement was $1.1B, a 42.2% margin, and capex was $2.1M in FY2026. There is almost no capital intensity: the product is a formula and a codebase, and the cash cost of another score is close to zero. Operating cash flow of $1.1B tracked net income closely, which is what a business with no factories and little working capital should do.",
      "The balance sheet is where the cash story changes. Net debt rose from $2.9B in FY2025 to $5.0B in FY2026, or 3.9x EBITDA, and interest cover is 5.7x. That is manageable while operating income is about $1.27B, but a modest decline in EBITDA would push leverage toward the level where the buyback has to be cut and debt reduction takes priority. The buyback has already reduced equity below zero, so there is no equity cushion to absorb the decision.",
      "Capital allocation has been weighted toward repurchases rather than the dividend, which is zero. That is defensible when the shares trade at 14.3x free cash flow and the business converts 42.2% of revenue into cash. It is less defensible when the multiple is falling and the debt is rising. The 7.0% free-cash-flow yield is the compensation for taking that financing risk."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At $716 the shares trade at 18.3x trailing earnings, 15.8x EV/EBITDA, 8.0x sales and 14.3x free cash flow. The peer set trades at 32.0x earnings and 25.5x EV/EBITDA, and Fair Isaac sits in the 21st and 24th percentiles. A 49.9% operating margin at 18.3x against a 32.0x peer earnings multiple is the kind of gap that usually signals a specific fear rather than a general de-rating.",
      "Forward numbers are undemanding if the estimates hold. FY2027 EPS of $44.44 implies 16.1x, and FY2028 EPS of $51.01 implies 14.0x. The problem is the direction of the estimates: EPS revisions are negative 11.0% over 30 days, negative 16.3% over 60 days and negative 16.2% over 90 days. The consensus is cutting while still projecting 3.4% EPS growth, which is not a stable base for a forward multiple.",
      "What would justify the discount is a permanent change in the pricing relationship with lenders. What would break it is evidence that the FY2026 step-up was a one-off and that volume is normalising. A 7.0% free-cash-flow yield on a 42.2% cash margin can absorb a modest decline, but not a leveraged one. The equity is a bet on the score's toll surviving the negotiation, not on the next quarter's lending volume."
    ]
  },
  "analysts": {
    "paragraphs": [
      "The 18 November 2026 Yahoo Finance consensus draws on 19 analysts, with a mean target of $821 and a range of $481 to $1.2K. The mean is above the $716 price, but the range is enormous for a company this size, which reflects genuine disagreement about score pricing.",
      "FY2027 estimates are $2.6B of revenue and $44.44 of EPS; FY2028 is $2.8B and $51.01. The quarterly shape is odd: the December quarter is expected to produce $609.6M, up 19.1%, and the March quarter $661.7M, down 4.3%. Revisions have been cut by 16.3% over 60 days. The consensus is implicitly assuming that the score business stabilises in FY2028 rather than returning to its prior growth rate."
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
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
