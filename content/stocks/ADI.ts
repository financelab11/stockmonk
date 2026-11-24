import type { StockStory } from "./types";

export const ADI: StockStory = {
  "ticker": "ADI",
  "kicker": "Semiconductors · Analog and mixed-signal",
  "title": "Analog Devices sells the chips that make other machines behave",
  "dek": "The company's revenue falls and rises with the industrial and automotive inventory cycle, not with a consumer product launch. The trailing margin of 35.5% is a recovery number, and the question is how much of it is structural.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $13.9B trailing twelve months, +33.6% year over year.",
    "Profitability: 35.5% operating margin and 29.8% net margin.",
    "Cash: $4.9B free cash flow, a 35.6% margin.",
    "Factor summary: 58/100 average percentile across the factor set."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/6281/000000628125000153/adi-20251101.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000006281&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Analog Devices, Inc. Generated $13.9B of revenue over the last twelve months, +33.6% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q3 FY26, with $4B of revenue and an operating margin of 40.1%. The stock closed at $378.75 on 2026-11-23, giving a market capitalization of $183.5B.",
      "The shares sit 69% of the way up their 52-week range ($229.29 to $445.91). The analysis uses reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "ADI is a Technology business with $13.9B of trailing revenue. The useful question is what the current margin and growth rate imply about the next few years, not whether the last quarter beat a forecast."
  },
  "whatItDoes": {
    "paragraphs": [
      "The catalogue is broad and deliberately unglamorous: amplifiers, data converters, power management, radio-frequency parts, sensors and digital signal processors. Each part is engineered for a narrow job, and the customer chooses it because it meets a specification, not because it is the cheapest option. That is why the company can earn a 65.8% gross margin on components that often sell for a few dollars.",
      "End markets are diversified by design. Industrial automation, instrumentation and healthcare use analog parts in low volumes across many customers. Automotive adds safety, electrification and infotainment systems with long qualification cycles. Communications infrastructure and consumer electronics are smaller and more cyclical. No single end market dominates enough to make the whole company a bet on one product.",
      "Manufacturing is a mix of internal fabs and external foundries. Owning some capacity protects process know-how and supply in tight markets, but it also puts fixed costs on the income statement. When volumes fall, those costs do not. That is the mechanism behind the margin collapse in FY2024 and the recovery since."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue comes from selling parts, not from subscriptions. A design win generates an initial order and then years of follow-on business as the customer's product ships. Because the part is specified into the board, switching suppliers requires a redesign, which is expensive and slow. That is the source of pricing power and of the 65.8% gross margin.",
      "The cost structure is fixed-heavy. Wafer fabrication, test and assembly run at high utilisation when demand is strong, and gross margin expands quickly as volumes rise. In Q3 FY2026, operating margin reached 40.1% against 28.4% in Q3 FY2025 on revenue that grew from $2.88B to $4.02B. Incremental revenue carried an unusually high drop-through.",
      "Below the operating line the company carries $6.80B of net debt, or 1.3x EBITDA, with interest cover of 55.6x. The debt is a legacy of acquisitions and is comfortably serviced, but it means the equity is geared to changes in operating income. Return on invested capital of 9.7% is below return on equity of 12.3%, a gap that usually reflects acquired goodwill sitting in the invested-capital base."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 8.5% a year across the fiscal years in the dataset, and the latest quarter changed +39.6% year over year. Third-party estimates for the current fiscal year point to $18.5B of revenue and $16.54 of EPS.",
      "Growth matters when it produces a return on capital. The operating margin of 35.5% and return on invested capital of 10.2% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Product cycle",
        "detail": "New products and platform transitions create refresh demand and pricing power."
      },
      {
        "title": "Customer expansion",
        "detail": "Land-and-expand selling raises revenue per existing customer and lengthens the relationship."
      },
      {
        "title": "Operating leverage",
        "detail": "Incremental revenue can carry high gross margins once development and sales costs are in place."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 35.5%, the net margin is 29.8% and diluted EPS is $8.42. The latest quarter's operating margin was 40.1%. The quarter shown is the latest reported period in the dataset.",
      "Return on equity is 12.3%. Capital intensity should be measured against the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow after capex over the trailing period was $4.9B, a 35.6% margin. Net debt is $6.8B. The cash figures are trailing twelve-month values unless the section says otherwise.",
      "Cash conversion connects earnings to distributable cash and the capital returned to owners. Net income has outrun free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 44.4x trailing earnings and 35.5x EV/EBITDA. The valuation reflects the growth and margin record described above, not for the past alone.",
      "The attributed third-party mean target is $471.91; that is a consensus figure, not a Stockmonk price target. The peer comparison sets out the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "32 analysts contribute to the third-party consensus. The mean target is $471.91, with a range of $365.00 to $675.00. The consensus is a third-party snapshot and can change without notice.",
      "Current-year estimates call for $18.5B of revenue and $16.54 of EPS. Third-party estimates can change without notice; they are shown for context, not as a recommendation."
    ]
  },
  "risks": {
    "intro": "The risks are cyclical and operational rather than financial. The balance sheet can absorb a downturn; the income statement cannot absorb one without a large margin hit.",
    "items": [
      {
        "title": "Industrial and automotive capex",
        "severity": "High",
        "detail": "The two largest end markets are driven by capital spending and vehicle production. A pause cuts orders faster than the company can adjust fixed costs.",
        "watch": "Order trends, book-to-bill commentary and distributor inventory."
      },
      {
        "title": "Inventory correction",
        "severity": "High",
        "detail": "Customers and distributors hold stock of analog parts. When they stop restocking, revenue falls even if end demand is stable.",
        "watch": "Days of inventory at distributors and the company's own inventory balance."
      },
      {
        "title": "Manufacturing utilisation",
        "severity": "Medium",
        "detail": "Owned fabs carry fixed costs. Low utilisation compresses gross margin quickly, as FY2024 showed.",
        "watch": "Gross margin against revenue and any fab-loading commentary."
      },
      {
        "title": "Acquired goodwill and returns",
        "severity": "Medium",
        "detail": "Return on invested capital of 9.7% sits below return on equity of 12.3%, which points to a large acquired asset base. A write-down would be an accounting event, not a cash one, but it would reset the return profile.",
        "watch": "Goodwill and intangible balances and any impairment disclosure."
      },
      {
        "title": "Design-win competition",
        "severity": "Medium",
        "detail": "Analog parts are sticky once designed in, but the design win itself is contested. Losing a socket costs years of revenue, not one quarter.",
        "watch": "Design-win disclosures and the growth rate of the industrial segment."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "65.8% is the number that separates a pricing-power business from a commodity supplier."
      },
      {
        "title": "Book-to-bill",
        "detail": "Orders relative to shipments turn before revenue does in this industry."
      },
      {
        "title": "Net debt",
        "detail": "$6.80B at 1.3x EBITDA is manageable, but it limits flexibility if another downturn arrives."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Analog Devices is a high-quality component supplier in a cyclical industry. The gross margin and the design-win model are durable advantages. The 35.5% operating margin is not a permanent floor; it is where the company sits in the recovery.",
      "The important distinction is between the business and the cycle. Revenue at $13.88B is above the FY2023 peak, and the latest quarter's 40.1% operating margin is close to the best the company has shown. Both could improve further, and both could fall if industrial customers slow their spending.",
      "The valuation leaves little room for a normal cycle. A reader should decide whether the current earnings power is the right base for a multiple, and what a 20% revenue decline would do to it."
    ],
    "questions": [
      "How much of the 40.1% quarterly operating margin comes from utilisation rather than mix?",
      "What is the inventory position at distributors today?",
      "How much of revenue is exposed to industrial capital spending?",
      "What would a repeat of the FY2024 downturn do to the current multiple?"
    ]
  },
  "narrativeSource": "auto-curated",
  "narrativeUpdatedAt": "2026-11-24"
};
