import type { StockStory } from "@/content/stocks/types";

export const multiplyGroup: StockStory = {
  ticker: "MULTIPLY",
  kicker: "United Arab Emirates · Investment holding",
  title: "Multiply Group: a holding company with a confusing earnings base",
  dek:
    "Multiply Group owns media, beauty, wellness, utilities and technology businesses, and holds stakes in listed companies. The trailing figures show a step-change that needs explanation, and the data feed's EV/EBITDA multiple does not reconcile with the balance sheet.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of AED 38.5bn, net income of AED 9.4bn and EBITDA of AED 6.2bn, far above the 2025 annual figures.",
    "2025 revenue was AED 7.0bn and net income AED 3.4bn; the 2022 result included a large one-off gain.",
    "The group owns controlling stakes in operating businesses and minority stakes in listed companies.",
    "At AED 2.00 the reported 6.7x P/E is based on the inflated trailing profit; the 0.7x EV/EBITDA in the feed is not consistent with the balance sheet.",
    "No reliable third-party consensus is available in the current feed, so the report relies on reported financials and the underlying assets.",
  ],
  filingUrl: "https://stockanalysis.com/quote/adx/MULTIPLY/financials/",
  irUrl: "https://www.multiply.ae",
  bigPicture: {
    paragraphs: [
      "Multiply Group is an Abu Dhabi-based investment holding company controlled by the Al Dhaheri family. It owns controlling stakes in businesses spanning media, beauty and wellness, utilities, technology and industrial services, and it holds minority stakes in listed companies. It has grown through acquisitions and has a complex structure.",
      "The equity is a holding company, so its value depends on the sum of its assets rather than on a single operating business. The group's reported earnings are volatile because they include gains and losses on investments, which makes the headline multiple a poor guide. Investors need to look at the underlying cash flows and the value of the listed stakes.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The operating businesses include media and advertising, personal care and beauty, road-safety training, facilities management and utility services. The group also holds stakes in listed companies, which are marked at market value and can generate large gains or losses.",
      "Multiply's strategy is to buy control of cash-generative businesses and to use its balance sheet to fund acquisitions. That model can create value when assets are bought cheaply, but it also creates complexity and related-party risk, which is why the market applies a discount to the holding company.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from the consolidated operating businesses, while profit includes investment income, fair-value gains and share of results from associates. That mix means the reported net margin of 24.4% is not comparable to an operating company's margin; it reflects the accounting treatment of the portfolio.",
      "The operating margin of 12.3% is a better guide to the businesses themselves, though it is still blended across very different activities. The group's cash flow depends on the dividends and fees from its holdings as well as on the operating companies.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue was AED 0.37bn in 2021, AED 1.13bn in 2022, AED 1.29bn in 2023, AED 1.70bn in 2024 and AED 7.00bn in 2025, reflecting acquisitions and consolidation. Net income was distorted by a large one-off gain in 2022, a small profit in 2023, a near-zero result in 2024 and AED 3.44bn in 2025.",
      "The trailing twelve months show AED 38.5bn of revenue and AED 9.4bn of net income, up 1,257%, which is not consistent with the annual results and suggests a consolidation or reclassification. Until the filing explains the change, the trailing figures should be treated as unreliable.",
    ],
  },
  performance: {
    paragraphs: [
      "The reported earnings history is dominated by one-off gains and losses. The 2022 net income of AED 18.4bn included a large fair-value gain, while 2024 was close to break-even. That volatility is a feature of the holding-company model, not a sign of operating performance.",
      "The trailing return on equity of 9.6% and return on invested capital of 3.1% are low for a company trading at a premium to book, though the trailing figures are affected by the same anomaly. On the 2025 result, returns were better but still modest relative to the cost of capital.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was AED 8.3bn on a trailing basis, which is inconsistent with the annual cash generation and again points to a one-off or consolidation effect. The group carries AED 40.0bn of debt and AED 15.7bn of cash, so net debt is meaningful relative to the market capitalisation.",
      "There is no dividend. The group retains cash for acquisitions and for debt service. The main risk is that the holding-company structure and the leverage make it difficult for minority shareholders to realise value.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 2.00 the shares trade at 6.7x trailing earnings, but that multiple is based on the inflated trailing profit. On a market capitalisation of AED 22.4bn, debt of AED 40.0bn and cash of AED 15.7bn, enterprise value is about AED 46.7bn — roughly 7.6x trailing EBITDA, not the 0.7x shown in the data feed.",
      "No reliable third-party consensus target is available in the current feed. The valuation should be assessed on a sum-of-the-parts basis: the market value of the listed stakes plus the operating businesses, less net debt and a holding-company discount.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sell-side coverage is absent from the current data feed, which is unusual for a company of this size. The limited free float and the complex structure are the likely reasons.",
      "The key debate is capital allocation and the holding-company discount. A simplification of the portfolio, a disposal of non-core assets or a higher dividend could narrow the discount; further acquisitions at high prices would widen it.",
    ],
    bullets: [
      { title: "Coverage", detail: "No reliable consensus target in the current feed." },
      { title: "Structure", detail: "Holding-company discount and related-party complexity." },
      { title: "Data caveat", detail: "Trailing revenue and profit are inconsistent with the annual results." },
    ],
  },
  risks: {
    intro:
      "The risks are holding-company complexity, leverage and the reliability of the reported figures.",
    items: [
      {
        title: "Holding-company discount",
        severity: "High",
        detail:
          "The market values the group below the sum of its parts, and the discount can persist if governance and disclosure do not improve.",
        watch: "Sum-of-the-parts, related-party disclosures.",
      },
      {
        title: "Leverage",
        severity: "High",
        detail:
          "Debt of AED 40.0bn against AED 22.4bn of market capitalisation leaves little room for error.",
        watch: "Net debt/EBITDA, refinancing, interest cover.",
      },
      {
        title: "Data quality",
        severity: "High",
        detail:
          "The trailing figures and the EV/EBITDA multiple in the feed do not reconcile with the annual results or the balance sheet.",
        watch: "Annual report, segment disclosures, restatements.",
      },
      {
        title: "Capital allocation",
        severity: "Medium",
        detail:
          "Acquisitions only create value if the returns exceed the cost of capital. The track record is short and the portfolio is complex.",
        watch: "ROIC, acquisition multiples, disposals.",
      },
    ],
    watchlist: [
      { title: "Sum-of-the-parts", detail: "Value of listed stakes and operating businesses." },
      { title: "Leverage", detail: "Debt and refinancing." },
      { title: "Filings", detail: "Reconcile the trailing figures." },
      { title: "Capital allocation", detail: "Acquisitions and disposals." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Multiply Group is a complex Abu Dhabi holding company with a portfolio of operating businesses and listed stakes. The trailing figures in the data feed are inconsistent with the annual results, so the headline multiples should not be relied on.",
      "The investment case depends on a sum-of-the-parts analysis and on management's ability to narrow the holding-company discount. Until disclosure improves and leverage falls, the equity is a speculative way to own the assets.",
    ],
    questions: [
      "What caused the jump in trailing revenue and profit?",
      "What is the market value of the listed stakes?",
      "How much debt is due in the next two years?",
      "Is there a plan to simplify the portfolio?",
    ],
  },
};
