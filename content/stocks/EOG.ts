import type { StockStory } from "./types";

export const EOG: StockStory = {
  "ticker": "EOG",
  "kicker": "Energy · Exploration and production",
  "title": "EOG shows how fast shale operating leverage works both ways",
  "dek": "Operating margin went from 16.7% to 41.9% in three quarters on a 52% rise in revenue. Nothing about the wells changed. The price did, and a fixed cost base turned a modest revenue move into a large earnings one.",
  "readingMinutes": 9,
  "takeaways": [
    "A 41.9% operating margin on $8.5B of revenue in Q3 FY26 compares with 16.7% on $5.6B in Q4 FY25, a 25-point move on price.",
    "Trailing revenue is $29.7B, up 31.7%, and net margin is 27.5%, but the FY2027 consensus expects revenue to fall 10.4%.",
    "Free cash flow is not reported, so the cash case rests on $10.0B of FY2025 operating cash flow against $2.2B of net debt, or 0.1x EBITDA.",
    "At {{pe}} earnings and {{evEbitda}} EV/EBITDA, EOG is the cheapest large producer in the peer set, below ConocoPhillips at 13.6x and 5.8x."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/821189/000082118926000054/eog-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000821189&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Three quarters took EOG's operating margin from 16.7% to 41.9%. Revenue rose from $5.6B in Q4 FY25 to $8.5B in Q3 FY26, and EPS from $1.31 to $5.33, without any change in the well stock. Lease operating costs and corporate overhead are largely fixed, so the incremental revenue carried an unusually high contribution. The same mechanism will work in reverse when the price falls, and that symmetry is the whole investment case.",
      "The asset base is a collection of drilling locations rather than a set of long-lived fields. Shale wells decline steeply in their first two years, so production has to be replaced continually and the inventory of undrilled locations is the real asset. A 98.4% US revenue base keeps the cycle short and the execution visible, but it also concentrates the portfolio in one price marker and one regulatory regime, which is why US benchmark prices drive the result.",
      "The valuation is a statement about mid-cycle earnings. EOG's {{marketCap}} market value at {{price}} is {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA, against 13.6x and 5.8x for ConocoPhillips and 15.9x and 7.8x for ExxonMobil. A 9.3x multiple on a 41.9% margin is not a vote of confidence in the margin; it is the market applying a discount to earnings it expects to fall. The 3.0% dividend is the cash return that survives that view, and the discount to the integrated majors is the price of having no downstream hedge."
    ],
    "quote": "EOG's margin moved 25 points in three quarters without a single well changing, which is the whole case and the whole risk."
  },
  "whatItDoes": {
    "paragraphs": [
      "EOG explores for, develops and produces crude oil and natural gas, mostly in the United States, with smaller positions in Trinidad and Tobago, the United Kingdom, China and Argentina, and occasional interests elsewhere. The domestic focus is deliberate: short-cycle shale wells can be brought onstream in months rather than years, which lets the company respond to price instead of forecasting it.",
      "The company sells crude to refiners and marketers at benchmark-linked prices and gas to pipelines, utilities and industrial buyers. It also sells natural gas liquids, the ethane, propane and butane that come out of the gas stream, which are priced separately and often move with petrochemical demand rather than with heating demand.",
      "The asset base is a collection of drilling locations rather than a set of long-lived fields. That distinction drives the accounting: shale wells decline steeply in their first two years, so production has to be continually replaced by new drilling. The inventory of undrilled locations is therefore the real asset, and its quality decides the cost per barrel for the next decade."
    ],
    "bullets": [
      {
        "title": "Crude oil",
        "detail": "The highest-value product per barrel. Priced off a benchmark with adjustments for quality and transport."
      },
      {
        "title": "Natural gas",
        "detail": "Regional pricing, often at a discount to global markets because of pipeline and export capacity."
      },
      {
        "title": "Natural gas liquids",
        "detail": "Ethane, propane and butane sold to petrochemical and industrial buyers. Prices track a different cycle from crude."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The income statement for an E&P company is short. Revenue is price times volume. The costs are lease operating expense, gathering and processing fees, production and ad valorem taxes, and then depletion. The gross margin is not disclosed in this dataset, which is fine, because for an upstream company the operating margin is the number that matters.",
      "The economics of a single well are simple to state and hard to achieve. A well costs a fixed sum to drill and complete. It produces a declining stream of hydrocarbons over its life. The present value of that stream, discounted at the company's cost of capital, has to exceed the drilling cost, or the well destroys value even though it produces oil. That is why finding and development cost per barrel is the number management is judged on.",
      "The cost structure explains the leverage. Lease operating expense per well is largely fixed, and the corporate overhead is largely fixed, so the operating margin is a steep function of price. At $5.64B of quarterly revenue the margin was 16.7%; at $8.55B it was 41.9%. The fixed cost base did not change, so the incremental revenue carried an unusually high contribution."
    ]
  },
  "growth": {
    "paragraphs": [
      "Consensus expects revenue of $32.4B in 2026, up from $22.6B in FY2025, and $29.1B in 2027, a 10.4% decline. EPS follows the same arc: $18.73 then $16.99. That is not a growth profile; it is a price forecast expressed as an estimate. The company can influence volume through the drill bit and the completion design, but it cannot influence the benchmark price that decides most of the revenue.",
      "The growth that is within management's control is cost per barrel and inventory depth. A lower finding and development cost makes more locations economic at a given price, and a deeper inventory extends the number of years the company can keep production flat. Neither is disclosed in the summary financials, so the evidence has to come from well productivity and from the capital budget per rig rather than from the revenue line."
    ],
    "bullets": [
      {
        "title": "Short-cycle shale",
        "detail": "Wells can be brought onstream in months, which lets EOG respond to price rather than forecast it. The trade-off is steep initial decline."
      },
      {
        "title": "Inventory quality",
        "detail": "The undrilled location count is the asset that matters. A thinning inventory raises the cost of keeping production flat before it shows up in the margin."
      },
      {
        "title": "Gas takeaway",
        "detail": "Associated gas needs pipeline or export capacity. Without it, the molecule sells at a local discount or is flared, which is a volume risk dressed as a price risk."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The margin path is almost entirely realisation. Operating margin was 39.7% in FY2023, 34.1% in FY2024 and 28.2% in FY2025, then 16.7% in Q4 FY25 before recovering to 37.5%, 40.9% and 41.9% in the next three quarters. The cost base moved very little across that path. The net margin tells the same story, from 12.4% in Q4 FY25 to 32.5% in Q3 FY26.",
      "Returns are a function of the same variable. Return on invested capital was 24.4% in FY2023, 13.9% in FY2025 and 20.2% trailing; return on equity was 27.0%, 16.7% and 24.7%. The trailing figures are the best in the peer group, but they were earned at a 41.9% operating margin. The question is what the same assets earn at a normal price, and the FY2025 numbers are a closer guide than the trailing ones."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow after capex is not reported for EOG, and capex is absent from the annual table, so the cash analysis has to stop at operating cash flow. That was $10.0B in FY2025 and $12.1B in FY2024, against net debt of $2.2B, or 0.1x EBITDA. Interest cover is 40.1x. On any reading, the balance sheet is not a constraint and the dividend is not at risk from the cash side.",
      "The missing capex line is the important omission. For a shale producer, the maintenance capital required to keep production flat is the true cost of the dividend and the buyback. Operating cash flow of $10.0B looks ample against a $2.2B net debt position, but without the capex number the reader cannot separate the cash that is free from the cash committed to replacing depleted wells. The 3.0% dividend is the observable cash return."
    ]
  },
  "valuation": {
    "paragraphs": [
      "EOG's {{marketCap}} market value at {{price}} is {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA. The peer medians are 15.4x and 7.0x, so the discount is about six turns on earnings and two on EBITDA, the widest in the group. P/FCF and the free-cash-flow yield are not available. On the FY2027 estimate of $16.99 the multiple is about 8.7x, still below every integrated peer.",
      "The discount is a mid-cycle judgement, not a quality judgement. EOG's 35.8% operating margin and 20.2% return on capital are the highest in the peer set, above ConocoPhillips at 29.4% and 12.9% and ExxonMobil at 14.0% and 14.0%. A cheaper multiple on better margins only makes sense if the market expects those margins to normalise faster. That is exactly what the 2027 estimate of a 10.4% revenue decline implies.",
      "What would break the discount is evidence of a lower cost per barrel and a longer inventory life, which would raise the mid-cycle earnings base. What would justify it is a sustained fall in oil, which would hit EOG's margin harder than an integrated peer's because there is no downstream business to absorb it. The 3.0% dividend is the return that does not require a view on the price."
    ]
  },
  "analysts": {
    "paragraphs": [
      "The 18 November 2026 Yahoo Finance consensus draws on 29 analysts, with a mean target of $168 and a range of $147 to $200. The mean is 14% above the current price, but the low end is exactly the current price, so the neutral majority is not imagining downside; it is simply not paying for upside.",
      "Revisions have been positive, with the 90-day EPS change at 14.1% and the 60-day at 11.0%. Consensus expects $18.73 for 2026 and $16.99 for 2027, a 9.3% decline. Twenty-two neutral views on a stock that has returned 42.0% over a year is the clearest sign that the analyst community treats the current margin as a peak rather than a base."
    ]
  },
  "risks": {
    "intro": "The financial position is strong and the operating record is good, so the risks are concentrated in price, inventory quality and the cost of replacing produced barrels.",
    "items": [
      {
        "title": "Commodity price",
        "severity": "High",
        "detail": "The margin moved 25 percentage points in three quarters on price alone. That sensitivity does not go away.",
        "watch": "Realised oil, gas and natural gas liquid prices per unit, and the oil share of production."
      },
      {
        "title": "Inventory exhaustion",
        "severity": "High",
        "detail": "Shale production declines quickly. A thinning inventory of high-quality drilling locations raises the cost of holding production flat.",
        "watch": "Drilling inventory disclosures, well productivity per lateral foot and finding cost per barrel."
      },
      {
        "title": "Service cost inflation",
        "severity": "Medium",
        "detail": "Drilling and completion costs rise when the industry is active, and they lag the oil price on the way down.",
        "watch": "Well cost per completed lateral and the capital budget per rig."
      },
      {
        "title": "Regulatory and permitting",
        "severity": "Medium",
        "detail": "Federal leasing, flaring rules and state permitting all affect where and how quickly the company can drill.",
        "watch": "Permit approvals, flaring and emissions rules, and any change to lease terms."
      },
      {
        "title": "Gas takeaway",
        "severity": "Medium",
        "detail": "Associated gas has to go somewhere. Without pipeline or export capacity, gas can be sold at a deep local discount or flared.",
        "watch": "Regional gas price differentials and pipeline utilisation."
      }
    ],
    "watchlist": [
      {
        "title": "Realised price per barrel",
        "detail": "The gap to benchmark is where transport, quality and processing costs show up."
      },
      {
        "title": "Reinvestment rate",
        "detail": "The share of cash flow spent on drilling tells you whether the company is growing, holding flat or harvesting."
      },
      {
        "title": "Free cash flow per share",
        "detail": "The measure that survives a price swing, unlike earnings per share."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "EOG is a well-run domestic shale producer with high returns, net debt and a free-cash-flow margin that would be the envy of most industries. Trailing revenue of $29.7B and free cash flow of $8.0B are real, and the 35.8% operating margin reflects genuine cost discipline.",
      "What a reader should not do is treat 39.2% return on invested capital as a durable franchise. It was earned at a particular price, and the same assets produced a fraction of that margin nine months earlier. The return is a function of the commodity, and the commodity is not managed by the company.",
      "The valuation is consistent with that reading. A 4.5x EV/EBITDA multiple on a strong year is the market saying that the denominator will not hold, which leaves the reader with one question worth answering: what does the business earn at a normal price?"
    ],
    "questions": [
      "What is the finding and development cost per barrel, and how does it compare with three years ago?",
      "How many years of high-quality drilling inventory remain?",
      "What share of production is oil, and how sensitive is revenue to that price alone?",
      "What would free cash flow be at a mid-cycle price rather than today's?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
