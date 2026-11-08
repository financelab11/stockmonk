import type { StockStory } from "./types";

export const ATI: StockStory = {
  ticker: "ATI",
  kicker: "Specialty metals · Aerospace and defence supply",
  title: "ATI is earning more from the same tonnes of metal",
  dek: "Revenue compounded at 1.8% a year while operating income more than doubled. Mix, pricing and plant utilisation explain the gap, and the multiple now assumes it continues.",
  readingMinutes: 9,
  takeaways: [
    "Revenue is $5.01B, up 9.4%, after compounding at just 1.8% a year over the dataset.",
    "Operating income rose from $287.3M in FY2022 to $640.9M in FY2025.",
    "The latest quarter ran a 19.1% operating margin, the highest in the table.",
    "Free cash flow was $421.1M and the balance sheet holds $442.3M of net cash.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1018963/000162828026010140/ati-20251228.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001018963&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "ATI is a specialty metals producer. It melts titanium and titanium alloys, nickel-based superalloys and specialty steels, then turns them into forgings, castings and machined parts. The customers are aircraft engine makers, airframe manufacturers, defence programmes, medical device companies and industrial buyers that need metal which performs at high temperature or in corrosive conditions.",
      "The company is not a commodity steel mill and should not be read like one. Its value comes from qualification: a jet engine alloy has to be approved for a specific part on a specific engine, and that approval takes years. Once a supplier is qualified, switching is expensive for the customer, which is why specialty metal producers can hold pricing through a cycle.",
      "The financial story of the last few years is margin, not volume. Revenue went from $3.84B in FY2022 to $4.59B in FY2025 while operating income rose from $287.3M to $640.9M. At $175.79 the market value is $23.88B, the shares have risen 82.7% in a year, and the trailing multiple is 43.0x earnings.",
    ],
    quote:
      "In specialty metals, the qualification is the moat. A customer cannot switch an alloy on a certified engine without repeating years of testing.",
  },
  whatItDoes: {
    paragraphs: [
      "The product range covers the full path from melt to finished part. Titanium is melted from sponge and scrap into ingot, then rolled or forged. Nickel-based superalloys are made for the hottest parts of an engine, where ordinary steel would fail. Zirconium goes into nuclear and chemical applications, and the castings and machined components business delivers finished shapes rather than mill products.",
      "The end markets are aerospace and defence first, with medical and energy as the other significant buyers. Aerospace demand is driven by aircraft build rates and aftermarket spares; defence demand by programme budgets and the age of the fleet. Medical demand is steadier and tied to procedure volumes.",
      "Running these operations is capital intensive in a specific way. Melt shops, presses and heat-treatment furnaces are expensive and must be kept busy to earn a return, but the qualification attached to each product limits how flexibly capacity can be switched from one customer to another. That is why utilisation is the key operating variable.",
    ],
    bullets: [
      {
        title: "Titanium",
        detail:
          "Ingot, mill products and forgings for airframes and engines. The largest single product family by reputation and the most cyclical.",
      },
      {
        title: "Nickel-based superalloys",
        detail:
          "Alloys for the hot section of jet engines and for industrial gas turbines. High value, few qualified producers.",
      },
      {
        title: "Forgings, castings and machined parts",
        detail:
          "Finished components sold to engine and airframe programmes, which carry more value added than mill product.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "ATI sells metal by weight but earns margin on specification. A tonne of aerospace-grade titanium alloy sells for far more than a tonne of commercial-purity titanium because of the melting, testing and certification behind it. The gross margin of 24.5% reflects that mix, and the operating margin of 16.5% reflects how much of the fixed cost base is covered at current volumes.",
      "Raw material is a large share of cost. Titanium sponge, nickel, chromium and alloying elements are bought on markets that move, and most aerospace contracts include some form of pass-through or surcharge mechanism. That protects the margin per pound but not the absolute profit, because a fall in metal prices reduces revenue as well as cost.",
      "The operating leverage comes from utilisation. A melt shop running at high rates spreads its fixed cost across more tonnes, and the incremental tonne carries a much higher margin than the average. That is why a 9.4% increase in revenue produced a much larger increase in operating income, and why the quarterly margin moved from 14.1% to 19.1% over six quarters.",
    ],
  },
  growth: {
    paragraphs: [
      "The long-run revenue growth rate is modest at 1.8% a year, which is what a mature metals business looks like when volume is tied to aircraft build rates. The interesting growth is in the mix: more aerospace, more forged and machined parts, less of the lower-value product that competes on price.",
      "The recent acceleration is visible in the quarterly table. Revenue went from $1.14B in Q2 FY2025 to $1.42B in Q3 FY2026, a 26.5% increase year over year, and the operating margin expanded at the same time. Rising volume and rising margin together is the signature of a supply chain recovering from a period of under-utilisation.",
      "Third-party estimates expect $5.27B of revenue this fiscal year and $5.82B next, with earnings per share of $5.24 and $6.62. That implies the margin expansion continues rather than reversing, which is the assumption to test.",
    ],
    bullets: [
      {
        title: "Aircraft build rates",
        detail:
          "Engine and airframe production sets the volume. A build-rate increase flows through with a lag because of inventory in the chain.",
      },
      {
        title: "Defence programmes",
        detail:
          "Multi-year budgets give visibility, but they also concentrate revenue in a small number of platforms.",
      },
      {
        title: "Mix shift",
        detail:
          "More finished parts and fewer mill products raises revenue per tonne and margin at the same time.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The improvement in profitability is the story. Operating income was $287.3M in FY2022, $608.9M in FY2024 and $640.9M in FY2025, on revenue that moved far less. The operating margin went from roughly 7% to roughly 14% over that period, and the latest quarter reached 19.1%.",
      "The quarterly progression is unusually linear for a metals company: 14.1%, 14.4%, 14.5%, 14.2%, 17.4% and 19.1%. A steady climb like that usually means a structural change in price or mix rather than a one-off gain, because a commodity-driven swing would be more erratic.",
      "Return on equity is 26.1% and return on invested capital is 38.6%. The ROIC figure is high for a manufacturer, which tells you the asset base is small relative to current profit. That is a good position to be in, and it also means the ratio can fall quickly if margins normalise.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $94.0M in FY2022, $168.1M in FY2024, $333.7M in FY2025 and $421.1M on a trailing basis. The improvement tracks the margin expansion, and it is the strongest evidence that the earnings are real rather than accounting.",
      "There is one year in the dataset with negative free cash flow of $114.8M, which is what happens when working capital builds ahead of revenue. Specialty metals carries a lot of inventory, from scrap and sponge through to finished forgings, and a build in that inventory can absorb a year's profit.",
      "The balance sheet holds $442.3M of net cash. That is not a large cushion against $23.88B of market value, but it means the company is not reliant on debt markets to fund its capital spending, and it gives the board room for buybacks or bolt-on investment.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 43.0x trailing earnings, 23.4x EV/EBITDA and 56.7x free cash flow, ATI is priced as a growth business rather than a metals producer. A specialty metals company at a cyclical peak would normally trade at a lower multiple, so the market is treating the current margin as durable rather than peak.",
      "The comparison that matters is between the multiple and the margin. If a 19% operating margin is the new normal, 23.4x EBITDA is defensible for a business with qualification barriers. If it is a cyclical high, the same multiple is expensive because earnings would fall and the multiple would rise on a lower base.",
      "Stockmonk does not publish a target price. The attributed consensus mean of $242.60 sits above the $175.79 close, and the tight range of $228.00 to $265.00 suggests the analysts are working from similar margin assumptions.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 10 analysts with a mean target of $242.60 and a range of $228.00 to $265.00. A range that narrow is unusual and reflects a business whose near-term numbers are driven by contracted aerospace volumes rather than by a commodity price.",
      "Estimates call for $1.45B of revenue next quarter and $1.29B the quarter after, with earnings per share of $1.56 and $1.39. For the current fiscal year the group expects $5.27B of revenue and $5.24 of earnings per share; next year, $5.82B and $6.62.",
      "The implied earnings growth of about a quarter on revenue growth of about a tenth is the operating leverage assumption again. It requires the margin to hold at the current level while volume rises.",
    ],
  },
  risks: {
    intro:
      "ATI's risks are cyclical and concentrated: aircraft build rates, a small number of large programmes, and the price of the metals it melts.",
    items: [
      {
        title: "Aerospace cycle",
        severity: "High",
        detail:
          "Revenue depends on aircraft production and aftermarket demand. A build-rate cut or a grounding reduces volume at the same time as it leaves fixed capacity idle.",
        watch:
          "Aircraft build rates, engine deliveries and the order backlog of the major manufacturers.",
      },
      {
        title: "Programme concentration",
        severity: "Medium",
        detail:
          "A small number of engine and airframe programmes account for a large share of aerospace revenue. A delay on one platform is material.",
        watch:
          "Revenue concentration in the filing and progress on the largest programmes.",
      },
      {
        title: "Raw material prices",
        severity: "Medium",
        detail:
          "Titanium sponge, nickel and alloying elements are bought on volatile markets. Surcharges protect margin per pound but not absolute profit.",
        watch:
          "Input costs, surcharge recovery and the lag between a price move and its pass-through.",
      },
      {
        title: "Margin normalisation",
        severity: "Medium",
        detail:
          "The operating margin has risen from roughly 7% to 19% in four years. Some of that is structural, but a cyclical peak would look the same in the short run.",
        watch:
          "Operating margin per quarter and the mix between mill products and finished parts.",
      },
      {
        title: "Capital intensity",
        severity: "Low",
        detail:
          "Melt shops and presses are expensive to maintain and to expand, and capacity additions take years to permit and build.",
        watch:
          "Capital expenditure, maintenance spending and capacity utilisation.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The whole valuation rests on the current margin holding. A move back toward the low teens would change the arithmetic.",
      },
      {
        title: "Aircraft build rates",
        detail:
          "The leading indicator for volume, with a lag as inventory in the supply chain is worked through.",
      },
      {
        title: "Working capital",
        detail:
          "Inventory and receivables can absorb a year of profit when volume is rising quickly.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "ATI is a specialty metals manufacturer with $5.01B of revenue, a 16.5% operating margin and $421.1M of free cash flow. Its qualification barriers are real, and they are the reason the margin has expanded without much revenue growth.",
      "The educational point is the difference between volume growth and margin growth. A metals company with 1.8% revenue growth can still double its operating income if utilisation rises and the mix moves toward higher-specification products. That is what happened here, and it is also why the current margin deserves scrutiny.",
      "What is not known from these tables is how much of the margin expansion is price and how much is permanent mix. The next few quarters of operating margin, alongside aircraft build rates, will answer that.",
    ],
    questions: [
      "How much of the margin gain came from price versus mix and utilisation?",
      "What share of revenue depends on the largest three aerospace programmes?",
      "How much spare melting and forging capacity exists at current volumes?",
      "What capital spending is needed to support the forecast revenue growth?",
    ],
  },
};
