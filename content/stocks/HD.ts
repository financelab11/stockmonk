import type { StockStory } from "./types";

export const HD: StockStory = {
  ticker: "HD",
  kicker: "Retail · Home improvement",
  title: "Home Depot sells the repairs people cannot postpone",
  dek: "Revenue is $169.2B, but the operating margin has fallen from 15.2% to 12.4% in five years. The shares still trade at 29.3x earnings because the cash flow is dependable.",
  readingMinutes: 9,
  takeaways: [
    "Revenue $169.2B, up 2.5%, after several years of slow growth.",
    "Operating margin fell from 15.2% in FY2022 to 12.4% on a trailing basis.",
    "Free cash flow $15.1B, 8.9% of revenue, with $54.3B of net debt.",
    "The dividend yield is 2.7% and the shares trade at 16.1x EV/EBITDA.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/354950/000162828026019436/hd-20260201.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000354950&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Home Depot runs large stores that sell building materials, tools, appliances, paint, garden supplies and decor, plus installation services for kitchens, floors and roofs. It serves two customers: homeowners fixing something themselves and professional contractors buying for a job. The repair and remodel market is less discretionary than it appears, because a broken water heater or a leaking roof does not wait for consumer confidence to improve.",
      "Trailing revenue was $169.18B, up 2.5%, and the July quarter produced $47.86B at a 14.3% operating margin with $4.79 of diluted EPS. The shares closed at $343.47, mid-way through a 52-week range of $277.15 to $397.63, for a market capitalisation of $341.9B.",
      "Whether the margin decline is a cyclical trough caused by soft big-ticket demand, or a permanent cost of doing business with higher wages and freight, is the issue that decides the earnings. The shares trade at 29.3x earnings and 16.1x EV/EBITDA, which is not the price of a retailer the market expects to shrink.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "A store carries the categories a house needs: lumber and building materials, plumbing and electrical, tools, paint, appliances, flooring, kitchens and garden. Around the merchandise sit services such as installation and delivery, which earn fees and lock in the project rather than just the part. Stores are the distribution network; there are no signs of a shift away from them.",
      "The professional customer is the important one. A contractor buys more often, in larger tickets, and values availability and delivery over the lowest shelf price. The do-it-yourself customer is more seasonal and more price-sensitive, and is the one who postpones a project when rates rise. The dataset does not break revenue between the two, which is a gap worth knowing about.",
    ],
    bullets: [
      {
        title: "Professional contractors",
        detail:
          "Repeat, high-volume buyers. They value stock availability, delivery and trade credit more than promotions.",
      },
      {
        title: "Do-it-yourself",
        detail:
          "Seasonal, project-driven and sensitive to housing activity and financing costs.",
      },
      {
        title: "Services",
        detail:
          "Installation and delivery attached to merchandise. Adds revenue without another store.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The retail arithmetic is simple. Merchandise is sold at a 33.2% gross margin, and store labour, rent, distribution and advertising consume about twenty points of that, leaving a 12.4% operating margin. The return on capital comes from turnover rather than mark-up: inventory moves through the store several times a year, so a modest margin on each sale produces a 25.0% return on invested capital.",
      "The fixed-cost mechanism explains the margin history. A store's rent, staff and systems are largely fixed, so additional sales drop through at a high rate. When sales per store stall, the same costs are spread over less revenue and the margin falls. Between FY2022 and FY2026, revenue rose 9.0% while operating income fell from $23.04B to $20.89B.",
      "Mix matters within that. Lumber and building materials move revenue with commodity prices and carry thin margins; appliances and decor carry more; installation services carry fees rather than product margin. A shift in the mix can move the consolidated margin without any change in pricing power.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $151.16B in FY2022 to $164.68B in FY2026, roughly 2% a year, and the latest quarter grew 5.7%. That is a business growing with inflation and store productivity rather than with new space.",
      "The attributed consensus expects $171.55B this fiscal year and $177.15B next, with EPS of $15.02 and $15.95. That implies about 4% then 3% revenue growth, with earnings growing a little faster than sales through buybacks and cost control.",
      "The drivers are housing turnover, home equity, storm repair, professional penetration and store productivity. The brake is the mortgage rate: when moving house becomes expensive, people renovate less, and big-ticket projects are the first to be deferred.",
    ],
  },
  performance: {
    paragraphs: [
      "The margin trend is the most important fact in the file. Operating margin was 15.2% in FY2022, 15.3% in FY2023, 14.2% in FY2024, 13.5% in FY2025 and 12.7% in FY2026. The trailing figure is 12.4%. A retailer that keeps a tenth of a point here and there is normal; four years of decline is a change in the cost structure.",
      "Quarterly margins run from 10.1% in the January quarter to 14.5% in the July quarter, which is the spring and summer selling season. The seasonal pattern is stable, so the annual decline is not a timing artifact.",
      "Return on equity is 96.2%, a figure produced by a small equity base after years of buybacks rather than by exceptional profitability. Return on invested capital of 25.0% is the better measure, and it remains high for a retailer. Diluted EPS was $14.29 on a trailing basis.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $14.01B in FY2022, $11.50B in FY2023, $17.95B in FY2024, $16.32B in FY2025 and $12.65B in FY2026, or $15.10B trailing at an 8.9% margin. The swings come mostly from inventory and payables rather than from capital expenditure, which is modest for a chain that owns and leases stores.",
      "Net debt is $54.33B, or 2.2x EBITDA. Interest is a real claim on the cash flow, and the dividend takes another slice at a 2.7% yield. What remains funds buybacks, which is how the equity base stays small and the return on equity stays near 96%.",
      "That structure works while cash flow is stable. It is less comfortable if operating income keeps falling, because the debt and the dividend are fixed commitments and the buyback is the only flexible item.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $343.47 the shares trade at 29.3x trailing earnings, 16.1x EV/EBITDA, 2.3x sales and 22.6x free cash flow, for a 4.4% free-cash-flow yield. The multiple assumes margins stabilise and housing activity recovers from a slow period.",
      "The peer table is instructive. Lowe's trades at 18.9x earnings and 12.9x EV/EBITDA with an 11.4% operating margin; TJX at 24.7x and 15.6x; McDonald's at 17.3x EBITDA; Booking at 10.6x. Home Depot carries the highest EBITDA multiple in the group despite a margin that has been falling, so the premium is being paid for scale and consistency, not for superior returns.",
      "Within the covered universe the shares rank in the 61st percentile for cheapness on EV/EBITDA. No target price is published alongside this report.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-two analysts contribute to the attributed consensus, with a mean target of $379.00 and a range of $310.00 to $425.00. The low end is below the current price and the high end about a quarter above it.",
      "Estimates call for $42.77B of revenue next quarter and $171.55B for the current fiscal year, with EPS of $15.02. The following year is put at $177.15B and $15.95. The forecasts assume a modest recovery in demand rather than a return to the growth of the pandemic years.",
      "The estimate that matters most is not revenue but margin. A retailer can hit a revenue forecast and miss earnings if gross margin falls another point, and the recent record shows that risk is live.",
    ],
  },
  risks: {
    intro:
      "Home Depot's risks are cyclical demand, cost pressure and a balance sheet that has been used to shrink the equity. The first two decide the earnings; the third decides how much of the earnings belongs to shareholders.",
    items: [
      {
        title: "Housing activity",
        severity: "High",
        detail:
          "Renovation follows housing turnover and home equity. High financing costs delay large projects, which are the most profitable tickets.",
        watch:
          "Comparable sales and the number of big-ticket transactions.",
      },
      {
        title: "Wage and freight costs",
        severity: "High",
        detail:
          "Store labour and distribution are the largest operating costs. When they rise faster than sales, the margin falls even with stable gross margin.",
        watch:
          "Operating expense as a share of sales and gross margin.",
      },
      {
        title: "Professional competition",
        severity: "Medium",
        detail:
          "Serving contractors requires delivery capacity and trade credit. Under-investing cedes the more resilient customer to specialists.",
        watch:
          "Professional sales growth and delivery investment.",
      },
      {
        title: "Inventory and shrink",
        severity: "Medium",
        detail:
          "A store-based retailer carries seasonal and bulky inventory. Slow sales turn into markdowns and higher shrink.",
        watch:
          "Inventory turns and the markdown rate.",
      },
      {
        title: "Leverage and buybacks",
        severity: "Medium",
        detail:
          "$54.3B of net debt and a large buyback have left little equity. That magnifies returns while earnings grow and magnifies losses when they fall.",
        watch:
          "Net debt to EBITDA, interest expense and the pace of repurchases.",
      },
    ],
    watchlist: [
      {
        title: "Comparable sales",
        detail:
          "Traffic and ticket size separately; a rising ticket can hide falling visits.",
      },
      {
        title: "Gross margin",
        detail:
          "The first place cost pressure appears, and the input to every earnings estimate.",
      },
      {
        title: "Professional sales",
        detail:
          "The more stable half of demand and the part that supports the valuation premium.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Home Depot is the largest home-improvement retailer, with $169.2B of revenue, a 12.4% operating margin and $15.1B of free cash flow. It earns a 25.0% return on invested capital and carries $54.3B of net debt.",
      "The margin is roughly three points lower than it was four years ago, and the explanation matters. If the cause is soft big-ticket demand, the margin should recover with housing activity. If the cause is permanently higher labour and distribution costs, the current earnings base is the new normal.",
      "The valuation already leans towards recovery. At 16.1x EV/EBITDA the shares cost more than Lowe's at 12.9x, even though both sell the same categories to the same customer.",
    ],
    questions: [
      "Is the margin decline cyclical or structural?",
      "How much of revenue growth came from price rather than transactions?",
      "What share of sales goes to professional contractors, and is it rising?",
      "Can free cash flow cover the dividend and the debt if operating income falls again?",
    ],
  },
};
