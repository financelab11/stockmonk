import type { StockStory } from "@/content/stocks/types";

export const saudiNationalBank: StockStory = {
  ticker: "1180",
  kicker: "Saudi Arabia · Universal banking",
  title: "Saudi National Bank: the corporate lender trading at a retail multiple",
  dek:
    "SNB was formed by merging NCB and Samba, creating the Kingdom's largest bank by assets and a leader in corporate and investment banking. It trades below Al Rajhi on returns but at a visible discount on book value.",
  readingMinutes: 9,
  takeaways: [
    "TTM revenue of SAR 39.6bn and net income of SAR 25.9bn, with a 65% net margin and 12.7% return on equity.",
    "Revenue grew from SAR 24.3bn in 2021 to SAR 38.2bn in 2025; net income doubled from SAR 12.7bn to SAR 25.0bn.",
    "The merger with Samba created a corporate and investment-banking franchise that complements the retail base.",
    "At 9.1x earnings and 1.1x book, the discount to Al Rajhi reflects lower returns and a more complex integration story.",
    "Consensus has a mean target of SAR 48.08 from 15 analysts, with FY2026 EPS of SAR 4.16.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/1180/financials/",
  irUrl: "https://www.alahli.com",
  bigPicture: {
    paragraphs: [
      "Saudi National Bank is the product of the 2021 merger between National Commercial Bank and Samba Financial Group. The combination created the largest bank in the Kingdom by assets, with a retail deposit base, a leading corporate lending book and an investment-banking and wealth platform in SNB Capital. Size matters in Saudi banking: it supports large project finance, treasury and cross-border flows that smaller lenders cannot underwrite.",
      "The integration has been the defining operational story. Cost synergies and the harmonisation of systems take time, and the market has been willing to pay for the franchise only at a discount to the retail specialist. The equity is a bet on the merged bank earning a mid-teens return on equity as the integration matures.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The bank serves individuals, corporates, government entities and institutions. Retail offers current and savings accounts, personal and home finance, cards and wealth products. Corporate banking covers lending, trade finance, cash management and project finance; SNB Capital adds brokerage, asset management, advisory and custody.",
      "The corporate book is more cyclical than Al Rajhi's retail book, but it also carries higher fee income and stronger relationships with the government and large family groups. The merger added Samba's corporate client base and its investment-banking capability.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Net interest income is the largest line, supplemented by fees from corporate finance, asset management, brokerage and cards. The cost of funds is supported by a large current-account base, though not as low as Al Rajhi's. Corporate lending spreads are thinner than retail, which explains the lower net margin and return on equity.",
      "Provisioning is the main earnings variable. The corporate book has concentration in real estate, contracting and government-related entities; a downturn in those sectors would raise impairment charges. The bank has worked through the legacy Samba book and has been building coverage.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from SAR 24.3bn in 2021 to SAR 38.2bn in 2025, helped by the merger, higher rates and loan growth. Net income nearly doubled over the same period, from SAR 12.7bn to SAR 25.0bn. The trailing twelve months show SAR 39.6bn of revenue and SAR 25.9bn of net income.",
      "Consensus for FY2026 is more modest: revenue of SAR 41.1bn, up 4.9%, and EPS of SAR 4.16, up 2.9%. That reflects a slower loan-growth environment and the absence of further merger synergies. The next leg depends on corporate credit demand from Vision 2030 projects and on fee growth in SNB Capital.",
    ],
  },
  performance: {
    paragraphs: [
      "The bank has delivered steady profit growth through the merger, with net income rising every year from 2021 to 2025. Return on equity was 12.7% on a trailing basis, below Al Rajhi and Riyad Bank, because the corporate mix and the larger equity base dilute returns.",
      "The 2025 result was strong: revenue of SAR 38.2bn and net income of SAR 25.0bn, with a 65% net margin. That is a high margin for a universal bank and reflects the Saudi rate environment as much as the mix.",
    ],
  },
  cash: {
    paragraphs: [
      "As with all banks, the relevant cash measures are capital, liquidity and the dividend. SNB pays a generous dividend — a trailing yield of 6.0% — which reflects both the profit level and the state-linked ownership structure. The payout is a key part of the total return.",
      "Capital is adequate, but the bank has a large corporate loan book and a substantial investment portfolio. Growth in risk-weighted assets will determine how much capital can be returned over time.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 38.08 the shares trade at 9.1x trailing earnings and 1.1x book, a meaningful discount to Al Rajhi's 14.6x and 2.4x. The discount is explained by the lower return on equity, the corporate mix and the merger integration, not by a weaker franchise.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 48.08 and a range of SAR 44.00–52.00 from 15 analysts. Nine carry a strong buy and five a buy, with one neutral. FY2026 revenue is expected at SAR 41.1bn and EPS at SAR 4.16. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The sell-side is more uniformly positive on SNB than on the retail banks, reflecting the valuation discount and the dividend yield. The mean target implies meaningful upside, and the ratings mix is the most bullish in the large-cap Saudi banking group.",
      "The debate is less about asset quality than about the sustainable return on equity. If the bank can close part of the gap to peers as integration benefits flow through, the discount can narrow; if returns stay in the low teens, the multiple is likely to stay where it is.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 48.08 (range SAR 44.00–52.00), 15 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 41.1bn, +4.9%; EPS SAR 4.16, +2.9%." },
      { title: "Ratings mix", detail: "9 strong buy, 5 buy, 1 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks sit in corporate credit concentration, merger integration and the sensitivity of margins to rates.",
    items: [
      {
        title: "Corporate credit concentration",
        severity: "High",
        detail:
          "The corporate book is concentrated in real estate, contracting and government-related entities. A slowdown in project spending would raise provisions.",
        watch: "Corporate NPLs, stage 2 loans, provisioning coverage.",
      },
      {
        title: "Merger integration",
        severity: "Medium",
        detail:
          "System and culture integration is largely complete, but cost synergies and cross-sell targets still need to be delivered.",
        watch: "Cost-income ratio, synergy disclosure, staff costs.",
      },
      {
        title: "Rate sensitivity",
        severity: "Medium",
        detail:
          "A lower policy rate compresses net interest income, and the corporate book reprices faster than retail deposits.",
        watch: "Net interest margin, SAMA policy rate.",
      },
      {
        title: "Return on equity",
        severity: "Medium",
        detail:
          "The discount to peers will not close unless returns improve. A flat return on equity keeps the valuation anchored.",
        watch: "ROE, book value growth, payout ratio.",
      },
    ],
    watchlist: [
      { title: "Net interest margin", detail: "Rate pass-through and deposit costs." },
      { title: "Corporate provisions", detail: "Cost of risk in project finance." },
      { title: "SNB Capital fees", detail: "Investment-banking and asset-management revenue." },
      { title: "Dividend", detail: "Payout level and capital adequacy." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "SNB is the large-cap Saudi bank with the widest valuation gap to the quality leader. It has scale, a strong corporate franchise and a 6% dividend yield, but a lower return on equity than Al Rajhi and a more cyclical loan book. The shares are a value proposition rather than a compounder.",
      "The re-rating case rests on closing the return gap and converting merger synergies into sustainable profit growth. If that happens, the discount to book value should narrow; if not, the dividend is likely to do most of the work.",
    ],
    questions: [
      "What return on equity can the merged bank sustain through a full cycle?",
      "How much of the corporate book is exposed to real-estate and contracting risk?",
      "Are merger cost synergies fully reflected in the run rate?",
      "What payout is sustainable if loan growth accelerates?",
    ],
  },
};
