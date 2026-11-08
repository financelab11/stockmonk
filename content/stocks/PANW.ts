import type { StockStory } from "./types";

export const PANW: StockStory = {
  ticker: "PANW",
  kicker: "Technology · Network and cloud security",
  title: "Palo Alto Networks is assembling a platform one acquisition at a time",
  dek: "Free cash flow is 35.8% of revenue and operating margin is 6.1%. The distance between them explains why the earnings multiple is not the right lens.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $11.48B on a trailing basis, up 24.5%, and the latest quarter grew 34.5%.",
    "Gross margin is 70.4% and free cash flow was $4.11B, a 35.8% margin.",
    "Operating income fell to $695.0M in FY2026 from $1.24B in FY2025 on higher revenue.",
    "The trailing P/E of 434.8x reflects near-zero reported earnings, not a rich valuation of them.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1327567/000132756726000023/panw-20260731.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001327567&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Palo Alto Networks sells security. It started with firewalls that inspect network traffic and has spent the last several years adding cloud security, secure remote access and security operations, much of it bought rather than built. The strategy is to sell a customer several products on one contract rather than compete for each budget line separately.",
      "The top line grew 24.5% to $11.48B. The operating margin was 6.1% and free cash flow was $4.11B, a 35.8% margin. The company produces a great deal of cash and very little accounting profit, and the latest quarter was $3.41B of revenue at a 5.0% operating margin.",
      "The share price is $313.84, for a market value of $256.09B, inside a 52-week band of $139.57 to $432.32. Trailing P/E is 434.8x and EV/Sales is 21.9x. The gap between those two multiples is the subject of this report.",
    ],
    quote:
      "Security budgets are the last thing an enterprise cuts and the first thing it consolidates. That is the argument for selling many products to one buyer.",
  },
  whatItDoes: {
    paragraphs: [
      "The portfolio has three centers. Network security is the original business: appliances and virtual firewalls that inspect traffic, sold with subscriptions for threat intelligence and advanced filtering. Cloud security covers the workloads and configurations that run outside the data center. Security operations covers detection and response, which is a software and data problem rather than an appliance problem.",
      "Customers are large enterprises, governments and service providers, sold through a direct sales force and a channel. The typical contract bundles several products and renews annually, which is why the recurring base matters more than the number of new logos.",
      "The company employs 8,014 people. That is a small headcount for $11.48B of revenue, and it is partly a consequence of buying products rather than building every one of them.",
    ],
    bullets: [
      {
        title: "Network security",
        detail:
          "Firewalls and the subscriptions attached to them. The installed base that funds everything else.",
      },
      {
        title: "Cloud security",
        detail:
          "Protection for workloads and configurations outside the data center. Sold into the same accounts as the firewalls.",
      },
      {
        title: "Security operations",
        detail:
          "Detection, response and analytics. The most software-like part of the portfolio and the most recently assembled.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "An appliance sale is the entry ticket. The margin is in the subscriptions that run on it: threat intelligence, URL filtering, advanced threat prevention and the cloud-delivered services that report back to a shared database of attacks. Gross margin of 70.4% is the blend of hardware and subscription revenue.",
      "Operating margin of 6.1% is what remains after sales commissions, research and the amortization of acquired technology. The gap to free cash flow is large because much of that cost is either non-cash or paid over time. Stock-based compensation and acquisition-related charges reduce reported profit without reducing the cash the business collects.",
      "The unit economics depend on the renewal. A customer that buys a firewall and renews three subscriptions for five years is worth far more than the initial sale, and the cost of acquiring that customer is paid once. That is why the company is willing to accept a low reported margin in exchange for a growing subscription base.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $5.50B in FY2022 to $11.48B in FY2026, roughly doubling in four years. The quarterly record is consistent: $2.29B, $2.54B, $2.47B, $2.59B, $3.00B and $3.41B, with the last two quarters showing the sharpest increase.",
      "Third-party estimates call for $14.17B this fiscal year and $16.23B the next, which implies growth of about 24% and then 15%. The deceleration in the second year is the important part of the estimate: it says the analysts expect the current pace to fade as the revenue base grows.",
      "The drivers are consolidation of security spending onto fewer vendors, the shift of workloads to cloud, and the federal and international businesses. The brake is that consolidation cuts both ways: the same argument that wins a bundle from a customer can lose a product line to a competitor's bundle.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual operating margin improved from -3.4% in FY2022 to 13.4% in FY2025, then fell to 6.1% in FY2026 even as revenue grew 24.5%. Operating income of $695.0M was well below the prior year's $1.24B.",
      "The quarterly record shows the same break: 9.6%, 19.6%, 12.5%, 15.3%, -6.1% and 5.0%. The negative quarter carried a 34.5% revenue increase, so the problem was not demand. Costs rose faster than revenue in that period, and the likely candidates are acquisition-related charges and sales spending ahead of renewals.",
      "Return on equity is 6.3% and return on invested capital is 11.3%. Both are modest for a company at this multiple, and both are computed on a balance sheet that includes a large amount of acquired goodwill.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $4.11B, a 35.8% margin. The annual record is unusually stable for a company reporting volatile operating profit: $1.79B, $2.63B, $3.10B, $3.47B and $4.11B. In FY2022, free cash flow was $1.79B while the company reported a net loss of $267.0M.",
      "That pattern is the clearest signal that the business is cash-generative and the income statement is carrying charges that do not consume cash. It also means the company can fund acquisitions from cash flow rather than debt.",
      "The balance sheet holds $4.54B of net cash. Net debt to EBITDA is negative, so the company has no refinancing problem and can keep buying products while the integration costs work through the income statement.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $313.84, Palo Alto trades at 434.8x trailing earnings, 162.3x EV/EBITDA, 21.9x sales and 62.3x free cash flow, with a 1.6% free-cash-flow yield. The EBITDA multiple is meaningless because EBITDA is close to zero; the earnings multiple is meaningless for the same reason.",
      "Of the four, the sales multiple and the free-cash-flow multiple are the only ones that describe the business. At 21.9x sales the company is priced as a high-growth software business. At 62.3x free cash flow it is priced as a very good one with a long runway.",
      "The valuation therefore rests on whether the subscription base keeps compounding at 20% or more while the acquired cost base is absorbed. Stockmonk does not publish a target price; the consensus below is third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "Fifty analysts cover the stock. The mean target is $400.00, the range runs from $190.00 to $525.00, and the split is ten strongest positive, 32 positive, 12 neutral and one negative.",
      "Their estimates are $3.31B of revenue next quarter with $0.97 of EPS, $14.17B this fiscal year with $4.18, and $16.23B next fiscal year with $2.15. The next-year per-share estimate is roughly half the current-year figure on higher revenue, and only 18 analysts contribute to it. That inconsistency needs checking before it is used for anything.",
      "Twelve neutral ratings out of 50 is a meaningful block. In a sector where analysts are usually either enthusiastic or silent, that is a sign the platform strategy is not universally accepted as margin-accretive.",
    ],
  },
  risks: {
    intro:
      "Palo Alto's risks are about execution on acquisitions and about whether a bundling strategy produces margin as well as revenue.",
    items: [
      {
        title: "Acquisition integration",
        severity: "High",
        detail:
          "Operating income fell while revenue rose. Buying products adds revenue quickly and costs slowly, and the costs eventually arrive.",
        watch:
          "Operating margin and the split between acquired and organic revenue.",
      },
      {
        title: "Platform competition",
        severity: "High",
        detail:
          "Every large security vendor is pursuing the same consolidation argument, and the largest infrastructure vendors can bundle security into contracts already signed.",
        watch:
          "Win rates on multi-product deals and average contract value.",
      },
      {
        title: "Reported profitability",
        severity: "Medium",
        detail:
          "The company has never produced a large GAAP operating margin. If free cash flow ever converges toward reported profit, the valuation has no anchor.",
        watch:
          "The gap between free cash flow and operating income.",
      },
      {
        title: "Customer budgets",
        severity: "Medium",
        detail:
          "Security spending is resilient but not immune. A slowdown in large-deal activity shows up in billings before revenue.",
        watch:
          "Remaining performance obligations and billings growth.",
      },
      {
        title: "Hardware supply",
        severity: "Low",
        detail:
          "Appliance revenue depends on component availability, and a shortage delays the subscription revenue attached to it.",
        watch:
          "Product revenue and inventory levels.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The recovery from 6.1% is the test of whether the acquisitions were worth their cost.",
      },
      {
        title: "Free cash flow",
        detail:
          "The 35.8% margin is the number the valuation actually rests on. Watch it hold through integration.",
      },
      {
        title: "Remaining performance obligations",
        detail:
          "Contracted revenue not yet recognized, and the best forward-looking measure the company discloses.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Palo Alto Networks is a security platform with $11.48B of revenue growing 24.5%, a 70.4% gross margin and $4.11B of free cash flow. It is a cash machine with a thin reported margin.",
      "The unresolved question is whether the low operating margin is a stage or a destination. Operating income fell from $1.24B to $695.0M in FY2026 while revenue grew, and one quarter ran a negative operating margin on 34.5% revenue growth. If those costs are integration charges, the margin recovers. If they are the cost of competing, it does not.",
      "The educational point is that a 434.8x P/E is not a valuation. When earnings are close to zero, the multiple is arithmetic noise, and the analyst has to switch to sales or cash flow to say anything meaningful.",
    ],
    questions: [
      "How much of the FY2026 cost increase was acquisition-related rather than organic?",
      "What share of revenue comes from customers buying three or more products?",
      "Does free cash flow hold at 35.8% of revenue as integration spending peaks?",
      "Why does the next-year EPS estimate fall below the current year?",
    ],
  },
};
