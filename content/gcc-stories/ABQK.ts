import type { StockStory } from "@/content/stocks/types";

export const ahliBank: StockStory = {
  ticker: "ABQK",
  kicker: "Qatar · Banking",
  title: "Ahli Bank: a small Qatari lender with a 5.6% yield",
  dek:
    "Ahli Bank is a Qatari commercial bank with retail, private, corporate and treasury businesses. Profit has grown steadily, the dividend yield is 5.6%, and the shares trade at 12.6x earnings with no published consensus target.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of QAR 1.35bn and net income of QAR 0.93bn, with a 68.9% net margin and 12.3% return on equity.",
    "Revenue rose from QAR 1.05bn in 2021 to QAR 1.35bn in 2025, and net income from QAR 0.71bn to QAR 0.93bn.",
    "The bank focuses on retail, private banking and corporate clients in Qatar.",
    "At QAR 4.50 the shares trade at 12.6x earnings with a 5.6% dividend yield.",
    "No reliable third-party consensus is available in the current feed, so the report relies on reported financials.",
  ],
  filingUrl: "https://stockanalysis.com/quote/qse/ABQK/financials/",
  irUrl: "https://www.ahlibank.com.qa",
  bigPicture: {
    paragraphs: [
      "Ahli Bank is a Qatari commercial bank with retail, private banking, corporate and treasury operations. It is smaller than QNB, QIB and Commercial Bank, and it focuses on relationship banking for affluent individuals and mid-sized companies.",
      "The equity is a small, domestic lender with a high dividend yield and a conservative balance sheet. Growth comes from retail and private banking, while corporate lending provides scale. The bank is more concentrated than the large peers, which makes it more sensitive to the Qatari credit cycle.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The bank offers current and savings accounts, mortgages, personal loans, cards, business banking, corporate finance, trade finance and wealth management. It also provides treasury and investment services and has a brokerage subsidiary.",
      "The retail and private banking segments are the core deposit sources, while corporate banking provides loan growth and fee income. The bank has invested in digital channels to serve younger customers and to reduce branch costs.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Net interest income is the largest revenue line, supported by fees from cards, trade finance and wealth. The funding base includes retail and corporate deposits, which keeps the cost of funds moderate. Net margin was 68.9% on a trailing basis, high for a small bank.",
      "Provisioning is the main earnings variable. The corporate book has real estate and contracting exposure, and the bank has been building coverage. The 12.3% return on equity is solid for its size.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from QAR 1.05bn in 2021 to QAR 1.35bn in 2025, and net income from QAR 0.71bn to QAR 0.93bn. The growth was steady, driven by higher rates, loan growth and fees.",
      "The trailing twelve months show QAR 1.35bn of revenue, up 1.6%, as the rate cycle turned. Without a reliable consensus, the near-term outlook depends on Qatari credit growth and on the bank's ability to hold its margin.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income rose every year from 2021 to 2025, from QAR 0.71bn to QAR 0.93bn, a consistent record for a small bank. The improvement came from higher rates, loan growth and cost discipline.",
      "Return on equity was 12.3% on a trailing basis, respectable for a mid-sized lender. The bank carries QAR 3.89bn of debt and QAR 9.43bn of cash, a liquid balance sheet that supports the dividend.",
    ],
  },
  cash: {
    paragraphs: [
      "The dividend yield is 5.6%, supported by earnings and capital. The bank has paid a consistent dividend, and the payout is a key part of the total return for income investors.",
      "For a bank, capital adequacy and liquidity are the relevant measures rather than free cash flow. The bank is adequately capitalised and has a strong liquidity position, which supports the dividend through the cycle.",
    ],
  },
  valuation: {
    paragraphs: [
      "At QAR 4.50 the shares trade at 12.6x trailing earnings, a premium to QNB and in line with the smaller Qatari banks. The 5.6% dividend yield provides support, but the premium is difficult to justify given the low growth.",
      "No reliable third-party consensus target is available in the current feed. The valuation should be assessed on the dividend yield, the return on equity and the capital position rather than on a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sell-side coverage is absent from the current data feed, which is common for small Qatari banks with limited free float. That makes independent valuation more difficult.",
      "The key debate is whether the bank can grow faster than the market and hold its margin as rates fall. The dividend and the liquidity are the supports; the small scale and concentration are the constraints.",
    ],
    bullets: [
      { title: "Coverage", detail: "No reliable consensus target in the current feed." },
      { title: "Returns", detail: "12.3% ROE and 68.9% net margin." },
      { title: "Income", detail: "5.6% dividend yield supported by capital." },
    ],
  },
  risks: {
    intro:
      "The risks are rate normalisation, concentration and the small scale.",
    items: [
      {
        title: "Rate normalisation",
        severity: "Medium",
        detail:
          "Lower rates compress net interest income. The bank has less low-cost funding than the largest peers.",
        watch: "Net interest margin, deposit costs.",
      },
      {
        title: "Concentration",
        severity: "Medium",
        detail:
          "The loan book is concentrated in Qatar and in a limited number of corporate relationships.",
        watch: "Top exposures, NPLs, sector mix.",
      },
      {
        title: "Competition",
        severity: "Medium",
        detail:
          "QNB, QIB and the other banks compete for the same retail and corporate customers.",
        watch: "Market share, pricing, loan growth.",
      },
      {
        title: "Scale",
        severity: "Low",
        detail:
          "The bank is small, which limits its ability to invest in technology and absorb shocks.",
        watch: "Cost-to-income, technology spending.",
      },
    ],
    watchlist: [
      { title: "Net interest margin", detail: "Rate pass-through." },
      { title: "Asset quality", detail: "Corporate and real-estate exposure." },
      { title: "Dividend", detail: "Payout and capital." },
      { title: "Loan growth", detail: "Retail and corporate volumes." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Ahli Bank is a small Qatari lender with a 12.3% return on equity, a 5.6% dividend yield and a 12.6x earnings multiple. It has grown profit steadily and maintains a liquid balance sheet.",
      "The investment case is income and stability. The main risks are the rate cycle and concentration; the main support is the dividend and the capital position.",
    ],
    questions: [
      "What is the sustainable net interest margin?",
      "How concentrated is the corporate loan book?",
      "Is the dividend covered through a downturn?",
      "What is the growth plan in retail and private banking?",
    ],
  },
};
