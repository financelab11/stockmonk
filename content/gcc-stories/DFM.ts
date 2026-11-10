import type { StockStory } from "@/content/stocks/types";

export const dubaiFinancialMarket: StockStory = {
  ticker: "DFM",
  kicker: "United Arab Emirates · Exchange",
  title: "Dubai Financial Market: the exchange at 16x earnings",
  dek:
    "DFM operates Dubai's stock exchange, clearing and depository businesses. Revenue is tied to trading volumes and listings, the dividend yield is 5.0%, and the shares trade at 16.0x earnings with a wide range of analyst views.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of AED 0.94bn and net income of AED 0.66bn, with a 75.7% operating margin and 69.8% net margin.",
    "Revenue rose from AED 0.30bn in 2021 to AED 0.82bn in 2025, while net income reached AED 0.97bn in 2025 because of investment gains.",
    "The group operates the Dubai stock exchange, clearing, settlement and depository services.",
    "At AED 1.265 the shares trade at 16.0x earnings and 7.3x EV/EBITDA, with a 5.0% dividend yield.",
    "Consensus has a mean target of AED 1.75 from five analysts, but the ratings include one strong sell.",
  ],
  filingUrl: "https://stockanalysis.com/quote/dfm/DFM/financials/",
  irUrl: "https://www.dfm.ae",
  bigPicture: {
    paragraphs: [
      "Dubai Financial Market operates the emirate's equity exchange, clearing house and central depository. It earns fees from trading, listing, custody and market data, and it owns a stake in the Dubai Clear and Dubai CSD businesses.",
      "The equity is a play on Dubai's capital markets and on the pipeline of IPOs and listings. Revenue is cyclical because it depends on trading volumes and investor sentiment, but the exchange has a monopoly on onshore equity trading in Dubai and a strong brand.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The exchange provides a platform for trading shares, bonds, ETFs and other securities, and it operates the clearing and settlement infrastructure. It also provides custody, registry and market-data services, and it licenses index and data products.",
      "DFM has been investing in technology and in new products to attract issuers and investors, including derivatives and REITs. Its revenue is closely linked to the value and volume of trading on the exchange.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from trading fees, listing fees, custody fees and data subscriptions. Trading fees are the most cyclical; listing and data fees are more recurring. Operating margin was 75.7% on a trailing basis, high because the exchange has a fixed cost base.",
      "Net income can exceed operating profit because of investment income and gains on the exchange's portfolio. That is why the 2025 net income of AED 0.97bn was higher than revenue. Investors should separate operating earnings from investment gains.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from AED 0.30bn in 2021 to AED 0.82bn in 2025, a compound growth rate of about 28%, driven by higher trading volumes, new listings and the recovery of investor activity. The trajectory has been volatile, with strong years followed by quieter ones.",
      "The trailing twelve months show AED 0.94bn of revenue, up 15.5%, and consensus expects AED 0.61bn in 2026, down 25%, with EPS of AED 0.07, up 5.1%. The revenue estimate looks inconsistent with the current base and should be treated with caution.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was AED 0.10bn in 2021, AED 0.15bn in 2022, AED 0.33bn in 2023, AED 0.38bn in 2024 and AED 0.97bn in 2025. The 2025 figure includes investment gains and is not representative of operating earnings.",
      "Return on equity was 7.1% on a trailing basis, low because the exchange holds a large equity base relative to its profit. Return on invested capital of 6.6% is also modest. The company has almost no debt and AED 0.80bn of cash.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was AED 0.68bn on a trailing basis, comfortably covering the dividend. The dividend yield is 5.0%, supported by the cash flow and the net cash balance. The exchange has little debt, so the main risk to the payout is a prolonged slump in trading activity rather than a refinancing wall.",
      "The main calls on cash are technology, new products and regulatory capital. The exchange has a strong balance sheet and can maintain the dividend through a trading downturn.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 1.265 the shares trade at 16.0x trailing earnings and 7.3x EV/EBITDA, a discount to global exchanges on EBITDA. The 5.0% dividend yield provides support, but the earnings are cyclical.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 1.75 and a range of AED 1.41–2.26 from five analysts. Three carry a strong buy, one a hold and one a strong sell. The FY2026 revenue estimate is unreliable, so the target and the dividend are the better signals. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is moderate but polarised, with three strong buys against a strong sell. The bulls focus on Dubai's IPO pipeline and the dividend; the bear worries about the cyclicality and the valuation.",
      "The key debate is the level of trading activity and the pipeline of new listings. A strong market supports revenue and the dividend; a quiet one would expose the fixed cost base.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 1.75 (range AED 1.41–2.26), 5 analysts, November 2026." },
      { title: "2025 anchor", detail: "Revenue AED 0.82bn, net income AED 0.97bn including investment gains." },
      { title: "Ratings mix", detail: "3 strong buy, 0 buy, 1 hold, 0 sell, 1 strong sell." },
    ],
  },
  risks: {
    intro:
      "The risks are trading volumes, the IPO pipeline and the quality of earnings.",
    items: [
      {
        title: "Market activity",
        severity: "High",
        detail:
          "Revenue depends on trading volumes and listings. A quiet market would reduce fees and profit.",
        watch: "Trading value, IPO pipeline, investor sentiment.",
      },
      {
        title: "Earnings quality",
        severity: "Medium",
        detail:
          "Net income includes investment gains. A reversal would reduce reported profit and the dividend cover.",
        watch: "Operating profit, investment income, one-offs.",
      },
      {
        title: "Competition",
        severity: "Medium",
        detail:
          "Regional exchanges and alternative trading venues compete for listings and liquidity.",
        watch: "Listing wins, market share, reforms.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "At 16x earnings the shares price in a recovery in activity. A disappointment would compress the multiple.",
        watch: "Relative P/E, EPS growth, estimate revisions.",
      },
    ],
    watchlist: [
      { title: "Trading volumes", detail: "The main revenue driver." },
      { title: "IPO pipeline", detail: "New listings and fees." },
      { title: "Investment income", detail: "Quality of earnings." },
      { title: "Dividend", detail: "Payout and coverage." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Dubai Financial Market is the monopoly exchange for onshore Dubai equities, with a 5.0% dividend yield and a 16.0x earnings multiple. Revenue is growing, but earnings are cyclical and include investment gains.",
      "The investment case is a leveraged play on Dubai's capital markets. The main risks are trading volumes and the quality of earnings; the main support is the monopoly and the dividend.",
    ],
    questions: [
      "How much of 2025 net income came from investment gains?",
      "What is the IPO pipeline for 2026?",
      "Is the dividend covered by operating cash flow?",
      "How is competition from other exchanges affecting volumes?",
    ],
  },
};
