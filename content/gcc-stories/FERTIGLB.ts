import type { StockStory } from "@/content/stocks/types";

export const fertiglobe: StockStory = {
  ticker: "FERTIGLB",
  kicker: "United Arab Emirates · Nitrogen fertiliser",
  title: "Fertiglobe: nitrogen fertiliser at 7.8x earnings and a 5% yield",
  dek:
    "Fertiglobe is one of the largest nitrogen-fertiliser producers in the world, with low-cost gas feedstock in Egypt and the UAE. Earnings are cyclical, but the shares trade at 7.8x earnings with a 5.0% dividend yield and a bullish consensus.",
  readingMinutes: 8,
  takeaways: [
    "TTM revenue of $3.57bn and net income of $0.65bn, with a 26.9% operating margin and 30.2% return on equity.",
    "Revenue fell from $5.03bn in 2022 to $2.01bn in 2024 before recovering to $2.83bn in 2025 as urea prices normalised.",
    "The company produces ammonia and urea, with export-oriented plants in Egypt and the UAE.",
    "At AED 2.28 the shares trade at 7.8x earnings and 5.2x EV/EBITDA, with a 5.0% dividend yield.",
    "Consensus has a mean target of AED 3.48 from 15 analysts, with nine strong buys and no sells.",
  ],
  filingUrl: "https://stockanalysis.com/quote/adx/FERTIGLB/financials/",
  irUrl: "https://www.fertiglobe.com",
  bigPicture: {
    paragraphs: [
      "Fertiglobe is a nitrogen-fertiliser producer formed by the combination of OCI's Middle East nitrogen assets and ADNOC's fertiliser business. It produces ammonia and urea at plants in Egypt, the UAE and Algeria, and sells into Europe, the Americas, Africa and Asia. ADNOC is the largest shareholder.",
      "The equity is a cyclical commodity producer with a low-cost position. Nitrogen fertiliser prices are set globally, but Fertiglobe's gas feedstock costs are among the lowest in the industry, which allows it to remain profitable through the cycle. The trade-off is that earnings swing with urea and ammonia prices.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The company operates ammonia and urea plants that convert natural gas into nitrogen fertiliser. Ammonia is used directly as a fertiliser and as an industrial input, while urea is the most widely traded nitrogen fertiliser. Fertiglobe also produces melamine and other derivatives.",
      "The plants are located close to cheap gas in Egypt and the UAE, which is the key competitive advantage. The company exports most of its output, so it is exposed to global prices, freight costs and trade flows. It also has a growing low-carbon ammonia business for use as a clean fuel.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the volume of ammonia and urea sold multiplied by the global benchmark price. The spread between product prices and gas feedstock costs is the profit driver. Operating margin was 26.9% on a trailing basis, strong for a commodity producer and a sign of the low-cost position.",
      "The main costs are gas, energy, maintenance and logistics. Gas is the largest input, and the company benefits from long-term supply agreements at prices below European and Asian competitors. A rise in gas prices or a fall in urea prices compresses the spread.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue was $3.31bn in 2021, $5.03bn in 2022, $2.42bn in 2023, $2.01bn in 2024 and $2.83bn in 2025. The pattern tracks urea and ammonia prices, which spiked after the 2022 energy shock and then normalised. Net income followed the same path, from $0.70bn in 2021 to $0.16bn in 2024 and $0.43bn in 2025.",
      "The trailing twelve months show $3.57bn of revenue, up 60.5%, and consensus expects $3.6bn in 2026, up 27.3%, with EPS of $0.06, up 45.9%. The TTM growth reflects the recovery from the 2024 trough rather than a structural acceleration.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was $0.70bn in 2021, $1.25bn in 2022, $0.35bn in 2023, $0.16bn in 2024 and $0.43bn in 2025. The 2022 peak was exceptional, driven by high urea prices after the energy crisis; the subsequent decline reflects the normalisation of prices and higher gas costs.",
      "Return on equity was 30.2% on a trailing basis, high because the equity base is small and the business is capital-intensive but cash-generative. The company carries $2.15bn of debt and $1.37bn of cash, leverage that is manageable but sensitive to the commodity cycle.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $0.78bn on a trailing basis, comfortably covering the dividend. The dividend yield is 5.0%, and the payout has been variable, reflecting the cyclical earnings.",
      "The main calls on cash are maintenance capital, debt service and the low-carbon ammonia projects. The company has been investing in clean ammonia, which could open a new market but requires capital and depends on policy support.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 2.28 the shares trade at 7.8x trailing earnings and 5.2x EV/EBITDA, a discount to global nitrogen producers. The discount reflects the cyclicality, the Egyptian country risk and the concentrated ownership.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 3.48 and a range of AED 2.82–4.10 from 15 analysts. Nine carry a strong buy, three a buy and three a hold, with no sells. FY2026 revenue is expected at $3.6bn and EPS at $0.06. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is broad and positive, with no sell ratings. The bulls focus on the low-cost gas position, the dividend and the clean-ammonia optionality; the holds reflect the commodity cycle and the country risk.",
      "The key debate is the direction of urea and ammonia prices and the cost of gas in Egypt. A recovery in prices would lift earnings; a sustained downturn would keep the shares cheap.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 3.48 (range AED 2.82–4.10), 15 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue $3.6bn, +27.3%; EPS $0.06, +45.9%." },
      { title: "Ratings mix", detail: "9 strong buy, 3 buy, 3 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are fertiliser prices, gas costs and country risk in Egypt.",
    items: [
      {
        title: "Nitrogen prices",
        severity: "High",
        detail:
          "Urea and ammonia prices are globally set and volatile. A fall would compress earnings and the dividend.",
        watch: "Urea and ammonia benchmarks, Chinese exports.",
      },
      {
        title: "Gas costs",
        severity: "Medium",
        detail:
          "The low-cost position depends on long-term gas supply. Higher gas prices or shortages would hurt margins.",
        watch: "Egyptian gas prices, supply agreements, outages.",
      },
      {
        title: "Country risk",
        severity: "Medium",
        detail:
          "A large part of capacity is in Egypt, which carries currency and regulatory risk.",
        watch: "EGP, Egyptian regulation, export rules.",
      },
      {
        title: "Dividend variability",
        severity: "Low",
        detail:
          "The payout varies with earnings. A downturn would reduce the dividend.",
        watch: "Free cash flow, payout ratio.",
      },
    ],
    watchlist: [
      { title: "Urea prices", detail: "The main revenue driver." },
      { title: "Gas supply", detail: "Egyptian feedstock costs." },
      { title: "Clean ammonia", detail: "New projects and policy support." },
      { title: "Dividend", detail: "Payout and coverage." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Fertiglobe is a low-cost nitrogen producer with a strong export position, a 5.0% dividend yield and a 7.8x earnings multiple. The shares are cheap because the business is cyclical and exposed to Egyptian country risk.",
      "The investment case is a value and income play on fertiliser prices. The main support is the gas cost advantage; the main risk is a sustained downturn in urea and ammonia prices.",
    ],
    questions: [
      "What gas price is assumed in the Egyptian supply agreements?",
      "How much of capacity is in Egypt versus the UAE?",
      "What is the clean-ammonia investment plan?",
      "Is the dividend covered at trough prices?",
    ],
  },
};
