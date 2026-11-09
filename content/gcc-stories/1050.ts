import type { StockStory } from "@/content/stocks/types";

export const banqueSaudiFransi: StockStory = {
  ticker: "1050",
  kicker: "Saudi Arabia · Corporate and retail banking",
  title: "Banque Saudi Fransi: a slow compounder with a French anchor",
  dek:
    "BSF is a mid-sized Saudi bank with a corporate and retail franchise and a long-standing relationship with Crédit Agricole. Revenue growth has been slower than peers, but the dividend is steady and the shares trade at book value.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of SAR 10.0bn and net income of SAR 5.6bn, with a 56% net margin and 11.0% return on equity.",
    "Revenue grew from SAR 6.3bn in 2021 to SAR 9.6bn in 2025; net income rose from SAR 3.5bn to SAR 5.3bn.",
    "The bank has a balanced corporate and retail book and a strategic relationship with Crédit Agricole.",
    "At 9.6x earnings and 1.0x book, it is priced in line with the mid-cap peers.",
    "Consensus has a mean target of SAR 22.72 from 13 analysts and expects FY2026 EPS of SAR 2.09.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/1050/financials/",
  irUrl: "https://www.alfransi.com.sa",
  bigPicture: {
    paragraphs: [
      "Banque Saudi Fransi is a full-service Saudi bank with corporate, retail and treasury operations. Crédit Agricole has been a long-standing shareholder and partner, giving BSF access to international corporate clients and French trade flows. The bank is smaller than the top four but has a stable franchise and a conservative balance sheet.",
      "The equity has lagged the sector because revenue growth has been slower and the return on equity is in the low teens. The shares trade at roughly book value, which is a fair reflection of a bank that compounds steadily rather than rapidly.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "BSF offers current and savings accounts, personal and home finance, cards, business banking, corporate lending, trade finance and treasury. Its corporate franchise serves large Saudi groups and international companies, while the retail arm focuses on mortgages and personal finance.",
      "The Crédit Agricole relationship is a differentiator in trade finance and cross-border corporate banking, but it has not translated into faster growth than the domestic peers.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Net interest income is the largest line, with fees from trade, cards, wealth and corporate finance. The cost of funds is competitive, though the bank lacks the very low-cost deposit base of Al Rajhi.",
      "Provisioning has been modest, helped by a conservative underwriting approach. The main sensitivity is the net interest margin and the pace of corporate lending.",
      "Fee income is a smaller share of revenue than at SAB or SNB, so the top line is more sensitive to the loan book and less to capital-markets activity.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from SAR 6.3bn in 2021 to SAR 9.6bn in 2025, a compound annual growth rate of about 11%. Net income grew from SAR 3.5bn to SAR 5.3bn. The trailing twelve months show SAR 10.0bn of revenue and SAR 5.6bn of net income.",
      "Consensus for FY2026 assumes revenue of SAR 11.3bn, up 7%, and EPS of SAR 2.09, up 5.8%. That is a modest acceleration from 2025 and depends on corporate credit demand holding up.",
    ],
  },
  performance: {
    paragraphs: [
      "The bank has grown profit every year since 2021, with a particularly strong 2025: revenue of SAR 9.6bn and net income of SAR 5.3bn. Return on equity was 11.0% on a trailing basis, below the retail specialists and in line with ANB.",
      "Cost discipline has been solid, and the bank has invested in digital channels without a large increase in the cost base. Capital remains adequate.",
    ],
  },
  cash: {
    paragraphs: [
      "The trailing dividend yield is 5.5%, a steady payout supported by earnings and capital. The bank has not needed a capital raise, and the dividend is the main cash return for shareholders.",
      "The payout is likely to remain stable unless loan growth accelerates or provisions rise. For income investors, that predictability is the main attraction.",
      "Capital adequacy has stayed comfortably above the regulatory minimum, which gives the board room to maintain the payout through a slower year.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 19.84 the shares trade at 9.6x trailing earnings and 1.0x book, in line with the mid-cap peers and at a discount to Al Rajhi. The multiple reflects the low-teens return on equity and the slower growth record.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 22.72 and a range of SAR 18.00–25.80 from 13 analysts. Six carry a strong buy, one a buy and six a hold. FY2026 revenue is expected at SAR 11.3bn and EPS at SAR 2.09. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The ratings are balanced between positive and neutral, with no sell ratings. The mean target implies moderate upside. The main debate is whether BSF can accelerate revenue growth without taking on more credit risk.",
      "The Crédit Agricole relationship is a support in corporate banking but not a growth engine. The bank's domestic franchise determines most of the earnings trajectory.",
      "A re-rating would need evidence that BSF can grow faster than the mid-single-digit rate embedded in the current estimates.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 22.72 (range SAR 18.00–25.80), 13 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 11.3bn, +7.0%; EPS SAR 2.09, +5.8%." },
      { title: "Ratings mix", detail: "6 strong buy, 1 buy, 6 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are slow growth, margin compression and a return on equity that may not support a premium multiple.",
    items: [
      {
        title: "Slower revenue growth",
        severity: "Medium",
        detail:
          "BSF has grown more slowly than the retail-led peers. A further slowdown would limit EPS growth and dividend increases.",
        watch: "Revenue growth, loan growth.",
      },
      {
        title: "Net interest margin",
        severity: "Medium",
        detail:
          "Rate cuts would compress asset yields. The bank has less low-cost funding than Al Rajhi.",
        watch: "Net interest margin, deposit mix.",
      },
      {
        title: "Corporate credit",
        severity: "Medium",
        detail:
          "The corporate book has exposure to real estate and contracting. A project slowdown would raise provisions.",
        watch: "NPLs, cost of risk.",
      },
      {
        title: "Valuation",
        severity: "Low",
        detail:
          "At 1.0x book, the shares are not expensive, but they are not cheap enough to ignore a return-on-equity decline.",
        watch: "ROE, relative P/B.",
      },
    ],
    watchlist: [
      { title: "Revenue growth", detail: "Corporate and retail lending." },
      { title: "Cost of risk", detail: "Provisioning and coverage." },
      { title: "Dividend", detail: "Payout and capital." },
      { title: "Net interest margin", detail: "Rate pass-through." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "BSF is a steady, mid-sized Saudi bank with a balanced business, a conservative balance sheet and a 5.5% dividend yield. It is not a growth story, and the shares trade at book value because the return on equity is in the low teens.",
      "The investment case is income and stability rather than compounding. The key risk is that slower growth and margin pressure keep the stock range-bound.",
    ],
    questions: [
      "Can the bank accelerate revenue growth without raising credit risk?",
      "What is the sustainable return on equity in a lower-rate environment?",
      "Is the dividend covered by organic capital generation?",
      "How much does the Crédit Agricole relationship contribute to fees?",
    ],
  },
};
