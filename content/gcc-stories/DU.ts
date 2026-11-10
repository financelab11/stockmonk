import type { StockStory } from "@/content/stocks/types";

export const du: StockStory = {
  ticker: "DU",
  kicker: "United Arab Emirates · Telecom and ICT",
  title: "du: the challenger telecom with a 5% yield and a data-centre option",
  dek:
    "du is the second telecom operator in the UAE, with a strong enterprise and ICT business and a 5% dividend yield. Profit has grown sharply since 2021, but the shares trade above the consensus target after a strong run.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of AED 16.6bn, EBITDA of AED 5.1bn and net income of AED 3.1bn, with a 32.8% return on equity.",
    "Net income grew from AED 1.1bn in 2021 to AED 2.9bn in 2025, helped by margin expansion and cost control.",
    "The enterprise, cloud and data-centre businesses are growing faster than consumer mobile.",
    "At 18.6x earnings and 10.9x EV/EBITDA, the shares are more expensive than e& and the dividend yield is 5.0%.",
    "Consensus has a mean target of AED 12.08 from 12 analysts, below the current price of AED 12.84.",
  ],
  filingUrl: "https://stockanalysis.com/quote/dfm/DU/financials/",
  irUrl: "https://www.du.ae",
  bigPicture: {
    paragraphs: [
      "du is the UAE's second telecom operator, competing with e& in mobile, fixed broadband, enterprise connectivity and ICT. It has built a strong enterprise business, including cloud, data centres, cybersecurity and managed services, and it owns a growing tower and infrastructure portfolio.",
      "The equity is a challenger telecom with a higher growth rate than the incumbent and a smaller, more focused asset base. The market has re-rated the shares as margins improved and the enterprise business scaled.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "du provides mobile, fixed, broadband and IPTV services to consumers, and connectivity, cloud and managed services to enterprises and government entities. It also operates data centres and tower infrastructure, which can be monetised separately.",
      "The enterprise and ICT segment is the growth engine. It is smaller than consumer revenue but grows faster and carries higher margins in some services. The company's strategy is to move up the value chain from connectivity into managed services, where contracts are longer and less price-sensitive than consumer mobile.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from subscriptions, usage, device sales and enterprise contracts. The cost base is dominated by network depreciation, spectrum, energy and staff. The bank — or rather the operator — has improved margins by controlling costs and growing higher-margin enterprise revenue.",
      "Operating margin expanded from 9.5% in 2021 to 20.9% on a trailing basis, a significant improvement that explains the earnings growth. The low leverage (AED 1.7bn of debt) also reduces interest costs.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from AED 11.7bn in 2021 to AED 15.9bn in 2025, and net income from AED 1.1bn to AED 2.9bn. The trailing twelve months show AED 16.6bn of revenue and AED 3.1bn of net income. Growth has been steady rather than explosive.",
      "Consensus for FY2026 assumes revenue of AED 16.7bn, up 5.2%, and EPS of AED 0.70, up 9.4%. The enterprise and data-centre businesses are expected to drive the growth.",
    ],
  },
  performance: {
    paragraphs: [
      "The margin expansion is the story. Operating margin more than doubled over four years, and return on equity reached 32.8% on a trailing basis. The company has very little debt and a strong cash flow. That combination is unusual in telecoms, where most operators carry heavy leverage after years of spectrum and network spending.",
      "The shares have re-rated accordingly, and the valuation is now above the telecom peers on earnings.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was AED 3.4bn on a trailing basis, comfortably covering the 5.0% dividend. The balance sheet is conservative, with AED 1.7bn of debt and AED 0.5bn of cash. That gives the company room to invest in data centres and spectrum without stretching the balance sheet, and it reduces the risk that a capex cycle forces a dividend cut.",
      "The dividend is the main cash return, and the payout is supported by stable cash flow. The company could also monetise towers or data centres.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 12.84 the shares trade at 18.6x trailing earnings and 10.9x EV/EBITDA, a premium to e& and to regional telecoms. The premium reflects the stronger growth and the enterprise mix.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 12.08 — below the current price — with a range of AED 10.80–14.00 from 12 analysts. Three carry a strong buy, one a buy, seven a hold and one a sell. FY2026 revenue is expected at AED 16.7bn and EPS at AED 0.70. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The ratings are mixed, and the mean target is below the current price. The market is divided between the growth story and the valuation after a strong run.",
      "The key debate is whether the enterprise and data-centre growth can continue at a pace that justifies the premium, or whether the stock has run ahead of the fundamentals. The mean target below the current price is a signal that much of the good news is already in the valuation, and the split ratings reflect genuine disagreement about the durability of the margin gains.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 12.08 (range AED 10.80–14.00), 12 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue AED 16.7bn, +5.2%; EPS AED 0.70, +9.4%." },
      { title: "Ratings mix", detail: "3 strong buy, 1 buy, 7 hold, 1 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are valuation, competition and the sustainability of the margin expansion.",
    items: [
      {
        title: "Premium valuation",
        severity: "High",
        detail:
          "At 18.6x earnings, the shares trade above the consensus target. A growth disappointment would hit the multiple.",
        watch: "EPS growth, EV/EBITDA versus e&.",
      },
      {
        title: "Competition",
        severity: "Medium",
        detail:
          "e& is the larger incumbent with a strong enterprise franchise. Price competition could pressure margins.",
        watch: "Market share, ARPU, enterprise wins.",
      },
      {
        title: "Margin sustainability",
        severity: "Medium",
        detail:
          "The margin expansion was significant. Further gains are harder, and a step-up in capex could reverse some of it.",
        watch: "Operating margin, capex.",
      },
      {
        title: "Dividend coverage",
        severity: "Low",
        detail:
          "The 5% yield is covered by free cash flow, but a capex increase could limit growth in the payout.",
        watch: "Free cash flow, payout ratio.",
      },
    ],
    watchlist: [
      { title: "Enterprise growth", detail: "ICT, cloud and data centres." },
      { title: "Operating margin", detail: "The main driver of the re-rating." },
      { title: "Dividend", detail: "Payout and coverage." },
      { title: "Valuation", detail: "Relative to e& and regional peers." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "du is a well-run challenger telecom with a strong enterprise business, a 5% dividend yield and a conservative balance sheet. The margin turnaround has been impressive.",
      "The problem is the price: the shares trade above the consensus target and at a premium to e&. The investment case now depends on the enterprise and data-centre growth continuing to surprise.",
    ],
    questions: [
      "How much of the margin gain is sustainable?",
      "Can the enterprise business grow fast enough to justify the premium?",
      "Is the dividend covered through a heavier capex cycle?",
      "What is the data-centre and tower portfolio worth?",
    ],
  },
};
