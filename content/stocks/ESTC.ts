import type { StockStory } from "./types";

export const ESTC: StockStory = {
  ticker: "ESTC",
  kicker: "Software & Cyber · Search, observability and security",
  title: "Elastic sells a search engine by the gigabyte, and that changes the economics",
  dek: "Revenue of $1.80B grew 16.2% while the operating line stayed near breakeven. Usage pricing makes the product easier to adopt and the revenue harder to forecast.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was $1.80B, up 16.2%, with growth decelerating from a 26.3% compound rate over the prior five years.",
    "Gross margin is 75.5% and the operating margin is -2.6%, so the loss comes from selling and building, not from delivering.",
    "Free cash flow was $349.0M at a 19.4% margin, with $1.46B of net cash behind it.",
    "Trailing net margin of 20.8% is not an operating result: one quarter produced almost a full year of profit.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000018/estc-20260430.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001707753&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Elastic is built on an engine that indexes text and returns answers quickly. The original product was a search library that developers downloaded for free, and that distribution channel is still the front door: an engineer installs the engine to build a feature, the feature grows, and eventually the company is running a production system that needs support, security patches and a hosted deployment.",
      "Three products sit on the engine. Enterprise search powers internal site search and customer-facing search. Observability collects logs, metrics and traces from applications and helps engineers find the cause of an outage. Security turns the same data into a tool for detecting intrusions. All three rely on the same indexing engine, so a customer that adopts one has a reason to consider the others.",
      "Trailing revenue is $1.80B, up 16.2%. The latest quarter, Q1 FY27, produced $478.1M at a -4.9% operating margin. The shares closed at $86.08 for a $9.0B market capitalisation, 67% of the way up a 52-week range of $42.05 to $108.00.",
    ],
    quote:
      "The engine is free to download. The money comes from the companies that would rather not run it themselves.",
  },
  whatItDoes: {
    paragraphs: [
      "Customers choose between running the software themselves and buying it as a hosted service. Self-managed deployments suit large organisations with data-residency constraints and existing infrastructure teams. The hosted service suits everyone who would rather pay for capacity than hire for it, and it is the part of the business that grows with the customer's data volume.",
      "The buying centre is technical: platform engineers, site reliability teams and security operations. That matters because the decision to adopt is often made by an individual developer and the decision to pay is made later, by a manager facing a production incident. The company employs 1,936 people and reports one revenue line, with no segment or geography split in the dataset.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "There are two revenue mechanics underneath the single reported line. Self-managed subscriptions are sold as annual tiers with support and extra features. The hosted service is billed on consumption — storage, compute and data ingest — so the bill moves month to month with how much the customer indexes and queries.",
      "Consumption pricing is genuinely customer-friendly at the start: a team can begin small and grow without renegotiating. It also means revenue falls when a customer tidies up its logging pipeline, a routine event in every observability account. A seat-based product loses revenue only when someone leaves; a consumption product loses revenue when someone becomes more efficient. That is the single most important difference between Elastic and a per-user software company.",
      "Gross margin is 75.5%. The shortfall from a pure licence business is the cost of running other people's workloads: servers, storage and the people who keep them available. Operating margin is -2.6%, so sales and research spending consume the gross profit. The company is close enough to breakeven that small changes in growth have large effects on the margin.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $862.4M in FY2022 to $1.07B, $1.27B, $1.48B and $1.74B in FY2026. The latest quarter grew 15.1%, slightly below the trailing rate. Consensus estimates call for $486.7M next quarter and $517.8M the quarter after, $2.01B for this fiscal year and $2.30B next, with EPS of $3.36 and $3.96.",
      "The most interesting demand driver is adjacent to the original product. Search engines turned out to be useful for retrieving context for large language models, which has given the company a new reason to be in front of developers. Whether that becomes durable revenue depends on whether buyers use a general search engine or a purpose-built vector store, and both categories are crowded.",
      "The brake is optimisation. Every observability customer eventually reviews its ingest bill, drops noisy logs and samples more aggressively. That is good product behaviour and bad revenue behaviour, and it is why consumption businesses can grow usage while growing revenue more slowly.",
    ],
  },
  performance: {
    paragraphs: [
      "Annual operating income improved steadily: -$173.7M, -$219.2M, -$129.9M, -$54.9M and -$33.5M. The FY2023 setback came with a jump in revenue, which suggests spending ahead of growth rather than a demand problem.",
      "The quarterly sequence has flattened near zero: -3.1%, -2.3%, -1.9%, +0.1%, -3.6% and -4.9%. One quarter crossed into profit and the next two slipped back. A business at this margin is one hiring decision away from either outcome.",
      "The net line is where the dataset needs care. FY2026 net income was $367.8M, and the December quarter alone produced $435.9M of net income on $450.7M of revenue. A quarterly profit almost equal to quarterly revenue is not an operating outcome; it is the signature of an item below the operating line, such as a tax adjustment. The 20.8% trailing net margin and the $3.50 of diluted EPS should be read as artefacts of that quarter, which is why the operating margin is the more honest measure here.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow has risen every year in the dataset: $3.2M, $33.0M, $145.3M, $261.8M and $321.8M, reaching $349.0M on a trailing basis at a 19.4% margin. For a company with a slightly negative operating margin, that is a striking conversion rate.",
      "The explanation is the same one that applies across subscription software: customers pay annually in advance for self-managed contracts, and the hosted service is billed monthly in arrears but at high incremental margin. Deferred revenue funds the gap.",
      "The balance sheet holds $1.46B of net cash. Capital intensity is low — the company runs its hosted service on rented infrastructure rather than owned data centres, which keeps capital expenditure small and converts what would be a fixed cost into a variable one. That choice protects cash flow in slow periods and caps gross margin in fast ones.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $86.08 the shares trade at 24.1x trailing earnings, 4.2x EV/sales and 25.9x free cash flow, with a 3.9% free-cash-flow yield. EV/EBITDA is not available in the dataset, which is reasonable given how close EBITDA is to zero.",
      "The 24.1x earnings multiple deserves scepticism. It is calculated on a net figure inflated by a one-off quarter, so it understates how expensive the shares are relative to operating profit. The 25.9x cash-flow multiple is the more defensible anchor.",
      "Against the peer group, Elastic's 16.2% growth sits between GitLab at 23.0% and Tenable at 9.5%, and its -2.6% operating margin is better than Rubrik and SentinelOne and worse than Tenable and Samsara. A 4.2x sales multiple for mid-teens growth and a near-breakeven margin is a middle-of-the-road price for a middle-of-the-road profile.",
      "Stockmonk does not publish a target price. The consensus figure in the next section is third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-seven analysts contribute to the attributed consensus. The mean target is $111.74 with a range of $75.00 to $130.00. The low end sits below the current price, so the distribution is not uniformly optimistic.",
      "Estimates are $486.7M of revenue and $0.81 of EPS next quarter, $2.01B and $3.36 for the fiscal year, then $2.30B and $3.96. Note that the EPS estimates are well above the operating margin implied by the revenue line, which means they are adjusted figures that exclude stock compensation and other non-cash costs.",
    ],
  },
  risks: {
    intro:
      "Elastic's risks are concentrated in its pricing mechanic and its open-source heritage. The balance sheet is strong; the uncertainty is how much revenue survives when customers optimise.",
    items: [
      {
        title: "Consumption volatility",
        severity: "High",
        detail:
          "Hosted revenue moves with data ingested and queries run. A customer that halves its log volume halves that part of the bill without cancelling anything.",
        watch:
          "Growth in hosted revenue versus self-managed subscription revenue.",
      },
      {
        title: "Open-source and managed-service competition",
        severity: "High",
        detail:
          "The engine's availability has always created a tension: it drives adoption, and it also lets cloud platforms offer a managed version that competes with the paid service.",
        watch:
          "Changes to licensing terms and the growth rate of the hosted business.",
      },
      {
        title: "Purpose-built search alternatives",
        severity: "Medium",
        detail:
          "Specialist vector databases and retrieval services are competing for the AI workload that Elastic wants to serve. A general engine is convenient; a specialised one can be faster.",
        watch:
          "Product announcements around vector search and the attach rate in AI projects.",
      },
      {
        title: "Hosted gross margin",
        severity: "Medium",
        detail:
          "Renting infrastructure rather than owning it keeps capital spending low but places a floor under the cost of delivery.",
        watch:
          "Gross margin by quarter and any shift toward owned capacity.",
      },
      {
        title: "Concentration of large spenders",
        severity: "Medium",
        detail:
          "Consumption models are sensitive to a few accounts that spend heavily. One customer reducing ingest can move a quarter.",
        watch:
          "The revenue contribution of the largest customers and net expansion rates.",
      },
    ],
    watchlist: [
      {
        title: "Hosted revenue growth",
        detail:
          "The consumption side is the growth engine and the volatility source; its rate explains most of the quarter-to-quarter noise.",
      },
      {
        title: "Operating margin",
        detail:
          "At -2.6% the company is close enough to breakeven that a small revenue miss changes the sign.",
      },
      {
        title: "Free-cash-flow margin",
        detail:
          "The 19.4% margin is what supports the valuation while earnings are unreliable.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Elastic has a real technology franchise, three products built on one engine, and a distribution model that has put its software in front of far more developers than it could ever have sold to directly. It has converted that reach into $1.80B of revenue and a healthy cash flow.",
      "The lesson in its accounts is about pricing mechanics. Consumption revenue behaves differently from seat revenue: it expands without a sales call and contracts without a cancellation. That makes the growth rate noisier and the customer relationship more efficient, and it puts a premium on understanding what the customer is actually buying.",
      "The reader should finish by deciding whether the AI search wave expands Elastic's market or merely changes who competes in it.",
    ],
    questions: [
      "What share of revenue is consumption-based, and how does it grow relative to subscription?",
      "How much of the FY2026 net profit came from the one quarter, and from what item?",
      "Is the AI search opportunity adding new customers or selling more to existing ones?",
      "Does gross margin hold at 75% as hosted usage grows?",
    ],
  },
};
