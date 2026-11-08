import type { StockStory } from "./types";

export const ADBE: StockStory = {
  ticker: "ADBE",
  kicker: "Software · Creative and marketing tools",
  title: "Adobe's margins are intact; its growth rate is what changed",
  dek: "An 89.3% gross margin and $10.59B of free cash flow describe a mature subscription business. A 9.1x price-to-free-cash-flow multiple says the market expects the seat-based model to shrink rather than compound.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $25.97B, up 12.0%, the slowest rate in the five-year record.",
    "Gross margin is 89.3% and operating margin 35.7%, with $10.59B of free cash flow.",
    "The balance sheet holds $662.0M of net cash and returns most cash through buybacks.",
    "At $239.30 the shares trade at 13.3x earnings and 9.1x free cash flow.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/796343/000079634326000003/adbe-20251128.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000796343&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Adobe sells software that people use to make things: images, video, documents, websites and marketing campaigns. The company moved from selling perpetual licences to monthly and annual subscriptions more than a decade ago, and that decision is why revenue is now predictable and gross margin is 89.3%.",
      "The problem is arithmetic. Revenue grew 13.4% a year from FY2021 to FY2025, and the trailing rate is 12.0%. Operating margin is 35.7% and free cash flow is 40.8% of revenue, so the business is highly profitable but no longer fast. A subscription base that is already large needs new seats or higher prices to keep growing, and both are harder to find than they were.",
      "The shares closed at $239.30, for a market capitalisation of $96.7B, 13.3x trailing earnings, 9.6x EV/EBITDA and 9.1x free cash flow. The stock is 28% of the way up a 52-week range of $190.12 to $362.71 and returned negative 26.9% over the past year and negative 64.1% over five years. The market has been cutting the multiple faster than the company has been growing.",
    ],
    quote:
      "The subscription model solved Adobe's revenue problem. The question now is whether generative tools expand the number of people who pay, or reduce the need for the tools altogether.",
  },
  whatItDoes: {
    paragraphs: [
      "There are three product families. Creative Cloud is the franchise: image editing, illustration, video, design and photography applications sold as a bundle to professionals, students and hobbyists. Document Cloud is built around the PDF and electronic signatures, sold to businesses as well as individuals. Experience Cloud is the marketing side: analytics, campaign management, content and commerce tools sold to large brands.",
      "The customers are different in each case. Creative users are individuals and small teams who pay monthly and can cancel monthly. Document users are businesses that standardise on a file format. Experience Cloud buyers are chief marketing officers with six- and seven-figure annual contracts. The first group is price-sensitive and numerous, the third is concentrated and slower to churn.",
      "Adobe employed 22,516 people. Sales and marketing is the largest cost line, because Creative Cloud is sold to millions of individual subscribers and Experience Cloud is sold to enterprises through a direct sales force. Research and development is the second, and it is where the AI features are being built.",
    ],
    bullets: [
      {
        title: "Creative Cloud",
        detail:
          "Subscription bundle for design, photography, video and illustration. The core franchise and the most exposed to new generative tools.",
      },
      {
        title: "Document Cloud",
        detail:
          "PDF creation, editing and e-signature. Sticky in enterprises because the file format is a standard.",
      },
      {
        title: "Experience Cloud",
        detail:
          "Marketing analytics, content and commerce. Enterprise contracts with long sales cycles and integration work.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is subscription fees, billed monthly or annually, and recognised over the term. Gross margin is 89.3% because serving an extra subscriber costs almost nothing: the software is already built, and the hosting cost per user is small. That is the mechanism behind the 35.7% operating margin, which is what remains after sales, marketing, research and administration.",
      "The model's weakness is that it depends on the number of seats. A company that hires fewer designers, or a freelancer who substitutes a cheaper tool, reduces revenue immediately. Adobe has offset seat saturation with price increases and with moves into new categories, but each of those has a limit.",
      "Cash conversion is strong. Free cash flow of $10.59B exceeds net income, partly because subscription revenue is collected up front and partly because share-based compensation is added back. The company also capitalises some software development costs, which delays the expense. Both are legitimate accounting treatments, and both mean cash flow overstates the economic profit slightly.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $15.79B in FY2021 to $17.61B, $19.41B, $21.50B and $23.77B in FY2025, a 13.4% compound rate. The latest quarter grew 12.9% to $6.76B, which is consistent with the annual trend rather than a break from it.",
      "The attributed consensus expects $26.61B this fiscal year and $29.04B next year. That would keep growth in the low double digits. The quarterly estimates of $6.83B and $7.04B imply no acceleration, so the forecasters are not assuming an AI-driven step-up.",
      "The growth drivers are price, new subscribers and enterprise expansion. Price increases have done much of the work in recent years, and they are the easiest lever to pull until customers start consolidating licences. The risk is that AI tools change the unit of work: if one person with an AI assistant can produce what three people produced before, seat counts fall even if the software is better.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is steady. Operating income went from $5.80B in FY2021 to $6.10B, $6.65B, $6.74B and $8.71B in FY2025, on revenue that rose from $15.79B to $23.77B. The FY2025 jump in operating income is larger than the revenue increase, which points to cost discipline as well as scale.",
      "Quarterly operating margin has drifted in a narrow band: 35.9% in Q2 FY2025, 36.3%, 36.5%, 37.8%, then 33.8% in Q2 FY2026 and 34.8% in Q3 FY2026. The two most recent quarters are lower than the year before, which is worth noting in a business where the margin had been rising.",
      "Return on equity is 63.7% and return on invested capital is 68.0%. Those are high because the capital base is small, not because the business is capital-intensive. Diluted EPS was $17.91 on a trailing basis.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow of $10.59B on $25.97B of revenue is a 40.8% margin. The company has no manufacturing and modest capital expenditure, so almost all of the operating cash flow is available to shareholders. Net cash is $662.0M, a small figure relative to the cash flow, which means the balance sheet is not the constraint on anything.",
      "The cash return is the point of the investment case. With a 9.1x price-to-free-cash-flow multiple and an 11.0% free-cash-flow yield, an investor is buying a stream of cash that is returned through buybacks. If the share count falls faster than revenue grows, earnings per share can rise even when revenue growth is modest.",
      "The risk in that strategy is price. Buybacks create value when the shares are cheap and destroy it when they are expensive. Adobe has been buying back stock while the price fell, which helps per-share numbers, but it also means the cash flow is not being reinvested in the business.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 13.3x earnings, 9.6x EV/EBITDA and 9.1x free cash flow, Adobe trades below the market multiple and far below the software peers in the table. Nvidia is at 23.3x earnings, Microsoft at 27.6x, Broadcom at 36.6x and Oracle at 18.6x. On the face of it, that is a large discount for a company with an 89.3% gross margin.",
      "The discount is the market's estimate of decay. A 9.1x cash-flow multiple implies that the cash flow is not expected to grow much, or that it is expected to shrink. The 81st-percentile cheapness score on EV/EBITDA confirms that the stock is priced at the inexpensive end of the coverage universe.",
      "The comparison that matters is between the multiple and the growth rate. A business growing at 12% with a 40.8% free-cash-flow margin would normally trade at a higher multiple than 9.1x cash flow. Either the market is wrong, or it expects the growth rate to fall further. The statements cannot settle that question; they can only show that the current price assumes the second.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-three analysts contribute to the attributed consensus, with a mean target of $267.00 and a range of $140.00 to $373.00. The mean is above the $239.30 close, and the low end is far below it. The spread reflects disagreement about whether AI helps or hurts the franchise.",
      "The estimates need care. Next quarter's EPS forecast is $6.33, while the latest reported quarter's diluted EPS was $4.62. The difference is mostly the treatment of share-based compensation and other adjustments, so the consensus EPS is not comparable to the GAAP figure in the income statement.",
      "Revenue estimates of $26.61B this year and $29.04B next year are the cleaner guide. They imply that the analysts expect the subscription base to keep growing at roughly the current rate, not to contract.",
    ],
  },
  risks: {
    intro:
      "Adobe's risks are about the durability of the seat model and the price of the subscription. The balance sheet is not a source of risk; the income statement is.",
    items: [
      {
        title: "Generative tools compress seat demand",
        severity: "High",
        detail:
          "If AI assistance lets fewer people produce the same output, the number of paid seats can fall even if the software remains the best in its category.",
        watch:
          "Creative Cloud subscriber growth and management commentary on seat expansion.",
      },
      {
        title: "Price-led growth has a ceiling",
        severity: "High",
        detail:
          "Much of the recent growth has come from raising prices on an installed base. Customers eventually consolidate licences or move to cheaper alternatives.",
        watch:
          "Average revenue per subscriber and any change in discounting.",
      },
      {
        title: "Enterprise competition",
        severity: "Medium",
        detail:
          "Experience Cloud competes with larger platform vendors that bundle analytics and marketing tools into existing enterprise agreements.",
        watch:
          "Experience Cloud revenue growth and large-deal disclosures.",
      },
      {
        title: "Margin reversal",
        severity: "Medium",
        detail:
          "Operating margin has slipped from 37.8% in Q1 FY2026 to 34.8% in Q3. A sustained decline would undermine the case that this is a mature, high-margin annuity.",
        watch:
          "Quarterly operating margin against revenue growth.",
      },
      {
        title: "Buyback-heavy capital allocation",
        severity: "Low",
        detail:
          "Returning cash through repurchases leaves less for acquisitions or a downturn. It also makes per-share results sensitive to the price paid.",
        watch:
          "Share count and the average price paid per repurchase.",
      },
    ],
    watchlist: [
      {
        title: "Subscriber net additions",
        detail:
          "The leading indicator for a seat-based model. Growth in seats comes before growth in revenue.",
      },
      {
        title: "Gross margin",
        detail:
          "89.3% is the proof that the product is software. A fall would mean hosting or AI inference costs are becoming material.",
      },
      {
        title: "Free-cash-flow yield",
        detail:
          "At 11.0% it sets the return an investor gets if the cash flow simply continues.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Adobe is a mature, extremely profitable subscription business that is priced as if its best years are behind it. The 89.3% gross margin and 40.8% free-cash-flow margin are not in dispute. The 12.0% growth rate and the 9.1x cash-flow multiple are.",
      "What is not known is how AI changes the unit of demand. If it expands the number of people who create content, Adobe sells more seats. If it collapses the amount of labour needed to produce a design, Adobe sells fewer. Both are plausible, and the financial statements will lag the answer by several quarters.",
      "The reader should treat the discount as a question rather than a conclusion. A low multiple on a declining business is not cheap; a low multiple on a stable one is. The next few quarters of subscriber numbers will say which this is.",
    ],
    questions: [
      "Are Creative Cloud subscribers still growing, or is revenue growth coming from price?",
      "What share of revenue is enterprise contracts that renew on multi-year terms?",
      "How much of the free cash flow is being spent on buybacks versus product development?",
      "What would revenue growth of 6% do to a 9.1x cash-flow multiple?",
    ],
  },
};
