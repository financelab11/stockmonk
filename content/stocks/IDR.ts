import type { StockStory } from "./types";

export const IDR: StockStory = {
  ticker: "IDR",
  kicker: "Gold · Narrow-vein underground mining",
  title: "A 40-person gold miner with a 45% operating margin",
  dek: "The Golden Chest is a narrow-vein underground mine, so tonnage is small and grade does the work. Low fixed costs are what keep the margin intact.",
  readingMinutes: 9,
  takeaways: [
    "Revenue is $50.9M, up 66.8%, from $13.7M in FY2023.",
    "The operating margin is 45.1% and free cash flow was $16.8M.",
    "Net cash of $48.6M is close to 15% of the $329.6M market value.",
    "One analyst covers the stock, and the estimates stop growing next year.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1030192/000165495426002560/idr_10k.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001030192&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Idaho Strategic Resources mines gold, silver and base metals in the Greater Coeur d'Alene district of northern Idaho and western Montana. Its main asset is the Golden Chest Mine near Murray, Idaho, held through 25 patented claims covering 280 acres and 90 unpatented claims covering 1,390 acres. The company was founded in 1996 and is based in Coeur d'Alene.",
      "This is a small-scale underground operation, not a bulk-tonnage mine. Narrow veins are mined selectively, so the company moves relatively little rock and relies on high grades to make the economics work. That model has a low capital threshold and a fast response to grade, but it also limits how much metal can be produced in a year.",
      "The results have been strong. Revenue went from $7.6M in FY2021 to $42.4M in FY2025, and trailing revenue is $50.9M with a 45.1% operating margin. At $20.85 the market value is $329.6M, the shares are 7% up a 52-week range of $18.55 to $53.30, and the trailing multiple is 14.7x earnings.",
    ],
    quote:
      "A narrow-vein mine is a grade business, not a volume business. The cost per ounce depends far more on what the vein delivers than on how many tonnes are hoisted.",
  },
  whatItDoes: {
    paragraphs: [
      "The Golden Chest is an underground mine accessed by decline and shafts, with ore extracted from stopes along narrow mineralised structures. Ore goes to an on-site mill that concentrates the gold, and the concentrate or doré is sold to a refiner. Silver and base metals in the ore provide by-product credits that reduce the net cost of the gold.",
      "The claim structure matters for how the asset is held. Patented claims are private land owned outright, which brings surface rights and a clearer path to permits. Unpatented claims are held under federal mining law and depend on annual filings and continued compliance. The mix of the two shapes both the permitting route and the royalty obligations on the ground.",
      "The company employs 40 people, which is small enough that each additional miner or mill operator is a visible cost. That is also the source of the margin: with a lean team and a single mine, there is no corporate layer to absorb the cash that a higher gold price generates.",
    ],
    bullets: [
      {
        title: "The mine",
        detail:
          "An underground narrow-vein operation at Murray, Idaho, with a decline, stopes and an on-site mill.",
      },
      {
        title: "The land position",
        detail:
          "280 acres of patented claims and 1,390 acres of unpatented claims, which carry different ownership and permitting rules.",
      },
      {
        title: "The production mix",
        detail:
          "Gold is the main product, with silver and base metals as credits that lower the net cost per ounce.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is ounces of gold sold at the market price, plus credits for the silver and base metals in the concentrate. The cost side is mining, hauling, milling and administration per ounce. Because the mine is small, the fixed portion of that cost is modest, and a high-grade stope can be very profitable while a low-grade one is marginal.",
      "The gross margin of 64.1% and operating margin of 45.1% are exceptional for a miner. They reflect a period of high gold prices combined with a grade profile that suited the mill. The 44.0% net margin means very little is lost between operating profit and the bottom line, which is what happens when a company carries net cash rather than a large interest bill.",
      "The sensitivity is to grade and price together. A 20% fall in the gold price would cut revenue by a fifth while most costs stayed put. A fall in the grade of ore mined would do the same thing from the other direction, and grades in narrow veins are not smooth from month to month.",
    ],
  },
  growth: {
    paragraphs: [
      "The dataset puts compound revenue growth at 39.8% a year, and the path was steep: $7.6M in FY2021, $9.6M in FY2022, $13.7M in FY2023, $25.8M in FY2024 and $42.4M in FY2025. The step from a $3.1M operating loss in FY2021 to $15.6M of operating income in FY2025 happened as the mine reached steady production and the gold price rose.",
      "The quarterly trend has flattened. Revenue was $14.6M in Q4 FY2025, $14.5M in Q1 FY2026 and $10.7M in Q2 FY2026, and earnings per share went from $0.63 to $0.40 to $0.23. A single analyst expects $53.9M of revenue this fiscal year and $53.3M next, which is a plateau rather than a growth path.",
      "That plateau is the honest picture of a single-mine producer. Growth has to come from deeper development, more stopes, a higher mill throughput or an acquisition. Each of those takes capital and time, and the current share price already assumes some of it.",
    ],
    bullets: [
      {
        title: "Mine development",
        detail:
          "Drifting and raising to reach new stopes. Growth comes from tonnes and grade, not from price alone.",
      },
      {
        title: "Mill throughput",
        detail:
          "A debottleneck at the mill raises output without a new mine, which is the cheapest form of growth available.",
      },
      {
        title: "Exploration",
        detail:
          "The district has a long mining history. Adding reserves near the existing workings is cheaper than building elsewhere.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The five-year record is a small miner climbing out of losses: operating income of -$3.1M in FY2021, -$2.6M in FY2022, $1.0M in FY2023, $8.4M in FY2024 and $15.6M in FY2025. Revenue roughly doubled in each of the last two years, and the margin expanded faster than revenue.",
      "The quarterly margins are volatile in a way that is normal for a narrow-vein mine. Q4 FY2025 ran 62.4%, Q1 FY2026 52.4% and Q2 FY2026 34.1%. The sequence follows the grade and the gold price, not a deterioration in the business, but it shows how little averaging there is across a single operation.",
      "Return on equity is 9.5% and return on invested capital 9.7%, which look modest next to a 44.0% net margin. The reason is the equity base: retained earnings and capital raised have grown faster than annual profit, so the return on that capital is diluted even though the margin is high.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$2.0M in FY2021, -$3.3M in FY2022, $1.3M in FY2023, $8.6M in FY2024 and $12.4M in FY2025, with $16.8M on a trailing basis. The transition from negative to strongly positive is the point at which a mine stops consuming capital and starts returning it.",
      "The balance sheet holds $48.6M of net cash, which is close to 15% of the market value. For a company of this size that is a substantial buffer, and it means development can be funded internally rather than through repeated share issuance.",
      "Capital spending goes into mine development, equipment and the mill. Because the operation is small, a single piece of mobile equipment or a mill upgrade is a material share of annual cash flow, which makes capital allocation decisions unusually visible.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 14.7x trailing earnings, 10.9x EV/EBITDA and 19.6x free cash flow, the shares are priced at a discount to the broader market and roughly in line with a mid-tier gold producer. For a single-mine company with 40 employees, that is not obviously cheap or expensive.",
      "The comparison that matters is against the gold price. At a high price the current earnings are flattered and the multiple looks low; at a lower price the same multiple is being paid on a smaller earnings base. A reader should ask what the earnings would be at a normalised price.",
      "Stockmonk does not publish a target price. The attributed consensus is a single analyst at $45.00, which is more than double the current price and should be treated as one person's scenario rather than a market view.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is one analyst. The mean target and the range are both $45.00, which tells you nothing about dispersion because there is no second opinion in the dataset.",
      "Estimates call for $14.1M of revenue next quarter and $14.6M the quarter after, with earnings per share of $0.30 and $0.46. For the current fiscal year the estimate is $53.9M of revenue and $1.39 of earnings per share; next year, $53.3M and $1.41.",
      "A single forecast for a single-mine producer is a schedule of expected grade and tonnage as much as a financial model. It should be read as an operating plan, and the quarterly production reports will show quickly whether it is being met.",
    ],
  },
  risks: {
    intro:
      "For a single-mine producer, the risks are geological and operational before they are financial. The balance sheet is strong enough that none of them is immediately threatening.",
    items: [
      {
        title: "Grade and reserve risk",
        severity: "High",
        detail:
          "The mine's economics depend on the grade delivered to the mill. Narrow veins are unpredictable, and a run of lower-grade stopes cuts revenue without any change in effort.",
        watch:
          "Ounces produced, grade mined and the reserve statement each year.",
      },
      {
        title: "Gold price",
        severity: "High",
        detail:
          "Costs are largely fixed per tonne, so the margin moves with the price. The current 45.1% operating margin would compress quickly in a weaker market.",
        watch:
          "Realised gold price and the all-in sustaining cost per ounce.",
      },
      {
        title: "Single-asset concentration",
        severity: "High",
        detail:
          "Almost all revenue comes from one mine. A fire, a flooding event, a ground-control problem or a permitting issue stops the entire business.",
        watch:
          "Operational continuity disclosures and any interruption to milling.",
      },
      {
        title: "Permitting and claims",
        severity: "Medium",
        detail:
          "The unpatented claims depend on federal mining law and annual compliance. A change in the rules or a lapse in filings affects the land position.",
        watch:
          "Claim maintenance filings, permit renewals and any regulatory changes affecting unpatented claims.",
      },
      {
        title: "Key people",
        severity: "Medium",
        detail:
          "A 40-person company depends on a small technical team. Losing the mine manager or the geologist in charge of grade control is a real operational risk.",
        watch:
          "Management changes and the depth of the technical team.",
      },
    ],
    watchlist: [
      {
        title: "Grade mined",
        detail:
          "The variable that explains most of the quarter-to-quarter swing in margin.",
      },
      {
        title: "All-in sustaining cost",
        detail:
          "The cost per ounce including development spending is what determines the margin at a normal gold price.",
      },
      {
        title: "Reserve replacement",
        detail:
          "A mine that does not replace what it extracts is running down its only asset.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Idaho Strategic Resources is a small, high-margin gold miner with one underground mine, 40 employees and $50.9M of trailing revenue. It has moved from losses to a 45.1% operating margin in three years and holds $48.6M of net cash.",
      "The educational point is how a small miner differs from a large one. There is no portfolio to average out a bad stope, so grade and price both hit the results directly. The upside is a low cost base that turns a good grade into a large margin.",
      "What is not known is how many years of reserves the mine has and what grade the next stopes will deliver. The single analyst estimate of flat revenue next year implies the company does not expect a step change in output.",
    ],
    questions: [
      "How many years of reserves are defined at the Golden Chest?",
      "What grade was mined in the last quarter, and how does it compare with the reserve grade?",
      "What would the operating margin be at a 20% lower gold price?",
      "How much capital is needed to lift mill throughput, and what would that add in ounces?",
    ],
  },
};
