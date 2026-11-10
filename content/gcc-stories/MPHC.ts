import type { StockStory } from "@/content/stocks/types";

export const mesaieed: StockStory = {
  ticker: "MPHC",
  kicker: "Qatar · Petrochemical holdings",
  title: "Mesaieed Petrochemical: a holding company at a data inflection",
  dek:
    "Mesaieed Petrochemical holds stakes in Qatari petrochemical joint ventures and receives dividends from them. The reported revenue and earnings in the data feed have turned negative, which appears to be an accounting artefact rather than an operating collapse.",
  readingMinutes: 7,
  takeaways: [
    "2025 revenue was QAR 0.55bn and net income QAR 0.53bn; the trailing figures in the feed are negative and should not be read as operating revenue.",
    "The company holds minority stakes in QAPCO, QVC and other Qatari petrochemical ventures, and its income is largely equity-accounted.",
    "The balance sheet is net cash, with QAR 15.55bn of equity and QAR 0.32bn of cash, and the dividend yield is 4.3%.",
    "At QAR 0.98 the shares trade at a discount to book and no meaningful earnings multiple because of the accounting distortion.",
    "No reliable third-party consensus is available in the current feed, so the report relies on the reported annual results and the portfolio.",
  ],
  filingUrl: "https://stockanalysis.com/quote/qse/MPHC/financials/",
  irUrl: "https://www.mphc.com.qa",
  bigPicture: {
    paragraphs: [
      "Mesaieed Petrochemical Holding is a Qatari holding company with stakes in petrochemical joint ventures at Mesaieed Industrial City. Its main holdings include interests in Qatar Petrochemical Company, Qatar Vinyl Company and other ventures that produce polyethylene, caustic soda, ethylene dichloride and other chemicals.",
      "The equity is a leveraged play on petrochemical spreads through a portfolio of associates rather than a direct operator. The company's reported revenue is not comparable to an operating producer because much of its income is the share of profits from the joint ventures. That accounting structure explains the unusual margins and the recent negative trailing figures.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The company holds minority stakes in petrochemical ventures and receives dividends and share of profits. It does not operate the plants directly; the operating partners manage production and sales, while MPHC participates through its equity interests.",
      "The portfolio gives exposure to polyethylene, vinyl and other chemical chains, with feedstock from Qatar's gas fields. The value of the holding depends on the cash flows of the ventures, which are cyclical and driven by global petrochemical prices.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Income is the share of profits from associates and dividends from the ventures. That is why the reported operating margin is close to 100% in normal years and why the trailing figures can turn negative when the ventures report losses or one-off charges.",
      "The balance sheet holds the stakes at cost or fair value and carries a net cash position. The dividend received from the ventures funds the dividend paid to MPHC shareholders, so the payout depends on the cash generation of the underlying plants rather than on the holding company's own operations.",
    ],
  },
  growth: {
    paragraphs: [
      "Reported revenue was QAR 1.88bn in 2021, QAR 1.78bn in 2022, QAR 1.10bn in 2023, QAR 0.73bn in 2024 and QAR 0.55bn in 2025, tracking the share of venture profits as petrochemical spreads narrowed. Net income followed the same path, from QAR 1.86bn to QAR 0.53bn.",
      "The trailing twelve months show negative revenue and net income, which is not consistent with the annual results and likely reflects a reversal or accounting adjustment in the latest period. Until the filing explains it, the annual 2025 result is the better anchor.",
    ],
  },
  performance: {
    paragraphs: [
      "The earnings history is one of steady decline from the 2021 peak as petrochemical spreads compressed. The company remained profitable through 2025, but the profit was a fraction of the 2021 level.",
      "Return on equity was about 3.4% on the 2025 result, low relative to the cost of equity. The company has no debt and a large equity base, which supports the dividend but also dilutes returns.",
    ],
  },
  cash: {
    paragraphs: [
      "The company holds QAR 0.32bn of cash and no debt, a net cash position that supports the 4.3% dividend yield. The dividend is funded by distributions from the joint ventures rather than by operating cash flow at the holding level.",
      "The main risk is that the ventures reduce their distributions if spreads stay weak. The net cash balance provides a buffer, but it is small relative to the equity base.",
    ],
  },
  valuation: {
    paragraphs: [
      "At QAR 0.98 the shares trade below book value, with a market capitalisation of QAR 12.3bn against QAR 15.55bn of equity. An earnings multiple is not meaningful given the accounting distortion in the trailing figures.",
      "No reliable third-party consensus target is available in the current feed. The valuation should be assessed on the dividend yield, the net cash and the market value of the stakes in the joint ventures, adjusted for the cyclicality of petrochemical spreads.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sell-side coverage is absent from the current data feed, which is common for Qatari holding companies with limited free float. Without a target price, investors should value the stakes directly and treat the reported revenue as an accounting measure rather than an operating top line.",
      "The key debate is the cash distribution from the ventures and the timing of a petrochemical recovery. A recovery in spreads would lift the share of profits and support the dividend; a prolonged downturn would keep returns low.",
    ],
    bullets: [
      { title: "Coverage", detail: "No reliable consensus target in the current feed." },
      { title: "Valuation", detail: "Trades below book value; earnings multiple not meaningful." },
      { title: "Income", detail: "Dividend depends on distributions from the joint ventures." },
    ],
  },
  risks: {
    intro:
      "The risks are petrochemical spreads, the accounting distortion and the dependence on venture distributions.",
    items: [
      {
        title: "Petrochemical spreads",
        severity: "High",
        detail:
          "The value of the stakes depends on the profitability of the ventures, which is driven by global chemical prices.",
        watch: "Polyethylene and vinyl spreads, global capacity.",
      },
      {
        title: "Data quality",
        severity: "High",
        detail:
          "The trailing revenue and earnings are negative and do not reconcile with the annual results, making the headline metrics unreliable.",
        watch: "Annual report, venture disclosures, restatements.",
      },
      {
        title: "Distribution risk",
        severity: "Medium",
        detail:
          "The dividend depends on cash distributions from the ventures, which can be cut in a downturn.",
        watch: "Dividends received, venture cash flow.",
      },
      {
        title: "Concentration",
        severity: "Medium",
        detail:
          "The portfolio is concentrated in a few Qatari petrochemical ventures.",
        watch: "Stake concentration, partner decisions.",
      },
    ],
    watchlist: [
      { title: "Spreads", detail: "Petrochemical margins." },
      { title: "Distributions", detail: "Cash from the ventures." },
      { title: "Filings", detail: "Reconcile the trailing figures." },
      { title: "Net cash", detail: "Buffer and dividend support." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Mesaieed Petrochemical is a holding company with stakes in Qatari petrochemical ventures, a net cash balance and a 4.3% dividend yield. The reported trailing figures are distorted by an accounting effect and should not be used to judge the business.",
      "The investment case is a cyclical recovery play on petrochemical spreads, with the dividend providing income while investors wait. The main risks are spreads and the reliability of the reported figures.",
    ],
    questions: [
      "What caused the negative trailing revenue and earnings?",
      "How much cash did the ventures distribute in 2025?",
      "What is the market value of the stakes versus book value?",
      "When is the next petrochemical capacity addition?",
    ],
  },
};
