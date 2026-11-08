import type { StockStory } from "./types";

export const RDW: StockStory = {
  ticker: "RDW",
  kicker: "Space · Space infrastructure and components",
  title: "Redwire is a roll-up, and the acquisition math is the story",
  dek: "Revenue grew from $137.6M to $431.9M in five years, but operating margin is -46.2% and the FY2025 loss was several times the prior year's on barely higher sales.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was $431.9M, up 45.8%, though the latest quarter grew only 5.4%.",
    "Operating margin was -46.2% and diluted EPS was -$1.24.",
    "The FY2025 operating loss of $229.7M dwarfed FY2024's $42.2M on modestly higher revenue.",
    "Net cash of $433.6M against a $1.80B market value gives the company time to fix margins.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1819810/000181981026000029/rdw-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001819810&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Redwire builds the parts that go on spacecraft: solar arrays, deployable structures, sensors, avionics and the digital engineering that ties them together. It sells to government space programmes and to commercial satellite builders, usually as a component or subsystem supplier rather than as the prime contractor.",
      "The company was formed in 2020 by a private equity firm and has grown mainly by buying businesses and combining them. That explains how revenue went from $137.6M in FY2021 to $431.9M on a trailing basis while the operating margin sits at -46.2%. A roll-up adds revenue quickly; it adds cost structures just as quickly.",
      "At $7.21 the market value is $1.80B; EV/sales is 3.2x. Earnings multiples are unavailable because the company is loss-making. Net cash of $433.6M is a substantial part of the market value and the main reason the balance sheet is not an immediate problem.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The portfolio is a set of niche space businesses. Solar arrays generate power; deployable structures unfurl antennas and booms; sensors and avionics control and monitor the spacecraft; digital engineering tools model the whole system before it is built. Each has its own qualification process and its own customers inside the same agencies and primes.",
      "That structure has advantages. A component sold across many satellite programmes is less exposed to any single mission, and a qualified part is hard to replace once designed in. The disadvantage is complexity: several business units, different cost bases and a corporate layer that has to justify itself.",
      "Customers are government space and defence organisations, aerospace primes and commercial constellation operators. The mix matters because government work is budget-driven and slow, while commercial constellations are faster but more price-sensitive.",
    ],
    bullets: [
      {
        title: "Solar arrays and power",
        detail:
          "Power generation hardware for satellites. A qualified component designed into many missions.",
      },
      {
        title: "Deployable structures",
        detail:
          "Antennas, booms and mechanisms that must work once, perfectly, after launch.",
      },
      {
        title: "Sensors and avionics",
        detail:
          "Guidance, navigation and control electronics sold as subsystems to primes.",
      },
      {
        title: "Digital engineering",
        detail:
          "Software and modelling services that support design and testing across the portfolio.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from hardware contracts and engineering services. Hardware is priced per unit or per lot, with a bill of materials and a manufacturing process behind it. Engineering is priced against an estimate of effort, and if the estimate is wrong the company absorbs the difference on fixed-price work.",
      "The 24.1% gross margin is low for a space business, and it reflects a portfolio that includes a lot of integration and services work alongside proprietary components. Operating leverage depends on volume through the factories: the same qualified design and the same test equipment can support more units, which is where a component business earns its return.",
    ],
  },
  growth: {
    paragraphs: [
      "Between FY2021 and FY2025, revenue compounded at 64.9% a year, from $137.6M to $335.4M, and then reached $431.9M on a trailing basis. Most of that came from acquiring businesses rather than from selling more of the same products, so the growth rate overstates organic demand.",
      "The latest quarter grew 5.4% year over year to $109.0M. That is the closest thing to an organic read, and it is much slower than the headline. The consensus expects $468.9M this fiscal year and $561.0M next, with $138.9M in the next quarter, which implies a return to faster growth rather than a continuation of 5.4%.",
      "The real drivers are constellation build-out, national security space budgets and content per satellite. What would slow it is an acquisition pause, a government budget delay, or a programme where the company has to absorb costs it did not price.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating income has been negative every year: -$70.2M in FY2021, -$146.4M in FY2022, -$15.5M in FY2023, -$42.2M in FY2024 and -$229.7M in FY2025. The FY2023 result is the interesting one because it was close to break-even, which shows the portfolio can nearly cover its costs when nothing goes wrong.",
      "The FY2025 loss is the outlier. Revenue rose from $304.1M to $335.4M, yet the operating loss grew from $42.2M to $229.7M. A change of that size is not explained by gross profit, and the likely answer is a non-cash charge. The reader should check the filing for the composition rather than assume the underlying business deteriorated by that amount.",
      "The quarterly margins in FY2026 are much better: -71.9%, -18.9% and -24.1%. That improvement, plus a net loss of $23.2M in the latest quarter, suggests the worst of the charge is behind. Diluted EPS was -$1.24, return on equity -14.1% and return on invested capital -13.4%.",
    ],
  },
  cash: {
    paragraphs: [
      "The trailing cash outflow was -$136.7M, a -31.6% margin. The annual history is uneven: -$39.5M in FY2021, -$35.3M in FY2022, -$4.4M in FY2023, -$23.7M in FY2024 and -$190.8M in FY2025. The near-break-even FY2023 shows what the business looks like when acquisition spending is absent.",
      "The FY2025 outflow coincides with the large operating loss, and part of it is likely non-cash. But cash is cash: acquisitions, working capital and capital expenditure all consume it regardless of how the income statement treats them.",
      "Net cash of $433.6M is the buffer. It is roughly a quarter of the market value and several years of the recent burn, which means the company can keep buying and integrating without an immediate refinancing. The free-cash-flow yield of -7.6% is the cost of that strategy.",
    ],
  },
  valuation: {
    paragraphs: [
      "Redwire trades at 3.2x EV/sales, in line with Kratos and slightly above AeroVironment at 2.9x, and well below Planet Labs at 9.8x. The P/E and EV/EBITDA multiples are unavailable because the company does not produce positive earnings or EBITDA.",
      "A sales multiple is the only workable measure for a loss-making roll-up, but it assumes the acquired revenue is worth the same per dollar as organic revenue. It is not, if the acquisitions came with low margins or with integration costs still to come.",
      "The real valuation question is what the portfolio earns once integration is finished. At a 24.1% gross margin, the answer depends almost entirely on how much operating cost can be removed without hurting the qualified positions that make the components hard to replace.",
    ],
  },
  analysts: {
    paragraphs: [
      "Nine analysts cover Redwire. The mean target of $13.39 and the range of $8.00 to $16.00 both sit above the $7.21 share price.",
      "Their estimates are $468.9M of revenue and -$0.43 of EPS this fiscal year, then $561.0M and -$0.32 next year. The loss per share is expected to narrow as revenue grows, which is the operating-leverage assumption again.",
      "With nine contributors and a loss-making business, the estimates rest on assumptions about charges and integration that are hard to verify from outside. They are third-party context, not a Stockmonk view.",
    ],
  },
  risks: {
    intro:
      "Redwire's risks are the risks of a loss-making roll-up in a budget-driven industry: integration, impairment, concentration and the cost of buying growth.",
    items: [
      {
        title: "Acquisition integration",
        severity: "High",
        detail:
          "The portfolio is a collection of bought businesses. Combining them without losing qualified positions or key engineers is the central management task.",
        watch:
          "Segment margins, headcount and the pace of acquisitions.",
      },
      {
        title: "Charges and impairments",
        severity: "High",
        detail:
          "The FY2025 operating loss was $229.7M against $42.2M the year before on modestly higher revenue, which points to a charge rather than trading.",
        watch:
          "Impairment disclosure, goodwill and the reconciliation from operating to net income.",
      },
      {
        title: "Customer concentration",
        severity: "Medium",
        detail:
          "Government space programmes and a few primes generate much of the revenue, and budgets move slowly but decisively.",
        watch:
          "Backlog, contract mix and the largest programmes' share of sales.",
      },
      {
        title: "Cash consumption",
        severity: "Medium",
        detail:
          "Free cash flow was -$136.7M, and acquisitions add to that. The $433.6M net cash balance is finite.",
        watch:
          "Operating cash flow, acquisition spending and capital expenditure.",
      },
      {
        title: "Fixed-price contract execution",
        severity: "Medium",
        detail:
          "Engineering work priced before it is performed can turn a profitable programme into a loss if the scope changes.",
        watch:
          "Gross margin and contract loss provisions.",
      },
    ],
    watchlist: [
      {
        title: "Organic growth",
        detail:
          "The 5.4% latest-quarter rate is the best available proxy for demand excluding acquisitions.",
      },
      {
        title: "Gross margin",
        detail:
          "At 24.1%, there is little cushion for integration costs or contract overruns.",
      },
      {
        title: "Goodwill",
        detail:
          "A roll-up carries acquired goodwill. Impairments are the mechanism by which past acquisition prices get marked down.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Redwire has assembled a portfolio of real space component businesses, a $433.6M net cash position and $431.9M of trailing revenue. It has not yet shown that the collection earns a profit: operating margin is -46.2% and the FY2025 loss was far larger than the year before.",
      "The habit worth building is to separate acquisition-led revenue growth from organic growth. The 64.9% compound rate came mostly from buying businesses, while the latest quarter grew 5.4%. Both numbers are true and they describe different things.",
      "The open questions are what the FY2025 charge was, how much of the portfolio is genuinely integrated, and whether the 24.1% gross margin can support a positive operating margin at the current scale.",
    ],
    questions: [
      "What drove the FY2025 operating loss to $229.7M?",
      "How much of revenue growth is organic versus acquired?",
      "What margin do the individual business units earn?",
      "How much acquisition spending remains in the plan?",
    ],
  },
};
