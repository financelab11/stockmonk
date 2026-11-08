import type { StockStory } from "./types";

export const PEGA: StockStory = {
  ticker: "PEGA",
  kicker: "Software & Cyber · Workflow and decisioning",
  title: "Pegasystems earns its cash from systems that are hard to remove",
  dek: "Revenue grew 0.9% while free cash flow reached 25.3% of sales. The company is being valued as a cash generator, and the shift to cloud subscriptions explains why both numbers look the way they do.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was $1.75B, up 0.9%, the slowest growth in the peer group.",
    "Free cash flow of $442.2M is a 25.3% margin, roughly two and a half times the operating margin.",
    "Net cash of $309.7M and a 57.1% return on invested capital: capital is not the constraint.",
    "At $32.40 the shares sit 19% of the way up a 52-week range of $25.10 to $63.26.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1013857/000101385726000017/pega-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001013857&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Pegasystems sells software that runs the repetitive decisions inside a large organisation: whether to approve a loan, how to price a renewal, which claim to escalate, what to offer a customer who calls. The platform combines a low-code tool for building the workflow, a rules engine for the decision logic, and industry templates for banking, insurance, healthcare, government and communications.",
      "This is not a product that spreads through a free tier. It is bought by a programme office, implemented over months with partners, and connected to core systems that are themselves decades old. Once it is running a regulated process, replacing it means re-implementing the process, which is why customers stay for a very long time.",
      "Trailing revenue is $1.75B, up 0.9%. The latest quarter, Q3 FY26, produced $393.4M at a 3.8% operating margin. The shares closed at $32.40 for a $5.3B market capitalisation, near the bottom of a 52-week range that runs from $25.10 to $63.26.",
    ],
    quote:
      "Enterprise workflow is bought once a decade and runs for two. That makes the installed base the asset and new logos a bonus.",
  },
  whatItDoes: {
    paragraphs: [
      "The product surface has three parts that are sold together: a platform for building applications without much custom code, a decisioning engine that chooses the next best action for a customer, and pre-built applications for specific industries. The decisioning engine is the differentiated piece; the low-code tool is table stakes and the industry templates are how the company gets into accounts without a bespoke build.",
      "Customers are large, regulated and conservative. Banks re-platform a credit decision process rarely, and when they do the project is measured in years. The company employs 5,776 people, a headcount that reflects how much of the revenue depends on implementation, support and industry expertise rather than on licence delivery.",
    ],
    bullets: [
      {
        title: "Cloud subscriptions",
        detail:
          "Hosted access to the platform, billed annually. This is the mix the company has been steering toward because it is recurring.",
      },
      {
        title: "Term licences and maintenance",
        detail:
          "On-premises or customer-hosted deployments, with an annual support fee attached. Maintenance is high-margin and extremely sticky.",
      },
      {
        title: "Services",
        detail:
          "Implementation, training and consulting, delivered by the company and by partners. Lower margin, but it is how the software gets embedded deeply enough to renew.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from four streams with very different economics. Cloud subscriptions recur and carry the best margin. Maintenance recurs at an even higher margin but shrinks as customers migrate. Term licences are large and lumpy and arrive when a deal closes. Services are labour, priced close to cost, and exist to make the other three work.",
      "Gross margin is 75.9%, which is respectable but below what a pure subscription business reports, because services and hosting sit in cost of revenue. Operating margin is 9.9%, and the gap between that and free cash flow of 25.3% comes from the timing of annual billings and from the fact that a large share of the cost base — engineering and sales — is fixed.",
      "The fourth quarter is where the model shows its shape. In the December quarter revenue reached $504.3M against $393.4M in the September quarter, and the operating margin jumped to 20.7% from 3.8%. Licence deals close at year end, so a disproportionate share of profit lands in one quarter. That seasonality makes any single quarter a poor guide.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $1.21B in FY2021 to $1.32B, $1.43B, $1.50B and $1.75B in FY2025. The FY2025 step is larger than the trend, and the latest quarter grew 3.1%. Consensus estimates of $1.79B this year and $1.90B next imply the company stays in low single digits for a while yet.",
      "The explanation offered by the subscription model is that moving a customer from a licence to a cloud contract converts a large upfront payment into a smaller annual one. During the transition, reported revenue understates the contracted value of the business. That is a real effect, and it is also the explanation every slow-growing enterprise software company reaches for, so it needs to be tested against the cloud mix rather than accepted.",
      "The genuine growth levers are narrower. Decisioning is being repositioned around AI, which gives the sales team a new reason to talk to existing accounts. Industry applications let the company sell a packaged process instead of a toolkit. Neither is a mass market; both are large-contract businesses where a handful of wins moves the year.",
    ],
  },
  performance: {
    paragraphs: [
      "The operating line tells a turnaround story: -$94.7M, -$109.4M, then +$81.0M, +$123.9M and +$263.1M. Three years of improvement, with the FY2025 margin reaching double digits on revenue that barely grew. Cost discipline, not revenue, did the work.",
      "The quarterly operating margins are 4.5%, 3.8%, 20.7%, 8.6%, 4.0% and 3.8%. Strip out the December quarter and the business runs at a low single-digit margin; include it and the year looks far better. Understanding that pattern is more useful than averaging it away.",
      "Two numbers in the dataset do not fit together. The trailing net margin is -29.0%, which implies a substantial net loss, while diluted EPS is reported as $1.61. Those cannot both describe the same unadjusted result. The net line was dragged down by a $567.4M loss in the December quarter, while the EPS figure behaves like an adjusted number that excludes it. When the bottom line is distorted by a charge, the operating line and the cash flow are the honest measures.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow went from $28.7M to -$13.0M, then $201.0M, $338.2M and $490.7M. On a trailing basis it is $442.2M, a 25.3% margin and an 8.3% yield at the current price. That is a lot of cash for a company growing at 0.9%.",
      "The balance sheet holds $309.7M of net cash, so the free cash flow is not servicing debt. Return on invested capital of 57.1% is high partly because the capital base is small and partly because the software was largely written years ago and is no longer carried at its original cost.",
      "The company pays a dividend yielding 0.4%, which is a token amount next to the cash it produces. For a business generating $442.2M of free cash flow against a $5.3B market capitalisation, capital allocation is a bigger part of the story than product roadmaps.",
    ],
  },
  valuation: {
    paragraphs: [
      "The trailing price-to-earnings ratio of -26.5x is negative and therefore uninformative. EV/EBITDA is 26.8x, EV/sales is 2.9x, and price to free cash flow is 12.0x. The last of those is the one that matters: at 12x cash flow with an 8.3% yield, the market is pricing a business that does not grow much, not one that cannot generate cash.",
      "The peer comparison makes the trade-off explicit. Pegasystems grows at 0.9% against 9.5% at Tenable, 21.1% at SentinelOne and 42.4% at Rubrik. Its 9.9% operating margin is the best in the group, and on EV/EBITDA of 26.8x it is cheaper than Tenable at 53.3x.",
      "Cheap on cash flow and expensive on growth is a description, not a verdict. The question is whether the cash flow is stable enough to be worth a low multiple.",
      "Stockmonk does not publish a target price. The consensus mean in the next section is third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "Only seven analysts contribute to the attributed consensus, which is thin coverage for a company this size and a signal that the sell side does not see much to debate. The mean target is $41.00 with a range of $35.00 to $50.00.",
      "Estimates call for $543.4M of revenue next quarter — again the December quarter — and $0.91 of EPS, then $1.79B and $2.11 for the fiscal year, rising to $1.90B and $2.37. The revenue path assumes the current flat trend continues, which makes the estimate revisions a better indicator than the absolute numbers.",
    ],
  },
  risks: {
    intro:
      "Pegasystems' risks come from its customer base and its growth rate rather than its balance sheet. It has cash, no net debt and a sticky product. What it does not have is revenue growth.",
    items: [
      {
        title: "Revenue stagnation",
        severity: "High",
        detail:
          "At 0.9% growth the company is roughly replacing what it loses. Flat revenue plus a fixed cost base means margin improvement can only come from cost cuts, and those run out.",
        watch:
          "Quarterly revenue growth and the cloud subscription mix.",
      },
      {
        title: "Concentration in financial services",
        severity: "High",
        detail:
          "Banks and insurers are the core buyers. Their technology budgets are cyclical and sensitive to regulation and rates, so a spending pause hits the largest part of the base at once.",
        watch:
          "The industry split of revenue and commentary on large-deal pipelines.",
      },
      {
        title: "Services-heavy delivery",
        severity: "Medium",
        detail:
          "A large services organisation is a people business with lower margin than software. It also means growth requires hiring that scales linearly.",
        watch:
          "The services share of revenue and its gross margin.",
      },
      {
        title: "Low-code and packaged competition",
        severity: "High",
        detail:
          "General-purpose low-code tools and software-as-a-service products that ship a fixed process can undercut a platform that requires a multi-year implementation.",
        watch:
          "Win rates against packaged alternatives and the length of sales cycles.",
      },
      {
        title: "AI and the decision layer",
        severity: "Medium",
        detail:
          "The decisioning engine is the differentiated part of the platform. If general models can be pointed at the same rules and data, the premium for a specialist engine narrows.",
        watch:
          "How the company prices AI capability and whether it is bundled or charged separately.",
      },
    ],
    watchlist: [
      {
        title: "Cloud subscription mix",
        detail:
          "The whole explanation for slow growth rests on this shift. The mix should be rising if the explanation is true.",
      },
      {
        title: "December quarter",
        detail:
          "One quarter carries most of the year's profit. Its licence and cloud bookings decide the annual result.",
      },
      {
        title: "Capital returns",
        detail:
          "With $442.2M of free cash flow and a $5.3B market capitalisation, buybacks and the dividend are a material part of the return.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Pegasystems is a mature enterprise software company with a sticky installed base, a high-margin maintenance stream and a real decisioning product. It is not growing, and it is generating a great deal of cash from the business it already has.",
      "The educational value is in seeing how the same company can look cheap and expensive at once. Twelve times free cash flow with an 8.3% yield looks inexpensive; 26.8x EV/EBITDA on flat revenue looks full. The difference is what each denominator assumes about the future.",
      "What is not known is whether flat revenue is a transition artefact or the new normal. The cloud mix and the December bookings are the two facts that would settle it.",
    ],
    questions: [
      "What share of revenue is now recurring cloud subscription rather than licence and maintenance?",
      "Is the margin improvement from cost cuts, and how much more is available?",
      "How concentrated is revenue in the ten largest customers?",
      "What is the company doing with $442.2M of annual free cash flow?",
    ],
  },
};
