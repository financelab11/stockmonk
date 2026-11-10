import type { StockStory } from "@/content/stocks/types";

export const dubaiInvestments: StockStory = {
  ticker: "DIC",
  kicker: "United Arab Emirates · Diversified holding",
  title: "Dubai Investments: a conglomerate at 9.3x earnings and a 6.8% yield",
  dek:
    "Dubai Investments owns property, manufacturing, contracting and financial assets across the UAE. Profit includes investment gains, the dividend yield is 6.8%, and the shares trade at 9.3x earnings — above the cautious two-analyst consensus target.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of AED 3.92bn and net income of AED 1.69bn, with a 30.2% operating margin and 11.4% return on equity.",
    "Revenue was broadly flat from AED 3.35bn in 2021 to AED 3.77bn in 2025, while net income rose from AED 0.62bn to AED 1.55bn.",
    "The group spans property, manufacturing, contracting, education, healthcare and financial investments.",
    "At AED 3.69 the shares trade at 9.3x earnings with a 6.8% dividend yield, but the consensus target is AED 3.22.",
    "Only two analysts cover the stock, one hold and one strong sell, reflecting the limited free float and the holding-company structure.",
  ],
  filingUrl: "https://stockanalysis.com/quote/dfm/DIC/financials/",
  irUrl: "https://www.dubaiinvestments.com",
  bigPicture: {
    paragraphs: [
      "Dubai Investments is a diversified holding company with businesses in property development and investment, manufacturing, contracting, education, healthcare and financial services. It owns stakes in listed and private companies and has a large land bank in Dubai.",
      "The equity is a conglomerate, so its value depends on the sum of its assets rather than on a single operating business. The reported profit includes fair-value gains and investment income, which makes the headline multiple a poor guide. The market applies a holding-company discount, which is why the shares look cheap on earnings.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The property business develops and leases residential, commercial and industrial space. The manufacturing arm produces building materials, glass, metals and packaging. The contracting business builds infrastructure and buildings, and the education and healthcare businesses operate schools and clinics.",
      "The group also holds a portfolio of listed and private investments, including stakes in financial services and industrial companies. Those holdings generate dividends and gains, which contribute to reported profit.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from property rentals and sales, manufacturing, contracting and services. Operating margin was 30.2% on a trailing basis, healthy because of the property and investment income mix.",
      "Net income of AED 1.69bn exceeds EBITDA of AED 1.31bn, which indicates that a meaningful part of profit comes from associates, investment gains and fair-value movements rather than from consolidated operations. That makes the P/E multiple less reliable than the sum-of-the-parts value.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue was AED 3.35bn in 2021, AED 3.08bn in 2022, AED 3.40bn in 2023, AED 3.80bn in 2024 and AED 3.77bn in 2025 — broadly flat over the period. Net income was more volatile, rising from AED 0.62bn to AED 1.55bn, with a peak of AED 1.61bn in 2022.",
      "The trailing twelve months show AED 3.92bn of revenue, up 10.7%. There is no reliable growth consensus in the feed; the two analysts who cover the stock expect EPS of AED 0.23 in 2026, down 37.7%, which suggests they see the recent gains as unsustainable.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was AED 0.62bn in 2021, AED 1.61bn in 2022, AED 1.13bn in 2023, AED 1.21bn in 2024 and AED 1.55bn in 2025. The volatility reflects investment gains and property revaluations rather than a steady operating trend.",
      "Return on equity was 11.4% on a trailing basis, and return on invested capital 4.8%. The gap reflects the investment gains and the capital tied up in property and manufacturing. The group carries AED 6.34bn of debt and AED 1.49bn of cash.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was AED 1.04bn on a trailing basis, positive and supportive of the dividend. The dividend yield is 6.8%, high for a conglomerate and a key part of the total return.",
      "The main calls on cash are property development, manufacturing investment and debt service. The group has a large asset base that could be monetised through disposals, which would help narrow the holding-company discount.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 3.69 the shares trade at 9.3x trailing earnings and 13.3x EV/EBITDA, a mixed picture because profit includes investment gains. On a sum-of-the-parts basis, the property and listed stakes may be worth more than the market capitalisation.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 3.22 and a range of AED 2.44–4.00 from just two analysts. One carries a hold and one a strong sell, and the mean target is below the current price. These are third-party estimates, not Stockmonk forecasts, and the thin coverage makes them less robust.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is minimal and negative, with no buys. The lack of support reflects the holding-company structure, the limited free float and the difficulty of valuing the diverse portfolio.",
      "The key debate is capital allocation and the discount to asset value. A disposal of non-core assets, a higher dividend or a simplification of the group could narrow the discount; further acquisitions would widen it.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 3.22 (range AED 2.44–4.00), 2 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue AED 4.0bn, +5.7%; EPS AED 0.23, -37.7%." },
      { title: "Ratings mix", detail: "0 strong buy, 0 buy, 1 hold, 0 sell, 1 strong sell." },
    ],
  },
  risks: {
    intro:
      "The risks are the holding-company discount, property exposure and the quality of reported earnings.",
    items: [
      {
        title: "Holding-company discount",
        severity: "High",
        detail:
          "The market values the group below the sum of its parts, and the discount can persist without a catalyst.",
        watch: "Sum-of-the-parts, asset sales, governance.",
      },
      {
        title: "Property cycle",
        severity: "Medium",
        detail:
          "Property development and investment are significant. A Dubai slowdown would hit revenue and valuations.",
        watch: "Dubai prices, occupancy, development pipeline.",
      },
      {
        title: "Earnings quality",
        severity: "Medium",
        detail:
          "Profit includes investment gains and revaluations. A reversal would reduce earnings and the dividend cover.",
        watch: "Fair-value movements, cash earnings, one-offs.",
      },
      {
        title: "Leverage",
        severity: "Low",
        detail:
          "Debt of AED 6.34bn is manageable relative to the asset base, but higher rates would raise interest costs.",
        watch: "Net debt/EBITDA, interest cover.",
      },
    ],
    watchlist: [
      { title: "Asset sales", detail: "A route to narrowing the discount." },
      { title: "Property", detail: "Dubai prices and occupancy." },
      { title: "Dividend", detail: "Payout and cash coverage." },
      { title: "Earnings quality", detail: "Cash versus reported profit." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Dubai Investments is a diversified holding company with property, manufacturing and financial assets, a 6.8% dividend yield and a 9.3x earnings multiple. The headline multiple is flattered by investment gains, and the two-analyst consensus target is below the current price.",
      "The investment case is an asset-value play with a weak catalyst. Investors need a sum-of-the-parts view and patience; without asset sales or a simplification, the discount may persist.",
    ],
    questions: [
      "What is the sum-of-the-parts value of the portfolio?",
      "How much of profit comes from recurring operations versus gains?",
      "Are there plans to sell non-core assets?",
      "Is the dividend covered by cash earnings?",
    ],
  },
};
