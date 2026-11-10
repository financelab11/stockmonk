import type { StockStory } from "@/content/stocks/types";

export const emaar: StockStory = {
  ticker: "EMAAR",
  kicker: "United Arab Emirates · Real estate",
  title: "Emaar Properties: Dubai's property machine at 5.8x earnings",
  dek:
    "Emaar is the largest listed developer in Dubai, with a land bank, a malls and hospitality business and a fast-growing build-to-sell pipeline. Earnings have compounded strongly, and the shares trade at 5.8x earnings with a 7.8% dividend yield.",
  readingMinutes: 8,
  takeaways: [
    "TTM revenue of AED 54.0bn and net income of AED 19.4bn, with a 44.9% operating margin and 17.8% return on equity.",
    "Revenue rose from AED 27.9bn in 2021 to AED 49.6bn in 2025, and net income from AED 3.8bn to AED 17.6bn.",
    "The business combines development, malls, hospitality and international operations, with Dubai contributing the majority of profit.",
    "At AED 12.52 the shares trade at 5.8x earnings and 3.7x EV/EBITDA, a discount that reflects property-cycle risk.",
    "Consensus has a mean target of AED 16.36 from 15 analysts, with 12 strong buys and a range of AED 12.50–19.90.",
  ],
  filingUrl: "https://stockanalysis.com/quote/dfm/EMAAR/financials/",
  irUrl: "https://www.emaar.com",
  bigPicture: {
    paragraphs: [
      "Emaar Properties is the developer that built Downtown Dubai, including the Burj Khalifa and the Dubai Mall. It develops residential communities, retail destinations and hospitality assets, and it has expanded into Saudi Arabia, Egypt, India and Turkey. The company is majority-owned by Dubai's sovereign investor and is closely associated with the emirate's growth story.",
      "The equity is a leveraged play on Dubai real estate, with an embedded retail and hospitality business. Development earnings are cyclical and lumpy, while the malls and hospitality assets generate recurring income. The market values the group at a deep discount to the value of its land bank and recurring assets, reflecting the memory of past property cycles.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "Emaar sells homes and commercial space in master-planned communities, earning development margins as projects are delivered. It also owns and operates the Dubai Mall and other retail assets, a portfolio of hotels and resorts, and entertainment venues. The international business develops and manages projects in Saudi Arabia, Egypt, India and Turkey.",
      "The development machine is the largest profit contributor in a strong market, while the malls and hospitality businesses provide recurring cash flow and brand value. The company also has a services business that manages communities and provides facilities management, which adds fee income with lower capital intensity.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Development revenue is recognised on delivery, so reported profit depends on the pace of construction and handover. In a rising market, Emaar can raise prices and expand margins; in a downturn, cancellations and slower sales hit both revenue and cash flow. Operating margin was 44.9% on a trailing basis, unusually high for a developer and a sign of strong pricing power.",
      "The malls and hospitality businesses earn rental and occupancy income, which is more stable. The Dubai Mall is one of the most productive retail assets in the world, and the hotel portfolio benefits from Dubai's tourism recovery. Those recurring earnings support the dividend and cushion the development cycle.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from AED 27.9bn in 2021 to AED 49.6bn in 2025, and net income from AED 3.8bn to AED 17.6bn. The trailing twelve months show AED 54.0bn of revenue and AED 19.4bn of net income, up 20.5%, as Dubai's property market boomed on population growth, immigration and investor demand.",
      "Consensus expects revenue of AED 55.2bn in 2026, up 11.4%, and EPS of AED 2.17, up 9.1%. The growth rate is slowing from the exceptional 2023–25 pace, which is appropriate for a maturing cycle. The key question is how much of the current sales backlog is already locked in for future delivery.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was AED 3.80bn in 2021, AED 6.83bn in 2022, AED 11.63bn in 2023, AED 13.51bn in 2024 and AED 17.60bn in 2025. That is one of the strongest earnings trajectories in the GCC, driven by Dubai's property upcycle and by Emaar's pricing power in prime locations.",
      "Return on equity was 17.8% on a trailing basis, and return on invested capital 16.4%, high for a developer. The balance sheet is conservative, with AED 10.2bn of debt against AED 108.9bn of equity, which gives the company room to withstand a downturn without a recapitalisation.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was AED 32.5bn on a trailing basis, reflecting advance payments from home buyers and strong mall cash flows. The group carries AED 10.2bn of debt and AED 9.8bn of cash, so net debt is low relative to the size of the business and the development pipeline.",
      "The dividend yield is 7.8%, unusually high for a developer and supported by the cash flow and the low leverage. Emaar has been returning cash to shareholders while funding new projects, which is a sign of confidence in the backlog. The risk is that a property downturn reduces pre-sales and therefore future cash collection.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 12.52 the shares trade at 5.8x trailing earnings and 3.7x EV/EBITDA, a deep discount to global developers and to the value of the recurring assets. The market is applying a property-cycle discount, consistent with the historical pattern for Dubai real estate.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 16.36 and a range of AED 12.50–19.90 from 15 analysts. Twelve carry a strong buy, one a buy and two a hold, with no sells. FY2026 revenue is expected at AED 55.2bn and EPS at AED 2.17. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The ratings are overwhelmingly positive, reflecting the earnings growth, the low multiple and the 7.8% yield. The mean target implies substantial upside, though the range is wide because the outcome depends on the property cycle.",
      "The key debate is whether Dubai's property market can sustain current prices and volumes. Bulls point to population growth, limited supply in prime areas and the recurring mall income; bears point to the cyclicality of off-plan sales and the risk of oversupply in some segments.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 16.36 (range AED 12.50–19.90), 15 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue AED 55.2bn, +11.4%; EPS AED 2.17, +9.1%." },
      { title: "Ratings mix", detail: "12 strong buy, 1 buy, 2 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are the Dubai property cycle, execution on the development pipeline and concentration in one city.",
    items: [
      {
        title: "Property cycle",
        severity: "High",
        detail:
          "A downturn in Dubai prices or transaction volumes would hit development revenue, margins and pre-sales.",
        watch: "Dubai prices, transaction volumes, mortgage rates.",
      },
      {
        title: "Concentration in Dubai",
        severity: "High",
        detail:
          "Most profit comes from one city. A local shock — demand, regulation or supply — would be difficult to offset.",
        watch: "Dubai population, supply pipeline, rental regulation.",
      },
      {
        title: "Execution and delivery",
        severity: "Medium",
        detail:
          "The backlog is large. Construction delays or cost inflation would defer revenue and pressure margins.",
        watch: "Handovers, construction costs, backlog conversion.",
      },
      {
        title: "Related-party and governance",
        severity: "Low",
        detail:
          "The state-linked ownership structure and related-party transactions require scrutiny.",
        watch: "Related-party disclosures, board independence.",
      },
    ],
    watchlist: [
      { title: "Pre-sales", detail: "The leading indicator for future revenue." },
      { title: "Mall occupancy", detail: "Recurring income and rent renewals." },
      { title: "Handovers", detail: "Backlog conversion and margins." },
      { title: "Dividend", detail: "Payout and cash coverage." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Emaar is a high-quality developer with a prime land bank, a world-class mall and hospitality portfolio and a conservative balance sheet. It trades at 5.8x earnings and a 7.8% dividend yield, which is undemanding if Dubai's property market stays healthy.",
      "The investment case is a cyclical growth stock priced for a downturn. The main risk is the property cycle, and the main opportunity is the value embedded in the recurring assets and the development backlog. Investors should be comfortable with Dubai concentration.",
    ],
    questions: [
      "How much of 2026 revenue is already covered by pre-sales?",
      "What is the value of the malls and hospitality assets on a sum-of-the-parts basis?",
      "How would a 20% fall in Dubai prices affect margins?",
      "Is the dividend sustainable through a property downturn?",
    ],
  },
};
