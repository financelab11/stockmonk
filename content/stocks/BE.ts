import type { StockStory } from "./types";

export const BE: StockStory = {
  "ticker": "BE",
  "kicker": "Fuel cells · On-site power generation",
  "title": "Bloom Energy sells power that skips the grid queue",
  "dek": "Fuel cells give data-centre developers electricity without waiting years for a utility connection. Revenue doubled, and so did the price of the shares relative to earnings.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $3.8B trailing twelve months, +112.2% year over year.",
    "Profitability: 14.9% operating margin and 28.1% net margin.",
    "Cash: $436.7M free cash flow, a 11.5% margin.",
    "Scorecard: 46/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1664703/000162828026006516/be-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001664703&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Bloom Energy Corp. generated $3.8B of revenue over the last twelve months, +112.2% versus the prior year. Growth is tied to AI data-center spending, and the key question is how much of that spending becomes durable recurring demand.",
      "The latest reported quarter was Q3 FY26, with $1.2B of revenue and an operating margin of 18.3%. The stock closed at $173.46 on 2026-11-17, giving a market capitalization of $51.3B.",
      "The shares sit 35% of the way up their 52-week range ($75.70 to $351.28). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "The value of on-site generation is set by the alternative, and the alternative is waiting. When a utility needs five years to deliver a connection, a generator that arrives in eighteen months can charge for the difference."
  },
  "whatItDoes": {
    "paragraphs": [
      "The Energy Server is a modular generator. Fuel, usually natural gas but potentially hydrogen, is fed into stacks of solid oxide cells that produce electricity electrochemically rather than by combustion. Because there is no flame, the emissions profile is different from a gas turbine, and because the units are modular, capacity can be added in blocks as a site grows.",
      "Bloom sells the equipment and, in many cases, keeps servicing it afterwards. Data centres buy the power, not the box, in some structures, which makes Bloom responsible for availability. The company also sells into microgrids, where a site uses its own generation as the primary supply rather than as backup.",
      "The manufacturing base is in the United States, and the fuel cell stacks are the expensive, technically difficult part. The company is small relative to its revenue, 1,524 people producing $3.81B, which says most of the cost of goods is materials and manufacturing rather than labour."
    ],
    "bullets": [
      {
        "title": "Energy Server",
        "detail": "Modular solid oxide fuel cell generators. Sold as equipment or as power under a service arrangement."
      },
      {
        "title": "Service and maintenance",
        "detail": "Ongoing support for installed units. Recurring revenue that grows with the installed base rather than with new orders."
      },
      {
        "title": "Data-centre power",
        "detail": "On-site generation for campuses that need electricity before the grid can deliver it. The fastest-growing use case."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The revenue model has two parts. Equipment sales are recognised when a unit is delivered and accepted, at a gross margin of 32.5%. Service arrangements run for years and generate revenue per kilowatt-hour or per month, with a cost structure that is mostly field engineers and replacement stacks.",
      "The unit economics depend on the installed cost per kilowatt against the cost of grid power in that location, and on how long the stacks last before they need replacing. A fuel cell that runs continuously wears out, so the service contract is not a free annuity: it carries an obligation to replace the expensive part of the machine. That is why the gross margin is 32.5% rather than the 50% or more that a pure equipment vendor might earn.",
      "The operating leverage is now visible. Revenue went from $396.3M in Q2 FY25 to $1.23B in Q3 FY26, and the operating margin went from negative 0.9% to 18.3%. The factory, the engineering and the field organisation were already in place; the additional revenue carried most of its gross profit to the operating line. That is the same mechanism that produced the losses in the other direction when revenue was $1.27B in FY2023."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 18.4% a year across the fiscal years in the dataset, and the latest quarter changed +139.8% year over year. Third-party estimates for the current fiscal year point to $4.5B of revenue and $3.27 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 14.9% and return on invested capital of n/a are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 14.9%, the net margin is 28.1% and diluted EPS is $1.64. The latest quarter's operating margin was 18.3%.",
      "Return on equity is 54.6%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $1.2B, an operating margin of 18.3% and a net margin of 20.2%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $436.7M, a 11.5% margin. The balance sheet carries $2.5B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $436.7M over the last twelve months and net debt was -$2.5B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 47.8x trailing earnings and 78.5x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $283.85; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "26 analysts contribute to the third-party consensus. The mean target is $283.85, with a range of $102.00 to $380.00.",
      "Current-year estimates call for $4.5B of revenue and $3.27 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 26 analysts with a mean target of $283.85; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Bloom's risks are execution at scale, the cost of the service obligation, and a valuation that has already priced several years of success.",
    "items": [
      {
        "title": "Service obligation",
        "severity": "High",
        "detail": "Fuel cell stacks wear out. A service contract sold with the equipment is a multi-year cost obligation that may not be fully reflected in the year of sale.",
        "watch": "Gross margin on service revenue and the disclosure of warranty and service liabilities."
      },
      {
        "title": "Valuation",
        "severity": "High",
        "detail": "78.4x EV/EBITDA and 12.8x sales leave little room for a growth disappointment, and the earnings base is only a year old.",
        "watch": "The gap between trailing EBITDA and the consensus for next year."
      },
      {
        "title": "Dependence on grid delays",
        "severity": "Medium",
        "detail": "The product's advantage is speed relative to a utility connection. Faster interconnection or cheaper grid power reduces the premium customers will pay.",
        "watch": "Interconnection timelines in the markets where Bloom sells and the pricing relative to grid power."
      },
      {
        "title": "Fuel and permitting",
        "severity": "Medium",
        "detail": "The units need a gas supply and a permit to operate on site. Either can delay a project that was sold on speed.",
        "watch": "Project conversion timelines and any regulatory change to on-site generation."
      },
      {
        "title": "Reported profit versus operating profit",
        "severity": "Medium",
        "detail": "A 28.1% net margin against a 14.9% operating margin means non-operating items are a large part of reported earnings.",
        "watch": "The reconciliation between operating income and net income each quarter."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "The measure that reflects the manufacturing and service business rather than the reported net figure."
      },
      {
        "title": "Free cash flow",
        "detail": "One year of positive cash flow is not a track record. Watch whether it survives a slower order quarter."
      },
      {
        "title": "Installed base",
        "detail": "Service revenue depends on the number of units in the field, not the number sold this quarter."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Bloom Energy sells on-site fuel cell power, mostly to customers who need electricity faster than the grid can provide it. Revenue is $3.81B, up 112.2%, operating margin is 14.9% and free cash flow is $436.7M. After years of losses and cash burn, the business is now funding itself.",
      "The educational point is the difference between a technology that is finally working and a valuation that assumes it keeps working. The operating turnaround is visible in six consecutive quarters of margin improvement. The price is visible in a 78.4x EV/EBITDA multiple that requires the growth to continue for years. Both facts are in the same report.",
      "What is not known is how much of the revenue comes from data centres, how large the future service obligation is relative to the equipment margin, and whether the near-term pause implied by the quarterly estimates is a blip or the start of a slower phase. The AI build-out is a genuine source of demand for on-site power; it is not the only thing that determines whether this business earns its cost of capital."
    ],
    "questions": [
      "What share of revenue comes from data-centre customers rather than industrial and institutional ones?",
      "How much of the service revenue is consumed by stack replacements over the contract life?",
      "What happens to demand if a utility can connect a campus in two years instead of five?",
      "How much of the reported net income comes from operations rather than from below the line?"
    ]
  }
};
