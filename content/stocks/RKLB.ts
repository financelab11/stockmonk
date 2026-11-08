import type { StockStory } from "./types";

export const RKLB: StockStory = {
  ticker: "RKLB",
  kicker: "Space · Small launch and space systems",
  title: "Rocket Lab runs two businesses on one balance sheet",
  dek: "Electron sells launches, space systems sells components, and Neutron is the expensive bet in between. Revenue grew 52.5% while free cash flow fell to -$371.1M.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $769.1M, up 52.5%, with the latest quarter at $234.1M.",
    "A 37.3% gross margin turns into a -29.1% operating margin once development and overhead are paid for.",
    "Free cash flow was -$371.1M, wider than the -$116.0M reported in FY2024.",
    "Net cash of $1.34B funds the gap, and the shares trade at 38.2x EV/sales rather than on earnings.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1819994/000181999426000013/rklb-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001819994&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Rocket Lab is two businesses sharing one income statement. Electron, its small orbital rocket, sells launches by the mission. The space systems side sells components, spacecraft and engineering into other organisations' satellites. Both grew quickly enough to produce $769.1M of trailing revenue, up 52.5% from a year earlier.",
      "The company is not profitable at the operating line. Gross margin was 37.3%, but operating margin was -29.1% and free cash flow was -$371.1M. The difference is the cost of developing a larger rocket while running a manufacturing business that must keep winning work to keep the factory busy.",
      "At $53.07 the shares carry a $30.7B market value against that revenue; EV/sales is 38.2x. Price-to-earnings and EV/EBITDA are negative and tell you nothing useful. The live question is whether Neutron turns a small-launch operator into a medium-launch supplier before the $1.34B cash balance is spent.",
    ],
    quote:
      "Launch is a fixed-cost business sold by the mission. Each additional Electron spreads the same range, recovery and engineering costs across more revenue.",
  },
  whatItDoes: {
    paragraphs: [
      "Electron is a small rocket aimed at the part of the market that cannot fill a larger vehicle. It has been sold to government agencies, aerospace prime contractors and commercial constellation operators. Photon, the company's satellite platform, extends a launch customer relationship into the spacecraft itself, and the components business sells subsystems to customers who never buy a launch.",
      "The two halves have different cycles. Launch revenue depends on cadence and on a small number of missions slipping or moving forward. Space systems revenue depends on how much content Rocket Lab wins per satellite and on how many satellites its customers build. Vertical integration helps: parts designed in-house can be sold to rivals as well as used on company spacecraft.",
    ],
    bullets: [
      {
        title: "Electron",
        detail:
          "Small orbital launch sold per mission. Cadence is the revenue driver and reliability is the licence to keep selling it.",
      },
      {
        title: "Space systems",
        detail:
          "Spacecraft, subsystems and components sold to primes, agencies and constellation builders. Less lumpy than launch.",
      },
      {
        title: "Neutron",
        detail:
          "An eight-tonne payload class rocket under development. It widens the addressable market but consumes cash before it earns any.",
      },
      {
        title: "Customers",
        detail:
          "Government and defence buyers, aerospace primes, and commercial operators. One large programme can move a quarter.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "A launch is priced per mission, but most of the cost is fixed: the launch site, the ground crew, recovery operations, engineering support and the factory that builds the vehicle. Once those exist, the contribution from one more flight is high. That is why cadence matters more than price. A grounded fleet does not shrink the cost base, it just stops the revenue.",
      "Space systems works on manufacturing economics. Each contract has a bill of materials, engineering hours and an expected margin, and the blended gross margin of 37.3% is the average across both halves. Components tend to carry better margins than full spacecraft integration because the scope is narrower and the customer owns the schedule risk.",
      "Neither line yet generates enough gross profit to cover the operating base. Development spending on Neutron, plus the sales and administration needed to bid for government work, produced the -29.1% operating margin. The operating leverage only appears if gross profit grows faster than that fixed cost block.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 76.5% a year across the fiscal years in the dataset, from $62.2M in FY2021 to $601.8M in FY2025. The latest quarter grew 62.0% year over year. That is a remarkable rate for a company that has to manufacture physical hardware and fly it.",
      "The third-party consensus looks for $959.2M of revenue this fiscal year and $1.33B next year, with quarterly revenue of $257.2M and then $265.4M. Those forecasts assume Electron keeps flying, space systems keeps winning content, and Neutron reaches the pad on a schedule that has not yet been demonstrated.",
      "The realistic drivers are unglamorous. More Electron missions per year, more dollar content per satellite sold, and a government demand cycle that is currently generous. What would slow it down is equally concrete: a launch failure that grounds the fleet, a Neutron delay that pushes revenue to the right, or the loss of one anchor programme in space systems.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a company buying growth. Operating losses widened from $102.1M in FY2021 to $228.8M in FY2025 even as revenue rose from $62.2M to $601.8M. Gross profit grew, but not fast enough to absorb the development and corporate costs layered on top.",
      "The quarterly series is more encouraging than the annual one. Operating margin improved from -48.3% in Q1 FY2025 to -24.6% in Q2 FY2026. That is what operating leverage looks like in its early stage: the loss narrows because revenue rises against a cost base that is growing more slowly.",
      "Net loss for FY2025 was $198.2M, smaller than the $228.8M operating loss. The difference is mostly interest earned on the cash balance, which is a real benefit of raising money early but not a sign of improving operations. Return on equity was -7.3% and return on invested capital was -19.2%.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$371.1M over the trailing period, a -48.3% margin. The five-year pattern is uneven: -$97.5M in FY2021, -$148.9M in FY2022, -$153.6M in FY2023, then a shallower -$116.0M in FY2024 before widening again to -$321.8M in FY2025.",
      "The FY2025 deterioration is the important detail. Revenue grew, but cash consumption nearly tripled because the company is paying to build launch infrastructure and engines for a rocket that does not yet generate revenue. That is investment, not deterioration in the core business, but it is still cash leaving the company.",
      "The $1.34B net cash position is what makes the plan possible. It buys time to finish Neutron and to keep bidding for work without depending on capital markets at a bad moment. It does not remove the dilution risk if the development timeline stretches.",
    ],
  },
  valuation: {
    paragraphs: [
      "With negative earnings, the only multiple that carries information is revenue. At $53.07 the company is valued at $30.7B; EV/sales is 38.2x. The price-to-earnings multiple of -161.5x and EV/EBITDA of -167.4x are artefacts of losses and should be ignored rather than compared.",
      "The peer table makes the premium obvious. Rocket Lab's $30.7B market value is more than four times Kratos at $6.61B, even though Kratos has $1.65B of revenue and Rocket Lab has $769.1M. Intuitive Machines at $0.88B, AST SpaceMobile at $2.32B and Planet Labs at $4.34B are smaller on both measures, but none of them trades anywhere near 38.2x EV/sales.",
      "A 38.2x EV/sales multiple is a statement about the future mix, not the current one. It implies that launch and space systems become a much larger, more profitable business, and that Neutron participates in a market Electron cannot serve. The share price has ranged from $37.57 to $151.00 in the past year, which is a reminder of how much the market's view of that future moves.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus covers the stock with twenty analysts, a mean target of $102.15 and a range of $64.00 to $150.00. The spread is wide because the analysts are modelling different Neutron timelines, not different views of the last quarter.",
      "Their forecasts put revenue at $959.2M and EPS at -$0.27 this fiscal year, then $1.33B and -$0.09 next year. The revenue line roughly doubles while the loss per share narrows by two-thirds, which is the operating-leverage story in numerical form.",
      "Those are third-party forecasts and they change. The useful part is the shape: analysts expect growth to continue and losses to shrink, which is precisely what the cash-flow statement has not yet shown.",
    ],
  },
  risks: {
    intro:
      "Rocket Lab's risks are operational before they are financial. The balance sheet is strong; the uncertainty sits in launch schedules, development milestones and a customer base that includes governments.",
    items: [
      {
        title: "Launch failure",
        severity: "High",
        detail:
          "A failed Electron mission can ground the fleet for an extended investigation, stopping launch revenue and delaying customer satellites at the same time.",
        watch:
          "Mission outcomes, the gap between launches, and any return-to-flight statement.",
      },
      {
        title: "Neutron development",
        severity: "High",
        detail:
          "The larger rocket is the growth story and the largest consumer of cash. Slippage pushes revenue out and keeps the cost base running.",
        watch:
          "First-flight timing, engine test progress and development spending.",
      },
      {
        title: "Customer concentration",
        severity: "Medium",
        detail:
          "Government and prime contractor programmes are large relative to total revenue, so a single award or cancellation moves the outlook.",
        watch:
          "Backlog disclosure, contract mix and the share of revenue from the largest customers.",
      },
      {
        title: "Cash burn",
        severity: "Medium",
        detail:
          "Free cash flow of -$371.1M against $1.34B of net cash leaves a finite runway if development costs keep rising.",
        watch:
          "Quarterly cash used in operations, capital expenditure and any new financing.",
      },
      {
        title: "Competitive pricing",
        severity: "Medium",
        detail:
          "Larger launch providers can price small missions aggressively when they have spare capacity, which caps what Electron can charge.",
        watch:
          "Average revenue per launch and the mix of dedicated versus rideshare missions.",
      },
    ],
    watchlist: [
      {
        title: "Launch cadence",
        detail:
          "The number of Electron missions per quarter is the cleanest read on launch revenue and factory utilisation.",
      },
      {
        title: "Backlog",
        detail:
          "Contracted work tells you how much of next year's revenue is already committed rather than hoped for.",
      },
      {
        title: "Cash used in operations",
        detail:
          "The gap between gross profit and cash burn shows how much of the loss is investment versus day-to-day cost.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Rocket Lab has built a real space business with two revenue lines, a credible launch record and $769.1M of trailing sales. It has not yet shown that the business can pay for itself: operating margin is -29.1% and free cash flow is -$371.1M.",
      "What the numbers show is that a 37.3% gross margin is not the same as a viable business. Gross profit has to cover development, bidding and administration before anything reaches shareholders, and Neutron is a large fixed cost that arrives before its revenue does.",
      "Three things are genuinely unknown: when Neutron flies, how much of the backlog converts within twelve months, and whether space systems margins hold as volume grows. The $1.34B cash balance gives management time to answer them.",
    ],
    questions: [
      "How many Electron missions per year does the cost base need to break even?",
      "How much of the $769.1M revenue base is recurring versus one-off mission work?",
      "What does a Neutron delay of one year do to the cash balance?",
      "Is space systems growth coming from content per satellite or from more satellites?",
    ],
  },
};
