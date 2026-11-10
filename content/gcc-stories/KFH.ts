import type { StockStory } from "@/content/stocks/types";

export const kuwaitFinanceHouse: StockStory = {
  ticker: "KFH",
  kicker: "Kuwait · Islamic banking",
  title: "Kuwait Finance House: a 3% yield and a consensus below the price",
  dek:
    "KFH is one of the largest Islamic banks in the world, with operations in Kuwait, Turkey, Bahrain, Malaysia and Germany. Profit has grown, but the shares trade at 21.7x earnings and above the mean consensus target, with an unusually negative ratings mix.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of KWD 1.71bn and net income of KWD 0.66bn, with a 38.7% net margin and 9.9% return on equity.",
    "Revenue rose from KWD 0.68bn in 2021 to KWD 1.67bn in 2025, and net income from KWD 0.24bn to KWD 0.63bn.",
    "The group operates in Kuwait, Turkey, Bahrain, Malaysia and Germany, with Kuwait the core market.",
    "At KWD 755 fils the shares trade at 21.7x earnings with a 3.0% dividend yield.",
    "Consensus has a mean target of KWD 0.69 from nine analysts, below the current price, with three strong sells.",
  ],
  filingUrl: "https://stockanalysis.com/quote/kwse/KFH/financials/",
  irUrl: "https://www.kfh.com",
  bigPicture: {
    paragraphs: [
      "Kuwait Finance House is one of the largest Islamic banks in the world and a systemic institution in Kuwait. It provides retail, corporate, investment and wealth-management services, all Sharia-compliant, and it has subsidiaries and associates in Turkey, Bahrain, Malaysia and Germany.",
      "The equity is a Kuwaiti banking story with international complexity. The domestic franchise is strong and well capitalised, but the Turkish operations and the group's investment portfolio add volatility and make the earnings harder to forecast. The market applies a discount for that complexity.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The bank offers current and savings accounts, home and personal finance, cards, business banking, corporate finance, trade finance and wealth management. Its subsidiaries provide Islamic banking in Turkey, Bahrain and Malaysia, and its German operation serves corporate clients.",
      "KFH also has a large investment portfolio, including real estate and equity stakes, which contributes to profit but adds valuation complexity. The group has been simplifying its portfolio and focusing on core banking.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Income from Islamic financing and investments is the largest revenue line, supported by fees and investment income. The Kuwaiti deposit franchise provides low-cost funding, which supports the net profit margin of 38.7%.",
      "Provisioning is the main earnings variable. The Turkish book is more volatile than the Kuwaiti book, and the investment portfolio can generate gains or losses. The 9.9% return on equity is modest for a bank with KFH's scale.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from KWD 0.68bn in 2021 to KWD 1.67bn in 2025, and net income from KWD 0.24bn to KWD 0.63bn. The growth was driven by higher rates, the consolidation of subsidiaries and the expansion of the Turkish operations.",
      "The trailing twelve months show KWD 1.71bn of revenue, up 3.2%, and consensus expects KWD 1.9bn in 2026, up 6.2%, with EPS of KWD 0.04, up 10.7%. Growth is expected to be modest, with the Turkish operations and the investment portfolio providing the swing factors.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income rose from KWD 0.24bn in 2021 to KWD 0.63bn in 2025, a strong recovery after the pandemic. The improvement reflects higher rates, better cost control and the contribution from subsidiaries.",
      "Return on equity was 9.9% on a trailing basis, below the cost of equity and below the best Gulf Islamic banks. The bank carries KWD 12.4bn of debt and KWD 4.3bn of cash, reflecting its funding structure and international operations.",
    ],
  },
  cash: {
    paragraphs: [
      "The dividend yield is 3.0%, lower than the Qatari and UAE banks in the coverage, despite a similar or higher payout ratio. The shares trade at a premium multiple, which compresses the yield.",
      "For a bank, capital adequacy and liquidity are the relevant measures rather than free cash flow. The bank is well capitalised, but the low return on equity means it is not generating excess capital quickly.",
    ],
  },
  valuation: {
    paragraphs: [
      "At KWD 755 fils the shares trade at 21.7x trailing earnings, a premium to the Qatari and UAE banks in this coverage. The premium is difficult to justify given the 9.9% return on equity and the complexity of the group.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of KWD 0.69 — below the current price — and a wide range of KWD 0.19–0.93 from nine analysts. One carries a strong buy, four a hold, one a sell and three a strong sell. FY2026 revenue is expected at KWD 1.9bn and EPS at KWD 0.04. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The ratings are unusually negative for a large Islamic bank, with three strong sells and one sell against a single strong buy. That suggests the market views the shares as expensive relative to the earnings outlook.",
      "The key debate is the Turkish exposure and the investment portfolio. A stronger lira and better Turkish asset quality would help; a renewed currency shock would hurt. The domestic Kuwaiti franchise remains the anchor.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "KWD 0.69 (range KWD 0.19–0.93), 9 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue KWD 1.9bn, +6.2%; EPS KWD 0.04, +10.7%." },
      { title: "Ratings mix", detail: "1 strong buy, 0 buy, 4 hold, 1 sell, 3 strong sell." },
    ],
  },
  risks: {
    intro:
      "The risks are Turkish exposure, the premium valuation and the complexity of the investment portfolio.",
    items: [
      {
        title: "Turkey",
        severity: "High",
        detail:
          "The Turkish subsidiary adds growth but exposes the group to lira volatility, inflation and regulatory changes.",
        watch: "TRY, Turkish inflation, local asset quality.",
      },
      {
        title: "Valuation",
        severity: "High",
        detail:
          "At 21.7x earnings the shares trade above the consensus target. A growth disappointment would hit the multiple.",
        watch: "Relative P/E, ROE, estimate revisions.",
      },
      {
        title: "Investment portfolio",
        severity: "Medium",
        detail:
          "Real-estate and equity stakes add volatility and make the earnings harder to forecast.",
        watch: "Fair-value movements, portfolio disposals.",
      },
      {
        title: "Kuwait concentration",
        severity: "Medium",
        detail:
          "The domestic economy is oil-dependent, so a sustained fall in oil prices would affect credit growth.",
        watch: "Oil prices, Kuwait GDP, government spending.",
      },
    ],
    watchlist: [
      { title: "Turkey", detail: "Currency and asset quality." },
      { title: "ROE", detail: "The key to the valuation." },
      { title: "Dividend", detail: "Payout and capital." },
      { title: "Portfolio", detail: "Disposals and fair values." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Kuwait Finance House is a large, well-capitalised Islamic bank with a strong Kuwaiti franchise, a 3.0% dividend yield and a 21.7x earnings multiple. The shares trade above the mean consensus target, and the ratings are unusually negative.",
      "The investment case depends on improving returns and managing the Turkish exposure. The premium multiple and the cautious consensus suggest investors should wait for a better entry point or clearer evidence of a turnaround.",
    ],
    questions: [
      "How much of profit comes from Turkey?",
      "What is the plan to improve return on equity?",
      "Is the dividend covered through a Turkish shock?",
      "Why is the consensus target below the market price?",
    ],
  },
};
