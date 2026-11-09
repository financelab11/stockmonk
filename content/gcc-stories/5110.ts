import type { StockStory } from "@/content/stocks/types";

export const saudiElectricity: StockStory = {
  ticker: "5110",
  kicker: "Saudi Arabia · Regulated utility",
  title: "Saudi Electricity: the grid that powers Vision 2030",
  dek:
    "SEC is the regulated monopoly behind the Kingdom's power transmission and distribution. Revenue is growing with the economy, but the asset base is enormous, returns are thin and the capital programme is funded with debt.",
  readingMinutes: 8,
  takeaways: [
    "TTM revenue of SAR 107.2bn, EBITDA of SAR 42.4bn and net income of SAR 13.5bn, a 12.5% net margin.",
    "Revenue grew from SAR 69.3bn in 2021 to SAR 102.2bn in 2025, driven by demand growth and tariff reforms.",
    "Return on equity is only 5.2% because the regulated asset base is huge relative to profit.",
    "At 14.8x earnings and 6.9x EV/EBITDA, the valuation reflects the regulated, low-growth profile and the 4.5% dividend.",
    "Consensus has a mean target of SAR 16.40 from 6 analysts, with five holds and one sell.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/5110/financials/",
  irUrl: "https://www.se.com.sa",
  bigPicture: {
    paragraphs: [
      "Saudi Electricity Company is the state-controlled utility that owns and operates the Kingdom's transmission and distribution grid. It is the backbone of the power system: every new data centre, desalination plant, industrial project and city depends on its network. The company is regulated, with tariffs and returns set by the government.",
      "The equity is a bond-like utility with a growth kicker from electricity demand. Revenue rises with the economy and with tariff reforms, but the regulated return on the asset base limits profitability. The shares are held for the dividend and the defensive characteristics rather than for rapid growth.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "SEC transmits and distributes electricity across Saudi Arabia, connecting generation plants to homes, businesses and industry. It also operates fibre and telecom infrastructure and provides related services. The company does not own most generation capacity; it earns a regulated return on the network assets.",
      "The grid is being expanded to connect renewable energy projects, new cities and industrial zones. That capex programme is large and long-dated, and it is funded through a combination of operating cash flow, debt and state support.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the regulated tariff multiplied by electricity volumes. The regulator sets tariffs to cover operating costs, depreciation and an allowed return on the asset base. The company earns more when demand grows and when new assets enter the rate base.",
      "The cost base is dominated by depreciation and financing. Because the asset base is enormous, a small change in the allowed return or in interest costs has a large effect on net income. The 2024 profit dip to SAR 6.9bn shows how sensitive the bottom line is to cost and tariff timing.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from SAR 69.3bn in 2021 to SAR 102.2bn in 2025, helped by demand growth, tariff reforms and the connection of new capacity. The trailing twelve months show SAR 107.2bn. Consensus expects revenue of SAR 109.5bn in FY2026, up 7.2%.",
      "Growth is volume-driven rather than price-driven. The Vision 2030 industrial and housing programme, data centres and desalination are all electricity-intensive, which supports long-term demand. The constraint is the capital needed to expand the grid.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income has been volatile: SAR 14.4bn in 2021, SAR 15.1bn in 2022, SAR 10.3bn in 2023, SAR 6.9bn in 2024 and SAR 13.0bn in 2025. The 2024 dip reflected higher costs and a weaker tariff outcome; the recovery in 2025 came from tariff adjustments and demand growth.",
      "Operating margin was 18.0% and return on equity 5.2% on a trailing basis. The low return on equity is structural: the regulated asset base is large and the allowed return is modest.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative SAR 31.5bn on a trailing basis because the capital programme is larger than operating cash flow. The company carries SAR 234bn of debt and SAR 2.3bn of cash, so it depends on state support and access to capital markets.",
      "The dividend yield is 4.5%, but the payout is only sustainable if the state continues to support the funding plan. Investors should treat SEC as a policy-driven utility rather than a self-funding business.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 15.54 the shares trade at 14.8x trailing earnings and 6.9x EV/EBITDA, a typical regulated-utility multiple. The 4.5% dividend yield is the main attraction.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 16.40 and a range of SAR 13.80–17.50 from 6 analysts. Five carry a hold and one a sell. FY2026 revenue is expected at SAR 109.5bn and EPS at SAR 1.17. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is thin and uniformly cautious. The mean target implies modest upside, and the absence of buy ratings reflects the regulated return and the balance-sheet leverage.",
      "The key debate is the tariff framework and the funding of the capex programme. A more generous allowed return or state capital injection would help; a tighter framework or higher interest costs would hurt.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 16.40 (range SAR 13.80–17.50), 6 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 109.5bn, +7.2%; EPS SAR 1.17, +21.7%." },
      { title: "Ratings mix", detail: "0 strong buy, 0 buy, 5 hold, 1 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are regulatory, financing and execution-related rather than commercial.",
    items: [
      {
        title: "Regulated returns",
        severity: "High",
        detail:
          "Tariffs and allowed returns are set by the government. A less generous framework would lower earnings and the dividend.",
        watch: "Tariff decisions, regulatory reviews.",
      },
      {
        title: "Leverage and funding",
        severity: "High",
        detail:
          "Debt of SAR 234bn and negative free cash flow make the company dependent on state support and capital markets.",
        watch: "Net debt, refinancing, state support.",
      },
      {
        title: "Capex execution",
        severity: "Medium",
        detail:
          "The grid expansion is large. Delays or cost overruns would increase the funding requirement.",
        watch: "Capex, project completion, demand growth.",
      },
      {
        title: "Interest rates",
        severity: "Medium",
        detail:
          "Higher financing costs reduce the return on the asset base and the dividend coverage.",
        watch: "Cost of debt, refinancing spreads.",
      },
    ],
    watchlist: [
      { title: "Tariff framework", detail: "Allowed returns and cost pass-through." },
      { title: "Capex", detail: "Grid investment and funding." },
      { title: "Dividend", detail: "Coverage and state support." },
      { title: "Demand", detail: "Electricity volumes from industry and data centres." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "SEC is a regulated utility with a strategic role and a modest return on equity. The shares offer a 4.5% dividend and defensive exposure to Saudi electricity demand, but they are not a growth investment.",
      "The investment case depends on the tariff framework and state funding. Investors should focus on the allowed return, the cost of debt and the dividend coverage rather than on revenue growth alone.",
    ],
    questions: [
      "What allowed return is embedded in the current tariff framework?",
      "How will the capex programme be funded without stretching the balance sheet?",
      "Is the dividend covered by operating cash flow?",
      "What is the demand outlook from data centres and industrial projects?",
    ],
  },
};
