import type { StockStory } from "./types";

export const LOW: StockStory = {
  ticker: "LOW",
  kicker: "Retail · Home improvement and trade supply",
  title: "Lowe's is the smaller home-improvement chain with the larger debt load",
  dek: "Revenue of $90.4B produces an 11.4% operating margin against $38.6B of net debt. The shares are cheaper than the market leader's for reasons the balance sheet explains.",
  readingMinutes: 9,
  takeaways: [
    "Revenue $90.4B, up 8.2%, after falling from $97.1B in FY2023.",
    "Operating margin 11.4%, roughly a point below the larger rival.",
    "Free cash flow $7.0B, 7.7% of revenue, and net debt is 3.0x EBITDA.",
    "The shares trade at 18.9x earnings and 12.9x EV/EBITDA.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/60667/000006066726000029/low-20260130.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000060667&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "The shelves hold the same things as the larger rival's: lumber, appliances, paint, flooring, garden supplies and tools, with installation services attached. Lowe's stores form the second-largest home-improvement network in the United States. That position gives it national scale in purchasing, but not the scale of the leader, and the difference shows up in the margin.",
      "Trailing revenue was $90.43B, up 8.2%, and the July quarter produced $25.96B at a 13.7% operating margin with $4.27 of diluted EPS. The shares closed at $224.55, inside a 52-week range of $178.45 to $293.06, for a market capitalisation of $125.8B.",
      "Whether the company can close the gap with the leader while carrying more debt is the issue that decides the equity. Revenue fell from $97.06B in FY2023 to $83.67B in FY2025 before recovering to $86.29B, a level shift the annual table does not explain, so comparisons across that break deserve care.",
    ],
    quote:
      "Two chains, the same categories, the same customer. The difference between them is purchasing scale, sales per store and how much debt sits underneath.",
  },
  whatItDoes: {
    paragraphs: [
      "Stores organise the assortment by project: kitchens and appliances, paint and flooring, plumbing, electrical, tools, outdoor and garden. Installation services extend the sale from the product to the job. The store is still the core channel, supported by delivery and a website that mostly drives trips rather than replacing them.",
      "The customer mix is the strategic variable. Professional contractors buy more often and in larger tickets, and they are less sensitive to a weak housing market than homeowners planning a cosmetic renovation. Lowe's has a smaller professional business than the leader, which is both a structural disadvantage today and the clearest source of growth if execution improves.",
    ],
    bullets: [
      {
        title: "Do-it-yourself",
        detail:
          "Homeowners buying for a project. Seasonal, promotion-sensitive and exposed to housing turnover.",
      },
      {
        title: "Professional",
        detail:
          "Contractors and trades. Bigger tickets, repeat purchases, more demand for delivery and credit.",
      },
      {
        title: "Installed services",
        detail:
          "Kitchens, flooring and roofing sold with installation. Higher ticket, more coordination, different margin.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Merchandise is sold at a 33.1% gross margin, and operating costs take it down to 11.4%. The gap to the leader is not a pricing decision; it comes from lower sales per store and less purchasing leverage, which spread the same store footprint over less revenue.",
      "The interesting part of the record is what happened during the revenue decline. Revenue fell from $97.06B in FY2023 to $83.67B in FY2025, yet operating income rose from $10.16B to $10.47B and the operating margin improved from 10.5% to 12.5%. Cost reduction did the work that volume could not. The limit of that approach is obvious: there is only so much cost to take out, and the next improvement has to come from sales.",
      "Capital intensity is low because stores are largely leased and inventory turns. That is why a 11.4% operating margin produces a 28.4% return on invested capital. The debt sits above that operating business, and it is serviced from the same cash flow.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue was $96.25B in FY2022, $83.67B in FY2025 and $86.29B in FY2026, and the latest quarter grew 8.3%. The five-year compound rate is low because of the level change in the middle, not because demand collapsed in the most recent year.",
      "The attributed consensus expects $92.13B this fiscal year and $94.37B next, with EPS of $12.30 and $12.99. That is about 7% then 2% revenue growth, with earnings growing faster through margin recovery and buybacks.",
      "The drivers are professional penetration, online and delivery, installed services and a recovery in big-ticket projects. The brake is the same as the leader's: housing turnover and financing costs decide when homeowners start renovating again.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin was 12.6% in FY2022, 10.5% in FY2023, 13.4% in FY2024, 12.5% in FY2025 and 11.8% in FY2026, with 11.4% on a trailing basis. The pattern is a squeeze, a recovery through cost cuts, then another drift lower as the sales base stayed weak.",
      "Quarterly margins run from 8.3% in the January quarter to 14.5% in the July quarter. The seasonal swing is wider than the annual change, which is why a single quarter should not be used to judge the trend.",
      "Return on equity is -67.0% because years of buybacks have left equity negative. The figure is not a measure of failure, but it does mean the balance sheet has no equity cushion. Return on invested capital of 28.4% is the return measure that matters, and it is higher than the leader's despite the lower margin.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $8.26B in FY2022, $6.76B in FY2023, $6.18B in FY2024, $7.70B in FY2025 and $7.65B in FY2026, or $7.00B trailing at a 7.7% margin. Cash generation is roughly stable, which is what a mature retailer with modest capital spending should produce.",
      "Net debt is $38.57B, or 3.0x EBITDA, the highest leverage in this peer group. Interest is a fixed claim that takes priority over buybacks and store investment, and it is why the equity trades at 18.0x free cash flow rather than at the earnings multiple.",
      "The dividend consumes part of the remaining cash at a 2.1% yield. The rest is available for debt reduction or repurchases, and the choice between them is the main capital-allocation question.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $224.55 the shares trade at 18.9x trailing earnings, 12.9x EV/EBITDA, 1.8x sales and 18.0x free cash flow, for a 5.6% free-cash-flow yield. The earnings multiple is lower than the leader's 29.3x, and the EBITDA multiple is lower too, at 12.9x against 16.1x.",
      "That discount is the market pricing three things: a lower operating margin, higher leverage and a smaller professional business. None of them is hidden, so the shares are not mispriced by accident; the question is whether the gap should be that wide.",
      "Within the covered universe the shares rank in the 73rd percentile for cheapness on EV/EBITDA. Stockmonk publishes no target price for the shares.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-three analysts contribute to the attributed consensus, with a mean target of $251.97 and a range of $191.00 to $300.00. The low end is below the current price and the high end about a third above it.",
      "Estimates call for $22.34B of revenue next quarter and $92.13B for the current fiscal year, with EPS of $12.30. The following year is put at $94.37B and $12.99. The forecasts assume a modest sales recovery and a stable margin rather than a return to the FY2024 peak.",
      "For a leveraged retailer, the estimate that matters is free cash flow rather than EPS. A buyback can lift earnings per share while cash flow is flat, and the debt is paid in cash.",
    ],
  },
  risks: {
    intro:
      "Lowe's carries the most leverage in its peer group and sells into the most cyclical part of the consumer economy. The risks below are ordered by how directly they reach the cash flow.",
    items: [
      {
        title: "Housing and renovation demand",
        severity: "High",
        detail:
          "Big-ticket projects are financed or funded from home equity. High rates delay them, and the lost sale is rarely recovered later.",
        watch:
          "Comparable sales and the count of big-ticket transactions.",
      },
      {
        title: "Leverage",
        severity: "High",
        detail:
          "$38.6B of net debt at 3.0x EBITDA leaves little room if cash flow falls. Refinancing costs flow straight to the equity.",
        watch:
          "Net debt to EBITDA, interest expense and maturities.",
      },
      {
        title: "Professional execution",
        severity: "Medium",
        detail:
          "The growth plan depends on winning contractors from a larger rival. That requires delivery capacity and reliability, not just price.",
        watch:
          "Professional sales growth and investment in delivery.",
      },
      {
        title: "Margin sustainability",
        severity: "Medium",
        detail:
          "Much of the recent margin improvement came from cost cuts during a revenue decline. That lever is finite.",
        watch:
          "Gross margin and operating expense versus sales.",
      },
      {
        title: "Competitive pricing",
        severity: "Medium",
        detail:
          "A smaller chain has to match promotional prices without the same purchasing scale, which compresses margin on every matched item.",
        watch:
          "Price gaps against the leader and promotional intensity.",
      },
    ],
    watchlist: [
      {
        title: "Comparable sales",
        detail:
          "The test of whether the recent revenue recovery is real or a rebound from a low base.",
      },
      {
        title: "Debt reduction",
        detail:
          "Lower leverage would narrow the discount to the leader faster than a margin improvement would.",
      },
      {
        title: "Gross margin",
        detail:
          "Where purchasing scale and promotional pressure show up first.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Lowe's is a $90.4B home-improvement retailer earning an 11.4% operating margin and a 28.4% return on invested capital, with $7.0B of free cash flow and $38.6B of net debt.",
      "The cost cuts that held profit steady during the revenue decline were real, but they cannot be repeated indefinitely. Future improvement has to come from sales per store, professional customers and a housing recovery.",
      "The valuation reflects the constraints rather than ignoring them. At 12.9x EV/EBITDA the shares are cheaper than the leader's, and the leverage explains most of the difference.",
    ],
    questions: [
      "How much of the margin recovery came from cost cuts rather than sales?",
      "What is the interest cost on the debt, and when does it mature?",
      "Is the professional business growing faster than the do-it-yourself base?",
      "Can free cash flow fund the dividend and debt reduction at the same time?",
    ],
  },
};
