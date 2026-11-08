import type { StockStory } from "./types";

export const CRWD: StockStory = {
  ticker: "CRWD",
  kicker: "Technology · Endpoint and cloud security",
  title: "CrowdStrike is priced on a decade of compounding that has not happened yet",
  dek: "A 75.2% gross margin and a 29.8% free-cash-flow margin are excellent. A 40.2x sales multiple says the market wants them to last a very long time.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $5.40B on a trailing basis, up 24.3%, and the latest quarter grew 25.8%.",
    "Gross margin is 75.2% and free cash flow was $1.61B, a 29.8% margin.",
    "GAAP operating margin is -2.2%, so the trailing P/E of 3,647.9x is arithmetic rather than valuation.",
    "Net cash is $3.81B, and EV/Sales of 40.2x is the highest multiple in this batch.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000010/crwd-20260131.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001535527&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "CrowdStrike sells endpoint security as a subscription. A small piece of software runs on every laptop and server, reports what it sees to a cloud service, and the cloud decides whether the behavior is hostile. One agent, one console, and a set of modules that a customer can switch on as needed.",
      "Growth has been steady at about 24%: $5.40B on a trailing basis, $1.47B in the latest quarter at a -2.3% operating margin. Gross margin is 75.2%, free cash flow is $1.61B and net cash is $3.81B. The company has grown revenue 24% while producing a consistently negative operating margin, and both facts come from the same business model.",
      "A $216.90 share price values the company at $220.86B, inside an $85.68 to $286.99 range. The trailing P/E of 3,647.9x, the EV/EBITDA of 1,512.6x and the EV/Sales of 40.2x are three different ways of saying that reported profit is close to zero relative to the price.",
    ],
    quote:
      "Security is bought on fear and renewed on habit. The first sale is expensive to win and the renewal is nearly free, which is why the model looks bad early and good later.",
  },
  whatItDoes: {
    paragraphs: [
      "The Falcon platform covers endpoint protection, cloud workload security, identity protection, exposure management and log management. Each is a module on the same agent and the same console, which is the core of the sales argument: a customer that adds a module does not deploy new software or train a new team.",
      "Customers range from small businesses to governments, sold through a channel and a direct sales force. The company reports domestic and international segments, and international has been the faster-growing part from a smaller base.",
      "The company employs 3,394 people. That is very small for $5.40B of revenue and reflects a business that delivers software from a shared cloud rather than installing it at each customer.",
    ],
    bullets: [
      {
        title: "Endpoint protection",
        detail:
          "The original product and the reason the agent is installed. The entry point for every other module.",
      },
      {
        title: "Cloud and identity",
        detail:
          "Protection for workloads and user identities. Sold as add-on modules to the installed agent base.",
      },
      {
        title: "Exposure and log management",
        detail:
          "Assessment and data collection products that increase the revenue per endpoint without adding a new agent.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is subscription, priced per endpoint per year, recognized rateably over the contract. Gross margin of 75.2% covers the cloud infrastructure and the support organization. The cost of the software itself is close to zero at the margin, which is why each additional module sold to an existing customer is highly profitable.",
      "The operating margin is negative because sales and marketing consume more than the gross profit. Winning a new customer requires a competitive displacement, a proof of concept and a channel relationship, and the payback period is measured in years. The company is choosing growth over near-term profit, and the cash-flow statement shows it can afford to.",
      "Free cash flow of 29.8% of revenue exceeds the operating margin by more than 30 points. The difference is stock-based compensation, amortization and the timing of subscription billing. Those are real costs to shareholders in the first case and accounting entries in the second, which is why the cash-flow multiple is the more usable measure here.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $1.45B in FY2022 to $4.81B in FY2026, a 3.3-fold increase in four years. The quarterly record shows remarkable steadiness: $1.10B, $1.17B, $1.23B, $1.31B, $1.39B and $1.47B, each roughly 6% above the last.",
      "Third-party estimates call for $6.01B this fiscal year and $7.38B next, which implies growth of 25% and then 23%. Those are close to the current rate, so the estimates assume the model keeps working rather than accelerating.",
      "The drivers are module attach within the existing base, international expansion and the displacement of older endpoint software. The brake is arithmetic: at $5.40B of revenue, a 25% growth rate requires $1.35B of new revenue a year, and each year that number gets larger.",
    ],
  },
  performance: {
    paragraphs: [
      "Annual operating margin has been negative in every year of the table: -9.9% in FY2022, -8.5% in FY2023, -0.6% in FY2024, -2.9% in FY2025 and -6.1% in FY2026. The FY2024 figure came close to breakeven and then moved away again.",
      "The quarterly progression is more encouraging: -10.8%, -9.0%, -5.6%, 1.1%, -2.2% and -2.3%. One quarter crossed into profit. The trend is toward breakeven, but it is slow, and the company has been public long enough that the absence of operating leverage is a fair question rather than a stage of maturity.",
      "Return on equity is 1.3% and return on invested capital is -10.9%. Net margin is 1.1% and diluted EPS was $0.22. None of these figures is a useful description of the economics, which are better captured by the 29.8% free-cash-flow margin.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $1.61B, a 29.8% margin. The annual record shows a business that has been cash-generative since before it was profitable: $462.6M in FY2022 against a net loss of $232.4M, then $706.0M, $989.7M, $1.13B and $1.31B.",
      "That consistency is the strongest part of the case. A subscription business collects cash before it recognizes revenue, so growth produces a cash tailwind. The risk is that the tailwind reverses if growth stalls, because the deferred revenue that funded the cash flow stops growing.",
      "Net cash is $3.81B, so the balance sheet is not a constraint. The company has no need to raise capital to fund growth, which removes one of the classic risks of a loss-making software business.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $216.90, CrowdStrike trades at 40.2x sales, 137.3x free cash flow, 1,512.6x EBITDA and 3,647.9x earnings. The sales multiple is the highest in this batch: Palo Alto is at 21.9x, Arista at 16.9x and Cadence at 14.5x.",
      "A 40.2x sales multiple for a company growing 24% implies that the growth rate has to persist for most of a decade while the margin expands toward the software average. If growth halves, the multiple does not halve with it, because the market would also revise the terminal margin.",
      "The free-cash-flow multiple of 137.3x is the more grounded version of the same statement. Even on cash flow, the price requires years of compounding. Stockmonk does not publish a target price; the consensus below is third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "Fifty analysts, a mean target of $249.68 and a range of $132.00 to $325.00. Ten sit in the strongest positive bucket, 31 are positive, 11 neutral and one in the weakest bucket.",
      "The estimates are $1.53B of revenue next quarter with $0.31 of EPS, $6.01B this fiscal year with $1.26, and $7.38B next fiscal year with $1.61. Revenue is modelled growing 25% and then 23%, and EPS is modelled growing faster as the margin expands.",
      "The mean is about 15% above the last close while the low end is 39% below it. That is a wide range for a company whose revenue is highly visible, and it reflects disagreement about the multiple rather than about the subscription base.",
    ],
  },
  risks: {
    intro:
      "CrowdStrike's risks are about the durability of growth and the price paid for it. The balance sheet and the cash flow are strong.",
    items: [
      {
        title: "Growth deceleration",
        severity: "High",
        detail:
          "The multiple assumes 20%+ growth for years. Each year of slower growth removes more value than the revenue miss itself.",
        watch:
          "Net new annual recurring revenue and the growth rate of remaining performance obligations.",
      },
      {
        title: "Platform competition",
        severity: "High",
        detail:
          "Large infrastructure vendors bundle endpoint protection into contracts customers have already signed, which can cap pricing at renewal.",
        watch:
          "Module attach rates and average revenue per endpoint.",
      },
      {
        title: "Valuation",
        severity: "High",
        detail:
          "At 40.2x sales, a change in the growth assumption moves the price far more than a change in the current quarter.",
        watch:
          "The sales multiple alongside the growth rate, not separately.",
      },
      {
        title: "Trust and incident risk",
        severity: "Medium",
        detail:
          "A security vendor's product sits inside every customer's estate. A failure that affects customers damages the renewal base directly.",
        watch:
          "Customer retention and any disclosure of product-related incidents.",
      },
      {
        title: "International and regulation",
        severity: "Medium",
        detail:
          "Data-residency rules and public-sector procurement requirements can slow or block sales in some markets.",
        watch:
          "The international revenue split and any change in government certification.",
      },
    ],
    watchlist: [
      {
        title: "Free cash flow margin",
        detail:
          "The 29.8% margin is the number the valuation can be tested against. A decline would be more serious than a revenue miss.",
      },
      {
        title: "Module attach",
        detail:
          "Revenue per endpoint is the measure of whether the platform story is working.",
      },
      {
        title: "Operating margin",
        detail:
          "The move from -10.8% toward zero has stalled near -2%. Watch whether it resumes.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "CrowdStrike is a subscription security platform with a 75.2% gross margin, a 29.8% free-cash-flow margin and revenue growing 24.3% on a $5.40B base. It has been cash-generative since before it reported a profit.",
      "The price is the whole argument. At 40.2x sales, the market is paying for a long period of compounding that has not yet appeared in operating profit. The company has the balance sheet to fund that period, with $3.81B of net cash, but it does not control the growth rate.",
      "The educational point is that revenue growth and shareholder return are connected through the multiple, not directly. A company can grow 25% a year and still disappoint if the price assumed 30%.",
    ],
    questions: [
      "What share of new revenue comes from existing customers adding modules?",
      "When does operating margin cross zero and stay there?",
      "How much of the cash flow depends on deferred revenue growth?",
      "What growth rate is embedded in a 40.2x sales multiple?",
    ],
  },
};
