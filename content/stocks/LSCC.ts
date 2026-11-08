import type { StockStory } from "./types";

export const LSCC: StockStory = {
  ticker: "LSCC",
  kicker: "Semiconductors · Programmable logic",
  title: "Lattice sells programmable logic into sockets that outlive the product around them",
  dek: "A 68.6% gross margin says the chips are valuable. A 9.1% operating margin says the company is spending the difference, and its fastest-growing quarter made that gap wider.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $808.8M, up 63.4%, after two years in which revenue fell from $737.2M to $509.4M and then $523.3M.",
    "Gross margin is 68.6% but operating margin is 9.1%, so operating expense is consuming most of the contribution.",
    "In Q3 FY27 revenue rose from $201.1M to $291.0M while net income fell from $19.4M to $11.2M.",
    "Free cash flow of $242.6M, a 30.0% margin, is far above reported profit, which points to large non-cash charges.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/855658/000143774926004100/lscc20260103_10k.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000855658&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Lattice Semiconductor sells field-programmable gate arrays, the chips that customers configure after manufacture to do a specific job. The company's niche is the low-power end of that market: small devices that sit on a circuit board and handle a fixed function, such as bridging one interface to another, sequencing power rails, or processing a sensor signal. It reports serving communications and computing, industrial, automotive and consumer markets, and employs 746 people.",
      "A programmable-logic socket is unusually durable. Once an FPGA is designed into a board, the customer's software and validation work is built around it, and the part stays for the life of the platform, which in industrial and automotive equipment can be a decade. That is the source of the 68.6% gross margin: the customer is not buying a commodity function, it is buying continuity.",
      "The financials are more complicated than the franchise. Trailing revenue of $808.8M was up 63.4%, but that follows a collapse from $737.2M in FY2023 to $509.4M in FY2024. At $105.02 the shares sit about 46% of the way up a 52-week range of $60.50 to $157.01, on a $14.94B market capitalisation, after a 68.0% twelve-month return and a 25.5% five-year return.",
    ],
    quote:
      "The socket is sticky, which is why the gross margin is 68.6%. The cost of supporting that socket is what turns it into a 9.1% operating margin.",
  },
  whatItDoes: {
    paragraphs: [
      "An FPGA is a grid of logic that the customer wires up in software. That makes it useful in three situations: when volumes are too low to justify a custom chip, when the standard is still moving, and when a product needs to be updated in the field. Lattice's devices are small and low-power, which pushes them toward battery-operated, thermally constrained and always-on applications rather than toward the large accelerators that dominate the headlines.",
      "The customer relationship is design-led. An engineer selects a part at the schematic stage, writes the logic, validates the board and then places production orders. That process takes months to years and creates a switching cost that has nothing to do with price. It also means revenue lags design activity: the sockets won today show up as revenue when the customer's product ramps, which may be two or three years later.",
      "The end markets are deliberately spread. Communications and computing provide volume, industrial and automotive provide durability, and consumer provides a cyclical kicker. That mix is why the company's revenue held up better than many semiconductor peers in the last downturn, and why it did not escape the downturn entirely.",
    ],
    bullets: [
      {
        title: "Low-power FPGAs",
        detail:
          "Small programmable devices used for interface bridging, power sequencing and sensor processing.",
      },
      {
        title: "Design-win economics",
        detail:
          "Revenue arrives years after the design decision, and the part tends to stay for the platform's life.",
      },
      {
        title: "End-market spread",
        detail:
          "Communications, computing, industrial, automotive and consumer, each with a different cycle.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The gross margin is the franchise. At 68.6%, Lattice keeps more than two-thirds of each revenue dollar after the cost of the silicon, which is what a design-led programmable business should look like. The chips are fabricated by partners, so the company does not carry a fab, and the gross margin reflects design value rather than manufacturing scale.",
      "Everything after that is the problem. Operating margin of 9.1% means operating expense is absorbing most of the contribution. Research and development for a programmable architecture is permanent and expensive, because the software tools, the intellectual property library and the silicon roadmap all have to be maintained whether or not revenue grows. Sales and applications engineering are the other large block, since each design win requires support at the customer's bench.",
      "The operating leverage should therefore be dramatic when revenue scales. In practice it has not been. Revenue rose from $145.8M in Q4 FY26 to $170.9M, $201.1M and $291.0M, while operating margin went from 0.7% to 15.3%, 11.1% and 8.2%. The direction of travel reversed exactly when the growth accelerated, which is the central puzzle in these accounts.",
    ],
  },
  growth: {
    paragraphs: [
      "The five-year revenue record is a full cycle: $515.3M, $660.4M, $737.2M, $509.4M and $523.3M. Operating income followed the same shape with more amplitude, from $100.8M to $187.4M to $212.3M, then down to $34.5M and $11.2M. The company did not lose its franchise in the downturn; it lost volume against a cost base that was built for the larger revenue.",
      "The recovery is now visible quarter by quarter: $124.0M, $133.3M, $145.8M, $170.9M, $201.1M and $291.0M. That is a steep ramp, and the latest step is the largest. Third-party estimates expect it to continue, with $998.2M of revenue and $2.51 of EPS this fiscal year and $1.61B and $4.39 next year. The revenue forecast is a recovery assumption; the EPS forecast is a margin assumption, and the two are not the same bet.",
      "The demand drivers are the ones that suit a low-power device: more sensors and interfaces per system, more battery-powered equipment, and more automotive electronics that must work within a thermal budget. None of those are new, which is reassuring, but none of them are growing at the rate implied by the last two quarters either.",
    ],
    bullets: [
      {
        title: "Content per board",
        detail:
          "More interfaces and sensors per system mean more small programmable parts, which is Lattice's sweet spot.",
      },
      {
        title: "Industrial and automotive durability",
        detail:
          "Long product lives make each design win a multi-year revenue stream once it ramps.",
      },
      {
        title: "Communications and computing",
        detail:
          "The volume end of the mix, and the part most exposed to a capex pause at customers.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The margin history is one of the more extreme in the coverage group. Operating income of $212.3M in FY2023 became $34.5M in FY2024 and $11.2M in FY2026, on revenue that fell from $737.2M to $509.4M and then $523.3M. Return on equity of 3.2% and return on invested capital of 4.5% are the arithmetic result: a high-gross-margin business earning almost nothing on its capital.",
      "The quarterly recovery has not repaired the returns. Q3 FY27 produced $291.0M of revenue at an 8.2% operating margin, down from 11.1% in Q2 FY27 and 15.3% in Q1 FY27. Net income fell from $19.4M to $11.2M while revenue rose by $89.9M. If the incremental revenue had converted at the gross margin, the quarter would have looked very different.",
      "Free cash flow is the counterweight. At $242.6M on a trailing basis, a 30.0% margin, it is many times reported net income. That gap implies substantial non-cash charges, most likely amortisation and share-based compensation, which are real economic costs to shareholders even though they do not consume cash in the quarter.",
    ],
  },
  cash: {
    paragraphs: [
      "The cash record has been more resilient than the earnings record. Free cash flow was $157.9M, $215.5M, $249.5M, $119.9M and $132.6M across the years shown, and $242.6M on a trailing basis. Even in the worst revenue year the business generated cash, which is what an asset-light model with a 68.6% gross margin should do.",
      "Net cash of $128.3M is modest relative to a $14.94B market capitalisation, but it is positive, and at -2.2x EBITDA the company has no leverage problem. The balance sheet is not the constraint on the business; the cost base is.",
      "The gap between free cash flow and net income is the item to understand. A company reporting $0.32 of diluted EPS and generating a 30.0% free-cash-flow margin is telling you that the accounting profit is depressed by non-cash items. That does not make the profit irrelevant, but it does mean the cash-flow statement is the better guide to what the business earns before those charges.",
    ],
  },
  valuation: {
    paragraphs: [
      "The trailing multiples are almost meaningless: 333.9x earnings, 252.4x EV/EBITDA, 18.3x sales and 61.6x free cash flow, for a 1.6% free-cash-flow yield. Each of those is computed on a depressed denominator. The sales multiple is the only one that is not distorted by a margin trough, and 18.3x sales for a company with a 68.6% gross margin but a 9.1% operating margin is a demanding price.",
      "The forward numbers do the work. Consensus EPS of $2.51 this fiscal year and $4.39 next year are what the multiple is really being applied to. At those levels the earnings multiple falls sharply without any change in the share price, which is exactly the bet a recovery valuation makes.",
      "Stockmonk does not publish a target price. The peer table is only partly useful because no comparable in it has the same combination of a high gross margin, a low operating margin and a violent revenue recovery.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirteen analysts contribute to the consensus, with a mean target of $156.19 and a range of $95.44 to $200.00. The range straddles the $105.02 close, which is more balanced than the other names in this group, and the low end is below the market price.",
      "The near-term estimates are for $335.2M of revenue and $0.39 of EPS next quarter, then $364.8M and $0.43. That is continued revenue growth with a very modest EPS step, and it sits oddly against the $2.51 full-year figure. The annual estimate requires a profitability improvement the quarterly path does not obviously contain.",
      "For next year the consensus is $1.61B of revenue and $4.39 of EPS. Those are third-party forecasts, and the revenue number is the one to test first, because the EPS number depends on operating leverage that has not shown up in the last two quarters.",
    ],
  },
  risks: {
    intro:
      "Lattice's balance sheet is sound and its gross margin is enviable. The risk is that the cost base has grown into a revenue level the business may not sustain.",
    items: [
      {
        title: "Operating leverage in reverse",
        severity: "High",
        detail:
          "Revenue rose from $201.1M to $291.0M in Q3 FY27 while the operating margin fell from 11.1% to 8.2%. If incremental revenue does not convert, the recovery does not produce earnings.",
        watch:
          "Operating margin each quarter and operating expense growth relative to revenue.",
      },
      {
        title: "Revenue durability after a steep ramp",
        severity: "High",
        detail:
          "Quarterly revenue more than doubled from $124.0M to $291.0M in five quarters. Ramps of that shape can include channel fill or one large programme.",
        watch:
          "Sequential revenue, distributor inventory and any customer concentration disclosure.",
      },
      {
        title: "Design-win dependence",
        severity: "Medium",
        detail:
          "Revenue arrives years after the design decision, so a slowdown in wins today shows up as a revenue gap later, when it is too late to fix quickly.",
        watch:
          "Design-win counts and the commentary on new product ramps.",
      },
      {
        title: "Non-cash charges",
        severity: "Medium",
        detail:
          "Free cash flow of $242.6M against $0.32 of diluted EPS implies large amortisation or share-based compensation. Those are real costs to shareholders even when they do not use cash.",
        watch:
          "The cash-flow statement and the share count over time.",
      },
      {
        title: "End-market concentration",
        severity: "Medium",
        detail:
          "Communications and computing provide the volume, and those are the markets most exposed to a customer capex pause.",
        watch:
          "The end-market revenue split and commentary on the largest segment.",
      },
      {
        title: "Competition from larger programmable vendors",
        severity: "Low",
        detail:
          "The large FPGA vendors have broader portfolios and can bundle software and support. Lattice competes on power and size, which is a defensible niche but a narrow one.",
        watch:
          "Gross margin and whether new sockets are won at lower prices.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The 68.6% gross margin is not in question; the conversion of it is.",
      },
      {
        title: "Sequential revenue",
        detail:
          "Five quarters of growth need to become a base before the forward estimates can be believed.",
      },
      {
        title: "Cash flow versus earnings",
        detail:
          "The 30.0% free-cash-flow margin is the strongest evidence that the business still works.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Lattice owns a valuable niche: low-power programmable logic designed into sockets that last for years, earning a 68.6% gross margin. The last three years showed how cyclical that niche is and how much operating expense the company carries through a downturn.",
      "The dataset leaves three questions open: whether $291.0M a quarter is a new base, why operating margin fell as revenue rose, and how much of the cash-flow strength reflects charges that will eventually be paid in shares or cash.",
      "The educational point is that a high gross margin is a necessary condition for a good business, not a sufficient one. The distance between 68.6% and 9.1% is the cost of running the company, and it is where the investment case will be decided.",
    ],
    questions: [
      "Why did the operating margin fall in the quarter with the largest revenue increase?",
      "What share of the revenue ramp came from new programmes versus channel restocking?",
      "How large are the non-cash charges that separate free cash flow from net income?",
      "Can operating expense grow more slowly than revenue from here?",
    ],
  },
};
