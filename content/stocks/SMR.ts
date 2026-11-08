import type { StockStory } from "./types";

export const SMR: StockStory = {
  ticker: "SMR",
  kicker: "Nuclear · Small modular light-water reactors",
  title: "NuScale has $933M of cash and very little revenue left",
  dek: "Engineering revenue fell 95.7% to $2.7M. The cash pile buys about two years of runway, but a reactor design only becomes a business when someone orders a plant.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $2.7M, down 95.7% from $31.5M in FY2025.",
    "The operating loss was $689.6M in FY2025 and free cash flow was -$460.1M.",
    "Net cash of $933.4M is close to half of the $2.18B market value.",
    "Consensus expects $105.1M of revenue next fiscal year, a forecast that assumes a plant order lands.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1822966/000182296626000018/smr-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001822966&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "NuScale Power designs small modular light-water reactors. Its core product is a pressurised water module rated at 77 megawatts of electricity, which is packaged into plants of four, six or twelve modules: the VOYGR-4, VOYGR-6 and VOYGR-12, the last rated at 924 MWe. The target customers are utilities, industrial sites and governments that want dispatchable carbon-free heat and power without the financing burden of a gigawatt-scale project.",
      "The reported business today is much smaller than the design ambition. Revenue peaked at $37.0M in FY2024, fell to $31.5M in FY2025, and has since collapsed: Q1 FY26 produced $565,000, Q2 FY26 $75,000 and Q3 FY26 $281,000. Trailing revenue is $2.7M, down 95.7%. A company with 556 employees and a design to certify does not shrink revenue that fast by losing customers one at a time; it happens when work on a single programme stops.",
      "That is the central fact of the story. At $5.08 the equity is worth $2.18B, and the balance sheet holds $933.4M of net cash. The market is paying roughly $1.2B for the design, the licence and the option on future orders, and the cash is what keeps that option alive.",
    ],
    quote:
      "For a reactor developer, revenue is a poor guide to progress. The order book, the cost of the first plant and the cash balance tell you far more than the top line.",
  },
  whatItDoes: {
    paragraphs: [
      "NuScale sells a plant design and the engineering that goes with it. Each module is a self-contained pressurised water reactor that can be factory-built and shipped, with modules added together to match the size of the site. That modularity is meant to move construction labour into a factory and reduce the site work that makes large nuclear projects expensive.",
      "The applications go beyond electricity. The design is marketed for district heating, desalination, hydrogen production and industrial process heat, which widens the addressable customer base beyond utilities. A customer that needs steam or heat as well as power can use the same module, and that flexibility is part of the sales pitch.",
      "The company operates as a subsidiary of Fluor Enterprises, which gives it an engineering parent with construction experience and a large shareholder with an interest in the design succeeding. The trade-off is that NuScale's commercial fate is tied to a parent whose own priorities can change.",
    ],
    bullets: [
      {
        title: "The module",
        detail:
          "A 77 MWe pressurised water reactor, factory-built and assembled on site in groups of four to twelve.",
      },
      {
        title: "The plant",
        detail:
          "VOYGR configurations from 308 MWe to 924 MWe, sold to utilities and industrial buyers rather than to a single standard customer type.",
      },
      {
        title: "The services",
        detail:
          "Engineering, licensing support and design work, which is what actually produced the revenue in recent years.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "There are three potential revenue streams: design and engineering services billed to project sponsors, equipment and construction revenue when a plant is ordered, and long-lived service and fuel revenue once a plant operates. Only the first has generated material revenue so far, and it generated a gross margin of -2.2% on a trailing basis, meaning the work was delivered at a loss before any overhead.",
      "The cost structure explains why. Design certification, safety analysis and licensing are fixed costs that must be paid whether or not a customer signs, and 556 employees is a large base for a company with $2.7M of revenue. A services contract can cover part of that base, but when the programme it supports pauses, the revenue disappears and the cost does not.",
      "The economics of the eventual plant sale are different in kind. A module order would carry manufacturing and construction cost, with a margin that depends on how much of the plant is standardised. The recurring prize is the service and fuel relationship over a plant life measured in decades, which is why developers accept thin margins on the first units.",
    ],
  },
  growth: {
    paragraphs: [
      "The historical record is a services curve, not a product curve. Revenue went from $2.9M in FY2021 to $11.8M in FY2022, $22.8M in FY2023 and $37.0M in FY2024, then reversed to $31.5M in FY2025 and $2.7M on a trailing basis. That shape tracks the schedule of the engineering programmes NuScale was supporting, which is why the collapse is so abrupt.",
      "Third-party estimates illustrate how binary the next step is. The attributed consensus expects $3.2M of revenue this fiscal year and $105.1M next year, with the loss per share narrowing only slightly from -$0.48 to -$0.70. A jump of that size cannot come from selling more engineering hours; it requires a plant order to be booked and work to begin.",
    ],
    bullets: [
      {
        title: "A first order",
        detail:
          "The gap between $3.2M and $105.1M of expected revenue is a single customer decision. Until it happens, the design has no commercial proof.",
      },
      {
        title: "Repeat configurations",
        detail:
          "Standardising the twelve-module plant is what would let manufacturing cost fall. Bespoke site designs keep the first-unit cost in every order.",
      },
      {
        title: "Non-power applications",
        detail:
          "District heating, desalination and process heat broaden the buyer list beyond utilities, but each use needs its own regulatory and commercial case.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The operating loss reached $689.6M in FY2025 against $31.5M of revenue, and net income was -$355.8M. The gap between the operating and net figures reflects items below the operating line, but the direction is unambiguous: costs are an order of magnitude above sales.",
      "The quarterly margin series is close to meaningless as a profitability measure and useful as a warning. Q2 FY26 reported an operating margin of -85337.3% on $75,000 of revenue; Q3 FY26 reported -23067.6% on $281,000. When the denominator is that small, a single invoice or a single month of slipped work moves the ratio by tens of thousands of percent.",
      "Return on invested capital is -19.7%. For a business whose asset is intellectual property and a licence rather than a plant, the more relevant measure is cash consumed per year against the cash available. That comparison is in the next section and it is less alarming than the margin table.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$101.1M in FY2021, -$150.9M in FY2022, -$185.0M in FY2023, -$108.7M in FY2024 and -$460.1M in FY2025, with a trailing figure of -$607.5M. The FY2025 step-up is the year the company spent heavily while revenue was already falling, which is the most expensive combination a development company can produce.",
      "Against that, net cash is $933.4M. This is the number that matters most on the page: it is roughly 43% of the market value, and it converts a financing problem into a scheduling problem. At the FY2025 burn rate it covers about two years of spending, and less at the trailing rate, so it funds the next stage of certification but not a plant.",
      "The distinction between development spending and project capital is important. Money spent on certification buys a licence, which is an asset only if a plant gets built. Money spent on a plant is recovered through electricity or heat sales decades later. A reader should track which of the two the cash is going into.",
    ],
  },
  valuation: {
    paragraphs: [
      "The quoted multiple of -7.7x trailing earnings is not a valuation; it is a loss divided by a share count. EV/Sales of 458.2x makes the same point more starkly: the market is not paying for the current revenue stream at all.",
      "A better frame is to subtract the net cash. With $933.4M of net cash against a $2.18B market value, the operating business and the design are being valued at roughly $1.2B, which the reader can compare with the cost of completing certification and building a first plant. That is the real question the share price is asking.",
      "Stockmonk does not publish a target price. The attributed consensus mean appears in the next section as third-party context, and the wide spread between its high and low ends reflects different assumptions about whether and when an order arrives.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 16 analysts with a mean target of $8.91 and a range of $3.50 to $20.00. The mean sits above the $5.08 close, but the range is wide enough that the average conceals more than it reveals.",
      "Estimates call for $324,000 of revenue next quarter and $9.9M the quarter after that, which shows how lumpy the expected recovery is. For the current fiscal year the group expects $3.2M of revenue and a loss of $0.48 per share; for the next year, $105.1M of revenue and a loss of $0.70 per share.",
      "Those forecasts are scenario-dependent rather than trend-based. A single contract announcement would move every number in the table; its absence would leave the current-year figures roughly unchanged for another year.",
    ],
  },
  risks: {
    intro:
      "NuScale's risks are commercial and regulatory rather than financial in the near term, because the cash balance covers several years of spending. The question is what that spending eventually buys.",
    items: [
      {
        title: "Order concentration",
        severity: "High",
        detail:
          "Revenue has depended on a small number of engineering programmes, and the trailing collapse shows what happens when one ends. A single customer still determines whether the next fiscal year looks like $3M or $105M.",
        watch:
          "Announced orders, the number of distinct customers, and the revenue concentration disclosed in the filing.",
      },
      {
        title: "Design certification and licensing",
        severity: "High",
        detail:
          "A reactor design has to be certified and each site licensed. Regulatory requests for more analysis add cost and time, and they arrive before any revenue does.",
        watch:
          "Certification milestones, the scope of any open items and the cost of responding to them.",
      },
      {
        title: "Cash burn",
        severity: "High",
        detail:
          "The company spent $460.1M in FY2025. Even with $933.4M of net cash, a repeat year plus any construction commitment would force new financing.",
        watch:
          "Quarterly cash used in operations and the change in the net cash position.",
      },
      {
        title: "First-plant cost",
        severity: "Medium",
        detail:
          "The modular thesis depends on factory repetition. If the first plant carries bespoke engineering, the cost advantage over a large reactor narrows and the sales case weakens.",
        watch:
          "Cost estimates for the first project and how much of the design is truly standard.",
      },
      {
        title: "Competition and substitute technologies",
        severity: "Medium",
        detail:
          "Utilities can choose large reactors, other small-reactor designs, gas-fired generation or storage. A light-water module competes on certainty and schedule as much as on cost.",
        watch:
          "Customer selections and the relative progress of competing designs.",
      },
    ],
    watchlist: [
      {
        title: "Cash balance",
        detail:
          "With revenue near zero, the net cash figure is the best single measure of how much time the company has.",
      },
      {
        title: "First order",
        detail:
          "A firm plant order, with a customer and a site, is the event that would validate the forecast revenue step-up.",
      },
      {
        title: "Gross margin on services",
        detail:
          "A negative gross margin on engineering work means the company subsidises its own certification. Watch whether that improves as volume returns.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "NuScale has a certified small-reactor design, a large engineering parent, $933.4M of net cash and almost no revenue. Its FY2025 operating loss of $689.6M is the cost of maintaining a design and a licensing programme without a plant to sell.",
      "The educational point is that a reactor developer's income statement is a spending plan, not a business. What converts it into a business is an order with a site, a customer and a construction budget. Until then, the cash balance is the clock.",
      "The unknown is price. Nothing in the reported figures says what a VOYGR plant costs to build or what a customer would pay for the output, and those two numbers determine whether the design has a commercial future once it is licensed.",
    ],
    questions: [
      "How many distinct customers have paid for engineering work in the last four quarters?",
      "What would the first plant cost, and who would carry construction risk?",
      "At the FY2025 burn rate, how many years does the net cash cover?",
      "What does a module cost to manufacture at a steady order rate?",
    ],
  },
};
