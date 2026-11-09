import type { StockStory } from "@/content/stocks/types";

export const acwaPower: StockStory = {
  ticker: "2082",
  kicker: "Saudi Arabia · Power and water",
  title: "ACWA Power: a growth utility priced for a very long runway",
  dek:
    "ACWA Power builds and operates power, desalination and green hydrogen plants across the Middle East and beyond. The growth pipeline is large, but the shares trade at a utility-premium multiple that assumes years of successful project delivery.",
  readingMinutes: 9,
  takeaways: [
    "TTM revenue of SAR 8.3bn, EBITDA of SAR 2.8bn and net income of SAR 1.9bn, with a 25% operating margin.",
    "Revenue grew from SAR 5.2bn in 2021 to SAR 7.4bn in 2025, a low-double-digit compound rate.",
    "The business is asset-heavy: project debt of SAR 33.5bn and a 6.0% return on equity.",
    "At 66x earnings and 43x EV/EBITDA, the valuation is closer to a growth infrastructure company than a utility.",
    "Consensus is unusually negative: a mean target of SAR 141.14 from 8 analysts, with five strong sells.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/2082/financials/",
  irUrl: "https://www.acwapower.com",
  bigPicture: {
    paragraphs: [
      "ACWA Power is one of the largest private developers of power and desalination plants in the Middle East, with a portfolio that spans Saudi Arabia, the UAE, Egypt, Morocco, South Africa and Central Asia. It has moved into green hydrogen and renewable energy, positioning itself as a partner for governments that want to decarbonise while growing capacity.",
      "The equity is a long-duration growth story. Each project requires years of development and construction before it produces cash, and the returns are regulated or contracted. The market values the company on the pipeline rather than current earnings, which is why the multiple is so far above a conventional utility.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "ACWA Power develops, invests in, operates and maintains power generation, water desalination and green hydrogen facilities. It typically holds long-term offtake contracts with state utilities, which reduces demand risk but also caps upside. The company earns a return on its equity investment and fees for operations and maintenance.",
      "The portfolio is diversified by technology and geography, with a growing share of renewables and a flagship green hydrogen project at NEOM. The Saudi market is the largest, supported by the Kingdom's plan to add renewable capacity and reduce domestic fuel burning.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from selling electricity and water under long-term contracts, plus construction and operations fees. Because the contracts are inflation-linked or fixed with periodic reviews, cash flows are relatively predictable once a plant is operating. The development and construction phase is where the risk sits.",
      "The company uses project finance extensively, so debt is raised at the asset level rather than at the parent. That structure supports returns on equity, but it also means the group's reported debt understates the total capital employed in the portfolio.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from SAR 5.2bn in 2021 to SAR 7.4bn in 2025, and the trailing twelve months show SAR 8.3bn. Growth comes from new plants coming online and from the expansion of the pipeline. Consensus expects revenue of SAR 8.8bn in FY2026, up 18.3%.",
      "The pipeline is large but back-end loaded. Projects in development may take three to five years to reach commercial operation, so the earnings contribution lags the announcements. The green hydrogen project is the most ambitious and the least proven.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income grew from SAR 0.8bn in 2021 to SAR 1.9bn in 2025, a solid trajectory, but the return on equity is only 6.0% because the equity base is large relative to current profits. Operating margin was 25.4% on a trailing basis.",
      "The 2024 margin dip to 26.1% and the recovery to 35.0% in 2025 show how project mix and one-off items can move the reported numbers. The underlying business is stable, but the accounting is complex.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was SAR 1.9bn on a trailing basis, but the company is investing heavily in new projects, so cash flow can swing with the construction cycle. Group debt of SAR 33.5bn and cash of SAR 4.4bn reflect the project-finance model.",
      "The dividend is tiny — a 0.3% yield — because the company retains cash to fund growth. Investors are buying the pipeline, not the payout.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 161.90 the shares trade at 66.4x trailing earnings and 43.4x EV/EBITDA. Those multiples are far above listed utilities and reflect the market's expectation of years of double-digit growth and successful project execution.",
      "Third-party consensus, attributed and dated November 2026, is more cautious than the market: a mean target of SAR 141.14 and a range of SAR 100.00–195.00 from 8 analysts. None carry a strong buy or buy, two are neutral, one is a sell and five are strong sells. FY2026 revenue is expected at SAR 8.8bn and EPS at SAR 2.61. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The negative ratings are notable for a Saudi growth name. The market is questioning whether the pipeline can generate returns that justify the valuation, and whether the green hydrogen project will be as profitable as promised.",
      "The wide target range — SAR 100 to 195 — shows how much the valuation depends on assumptions about project timing, leverage and the cost of capital. This is a stock where the discount rate matters as much as the growth rate.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 141.14 (range SAR 100.00–195.00), 8 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 8.8bn, +18.3%; EPS SAR 2.61, -10.8%." },
      { title: "Ratings mix", detail: "0 strong buy, 0 buy, 2 hold, 1 sell, 5 strong sell." },
    ],
  },
  risks: {
    intro:
      "The risks are project execution, leverage and a valuation that leaves no margin for error.",
    items: [
      {
        title: "Project delivery",
        severity: "High",
        detail:
          "The pipeline is large and complex. Delays or cost overruns would defer cash flow and could impair returns.",
        watch: "Project milestones, capex, commercial operation dates.",
      },
      {
        title: "Leverage and refinancing",
        severity: "High",
        detail:
          "Project debt is substantial. Higher interest rates or tighter lending conditions would raise the cost of capital.",
        watch: "Net debt/EBITDA, project finance spreads, refinancing.",
      },
      {
        title: "Green hydrogen execution",
        severity: "Medium",
        detail:
          "The NEOM project is a first-of-its-kind investment with technology and offtake risk.",
        watch: "Final investment decision, offtake contracts, costs.",
      },
      {
        title: "Valuation",
        severity: "High",
        detail:
          "At 43x EV/EBITDA, the shares are priced for perfection. A growth disappointment would compress the multiple sharply.",
        watch: "EV/EBITDA versus global utilities, consensus revisions.",
      },
    ],
    watchlist: [
      { title: "Project pipeline", detail: "Awards, financial close and COD dates." },
      { title: "Leverage", detail: "Group and project debt levels." },
      { title: "Green hydrogen", detail: "NEOM progress and offtake." },
      { title: "Cost of capital", detail: "Interest rates and project finance availability." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "ACWA Power is a genuine growth infrastructure company with a rare portfolio of contracted power and water assets. The problem is the price: at 43x EV/EBITDA, the market already assumes a long runway of successful projects and a low cost of capital.",
      "The shares are a bet on execution and on the energy transition in the Gulf. The negative analyst consensus is a warning that the risk-reward is not obvious at this valuation, even if the assets are high quality.",
    ],
    questions: [
      "What return on equity do new projects earn at current financing costs?",
      "How much of the pipeline is contracted versus speculative?",
      "What is the realistic timeline for green hydrogen profitability?",
      "What growth rate is embedded in the current EV/EBITDA multiple?",
    ],
  },
};
