import type { StockStory } from "./types";

export const URI: StockStory = {
  "ticker": "URI",
  "kicker": "Industrials · Equipment rental",
  "title": "United Rentals rents the fleet so contractors do not have to own it",
  "dek": "A rental business is a bet on utilisation, rate and residual value. The reported revenue line in this dataset does not reconcile with the rest of the file, so the first job is to separate what is reliable from what is not.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $7.4B trailing twelve months, +8.9% year over year.",
    "Profitability: 60.5% operating margin and 38.6% net margin.",
    "Cash: $5.3B free cash flow, a 71.6% margin.",
    "Scorecard: 59/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1067701/000106770126000007/uri-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001067701&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "UNITED RENTALS INC /DE generated $7.4B of revenue over the last twelve months, +8.9% versus the prior year. Revenue is tied to capital spending, backlogs and the ability to pass through input costs.",
      "The latest reported quarter was Q3 FY26, with $1.1B of revenue and an operating margin of 131.9%. The stock closed at $1,082.52 on 2026-11-17, giving a market capitalization of $67B.",
      "The shares sit 76% of the way up their 52-week range ($701.59 to $1,202.12). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A rental fleet is a portfolio of depreciating assets. The question is never whether the equipment is useful, but whether the rate earned over its life covers the capital, the maintenance and the residual."
  },
  "whatItDoes": {
    "paragraphs": [
      "General rentals serve the everyday needs of a construction site: lifts, earthmoving equipment, compaction, small tools. Specialty rentals serve narrower, higher-value needs: pumps and fluid handling, power generation and temperature control, trench shoring, and industrial cleaning. Specialty carries better rates because the equipment is more technical and the customer is often dealing with an outage or an emergency.",
      "The branch network is the asset that ties it together. A rental company competes on availability and proximity as much as on price, so a dense network lets it serve a customer across many sites and reposition equipment to where demand is. That network is expensive to build and hard to replicate, which is why the industry consolidates around a few large operators.",
      "The company also sells used equipment, which matters more than it sounds. A healthy resale market supports residual values, and residual values determine how much depreciation the fleet has to absorb. When used prices fall, the same rental rate produces less profit."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The economics are best understood per machine, not per company. A lift bought for a known price earns a monthly rate when it is on hire, sits idle when it is not, and costs money to maintain and move either way. If it is on hire often enough at a rate that covers depreciation, maintenance, transport and the branch overhead, the machine earns a return. If utilisation drops or the rate falls, the same asset loses money because the depreciation does not stop.",
      "That is why the reported margin lines in this file cannot be taken at face value. A gross margin of 92.4% and an operating margin of 60.5% would imply almost no cost of revenue, but the largest cost in a rental business is depreciation of the fleet, and it has to be somewhere. A free-cash-flow margin of 71.6% is likewise not plausible for a company that spends heavily on equipment each year.",
      "The reliable way to read the business is through EPS, net debt and EV-based multiples. EPS was $45.49 trailing, and the four quarterly figures in the file add up to exactly that, so the per-share series is internally consistent. Net debt of $14.5B at 2.6x EBITDA is the leverage a fleet owner carries by design: the debt funds the equipment, and the equipment earns the rent that services it."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 10.2% a year across the fiscal years in the dataset, and the latest quarter changed +13.9% year over year. Third-party estimates for the current fiscal year point to $18.1B of revenue and $52.28 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 60.5% and return on invested capital of 14.6% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 60.5%, the net margin is 38.6% and diluted EPS is $45.49. The latest quarter's operating margin was 131.9%.",
      "Return on equity is 29.5%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $1.1B, an operating margin of 131.9% and a net margin of 86.1%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $5.3B, a 71.6% margin. Net debt is $14.5B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $5.3B over the last twelve months and net debt was $14.5B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 23.5x trailing earnings and 14.5x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $1,298.05; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "21 analysts contribute to the third-party consensus. The mean target is $1,298.05, with a range of $950.00 to $1,652.00.",
      "Current-year estimates call for $18.1B of revenue and $52.28 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 21 analysts with a mean target of $1.3K; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "The fleet is the asset and the liability at the same time. Risks here are about utilisation, residual values and the leverage that funds the equipment.",
    "items": [
      {
        "title": "Construction cycle",
        "severity": "High",
        "detail": "Non-residential construction drives rental volume. A slowdown leaves equipment idle while depreciation and branch costs continue.",
        "watch": "Utilisation, rental rate growth and non-residential construction spending."
      },
      {
        "title": "Residual values",
        "severity": "High",
        "detail": "Used equipment prices set the value the fleet is carried at. A fall in resale values forces write-downs and raises the true cost of ownership.",
        "watch": "Used equipment sale proceeds and depreciation as a share of revenue."
      },
      {
        "title": "Leverage",
        "severity": "Medium",
        "detail": "Net debt of $14.5B at 2.6x EBITDA is manageable while cash flow holds. In a downturn, the same debt limits the ability to keep buying equipment at low prices.",
        "watch": "Net debt to EBITDA and the maturity profile."
      },
      {
        "title": "Fleet capital spending",
        "severity": "Medium",
        "detail": "Growth requires buying equipment ahead of demand. Buying too much at the top of the cycle is the classic rental mistake.",
        "watch": "Gross capital expenditure, fleet age and the change in fleet size."
      },
      {
        "title": "Reporting quality",
        "severity": "Medium",
        "detail": "The revenue line in this dataset does not reconcile with the quarterly series or the consensus. Ratios built on it can mislead.",
        "watch": "Reconcile revenue, net income and cash flow against the filed statements before using any margin."
      }
    ],
    "watchlist": [
      {
        "title": "Utilisation and rate",
        "detail": "The two variables that decide whether the fleet earns its depreciation. Watch them together, not separately."
      },
      {
        "title": "Used equipment prices",
        "detail": "Resale values are the earliest signal that the cycle is turning, because they move before rental rates do."
      },
      {
        "title": "Fleet capex",
        "detail": "Capital spending above depreciation grows the fleet; below it shrinks the fleet. Watch which one management chooses."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "United Rentals is a scale operator in an industry that rewards density and fleet management. EPS of $45.49, net debt of $14.5B at 2.6x EBITDA and a 14.6% ROIC describe a business earning a modest spread on a large asset base.",
      "The dataset, however, is not internally consistent. The trailing revenue of $7.4B contradicts the consensus of $18.1B, the quarterly revenue series, and the margin figures derived from it. The EPS series does reconcile, so the per-share and leverage facts are the ones to use.",
      "The reader's first task is to rebuild the revenue line from the filings, then decide whether the fleet is earning its cost of capital at current rates. Everything else depends on that."
    ],
    "questions": [
      "What is revenue on a consistent basis, and why does the dataset differ from the consensus?",
      "How much of the latest EPS step came from utilisation versus buybacks?",
      "What residual values is the fleet carried at, and how sensitive is depreciation to a fall in used prices?",
      "How much fleet capital spending is growth versus replacement?"
    ]
  }
};
