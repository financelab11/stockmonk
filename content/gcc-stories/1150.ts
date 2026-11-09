import type { StockStory } from "@/content/stocks/types";

export const alinmaBank: StockStory = {
  ticker: "1150",
  kicker: "Saudi Arabia · Digital Islamic banking",
  title: "Alinma Bank: the digital challenger with a mortgage engine",
  dek:
    "Alinma is the youngest of the large Saudi banks and the most digital, with a low-cost operating model and a rapidly growing retail book. It trades at a premium to book on a mid-teens return on equity, but consensus sees EPS growth flattening in 2026.",
  readingMinutes: 8,
  takeaways: [
    "TTM revenue of SAR 11.2bn and net income of SAR 6.6bn, with a 59% net margin and 13.2% return on equity.",
    "Revenue grew from SAR 5.4bn in 2021 to SAR 10.9bn in 2025, roughly doubling in four years.",
    "The bank is built around digital channels, Islamic finance and a fast-growing mortgage and SME book.",
    "At 11.0x earnings and 1.2x book, it is cheaper than Al Rajhi but more expensive than the corporate banks.",
    "Consensus has a mean target of SAR 27.20 from 16 analysts, with FY2026 EPS expected to fall 1.5%.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/1150/financials/",
  irUrl: "https://www.alinma.com",
  bigPicture: {
    paragraphs: [
      "Alinma Bank was created in 2008 as a Sharia-compliant lender with a mandate to serve the Kingdom's housing and retail needs. It has grown faster than the incumbents by building a lean, digital-first branch model and by taking share in mortgages. The Public Investment Fund is a major shareholder, which gives it a strategic anchor and access to government-related opportunities.",
      "The equity is a growth story rather than a yield story: the dividend yield is 4.6%, lower than the mature banks, and the valuation depends on the bank maintaining double-digit balance-sheet growth without sacrificing asset quality.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "Alinma provides current and savings accounts, personal and home finance, cards, business banking and SME lending. It has a smaller corporate and treasury book than SNB or SAB, so its revenue is more retail-heavy and more sensitive to the mortgage cycle.",
      "The digital model is central to the cost story. By automating origination and servicing, the bank can grow customers without a proportional increase in branches and staff. That has helped it keep costs low while expanding the loan book.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Net interest income dominates, driven by retail financing and a growing deposit base. Fees from cards, insurance and wealth add a smaller layer. The bank's funding cost is competitive but not as low as Al Rajhi's, so the net margin is lower.",
      "Provisioning is the key risk. Rapid growth in mortgages and SME lending can mask credit deterioration until a downturn; the bank has been building coverage, but the portfolio is younger than the incumbents'.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue nearly doubled from SAR 5.4bn in 2021 to SAR 10.9bn in 2025, and net income rose from SAR 2.7bn to SAR 6.4bn. The trailing twelve months show SAR 11.2bn of revenue and SAR 6.6bn of net income. That is the fastest growth rate in the large-cap group.",
      "Consensus for FY2026 is more cautious: revenue of SAR 12.6bn, up 5.5%, but EPS of SAR 1.94, down 1.5%. The market expects margin pressure and higher provisioning to offset balance-sheet growth. The bank needs to prove that it can keep growing without a rise in credit costs.",
    ],
  },
  performance: {
    paragraphs: [
      "Alinma has grown revenue and profit every year since 2021, with a 13.2% trailing return on equity. The net margin of 59% is lower than Al Rajhi's but higher than the corporate banks, reflecting the retail mix and the digital cost base.",
      "The bank has not needed a capital raise to fund its growth, which is a sign of internal capital generation. The key test will be whether returns hold as the loan book matures and the mortgage cycle slows.",
    ],
  },
  cash: {
    paragraphs: [
      "The dividend yield is 4.6%, lower than the mature banks because the bank retains more capital to fund growth. That is the right policy for a lender expanding its balance sheet, but it makes the shares less attractive to income investors.",
      "Capital is adequate, and the bank has been generating enough profit to support growth without dilution. A higher payout would only make sense if loan growth slowed materially.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 21.59 the shares trade at 11.0x trailing earnings and 1.2x book, a premium to Riyad Bank, SAB and SNB but a discount to Al Rajhi. The multiple reflects the growth record and the digital model; the question is whether the growth can continue at a rate that justifies it.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 27.20 and a range of SAR 23.00–34.20 from 16 analysts. Five carry a strong buy, two a buy, seven a hold and two a strong sell — the widest dispersion in the large-cap group. FY2026 revenue is expected at SAR 12.6bn and EPS at SAR 1.94. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The ratings are split, which is unusual for a Saudi bank. The bulls point to the growth runway and the digital cost advantage; the bears argue that the mortgage cycle is maturing and that provisioning will normalise from a low base.",
      "The mean target is well above the current price, but the two strong sells show that not everyone believes the growth is worth the premium. The key swing factor is the cost of risk.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 27.20 (range SAR 23.00–34.20), 16 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 12.6bn, +5.5%; EPS SAR 1.94, -1.5%." },
      { title: "Ratings mix", detail: "5 strong buy, 2 buy, 7 hold, 2 strong sell." },
    ],
  },
  risks: {
    intro:
      "The risks are credit quality in a young loan book, margin compression and a valuation that already assumes continued growth.",
    items: [
      {
        title: "Mortgage and SME credit quality",
        severity: "High",
        detail:
          "The loan book is younger than the incumbents'. A housing slowdown or a rise in SME defaults would raise provisions from a low base.",
        watch: "Cost of risk, NPL ratio, coverage.",
      },
      {
        title: "Net interest margin",
        severity: "Medium",
        detail:
          "Rate cuts would compress asset yields, and the bank has less low-cost funding than Al Rajhi.",
        watch: "Net interest margin, deposit mix.",
      },
      {
        title: "Growth slowdown",
        severity: "Medium",
        detail:
          "Consensus already expects EPS to fall in 2026. A sharper slowdown would challenge the premium multiple.",
        watch: "Loan growth, revenue growth, EPS revisions.",
      },
      {
        title: "Digital competition",
        severity: "Low",
        detail:
          "New digital banks and fintechs are targeting the same retail customers, though Alinma's scale and licence are advantages.",
        watch: "Customer acquisition, cost-income ratio.",
      },
    ],
    watchlist: [
      { title: "Cost of risk", detail: "The most important number in the growth story." },
      { title: "Mortgage volumes", detail: "SAMA housing data and new finance." },
      { title: "Net interest margin", detail: "Rate pass-through." },
      { title: "Capital", detail: "Whether growth needs new equity." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Alinma is the growth bank of the Saudi large-cap group: a digital, Islamic, retail-heavy lender that has doubled revenue in four years. The premium multiple is justified only if the bank can keep growing without a sharp rise in credit costs.",
      "The shares are a bet on the Saudi mortgage cycle and on management's ability to underwrite a young book through a downturn. The wide dispersion in analyst ratings shows how much uncertainty is embedded in that bet.",
    ],
    questions: [
      "How much of the mortgage growth is prime versus subprime-like?",
      "What is the through-cycle cost of risk for the SME book?",
      "Can the bank hold double-digit revenue growth as the housing cycle matures?",
      "Is the digital cost advantage durable or easily copied?",
    ],
  },
};
