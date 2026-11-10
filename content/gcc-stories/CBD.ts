import type { StockStory } from "@/content/stocks/types";

export const commercialBankOfDubai: StockStory = {
  ticker: "CBD",
  kicker: "United Arab Emirates · Banking",
  title: "Commercial Bank of Dubai: the highest-return bank you have not heard of",
  dek:
    "CBD is a mid-sized Dubai bank with an 18.4% return on equity, a 6.0% dividend yield and a 65% net margin. It trades at 8.3x earnings, but only two analysts cover the stock.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of AED 5.5bn and net income of AED 3.6bn, with a 65.2% net margin and 18.4% return on equity.",
    "Revenue rose from AED 2.4bn in 2021 to AED 5.4bn in 2025, and net income from AED 1.45bn to AED 3.50bn.",
    "The bank focuses on corporate, commercial and retail banking in the UAE, with a growing Islamic window.",
    "At AED 9.51 the shares trade at 8.3x earnings with a 6.0% dividend yield, one of the highest in the UAE sector.",
    "Consensus has a mean target of AED 9.95 from just two analysts, one buy and one hold.",
  ],
  filingUrl: "https://stockanalysis.com/quote/dfm/CBD/financials/",
  irUrl: "https://www.cbd.ae",
  bigPicture: {
    paragraphs: [
      "Commercial Bank of Dubai is a mid-sized UAE bank with a strong corporate and commercial franchise and a growing retail business. It is majority-owned by the Al Ghurair family and the Dubai government, and it has a smaller international footprint than the large banks.",
      "The equity is a high-return, domestically focused lender. CBD has grown faster than the market in corporate lending and has benefited from the rate cycle, which lifted its net interest margin and profit. The bank's small size means it is more agile but also more concentrated than FAB or Emirates NBD.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "CBD provides corporate and commercial banking, trade finance, treasury, retail banking, mortgages, cards and Islamic finance. Its corporate book serves UAE family groups, mid-caps and government-related entities, while the retail arm serves professionals and small businesses.",
      "The bank has invested in digital channels and in its Islamic window, which is a growth area in the UAE. It also has a small presence in international markets, mainly to support trade flows. The branch network is smaller than the large banks', which keeps the cost base lean.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Net interest income is the largest revenue line, supported by fees from trade finance, cards and wealth. The funding base includes corporate deposits and retail current and savings accounts, which keeps the cost of funds relatively low. Net margin was 65.2% on a trailing basis, among the highest in the UAE.",
      "Provisioning is the main earnings variable. The corporate book has exposure to real estate and contracting, and the bank has been building coverage as the loan book grows. The high net margin reflects the low cost of funds and the mix toward corporate lending.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from AED 2.36bn in 2021 to AED 5.40bn in 2025, and net income from AED 1.45bn to AED 3.50bn. The trailing twelve months show AED 5.53bn of revenue and AED 3.60bn of net income, up 5.2%, as the rate-driven revenue surge slowed.",
      "Consensus expects revenue of AED 6.0bn in 2026, up 0.9%, and EPS of AED 1.11, down 1.5%, based on just two analysts. The estimates suggest a plateau in earnings as rates stabilise and provisions normalise, rather than a sharp decline.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income grew every year from 2021 to 2025, from AED 1.45bn to AED 3.50bn, one of the strongest growth rates in the UAE banking sector. The improvement came from higher rates, loan growth and cost discipline, not from acquisitions.",
      "Return on equity was 18.4% on a trailing basis, the highest among the large and mid-sized UAE banks in this coverage. The 65.2% net margin reflects the funding mix and the corporate focus. The bank carries AED 24.1bn of debt and AED 3.5bn of cash, which is normal for its size.",
    ],
  },
  cash: {
    paragraphs: [
      "The dividend yield is 6.0%, the highest in the UAE banking coverage, supported by earnings and capital. CBD has historically paid a generous dividend, and the payout is a major part of the total return.",
      "The balance sheet carries AED 24.1bn of debt and AED 3.5bn of cash. For a bank, capital adequacy and liquidity are the relevant measures; the bank is well capitalised and has a stable deposit base, which supports the dividend through the cycle.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 9.51 the shares trade at 8.3x trailing earnings, a discount to FAB, Emirates NBD and ADCB despite a higher return on equity. The 6.0% dividend yield is the highest in the sector.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 9.95 and a range of AED 8.90–11.00 from just two analysts. One carries a buy and one a hold. FY2026 revenue is expected at AED 6.0bn and EPS at AED 1.11. These are third-party estimates, not Stockmonk forecasts, and the thin coverage makes them less robust.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is thin, with only two analysts, which is unusual for a bank with an 18% return on equity. The limited free float and the concentrated ownership are the main reasons.",
      "The key debate is whether the high return on equity is sustainable as rates fall and competition increases. The bank's corporate concentration is the main risk; the dividend and the discount to peers are the main support.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 9.95 (range AED 8.90–11.00), 2 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue AED 6.0bn, +0.9%; EPS AED 1.11, -1.5%." },
      { title: "Ratings mix", detail: "0 strong buy, 1 buy, 1 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are corporate credit concentration, rate normalisation and the thin analyst coverage.",
    items: [
      {
        title: "Corporate concentration",
        severity: "High",
        detail:
          "A large share of the loan book is to corporates and family groups. A few large defaults would be material.",
        watch: "NPLs, top exposures, cost of risk.",
      },
      {
        title: "Rate normalisation",
        severity: "High",
        detail:
          "The revenue surge was rate-driven. Lower rates would compress net interest income.",
        watch: "Net interest margin, deposit costs.",
      },
      {
        title: "Real estate exposure",
        severity: "Medium",
        detail:
          "Dubai real estate is a significant part of the corporate book. A property downturn would raise provisions.",
        watch: "Real-estate exposure, Dubai prices.",
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
      { title: "Cost of risk", detail: "The main swing factor." },
      { title: "Net interest margin", detail: "Rate pass-through." },
      { title: "Dividend", detail: "Payout and capital." },
      { title: "Corporate exposure", detail: "Real estate and family groups." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "CBD is a high-return, mid-sized Dubai bank with an 18.4% return on equity, a 6.0% dividend yield and a discount to the large banks. The lack of coverage and the concentrated ownership explain part of the discount.",
      "The investment case is a value and income bank with a strong franchise. The main risks are corporate credit and the rate cycle, and the main support is the dividend and the capital position.",
    ],
    questions: [
      "How much of the loan book is to the top 20 corporate clients?",
      "What is the sustainable return on equity at lower rates?",
      "Is the dividend covered through a higher-provision year?",
      "Why is analyst coverage so thin for a bank with these returns?",
    ],
  },
};
