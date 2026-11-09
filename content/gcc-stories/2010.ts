import type { StockStory } from "@/content/stocks/types";

export const sabic: StockStory = {
  ticker: "2010",
  kicker: "Saudi Arabia · Petrochemicals",
  title: "SABIC: a cyclical giant waiting for the petrochemical cycle to turn",
  dek:
    "SABIC is one of the world's largest petrochemical producers, and its earnings have been hit by a global oversupply of chemicals. The balance sheet is strong and the dividend has survived, but the recovery keeps moving to the right.",
  readingMinutes: 9,
  takeaways: [
    "TTM revenue of SAR 107.1bn but a net loss of SAR 21.3bn, with EBITDA of SAR 9.7bn and a 4.3% operating margin.",
    "Revenue has fallen from SAR 183.1bn in 2022 to SAR 116.5bn in 2025 as chemical spreads compressed.",
    "The company reported net losses in 2023 and 2025; the 2024 profit of SAR 1.5bn was not enough to break the downtrend.",
    "At 15.9x EV/EBITDA the shares are not cheap on depressed EBITDA, but the 4.6% dividend and Aramco backing support the valuation.",
    "Consensus has a mean target of SAR 55.85 from 14 analysts and expects a small FY2026 profit.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/2010/financials/",
  irUrl: "https://www.sabic.com",
  bigPicture: {
    paragraphs: [
      "SABIC is the Gulf's flagship chemicals company, majority-owned by Saudi Aramco. It produces petrochemicals, polymers, plastics and agri-nutrients across a global asset base, and its products feed packaging, construction, automotive and consumer markets. The company is a price-taker in a global industry that has added a large amount of new capacity in China and the Middle East.",
      "The equity is a leveraged play on the petrochemical cycle. When spreads are healthy, SABIC generates substantial cash; when new capacity outruns demand, margins collapse. The current downturn has lasted longer than most cycles, and the market is waiting for capacity rationalisation and a demand recovery.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "SABIC operates petrochemical plants that convert ethane, naphtha and other feedstocks into ethylene, propylene, polymers and chemicals. It also produces agri-nutrients through SABIC Agri-Nutrients and has a specialty chemicals business. The assets are spread across Saudi Arabia, Europe, the Americas and Asia.",
      "The Saudi plants benefit from low-cost ethane, which gives them a structural cost advantage over naphtha-based producers. The international assets are more exposed to feedstock and energy costs, and the European operations have been under pressure from high energy prices and competition.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is driven by volumes and global chemical prices, with a portfolio that spans commodities and specialties. The cost base is dominated by feedstock, energy and depreciation. Because the Saudi plants use ethane, their cash costs are lower than most global peers, but the international assets dilute that advantage.",
      "The 2025 net loss of SAR 25.8bn reflects weak spreads and likely impairments. The trailing twelve months show a net loss of SAR 21.3bn on revenue of SAR 107.1bn. A recovery in spreads would flow quickly to EBITDA because the cost base is largely fixed.",
    ],
  },
  growth: {
    paragraphs: [
      "SABIC is not a volume-growth story in the near term; the industry is working through excess capacity. Growth comes from specialty products, agri-nutrients and the gradual recovery of demand. The company has also been investing in circularity and lower-carbon technologies, which are strategic but not yet material to earnings.",
      "Consensus for FY2026 assumes revenue of SAR 108.9bn, down 6.6%, but EPS of SAR 0.59, a return to profit from a loss-making base. That is a modest recovery, not a boom. The real upside would come from capacity closures and stronger Chinese demand.",
    ],
  },
  performance: {
    paragraphs: [
      "Revenue fell from SAR 183.1bn in 2022 to SAR 116.5bn in 2025, and net income went from SAR 16.5bn to a loss of SAR 25.8bn. The 2023 loss of SAR 2.8bn was followed by a small profit in 2024 and a larger loss in 2025, showing how fragile the recovery has been.",
      "Operating margin collapsed to 4.3% on a trailing basis, and return on equity is effectively zero. The company is covering its cost of capital only in the better years, which is why the shares trade below the peak multiples of the last cycle.",
    ],
  },
  cash: {
    paragraphs: [
      "EBITDA of SAR 9.7bn is still positive, and the balance sheet carries SAR 45.8bn of debt against SAR 30.6bn of cash. The dividend of 4.6% has been maintained, helped by Aramco's ownership and the company's access to capital.",
      "Free cash flow was SAR 7.3bn on a trailing basis, enough to cover the dividend but not much more. A prolonged downturn would test the payout, although the parent's support reduces the risk of a distressed outcome.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 48.30 the shares trade at 15.9x EV/EBITDA on depressed EBITDA and have no meaningful trailing earnings multiple because the company is loss-making. The valuation is a bet on normalised earnings rather than current profits.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 55.85 and a range of SAR 48.00–65.00 from 14 analysts. Two carry a strong buy, two a buy and ten a hold. FY2026 revenue is expected at SAR 108.9bn and EPS at SAR 0.59. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Most analysts are neutral because the cycle has not turned and the loss-making base makes valuation difficult. The mean target implies upside, but the hold rating reflects uncertainty about timing rather than doubts about the asset quality.",
      "The key debate is the pace of capacity rationalisation in China and Europe, and whether Saudi ethane advantage can keep the domestic plants profitable through the trough. A recovery in spreads would be the main catalyst.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 55.85 (range SAR 48.00–65.00), 14 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 108.9bn, -6.6%; EPS SAR 0.59, back to profit." },
      { title: "Ratings mix", detail: "2 strong buy, 2 buy, 10 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are a longer-than-expected petrochemical downturn, asset impairments and the sustainability of the dividend.",
    items: [
      {
        title: "Chemical spreads",
        severity: "High",
        detail:
          "Global oversupply has compressed margins. A further leg down would deepen losses and force more impairments.",
        watch: "Ethylene and polymer spreads, Chinese capacity additions.",
      },
      {
        title: "Dividend sustainability",
        severity: "Medium",
        detail:
          "The 4.6% yield is covered by EBITDA and parent support, but a prolonged loss would pressure the payout.",
        watch: "Free cash flow, dividend announcements, Aramco support.",
      },
      {
        title: "International asset quality",
        severity: "Medium",
        detail:
          "European and American plants face higher energy costs and competition. Impairments have already hit earnings.",
        watch: "Regional EBITDA, restructuring charges.",
      },
      {
        title: "Cycle timing",
        severity: "Medium",
        detail:
          "The shares can stay cheap for years if the recovery keeps slipping. There is no obvious near-term catalyst.",
        watch: "PMI, chemical prices, peer capacity closures.",
      },
    ],
    watchlist: [
      { title: "Petrochemical spreads", detail: "The single most important driver." },
      { title: "Dividend", detail: "Coverage and parent support." },
      { title: "Impairments", detail: "International asset write-downs." },
      { title: "China capacity", detail: "Supply discipline and demand." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "SABIC is a high-quality asset in a deep cyclical trough. The Saudi ethane advantage and Aramco backing are real, but the company is losing money and the recovery depends on global capacity discipline that is outside its control.",
      "The shares are a patient bet on normalised chemical margins. Investors are paid a 4.6% dividend while they wait, but the risk is that the cycle takes longer to turn than the consensus expects.",
    ],
    questions: [
      "What level of chemical spreads is needed for SABIC to earn its cost of capital?",
      "How much of the loss is impairment versus operating loss?",
      "Is the dividend covered by cash flow at the trough?",
      "When is Chinese capacity expected to stop growing?",
    ],
  },
};
