import type { StockStory } from "./types";

export const IBM: StockStory = {
  "ticker": "IBM",
  "kicker": "Technology · Enterprise software and services",
  "title": "IBM's cash flow is steadier than its revenue",
  "dek": "Revenue compounded at 2.7% a year, yet free cash flow stayed above $9B in every year of the record. The gap between the two lines is the business model, and it is what the multiple is built on.",
  "readingMinutes": 9,
  "takeaways": [
    "Trailing revenue is $69.9B, up 6.8%, with a 58.0% gross margin but only 15.0% at the operating line.",
    "Free cash flow of $14.7B is a 21.0% margin, and it has stayed above $9B in every year of the record.",
    "Net debt of $54.6B is 4.3x EBITDA, with interest cover of 5.4x, so leverage is the constraint on the equity.",
    "At 19.8x earnings and 15.1x free cash flow, the shares price stable cash flow rather than growth."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/51143/000005114326000010/ibm-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000051143&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "IBM's revenue is slow and its cash flow is steady, and the difference is the investment case. Trailing revenue is $69.9B, up 6.8%, with a 58.0% gross margin and a 15.0% operating margin. The September 2026 quarter produced $17.1B at a 14.6% operating margin and $2.30 of EPS, well below the December 2025 quarter's $19.7B and $5.90. That range is the mainframe cycle, not a change in demand. The cash flow does not move with that cycle in the same way.",
      "Software is 44.4% of revenue, Consulting 31.2%, Infrastructure 23.3% and Financing 1.1%, with the United States at 39.8%. Software is subscription and term licence revenue attached to core banking, insurance and automation systems; Consulting is people-intensive project work; Infrastructure is mainframes, storage and Power servers. The mix explains why a 58.0% gross margin becomes a 15.0% operating margin: services delivery and sales absorb most of the gross profit. Software's share is the lever that can change that conversion over time.",
      "At $234 the shares trade at 19.8x earnings, 21.6x EV/EBITDA, 3.9x sales and 15.1x free cash flow, with a 6.6% free-cash-flow yield and a 3.0% dividend yield. IBM trades at 19.8x earnings and 21.6x EV/EBITDA, against peer medians of 32.0x and 25.5x. Net debt is $54.6B, or 4.3x EBITDA, and interest cover is 5.4x. The discount is a leverage discount as much as a growth discount, and the two are linked. A lower debt load would justify a higher multiple on the same cash flow."
    ],
    "quote": "IBM's revenue grows slowly, but its cash flow has been the constant, and $54.6B of net debt is what the equity owns after that cash is pledged."
  },
  "whatItDoes": {
    "paragraphs": [
      "Software is the largest and most valuable part. It includes Red Hat's operating system and container tools, automation and integration products, data and AI platforms, and the transaction-processing software that runs core banking and insurance systems. Much of it is subscription or term licence, renewed annually, which makes revenue predictable once the contract is signed.",
      "Consulting is the people business. It sells business transformation, systems integration, cloud migration and managed services, usually on multi-year contracts. Revenue is recognised as work is performed, margins are lower than software, and the segment is sensitive to how many projects clients are willing to start.",
      "Infrastructure is the hardware business: mainframes, storage and Power servers. It is cyclical and tied to product generations. A new mainframe launch drives a wave of upgrades and pulls through software and services, and the years between launches are quieter. That cycle is why quarterly revenue ranges from $15.92B to $19.69B within a single fiscal year."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Software revenue is recurring and high-margin. A customer that runs core banking on IBM software does not switch systems casually, so renewals are the base of the revenue and price increases are possible at renewal. Consulting revenue is project-based and people-intensive: the company bills for time and materials or commits to a fixed outcome, and the margin depends on utilisation and on how well the project is scoped.",
      "The cost structure is dominated by people. Services delivery, software development, sales and administration all sit in operating expense, which is why a 58.0% gross margin turns into a 15.0% operating margin. The company has a large fixed cost base in headcount and real estate, and revenue growth spreads that base slowly.",
      "Hardware is the smallest lever but the most visible. A mainframe cycle lifts revenue and margin at the same time, because the hardware carries a reasonable margin and pulls through high-margin software. When the cycle is between generations, the same dynamic works in reverse."
    ],
    "bullets": [
      {
        "title": "Software",
        "detail": "Subscriptions and term licences. Recurring, high margin, and the reason the cash flow is stable."
      },
      {
        "title": "Consulting",
        "detail": "Multi-year projects and managed services. Lower margin, people-heavy, and sensitive to client budgets."
      },
      {
        "title": "Infrastructure",
        "detail": "Mainframes, storage and Power servers. Cyclical, tied to product launches, and a pull-through for software."
      }
    ]
  },
  "growth": {
    "paragraphs": [
      "Sales moved from $55.2B in FY2020 to $67.5B in FY2025, with annual growth of 3.9%, 5.5%, 2.2%, 1.4% and 7.6%. The FY2025 jump is above trend, and the trailing rate is 6.8%. Consensus expects $70.6B in FY2026, up 4.5%, and $73.2B in FY2027, up 3.8%. The forecast is for a return to mid-single-digit growth, which is faster than the five-year record but slower than the latest year.",
      "Software is the growth engine and the margin engine. A customer that runs core banking or insurance on IBM software does not switch casually, so renewals form a base and price increases are possible at renewal. Consulting is project-based and depends on clients starting new work; it is the first line to weaken in a budget squeeze. Infrastructure is the smallest segment but the most visible, because a mainframe launch pulls through software and services.",
      "The consensus assumes acquisitions and software mix keep revenue growing at 4-5% even as consulting slows. That is plausible, but it is not the same as organic growth: the financial statements do not separate acquired revenue from existing business, so the quality of the growth cannot be tested. The reported numbers show the direction, not the composition. That distinction matters for the multiple, because acquired growth is bought rather than earned."
    ],
    "bullets": [
      {
        "title": "Software annuity",
        "detail": "Red Hat, automation and transaction processing renew annually. The installed base is the reason cash flow is more stable than revenue."
      },
      {
        "title": "Consulting bookings",
        "detail": "Discretionary projects are deferred first when clients cut budgets. The segment is 31.2% of revenue and people-heavy."
      },
      {
        "title": "Mainframe cycle",
        "detail": "Infrastructure is 23.3% of revenue. A launch year lifts hardware and pulls through high-margin software; the years between are quieter."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Gross margin reached 58.0%, operating margin 15.0% and net margin 16.0%. The net margin is above the operating margin, which is unusual and points to below-the-line gains; in FY2025 the figures were 15.7% and 15.3%, so the pattern is not new. The quarterly operating margin ranged from 8.7% in the March 2026 quarter to 21.0% in the December 2025 quarter, a function of revenue seasonality and product mix.",
      "Return on invested capital was 10.6% and return on equity 31.4%, against a peer median ROIC of 22.6%. The ROIC gap reflects goodwill from acquisitions and the low-margin consulting mix. The ROE is flattered by $54.6B of net debt: leverage raises the equity return even when the asset return is modest. ROIC is the better measure of operating quality here.",
      "The margin path from gross to operating is the cost of delivery. A 58.0% gross margin loses 43 points to sales, research, administration and services delivery, leaving 15.0%. Software carries most of the gross profit, so a mix shift toward software raises the operating margin, while a consulting-heavy quarter lowers it. The mainframe cycle adds a hardware margin on top."
    ]
  },
  "cash": {
    "paragraphs": [
      "The cash statement was $14.7B, a 21.0% margin, and FY2025 operating cash flow of $13.2B came against $1.1B of capex. Capex is 1.6% of revenue, which is low for a company with hardware in the portfolio. Net debt is $54.6B, or 4.3x EBITDA, and interest cover is 5.4x. The cash flow is the reason the leverage is financeable. Without it, the debt would be the dominant fact about the equity.",
      "The cash statement exceeds net income because depreciation and amortisation of acquired assets are added back and because working capital has been a source of cash. That is a real benefit, but it is also why the cash flow is more stable than the earnings: the accounting charges are large and non-cash. Free cash flow has stayed above $9B in every year of the record, which is the core of the equity story.",
      "Capital allocation has three claims: the 3.0% dividend, buybacks and debt. Net debt rose from $47.7B in FY2025 to $54.6B on a trailing basis, so the company is adding leverage while returning cash. At 4.3x EBITDA, that is a choice with limited room for error. The 6.6% free-cash-flow yield is the compensation for accepting it. The dividend is the fixed commitment; the buyback is the flexible one."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At $234 IBM trades at 19.8x earnings, 21.6x EV/EBITDA, 3.9x sales and 15.1x free cash flow, with a 6.6% free-cash-flow yield. Peer multiples of 32.0x earnings and 25.5x EV/EBITDA frame the discount; the stock is in the 31st and 41st percentiles. The discount is explained by 6.8% growth and 4.3x leverage, not by a weak franchise. The free-cash-flow yield is the measure that matters most for an income buyer.",
      "Forward numbers are stable. FY2026 EPS of $12.42 implies 18.8x, and FY2027 EPS of $13.24 implies 17.7x. The estimates assume 7.2% and 6.6% EPS growth, with revenue growth of 4.5% and 3.8%. The revisions are small and positive, which is consistent with a company that guides conservatively and delivers. There is no obvious catalyst in the numbers for a re-rating.",
      "The comparison with Microsoft is the right one for the discount. Microsoft trades at 26.0x earnings with a 47.1% operating margin and 17.9% growth; IBM trades at 19.8x with a 15.0% margin and 6.8% growth. The discount is proportional to the margin and growth gap, and IBM's 4.3x leverage widens it. A 6.6% free-cash-flow yield is attractive for an income investor, but the equity is levered, and that is the price of the yield."
    ]
  },
  "analysts": {
    "paragraphs": [
      "The 18 November 2026 Yahoo Finance consensus reflects 23 analysts, with a mean target of $260 and a range of $174 to $300. The $234 price sits below the $260 mean, and the range is narrower than most peers, which fits a mature cash-flow story.",
      "FY2026 estimates are $70.6B of revenue and $12.42 of EPS; FY2027 is $73.2B and $13.24. EPS revisions are plus 0.9% over 30 days and plus 0.8% over 60 and 90 days, a slow, steady pattern. The consensus assumes the December quarter produces $20.4B and $4.63 of EPS, up 3.5% and 2.3%, which is a modest finish to the year."
    ]
  },
  "risks": {
    "intro": "IBM's risks are competitive and execution-related. The balance sheet is a source of strength; the uncertainty is whether the software and consulting franchises grow faster than their markets.",
    "items": [
      {
        "title": "Consulting demand",
        "severity": "High",
        "detail": "Consulting is the largest people business and it depends on clients starting new projects. In a budget squeeze, discretionary work is deferred first.",
        "watch": "Consulting bookings, backlog and revenue growth."
      },
      {
        "title": "Mainframe cycle",
        "severity": "Medium",
        "detail": "Infrastructure revenue and the software attached to it rise and fall with product launches. A long gap between generations leaves a hole.",
        "watch": "Infrastructure revenue and commentary on the next product cycle."
      },
      {
        "title": "Competition from cloud platforms",
        "severity": "High",
        "detail": "Large cloud vendors sell integrated software and infrastructure that overlaps with IBM's middleware and consulting offerings.",
        "watch": "Software revenue growth and renewal rates."
      },
      {
        "title": "Acquisition integration",
        "severity": "Medium",
        "detail": "IBM has bought much of its recent growth. Large acquisitions add goodwill and amortisation, and they only pay off if the acquired revenue grows.",
        "watch": "Goodwill, intangible amortisation and segment growth."
      },
      {
        "title": "Currency and geographic exposure",
        "severity": "Low",
        "detail": "Revenue is spread across more than 170 countries, so a strong dollar reduces reported revenue even when local demand is stable.",
        "watch": "Constant-currency growth versus reported growth."
      }
    ],
    "watchlist": [
      {
        "title": "Free cash flow",
        "detail": "$14.66B is the number that supports the dividend, the buyback and the acquisitions."
      },
      {
        "title": "Software renewal rates",
        "detail": "Recurring revenue is the base. A decline in renewals shows up in cash flow before it shows up in revenue."
      },
      {
        "title": "Consulting bookings",
        "detail": "Bookings lead revenue in services by several quarters."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "IBM is a mature technology company with a software annuity, a services business and a hardware cycle. The 58.0% gross margin and $14.66B of free cash flow show that the underlying products are valuable. The 15.0% operating margin shows how much of that value is consumed by the cost of selling and delivering them.",
      "The valuation is full on earnings and reasonable on cash flow. A 6.3% free-cash-flow yield with 2.7% revenue growth is a defensible proposition for an investor seeking income and stability, but it is not a growth investment.",
      "The reader should watch three lines: software renewals, consulting bookings and the mainframe cycle. Together they explain most of the variance in a year that otherwise looks boring."
    ],
    "questions": [
      "How much of the FY2025 revenue jump was acquired rather than organic?",
      "What share of software revenue renews annually, and at what price increase?",
      "How dependent is the cash flow on depreciation of acquired assets?",
      "What would a weak mainframe year do to the 21.0% free-cash-flow margin?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
