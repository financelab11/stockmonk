import type { StockStory } from "@/content/stocks/types";

export const qatarFuel: StockStory = {
  ticker: "QFLS",
  kicker: "Qatar · Fuel retail and distribution",
  title: "WOQOD: Qatar's fuel retailer at 11.9x earnings and a 6.6% yield",
  dek:
    "Qatar Fuel, known as WOQOD, runs the country's fuel stations, supplies aviation and marine fuel, and transports petroleum products. Revenue is large but margins are thin, and the shares trade at 11.9x earnings with a 6.6% dividend yield.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of QAR 24.6bn and net income of QAR 1.14bn, with a 3.0% operating margin and 4.6% net margin.",
    "Revenue fell from QAR 29.9bn in 2022 to QAR 25.9bn in 2025, tracking fuel prices and volumes.",
    "The company operates fuel stations, convenience stores, aviation refuelling and marine bunkering in Qatar.",
    "At QAR 13.69 the shares trade at 11.9x earnings and 11.5x EV/EBITDA, with a 6.6% dividend yield.",
    "Consensus has a mean target of QAR 14.19 from just two analysts, one buy and one hold.",
  ],
  filingUrl: "https://stockanalysis.com/quote/qse/QFLS/financials/",
  irUrl: "https://www.woqod.com.qa",
  bigPicture: {
    paragraphs: [
      "Qatar Fuel, or WOQOD, is the state-backed fuel retailer and distributor in Qatar. It operates a network of fuel stations, convenience stores and vehicle-inspection centres, and it supplies aviation fuel, marine bunkers and bulk fuels to industry and government.",
      "The equity is a defensive fuel-distribution business with a regulated margin and a large dividend. Fuel volumes grow with the Qatari economy, while non-fuel retail and aviation add higher-margin revenue. The trade-off is that the business is mature and exposed to fuel-price and subsidy policy.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "WOQOD sells petrol and diesel through its stations, operates convenience stores and car washes, and provides vehicle inspection and registration services. It also supplies jet fuel to airlines at Qatari airports and marine fuel to ships at Qatari ports.",
      "The company transports and stores petroleum products through a fleet of tankers and a network of depots. It has been expanding its station network and its non-fuel retail offer to capture more of the consumer spend.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the volume of fuel sold multiplied by the price. The margin on fuel is regulated and thin, so the company earns most of its profit from non-fuel retail, aviation, marine and inspection services. Operating margin was 3.0% on a trailing basis.",
      "Net income of QAR 1.14bn exceeds EBITDA of QAR 0.91bn, which indicates that a meaningful part of profit comes from associates and joint ventures rather than from consolidated operations. That makes the consolidated margin and EV/EBITDA less representative than the net income and dividend.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue was QAR 19.53bn in 2021, QAR 29.93bn in 2022, QAR 27.93bn in 2023, QAR 28.05bn in 2024 and QAR 25.94bn in 2025. The pattern tracks fuel prices rather than volumes, which have grown modestly with the Qatari economy.",
      "The trailing twelve months show QAR 24.55bn of revenue, down 5.6%, and consensus expects QAR 21.6bn in 2026, down 16.9%, with EPS of QAR 0.87, down 17.1%. The decline reflects lower fuel prices and volumes, and the estimates are based on just two analysts.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was QAR 0.97bn in 2021, QAR 1.07bn in 2022, QAR 0.98bn in 2023, QAR 1.05bn in 2024 and QAR 1.04bn in 2025 — remarkably stable despite the swing in revenue. That stability reflects the regulated fuel margin and the diversified service income.",
      "Return on equity was 12.3% on a trailing basis, and return on invested capital 8.5%, solid for a fuel distributor. The company carries QAR 1.18bn of debt and QAR 3.52bn of cash, a net cash position that supports the dividend.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was QAR 1.12bn on a trailing basis, comfortably covering the dividend. The dividend yield is 6.6%, one of the highest in the Qatari market, and the payout is supported by the stable cash flow and the net cash balance.",
      "The main calls on cash are station expansion, depot maintenance and the dividend. The company has been investing in new stations and non-fuel retail, which should support long-term growth.",
    ],
  },
  valuation: {
    paragraphs: [
      "At QAR 13.69 the shares trade at 11.9x trailing earnings and 11.5x EV/EBITDA, a discount to global fuel retailers. The 6.6% dividend yield is the main attraction.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of QAR 14.19 and a narrow range of QAR 13.77–14.60 from just two analysts. One carries a buy and one a hold, with no sells. FY2026 revenue is expected at QAR 21.6bn and EPS at QAR 0.87. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is minimal, with two analysts and a narrow target range. That is common for Qatari state-linked companies with limited free float, but it makes the consensus less informative.",
      "The key debate is the sustainability of the dividend and the growth in non-fuel retail. Fuel volumes are mature, so the company needs to grow services and convenience to offset the slow core.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "QAR 14.19 (range QAR 13.77–14.60), 2 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue QAR 21.6bn, -16.9%; EPS QAR 0.87, -17.1%." },
      { title: "Ratings mix", detail: "0 strong buy, 1 buy, 1 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are fuel-price policy, volume maturity and the thin analyst coverage.",
    items: [
      {
        title: "Fuel-price regulation",
        severity: "High",
        detail:
          "Fuel margins are set by the government. A change in subsidy or pricing policy would affect profit.",
        watch: "Fuel price decisions, subsidy policy.",
      },
      {
        title: "Volume maturity",
        severity: "Medium",
        detail:
          "Fuel demand grows slowly with the vehicle fleet. Non-fuel retail is the main growth lever.",
        watch: "Fuel volumes, station count, non-fuel sales.",
      },
      {
        title: "Thin coverage",
        severity: "Medium",
        detail:
          "Only two analysts cover the stock, which increases the risk of mispricing and low liquidity.",
        watch: "Trading volumes, estimate revisions.",
      },
      {
        title: "Dividend sustainability",
        severity: "Low",
        detail:
          "The 6.6% yield is supported by net cash, but a prolonged profit decline would reduce the payout.",
        watch: "Free cash flow, payout ratio, net cash.",
      },
    ],
    watchlist: [
      { title: "Fuel volumes", detail: "The base of the business." },
      { title: "Non-fuel retail", detail: "Margin growth." },
      { title: "Dividend", detail: "Payout and coverage." },
      { title: "Fuel policy", detail: "Regulated margins." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "WOQOD is a stable fuel retailer with a 6.6% dividend yield, a net cash balance and a 11.9x earnings multiple. The business is mature but defensive, with regulated fuel margins and growing service income.",
      "The investment case is income and stability. The main risks are fuel-price policy and volume maturity; the main support is the dividend and the balance sheet.",
    ],
    questions: [
      "How is the fuel margin set and when will it be reviewed?",
      "What share of profit comes from non-fuel services?",
      "Is the dividend covered through a volume decline?",
      "How many new stations are planned?",
    ],
  },
};
