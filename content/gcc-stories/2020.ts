import type { StockStory } from "@/content/stocks/types";

export const sabicAgriNutrients: StockStory = {
  ticker: "2020",
  kicker: "Saudi Arabia · Agri-nutrients",
  title: "SABIC Agri-Nutrients: a debt-free fertiliser cash machine at a cycle peak",
  dek:
    "SABIC Agri-Nutrients produces urea and ammonia with a debt-free balance sheet and one of the highest returns on capital in the Saudi market. The catch is that fertiliser prices are cyclical, and consensus expects a sharp drop in 2026 earnings.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of SAR 11.7bn, EBITDA of SAR 3.8bn and net income of SAR 3.1bn, with a 26.5% return on invested capital.",
    "Revenue peaked at SAR 19.0bn in 2022 and has normalised to SAR 13.1bn in 2025.",
    "The company has almost no debt (SAR 0.2bn) and SAR 2.2bn of cash, which supports a 6.1% dividend yield.",
    "At 17.6x earnings and 11.9x EV/EBITDA, the shares are priced for a normalised, not a peak, cycle.",
    "Consensus expects FY2026 EPS to fall 40%, with a mean target of SAR 135.85 from 12 analysts.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/2020/financials/",
  irUrl: "https://www.sabic-agrinutrients.com",
  bigPicture: {
    paragraphs: [
      "SABIC Agri-Nutrients is the fertiliser arm of the SABIC group, producing urea and ammonia for domestic and export markets. Its plants benefit from low-cost Saudi gas, which gives it a structural cost advantage over European and Asian producers that rely on more expensive feedstock.",
      "The business is a pure commodity producer: prices are set globally, volumes are constrained by plant capacity, and earnings move with the fertiliser cycle. The difference is the balance sheet — almost no debt — and the dividend, which makes the equity a high-quality cyclical rather than a leveraged bet.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The company operates ammonia and urea plants in Saudi Arabia and sells into the Gulf, Asia, the Americas and Europe. Urea is the main product; ammonia is both a feedstock and a saleable product, with growing interest as a low-carbon fuel and hydrogen carrier.",
      "The customer base is agricultural, so demand is tied to crop prices, planting economics and government subsidy policies. There is limited pricing power, but the Saudi gas advantage keeps the company in the lowest-cost quartile.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is volume multiplied by the global urea and ammonia price. The cost base is dominated by gas, which is supplied at a regulated, low price in Saudi Arabia. That spread is the core of the business: when urea prices are high, margins are exceptional; when they fall, the low-cost position protects profitability better than peers.",
      "The 2022 boom lifted revenue to SAR 19.0bn and net income to SAR 10.0bn. Prices have since normalised, and 2025 revenue was SAR 13.1bn with net income of SAR 4.3bn. The trailing twelve months show SAR 11.7bn of revenue and SAR 3.1bn of net income.",
    ],
  },
  growth: {
    paragraphs: [
      "Volume growth is limited by plant capacity; the main growth lever is debottlenecking and new ammonia capacity, plus the optionality of blue ammonia for export. Those projects are smaller than the swings in fertiliser prices, so the earnings trajectory is driven by the cycle rather than by expansion.",
      "Consensus for FY2026 assumes revenue of SAR 11.2bn, down 14.1%, and EPS of SAR 5.44, down 40%. That is a sharp decline, reflecting lower fertiliser prices and the absence of the 2025 price spike.",
    ],
  },
  performance: {
    paragraphs: [
      "The company generated a 60% operating margin in 2021 and a 54% margin in 2022, among the highest in the global fertiliser industry. Margins have since fallen to 30.9% in 2025 and 25.1% on a trailing basis as prices normalised.",
      "Return on invested capital was 26.5% on a trailing basis, far above the cost of capital. That is the hallmark of a low-cost producer with a small asset base relative to its cash generation.",
    ],
  },
  cash: {
    paragraphs: [
      "The balance sheet is effectively debt-free: SAR 0.2bn of debt against SAR 2.2bn of cash. Free cash flow was SAR 3.0bn on a trailing basis, easily covering the SAR 6.1% dividend.",
      "The dividend is the main cash return, and the absence of leverage gives the company flexibility to maintain it through the cycle. That is unusual for a commodity producer and a key part of the investment case.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 114 the shares trade at 17.6x trailing earnings and 11.9x EV/EBITDA, a premium to global fertiliser producers but a discount to the peak-cycle multiples of 2022. The market is valuing the low-cost position and the balance sheet rather than the current price of urea.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 135.85 and a range of SAR 86.54–158.00 from 12 analysts. Five carry a strong buy, one a buy, five a hold and one a sell. FY2026 revenue is expected at SAR 11.2bn and EPS at SAR 5.44. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The ratings are split between the quality of the asset and the direction of fertiliser prices. The mean target implies upside, but the expected 40% drop in 2026 EPS shows how much of the current earnings base is cyclical.",
      "The key debate is whether urea prices have found a floor. A recovery in agricultural demand or supply disruptions would lift earnings; a further decline would compress the dividend and the multiple.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 135.85 (range SAR 86.54–158.00), 12 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 11.2bn, -14.1%; EPS SAR 5.44, -40%." },
      { title: "Ratings mix", detail: "5 strong buy, 1 buy, 5 hold, 1 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are fertiliser prices, gas feedstock policy and the cyclicality of the dividend.",
    items: [
      {
        title: "Urea and ammonia prices",
        severity: "High",
        detail:
          "Revenue and margins move with global fertiliser prices. A further decline would cut earnings and the dividend.",
        watch: "Urea benchmarks, Chinese exports, crop prices.",
      },
      {
        title: "Gas feedstock policy",
        severity: "Medium",
        detail:
          "The low-cost gas advantage depends on regulated Saudi prices. A change would raise the cost base.",
        watch: "Gas pricing, government policy.",
      },
      {
        title: "Dividend cyclicality",
        severity: "Medium",
        detail:
          "The payout is high relative to normalised earnings. A deep downcycle could force a cut.",
        watch: "Free cash flow, payout ratio.",
      },
      {
        title: "Capacity and demand",
        severity: "Low",
        detail:
          "Volume growth is limited, and global capacity additions could keep prices subdued.",
        watch: "Industry utilisation, new capacity.",
      },
    ],
    watchlist: [
      { title: "Urea prices", detail: "The main earnings driver." },
      { title: "Dividend", detail: "Coverage through the cycle." },
      { title: "Gas costs", detail: "Regulated feedstock pricing." },
      { title: "Blue ammonia", detail: "Optionality from low-carbon products." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "SABIC Agri-Nutrients is one of the highest-quality commodity businesses in the Gulf: low-cost gas, a debt-free balance sheet and a high return on capital. The share price is a bet on normalised fertiliser prices, not on volume growth.",
      "The 6.1% dividend and the balance-sheet strength provide a margin of safety, but the expected 40% earnings decline in 2026 shows that the cycle is still working through. Investors should focus on urea prices and the sustainability of the payout.",
    ],
    questions: [
      "What is the mid-cycle urea price embedded in the valuation?",
      "Can the dividend be maintained if prices fall another 20%?",
      "How much new ammonia capacity is coming to the market?",
      "What is the blue ammonia opportunity worth?",
    ],
  },
};
