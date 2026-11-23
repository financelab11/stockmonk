import type { StockStory } from "./types";

export const NBIS: StockStory = {
  "ticker": "NBIS",
  "kicker": "AI cloud · GPU capacity",
  "title": "Nebius is buying revenue with capital and the bill arrives later",
  "dek": "Revenue grew 479% and free cash flow was negative $3.68B. In a business that rents out GPUs, growth is a purchase, and the depreciation comes after.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $529.8M trailing twelve months, +479.0% year over year.",
    "Profitability: -115.5% operating margin and 15.6% net margin.",
    "Cash: -$3.7B free cash flow, a -694.8% margin.",
    "Scorecard: 36/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1513845/000110465926052948/nbis-20251231x20f.htm",
  "irUrl": "https://nebius.com",
  "bigPicture": {
    "paragraphs": [
      "Nebius Group N.V. generated $529.8M of revenue over the last twelve months, +479.0% versus the prior year. Growth is tied to AI data-center spending, and the key question is how much of that spending becomes durable recurring demand.",
      "The latest reported quarter was not available, with n/a of revenue and an operating margin of n/a. The stock closed at $98.81 on 2026-11-23, giving a market capitalization of $28.9B.",
      "The shares sit 11% of the way up their 52-week range ($73.52 to $299.86). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Renting compute is a straightforward business: buy the machine, rent it out, depreciate it faster than it becomes obsolete. The difficulty is that the buying happens years before the renting pays for it."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core product is GPU capacity delivered as a cloud service. A customer rents accelerators by the hour, usually with storage, networking and the software layer that makes a cluster usable. The appeal is access without procurement: buying accelerators directly requires a relationship with a supplier, a data centre, and the engineering to run it. Renting converts that into an operating expense.",
      "Around the cloud business sit other operations that the financial data does not separate. The consolidated revenue line is the only figure available, so a reader cannot see how much comes from renting compute, how much from services, and how much from businesses that are not really AI infrastructure at all. That is a significant limitation for a company whose investment case rests entirely on one of them.",
      "The physical footprint is the real product. Land, power, cooling, networking and buildings take years to assemble, and the accelerators inside them have a useful life measured in a few years. The company's competitive position therefore depends on three things it controls and one it does not: the cost of capital, the price it pays for accelerators, the utilisation it achieves, and the price its larger competitors decide to charge."
    ],
    "bullets": [
      {
        "title": "GPU cloud",
        "detail": "Accelerator capacity rented by the hour, with storage and networking. The revenue line the investment case rests on."
      },
      {
        "title": "Managed AI services",
        "detail": "Tooling that helps customers train and run models on the rented capacity. Improves retention and revenue per customer."
      },
      {
        "title": "Adjacent businesses",
        "detail": "Operations outside the cloud that the consolidated accounts do not break out. A source of opacity in the revenue mix."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is metered: customers pay for accelerator hours, storage and data transfer. The gross margin of 74.3% is the difference between the rental rate and the running cost of the facility, principally power, cooling, rack space and the depreciation of the equipment. It looks high because depreciation on the machines is often charged over a longer period than the market's useful life for them.",
      "The cost structure below the gross line is where the money goes. Operating margin is negative 0.2%, which means the company consumes essentially all of its 74.3% gross margin on sales, engineering, administration and whatever impairments the year carries. That is a lot for a business with $1.36B of revenue, and it is the reason the loss is not simply a depreciation artefact.",
      "The financing is the third layer. Building capacity requires capital before the revenue arrives, which is why free cash flow is so deeply negative. If the capital is equity, the cost is dilution. If it is debt, the cost is interest, which sits below the operating line and shows up in the net margin. The 3.1% trailing net margin against a negative operating margin tells a reader that something outside operations contributed to the reported profit."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at -16.3% a year across the fiscal years in the dataset, and the latest quarter changed not available year over year. Third-party estimates for the current fiscal year point to $3.2B of revenue and -$0.29 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of -115.5% and return on invested capital of -7.3% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -115.5%, the net margin is 15.6% and diluted EPS is $0.33. The latest quarter's operating margin was not available.",
      "Return on equity is 1.8%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was the latest period: revenue of $529.8M, an operating margin of -115.5% and a net margin of 15.6%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$3.7B, a -694.8% margin. Net debt is $425.1M.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was -$3.7B over the last twelve months and net debt was $425.1M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 350.8x trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $234.50; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "20 analysts contribute to the third-party consensus. The mean target is $234.50, with a range of $84.00 to $395.00.",
      "Current-year estimates call for $3.2B of revenue and -$0.29 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 20 analysts with a mean target of $234.5; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Nebius is a capital allocation story as much as an operating one. The risks are financing, depreciation, competition from larger balance sheets, and a revenue mix the accounts do not reveal.",
    "items": [
      {
        "title": "Funding the build",
        "severity": "High",
        "detail": "Negative $3.68B of free cash flow against $1.36B of revenue. The company must keep raising capital to keep growing, on whatever terms are available.",
        "watch": "The split between debt and equity raised, and the cost of each."
      },
      {
        "title": "Depreciation and useful life",
        "severity": "High",
        "detail": "A 74.3% gross margin depends on how quickly the equipment is written down. A shorter assumed life would raise the reported cost of revenue immediately.",
        "watch": "The depreciation schedule for accelerators and any change to useful-life assumptions."
      },
      {
        "title": "Competition from larger clouds",
        "severity": "High",
        "detail": "The largest cloud providers can price capacity to defend share and fund losses from other businesses. A price war would hit a pure-play renter hardest.",
        "watch": "Rental pricing per accelerator hour and utilisation rates."
      },
      {
        "title": "Revenue mix opacity",
        "severity": "Medium",
        "detail": "The consolidated revenue line does not separate the cloud from adjacent businesses, so the quality of the growth cannot be assessed.",
        "watch": "Any future segment disclosure and the gross margin attached to each part."
      },
      {
        "title": "History that does not compare",
        "severity": "Medium",
        "detail": "The FY2021 to FY2023 figures describe a restructured business. Anyone using the multi-year growth rate is measuring the wrong thing.",
        "watch": "The FY2024 base and any restatement of prior periods."
      }
    ],
    "watchlist": [
      {
        "title": "Capital raised",
        "detail": "The pace and terms of new funding decide how much of the future the current shares own."
      },
      {
        "title": "Gross margin",
        "detail": "A 74.3% gross margin is the buffer that has to cover everything else. A decline would be serious."
      },
      {
        "title": "Utilisation",
        "detail": "Revenue per unit of installed capacity is the difference between a rental business and an empty building."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Nebius rents out AI computing capacity and is growing extremely fast from a small base: $91.5M in FY2024, $529.8M in FY2025, $1.36B trailing. It also spends far more than it earns, with negative $3.68B of free cash flow, and its reported loss grows as revenue grows.",
      "The educational point is that a high gross margin and a negative operating margin can coexist comfortably in a capital-intensive rental business, because the machine is paid for before it is rented and depreciated after. The gross margin describes a good unit; the operating and free cash flow margins describe the financing of a fleet. A reader who only looks at the 74.3% will misjudge the company.",
      "What is not known is how the build is funded, how long the equipment is assumed to last, how much of revenue comes from the cloud rather than adjacent businesses, and what utilisation the capacity achieves. The AI build-out is the reason this company exists; it does not tell a reader whether the capital being spent will earn a return above its cost."
    ],
    "questions": [
      "How is the capacity build funded, and at what cost of capital?",
      "Over how many years are the accelerators depreciated, and is that realistic?",
      "What share of revenue comes from renting compute rather than from other businesses?",
      "What utilisation rate does the installed capacity currently run at?"
    ]
  }
};
