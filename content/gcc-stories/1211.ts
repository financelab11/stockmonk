import type { StockStory } from "@/content/stocks/types";

export const maaden: StockStory = {
  ticker: "1211",
  kicker: "Saudi Arabia · Mining and metals",
  title: "Ma'aden: the Kingdom's mining champion, still in its build-out phase",
  dek:
    "Ma'aden has grown from a phosphate and aluminium producer into a diversified miner with gold, copper and a national mandate to make mining the third pillar of the Saudi economy. Earnings are volatile and capital spending is heavy, but the resource base is strategic.",
  readingMinutes: 9,
  takeaways: [
    "TTM revenue of SAR 40.4bn, EBITDA of SAR 14.6bn and net income of SAR 7.7bn, a 25% operating margin.",
    "Revenue has grown every year since 2023, but net income fell from SAR 9.3bn in 2022 to SAR 1.6bn in 2023 before recovering to SAR 7.4bn in 2025.",
    "The growth pipeline is phosphate expansion, gold and copper development and the Manara Minerals platform.",
    "At 29.5x trailing earnings and 15.9x EV/EBITDA, the shares price in the build-out rather than current cash flow.",
    "Consensus has a mean target of SAR 66.25 from 11 analysts, with FY2026 EPS expected at SAR 2.15.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/1211/financials/",
  irUrl: "https://www.maaden.com.sa",
  bigPicture: {
    paragraphs: [
      "Saudi Arabia wants mining to become the third pillar of its economy, alongside oil and petrochemicals. Ma'aden is the vehicle for that ambition: a majority state-owned miner with phosphate, aluminium, gold and copper assets, plus a growing exploration portfolio. The company is no longer a single-commodity producer, but it is still a price-taker on global markets and a heavy consumer of capital.",
      "The equity has re-rated as the growth pipeline became visible. The question is whether the projects earn their cost of capital through the cycle, and whether the Kingdom's geological survey and permitting reforms can turn exploration targets into producing mines fast enough to justify the multiple.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The phosphate business mines and processes phosphate rock into ammonia and diammonium phosphate fertiliser, largely for export. Aluminium runs from bauxite mining through alumina refining to primary aluminium and rolled products. Gold is the oldest cash-generating business, and copper is the newest growth leg.",
      "The company also owns or is developing industrial minerals and exploration licences across the Kingdom. Manara Minerals, a joint venture with the Public Investment Fund, is the vehicle for international mining investments that would give Ma'aden access to assets outside Saudi Arabia.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is export-linked and denominated in US dollars, so the Saudi riyal peg and global commodity prices drive the top line. Phosphate and aluminium are cyclical, with margins that depend on fertiliser and metal prices, energy costs and the availability of cheap Saudi gas.",
      "Cost control matters more than volume in the short term. The 2023 profit collapse — net income fell from SAR 9.3bn to SAR 1.6bn — shows how quickly weaker prices and higher costs can compress a capital-intensive miner's earnings. The recovery to SAR 7.4bn in 2025 came from better prices and operational improvements.",
    ],
  },
  growth: {
    paragraphs: [
      "The phosphate expansion is the largest near-term project, adding capacity and extending the mine life. Gold and copper developments are smaller but higher-margin, and the exploration programme could add new mines over the next decade. The company has also signalled ambition in lithium and other battery minerals, although those are early-stage.",
      "Capital spending is the constraint: the build-out consumes most of operating cash flow, and free cash flow was only SAR 1.5bn on a trailing basis. Growth is real, but it is being funded by the balance sheet and by the state, not by internal cash generation.",
    ],
  },
  performance: {
    paragraphs: [
      "Revenue grew from SAR 26.8bn in 2021 to SAR 40.3bn in 2022, fell to SAR 29.3bn in 2023 and recovered to SAR 38.6bn in 2025. Net income followed the same cycle, from SAR 5.2bn to SAR 9.3bn, then SAR 1.6bn, and back to SAR 7.4bn. The trailing twelve months show SAR 40.4bn of revenue and SAR 7.7bn of net income.",
      "Operating margin was 25.4% and return on equity 12.6% on a trailing basis. Those are respectable for a miner, but they are not high enough to make the current multiple look cheap without the growth projects delivering.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is thin relative to EBITDA because of the capital programme. Trailing free cash flow was SAR 1.5bn, and the company carries SAR 34.9bn of debt against SAR 10.1bn of cash. The balance sheet is manageable, but it leaves less room for a downturn than a mature miner would have.",
      "The dividend is not the main part of the story; the shares are a growth and resource play. Investors should focus on project returns and funding rather than payout yield.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 58.40 the shares trade at 29.5x trailing earnings and 15.9x EV/EBITDA, a premium to global diversified miners. The premium reflects the Saudi growth mandate, the resource base and the expectation that the pipeline will add low-cost volume.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 66.25 and a range of SAR 46.00–79.00 from 11 analysts. Four carry a strong buy, five a hold, one a sell and one a strong sell — a wide spread that reflects the execution and commodity risk. FY2026 revenue is expected at SAR 41.4bn and EPS at SAR 2.15. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The ratings are split because the stock is expensive on current earnings and the growth case depends on projects that are still under construction. The mean target implies upside, but the bear case is that capital intensity and commodity prices keep returns below the cost of capital.",
      "The key debate is the phosphate expansion's timing and cost, and whether gold and copper can lift group margins enough to justify the multiple. The Saudi state's support is an advantage, but it also means the company may pursue strategic projects that are not purely return-driven.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 66.25 (range SAR 46.00–79.00), 11 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 41.4bn, +7.2%; EPS SAR 2.15, +12.3%." },
      { title: "Ratings mix", detail: "4 strong buy, 0 buy, 5 hold, 1 sell, 1 strong sell." },
    ],
  },
  risks: {
    intro:
      "The risks are commodity prices, project execution and the capital intensity of the growth plan.",
    items: [
      {
        title: "Commodity price cycle",
        severity: "High",
        detail:
          "Phosphate, aluminium, gold and copper prices drive revenue. The 2023 profit collapse shows how quickly earnings can fall.",
        watch: "DAP and aluminium prices, gold and copper benchmarks.",
      },
      {
        title: "Project execution and capex",
        severity: "High",
        detail:
          "The expansion programme is large relative to cash flow. Delays or cost overruns would defer returns and stretch the balance sheet.",
        watch: "Capex guidance, project milestones, free cash flow.",
      },
      {
        title: "Funding and leverage",
        severity: "Medium",
        detail:
          "Debt of SAR 34.9bn against SAR 10.1bn of cash leaves limited headroom if prices fall during the build-out.",
        watch: "Net debt/EBITDA, refinancing, state support.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "At 15.9x EV/EBITDA, the shares already discount a successful build-out. A disappointment would hit the multiple.",
        watch: "EV/EBITDA versus global miners, consensus revisions.",
      },
    ],
    watchlist: [
      { title: "Phosphate expansion", detail: "Timing, capex and ramp-up." },
      { title: "Gold and copper", detail: "Production growth and grades." },
      { title: "Commodity prices", detail: "Fertiliser, aluminium, gold and copper." },
      { title: "Free cash flow", detail: "The test of whether growth is self-funding." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Ma'aden is a strategic resource build-out rather than a mature cash generator. The assets are real and the growth pipeline is substantial, but the shares already trade at a premium to global miners and free cash flow is thin while the capex programme runs.",
      "The investment case rests on execution: delivering the phosphate expansion and the gold and copper projects on time and on budget, then converting higher volumes into returns above the cost of capital. Until then, the equity is a leveraged bet on commodity prices and Saudi industrial policy.",
    ],
    questions: [
      "What returns do the phosphate and copper projects earn at mid-cycle prices?",
      "How much of the capex programme is already committed?",
      "Can free cash flow cover the dividend and debt service during the build-out?",
      "What would a sustained fall in fertiliser prices do to the valuation?",
    ],
  },
};
