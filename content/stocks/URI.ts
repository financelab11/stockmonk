import type { StockStory } from "./types";

export const URI: StockStory = {
  "ticker": "URI",
  "kicker": "Industrials · Equipment rental",
  "title": "United Rentals rents the fleet so contractors do not have to own it",
  "dek": "A rental business is a bet on utilisation, rate and residual value. The reported revenue line in this dataset does not reconcile with the rest of the file, so the first job is to separate what is reliable from what is not.",
  "readingMinutes": 9,
  "takeaways": [
    "Q3 FY26 diluted EPS was $14.77 against $10.91 a year earlier, the highest quarterly figure in the record.",
    "Trailing revenue in the reported series does not reconcile with the quarterly run-rate or with the $18.1B consensus for FY2026.",
    "Net debt is $14.5B, roughly three times EBITDA, and the debt funds the fleet that earns the rent.",
    "At 22.9x earnings and 16.7x EBITDA, the shares trade below peer medians of 31.0x and 20.4x."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1067701/000106770126000007/uri-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001067701&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "United Rentals reported $14.77 of diluted EPS in the September 2026 quarter against $10.91 a year earlier, and the per-share series is the most reliable part of the disclosure. The reported revenue line does not reconcile with the quarterly run-rate or with consensus, so margins built on it are not usable. What can be said is that the fleet is earning more per share: the September quarter's EPS was the highest in the period shown.",
      "Rental economics are simple per machine and complicated per company. A lift bought at a known price earns a monthly rate when it is on hire and nothing when it is idle, while depreciation, maintenance, transport and branch overhead continue. Utilisation and rate decide the return; residual values decide how much depreciation the fleet has to absorb. Density matters because a truck that serves more stops per day spreads the same fixed cost over more revenue.",
      "Leverage is part of the model. Net debt is $14.5B, roughly three times EBITDA, and the debt funds the equipment that earns the rent. At 22.9x earnings and 16.7x EBITDA, the shares trade below peer medians of 31.0x and 20.4x, which is the discount a leveraged, cyclical lessor usually carries. The 0.8% dividend is minor. The debate is whether the fleet is earning its cost of capital at current rates."
    ],
    "quote": "United Rentals is a leveraged bet on fleet utilisation, and the per-share numbers are the only clean signal."
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
      "Consensus is the usable top line. It expects $18.1B of revenue for FY2026, up 12.4%, and $20.0B for FY2027, up 10.4%, with EPS of $52.28 and $62.06. The EPS path is faster than the revenue path, which implies margin expansion, a smaller share count or both; the disclosure does not split them. The September quarter's $14.77 against $10.91 a year earlier shows the operating leverage is real.",
      "The drivers are non-residential construction, specialty rentals and used-equipment prices. General rentals serve the everyday needs of a site; specialty serves pumps, power, climate and trench work, where the rate is better because the need is often urgent. The branch network is the asset that ties it together, and it is expensive to replicate. Consensus assumes the construction cycle stays firm and that rates grow faster than fleet costs. A pause in non-residential work would hit utilisation first."
    ],
    "bullets": [
      {
        "title": "Utilisation and rate",
        "detail": "These two variables decide fleet returns. A point of utilisation or a point of rate moves profit more than the same change in revenue, because depreciation does not flex."
      },
      {
        "title": "Residual values",
        "detail": "Used equipment prices set the carrying value of the fleet. A fall in resale values raises the true cost of ownership and can force write-downs."
      },
      {
        "title": "Fleet capex",
        "detail": "Growth requires buying equipment ahead of demand. Buying too much at the top of the cycle is the classic rental mistake and the fastest way to dilute returns."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The reported margin lines are not usable: a 172.4% gross margin and a 108.7% operating margin would imply almost no cost of revenue, and depreciation has to sit somewhere. The per-share series is internally consistent, with $10.27 in December 2025, $8.43 in March 2026, $12.76 in June and $14.77 in September. That is a seasonal business with a strong spring and summer, and the September quarter was the best of the four.",
      "Return on invested capital is 13.1% and return on equity 28.9%. The gap between the two is leverage: the fleet is funded with debt, so a modest operating return becomes a much larger equity return. That is the right way to read a lessor, and it is also the risk. If utilisation falls, the interest cost does not, and the equity return falls faster than the operating return. The 13.1% capital return is the number that matters."
    ]
  },
  "cash": {
    "paragraphs": [
      "The cash statement is not reported on a consistent basis, so the cash statement has to be read through operating cash flow and fleet capex. Operating cash flow was $5.2B in FY2025, $4.5B in FY2024 and $4.7B in FY2023. Capex was $4.1B in FY2024, $3.9B in FY2023 and $3.7B in FY2022. The difference is small, which is what a fleet business looks like: most of the operating cash goes back into equipment.",
      "Net debt of $14.5B is the leverage that funds the fleet, and it is the main financial risk. In a downturn, used prices and utilisation fall together, so the collateral behind the debt is worth less at the same time as the cash flow that services it. The 0.8% dividend is small enough to be maintained. The balance sheet is not stretched, but it has less room than a less-leveraged industrial."
    ]
  },
  "valuation": {
    "paragraphs": [
      "United Rentals trades at 22.9x trailing earnings and 16.7x EBITDA, below the peer medians of 31.0x and 20.4x. The comparison with Caterpillar, at 21.2x and 14.3x, is the most useful: both are cyclical equipment businesses, but Caterpillar manufactures and United Rentals owns the fleet. The premium to Caterpillar on EBITDA is the price of the rental model's recurring revenue and its higher capital return.",
      "Forward estimates put FY2026 EPS of $52.28 on about 19x and FY2027 EPS of $62.06 on about 16x. Those multiples assume the EPS growth of 24.3% and 18.7% is delivered, which requires utilisation and rates to hold. The discount to the peer median is therefore not a free option: it is the market's price for leverage and for a business whose earnings depend on the construction cycle.",
      "The 52-week range of $702 to $1,200 and a one-year return of 28.9% show that the shares have already re-rated. The low end of the analyst range, $950, is below the current price, so not every estimate accepts the consensus. What would justify the multiple is evidence that the fleet can earn a return above its cost of capital through a downturn; what would break it is a fall in used prices that forces depreciation higher."
    ]
  },
  "analysts": {
    "paragraphs": [
      "On Yahoo Finance's 18 November 2026 data, 21 analysts cover United Rentals with a mean target of $1,300, within a $950 to $1,700 range. Positive views form the majority, with a handful of neutral calls and a single cautious one. The low end sits below the current price and the high end well above it, which is a genuine disagreement about the cycle rather than about the company.",
      "Revisions are positive, with EPS up 5.4% over 30 and 60 days and 5.8% over 90. The September quarter beat at $15.55 against $14.03, and the June quarter at $12.76 against $11.59, so the estimate has been raised after the results. Consensus FY2026 EPS of $52.28 is up 24.3% and FY2027 of $62.06 is up 18.7%. The dispersion is wide because the revenue base is not consistently reported, which makes the top-line assumptions harder to anchor."
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
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
