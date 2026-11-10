import type { StockStory } from "@/content/stocks/types";

export const salik: StockStory = {
  ticker: "SALIK",
  kicker: "United Arab Emirates · Road tolling",
  title: "Salik: a toll-road monopoly with a 4% yield and a premium price",
  dek:
    "Salik operates Dubai's road toll gates under a long-term concession, giving it a rare monopoly-like cash flow. Revenue grows with traffic, margins are high, and the shares trade at 27.8x earnings with a 4.0% dividend yield.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of AED 3.0bn and net income of AED 1.5bn, with a 64.0% operating margin and a 49.9% net margin.",
    "Revenue rose from AED 1.69bn in 2021 to AED 3.10bn in 2025, helped by toll-gate expansion and traffic growth.",
    "The concession gives Salik the right to operate the toll network in Dubai for a defined period, with regulated tariffs.",
    "At AED 5.51 the shares trade at 27.8x earnings and 21.7x EV/EBITDA, a premium to infrastructure peers.",
    "Consensus has a mean target of AED 6.18 from 12 analysts, with six strong buys and five holds.",
  ],
  filingUrl: "https://stockanalysis.com/quote/dfm/SALIK/financials/",
  irUrl: "https://www.salik.ae",
  bigPicture: {
    paragraphs: [
      "Salik is the operator of Dubai's road toll system. It installs and maintains the gantries, collects tolls from drivers and pays the government under a concession agreement. It was listed in 2022 as part of Dubai's asset-sale programme and is majority-owned by the government.",
      "The equity is an infrastructure asset with monopoly characteristics. Traffic volumes grow with Dubai's population, tourism and commuter patterns, and the toll tariff is set by the regulator. The result is a high-margin, low-capex business with predictable cash flows and a dividend that is central to the investment case.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "Salik operates the toll gates on Dubai's main roads, including the crossings between Dubai and Sharjah, and charges drivers per passage using a tag or a plate-recognition system. It also provides related services such as tag registration, account management and violation processing.",
      "The company has expanded the number of toll gates and introduced variable pricing at peak times, which is intended to manage congestion and increase revenue. The concession agreement sets out the tariff framework and the duration of the operating right, which is the key long-term risk for the business.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the number of toll passages multiplied by the tariff per passage. The cost base is small relative to revenue — gantry maintenance, technology, staff and the concession fee paid to the government — which is why operating margin was 64.0% on a trailing basis.",
      "The business is almost a pure royalty on traffic. Tariffs are regulated, so revenue growth comes from more vehicles, more passages per vehicle and more toll gates. The main cost is the concession fee, which is a share of revenue and therefore scales with the business.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from AED 1.69bn in 2021 to AED 3.10bn in 2025, a compound growth rate of about 16%, driven by the recovery in traffic after the pandemic, population growth and the addition of new toll gates. Net income rose from AED 1.38bn to AED 1.55bn, with a dip in 2023 as costs rose.",
      "The trailing twelve months show AED 2.98bn of revenue, up 9.4%, and consensus expects AED 3.0bn in 2026, down 3.2%, with EPS of AED 0.20, down 5.7%. Growth is expected to slow as the network matures and the comparison base normalises, with variable pricing and new gates providing the next leg.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was AED 1.38bn in 2021, AED 1.33bn in 2022, AED 1.10bn in 2023, AED 1.17bn in 2024 and AED 1.55bn in 2025. The 2023 dip reflected higher operating costs and the ramp-up of new gates; the 2025 recovery reflects traffic growth and pricing.",
      "Return on equity was 144.1% on a trailing basis, but that is a function of a very small equity base and the debt used to fund the concession. Return on invested capital of 30.8% is the more meaningful measure and shows the underlying quality of the asset.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was AED 1.52bn on a trailing basis, comfortably covering the dividend. The company carries AED 4.00bn of debt and AED 0.13bn of cash, leverage that is appropriate for a regulated infrastructure asset with stable cash flows.",
      "The dividend yield is 4.0%, and the payout is a key part of the return. Salik has committed to a dividend policy linked to earnings, and the toll cash flows support it. The main call on cash is maintenance capital spending and the concession fee, not growth capex.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 5.51 the shares trade at 27.8x trailing earnings and 21.7x EV/EBITDA, a premium to global toll-road operators. The premium reflects the monopoly, the high margins and the growth from Dubai's population, but it also leaves little room for disappointment.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 6.18 and a range of AED 5.10–6.90 from 12 analysts. Six carry a strong buy, one a buy and five a hold, with no sells. FY2026 revenue is expected at AED 3.0bn and EPS at AED 0.20. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is good, with a split between bulls who value the monopoly and the yield, and holds who see the shares as fully valued after a strong run.",
      "The key debate is the concession and the tariff framework. A shorter concession, a less generous tariff or a change in the variable-pricing rules would materially affect the valuation. Traffic growth and new gates are the upside levers.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 6.18 (range AED 5.10–6.90), 12 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue AED 3.0bn, -3.2%; EPS AED 0.20, -5.7%." },
      { title: "Ratings mix", detail: "6 strong buy, 1 buy, 5 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are the concession terms, traffic volumes and the premium valuation.",
    items: [
      {
        title: "Concession terms",
        severity: "High",
        detail:
          "The operating right has a finite life, and the terms are set by the government. A less favourable renewal or tariff change would hit the valuation.",
        watch: "Concession duration, tariff reviews, government policy.",
      },
      {
        title: "Traffic volumes",
        severity: "Medium",
        detail:
          "Revenue depends on Dubai's population, tourism and commuting patterns. A slowdown would reduce passages.",
        watch: "Traffic counts, population, fuel prices.",
      },
      {
        title: "Premium valuation",
        severity: "Medium",
        detail:
          "At 27.8x earnings the shares price in steady growth. A slowdown or a higher discount rate would compress the multiple.",
        watch: "Relative P/E, bond yields, estimate revisions.",
      },
      {
        title: "Regulatory change",
        severity: "Medium",
        detail:
          "Variable pricing and toll-gate additions are politically sensitive. Changes could affect revenue per vehicle.",
        watch: "RTA policy, toll-gate rollouts.",
      },
    ],
    watchlist: [
      { title: "Traffic volumes", detail: "The main revenue driver." },
      { title: "Tariff framework", detail: "Regulated pricing and peak charges." },
      { title: "Concession", detail: "Duration and renewal terms." },
      { title: "Dividend", detail: "Payout and coverage." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Salik is a high-margin toll-road monopoly with a finite concession, a 4.0% dividend yield and a premium valuation. The business quality is high, but the price already reflects much of the good news.",
      "The investment case is a bond-like infrastructure asset with traffic growth. The main risks are the concession terms and the multiple; the main opportunity is more toll gates and variable pricing.",
    ],
    questions: [
      "When does the concession expire, and on what terms can it be renewed?",
      "How much of revenue growth comes from new gates versus more traffic?",
      "Is the dividend covered if traffic falls?",
      "What is the regulatory framework for variable pricing?",
    ],
  },
};
