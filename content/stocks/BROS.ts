import type { StockStory } from "./types";

export const BROS: StockStory = {
  ticker: "BROS",
  kicker: "Consumer & Brands · Drive-through coffee",
  title: "Dutch Bros is a drive-through coffee build-out that just turned cash-positive",
  dek: "The chain grew revenue 37.9% a year by opening stands and selling a lot of sugary drinks per visit. The interesting part is the swing from $128.0M of cash burn in FY2022 to $54.4M of free cash flow in FY2025.",
  readingMinutes: 10,
  takeaways: [
    "Revenue reached $2.01B, up 30.7%, with a 9.5% operating margin.",
    "Free cash flow turned positive in FY2024 and reached $54.4M in FY2025 after years of heavy build-out spending.",
    "Company-operated stands generate the revenue; franchised stands add royalty income with almost no capital.",
    "At 5.1x EV/EBITDA and 0.9x sales, the shares are priced far below the other consumer growth names in the peer set.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1866581/000186658126000006/bros-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001866581&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Dutch Bros runs drive-through coffee stands, mostly in the western United States, and sells a menu built around espresso drinks, cold brew, energy drinks and blended beverages. The format is deliberately small: a kiosk with a drive-through lane and a walk-up window, staffed by what the company calls broistas. A stand costs far less to build than a full restaurant, which is why the chain can add units quickly.",
      "Revenue was $2.01B over the trailing twelve months, up 30.7%, and operating margin was 9.5%. The number that tells the real story is free cash flow: negative $38.1M in FY2021, negative $128.0M in FY2022, then positive $24.7M in FY2024 and $54.4M in FY2025. The build-out was expensive, and the company is now on the other side of the heaviest spending.",
      "The shares closed at $33.77, one cent above the 52-week low of $33.17 and less than half the high of $74.02. A 36.5% one-year decline and a 50.2% five-year decline have left the stock at 5.1x EV/EBITDA. The market is no longer paying a growth premium.",
    ],
    quote:
      "Coffee is a habit business. The question is whether a new stand can build a morning routine fast enough to pay back its build cost before the next one opens.",
  },
  whatItDoes: {
    paragraphs: [
      "There are two kinds of Dutch Bros location. Company-operated stands sell drinks directly to customers and book the full retail price as revenue. Franchised stands sell through an operator who pays royalties and initial fees, which produces high-margin revenue with little capital. The brief does not split the two, so the consolidated number blends retail sales with royalty income.",
      "The customer base skews young and the order mix skews cold, sweet and large. That matters for unit economics: a $7 iced drink with flavouring and milk has a different cost structure than a plain drip coffee, and the labour per order is higher because drinks are hand-built. The menu also drives add-on food and merchandise sales, which lift the average ticket.",
      "The company employed 2,021 people at the last count. That figure covers corporate and support staff rather than the hourly workers inside each stand, so it understates the true headcount. The footprint is concentrated in the West, with expansion into newer markets still being tested.",
    ],
    bullets: [
      {
        title: "Company-operated stands",
        detail:
          "The bulk of revenue. Retail drink sales, with the full cost of labour, rent and ingredients on the books.",
      },
      {
        title: "Franchised stands",
        detail:
          "Royalty and fee income. A small share of revenue but a much higher margin, and it lets the brand enter markets without company capital.",
      },
      {
        title: "Drive-through format",
        detail:
          "Small footprint, low build cost and high throughput per square foot. The trade-off is that a stand depends on car traffic and a good corner.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The revenue model is retail: a customer orders at the window, pays, and the company keeps the difference between the ticket and the cost of ingredients, labour, rent and utilities. Gross margin was 24.8%, which is low for a beverage business on paper, but that is because company-operated retail carries all the store-level costs. A franchised royalty, by contrast, arrives at close to 100% margin.",
      "The cost structure has three big pieces. Ingredients and paper are variable and move with dairy and coffee prices. Labour is semi-variable because a stand needs a minimum crew regardless of volume. Occupancy and depreciation are fixed once a stand is built. That mix creates operating leverage: incremental sales at an existing stand drop through at a high rate, while a new stand starts with full fixed costs and no volume.",
      "Marketing is a fourth cost that behaves oddly. Dutch Bros relies heavily on word of mouth, community events and social media rather than national television advertising. That keeps the marketing line low relative to revenue but makes new-market launches dependent on local buzz rather than a paid campaign.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 37.9% a year across the fiscal years in the dataset, rising from $497.9M in FY2021 to $1.64B in FY2025. Almost all of that came from opening stands, with same-store sales adding a smaller contribution. The latest quarter, Q3 FY26, produced $549.8M, up 29.8% from $423.6M a year earlier.",
      "The quarterly pattern is seasonal and a little lumpy. Q1 FY26 revenue was $464.4M, Q2 FY26 $550.9M and Q3 FY26 $549.8M. Q2 and Q3 are the warm-weather quarters, when cold drinks sell best. A chain with this mix should be judged on full-year growth rather than on a single summer quarter.",
      "Third-party estimates call for $2.13B of revenue and $0.93 of EPS this fiscal year, then $2.65B and $1.22 next year. That implies roughly 25% revenue growth and a meaningful step-up in profit per share. Both depend on new stands opening on schedule and on the newer markets performing like the established ones.",
    ],
    bullets: [
      {
        title: "New stand openings",
        detail:
          "The primary growth engine. Each stand adds revenue in its first year and matures over the following two to three.",
      },
      {
        title: "Same-store sales",
        detail:
          "Traffic and ticket growth at existing stands. The proof that the brand travels beyond its home region.",
      },
      {
        title: "Food and non-drink menu",
        detail:
          "Food attach raises the average ticket and gives customers a reason to visit outside the morning daypart.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The operating margin history is a build-out curve. Dutch Bros lost $111.2M at the operating line in FY2021 on $497.9M of revenue, lost $2.6M in FY2022, then earned $46.2M in FY2023, $106.1M in FY2024 and $161.2M in FY2025. Some of the early loss reflected public-company costs and share-based compensation after the IPO, but the direction is clear: scale has turned the model profitable.",
      "Quarterly margins have settled in a band between 7.4% and 13.1% over the last six quarters. Q2 FY26 was the strongest at 12.8% and Q1 FY26 the weakest at 7.4%. Q3 FY26 came in at 9.6%. The spread tracks seasonality and the number of new stands opening in the period, since pre-opening costs land before the revenue does.",
      "Return on equity was 11.1% and return on invested capital 17.7%. The gap between the two reflects the debt and lease liabilities on the balance sheet. For a company that owns its real estate and builds its own stands, ROIC is the more informative number, and 17.7% is a reasonable return for a retail format.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $90.9M over the trailing period, a 4.5% margin, and $54.4M in FY2025 alone. The path there is the most instructive part of the file. FY2022 consumed $128.0M as the company built stands and funded the supply chain, FY2023 consumed $88.5M, and then FY2024 flipped to positive $24.7M.",
      "That swing happened because capital expenditure is front-loaded while revenue arrives over years. A stand built in FY2022 earns revenue in FY2023, FY2024 and beyond. Once openings stabilise at a steady rate, depreciation and maintenance capital become a smaller share of the cash flow, and free cash flow rises even if growth slows.",
      "The balance sheet carries $64.2M of net cash, or net debt to EBITDA of negative 0.2x. That is not a large cushion for a company adding dozens of units a year, but it is enough to fund the current programme without new equity. The company also leases many of its sites, which keeps debt off the balance sheet but commits future rent.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $33.77 the shares trade at 17.6x trailing earnings, 5.1x EV/EBITDA, 0.9x sales and 19.7x free cash flow, with a 5.1% free-cash-flow yield. Those are unusual multiples for a company growing revenue 30%. The peer table shows CAVA at 47.1x EV/EBITDA, ELF at 27.5x and DUOL at 31.6x.",
      "The gap needs an explanation rather than an assumption. Either the market expects growth to slow sharply, or it is discounting the capital intensity of the stand build-out, or the share count and debt structure make the headline numbers misleading. The brief shows a market capitalisation of $1.79B against $2.01B of revenue, which is why the sales multiple is below 1x.",
      "A 5.1x EV/EBITDA multiple on a business with positive free cash flow is closer to a mature restaurant valuation than a growth valuation. The reader should ask what the market is assuming about unit growth and margins before treating the multiple as either a bargain or a warning. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus includes 25 analysts with a mean target of $62.36 and a range of $29.00 to $95.00. The mean is nearly double the current share price, which is a large gap and worth noticing without treating it as a forecast.",
      "The near-term estimates are more modest than the target implies. The next quarter is expected to produce $562.6M of revenue and $0.18 of EPS, and the following quarter $586.3M and $0.21. For the full year the consensus is $2.13B of revenue and $0.93 of EPS, then $2.65B and $1.22.",
      "The dispersion between $29 and $95 reflects genuine disagreement about how far the stand model travels outside the West and how much margin the company can earn at scale. These are third-party views, not a Stockmonk rating.",
    ],
  },
  risks: {
    intro:
      "Dutch Bros has moved from a cash-consuming build-out to a cash-generating chain, which removes the most acute risk. What remains is the ordinary retail risk of any expansion: new units, new markets and the cost of a drink.",
    items: [
      {
        title: "New-market performance",
        severity: "High",
        detail:
          "A stand that works in Oregon may not work in a market with different traffic patterns, weather and coffee habits. Weak new cohorts would slow the opening programme.",
        watch: "Average unit volumes by market and the disclosed new-store productivity.",
      },
      {
        title: "Same-store sales",
        severity: "High",
        detail:
          "Growth of 30.7% can hide weak traffic at older stands. If same-store sales turn negative, the model depends entirely on new openings.",
        watch: "Comparable sales and the split between traffic and ticket.",
      },
      {
        title: "Input and labour costs",
        severity: "Medium",
        detail:
          "A 24.8% gross margin leaves little room for dairy, coffee or wage inflation. Menu pricing can offset some of it, but repeated increases test customer loyalty.",
        watch: "Cost of sales as a share of revenue and average ticket.",
      },
      {
        title: "Capital intensity of expansion",
        severity: "Medium",
        detail:
          "Free cash flow only turned positive once openings matured. A faster opening pace would push it negative again even if earnings keep growing.",
        watch: "Capital expenditure per new stand and the free-cash-flow trend.",
      },
      {
        title: "Competition for the morning trip",
        severity: "Medium",
        detail:
          "Coffee is a crowded category with national chains, local roasters and convenience stores all chasing the same drive-through customer.",
        watch: "Traffic trends and promotional activity across the category.",
      },
    ],
    watchlist: [
      {
        title: "Unit growth",
        detail:
          "The number of stands opened and the productivity of each new cohort.",
      },
      {
        title: "Free cash flow",
        detail:
          "The clearest test of whether the build-out is creating value or just consuming it.",
      },
      {
        title: "Franchise mix",
        detail:
          "More franchised stands would lift margins and reduce capital needs, but slow the revenue line.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Dutch Bros is a genuine growth story that has crossed an important threshold. Revenue nearly tripled from FY2021 to FY2025, operating margin went from deeply negative to 9.5%, and free cash flow turned positive. Those are the marks of a chain that has built enough scale to cover its fixed costs.",
      "The puzzle is the valuation. A 30% grower trading at 0.9x sales and 5.1x EV/EBITDA is either cheap or priced for a slowdown the reported numbers do not yet show. The gap between the $62.36 consensus target and the $33.77 share price says the market and the analysts disagree.",
      "Three variables matter from here: whether new stands outside the West earn the same volumes, whether same-store sales stay positive as the base matures, and how much capital each new stand absorbs. Together they decide whether the cash-flow inflection continues.",
    ],
    questions: [
      "How much of revenue growth is new stands versus same-store sales?",
      "What does a mature stand earn, and how long does it take to pay back its build cost?",
      "Why is the market valuing a 30% grower at less than 1x sales?",
      "What share of the chain is franchised, and is that mix changing?",
    ],
  },
};
