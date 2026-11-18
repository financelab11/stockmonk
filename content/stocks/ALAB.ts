import type { StockStory } from "./types";

export const ALAB: StockStory = {
  "ticker": "ALAB",
  "kicker": "Semiconductors · AI connectivity",
  "title": "Astera Labs sells the wiring diagram of an AI server",
  "dek": "A chip company with a 73.9% gross margin and a 30.6% operating margin, growing 115%. The debate is about how much connectivity silicon one accelerator can absorb.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $1.6B trailing twelve months, +115.2% year over year.",
    "Profitability: 25.5% operating margin and 26.8% net margin.",
    "Cash: $344.7M free cash flow, a 22.1% margin.",
    "Scorecard: 60/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1736297/000173629726000010/alab-20251231.htm",
  "irUrl": "https://www.asteralabs.com",
  "bigPicture": {
    "paragraphs": [
      "Astera Labs, Inc. generated $1.6B of revenue over the last twelve months, +115.2% versus the prior year. Growth is tied to AI data-center spending, and the key question is how much of that spending becomes durable recurring demand.",
      "The latest reported quarter was Q3 FY26, with $584.9M of revenue and an operating margin of 30.6%. The stock closed at $211.60 on 2026-11-17, giving a market capitalization of $37B.",
      "The shares sit 28% of the way up their 52-week range ($97.89 to $499.48). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "In a rack of accelerators, the expensive part is the compute and the hard part is moving data between the compute. Astera sells the hard part."
  },
  "whatItDoes": {
    "paragraphs": [
      "Modern AI servers are built from pools of accelerators, CPUs, memory and storage connected by high-speed links. Electrically, those links degrade over distance and lose integrity as speeds rise, so the signal has to be re-timed and re-driven at intervals. Astera's retimers and smart cable modules do that job. Its fabric switches connect multiple accelerators and memory pools within a rack, and its memory controllers manage the connection between processors and memory.",
      "The company is listed as designing and selling in Taiwan and the United States, which is where its customers build and where its supply chain sits. There is no segment disclosure in the data, so the split between retimers, cables, switches and controllers is not visible. That matters, because the four products have different competitive dynamics: retimers compete with integrated alternatives, while fabric switches compete with the networking incumbents."
    ],
    "bullets": [
      {
        "title": "Signal integrity",
        "detail": "Retimers and smart cable modules keep high-speed links working across a rack. The most mature product family."
      },
      {
        "title": "Fabric and memory",
        "detail": "Switches and memory controllers that let accelerators share data and memory pools. The growth bet."
      },
      {
        "title": "Customer profile",
        "detail": "Hyperscalers and the manufacturers that assemble their systems. Few buyers, long qualification, large programmes."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Astera sells chips, generally per unit, with pricing that depends on the speed and complexity of the link. A retimer that supports a faster generation commands more than the part it replaces, so revenue can grow even if the number of servers is flat. That is the content story, and it is why the gross margin has held at 73.9% while volume scaled.",
      "The expense base is design. Masks, packaging development, firmware, validation labs and applications engineers who sit with customers for months before a design is confirmed. A chip company at this stage spends heavily before it earns, and the operating margin only appears once a programme reaches volume. The FY2025 numbers show that happening: $852.5M of revenue converted into $173.4M of operating income after years of losses.",
      "One accounting detail is worth understanding. In FY2024 the company reported a $116.1M operating loss and $102.4M of positive free cash flow. A loss that large alongside positive cash generation means the income statement carried a big non-cash charge, and share-based compensation is the usual reason in a young semiconductor firm. It does not make the loss unreal, but it does mean the cash flow statement and the income statement are describing different things."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 120.2% a year across the fiscal years in the dataset, and the latest quarter changed +153.7% year over year. Third-party estimates for the current fiscal year point to $2B of revenue and $4.38 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 25.5% and return on invested capital of n/a are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Where the gross margin goes",
        "detail": "About 43 points of the 73.9% gross margin is absorbed before operating profit. Mostly engineering, validation and selling."
      },
      {
        "title": "Why margins appear late",
        "detail": "Design cost is incurred years before a socket ships in volume. Operating margin arrives with the ramp, not with the design win."
      },
      {
        "title": "What dilutes it",
        "detail": "A mix shift toward switches or cable modules, which carry more material cost than a bare retimer, would lower the blended margin."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 25.5%, the net margin is 26.8% and diluted EPS is $2.51. The latest quarter's operating margin was 30.6%.",
      "Return on equity is n/a. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $584.9M, an operating margin of 30.6% and a net margin of 31.3%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $344.7M, a 22.1% margin. Net debt is not a meaningful measure for this business in the current dataset.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 88.8x trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $344.15; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "22 analysts contribute to the third-party consensus. The mean target is $344.15, with a range of $225.00 to $500.00.",
      "Current-year estimates call for $2B of revenue and $4.38 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 22 analysts with a mean target of $344.15; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Astera has a strong margin and a fast-growing product. The risks sit in who buys it, what happens when the architecture changes, and what the share price already assumes.",
    "items": [
      {
        "title": "Hyperscaler concentration",
        "severity": "High",
        "detail": "A small number of hyperscalers design their own racks and qualify their own suppliers. Losing one programme removes a large block of revenue at once.",
        "watch": "Customer concentration disclosures and the number of programmes in volume."
      },
      {
        "title": "Integration into custom silicon",
        "severity": "High",
        "detail": "Retimer and switch functions can be absorbed into an accelerator or a switch ASIC. That removes the standalone part rather than competing with it.",
        "watch": "Whether new accelerator designs still need discrete retimers per link."
      },
      {
        "title": "The second-half ramp in the estimates",
        "severity": "Medium",
        "detail": "Near-term estimates imply about 5% sequential growth while the annual estimate requires 65% growth for the next year. Something has to change course.",
        "watch": "The gap between quarterly estimates and the annual number, updated each quarter."
      },
      {
        "title": "Gross margin mix",
        "severity": "Medium",
        "detail": "Cable modules and switches carry more material content than bare retimers. A mix shift toward systems lowers the 73.9% gross margin.",
        "watch": "Gross margin by quarter against the product mix disclosed in filings."
      },
      {
        "title": "Expense growth ahead of revenue",
        "severity": "Medium",
        "detail": "FY2024 showed what happens when the cost base is built for a business that has not arrived: a $116.1M operating loss on $396.3M of revenue.",
        "watch": "Operating expense growth relative to revenue growth in each quarter."
      }
    ],
    "watchlist": [
      {
        "title": "Content per accelerator",
        "detail": "The dollar value of Astera parts in a typical rack is the single variable that drives the growth story."
      },
      {
        "title": "Share-based compensation",
        "detail": "It explains the gap between operating losses and positive free cash flow, and it is a real cost to owners."
      },
      {
        "title": "Sequential revenue growth",
        "detail": "The annual estimates depend on reacceleration. Two flat quarters would break that assumption."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Astera Labs is a connectivity chip designer with a 73.9% gross margin, a 30.6% operating margin and $1.56B of trailing revenue growing at 115.2%. It has crossed from losses to profits in three years and generates $344.7M of free cash flow. The product is technically demanding and the customer list is short and demanding.",
      "The educational point is the shape of a chip company's economics. Gross margin reflects the value of the design; operating margin reflects how much of that value is consumed by the next design. Astera spends about 43 points of gross margin on engineering and selling, which is normal for a company whose products are re-specified every generation. That spending is what makes the next socket possible, and it is also why a single lost programme hurts so much.",
      "What is not known is the true concentration of revenue, how much of the next year's estimate depends on programmes already awarded, and whether the sequential slowdown implied by the quarterly estimates is conservative or descriptive. The AI build-out is a real driver of this business; it is not a promise that the current growth rate continues."
    ],
    "questions": [
      "What share of revenue comes from the largest two or three customers?",
      "Does the next generation of accelerators need more or fewer discrete retimers per link?",
      "Why do the quarterly estimates imply a slowdown while the annual estimate implies acceleration?",
      "How much of the 73.9% gross margin survives a mix shift toward switches and cables?"
    ]
  }
};
