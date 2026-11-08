import type { StockStory } from "./types";

export const CEG: StockStory = {
  ticker: "CEG",
  kicker: "Utilities · Competitive power generation",
  title: "Constellation sells electrons at whatever the grid will pay",
  dek: "A nuclear fleet costs almost nothing to fuel and a great deal to maintain. That combination turns a modest move in power prices into a large move in operating income, in both directions.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $24.8B, up 20.5%, and the fleet totals 32,400 megawatts of nuclear, wind, solar, gas and hydro capacity.",
    "Operating income went from negative $346M in FY2021 to $3.09B in FY2025 on revenue that rose by less than a third.",
    "Free cash flow was $309M, a 1.2% margin, after negative free cash flow in four of the five preceding years.",
    "At $249.95 the shares trade at 26.0x earnings and 18.8x EV/EBITDA, and they sit near the bottom of a $228.63 to $380.78 52-week band.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1868275/000186827526000032/ceg-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001868275&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Constellation operates 32,400 megawatts of generating capacity across nuclear, wind, solar, natural gas and hydroelectric plants, organised into five regional segments: Mid-Atlantic, Midwest, New York, ERCOT and other power regions. It sells electricity to distribution utilities, municipalities, cooperatives and directly to commercial, industrial, governmental and residential customers.",
      "The important thing about a nuclear plant is its cost structure. Fuel is a small fraction of the cost of a megawatt-hour, because a gram of uranium produces an enormous amount of heat. Most of the cost is fixed: the plant, the people, the maintenance and the safety systems. Once the plant is running, almost every dollar of revenue above that fixed cost is profit, and almost every dollar below it is a loss.",
      "So the earnings of a merchant generator are not really about operations. They are about the price of power in the markets where the plants sit. Constellation has a market value of $90.3B at $249.95 a share, revenue of $24.8B and net debt of $21.7B.",
    ],
    quote:
      "A nuclear plant is a fixed-cost machine selling a floating-price product. That is a wonderful business when prices rise and an uncomfortable one when they fall.",
  },
  whatItDoes: {
    paragraphs: [
      "The fleet produces electricity and sells it in wholesale markets. In a competitive market, the price is set by the marginal cost of the last plant needed to meet demand, which is usually a gas plant. A nuclear plant with a lower marginal cost earns the difference between that clearing price and its own cost, which is the infra-marginal rent that funds the capital.",
      "The company also sells natural gas and renewable energy products to retail and wholesale customers, and provides energy-related services. Those businesses are smaller than the generation fleet but they use the same trading and dispatch capability.",
      "The regional split matters because each market has its own capacity mechanism, its own transmission constraints and its own regulatory treatment. A plant in the Mid-Atlantic is paid under a capacity auction that is different from the energy-only market in ERCOT, so two identical reactors can earn very different amounts.",
    ],
    bullets: [
      {
        title: "Nuclear",
        detail:
          "Baseload generation with low fuel cost and high fixed cost. The largest source of infra-marginal margin.",
      },
      {
        title: "Gas and hydro",
        detail:
          "Flexible capacity that sets or follows the clearing price depending on fuel cost and demand.",
      },
      {
        title: "Retail and services",
        detail:
          "Gas and renewable products sold to commercial and industrial customers, using the same dispatch platform.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is megawatt-hours sold multiplied by the price achieved. The price is partly locked in through forward sales and partly exposed to the spot market, so the realised price in any quarter is a blend of contracts signed months earlier and whatever the market paid at the time. That lag is why reported earnings can look out of step with the headlines about power prices.",
      "The cost side is dominated by fixed expense. Fuel is a small share, depreciation on the plants is large and non-cash, and the maintenance and refuelling outages are scheduled years in advance. A refuelling outage takes a unit offline for weeks and costs both the lost output and the expense of the work, which is why a single quarter can carry an unusual charge.",
      "The result is a business with a gross margin of 41.4% and an operating margin of 18.5%, where the gap is largely depreciation and fixed operating cost. It is also a business where a 10% change in the realised power price is worth far more than 10% of operating income, because the cost base does not move.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew at a 3.1% compound rate from $17.3B in FY2021 to $22.7B in FY2025. That is a slow growth rate for a company whose earnings went from a loss to $2.32B over the same period. The revenue line barely moved; the margin did all the work.",
      "The latest quarter grew 13.2% year over year. Third-party estimates point to $35.85B of revenue and $12.22 of EPS for the current fiscal year, then $37.16B and $13.40. A current-year revenue estimate 45% above the trailing figure is far more than organic growth, and a step change that large usually reflects a transaction or a change in consolidation rather than more megawatt-hours from the same plants.",
      "What actually drives growth in this business is the price of power, the amount of capacity available, and the contracts signed for future output. New capacity is expensive and slow to permit, so most of the near-term earnings growth comes from price and from selling forward at better terms.",
    ],
    bullets: [
      {
        title: "Power prices",
        detail:
          "The clearing price in each regional market is the single largest driver of revenue and margin.",
      },
      {
        title: "Capacity payments",
        detail:
          "Some markets pay for available capacity as well as energy, which supports revenue when demand is low.",
      },
      {
        title: "Fleet availability",
        detail:
          "Uptime determines how many megawatt-hours are sold. An unplanned outage is lost revenue at full cost.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a recovery story. Operating income was negative $346M in FY2021 and $495M in FY2022, then $1.61B, $4.35B and $3.09B. Net income went from negative $205M to $2.32B. Revenue over the same span rose 31%, so essentially all of the improvement came from margin expansion rather than from selling more electricity.",
      "The quarters show the same mechanism at a finer scale. Q1 FY26 earned a 30.9% operating margin on $7.54B of revenue and $4.49 of EPS; Q2 FY26 earned 9.9% on $5.84B and $1.42. A 21-point margin swing between adjacent quarters in the same business is not a change in strategy. It is seasonality, outage timing and the realised price mix.",
      "Return on equity is 10.3% and return on invested capital is 6.5%. The gap is leverage: $21.7B of net debt, or 3.6x EBITDA, sits ahead of the equity. The 1-year return of negative 28.4% against a 5-year return of 389.8% shows how much of the story has already been re-priced.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $309M over the trailing period, a 1.2% margin, against a market value of $90.3B. The price-to-free-cash-flow ratio of 292.2x is not a valuation input; it is a signal that the free-cash-flow figure is currently close to meaningless as a measure of earning power.",
      "The annual history explains why: free cash flow was negative $2.67B, negative $4.04B, negative $7.72B and negative $5.03B before turning positive at $1.29B in FY2025. A company that spends more than it earns for four years is either investing in something that will pay back later or destroying capital. For a generator, the distinction is whether the spending went into assets that earn a return or into keeping old plants running.",
      "The balance sheet carries $21.7B of net debt. That is manageable against a business with contracted and regulated-adjacent revenue, but it does mean the equity is sensitive to refinancing costs.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $249.95 the shares trade at 26.0x trailing earnings, 18.8x EV/EBITDA, 4.5x sales and 292.2x free cash flow. The EBITDA multiple sits between Vistra at 11.3x and NextEra at 26.9x, which is roughly where a merchant generator with a nuclear fleet should be: more certain than a pure merchant portfolio, less certain than a regulated utility.",
      "The 5-year return of 389.8% and the 1-year return of negative 28.4% are both informative. The first reflects a market that re-rated nuclear output as clean, firm and scarce. The second reflects a market that has since questioned how much of that value is already in the price.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus is built from 23 analysts, with a mean target of $337.77 and a range of $238.00 to $399.00. The bottom of that range sits under the current price, so not everyone agrees that the re-rating is complete.",
      "Estimates call for $35.85B of revenue and $12.22 of EPS this year, then $37.16B and $13.40. Next quarter is forecast at $9.35B and $3.89 across 15 analysts, well above the $5.84B just reported, which is consistent with a step change in the business rather than with the run-rate.",
      "These are third-party forecasts. A mean target is not a view from this report, and the wide range reflects genuine disagreement about the price of power over the next several years.",
    ],
  },
  risks: {
    intro:
      "Constellation's plants are hard to replace and expensive to run. The risks are about price, outages, regulation and the cost of the debt sitting in front of the equity.",
    items: [
      {
        title: "Wholesale power prices",
        severity: "High",
        detail:
          "Revenue is a floating price on a fixed cost base. A sustained fall in clearing prices removes margin that cannot be offset by cost cuts.",
        watch: "Realised power price per megawatt-hour and the share of output sold forward.",
      },
      {
        title: "Outage and availability",
        severity: "High",
        detail:
          "An unplanned outage loses revenue while the fixed cost continues. Nuclear availability is the key operating variable.",
        watch: "Capacity factor, refuelling outage duration and unplanned outage hours.",
      },
      {
        title: "Market and capacity rules",
        severity: "Medium",
        detail:
          "Capacity auctions, bid limits and market design changes can alter how much a plant is paid for being available.",
        watch: "Capacity auction results and any change to market rules in each region.",
      },
      {
        title: "Leverage and refinancing",
        severity: "Medium",
        detail:
          "Net debt of $21.7B at 3.6x EBITDA means the equity return depends on the cost of debt staying contained.",
        watch: "Maturity schedule, weighted average interest rate and credit ratings.",
      },
      {
        title: "Long-run demand and policy",
        severity: "Medium",
        detail:
          "The case for firm, low-carbon generation depends on policy and on how quickly demand grows. A change in either alters the value of the fleet.",
        watch: "Load growth forecasts, state energy policy and any support mechanism for firm clean generation.",
      },
    ],
    watchlist: [
      {
        title: "Contracted versus merchant output",
        detail:
          "The more output sold forward, the more predictable the revenue and the lower the volatility.",
      },
      {
        title: "Realised price per megawatt-hour",
        detail:
          "The cleanest read on whether the market is paying more for the same electrons.",
      },
      {
        title: "Free cash flow",
        detail:
          "A business that has been cash-negative for four years needs to show that the spending was investment rather than maintenance.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Constellation is a large, low-marginal-cost generator selling into competitive markets. Revenue of $24.8B, an 18.5% operating margin and a net margin of 14.0% describe a business that has moved from loss-making to solidly profitable as power prices rose.",
      "The mechanism is worth remembering. Because nuclear fuel is cheap and the plant is expensive, the operating leverage is extreme: a 31% increase in revenue over four years turned a $346M operating loss into $3.09B of operating income. The same leverage will work in reverse if prices fall.",
      "The valuation is where the argument sits. At 18.8x EV/EBITDA the market is paying for the fleet to be treated as scarce, clean and long-lived. Whether that is right depends on power prices and on policy, neither of which the company controls.",
    ],
    questions: [
      "What share of output is sold forward, and at what price?",
      "How much of the 32,400 megawatts is nuclear, and what is its capacity factor?",
      "What does the earnings estimate assume about power prices next year?",
      "Is the free-cash-flow record explained by growth capital or by maintenance?",
    ],
  },
};
