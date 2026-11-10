import type { StockStory } from "@/content/stocks/types";

export const airArabia: StockStory = {
  ticker: "AIRARABIA",
  kicker: "United Arab Emirates · Low-cost aviation",
  title: "Air Arabia: the Gulf's low-cost airline at a full price",
  dek:
    "Air Arabia runs a low-cost network from Sharjah and hubs in Abu Dhabi, Morocco and Egypt. Profit has grown steadily, but the shares trade at 18.1x earnings and above the consensus target after a strong run.",
  readingMinutes: 7,
  takeaways: [
    "TTM revenue of AED 7.75bn and net income of AED 1.31bn, with a 12.2% operating margin and 17.6% return on equity.",
    "Revenue rose from AED 3.17bn in 2021 to AED 7.79bn in 2025, and net income from AED 0.72bn to AED 1.63bn.",
    "The airline operates a young Airbus A320 family fleet and has expanded into Abu Dhabi, Morocco and Egypt.",
    "At AED 5.03 the shares trade at 18.1x earnings and 14.0x EV/EBITDA, with a 5.9% dividend yield.",
    "Consensus has a mean target of AED 4.88 — below the current price — with six holds and one sell.",
  ],
  filingUrl: "https://stockanalysis.com/quote/dfm/AIRARABIA/financials/",
  irUrl: "https://www.airarabia.com",
  bigPicture: {
    paragraphs: [
      "Air Arabia is the first and largest low-cost carrier in the Middle East and North Africa. It operates from Sharjah and Ras Al Khaimah in the UAE, and through joint ventures in Abu Dhabi, Morocco and Egypt. It flies a young fleet of Airbus A320 family aircraft on short and medium-haul routes.",
      "The equity is a play on regional travel demand and on the low-cost model. The airline has grown capacity, added routes and expanded its hubs, but it is exposed to fuel prices, airport charges, competition and geopolitical disruption. The market values it at a premium to global low-cost carriers.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The airline sells seats directly to passengers, with ancillary revenue from baggage, seat selection, food and other services. It operates a point-to-point network rather than a connecting hub, which keeps aircraft utilisation high and costs low. The fleet is standardised on the A320 family, which simplifies maintenance and training.",
      "The joint ventures in Abu Dhabi, Morocco and Egypt extend the network and add local market access. The company also has a training academy and a maintenance operation, which support the airline and generate third-party revenue. Cargo is a small but growing part of the business.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is passenger tickets plus ancillary fees and cargo. The low-cost model depends on high load factors, quick turnarounds and low unit costs. Operating margin was 12.2% on a trailing basis, healthy for an airline but below the 2021–23 levels as fuel and labour costs rose.",
      "The main costs are fuel, aircraft leases and ownership, airport charges, staff and maintenance. Fuel is the largest and most volatile. Airlines have limited pricing power when capacity is growing, so cost discipline and fleet utilisation are the keys to profitability.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from AED 3.17bn in 2021 to AED 7.79bn in 2025, and net income from AED 0.72bn to AED 1.63bn. The recovery from the pandemic and the expansion of capacity drove the growth, with load factors and yields holding up despite the increase in seats.",
      "The trailing twelve months show AED 7.75bn of revenue, up 10.3%, and consensus expects AED 7.9bn in 2026, up 1.7%, with EPS of AED 0.21, down 39.8%. The earnings decline reflects higher costs and a more competitive market, not a collapse in demand.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was AED 0.72bn in 2021, AED 1.22bn in 2022, AED 1.55bn in 2023, AED 1.47bn in 2024 and AED 1.63bn in 2025. Operating margin fell from 20.3% in 2021 to 16.3% in 2025 as fuel and labour costs rose, even as revenue grew.",
      "Return on equity was 17.6% on a trailing basis, solid for an airline. The company carries AED 3.82bn of debt and AED 1.29bn of cash, leverage that is manageable but reflects the aircraft financing needed to grow the fleet.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative AED 0.47bn on a trailing basis, reflecting aircraft deliveries and capital spending. The dividend yield is 5.9%, supported by earnings, but the payout competes with fleet investment for cash.",
      "The balance sheet carries AED 3.82bn of debt and AED 1.29bn of cash. Aircraft financing is normal for an airline, and the young fleet keeps maintenance costs low. The main risk is that a downturn coincides with a heavy delivery schedule.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 5.03 the shares trade at 18.1x trailing earnings and 14.0x EV/EBITDA, a premium to global low-cost carriers. The premium reflects the growth, the balance sheet and the Middle East travel market, but it leaves little room for disappointment.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 4.88 — below the current price — and a range of AED 4.40–5.86 from nine analysts. One carries a strong buy, one a buy, six a hold and one a sell. FY2026 revenue is expected at AED 7.9bn and EPS at AED 0.21. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "The ratings are cautious, with most analysts holding the shares and the mean target below the market price. That suggests the market has already priced in the growth story.",
      "The key debate is unit costs and capacity growth. If Air Arabia can keep costs flat while adding seats, profits can grow; if fuel and labour costs rise faster than yields, margins will compress.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 4.88 (range AED 4.40–5.86), 9 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue AED 7.9bn, +1.7%; EPS AED 0.21, -39.8%." },
      { title: "Ratings mix", detail: "1 strong buy, 1 buy, 6 hold, 1 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are fuel costs, competition and geopolitical disruption in the regions the airline serves.",
    items: [
      {
        title: "Fuel prices",
        severity: "High",
        detail:
          "Fuel is the largest cost and is not fully hedged. A sharp rise would compress margins.",
        watch: "Jet fuel prices, hedging policy.",
      },
      {
        title: "Competition and capacity",
        severity: "High",
        detail:
          "Regional carriers are adding capacity. Overcapacity would pressure fares and load factors.",
        watch: "Seat growth, load factors, yields.",
      },
      {
        title: "Geopolitics",
        severity: "Medium",
        detail:
          "Routes to and over conflict zones can be disrupted, raising costs and reducing demand.",
        watch: "Airspace closures, travel advisories.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "At 18.1x earnings the shares trade above the consensus target. A cost surprise would hit the multiple.",
        watch: "Relative P/E, estimate revisions.",
      },
    ],
    watchlist: [
      { title: "Load factor", detail: "Demand and pricing power." },
      { title: "Unit cost", detail: "Fuel and labour per seat." },
      { title: "Capacity", detail: "Fleet deliveries and route additions." },
      { title: "Dividend", detail: "Payout and cash coverage." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Air Arabia is a well-run low-cost carrier with a young fleet, a strong balance sheet and a 5.9% dividend yield. It has grown revenue and profit consistently since the pandemic.",
      "The problem is the price: the shares trade at 18.1x earnings and above the consensus target. The investment case now depends on cost discipline and on capacity growth not outrunning demand.",
    ],
    questions: [
      "How much of the fleet is hedged against fuel prices?",
      "What capacity growth is planned for 2026?",
      "Can unit costs stay flat as the fleet expands?",
      "Is the dividend covered after aircraft capex?",
    ],
  },
};
