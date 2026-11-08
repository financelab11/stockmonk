import type { StockStory } from "./types";

export const EQIX: StockStory = {
  ticker: "EQIX",
  kicker: "Real estate · Data centres and interconnection",
  title: "Equinix builds the building two years before the tenant arrives",
  dek: "Retail colocation is a property business with a two-year lead time between spending the capital and collecting the rent. That lag is why free cash flow is negative while revenue grows at a steady double digit rate.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $10.1B, up 11.1%, with a 22.5% operating margin and 16.4% net margin.",
    "Free cash flow is negative $1.55B, a 15.4% negative margin, because construction spending runs well ahead of depreciation.",
    "Net debt is $19.05B at 4.3x EBITDA, but EBITDA covers interest 15.3 times, which is the number that matters for a REIT.",
    "At $1,012.71 the shares trade at 60.9x earnings and 26.9x EV/EBITDA, while return on invested capital is 5.3%.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1101239/000110123926000032/eqix-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001101239&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Equinix runs retail data centres and sells colocation and interconnection. Its customers are network operators, cloud and IT service providers, financial firms and media companies. They do not buy a warehouse for servers; they buy a position inside a building where hundreds of other networks and businesses are already present.",
      "That distinction is the whole business. A company that needs to connect to many networks, clouds and counterparties wants to be in the same building as all of them, because a cable run inside a facility is faster, cheaper and more reliable than a long-haul connection. Each new customer makes the building more valuable to the next one, which is a network effect built out of concrete and fibre.",
      "Equinix is valued at $100.2B at $1,012.71 a share, with revenue of $10.1B, operating margin of 22.5% and $19.05B of net debt. The shares have ranged from $720.62 to $1,128.68 over the past year, about three-quarters of the way up that band.",
    ],
    quote:
      "A data centre is valuable because of who else is inside it. That is why the landlord cares more about the ecosystem than about the square footage.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is space, power and connectivity. A customer leases a cage or a cabinet, pays for the electricity it draws and buys cross-connects to other customers in the same building. The rent is the base; the cross-connects and the power are where the incremental margin lives.",
      "The interconnection revenue is small in absolute terms and disproportionately valuable. A cross-connect is a physical cable between two customers, installed once and billed monthly. It costs almost nothing to maintain and it is the reason a customer cannot easily leave: moving a cage means rebuilding every connection inside it.",
      "The portfolio spans the Americas, Europe and Asia, and the mix matters because each region has a different power market, a different planning regime and a different set of network operators to attract.",
    ],
    bullets: [
      {
        title: "Colocation",
        detail:
          "Cages and cabinets leased to enterprises, networks and cloud providers. Revenue is space plus power.",
      },
      {
        title: "Interconnection",
        detail:
          "Cross-connects and peering inside the building. High margin, high retention and the source of the network effect.",
      },
      {
        title: "Development",
        detail:
          "New buildings and expansions. Capital is spent years before the revenue arrives.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue per cabinet rises as the ecosystem densifies, because a well-connected building can charge more for the same space. That is the operating leverage of a data centre: the building's cost is largely fixed once it is built, so additional customers and additional cross-connects carry very high incremental margins.",
      "The cost side is dominated by depreciation of the building and the mechanical and electrical plant, by electricity, and by the staff who run the site. Power is the variable that matters most. A data centre is an electricity consumer with a very high load density, and the price and availability of power determine both the cost of operating and the ability to build.",
      "The reported gross margin of 51.6% is a reasonable measure of the property economics, and the 22.5% operating margin is what survives depreciation and site costs. The gap between the two is the capital intensity of the model.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew at an 8.8% compound rate from $6.64B in FY2021 to $9.22B in FY2025, and the trailing $10.1B grew 11.1%. That is a steady rate for a capital-intensive business, and it has been remarkably consistent across the period.",
      "Operating income grew faster than revenue, from $1.11B in FY2021 to $1.85B in FY2025, and net income grew faster still, from $500M to $1.35B. The improvement came from pricing, from the mix shifting toward interconnection and from the maturation of buildings that were under construction at the start of the period.",
      "Third-party estimates point to $10.35B of revenue and $18.74 of EPS this fiscal year, then $11.52B and $20.70. That is a continuation of the same rate, which for a company with a multi-year construction pipeline is a reasonable thing to forecast and a difficult thing to accelerate.",
    ],
    bullets: [
      {
        title: "Interconnection attach",
        detail:
          "Each new customer brings cross-connects, which carry high margins and raise the value of the building.",
      },
      {
        title: "Power and land",
        detail:
          "New capacity depends on securing power and land in markets where both are increasingly constrained.",
      },
      {
        title: "Pricing power",
        detail:
          "A well-connected building can raise renewal prices because the alternative is rebuilding the ecosystem elsewhere.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly record is unusually smooth for a company spending this much on construction. Revenue went from $2.26B in Q2 FY25 to $2.57B in Q3 FY26, and the operating margin ranged from 17.4% to 25.3% across six quarters. There is no anomalous quarter here, which makes the trailing figures more reliable than they are for several other real estate companies in this coverage group.",
      "Return on equity is 11.3% and return on invested capital is 5.3%. The gap between those two numbers is leverage, and the low absolute level of the return on capital is a feature of a development business: a building under construction earns nothing while it consumes capital, so the return on the total invested base lags the return on the buildings that are already stabilised.",
      "The correct comparison is not the 5.3% return on the whole capital base but the yield on a completed building against the cost of the capital used to build it. That spread is not disclosed in this dataset, and it is the single most important number for understanding whether the development programme creates value.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $1.55B, a 15.4% negative margin. The annual record has been negative in two of the last five years: negative $204M in FY2021, then $685M, $436M, $183M and negative $400M.",
      "That is what a development-led REIT looks like. Cash goes out for land, construction and power infrastructure years before the building is leased. Depreciation, which is the accounting charge that offsets the spending on the income statement, arrives on a much slower schedule. The gap between the two is the negative free cash flow.",
      "Net debt is $19.05B at 4.3x EBITDA, which sounds high for a REIT until you look at interest cover: EBITDA covers interest 15.3 times. The debt is large relative to earnings but cheap relative to cash flow, and the maturity profile matters more than the absolute level. The company is not at risk of missing an interest payment; it is at risk of refinancing at a higher rate.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $1,012.71 the shares trade at 60.9x trailing earnings, 26.9x EV/EBITDA, 11.9x sales and a negative free-cash-flow yield. Neither the earnings multiple nor the free-cash-flow yield is the right lens. For a REIT, the standard measure is price to funds from operations, or to the adjusted variant that also deducts recurring capital spending.",
      "On EV/EBITDA, 26.9x is a full multiple, above Prologis at 20.1x and well above the industrial companies in the materials coverage. The premium reflects the growth rate, the interconnection moat and the scarcity of well-connected data centre capacity. It also reflects a market that expects the demand for computing capacity to keep rising.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-two analysts publish targets. The attributed mean is $1,234.88, inside a range of $1,100.00 to $1,380.00. The whole range sits above the current price, which is an unusually one-sided distribution.",
      "Estimates call for $10.35B of revenue and $18.74 of EPS this fiscal year, then $11.52B and $20.70. Next quarter is forecast at $2.70B and $4.29, above the $2.57B just reported.",
      "The estimate coverage is thinner than the target coverage, with five analysts on the next quarter and three on the current fiscal year. A one-sided target range supported by three revenue estimates is a weaker signal than it appears.",
    ],
  },
  risks: {
    intro:
      "Equinix's risks are power, construction, tenant concentration and the cost of capital. The demand for interconnection is not in question; the ability to build capacity at a return is.",
    items: [
      {
        title: "Power availability and cost",
        severity: "High",
        detail:
          "A data centre is a large electricity customer. Constrained grids and higher power prices limit where the company can build and raise operating costs.",
        watch: "Power procurement disclosures, utility contracts and cost per megawatt of capacity.",
      },
      {
        title: "Development and leasing lag",
        severity: "High",
        detail:
          "Capacity is built before it is leased. A slower enterprise or cloud spending cycle leaves capital in empty space.",
        watch: "Development pipeline, opening dates and the utilisation of recently opened buildings.",
      },
      {
        title: "Interest rates and refinancing",
        severity: "Medium",
        detail:
          "Net debt is $19.05B. Interest cover of 15.3x is comfortable, but refinancing at higher rates raises the cost of the whole capital programme.",
        watch: "Weighted average cost of debt, maturity schedule and interest cover.",
      },
      {
        title: "Tenant concentration",
        severity: "Medium",
        detail:
          "A small number of large cloud and network customers account for a meaningful share of revenue and of interconnection demand.",
        watch: "Top-customer disclosure and the mix between network, cloud and enterprise customers.",
      },
      {
        title: "Technology and competition",
        severity: "Medium",
        detail:
          "Hyperscale self-build and alternative interconnection models can reduce the premium a retail colocation provider commands.",
        watch: "Pricing on renewals and the share of new capacity leased to large cloud customers.",
      },
    ],
    watchlist: [
      {
        title: "Interconnection revenue growth",
        detail:
          "The highest-margin and stickiest part of the model, and the best evidence that the ecosystem is strengthening.",
      },
      {
        title: "Yield on cost",
        detail:
          "The return on a completed building against what it cost to build, compared with the cost of capital.",
      },
      {
        title: "Interest cover",
        detail:
          "With this much debt, the coverage ratio matters more than the absolute level of leverage.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Equinix is a data centre landlord whose real product is interconnection. Revenue of $10.1B, a 22.5% operating margin and 11.1% growth describe a business with a genuine moat and a steady demand backdrop.",
      "The financial statements require a different lens from an industrial company. Negative free cash flow is the result of building ahead of demand, a 5.3% return on invested capital reflects assets that are not yet earning, and a 60.9x earnings multiple reflects depreciation and gains rather than cash earnings.",
      "The decisive question is whether the yield on a completed building exceeds the cost of the capital used to build it. If it does, the development programme is a compounding machine. If it does not, the growth is expensive.",
    ],
    questions: [
      "What yield on cost is the development pipeline earning, and how does it compare with the cost of capital?",
      "How much of revenue comes from interconnection rather than space and power?",
      "What is the weighted average cost of debt, and when does it reprice?",
      "How concentrated is revenue among the largest cloud and network customers?",
    ],
  },
};
