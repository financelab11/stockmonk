import type { StockStory } from "@/content/stocks/types";

export const adesHolding: StockStory = {
  ticker: "2382",
  kicker: "Saudi Arabia · Oilfield services",
  title: "ADES Holding: offshore drilling growth with a leveraged balance sheet",
  dek:
    "ADES provides offshore and onshore drilling services in Saudi Arabia, the wider Gulf, Africa and Asia. Revenue has grown more than fourfold since 2021, but the company carries substantial debt and trades at 23.4x earnings.",
  readingMinutes: 8,
  takeaways: [
    "TTM revenue of SAR 8.76bn and net income of SAR 0.68bn, with a 24.4% operating margin and 9.9% return on equity.",
    "Revenue rose from SAR 1.51bn in 2021 to SAR 6.69bn in 2025, driven by rig additions and new contracts.",
    "The company operates offshore jack-up rigs and onshore rigs for national oil companies and international majors.",
    "At SAR 8.49 the shares trade at 23.4x earnings and 9.5x EV/EBITDA, with a 2.6% dividend yield.",
    "Consensus has a mean target of SAR 10.84 from 13 analysts, but the ratings include a sell and a strong sell.",
  ],
  filingUrl: "https://stockanalysis.com/quote/tadawul/2382/financials/",
  irUrl: "https://www.ades.com.sa",
  bigPicture: {
    paragraphs: [
      "ADES Holding is an international drilling contractor focused on the Middle East and North Africa. It owns and operates offshore jack-up rigs and onshore rigs, providing drilling and workover services to national oil companies and international majors. It listed on the Tadawul in 2023.",
      "The equity is a play on Gulf upstream spending, particularly Saudi Arabia's plan to maintain and expand oil and gas production capacity. The company has grown rapidly by adding rigs and winning contracts, but the expansion has been financed with debt, which makes the equity sensitive to day rates and utilisation.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The offshore business operates jack-up rigs in the Gulf, the Red Sea and the Mediterranean, drilling development and exploration wells. The onshore business operates land rigs in Saudi Arabia, Egypt, Algeria and other markets, and provides workover and maintenance services.",
      "The company also offers integrated drilling services, including engineering, project management and equipment, and it has been expanding into new geographies. The customer base is dominated by national oil companies, which provide long-term contracts and visible revenue.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is earned through day-rate contracts, where the customer pays a fixed rate per day for the rig and crew. Day rates are set for the contract term, which gives visibility and protects revenue from short-term volatility. Operating margin was 24.4% on a trailing basis.",
      "The main costs are crew, maintenance, fuel, insurance and financing. Because the fleet is owned, utilisation is the key driver: incremental rig days carry high margins. The company's debt load means interest costs are a significant fixed charge.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from SAR 1.51bn in 2021 to SAR 6.69bn in 2025, a compound growth rate of more than 45%, driven by rig acquisitions, new contracts and the expansion of the fleet. Net income rose from SAR 0.11bn to SAR 0.82bn.",
      "The trailing twelve months show SAR 8.76bn of revenue, up 39.7%, and consensus expects SAR 9.3bn in 2026, up 38.8%, with EPS of SAR 0.43, up 18.1%. Growth is expected to remain strong as new rigs are delivered and contracts start, but the pace should slow as the fleet matures.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was SAR 0.11bn in 2021, SAR 0.39bn in 2022, SAR 0.44bn in 2023, SAR 0.80bn in 2024 and SAR 0.82bn in 2025. The improvement reflects higher day rates, better utilisation and the contribution from new rigs.",
      "Return on equity was 9.9% on a trailing basis, and return on invested capital 6.3%, modest because of the heavy debt and the capital-intensive fleet. The company carries SAR 22.2bn of debt and SAR 2.0bn of cash, leverage that is high relative to equity and makes the shares sensitive to interest rates.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was SAR 1.55bn on a trailing basis, positive but modest relative to the debt load. The dividend yield is 2.6%, and the payout is likely to grow as the fleet generates cash.",
      "The main calls on cash are debt service, rig maintenance and newbuild payments. The company has been investing heavily in fleet expansion, which should add revenue but also increases financial risk if day rates fall.",
    ],
  },
  valuation: {
    paragraphs: [
      "At SAR 8.49 the shares trade at 23.4x trailing earnings and 9.5x EV/EBITDA, a premium on earnings and a discount on EBITDA to global offshore drillers. The gap reflects the high debt and the depreciation charge.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of SAR 10.84 and a range of SAR 6.90–13.50 from 13 analysts. Six carry a strong buy, three a buy, two a hold, one a sell and one a strong sell. FY2026 revenue is expected at SAR 9.3bn and EPS at SAR 0.43. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is good, but the ratings are polarised, with two negative ratings against nine positive ones. The bears focus on leverage and the cycle; the bulls focus on the contracted backlog and the Saudi drilling programme.",
      "The key debate is the sustainability of day rates and the pace of rig additions. A strong market supports the growth; a weakening one would expose the leverage.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "SAR 10.84 (range SAR 6.90–13.50), 13 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue SAR 9.3bn, +38.8%; EPS SAR 0.43, +18.1%." },
      { title: "Ratings mix", detail: "6 strong buy, 3 buy, 2 hold, 1 sell, 1 strong sell." },
    ],
  },
  risks: {
    intro:
      "The risks are leverage, day rates and the concentration of the customer base.",
    items: [
      {
        title: "Leverage",
        severity: "High",
        detail:
          "Debt of SAR 22.2bn against SAR 6.87bn of equity leaves little room for a downturn or higher rates.",
        watch: "Net debt/EBITDA, interest cover, refinancing.",
      },
      {
        title: "Day rates and utilisation",
        severity: "High",
        detail:
          "Revenue depends on contracted day rates and rig utilisation. A softer market would hit earnings and cash flow.",
        watch: "Jack-up day rates, rig utilisation, contract awards.",
      },
      {
        title: "Customer concentration",
        severity: "Medium",
        detail:
          "National oil companies account for most revenue. A change in their drilling budgets would be material.",
        watch: "Saudi Aramco and ADNOC spending, contract renewals.",
      },
      {
        title: "Execution and safety",
        severity: "Medium",
        detail:
          "Offshore drilling is operationally risky. Accidents or downtime would affect revenue and reputation.",
        watch: "Safety incidents, downtime, contract performance.",
      },
    ],
    watchlist: [
      { title: "Day rates", detail: "Jack-up and onshore markets." },
      { title: "Leverage", detail: "Debt and interest cover." },
      { title: "Backlog", detail: "Contract awards and renewals." },
      { title: "Dividend", detail: "Payout and coverage." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "ADES is a fast-growing drilling contractor with a modern fleet, a strong position in Saudi Arabia and a visible backlog. It trades at 23.4x earnings, a premium that reflects the growth but also the leverage.",
      "The investment case is a leveraged play on Gulf upstream spending. The main risks are day rates and debt; the main support is the contracted backlog and the national-oil-company relationships.",
    ],
    questions: [
      "How much of the fleet is contracted beyond 2026?",
      "What is the average day rate versus the spot market?",
      "How much debt matures in the next two years?",
      "Can the dividend grow while the fleet expands?",
    ],
  },
};
