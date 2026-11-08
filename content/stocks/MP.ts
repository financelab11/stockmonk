import type { StockStory } from "./types";

export const MP: StockStory = {
  ticker: "MP",
  kicker: "Rare earths · Mining and magnetics",
  title: "MP Materials is a mine trying to become a manufacturer",
  dek: "A 60% gross margin and a negative operating margin in the same year. The gap is the cost of building a magnet business downstream of a commodity.",
  readingMinutes: 9,
  takeaways: [
    "Revenue is $399.5M, up 71.6%, with each of the last three quarters larger than the one before.",
    "Gross margin is 60.4% while the operating margin is -20.5%.",
    "Operating income went from $327.4M in FY2022 to a $149.4M loss in FY2025.",
    "Free cash flow was -$537.3M as capital went into downstream processing.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1801368/000180136826000008/mp-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001801368&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "MP Materials owns the Mountain Pass mine in California and the processing assets around it. The mine produces a rare earth concentrate, and the separation plant turns that concentrate into individual oxides: cerium, lanthanum, neodymium, praseodymium and samarium. The first two are relatively abundant and cheap; the last three are the ones that go into permanent magnets used in motors, wind turbines and defence equipment.",
      "The company is therefore two businesses at different stages of maturity. Upstream is a mine and a chemical plant selling into a global commodity market dominated by Chinese processors. Downstream is a manufacturing build aimed at converting oxides into magnet materials and finished magnets for US customers, which is where the margin and the strategic value are supposed to sit.",
      "At $35.41 the market value is $6.31B against $399.5M of trailing revenue. The shares sit 8% up a 52-week range of $31.90 to $76.80 after falling 31.8% over the year. A 127.5x EV/EBITDA multiple is the market's way of saying that current EBITDA is close to irrelevant.",
    ],
    quote:
      "Rare earth mining is a commodity business with a chemical plant attached. The magnet business is an attempt to stop being a price taker, and it costs a great deal to build.",
  },
  whatItDoes: {
    paragraphs: [
      "Mountain Pass is one of the few large rare earth deposits in the Western Hemisphere, and owning the mineral rights plus the separation technology is the core asset. Mining is the easy part: ore is dug, crushed and processed into a concentrate. Separation is the hard part, because the elements are chemically similar and the solvent-extraction circuits that split them are capital intensive and finicky to operate.",
      "The downstream plan is to convert separated oxides into metal, then alloy, then magnets. Each step adds capital and know-how, and each step has a customer with a specification to meet. Automotive and defence buyers qualify a supplier over years, so a new plant has to prove consistency before it earns a premium.",
      "The company employs 486 people, which is a small team for a mining and chemical operation of this output and explains why the fixed cost base is as low as it is. The customer base is split between commodity buyers of concentrate and oxide, and the newer industrial customers for magnetic materials.",
    ],
    bullets: [
      {
        title: "Upstream",
        detail:
          "Mining and separation at Mountain Pass. Sells concentrate and separated oxides into a market priced by global supply.",
      },
      {
        title: "Downstream",
        detail:
          "Metal, alloy and magnet production. Higher value added, longer qualification cycles and much more capital per unit of revenue.",
      },
      {
        title: "The heavy rare earths",
        detail:
          "Neodymium, praseodymium and samarium carry the magnet premium. Cerium and lanthanum are abundant and price-sensitive.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Upstream economics are simple: sell a tonne of oxide at the market price and subtract the cost of mining, chemicals, energy and labour. A 60.4% gross margin says that spread is wide at current prices. The catch is that the price is set globally, and rare earth prices have moved enough in the last five years to turn a large profit into a large loss.",
      "The operating loss comes from everything below the gross line: the cost of running a separation plant below capacity, development spending on the downstream assets, depreciation on new equipment, and the corporate overhead of a company with two builds in progress. Those costs are largely fixed in the short run, so they weigh most heavily in the years when the downstream plants are not yet producing.",
      "In the finished-magnet business the economics change. A qualified supplier sells a specified material at a negotiated price with an agreed cost pass-through, which produces a steadier margin than selling oxide into a spot market. That steadiness is the prize, and it is why the company is willing to accept negative free cash flow to get there.",
    ],
  },
  growth: {
    paragraphs: [
      "The dataset puts compound revenue growth at 20.6% a year, but the visible path is a cycle rather than a trend: $332.0M in FY2021, $527.5M in FY2022, $253.4M in FY2023, $203.9M in FY2024 and $224.4M in FY2025. The collapse from FY2022 to FY2023 was a price event, not a volume event, and it is the clearest evidence that this is a commodity business at the top of the chain.",
      "The recent trend is different. Revenue rose from $52.7M in Q4 FY2025 to $90.6M, $108.5M and $147.7M in the following three quarters, and the latest quarter grew 175.7% year over year. That looks like new production coming online rather than a price move, which is what a downstream build should produce.",
      "Third-party estimates expect $453.2M of revenue this fiscal year and $786.2M next, with earnings per share moving from -$0.01 to $0.73. The second year assumes the magnet business reaches volume. That is the number to test against actual shipments.",
    ],
    bullets: [
      {
        title: "Downstream volume",
        detail:
          "Magnet production is the growth driver. Oxide sales grow with the mine; magnet sales grow with customer qualification.",
      },
      {
        title: "Price",
        detail:
          "Neodymium and praseodymium prices set the upstream margin. A weak price year can offset volume growth entirely.",
      },
      {
        title: "Policy support",
        detail:
          "Government programmes for a domestic magnet supply chain create demand, but they are programmes and can be revised.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The five-year record is a commodity cycle with a capital programme layered on top. FY2022 produced $327.4M of operating income on $527.5M of revenue, a margin above 60%. By FY2025 the same assets produced a $149.4M operating loss on $224.4M of revenue. Some of that is price; some is the cost of the downstream build and the depreciation that comes with it.",
      "The quarterly margins show the transition. Q3 FY2025 ran -125.2%, Q4 FY2025 -7.0%, Q1 FY2026 -26.6%, Q2 FY2026 -29.5% and Q3 FY2026 -14.9%. The direction is toward break-even as revenue scales, but the path is uneven because each quarter carries a different mix of construction cost and start-up expense.",
      "Return on equity is -0.7% and return on invested capital is -3.3%. Both are close to zero rather than deeply negative, which is what you would expect from a business with a profitable upstream and loss-making expansion. The test is whether the new capital earns a return once it is finished.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$21.9M in FY2021, positive $16.9M in FY2022, then -$199.2M, -$173.1M and -$328.1M in the following three years, with a trailing figure of -$537.3M. The pattern is a business that generated cash when prices were high and then invested several years of it into new capacity.",
      "The balance sheet carries $401.7M of net cash. That is a meaningful cushion against a $6.31B market value, and it means the capital programme is not immediately dependent on borrowing. It does not remove the dilution risk if the build takes longer than the cash lasts.",
      "Capital spending on separation, metal and magnet capacity is the reason the cash flow line is negative while the gross margin is high. A reader should separate maintenance capital needed to keep the mine running from growth capital that is optional until a customer signs.",
    ],
  },
  valuation: {
    paragraphs: [
      "There is no meaningful earnings multiple because trailing earnings are negative. EV/EBITDA of 127.5x and EV/Sales of 14.8x are the numbers the market quotes, and both say the same thing: the valuation is not resting on the current cash flow.",
      "What the market is paying for is a domestic rare earth supply chain with a magnet business attached, priced against a future in which those magnets earn a manufacturing margin rather than a commodity spread. That is a legitimate thing to value, but it is a project valuation, not a multiple valuation.",
      "Stockmonk does not publish a target price. The attributed consensus mean of $68.24 sits well above the $35.41 close, and the range of $49.00 to $100.00 shows that even the bullish and cautious cases agree the company is worth more than the current price on their assumptions.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 17 analysts with a mean target of $68.24 and a range of $49.00 to $100.00. The low end is still 38% above the current price, which is unusual and suggests the sell-side is valuing the downstream assets on completion rather than on current earnings.",
      "Estimates call for $104.0M of revenue next quarter and $175.7M the quarter after, with earnings per share of -$0.07 and then +$0.10. For the current fiscal year the group expects $453.2M of revenue and a loss of $0.01 per share; next year, $786.2M of revenue and $0.73 of earnings per share.",
      "The implied swing from a small loss to a $0.73 profit is the magnet plant reaching volume. If that slips by a year, every estimate in the table moves with it.",
    ],
  },
  risks: {
    intro:
      "MP Materials carries commodity price risk at the top of the chain and execution risk at the bottom. The balance sheet is strong enough that neither is immediately existential.",
    items: [
      {
        title: "Rare earth prices",
        severity: "High",
        detail:
          "Neodymium and praseodymium prices determine the upstream margin. FY2022 and FY2025 show how far operating income can travel in three years on price alone.",
        watch:
          "Realised price per kilogramme of oxide and the mix between light and heavy rare earths.",
      },
      {
        title: "Downstream execution",
        severity: "High",
        detail:
          "Building separation, metal and magnet capacity is a multi-step industrial project. Each stage has its own yield and qualification problems, and a delay pushes revenue into a later year.",
        watch:
          "Magnet shipment volumes, plant commissioning dates and disclosed start-up costs.",
      },
      {
        title: "Customer qualification",
        severity: "Medium",
        detail:
          "Automotive and defence customers qualify suppliers over years and require consistent specifications. A plant that cannot hold tolerance does not convert into revenue.",
        watch:
          "Announced supply agreements and the number of qualified customers.",
      },
      {
        title: "Capital intensity",
        severity: "Medium",
        detail:
          "Free cash flow has been negative for three years running. Net cash of $401.7M covers a lot, but not an open-ended build.",
        watch:
          "Capital expenditure guidance, the split between maintenance and growth, and the cash balance.",
      },
      {
        title: "Concentration of processing",
        severity: "Medium",
        detail:
          "Most of the world's separation and magnet capacity sits in one country. That is the reason the business exists, but it also means trade policy can change the price of inputs and outputs simultaneously.",
        watch:
          "Export rules, tariffs and any change to the terms on which concentrate or oxide can be sold.",
      },
    ],
    watchlist: [
      {
        title: "Magnet volumes",
        detail:
          "The downstream thesis only becomes measurable when the company reports tonnes shipped, not when it announces capacity.",
      },
      {
        title: "Realised oxide price",
        detail:
          "Upstream margin moves with the price of neodymium and praseodymium, whatever the volume trend.",
      },
      {
        title: "Growth capital",
        detail:
          "Separate optional expansion from spending needed to keep the existing plant running.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "MP Materials is a rare earth miner with a high gross margin, a negative operating margin and a large capital programme aimed at making magnets. Revenue of $399.5M is growing quickly from a low base, and the balance sheet holds $401.7M of net cash.",
      "The educational point is that a commodity producer and a manufacturer have different economics even when they own the same molecule. Mining earns a spread that swings with price; manufacturing earns a conversion margin that depends on qualification and utilisation.",
      "What is not known from these tables is the cost per tonne of magnet capacity and the price at which those magnets will sell. Until both are visible, the $6.31B market value is a view on a construction project.",
    ],
    questions: [
      "How many tonnes of magnets were shipped in the last quarter, and at what margin?",
      "What share of revenue comes from oxide versus finished magnetic material?",
      "What is the capital cost per tonne of new magnet capacity?",
      "How much of the downstream output is contracted with qualified customers?",
    ],
  },
};
