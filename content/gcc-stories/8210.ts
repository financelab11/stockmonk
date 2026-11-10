import type { StockStory } from "@/content/stocks/types";

export const bupaArabia: StockStory = {
  ticker: "8210",
  kicker: "Saudi Arabia · Health insurance",
  title: "Bupa Arabia: Saudi health insurance at 19x earnings",
  dek:
    "Bupa Arabia is the largest health insurer in Saudi Arabia, benefiting from mandatory employer-funded cover and a growing population. Revenue has nearly doubled since 2021, but margins are thin and the shares trade at 19.3x earnings.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of SAR 22.2bn and net income of SAR 1.09bn, with a 5.7% operating margin and 19.3% return on equity.",
    "Revenue rose from SAR 10.9bn in 2021 to SAR 20.1bn in 2025, driven by membership growth and premium repricing.",
    "The company is the market leader in Saudi health insurance, with a large corporate and family book.",
    "At SAR 141.50 the shares trade at 19.3x earnings and 15.4x EV/EBITDA, with a 2.8% dividend yield.",
    "Consensus has a mean target of SAR 177.25 from six analysts, but four of the six carry a hold.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/8210/financials/",
  irUrl: "https://www.bupa.com.sa",
  bigPicture: {
    paragraphs: [
      "Bupa Arabia is the largest health-insurance company in Saudi Arabia. It provides medical cover to companies, families and individuals, and it manages care networks, claims and customer service. The company is part of the Bupa global group and is listed on the Tadawul.",
      "The equity is a play on Saudi Arabia's mandatory private health insurance, population growth and the Vision 2030 expansion of healthcare. The business is a volume game with regulated premiums and thin underwriting margins, so scale and claims management are the keys to profitability.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The company sells health-insurance policies to employers, who are required to provide cover for their staff, and to families and individuals. It negotiates rates with hospitals, clinics and pharmacies, processes claims and manages the customer experience through digital channels and service centres.",
      "Bupa Arabia also offers travel insurance and other ancillary products, and it invests in digital health services that help members navigate care. The corporate book is the core, but the retail and family segments are growing as the population and the middle class expand.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the premium written on policies. The company earns an underwriting result — premiums minus claims and expenses — plus investment income on the float. Operating margin was 5.7% on a trailing basis, and net margin 4.9%, reflecting the thin margins of health insurance.",
      "Claims inflation is the main risk: hospitals and doctors charge more, and the insurer must reprice policies at renewal. The company's scale gives it bargaining power with providers and a large data set for pricing and fraud detection. Investment income is a meaningful part of profit in a high-rate environment.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from SAR 10.9bn in 2021 to SAR 20.1bn in 2025, a compound growth rate of about 16%, driven by membership growth, premium repricing and the expansion of the insured population. Net income rose from SAR 0.63bn to SAR 1.08bn over the same period, with a dip in 2025 as claims rose.",
      "The trailing twelve months show SAR 22.2bn of revenue, up 13.2%, and consensus expects SAR 22.1bn in 2026, up 10%, with EPS of SAR 8.22, up 13.7%. Growth is expected to remain solid but to moderate as the market matures and competition intensifies.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was SAR 0.63bn in 2021, SAR 0.81bn in 2022, SAR 0.94bn in 2023, SAR 1.17bn in 2024 and SAR 1.08bn in 2025. The 2025 decline reflects higher claims and medical inflation, a reminder that underwriting margins are thin and sensitive to cost trends.",
      "Return on equity was 19.3% on a trailing basis, strong for an insurer and supported by the capital-light model and the investment income. The company carries SAR 0.24bn of debt and SAR 1.43bn of cash, a conservative balance sheet for an insurer.",
    ],
  },
  cash: {
    paragraphs: [
      "The data feed shows negative free cash flow, which is a feature of insurance accounting rather than a liquidity problem: premiums and claims timing can make operating cash flow volatile, and the relevant measures are solvency and investment income.",
      "The dividend yield is 2.8%, modest for a profitable insurer, and the payout has grown with earnings. The company retains capital to support growth and to meet regulatory solvency requirements. Investment income from the float is a meaningful contributor to profit.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 141.50 the shares trade at 19.3x trailing earnings and 15.4x EV/EBITDA, a premium to global health insurers. The premium reflects the market position, the growth in mandatory cover and the high return on equity.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 177.25 and a range of SAR 150.00–210.00 from six analysts. Two carry a strong buy and four a hold, with no sells. FY2026 revenue is expected at SAR 22.1bn and EPS at SAR 8.22. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is limited, and the ratings are cautious: most analysts hold the shares despite the market position and the growth. That reflects the premium valuation and the thin underwriting margin rather than doubts about the franchise.",
      "The key debate is claims inflation and the ability to reprice policies without losing members. A period of high medical inflation would compress margins; disciplined pricing and scale would protect them.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 177.25 (range SAR 150.00–210.00), 6 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 22.1bn, +10%; EPS SAR 8.22, +13.7%." },
      { title: "Ratings mix", detail: "2 strong buy, 0 buy, 4 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are claims inflation, regulatory change and the premium valuation.",
    items: [
      {
        title: "Medical claims inflation",
        severity: "High",
        detail:
          "Higher hospital and doctor charges compress underwriting margins if premiums cannot be repriced fast enough.",
        watch: "Claims ratio, medical inflation, renewal pricing.",
      },
      {
        title: "Regulation",
        severity: "Medium",
        detail:
          "Health insurance is heavily regulated. Changes to mandatory cover, premium rules or provider tariffs would affect the business.",
        watch: "Insurance regulator decisions, benefit rules.",
      },
      {
        title: "Competition",
        severity: "Medium",
        detail:
          "Other insurers compete for corporate accounts, which can pressure pricing and margins.",
        watch: "Market share, renewal retention, pricing.",
      },
      {
        title: "Premium valuation",
        severity: "Medium",
        detail:
          "At 19.3x earnings the shares price in continued growth. A margin disappointment would compress the multiple.",
        watch: "Relative P/E, ROE, estimate revisions.",
      },
    ],
    watchlist: [
      { title: "Claims ratio", detail: "The main driver of underwriting profit." },
      { title: "Membership", detail: "Corporate and retail growth." },
      { title: "Investment income", detail: "Float returns in a high-rate environment." },
      { title: "Dividend", detail: "Payout and solvency." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Bupa Arabia is the leading health insurer in Saudi Arabia, with a strong franchise, a 19.3% return on equity and exposure to mandatory employer-funded cover. It trades at 19.3x earnings, a premium that reflects the growth and the market position.",
      "The investment case is a quality compounder with thin margins. The main risk is claims inflation, and the main support is the scale, the brand and the regulatory tailwind of mandatory cover.",
    ],
    questions: [
      "How much has the claims ratio risen in the past year?",
      "Can the company reprice policies without losing members?",
      "What share of profit comes from investment income?",
      "How is competition affecting renewal pricing?",
    ],
  },
};
