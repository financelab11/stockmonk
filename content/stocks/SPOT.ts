import type { StockStory } from "./types";

export const SPOT: StockStory = {
  ticker: "SPOT",
  kicker: "Audio · Music and podcast streaming",
  title: "Spotify keeps a third of each euro and is finally keeping some profit",
  dek: "A 32.0% gross margin leaves little room after rights holders, marketing and product development. A 12.8% operating margin is the first real evidence the model can pay.",
  readingMinutes: 9,
  takeaways: [
    "Revenue $19.4B, up 14.3%, with a 32.0% gross margin.",
    "Operating margin reached 12.8% after operating losses in FY2022 and FY2023.",
    "Free cash flow is $2.95B, and the balance sheet holds $4.4B of net cash.",
    "The shares trade at 49.7x earnings and 46.1x EV/EBITDA, the richest multiple in this peer group.",
  ],
  filingUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001639920&type=10-K&dateb=&owner=include&count=40",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001639920&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Spotify sells two versions of the same catalogue. Premium is a paid subscription with no advertising, offline listening and full control. The ad-supported service is free and earns money from advertisers between tracks. Neither product owns the music: the company licenses it, which is why a large share of every euro collected leaves the building before Spotify pays for anything of its own.",
      "Trailing revenue was $19.39B, up 14.3%, and operating income was $2.48B in FY2025 for a 12.8% margin. The shares closed at $603.01, inside a 52-week range of $405.00 to $668.50, for a market capitalisation of $124.1B, or 49.7x trailing earnings.",
      "Whether a 32.0% gross margin can support a durable double-digit operating margin once marketing and product spend are paid is the open question. Podcasts, audiobooks and advertising are the candidates for raising the ceiling. The stock is up 110.2% over five years but down 2.5% over one, so the market has already changed its mind once about how fast this would happen.",
    ],
    quote:
      "A streaming service that licenses its catalogue is a retailer of other people's goods. The profit is whatever is left after the supplier is paid.",
  },
  whatItDoes: {
    paragraphs: [
      "Premium gives subscribers unlimited streaming, downloads for offline use, and no ad breaks. The ad-supported tier gives free on-demand listening in exchange for advertising. Both run on the same catalogue of music, podcasts and audiobooks, sold in 184 countries and territories. The company's own description cites 406 million monthly active users and 180 million premium subscribers at the end of 2021, the last figures in this brief.",
      "The service is two-sided. Listeners choose what to play; labels, distributors and podcast producers supply it; advertisers pay for the attention of the free tier. That structure means Spotify negotiates with a concentrated group of rights holders on one side and a fragmented audience on the other, which is not a strong bargaining position. The company employs 8,359 people.",
    ],
    bullets: [
      {
        title: "Premium",
        detail:
          "Monthly subscription, no advertising, offline listening. The larger and more predictable revenue line.",
      },
      {
        title: "Ad-supported",
        detail:
          "Free listening paid for by advertisers. Lower revenue per listener, but it feeds the funnel to Premium.",
      },
      {
        title: "Rights costs",
        detail:
          "Royalties to labels, publishers and podcast producers. The largest cost and the reason gross margin is 32.0%.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin is 32.0%, and almost all of the cost of revenue is royalties. That single fact separates Spotify from a software business. Every additional listener adds royalty cost, so scale does not automatically improve the gross margin the way it does when a product is copied at zero cost. The mix of premium and ad-supported listening, and the deals struck with rights holders, decide how much is left.",
      "Operating margin is 12.8% because research, sales and marketing, and administration are spread over a much larger revenue base than they were three years ago. In FY2022 and FY2023 the same cost base produced operating losses. The improvement since then is a combination of revenue growth and cost discipline, not a change in the royalty rate.",
      "Advertising is the incremental piece. It earns more per listener than the free tier costs to serve only when the inventory is sold at a decent price. Podcasts and audiobooks complicate that: they add content Spotify often owns or commissions, which raises the fixed cost but can improve the margin because the company is not paying a label for every play.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $11.43B in FY2021 to $19.39B in FY2025, with growth slowing to 14.3% in the latest year as the base grew. There are no quarterly figures in this dataset, so the intra-year pattern cannot be checked.",
      "The attributed consensus expects $19.51B this fiscal year and $22.41B next, with EPS of $11.86 rising to $15.24. The near-term revenue estimate implies almost no growth against FY2025, followed by a return to mid-teens growth. That is an unusual shape and worth questioning rather than accepting.",
      "The realistic drivers are price increases, plan mix, advertising, audiobooks and expansion in markets where paid conversion is still low. The constraint is the labels: any attempt to raise the gross margin runs into the renewal of the deals that set it.",
    ],
  },
  performance: {
    paragraphs: [
      "The operating record is the whole story. Operating income was $111.1M in FY2021, then -$693.1M in FY2022 and -$482.6M in FY2023, before turning to $1.48B in FY2024 and $2.48B in FY2025. That is a swing of almost $3B in two years, and it came from gross margin improvement plus cost control.",
      "Return on equity is 25.7%. Return on invested capital is shown as 0.0%, which reflects how the measure is calculated here rather than an economic result; with $4.4B of net cash and few fixed assets, the equity return is the more useful figure.",
      "Net margin is 12.9%, essentially the same as the operating margin, because net cash means interest income rather than interest expense. Diluted EPS was $12.86 on a trailing basis.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $828.9M in FY2021, -$337.6M in FY2022, $245.7M in FY2023, $2.35B in FY2024 and $2.95B in FY2025, a 15.2% margin on trailing revenue. Cash turned positive again in FY2023, a year before operating profit did, which is typical when subscription cash arrives monthly while some costs are settled later.",
      "The balance sheet holds $4.42B of net cash. There is no meaningful debt, so the company can fund content and product investment from its own resources and does not depend on refinancing.",
      "At 42.0x free cash flow and a 2.4% free-cash-flow yield, the shares are priced for the cash flow to grow substantially. That is consistent with a company that has only just started converting revenue into cash.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $603.01 the shares trade at 49.7x trailing earnings, 46.1x EV/EBITDA, 6.2x sales and 42.0x free cash flow. Those multiples assume the operating margin keeps climbing towards the high teens and revenue compounds in the low double digits.",
      "The peer table shows how much is being paid for that assumption. Netflix trades at 16.8x EV/EBITDA with a 31.3% operating margin, Disney at 10.3x, Comcast at 5.0x, Meta at 14.9x and Alphabet at 18.6x. Spotify's 46.1x is more than double Netflix's, on a margin less than half as large.",
      "On the covered universe the shares rank in the 13th percentile for cheapness on EV/EBITDA, in other words among the most expensive. The multiple is a bet on margin expansion, not a reflection of current profit. No target price is offered here; the multiple is the thing to test.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-eight analysts contribute to the attributed consensus, with a mean target of $643.48 and a range of $456.77 to $745.99. The range is wide, and even the low end implies a higher value than the current price.",
      "Estimates call for $5.23B of revenue next quarter and $19.51B for the current fiscal year, with EPS of $11.86. The following year is put at $22.41B and $15.24. EPS is expected to grow about 28% on 15% revenue growth, so the forecasts depend on margin expansion continuing.",
      "That is the assumption to examine. If the margin stalls at 12.8%, the earnings path is much lower and the 49.7x multiple has nothing to stand on.",
    ],
  },
  risks: {
    intro:
      "Spotify's risks concentrate in the licensing relationship and in the price of its own shares. The balance sheet is strong, so the pressure would arrive through the gross margin first.",
    items: [
      {
        title: "Royalty renegotiation",
        severity: "High",
        detail:
          "Labels and publishers set the largest cost line. A higher royalty rate takes a fixed share of revenue and cannot be offset quickly.",
        watch:
          "Gross margin and the terms of new licensing agreements.",
      },
      {
        title: "Churn after price increases",
        severity: "High",
        detail:
          "Margin improvement has relied partly on raising prices. Subscribers who joined for a cheap plan may leave when it becomes expensive.",
        watch:
          "Premium subscriber growth and monthly churn.",
      },
      {
        title: "Advertising cycle",
        severity: "Medium",
        detail:
          "The free tier depends on ad budgets. A weaker market lowers revenue per free listener while the royalty cost stays.",
        watch:
          "Ad-supported revenue and the price paid per impression.",
      },
      {
        title: "Competition for listening time",
        severity: "Medium",
        detail:
          "Video platforms, radio and other audio services compete for the same hours. A listener can switch apps at no cost.",
        watch:
          "Engagement and the growth of monthly active users.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "At 46.1x EV/EBITDA the shares need years of margin expansion. A pause in that progress would compress the multiple and the earnings together.",
        watch:
          "Forward operating margin estimates and the multiple applied to them.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "The single number that decides whether the model works, because royalties sit in cost of revenue.",
      },
      {
        title: "Premium subscribers",
        detail:
          "Revenue per subscriber times the base is the subscription business; churn is the leak.",
      },
      {
        title: "Advertising revenue",
        detail:
          "The free tier only adds profit if ad revenue per listener exceeds the cost of serving them.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Spotify has crossed from losses to a 12.8% operating margin and $2.95B of free cash flow. The balance sheet holds $4.4B of net cash, and revenue is growing in the mid-teens.",
      "The unresolved issue is how much of that margin is structural. A 32.0% gross margin is set by rights holders, and the operating margin depends on keeping marketing and product spend from growing as fast as revenue.",
      "The valuation is the second issue. At 46.1x EV/EBITDA the shares already assume the margin story works, so the reader's job is to test the assumption rather than to admire the growth.",
    ],
    questions: [
      "What share of each subscription euro goes to rights holders, and is that share falling?",
      "How much of the margin improvement came from price increases versus cost cuts?",
      "Does advertising earn more per free listener than that listener costs to serve?",
      "What would stop the operating margin from reaching the high teens?",
    ],
  },
};
