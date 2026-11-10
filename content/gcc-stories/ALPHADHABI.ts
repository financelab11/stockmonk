import type { StockStory } from "@/content/stocks/types";

export const alphaDhabi: StockStory = {
  ticker: "ALPHADHABI",
  kicker: "United Arab Emirates · Diversified holding",
  title: "Alpha Dhabi Holding: the operating arm of Abu Dhabi's holding complex",
  dek:
    "Alpha Dhabi is a diversified holding company with construction, healthcare, real estate, hospitality and industrial businesses. Revenue has grown quickly through acquisitions, but profit has not kept pace and analyst coverage is thin.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of AED 82.1bn, EBITDA of AED 17.3bn and net income of AED 10.3bn, with an 9.0% return on equity.",
    "Revenue grew from AED 18.7bn in 2021 to AED 78.8bn in 2025, mostly through acquisitions and consolidation.",
    "Net income peaked at AED 10.7bn in 2023 and fell to AED 8.0bn in 2025 despite higher revenue, showing margin dilution.",
    "At 7.1x earnings and 6.6x EV/EBITDA, the shares trade at a conglomerate discount.",
    "Consensus has a mean target of AED 10.85, but only two analysts cover the stock.",
  ],
  filingUrl: "https://stockanalysis.com/quote/adx/ALPHADHABI/financials/",
  irUrl: "https://www.alphadhabiholding.ae",
  bigPicture: {
    paragraphs: [
      "Alpha Dhabi Holding is a diversified Abu Dhabi conglomerate with businesses in construction, healthcare, real estate, hospitality, industrials and financial services. It is closely linked to International Holding Company, which owns a stake and shares the same broad ownership network.",
      "The equity is a portfolio of operating businesses rather than a single company. Revenue growth has been driven by acquisitions and by the consolidation of stakes, while profit has been affected by mix, minority interests and one-off gains. The market applies a holding-company discount, which is why the earnings multiple is so low.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The group's businesses span construction and contracting, healthcare, real estate development and hospitality, industrial services and investments. Some are wholly owned, others are stakes in listed or private companies.",
      "The portfolio is managed at the holding-company level, with capital allocated across sectors. The strategy has been to build scale in Abu Dhabi and to expand internationally where opportunities arise. The group's scale gives it access to large projects and to financing, but it also means that the consolidated results are a blend of very different businesses with different cycles and margins.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the sum of the consolidated operating businesses, which is why it has grown so quickly. Profitability depends on the mix: construction is low-margin and cyclical, healthcare and hospitality are higher-margin, and investment income can swing the bottom line.",
      "The operating margin of 17.5% and net margin of 12.5% are blended figures. Investors need to look through to the individual businesses to understand the quality of earnings.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from AED 18.7bn in 2021 to AED 78.8bn in 2025, and the trailing twelve months show AED 82.1bn. Net income peaked at AED 10.7bn in 2023 before falling to AED 8.9bn in 2024 and AED 8.0bn in 2025 — revenue growth has not translated into profit growth.",
      "The next leg depends on improving returns at the operating companies and on selective acquisitions. Consensus is thin, but the two analysts who cover the stock expect EPS of AED 0.94 in FY2026, up 18.8%.",
    ],
  },
  performance: {
    paragraphs: [
      "The profit trajectory is the concern: net income fell for two consecutive years while revenue grew. That suggests margin dilution from lower-margin construction and consolidation effects, or higher interest and depreciation costs.",
      "Return on equity was 9.0% on a trailing basis, below the cost of equity for a UAE conglomerate. The group needs to improve returns to justify a higher multiple.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was AED 6.7bn on a trailing basis, positive but modest relative to the size of the balance sheet. The group carries AED 50.6bn of debt and AED 36.5bn of cash.",
      "The dividend yield is 2.8%, a small part of the return. The main value driver is the performance of the operating businesses and the holding-company discount. Cash flow covers the dividend comfortably, but the free-cash-flow yield is modest relative to the size of the balance sheet and the debt load.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 7.25 the shares trade at 7.1x trailing earnings and 6.6x EV/EBITDA, a conglomerate discount to the sum of the parts. The discount reflects the complexity, the related-party links and the recent profit decline.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 10.85 and a range of AED 9.50–12.20 from just two analysts. One carries a strong buy and one a hold. FY2026 revenue is expected at AED 84.2bn and EPS at AED 0.94. These are third-party estimates, not Stockmonk forecasts, and the thin coverage makes them less robust.",
    ],
  },
  analysts: {
    paragraphs: [
      "Only two analysts cover the stock, which is unusual for a company of this size. The lack of coverage reflects the holding-company structure and the limited free float rather than a lack of interest in the businesses.",
      "The key debate is capital allocation and the path to higher returns. A simplification of the portfolio or a disposal of non-core assets could narrow the discount.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 10.85 (range AED 9.50–12.20), 2 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue AED 84.2bn, +6.9%; EPS AED 0.94, +18.8%." },
      { title: "Ratings mix", detail: "1 strong buy, 0 buy, 1 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are holding-company complexity, margin dilution and the thin analyst coverage.",
    items: [
      {
        title: "Profit dilution",
        severity: "High",
        detail:
          "Revenue has grown faster than profit for two years. If the trend continues, the discount will persist.",
        watch: "Net margin, ROE, segment mix.",
      },
      {
        title: "Related-party structure",
        severity: "Medium",
        detail:
          "The links to IHC and the wider ownership network create governance and valuation complexity.",
        watch: "Related-party disclosures, ownership changes.",
      },
      {
        title: "Construction cycle",
        severity: "Medium",
        detail:
          "Construction and real estate are cyclical and low-margin. A slowdown in Abu Dhabi projects would hurt.",
        watch: "Construction backlog, Abu Dhabi spending.",
      },
      {
        title: "Thin coverage and liquidity",
        severity: "Medium",
        detail:
          "Only two analysts cover the stock, and the free float is limited. That increases price volatility.",
        watch: "Trading volumes, estimate revisions.",
      },
    ],
    watchlist: [
      { title: "Segment margins", detail: "Construction versus healthcare and hospitality." },
      { title: "Capital allocation", detail: "Acquisitions and disposals." },
      { title: "ROE", detail: "Progress toward the cost of equity." },
      { title: "Dividend", detail: "Payout and coverage." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Alpha Dhabi is a diversified Abu Dhabi holding company with a portfolio of real businesses and a valuation that reflects the conglomerate discount. The low multiple is tempting, but profit has been falling while revenue grows.",
      "The investment case depends on improving returns and simplifying the story. Until those returns improve, the discount is likely to persist.",
    ],
    questions: [
      "Why has profit fallen while revenue has grown?",
      "What returns do the construction and healthcare businesses earn?",
      "Could the group simplify its portfolio or sell non-core assets?",
      "What is the relationship with IHC, and how does it affect minority shareholders?",
    ],
  },
};
