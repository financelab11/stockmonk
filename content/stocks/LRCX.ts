import type { StockStory } from "./types";

export const LRCX: StockStory = {
  ticker: "LRCX",
  kicker: "Semiconductors · Etch and deposition equipment",
  title: "Lam Research earns its margin inside the etch chamber",
  dek: "The most concentrated product line in this batch also carries the highest operating margin in it. That is not a coincidence.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $26.13B on a trailing basis, up 33.4%, and the latest quarter grew 54.4% to $8.22B.",
    "Operating margin reached 40.0% in the latest quarter, the highest of the equipment makers here.",
    "Free cash flow was $6.54B, a 25.0% margin, with $7.44B of net cash.",
    "Return on equity of 185.9% is an artifact of a small equity base, not a measure of operating quality.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/707549/000070754926000037/lrcx-20260628.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000707549&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Lam Research sells the tools that carve and coat a silicon wafer. Etch removes material in patterns measured in billionths of a meter; deposition adds films one atomic layer at a time. Both steps repeat dozens of times in an advanced chip, and each repetition is another opportunity to sell a tool, a spare part or an upgrade.",
      "The latest quarter, Q1 FY2027, made $8.22B at a 40.0% operating margin on trailing revenue of $26.13B, up 33.4%. That margin is the highest in the equipment group covered here. It is not the result of a better product alone; it is the result of a revenue base that has grown faster than the cost structure underneath it.",
      "The price is $200.44, or $250.38B, inside a 52-week band of $135.50 to $438.50. Trailing P/E is 29.6x and EV/EBITDA is 24.0x. The company also pays a small dividend, yielding 0.5%.",
    ],
    quote:
      "Lam's exposure is narrower than its peers' and deeper. That combination produces both the highest margin and the sharpest revenue swings.",
  },
  whatItDoes: {
    paragraphs: [
      "The business is built around three process areas: etch, deposition and wafer cleaning. Etch is the core. Removing material selectively is how a pattern becomes a circuit, and the difficulty rises with every generation because the layers get thinner and the tolerances tighter.",
      "Customers are the memory makers and the logic foundries. Lam's revenue mix leans more toward memory than Applied Materials' does, which matters because memory capital spending is the most volatile line in the semiconductor industry. When memory makers stop building, Lam feels it first.",
      "Around the tools sits a service and spares business that follows the installed base. Every tool sold becomes a source of consumable parts and field service for a decade or more, which is why the revenue that survives a downturn is larger than the order book alone would suggest.",
    ],
    bullets: [
      {
        title: "Etch",
        detail:
          "The largest product line. Used at every patterning step, and increasingly at advanced packaging steps.",
      },
      {
        title: "Deposition",
        detail:
          "Single-wafer and batch systems that build up the films a device needs.",
      },
      {
        title: "Cleaning and service",
        detail:
          "Wafer cleaning tools plus the spares and field service that keep the installed base running.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin is 51.1%, which is what a precision hardware business earns when the tool is difficult to build and the customer has few alternatives. Operating margin is 37.0% on a trailing basis and 40.0% in the latest quarter. The gap between the two is only about 14 points of revenue, which is lean for a company that spends heavily on research.",
      "That leanness is the operating leverage. Research and development is a fixed annual commitment; when revenue rises 54.4% in a quarter, the cost of that commitment is spread over a much larger base. The reverse is also true, and FY2024 showed it: revenue fell to $14.91B and operating margin fell to 28.6%.",
      "The pricing logic is straightforward. A tool that improves yield or enables a step a competitor cannot perform is worth a great deal relative to its cost of goods, and customers who have designed a process around a specific chamber are reluctant to requalify another supplier mid-generation.",
    ],
  },
  growth: {
    paragraphs: [
      "The annual table shows a full swing: $17.23B in FY2022, $17.43B in FY2023, $14.91B in FY2024, $18.44B in FY2025 and $23.23B in FY2026. The dip in FY2024 is the memory capex pause, and the recovery since then is the same customers restarting construction.",
      "The quarterly series is steeper still: $5.17B, $5.32B, $5.34B, $5.84B, $6.72B and $8.22B. Most of the increase came in the last two quarters, which is how equipment revenue behaves when projects move from planning to tool installation.",
      "Third-party estimates assume the ramp continues: $35.39B this fiscal year and $42.60B the next. That would put revenue 83% above the FY2026 level in two years. The assumption is plausible in a memory upcycle and fragile in a pause, because the same three or four customers make the decision.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin has ranged from 28.6% to 35.3% across the annual table, then broke out to 40.0% in the latest quarter. Net margin is 32.3% and diluted EPS was $6.71 on a trailing basis, with the latest quarter at $2.19 against $1.34 in Q4 FY2025.",
      "Return on equity of 185.9% should not be read as a measure of business quality. It is the ratio of profit to a very small equity base, which is what years of buybacks produce. Return on invested capital is not meaningful in the same table, and the more useful comparison is operating margin against the capital tied up in inventory and receivables.",
      "The margin trend is the cleanest evidence that the fixed cost base is being absorbed. Four quarters ago the company earned 33.7% at the operating line on $5.17B of revenue; now it earns 40.0% on $8.22B. Roughly half of the incremental revenue reached operating profit.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $6.54B, a 25.0% margin. The annual record is more informative: $2.55B in FY2022, $4.68B, $4.26B, $5.41B and $4.89B in FY2026. In FY2026, free cash flow was well below net income of $7.27B, which means working capital and capital spending absorbed part of the profit.",
      "That gap is normal in a steep ramp. Inventory has to be built to ship tools, and receivables grow with revenue. It becomes a concern only if it persists after the ramp ends.",
      "The balance sheet carries $7.44B of net cash and net debt to EBITDA is negative. Combined with the small dividend, that leaves the company free to keep returning cash through buybacks, which is also why the equity base is so small.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $200.44, Lam trades at 29.6x trailing earnings, 24.0x EV/EBITDA, 9.3x sales and 38.3x free cash flow, with a 2.6% free-cash-flow yield. Against the peer table that is above Nvidia at 23.3x earnings and below Broadcom at 36.6x.",
      "The multiple is high for a company whose revenue fell 14% two years ago, and the reason is the earnings trajectory. If the $35.39B revenue estimate for this fiscal year arrives, trailing earnings will be revised upward and the multiple will fall without the share price moving.",
      "The risk in that arithmetic is that equipment earnings peak before revenue does. Margin expansion of the kind seen in the latest quarter is difficult to sustain once the fixed costs have been absorbed. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty analysts, a mean of $364.03 and a range of $255.00 to $500.00. Five sit in the strongest positive bucket, 25 are positive and four neutral.",
      "The numbers they model are $8.64B of revenue next quarter with $2.35 of EPS, $35.39B this fiscal year with $9.65, and $42.60B next fiscal year with $12.24. The current-year revenue estimate is 52% above FY2026, and the EPS estimate compares with $6.71 on a trailing basis.",
      "That range is narrow relative to the size of the move being forecast. For a business this cyclical, a tight range often means the analysts share the same view of the customer capex plans rather than that the outcome is certain.",
    ],
  },
  risks: {
    intro:
      "Lam's risks are concentrated in its customer base and in the memory cycle. The balance sheet gives it time to absorb a downturn, not immunity from one.",
    items: [
      {
        title: "Memory capital spending",
        severity: "High",
        detail:
          "A larger share of revenue comes from memory makers than at peers. When they pause construction, revenue falls quickly, as FY2024 showed.",
        watch:
          "The split between memory and logic revenue, and memory makers' capital plans.",
      },
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "A few large fabs account for most of the revenue. A single delayed project can move a quarter.",
        watch:
          "Concentration disclosures and order timing.",
      },
      {
        title: "Export controls",
        severity: "High",
        detail:
          "Restrictions on selling advanced equipment into certain markets can remove demand that the installed base was built to serve.",
        watch:
          "License changes and the geographic revenue split.",
      },
      {
        title: "Margin at the peak",
        severity: "Medium",
        detail:
          "A 40% operating margin is the top of this company's range. It depends on volume that may not persist.",
        watch:
          "Operating margin against revenue in the same quarter.",
      },
      {
        title: "Working capital",
        severity: "Medium",
        detail:
          "Free cash flow fell below net income in FY2026 as inventory and receivables grew with the ramp.",
        watch:
          "Inventory days and the gap between net income and free cash flow.",
      },
    ],
    watchlist: [
      {
        title: "Bookings and backlog",
        detail:
          "The leading indicator for a business whose revenue arrives with a lag of several quarters.",
      },
      {
        title: "Gross margin",
        detail:
          "A move below 50% would suggest price competition or an unfavorable product mix.",
      },
      {
        title: "Cash conversion",
        detail:
          "Whether free cash flow catches up with net income once the current ramp is delivered.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Lam Research is a focused supplier of etch and deposition tools with a service annuity attached, a 51.1% gross margin and a 40.0% operating margin in the latest quarter. Revenue of $26.13B is up 33.4% and the quarterly sequence is still accelerating.",
      "The concentration cuts both ways. A narrower product line and a memory-heavy customer base produced the highest margin in the equipment group and the sharpest decline in FY2024, when revenue fell 14%. The latest quarter's 54.4% growth is the same mechanism running in the other direction.",
      "The educational point is that a 40% operating margin at a capital-goods company is a statement about volume, not just about pricing. It holds while the fixed cost base is being absorbed and compresses when it is not.",
    ],
    questions: [
      "What share of revenue comes from memory customers?",
      "How much of the $8.22B quarter came from a small number of projects?",
      "Does the service business grow fast enough to cushion the next pause?",
      "Why did free cash flow fall below net income in FY2026?",
    ],
  },
};
