import type { StockStory } from "@/content/stocks/types";

export const qatarElectricityWater: StockStory = {
  ticker: "QEWS",
  kicker: "Qatar · Power and water",
  title: "Nebras Energy: Qatari power and water at 11.5x earnings",
  dek:
    "QEWS, now Nebras Energy, owns and operates power and desalination plants in Qatar and abroad. Earnings are steady but returns are low, and the shares trade at 11.5x earnings with a 3.5% dividend yield and a consensus target well above the price.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of QAR 3.07bn and net income of QAR 1.37bn, with a 25.4% operating margin and 8.3% return on equity.",
    "Revenue rose from QAR 2.38bn in 2021 to QAR 2.92bn in 2025, while net income slipped from QAR 1.47bn to QAR 1.36bn.",
    "The group owns and operates power and desalination plants under long-term contracts, mainly in Qatar.",
    "At QAR 14.28 the shares trade at 11.5x earnings and 11.5x EV/EBITDA, with a 3.5% dividend yield.",
    "Consensus has a mean target of QAR 18.77 from five analysts, all positive, with a range of QAR 15.40–25.00.",
  ],
  filingUrl: "https://stockanalysis.com/quote/qse/QEWS/financials/",
  irUrl: "https://www.nebras.com.qa",
  bigPicture: {
    paragraphs: [
      "Nebras Energy, formerly Qatar Electricity & Water Company, owns and operates power generation and desalination plants in Qatar and internationally. It sells electricity and water under long-term contracts, with the Qatari state as the main customer, and it has expanded into renewable and international projects.",
      "The equity is a regulated-infrastructure asset with long-term contracts and a stable dividend. Revenue is predictable, and the main risk is the return on new investment and the cost of the assets. The market values the shares at a modest multiple because of the low growth and the regulated returns.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The company owns and operates gas-fired power plants and desalination units, and it has stakes in international power and water projects. It sells capacity and output under long-term power and water purchase agreements, which provide stable revenue.",
      "Nebras also invests in renewable energy and in new technologies, including solar and efficiency projects. Those investments are small relative to the core business but provide growth and diversification.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is capacity payments and output sales under long-term contracts. The contracts are designed to recover the capital cost of the plants plus a return, so cash flow is predictable. Operating margin was 25.4% on a trailing basis.",
      "Net income of QAR 1.37bn exceeds EBITDA of QAR 1.11bn, which indicates that a large part of profit comes from the share of results from associates and joint ventures rather than from consolidated operations. That makes the consolidated EBITDA and margin figures less representative than the net income and dividend.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from QAR 2.38bn in 2021 to QAR 2.92bn in 2025, a compound growth rate of about 5%, driven by new capacity and contract indexation. Net income fell from QAR 1.47bn to QAR 1.36bn as costs and depreciation rose.",
      "The trailing twelve months show QAR 3.07bn of revenue, up 3.8%, and consensus expects QAR 3.2bn in 2026, up 8.3%, with EPS of QAR 1.21, down 2.6%. Growth is expected to be modest, with new projects providing the next leg.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was QAR 1.47bn in 2021, QAR 1.71bn in 2022, QAR 1.55bn in 2023, QAR 1.42bn in 2024 and QAR 1.36bn in 2025. The decline reflects higher costs and the normalisation of returns, not a loss of demand.",
      "Return on equity was 8.3% on a trailing basis, and return on invested capital 2.8%, low for an infrastructure company. The group carries QAR 7.05bn of debt and QAR 1.84bn of cash, leverage that is normal for a utility but leaves limited room for new projects without additional capital.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was QAR 0.44bn on a trailing basis, positive but modest relative to the asset base. The dividend yield is 3.5%, supported by the contracted cash flows.",
      "The main calls on cash are debt service, maintenance and new projects. The company has a stable dividend policy, but the low return on equity limits the growth in the payout.",
    ],
  },
  valuation: {
    paragraphs: [
      "At QAR 14.28 the shares trade at 11.5x trailing earnings and 11.5x EV/EBITDA, a discount to global utilities. The 3.5% dividend yield provides support, and the low multiple reflects the regulated returns and the slow growth.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of QAR 18.77 and a range of QAR 15.40–25.00 from five analysts. Two carry a strong buy and three a buy, with no holds or sells. FY2026 revenue is expected at QAR 3.2bn and EPS at QAR 1.21. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is thin but uniformly positive, with a wide target range. The bulls focus on the contracted cash flows and the dividend; the wide range reflects uncertainty about new projects and returns.",
      "The key debate is the return on new capacity and the growth in the international portfolio. A higher return on invested capital would justify a re-rating; a low-return expansion would not.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "QAR 18.77 (range QAR 15.40–25.00), 5 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue QAR 3.2bn, +8.3%; EPS QAR 1.21, -2.6%." },
      { title: "Ratings mix", detail: "2 strong buy, 3 buy, 0 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are regulated returns, project execution and the low return on capital.",
    items: [
      {
        title: "Regulated returns",
        severity: "High",
        detail:
          "Revenue and returns are set by long-term contracts with the state. A less favourable framework would reduce earnings.",
        watch: "Contract renewals, tariff reviews, state policy.",
      },
      {
        title: "Low return on capital",
        severity: "Medium",
        detail:
          "ROIC of 2.8% is low. New projects must earn above the cost of capital to create value.",
        watch: "ROIC, project returns, capital allocation.",
      },
      {
        title: "Project execution",
        severity: "Medium",
        detail:
          "New plants and international projects carry construction and operational risk.",
        watch: "Capex, project milestones, utilisation.",
      },
      {
        title: "Dividend",
        severity: "Low",
        detail:
          "The 3.5% yield is supported by contracted cash flows, but slow growth limits the payout growth.",
        watch: "Free cash flow, payout ratio.",
      },
    ],
    watchlist: [
      { title: "Contract returns", detail: "Long-term power and water agreements." },
      { title: "New projects", detail: "Returns and timing." },
      { title: "Dividend", detail: "Payout and coverage." },
      { title: "International portfolio", detail: "Growth and risk." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Nebras Energy is a contracted power and water producer with stable cash flows, a 3.5% dividend yield and an 11.5x earnings multiple. It is a defensive infrastructure asset with limited growth.",
      "The investment case is income and stability. The main risks are regulated returns and low project returns; the main support is the long-term contracts and the Qatari state backing.",
    ],
    questions: [
      "What returns do the new projects earn?",
      "How much of profit comes from associates versus consolidated plants?",
      "Is the dividend covered by free cash flow?",
      "What is the growth pipeline in Qatar and abroad?",
    ],
  },
};
