import type { StockStory } from "./types";

export const CAVA: StockStory = {
  ticker: "CAVA",
  kicker: "Consumer & Brands · Fast-casual restaurants",
  title: "Cava is a restaurant chain paying for growth out of its own margin",
  dek: "Mediterranean bowls, a small store base and a 6.4% operating margin. The report explains why restaurant-level cash flow, new-store payback and repeat visits matter more here than the headline revenue growth.",
  readingMinutes: 10,
  takeaways: [
    "Trailing revenue is $1.53B, up 35.7%, but the operating margin is only 6.4%.",
    "Free cash flow was $3.3M over the trailing period, a 0.2% margin, because new restaurants consume capital.",
    "Net cash of $427.9M gives the company room to keep building without leaning on lenders.",
    "The shares trade at 84.4x trailing earnings and 4.2x sales, so the price assumes years of unit growth.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1639438/000162828026011296/cava-20251228.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001639438&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Cava is a fast-casual restaurant chain built around Mediterranean food: grain bowls, salads, dips and spreads, with a digital order-and-pickup layer on top. It also sells packaged dips and spreads through grocery stores, which is a small but useful brand billboard rather than a profit centre. The company came out of the Washington, DC area and has been opening restaurants across the United States since 2006.",
      "The question that decides the story is not whether people like the food. It is whether a new restaurant earns back its build cost quickly enough to justify the next one. Revenue reached $1.53B on a trailing basis, up 35.7%, but operating margin was 6.4% and free cash flow was $3.3M. Growth is being funded, not harvested.",
      "At $59.15 the stock sits well below its 52-week high of $98.79 and above the low of $43.41. The market capitalisation is $6.9B. That price is a claim about future store count and future margins, and both are still being proven.",
    ],
    quote:
      "A restaurant chain at this stage is a capital-allocation story wearing a consumer-brand costume. The brand gets customers in the door; the unit economics decide whether opening more doors creates value.",
  },
  whatItDoes: {
    paragraphs: [
      "Each Cava restaurant is a compact assembly line. Customers choose a base, a protein and toppings, and the kitchen builds the bowl in front of them. That format keeps ticket times short, labour per order lower than a full-service restaurant and the menu simple enough to scale. Digital orders, including pickup and delivery, run through the same kitchen.",
      "The company reports one consolidated revenue line, so there is no segment split to lean on. Operationally the business has three layers: restaurants that are open, restaurants under development, and the small packaged-goods line sold through grocery. The first two dominate the numbers.",
      "The customer is a weekday lunch and early-dinner buyer who wants food that feels fresher than a burger but arrives faster than a sit-down meal. That puts Cava in direct competition with other fast-casual chains, independent Mediterranean restaurants and, increasingly, the prepared-food aisle of a grocery store.",
    ],
    bullets: [
      {
        title: "Restaurants",
        detail:
          "Company-operated locations, the overwhelming majority of revenue. Same-store sales and new openings drive the top line.",
      },
      {
        title: "Digital ordering",
        detail:
          "Pickup and delivery orders placed through the app or web. They lift volume per restaurant without adding seating.",
      },
      {
        title: "Packaged goods",
        detail:
          "Dips and spreads sold in grocery stores. Small today, but it puts the brand in front of shoppers who may not live near a Cava.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Cava sells food at a price that covers ingredients, hourly labour, rent and utilities, and leaves something for corporate overhead and profit. Gross margin was 34.1% on a trailing basis. That figure includes the cost of food and the direct cost of running restaurants, so it is the first real test of whether the concept works at scale.",
      "The operating leverage is straightforward in theory: a restaurant has fixed rent and a management layer, so once volume passes a threshold, incremental sales drop through at a high rate. In practice the company is adding restaurants faster than it is adding overhead, which is why the operating margin is thin. Corporate costs, pre-opening expenses and marketing for new markets all land before the new units mature.",
      "Packaged goods carry different economics. Grocery sales earn a wholesale margin and require slotting fees and broker costs, but they need no restaurant capital. The company has not broken out how large that line is, so it should be treated as optionality rather than a pillar.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $500.1M in FY2021 to $1.18B in FY2025, which is a 23.9% compound annual rate. The path was not smooth: FY2022 revenue grew only modestly to $564.1M while the company absorbed acquisition and integration costs, then growth re-accelerated as new restaurants opened.",
      "The latest quarters show the pace. Q1 FY26 produced $438.3M of revenue, Q2 FY26 $368.4M and Q3 FY26 $356.4M, against $292.2M in Q3 FY25. The Q1 figure is seasonally the strongest and Q3 the softest, which is why the sequential decline is not a demand signal on its own.",
      "Third-party estimates point to $1.50B of revenue and $0.53 of EPS for the current fiscal year, then $1.82B and $0.73 next year. Those forecasts assume both new restaurants and positive same-store sales. If openings slow or new markets take longer to mature, the revenue line and the margin line weaken together.",
    ],
    bullets: [
      {
        title: "New restaurants",
        detail:
          "The main lever. Each opening adds revenue immediately but carries pre-opening cost and a ramp period before it earns its overhead.",
      },
      {
        title: "Same-store sales",
        detail:
          "Traffic and price at existing restaurants. This is the cleanest read on whether the brand is still gaining customers.",
      },
      {
        title: "Menu and daypart expansion",
        detail:
          "New items and additional eating occasions raise sales per restaurant without new real estate.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The margin history explains the business better than any single year. Cava lost $52.8M at the operating line in FY2021 and $59.8M in FY2022, broke even in FY2023 with $4.7M of operating income, then earned $43.1M in FY2024 and $55.3M in FY2025. That is the shape of a chain climbing out of its investment phase.",
      "One number needs care: FY2024 net income was $130.3M against $43.1M of operating income. Net income above operating income means a large non-operating item, not a sudden improvement in restaurant profitability. The FY2025 net income of $63.7M is the cleaner reference point.",
      "The quarterly operating margin has ranged from 1.0% in Q4 FY25 to 7.3% in Q2 FY26, with Q3 FY26 at 4.2%. A spread that wide inside four quarters reflects seasonality, new-store drag and the difficulty of holding labour and food costs steady while the store base changes. Return on invested capital was 17.9%, which is respectable but flattered by the net cash balance.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $3.3M over the trailing period, a 0.2% margin, and the annual record shows why. FY2023 consumed $41.7M of cash, FY2024 generated $52.9M and FY2025 generated $26.1M. Restaurant construction is lumpy: a year with many openings absorbs cash, and a year with fewer lets the prior investment pay back.",
      "The balance sheet carries $427.9M of net cash and net debt to EBITDA of negative 3.1x. That cushion means the expansion does not depend on borrowing, which matters for a company whose cash flow can swing by tens of millions depending on the opening schedule.",
      "The teaching point is that a growing restaurant company can report positive net income and still produce almost no free cash flow. The cash statement, not the income statement, tells you how much of the growth is being paid for by customers versus by the balance sheet.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $59.15, the shares trade at 84.4x trailing earnings, 47.1x EV/EBITDA and 4.2x sales. Price to free cash flow is 2,065.5x, which is not a meaningful multiple; it simply says free cash flow is close to zero. The earnings multiple and the cash multiple are telling different stories, and the cash multiple is the more honest one at this stage.",
      "A 4.2x sales multiple for a restaurant chain implies the market expects margins to rise as the store base matures. If operating margin stays near 6%, the multiple is hard to justify on cash flow alone. If it climbs toward the mid-teens over several years, the current price can be rationalised.",
      "The peer set in the brief includes other growing consumer brands with much higher sales multiples and much thinner margins. Comparing Cava on EV/EBITDA is fairer than comparing it on P/E, because depreciation from new restaurants distorts earnings. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus includes 24 analysts with a mean target of $79.46 and a range of $18.00 to $110.00. A range that wide around a $59 share price means the analysts disagree about the store-growth runway, not about the current quarter.",
      "Estimates call for $1.50B of revenue and $0.53 of EPS this fiscal year, rising to $1.82B and $0.73 next year. The implied margin expansion is modest, which suggests the forecasts assume more restaurants rather than a big step-up in profitability.",
      "For the next quarter the consensus looks for $338.3M of revenue and $0.02 of EPS. A near-zero quarterly EPS estimate is a reminder that small changes in pre-opening costs or weather can swing reported profit at this scale. These are third-party views, not a Stockmonk rating.",
    ],
  },
  risks: {
    intro:
      "Cava's risks cluster around execution: can it open restaurants quickly without diluting the returns on the ones already open? The balance sheet removes financing risk from the near-term list, but it does not remove operating risk.",
    items: [
      {
        title: "New-store productivity",
        severity: "High",
        detail:
          "New restaurants in unfamiliar markets may open below the volume of established units. If payback stretches, growth consumes more cash than it returns.",
        watch: "Average unit volumes for new cohorts and the disclosed payback period.",
      },
      {
        title: "Same-store sales",
        severity: "High",
        detail:
          "Revenue growth of 35.7% can mask weak traffic at existing restaurants. Price increases can carry same-store sales for a while before customers push back.",
        watch: "The split between traffic and price in comparable sales.",
      },
      {
        title: "Food and labour costs",
        severity: "Medium",
        detail:
          "A 34.1% gross margin leaves limited room for ingredient inflation or wage pressure before restaurant-level profit disappears.",
        watch: "Cost of goods sold as a percentage of revenue and restaurant-level margin.",
      },
      {
        title: "Competitive intensity",
        severity: "Medium",
        detail:
          "Fast-casual is crowded, and delivery aggregators make it easy for customers to substitute. Discounting by rivals can force Cava to match.",
        watch: "Promotional activity and delivery mix.",
      },
      {
        title: "Valuation compression",
        severity: "Medium",
        detail:
          "At 84.4x earnings and 4.2x sales, a slowdown in openings or a margin miss can reset the multiple sharply, as the move from $98.79 to $59.15 already showed.",
        watch: "Forward growth estimates against the sales multiple.",
      },
    ],
    watchlist: [
      {
        title: "Comparable sales",
        detail:
          "The only clean measure of demand at restaurants that are already open.",
      },
      {
        title: "Restaurant-level margin",
        detail:
          "Shows whether new units are as profitable as older ones once they mature.",
      },
      {
        title: "Free cash flow",
        detail:
          "The gap between net income and cash is the cost of the opening programme.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Cava is a real brand with a differentiated menu and a store base that is still small relative to its ambitions. Revenue almost tripled between FY2021 and FY2025, and the company has been profitable at the operating line since FY2023. Those are genuine achievements.",
      "The unresolved part is cash. A 0.2% free-cash-flow margin means the current growth rate is being financed by the $427.9M net cash pile and by depreciation timing, not by the restaurants themselves. Until free cash flow scales with revenue, the story depends on the capital markets staying open and on new units earning their cost.",
      "Three questions separate the story: how much of growth is new stores versus existing ones, how profitable a mature restaurant is, and what multiple a low-margin chain deserves. The answers, not the latest quarter, determine whether the price is sensible.",
    ],
    questions: [
      "How much of revenue growth comes from new restaurants versus same-store sales?",
      "What does a mature Cava restaurant earn at the store level, and how long is the payback?",
      "Why was FY2024 net income so far above operating income, and does it recur?",
      "At what store count and margin does the 4.2x sales multiple make sense?",
    ],
  },
};
