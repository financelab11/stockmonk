import type { StockStory } from "./types";

export const CDE: StockStory = {
  ticker: "CDE",
  kicker: "Precious metals · Silver and gold mining",
  title: "Coeur Mining's profit depends on two prices it does not set",
  dek: "Silver and gold revenue doubled in a year. Mining costs are largely fixed per tonne, so the margin swings with the metal price rather than with the effort.",
  readingMinutes: 9,
  takeaways: [
    "Revenue is $3.60B, up 111.7%, after $2.07B in FY2025 and $1.05B in FY2024.",
    "The operating margin is 29.7% and free cash flow was $1.21B.",
    "Return on equity is 6.7% despite a 19.2% net margin, because the equity base is large.",
    "Net cash is $1.17B and the dividend yield is 0.2%.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/215466/000021546626000004/cde-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000215466&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Coeur Mining is a silver and gold producer with mines in the United States, Mexico and Bolivia, a silver streaming interest in Australia, and exploration projects in Mexico and Argentina. It digs ore, processes it and sells metal concentrate or doré to smelters and refiners. The company does not sell a branded product; it sells a commodity at a price set in a global market.",
      "That makes the income statement a leveraged bet on two prices. The cost of mining a tonne of ore is roughly fixed once a mine is built, so a rise in the silver or gold price falls almost entirely to the margin. The reverse is also true, and it is why the company lost money in FY2021, FY2022 and FY2023 before earning $585.9M in FY2025.",
      "At $15.47 the market value is $15.81B against $3.60B of trailing revenue. The shares are 18% up a 52-week range of $12.71 to $27.77, up 7.3% over the year and up 118.5% over five years. Net cash of $1.17B and a 0.2% dividend yield complete the picture of a producer that has just come through a very good metal market.",
    ],
    quote:
      "A gold mine is a fixed-cost factory that sells its output at a price it cannot control. Everything in the accounts follows from that sentence.",
  },
  whatItDoes: {
    paragraphs: [
      "The operating assets are underground and open-pit mines that produce silver and gold. Ore is blasted, hauled, crushed and processed on site into a concentrate or into bars. Any by-product metals in the ore are credited against the cost of producing the silver and gold, which is why a mine with the right mineralogy can stay profitable at lower precious metal prices.",
      "The Australian streaming interest is a different kind of asset. A stream gives the company the right to buy a portion of another mine's production at a fixed low price, so it earns the difference between that price and the market. It requires no operating staff and no capital once the upfront payment is made, which is why streaming revenue carries a much higher margin than mined revenue.",
      "The company employs 1,959 people, most of them at the mines rather than at head office. The geography matters for risk: Mexico and Bolivia bring permitting, tax and political considerations that a US-only producer does not carry, and Argentina adds an exploration option rather than current production.",
    ],
    bullets: [
      {
        title: "Operating mines",
        detail:
          "Silver and gold production in the United States, Mexico and Bolivia, with by-product credits that lower net costs.",
      },
      {
        title: "The stream",
        detail:
          "A silver streaming interest in Australia. Low-cost revenue with no operating burden and no capital spending.",
      },
      {
        title: "Exploration",
        detail:
          "Projects in Mexico and Argentina. Optionality on future reserves rather than current cash flow.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is ounces sold multiplied by the realised price. The cost side is the cost of mining, processing and administration per ounce, usually expressed as an all-in sustaining cost that includes the capital needed to keep the mine running. When the metal price is above that cost, the mine earns a margin; when it is below, the mine loses money no matter how well it is run.",
      "The gross margin of 56.6% on a trailing basis is high for a mining company and reflects the current metal prices. The operating margin of 29.7% is lower because it carries exploration, administration and the depletion of the ore body. Depletion is a real cost even though it is not cash: a mine that is not replacing reserves is liquidating itself.",
      "The mechanism to understand is operating leverage on price. A 10% rise in the gold price raises revenue by 10% and leaves most costs unchanged, so the increase flows almost entirely to operating income. That is why revenue going from $1.05B in FY2024 to $2.07B in FY2025 produced a swing from $164.2M of operating income to $707.0M.",
    ],
  },
  growth: {
    paragraphs: [
      "The dataset puts compound revenue growth at 19.5% a year, but the path is not a trend: $832.8M in FY2021, $785.6M in FY2022, $821.2M in FY2023, $1.05B in FY2024 and $2.07B in FY2025, with $3.60B on a trailing basis. The step from FY2024 to FY2025 and beyond is far too large to come from price alone, so it reflects a larger production base as well as higher metal prices.",
      "The quarterly record shows the operating margin peaking at 48.6% in Q4 FY2025 and then falling to 19.9% and 17.7% in the following two quarters, even as revenue rose. That combination, more revenue with a lower margin, is what happens when new production comes in at a higher cost per ounce or when the price-margin mix shifts.",
      "Consensus expects $4.49B of revenue this fiscal year and $6.06B next, with earnings per share of $0.89 and then $1.79. Doubling earnings per share in a year requires either a much higher metal price or a substantial increase in low-cost production.",
    ],
    bullets: [
      {
        title: "Metal prices",
        detail:
          "The largest single variable. Silver and gold are set globally and no producer can influence them.",
      },
      {
        title: "Production volume",
        detail:
          "More ounces at the same cost per ounce raises profit, but new ounces usually cost more to produce than the existing ones.",
      },
      {
        title: "Reserve replacement",
        detail:
          "A mine that does not replace what it extracts shrinks every year. Exploration and acquisitions are how that is solved.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The three loss years are as informative as the two profit years. FY2021 earned $3.6M of operating income, FY2022 lost $39.3M and FY2023 lost $38.7M. In each of those years the company was producing metal; the price and the cost per ounce simply did not leave a margin.",
      "The recovery was dramatic. FY2024 produced $164.2M of operating income, and FY2025 produced $707.0M on revenue of $2.07B. The trailing operating margin of 29.7% is lower than the FY2025 figure because the latest two quarters ran at 19.9% and 17.7%.",
      "Return on equity of 6.7% looks low next to a 19.2% net margin. The explanation is the equity base: profits have been reinvested and shares have been issued, so the same dollar of earnings is spread over more capital. A reader should compare ROE with the metal price cycle rather than treating it as a stable measure of quality.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$199.3M in FY2021, -$326.7M in FY2022, -$297.3M in FY2023, -$9.0M in FY2024 and $665.7M in FY2025, with $1.21B on a trailing basis. Four years of negative cash flow followed by two years of strong positive cash flow is exactly what a mine build looks like: capital now, cash later.",
      "Net cash is $1.17B, which means the company has repaid or avoided the debt that usually funds a construction period. That is an unusual position for a mid-tier miner and it gives management options: dividends, buybacks, acquisitions or reserve development.",
      "The dividend yield is 0.2%, so almost all of the cash is being retained. For a company whose revenue depends on a commodity price, retaining cash through the good years is the standard way to survive the bad ones.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 22.8x trailing earnings and 8.3x EV/EBITDA, the market is applying a moderate multiple to a peak-ish earnings base. The gap between the two multiples is the tell: EV/EBITDA is low because EBITDA is currently very large relative to the asset base, while the earnings multiple is higher because depreciation and tax take a big share.",
      "For a miner, the more useful lens is price to net asset value at a normalised metal price, or free cash flow at a sustainable price. Neither is available from these tables, which is why the 13.1x price-to-free-cash-flow ratio should be read as a snapshot of a good year rather than a valuation.",
      "Stockmonk does not publish a target price. The attributed consensus mean of $21.77 sits above the $15.47 close, and the range of $16.00 to $27.00 is narrower than usual for a miner, which suggests the analysts share similar metal price assumptions.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 11 analysts with a mean target of $21.77 and a range of $16.00 to $27.00. The low end is close to the current price, so the downside case in the published estimates is modest.",
      "Estimates call for $1.23B of revenue next quarter and $1.32B the quarter after, with earnings per share of $0.28 and $0.39. For the current fiscal year the group expects $4.49B of revenue and $0.89 of earnings per share; next year, $6.06B and $1.79.",
      "Those numbers embed a metal price assumption that is not disclosed in the table. When a miner's estimates rise, it is often the price forecast that changed rather than the operating plan.",
    ],
  },
  risks: {
    intro:
      "Coeur's risks are the price of two metals, the cost of extracting them and the jurisdictions where the ore sits.",
    items: [
      {
        title: "Silver and gold prices",
        severity: "High",
        detail:
          "A fixed cost base means a price fall hits profit disproportionately. FY2021 to FY2023 shows three consecutive years of losses at lower prices.",
        watch:
          "Realised price per ounce and the all-in sustaining cost per ounce.",
      },
      {
        title: "Cost inflation and grade",
        severity: "High",
        detail:
          "Diesel, labour, reagents and grinding media are large costs. Falling ore grades raise the cost per ounce even when the headline cost per tonne is stable.",
        watch:
          "Cost per ounce, tonnes milled and the grade of ore processed.",
      },
      {
        title: "Jurisdiction",
        severity: "Medium",
        detail:
          "Mines in Mexico and Bolivia carry permitting, tax, labour and political risk that a US asset does not. A change in mining law or royalty terms affects the economics directly.",
        watch:
          "Changes to mining duties, concession terms and any permitting disputes.",
      },
      {
        title: "Reserve depletion",
        severity: "Medium",
        detail:
          "A mine is a depleting asset. Without exploration success or acquisitions, production falls and the cost per ounce rises as fixed costs are spread over fewer ounces.",
        watch:
          "Reserve and resource replacement, mine life and exploration spending.",
      },
      {
        title: "Execution on expansion",
        severity: "Medium",
        detail:
          "New projects and expansions have to be built on budget. A cost overrun at a mine is funded from cash flow that was meant for something else.",
        watch:
          "Capital spending, project schedules and commissioning updates.",
      },
    ],
    watchlist: [
      {
        title: "All-in sustaining cost",
        detail:
          "The cost per ounce including maintenance capital is what determines whether a price fall turns into a loss.",
      },
      {
        title: "Realised prices",
        detail:
          "Revenue per ounce sold, after hedging and treatment charges, is the number that reaches the income statement.",
      },
      {
        title: "Free cash flow through the cycle",
        detail:
          "One good year does not fund a mine build. Track the cumulative figure across a full price cycle.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Coeur Mining is a silver and gold producer with $3.60B of trailing revenue, a 29.7% operating margin and $1.21B of free cash flow. It has just completed a strong year after three loss-making ones, and it holds $1.17B of net cash.",
      "The educational point is operating leverage in a price-taking business. When costs are fixed per tonne and the product price floats, small changes in price produce large changes in profit. That cuts both ways, and the three loss years are the evidence.",
      "What is not known from these tables is the all-in sustaining cost per ounce and how much of the current revenue comes from new, higher-cost production. Those two numbers decide whether the current margin survives a weaker metal price.",
    ],
    questions: [
      "What is the all-in sustaining cost per ounce across the portfolio?",
      "How much of the revenue increase came from price and how much from new production?",
      "How many years of reserves do the operating mines have?",
      "What would the operating margin be at a 20% lower silver price?",
    ],
  },
};
