import type { StockStory } from "./types";

export const EQIX: StockStory = {
  "ticker": "EQIX",
  "kicker": "Real estate · Data centres and interconnection",
  "title": "Equinix builds the building two years before the tenant arrives",
  "dek": "Retail colocation is a property business with a two-year lead time between spending the capital and collecting the rent. That lag is why free cash flow is negative while revenue grows at a steady double digit rate.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $10.1B trailing twelve months, +11.1% year over year.",
    "Profitability: 22.5% operating margin and 16.4% net margin.",
    "Cash: -$1.6B free cash flow, a -15.4% margin.",
    "Scorecard: 28/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1101239/000110123926000032/eqix-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001101239&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Equinix generated $10.1B of revenue over the last twelve months, +11.1% versus the prior year. Cash flow depends on occupancy, rents, tenant quality and the cost of refinancing the asset base.",
      "The latest reported quarter was Q3 FY26, with $2.6B of revenue and an operating margin of 23.3%. The stock closed at $1,034.83 on 2026-11-17, giving a market capitalization of $102.4B.",
      "The shares sit 77% of the way up their 52-week range ($720.62 to $1,128.68). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A data centre is valuable because of who else is inside it. That is why the landlord cares more about the ecosystem than about the square footage."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product is space, power and connectivity. A customer leases a cage or a cabinet, pays for the electricity it draws and buys cross-connects to other customers in the same building. The rent is the base; the cross-connects and the power are where the incremental margin lives.",
      "The interconnection revenue is small in absolute terms and disproportionately valuable. A cross-connect is a physical cable between two customers, installed once and billed monthly. It costs almost nothing to maintain and it is the reason a customer cannot easily leave: moving a cage means rebuilding every connection inside it.",
      "The portfolio spans the Americas, Europe and Asia, and the mix matters because each region has a different power market, a different planning regime and a different set of network operators to attract."
    ],
    "bullets": [
      {
        "title": "Colocation",
        "detail": "Cages and cabinets leased to enterprises, networks and cloud providers. Revenue is space plus power."
      },
      {
        "title": "Interconnection",
        "detail": "Cross-connects and peering inside the building. High margin, high retention and the source of the network effect."
      },
      {
        "title": "Development",
        "detail": "New buildings and expansions. Capital is spent years before the revenue arrives."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue per cabinet rises as the ecosystem densifies, because a well-connected building can charge more for the same space. That is the operating leverage of a data centre: the building's cost is largely fixed once it is built, so additional customers and additional cross-connects carry very high incremental margins.",
      "The cost side is dominated by depreciation of the building and the mechanical and electrical plant, by electricity, and by the staff who run the site. Power is the variable that matters most. A data centre is an electricity consumer with a very high load density, and the price and availability of power determine both the cost of operating and the ability to build.",
      "The reported gross margin of 51.6% is a reasonable measure of the property economics, and the 22.5% operating margin is what survives depreciation and site costs. The gap between the two is the capital intensity of the model."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 8.8% a year across the fiscal years in the dataset, and the latest quarter changed +11.0% year over year. Third-party estimates for the current fiscal year point to $10.4B of revenue and $18.74 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 22.5% and return on invested capital of 5.3% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Interconnection attach",
        "detail": "Each new customer brings cross-connects, which carry high margins and raise the value of the building."
      },
      {
        "title": "Power and land",
        "detail": "New capacity depends on securing power and land in markets where both are increasingly constrained."
      },
      {
        "title": "Pricing power",
        "detail": "A well-connected building can raise renewal prices because the alternative is rebuilding the ecosystem elsewhere."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 22.5%, the net margin is 16.4% and diluted EPS is $16.65. The latest quarter's operating margin was 23.3%.",
      "Return on equity is 11.3%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $2.6B, an operating margin of 23.3% and a net margin of 19.0%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$1.6B, a -15.4% margin. Net debt is $19.1B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was -$1.6B over the last twelve months and net debt was $19.1B; interest cover was 15.3x."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 62.2x trailing earnings and 27.3x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $1,234.88; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "32 analysts contribute to the third-party consensus. The mean target is $1,234.88, with a range of $1,100.00 to $1,380.00.",
      "Current-year estimates call for $10.4B of revenue and $18.74 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 32 analysts with a mean target of $1.2K; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Equinix's risks are power, construction, tenant concentration and the cost of capital. The demand for interconnection is not in question; the ability to build capacity at a return is.",
    "items": [
      {
        "title": "Power availability and cost",
        "severity": "High",
        "detail": "A data centre is a large electricity customer. Constrained grids and higher power prices limit where the company can build and raise operating costs.",
        "watch": "Power procurement disclosures, utility contracts and cost per megawatt of capacity."
      },
      {
        "title": "Development and leasing lag",
        "severity": "High",
        "detail": "Capacity is built before it is leased. A slower enterprise or cloud spending cycle leaves capital in empty space.",
        "watch": "Development pipeline, opening dates and the utilisation of recently opened buildings."
      },
      {
        "title": "Interest rates and refinancing",
        "severity": "Medium",
        "detail": "Net debt is $19.05B. Interest cover of 15.3x is comfortable, but refinancing at higher rates raises the cost of the whole capital programme.",
        "watch": "Weighted average cost of debt, maturity schedule and interest cover."
      },
      {
        "title": "Tenant concentration",
        "severity": "Medium",
        "detail": "A small number of large cloud and network customers account for a meaningful share of revenue and of interconnection demand.",
        "watch": "Top-customer disclosure and the mix between network, cloud and enterprise customers."
      },
      {
        "title": "Technology and competition",
        "severity": "Medium",
        "detail": "Hyperscale self-build and alternative interconnection models can reduce the premium a retail colocation provider commands.",
        "watch": "Pricing on renewals and the share of new capacity leased to large cloud customers."
      }
    ],
    "watchlist": [
      {
        "title": "Interconnection revenue growth",
        "detail": "The highest-margin and stickiest part of the model, and the best evidence that the ecosystem is strengthening."
      },
      {
        "title": "Yield on cost",
        "detail": "The return on a completed building against what it cost to build, compared with the cost of capital."
      },
      {
        "title": "Interest cover",
        "detail": "With this much debt, the coverage ratio matters more than the absolute level of leverage."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Equinix is a data centre landlord whose real product is interconnection. Revenue of $10.1B, a 22.5% operating margin and 11.1% growth describe a business with a genuine moat and a steady demand backdrop.",
      "The financial statements require a different lens from an industrial company. Negative free cash flow is the result of building ahead of demand, a 5.3% return on invested capital reflects assets that are not yet earning, and a 60.9x earnings multiple reflects depreciation and gains rather than cash earnings.",
      "The decisive question is whether the yield on a completed building exceeds the cost of the capital used to build it. If it does, the development programme is a compounding machine. If it does not, the growth is expensive."
    ],
    "questions": [
      "What yield on cost is the development pipeline earning, and how does it compare with the cost of capital?",
      "How much of revenue comes from interconnection rather than space and power?",
      "What is the weighted average cost of debt, and when does it reprice?",
      "How concentrated is revenue among the largest cloud and network customers?"
    ]
  }
};
