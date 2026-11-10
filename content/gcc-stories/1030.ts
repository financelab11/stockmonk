import type { StockStory } from "@/content/stocks/types";

export const saudiInvestmentBank: StockStory = {
  ticker: "1030",
  kicker: "Saudi Arabia · Banking",
  title: "Saudi Investment Bank: a mid-cap lender at 8.1x earnings",
  dek:
    "Saudi Investment Bank serves retail, SME, corporate and institutional clients in the kingdom. Profit has grown every year since 2021, the dividend yield is 5.1%, and the shares trade at 8.1x earnings with a mean target above the current price.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of SAR 4.49bn and net income of SAR 2.46bn, with a 54.7% net margin and 10.0% return on equity.",
    "Revenue rose from SAR 2.48bn in 2021 to SAR 4.44bn in 2025, and net income from SAR 1.06bn to SAR 2.43bn.",
    "The bank focuses on retail, SME and corporate banking, with a growing digital proposition.",
    "At SAR 11.43 the shares trade at 8.1x earnings with a 5.1% dividend yield.",
    "Consensus has a mean target of SAR 14.04 from six analysts, with two strong buys and one sell.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/1030/financials/",
  irUrl: "https://www.saib.com.sa",
  bigPicture: {
    paragraphs: [
      "Saudi Investment Bank is a mid-sized Saudi lender with retail, SME, corporate and institutional banking businesses. It is partly owned by the state and by strategic investors, and it has a long history in trade finance and corporate lending.",
      "The equity is a domestic banking story with a valuation discount to the largest Saudi banks. The bank has benefited from the rate cycle and from Saudi Arabia's economic expansion, but it is smaller and less diversified than Al Rajhi or SNB.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The bank provides current and savings accounts, mortgages, personal finance, cards, business banking, corporate finance, trade finance and treasury services. It also has an investment-banking arm that arranges financing and advisory work.",
      "The retail and SME franchises are the growth areas, supported by digital channels and by Saudi Arabia's Vision 2030 spending. The corporate book serves family groups, contractors and government-related entities.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Net interest income is the largest revenue line, supported by fees from trade finance, cards and wealth. The funding base includes retail and corporate deposits, which keeps the cost of funds moderate. Net margin was 54.7% on a trailing basis.",
      "Provisioning is the main earnings variable. The corporate book carries real estate and contracting exposure, and the bank has been building coverage as the loan book grows. The 10.0% return on equity is modest for a Saudi bank.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from SAR 2.48bn in 2021 to SAR 4.44bn in 2025, and net income from SAR 1.06bn to SAR 2.43bn. The growth was driven by higher rates, loan growth and fees, and it was achieved without a large acquisition.",
      "The trailing twelve months show SAR 4.49bn of revenue, up 12.7%, and consensus expects SAR 4.3bn in 2026, down 10.5%, with EPS of SAR 1.08, down 22.9%. The decline reflects the expected normalisation of rates and higher provisions.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income grew every year from 2021 to 2025, from SAR 1.06bn to SAR 2.43bn, one of the steadier records in the Saudi mid-cap banking sector. The improvement came from higher rates, loan growth and cost discipline.",
      "Return on equity was 10.0% on a trailing basis, below the best-in-class Saudi banks. The bank carries SAR 31.9bn of debt and SAR 7.5bn of cash, reflecting its funding structure. Capital is adequate, and the dividend is supported by earnings.",
    ],
  },
  cash: {
    paragraphs: [
      "The dividend yield is 5.1%, supported by earnings and capital. The bank has paid a consistent dividend, and the payout is a meaningful part of the total return for income investors.",
      "For a bank, capital adequacy and liquidity are the relevant measures rather than free cash flow. The negative free cash flow in the data feed reflects the way bank cash flows are reported, not a liquidity problem.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 11.43 the shares trade at 8.1x trailing earnings, a discount to Al Rajhi, SNB and Riyad Bank. The 5.1% dividend yield is attractive, and the discount reflects the lower return on equity and the smaller scale.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 14.04 and a range of SAR 11.40–15.00 from six analysts. Two carry a strong buy, three a hold and one a sell. FY2026 revenue is expected at SAR 4.3bn and EPS at SAR 1.08. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is moderate, with a positive tilt but one sell. The bulls focus on the discount and the dividend; the sceptics worry about the earnings decline and the corporate credit exposure.",
      "The key debate is the sustainability of the return on equity as rates fall. A better fee mix and cost control would help; a weaker credit cycle would hurt.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 14.04 (range SAR 11.40–15.00), 6 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 4.3bn, -10.5%; EPS SAR 1.08, -22.9%." },
      { title: "Ratings mix", detail: "2 strong buy, 0 buy, 3 hold, 1 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are rate normalisation, corporate credit and the bank's smaller scale.",
    items: [
      {
        title: "Rate normalisation",
        severity: "High",
        detail:
          "Lower rates compress net interest income. The bank has less low-cost funding than the largest peers.",
        watch: "Net interest margin, deposit costs.",
      },
      {
        title: "Corporate credit",
        severity: "Medium",
        detail:
          "Real estate and contracting exposures could require provisions if the Saudi cycle slows.",
        watch: "NPLs, cost of risk, coverage.",
      },
      {
        title: "Competition",
        severity: "Medium",
        detail:
          "The largest Saudi banks and the digital neobanks compete for retail and SME customers.",
        watch: "Market share, loan growth, pricing.",
      },
      {
        title: "Scale",
        severity: "Low",
        detail:
          "The bank is smaller than the majors, which limits its ability to invest in technology and absorb shocks.",
        watch: "Cost-to-income, technology spending.",
      },
    ],
    watchlist: [
      { title: "Net interest margin", detail: "Rate pass-through." },
      { title: "Cost of risk", detail: "Corporate provisioning." },
      { title: "Dividend", detail: "Payout and capital." },
      { title: "Loan growth", detail: "Retail and SME volumes." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Saudi Investment Bank is a steady mid-cap lender with a 5.1% dividend yield and an 8.1x earnings multiple. It has grown profit every year since 2021, but returns are below the best Saudi banks.",
      "The investment case is income and value, with limited growth. The main risks are rate normalisation and corporate credit; the main support is the dividend and the discount to larger peers.",
    ],
    questions: [
      "What is the sustainable net interest margin at lower rates?",
      "How much of the loan book is corporate and real estate?",
      "Is the dividend covered if provisions rise?",
      "What is the plan to improve return on equity?",
    ],
  },
};
