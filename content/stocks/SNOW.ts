import type { StockStory } from "./types";

export const SNOW: StockStory = {
  ticker: "SNOW",
  kicker: "Software · Cloud data platforms",
  title: "Snowflake sells compute by the second and still loses money on paper",
  dek: "A 67.0% gross margin and a 22.0% free-cash-flow margin sit alongside a 22.8% operating loss. The distance between those numbers is the whole investment question.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $5.43B, up 32.0%, with 35.1% growth in the latest quarter.",
    "Gross margin is 67.0%, but the operating margin is negative 22.8%.",
    "Free cash flow was $1.20B, a 22.0% margin, while net loss was $1.33B in FY2026.",
    "At $275.88 the shares trade at 17.5x sales and 80.0x free cash flow, with no earnings multiple.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001640147&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Snowflake runs a data platform in the cloud. Customers load their data into it, then query, share and build models on that data without managing servers. The platform separates storage from compute, which means a customer can keep one copy of the data and spin up as much processing power as a query needs.",
      "The commercial model follows the architecture. Storage is cheap and grows with the data a customer keeps. Compute is metered by usage, so a customer that runs more queries or larger workloads pays more. That is why revenue tracks consumption rather than the number of employees with a login, and why a single large customer can move the revenue line.",
      "At $275.88 the market capitalisation is $95.6B, or 17.5x sales and 80.0x free cash flow. There is no meaningful earnings multiple because the company reports a GAAP loss. The shares sit 59% of the way up a 52-week range of $118.30 to $384.56, and they returned 4.2% over the past year against negative 25.6% over five years.",
    ],
    quote:
      "Consumption pricing means the customer's data strategy becomes the revenue line. It also means the customer's cost control becomes the growth rate.",
  },
  whatItDoes: {
    paragraphs: [
      "The core product is a data warehouse that runs on cloud infrastructure. Around it sit data engineering tools, data sharing between organisations, a marketplace for third-party data and, more recently, application and AI workloads that run close to the data. The strategic idea is that data is more valuable when it can be combined, and combining is easier when everything lives in one governed platform.",
      "Customers are enterprises with large and messy data estates: retailers analysing transactions, financial firms running risk models, healthcare organisations combining clinical and operational records. The buying centre is usually the data engineering or analytics team, with information technology and security approving the platform.",
      "Snowflake employed 2,495 people. That is a small organisation for $5.43B of revenue, and it reflects a product that runs on rented infrastructure. The company does not own data centres; it pays cloud providers for storage and compute and charges customers for the service on top.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is consumption of credits. A customer buys a commitment, then draws it down as it runs queries. Gross margin is 67.0%, which is lower than a pure software company's because the cloud infrastructure that powers the queries is a real cost of revenue. Snowflake is, in part, reselling compute with software on top.",
      "The operating loss of 22.8% comes from sales and marketing and research and development spending that is large relative to revenue. The company is still building its customer base and its product surface, and it is doing so with a direct sales force that is expensive per dollar of new revenue.",
      "The difference between the operating loss and the free-cash-flow profit is the most important thing to understand about the financial statements. Free cash flow adds back share-based compensation and the amortisation of capitalised commissions, and it benefits from customers paying in advance. The cash is real, but part of it is funded by dilution rather than by profit.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 61.4% a year from $1.22B in FY2022 to $4.68B in FY2026. That is one of the fastest growth records in the coverage universe, and it has slowed in an orderly way: trailing growth is 32.0%, and the latest quarter grew 35.1%.",
      "The attributed consensus expects $6.32B this fiscal year and $8.13B next year, with EPS of $2.22 and $3.03. Next quarter is expected to produce $1.65B and $0.60. The revenue estimates imply growth staying above 25% for another two years, which is a demanding assumption for a company already at $5.43B.",
      "The drivers are new customers, more data per customer and more workloads per dataset. The brake is the same consumption model: when a customer optimises its queries or moves a workload elsewhere, revenue falls without a customer leaving. That makes the growth rate sensitive to how carefully customers manage their cloud bills.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a company that has not reported an operating profit in the five years covered here: negative $715.0M in FY2022, negative $842.3M in FY2023, negative $1.09B in FY2024, negative $1.46B in FY2025 and negative $1.44B in FY2026. The loss widened as revenue grew, which means the company was spending to grow rather than harvesting the base.",
      "The quarterly trend is improving. Operating margin was negative 42.9% in Q1 FY2026, negative 29.7%, negative 27.2%, negative 24.8%, negative 23.4% in Q1 FY2027 and negative 17.0% in Q2 FY2027. Revenue rose from $1.04B to $1.55B over those quarters. The loss is narrowing in percentage terms even though it remains large in dollars.",
      "Return on equity is negative 56.2% and return on invested capital is negative 77.1%. Those figures are not useful as quality measures while the company is loss-making; they mostly reflect the size of the accumulated deficit relative to the equity base.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $1.20B, a 22.0% margin, and it has been positive every year in the record: $94.0M, $520.5M, $813.0M, $913.5M and $1.12B. A company with a $1.33B net loss generating $1.12B of free cash flow is the clearest example in this batch of how accounting profit and cash flow can diverge.",
      "The divergence has three sources. Share-based compensation is a non-cash expense that is added back. Sales commissions are capitalised and amortised, so the cash paid to salespeople is not fully in the operating loss. And customers often pay in advance, which builds deferred revenue. Each is legitimate, and each reverses or dilutes over time.",
      "Net cash is $673.1M. That is a thin cushion for a company of this size, especially one that is still losing money on a GAAP basis. It is the balance-sheet number to watch, because a business that needs to raise capital in a downturn does so on someone else's terms.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 17.5x sales and 80.0x free cash flow, Snowflake is priced for continued rapid growth. The 1.3% free-cash-flow yield is low, and there is no earnings multiple to use as an anchor because the company reports a loss.",
      "The peer table offers little direct comparison, because none of the listed companies is a consumption-priced data platform. Nvidia at 22.0x EV/EBITDA and Microsoft at 19.4x are profitable at scale. Snowflake's 17.5x sales is a different kind of measure: it says the market expects revenue to keep compounding for years.",
      "The valuation arithmetic is unforgiving. At 17.5x sales, a growth rate that falls to the high teens would leave the multiple exposed. At the same time, the path to profitability is visible in the narrowing operating loss, which is why the market is willing to pay for sales rather than earnings.",
    ],
  },
  analysts: {
    paragraphs: [
      "Forty-eight analysts contribute to the attributed consensus, with a mean target of $426.50 and a range of $110.00 to $525.00. The low end sits far below the current price and the high end far above it. That is a measure of how uncertain the growth path is.",
      "Estimates call for $6.32B of revenue and $2.22 of EPS this fiscal year, then $8.13B and $3.03. Next quarter is expected to produce $1.65B and $0.60. The revenue numbers are the more reliable guide; the EPS figures are adjusted and should not be compared with the trailing GAAP loss per share of $3.19.",
      "These are third-party figures, and the dispersion matters more than the mean. When the range runs from $110 to $525, the average is a statement about the middle of a very wide distribution.",
    ],
  },
  risks: {
    intro:
      "Snowflake's risks are competitive and financial. The product is strong and the cash flow is positive, but the company is still loss-making and the valuation assumes years of fast growth.",
    items: [
      {
        title: "Consumption optimisation",
        severity: "High",
        detail:
          "Customers can lower their bill by using the platform more efficiently. Revenue then falls without any customer leaving.",
        watch:
          "Product revenue growth and commentary on consumption patterns.",
      },
      {
        title: "Competition from cloud platforms",
        severity: "High",
        detail:
          "The largest cloud providers sell competing data warehouses and can bundle them into existing infrastructure agreements.",
        watch:
          "Win rates, customer additions and pricing.",
      },
      {
        title: "Path to profitability",
        severity: "High",
        detail:
          "A 22.8% operating loss is narrowing, but the company has never reported an operating profit. A slower growth year would delay breakeven further.",
        watch:
          "Operating margin and the growth of sales and marketing spend.",
      },
      {
        title: "Thin net cash",
        severity: "Medium",
        detail:
          "$673.1M of net cash is small relative to the cost base. A downturn could force a financing.",
        watch:
          "Cash and investments against operating cash burn.",
      },
      {
        title: "Share-based compensation",
        severity: "Medium",
        detail:
          "Free cash flow depends on adding back share-based pay. Dilution is a real cost to per-share value.",
        watch:
          "Diluted share count and stock compensation as a share of revenue.",
      },
    ],
    watchlist: [
      {
        title: "Product revenue growth",
        detail:
          "The consumption model shows up here first. A deceleration is the leading signal.",
      },
      {
        title: "Operating margin",
        detail:
          "Negative 17.0% is an improvement from negative 42.9%. The pace of improvement matters more than the level.",
      },
      {
        title: "Net cash",
        detail:
          "$673.1M is the buffer. Watch it against the quarterly cash burn.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Snowflake is a high-growth data platform with a genuine architectural advantage and a cash-generative business underneath the accounting loss. The 67.0% gross margin shows the software economics; the 22.0% free-cash-flow margin shows that customers pay.",
      "The losses are narrowing and the cash flow is positive, which is the right direction. The valuation, at 17.5x sales, assumes that the direction continues for several years. The thin net cash position is the detail that makes the assumption matter.",
      "A reader should separate three questions: how much of growth is new data versus new customers, how much of the cash flow is add-backs, and how much runway the balance sheet provides if growth slows.",
    ],
    questions: [
      "How much of revenue growth comes from existing customers consuming more?",
      "What would a 20% reduction in customer consumption do to the operating loss?",
      "How large is share-based compensation relative to revenue?",
      "How many quarters of operating expenses does $673.1M of net cash cover if growth slows?",
    ],
  },
};
