import type { StockStory } from "@/content/stocks/types";

export const riyadBank: StockStory = {
  ticker: "1010",
  kicker: "Saudi Arabia · Corporate and retail banking",
  title: "Riyad Bank: the cheapest large bank in the Kingdom",
  dek:
    "Riyad Bank combines a strong corporate franchise with a growing retail book, and it trades below book value. The discount reflects a lower return on equity than the retail leaders — and a 5% dividend yield that compensates for it.",
  readingMinutes: 8,
  takeaways: [
    "TTM revenue of SAR 17.6bn and net income of SAR 10.8bn, with a 61% net margin and 13.3% return on equity.",
    "Revenue grew from SAR 10.7bn in 2021 to SAR 17.0bn in 2025; net income rose from SAR 6.0bn to SAR 10.4bn.",
    "The bank is a corporate lender with a growing retail and mortgage book, less dependent on one customer segment than SNB.",
    "At 7.9x earnings and 0.9x book, it is the cheapest of the large Saudi banks on both measures.",
    "Consensus has a mean target of SAR 25.28 from 16 analysts and expects FY2026 EPS of SAR 2.51.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/1010/financials/",
  irUrl: "https://www.riyadbank.com",
  bigPicture: {
    paragraphs: [
      "Riyad Bank is one of the Kingdom's oldest and largest banks, with a balanced mix of corporate, retail and treasury activity. Its corporate relationships span government entities, family groups and project finance, while the retail division has been growing mortgage and personal finance. The combination gives it a more diversified revenue base than a pure retail lender, but also thinner spreads on the corporate book.",
      "The equity trades below book value, which is unusual for a profitable Saudi bank with a strong capital position. The market is concerned about the sustainability of returns and about the pace of loan growth in a slower economic environment. The dividend yield is the main support for the share price while those concerns persist.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The bank offers current and savings accounts, personal and home finance, credit cards, business banking, corporate lending, trade finance, treasury and investment services. Its investment-banking and brokerage arm adds fee income, and the retail franchise gives it access to stable deposits.",
      "Riyad Bank has a smaller international footprint than SNB and a lower share of government-related corporate lending than some peers, which reduces concentration but also limits the scale of project-finance opportunities.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Net interest income is the core, supported by fees from cards, trade finance, asset management and investment banking. The funding base is a mix of current accounts and time deposits, so the cost of funds is higher than Al Rajhi's but competitive with the other large banks.",
      "Provisioning has been manageable, helped by the quality of the corporate book and the Saudi economy's resilience. The main earnings sensitivity is the net interest margin: a lower policy rate would compress revenue, while stronger loan growth would offset some of that pressure.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from SAR 10.7bn in 2021 to SAR 17.0bn in 2025, a compound annual growth rate of about 12%. Net income grew from SAR 6.0bn to SAR 10.4bn. The trailing twelve months show SAR 17.6bn of revenue and SAR 10.8bn of net income.",
      "Consensus for FY2026 assumes revenue of SAR 19.3bn, up 5%, and EPS of SAR 2.51, up 1.6%. That is a material slowdown from the 2025 pace and reflects a more cautious view on margins and loan growth. The bank's ability to grow fee income and retail balances will determine whether it can beat that low bar.",
    ],
  },
  performance: {
    paragraphs: [
      "Riyad Bank has grown revenue and profit every year since 2021, with a particularly strong 2025: revenue of SAR 17.0bn and net income of SAR 10.4bn. The return on equity was 13.3% on a trailing basis, a solid but not exceptional level for a Saudi bank.",
      "The net margin has stayed above 60%, which is high for a corporate lender and reflects the contribution of the retail and treasury books. The bank has not needed a capital raise to support growth, and its balance sheet remains conservatively positioned.",
    ],
  },
  cash: {
    paragraphs: [
      "The dividend is the main cash return, with a trailing yield of 5.2%. The payout is covered by earnings and supported by a strong capital ratio. Unlike the retail specialists, Riyad Bank has more room to grow the loan book without stretching capital, which gives the board flexibility on the payout.",
      "Capital and liquidity are comfortable. The key question is whether the bank will use excess capital to grow, buy back stock or raise the dividend; the current policy leans toward a steady payout.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 20.16 the shares trade at 7.9x trailing earnings and 0.9x book, the lowest multiples in the large-cap Saudi banking group. The discount is a statement about returns: the market does not expect Riyad Bank to earn the mid-teens return on equity that would justify a premium to book.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 25.28 and a range of SAR 22.50–30.00 from 16 analysts. Eight carry a strong buy and four a buy, with four neutral. FY2026 revenue is expected at SAR 19.3bn and EPS at SAR 2.51. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The ratings mix is positive, and the mean target implies upside from the current price. The debate is about the trajectory of return on equity: the bank trades below book because investors are not convinced that the current level is sustainable.",
      "If Riyad Bank can hold returns in the low-to-mid teens and grow book value, the discount should narrow. If margins compress and returns fall toward 10%, the shares could stay cheap for longer.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 25.28 (range SAR 22.50–30.00), 16 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 19.3bn, +5.0%; EPS SAR 2.51, +1.6%." },
      { title: "Ratings mix", detail: "8 strong buy, 4 buy, 4 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are typical for a corporate bank: credit concentration, margin compression and a valuation that depends on returns improving.",
    items: [
      {
        title: "Corporate credit quality",
        severity: "Medium",
        detail:
          "A concentration in real estate, contracting or family groups could raise provisions if the Saudi project cycle slows.",
        watch: "NPL ratio, stage 2 exposure, cost of risk.",
      },
      {
        title: "Net interest margin",
        severity: "Medium",
        detail:
          "Rate cuts would reduce asset yields, and the bank has less low-cost funding than the retail leaders.",
        watch: "Net interest margin, deposit mix.",
      },
      {
        title: "Return on equity",
        severity: "Medium",
        detail:
          "A below-book valuation will persist if returns stay in the low teens. The market needs evidence of a durable improvement.",
        watch: "ROE, book value growth.",
      },
      {
        title: "Loan growth",
        severity: "Low",
        detail:
          "Slower Vision 2030 project spending would reduce corporate credit demand, though the retail book provides a buffer.",
        watch: "Loan growth, project awards.",
      },
    ],
    watchlist: [
      { title: "Net interest margin", detail: "The key revenue driver." },
      { title: "Cost of risk", detail: "Provisioning in the corporate book." },
      { title: "Dividend", detail: "Payout and capital adequacy." },
      { title: "Loan growth", detail: "Corporate and mortgage volumes." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Riyad Bank is the value option among the large Saudi banks: a diversified franchise, a 13% return on equity and a valuation below book value. The low multiple and 5% dividend yield provide a margin of safety, but the re-rating depends on returns holding up as rates fall.",
      "The shares are most attractive for investors who want Saudi banking exposure with a cheaper entry point and are willing to accept a slower growth profile than Al Rajhi. The key evidence to watch is the net interest margin and the cost of risk.",
    ],
    questions: [
      "Can the bank hold a low-teens return on equity if rates fall?",
      "How concentrated is the corporate book in real estate and contracting?",
      "Is fee income growing fast enough to diversify revenue?",
      "What would management do with excess capital?",
    ],
  },
};
