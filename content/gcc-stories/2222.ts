import type { StockStory } from "@/content/stocks/types";

export const saudiAramco: StockStory = {
  ticker: "2222",
  kicker: "Saudi Arabia · Integrated energy",
  title: "Saudi Aramco: the scale monopoly behind the Kingdom's balance sheet",
  dek:
    "Aramco sells roughly one in every eight barrels of oil consumed worldwide, and its cost position is the lowest of any listed integrated major. The investment case turns on oil prices, gas growth and a dividend that is larger than most sovereign budgets.",
  readingMinutes: 10,
  takeaways: [
    "TTM revenue of SAR 1.93trn and net income of SAR 448bn, with a 42% operating margin and 25% return on equity.",
    "Production is cheap and long-lived, but revenue and earnings still track crude prices: net income fell from SAR 597bn in 2022 to SAR 348bn in 2025.",
    "The dividend is the anchor for most holders; the base payout is supplemented by a performance-linked component through the cycle.",
    "Growth is gas-led — Jafurah and the master gas system — plus downstream chemicals integration rather than oil volume growth.",
    "The stock trades at about 14x trailing earnings and 7.3x EV/EBITDA, with a 5.2% dividend yield.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/2222/financials/",
  irUrl: "https://www.aramco.com",
  bigPicture: {
    paragraphs: [
      "Saudi Aramco is the largest listed company in the Gulf and the financial engine of the Saudi state. It produces crude oil, condensate, natural gas and natural gas liquids, refines and sells products, and owns a large chemicals platform anchored by its majority stake in SABIC. The Kingdom's fiscal and social programmes depend on the dividend and taxes that flow from the company, which makes its capital allocation a national as well as a corporate decision.",
      "The long-term question is not whether the world still needs oil, but how quickly the marginal barrel is replaced and who owns the lowest-cost supply. Aramco's reservoir quality, scale and integrated downstream give it a structural cost advantage; the constraint is that the price of the commodity, not the quality of the asset, determines most of the year-to-year earnings change.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The Upstream segment explores, develops and produces crude oil, condensate, natural gas and NGLs. It operates the Ghawar field and other onshore and offshore assets, with the Kingdom's largest reserves base and a production profile that is managed through OPEC+ agreements. Downstream refines crude into fuels, lubricants and petrochemicals, and includes retail, trading and base oils.",
      "The company also owns a controlling stake in SABIC, which gives it a global chemicals footprint and a second route to monetise hydrocarbons. Gas is the fastest-growing part of the portfolio: Jafurah is the largest unconventional gas development in the Kingdom and is intended to free more liquids for export and feed power and petrochemical demand at home.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is dominated by crude oil and refined products, priced off international benchmarks, with gas and chemicals adding diversification. Because Saudi production costs are among the lowest in the world, small changes in the oil price translate into large changes in operating profit; the 2022 windfall lifted net income to SAR 597bn, while the normalisation to SAR 348bn in 2025 shows how much of the earnings base is cyclical.",
      "The downstream and chemicals businesses are more margin-sensitive and less correlated with crude, but they are not a hedge: weak petrochemical spreads compress SABIC earnings at the same time as lower oil prices reduce upstream revenue. Royalties, taxes and the government's direct share of profit are set administratively, so the split between shareholder and state is a policy variable rather than a market outcome.",
    ],
  },
  growth: {
    paragraphs: [
      "Oil production growth is constrained by OPEC+ policy and by the Kingdom's spare-capacity strategy; the company is not a volume-growth story in the way a shale producer is. The growth vectors are gas, where Jafurah and the expansion of the master gas system should add meaningful volumes over the next several years, and downstream integration, where Aramco is converting more barrels into chemicals and higher-value products.",
      "International downstream and low-carbon projects add optionality but consume capital. Management has also signalled a willingness to sell or partner assets where the returns are below the upstream hurdle, which would improve capital efficiency if it continues.",
    ],
  },
  performance: {
    paragraphs: [
      "Revenue fell from SAR 2.27trn in 2022 to SAR 1.67trn in 2025, while net income moved from SAR 597bn to SAR 348bn over the same period. The trailing twelve months show a partial recovery: revenue of SAR 1.93trn, net income of SAR 448bn and EBITDA of SAR 895bn, helped by stronger volumes and a better downstream contribution.",
      "Operating margin has stayed above 40% through the cycle, and return on equity was 25% on a trailing basis. That combination — high margins and a large equity base — is the signature of a low-cost resource owner rather than a price-taking refiner.",
    ],
  },
  cash: {
    paragraphs: [
      "Operating cash flow covers a substantial capital programme and the dividend. Trailing free cash flow was SAR 325bn after capital spending, which is more than enough to fund the base dividend; the performance-linked component is what flexes with the cycle. Net debt is modest relative to EBITDA, and the balance sheet remains one of the strongest in the sector.",
      "The dividend is the central valuation anchor for income funds. It is set by the board with an eye on the government's fiscal needs, so it has been more stable than the earnings cycle would imply. Investors should treat the payout as a policy decision that can be adjusted rather than a contractual obligation.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 26.10 the shares trade at roughly 14x trailing earnings and 7.3x EV/EBITDA, with a 5.2% dividend yield. That is a premium to the cheapest integrated majors and a discount to the quality of the resource base; the market is effectively pricing a long-run oil price and a stable payout.",
      "Third-party consensus, attributed and dated November 2026, has 18 analysts covering the stock with a mean target of SAR 30.20 and a range of SAR 27.00–35.00. Six analysts carry a strong buy and four a buy, with eight neutral. Consensus expects FY2026 revenue of about SAR 2.0trn and EPS of SAR 2.02, up 25% on the prior year. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The sell-side community is large for the region and unusually well informed on the upstream story. The distribution of ratings is more balanced than the headline target suggests: the mean target sits above the current price, but half the coverage is neutral, reflecting the oil-price dependency rather than disagreement about asset quality.",
      "The key debate is the sustainable oil price embedded in estimates and the pace of the gas ramp. A higher-for-longer Brent assumption lifts both earnings and the dividend; a weaker price exposes the performance-linked payout and the downstream margin.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 30.20 (range SAR 27.00–35.00), 18 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue about SAR 2.0trn; EPS SAR 2.02, +25% year on year." },
      { title: "Ratings mix", detail: "6 strong buy, 4 buy, 8 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are concentrated in the commodity, the fiscal relationship and the capital programme rather than in operational execution.",
    items: [
      {
        title: "Oil price and OPEC+ policy",
        severity: "High",
        detail:
          "A sustained fall in Brent would compress revenue, earnings and the performance-linked dividend. Production quotas can also cap volumes even when prices are strong.",
        watch: "Brent strip, OPEC+ meetings, Saudi production allocations.",
      },
      {
        title: "State linkage and royalty changes",
        severity: "Medium",
        detail:
          "The government is the controlling shareholder and sets royalties, taxes and the dividend. A change in the fiscal take would affect minority shareholders.",
        watch: "Royalty decrees, budget statements, dividend announcements.",
      },
      {
        title: "Capital intensity",
        severity: "Medium",
        detail:
          "Jafurah, gas expansion and downstream projects absorb large amounts of capital before they generate returns. Cost overruns or delays would reduce free cash flow.",
        watch: "Capex guidance, project milestones, free cash flow.",
      },
      {
        title: "Energy transition",
        severity: "Medium",
        detail:
          "A faster shift away from oil would lower the long-run price deck and the value of long-dated reserves, even if near-term demand remains resilient.",
        watch: "IEA demand forecasts, EV adoption, refining closures.",
      },
    ],
    watchlist: [
      { title: "Quarterly dividend", detail: "Base and performance components, and any change in policy." },
      { title: "Jafurah progress", detail: "First gas, plateau timing and capex." },
      { title: "Downstream spreads", detail: "Refining and petrochemical margins." },
      { title: "Brent and differentials", detail: "The largest single driver of earnings." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Aramco is a low-cost, long-life resource base wrapped in a national balance sheet. It is not a growth stock in the conventional sense: the equity is a claim on the oil price, the gas ramp and a dividend that the state uses as a fiscal tool. At 14x earnings and 7.3x EV/EBITDA, the market is paying for the quality of the asset rather than for a cycle upturn.",
      "The shares make most sense for investors who want Gulf energy exposure and a large, stable payout, and who accept that earnings will remain volatile around the oil price. The gas programme is the most important thing to watch because it is the only part of the story that can change the volume trajectory.",
    ],
    questions: [
      "What oil price is embedded in the current dividend and consensus estimates?",
      "How much of Jafurah's gas is already contracted, and at what price?",
      "Is the downstream and chemicals portfolio earning its cost of capital?",
      "How would a lower-for-longer oil price change the payout policy?",
    ],
  },
};
