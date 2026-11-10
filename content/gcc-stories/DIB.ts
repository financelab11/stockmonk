import type { StockStory } from "@/content/stocks/types";

export const dubaiIslamicBank: StockStory = {
  ticker: "DIB",
  kicker: "United Arab Emirates · Islamic banking",
  title: "Dubai Islamic Bank: cheap, well-capitalised and out of favour",
  dek:
    "DIB is the largest Islamic bank in the UAE, with a strong retail and corporate franchise and a 4.8% dividend yield. Profit has plateaued, the shares trade at 7.5x earnings, and consensus is unusually cautious for a bank of this quality.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of AED 12.6bn and net income of AED 7.4bn, with a 58.8% net margin and 13.3% return on equity.",
    "Revenue rose from AED 7.0bn in 2021 to AED 12.7bn in 2025, while net income grew from AED 4.4bn to AED 7.5bn.",
    "The bank has a strong retail deposit franchise, a growing corporate book and a presence in Pakistan, Kenya and Indonesia.",
    "At AED 7.34 the shares trade at 7.5x earnings with a 4.8% dividend yield, a discount to the conventional UAE banks.",
    "Consensus has a mean target of AED 8.04 from 13 analysts, but the ratings mix includes two strong sells.",
  ],
  filingUrl: "https://stockanalysis.com/quote/dfm/DIB/financials/",
  irUrl: "https://www.dib.ae",
  bigPicture: {
    paragraphs: [
      "Dubai Islamic Bank is the oldest and largest Islamic bank in the UAE. It provides Sharia-compliant retail, corporate and investment banking through a branch network in the UAE and subsidiaries in Pakistan, Kenya, Indonesia and other markets. It is closely linked to Dubai's business establishment and has a large retail deposit base.",
      "The equity is a high-quality Islamic franchise trading at a discount to the conventional banks. The bank has been growing steadily, but profit has plateaued as the rate cycle turns and provisions normalise. The market is concerned about the growth outlook and about asset quality in some international markets.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "DIB offers current and savings accounts, home and auto finance, personal loans, cards, business banking, corporate finance, trade finance and wealth management, all structured to comply with Sharia. It also provides Islamic treasury and investment banking services and manages a large portfolio of sukuk.",
      "The international operations include a bank in Pakistan, a presence in Kenya and Indonesia and a stake in a Turkish Islamic bank. Those businesses add growth and diversification but also currency, regulatory and credit risk, which is partly why the shares trade below the UAE conventional banks.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Net income from Islamic financing and investments is the largest revenue line, supported by fees from cards, trade finance, wealth and investment banking. The retail deposit franchise is a source of low-cost funding, which supports the net profit margin.",
      "Provisioning is the main earnings variable. The UAE book has been resilient, but the international operations and the corporate book carry more risk. The bank has historically maintained conservative coverage, which gives it room to absorb a normalisation but also depresses reported profit.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from AED 7.03bn in 2021 to AED 12.73bn in 2025, and net income from AED 4.39bn to AED 7.50bn. The trailing twelve months show AED 12.6bn of revenue, down 4.9%, and AED 7.4bn of net income, as the rate-driven revenue surge faded.",
      "Consensus expects revenue of AED 13.2bn in 2026, up 2.3%, and EPS of AED 0.92, down 6%, reflecting a lower margin and higher provisions. Growth is expected to be modest until rates stabilise and the international operations improve.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income grew every year from 2021 to 2024, from AED 4.39bn to AED 7.93bn, before easing to AED 7.50bn in 2025. The bank has maintained a 13.3% return on equity on a trailing basis, a solid level but below the best-in-class UAE banks.",
      "The 58.8% net margin is high, reflecting the low cost of funds and the retail mix. The bank's challenge is to keep that margin as rates fall and to manage asset quality in its international operations, which have been a drag on the valuation.",
    ],
  },
  cash: {
    paragraphs: [
      "The dividend yield is 4.8%, supported by earnings and a strong capital ratio. DIB has historically paid a consistent dividend, and the payout is a key part of the total return for income investors.",
      "The balance sheet carries AED 17.9bn of debt and AED 16.2bn of cash, and the bank has a comfortable liquidity position. The negative free cash flow in the data feed reflects the way bank cash flows are reported, not a liquidity problem; for banks, capital and deposit funding are the relevant measures.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 7.34 the shares trade at 7.5x trailing earnings, a discount to FAB, Emirates NBD and ADCB, and a 4.8% dividend yield. The discount reflects slower growth, the international exposure and the cautious analyst ratings.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 8.04 and a range of AED 6.20–9.20 from 13 analysts. One carries a strong buy, two a buy, seven a hold, one a sell and two a strong sell. FY2026 revenue is expected at AED 13.2bn and EPS at AED 0.92. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The ratings are the most cautious among the large UAE banks, with two strong sells and seven holds. That is a signal that the market sees limited upside despite the low multiple.",
      "The key debate is the growth strategy and the drag from international operations. Bulls point to the 4.8% yield and the discount to book; bears worry about slower loan growth, margin compression and asset quality in Pakistan and Indonesia.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 8.04 (range AED 6.20–9.20), 13 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue AED 13.2bn, +2.3%; EPS AED 0.92, -6%." },
      { title: "Ratings mix", detail: "1 strong buy, 2 buy, 7 hold, 1 sell, 2 strong sell." },
    ],
  },
  risks: {
    intro:
      "The risks are margin compression, international asset quality and slower growth than the conventional peers.",
    items: [
      {
        title: "Net interest margin",
        severity: "High",
        detail:
          "Lower rates compress the margin, and DIB has less of a corporate and government deposit base than FAB or Emirates NBD.",
        watch: "Net interest margin, deposit costs.",
      },
      {
        title: "International operations",
        severity: "Medium",
        detail:
          "Pakistan, Kenya and Indonesia add currency, regulatory and credit risk and have been a drag on returns.",
        watch: "International provisions, currency, local regulation.",
      },
      {
        title: "Growth",
        severity: "Medium",
        detail:
          "Loan growth has lagged the larger banks, and the retail market is increasingly competitive.",
        watch: "Loan growth, market share, customer acquisition.",
      },
      {
        title: "Valuation trap",
        severity: "Medium",
        detail:
          "A low multiple can persist if returns and growth stay below peers. The cautious ratings reflect that risk.",
        watch: "ROE, relative P/E, estimate revisions.",
      },
    ],
    watchlist: [
      { title: "Net interest margin", detail: "Rate pass-through and funding cost." },
      { title: "International books", detail: "Asset quality and currency." },
      { title: "Dividend", detail: "Payout and capital." },
      { title: "Loan growth", detail: "Retail and corporate volumes." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "DIB is a well-capitalised Islamic bank with a strong UAE franchise, a 4.8% dividend yield and a 7.5x earnings multiple. It is cheaper than the conventional banks for reasons that are partly structural and partly cyclical.",
      "The investment case is income and value, not growth. Investors need to be comfortable with the international exposure and the cautious consensus; the low multiple offers some protection, but a re-rating requires better growth and returns.",
    ],
    questions: [
      "What is the sustainable net interest margin at lower rates?",
      "How much of the loan book is in Pakistan, Kenya and Indonesia?",
      "Is the dividend covered if provisions rise?",
      "Why is the market so cautious on a 13% ROE bank?",
    ],
  },
};
