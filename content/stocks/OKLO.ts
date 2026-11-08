import type { StockStory } from "./types";

export const OKLO: StockStory = {
  ticker: "OKLO",
  kicker: "Nuclear · Small fission plants",
  title: "Oklo's first power plant is the entire investment case",
  dek: "Revenue of $3.1M against a $4.4B market value. What matters sits in a licensing docket, a construction estimate and a contract for electricity that has not been signed yet.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $3.1M, with $1.2M in Q2 FY26 and $1.9M in Q3 FY26.",
    "The operating loss widened from $18.6M in FY2023 to $139.3M in FY2025.",
    "Free cash flow was -$115.4M in FY2025 and -$452.2M on a trailing basis.",
    "Third-party estimates see $9.5M of revenue next fiscal year and a loss of $1.03 per share.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1849056/000162828026018698/oklo-20251231.htm",
  irUrl: "https://www.oklo.com",
  bigPicture: {
    paragraphs: [
      "Oklo designs small fission power plants and intends to own and operate them rather than simply sell hardware. The company's proposition is firm, carbon-free electricity for buyers who need power around the clock: data centres, industrial sites and utilities. It employs 215 people, most of them engineers and licensing staff, and it has not yet completed a commercial plant.",
      "The reported numbers are therefore the numbers of a development company. Trailing revenue is $3.1M and the operating loss is $139.3M for FY2025. The latest quarter, Q3 FY26, produced $1.9M of revenue against an operating margin of -3816.1%, which sounds catastrophic and mostly means the revenue base is too small to carry a fixed cost base.",
      "At $23.55 the shares carry a $4.38B market value. They have fallen 77.9% over the past year and sit 5% of the way up a 52-week range that runs from $18.54 to $117.44. That range is the market repeatedly repricing the same unresolved question: how long until a plant is licensed, built and paid for.",
    ],
    quote:
      "A pre-commercial reactor company is not valued on its income statement. It is valued on the probability-weighted cost and schedule of its first plant, and on whether anyone has agreed to buy the output.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is a power plant, not a reactor alone. Oklo's design is a small fast-spectrum reactor intended to be built in repeatable units and assembled on site, which is the industry's answer to the cost overruns of large one-off nuclear construction. Smaller units reduce the capital committed per project and, in theory, allow factory learning to compound across orders.",
      "The commercial model puts Oklo on the other side of the meter from a conventional equipment vendor. It aims to finance, own and operate plants and sell electricity under long-term agreements. That makes the customer a power buyer rather than a utility procurement department, and it makes Oklo responsible for construction cost, operating performance and fuel supply over decades.",
      "Fuel is a second business inside the first. Fast reactors can use different fuel forms from the light-water fleet, and Oklo has described recycling used fuel as part of its plan. Whatever the fuel route, it needs its own qualification and licensing work, so it is a parallel approval track rather than a solved input.",
    ],
    bullets: [
      {
        title: "The plant",
        detail:
          "A small fast reactor sold as repeatable capacity. Site assembly and licensing, not chip design, are the bottleneck.",
      },
      {
        title: "The customer",
        detail:
          "Large power users and utilities buying firm output. The contract that matters is a power purchase agreement, not an equipment order.",
      },
      {
        title: "The fuel",
        detail:
          "Fuel fabrication and qualification is a separate regulatory and industrial problem, and the company has discussed recycling spent fuel.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Today the revenue line is a few million dollars and the gross margin is 41.1%. Neither figure tells you much. With $3.1M of revenue, a 41.1% gross margin is a rounding exercise against $139.3M of operating expense, and the expense is people, engineering and regulatory submissions rather than the cost of generating electricity.",
      "The intended economics are those of an independent power producer. Oklo would raise capital, build a plant, and recover the investment through electricity sales over many years. Revenue per megawatt-hour would be set by the contract, while cost per megawatt-hour would be dominated by the capital charge on construction, plus fuel, operations and decommissioning. A plant that costs more than expected or runs less often than promised destroys the return, because the price is fixed and the cost is not.",
      "That structure creates operating leverage only after the first plant exists. Before then, every additional engineer is a cost with no matching revenue, which is why the loss grows with the ambition rather than with sales. The relevant unit economics are capital cost per unit of capacity, the price in the power contract, and the capacity factor the design can hold.",
    ],
  },
  growth: {
    paragraphs: [
      "The historical growth rate is not measurable in any useful sense, because the base is near zero. What the annual table shows is spending: an operating loss of $1.8M in FY2022, $18.6M in FY2023, $52.8M in FY2024 and $139.3M in FY2025. That progression tracks hiring, licensing work and site development, not customer demand.",
      "The attributed consensus expects $3.1M of revenue this fiscal year and $9.5M next year, with losses of $0.96 and $1.03 per share. Even the forecast step-up leaves the company far below the scale needed to cover its cost base. Growth in any meaningful sense begins on the day a plant enters commercial operation, and it then depends on repeating the same design at the same cost.",
    ],
    bullets: [
      {
        title: "First plant",
        detail:
          "Everything hinges on one project reaching a licence and a construction finish line. A slip moves the entire revenue curve.",
      },
      {
        title: "Repeat orders",
        detail:
          "The small-reactor thesis only works if unit two costs less than unit one. Watch for standardisation rather than bespoke site design.",
      },
      {
        title: "Power contracts",
        detail:
          "A signed long-term offtake agreement is what makes a plant financeable. Without one, construction has to be funded on the balance sheet.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The trailing operating margin of -4430.3% is arithmetically correct and analytically useless: it is a large loss divided by a very small revenue number. The reported net margin of 0.0% should be treated the same way. When margins are computed on a few million dollars of revenue, read the dollar figures and ignore the percentages.",
      "The quarterly record shows how sensitive those ratios are. Q2 FY26 had $1.2M of revenue and a -6048.8% operating margin; Q3 FY26 had $1.9M of revenue and a -3816.1% margin. Revenue rose by roughly half and the margin improved by a third without anything changing in the underlying business.",
      "Return on equity is -6.8%, which understates the cash consumed because the equity base has been enlarged by fundraising. The honest scorecard for a company at this stage is the cash balance, the burn rate and the number of regulatory milestones cleared.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$16.1M in FY2023, -$38.7M in FY2024 and -$115.4M in FY2025. The trailing figure of -$452.2M is larger than any single year, which tells you the pace of spending has increased again rather than stabilised. That money goes into licensing work, engineering, long-lead manufacturing and site preparation, none of which produces revenue on its own.",
      "The dataset does not provide a net debt figure, so the funding requirement cannot be sized from these tables. What can be said is that a company spending at this rate before its first sale must raise capital repeatedly, and that each raise transfers a share of the eventual plant economics to new shareholders.",
      "For a reader, the useful exercise is to compare trailing cash burn with the cash and commitments disclosed in the filing, then ask how many quarters of runway that buys and what milestone has to be reached before the next raise.",
    ],
  },
  valuation: {
    paragraphs: [
      "There is no meaningful earnings multiple here. The market value of $4.38B is being paid for plants that do not yet exist, which makes the valuation a probability-weighted estimate of future capacity, contract prices and construction costs rather than a multiple of anything on the income statement.",
      "The share price history is the clearest valuation data point available. A 52-week range of $18.54 to $117.44, with the stock at $23.55, shows how violently the market's estimate of that option moves on licensing news and financing conditions. A 77.9% decline over one year is not a verdict on the technology; it is a repricing of time and dilution.",
      "Stockmonk does not publish a target price. The attributed third-party mean is shown in the next section purely as context, and the gap between its high and low ends is more informative than the average.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 21 analysts with a mean target of $62.62 and a range of $14.00 to $122.00. That range spans roughly nine times, which is what happens when the valuation depends on a date nobody can pin down.",
      "Current-year estimates call for $3.1M of revenue and a loss of $0.96 per share. Next year the same group expects $9.5M of revenue and a loss of $1.03 per share, so revenue is forecast to triple while the loss per share grows. That combination is only consistent with heavy continued investment.",
      "Coverage thins out at the short end: 18 analysts contribute to the current-year revenue estimate and 19 to next year, but only 13 to the next-quarter number. Forecasts about a company with no product revenue should be read as scenario sketches.",
    ],
  },
  risks: {
    intro:
      "The balance sheet is not the main risk; the schedule is. Oklo's risks cluster around approval, construction cost and the willingness of investors to keep funding a multi-year build.",
    items: [
      {
        title: "Licensing and regulatory approval",
        severity: "High",
        detail:
          "A reactor design must clear design certification and a site-specific licence before construction can begin in earnest. Each stage can add years and change the plant's specification.",
        watch:
          "Docket milestones, the scope of the design approval and any requests for additional analysis.",
      },
      {
        title: "First-of-a-kind construction cost",
        severity: "High",
        detail:
          "The small-reactor case rests on factory repetition, but the first unit carries engineering, tooling and learning costs that later units do not. If the first plant overruns, the model's credibility goes with it.",
        watch:
          "Site work progress, long-lead procurement and any revision to published cost estimates.",
      },
      {
        title: "Funding and dilution",
        severity: "High",
        detail:
          "Spending $115.4M in a year with $3.1M of revenue means repeated capital raises. Each one dilutes existing holders and lowers the value per share of the eventual fleet.",
        watch:
          "Cash used in operations, the cash balance at each quarter-end, and the size of new share issuance.",
      },
      {
        title: "Offtake and power prices",
        severity: "Medium",
        detail:
          "A plant is financeable when a creditworthy buyer signs a long-term contract. If power prices fall or buyers hesitate, the project has to be carried on the sponsor's balance sheet.",
        watch:
          "Announced power agreements, their duration and the credit quality of the counterparty.",
      },
      {
        title: "Fuel supply and technology",
        severity: "Medium",
        detail:
          "The fuel route needs its own qualification and fabrication capacity. A design that depends on fuel nobody produces at scale is not financeable regardless of the reactor.",
        watch:
          "Fuel qualification progress, fabrication partners and any change to the fuel specification.",
      },
    ],
    watchlist: [
      {
        title: "Licensing calendar",
        detail:
          "The date of the next regulatory decision is the single most important variable in the story.",
      },
      {
        title: "Burn against cash raised",
        detail:
          "Compare trailing free cash flow with the cash balance to estimate how long the current plan is funded.",
      },
      {
        title: "First customer contract",
        detail:
          "A signed, long-dated power agreement would convert the story from a design proposal into a project.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Oklo is a development-stage nuclear company with $3.1M of trailing revenue, a $139.3M operating loss in FY2025 and a $4.38B market value. The business it is trying to build, an owner of small fission plants selling electricity, is capital intensive and back-loaded: cost now, revenue later, and a long gap in between.",
      "What is not known is more important than what is. The filing-based figures do not disclose a cost per unit of capacity, a contracted power price or a firm operational date, and those three variables determine whether the eventual plants earn a return. The consensus revenue estimate of $9.5M next year is small enough that it says nothing about the plant economics either way.",
      "For a learner, Oklo is a clean example of how to read a pre-revenue company: ignore percentage margins computed on tiny revenue, follow the cash, count the regulatory milestones and treat the market value as a bet on a schedule.",
    ],
    questions: [
      "What does the first plant cost per unit of capacity, and how much of that is already committed?",
      "Has any buyer signed a long-term contract for the output, and at what price?",
      "How many quarters of spending does the current cash balance cover?",
      "What single regulatory decision would most change the timeline?",
    ],
  },
};
