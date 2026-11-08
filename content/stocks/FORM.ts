import type { StockStory } from "./types";

export const FORM: StockStory = {
  ticker: "FORM",
  kicker: "Semiconductor equipment · Test and measurement",
  title: "FormFactor sells a part that wears out every time a wafer is tested",
  dek: "Probe cards are consumed as they touch wafers, which puts a recurring revenue stream inside a capital-equipment company. Five years of flat sales followed by a 29.1% quarterly operating margin is the whole argument.",
  readingMinutes: 9,
  takeaways: [
    "Revenue compounded at 4.9% a year from FY2021 to FY2025, moving between $663.1M and $785.0M rather than growing in a line.",
    "The latest quarter, Q3 FY26, produced $280.5M of revenue at a 29.1% operating margin, against 8.9% a year earlier.",
    "Free cash flow was $181.3M on a trailing basis, an 18.5% margin, but it fell to $8.6M in FY2023 and $11.7M in FY2025 while net income stayed positive.",
    "The balance sheet holds $384.1M of net cash, so the downcycle does not have to be funded from the equity market.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1039399/000103939926000009/form-20251227.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001039399&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Before a chip is packaged it is tested, and before it is tested something has to make electrical contact with pads measured in tens of microns. FormFactor builds that contact: probe cards, the custom interface between a wafer and a tester, plus the probe stations and thermal systems that hold the wafer while the measurement happens. The company is based in Livermore, California, employs 2,166 people and reports in two segments, Probe Cards and Systems.",
      "The distinction between the two segments is the most important thing to understand about the business. A probe card is a consumable. It wears as it touches down, it is designed for a specific die layout, and it is replaced when it wears out or when the customer changes product. A probe station is capital equipment bought once and depreciated for years. The first revenue line follows wafer starts and test intensity; the second follows capacity construction. They do not move together.",
      "Trailing revenue was $980.1M, up 29.1%, and the latest quarter delivered $280.5M at a 29.1% operating margin, up from 8.9% in the same quarter a year earlier. At $81.12 the shares sit about 30% of the way up a 52-week range of $47.33 to $160.27, on a $6.4B market capitalisation.",
    ],
    quote:
      "A probe card is a consumable that has to be engineered for one product. That combination of recurring demand and custom design is what separates the business from a pure equipment vendor.",
  },
  whatItDoes: {
    paragraphs: [
      "The probe card is a small, expensive, highly customised object. It carries thousands of fine needles or MEMS structures that press onto the pads of a die, carry a signal to the tester and then move to the next die. Each card is designed for a particular chip, so the work starts with the customer's layout and ends with a qualification run. When the customer moves to a new product or a new node, the card is redesigned.",
      "The Systems segment sells the equipment around the card: probe stations that position the wafer, thermal subsystems that hold a device at a specified temperature, and analytical tools used in laboratories. These are sold to the same customers but on a different rhythm, because a station is bought when a test floor is built or expanded rather than when a product changes.",
      "The end markets are the ones with the hardest test problems. Advanced logic and high-bandwidth memory need many parallel contacts at fine pitch. Automotive and industrial devices need testing across temperature. Compound semiconductors and photonics need contact on materials that do not behave like silicon. That mix matters because the difficult tests are where a probe card earns its price.",
    ],
    bullets: [
      {
        title: "Probe cards",
        detail:
          "Custom contact assemblies consumed by wafer test. Revenue tracks test intensity and product transitions more than fab construction.",
      },
      {
        title: "Systems",
        detail:
          "Probe stations, thermal subsystems and analytical tools. Revenue tracks the building and equipping of test floors.",
      },
      {
        title: "The difficult end markets",
        detail:
          "Advanced logic, memory, automotive, industrial and compound semiconductors, where contact at fine pitch and across temperature is the constraint.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin was 47.1% on a trailing basis, which is lower than a design-only chip company and higher than an assembly house. The reason is that FormFactor does real manufacturing: MEMS probe structures are built in its own facilities, which brings depreciation and process yield into the cost of goods. The 18.3% operating margin leaves engineering, sales and administration to be funded out of the spread.",
      "The revenue model has two clocks. Consumable cards give a base that recurs as long as customers are testing wafers, which is a production-rate variable. Systems give lumpy project revenue that depends on capital budgets. In a strong year both clocks run together, which is why the operating margin can move from 6.3% in Q2 FY25 to 29.1% in Q3 FY26 while revenue went from $195.8M to $280.5M.",
      "The pricing logic is different for each product. A probe card is specified into a customer's test programme, so once qualified it is not easily swapped, and the price is small relative to the value of the test coverage it provides. A probe station competes more directly with other vendors on capability and price because it is bought through a capital process.",
    ],
  },
  growth: {
    paragraphs: [
      "The five-year record is a flat line with a cycle in it. Revenue went from $769.7M in FY2021 to $785.0M in FY2025, passing through $663.1M in FY2023, a 4.9% compound rate. Operating income did worse than revenue over the same span, falling from $98.0M to $57.1M, which means cost grew faster than sales through the period.",
      "The recent quarters look like a different company. Revenue rose from $195.8M in Q2 FY25 to $280.5M in Q3 FY26, and operating margin from 6.3% to 29.1%. That is what a consumable business does when test demand returns: the installed card base is used harder, replacements are pulled forward, and the factory absorbs the volume.",
      "Third-party estimates call for $1.05B of revenue and $3.39 of EPS this fiscal year, then $1.31B and $4.25. The step above the trailing $980.1M is modest; the step to $1.31B is the part that requires advanced packaging and high-bandwidth memory test demand to keep growing.",
    ],
    bullets: [
      {
        title: "Test intensity",
        detail:
          "More complex packages need more test insertions, and each insertion consumes card life.",
      },
      {
        title: "New product ramps",
        detail:
          "Every customer product transition requires a new card design, which resets the consumable cycle.",
      },
      {
        title: "Systems recovery",
        detail:
          "Probe station sales were depressed through the downcycle; a test-floor build-out adds revenue on top of the consumable base.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The margin history is dominated by the last six quarters. Operating margin ran between 6.3% and 10.9% through FY25, reached 22.4% in Q2 FY26 and 29.1% in Q3 FY26. The trailing figure of 18.3% therefore blends a weak base with two very strong quarters, which is why it understates the current run rate and overstates the trough.",
      "Return on invested capital is 17.8% and return on equity 14.7%. Those are decent rather than exceptional, and they are consistent with a business that carries manufacturing assets and has spent on acquisitions. Return on equity sits below return on capital because of the net cash balance: cash earns very little, so it dilutes the return on the equity that owns it.",
      "The annual net income line is steadier than operating income: $83.9M, $50.7M, $82.4M, $69.6M and $54.4M across the five years. That stability is partly a tax and below-the-line effect and partly the consumable base doing its job. It is a useful reminder that operating margin at a cyclical peak is not the same as earning power through a cycle.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow has been far more volatile than earnings. The five annual figures are $72.9M, $66.5M, $8.6M, $79.1M and $11.7M, against net income of $83.9M, $50.7M, $82.4M, $69.6M and $54.4M. In FY2023 and FY2025 the company reported a profit and generated almost no cash, which usually means working capital or capital expenditure absorbed it.",
      "The trailing figure tells a different story again: $181.3M of free cash flow, an 18.5% margin, well above trailing net income. Both readings can be true. A business that builds inventory ahead of a ramp and then ships it converts cash in a lump, and the trailing window happens to include the release.",
      "The balance sheet is a genuine strength. Net cash of $384.1M, or -1.8x EBITDA, means the company can fund a downcycle without diluting shareholders. For a manufacturer with custom tooling and long qualification cycles, that matters more than it would for an asset-light design house.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $81.12 the shares trade at 36.6x trailing earnings, 27.7x EV/EBITDA, 6.1x sales and 35.1x free cash flow, for a 2.8% free-cash-flow yield. The earnings multiple looks high against a trailing EPS of $2.19, but that EPS covers a year that began at a 6.3% operating margin. On the consensus $3.39 for this fiscal year the same price is a very different proposition, which is the arithmetic the reader has to do.",
      "The peer set puts FormFactor in the middle of the range on EBITDA. Comparables trade between 23.9x and 31.8x EV/EBITDA; FormFactor at 27.7x sits inside that band despite a lower operating margin than most of them. The premium is a bet on the consumable mix and on the current margin run rate holding.",
      "Stockmonk does not publish a target price. The consensus figure in the next section is third-party context, and the dispersion around it is more useful than the average.",
    ],
  },
  analysts: {
    paragraphs: [
      "Nine analysts contribute to the consensus, with a mean target of $152.22 and a range of $110.00 to $200.00. The whole range sits above the $81.12 close, and the mean is well above it, which is a large gap for a company whose estimates have been moving up.",
      "The near-term estimates are restrained relative to the last quarter. After $280.5M of revenue and $0.93 of EPS in Q3 FY26, the consensus expects $285.3M and $0.95 next quarter, then $297.8M and $0.95. That is a plateau, not a continuation of the recent slope, and it is worth noticing that the analyst count on those two quarters is lower than on the annual figures.",
      "For the full year the consensus is $1.05B of revenue and $3.39 of EPS, rising to $1.31B and $4.25 next year. Those are third-party forecasts. The interesting question is not whether the mean target is right but whether the 29.1% operating margin is treated as a peak or as a new floor.",
    ],
  },
  risks: {
    intro:
      "FormFactor's risk is not solvency; the net cash balance removes that. The risk is that a consumable business with high fixed costs gets valued on a peak margin that does not persist.",
    items: [
      {
        title: "Peak-margin extrapolation",
        severity: "High",
        detail:
          "Operating margin moved from 6.3% to 29.1% in five quarters. If the market capitalises the top of that range, a normalisation back toward the mid-teens would hurt earnings and the multiple at the same time.",
        watch:
          "Operating margin each quarter and the mix between cards and systems.",
      },
      {
        title: "Test demand tied to one product cycle",
        severity: "High",
        detail:
          "The recent acceleration depends on advanced packaging and high-bandwidth memory test intensity. A pause in those ramps would hit consumable pull-through as well as systems orders.",
        watch:
          "Wafer-start commentary from the largest customers and the book-to-bill trend.",
      },
      {
        title: "Working capital absorbs profit",
        severity: "Medium",
        detail:
          "FY2023 and FY2025 both showed positive net income with almost no free cash flow. Inventory and receivables can swallow a year of earnings during a ramp.",
        watch:
          "Inventory days, receivables days and the gap between net income and operating cash flow.",
      },
      {
        title: "Customer concentration",
        severity: "Medium",
        detail:
          "Probe cards are designed per customer product, so a few large accounts drive a disproportionate share of revenue and of engineering spend.",
        watch:
          "Top-customer disclosures and the number of designs won per quarter.",
      },
      {
        title: "Capital intensity of the card business",
        severity: "Medium",
        detail:
          "MEMS probe structures are manufactured in-house, which means depreciation and yield matter. A yield problem hits gross margin before it hits revenue.",
        watch:
          "Gross margin and capital expenditure relative to revenue.",
      },
      {
        title: "Systems cyclicality",
        severity: "Low",
        detail:
          "Probe stations are bought when test floors are built. That revenue can disappear for several quarters without any change in the consumable base.",
        watch:
          "The Systems segment's share of revenue and order commentary.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "47.1% is the number that shows whether factory absorption is keeping up with volume.",
      },
      {
        title: "Cash conversion",
        detail:
          "Two of the last five years produced almost no free cash flow despite reported profits.",
      },
      {
        title: "Card versus systems mix",
        detail:
          "The recurring base is the more valuable revenue; its share determines how cyclical the whole is.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "FormFactor is a manufacturer of test interfaces with a consumable core, a 47.1% gross margin and $384.1M of net cash. The trailing accounts look mediocre because they include a weak first half; the last two quarters look excellent because test demand returned.",
      "The gaps in the data matter here: how much revenue is genuinely recurring, how concentrated the customer base is, and whether the 29.1% operating margin reflects factory absorption that reverses when the current product ramps finish.",
      "A reader should leave with one distinction firmly in hand: a consumable is worth more than the machine it runs inside, because it recurs without a new purchase decision. FormFactor owns part of that position. How much of its revenue base actually behaves that way is what the next few filings will show.",
    ],
    questions: [
      "What share of revenue comes from cards that are replaced on a predictable cycle?",
      "How much of the margin expansion came from volume absorption rather than mix?",
      "Why did FY2023 and FY2025 convert so little profit into cash?",
      "Are the near-term estimates of flat EPS a signal that the ramp is peaking?",
    ],
  },
};
