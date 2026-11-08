import type { StockStory } from "./types";

export const TMUS: StockStory = {
  ticker: "TMUS",
  kicker: "Telecom · US wireless",
  title: "T-Mobile sells monthly connectivity and has learned to keep the cash",
  dek: "Revenue is $93.8B and free cash flow is $18.7B. The network is already built, so the story turns on service revenue per account and on $82.8B of net debt.",
  readingMinutes: 9,
  takeaways: [
    "Revenue $93.8B, up 9.3%, with a 20.7% operating margin.",
    "Free cash flow of $18.7B is 19.9% of revenue and covers the interest on $82.8B of net debt.",
    "The reported net margin of -124.2% is distorted by one quarter and is not a useful measure this year.",
    "At 7.5x EV/EBITDA the shares are the cheapest in the large-cap media and telecom peer group.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1283699/000128369926000010/tmus-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001283699&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "The product is a monthly connection: voice, messaging and data, sold to postpaid accounts, prepaid customers and wholesale partners, with phones and accessories attached to the bill. The economics are those of a fixed-cost network with a subscription attached. Once the towers and spectrum are in place, each additional account adds revenue at very little incremental cost, which is why telecom margins depend more on scale than on price.",
      "Trailing revenue reached $93.8B, up 9.3%, and the September quarter produced $23.58B at a 24.0% operating margin. The shares closed at $162.01, inside a 52-week range of $143.75 to $224.75, for a market capitalisation of $171.6B.",
      "What happens after the step change is the open question. Revenue grew 9.3% in a market where the population does not, so the company has been taking share and selling more per account. Whether that continues decides the next five years, and $82.8B of net debt means the answer has to arrive before the refinancing calendar does.",
    ],
    quote:
      "In wireless the network is the product and the subscriber is the annuity. Growth comes from taking accounts from rivals or selling more services to the ones already there.",
  },
  whatItDoes: {
    paragraphs: [
      "The customer base splits into three. Postpaid phone accounts are the most valuable: monthly bills, long relationships, and the highest revenue per account. Prepaid serves customers who do not want a credit check, with lower revenue per user and higher churn. Wholesale sells network capacity to other brands that resell it under their own names.",
      "Everything is sold in one country, which is the most important structural fact. There is no international segment to offset a weak domestic quarter and no new geography to enter. Growth has to come from share gains, price increases or new services such as home broadband over the wireless network. The company employs 75,000 people and does not report a segment split in this dataset.",
    ],
    bullets: [
      {
        title: "Postpaid",
        detail:
          "Phone and data plans billed monthly. The core profit pool and the number analysts track most closely.",
      },
      {
        title: "Prepaid",
        detail:
          "No-contract plans sold to value-focused and credit-constrained customers. Lower revenue per user, higher turnover.",
      },
      {
        title: "Wholesale and equipment",
        detail:
          "Capacity sold to other brands, plus phones and accessories. Devices move revenue without moving much profit.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Service revenue is the engine: a recurring monthly charge that costs almost nothing extra to deliver once the network exists. Equipment revenue is a pass-through. That mix explains why the gross margin is 28.1%, a figure that looks low for a telecom until you remember that handset sales are included in revenue at close to cost.",
      "The cost base is mostly fixed: network operations, spectrum, roaming, customer care, commissions and advertising. Spreading those costs over more revenue is what drove the operating margin from 8.6% in FY2021 to 20.7% today, with operating income rising from $6.89B to $18.28B on 10% more revenue.",
      "The unit economics that matter are the cost of acquiring a subscriber against the lifetime service margin. Promotions and device subsidies raise acquisition cost, and a customer who switches for a free phone is more likely to switch again when the next offer appears.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $80.12B in FY2021 to $88.31B in FY2025, but not in a straight line: it fell in FY2022 and FY2023 before resuming. The latest quarter grew 7.4%, slower than the annual rate, which is what a mature wireless market produces once share gains become harder.",
      "The attributed consensus expects $94.80B this fiscal year and $98.95B next, with EPS of $11.18 rising to $14.00. Note the shape: about 4% revenue growth next year paired with much faster earnings growth. That combination requires margin expansion, not just more subscribers.",
      "The plausible drivers are price increases on existing plans, fixed wireless broadband, enterprise and wholesale deals. The brake is a saturated market where every new account comes from a competitor, and competitors can answer a promotion within a quarter.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating income more than doubled from $6.89B in FY2021 to $18.28B in FY2025 while revenue rose 10%. That is the whole performance story: a network built for a larger base, then filled. The trailing operating margin is 20.7% and the latest quarter reached 24.0%.",
      "The net line is misleading this year. One quarter in the table, the December 2025 period, carries a net loss far larger than any plausible operating result, which drags the trailing net margin to -124.2% and return on equity to -206.9%. Those two figures should be set aside; operating margin and return on invested capital of 11.0% describe the business.",
      "Diluted EPS was $10.38 on a trailing basis, and FY2025 net income was $10.99B. Those two figures are what a normal year looks like; the cash flow statement agrees with that reading even though the net margin does not.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow rose from $1.59B in FY2021 to $18.00B in FY2025 and $18.65B on a trailing basis, a 19.9% margin. The improvement came from two places: higher operating income and a capital budget that fell once the network build was complete. Capex in telecom is lumpy, and the years after a build are when the cash appears.",
      "Net debt is $82.85B, or 2.4x EBITDA. Interest and spectrum payments are the first claim on that cash, which is why the equity is valued at 9.2x free cash flow and a 10.9% free-cash-flow yield. The market is not ignoring the cash; it is discounting it for leverage and low growth.",
      "The relevant test is whether free cash flow covers interest, capex and maturities without new borrowing. On the current numbers it does, with room left over, but that room shrinks if service revenue stalls.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $162.01 the shares trade at 7.5x EV/EBITDA, 2.7x sales and 9.2x free cash flow, with a 10.9% free-cash-flow yield. The trailing P/E is shown as -7.6x because trailing earnings are negative, a good example of how one bad quarter can make a multiple meaningless.",
      "Peers frame the discount. Comcast trades at 5.0x EV/EBITDA, Disney at 10.3x, Netflix at 16.8x, Meta at 14.9x and Alphabet at 18.6x. T-Mobile sits at the low end, which fits a capital-intensive, low-growth, leveraged business rather than a growth company.",
      "On the covered universe the shares rank in the 89th percentile for cheapness on EV/EBITDA. Cheap is a description of the price, not a conclusion: a leveraged business with 4% revenue growth should trade below an asset-light one growing at 15%.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-five analysts contribute to the attributed consensus, with a mean target of $225.64 and a range of $165.00 to $296.00. Even the low end sits above the current price, which tells you the sell side is uniformly positive rather than divided.",
      "Estimates call for $94.80B of revenue and $11.18 of EPS this fiscal year, then $98.95B and $14.00. The following quarter is put at $25.51B and $2.76. The EPS step-up is large relative to the revenue step-up, so the forecasts assume continued margin improvement.",
      "A one-sided distribution is worth noticing. When every published target is above the market price, the consensus contains little information about downside, and the estimates themselves become the thing to test.",
    ],
  },
  risks: {
    intro:
      "The balance sheet is the constraint and the US market is the boundary. Most of the risks below show up either in service revenue or in the debt schedule.",
    items: [
      {
        title: "Price competition",
        severity: "High",
        detail:
          "Every new postpaid account comes from a rival. Promotions and device subsidies can win customers who leave just as quickly.",
        watch:
          "Postpaid phone net additions and the level of promotional subsidies in the quarter.",
      },
      {
        title: "Leverage",
        severity: "High",
        detail:
          "$82.8B of net debt makes the equity sensitive to refinancing costs. Higher rates raise the claim on cash flow before shareholders see it.",
        watch:
          "Net debt to EBITDA, the maturity schedule and interest expense.",
      },
      {
        title: "Network and spectrum spending",
        severity: "Medium",
        detail:
          "Coverage and capacity require continuous investment. A new spectrum auction or a technology cycle can lift capex for several years.",
        watch:
          "Capital expenditure as a share of service revenue.",
      },
      {
        title: "Market saturation",
        severity: "Medium",
        detail:
          "The US population does not grow fast enough to supply new subscribers. Growth must come from price or from new services.",
        watch:
          "Service revenue growth and revenue per account.",
      },
      {
        title: "Regulation",
        severity: "Medium",
        detail:
          "Spectrum rules, roaming terms and consumer protection requirements can change what the network is allowed to charge or carry.",
        watch:
          "Licence conditions and any new consumer rules affecting pricing.",
      },
    ],
    watchlist: [
      {
        title: "Service revenue",
        detail:
          "The recurring line is the profit engine; equipment revenue is noise by comparison.",
      },
      {
        title: "Capex",
        detail:
          "Free cash flow has been lifted by a falling capital budget, and that tailwind does not last forever.",
      },
      {
        title: "Debt reduction",
        detail:
          "Every dollar of net debt repaid is a dollar of interest that drops to the equity.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "T-Mobile is a scale wireless operator with a 20.7% operating margin and $18.7B of free cash flow. It earns a return on invested capital of 11.0% and carries $82.8B of net debt at 2.4x EBITDA.",
      "The trailing net margin of -124.2% is an accounting artifact of one quarter, not a collapse. A reader who takes that number at face value would draw exactly the wrong conclusion about the year.",
      "What is genuinely uncertain is growth. A 7.5x EBITDA multiple already assumes little, so the shares do not need rapid growth to justify the price, but they do need service revenue to stop falling and the debt to remain serviceable.",
    ],
    questions: [
      "How much of recent revenue growth came from price rather than net new accounts?",
      "What is the interest cost on the debt, and when does it need refinancing?",
      "Can fixed wireless broadband grow without cannibalising the mobile base?",
      "What would a price war do to the 20.7% operating margin?",
    ],
  },
};
