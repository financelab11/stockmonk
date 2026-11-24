import type { StockStory } from "./types";

export const CEG: StockStory = {
  "ticker": "CEG",
  "kicker": "Utilities · Competitive power generation",
  "title": "Constellation sells electrons at whatever the grid will pay",
  "dek": "A nuclear fleet costs almost nothing to fuel and a great deal to maintain. That combination turns a modest move in power prices into a large move in operating income, in both directions.",
  "readingMinutes": 9,
  "takeaways": [
    "The first quarter of FY26 produced $7.5B of revenue at a 30.9% operating margin; Q2 fell to $5.8B and 9.9% as realised power prices moved.",
    "Trailing free cash flow is $309M, 1.2% of revenue, and P/FCF is {{pfcf}}, so the cash multiple is not a useful anchor for this fleet.",
    "Net debt is $24.0B, or 2.9x EBITDA, with interest cover of 5.9x, which leaves the equity sensitive to refinancing costs.",
    "At {{pe}} earnings and {{evEbitda}} EV/EBITDA, the shares trade above Vistra at 19.1x and 11.4x on a 5.5% return on invested capital."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000032/ceg-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001868275&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Constellation's first quarter of 2026 was the strong one: $7.5B of revenue, a 30.9% operating margin and $4.49 of diluted EPS. The second quarter produced $5.8B, 9.9% and $1.42. The gap is not an operating failure but the nature of a merchant generator: output is sold partly forward and partly at spot, so the realised price in any quarter is a blend of contracts signed months earlier and whatever the grid paid at the time.",
      "The fleet earns an infra-marginal rent. Nuclear fuel is cheap, the plant is expensive to build and maintain, and the clearing price is usually set by a gas plant with a higher marginal cost. The difference between that price and the nuclear unit's own cost is the margin. Because the cost base is fixed, a 10% move in the realised power price is worth far more than 10% of operating income. Regional market design decides how much of that rent each reactor captures.",
      "The valuation is a scarcity argument. At {{price}} the market capitalises Constellation at {{marketCap}}, or {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA, against 20.5x and 12.2x for the utility peer group. Vistra trades at 19.1x and 11.4x with an 11.2% return on capital, while Constellation's return is 5.5%. The premium is being paid for the nuclear fleet's longevity and for the option on power prices, not for current returns. The 0.7% dividend confirms that the equity case is capital appreciation."
    ],
    "quote": "Constellation's reactors earn the gap between the clearing price and a fuel cost that is close to zero, and that gap is the whole equity story."
  },
  "whatItDoes": {
    "paragraphs": [
      "The fleet produces electricity and sells it in wholesale markets. In a competitive market, the price is set by the marginal cost of the last plant needed to meet demand, which is usually a gas plant. A nuclear plant with a lower marginal cost earns the difference between that clearing price and its own cost, which is the infra-marginal rent that funds the capital.",
      "The company also sells natural gas and renewable energy products to retail and wholesale customers, and provides energy-related services. Those businesses are smaller than the generation fleet but they use the same trading and dispatch capability.",
      "The regional split matters because each market has its own capacity mechanism, its own transmission constraints and its own regulatory treatment. A plant in the Mid-Atlantic is paid under a capacity auction that is different from the energy-only market in ERCOT, so two identical reactors can earn very different amounts."
    ],
    "bullets": [
      {
        "title": "Nuclear",
        "detail": "Baseload generation with low fuel cost and high fixed cost. The largest source of infra-marginal margin."
      },
      {
        "title": "Gas and hydro",
        "detail": "Flexible capacity that sets or follows the clearing price depending on fuel cost and demand."
      },
      {
        "title": "Retail and services",
        "detail": "Gas and renewable products sold to commercial and industrial customers, using the same dispatch platform."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is megawatt-hours sold multiplied by the price achieved. The price is partly locked in through forward sales and partly exposed to the spot market, so the realised price in any quarter is a blend of contracts signed months earlier and whatever the market paid at the time. That lag is why reported earnings can look out of step with the headlines about power prices.",
      "The cost side is dominated by fixed expense. Fuel is a small share, depreciation on the plants is large and non-cash, and the maintenance and refuelling outages are scheduled years in advance. A refuelling outage takes a unit offline for weeks and costs both the lost output and the expense of the work, which is why a single quarter can carry an unusual charge.",
      "The result is a business with a gross margin of 41.4% and an operating margin of 18.5%, where the gap is largely depreciation and fixed operating cost. It is also a business where a 10% change in the realised power price is worth far more than 10% of operating income, because the cost base does not move."
    ]
  },
  "growth": {
    "paragraphs": [
      "The estimate curve is unusual. Consensus expects $36.2B of revenue in 2026 against $22.7B in FY2025, then $36.9B in 2027, a 1.8% increase. A jump of that size followed by a flat year is not organic load growth; it points to a change in the asset base or in the consolidation of revenue. The segment disclosure does not decompose it, so the growth analysis has to treat 2026 as a new base rather than as a rate of change.",
      "On that new base, growth comes from three places: higher realised power prices on uncontracted output, capacity payments that pay the fleet for being available, and incremental retail and services revenue. The first is the largest and the least controllable. The second depends on auction design in each region. The third is smaller but uses the same dispatch platform, which is why it can be scaled without new generation.",
      "The 2027 estimate is the more useful test. Revenue of $36.9B is essentially flat on 2026, while EPS rises from $12.51 to $13.40, so the consensus expects the margin to do the work rather than volume. That is consistent with a fleet whose output is largely fixed and whose realised price is the swing factor. It also means the earnings estimate is a power-price forecast in disguise, and the segment mix gives little help in checking it."
    ],
    "bullets": [
      {
        "title": "Realised price",
        "detail": "Forward sales and spot exposure are blended each quarter. The share of output sold forward, which is not disclosed here, decides how much of a price move reaches earnings."
      },
      {
        "title": "Nuclear availability",
        "detail": "A refuelling outage takes a unit offline for weeks and carries both lost output and the cost of the work. Capacity factor is the key operating variable."
      },
      {
        "title": "Regional markets",
        "detail": "Mid-Atlantic was 28.5% of FY2025 revenue and the Midwest 23.3%, each with its own capacity mechanism and transmission constraints."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Profitability progression is price, not cost. Operating margin was 22.9% in FY2024, 13.6% in FY2025 and 18.5% trailing, with a quarterly range from 7.4% in Q1 FY25 to 30.9% in Q1 FY26. Revenue rose from $19.0B in FY2024 to $22.7B in FY2025, but the margin fell, which means realised prices or hedge settlements moved against the fleet even as volumes grew. Depreciation and fixed operating cost did the rest.",
      "Returns tell the same story. Return on invested capital was 17.2% in FY2024, 9.0% in FY2025 and 5.5% trailing; return on equity was 28.5%, 16.0% and 10.9%. A nuclear fleet's return on capital does not normally move that far in a year for operating reasons. The change is the price captured per megawatt-hour and the hedges that locked in an earlier curve. That is why the trailing ROIC is a poor measure of the asset's earning power."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow after capex is $309M trailing, a 1.2% margin, and the P/FCF multiple of {{pfcf}} is not a useful valuation anchor. FY2025 operating cash flow was $4.2B against $2.9B of capex, leaving $1.3B; the quarterly path is negative in three of the five periods shown, including -$850M in Q1 FY26. Working capital, margin calls and outage timing move the number by more than the underlying earnings do.",
      "Net debt is $24.0B, 2.9x EBITDA, and interest cover is 5.9x, so the capital structure is manageable but not loose. The 0.7% dividend is small enough to be funded from operating cash flow. The relevant question is not whether free cash flow covers the dividend but whether the fleet can refinance at a cost that leaves a spread for equity. That is a function of power prices and credit ratings, not of the cash conversion ratio."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At {{price}} the market capitalises Constellation at {{marketCap}}, or {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA. The utility peer medians are 20.5x and 12.2x, so the premium is about five turns on earnings and 1.4 on EBITDA. P/FCF is {{pfcf}} and the free-cash-flow yield is {{fcfYield}}, both distorted by a near-zero free cash flow. On the FY2027 estimate of $13.40 the multiple is about 18.7x.",
      "The comparison with Vistra is the useful one. Vistra trades at 19.1x and 11.4x with an 11.2% return on capital and 3.5x leverage; Constellation trades at 25.4x and 13.6x with a 5.5% return and 2.9x leverage. The market is paying more for lower current returns because the nuclear fleet is long-lived, low-carbon and expensive to replace. That is a scarcity premium, and it depends on policy support for firm clean generation.",
      "What would justify the multiple is a power price curve that keeps rising and a capacity market that pays for availability. What would break it is a sustained fall in clearing prices, which would hit the infra-marginal rent directly, or a policy change that removes the support the fleet currently receives. The 0.7% dividend offers almost no income cushion while that argument is settled, and the shares have fallen 28.7% over a year."
    ]
  },
  "analysts": {
    "paragraphs": [
      "With 23 analysts and a mean target of $339, Yahoo Finance's 18 November 2026 estimate set spans a range of $240 to $399. The mean is 35% above the current price, and the low end is 4% below it.",
      "Revisions are positive, with the 90-day EPS change at 5.0% and the 30-day at 3.1%, helped by a Q3 FY26 result of $5.06 against a $3.89 estimate. Consensus expects $12.51 for 2026 and $13.40 for 2027. The target range is wide because earnings depend on power prices and hedges that analysts model differently, not because the asset base is in doubt."
    ]
  },
  "risks": {
    "intro": "Constellation's plants are hard to replace and expensive to run. The risks are about price, outages, regulation and the cost of the debt sitting in front of the equity.",
    "items": [
      {
        "title": "Wholesale power prices",
        "severity": "High",
        "detail": "Revenue is a floating price on a fixed cost base. A sustained fall in clearing prices removes margin that cannot be offset by cost cuts.",
        "watch": "Realised power price per megawatt-hour and the share of output sold forward."
      },
      {
        "title": "Outage and availability",
        "severity": "High",
        "detail": "An unplanned outage loses revenue while the fixed cost continues. Nuclear availability is the key operating variable.",
        "watch": "Capacity factor, refuelling outage duration and unplanned outage hours."
      },
      {
        "title": "Market and capacity rules",
        "severity": "Medium",
        "detail": "Capacity auctions, bid limits and market design changes can alter how much a plant is paid for being available.",
        "watch": "Capacity auction results and any change to market rules in each region."
      },
      {
        "title": "Leverage and refinancing",
        "severity": "Medium",
        "detail": "Net debt of $21.7B at 3.6x EBITDA means the equity return depends on the cost of debt staying contained.",
        "watch": "Maturity schedule, weighted average interest rate and credit ratings."
      },
      {
        "title": "Long-run demand and policy",
        "severity": "Medium",
        "detail": "The case for firm, low-carbon generation depends on policy and on how quickly demand grows. A change in either alters the value of the fleet.",
        "watch": "Load growth forecasts, state energy policy and any support mechanism for firm clean generation."
      }
    ],
    "watchlist": [
      {
        "title": "Contracted versus merchant output",
        "detail": "The more output sold forward, the more predictable the revenue and the lower the volatility."
      },
      {
        "title": "Realised price per megawatt-hour",
        "detail": "The cleanest read on whether the market is paying more for the same electrons."
      },
      {
        "title": "Free cash flow",
        "detail": "A business that has been cash-negative for four years needs to show that the spending was investment rather than maintenance."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Constellation is a large, low-marginal-cost generator selling into competitive markets. Revenue of $24.8B, an 18.5% operating margin and a net margin of 14.0% describe a business that has moved from loss-making to solidly profitable as power prices rose.",
      "The mechanism is worth remembering. Because nuclear fuel is cheap and the plant is expensive, the operating leverage is extreme: a 31% increase in revenue over four years turned a $346M operating loss into $3.09B of operating income. The same leverage will work in reverse if prices fall.",
      "The valuation is where the argument sits. At 18.8x EV/EBITDA the market is paying for the fleet to be treated as scarce, clean and long-lived. Whether that is right depends on power prices and on policy, neither of which the company controls."
    ],
    "questions": [
      "What share of output is sold forward, and at what price?",
      "How much of the 32,400 megawatts is nuclear, and what is its capacity factor?",
      "What does the earnings estimate assume about power prices next year?",
      "Is the free-cash-flow record explained by growth capital or by maintenance?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
