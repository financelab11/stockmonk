import type { StockStory } from "@/content/stocks/types";

export const saudiTadawulGroup: StockStory = {
  ticker: "1111",
  kicker: "Saudi Arabia · Exchange and market infrastructure",
  title: "Saudi Tadawul Group: the exchange at 46x earnings",
  dek:
    "Saudi Tadawul Group operates the kingdom's stock exchange, clearing house and market-data business. Revenue is tied to trading activity and listings, the dividend yield is 2.0%, and the shares trade at 46x earnings after a profit decline.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of SAR 1.21bn and net income of SAR 0.29bn, with a 17.2% operating margin and 9.1% return on equity.",
    "Revenue was SAR 1.26bn in 2025, down from the SAR 1.45bn peak in 2024, and net income fell from SAR 0.62bn to SAR 0.40bn.",
    "The group operates the Tadawul equity market, the Nomu parallel market, clearing, custody and market data.",
    "At SAR 112 the shares trade at 46.0x earnings and 38.8x EV/EBITDA, with a 2.0% dividend yield.",
    "Consensus has a mean target of SAR 145.57 from six analysts, but five of the six carry a hold.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/1111/financials/",
  irUrl: "https://www.saudiexchange.sa",
  bigPicture: {
    paragraphs: [
      "Saudi Tadawul Group owns and operates the Saudi stock exchange, the largest and most liquid equity market in the Middle East. It runs the main Tadawul market, the Nomu parallel market, the securities clearing house and custody business, and a market-data and technology arm.",
      "The equity is a play on Saudi capital-market growth. Revenue depends on trading volumes, listing fees and data subscriptions, which are linked to market activity and to the pipeline of IPOs. The business has high operating leverage, so profits swing with volumes and sentiment.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The exchange earns fees from trading, clearing and settlement, listing and annual maintenance, and market data. It also provides custody, registry and technology services, and it is developing new products such as derivatives, ETFs and indices.",
      "The group is investing in technology and in new market infrastructure to attract more issuers and investors. It also benefits from the Saudi government's push to deepen capital markets and to list state-owned companies.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is a mix of transaction fees, listing fees, data subscriptions and technology services. Transaction fees are the most cyclical; listing and data fees are more recurring. Operating margin was 17.2% on a trailing basis, down from 52.5% in 2021 as costs and investment rose.",
      "The main costs are technology, staff and market operations. The business has high fixed costs, so incremental revenue carries high margins. A strong IPO pipeline and higher trading volumes are the key drivers of profit.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue was SAR 1.17bn in 2021, SAR 1.09bn in 2022, SAR 1.07bn in 2023, SAR 1.45bn in 2024 and SAR 1.26bn in 2025. Net income was SAR 0.59bn, SAR 0.42bn, SAR 0.39bn, SAR 0.62bn and SAR 0.40bn over the same years, tracking market activity and investment spending.",
      "The trailing twelve months show SAR 1.21bn of revenue, down 8.1%, and consensus expects SAR 1.2bn in 2026, down 3.9%, with EPS of SAR 2.05, down 37.7%. The estimate suggests profit remains under pressure as costs rise and volumes normalise.",
    ],
  },
  performance: {
    paragraphs: [
      "The profit history is volatile: a strong 2021, weaker 2022–23, a recovery in 2024 and a decline in 2025. The 2025 drop reflects lower trading volumes and higher investment, not a structural loss of market share.",
      "Return on equity was 9.1% on a trailing basis, and return on invested capital 4.6%, low for an exchange because of the capital and technology investment. The group carries SAR 0.94bn of debt and SAR 0.60bn of cash.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was SAR 0.23bn on a trailing basis, positive but modest. The dividend yield is 2.0%, low for a mature exchange, reflecting the reinvestment and the lower profit.",
      "The main calls on cash are technology, new products and regulatory capital. The group has a strong balance sheet but a high valuation, so the dividend is not the main attraction.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 112 the shares trade at 46.0x trailing earnings and 38.8x EV/EBITDA, a premium to global exchanges. The multiple reflects the growth potential of the Saudi market and the scarcity of listed exchange assets in the region.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 145.57 and a range of SAR 114.00–178.00 from six analysts. One carries a strong buy and five a hold, with no sells. FY2026 revenue is expected at SAR 1.2bn and EPS at SAR 2.05. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is limited and cautious: five holds and one strong buy. The market is weighing the long-term growth story against the high multiple and the recent profit decline. The narrow spread of ratings suggests that most analysts see the shares as fairly valued rather than cheap, and the single buy is an outlier.",
      "The key debate is the IPO pipeline and the level of trading activity. A strong pipeline and rising volumes would justify the premium; a quiet market would leave the shares exposed.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 145.57 (range SAR 114.00–178.00), 6 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 1.2bn, -3.9%; EPS SAR 2.05, -37.7%." },
      { title: "Ratings mix", detail: "1 strong buy, 0 buy, 5 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are trading volumes, the IPO pipeline and the premium valuation.",
    items: [
      {
        title: "Market activity",
        severity: "High",
        detail:
          "Revenue depends on trading volumes and listings. A quiet market would reduce fees and profit.",
        watch: "Trading value, IPO pipeline, market sentiment.",
      },
      {
        title: "Premium valuation",
        severity: "High",
        detail:
          "At 46x earnings the shares price in strong growth. A disappointment would compress the multiple.",
        watch: "Relative P/E, EPS growth, estimate revisions.",
      },
      {
        title: "Cost inflation",
        severity: "Medium",
        detail:
          "Technology and regulatory investment is raising the cost base, which is compressing margins.",
        watch: "Operating margin, cost-to-income, capex.",
      },
      {
        title: "Competition",
        severity: "Low",
        detail:
          "Regional exchanges compete for listings, though Tadawul is the largest market in the region.",
        watch: "Listing wins, market share, regional reforms.",
      },
    ],
    watchlist: [
      { title: "Trading volumes", detail: "The main revenue driver." },
      { title: "IPO pipeline", detail: "New listings and fees." },
      { title: "Margins", detail: "Cost growth and operating leverage." },
      { title: "New products", detail: "Derivatives, ETFs and data." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Saudi Tadawul Group is the dominant exchange in the Middle East, with a strong franchise and exposure to Saudi capital-market growth. It trades at 46x earnings, a premium that reflects the scarcity and the growth potential.",
      "The investment case is a long-term growth story with cyclical earnings. The main risks are trading volumes and the valuation; the main opportunity is the IPO pipeline and new products.",
    ],
    questions: [
      "What is the IPO pipeline for 2026?",
      "How much of revenue is recurring versus transaction-based?",
      "Why have margins fallen since 2021?",
      "What new products could drive growth?",
    ],
  },
};
