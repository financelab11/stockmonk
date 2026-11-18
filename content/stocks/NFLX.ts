import type { StockStory } from "./types";

export const NFLX: StockStory = {
  "ticker": "NFLX",
  "kicker": "Media · Streaming subscriptions",
  "title": "Netflix has finished buying growth and started keeping the cash",
  "dek": "Almost $50B of subscription revenue now converts into a 31% operating margin. The open question is how much more the library can earn before content costs catch up.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $49.7B trailing twelve months, +14.7% year over year.",
    "Profitability: 31.3% operating margin and 29.7% net margin.",
    "Cash: $11.4B free cash flow, a 22.9% margin.",
    "Scorecard: 56/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000034/nflx-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001065280&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "NETFLIX INC. generated $49.7B of revenue over the last twelve months, +14.7% versus the prior year. The key question is whether audience, content or network scale can be monetised without giving away the margin.",
      "The latest reported quarter was Q3 FY26, with $12.9B of revenue and an operating margin of 34.6%. The stock closed at $59.68 on 2026-11-17, giving a market capitalization of $245.1B.",
      "The shares sit 0% of the way up their 52-week range ($59.41 to $115.25). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A streaming service earns money on the difference between what a household pays each month and what it costs to keep that household watching."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product is a membership that unlocks streaming on phones, televisions and browsers. Netflix sells it in three broad forms: an advertising-supported tier, an ad-free tier, and higher-priced variants that add members or resolution. The company also licenses some titles to other outlets and has moved into live programming and games, both of which exist to give people a reason to open the app more often.",
      "The reporting does not split revenue by segment, so there is no reliable figure for advertising versus subscription. That matters: advertising behaves like a media business, sold in advance against audience, while subscriptions behave like a utility bill. Until the split is disclosed, the consolidated margin blends two businesses with different cycles."
    ],
    "bullets": [
      {
        "title": "Memberships",
        "detail": "Recurring monthly fees, priced separately in each market. The base is the annuity that pays for content."
      },
      {
        "title": "Advertising tier",
        "detail": "A lower subscription price in exchange for ad breaks. It only adds profit if ad revenue per member exceeds the discount."
      },
      {
        "title": "Content",
        "detail": "Originals, licensed titles, live events and games. Spending is decided years before the revenue it is meant to attract."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Content sits in cost of revenue, which is why the gross margin is 50.7% rather than the 80% a pure software company would report. Marketing, technology and staff costs take the rest down to a 31.3% operating margin and a 29.7% net margin.",
      "The leverage mechanism is unusual. A title costs roughly the same whether ten million or a hundred million households watch it, so the average cost per viewer falls as the member base grows. Raising price in a fixed-cost base drops almost entirely to operating profit. The reverse is also true: content that neither attracts nor retains viewers hits margin in the quarter it is amortised.",
      "Plan mix complicates the arithmetic. The advertising tier trades subscription revenue for ad revenue, and the cheaper plans that once looked like a land grab now have to prove they earn more per member than the plans they replaced."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 14.4% a year across the fiscal years in the dataset, and the latest quarter changed +11.8% year over year. Third-party estimates for the current fiscal year point to $51.1B of revenue and $3.58 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 31.3% and return on invested capital of 34.0% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 31.3%, the net margin is 29.7% and diluted EPS is $3.46. The latest quarter's operating margin was 34.6%.",
      "Return on equity is 50.4%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $12.9B, an operating margin of 34.6% and a net margin of 28.5%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $11.4B, a 22.9% margin. Net debt is $6.9B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $11.4B over the last twelve months and net debt was $6.9B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 16.6x trailing earnings and 15.8x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $84.76; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "43 analysts contribute to the third-party consensus. The mean target is $84.76, with a range of $57.00 to $126.00.",
      "Current-year estimates call for $51.1B of revenue and $3.58 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 43 analysts with a mean target of $84.76; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Netflix carries little debt and generates cash, so the risks are about the content and pricing engine rather than solvency. Each one shows up in a different line of the accounts.",
    "items": [
      {
        "title": "Content cost inflation",
        "severity": "High",
        "detail": "Talent, sports rights and production costs rise faster than inflation. If content spend grows faster than revenue, the operating margin that took five years to build erodes.",
        "watch": "Content amortisation as a share of revenue, and cash spending on content versus the amortisation charge."
      },
      {
        "title": "Mature-market saturation",
        "severity": "High",
        "detail": "Most broadband households in the largest markets already subscribe. Growth then depends on price rises, which raise churn.",
        "watch": "Revenue growth against the size of any price increase, and commentary on member retention."
      },
      {
        "title": "Advertising execution",
        "severity": "Medium",
        "detail": "The ad tier requires sales infrastructure, measurement and inventory that a subscription company did not previously need.",
        "watch": "Ad-tier revenue per member and whether ad pricing holds when inventory expands."
      },
      {
        "title": "Competition for attention",
        "severity": "Medium",
        "detail": "Streaming rivals, short video and games all compete for the same evening. Switching costs for a viewer are close to zero.",
        "watch": "Engagement disclosures and the number of titles that reach a wide audience."
      },
      {
        "title": "Expectations",
        "severity": "Medium",
        "detail": "The shares have fallen 42.2% in a year while the business grew, which shows how quickly the market can reprice a long growth runway.",
        "watch": "Forward revenue estimates and the multiple applied to them."
      }
    ],
    "watchlist": [
      {
        "title": "Content spend",
        "detail": "Compare the cash cost of the slate with the amortisation charged to the income statement."
      },
      {
        "title": "Membership and pricing",
        "detail": "Revenue growth is the product of members and price; the two move in opposite directions after an increase."
      },
      {
        "title": "Advertising",
        "detail": "The ad tier is the main new revenue line, so its contribution per member is the number that matters."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Netflix is a subscription business with a 31.3% operating margin, $11.4B of free cash flow and almost no leverage. The financial statements describe a company that has moved from spending to earn growth to earning cash from the base it built.",
      "What is not known is how much pricing power remains. Revenue growth of 14.7% is strong, but it now comes from price and advertising more than from new households, and those levers are easier to exhaust.",
      "The educational point is that content businesses have a fixed cost that behaves like capital. Two companies can report the same revenue and very different free cash flow depending on how much they spend on the slate and when the cash leaves."
    ],
    "questions": [
      "How much of the recent revenue growth came from price rather than new members?",
      "What share of revenue does advertising contribute, and at what margin?",
      "Is content amortisation growing faster or slower than revenue?",
      "What would a 5% decline in members do to the operating margin?"
    ]
  }
};
