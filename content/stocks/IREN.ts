import type { StockStory } from "./types";

export const IREN: StockStory = {
  "ticker": "IREN",
  "kicker": "Bitcoin mining · Data-centre capacity",
  "title": "IREN is converting a mining business into a landlord",
  "dek": "A 72.2% gross margin and a negative 173.4% operating margin in the same year. The gap is what happens when a commodity producer borrows to become an infrastructure owner.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $666.7M trailing twelve months, +46.4% year over year.",
    "Profitability: -173.4% operating margin and -202.5% net margin.",
    "Cash: -$2.5B free cash flow, a -369.2% margin.",
    "Factor summary: 43/100 average percentile across the factor set."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1878848/000187884826000052/iren-20260630.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001878848&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "IREN Limited generated $666.7M of revenue over the last twelve months, +46.4% versus the prior year. Growth is tied to AI data-center spending, and the key question is how much of that spending becomes durable recurring demand.",
      "The latest reported quarter was Q1 FY27, with $200M of revenue and an operating margin of -93.0%. The stock closed at $14.64 on 2026-11-23, giving a market capitalization of $6.2B.",
      "The shares sit 5% of the way up their 52-week range ($11.75 to $70.71). The analysis uses reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "IREN is a AI Infrastructure & Power business with $666.7M of trailing revenue. The useful question is what the current margin and growth rate imply about the next few years, not whether the last quarter beat a forecast."
  },
  "whatItDoes": {
    "paragraphs": [
      "The operating asset is data-centre capacity. Land, a power connection, buildings, cooling and electrical distribution are the expensive parts, and they are shared between mining and AI hosting. A mining rig and an accelerator rack need the same things: a lot of electricity, a way to remove the heat, and a network connection.",
      "The mining operation is the incumbent business. It generates revenue by producing bitcoin, which means the revenue line moves with the coin price and the network difficulty rather than with a customer contract. That is why the quarterly revenue series is erratic: mining economics change with the market, and the reported periods include reclassifications and one-off items that make a simple trend hard to read.",
      "The AI hosting operation is the new business. Capacity is rented to customers who need accelerators, usually on multi-year terms. The attraction for the customer is speed and price; the attraction for IREN is contracted revenue that does not move with a commodity price. The cost is that the build requires capital before the first invoice."
    ],
    "bullets": [
      {
        "title": "Mining",
        "detail": "Bitcoin production at owned sites. Revenue follows the coin price and network difficulty, and cost follows the power price."
      },
      {
        "title": "AI hosting",
        "detail": "Accelerator capacity rented on contract. The strategic destination and the reason for the capital spending."
      },
      {
        "title": "Power and sites",
        "detail": "Land, interconnection and cooling shared by both businesses. The scarce asset that makes the conversion possible."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Mining revenue is the coin output multiplied by the market price. The cost is dominated by electricity, which is why miners locate where power is cheap and why a change in the power price or the network difficulty can wipe out the margin. Gross margin of 72.2% is the spread between the coins produced and the direct cost of producing them, before the depreciation of the rigs.",
      "Hosting revenue is a rental rate per unit of capacity per unit of time. The cost is power, cooling, maintenance and depreciation on the building and the equipment. A hosting contract has a known price and a known term, which makes the revenue more predictable than mining, but the capital required to serve it is much larger per dollar of revenue.",
      "The operating margin is where the two businesses meet their overheads. Negative 173.4% means the costs below the gross line came to more than twice the revenue line itself. That cannot be field staff at 102 employees. It is depreciation, impairments, share-based payments and fair-value movements on financial instruments, and the quarterly record shows how violent those can be: one quarter reported an operating margin of negative 1,085.7% on $7.0M of revenue."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 110.8% a year across the fiscal years in the dataset, and the latest quarter changed +2757.1% year over year. Third-party estimates for the current fiscal year point to $2.4B of revenue and -$1.66 of EPS.",
      "Growth matters when it produces a return on capital. The operating margin of -173.4% and return on invested capital of -6.1% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "AI cluster build-out",
        "detail": "Compute, networking, optics and power equipment all scale with cluster size."
      },
      {
        "title": "Customer expansion",
        "detail": "Hyperscalers and neoclouds are adding capacity faster than traditional IT budgets."
      },
      {
        "title": "Product content",
        "detail": "More content per system can grow revenue faster than the underlying unit market."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -173.4%, the net margin is -202.5% and diluted EPS is -$4.08. The latest quarter's operating margin was -93.0%. The quarter shown is the latest reported period in the dataset.",
      "Return on equity is -26.4%. Capital intensity should be measured against the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin."
    ]
  },
  "cash": {
    "paragraphs": [
      "Cash generation over the trailing period was -$2.5B, a -369.2% margin. Net debt is $6.4B. The cash figures are trailing twelve-month values unless the section says otherwise.",
      "Cash conversion connects earnings to distributable cash and the capital returned to owners. Net income has outrun free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade with no meaningful trailing earnings multiple and no meaningful EV/EBITDA multiple. The valuation reflects the growth and margin record described above, not for the past alone.",
      "The attributed third-party mean target is $52.74; that is a consensus figure, not a Stockmonk price target. The peer comparison sets out the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "19 analysts contribute to the third-party consensus. The mean target is $52.74, with a range of $23.00 to $80.00. The consensus is a third-party snapshot and can change without notice.",
      "Current-year estimates call for $2.4B of revenue and -$1.66 of EPS. Third-party estimates can change without notice; they are shown for context, not as a recommendation."
    ]
  },
  "risks": {
    "intro": "IREN's risks are leverage, execution, commodity exposure and a set of accounts that are hard to read while the business is being rebuilt.",
    "items": [
      {
        "title": "Leverage",
        "severity": "High",
        "detail": "$6.38B of net debt against $707.0M of FY2026 revenue. Interest has to be paid whether or not the hosting contracts arrive on schedule.",
        "watch": "Net debt, interest expense and the maturity profile of the borrowings."
      },
      {
        "title": "Negative returns on capital",
        "severity": "High",
        "detail": "Return on invested capital is negative 7.9%. The asset base is not yet earning what it cost, and the build is still growing it.",
        "watch": "Return on invested capital as capacity comes online, and the operating margin excluding one-off charges."
      },
      {
        "title": "Commodity revenue",
        "severity": "High",
        "detail": "Mining revenue moves with the coin price and network difficulty. A fall in either reduces the cash available to service debt.",
        "watch": "The split between mining and hosting revenue, and the cost of production per coin."
      },
      {
        "title": "Execution on the conversion",
        "severity": "Medium",
        "detail": "Converting a mining site to accelerator hosting requires power, cooling and networking upgrades. Delays push revenue past the interest payments.",
        "watch": "Contract announcements, delivery schedules and the capacity actually energised."
      },
      {
        "title": "Reporting clarity",
        "severity": "Medium",
        "detail": "Quarterly revenue ranges from $7.0M to $200.0M and operating margins from negative 63.0% to negative 1,085.7%, which makes trends hard to establish.",
        "watch": "Restatements and the disclosure of one-off items in each period."
      }
    ],
    "watchlist": [
      {
        "title": "Net debt",
        "detail": "The number that decides whether the conversion is a strategy or a refinancing risk."
      },
      {
        "title": "Hosting contracts",
        "detail": "Contracted revenue is what turns a commodity producer into an infrastructure owner."
      },
      {
        "title": "Operating margin excluding charges",
        "detail": "The reported figure is too volatile to use. The underlying margin is the one that matters."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "IREN is a bitcoin miner with 102 employees, $666.7M of trailing revenue, a 72.2% gross margin and $6.38B of net debt. It is spending heavily to convert its power and sites into AI hosting capacity, and the financial statements currently show the cost of that conversion rather than the benefit.",
      "The educational point is that a high gross margin says very little about a capital-intensive business. The gross margin describes the spread on a unit of production. The operating margin, the return on invested capital and the free cash flow describe whether the capital employed to produce those units is earning its keep. Here the first is attractive and the other three are negative, which is what a build-out looks like before it is finished.",
      "What is not known is the contracted revenue from AI hosting, the cost and maturity of the debt, and the true operating margin once one-off items are removed. The AI build-out is the reason for the conversion; it does not reduce the interest bill, and it does not make the timing risk disappear."
    ],
    "questions": [
      "How much of the $6.38B of net debt matures in the next two years?",
      "What contracted hosting revenue is already signed, and at what rate per unit of capacity?",
      "What is the operating margin once impairments and fair-value movements are excluded?",
      "How much of revenue is still mining rather than hosting?"
    ]
  },
  "narrativeSource": "auto-curated",
  "narrativeUpdatedAt": "2026-11-24"
};
