import type { StockStory } from "./types";

export const LIN: StockStory = {
  ticker: "LIN",
  kicker: "Materials · Industrial gases",
  title: "Linde sells air, and the contract is what makes it valuable",
  dek: "Oxygen and nitrogen are commodities. A plant built next to the customer's fence line, supplying it through a pipe for fifteen years at a price with an escalator, is not.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $36.2B, up 8.2%, with a 25.3% operating margin and 19.5% net margin.",
    "Operating income rose 49% from FY2022 to FY2023 while revenue fell, which is the clearest evidence of pricing power in the file.",
    "Free cash flow is $5.1B, a 14.0% margin, and the balance sheet holds $3.95B of net cash.",
    "The reported return on equity of 386.1% is an artefact of a very small equity base and is not a usable profitability measure.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1707925/000162828026011430/lin-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001707925&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Linde is the largest industrial gas company in the world by revenue and market share. It separates air into oxygen, nitrogen and argon, produces hydrogen and carbon dioxide, and delivers those gases to customers who cannot operate without them: steel mills, chemical plants, refineries, hospitals, food processors and electronics manufacturers.",
      "The product is a commodity in the literal sense. Oxygen is oxygen. What distinguishes Linde is the delivery model. For a large customer, the company builds an air separation plant on or next to the customer's site and supplies gas through a dedicated pipeline under a long-term contract with a take-or-pay commitment and a price escalator. The customer gets certainty of supply without owning the plant; Linde gets a contracted revenue stream that behaves more like a utility than like a chemical company.",
      "Linde is valued at $236.5B at $515.25 a share, with revenue of $36.2B, operating margin of 25.3% and $3.95B of net cash. A 52-week band of $387.78 to $548.20 leaves the shares close to the top, which tells you the market has already noticed the quality of the cash flows.",
    ],
    quote:
      "The barrier to entry in industrial gases is not the chemistry. It is the twenty-year contract and the plant that has to be built before the first molecule is sold.",
  },
  whatItDoes: {
    paragraphs: [
      "The on-site business is the core. Linde builds the plant, owns it, operates it and pipes the gas to a single large customer. The contract typically runs for more than a decade, includes a minimum volume commitment and escalates with an index. That structure converts a commodity into a long-dated, inflation-linked cash flow.",
      "The merchant business is different. Liquid oxygen, nitrogen and argon are produced in central plants, loaded onto tankers and delivered to smaller customers who do not have the volume for an on-site plant. Merchant pricing is more cyclical, because it responds to local supply and demand rather than to a contract.",
      "The healthcare business supplies medical oxygen and related equipment to hospitals and home-care patients, often under multi-year agreements with health systems. The engineering business designs and builds process plants for other companies, which is a project business with a different margin profile from the gas supply business.",
    ],
    bullets: [
      {
        title: "On-site supply",
        detail:
          "A dedicated plant and pipeline under a long-term take-or-pay contract. The most durable part of the portfolio.",
      },
      {
        title: "Merchant gases",
        detail:
          "Liquid gas delivered by tanker to smaller customers. Priced locally and more exposed to the cycle.",
      },
      {
        title: "Healthcare and engineering",
        detail:
          "Medical gases and equipment, plus plant design and construction for third parties.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The unit economics of an air separation plant are simple and brutal at the start. Building the plant costs a great deal of money, and the return depends on running it at high utilisation for decades. Once it is running, most of the cost is electricity for compression and separation, plus maintenance and the people who operate it. The gas itself is free, because it is air.",
      "That cost structure is why industrial gas margins expand so powerfully when prices rise. Electricity is the largest variable cost and it is largely fixed per unit of output, so a price increase on the contract flows almost entirely to operating income. It is also why the business is sensitive to the price of power: a sustained rise in electricity costs compresses the spread until the next contract escalator catches up.",
      "Revenue is a mix of volume, price and pass-through of energy costs. Some contracts pass energy costs directly to the customer, which protects the margin but makes revenue more volatile. Others have fixed prices with an escalator, which protects the margin in a different way but exposes the company if energy costs spike between resets.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew at a 3.1% compound rate from $30.8B in FY2021 to $34.0B in FY2025. That is slow. The profit line tells a very different story: operating income went from $4.98B to $8.92B over the same period, an increase of 79%.",
      "The pivotal year was FY2023. Revenue fell 1.5% from $33.36B to $32.85B, and operating income rose 49% from $5.37B to $8.02B. A company that earns half again as much on slightly less revenue has either raised prices faster than costs or restructured its cost base, and in Linde's case both happened. That year is the single best illustration of what a contracted, high-barrier business can do when pricing power is exercised.",
      "Third-party estimates point to $36.9B of revenue and $17.90 of EPS this fiscal year, then $38.7B and $19.54. The latest quarter grew 9.2%, which is faster than the historical rate and suggests the contract escalators and volumes are both contributing.",
    ],
    bullets: [
      {
        title: "Contract escalators",
        detail:
          "Most on-site contracts reset annually with an inflation index, so revenue rises without new volume.",
      },
      {
        title: "New plant investment",
        detail:
          "Each new on-site plant adds contracted revenue for a decade or more, but only after the capital is spent.",
      },
      {
        title: "Industrial production",
        detail:
          "Merchant volumes track the customers' output, so a manufacturing slowdown shows up in the merchant book first.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly record is unusually steady for an industrial company. Operating margin sat between 27.5% and 27.8% for the four quarters to Q2 FY26, with revenue between $8.49B and $9.29B. Then Q3 FY26 reported $9.40B of revenue, the highest in the series, at a 22.9% margin, the lowest.",
      "That divergence is worth noting. Revenue rose while the margin fell, which means the incremental business came at a worse spread, or a cost item landed in the quarter. Either way, it is the kind of detail that gets lost when a company is described as a consistent compounder.",
      "The reported return on equity of 386.1% should be discarded. A return that high with net cash on the balance sheet means the equity denominator is tiny, not that the business earns extraordinary returns on capital. Purchase accounting from the merger that created the current company, combined with years of distributions, can leave book equity close to zero. Return on invested capital is the measure that would be comparable across companies, and it is not disclosed in this dataset.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $5.08B, a 14.0% margin, and the shares trade at 46.6x that figure for a 2.1% yield. The annual record is stable: $6.64B, $5.69B, $5.52B, $4.93B and $5.09B across the five fiscal years.",
      "That stability is the point of the business model. A company with long-term contracts and a large fixed asset base should generate cash consistently, and Linde does, even in years when revenue is flat. The small decline from FY2021 to FY2024 reflects a rising capital budget as new plants were commissioned, not a deterioration in the underlying cash generation.",
      "The balance sheet carries $3.95B of net cash. For a company that builds capital-intensive plants, that is a deliberate choice to keep financial flexibility rather than a sign that it has run out of things to build.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $515.25 the shares trade at 33.6x trailing earnings, 17.9x EV/EBITDA, 6.4x sales and 46.6x free cash flow. Against the other large materials companies in the peer table it sits below Sherwin-Williams at 24.3x and Ecolab at 26.7x on EBITDA, and above Freeport at 9.8x. On sales it is the most expensive of the four, at 6.4x against Freeport's 3.5x.",
      "A 17.9x EBITDA multiple for a company growing revenue at 8% is a full price. The justification is the contract structure: the cash flows are long-dated and indexed, which makes them worth more per dollar than the cash flows of a company selling into spot markets. The risk is that the market is capitalising the current margin as if it were permanent.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-seven analysts are in the attributed consensus. The mean target is $550.85 and the range runs from $400.00 to $600.00. The low end is well below the current price, which is unusual for a company with this record of stability.",
      "Estimates call for $36.9B of revenue and $17.90 of EPS this fiscal year across 29 analysts, then $38.7B and $19.54 across 29. Next quarter is forecast at $9.41B and $4.49, in line with the $9.40B just reported.",
      "Twenty-nine analysts covering both years is a broad base. When that many people agree on a revenue number within a few hundred million dollars, it usually means the contracts make the near-term revenue unusually visible.",
    ],
  },
  risks: {
    intro:
      "Linde's risks are about energy cost, contract renewal and the capital intensity of staying relevant. The demand for industrial gases is not going away.",
    items: [
      {
        title: "Electricity and energy costs",
        severity: "High",
        detail:
          "Power is the largest variable cost in air separation. A sustained increase compresses the spread until contract escalators catch up.",
        watch:
          "Energy cost per unit, the share of contracts with pass-through clauses, and the lag before escalators reset.",
      },
      {
        title: "Contract renewal",
        severity: "High",
        detail:
          "The value of the on-site book depends on renewing long-term contracts at similar terms when they expire.",
        watch: "Contract expiry schedules, renewal pricing and the share of revenue under long-term agreement.",
      },
      {
        title: "Industrial demand",
        severity: "Medium",
        detail:
          "Merchant volumes track the output of steel, chemical and manufacturing customers, which is cyclical.",
        watch: "Merchant volume growth and industrial production indices in the key regions.",
      },
      {
        title: "Capital intensity",
        severity: "Medium",
        detail:
          "Every on-site contract requires a plant to be built before revenue starts. Poor project selection shows up years later as a low return on capital.",
        watch: "Capital spending, project approvals and the return disclosed on new plant investment.",
      },
      {
        title: "Regulation and decarbonisation",
        severity: "Medium",
        detail:
          "Emissions rules affect hydrogen and large plants, and low-carbon projects carry permitting and cost risk.",
        watch: "Permit approvals, carbon pricing and the capital committed to low-carbon projects.",
      },
    ],
    watchlist: [
      {
        title: "Price versus energy cost",
        detail:
          "The spread between what customers pay and what the plant consumes is the operating margin in one line.",
      },
      {
        title: "Contracted revenue share",
        detail:
          "The higher the share under long-term on-site contracts, the more stable the earnings.",
      },
      {
        title: "Return on invested capital",
        detail:
          "The measure that matters for a company with this much capital in the ground, and the one that the reported return on equity obscures.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Linde is the scale leader in a business where scale, contracts and plant location are the barriers to entry. Revenue of $36.2B at a 25.3% operating margin and $5.1B of free cash flow describe a genuinely high-quality industrial company.",
      "The FY2023 result is the number to remember: operating income up 49% on flat-to-lower revenue. That is what a contracted business with pricing power looks like when it decides to use it, and it is the reason the market pays 17.9x EBITDA for a company growing at 8%.",
      "The caution is that the margin is now at a high level. A 25.3% operating margin is a good outcome for industrial gases, and the valuation assumes it holds. If energy costs rise faster than the escalators, or if contract renewals come in weaker, both the earnings and the multiple would move in the same direction.",
    ],
    questions: [
      "What share of revenue is under long-term on-site contracts with escalators?",
      "How much of the energy cost is passed through, and with what lag?",
      "What returns are the new plants earning on the capital invested in them?",
      "Is the 25.3% operating margin a mid-cycle level or a peak?",
    ],
  },
};
