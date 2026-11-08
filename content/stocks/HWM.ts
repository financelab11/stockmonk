import type { StockStory } from "./types";

export const HWM: StockStory = {
  ticker: "HWM",
  kicker: "Industrials · Aerospace components",
  title: "Howmet's real asset is a qualification, not a factory",
  dek: "Turbine airfoils and engine forgings are sole-sourced because moving a part to a new supplier means re-certifying it on a flying engine. That barrier is what carries a 28.1% operating margin.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $9.73B, up 22.0%, with the latest quarter at $2.70B and a 28.7% operating margin.",
    "Operating income rose from $748M in FY2021 to $2.05B in FY2025, far faster than revenue.",
    "The balance sheet holds $507M of net cash and the business earns a 41.0% return on invested capital.",
    "At $205.81 the shares trade at 41.2x earnings and 26.6x EV/EBITDA, the richest multiple in the industrial peer set.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/4281/000000428126000012/hwm-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000004281&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Howmet Aerospace makes the hot, highly stressed parts inside jet engines and the structures that hold aircraft together. Its core products are investment-cast turbine airfoils, seamless rolled rings, titanium ingot, engine forgings, airframe fasteners and forged aluminium wheels for heavy trucks. Revenue is dominated by aerospace and defence, with commercial truck wheels as the main non-aerospace line. Trailing revenue is $9.73B.",
      "The question that matters is whether the margin expansion of the last four years is structural or cyclical. Aerospace suppliers earn high margins when engine build rates rise because the furnaces and presses are already paid for, and they lose them when volumes fall. Howmet has also been raising price and improving mix, so the answer depends on how much of the 28.1% trailing operating margin is volume leverage and how much is a permanent change in the way the company prices its parts.",
      "The shares closed at $205.81, for a market capitalisation of $81.84B and a position 18% of the way up a 52-week range of $183.52 to $310.00. The price is 41.2x trailing earnings, 26.6x EV/EBITDA, 8.4x sales and 42.4x free cash flow, with a 2.4% free-cash-flow yield and a 0.2% dividend yield. Over the past year the stock returned 0.3% while revenue grew 22.0%, which means the multiple compressed as earnings rose.",
    ],
    quote:
      "An engine programme can run for thirty years. Once a casting is qualified on it, the supplier is not chosen again each year — and that is worth more than any single year's price negotiation.",
  },
  whatItDoes: {
    paragraphs: [
      "The engine business is the centre of gravity. A jet engine contains hundreds of airfoils, and the ones in the hot section are cast from nickel-based superalloys to tolerances measured in fractions of a millimetre. Howmet casts those parts, makes the rings and casings around them, and supplies titanium and forgings for the rotating hardware. The customer is the engine manufacturer, and the part is designed into an engine model that may stay in production for decades.",
      "The structures and fastener business sells to airframers and to engine and equipment makers. Fasteners look mundane but they are engineered and certified per aircraft programme, and a plane cannot be delivered without them. Forged wheels serve the commercial truck market, which is cyclical and more price-sensitive than aerospace, and it gives the company a second outlet for its forging capacity.",
      "The common thread is qualification. A new supplier of a flight-critical part has to be approved by the engine maker and often by the airworthiness authorities, a process that takes years and puts the programme's schedule at risk. That is why so many of these parts are sole-sourced, and why the competitive set is narrow: Precision Castparts, a handful of specialist foundries and the captive operations of the engine makers themselves.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is a function of three things: the number of engines built, the content per engine, and the price of that content. Content per engine grows when a new generation replaces an older one, because newer engines run hotter and use more complex castings. Price is negotiated on long-term agreements, often with annual escalators and cost-sharing formulas rather than spot pricing. That makes revenue unusually visible for a component maker, but it also means a build-rate cut flows straight through.",
      "The cost structure is heavy on fixed assets and light on variable cost. A casting furnace, a forging press and the heat-treatment and inspection equipment behind them run around the clock, and the marginal cost of another part is mostly material and energy. That is why operating income rose from $748M in FY2021 to $2.05B in FY2025 on revenue that went from $4.97B to $8.25B: the same plants absorbed far more volume, and the incremental revenue carried a high drop-through.",
      "The 36.6% gross margin looks modest for a business with a 28.1% operating margin, and the gap tells you something. Gross profit is measured after the cost of material, labour and factory overhead, and Howmet's selling, engineering and administrative costs are small relative to the factory base. A supplier that is designed into a programme does not need a large field sales force to win the next order.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $4.97B in FY2021 to $5.66B, $6.64B, $7.43B and $8.25B in the following four years, then reached $9.73B on a trailing basis. The latest quarter grew 29.4% to $2.70B, the fastest rate in the table. That is a recovery story as much as a growth story: the early part of the period was a rebound from weak aerospace volumes, and the later part is the industry building engines at higher rates.",
      "The third-party consensus expects $10.30B of revenue and $5.50 of EPS this fiscal year, then $11.69B and $6.65 next year, with $2.76B and $1.50 for the coming quarter. Those numbers assume the build-rate recovery continues and that price and mix keep adding to revenue per engine. They also assume no major programme interruption, which is the assumption that has been wrong for this industry before.",
      "The realistic drivers are engine build rates, spares demand as the installed fleet grows, defence programmes, and the content increase that comes with each new engine generation. What would slow it down is a pause in narrowbody production, a customer destocking spares, or a new engine programme that is delayed past its planned entry into service. None of those are visible in a trailing revenue line, and all of them would hit a sole-source supplier quickly.",
    ],
    bullets: [
      {
        title: "Build rates",
        detail:
          "Engines are assembled at rates set by the airframers. Higher rates pull through castings and forgings with high incremental margins.",
      },
      {
        title: "Content per engine",
        detail:
          "Newer engines run hotter and use more complex airfoils, so the same engine shipment carries more Howmet revenue.",
      },
      {
        title: "Defence and wheels",
        detail:
          "Military engine and structure work is steadier than commercial aerospace; truck wheels add volume but at lower margins.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The margin ladder is the clearest evidence of operating leverage. Operating margin ran 25.4%, 25.9% and 22.6% in the three quarters to Q4 FY25, then jumped to 32.6% in Q1 FY26 before settling at 27.9% and 28.7%. The 32.6% quarter stands well outside the range and should not be annualised. The last two quarters, at 27.9% and 28.7%, are a better guide, and both sit well above the 22.6% low a year earlier.",
      "Net margin is 20.4% and diluted EPS is $5.11. Return on equity is 34.5%, but the more informative number is the 41.0% return on invested capital, which is high even for a company with a modest asset base. The business earns that return because the plants are utilised and because the price of a qualified part reflects its engineering content rather than the cost of the metal in it.",
      "Annual operating income went from $748M to $919M, $1.20B, $1.63B and $2.05B across the five fiscal years in the table, while net income went from $258M to $1.51B. Net income grew faster than operating income, and the difference sits below the operating line, in interest and tax. Moving from a leveraged balance sheet to $507M of net cash lowers the interest bill, but that benefit does not repeat once the debt is gone.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow rose from $250M in FY2021 to $540M, $682M, $977M and $1.43B in FY2025, and reached $1.93B on a trailing basis. That is a 19.8% margin, roughly in line with the 20.4% net margin, which means the accounting profit is being converted into cash rather than absorbed by working capital or capital spending.",
      "The balance sheet carries $507M of net cash, a small number relative to an $81.84B market capitalisation but an important one for a capital-intensive manufacturer. It means the company can fund furnace and press capacity, pay the dividend and buy back stock without adding leverage. It also means the interest line is no longer a material swing factor, which is a change from the earlier years when net income lagged operating income.",
      "What the cash flow supports is capacity investment and returns to shareholders rather than a transformation. At $1.93B of trailing free cash flow against an $81.84B market value, the free-cash-flow yield is 2.4%. A buyer at this price is paying for the future growth of that cash stream, not for the current one.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $205.81 the shares trade at 41.2x trailing earnings, 26.6x EV/EBITDA, 8.4x sales and 42.4x free cash flow. Those are the highest multiples in the industrial peer group shown below: RTX trades at 18.1x EV/EBITDA and 30.4x earnings, Eaton at 20.9x and 34.0x, GE at 24.3x and 36.7x, and Caterpillar at 14.5x and 21.6x. Howmet is being valued as a scarce aerospace supplier rather than as a metal-basher.",
      "The multiple is doing a lot of work. A 42.4x free-cash-flow multiple on a 2.4% yield implies that the market expects free cash flow to keep growing at a rate well above the industrial average for several years. If revenue growth slows to high single digits and the operating margin stays near 28%, the cash flow still grows, but not fast enough to justify the multiple without help from buybacks or a further re-rating.",
      "The one-year return of 0.3% against 22.0% revenue growth is the most useful valuation fact here. It says the shares have already absorbed a lot of good news and that the earnings growth of the past year was matched by a lower multiple. Stockmonk does not publish a target price; the consensus figure is third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 21 analysts with a mean target of $296.29 and a range of $230.00 to $375.00. Current fiscal-year estimates call for $10.30B of revenue and $5.50 of EPS, with 22 analysts contributing; next year carries $11.69B and $6.65. The coming quarter is expected to produce $2.76B and $1.50.",
      "The gap between the $230 low target and the $375 high is wide relative to the $205.81 share price, and it maps onto the two views of the business. One view is that build rates and pricing keep compounding; the other is that the margin is near a peak and the multiple should compress. The estimates themselves sit closer together than the targets, which suggests the disagreement is about the multiple rather than the near-term earnings.",
      "These are third-party forecasts. A mean target is not a Stockmonk rating, and for a concentrated aerospace supplier the range of outcomes is better represented by the programme schedule than by the average opinion.",
    ],
  },
  risks: {
    intro:
      "Howmet's financial position is strong and its competitive position is entrenched. The risks are concentrated in the aerospace cycle and in the bargaining power of the customers it supplies.",
    items: [
      {
        title: "Aerospace build rates",
        severity: "High",
        detail:
          "Revenue tracks engine and airframe production. A slowdown at the airframers would idle expensive equipment that cannot be repurposed quickly.",
        watch:
          "Engine and airframe delivery rates, and the company's own volume commentary.",
      },
      {
        title: "Customer concentration and pricing pressure",
        severity: "High",
        detail:
          "A small number of engine makers and airframers account for most of the revenue, and they negotiate long-term agreements from a position of strength.",
        watch:
          "Long-term agreement renewals and the price escalation achieved on them.",
      },
      {
        title: "Input costs for superalloys and titanium",
        severity: "Medium",
        detail:
          "Nickel, cobalt and titanium prices move with commodity markets and energy costs, and cost-sharing formulas do not always keep pace.",
        watch:
          "Gross margin and the timing of raw-material pass-through.",
      },
      {
        title: "Programme delays and cancellations",
        severity: "Medium",
        detail:
          "A new engine or aircraft programme that slips pushes years of expected content to the right, and the tooling is already built.",
        watch:
          "Programme schedules and any change to the installed base forecast.",
      },
      {
        title: "A multiple that assumes continuity",
        severity: "High",
        detail:
          "At 42.4x free cash flow and 8.4x sales, a year of flat earnings would be punished by the multiple even if the business remains sound.",
        watch:
          "The EV/EBITDA trend against the direction of earnings revisions.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin ex-one-offs",
        detail:
          "The 32.6% quarter in Q1 FY26 is not the baseline. The last two quarters, at 27.9% and 28.7%, are what the valuation should be tested against.",
      },
      {
        title: "Free-cash-flow conversion",
        detail:
          "Cash flow has tracked net income closely. A widening gap would signal working capital or capex problems.",
      },
      {
        title: "Net cash position",
        detail:
          "A $507M net cash balance is a cushion, but a large acquisition would change the balance-sheet story quickly.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Howmet is a genuine toll collector on the aerospace supply chain. Its parts are designed into engines that stay in service for decades, the qualification barrier keeps competitors out, and the fixed-cost base turns volume growth into disproportionate profit. The 41.0% return on invested capital is the clearest sign that the position is real.",
      "The shares already reflect much of that. At 41.2x earnings and 42.4x free cash flow, with a 2.4% free-cash-flow yield, the price requires years of continued growth and a margin near the top of its range. The flat one-year return against 22.0% revenue growth shows what happens when earnings grow but the multiple stops expanding.",
      "What is not knowable from the summary is how much of the margin improvement came from price and mix rather than volume, and whether the current build rates are the new normal or a cyclical high. Those two questions decide whether 28% is a floor or a peak.",
    ],
    questions: [
      "How much of the revenue growth is price and content rather than engine units?",
      "Is the 27.9% to 28.7% operating margin sustainable if build rates flatten?",
      "What share of revenue comes from the largest engine programmes?",
      "How much capacity is still unused in the casting and forging plants?",
    ],
  },
};
