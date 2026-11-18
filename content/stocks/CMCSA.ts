import type { StockStory } from "./types";

export const CMCSA: StockStory = {
  "ticker": "CMCSA",
  "kicker": "Cable · Broadband, media and parks",
  "title": "Comcast is priced for decline and still produces a great deal of cash",
  "dek": "Revenue is flat at $123B, free cash flow is $19.7B and the shares trade at 5.0x EV/EBITDA. Broadband and parks have to offset a shrinking video business.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $123B trailing twelve months, -0.2% year over year.",
    "Profitability: 14.7% operating margin and 9.2% net margin.",
    "Cash: $19.7B free cash flow, a 16.0% margin.",
    "Scorecard: 43/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1166691/000162828026004994/cmcsa-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001166691&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "COMCAST CORP. generated $123B of revenue over the last twelve months, -0.2% versus the prior year. The key question is whether audience, content or network scale can be monetised without giving away the margin.",
      "The latest reported quarter was Q3 FY26, with $29.3B of revenue and an operating margin of 18.2%. The stock closed at $25.31 on 2026-11-17, giving a market capitalization of $89.9B.",
      "The shares sit 39% of the way up their 52-week range ($20.48 to $32.86). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A cable company is a toll road with a programming bill attached. The tolls recur, the bill is renegotiated every few years, and the traffic can leave."
  },
  "whatItDoes": {
    "paragraphs": [
      "Connectivity is the largest profit pool: broadband, video, voice and mobile sold to homes and businesses over a network the company owns. Media includes the NBC broadcast network, the cable channels, the film studio and the streaming service. Parks operates theme parks in the United States and abroad.",
      "The pieces are more connected than they look. Cable distribution historically gave the media arm leverage when negotiating carriage fees, and the parks sell advertising for films. That integration is also a trap: when the distribution base shrinks, the programming arm loses both a customer and a bargaining chip. The company employs 168,000 people, and most of its revenue is earned in the United States."
    ],
    "bullets": [
      {
        "title": "Connectivity",
        "detail": "Broadband, video, mobile and voice. Recurring revenue with a fixed network underneath."
      },
      {
        "title": "Media",
        "detail": "Broadcast and cable networks, the film studio and the streaming service. Advertising plus subscriptions."
      },
      {
        "title": "Parks",
        "detail": "Theme parks in the United States and internationally. Attendance, tickets and in-park spending."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Broadband is the good business: a subscription with a high incremental margin because the network cost is already sunk. Video is the difficult one, because the company resells programming it does not own while the cost of that programming keeps rising. Advertising is cyclical, and parks are capital-heavy but earn high margins at the gate.",
      "The consolidated gross margin of 69.8% overstates how profitable the group is, because the largest cost lines, including programming, marketing and corporate overhead, are reported below it. The operating margin of 14.7% is the honest measure of what is left after everything is paid.",
      "Operating leverage runs in both directions here. Revenue fell 0.2% while operating income dropped from $23.30B in FY2024 to $20.67B in FY2025, a fall of more than a tenth on essentially flat sales. Fixed costs in cable and media do not shrink with the subscriber base."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 2.1% a year across the fiscal years in the dataset, and the latest quarter changed -6.1% year over year. Third-party estimates for the current fiscal year point to $119.8B of revenue and $3.50 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 14.7% and return on invested capital of 8.3% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 14.7%, the net margin is 9.2% and diluted EPS is $3.17. The latest quarter's operating margin was 18.2%.",
      "Return on equity is 12.2%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $29.3B, an operating margin of 18.2% and a net margin of 11.8%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $19.7B, a 16.0% margin. Net debt is $79.8B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $19.7B over the last twelve months and net debt was $79.8B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 7.9x trailing earnings and 5.1x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $27.98; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "22 analysts contribute to the third-party consensus. The mean target is $27.98, with a range of $17.00 to $42.00.",
      "Current-year estimates call for $119.8B of revenue and $3.50 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 22 analysts with a mean target of $27.98; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Comcast's risks are structural rather than financial in origin, but they arrive through a leveraged balance sheet. The first two determine whether the cash flow is durable.",
    "items": [
      {
        "title": "Broadband competition",
        "severity": "High",
        "detail": "Fibre and fixed wireless operators are taking share in the one segment that carries the group. Broadband is the profit pool that funds everything else.",
        "watch": "Broadband subscriber additions and revenue per user."
      },
      {
        "title": "Video and linear decline",
        "severity": "High",
        "detail": "Video subscribers keep leaving, and the channels lose affiliate fees and advertising as they go. Programming costs do not fall as fast.",
        "watch": "Video subscribers, affiliate fee revenue and channel advertising."
      },
      {
        "title": "Programming costs",
        "severity": "Medium",
        "detail": "Content contracts reset every few years. A higher cost per subscriber compresses the margin on every customer who remains.",
        "watch": "Programming expense per video subscriber and segment margins."
      },
      {
        "title": "Leverage",
        "severity": "Medium",
        "detail": "$79.8B of net debt at 2.4x EBITDA makes the equity sensitive to refinancing costs and to any fall in cash flow.",
        "watch": "Net debt to EBITDA, interest expense and the maturity schedule."
      },
      {
        "title": "Park cyclicality",
        "severity": "Medium",
        "detail": "Theme park attendance depends on travel budgets. A park is a fixed-cost asset with a discretionary admission price.",
        "watch": "Attendance and per-capita spending at the parks."
      }
    ],
    "watchlist": [
      {
        "title": "Broadband net additions",
        "detail": "The single most important number: it decides whether the cash engine is stable."
      },
      {
        "title": "Free cash flow",
        "detail": "Cash generation has held up better than operating income, and that is what services the debt."
      },
      {
        "title": "Debt reduction",
        "detail": "Lower net debt would reduce the discount the market applies to the equity."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Comcast is a cable and media group with $123.0B of revenue, a 14.7% operating margin and $19.7B of free cash flow. It carries $79.8B of net debt and trades at 5.0x EV/EBITDA.",
      "The puzzle is not the current cash flow but its duration. A 22.7% free-cash-flow yield says the market expects the distribution business to shrink faster than management can replace the profit.",
      "The educational point is that a low multiple and a high yield can be a warning rather than an opportunity. When revenue is falling, the denominator of every multiple is the thing that needs checking first."
    ],
    "questions": [
      "Are broadband subscribers still growing, and at what revenue per user?",
      "How much of free cash flow comes from parks rather than connectivity?",
      "What does the debt maturity schedule look like over the next five years?",
      "Can streaming advertising replace the profit lost from linear channels?"
    ]
  }
};
