import type { StockStory } from "./types";

export const CRWV: StockStory = {
  "ticker": "CRWV",
  "kicker": "AI cloud · GPU infrastructure",
  "title": "CoreWeave's gross margin is 67% and its net margin is negative 25%",
  "dek": "The gap is not operations. It is the cost of financing a fleet of accelerators with debt, and thirty-eight analysts disagree about whether that is a problem or the point.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $7.6B trailing twelve months, +115.3% year over year.",
    "Profitability: -3.0% operating margin and -19.4% net margin.",
    "Cash: -$13.7B free cash flow, a -179.9% margin.",
    "Scorecard: 45/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm",
  "irUrl": "https://www.coreweave.com",
  "bigPicture": {
    "paragraphs": [
      "CoreWeave, Inc. generated $7.6B of revenue over the last twelve months, +115.3% versus the prior year. Growth is tied to AI data-center spending, and the key question is how much of that spending becomes durable recurring demand.",
      "The latest reported quarter was Q2 FY26, with $2.6B of revenue and an operating margin of -1.9%. The stock closed at $49.89 on 2026-11-17, giving a market capitalization of $27.7B.",
      "The shares sit 10% of the way up their 52-week range ($40.58 to $138.25). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A GPU depreciates whether or not it is rented. Debt service arrives on a fixed schedule regardless. The mismatch between those two clocks is the risk in every neocloud."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product is contracted access to clusters of accelerators, with the networking, storage and orchestration software needed to run training and inference workloads. Customers sign multi-year commitments because moving a model to a different provider is disruptive and expensive, and because capacity is scarce in the sizes they need.",
      "Delivering that product requires physical assets: buildings, power, cooling, networking and the machines themselves. CoreWeave does not make chips; it buys them, installs them and rents them. That places it in a capital-intensive position between a supplier with pricing power and customers who are large enough to negotiate.",
      "The competitive position depends on utilisation and on the cost of capital. A provider that keeps its fleet busy and finances it cheaply can earn a return on a 67.4% gross margin. A provider that does neither is left with depreciation and interest on equipment that is losing value every quarter, which is the risk that the negative net margin is pointing at."
    ],
    "bullets": [
      {
        "title": "Contracted capacity",
        "detail": "Multi-year commitments for accelerator clusters. The revenue is agreed in advance, which is why growth has been so fast."
      },
      {
        "title": "Owned infrastructure",
        "detail": "Buildings, power and networking as well as the machines. More capital than a reseller, more control than a tenant."
      },
      {
        "title": "Customer profile",
        "detail": "AI labs and enterprises that need capacity at a scale they cannot assemble themselves. Few, large, and technically demanding."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is a contracted rate for capacity over time. A 67.4% gross margin means the direct cost of delivering an hour of compute, including power, cooling and the depreciation of the equipment, takes about a third of the price. That is a healthy spread and it is the reason the business has been able to grow at all.",
      "Operating expenses consume nearly all of the remaining gross profit. Sales, engineering and administration brought the operating margin to negative 1.9%, which means the company is roughly at break-even before it pays for the money it borrowed. That is not unusual for a business expanding this quickly, and it does mean the operating result is close to a threshold: a modest improvement in utilisation or pricing would push it positive.",
      "The financing cost is what turns a near-zero operating margin into a 25.4% net loss. Interest on debt, and the amortisation of whatever fees and leases sit alongside it, is charged after operating profit. For a company with $7.59B of revenue and a fleet that has to be replaced every few years, the interest line is not a peripheral item. It is the difference between a viable infrastructure business and an expensive one."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 373.4% a year across the fiscal years in the dataset, and the latest quarter changed +112.5% year over year. Third-party estimates for the current fiscal year point to $13.1B of revenue and -$4.75 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of -3.0% and return on invested capital of n/a are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Contract wins",
        "detail": "Each large commitment adds revenue and requires a matching build. Growth arrives in steps."
      },
      {
        "title": "Capacity delivery",
        "detail": "Power, buildings and equipment have to be in place before the contract can be billed."
      },
      {
        "title": "Utilisation",
        "detail": "A rented accelerator earns; an idle one depreciates. Utilisation is the difference between the gross margin and the operating margin."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -3.0%, the net margin is -19.4% and diluted EPS is -$3.70. The latest quarter's operating margin was -1.9%.",
      "Return on equity is n/a. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY26: revenue of $2.6B, an operating margin of -1.9% and a net margin of -24.3%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$13.7B, a -179.9% margin. Net debt is not a meaningful measure for this business in the current dataset.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $115.34; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "38 analysts contribute to the third-party consensus. The mean target is $115.34, with a range of $39.00 to $278.00.",
      "Current-year estimates call for $13.1B of revenue and -$4.75 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 38 analysts with a mean target of $115.34; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "CoreWeave's risks are financial as much as operational. The demand has been proven; the question is whether the capital structure allows the company to serve it profitably.",
    "items": [
      {
        "title": "Financing cost",
        "severity": "High",
        "detail": "A negative 1.9% operating margin becomes a negative 25.4% net margin after interest. The debt is the difference between the two.",
        "watch": "Interest expense, the maturity schedule and the cost of any new borrowing."
      },
      {
        "title": "Customer concentration",
        "severity": "High",
        "detail": "A few large contracts account for much of the revenue. A renegotiation or a customer failure would hit revenue and the ability to service debt together.",
        "watch": "Revenue from the largest customers and the remaining contract terms."
      },
      {
        "title": "Equipment obsolescence",
        "severity": "High",
        "detail": "Accelerators lose value as new generations arrive. A fleet bought at one performance level has to compete with newer capacity.",
        "watch": "Depreciation policy, the useful life assumed and the pace of new chip generations."
      },
      {
        "title": "Utilisation",
        "severity": "Medium",
        "detail": "A 67.4% gross margin assumes the capacity is rented. Idle equipment still depreciates and still carries its share of the debt.",
        "watch": "Revenue per unit of installed capacity and any disclosure on contracted backlog."
      },
      {
        "title": "Capital intensity",
        "severity": "Medium",
        "detail": "Negative $13.65B of free cash flow means the company depends on continued access to capital markets at a workable price.",
        "watch": "The split between debt and equity raised, and the terms of each."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "It has ranged from negative 6.9% to positive 3.8%. Crossing zero sustainably would change the equity story."
      },
      {
        "title": "Debt disclosure",
        "detail": "The missing balance sheet detail is the most important thing to find in the filings."
      },
      {
        "title": "Contracted revenue",
        "detail": "The portion of future revenue already signed is what separates an infrastructure business from a spot rental one."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "CoreWeave is a GPU cloud with $7.59B of trailing revenue growing 115.3%, a 67.4% gross margin and a negative 25.4% net margin. It spent $13.65B more than it earned to build capacity, and it finances that capacity with debt. The operating business is close to break-even; the capital structure is not.",
      "The educational point is that the distance between gross margin and net margin measures the cost of the balance sheet, not the quality of the product. A company can have a good product, a growing market and a negative net margin at the same time, and the reason is usually that the assets are financed rather than owned outright. Whether that is sensible depends on the return on the assets against the interest rate, and that comparison is not in the data here.",
      "What is not known is the size and terms of the debt, the concentration of the contract book, and how quickly the equipment has to be replaced. The AI build-out created this business; it does not determine whether the financing structure will leave anything for the equity."
    ],
    "questions": [
      "What is the total debt, its maturity profile and its average interest rate?",
      "What share of revenue comes from the largest contracts?",
      "Over how many years are the accelerators depreciated, and does that match their economic life?",
      "What utilisation rate does the installed fleet run at today?"
    ]
  }
};
