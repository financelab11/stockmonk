import type { StockStory } from "./types";

export const PINS: StockStory = {
  ticker: "PINS",
  kicker: "Internet · Visual discovery and advertising",
  title: "Pinterest has a 79% gross margin and almost no operating margin",
  dek: "People come to plan purchases, which should be valuable to advertisers. Yet the company converts only 4.2% of $4.7B of revenue into operating profit.",
  readingMinutes: 9,
  takeaways: [
    "Revenue $4.7B, up 15.4%, with a 79.0% gross margin.",
    "Operating margin is 4.2% because sales, research and administration absorb the rest.",
    "Free cash flow is $1.26B, 27.0% of revenue, well above reported operating profit.",
    "The shares trade at 2.2x sales but 61.0x earnings, because the earnings base is tiny.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1506293/000150629326000021/pins-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001506293&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Pinterest is a visual planning tool. Users save images into boards around a project, a kitchen, a wardrobe, a wedding, and the service learns what they intend to buy. That intent is what the company sells. Someone assembling a shopping list is a different audience from someone scrolling for entertainment, and advertisers pay for the difference.",
      "Trailing revenue was $4.68B, up 15.4%, and the September quarter produced $1.17B at a 2.6% operating margin. The shares closed at $18.96, inside a 52-week range of $13.84 to $27.96, valuing the company at $10.9B. With 2,545 employees, it is small for an advertising platform.",
      "Whether the thin margin is a stage of investment or the shape of the business is the issue at the centre of the file. Revenue has grown every year since FY2021 while operating margin has bounced between losses and modest profits, which suggests the cost base, not demand, is the problem.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The consumer product is free. Users search, save and organise images, follow other people's boards and tap through to retailers. Advertising is effectively the only revenue line: brands pay to appear in the feed and in search results when someone shows purchase intent. There is no subscription business of any size to cushion an advertising downturn.",
      "The company does not report a segment split in this dataset, so the geographic mix of revenue is unknown. That matters because advertising rates differ sharply between markets, and a platform with a large user base in lower-monetising countries can grow users without growing revenue at the same rate. The product is built once and served to everyone, which is why the gross margin is 79.0%.",
    ],
    bullets: [
      {
        title: "Advertising",
        detail:
          "Brand and performance campaigns sold against planning intent. Essentially all of revenue.",
      },
      {
        title: "The consumer app",
        detail:
          "Free boards, search and shopping links. Users are the inventory, not the customer.",
      },
      {
        title: "Cost base",
        detail:
          "Engineering, sales and marketing. The reason a 79% gross margin becomes a 4.2% operating margin.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is an auction: advertisers bid for placements, and the platform earns the clearing price times the number of impressions sold. Delivery costs are low, mainly infrastructure and app-store fees, which is why gross margin reaches 79.0%. Everything after that is people: engineers to improve recommendations, sales staff to win advertisers, and administration.",
      "The operating leverage is therefore entirely about revenue per employee. If revenue grows and the cost base holds, margin expands quickly, because the incremental cost of serving another advertiser is small. The quarterly record shows how violent that can be: a 22.8% operating margin in the December 2025 quarter and -8.0% in the March 2026 quarter.",
      "That swing is seasonality, not instability. The fourth quarter carries the holiday advertising budget, so the annual margin is decided in a twelve-week window. A company with a single seasonal peak has less room to absorb a weak December.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $2.58B in FY2021 to $4.22B in FY2025, and growth has slowed to 15.4% on a trailing basis and 11.9% in the latest quarter. It is still respectable; it is no longer the growth of a young platform.",
      "The attributed consensus expects $4.83B this fiscal year and $5.40B next, about 14% and 12% growth, with revenue of $1.46B next quarter. Those numbers assume the advertising market cooperates and the shopping features convert better than they have so far.",
      "The available drivers are ad load, better measurement, shopping ads and international monetisation. The brake is competition for advertiser budgets from much larger platforms and the possibility that planning intent is worth less than the company assumes.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin was 12.6% in FY2021, -3.6% in FY2022, -4.1% in FY2023, 4.9% in FY2024 and 7.6% in FY2025. The trailing figure of 4.2% is lower than FY2025 because the first half of FY2026 ran operating losses of $73.6M and $46.7M, which is what a year of heavy investment looks like.",
      "The FY2024 net income of $1.86B against operating income of $179.8M is not an operating result; it reflects an item below the operating line. That is exactly the kind of number a reader should check before treating a net margin as evidence of pricing power.",
      "Return on equity is 5.7% and return on invested capital 5.9%. For a business with a 79.0% gross margin, those returns are low, and they are the clearest statement that the cost base is consuming the advantage.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $743.9M in FY2021, $440.2M in FY2022, $604.9M in FY2023, $940.0M in FY2024 and $1.25B in FY2025, or $1.26B trailing at a 27.0% margin. Cash generation has been far more stable than reported profit.",
      "The gap between a 4.2% operating margin and a 27.0% free-cash-flow margin is the interesting part. It usually reflects large non-cash charges, principally share-based compensation, and working capital that moves in the company's favour. That is the line to check before concluding the business is more profitable than it looks.",
      "The balance sheet holds $487.9M of net cash. There is no leverage, so the company can fund investment without borrowing, but the cushion is thin relative to a $10.9B market value.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $18.96 the shares trade at 61.0x trailing earnings, 45.0x EV/EBITDA, 2.2x sales and 8.6x free cash flow. The earnings multiples are inflated by a small profit base; the sales and cash-flow multiples are the more informative pair.",
      "The peer group explains the gap. Meta trades at 20.7x earnings and Alphabet at 15.2x, both with operating margins above 30%. Netflix trades at 17.6x earnings, Disney at 23.6x and Comcast at 7.7x. Pinterest's 2.2x sales is cheap against those platforms, but its margin is a fraction of theirs, so the multiple is a margin story rather than a bargain.",
      "On the covered universe the shares rank in the 13th percentile for cheapness on EV/EBITDA, among the most expensive. There is no Stockmonk target price for the shares.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-six analysts contribute to the attributed consensus, with a mean target of $25.25 and a range of $20.00 to $41.00. The mean sits well above the current price and the low end is close to it, so the distribution is one-sided.",
      "Estimates call for $4.83B of revenue this fiscal year and $5.40B next, with $1.46B next quarter. The revenue path is credible for a platform of this size; the profit path is the part that has repeatedly disappointed.",
      "A consensus that is uniformly above the market price is a sentiment reading as much as a forecast. When the estimates have been cut before, the average target tells you where analysts were, not where the business is going.",
    ],
  },
  risks: {
    intro:
      "Pinterest depends on one revenue line and one seasonal quarter. The risks below are mostly about whether the cost base can ever be justified by the advertising it supports.",
    items: [
      {
        title: "Advertising cyclicality",
        severity: "High",
        detail:
          "There is no subscription revenue to cushion a downturn. A cut in brand budgets reaches revenue within a quarter.",
        watch:
          "Quarterly revenue growth and the commentary on advertiser demand.",
      },
      {
        title: "Competition for engagement",
        severity: "High",
        detail:
          "Short-video and social platforms compete for the same planning and shopping behaviour, and users can switch with no cost.",
        watch:
          "Monthly active users, engagement and time spent.",
      },
      {
        title: "Monetisation outside the largest market",
        severity: "Medium",
        detail:
          "If most users are in markets where advertisers pay less, user growth does not translate into revenue growth at the same rate.",
        watch:
          "Revenue per user by region and the international share of revenue.",
      },
      {
        title: "Cost discipline",
        severity: "Medium",
        detail:
          "A 4.2% operating margin leaves little room for error. Hiring or marketing increases can turn profit into loss quickly.",
        watch:
          "Operating margin, headcount and share-based compensation.",
      },
      {
        title: "Product execution",
        severity: "Medium",
        detail:
          "Shopping features and measurement tools have to prove that planning intent converts into purchases advertisers can see.",
        watch:
          "Adoption of shopping formats and the growth of performance advertising.",
      },
    ],
    watchlist: [
      {
        title: "Revenue per user",
        detail:
          "The link between the audience and the advertising business; user growth alone is not enough.",
      },
      {
        title: "Operating margin",
        detail:
          "The number that has failed to hold above 10% for a full year.",
      },
      {
        title: "Share-based compensation",
        detail:
          "It explains much of the gap between free cash flow and reported profit, and it dilutes owners.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Pinterest is an advertising platform with $4.7B of revenue, a 79.0% gross margin and a 4.2% operating margin. Free cash flow of $1.26B is far larger than reported profit, largely because of non-cash charges.",
      "The business has a genuine asset: an audience that arrives with purchase intent. What it has not shown is the ability to convert that intent into a durable operating margin, and the quarterly record shows how quickly profit disappears when investment rises.",
      "The valuation reflects the ambiguity. At 2.2x sales the shares are cheap for an internet platform; at 45.0x EV/EBITDA they are expensive for one with a 4.2% margin. Both are true at once.",
    ],
    questions: [
      "How much of the free-cash-flow margin survives if share-based compensation is treated as a cost?",
      "Is revenue per user growing in the markets where the user base is growing?",
      "What would it take for the operating margin to hold above 10% for a full year?",
      "How much of the fourth-quarter profit depends on holiday advertising?",
    ],
  },
};
