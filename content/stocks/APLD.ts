import type { StockStory } from "./types";

export const APLD: StockStory = {
  "ticker": "APLD",
  "kicker": "Data-centre development · AI hosting",
  "title": "Applied Digital is a landlord with 55 employees and a $4.5B bill",
  "dek": "Revenue grew 467% and free cash flow was negative $4.46B. Building shells for AI tenants is a real estate business, and it is judged on leases, not on gross margin.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $516M trailing twelve months, +277.4% year over year.",
    "Profitability: -58.9% operating margin and -68.1% net margin.",
    "Cash: -$4.5B free cash flow, a -863.5% margin.",
    "Factor summary: 52/100 average percentile across the factor set."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1144879/000114487926000048/apld-20260531.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001144879&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Applied Digital Corporation generated $516M of revenue over the last twelve months, +277.4% versus the prior year. Growth is tied to AI data-center spending, and the key question is how much of that spending becomes durable recurring demand.",
      "The latest reported quarter was Q1 FY27, with $262.8M of revenue and an operating margin of -23.7%. The stock closed at $13.82 on 2026-11-23, giving a market capitalization of $4.2B.",
      "The shares sit 6% of the way up their 52-week range ($11.31 to $50.73). The analysis uses reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "APLD is a AI Infrastructure & Power business with $516M of trailing revenue. The useful question is what the current margin and growth rate imply about the next few years, not whether the last quarter beat a forecast."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product is a data hall with power, cooling and networking, leased to a customer who installs their own accelerators. In some cases the company provides the equipment as well. The customer is buying time and certainty: a site with an interconnection, a shell that meets the cooling and power density they need, and a contract that fixes the price.",
      "The development process is sequential and slow. A site needs land, a power connection, permits, construction, electrical equipment with long lead times, and commissioning. Each stage can take months, and the revenue only begins when the hall is energised and the tenant takes possession. That is why the income statement lags the capital spending by years rather than quarters.",
      "The competitive position depends on three things: the quality of the sites, the speed of delivery, and the price of the capital used to build. Sites near cheap power with existing interconnection rights are scarce, and that scarcity is the company's main asset. Speed and cost of capital are where it competes with larger developers and with the hyperscalers building for themselves."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue comes from leasing capacity, usually on multi-year contracts with escalation clauses. A gross margin of 66.4% is the spread between the rent and the direct cost of operating the building: power, cooling, maintenance and site staff. That is a good margin for a landlord, and it is the reason the model is attractive when the building is full.",
      "The costs below the gross line are what turn the margin negative. Depreciation on a newly built hall is large and starts immediately. Development and general expenses run ahead of revenue. Share-based compensation is a real cost in a company that pays employees partly in equity. And in some periods there are impairments and write-downs on assets that did not perform as planned.",
      "The financing is the third layer. The company has used equity as well as debt, which is why net debt is $3.43B rather than a larger one. That choice protects the balance sheet in a delay and dilutes existing holders in a rally. A reader should treat the share count as an input to the valuation, not an afterthought."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 190.8% a year across the fiscal years in the dataset, and the latest quarter changed +224.7% year over year. Third-party estimates for the current fiscal year point to $957.5M of revenue and -$1.06 of EPS.",
      "Growth matters when it produces a return on capital. The operating margin of -58.9% and return on invested capital of -3.0% are the filters to watch as revenue scales."
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
      "The trailing operating margin is -58.9%, the net margin is -68.1% and diluted EPS is -$1.65. The latest quarter's operating margin was -23.7%. The quarter shown is the latest reported period in the dataset.",
      "Return on equity is -21.9%. Capital intensity should be measured against the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin."
    ]
  },
  "cash": {
    "paragraphs": [
      "FCF over the trailing period was -$4.5B, a -863.5% margin. Net debt is $3.4B. The cash figures are trailing twelve-month values unless the section says otherwise.",
      "Cash conversion connects earnings to distributable cash and the capital returned to owners. Net income has outrun free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade with no meaningful trailing earnings multiple and no meaningful EV/EBITDA multiple. The valuation reflects the growth and margin record described above, not for the past alone.",
      "The attributed third-party mean target is $54.31; that is a consensus figure, not a Stockmonk price target. The peer comparison sets out the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "16 analysts contribute to the third-party consensus. The mean target is $54.31, with a range of $22.00 to $93.00. The consensus is a third-party snapshot and can change without notice.",
      "Current-year estimates call for $957.5M of revenue and -$1.06 of EPS. Third-party estimates can change without notice; they are shown for context, not as a recommendation."
    ]
  },
  "risks": {
    "intro": "Applied Digital's risks are delivery, tenant concentration, dilution and the gap between a good gross margin and a negative operating margin.",
    "items": [
      {
        "title": "Construction and energisation delays",
        "severity": "High",
        "detail": "Revenue begins when a hall is powered and occupied. A delay in equipment or interconnection pushes revenue past the period in which the cost was incurred.",
        "watch": "Capacity under construction, megawatts energised and the leasing schedule."
      },
      {
        "title": "Tenant concentration",
        "severity": "High",
        "detail": "A small number of large tenants can account for most of the leased capacity. One renegotiation changes the revenue base.",
        "watch": "Disclosure of revenue from the largest tenants and the remaining lease term."
      },
      {
        "title": "Dilution",
        "severity": "High",
        "detail": "The build has been funded with equity. Every capital raise solves the funding problem and reduces the claim of existing holders.",
        "watch": "Share count growth and the terms of any new issuance."
      },
      {
        "title": "Depreciation on new assets",
        "severity": "Medium",
        "detail": "A 66.4% gross margin turns into a negative operating margin once depreciation on a new hall is charged. The margin only works at high occupancy.",
        "watch": "Occupancy, depreciation as a share of revenue and the operating margin by quarter."
      },
      {
        "title": "Reporting quality",
        "severity": "Medium",
        "detail": "One quarter reports negative revenue and a 132.4% operating margin, which signals a restatement or reclassification.",
        "watch": "Restatements and the note explaining unusual period items."
      }
    ],
    "watchlist": [
      {
        "title": "Megawatts leased",
        "detail": "The unit of account for this business. Revenue follows the megawatts that are contracted and energised."
      },
      {
        "title": "Capital raised",
        "detail": "The pace of issuance relative to the build determines what the existing shares are worth."
      },
      {
        "title": "Operating margin excluding one-offs",
        "detail": "The reported figure includes impairments and charges that obscure the underlying economics."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Applied Digital is a data-centre developer with 55 employees, $774.7M of trailing revenue, a 66.4% gross margin and $3.43B of net debt. It spent $4.46B more than it earned to build capacity for AI tenants, and it funded that with equity and debt.",
      "The educational point is that a landlord's income statement is a poor guide to a landlord's business during the construction phase. The gross margin describes a leased building. The operating margin describes a building that has been depreciated but not yet fully occupied. Neither describes the value of the site, the power connection or the lease, which is where the economics actually sit.",
      "What is not known is the contracted revenue from signed leases, the cost and schedule of the capacity under construction, and how much dilution is still to come. The AI build-out is why anyone would build these halls; it does not tell a reader whether this developer will finish them on budget or at a price that rewards the shareholders who funded it."
    ],
    "questions": [
      "How many megawatts are leased, and how many are energised and billing?",
      "What is the remaining construction cost, and how will it be funded?",
      "What share of revenue comes from the largest tenants?",
      "How much has the share count grown over the past three years?"
    ]
  },
  "narrativeSource": "auto-curated",
  "narrativeUpdatedAt": "2026-11-24"
};
