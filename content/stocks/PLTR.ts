import type { StockStory } from "./types";

export const PLTR: StockStory = {
  ticker: "PLTR",
  kicker: "Software · Data and decision platforms",
  title: "Palantir turns other organisations' data into working software",
  dek: "Revenue is growing at 87% and the operating margin is 45.6%, which is a rare combination in enterprise software. The open question is how long a 91x earnings multiple can wait for the growth to normalise.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $7.29B, up 87.1% year over year, and the latest quarter grew 95.9%.",
    "Operating margin reached 45.6% from a loss as recently as FY2022.",
    "Free cash flow was $4.05B, a 55.6% margin, with $10.56B of net cash.",
    "At $160.38 the shares trade at 91.3x trailing earnings and 44.5x sales.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001321655&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Palantir builds software that sits on top of an organisation's scattered data and turns it into a working model of the organisation: inventories, patients, aircraft, supply chains, transactions. The company sells to governments and to large companies, and it does so with engineers who embed with the customer rather than through a self-serve funnel.",
      "That delivery model is the whole investment debate. Revenue reached $7.29B on a trailing basis, up 87.1%, and the latest quarter grew 95.9%. Operating margin is 45.6% and free-cash-flow margin is 55.6%. A business that once lost $520.4M in a single year now converts more than half of revenue into cash.",
      "At $160.38 the market capitalisation is $335.2B, which works out to 91.3x trailing earnings, 96.8x EV/EBITDA and 44.5x sales. Those multiples assume the growth rate persists long enough to grow into the price. The shares are 51% of the way up a 52-week range of $106.37 to $212.94, so the market has already repriced the story once this year.",
    ],
    quote:
      "The useful question is not whether Palantir's software is good. It is whether a services-heavy deployment model can scale without the headcount that normally comes with it.",
  },
  whatItDoes: {
    paragraphs: [
      "The product set has three layers. Gotham is the original government platform, used for intelligence, defence and investigative work. Foundry is the commercial equivalent, used by manufacturers, banks and healthcare organisations to connect operational data and build applications on top. Apollo is the deployment layer that pushes software into customer environments, including ones that are disconnected or classified. Newer AI tooling sits across all three.",
      "Customers fall into two buckets. Government work is contract-based, procurement-driven and often multi-year, with revenue that depends on budgets and renewals rather than monthly sign-ups. Commercial work starts as a pilot on a narrow problem and expands if the customer sees a result. That expansion pattern is why the company can grow quickly from a small account base, and why growth is lumpy when pilots fail to convert.",
      "The company employed 2,439 people at the last count, which is small for $7.29B of revenue. A conventional enterprise software company at this scale would carry far more sales and delivery staff. Palantir substitutes its own engineers and a shared platform for that headcount, and the margin evidence suggests the substitution has worked so far.",
    ],
    bullets: [
      {
        title: "Gotham",
        detail:
          "Government and defence analytics. Long procurement cycles, high switching costs once a workflow is built on it.",
      },
      {
        title: "Foundry",
        detail:
          "Commercial data integration and application building. Sold as an enterprise platform, expanded site by site.",
      },
      {
        title: "Apollo",
        detail:
          "Continuous deployment into customer and classified environments. The reason the software can run where cloud vendors cannot reach.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is contracted, usually annual or multi-year, and recognised as the platform is used. The economics are software-like: gross margin is 84.7%, so the direct cost of serving an additional customer is small. What costs money is winning the account and building the first working application, which is why sales and delivery expense, not cost of revenue, is the constraint on profitability.",
      "Operating margin of 45.6% and net margin of 50.4% show how far the company has moved. The gap between the two is worth noticing: net margin is higher than operating margin, so interest income on the cash balance and other non-operating items are contributing. That is a real benefit of holding $10.56B of net cash, but it is not the same as earning more from customers.",
      "The pricing model is value-based rather than per-seat. Customers pay for access to the platform and for the applications built on it, and the contract value grows as more use cases go live. This is why the company talks about expansion within existing accounts: the second and third deployment costs the customer less to adopt and costs Palantir less to deliver.",
    ],
  },
  growth: {
    paragraphs: [
      "The revenue record is the story. Revenue went from $1.54B in FY2021 to $1.91B, $2.23B, $2.87B and $4.48B in FY2025. That is a 34.9% compound annual rate over the period, but the recent quarters are far above it: $1.00B in Q2 FY2025, $1.41B in Q4 FY2025, and $2.31B in Q3 FY2026. Growth is accelerating, not fading.",
      "The attributed consensus expects $8.55B of revenue this fiscal year and $13.11B next year, with EPS of $1.70 and $2.54. If those numbers are close, the company would add more revenue in two years than it generated in its entire history to that point. That is a demanding assumption, and it rests on commercial customers converting pilots at the current rate.",
      "The realistic drivers are expansion inside existing accounts, new government programmes and the AI tooling that makes a deployment faster to build. The brake is the same as the accelerator: each deployment needs skilled people at the start. If hiring cannot keep pace with demand, growth slows even when the pipeline is full.",
    ],
    bullets: [
      {
        title: "Account expansion",
        detail:
          "The cheapest growth comes from adding use cases at customers who already run the platform.",
      },
      {
        title: "Government programmes",
        detail:
          "Defence and intelligence budgets are large and sticky, but they arrive on procurement timetables rather than sales cycles.",
      },
      {
        title: "Deployment capacity",
        detail:
          "The number of engineers who can take a customer from pilot to production is the practical ceiling on growth.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The margin trajectory explains the re-rating. Operating income was negative $411.0M in FY2021, negative $161.2M in FY2022, then positive $120.0M, $310.4M and $1.41B in the following three years. Quarterly operating margin climbed from 26.8% in Q2 FY2025 to 46.9% in Q3 FY2026. Each incremental dollar of revenue has been dropping through to profit at a high rate.",
      "Returns look extreme because the capital base is small. Return on invested capital is 335.4% and return on equity is 32.4%. A software company that needs little capital to grow will always show a high ROIC, so the figure is less informative than the direction of margins. The more useful test is whether gross margin stays near 84.7% as the customer base widens.",
      "Diluted EPS was $1.42 on a trailing basis against a $1.70 consensus for the current year. The share count matters here: stock-based compensation is a real cost that does not appear in free cash flow, so per-share progress can lag the improvement in operating profit.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $4.05B, a 55.6% margin, and the balance sheet holds $10.56B of net cash. That is unusual for a company that was loss-making four years ago. The cash generation comes from collecting subscription revenue up front while paying delivery costs over time, which flatters near-term cash flow relative to accrual profit.",
      "The gap between free cash flow and net income is the thing to inspect. Palantir's cash conversion is strong, but part of the difference is stock-based compensation, which is added back in the cash-flow statement and paid for in dilution. The $10.56B net cash position gives the company room to fund deployments, buy technology and ride out a slower contract year.",
      "Capital expenditure is low because the company does not own data centres at scale. The cash cost of growth is people, and people are expensed. That is a favourable structure: a slowdown shows up quickly in the margin, and a recovery does not require a factory to be built first.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $160.38 the shares trade at 91.3x trailing earnings, 96.8x EV/EBITDA, 44.5x sales and 82.7x free cash flow, for a 1.2% free-cash-flow yield. Those are not multiples that can be justified by the current year. They are a claim on several years of rapid growth at high margins.",
      "The peer table makes the point. Nvidia trades at 23.3x earnings, Microsoft at 27.6x and Broadcom at 36.6x, all with strong growth and wider customer bases. Palantir's 5th-percentile cheapness score on EV/EBITDA means it is among the most expensive names in the coverage universe on that measure, not among the cheapest.",
      "The arithmetic of a high multiple is simple. If earnings double and the multiple halves, the share price is unchanged. An investor in this stock is therefore making a bet about the durability of growth and the exit multiple at the same time, and the two are correlated.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-eight analysts contribute to the attributed consensus, with a mean target of $222.25 and a range of $80.00 to $273.00. The mean sits above the $160.38 close; the low end sits below it by a wide margin. That spread is a disagreement about the growth rate, not about the last quarter.",
      "Current-year estimates call for $8.55B of revenue and $1.70 of EPS, and next year's figures are $13.11B and $2.54. Next quarter is expected to produce $2.67B of revenue and $0.39 of EPS. The implied step-up from the latest quarter's $2.31B is modest, which suggests the forecasters expect a normal seasonal pattern rather than a further acceleration.",
      "These are third-party forecasts. A mean target is not a rating, and a wide range usually tells a reader more than the average does.",
    ],
  },
  risks: {
    intro:
      "The financial risks are modest because the balance sheet is in net cash. The strategic risks are concentrated in how the company wins and keeps large accounts, and in what investors paid for that ability.",
    items: [
      {
        title: "Government budget and procurement",
        severity: "High",
        detail:
          "A large share of revenue comes from public-sector work that moves on appropriation cycles. A budget delay can push revenue between quarters even when the programme survives.",
        watch:
          "Contract renewals, backlog disclosure and the split between government and commercial revenue.",
      },
      {
        title: "Pilot conversion",
        severity: "High",
        detail:
          "Commercial growth depends on pilots becoming production deployments. A lower conversion rate would show up as slower expansion before it showed up in the customer count.",
        watch:
          "Net dollar retention commentary and the number of large accounts.",
      },
      {
        title: "Services-heavy delivery",
        severity: "Medium",
        detail:
          "Embedding engineers solves the trust problem but caps how fast the company can scale. Headcount growth is the leading indicator of delivery capacity.",
        watch:
          "Revenue per employee and the mix of engineering versus sales hiring.",
      },
      {
        title: "Stock-based compensation",
        severity: "Medium",
        detail:
          "Free cash flow adds back share-based pay. If dilution runs ahead of revenue, per-share value grows more slowly than the business.",
        watch:
          "Diluted share count and the stock-compensation line as a share of revenue.",
      },
      {
        title: "Valuation",
        severity: "High",
        detail:
          "At 44.5x sales, a growth disappointment compresses the multiple and the earnings base at the same time. The shares have already fallen 8.4% over the past year while revenue grew quickly.",
        watch:
          "The forward multiple against the next year's estimated growth rate.",
      },
    ],
    watchlist: [
      {
        title: "Commercial mix",
        detail:
          "Watch the commercial share of revenue. It is the part of the business that can compound without a budget cycle.",
      },
      {
        title: "Gross margin",
        detail:
          "84.7% is the proof that delivery is software rather than consulting. A sustained fall would change the story.",
      },
      {
        title: "Free cash flow versus net income",
        detail:
          "Track the size of the gap. A widening gap means compensation or working capital is doing more of the work.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Palantir is a genuine software business with an unusual go-to-market model, a net-cash balance sheet and margins that most enterprise vendors never reach. The revenue history shows a company that has crossed from losses to substantial profitability in four years.",
      "What is not known is how much of the current growth is the AI wave filling the pipeline and how much is durable demand for the platform. The consensus assumes both continue. The valuation assumes they continue for long enough to bring the multiple down to something ordinary.",
      "A reader should separate three questions: how the accounts expand, how the work is delivered, and what the price already discounts. The first two are operational. The third is arithmetic, and it is where the risk sits.",
    ],
    questions: [
      "What share of revenue comes from customers that have been live for more than two years?",
      "How many engineers does each incremental dollar of revenue require?",
      "Does the 45.6% operating margin hold if growth slows to 25%?",
      "What growth rate is embedded in a 44.5x sales multiple?",
    ],
  },
};
