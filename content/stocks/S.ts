import type { StockStory } from "./types";

export const S: StockStory = {
  ticker: "S",
  kicker: "Software & Cyber · Endpoint and XDR",
  title: "SentinelOne's agents are sticky, but its income statement is still catching up",
  dek: "Revenue passed $1B and free cash flow turned positive, yet a 29.5% operating loss shows how much of the model still depends on outspending larger rivals.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $1.1B, up 21.1%, a fraction of the growth rate of its early years.",
    "Gross margin of 72.5% sits below the software norm because the product runs as a hosted data platform.",
    "Free cash flow of $56.5M sits beside a 29.5% operating loss; the gap is the story.",
    "Net cash of $628.7M gives the company room to keep spending while the model matures.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000020/s-20260131.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001583708&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "SentinelOne sells software that watches endpoints — laptops, servers, containers, cloud workloads — and decides on its own whether a process is behaving normally. The agent is the product, the console is the interface, and the data lake underneath is where the company hopes to widen the relationship over time.",
      "Trailing revenue is $1.1B, up 21.1%. The latest quarter, Q2 FY27, produced $292.0M at a -31.1% operating margin. At $21.77 the market capitalisation is $7.4B, and the shares sit 68% of the way up a 52-week range of $11.81 to $26.50.",
      "The single question is whether endpoint protection is a durable subscription or a feature that gets absorbed into a larger platform. Everything else — the 21% growth rate, the 6.2x EV/sales multiple, the 131x price to free cash flow — is a function of how that question resolves.",
    ],
    quote:
      "Endpoint security is a replacement market. Every dollar SentinelOne wins comes out of an incumbent's renewal, which makes bundling a bigger risk than any single rival.",
  },
  whatItDoes: {
    paragraphs: [
      "The platform covers prevention, detection, response and hunting in one agent. Customers add modules for cloud workloads, identity protection and the data lake without deploying a second sensor, which is the mechanism behind expansion revenue: the same installed base can be billed for more over time.",
      "Buyers are security teams at enterprises and mid-sized companies, usually reached through channel partners who bundle the licence into a wider reseller agreement. The company reports one consolidated revenue line, so there is no segment disclosure to lean on. The dataset also gives no geography split.",
    ],
    bullets: [
      {
        title: "The agent",
        detail:
          "A single sensor on the endpoint that scores behaviour locally rather than waiting for a signature update or a cloud verdict.",
      },
      {
        title: "The data layer",
        detail:
          "Telemetry from every agent lands in a common store, which is what makes cross-domain detection and module attachment possible.",
      },
      {
        title: "The buying route",
        detail:
          "Channel-led sales into security budgets that are already allocated, so growth depends on displacing an incumbent rather than creating a new line item.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is a subscription per protected endpoint or workload, billed annually and recognised over the term. Pricing scales with the size of the estate and with how many modules are switched on. That is a good model when estates grow and a difficult one when a customer consolidates vendors and renegotiates at renewal.",
      "Gross margin is 72.5%, well below what a pure licence business would show. The difference is the cost of running the backend: storing and querying telemetry for every customer is a real expense that grows with usage rather than staying flat. Operating margin is -29.5% because sales and research spending still exceed the gross profit pool.",
      "The strange part of the statement is the coexistence of a 29.5% operating loss and a 5.1% free-cash-flow margin. That pattern is typical of software companies that pay a meaningful part of compensation in stock and collect cash annually in advance: the expense is recognised over twelve months while the cash arrives on day one. It is not an accounting trick, but it does mean the cash flow looks better than the economic result until stock compensation is counted.",
    ],
  },
  growth: {
    paragraphs: [
      "Annual revenue went from $204.8M in FY2022 to $422.2M, $621.2M, $821.5M and $1.00B in FY2026. The arc is a company that grew at triple-digit rates and has now settled near 20%. The latest quarter grew 20.6%, roughly in line with the trailing rate, so there is no sign of a further step down yet.",
      "Third-party estimates point to $1.20B of revenue this fiscal year and $1.42B next, with EPS of $0.32 and $0.46. Those numbers describe a company that keeps growing in the low twenties while inching toward profitability on an adjusted basis.",
      "The drivers are module attachment inside existing accounts, cloud workload coverage as customers migrate applications, and displacement of legacy antivirus at renewal. The brake is the same in reverse: when a platform vendor throws endpoint protection into a bundle at marginal cost, the displaced incumbent becomes the displacer.",
    ],
  },
  performance: {
    paragraphs: [
      "Quarterly operating margins tell a clearer story than the annual average. They ran -38.2%, -33.3%, -28.3%, -29.5%, -28.8% and -31.1% across the last six quarters. The improvement from the first of those to the last is real but has stalled, and the most recent quarter gave back some of the gain.",
      "Gross margin has been stable near 72.5%, so the loss is not a delivery problem; it is a spending problem. Return on equity is -23.7% and return on invested capital is -31.6%. Both are negative because the business is unprofitable, not because it is capital-hungry — the asset base is mostly cash.",
      "One detail worth noticing: the FY2026 net loss of $450.7M is larger than the prior year's $288.4M even though operating loss improved slightly. When the net line moves against the operating line, something below the line is doing the work, and it usually does not repeat.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$99.2M in FY2022, -$198.2M in FY2023, -$69.7M in FY2024, then $31.9M and $75.9M. The turn came in FY2025 and has held. On a trailing basis the company generates $56.5M, a 5.1% margin.",
      "The balance sheet holds $628.7M of net cash, which is the real reason the losses are survivable. Net cash means the shortfall is not being financed with borrowed money, so there is no interest burden distorting the comparison. What the cash does not do is remove the need to reach operating profit: at some point the stock compensation has to be paid for with dilution or with cash.",
    ],
  },
  valuation: {
    paragraphs: [
      "With negative earnings, the trailing price-to-earnings ratio of -15.9x and EV/EBITDA of -26.7x are arithmetic artefacts rather than valuations. The usable multiples are 6.2x EV/sales and 131x price to free cash flow, with a free-cash-flow yield of 0.8%.",
      "Against the peer group, SentinelOne's 21.1% growth sits between GitLab's 23.0% and Tenable's 9.5%, but well behind Rubrik's 42.4%. Its -29.5% operating margin is the weakest of the group, against -16.8% at Rubrik and -8.5% at GitLab. Paying a mid-single-digit sales multiple for below-peer growth and the widest loss in the set requires a specific view about which of those two numbers improves first.",
      "Stockmonk does not publish a target price. The consensus figure in the next section is third-party context, not a view.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty analysts contribute to the attributed consensus, with a mean target of $24.92 and a range of $17.50 to $31.00. Next quarter is expected to produce $310.2M of revenue and $0.09 of EPS.",
      "The gap between the $0.32 consensus EPS for this fiscal year and the trailing GAAP loss of $1.01 per share is almost entirely the difference between adjusted and reported accounting. Reading the two side by side is a useful exercise: the consensus is not forecasting a profitable company, it is forecasting a company whose losses are mostly non-cash.",
    ],
  },
  risks: {
    intro:
      "The balance sheet is not the constraint here. The risks are competitive, operational and structural, and they all land on the same line: how much a customer will pay per endpoint at the next renewal.",
    items: [
      {
        title: "Bundled endpoint protection",
        severity: "High",
        detail:
          "Larger platform vendors can include endpoint protection inside an existing agreement at little incremental cost. That compresses price even when the product is technically competitive.",
        watch:
          "Average revenue per endpoint, discounting at renewal and win rates against platform suites.",
      },
      {
        title: "Net revenue retention",
        severity: "High",
        detail:
          "If existing customers stop adding modules, growth has to come entirely from new logos, which is the more expensive kind.",
        watch:
          "Disclosed retention rates and the mix of expansion versus new business in each quarter.",
      },
      {
        title: "The gap between cash and profit",
        severity: "Medium",
        detail:
          "Positive free cash flow alongside a 29.5% operating loss depends on stock compensation and upfront billing. Neither is infinite.",
        watch:
          "Stock-based compensation as a share of revenue and the trend in diluted share count.",
      },
      {
        title: "Sales efficiency",
        severity: "Medium",
        detail:
          "Security buying committees are slow and channel-dependent. If the cost of winning a dollar of new revenue rises, the path to operating profit lengthens.",
        watch:
          "Sales and marketing spend relative to the incremental revenue it produces.",
      },
      {
        title: "Change in what endpoints are",
        severity: "Medium",
        detail:
          "AI-assisted development and agent-run workloads can shift where code executes. A sensor built for human-operated machines may need re-architecting for machine-operated ones.",
        watch:
          "Product launches aimed at AI workloads and the revenue attached to cloud and container coverage.",
      },
    ],
    watchlist: [
      {
        title: "Net revenue retention",
        detail:
          "The cleanest single measure of whether the platform is widening inside accounts or just holding on.",
      },
      {
        title: "Free-cash-flow margin",
        detail:
          "Watch whether the 5.1% margin expands as revenue grows, or stays flat because spending grows with it.",
      },
      {
        title: "Gross margin",
        detail:
          "A move below 70% would suggest the data platform costs more to run than the pricing assumes.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "SentinelOne has built a genuine product with a real installed base and has crossed the point where cash flow is positive. It has not yet shown that endpoint security can be sold profitably at scale against vendors that give the function away as part of something larger.",
      "The educational point is the difference between the three profit lines. Gross margin tells you about delivery cost, operating margin tells you about the cost of running the company, and free cash flow tells you about timing. Here they diverge sharply, and each one is answering a different question.",
      "What would settle the argument is not a single good quarter. It is a year in which revenue growth holds near 20% while the operating loss narrows for reasons other than stock compensation.",
    ],
    questions: [
      "How much of the revenue base is module expansion rather than new customers?",
      "What happens to pricing when a customer's platform vendor includes endpoint protection?",
      "How large is stock compensation relative to the free cash flow being reported?",
      "Does the 72.5% gross margin hold as data volumes grow?",
    ],
  },
};
