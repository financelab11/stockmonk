import type { StockStory } from "@/content/stocks/types";

export const qatarIslamicBank: StockStory = {
  ticker: "QIBK",
  kicker: "Qatar · Islamic banking",
  title: "Qatar Islamic Bank: the Gulf's largest Islamic lender at 11x earnings",
  dek:
    "QIB is the largest Islamic bank in Qatar, with a dominant domestic franchise and a growing international presence. Earnings are steady, the dividend yield is 4.1% and the shares trade at 11.1x earnings, roughly in line with QNB.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of QAR 11.3bn and net income of QAR 4.9bn, with a 43.6% net margin and 13.6% return on equity.",
    "Revenue rose from QAR 6.8bn in 2021 to QAR 11.2bn in 2025, and net income from QAR 3.6bn to QAR 4.8bn.",
    "The bank is the market leader in Qatari Islamic banking and has subsidiaries in the UK, Lebanon and Sudan.",
    "At QAR 21.94 the shares trade at 11.1x earnings with a 4.1% dividend yield.",
    "Consensus has a mean target of QAR 23.48 from nine analysts, but the estimate detail in the feed is unreliable.",
  ],
  filingUrl: "https://stockanalysis.com/quote/qse/QIBK/financials/",
  irUrl: "https://www.qib.com.qa",
  bigPicture: {
    paragraphs: [
      "Qatar Islamic Bank is the largest Sharia-compliant bank in Qatar and one of the largest Islamic banks in the world. It provides retail, corporate and investment banking through a domestic branch network and subsidiaries in the UK, Lebanon and Sudan. It is closely linked to the Qatari state and to the country's business elite.",
      "The equity is a high-quality domestic franchise with a modest international footprint. Qatar's gas wealth supports deposit growth and credit demand, while the Islamic banking model gives QIB a loyal customer base. The market values the bank at a premium to book but a modest multiple of earnings.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "QIB offers current and savings accounts, home and personal finance, cards, business banking, corporate finance, trade finance and wealth management, all structured to comply with Sharia. It also provides Islamic treasury, sukuk and investment banking services and manages a large portfolio of Islamic financing assets.",
      "The international operations include a UK subsidiary that serves high-net-worth clients, a presence in Lebanon and Sudan, and a stake in an Islamic bank in Turkey. Those businesses are small relative to the Qatari book but add diversification and some currency and regulatory risk.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Income from Islamic financing and investments is the largest revenue line, supported by fees from cards, trade finance, wealth and investment banking. The domestic deposit franchise is a source of low-cost funding, which supports the net profit margin.",
      "Provisioning is the main earnings variable. The Qatari book has been resilient, but the bank has exposure to real estate, contracting and international operations. It has historically maintained conservative coverage, which supports the dividend but can depress reported profit in weaker years.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from QAR 6.80bn in 2021 to QAR 11.17bn in 2025, and net income from QAR 3.56bn to QAR 4.83bn. The trailing twelve months show QAR 11.26bn of revenue and QAR 4.91bn of net income, broadly flat as the rate-driven revenue surge faded.",
      "The forward estimates in the current data feed look inconsistent with the reported results — a 2026 revenue estimate of QAR 7.0bn is far below the QAR 11.2bn reported for 2025 — so they should not be relied on. The target price and ratings distribution are the more useful consensus signals.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income grew every year from 2021 to 2025, from QAR 3.56bn to QAR 4.83bn, with steady mid-single-digit growth. Return on equity was 13.6% on a trailing basis, a solid level for a Qatari bank and in line with QNB.",
      "The 43.6% net margin reflects the low cost of funds and the retail mix. The bank has maintained a strong capital position and a consistent dividend, and its asset quality has been better than the regional average through the cycle.",
    ],
  },
  cash: {
    paragraphs: [
      "The dividend yield is 4.1%, supported by earnings and a strong capital ratio. QIB has historically paid a consistent dividend, and the payout is a key part of the total return.",
      "The balance sheet carries QAR 40.7bn of debt and QAR 2.3bn of cash. For a bank, the relevant measures are capital adequacy, liquidity and deposit funding rather than free cash flow; the negative free cash flow in the data feed is a reporting artefact, not a liquidity issue.",
    ],
  },
  valuation: {
    paragraphs: [
      "At QAR 21.94 the shares trade at 11.1x trailing earnings, a premium to QNB and in line with the better-performing UAE Islamic banks. The 4.1% dividend yield provides support.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of QAR 23.48 and a range of QAR 21.50–26.00 from nine analysts. Two carry a strong buy, two a buy, four a hold and one a strong sell. The estimate detail is unreliable, so the target and ratings are the better signals. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is moderate, with nine analysts and a neutral tilt. The strong sell alongside two strong buys reflects disagreement about the growth outlook and the valuation premium.",
      "The key debate is whether QIB can sustain its domestic market share and margins as rates fall and competition from conventional and Islamic peers increases. The international operations are too small to change the story but add complexity.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "QAR 23.48 (range QAR 21.50–26.00), 9 analysts, November 2026." },
      { title: "2025 anchor", detail: "Revenue QAR 11.2bn, net income QAR 4.8bn, EPS QAR 1.95." },
      { title: "Ratings mix", detail: "2 strong buy, 2 buy, 4 hold, 0 sell, 1 strong sell." },
    ],
  },
  risks: {
    intro:
      "The risks are margin compression, Qatari concentration and the premium valuation.",
    items: [
      {
        title: "Net interest margin",
        severity: "Medium",
        detail:
          "Lower rates compress income from Islamic financing, though the low-cost deposit base slows the effect.",
        watch: "Net profit margin, QCB policy rate.",
      },
      {
        title: "Qatar concentration",
        severity: "Medium",
        detail:
          "The domestic economy is dominated by hydrocarbons, so a sustained fall in gas prices would affect credit growth.",
        watch: "Qatar GDP, gas prices, government spending.",
      },
      {
        title: "Premium valuation",
        severity: "Medium",
        detail:
          "At 11.1x earnings the bank trades at a premium to QNB. A growth disappointment would compress the multiple.",
        watch: "Relative P/E, ROE, estimate revisions.",
      },
      {
        title: "International operations",
        severity: "Low",
        detail:
          "The UK, Lebanon and Sudan businesses add currency and regulatory risk, though they are small.",
        watch: "International provisions, currency.",
      },
    ],
    watchlist: [
      { title: "Net profit margin", detail: "Rate pass-through." },
      { title: "Dividend", detail: "Payout and capital." },
      { title: "Asset quality", detail: "Real estate and contracting exposure." },
      { title: "Qatari credit growth", detail: "Project and corporate lending." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "QIB is a high-quality Islamic bank with a dominant Qatari franchise, steady earnings growth and a 4.1% dividend yield. It trades at 11.1x earnings, a fair multiple for a bank with a 13.6% return on equity.",
      "The investment case is a defensive, income-oriented bank rather than a growth story. The main risks are margin compression and the premium valuation; the main support is the strength of the domestic franchise and the balance sheet.",
    ],
    questions: [
      "What is the sustainable return on equity at lower rates?",
      "How much of the book is exposed to Qatari real estate?",
      "Is the dividend covered through a downturn?",
      "Can QIB grow faster than the Qatari banking market?",
    ],
  },
};
