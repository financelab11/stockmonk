import type { StockStory } from "@/content/stocks/types";

export const electricalIndustries: StockStory = {
  ticker: "1303",
  kicker: "Saudi Arabia · Electrical equipment",
  title: "Electrical Industries: grid equipment at 14.7x earnings",
  dek:
    "Electrical Industries Company makes transformers, substations and distribution panels for Saudi Arabia's grid and construction projects. Profit has grown more than tenfold since 2021, and the shares trade at 14.7x earnings with a 2.4% dividend yield.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of SAR 2.70bn and net income of SAR 0.79bn, with a 29.7% operating margin and 59.8% return on equity.",
    "Revenue rose from SAR 0.77bn in 2021 to SAR 2.30bn in 2025, and net income from SAR 0.05bn to SAR 0.63bn.",
    "The company manufactures transformers, compact substations, low-voltage panels and other electrical equipment.",
    "At SAR 10.30 the shares trade at 14.7x earnings and 13.8x EV/EBITDA, with a 2.4% dividend yield.",
    "No reliable third-party consensus is available in the current feed, so the report relies on reported financials.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/1303/financials/",
  irUrl: "https://www.eic.sa",
  bigPicture: {
    paragraphs: [
      "Electrical Industries Company is a Saudi manufacturer of electrical equipment for power transmission and distribution. Its products include transformers, compact substations, low-voltage panels, cables and control systems, sold to utilities, contractors and industrial customers.",
      "The equity is a play on Saudi Arabia's grid investment and construction boom. The Vision 2030 programme is expanding electricity networks, renewable connections and new cities, all of which require electrical equipment. The company has grown rapidly by winning projects and expanding capacity.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The company designs, assembles and tests electrical equipment at its plants in Saudi Arabia. It supplies transformers and substations to the Saudi Electricity Company and to contractors building residential, commercial and industrial projects.",
      "It also provides repair, maintenance and testing services, which generate recurring revenue and deepen customer relationships. The product range covers low-, medium- and high-voltage applications, and the company has been investing in new capacity to meet demand.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the value of equipment sold and services provided. The margin depends on the product mix and on the pricing of fixed-price contracts. Operating margin was 29.7% on a trailing basis, high for a manufacturer and a sign of strong demand and pricing.",
      "The main costs are raw materials, components, labour and energy. The company sources some components internationally, so currency and supply-chain conditions affect costs. The order backlog is the key indicator of future revenue.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from SAR 0.77bn in 2021 to SAR 2.30bn in 2025, a compound growth rate of about 31%, driven by Saudi grid investment and construction. Net income rose from SAR 0.05bn to SAR 0.63bn as margins expanded.",
      "The trailing twelve months show SAR 2.70bn of revenue, up 32.1%. Without a reliable consensus, the near-term outlook depends on the project pipeline and on the company's ability to convert the backlog into revenue.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income rose every year from 2021 to 2025, from SAR 0.05bn to SAR 0.63bn. Operating margin expanded from 9.3% to 29.2%, reflecting better pricing, a richer product mix and operating leverage.",
      "Return on equity was 59.8% on a trailing basis, extremely high because the equity base is small relative to revenue and the company uses little debt. Return on invested capital of 46.6% confirms the quality of the business.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was SAR 0.29bn on a trailing basis, positive but lower than profit because of working capital and capital spending. The dividend yield is 2.4%, modest for a growth company.",
      "The main calls on cash are capacity expansion and working capital for large projects. The company carries SAR 0.18bn of debt and SAR 0.14bn of cash, a conservative balance sheet.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 10.30 the shares trade at 14.7x trailing earnings and 13.8x EV/EBITDA, a discount to global electrical-equipment companies. The discount reflects the small size, the project concentration and the lack of analyst coverage.",
      "No reliable third-party consensus target is available in the current feed. The valuation should be assessed on the order backlog, the margin trend and the return on capital rather than on a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sell-side coverage is absent from the current data feed, which is unusual for a company with this growth record. The limited free float and the small size are the likely reasons, and investors should rely on the order backlog, the margin trend and the balance sheet rather than on a consensus target.",
      "The key debate is the sustainability of the margin and the project pipeline. A strong Saudi grid programme supports demand; a slowdown or more competition would pressure pricing.",
    ],
    bullets: [
      { title: "Coverage", detail: "No reliable consensus target in the current feed." },
      { title: "Returns", detail: "59.8% ROE and 46.6% ROIC." },
      { title: "Growth", detail: "Revenue up 31% compound since 2021." },
    ],
  },
  risks: {
    intro:
      "The risks are the project cycle, margin normalisation and customer concentration.",
    items: [
      {
        title: "Project cycle",
        severity: "High",
        detail:
          "Revenue depends on Saudi grid and construction spending. A slowdown in awards would reduce the backlog.",
        watch: "Project awards, SEC capex, construction activity.",
      },
      {
        title: "Margin normalisation",
        severity: "High",
        detail:
          "Margins are at a high level. More competition or higher input costs would compress them.",
        watch: "Operating margin, bid pricing, raw materials.",
      },
      {
        title: "Customer concentration",
        severity: "Medium",
        detail:
          "Utilities and large contractors account for a significant share of revenue.",
        watch: "Top customers, contract mix.",
      },
      {
        title: "Working capital",
        severity: "Medium",
        detail:
          "Large projects consume working capital, which can strain cash flow.",
        watch: "Receivables, inventory, free cash flow.",
      },
    ],
    watchlist: [
      { title: "Backlog", detail: "New orders and project awards." },
      { title: "Margins", detail: "Pricing and input costs." },
      { title: "Working capital", detail: "Cash conversion." },
      { title: "Capacity", detail: "Expansion and utilisation." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Electrical Industries is a high-growth, high-return manufacturer with exposure to Saudi Arabia's grid investment. It trades at 14.7x earnings, a discount to global peers, and has a strong balance sheet.",
      "The investment case is a quality cyclical with a supportive backlog. The main risks are the project cycle and margin normalisation; the main support is the company's market position and the Saudi spending programme.",
    ],
    questions: [
      "What is the order backlog and its duration?",
      "How much of revenue comes from the Saudi Electricity Company?",
      "Can margins hold as competition increases?",
      "How much capacity is being added?",
    ],
  },
};
