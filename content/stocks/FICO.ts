import type { StockStory } from "./types";

export const FICO: StockStory = {
  ticker: "FICO",
  kicker: "Software · Credit analytics and decisioning",
  title: "Fair Isaac earns a royalty on the number that decides who gets credit",
  dek: "A three-digit score, embedded in lending workflows for decades, produces an 86.1% gross margin. The trailing operating margin of 49.9% and a 3.9x leverage ratio are the two numbers that frame the risk.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $2.53B, up 27.3%, with gross margin of 86.1%.",
    "Operating margin is 49.9% and free cash flow was $1.07B, a 42.2% margin.",
    "Net debt is $4.99B, or 3.9x EBITDA, and book equity is negative.",
    "At $704.55 the shares trade at 18.0x earnings and 14.1x free cash flow.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/814547/000081454726000042/fico-20260930.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000814547&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Fair Isaac is two businesses sold to the same customer. The scores business licenses the FICO Score, a statistical model that estimates the likelihood a borrower will repay. The software business sells decisioning applications that lenders use to approve applications, detect fraud, set limits and manage collections. The score is famous; the software is where the workflow lives.",
      "The economics are unusual because the score is a standard. Lenders, regulators and investors in securitised loans all reference it, and a score that everyone recognises is more useful than a marginally better one that nobody does. That position produces an 86.1% gross margin and a 49.9% operating margin on $2.53B of revenue.",
      "At $704.55 the market capitalisation is $15.1B, which is 18.0x trailing earnings and 15.6x EV/EBITDA. The shares are 9% of the way up a 52-week range of $586.05 to $1,858.91 and fell 57.9% over the past year. Something in the story was repriced sharply, and the financial statements alone do not say what.",
    ],
    quote:
      "A scoring model that is written into loan contracts is not easily replaced. The question is how much of the price of that position the company can charge before customers build around it.",
  },
  whatItDoes: {
    paragraphs: [
      "The scores segment sells the FICO Score to lenders, either directly or through the credit bureaus that distribute it. Each time a lender pulls a score, a fee is earned. Volume therefore tracks consumer lending activity: mortgage originations, card applications, auto loans and personal credit checks. In a refinancing boom the volume rises; when rates slow mortgage activity, it falls.",
      "The software segment sells decision management tools. A bank uses them to automate an origination decision, a fraud check or a collections strategy. These are subscription and licence arrangements with implementation work attached, sold to large financial institutions and increasingly to telcos, insurers and retailers. It is a slower-growing, stickier business than scores.",
      "The company employed 3,302 people. That is a small headcount for $2.53B of revenue, and it is the clearest evidence that the product is a formula and a codebase rather than a labour-intensive service. Software implementation partners do much of the integration work.",
    ],
    bullets: [
      {
        title: "Scores",
        detail:
          "Per-score fees earned when a lender pulls a credit score. Volume follows lending activity and pricing follows contract renewals.",
      },
      {
        title: "Software",
        detail:
          "Decisioning, fraud and customer-management applications sold on subscription and licence terms.",
      },
      {
        title: "Analytics",
        detail:
          "Custom models and consulting. Small in revenue, useful for keeping the scores and software products close to customer workflows.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The scores business is close to a toll on lending. The marginal cost of producing another score is negligible, so almost every incremental dollar of score revenue reaches operating profit. That is why a 27.3% revenue increase translated into operating income rising from $924.9M to $1.27B between FY2025 and FY2026.",
      "The software business is less extreme. Implementation, hosting and support cost money, and enterprise sales cycles are long. But once a lender has built its credit policy into a decision engine, ripping it out means rebuilding the policy, retraining staff and revalidating the model with regulators. Renewal rates are high for the same reason the score is sticky: the cost of change is organisational, not technical.",
      "The cost base is mostly people and computing. There is no factory and little capital expenditure, which is why free cash flow tracks net income closely. The constraint on growth is not capacity; it is the number of lenders willing to change how they make decisions.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 11.9% a year over the five fiscal years in the record, rising from $1.38B in FY2022 to $2.53B in FY2026. That is respectable for a mature analytics business, and it accelerated sharply: FY2026 revenue grew 27.3% and the latest quarter grew 27.4%.",
      "The quarterly path is uneven. Revenue was $512.0M in Q1 FY2026, then $691.7M in Q2, $674.2M in Q3 and $657.0M in Q4. A step-up of that size usually reflects a pricing change, a large contract or an accounting reclassification, and the brief does not identify which. What matters for a reader is that the level shifted and has since drifted down slightly.",
      "The attributed consensus expects $2.60B this fiscal year and $2.77B next year, with EPS of $44.75 and $51.40. That implies revenue growth slowing sharply from the 27.3% just reported while earnings per share keeps rising, which only works if margins expand or the share count keeps falling.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating income was $542.4M on $1.38B of revenue in FY2022 and $1.27B on $2.53B in FY2026. Revenue grew faster than the cost base over that stretch, which is what a software model is supposed to do, and the trailing operating margin of 49.9% is the result.",
      "The quarterly margin is more volatile than the annual figure. It was 48.9% in Q3 FY2025, 58.2% in Q2 FY2026 and 40.6% in Q4 FY2026. Some of that is revenue timing, some is the mix between scores and software, and some is the cost of implementation work. A single quarter should not be read as a trend.",
      "Return on equity is negative 21.6% while return on invested capital is 89.6%. That combination is not a contradiction. Years of buybacks have pushed book equity below zero, so any positive net income divided by a negative equity base produces a negative return. The 89.6% ROIC is the more meaningful measure of how productively the operating assets are used.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $1.07B, a 42.2% margin, and it has risen every year in the record from $503.4M in FY2022. Cash conversion is high because the business needs little capital and because subscription revenue is collected before it is fully recognised.",
      "The balance sheet is where the risk sits. Net debt is $4.99B, or 3.9x EBITDA, which is high for a company with this margin profile. The debt is serviced comfortably at current profit levels, but it removes the option of a bad year. Interest cover is not reported, so the reader has to infer coverage from the EBITDA multiple.",
      "The combination of debt and buybacks explains the negative equity. Repurchasing shares reduces equity, and borrowing to do so reduces it further. That is a capital-allocation choice that boosts earnings per share when the share price is low and increases fragility when it is not. Free cash flow of $1.07B against $4.99B of net debt means roughly five years of current cash generation would be needed to repay the debt, before dividends or buybacks.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $704.55 the shares trade at 18.0x trailing earnings, 15.6x EV/EBITDA, 7.9x sales and 14.1x free cash flow, for a 7.1% free-cash-flow yield. For a business with an 86.1% gross margin and a near-monopoly position in credit scoring, those are not demanding multiples. They are the multiples of a company the market expects to grow slowly.",
      "The peer table shows how far the stock has de-rated relative to large technology names: Nvidia at 23.3x earnings, Microsoft at 27.6x, Broadcom at 36.6x. Fair Isaac at 18.0x is cheaper than all of them on earnings while earning a higher operating margin than any of them except Nvidia.",
      "The catch is the leverage and the growth rate. A 15.6x EV/EBITDA multiple on a leveraged balance sheet is not the same as the same multiple on a net-cash one. And a business growing revenue at 3% deserves a lower multiple than one growing at 20%, all else equal.",
    ],
  },
  analysts: {
    paragraphs: [
      "Nineteen analysts contribute to the attributed consensus, with a mean target of $821.79 and a range of $481.00 to $1,230.97. The mean is above the last close and the range is wide, which is what you would expect after a 57.9% one-year decline: the forecasters disagree about whether the sell-off overshot.",
      "Estimates call for $2.60B of revenue and $44.75 of EPS this fiscal year, then $2.77B and $51.40 next year. Next quarter is expected to produce $603.6M of revenue and $9.41 of EPS. Against the $657.0M just reported, that implies a sequential decline, which is consistent with the recent quarterly pattern.",
      "These are third-party numbers, not a view from Stockmonk. A mean target is a summary of opinions, and after a large drawdown the dispersion usually matters more than the average.",
    ],
  },
  risks: {
    intro:
      "The business risk is pricing power; the financial risk is leverage. Both are amplified by a customer base that has a strong incentive to build alternatives to a toll it pays on every loan.",
    items: [
      {
        title: "Customer pushback on score pricing",
        severity: "High",
        detail:
          "Lenders and bureaus pay per score. If the price rises faster than their own economics, they have a reason to develop or adopt alternative models.",
        watch:
          "Score revenue per unit, contract renewal commentary and any shift in bureau arrangements.",
      },
      {
        title: "Mortgage and lending volumes",
        severity: "High",
        detail:
          "Score revenue tracks how many credit decisions are made. A slow mortgage market reduces volume regardless of price.",
        watch:
          "Mortgage origination activity and consumer lending growth.",
      },
      {
        title: "Leverage",
        severity: "High",
        detail:
          "$4.99B of net debt at 3.9x EBITDA leaves little room for a profit decline before the capital-return programme has to be cut.",
        watch:
          "The net-debt-to-EBITDA ratio and the pace of buybacks.",
      },
      {
        title: "Regulatory treatment of scoring models",
        severity: "Medium",
        detail:
          "Credit scoring is scrutinised by regulators and used in regulated lending decisions. A change in how scores must be explained or validated would raise costs.",
        watch:
          "Rule changes affecting model risk management and adverse-action notices.",
      },
      {
        title: "Software implementation risk",
        severity: "Medium",
        detail:
          "Large decisioning projects can run late and cost more than expected, which shows up as weaker software margins.",
        watch:
          "Software revenue growth against the cost of professional services.",
      },
    ],
    watchlist: [
      {
        title: "Score volume",
        detail:
          "The number of scores pulled is the cleanest read on the lending cycle.",
      },
      {
        title: "Net debt to EBITDA",
        detail:
          "At 3.9x there is limited headroom. A rise above 4x would change the capital-return story.",
      },
      {
        title: "Book equity",
        detail:
          "Negative equity is an artefact of buybacks, but it makes reported returns hard to read.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Fair Isaac owns a standard. That is a rare asset, and it produces margins that most software companies can only aspire to. The 86.1% gross margin and 42.2% free-cash-flow margin are the numbers that describe the quality of the franchise.",
      "The 57.9% decline over the past year says the market has re-examined the price of that franchise. The brief does not say why, and a reader should not guess. What the statements do show is a company growing revenue at 27.3%, carrying $4.99B of net debt and buying back stock with borrowed money.",
      "The useful next step is to separate the durability of the score from the durability of its pricing. One is a moat. The other is a negotiation that happens at every contract renewal.",
    ],
    questions: [
      "How much of score revenue growth came from price rather than volume?",
      "What happens to the capital-return plan if EBITDA falls 15%?",
      "How much of the software segment is recurring subscription versus implementation?",
      "Why did revenue step up so sharply in Q2 FY2026 and then decline?",
    ],
  },
};
