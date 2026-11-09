import type { StockStory } from "@/content/stocks/types";

export const saudiTelecom: StockStory = {
  ticker: "7010",
  kicker: "Saudi Arabia · Telecom and digital",
  title: "Saudi Telecom: a cash-generative incumbent that is reinvesting in digital",
  dek:
    "STC is the Kingdom's largest telecom operator, with a 5% dividend yield and a portfolio that now stretches from towers and data centres to fintech and AI. Growth is modest, but cash conversion is strong.",
  readingMinutes: 8,
  takeaways: [
    "TTM revenue of SAR 80.0bn, EBITDA of SAR 22.3bn and net income of SAR 14.2bn, with a 16.6% return on equity.",
    "Revenue grew from SAR 63.0bn in 2021 to SAR 77.8bn in 2025, a mid-single-digit compound rate.",
    "The 2024 net income spike to SAR 24.7bn included a one-off gain; underlying earnings were closer to SAR 14–15bn.",
    "At 14.6x earnings and 9.0x EV/EBITDA, the stock is priced as a stable cash compounder with a 5.3% yield.",
    "Consensus has a mean target of SAR 47.74 from 18 analysts, with FY2026 EPS expected to dip 3.2%.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/7010/financials/",
  irUrl: "https://www.stc.com.sa",
  bigPicture: {
    paragraphs: [
      "STC is the incumbent telecom operator in Saudi Arabia and one of the largest in the region. It owns the fixed and mobile networks, a tower business (TAWAL), data centres and submarine cables (center3), a payments platform (stc pay) and a portfolio of regional operators. The core business is mature, but management has been building digital and infrastructure businesses that grow faster than connectivity.",
      "The equity is a defensive cash story: revenue is recurring, capital intensity is high but stable, and the dividend is a central part of the return. The debate is whether the digital investments can lift growth enough to justify a re-rating, or whether they simply replace declining voice and messaging revenue.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "STC provides mobile, fixed-line, broadband and enterprise connectivity in Saudi Arabia, plus wholesale capacity and data-centre services through center3. TAWAL owns and leases towers. stc pay provides digital wallets and payments, and the group owns stakes in operators in Kuwait, Bahrain and Malaysia.",
      "The enterprise and government segment is growing as Saudi organisations digitise, and the company is positioning itself as an AI and cloud infrastructure provider. Those businesses are smaller than connectivity but carry higher growth and, in some cases, better margins.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from subscriptions, usage, wholesale and enterprise contracts. Mobile and fixed connectivity remain the largest lines, but growth is coming from ICT, data centres and fintech. Operating costs are dominated by network depreciation, spectrum, energy and staff.",
      "The business is capital-intensive: network investment consumes a meaningful share of revenue every year. The 2024 net income of SAR 24.7bn was boosted by a one-off gain, so investors should focus on the recurring earnings base of roughly SAR 14–15bn.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from SAR 63.0bn in 2021 to SAR 77.8bn in 2025, a compound annual growth rate of about 5%. The trailing twelve months show SAR 80.0bn. Growth has come from enterprise ICT, wholesale and regional operations rather than the mature consumer voice business.",
      "Consensus for FY2026 assumes revenue of SAR 81.5bn, up 4.7%, but EPS of SAR 2.88, down 3.2%. The market expects higher costs and investment to offset revenue growth. The upside would come from faster data-centre and AI demand or from asset monetisation.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin has drifted from about 21% in 2021 to 18.7% on a trailing basis, reflecting the mix shift toward lower-margin ICT and infrastructure projects. Return on equity was 16.6%, still a healthy level for a telecom.",
      "The 2024 profit spike distorts the trend, but the underlying business has grown earnings modestly. The company has kept the dividend stable, which is the main reason income funds own the shares.",
    ],
  },
  cash: {
    paragraphs: [
      "Trailing free cash flow was SAR 5.4bn after capital spending, enough to support the SAR 5.3% dividend yield. Net debt is moderate relative to EBITDA, and the tower and data-centre assets could be monetised if the company needs capital.",
      "STC has historically been a reliable dividend payer. The payout is the anchor for the valuation; a cut would be a major negative signal.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 41.38 the shares trade at 14.6x trailing earnings and 9.0x EV/EBITDA, in line with regional incumbents and at a premium to European telecoms. The premium reflects the Saudi growth outlook and the dividend.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 47.74 and a range of SAR 42.40–55.00 from 18 analysts. Seven carry a strong buy, two a buy and nine a hold. FY2026 revenue is expected at SAR 81.5bn and EPS at SAR 2.88. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The ratings are balanced: the bulls point to the dividend, the digital portfolio and the potential for value crystallisation from towers and data centres; the neutrals argue that growth is too slow to justify a premium multiple.",
      "The key swing factors are the pace of enterprise and AI revenue, the cost of the network build and the dividend policy. Asset sales could unlock value but would also reduce recurring cash flow.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 47.74 (range SAR 42.40–55.00), 18 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 81.5bn, +4.7%; EPS SAR 2.88, -3.2%." },
      { title: "Ratings mix", detail: "7 strong buy, 2 buy, 9 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are slower connectivity growth, higher network costs and the execution of the digital portfolio.",
    items: [
      {
        title: "Mature core market",
        severity: "Medium",
        detail:
          "Consumer mobile and fixed revenue is close to saturation. Growth depends on enterprise, wholesale and digital services.",
        watch: "Consumer ARPU, enterprise revenue, market share.",
      },
      {
        title: "Capital intensity",
        severity: "Medium",
        detail:
          "5G, fibre and data-centre investment absorb cash. A heavier capex cycle would pressure free cash flow and the dividend.",
        watch: "Capex/revenue, free cash flow.",
      },
      {
        title: "Digital execution",
        severity: "Medium",
        detail:
          "Fintech, cloud and AI businesses are smaller and face strong competition. They may not replace declining legacy revenue.",
        watch: "stc pay, center3 and enterprise growth.",
      },
      {
        title: "Regulation and spectrum",
        severity: "Low",
        detail:
          "Licence renewals, spectrum fees and wholesale regulation can change the cost base.",
        watch: "CITC decisions, spectrum auctions.",
      },
    ],
    watchlist: [
      { title: "Dividend", detail: "Payout per share and policy." },
      { title: "Enterprise and ICT", detail: "Growth outside connectivity." },
      { title: "Capex", detail: "Network and data-centre spending." },
      { title: "Asset monetisation", detail: "Tower and data-centre stakes." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "STC is a mature, cash-generative telecom with a reliable dividend and a portfolio of digital options. The shares are not cheap on growth, but they offer defensive exposure to the Saudi economy and a 5.3% yield.",
      "The investment case works best for income investors who want Gulf telecom exposure and are comfortable with low-single-digit growth. A re-rating would require the digital businesses to grow fast enough to offset the mature core.",
    ],
    questions: [
      "How much of revenue growth is coming from outside connectivity?",
      "Is the dividend covered by free cash flow after the capex programme?",
      "What is the value of the tower and data-centre assets?",
      "Can stc pay and enterprise ICT reach scale before legacy revenue declines?",
    ],
  },
};
