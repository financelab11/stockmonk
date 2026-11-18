import type { StockStory } from "./types";

export const CDNS: StockStory = {
  "ticker": "CDNS",
  "kicker": "Technology · Electronic design automation",
  "title": "Cadence rents out the software that chip designers cannot switch off",
  "dek": "A 49.4% gross margin is low for a software company, and that is the first clue about what Cadence actually sells.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $6.1B trailing twelve months, +17.6% year over year.",
    "Profitability: 28.9% operating margin and 22.5% net margin.",
    "Cash: $1.8B free cash flow, a 28.8% margin.",
    "Scorecard: 50/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/813672/000081367226000016/cdns-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000813672&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "CADENCE DESIGN SYSTEMS INC. generated $6.1B of revenue over the last twelve months, +17.6% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q3 FY26, with $1.6B of revenue and an operating margin of 26.2%. The stock closed at $306.97 on 2026-11-17, giving a market capitalization of $84.2B.",
      "The shares sit 29% of the way up their 52-week range ($262.75 to $416.69). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "The moat is not the license fee. It is the years of validation work a customer would have to repeat to use a different tool."
  },
  "whatItDoes": {
    "paragraphs": [
      "The portfolio spans digital design, analog and mixed-signal design, verification, and the emulation and prototyping hardware that lets a team test a chip before it exists in silicon. Around those sit design IP blocks that customers license rather than build, and a services organization that helps with implementation.",
      "Customers are semiconductor companies and, increasingly, systems companies that design their own chips for cars, networking equipment or data centers. That second group matters because it expands the market beyond the traditional chip industry, and because those customers are less experienced and more dependent on the vendor's support.",
      "The hardware is why gross margin is 49.4% rather than 80%. Emulation systems are physical machines with real manufacturing cost, and services are people-intensive. The software licenses inside the same contract carry much higher margins, but they are reported together."
    ],
    "bullets": [
      {
        "title": "Design software",
        "detail": "Tools for logic design, placement, routing, timing and analog work. Licensed on multi-year terms and renewed annually."
      },
      {
        "title": "Verification and emulation",
        "detail": "Simulation software plus physical emulation systems. The hardware part dilutes the gross margin."
      },
      {
        "title": "Design IP and services",
        "detail": "Reusable blocks and implementation help. Grows with the number of chip design starts."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is mostly subscription and time-based license, recognized over the contract term. A customer does not buy a tool once; it renews access every year, and the renewal usually includes more capacity as designs grow. That is why revenue is unusually predictable for a company exposed to semiconductor cycles.",
      "The cost structure explains the margins. Gross margin of 49.4% covers the hardware, the support organization and the third-party technology that goes into the products. Operating margin of 28.9% is struck after research and development, which is the largest single expense and the reason the company can charge what it does.",
      "Pricing power comes from switching cost rather than from scarcity. A design team's flow is a chain of scripts, libraries and validated steps built around one vendor's tools. Changing the vendor means re-validating the flow, retraining the team and risking a tape-out. Customers pay for continuity, and the annual increase is usually easier to accept than the alternative."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 14.6% a year across the fiscal years in the dataset, and the latest quarter changed +22.0% year over year. Third-party estimates for the current fiscal year point to $6.4B of revenue and $4.85 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 28.9% and return on invested capital of 17.4% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 28.9%, the net margin is 22.5% and diluted EPS is $5.03. The latest quarter's operating margin was 26.2%.",
      "Return on equity is 20.1%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $1.6B, an operating margin of 26.2% and a net margin of 17.7%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $1.8B, a 28.8% margin. Net debt is $1.2B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $1.8B over the last twelve months and net debt was $1.2B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 61.0x trailing earnings and 39.6x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $411.76; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "24 analysts contribute to the third-party consensus. The mean target is $411.76, with a range of $300.00 to $470.00.",
      "Current-year estimates call for $6.4B of revenue and $4.85 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 24 analysts with a mean target of $411.76; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Cadence's risks are about its customers' budgets and about the durability of a license model that depends on switching costs.",
    "items": [
      {
        "title": "Customer research budgets",
        "severity": "High",
        "detail": "Semiconductor design spending is cyclical. Renewals hold up better than new seats, but a prolonged downturn shrinks both.",
        "watch": "Revenue growth in the hardware and IP lines, which are more discretionary than software renewals."
      },
      {
        "title": "Hardware mix",
        "severity": "Medium",
        "detail": "Emulation systems carry real manufacturing cost. A richer hardware mix lowers gross margin even when revenue grows.",
        "watch": "Gross margin alongside revenue, quarter by quarter."
      },
      {
        "title": "Competition",
        "severity": "Medium",
        "detail": "One large competitor sells an overlapping toolchain, and the largest customers have the resources to build internal flows for some steps.",
        "watch": "Win rates at new design starts and pricing at renewal."
      },
      {
        "title": "Export controls",
        "severity": "Medium",
        "detail": "Restrictions on selling design tools into certain markets can remove revenue from customers who design advanced chips.",
        "watch": "License changes and the geographic revenue split."
      },
      {
        "title": "Acquisition integration",
        "severity": "Low",
        "detail": "Growth has included acquired products, which bring integration cost and the risk of distracting the core roadmap.",
        "watch": "Operating margin and the pace of new product releases."
      }
    ],
    "watchlist": [
      {
        "title": "Renewal and pricing",
        "detail": "The variables that justify a 14.5x sales multiple. They show up in revenue per customer, not in the headline growth rate."
      },
      {
        "title": "Gross margin",
        "detail": "A falling gross margin with rising revenue points to a heavier hardware mix or price pressure on software."
      },
      {
        "title": "Operating margin",
        "detail": "It has drifted from 32.2% to 26.2% across recent quarters. Watch whether that is mix or spending."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Cadence is one half of a duopoly in chip design software, with a 49.4% gross margin, a 28.9% operating margin and $1.76B of free cash flow. Revenue of $6.13B is up 17.6% and the latest quarter grew 22.0%.",
      "The business is more predictable than its end market because licenses renew. That predictability is exactly what a 63.6x earnings multiple is paying for. Whether the price is reasonable depends on renewal rates and pricing, which the reported statements do not disclose directly.",
      "The educational point is that a low gross margin for a software company is not automatically a weakness. It tells you the company sells more than software, and the operating margin tells you whether the mix is being managed well."
    ],
    "questions": [
      "What share of revenue comes from hardware and services rather than software licenses?",
      "How much of the annual revenue increase comes from price rather than new seats?",
      "Does the gross margin hold if hardware grows faster than software?",
      "Is the out-year EPS estimate of $9.85 comparable with the reported figure?"
    ]
  }
};
