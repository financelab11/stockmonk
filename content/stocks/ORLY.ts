import type { StockStory } from "./types";

export const ORLY: StockStory = {
  "ticker": "ORLY",
  "kicker": "Retail · Aftermarket auto parts",
  "title": "O'Reilly sells the parts that keep ageing cars on the road",
  "dek": "A 51.8% gross margin and a 19.8% operating margin come from stocking the right part near the repair shop. Free cash flow has fallen even as revenue grew.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $19B trailing twelve months, +8.7% year over year.",
    "Profitability: 19.8% operating margin and 14.3% net margin.",
    "Cash: $2.1B free cash flow, a 11.1% margin.",
    "Scorecard: 43/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/898173/000089817326000009/orly-20251231x10k.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000898173&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "O REILLY AUTOMOTIVE INC. generated $19B of revenue over the last twelve months, +8.7% versus the prior year. The business depends on traffic, basket size and the cost of serving the next customer.",
      "The latest reported quarter was Q3 FY26, with $5.1B of revenue and an operating margin of 21.4%. The stock closed at $92.69 on 2026-11-17, giving a market capitalization of $74.3B.",
      "The shares sit 51% of the way up their 52-week range ($82.59 to $102.46). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A repair shop cannot finish the job without the part. Whoever has it on the shelf, within driving distance, wins the sale."
  },
  "whatItDoes": {
    "paragraphs": [
      "Stores serve two counters. The retail counter sells to do-it-yourself customers on evenings and weekends; the professional counter sells to repair shops that order by phone or online and expect delivery within hours. Behind the stores sits a network of distribution centres and hub stores that hold slow-moving parts so a local store can promise same-day availability.",
      "That availability is the competitive advantage. A shop with a car on the lift cannot wait two days for a sensor, so it calls the supplier most likely to have it. Carrying that breadth is expensive in inventory but cheap in almost every other respect, which is why the business earns a high gross margin and a modest return on assets. The company employs 70,179 people and sells mostly in the United States."
    ],
    "bullets": [
      {
        "title": "Professional service",
        "detail": "Repair shops buying for jobs in progress. Repeat, high-volume and intolerant of stockouts."
      },
      {
        "title": "Do-it-yourself",
        "detail": "Owners buying parts for their own cars. More seasonal and more sensitive to price."
      },
      {
        "title": "Distribution",
        "detail": "Distribution centres and hub stores that let local stores offer same-day availability on slow-moving parts."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Parts are bought from manufacturers and sold at a 51.8% gross margin. Store labour, delivery, distribution and advertising take about thirty-two points, leaving a 19.8% operating margin. The high gross margin is not a sign of pricing power over customers; it pays for the cost of holding thousands of part numbers close to the buyer.",
      "The unit economics of a store are driven by local availability. A store that has the part gets the sale and the next call. A store that does not loses the sale and teaches the shop to call someone else. Adding a part number to the network costs inventory, not buildings, which is why the model scales without heavy capital spending.",
      "The main investment is working capital. Inventory is the asset that makes the service possible, and it grows with the store count. That is also why the company can carry little net debt while buying back stock: the capital is tied up in parts, not property."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 9.8% a year across the fiscal years in the dataset, and the latest quarter changed +8.8% year over year. Third-party estimates for the current fiscal year point to $19.3B of revenue and $3.32 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 19.8% and return on invested capital of n/a are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 19.8%, the net margin is 14.3% and diluted EPS is $3.27. The latest quarter's operating margin was 21.4%.",
      "Return on equity is -129.5%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $5.1B, an operating margin of 21.4% and a net margin of 15.3%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $2.1B, a 11.1% margin. The balance sheet carries $194.4M of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $2.1B over the last twelve months and net debt was -$194.4M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 27.4x trailing earnings and 17.2x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $106.41; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "27 analysts contribute to the third-party consensus. The mean target is $106.41, with a range of $91.00 to $122.00.",
      "Current-year estimates call for $19.3B of revenue and $3.32 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 27 analysts with a mean target of $106.41; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "O'Reilly's risks are demand, inventory and the cost of holding parts. The balance sheet is unlevered, so the pressure shows up in cash flow rather than in solvency.",
    "items": [
      {
        "title": "Vehicle mix and electrification",
        "severity": "High",
        "detail": "Battery electric cars have fewer consumable parts. A faster shift reduces the parts available to sell per vehicle over the long run.",
        "watch": "The pace of fleet electrification and the mix of parts categories."
      },
      {
        "title": "Inventory availability",
        "severity": "High",
        "detail": "The model depends on having the part. A stockout does not just lose a sale; it teaches a shop to call a competitor next time.",
        "watch": "Inventory per store and the fill rate on professional orders."
      },
      {
        "title": "Wage and distribution costs",
        "severity": "Medium",
        "detail": "Store labour and delivery are the largest operating costs, and they rise faster than parts prices in tight labour markets.",
        "watch": "Operating expense as a share of sales."
      },
      {
        "title": "Store growth execution",
        "severity": "Medium",
        "detail": "New stores add revenue but also inventory and distribution cost. A weaker site earns less than the capital it consumes.",
        "watch": "New store productivity and same-store sales."
      },
      {
        "title": "Leverage in the capital structure",
        "severity": "Medium",
        "detail": "Buybacks have left equity negative and cash roughly neutral. There is little cushion if cash flow falls further.",
        "watch": "Net debt, the buyback pace and free cash flow."
      }
    ],
    "watchlist": [
      {
        "title": "Same-store sales",
        "detail": "The test of whether growth comes from new stores or from the existing base."
      },
      {
        "title": "Gross margin",
        "detail": "Where parts inflation and promotional pressure appear first."
      },
      {
        "title": "Inventory turns",
        "detail": "The cost of availability; slower turns would tie up more cash in parts."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "O'Reilly is an aftermarket parts retailer with $19.0B of revenue, a 19.8% operating margin and $2.1B of free cash flow. It carries essentially no net debt and has bought back enough stock to make book equity negative.",
      "The business is defensive because cars wear out, and it earns a high gross margin because availability matters more than price to a repair shop. The tension is that free cash flow has fallen while revenue grew, as inventory and capital spending absorbed the profit.",
      "The valuation assumes the cash flow recovers. At 34.3x free cash flow, the shares are not being priced for a retailer with a deteriorating cash conversion trend."
    ],
    "questions": [
      "Why did free cash flow fall while revenue grew?",
      "Is the professional business growing faster than the retail counter?",
      "What share of revenue comes from professional repair shops?",
      "How does the parts mix change as the vehicle fleet electrifies?"
    ]
  }
};
