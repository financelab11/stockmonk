import type { StockStory } from "@/content/stocks/types";

export const parkin: StockStory = {
  ticker: "PARKIN",
  kicker: "United Arab Emirates · Paid parking",
  title: "Parkin: Dubai's parking monopoly at 27.6x earnings",
  dek:
    "Parkin operates Dubai's paid on-street and off-street parking under a long-term concession. Revenue grows with the city's traffic, margins are high, and the shares trade at 27.6x earnings with a 3.6% dividend yield.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of AED 1.46bn and net income of AED 0.69bn, with a 54.7% operating margin and 47.3% net margin.",
    "Revenue rose from AED 0.59bn in 2021 to AED 1.31bn in 2025, helped by new parking zones and higher utilisation.",
    "The company operates public parking, off-street car parks and enforcement for the Roads and Transport Authority.",
    "At AED 6.35 the shares trade at 27.6x earnings and 23.0x EV/EBITDA, with a 3.6% dividend yield.",
    "Consensus has a mean target of AED 6.59 from ten analysts, with six strong buys and one sell.",
  ],
  filingUrl: "https://stockanalysis.com/quote/dfm/PARKIN/financials/",
  irUrl: "https://www.parkin.ae",
  bigPicture: {
    paragraphs: [
      "Parkin is the exclusive operator of paid parking in Dubai. It manages on-street parking meters, off-street car parks and multi-storey facilities, and it enforces parking rules on behalf of the Roads and Transport Authority. It was listed in 2024 as part of Dubai's asset-sale programme.",
      "The equity is a toll-road-like infrastructure asset tied to Dubai's traffic and population. Tariffs are regulated, the concession gives it a monopoly, and the cost base is largely fixed, so incremental revenue drops through to profit. The trade-off is that growth depends on the regulator and on the number of cars on the road.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The company installs and operates parking meters, barrier systems and mobile payment channels, and it manages seasonal and event parking. It also provides enforcement services, issuing fines for violations, and operates a growing number of off-street and multi-storey car parks.",
      "Parkin has been adding paid zones and converting free parking areas into paid ones, which increases revenue without a proportional increase in cost. It is also investing in technology for digital payments and real-time space availability, which improves utilisation and the customer experience.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from parking fees, fines and enforcement, and from permits and subscriptions. Tariffs are set by the regulator, so revenue growth comes from more paid spaces, higher utilisation and more vehicles. Operating margin was 54.7% on a trailing basis.",
      "The cost base is dominated by staff, technology, maintenance and the concession fee paid to the government. Because the network is already built, incremental revenue carries high margins. The main risk is a regulatory change to tariffs or to the concession terms.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from AED 0.59bn in 2021 to AED 1.31bn in 2025, a compound growth rate of about 22%, driven by the post-pandemic recovery in traffic, the expansion of paid zones and higher tariffs. Net income rose from AED 0.22bn to AED 0.63bn.",
      "The trailing twelve months show AED 1.46bn of revenue, up 35.1%, and consensus expects AED 1.50bn in 2026, up 14.6%, with EPS of AED 0.23, up 9.5%. Growth is expected to moderate as the network matures, with new zones and enforcement providing the next leg.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was AED 0.22bn in 2021, AED 0.32bn in 2022, AED 0.39bn in 2023, AED 0.42bn in 2024 and AED 0.63bn in 2025. The improvement reflects higher traffic, new paid zones and operating leverage.",
      "Return on equity was 133.3% on a trailing basis, but that is a function of a very small equity base and the debt used to fund the concession. Return on invested capital of 49.6% is the more meaningful measure and shows the quality of the asset.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was AED 0.76bn on a trailing basis, comfortably covering the dividend. The company carries AED 1.17bn of debt and AED 0.42bn of cash, leverage that is manageable for a regulated infrastructure asset.",
      "The dividend yield is 3.6%, and the payout is a key part of the return. The main calls on cash are technology, new car parks and the concession fee. The business is not capital-intensive relative to its cash generation.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 6.35 the shares trade at 27.6x trailing earnings and 23.0x EV/EBITDA, a premium to global parking and toll-road operators. The premium reflects the monopoly, the high margins and Dubai's growth.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 6.59 and a range of AED 5.55–7.30 from ten analysts. Six carry a strong buy, one a buy, two a hold and one a sell. FY2026 revenue is expected at AED 1.50bn and EPS at AED 0.23. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is good, and the ratings are mostly positive, with one sell flagging the valuation. The mean target implies modest upside after a strong run. The spread between the highest and lowest targets is wide for a regulated asset, which suggests disagreement about the concession and the pace of new paid zones.",
      "The key debate is the concession and the tariff framework. More paid zones and higher utilisation support growth; a less generous regulatory outcome or a slowdown in Dubai traffic would hurt.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 6.59 (range AED 5.55–7.30), 10 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue AED 1.50bn, +14.6%; EPS AED 0.23, +9.5%." },
      { title: "Ratings mix", detail: "6 strong buy, 1 buy, 2 hold, 1 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are the concession terms, traffic volumes and the premium valuation.",
    items: [
      {
        title: "Concession and regulation",
        severity: "High",
        detail:
          "The operating right and tariffs are set by the government. A less favourable framework would hit revenue and the valuation.",
        watch: "Concession duration, tariff reviews, RTA policy.",
      },
      {
        title: "Traffic volumes",
        severity: "Medium",
        detail:
          "Revenue depends on Dubai's population, tourism and car usage. A slowdown would reduce parking demand.",
        watch: "Traffic counts, population, fuel prices.",
      },
      {
        title: "Premium valuation",
        severity: "Medium",
        detail:
          "At 27.6x earnings the shares price in steady growth. A slowdown or higher discount rates would compress the multiple.",
        watch: "Relative P/E, bond yields, estimate revisions.",
      },
      {
        title: "Enforcement and reputation",
        severity: "Low",
        detail:
          "Fines and enforcement are sensitive. A public backlash or a change in policy could affect revenue.",
        watch: "Fine revenue, policy changes, customer complaints.",
      },
    ],
    watchlist: [
      { title: "Paid zones", detail: "New areas and utilisation." },
      { title: "Tariffs", detail: "Regulated pricing." },
      { title: "Concession", detail: "Duration and terms." },
      { title: "Dividend", detail: "Payout and coverage." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Parkin is a high-margin parking monopoly with a long concession, a 3.6% dividend yield and exposure to Dubai's growth. The business quality is high, but the shares trade at a premium multiple.",
      "The investment case is a bond-like infrastructure asset with growth from new zones. The main risks are regulation and the valuation; the main support is the monopoly and the cash flow.",
    ],
    questions: [
      "When does the concession expire and how is it renewed?",
      "How many free parking areas could become paid?",
      "What is the regulatory process for tariff changes?",
      "Is the dividend covered through a traffic slowdown?",
    ],
  },
};
