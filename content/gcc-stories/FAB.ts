import type { StockStory } from "@/content/stocks/types";

export const firstAbuDhabiBank: StockStory = {
  ticker: "FAB",
  kicker: "United Arab Emirates · Universal banking",
  title: "First Abu Dhabi Bank: the UAE's largest lender at a single-digit multiple",
  dek:
    "FAB is the UAE's largest bank by assets, with a corporate and investment-banking franchise that reaches across the Gulf, Europe and Asia. It trades at around 10x earnings, and consensus expects mid-single-digit EPS growth in 2026.",
  readingMinutes: 8,
  takeaways: [
    "TTM revenue of AED 34.7bn and net income of AED 21.6bn, with a 62% net margin and 14.6% return on equity.",
    "Revenue grew from AED 19.8bn in 2021 to AED 33.4bn in 2025, helped by higher rates and loan growth.",
    "The bank is the product of the NBAD–FGB merger, with a leading corporate, trade-finance and investment-banking franchise.",
    "At 10.4x earnings and 4.1% dividend yield, the shares are priced as a mature, well-capitalised lender.",
    "Consensus has a mean target of AED 21.88 from 17 analysts, with FY2026 EPS expected at AED 1.93.",
  ],
  filingUrl: "https://stockanalysis.com/quote/adx/FAB/financials/",
  irUrl: "https://www.bankfab.com",
  bigPicture: {
    paragraphs: [
      "First Abu Dhabi Bank is the largest bank in the UAE and one of the largest in the Gulf. It was formed by the merger of National Bank of Abu Dhabi and First Gulf Bank, combining a corporate and wholesale franchise with a strong retail and Islamic banking business. The bank has operations in the UAE, Saudi Arabia, Egypt, the UK, Europe, the Americas and Asia.",
      "The equity is a play on the Abu Dhabi economy and on the UAE's role as a trade and capital hub. FAB finances large corporates, government-related entities and cross-border trade, and it earns fees from investment banking, trade finance and wealth. The bank is systemically important and closely linked to the state.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "FAB provides corporate and institutional banking, retail banking, Islamic finance, wealth management and investment banking. The corporate book serves large UAE groups, government entities and international companies; the retail arm offers mortgages, personal finance, cards and deposits.",
      "The international network is a differentiator: FAB is one of the few Gulf banks with a meaningful presence in Europe, Asia and the Americas, which supports trade finance and cross-border corporate relationships. The bank also has a growing Islamic finance franchise.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Net interest income is the largest revenue line, supplemented by fees from trade finance, investment banking, asset management and cards. The funding base is strong, with a large current-account and government-related deposit base that keeps the cost of funds low.",
      "Provisioning is the main earnings variable. The corporate book has exposure to real estate, contracting and government-related entities; the bank has historically carried conservative coverage, which gives it room to absorb a normalisation. Higher rates have boosted net interest income, and the benefit is now largely in the numbers.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from AED 19.8bn in 2021 to AED 33.4bn in 2025, and net income from AED 12.5bn to AED 21.1bn. The trailing twelve months show AED 34.7bn of revenue and AED 21.6bn of net income. Growth was driven by higher rates, loan growth and fees.",
      "Consensus for FY2026 assumes revenue of AED 39.6bn, up 7.9%, and EPS of AED 1.93, up 4.1%. That is a slowdown from the 2025 pace, reflecting the expected easing of rates and a more mature credit cycle.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income grew every year from 2021 to 2025, with a particularly strong 2025: revenue of AED 33.4bn and net income of AED 21.1bn. Return on equity was 14.6% on a trailing basis, a solid level for a large universal bank.",
      "The net margin of 62% is high, reflecting the low cost of funds and the mix toward corporate and government deposits. The bank's challenge is to keep that margin as rates fall.",
    ],
  },
  cash: {
    paragraphs: [
      "As with all banks, the relevant measures are capital, liquidity and the dividend. FAB pays a 4.1% trailing dividend yield, supported by strong earnings and a comfortable capital ratio. The payout is a key part of the total return.",
      "The balance sheet carries AED 262.9bn of debt and AED 199.9bn of cash, reflecting the bank's role in funding the Abu Dhabi economy. Liquidity is strong, and the bank has access to international capital markets.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 19.64 the shares trade at 10.4x trailing earnings, a discount to global universal banks and in line with regional peers. The 4.1% dividend yield provides support.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 21.88 and a range of AED 17.10–25.12 from 17 analysts. Eleven carry a strong buy, two a buy, three a hold and one a sell. FY2026 revenue is expected at AED 39.6bn and EPS at AED 1.93. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The ratings are strongly positive, reflecting the bank's scale, the Abu Dhabi backdrop and the valuation. The mean target implies moderate upside, and the dividend adds to the expected return.",
      "The key debate is the trajectory of net interest income as rates ease and the cost of risk as the credit cycle matures. FAB's corporate concentration is the main risk to the earnings base.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 21.88 (range AED 17.10–25.12), 17 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue AED 39.6bn, +7.9%; EPS AED 1.93, +4.1%." },
      { title: "Ratings mix", detail: "11 strong buy, 2 buy, 3 hold, 1 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are corporate credit concentration, margin compression and the bank's exposure to the Abu Dhabi cycle.",
    items: [
      {
        title: "Corporate and government concentration",
        severity: "High",
        detail:
          "A large share of the loan book is to corporates and government-related entities. A slowdown in Abu Dhabi spending would raise provisions.",
        watch: "NPLs, stage 2 loans, exposure to real estate and contracting.",
      },
      {
        title: "Rate cuts",
        severity: "Medium",
        detail:
          "Lower policy rates compress net interest income. FAB's low-cost deposits slow the effect but do not eliminate it.",
        watch: "Net interest margin, UAE policy rate.",
      },
      {
        title: "International operations",
        severity: "Medium",
        detail:
          "The bank's foreign branches and subsidiaries add growth but also currency, regulatory and credit risk.",
        watch: "International revenue, provisions by geography.",
      },
      {
        title: "Competition",
        severity: "Low",
        detail:
          "Emirates NBD, ADCB and the Islamic banks compete for the same corporate and retail customers.",
        watch: "Market share, pricing, fee income.",
      },
    ],
    watchlist: [
      { title: "Net interest margin", detail: "Rate pass-through and deposit costs." },
      { title: "Cost of risk", detail: "Corporate provisioning." },
      { title: "Dividend", detail: "Payout and capital adequacy." },
      { title: "Abu Dhabi spending", detail: "Project finance and government-related lending." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "FAB is the largest and most diversified bank in the UAE, with a strong corporate franchise and a 4.1% dividend yield. It trades at around 10x earnings, which is undemanding for a systemically important lender with a state-linked deposit base.",
      "The investment case is a steady, well-capitalised bank rather than a growth story. The key risks are corporate credit and the margin compression that comes with lower rates.",
    ],
    questions: [
      "How much of the loan book is exposed to Abu Dhabi government-related entities?",
      "What is the sensitivity of net interest income to a 100bp rate cut?",
      "Is the dividend covered through a full credit cycle?",
      "Can the international franchise grow without adding risk?",
    ],
  },
};
