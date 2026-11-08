import type { StockStory } from "./types";

export const WMB: StockStory = {
  ticker: "WMB",
  kicker: "Energy · Midstream gas infrastructure",
  title: "Williams charges a toll, and a toll is worth more than a spread",
  dek: "Fifteen thousand miles of interstate gas pipeline earn a reservation charge whether or not the shipper moves a molecule. The commodity-exposed parts of the business explain why revenue and margin can move in opposite directions.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $18.4B, up 27.1%, with a 42.6% operating margin and a 38.7% net margin.",
    "Free cash flow is negative $593M over the trailing period while operating income is positive, because capital spending is running ahead of depreciation.",
    "The negative return on equity alongside positive net income implies book equity is negative, which makes the ratio uninformative.",
    "At $64.08 the shares trade at 11.3x earnings and 14.7x EV/EBITDA, a pair of multiples that disagree because the earnings figure includes a one-off.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/107263/000010726326000006/wmb-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000107263&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Williams owns and operates about 15,000 miles of interstate natural gas pipelines and 1,000 miles of natural gas liquids pipelines, and it produces olefins for petrochemical feedstocks. It does not explore for gas or sell it to homeowners. It moves other companies' molecules from where they are produced to where they are consumed, and it charges for the movement.",
      "That makes it closer to a toll road than to an oil company. A shipper signs a contract that reserves capacity on the pipeline, and the reservation charge is paid whether the gas flows or not. The pipeline earns a regulated return on the capital invested in it, and the rate case is where that return is argued. The commodity price matters at the margin, not at the core.",
      "The company is valued at $80.1B at $64.08 a share, The 52-week band runs from $57.50 to $80.08, and the shares are in the lower third of it. Trailing revenue is $18.4B, operating margin 42.6% and net margin 38.7%. The picture is complicated by a final quarter that is far out of line with the four before it, and that is the first thing to understand.",
    ],
    quote:
      "A midstream company is valued on the durability of its contracts, not on the volatility of its commodity. The two are easy to confuse when both appear in the same income statement.",
  },
  whatItDoes: {
    paragraphs: [
      "The interstate pipeline network is the core asset. Gas gathered at a wellhead is compressed, treated to remove water and impurities, and pushed through long-haul lines to city gates, power plants, industrial users and export terminals. Each of those steps is a separate service with its own tariff or contract.",
      "The natural gas liquids system does something different: it moves ethane, propane, butane and natural gasoline, which are separated from the gas stream and sold as feedstock to petrochemical plants or as fuel. Williams also owns olefin production, which turns those liquids into the chemical building blocks used in plastics.",
      "The customer list is a set of large, creditworthy counterparties: utilities, LNG exporters, industrial plants, producers that need takeaway capacity and petrochemical companies. Contracts are long-dated, often ten years or more, and the credit quality of the shipper matters as much as the volume.",
    ],
    bullets: [
      {
        title: "Transmission",
        detail:
          "Long-haul interstate gas pipelines earning reservation charges under regulated tariffs and long-term contracts.",
      },
      {
        title: "Gathering and processing",
        detail:
          "Field-level infrastructure that collects gas from producers and removes liquids before transmission.",
      },
      {
        title: "NGL and petrochemicals",
        detail:
          "Liquids pipelines and olefin production. The most commodity-exposed part of the portfolio.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The core revenue model is a capacity reservation. A shipper pays for the right to move a quantity of gas along a route, and that payment is largely independent of how much actually moves. The pipeline's cost base is mostly fixed: steel in the ground, compression, maintenance and the people who run it. Once the pipe is built and contracted, incremental throughput carries a very high contribution margin.",
      "The second model is fee-based processing, where the company charges a fixed fee per unit of gas processed and does not take ownership of the commodity. That is the cleanest form of midstream revenue because it removes price from the equation entirely.",
      "The third model is commodity-exposed, where the company keeps a share of the liquids it extracts or buys and resells gas. This is where revenue and margin can move in opposite directions. When gas and liquids prices fall, the marketing revenue line shrinks, but the fee-based profit does not. The result is a smaller top line and a higher margin, which is exactly the pattern in the annual table.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew at a 10.5% compound rate from $12.8B in FY2021 to $17.8B in FY2022, then fell to $12.0B in FY2023 before recovering to $14.9B in FY2025. Those swings are mostly commodity prices moving through the marketing and liquids businesses rather than pipelines being added or lost.",
      "The relationship between revenue and profit over the same period is the useful part. Revenue fell 32% from FY2022 to FY2023 while operating income rose 43%, from $3.02B to $4.31B. A company that earns more on less revenue is one whose revenue contains a large pass-through component and whose profit comes from contracted fees.",
      "Third-party estimates point to $12.4B of revenue and $2.42 of EPS for the current fiscal year, then $14.1B and $2.60. The current-year revenue estimate is below the trailing $18.4B, which is consistent with the idea that the trailing figure contains something that will not repeat.",
    ],
    bullets: [
      {
        title: "Contracted capacity",
        detail:
          "New pipeline capacity is added under long-term contracts signed before construction. The backlog is the visible growth.",
      },
      {
        title: "Rate escalators",
        detail:
          "Many contracts include annual inflation-linked increases, so revenue can rise without any new volume.",
      },
      {
        title: "Volume growth",
        detail:
          "Gas demand from power generation, LNG exports and industrial users determines how much spare capacity gets sold.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating income has been remarkably stable for a company with this much commodity exposure: $2.63B, $3.02B, $4.31B, $3.34B and $4.20B across the five fiscal years. That stability is the fee-based core doing its job.",
      "The trailing quarter is the anomaly. Q3 FY26 reported $6.45B of revenue and a 66.3% operating margin with $4.69B of net income, against revenue of $3.38B to $4.72B and net income of $546M to $865M in the four preceding quarters. A single quarter that large on a midstream income statement is almost always a non-cash item, such as a gain on a sale, a mark on a contract or a tax benefit. The cash-flow statement, not the earnings line, is where to check.",
      "The return on equity of negative 123.5% looks alarming and is not. With positive net income, a negative return on equity can only arise when book equity is negative, which happens to companies that have distributed or written down more than they have retained. The ratio then measures nothing useful, and the relevant tests become cash flow, leverage and the contracted revenue backlog.",
    ],
  },
  cash: {
    paragraphs: [
      "Trailing free cash flow is negative $593M, a negative 3.2% margin, after $2.71B in FY2021, $3.42B in FY2023 and $1.00B in FY2025. The decline is a capital-spending story rather than an operating one: operating income rose over the same period in which free cash flow fell, which means the cash went into new pipe.",
      "That is normal for a midstream company in an expansion phase, and it is only a problem if the spending does not earn a return. The test is whether each new pipeline is backed by a long-term contract at a tariff that covers its cost of capital. A midstream company that builds on speculation is a different and much riskier business.",
      "The balance sheet carries $1.76B of net cash, or net debt of negative 0.3x EBITDA. Combined with long-dated contracts, that is a comfortable position for a business whose main risk is a shipper defaulting rather than a price falling.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $64.08 the shares trade at 11.3x trailing earnings, 14.7x EV/EBITDA, 4.3x sales and a negative free-cash-flow yield. The two earnings multiples point in opposite directions, and the reason is that the P/E uses a net income figure inflated by the Q3 item while the EV/EBITDA uses an EBITDA figure that is less affected.",
      "A 14.7x EV/EBITDA multiple is high next to ExxonMobil at 7.0x or EOG at 4.5x, and that is not a mispricing. Contracted, inflation-linked, regulated cash flow deserves a higher multiple than commodity-exposed cash flow, because the range of outcomes is narrower. Investors pay for certainty, and midstream sells it.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus draws on 24 analysts. The mean target is $85.42 and the range runs from $69.00 to $103.00. The current price sits near the low end of that range.",
      "Estimates call for $12.4B of revenue and $2.42 of EPS this fiscal year across 15 analysts, then $14.1B and $2.60 across 16. Next quarter is forecast at $3.32B and $0.62, which is a fraction of the $6.45B just reported and confirms that the market does not expect the Q3 revenue level to repeat.",
      "The low analyst count for the near quarters, at eight and six, is worth noting. A thin estimate base makes the average less informative than it looks.",
    ],
  },
  risks: {
    intro:
      "The risks in midstream are contractual, regulatory and financial rather than geological. The gas will still be there; the question is who pays to move it and at what rate.",
    items: [
      {
        title: "Rate regulation",
        severity: "High",
        detail:
          "Interstate pipeline rates are regulated. A rate case can lower the allowed return or force refunds, which changes the economics of assets already built.",
        watch: "Rate-case filings, settlement terms and the allowed return on equity.",
      },
      {
        title: "Contract renewal",
        severity: "High",
        detail:
          "Long-term contracts eventually expire. Renewing at a lower rate, or not at all, converts a fee stream into spare capacity.",
        watch: "Contract expirations, weighted average contract length and recontracting spreads.",
      },
      {
        title: "Capital allocation",
        severity: "Medium",
        detail:
          "Growth capital is only value-creating if the project is contracted at a return above the cost of capital. Speculative build is the classic midstream mistake.",
        watch: "Project backlogs, capital spending against budget and returns disclosed on completed expansions.",
      },
      {
        title: "Counterparty credit",
        severity: "Medium",
        detail:
          "A producer or shipper in financial distress can fail to pay reservation charges, and the pipeline still has to operate.",
        watch: "Customer concentration and the credit ratings of the largest shippers.",
      },
      {
        title: "Volume and demand",
        severity: "Medium",
        detail:
          "Gas demand from power, LNG and industry determines utilisation. Lower utilisation reduces the value of spare capacity.",
        watch: "Throughput volumes, LNG export volumes and power burn.",
      },
    ],
    watchlist: [
      {
        title: "Fee-based share of EBITDA",
        detail:
          "The higher the contracted share, the less the earnings depend on the commodity price.",
      },
      {
        title: "Distributable cash flow",
        detail:
          "The midstream measure that adds back maintenance capital and removes items that do not recur.",
      },
      {
        title: "Leverage",
        detail:
          "Net debt to EBITDA is the constraint on both distributions and new projects.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Williams is a toll collector on the gas network, with a large contracted base and a smaller commodity-exposed overlay. Operating income has been stable across five years in which revenue swung by 30%, which is what a fee-based model is supposed to look like.",
      "The reported figures need care. A negative return on equity, a negative free-cash-flow margin and a quarterly net income several times the run-rate are all artefacts of capital structure, capital spending and a one-off item rather than signs of a broken business. Reading them literally would produce the wrong conclusion.",
      "The question that matters is how much of the EBITDA is contracted and for how long. That single fact determines whether 14.7x is expensive or reasonable.",
    ],
    questions: [
      "What share of EBITDA comes from fee-based rather than commodity-exposed contracts?",
      "What did the Q3 FY26 net income actually consist of?",
      "How much of the capital budget is backed by signed long-term contracts?",
      "What is book equity, and why is it negative?",
    ],
  },
};
