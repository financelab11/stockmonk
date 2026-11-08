import type { StockStory } from "./types";

export const FOUR: StockStory = {
  ticker: "FOUR",
  kicker: "Fintech & Crypto · Application Software",
  title: "Shift4's earnings look thin only until amortisation is added back",
  dek: "Revenue of $4.92B produces a 2.6% net margin but $624.0M of free cash flow. Acquired intangibles are charged against profit without consuming cash, which is why the P/E and the price-to-free-cash-flow tell different stories.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $4.92B, up 27.0%, though the latest quarter slowed to 12.1%.",
    "Operating income rose to $351.0M in FY2025 while net income fell to $147.0M, so the drag was below the operating line.",
    "Free cash flow of $624.0M is 12.7% of revenue, far above the 2.6% net margin.",
    "The P/E of 25.9x and EV/EBITDA of 2.2x cannot both describe the same business; the difference is amortisation and debt.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1794669/000179466926000010/four-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001794669&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Shift4 Payments provides integrated payment processing and the software that surrounds it. The company's technology sits inside the systems that hotels, restaurants, retailers, gaming operators and e-commerce businesses already use, so a merchant can take a payment without bolting on a separate terminal provider. Shift4 says its products support several hundred software partners and thousands of sales partners, which is the distribution model: reach merchants through the software they already run.",
      "The company is based in the United States, employs about 1,308 people, and has grown largely by acquisition. Revenue went from $1.37B in FY2021 to $4.18B in FY2025, with operating income moving from -$49.2M to +$351.0M. That combination — a large revenue base, a modest operating margin and a lot of acquired intangible assets — explains most of what looks odd in the numbers.",
      "At $43.96 the equity is worth $3.29B, well below the top of its 52-week range of $34.56 to $76.09. The shares have returned -34.2% over one year and -29.1% over five, which is unusual for a company that has quadrupled revenue in the same period. The market is pricing something other than growth.",
    ],
    quote:
      "Payments companies are judged on spread and volume. When they grow by acquisition, the income statement also carries the accounting for everything they bought.",
  },
  whatItDoes: {
    paragraphs: [
      "The core product is payment acceptance: a merchant takes a card, Shift4 authorises it, settles it, and keeps a small percentage of the transaction. Around that sit the software integrations that make the acceptance work inside a hotel's property management system, a restaurant's till, a stadium's concessions or a gaming floor's cage.",
      "That vertical focus is the differentiator. A generic terminal provider has to be configured for each industry; Shift4 starts from software the industry already uses. Hospitality and gaming are the strongest examples, because the payment flow is complicated and the cost of failure is high, which supports both stickiness and pricing.",
      "The company also sells hardware, gateways and business tools, and it has expanded internationally through acquisitions. Each acquired business brings its own merchant base, its own technology and its own intangible assets, which is why the balance sheet and the income statement carry more complexity than a single-product processor's.",
    ],
    bullets: [
      {
        title: "Payment spread",
        detail:
          "A percentage of each transaction after network and interchange costs. The largest revenue line and the thinnest margin per dollar.",
      },
      {
        title: "Software and services",
        detail:
          "Integrated products sold alongside payments. Higher margin and the reason merchants stay.",
      },
      {
        title: "Acquired portfolios",
        detail:
          "Businesses bought for their merchant bases and technology. They add revenue and amortisation in roughly equal measure.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The economics are volume times spread. A merchant processing a large amount through Shift4 pays a small percentage, of which the card networks and issuing banks take the majority. What remains is gross profit. That is why gross margin is 23.1%: the company is reporting the whole processing revenue and the network costs that come with it.",
      "On top of the spread sits software and services revenue, which carries a much better margin and grows with the number of products sold per merchant. The operating margin of 8.2% is the result of stacking that software gross profit on top of the processing spread and then paying for a large sales organisation and the corporate costs of an acquisitive group.",
      "The operating leverage comes from volume and product attach. Fixed costs — technology, compliance, corporate — do not scale with transactions, so each additional dollar of spread contributes disproportionately. The quarterly operating margin moving from 4.5% in Q1 FY2026 to 9.9% in Q3 FY2026 on a modest revenue increase is that leverage at work.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew 27.0% on a trailing basis, but the latest quarter grew 12.1%. That gap is the most important thing in the growth section: the trailing figure includes acquisitions that have now annualised, while the quarterly figure reflects the underlying pace. A company that grows by buying businesses reports a high trailing rate for a year after each deal and then reverts.",
      "The annual series shows the same pattern: $1.37B, $1.99B, $2.56B, $3.33B and $4.18B. Each step is large, and each step coincides with a period of acquisition activity. Organic growth is in there, but it cannot be separated from purchased growth using the consolidated statements alone.",
      "The durable drivers are software partner distribution, international expansion, and selling more products to existing merchants. What would slow it: a hospitality or gaming downturn, which hits the verticals where Shift4 is strongest; integration problems that cause acquired merchants to leave; and price competition on the spread as larger processors chase the same accounts.",
    ],
  },
  performance: {
    paragraphs: [
      "The operating record is improving. Operating income went from -$49.2M in FY2021 to $94.7M, $115.0M, $247.0M and $351.0M. Quarterly operating margins ran 8.6%, 9.8%, 10.8%, 4.5%, 7.3% and 9.9% across the last six quarters, with Q1 FY2026 the weak point.",
      "The net line does not follow. FY2025 net income was $147.0M, down from $295.0M in FY2024, even though operating income rose. Something below the operating line absorbed the difference, and the trailing net margin of 2.6% against an operating margin of 8.2% says it is a recurring feature rather than a one-off. Amortisation of acquired intangibles and interest on acquisition debt are the usual candidates in a business built this way.",
      "Return on equity is 8.0% while return on invested capital is 94.2%. The gap is the signature of a company whose assets are largely intangible and whose equity is small relative to profit. A high ROIC here reflects a low invested-capital base, not necessarily a wide moat.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is $624.0M on a trailing basis, a 12.7% margin, and the annual series has been strongly positive since FY2022: $267.4M, $332.0M, $493.0M and $624.0M. That is the clearest evidence that the low net margin is an accounting outcome rather than a cash problem. Amortisation reduces reported profit and does not reduce cash.",
      "The balance sheet holds $1.24B of net cash and a net-debt-to-EBITDA ratio of -1.3x, so cash exceeds debt. For an acquisitive company that matters: it means the next deal can be funded without straining the balance sheet, and it removes the refinancing risk that would otherwise sit alongside the acquisition strategy.",
      "The caveat is that free cash flow in an acquisitive business includes the benefit of not paying for the acquisitions in that year. A year with a large purchase will show a financing outflow that does not appear in operating cash flow. The cash conversion is real; the growth it funds may not be repeatable without more deals.",
    ],
  },
  valuation: {
    paragraphs: [
      "Four multiples, four different stories. At $43.96 the equity is worth $3.29B. The P/E is 25.9x, EV/EBITDA is 2.2x, EV/sales is 0.4x and price-to-free-cash-flow is 5.3x. Those cannot all describe the same business, and the reason is the gap between net income, EBITDA and free cash flow.",
      "If EBITDA is large relative to net income, the difference is depreciation, amortisation, interest and tax. In an acquisitive processor, amortisation of customer relationships and acquired technology is typically the biggest of those, and it is a non-cash charge. That is why EV/EBITDA of 2.2x and price-to-free-cash-flow of 5.3x both look cheap while the P/E of 25.9x looks ordinary. The P/E is measuring profit after charges that do not consume cash; the other two are measuring the cash.",
      "The peer set shows how differently payments companies are treated. Toast trades at 2.6x sales on a 7.2% operating margin. PayPal at 1.5x sales on 17.0%. Shift4 at 0.4x sales is the cheapest of the three on revenue, which reflects both its lower margin and the market's doubt about acquisitive growth.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-two analysts contribute to the attributed third-party consensus, with a mean target of $50.18 and a range of $38.00 to $94.00. A range that wide — with the top more than double the bottom — usually signals disagreement about how to value the acquisitions rather than about the core processing business.",
      "Current-year estimates are $5.07B of revenue and EPS of $5.11, rising to $5.71B and $5.79 next year. Twenty-five and twenty-four analysts contribute to those annual figures. The gap between the $5.11 estimate and the trailing EPS of -$0.01 is stark, and it is consistent with the idea that the trailing figure is depressed by non-cash charges and one-off items.",
      "Those are third-party forecasts, not a Stockmonk view. What they imply is a business that analysts expect to earn several dollars per share once the accounting settles, on revenue growing in the low teens.",
    ],
  },
  risks: {
    intro:
      "Shift4's risks come from two directions: the payments spread it earns, and the acquisition programme that produced its scale.",
    items: [
      {
        title: "Acquisition integration",
        severity: "High",
        detail:
          "Growth has come from buying businesses. Each deal brings technology, staff and merchant relationships that have to be kept, and integration failures show up as churn a year later.",
        watch:
          "Organic revenue growth disclosure, retention of acquired merchant bases, and any goodwill impairment.",
      },
      {
        title: "Spread compression",
        severity: "High",
        detail:
          "The gross margin of 23.1% is a spread over network costs. Larger processors can undercut on price to win accounts.",
        watch:
          "Gross margin and revenue as a percentage of processed volume.",
      },
      {
        title: "Vertical concentration",
        severity: "Medium",
        detail:
          "Hospitality, gaming and restaurants are cyclical. A downturn in travel or discretionary spending hits the merchant base directly.",
        watch:
          "Volume growth by vertical where disclosed, and the pace of new merchant signings.",
      },
      {
        title: "Interest and leverage",
        severity: "Medium",
        detail:
          "The net cash position is comfortable today, but acquisition debt has been part of the strategy and the net line is already sensitive to interest.",
        watch:
          "Interest expense, debt maturities and the net-debt-to-EBITDA ratio after any new deal.",
      },
      {
        title: "Growth quality",
        severity: "Medium",
        detail:
          "Trailing growth of 27.0% against a latest quarter of 12.1% suggests a meaningful part of the reported rate is purchased rather than organic.",
        watch:
          "The gap between reported and organic growth each quarter.",
      },
      {
        title: "Accounting complexity",
        severity: "Low",
        detail:
          "Amortisation, acquisition costs and adjustments make the headline earnings hard to compare across years.",
        watch:
          "The reconciliation from operating income to net income and the trend in amortisation.",
      },
    ],
    watchlist: [
      {
        title: "Organic growth",
        detail:
          "The number that separates the underlying business from the acquisition programme.",
      },
      {
        title: "Gross margin",
        detail:
          "The spread over network costs is the core unit economic and the first place price competition appears.",
      },
      {
        title: "Amortisation and interest",
        detail:
          "The two lines that explain why net income is so much lower than operating income.",
      },
      {
        title: "Net cash",
        detail:
          "At $1.24B it funds the next acquisition; a fall would change the story.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Shift4 is an integrated payments company with $4.92B of trailing revenue, an 8.2% operating margin and $624.0M of free cash flow. It has grown revenue every year in the series and turned a $49.2M operating loss in FY2021 into a $351.0M profit in FY2025, largely by acquiring businesses and integrating them into its vertical software channel.",
      "The apparent contradiction between a 25.9x P/E and a 2.2x EV/EBITDA is the most instructive part of the file. It resolves once amortisation of acquired intangibles and interest are separated from cash flow, and it explains why the free cash flow yield is 18.9% while the net margin is 2.6%.",
      "The real question is whether the growth is repeatable without more acquisitions. The latest quarter's 12.1% growth against a 27.0% trailing rate is the first piece of evidence, and it points to a business that needs to prove it can grow the merchant base it already owns.",
    ],
    questions: [
      "What was organic revenue growth in the latest quarter, excluding acquisitions?",
      "How much of the free cash flow comes from amortisation add-backs rather than operating improvement?",
      "What is the retention rate on merchant bases acquired in the last three years?",
      "How much acquisition debt matures in the next three years?",
    ],
  },
};
