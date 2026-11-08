import type { StockStory } from "./types";

export const ASTS: StockStory = {
  ticker: "ASTS",
  kicker: "Space · Direct-to-device satellite broadband",
  title: "AST SpaceMobile is building a cell tower the size of a satellite",
  dek: "Revenue is real but small next to the capital being spent: $115.3M of sales, a -698.8% operating margin and $683.7M of net debt after a $1.6B cash burn.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $115.3M, a step up from $4.4M in FY2024 and $70.9M in FY2025.",
    "Operating margin was -698.8% and free cash flow was -$1.6B, a -1420.7% margin.",
    "Net debt of $683.7M has replaced the cash cushion typical of an early-stage space company.",
    "At 26.1x EV/sales the market is paying for a network that is only partly built.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1780312/000178031226000006/asts-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001780312&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "AST SpaceMobile is trying to put a mobile base station in low earth orbit. Its satellites carry large phased-array antennas intended to connect ordinary, unmodified phones, so a subscriber keeps the same handset and SIM whether the signal comes from a tower or from space. The company is headquartered in Midland, Texas, and employs 342 people.",
      "The financials describe a company spending ahead of its network. Trailing revenue was $115.3M, which sounds substantial until it is set against an operating loss that produced a -698.8% operating margin and free cash flow of -$1.6B. Almost every dollar of revenue currently arrives with several dollars of capital spending behind it.",
      "The share price of $32.33 values the company at $2.32B; EV/sales is 26.1x. That is not a valuation of the current business; it is a price for the constellation the company intends to operate. The stock has traded between $27.58 and $133.86 in the past year and is down 50.5% over twelve months.",
    ],
    quote:
      "A satellite operator's economics are decided before the first subscriber signs up: how much capital each satellite costs, how much capacity it adds, and how many years that capacity earns revenue.",
  },
  whatItDoes: {
    paragraphs: [
      "The service is aimed at places where terrestrial coverage stops: rural areas, ships, aircraft and disaster zones. AST SpaceMobile does not plan to sell to consumers directly. The commercial model runs through mobile network operators, which already own the billing relationship and the spectrum rights, and which would hand traffic to the satellite network when a phone cannot see a tower.",
      "Building that requires three things at once: satellites with unusually large antennas, launch capacity to put them in orbit, and ground gateways that connect the constellation to terrestrial networks. The company manufactures its satellites itself, which gives it control over cost and design changes but also means factory throughput becomes a constraint on how fast the network grows.",
    ],
    bullets: [
      {
        title: "SpaceMobile satellites",
        detail:
          "Large-antenna spacecraft designed to connect standard handsets directly, without a special device or terminal.",
      },
      {
        title: "Mobile operator partners",
        detail:
          "Wholesale distribution. The operator keeps the subscriber; the satellite network supplies coverage the tower network cannot.",
      },
      {
        title: "Ground segment",
        detail:
          "Gateways and network integration that route traffic between the constellation and terrestrial core networks.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The intended revenue model is wholesale: operators pay for capacity or share the revenue from subscribers who roam onto the satellite network. That is attractive because it avoids building a consumer brand, but it also means AST SpaceMobile does not set retail prices and depends on partners to market the service.",
      "Costs behave very differently from revenue. Satellites are built and launched years before they carry meaningful traffic, and each one depreciates whether or not it is full. Ground infrastructure and engineering are largely fixed. The result is that costs arrive first and revenue arrives later, which is exactly what a -698.8% operating margin looks like.",
      "The reported gross margin of 34.5% should not be read as a steady-state number. With the constellation incomplete and revenue lumpy, it mostly reflects the cost of the work recognised in the period rather than the economics of a finished network.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 64.1% a year across the fiscal years in the dataset, but the base was almost nothing. The sequence tells the story better than the growth rate: $12.4M in FY2021, $13.8M in FY2022, zero in FY2023, $4.4M in FY2024, then $70.9M in FY2025. Within that last year, the December quarter alone produced $54.3M of the $70.9M total.",
      "The latest quarter grew 2626.6% year over year to $31.5M. That percentage is arithmetically true and analytically useless, because the prior-year quarter had almost no revenue. What matters is the absolute step-up and whether it repeats.",
      "The consensus expects $167.2M this fiscal year and $609.1M next year, with the next quarter at $46.0M. A jump of that size assumes commercial service scales on schedule. The drivers are satellite deployment, operator launches in new countries and capacity per satellite; the brake is any delay in launch or in regulatory approval.",
    ],
    bullets: [
      {
        title: "Satellite deployments",
        detail:
          "Each launch adds capacity. The constellation has to reach a usable density before service quality supports broad marketing.",
      },
      {
        title: "Operator agreements",
        detail:
          "Coverage only earns revenue where a partner is allowed to use the spectrum and has customers to roam onto it.",
      },
      {
        title: "Government demand",
        detail:
          "Defence and civil agencies value resilient coverage that does not depend on terrestrial infrastructure.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a staircase of investment. Operating loss was $72.9M in FY2021, $102.5M in FY2022, $221.0M in FY2023, $525.0M in FY2024 and $457.1M in FY2025. The FY2025 figure is lower than FY2024 despite revenue rising, which may mean some costs moved from development into the cost of revenue as the company began delivering something.",
      "Quarterly margins are not comparable across periods because the revenue base swings so violently. Q1 FY2025 reported $0.718M of revenue and an operating margin of -8838.4%; Q2 FY2026 reported $31.5M and -948.0%. The percentage moved because the denominator moved. Read the dollar loss instead.",
      "Diluted EPS was -$6.09, return on equity was -26.8% and return on invested capital was -20.7%. For a company at this stage, the return figures mostly measure how much capital has been committed before any of it earns a return.",
    ],
  },
  cash: {
    paragraphs: [
      "The trailing cash outflow was -$1.6B, a -1420.7% margin. The annual figures show the escalation: -$95.2M in FY2021, -$213.7M in FY2022, -$267.7M in FY2023, -$300.3M in FY2024, then -$1.14B in FY2025. The last year is an order of magnitude beyond the earlier pattern.",
      "That spending has been financed partly with debt. Net debt stands at $683.7M, which means cash on hand no longer exceeds borrowings. This is the key difference between AST SpaceMobile and a space company that raised equity and kept the proceeds: the balance sheet now carries a fixed obligation before the network carries traffic.",
      "The free-cash-flow yield is -70.5%, so the annual cash burn is large relative to the $2.32B market value. Every additional quarter of construction is funded by another financing, and the terms of that financing determine how much of the eventual network belongs to existing shareholders.",
    ],
  },
  valuation: {
    paragraphs: [
      "There is no meaningful earnings multiple. Price-to-earnings and EV/EBITDA are unavailable because the company is loss-making, and the -70.5% free-cash-flow yield says the business consumes rather than produces cash. The only usable figure is 26.1x EV/sales, and even that is distorted because revenue is not yet representative of a finished service.",
      "The comparison set is uncomfortable. Planet Labs trades at 9.8x EV/sales with a positive free-cash-flow margin; Rocket Lab at 38.2x EV/sales with $1.34B of net cash; Intuitive Machines at 2.0x EV/sales. AST SpaceMobile sits between them on sales but below all of them on balance-sheet strength, which is the relevant difference.",
      "A sales multiple at this stage is really a price per unit of future capacity. It assumes the satellites get built, launched and filled. Nothing in the trailing statements confirms any of those three steps at scale.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is thinner here: twelve analysts, a mean target of $74.68 and a range of $42.50 to $108.00. The mean is more than twice the $32.33 share price, a gap that reflects expectations about financing and deployment rather than a view on trailing cash flow.",
      "The forecasts on the table are $167.2M of revenue and -$2.29 of EPS this fiscal year, then $609.1M and -$1.28 next year. The revenue estimate multiplies several times over while the loss per share shrinks, which is the operating leverage the model requires.",
      "These are third-party forecasts with a small number of contributors relative to larger companies. When a handful of analysts set the average, one changed assumption can move the mean materially.",
    ],
  },
  risks: {
    intro:
      "The risks here are capital and execution risks before they are competitive ones. The technology has been demonstrated in principle; the open question is whether it can be deployed fast enough to earn a return on the capital already committed.",
    items: [
      {
        title: "Launch and deployment schedule",
        severity: "High",
        detail:
          "The constellation only earns money once enough satellites are in orbit. A launch delay pushes revenue out while fixed costs continue.",
        watch:
          "Satellites launched per quarter, satellite production rate and contracted launch slots.",
      },
      {
        title: "Financing",
        severity: "High",
        detail:
          "Free cash flow of -$1.6B and $683.7M of net debt mean the company depends on continued access to capital.",
        watch:
          "Cash balance, debt maturities, interest cost and share count.",
      },
      {
        title: "Regulatory and spectrum access",
        severity: "High",
        detail:
          "Satellite coverage needs permission in each country and coordination with terrestrial spectrum holders. Approval is country by country.",
        watch:
          "New market authorisations and the number of operators able to market the service.",
      },
      {
        title: "Capacity economics",
        severity: "Medium",
        detail:
          "A satellite covering a large area shares a limited amount of throughput among many users. Revenue per satellite depends on how much traffic it can actually carry.",
        watch:
          "Disclosed capacity per satellite and usage per covered market.",
      },
      {
        title: "Competition",
        severity: "Medium",
        detail:
          "Terrestrial build-out, other direct-to-device constellations and incumbent satellite operators all compete for the same coverage gap.",
        watch:
          "Operator partnerships, pricing terms and competing service launches.",
      },
    ],
    watchlist: [
      {
        title: "Satellites in service",
        detail:
          "The count of working satellites is the real production metric; revenue follows it with a lag.",
      },
      {
        title: "Cash and debt",
        detail:
          "Track the split between equity raised and borrowings, because debt adds a fixed claim ahead of shareholders.",
      },
      {
        title: "Operator launches",
        detail:
          "Signed partners are not revenue until service is switched on in their markets.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "AST SpaceMobile has a plausible product, a small amount of early revenue and a very large capital requirement. The trailing numbers — $115.3M of revenue, a -698.8% operating margin, -$1.6B of free cash flow and $683.7M of net debt — describe a company still in construction.",
      "The point to carry away is that revenue growth of 2256.9% tells you almost nothing when the base was near zero. What matters is the absolute revenue, the cost per satellite, the capacity each satellite adds and the price operators pay for it.",
      "Two facts are unknown and decisive: how many satellites must be in orbit before service is commercially usable, and how the next round of financing is structured. The balance sheet, not the income statement, will determine the outcome from here.",
    ],
    questions: [
      "How much revenue does one satellite generate per year once the network is live?",
      "What share of the $1.6B burn is satellites and what share is launch?",
      "How many operators have actually switched the service on rather than signed an agreement?",
      "What does the debt cost, and when does it mature?",
    ],
  },
};
