import type { StockStory } from "./types";

export const USAR: StockStory = {
  ticker: "USAR",
  kicker: "Rare earths · Mining and critical minerals",
  title: "USA Rare Earth has $11.5M of revenue and a $3.1B value",
  dek: "Two years of financial history, a negative gross margin and a forecast that implies a tenfold revenue jump. Most of this story is still a plan.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $11.5M, all of it booked in the last two quarters.",
    "The gross margin is -9.7%, so the product was sold for less than its direct cost.",
    "The FY2025 operating loss was $59.5M and the net loss was $297.6M.",
    "Consensus expects $713.3M of revenue next fiscal year against $73.5M this year.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1970622/000197062226000021/usar-20251231.htm",
  irUrl: "https://www.usare.com",
  bigPicture: {
    paragraphs: [
      "USA Rare Earth is building a rare earth and critical minerals business in the United States. Its activities span mining, processing and supply, with a corporate base in Stillwater, Oklahoma and a stated reach into Europe and Asia. The ambition is a domestic chain from ore to separated oxides to the magnetic materials that motors and defence systems need.",
      "The reported history is very short. FY2024 had no revenue and a $15.6M operating loss. FY2025 had $1.6M of revenue and a $59.5M operating loss. The first two quarters of FY2026 produced $5.7M and $5.8M of revenue, which together make up the entire $11.5M trailing figure. The company employs 132 people.",
      "Against that, the market value is $3.09B at $8.23 per share. The stock is 5% up a 52-week range of $6.84 to $32.80 and down 48.0% over the year. A company with two quarters of revenue and a negative gross margin is being valued almost entirely on what it might produce.",
    ],
    quote:
      "When a company has two years of accounts, the balance sheet and the use of cash matter more than the income statement. There is not yet enough history to average anything.",
  },
  whatItDoes: {
    paragraphs: [
      "The business plan follows the rare earth value chain. Mining produces ore; beneficiation concentrates it; separation splits the concentrate into individual oxides; metallisation and alloying turn oxides into the material that magnet makers buy. Each stage needs different equipment and different permits, and the later stages carry most of the value.",
      "The company's commercial position today is that of an early-stage supplier with a small and recent revenue base. That is consistent with early production and materials sales rather than with a fully commissioned mine and separation plant, and it is also consistent with a negative gross margin: when volumes are small and a plant is still being commissioned, the cost per unit is higher than the selling price.",
      "The customer base it is targeting is industrial: magnet manufacturers, defence contractors and motor makers who want a non-Chinese source of supply and are willing to pay for provenance. Those customers qualify suppliers slowly, which means revenue follows qualification rather than the other way round.",
    ],
    bullets: [
      {
        title: "Mining and processing",
        detail:
          "The upstream assets that produce concentrate. Capital intensive and exposed to the price of the contained rare earths.",
      },
      {
        title: "Separation",
        detail:
          "The chemical step that turns concentrate into saleable oxides. The hardest part to permit and to run at consistent quality.",
      },
      {
        title: "Magnetic materials",
        detail:
          "The downstream target. Higher value, longer qualification, and the part of the chain that policy support is aimed at.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The current revenue model is the sale of rare earth and critical mineral products, priced against a global market. A gross margin of -9.7% means the direct cost of what was sold exceeded the revenue it produced. That is common in a ramp, but it is also the clearest signal in the file that the operation is not yet at commercial scale.",
      "The cost structure is dominated by fixed and semi-fixed items: plant, equipment, engineering, permitting and the people needed to run a chemical facility. With $11.5M of revenue, almost none of that is covered. The operating loss of -795.6% of revenue is the arithmetic of a small numerator and a large denominator, and the dollar figure matters more than the percentage.",
      "The eventual economics depend on two spreads: the difference between the cost of mining and separation and the price of oxide, and the difference between the cost of converting oxide into magnetic material and the price a qualified customer will pay. The second spread is larger and more durable, which is why every rare earth developer is trying to reach it.",
    ],
  },
  growth: {
    paragraphs: [
      "There is no meaningful compound growth rate to quote. Revenue went from zero in FY2024 to $1.6M in FY2025 and then to $11.5M on a trailing basis, and the quarterly pattern is $5.7M followed by $5.8M. That is a start-up moving from nothing to something, not a business with a trend.",
      "The forecast is where the arithmetic becomes demanding. The attributed consensus expects $73.5M of revenue this fiscal year and $713.3M next, with earnings per share of -$0.57 and then +$0.03. A tenfold increase in one year requires a plant to be commissioned, qualified and selling at volume within twelve months.",
      "The growth drivers are the same as for any rare earth developer: a permitted ore body, a working separation circuit, customer qualification and a price that supports the cost base. Policy support for domestic supply helps demand, but it does not shorten the commissioning schedule.",
    ],
    bullets: [
      {
        title: "Commissioning",
        detail:
          "The step from $11.5M to $73.5M is a plant start-up. Watch physical output, not announcements.",
      },
      {
        title: "Qualification",
        detail:
          "Industrial customers test material for months before ordering at scale. Each qualification is a gate.",
      },
      {
        title: "Price support",
        detail:
          "Government programmes can underwrite a domestic price, but they are programmes and their terms can change.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The operating record is short and steep. FY2024 lost $15.6M with no revenue; FY2025 lost $59.5M on $1.6M of revenue. The quarterly operating margins of -643.6% and -795.6% are not profitability measures so much as descriptions of a company spending to build.",
      "The net income line is stranger than the operating line. Q1 FY2025 reported net income of $51.8M with no revenue, then Q2 FY2025 lost $142.5M, Q3 FY2025 lost $156.7M and Q4 FY2025 lost $50.2M. Those swings are far larger than the operating losses, which points to non-operating, non-cash revaluations rather than to trading performance.",
      "Return on equity is -23.6%. For a company with a short history, that figure is less a measure of business quality than a measure of how much capital has been raised relative to how much has been earned.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$16.1M in FY2024, -$86.3M in FY2025 and -$245.5M on a trailing basis. The acceleration matches the build: money is going into plant, equipment and the working capital needed to hold inventory before it is sold.",
      "The dataset does not provide a net debt figure, so the capital structure cannot be assessed from these tables. What is clear is that a company spending at this rate before reaching commercial volume will need capital, and that the cost of that capital depends on how much progress it can show between raises.",
      "The practical question for a reader is not whether the company has cash today but how many quarters of spending it covers and what milestone has to be reached before the next financing. A negative gross margin makes that milestone harder, because each unit sold consumes cash rather than generating it.",
    ],
  },
  valuation: {
    paragraphs: [
      "No earnings multiple exists: the company is loss-making and the trailing figures are negative. The valuation is $3.09B of market value against $11.5M of revenue, which is a statement about future capacity rather than about any current cash flow.",
      "The only honest comparison is with the cost of building the assets the company says it will build. If the market value exceeds the estimated cost to construct and commission the plants, the difference is the premium paid for the option; if it is below, the market is sceptical about execution.",
      "Stockmonk does not publish a target price. The attributed consensus mean of $35.13 appears below as third-party context, and it rests on the forecast revenue step that has not yet happened.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers eight analysts with a mean target of $35.13 and a range of $21.00 to $45.00. All of that sits well above the $8.23 close, which means the published estimates assume the plan is delivered.",
      "Estimates call for $13.6M of revenue next quarter and $47.1M the quarter after, then $73.5M for the fiscal year and $713.3M the year after that. Five analysts contribute to the near-term revenue estimate and three to the following quarter, so the coverage is thin and the dispersion is wide.",
      "The step from $73.5M to $713.3M in a single year is the assumption to interrogate. It implies a plant operating near design capacity with customers already qualified, which is a different company from the one in the trailing accounts.",
    ],
  },
  risks: {
    intro:
      "This is a construction and permitting story with a commodity price attached. The financial risks follow from the operating ones.",
    items: [
      {
        title: "Ramp and commissioning",
        severity: "High",
        detail:
          "A negative gross margin means the operation is not yet covering its direct costs. Getting from there to commercial volume is the single largest risk, and it is measured in tonnes produced, not in revenue guidance.",
        watch:
          "Quarterly production volumes, unit costs and the gross margin trend.",
      },
      {
        title: "Permitting",
        severity: "High",
        detail:
          "Mining and chemical separation need federal and state approvals, including for the waste streams a separation plant produces. A permit delay idles capital already spent.",
        watch:
          "Permit applications, approvals and any disclosed schedule changes.",
      },
      {
        title: "Funding and dilution",
        severity: "High",
        detail:
          "Trailing free cash flow of -$245.5M against a short operating history implies repeated capital raising. Each raise dilutes the eventual value per share.",
        watch:
          "Cash used in operations, the cash balance and the size of new share issuance.",
      },
      {
        title: "Rare earth prices",
        severity: "Medium",
        detail:
          "Revenue is priced off a global market that has been volatile. A weak price year would make the ramp unprofitable even if volumes arrive.",
        watch:
          "Realised prices for the oxides sold and the mix of light versus heavy rare earths.",
      },
      {
        title: "Short operating history",
        severity: "Medium",
        detail:
          "Two years of accounts is not enough to establish cost per unit, yield or reliability. Every forecast is an extrapolation from a small sample.",
        watch:
          "The next four quarters of production data, which will be the first real evidence of unit economics.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "A move from negative to positive is the first proof that the plant can sell at a profit.",
      },
      {
        title: "Production volumes",
        detail:
          "Tonnes of separated product, not revenue, is the measure of whether commissioning is working.",
      },
      {
        title: "Cash runway",
        detail:
          "Compare spending with the cash balance to see how much time the plan has before the next raise.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "USA Rare Earth is an early-stage rare earth company with $11.5M of trailing revenue, a negative gross margin and a $3.09B market value. Its FY2025 accounts show a $59.5M operating loss and a $297.6M net loss, and the net figure is dominated by items outside operations.",
      "The educational point is that a short history limits what any analysis can conclude. With two years of data, the useful evidence is unit cost, production volume and cash burn, not margin percentages or growth rates computed on a tiny base.",
      "What is not known is the cost per tonne at commercial scale and the price the company can achieve for qualified magnetic material. The consensus forecast of $713.3M of revenue next year assumes both are favourable.",
    ],
    questions: [
      "What did the company produce in the last quarter, in tonnes, and at what unit cost?",
      "How much capital is needed to reach the forecast revenue, and how will it be funded?",
      "Which customers have qualified the company's material, and for what volumes?",
      "What share of the $297.6M net loss was non-cash?",
    ],
  },
};
