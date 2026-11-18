import type { StockStory } from "./types";

export const PINS: StockStory = {
  "ticker": "PINS",
  "kicker": "Internet · Visual discovery and advertising",
  "title": "Pinterest has a 79% gross margin and almost no operating margin",
  "dek": "People come to plan purchases, which should be valuable to advertisers. Yet the company converts only 4.2% of $4.7B of revenue into operating profit.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $4.7B trailing twelve months, +15.4% year over year.",
    "Profitability: 4.2% operating margin and 3.8% net margin.",
    "Cash: $1.3B free cash flow, a 27.0% margin.",
    "Scorecard: 45/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1506293/000150629326000021/pins-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001506293&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "PINTEREST, INC. generated $4.7B of revenue over the last twelve months, +15.4% versus the prior year. The key question is whether audience, content or network scale can be monetised without giving away the margin.",
      "The latest reported quarter was Q3 FY26, with $1.2B of revenue and an operating margin of 2.6%. The stock closed at $18.07 on 2026-11-17, giving a market capitalization of $10.4B.",
      "The shares sit 30% of the way up their 52-week range ($13.84 to $27.96). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ]
  },
  "whatItDoes": {
    "paragraphs": [
      "The consumer product is free. Users search, save and organise images, follow other people's boards and tap through to retailers. Advertising is effectively the only revenue line: brands pay to appear in the feed and in search results when someone shows purchase intent. There is no subscription business of any size to cushion an advertising downturn.",
      "The company does not report a segment split in this dataset, so the geographic mix of revenue is unknown. That matters because advertising rates differ sharply between markets, and a platform with a large user base in lower-monetising countries can grow users without growing revenue at the same rate. The product is built once and served to everyone, which is why the gross margin is 79.0%."
    ],
    "bullets": [
      {
        "title": "Advertising",
        "detail": "Brand and performance campaigns sold against planning intent. Essentially all of revenue."
      },
      {
        "title": "The consumer app",
        "detail": "Free boards, search and shopping links. Users are the inventory, not the customer."
      },
      {
        "title": "Cost base",
        "detail": "Engineering, sales and marketing. The reason a 79% gross margin becomes a 4.2% operating margin."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is an auction: advertisers bid for placements, and the platform earns the clearing price times the number of impressions sold. Delivery costs are low, mainly infrastructure and app-store fees, which is why gross margin reaches 79.0%. Everything after that is people: engineers to improve recommendations, sales staff to win advertisers, and administration.",
      "The operating leverage is therefore entirely about revenue per employee. If revenue grows and the cost base holds, margin expands quickly, because the incremental cost of serving another advertiser is small. The quarterly record shows how violent that can be: a 22.8% operating margin in the December 2025 quarter and -8.0% in the March 2026 quarter.",
      "That swing is seasonality, not instability. The fourth quarter carries the holiday advertising budget, so the annual margin is decided in a twelve-week window. A company with a single seasonal peak has less room to absorb a weak December."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 24.3% a year across the fiscal years in the dataset, and the latest quarter changed +11.9% year over year. Third-party estimates for the current fiscal year point to $4.8B of revenue and $1.95 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 4.2% and return on invested capital of 5.9% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 4.2%, the net margin is 3.8% and diluted EPS is $0.25. The latest quarter's operating margin was 2.6%.",
      "Return on equity is 5.7%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $1.2B, an operating margin of 2.6% and a net margin of 1.8%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $1.3B, a 27.0% margin. The balance sheet carries $487.9M of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $1.3B over the last twelve months and net debt was -$487.9M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 58.1x trailing earnings and 42.8x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $25.03; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "36 analysts contribute to the third-party consensus. The mean target is $25.03, with a range of $20.00 to $41.00.",
      "Current-year estimates call for $4.8B of revenue and $1.95 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 36 analysts with a mean target of $25.03; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Pinterest depends on one revenue line and one seasonal quarter. The risks below are mostly about whether the cost base can ever be justified by the advertising it supports.",
    "items": [
      {
        "title": "Advertising cyclicality",
        "severity": "High",
        "detail": "There is no subscription revenue to cushion a downturn. A cut in brand budgets reaches revenue within a quarter.",
        "watch": "Quarterly revenue growth and the commentary on advertiser demand."
      },
      {
        "title": "Competition for engagement",
        "severity": "High",
        "detail": "Short-video and social platforms compete for the same planning and shopping behaviour, and users can switch with no cost.",
        "watch": "Monthly active users, engagement and time spent."
      },
      {
        "title": "Monetisation outside the largest market",
        "severity": "Medium",
        "detail": "If most users are in markets where advertisers pay less, user growth does not translate into revenue growth at the same rate.",
        "watch": "Revenue per user by region and the international share of revenue."
      },
      {
        "title": "Cost discipline",
        "severity": "Medium",
        "detail": "A 4.2% operating margin leaves little room for error. Hiring or marketing increases can turn profit into loss quickly.",
        "watch": "Operating margin, headcount and share-based compensation."
      },
      {
        "title": "Product execution",
        "severity": "Medium",
        "detail": "Shopping features and measurement tools have to prove that planning intent converts into purchases advertisers can see.",
        "watch": "Adoption of shopping formats and the growth of performance advertising."
      }
    ],
    "watchlist": [
      {
        "title": "Revenue per user",
        "detail": "The link between the audience and the advertising business; user growth alone is not enough."
      },
      {
        "title": "Operating margin",
        "detail": "The number that has failed to hold above 10% for a full year."
      },
      {
        "title": "Share-based compensation",
        "detail": "It explains much of the gap between free cash flow and reported profit, and it dilutes owners."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Pinterest is an advertising platform with $4.7B of revenue, a 79.0% gross margin and a 4.2% operating margin. Free cash flow of $1.26B is far larger than reported profit, largely because of non-cash charges.",
      "The business has a genuine asset: an audience that arrives with purchase intent. What it has not shown is the ability to convert that intent into a durable operating margin, and the quarterly record shows how quickly profit disappears when investment rises.",
      "The valuation reflects the ambiguity. At 2.2x sales the shares are cheap for an internet platform; at 45.0x EV/EBITDA they are expensive for one with a 4.2% margin. Both are true at once."
    ],
    "questions": [
      "How much of the free-cash-flow margin survives if share-based compensation is treated as a cost?",
      "Is revenue per user growing in the markets where the user base is growing?",
      "What would it take for the operating margin to hold above 10% for a full year?",
      "How much of the fourth-quarter profit depends on holiday advertising?"
    ]
  }
};
