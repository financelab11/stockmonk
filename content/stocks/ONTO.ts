import type { StockStory } from "./types";

export const ONTO: StockStory = {
  ticker: "ONTO",
  kicker: "Semiconductor equipment · Process control",
  title: "Onto Innovation sells the inspection step that decides whether a chip can ship",
  dek: "Process control is a small line in a fab's equipment budget and a decisive input to its yield. Onto's sales follow packaging capex, and its operating margin has just travelled a full cycle in six quarters.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $1.12B, up 8.1%, while operating income fell from $187.1M in FY2024 to $132.9M in FY2026 on almost flat sales.",
    "The latest quarter, Q2 FY27, produced $343.1M of revenue at an 18.5% operating margin, against a 5.2% trough in Q4 FY26.",
    "Free cash flow of $252.5M was a 22.5% margin and well above net income.",
    "The dataset carries no trailing earnings multiple; the consensus estimate of $8.11 for this fiscal year next to a $173.28 close is arithmetic the reader has to finish.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/704532/000119312526066937/onto-20260103.htm",
  irUrl: "https://www.ontoinnovation.com",
  bigPicture: {
    paragraphs: [
      "Onto Innovation builds the inspection and metrology tools that semiconductor factories use to check work in progress. A system that finds a particle, a scratch or a misaligned layer before the wafer is finished saves the cost of every step that would have followed. Onto sells those tools to fabs and assembly houses in Taiwan, South Korea, Japan, China, Southeast Asia, the United States and Europe, and then supports them in the field.",
      "The question that decides the next few years is whether advanced packaging turns process control into a permanent increase in content per unit, or whether it is a capex spike that fades once the first wave of capacity is installed. Onto's revenue is tied to what customers spend on equipment, not to how many chips those customers eventually sell, so the answer shapes the whole model.",
      "The trailing figures are mixed. Revenue of $1.12B was up 8.1%, but operating income fell from $187.1M in FY2024 to $132.9M in FY2026 while revenue moved only from $987.3M to $1.01B. The quarterly sequence is brighter: revenue climbed from $218.2M in Q3 FY26 to $343.1M in Q2 FY27, and the operating margin from a 5.2% low in Q4 FY26 to 18.5%. At $173.28 the shares sit roughly a fifth of the way up a 52-week range of $121.58 to $386.46, on an $8.5B market capitalisation.",
    ],
    quote:
      "Inspection does not make a chip faster. It decides whether the chip can be sold, which is why yield tools hold up longer than most equipment budgets when a fab is chasing a new package.",
  },
  whatItDoes: {
    paragraphs: [
      "Two jobs sit under one roof. Inspection looks for defects: particles, scratches, incomplete etches, voids in a bond. Metrology measures the dimensions that determine whether a device will work, such as film thickness, feature size and the alignment between layers. Both are yield tools, and both are sold to the same buyer, the process or yield engineer trying to get a new flow into production.",
      "The customer list is narrower than the addressable market implies. Leading-edge foundries, memory manufacturers, outsourced assembly houses and specialty fabs making RF, power, image-sensor and MEMS devices all buy process control, but each buys in bursts tied to a node or package transition. The installed base carries weight: every tool sold creates service, spares and software revenue for years, and it puts Onto in the room when the customer plans the next generation.",
    ],
    bullets: [
      {
        title: "Inspection",
        detail:
          "Finds defects across a wafer or panel. The output is a pass-or-fail map that decides whether material continues down the line.",
      },
      {
        title: "Metrology",
        detail:
          "Measures the structure being built. The output is a number the process engineer uses to adjust a tool before the next lot runs.",
      },
      {
        title: "Advanced packaging",
        detail:
          "Panel-level and wafer-level assembly create failure modes that did not exist on a plain wafer: warpage, die shift, voids at the bond.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is capital equipment, recognised when a system is accepted rather than when the customer's product ships. That single fact explains most of the volatility. Gross margin was 55.5% on a trailing basis, and operating expense has to make up the difference to the 23.0% operating margin: engineering, applications support, sales and a service network that has to be maintained whether or not orders arrive.",
      "That cost base is largely fixed in the short run, which is why the margin moved so violently. Revenue of $987.3M in FY2024 produced $187.1M of operating income; revenue of $1.01B in FY2026 produced $132.9M. More sales and less operating profit is not a pricing story. It is the cost of carrying a development programme through a pause in customer spending.",
      "Pricing power comes from the cost of the mistake rather than from scarcity. A process-control tool is a small fraction of a fab's equipment budget, but a missed defect can scrap a lot worth far more than the tool. That asymmetry supports gross margins in the mid-50s and makes the relationship sticky once a process is qualified.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 17.7% a year across the fiscal years in the dataset, and the latest quarter grew 35.3%. Those two numbers describe different things. The compounding reflects a customer base shifting toward advanced packaging and specialty devices. The quarterly jump reflects a recovery off a weak Q4 FY26, when revenue fell to $218.2M.",
      "The drivers are countable. Each generation of advanced packaging adds inspection and measurement steps, and panel-level processing moves the same problem onto a larger substrate. Memory stacking adds steps that did not exist a few years ago. Mature-node capacity in China adds tools that are less sophisticated but sold in volume. Third-party estimates point to $1.44B of revenue and $8.11 of EPS this fiscal year, then $1.88B and $11.70. That is a forecast of a packaging upcycle, not a statement about the long-run growth rate.",
    ],
    bullets: [
      {
        title: "Packaging content",
        detail:
          "More layers and finer bumps mean more measurement points per finished unit.",
      },
      {
        title: "Specialty devices",
        detail:
          "RF, power, image sensors and MEMS need process control at mature nodes, where the tool set is simpler but the volumes are large.",
      },
      {
        title: "Installed-base service",
        detail:
          "Tools already in the field generate revenue that does not depend on the next order.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Read the quarters rather than the annual table. Operating margin was 23.7% in Q1 FY26, then 12.7%, 10.9% and 5.2% as revenue slid to $218.2M by Q4 FY26, then 11.5% and 18.5% as revenue climbed back to $343.1M. That path is operating leverage working in both directions on a cost base that could not shrink as fast as sales.",
      "The trailing figures are consequently depressed. Net margin is 11.8%, diluted EPS is $2.66 and return on equity is 6.8%. A 6.8% return on equity is low for a business earning a 23.0% operating margin, and the gap points at the balance sheet: acquisitions have added goodwill and intangibles that count in equity but do not produce operating profit.",
      "Cash conversion is better than the income statement suggests. Free cash flow of $252.5M was a 22.5% margin against a trailing net margin of 11.8%, which is normal for a business carrying amortisation, share-based compensation and working capital that unwinds when orders slow.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow of $252.5M, a 22.5% margin, is the strongest line in the trailing accounts. Capital expenditure is modest because Onto assembles rather than fabricates. The cash cost of growth shows up in inventory and receivables, both of which move with the order book and both of which reverse when a quarter is weak.",
      "The dataset does not report net debt, so the balance sheet has to be judged from what is visible: a business converting more than a fifth of revenue into free cash flow while carrying an equity base enlarged by acquisitions. Return on that equity, 6.8%, is the number that says whether the acquired assets are earning their keep.",
      "The cash flow supports development spending through a downturn, which matters in a market where the next packaging generation is decided two or three years before it ships. It does not, on its own, show that the acquisitions were priced well.",
    ],
  },
  valuation: {
    paragraphs: [
      "No trailing price-to-earnings or EV/EBITDA figure is supplied for Onto, so the multiple has to be inferred from the inputs: an $8.5B market capitalisation, a $173.28 close, trailing EPS of $2.66 and a consensus estimate of $8.11 for this fiscal year. Anyone doing that arithmetic is pricing a recovery that has not yet appeared in the annual accounts.",
      "The peer table offers a range rather than an answer. Among the comparables, EV/EBITDA runs from 23.9x to 31.8x and trailing earnings multiples from 30.0x to 87.7x, a wide spread for companies selling into the same capital cycle. The difference is usually mix, since royalty-like revenue deserves a higher multiple than tool revenue, not a disagreement about where the cycle sits.",
      "Stockmonk does not publish a target price. The consensus figure appears in the next section as third-party context only.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twelve analysts contribute to the third-party consensus, with a mean target of $383.33 and a range of $330.00 to $450.00. Every point in that range sits above the $173.28 close. Either the estimates embed a recovery the share price does not, or the targets have not caught up with the de-rating.",
      "The estimate path is the interesting part. After $1.21 of EPS in Q2 FY27, the consensus expects $2.30 next quarter on $392.0M of revenue and $2.48 the quarter after on $412.6M. That is a steep step-up in profit per dollar of sales, and it assumes the operating margin keeps expanding toward the early FY2026 level.",
      "For the full year the consensus is $1.44B of revenue and $8.11 of EPS, rising to $1.88B and $11.70 next year. These are third-party forecasts, not Stockmonk projections, and they are the numbers that have to be right for the share price to be supported by earnings rather than by a re-rating.",
    ],
  },
  risks: {
    intro:
      "Onto's risks concentrate in one variable: whether customers keep spending on packaging and specialty-node capacity. The balance sheet is not the constraint. The order book is.",
    items: [
      {
        title: "Packaging capex pause",
        severity: "High",
        detail:
          "Revenue is recognised on tool acceptance, so a one-quarter delay in a customer's construction schedule removes revenue rather than deferring it. The FY2026 margin path shows how quickly that reaches operating profit.",
        watch:
          "Bookings, backlog commentary and the capital plans of the largest packaging customers.",
      },
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "A small number of fabs and assembly houses account for most of the revenue, and each buys in project-sized chunks rather than steady monthly volumes.",
        watch:
          "The top-customer percentage in the annual report and how many customers exceed 10% of revenue.",
      },
      {
        title: "Fixed-cost discipline",
        severity: "Medium",
        detail:
          "Operating expense did not fall as fast as revenue in FY2026, which is why a 2% revenue increase came with a 29% fall in operating income.",
        watch:
          "Operating expense growth relative to revenue, and whether gross margin holds in the mid-50s.",
      },
      {
        title: "Export controls",
        severity: "Medium",
        detail:
          "A large share of demand sits in Taiwan, Korea and China. Rules that restrict tool shipments can remove addressable revenue without any change in customer demand.",
        watch:
          "Licence changes and the geographic revenue split in each filing.",
      },
      {
        title: "Competition from larger process-control vendors",
        severity: "Medium",
        detail:
          "The biggest yield-management suppliers can bundle inspection with deposition, etch and cleaning. Bundling is a pricing weapon that a specialist cannot match on scope alone.",
        watch:
          "Gross margin and win rates on advanced-packaging evaluations.",
      },
      {
        title: "Returns on acquired capital",
        severity: "Medium",
        detail:
          "Return on equity of 6.8% sits well below what the operating margin would suggest, because acquisitions added assets that have not yet produced proportional profit.",
        watch:
          "Return on invested capital, goodwill relative to equity, and any impairment discussion.",
      },
    ],
    watchlist: [
      {
        title: "Advanced-packaging orders",
        detail:
          "The single best read on whether the Q2 FY27 revenue level is a new base or a restocking peak.",
      },
      {
        title: "Operating expense",
        detail:
          "The margin recovery depends as much on cost discipline as on revenue growth.",
      },
      {
        title: "Cash conversion",
        detail:
          "Free cash flow has run ahead of net income; a reversal would signal working capital building against slower orders.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Onto is a yield-tool company with a mid-50s gross margin, a fixed cost base and a customer list that spends in projects. The trailing year was weak at the operating line and strong at the cash line, and the last two quarters show the operating line recovering.",
      "What the dataset does not tell you: how much of revenue comes from advanced packaging rather than mature-node inspection, how concentrated the customer base is, and whether the FY2026 cost growth was a permanent step up in development spending or a timing effect.",
      "The educational point is that equipment companies are valued on the next cycle rather than the last one. Consensus EPS of $8.11 for this fiscal year is several times the trailing $2.66, and that gap is the whole investment question.",
    ],
    questions: [
      "How much of the revenue base is advanced packaging, and how much is mature-node inspection?",
      "Did operating expense step up permanently in FY2026, or was the increase temporary?",
      "What does the top-customer disclosure say about concentration?",
      "Is the Q2 FY27 revenue level a new base or a restocking peak?",
    ],
  },
};
