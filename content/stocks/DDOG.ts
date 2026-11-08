import type { StockStory } from "./types";

export const DDOG: StockStory = {
  ticker: "DDOG",
  kicker: "Software · Observability platforms",
  title: "Datadog charges by usage, which is both the model and the risk",
  dek: "A 79.6% gross margin and a 2.3% operating margin do not usually appear in the same company. The 28.7% free-cash-flow margin is what fills the gap, and it depends on customers consuming more every year.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $4.28B, up 33.2%, with growth of 35.2% in the latest quarter.",
    "Gross margin is 79.6%, but operating margin is only 2.3%.",
    "Free cash flow was $1.23B, a 28.7% margin, with $4.25B of net cash.",
    "At $179.04 the shares trade at 14.1x sales and 52.7x free cash flow.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001561550&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Datadog sells observability: the software that tells engineers whether their systems are working. It collects metrics, logs and traces from a customer's infrastructure and applications, puts them on dashboards, and alerts the right person when something breaks. The product is used by developers and operations teams, and it is bought by the engineering budget rather than the marketing budget.",
      "The pricing model is consumption-based. Customers pay for the number of hosts they monitor, the volume of logs they send and the custom metrics they store. That aligns revenue with how much the customer uses the platform, which is good when a customer's cloud footprint grows and painful when the customer decides to send less data.",
      "At $179.04 the market capitalisation is $64.6B, or 14.1x sales, 52.7x free cash flow and 246.7x trailing earnings. The shares sit 40% of the way up a 52-week range of $98.01 to $300.68. The multiples are high because the earnings are small, not because the business is unprofitable in cash terms.",
    ],
    quote:
      "Consumption pricing makes the customer's growth your growth. It also makes the customer's cost-cutting your problem, and engineering budgets are the first place a chief technology officer looks when cloud bills rise.",
  },
  whatItDoes: {
    paragraphs: [
      "The platform has grown by adding products next to each other. Infrastructure monitoring was the original product. Application performance monitoring came next, then log management, then security, then digital experience monitoring for browsers and mobile apps. A customer can buy one product and add others without changing vendors, which is the basis of the expansion model.",
      "Customers range from small engineering teams to large enterprises with thousands of services. The land-and-expand motion starts with a single team and a single product, then spreads as other teams see the dashboards. That is why the company tracks the number of customers using multiple products, and why the average revenue per customer rises over time.",
      "Datadog employed 2,185 people. That is a small headcount for $4.28B of revenue, and it is possible because the product is software and the infrastructure is rented. Research and development and sales are the two large cost lines; the cost of running the platform is the third and it scales with usage.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is metered. A customer's bill is a function of hosts, log volume, custom metrics and the number of products in use. Gross margin is 79.6%, which means the cloud infrastructure and support costs consume about a fifth of revenue. That is lower than a traditional software company's gross margin because Datadog pays cloud providers for storage and compute on the customer's behalf.",
      "The operating margin of 2.3% is the interesting number. Sales and marketing is expensive because the company is still adding customers and products, and research and development is heavy because the product surface keeps widening. The business is choosing growth over near-term profit, and the choice shows up as a thin operating margin.",
      "Free cash flow of $1.23B, a 28.7% margin, is much higher than operating income. A gap that wide usually comes from share-based compensation, which is added back in the cash-flow statement, and from customers paying in advance. Both are real, and both mean the cash figure overstates the profit available to a shareholder who does not want dilution.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 45.4% a year from $1.03B in FY2021 to $3.43B in FY2025, and the trailing figure is $4.28B, up 33.2%. The deceleration is gradual rather than abrupt: 33.2% on a trailing basis and 35.2% in the latest quarter. For a company of this size, that is still fast.",
      "The attributed consensus expects $4.52B this fiscal year and $5.53B next year, with EPS of $2.73 and $3.16. Next quarter is expected to produce $1.20B and $0.69. The revenue estimate implies growth continuing in the low thirties, which is consistent with the recent trend.",
      "The drivers are new customers, more products per customer and more usage per product. The brake is optimisation: when a customer's cloud bill rises, the engineering team is asked to send less data, and Datadog's revenue falls with the volume. That happened across the industry when cloud spending was scrutinised, and it can happen again.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a company that has been close to breakeven on an operating basis for five years: operating income was negative $19.2M in FY2021, negative $58.7M in FY2022, negative $33.5M in FY2023, positive $54.3M in FY2024 and negative $44.4M in FY2025. Revenue more than tripled over the same period. The operating result is not converging quickly because the company keeps investing.",
      "Quarterly operating margin has improved: negative 4.3% in Q2 FY2025, negative 0.7%, 1.0%, 0.7%, 0.5% and 6.2% in Q3 FY2026. Revenue rose from $826.8M to $1.20B over those quarters. The latest quarter is the first with a clearly positive margin, which is a small but real inflection.",
      "Net margin is 6.1% and diluted EPS is $0.72. Return on equity is 5.6% and return on invested capital is 16.3%. The difference between the two reflects the $4.25B of net cash earning a return below the operating business's return, which drags the equity measure down.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $1.23B, a 28.7% margin, and it has risen every year in the record: $276.6M, $383.1M, $632.4M, $835.9M and $1.00B. The growth in cash flow is steadier than the growth in operating income, which tells you that the add-backs are doing a lot of the work.",
      "Net cash is $4.25B. That is a large cushion relative to revenue and it gives the company room to invest through a slowdown, make acquisitions and absorb the cost of expanding the product line. It also means the enterprise value used in the multiples is lower than the market capitalisation.",
      "The cash flow supports no dividend and no meaningful buyback. The priority is reinvestment. A shareholder is therefore relying on revenue growth and multiple expansion rather than on cash returned today, which is the opposite of the HP or IBM case in this coverage universe.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 14.1x sales, 52.7x free cash flow and 246.7x earnings, Datadog is priced for growth. The 1.9% free-cash-flow yield is low. The 368.4x EV/EBITDA multiple is almost meaningless because EBITDA is small relative to the enterprise value, but it makes the same point.",
      "The peer table shows how extreme the valuation is relative to large software companies: Microsoft at 19.4x EV/EBITDA, Oracle at 13.5x, Nvidia at 22.0x. Datadog's 1st-percentile cheapness score on EV/EBITDA means it is the most expensive name in the coverage universe on that measure.",
      "The valuation only works if revenue growth stays above 30% for several years and the operating margin expands toward the gross margin. The first is visible in the consensus; the second is not yet visible in the income statement.",
    ],
  },
  analysts: {
    paragraphs: [
      "Forty-seven analysts contribute to the attributed consensus, with a mean target of $271.71 and a range of $171.00 to $330.00. The mean is well above the last close, and the low end is roughly at it. That is a wide distribution for a company with such consistent revenue growth.",
      "Estimates call for $4.52B of revenue and $2.73 of EPS this fiscal year, then $5.53B and $3.16. Next quarter is expected to produce $1.20B and $0.69, which is flat with the $1.20B just reported. The revenue estimate for the year implies growth continuing at the current rate.",
      "Note the difference between the consensus EPS and the reported figure. The trailing diluted EPS is $0.72, while the current-year estimate is $2.73. The two are not the same measure, and the gap is mostly the treatment of share-based compensation.",
    ],
  },
  risks: {
    intro:
      "Datadog's risks are about consumption and competition. The balance sheet is strong and the cash flow is real; the uncertainty is whether customers keep expanding usage at the current rate.",
    items: [
      {
        title: "Usage optimisation",
        severity: "High",
        detail:
          "Customers can cut their bill by sending less data. A cost-conscious engineering budget reduces revenue without losing the customer.",
        watch:
          "Revenue growth against customer count, and commentary on optimisation.",
      },
      {
        title: "Competition from platform vendors",
        severity: "High",
        detail:
          "Cloud providers and large software vendors bundle monitoring into existing agreements, which pressures pricing and land opportunities.",
        watch:
          "Win rates and the growth rate of new logos.",
      },
      {
        title: "Multiple compression",
        severity: "High",
        detail:
          "At 14.1x sales, a growth slowdown of a few points can halve the multiple without any change in the business.",
        watch:
          "The forward sales multiple against the growth rate.",
      },
      {
        title: "Thin operating margin",
        severity: "Medium",
        detail:
          "A 2.3% operating margin leaves little room for a rise in cloud costs or sales spending before the company reports an operating loss.",
        watch:
          "Operating margin and the cost of revenue.",
      },
      {
        title: "Share-based compensation",
        severity: "Medium",
        detail:
          "Free cash flow adds back share-based pay. If dilution runs ahead of revenue, per-share value grows more slowly than the business.",
        watch:
          "Diluted share count and the stock-compensation line.",
      },
    ],
    watchlist: [
      {
        title: "Net revenue retention",
        detail:
          "The single best measure of whether existing customers are consuming more.",
      },
      {
        title: "Operating margin",
        detail:
          "6.2% in the latest quarter is the first sign of leverage. It needs to keep rising.",
      },
      {
        title: "Free cash flow versus operating income",
        detail:
          "A wide gap means add-backs are doing the work. Track the size of it.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Datadog is a fast-growing software company with a genuine product advantage and a pricing model that grows with its customers. The 79.6% gross margin shows the product economics; the 2.3% operating margin shows how much it is spending to grow.",
      "The valuation is the issue. At 14.1x sales and 52.7x free cash flow, the market has already assumed several more years of rapid growth. That is not unreasonable given the record, but it leaves little margin for a slowdown.",
      "The reader should decide whether the cash flow or the earnings is the better measure of the business. If the gap is mostly compensation, the true cost is dilution. If it is mostly deferred revenue, the cash is real but the timing is flattered.",
    ],
    questions: [
      "How much of revenue growth comes from existing customers versus new ones?",
      "What happens to revenue if customers cut log volumes by a fifth?",
      "How large is share-based compensation relative to revenue?",
      "What growth rate justifies 14.1x sales?",
    ],
  },
};
