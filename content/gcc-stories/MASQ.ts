import type { StockStory } from "@/content/stocks/types";

export const mashreq: StockStory = {
  ticker: "MASQ",
  kicker: "United Arab Emirates · Banking",
  title: "Mashreq: Dubai's high-return lender after a peak earnings year",
  dek:
    "Mashreq has one of the highest returns on equity among UAE banks, but profit fell in 2025 as the rate cycle turned and provisions rose. At 8.2x earnings, the market is already pricing a normalisation.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of AED 13.6bn and net income of AED 7.7bn, with a 57% net margin and 16.4% return on equity.",
    "Revenue more than tripled from AED 3.7bn in 2021 to AED 12.1bn in 2025, driven by the rate cycle.",
    "Net income fell from AED 8.9bn in 2024 to AED 6.8bn in 2025 as provisions and costs rose.",
    "At 8.2x earnings and a 3.4% dividend yield, the shares are cheap for a bank with a mid-teens return on equity.",
    "No reliable third-party consensus is available in the current feed, so the report relies on the reported financials and broader sector context.",
  ],
  filingUrl: "https://stockanalysis.com/quote/dfm/MASQ/financials/",
  irUrl: "https://www.mashreqbank.com",
  bigPicture: {
    paragraphs: [
      "Mashreq is one of the oldest banks in the UAE and a leading Dubai-based lender. It serves corporate, institutional, retail and Islamic customers, with a strong wholesale franchise and a growing digital retail business. The bank is controlled by the Al Ghurair family.",
      "The equity is a high-return, relatively small bank with a concentrated ownership structure. The 16.4% return on equity is among the best in the UAE, but the earnings base is small and sensitive to the credit cycle.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "Mashreq provides corporate and commercial banking, trade finance, treasury, retail banking, cards and Islamic finance. It has a strong presence in Dubai and a growing international network serving clients in Asia, Africa and the Middle East.",
      "The bank has invested heavily in digital banking, including a standalone digital retail proposition. That gives it a lower-cost distribution model than a branch-heavy bank.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Net interest income is the largest revenue line, supported by fees from trade finance, cards and wealth. The wholesale franchise gives Mashreq access to low-cost corporate deposits, which supports the net interest margin.",
      "Provisioning is the main earnings variable. The bank has exposure to real estate, contracting and trade finance, and the 2025 profit decline reflects a higher cost of risk after an exceptional 2024.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from AED 3.7bn in 2021 to AED 12.1bn in 2025, a remarkable increase driven by the rate cycle and by balance-sheet growth. Net income rose from AED 1.0bn to AED 6.8bn, but it fell from the 2024 peak of AED 8.9bn.",
      "The trailing twelve months show AED 13.6bn of revenue and AED 7.7bn of net income, with revenue growth of only 0.2%. The rate-driven expansion has stalled, and the next leg depends on fee income and loan growth.",
    ],
  },
  performance: {
    paragraphs: [
      "The bank's return on equity was 16.4% on a trailing basis, well above the cost of equity and among the highest in the UAE. The net margin of 57% reflects the wholesale mix and the low cost of funds.",
      "The 2025 decline in net income is a warning: the earnings base is cyclical, and a higher cost of risk can erase a meaningful share of profit quickly.",
    ],
  },
  cash: {
    paragraphs: [
      "The dividend yield is 3.4%, supported by earnings and capital. The bank has historically paid a consistent dividend, and the payout is likely to depend on the credit cycle.",
      "The balance sheet carries AED 94.5bn of debt and AED 36.3bn of cash. Liquidity is adequate, and the bank has access to international markets. The wholesale-funded model means the cost of deposits is a key variable: when interbank rates rise, Mashreq's funding cost rises faster than a retail-funded bank's.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 297 the shares trade at 8.2x trailing earnings, a discount to FAB and ADCB. The 3.4% dividend yield is lower than the sector average because the payout ratio is conservative.",
      "No reliable third-party consensus target is available in the current data feed. The bank is covered by regional brokers, but the data is not consistent enough to quote. The valuation should be assessed on the reported return on equity and the sustainability of earnings.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sell-side coverage is thinner than for the large UAE banks, and the current data feed does not provide a usable consensus target or ratings distribution.",
      "The key debate is whether Mashreq can hold a mid-teens return on equity as rates fall and provisions normalise. The bank's wholesale focus gives it pricing power but also concentration risk. With little published consensus, investors should rely on the reported numbers, the capital ratio and management's guidance rather than on a target price.",
    ],
    bullets: [
      { title: "Coverage", detail: "Thin; no reliable consensus target in the current feed." },
      { title: "Returns", detail: "16.4% trailing ROE, among the highest in the UAE." },
      { title: "Cycle", detail: "2025 profit fell from the 2024 peak as provisions rose." },
    ],
  },
  risks: {
    intro:
      "The risks are credit concentration, the rate cycle and the bank's relatively small size.",
    items: [
      {
        title: "Wholesale credit concentration",
        severity: "High",
        detail:
          "A large share of the book is corporate and trade finance. A few large defaults would be material.",
        watch: "NPLs, top exposures, cost of risk.",
      },
      {
        title: "Rate normalisation",
        severity: "High",
        detail:
          "The revenue surge was rate-driven. Lower rates would compress net interest income.",
        watch: "Net interest margin.",
      },
      {
        title: "Real estate exposure",
        severity: "Medium",
        detail:
          "Dubai real estate is a significant part of the corporate book. A property downturn would raise provisions.",
        watch: "Real-estate exposure, Dubai prices.",
      },
      {
        title: "Size and liquidity",
        severity: "Medium",
        detail:
          "Mashreq is smaller than FAB and Emirates NBD, and its shares are less liquid.",
        watch: "Free float, trading volumes.",
      },
    ],
    watchlist: [
      { title: "Cost of risk", detail: "The main swing factor in earnings." },
      { title: "Net interest margin", detail: "Rate pass-through." },
      { title: "Dividend", detail: "Payout and capital." },
      { title: "Corporate exposure", detail: "Real estate and trade finance." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Mashreq is a high-return, Dubai-based bank with a strong wholesale franchise and a mid-teens return on equity. The shares are cheap at 8.2x earnings, but the earnings base is cyclical and the 2025 profit decline shows the risk.",
      "The investment case is a value bank with a solid dividend and a concentrated ownership structure. The lack of reliable consensus coverage makes it a stock for investors who do their own work.",
    ],
    questions: [
      "How much of the 2023–24 profit was rate-driven?",
      "What is the exposure to Dubai real estate?",
      "Is the dividend covered through a higher-provision year?",
      "Can the digital retail strategy offset the wholesale concentration?",
    ],
  },
};
