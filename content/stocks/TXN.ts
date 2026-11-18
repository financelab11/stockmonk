import type { StockStory } from "./types";

export const TXN: StockStory = {
  "ticker": "TXN",
  "kicker": "Semiconductors · Analog and embedded",
  "title": "Texas Instruments spent through the downturn and is now collecting",
  "dek": "Free cash flow fell to $1.35B in FY2024 as capital spending outran demand, then recovered to $7.32B. The 47.5% quarterly operating margin is what the other side of that cycle looks like.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $20.8B trailing twelve months, +20.3% year over year.",
    "Profitability: 40.8% operating margin and 34.3% net margin.",
    "Cash: $7.3B free cash flow, a 35.2% margin.",
    "Scorecard: 69/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/97476/000009747626000059/txn-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000097476&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "TEXAS INSTRUMENTS INC. generated $20.8B of revenue over the last twelve months, +20.3% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q3 FY26, with $6.1B of revenue and an operating margin of 47.5%. The stock closed at $295.86 on 2026-11-17, giving a market capitalization of $270.3B.",
      "The shares sit 79% of the way up their 52-week range ($152.73 to $334.03). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Owning the fab turns a cyclical business into a capital-allocation decision. The question is not whether demand returns, but whether the capacity was built at the right time and the right cost."
  },
  "whatItDoes": {
    "paragraphs": [
      "The analog portfolio covers amplifiers, data converters, power management, interface and motor-drive chips. These are designed into a customer's circuit board and then stay there for the life of the product, which can be a decade in industrial and automotive equipment. The embedded portfolio includes microcontrollers and processors that run the control logic in those same systems.",
      "Customers are industrial equipment makers, automotive suppliers, communications infrastructure providers and consumer device manufacturers. Industrial and automotive are the largest and most durable, because the design cycles are long and the qualification requirements are strict. A part that passes automotive qualification is difficult to replace.",
      "The company employed 2,021 people at the last count. That number is small relative to revenue because manufacturing is capital-intensive rather than labour-intensive: the fabs do the work that headcount would do in a services business. The asset base, not the payroll, is the constraint on growth."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue comes from selling parts. A design win produces an initial order and then years of follow-on business as the customer's product ships. Because the part is specified into the board, switching requires a redesign, which is expensive and slow. That is why gross margin is 60.2% on components that often sell for a few dollars.",
      "The cost structure is fixed-heavy. A fab runs at high utilisation when demand is strong, and each additional wafer carries a small incremental cost. When demand falls, the depreciation continues. That is why operating margin collapsed during the downturn and why it has expanded so sharply in the recovery.",
      "The balance sheet holds $8.14B of net cash, and the company pays a dividend yielding 2.0%. Return on equity is 37.1% and return on invested capital is 60.6%. Those returns are high for a capital-intensive manufacturer, which is the point: the capital is deployed in a business with pricing power and long product lives."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 3.5% a year across the fiscal years in the dataset, and the latest quarter changed +27.7% year over year. Third-party estimates for the current fiscal year point to $22.4B of revenue and $9.06 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 40.8% and return on invested capital of 60.6% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Content per system",
        "detail": "More power management, sensing and control in each new product raises the dollar value of Texas Instruments content."
      },
      {
        "title": "Long design cycles",
        "detail": "Industrial and automotive parts stay in production for years, so today's design wins become tomorrow's recurring revenue."
      },
      {
        "title": "Capacity timing",
        "detail": "New fabs add depreciation before they add revenue. The payoff arrives when utilisation catches up."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 40.8%, the net margin is 34.3% and diluted EPS is $7.71. The latest quarter's operating margin was 47.5%.",
      "Return on equity is 37.1%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $6.1B, an operating margin of 47.5% and a net margin of 40.0%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $7.3B, a 35.2% margin. The balance sheet carries $8.1B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $7.3B over the last twelve months and net debt was -$8.1B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 38.0x trailing earnings and 24.6x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $338.79; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "29 analysts contribute to the third-party consensus. The mean target is $338.79, with a range of $250.00 to $422.00.",
      "Current-year estimates call for $22.4B of revenue and $9.06 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 29 analysts with a mean target of $338.79; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Texas Instruments' risks are cyclical and capital-allocation related. The balance sheet is strong, and the question is whether the capacity was built at the right time for the demand that follows.",
    "items": [
      {
        "title": "Industrial and automotive demand",
        "severity": "High",
        "detail": "The two largest end markets are cyclical. A pause in capital spending or vehicle production reduces orders faster than the fab base can adjust.",
        "watch": "Revenue growth by end market and order trends."
      },
      {
        "title": "Depreciation from new capacity",
        "severity": "High",
        "detail": "New fabs add depreciation before they add revenue. A slow demand recovery would keep gross margin under pressure even with revenue growth.",
        "watch": "Gross margin and depreciation as a share of revenue."
      },
      {
        "title": "Inventory in the channel",
        "severity": "Medium",
        "detail": "Customers and distributors hold stock. When they stop restocking, shipments fall below end demand.",
        "watch": "Days of inventory and distributor commentary."
      },
      {
        "title": "Valuation at a cyclical peak",
        "severity": "Medium",
        "detail": "A 35.6x earnings multiple on recovering earnings leaves little room for a disappointment in the next year's estimate.",
        "watch": "The forward multiple against the consensus growth rate."
      },
      {
        "title": "Competition from fab-lite rivals",
        "severity": "Low",
        "detail": "Analog competitors that outsource manufacturing can price aggressively in commodity parts, though they cannot match the cost structure at scale.",
        "watch": "Gross margin versus peers and pricing commentary."
      }
    ],
    "watchlist": [
      {
        "title": "Free cash flow",
        "detail": "$7.32B is the proof that the capital programme is past its peak spending phase."
      },
      {
        "title": "Gross margin",
        "detail": "60.2% is the number that shows utilisation and pricing at the same time."
      },
      {
        "title": "Capital expenditure",
        "detail": "The pace of spending decides whether free cash flow keeps recovering."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Texas Instruments is a high-quality analog manufacturer that used a downturn to build capacity. The 60.2% gross margin and 40.8% operating margin show the earning power of the model; the free-cash-flow trough shows its cost.",
      "The recovery is now in the numbers: revenue up 20.3%, operating margin at 47.5% in the latest quarter, and free cash flow back above $7B. The valuation already reflects a good deal of that.",
      "The reader should ask whether the current margin is the new normal or the top of a cycle. The answer depends on utilisation, which depends on demand, which is the one variable the company cannot control."
    ],
    "questions": [
      "How much of the margin recovery is utilisation rather than price?",
      "What is the remaining capital commitment on the new fabs?",
      "Are customers restocking or consuming?",
      "What would flat revenue for two years do to the 34.6x free-cash-flow multiple?"
    ]
  }
};
