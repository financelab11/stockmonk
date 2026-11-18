import type { StockStory } from "./types";

export const CRDO: StockStory = {
  "ticker": "CRDO",
  "kicker": "Semiconductors · AI connectivity",
  "title": "Credo sells the copper that keeps AI racks talking",
  "dek": "Revenue grew 165% on active electrical cables and signal-retiming chips. The question is whether Credo owns a socket inside the rack or is riding a single product cycle.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $1.6B trailing twelve months, +165.1% year over year.",
    "Profitability: 31.7% operating margin and 23.2% net margin.",
    "Cash: $438.6M free cash flow, a 27.6% margin.",
    "Scorecard: 71/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1807794/000162828026043303/crdo-20260502.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001807794&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Credo Technology Group Holding Ltd. generated $1.6B of revenue over the last twelve months, +165.1% versus the prior year. Growth is tied to AI data-center spending, and the key question is how much of that spending becomes durable recurring demand.",
      "The latest reported quarter was Q1 FY27, with $479M of revenue and an operating margin of 25.2%. The stock closed at $123.95 on 2026-11-17, giving a market capitalization of $23.3B.",
      "The shares sit 17% of the way up their 52-week range ($86.49 to $308.67). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Connectivity is priced per lane of bandwidth. Every time the industry doubles the speed of a lane, the part that cleans up the signal has to be redesigned, and the price of the old design falls away."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core product is a cable that carries an electrical signal further than copper normally allows. Inside a rack, copper is cheaper and uses less power than optics, but at high speeds the signal degrades over distance. Credo puts a small chip at each end of the cable to retime and reshape the signal, which extends copper's useful reach by a generation or two. The same signal-processing technology is sold as standalone chips and as building blocks that other companies license.",
      "That means Credo sits on a trade-off its customers make every generation: optical links cost more and burn more power, copper links are cheaper but run out of reach. As racks get denser and accelerators get faster, the crossover point moves, and the amount of signal conditioning needed at each end rises. The company employs 2,022 people and reports a single consolidated revenue line, so the mix between cables, chips and licences is not visible in the financials."
    ],
    "bullets": [
      {
        "title": "Active electrical cables",
        "detail": "Copper cables with retiming chips at both ends. The largest product line and the one most exposed to rack architecture."
      },
      {
        "title": "Integrated circuits",
        "detail": "Retimers, DSPs and SerDes chiplets sold to equipment makers who want the signal conditioning without the cable."
      },
      {
        "title": "IP licensing",
        "detail": "SerDes designs licensed to other semiconductor companies. Small revenue, high margin, and a signal of technical standing."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Credo sells physical product, priced per cable or per chip. Gross margin was 67.1%, which is high for a hardware company and reflects the fact that the customer is buying a working link rather than a commodity connector. The licence revenue is smaller but carries almost no cost of goods, so it lifts the blended margin.",
      "The cost structure is fabless. Wafers come from foundries, assembly and test are outsourced, and the company's own spending goes into design, applications engineering and customer qualification. That is why the operating leverage has been so violent. FY2024 revenue of $193.0M produced a $37.1M operating loss; FY2026 revenue of $1.34B produced $445.0M of operating income. The design work was largely paid for before the volume arrived.",
      "The mechanism cuts both ways, and the latest quarter showed it. Revenue rose to $479.0M in Q1 FY27 from $437.0M in Q4 FY26, but the operating margin fell to 25.2% from 35.7%. A richer mix of lower-margin product, ramp costs or price concessions can undo a lot of operating leverage when the base is already large."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 70.8% a year across the fiscal years in the dataset, and the latest quarter changed +114.7% year over year. Third-party estimates for the current fiscal year point to $2.5B of revenue and $6.31 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 31.7% and return on invested capital of 72.9% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Speed transitions",
        "detail": "Faster lanes shorten copper's reach, which raises the value of the chip at each end of the cable."
      },
      {
        "title": "Rack density",
        "detail": "More accelerators per rack means more links per rack. Link count grows faster than node count."
      },
      {
        "title": "Customer addition",
        "detail": "Each new hyperscaler or equipment vendor that qualifies the product adds a step-change in volume."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 31.7%, the net margin is 23.2% and diluted EPS is $2.82. The latest quarter's operating margin was 25.2%.",
      "Return on equity is 20.0%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q1 FY27: revenue of $479M, an operating margin of 25.2% and a net margin of 27.0%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $438.6M, a 27.6% margin. The balance sheet carries $1.3B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $438.6M over the last twelve months and net debt was -$1.3B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 63.1x trailing earnings and 40.5x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $277.47; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "19 analysts contribute to the third-party consensus. The mean target is $277.47, with a range of $175.00 to $315.00.",
      "Current-year estimates call for $2.5B of revenue and $6.31 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 19 analysts with a mean target of $277.47; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Credo's balance sheet is strong and its margins are real. The risks are about concentration, architecture and the price being paid for both.",
    "items": [
      {
        "title": "Customer concentration",
        "severity": "High",
        "detail": "Hyperscale buyers place very large orders and can move a generation of business to another supplier between programmes. A single design loss is a revenue event, not a share shift.",
        "watch": "Customer concentration disclosures and the revenue split between the largest buyers."
      },
      {
        "title": "Copper to optics substitution",
        "severity": "High",
        "detail": "If optical links get cheap and efficient enough to replace copper inside the rack, the retiming content per link falls. Credo sells into the copper side of that trade-off.",
        "watch": "Rack architecture disclosures from accelerator vendors and the optical content per rack."
      },
      {
        "title": "Margin on the next ramp",
        "severity": "Medium",
        "detail": "Operating margin fell from 35.7% to 25.2% in one quarter while revenue grew. Mix and pricing can compress the margin faster than volume lifts it.",
        "watch": "Gross margin guidance and the split between cable and chip revenue."
      },
      {
        "title": "Competition from larger suppliers",
        "severity": "Medium",
        "detail": "Broadline connectivity and semiconductor vendors can bundle retimers with switching silicon, and accelerator designers can absorb the function into their own package.",
        "watch": "Design wins at new customers and whether incumbents bundle the function for free."
      },
      {
        "title": "Estimate concentration",
        "severity": "Medium",
        "detail": "The consensus needs a second-half ramp that is roughly 40% above the first-quarter revenue run rate. A one-quarter slip would break the annual number.",
        "watch": "Bookings and the revenue implied by the next two quarterly estimates."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin by quarter",
        "detail": "The clearest test of whether the FY2026 margin was a plateau or a peak."
      },
      {
        "title": "Revenue per rack generation",
        "detail": "Content growth is the difference between a component supplier and a platform supplier."
      },
      {
        "title": "Customer count",
        "detail": "A broader customer base would make the concentration risk smaller without changing the growth rate."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Credo is a fabless connectivity supplier that turned a $193.0M revenue base into $1.59B in two years, funded the expansion internally, and now holds $1.30B of net cash. The gross margin of 67.1% says the product is not a commodity. The 10-point fall in operating margin in the latest quarter says the pricing and mix are not stable either.",
      "The educational point is the difference between a product cycle and a socket. A product cycle produces spectacular growth while the architecture favours the product, then hands the value to whoever wins the next generation. A socket produces durable content per system. The financial statements cannot tell you which one Credo has; the design-win disclosures and the margin trend can.",
      "What is not known is how much of the $438.6M of free cash flow is repeatable, how concentrated the customer base really is, and whether the second-half ramp in the consensus reflects orders already placed or expectations. Those three answers decide whether 60.2x trailing earnings is expensive or merely early."
    ],
    "questions": [
      "How many customers account for most of the revenue, and how long are their qualification cycles?",
      "Does the next rack generation increase or decrease the dollar content of copper connectivity?",
      "Why did operating margin fall ten points in a quarter of 10% revenue growth?",
      "How much of the FY2027 consensus depends on customers that have already placed orders?"
    ]
  }
};
