import type { StockStory } from "./types";

export const URI: StockStory = {
  ticker: "URI",
  kicker: "Industrials · Equipment rental",
  title: "United Rentals rents the fleet so contractors do not have to own it",
  dek: "A rental business is a bet on utilisation, rate and residual value. The reported revenue line in this dataset does not reconcile with the rest of the file, so the first job is to separate what is reliable from what is not.",
  readingMinutes: 9,
  takeaways: [
    "Diluted EPS was $45.49 on a trailing basis, and the four quarters in the file sum exactly to that figure.",
    "The reported trailing revenue of $7.4B is roughly half the $18.1B that the attributed consensus expects for the current fiscal year, which makes every revenue-derived margin suspect.",
    "Net debt was $14.5B, or 2.6x EBITDA, the leverage that comes with owning a depreciating fleet.",
    "The shares trade at 22.9x trailing earnings and 14.2x EV/EBITDA, with a 0.7% dividend yield.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1067701/000106770126000007/uri-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001067701&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "United Rentals owns equipment and rents it by the day, week or month. The catalogue runs from aerial work platforms and telehandlers to excavators, pumps, power generation, climate control and trench safety. Customers are non-residential contractors, industrial plants shutting down for maintenance, utilities, municipalities and events organisers who need the equipment for a project and not for a decade.",
      "The business model is straightforward to describe and hard to run. Capital goes into a fleet, the fleet earns a rental rate multiplied by the time it is on hire, and the return depends on utilisation, rate, maintenance cost and what the machine is worth when it is sold. Every one of those variables moves with the construction cycle.",
      "At $1,055.57 the market value is $65.4B, or 22.9x trailing earnings and 14.2x EV/EBITDA. The shares sit about 71% of the way up a 52-week range of $701.59 to $1,202.12, and they have returned 25.9% over the past year. Before going further, the data needs a warning label.",
    ],
    quote:
      "A rental fleet is a portfolio of depreciating assets. The question is never whether the equipment is useful, but whether the rate earned over its life covers the capital, the maintenance and the residual.",
  },
  whatItDoes: {
    paragraphs: [
      "General rentals serve the everyday needs of a construction site: lifts, earthmoving equipment, compaction, small tools. Specialty rentals serve narrower, higher-value needs: pumps and fluid handling, power generation and temperature control, trench shoring, and industrial cleaning. Specialty carries better rates because the equipment is more technical and the customer is often dealing with an outage or an emergency.",
      "The branch network is the asset that ties it together. A rental company competes on availability and proximity as much as on price, so a dense network lets it serve a customer across many sites and reposition equipment to where demand is. That network is expensive to build and hard to replicate, which is why the industry consolidates around a few large operators.",
      "The company also sells used equipment, which matters more than it sounds. A healthy resale market supports residual values, and residual values determine how much depreciation the fleet has to absorb. When used prices fall, the same rental rate produces less profit.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The economics are best understood per machine, not per company. A lift bought for a known price earns a monthly rate when it is on hire, sits idle when it is not, and costs money to maintain and move either way. If it is on hire often enough at a rate that covers depreciation, maintenance, transport and the branch overhead, the machine earns a return. If utilisation drops or the rate falls, the same asset loses money because the depreciation does not stop.",
      "That is why the reported margin lines in this file cannot be taken at face value. A gross margin of 92.4% and an operating margin of 60.5% would imply almost no cost of revenue, but the largest cost in a rental business is depreciation of the fleet, and it has to be somewhere. A free-cash-flow margin of 71.6% is likewise not plausible for a company that spends heavily on equipment each year.",
      "The reliable way to read the business is through EPS, net debt and EV-based multiples. EPS was $45.49 trailing, and the four quarterly figures in the file add up to exactly that, so the per-share series is internally consistent. Net debt of $14.5B at 2.6x EBITDA is the leverage a fleet owner carries by design: the debt funds the equipment, and the equipment earns the rent that services it.",
    ],
  },
  growth: {
    paragraphs: [
      "The attributed consensus expects $18.1B of revenue and $51.84 of EPS this fiscal year, then $20.0B and $61.44 next year. That is the most useful scale reference in the file, because the trailing revenue of $7.4B is inconsistent with both the quarterly series and the estimate set.",
      "The quarterly revenue line alternates between roughly $0.9B and $4.4B with no seasonal pattern that explains it: $3.9B, $0.9B, $1.0B, $0.9B, $4.4B and $1.1B. The net income and EPS figures do not alternate in the same way, which means the revenue line is mixing periods or scopes rather than reflecting a business that halves and doubles every quarter. Any margin calculated from that line inherits the error.",
      "What the estimates do say is that the sell side expects high-single-digit revenue growth and a larger step in EPS, from $51.84 to $61.44. That combination implies margin expansion or a shrinking share count, and it depends on construction activity holding up and on rental rates staying firm.",
    ],
  },
  performance: {
    paragraphs: [
      "The per-share record is the part of the file that hangs together. Quarterly EPS ran from $9.59 in Q2 FY25 to $10.91, $10.27, $8.43, $12.02 and $14.77 in Q3 FY26. For a capital-intensive rental business, that is a strong run, and the step up in the latest quarter is large enough to suggest either better utilisation or a lower share count.",
      "Return on equity is 29.5% and return on invested capital is 14.6%. The gap between the two is the leverage: debt magnifies the return on equity, while the return on invested capital is the cleaner measure of how well the fleet is being used. A 14.6% return on the fleet is real, but the spread over the cost of capital is not wide, which is typical of rental.",
      "The reported operating margins of 93% to 132% in three of the six quarters are arithmetic artefacts of the revenue line, not operating results. Read them as a signal that the denominator is wrong, not as evidence of extraordinary profitability.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was reported at $5.3B on the trailing line, a 71.6% margin. That figure should be treated with the same caution as the revenue line: a rental company's free cash flow is what remains after buying the fleet, and fleet purchases are large and lumpy. A cash-flow number that exceeds plausible revenue economics is more likely to reflect a definitional difference than a genuine cash machine.",
      "Net debt of $14.5B at 2.6x EBITDA is the balance sheet fact that matters. It is not alarming for an asset-backed rental business, because the fleet can be sold if demand falls, but it does mean that a decline in residual values hits both the asset side and the earnings side at once.",
      "The dividend yield is 0.7%, so capital return is mostly buybacks and reinvestment in the fleet. At 12.3x free cash flow and an 8.1% FCF yield, the cash-based multiple looks cheap, but only if the cash-flow figure is measured on a consistent basis with the fleet spending.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 22.9x trailing earnings and 14.2x EV/EBITDA, United Rentals is valued in line with Caterpillar (21.6x and 14.5x) rather than with the higher-growth electrical names. That is the right comparison: both are cyclical businesses that own expensive equipment and earn a return on its utilisation.",
      "The EV/Sales multiple of 10.8x looks extreme until you notice that it is calculated on the $7.4B revenue line. On the consensus revenue of $18.1B, the same enterprise value would imply a far lower multiple. This is a good example of why a single ratio from a dataset should never be used without checking the denominator.",
      "The earnings multiple is the more defensible anchor. At 22.9x trailing EPS, the market is paying a normal cyclical multiple for a business with a 14.6% ROIC and 2.6x leverage. If EPS grows to the $61.44 consensus next year, the forward multiple falls, and the shares would look inexpensive without any change in the price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-one analysts contribute to the attributed consensus, with a mean target of $1,293.43 and a range of $950.00 to $1,610.00. The spread is wide, which fits a business whose earnings depend on construction activity and rental rates.",
      "Quarterly estimates are $4.82B of revenue and $14.30 of EPS for the next quarter, then $4.46B and $11.89. The quarterly revenue figures are consistent with the annual consensus of $18.1B, which reinforces the conclusion that the trailing revenue line in the dataset is the outlier.",
      "A mean target is a third-party figure, not a Stockmonk rating. When the mean and the low end both sit above the price, the disagreement in the market is about the cycle, not about the company.",
    ],
  },
  risks: {
    intro:
      "The fleet is the asset and the liability at the same time. Risks here are about utilisation, residual values and the leverage that funds the equipment.",
    items: [
      {
        title: "Construction cycle",
        severity: "High",
        detail:
          "Non-residential construction drives rental volume. A slowdown leaves equipment idle while depreciation and branch costs continue.",
        watch:
          "Utilisation, rental rate growth and non-residential construction spending.",
      },
      {
        title: "Residual values",
        severity: "High",
        detail:
          "Used equipment prices set the value the fleet is carried at. A fall in resale values forces write-downs and raises the true cost of ownership.",
        watch:
          "Used equipment sale proceeds and depreciation as a share of revenue.",
      },
      {
        title: "Leverage",
        severity: "Medium",
        detail:
          "Net debt of $14.5B at 2.6x EBITDA is manageable while cash flow holds. In a downturn, the same debt limits the ability to keep buying equipment at low prices.",
        watch:
          "Net debt to EBITDA and the maturity profile.",
      },
      {
        title: "Fleet capital spending",
        severity: "Medium",
        detail:
          "Growth requires buying equipment ahead of demand. Buying too much at the top of the cycle is the classic rental mistake.",
        watch:
          "Gross capital expenditure, fleet age and the change in fleet size.",
      },
      {
        title: "Reporting quality",
        severity: "Medium",
        detail:
          "The revenue line in this dataset does not reconcile with the quarterly series or the consensus. Ratios built on it can mislead.",
        watch:
          "Reconcile revenue, net income and cash flow against the filed statements before using any margin.",
      },
    ],
    watchlist: [
      {
        title: "Utilisation and rate",
        detail:
          "The two variables that decide whether the fleet earns its depreciation. Watch them together, not separately.",
      },
      {
        title: "Used equipment prices",
        detail:
          "Resale values are the earliest signal that the cycle is turning, because they move before rental rates do.",
      },
      {
        title: "Fleet capex",
        detail:
          "Capital spending above depreciation grows the fleet; below it shrinks the fleet. Watch which one management chooses.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "United Rentals is a scale operator in an industry that rewards density and fleet management. EPS of $45.49, net debt of $14.5B at 2.6x EBITDA and a 14.6% ROIC describe a business earning a modest spread on a large asset base.",
      "The dataset, however, is not internally consistent. The trailing revenue of $7.4B contradicts the consensus of $18.1B, the quarterly revenue series, and the margin figures derived from it. The EPS series does reconcile, so the per-share and leverage facts are the ones to use.",
      "The reader's first task is to rebuild the revenue line from the filings, then decide whether the fleet is earning its cost of capital at current rates. Everything else depends on that.",
    ],
    questions: [
      "What is revenue on a consistent basis, and why does the dataset differ from the consensus?",
      "How much of the latest EPS step came from utilisation versus buybacks?",
      "What residual values is the fleet carried at, and how sensitive is depreciation to a fall in used prices?",
      "How much fleet capital spending is growth versus replacement?",
    ],
  },
};
