import type { StockStory } from "./types";

export const RGTI: StockStory = {
  "ticker": "RGTI",
  "kicker": "Quantum · Computer Hardware",
  "title": "Rigetti fabricates its own quantum chips, which is both the bet and the burden",
  "dek": "The company designs and makes its superconducting processors in-house, so every delay is a manufacturing delay. Revenue was $7.1M in FY2025 against an operating loss of $84.7M, and the equity is valued at $3.9B.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $13.4M trailing twelve months, +68.5% year over year.",
    "Profitability: -727.6% operating margin and -1787.4% net margin.",
    "Cash: -$87.6M free cash flow, a -655.9% margin.",
    "Scorecard: 42/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1838359/000110465926023454/rgti-20251231x10k.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001838359&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Rigetti Computing, Inc. generated $13.4M of revenue over the last twelve months, +68.5% versus the prior year. The investment case is a long-duration option on a technology that has not yet reached commercial scale.",
      "The latest reported quarter was Q2 FY26, with $5.1M of revenue and an operating margin of -546.2%. The stock closed at $8.46 on 2026-11-17, giving a market capitalization of $2.9B.",
      "The shares sit 1% of the way up their 52-week range ($8.23 to $30.20). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Owning the fabrication line gives Rigetti control over its roadmap. It also means the company pays for the factory whether or not the machines sell."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product is a superconducting quantum processor plus the dilution refrigeration and control electronics needed to run it. Rigetti sells the complete system and also sells access to it through the cloud. A customer that wants to experiment can rent time; a customer that wants its own machine can buy one. Both routes use the same processor design.",
      "The customers are research organisations, national laboratories, universities and corporate teams exploring optimisation, chemistry and materials problems. These are buyers with budget cycles and technical gatekeepers, which is why revenue arrives in lumps tied to a handful of systems rather than in a smooth subscription line.",
      "Because there is a single reported revenue line, hardware sales and cloud usage cannot be separated in the statements. For a company at this stage that is a real gap: a $5M quarter driven by one machine delivery tells a different story from a $5M quarter driven by hundreds of recurring users."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is the price of a system or the price of time on one. Gross margin of 34.6% is the honest signature of a hardware business: the processor, the refrigeration, the wiring and the service engineer all sit in cost of revenue, so each sale carries a substantial bill of materials.",
      "The cost base underneath that gross profit is the fabrication operation and the engineering team. In FY2025 revenue was $7.1M and the operating loss was $84.7M, so the loss was nearly twelve times the revenue. That ratio is not a pricing problem; it is the cost of building a manufacturing capability before there is volume to fill it.",
      "The operating leverage, when it comes, will come from selling more systems off the same fabrication line. Fixed costs stay broadly flat while revenue per machine rises. Until then, every additional quarter of development adds to the loss, which is why the cash balance rather than the gross margin is the number that governs the story."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at -3.6% a year across the fiscal years in the dataset, and the latest quarter changed +185.3% year over year. Third-party estimates for the current fiscal year point to $20.2M of revenue and -$0.21 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of -727.6% and return on invested capital of -74.7% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -727.6%, the net margin is -1787.4% and diluted EPS is -$0.89. The latest quarter's operating margin was -546.2%.",
      "Return on equity is -43.7%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY26: revenue of $5.1M, an operating margin of -546.2% and a net margin of -1023.9%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$87.6M, a -655.9% margin. The balance sheet carries $443.5M of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was -$87.6M over the last twelve months and net debt was -$443.5M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $19.57; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "13 analysts contribute to the third-party consensus. The mean target is $19.57, with a range of $7.12 to $40.00.",
      "Current-year estimates call for $20.2M of revenue and -$0.21 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 13 analysts with a mean target of $19.57; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Rigetti's risks concentrate in one place: the distance between the technology it is building and the revenue it can charge for it today.",
    "items": [
      {
        "title": "Fabrication execution",
        "severity": "High",
        "detail": "Building processors in-house means yield, equipment and process problems land directly on the roadmap. A fab issue delays revenue and does not reduce the cost base.",
        "watch": "Processor yield, machine delivery schedules and any change to the fabrication footprint."
      },
      {
        "title": "Cash runway",
        "severity": "High",
        "detail": "$443.5M of net cash against a burn near $77M a year gives several years, but the company has no operating cash inflow to extend it.",
        "watch": "Quarterly cash used in operations and the pace of capital spending on fabrication."
      },
      {
        "title": "Revenue concentration and lumpiness",
        "severity": "High",
        "detail": "Annual revenue fell from $13.1M in FY2022 to $7.1M in FY2025. A handful of system sales decide the year.",
        "watch": "Backlog disclosure, the number of systems delivered and the split between cloud usage and hardware."
      },
      {
        "title": "Technical competition",
        "severity": "Medium",
        "detail": "Superconducting circuits compete with trapped ions and annealing machines, and large technology companies are funding their own programmes.",
        "watch": "Independent error-rate benchmarks and published results on problems classical machines cannot solve."
      },
      {
        "title": "Equity dilution",
        "severity": "Medium",
        "detail": "Losses are funded from the balance sheet and from share issuance. A lower share price makes each raise more expensive for existing holders.",
        "watch": "Share count and any new issuance facility."
      },
      {
        "title": "Valuation sensitivity",
        "severity": "Medium",
        "detail": "At 259.1x sales, the price reflects expectations rather than current cash flows. Small changes in the perceived timeline move the shares far more than operating results.",
        "watch": "The sales multiple relative to peers and the size of the cash balance relative to market value."
      }
    ],
    "watchlist": [
      {
        "title": "System deliveries",
        "detail": "The timing of machine sales is the single largest swing factor in quarterly revenue."
      },
      {
        "title": "Cash used in operations",
        "detail": "The burn rate decides how many years of development the current balance funds."
      },
      {
        "title": "Error rates",
        "detail": "Progress on fidelity and error correction is the leading indicator of commercial usefulness."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Rigetti is a vertically integrated quantum hardware company with $13.4M of trailing revenue, a -727.6% operating margin and $443.5M of net cash. Revenue has been lumpy and, at the annual level, declining until the most recent quarters. The improvement in FY2026 quarters is real but comes off a very small base.",
      "The investment question is whether in-house fabrication is an advantage or a fixed cost the company cannot fill. If quantum computing reaches a commercial market, owning the process is a durable edge. If the market takes another decade, the fab is a bill that arrives every quarter regardless.",
      "What the statements do not show is how close the technology is to solving a problem someone will pay to solve repeatedly. Until that appears, the balance sheet is the story, and the balance sheet has a clock on it."
    ],
    "questions": [
      "How much of the recent quarterly revenue came from system sales rather than recurring cloud usage?",
      "What annual burn should be assumed if fabrication spending rises?",
      "Which published benchmark would show the processor is closing the gap to a useful machine?",
      "At what share price would the next equity raise become materially dilutive?"
    ]
  }
};
