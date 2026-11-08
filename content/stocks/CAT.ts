import type { StockStory } from "./types";

export const CAT: StockStory = {
  ticker: "CAT",
  kicker: "Industrials · Machinery, engines and financing",
  title: "Caterpillar's margins come from the dealer network, not the iron",
  dek: "The machines are the visible product. The profit engine is parts, service and a captive finance book that keeps customers buying through the cycle.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $77.8B, up 20.3%, at an 18.8% operating margin and a 15.2% net margin.",
    "Free cash flow was $11.3B, a 14.5% margin, with $7.9B of net cash on the balance sheet.",
    "The shares are 4% up a 52-week range of $537.08 to $1,073.46 and have returned -1.1% over the past year while revenue grew 20.3%.",
    "The 167.5% return on invested capital is not comparable to an ordinary manufacturer's; payables and the finance arm shrink the invested capital base.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000018230&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Caterpillar builds construction and mining equipment, diesel and gas engines, industrial gas turbines and locomotives. It sells through an independent dealer network that stocks machines, finances them, services them and owns most of the customer relationship. That network is the reason a company selling $77.8B of heavy equipment can earn an 18.8% operating margin.",
      "The trailing figures are strong: revenue up 20.3% to $77.8B, operating margin 18.8%, net margin 15.2%, free cash flow $11.3B. The latest quarter, Q3 FY26, delivered $20.7B of revenue at a 20.4% operating margin, the second consecutive quarter above 20%.",
      "The shares tell a different story. At $558.63 the market value is $255.6B, or 21.6x trailing earnings and 14.5x EV/EBITDA. The stock is 4% up a 52-week range of $537.08 to $1,073.46 and has returned -1.1% over twelve months. Revenue grew a fifth and the multiple came down; that divergence is the first thing to explain.",
    ],
    quote:
      "Heavy equipment is a cyclical business wrapped in an annuity. The machine sale starts the relationship; the parts counter and the finance contract are where the returns come from.",
  },
  whatItDoes: {
    paragraphs: [
      "The four segments are deliberately spread across different cycles. Construction equipment follows non-residential building and rental-fleet replacement; mining equipment follows commodity capital budgets; engines and turbines follow energy investment and power generation; locomotives follow rail volumes. A downturn in one rarely arrives at the same time as a downturn in another, which is why the group revenue line is smoother than any single end market.",
      "What ties them together is the dealer and the installed base. Machines are sold through independent dealers who stock parts, service the equipment and often arrange the financing. That structure keeps the factory focused on production and puts the customer relationship, the maintenance work and the credit decision close to the machine. It also means Caterpillar's revenue quality depends on how well those dealers are capitalised.",
    ],
    bullets: [
      {
        title: "Construction Industries",
        detail:
          "Excavators, loaders, dozers and compact machines. Volume-driven, sensitive to non-residential construction and to rental-fleet replacement cycles.",
      },
      {
        title: "Resource Industries",
        detail:
          "Mining trucks, shovels and support equipment. Few units, high price, long lives, and a customer base that invests when commodity prices justify it.",
      },
      {
        title: "Energy & Transportation",
        detail:
          "Engines, turbines, locomotives and power generation. The most diverse end-market mix and the one most exposed to energy capital spending.",
      },
      {
        title: "Financial Products",
        detail:
          "Captive lending and leasing. It supports equipment sales and adds a credit risk that a pure manufacturer does not carry.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "A new machine is sold at a price that has to cover steel, castings, freight and a factory that runs below capacity in downturns. The gross margin of 43.8% looks generous until you remember that the dealer takes a cut of the transaction and that the factory carries a lot of fixed cost. The operating margin of 18.8% is what is left after selling, engineering and administrative costs.",
      "Parts and service are the better business. Once a machine is in a customer's yard, replacement parts are bought on availability and dealer relationships rather than on price, and the margins are materially higher than on a new unit. Caterpillar does not report the split in this dataset, but the pattern is visible in the way margins hold up when equipment volumes fall.",
      "Financial Products changes the arithmetic. The finance arm borrows to lend, so its assets and liabilities sit on the consolidated balance sheet and its revenue is interest income rather than equipment revenue. That is why return on invested capital of 167.5% and return on equity of 79.8% should not be read as industrial returns: the denominator is reduced by customer deposits, payables and the structure of the finance book. The more honest comparison is the 18.8% operating margin and the 14.5% free-cash-flow margin.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $51.0B in 2021 to $59.4B, $67.1B, $64.8B and $67.6B in the following years, then reached $77.8B on a trailing basis. The path is instructive: two years of growth, a pause in 2024 as dealer inventories and construction demand normalised, then a sharp rebound. Cyclical businesses rarely grow in straight lines.",
      "The latest quarter grew 17.3% to $20.7B. The attributed consensus expects $79.4B of revenue and $27.12 of EPS this fiscal year, then $88.5B and $32.25 next year. If that is right, the next fiscal year would be well above any revenue year in the series shown here, which implies the current order momentum continues.",
      "Three drivers support that. Power generation demand is pulling through engines and turbines as data centres and utilities add on-site capacity. Mining customers are reinvesting after years of underinvestment, particularly for copper and other electrification metals. And infrastructure spending in the United States is flowing into projects that use earthmoving equipment. The offset is construction in Europe and China, where activity has been weak, and the risk that dealers stop restocking once their inventories normalise.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin by quarter tells the cycle story better than the annual numbers: 17.3% in Q2 FY25, 17.3%, 15.8%, 17.7%, 20.9% and 20.4% in Q3 FY26. The move from the high teens to above 20% happened while revenue grew, which is the signature of operating leverage on a fixed factory base.",
      "Annual operating income has been less stable: $6.9B in 2021, $7.9B in 2022, $13.0B in 2023, $13.1B in 2024 and $11.2B in 2025, on revenue that barely moved between 2023 and 2025. Margin, not volume, explains the 2025 decline, and the recovery since suggests pricing and mix improved again.",
      "Diluted EPS was $25.49 on a trailing basis, and the quarterly series shows a step up: $5.47 in Q1 FY26, $7.77 in Q2 and $7.13 in Q3, against $4.62 to $5.12 in the comparable quarters a year earlier. Some of that is margin and some is a lower share count. EPS growth of that speed is hard to sustain without a further leg in the cycle.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $11.3B, a 14.5% margin, against net income of roughly $11.8B implied by the 15.2% net margin. The two are close, which is reassuring: the earnings are converting into cash rather than sitting in inventory or receivables.",
      "The balance sheet holds $7.9B of net cash, or about half a turn of EBITDA. That is a modest cushion for a cyclical manufacturer, and it is smaller than it looks because the finance arm carries debt that belongs to the lending business rather than to the industrial operations.",
      "At 22.7x free cash flow and a 4.4% FCF yield, the shares are priced for a normal cycle rather than a peak. The company returns cash through dividends and buybacks, and the buyback is doing part of the EPS work: net income fell in 2025 while EPS held up better because the share count shrank.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 21.6x trailing earnings and 14.5x EV/EBITDA, Caterpillar is the cheapest name in this industrial comparison. Eaton trades at 34.0x and 20.9x, GE at 36.7x and 24.3x, Vertiv at 33.6x and 22.7x, and RTX at 30.4x and 18.1x. Only Caterpillar combines the lowest multiple with revenue growth above 20%.",
      "The discount is not a mistake in the market. Cyclical machinery earnings are hardest to forecast at the top of a cycle, and a low multiple on peak earnings can still be an expensive price. The relevant question is where mid-cycle earnings sit, not where this year's do.",
      "The stock's own behaviour supports that reading. It has gone nowhere over a year while revenue grew 20%, which means the multiple compressed as earnings rose. That is the healthy way for a cyclical to de-rate, and it also means the share price now embeds less optimism than it did twelve months ago.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-six analysts contribute to the attributed consensus, with a mean target of $823.41 and a range of $575.00 to $1,044.68. The mean is far above the latest close, and the low end is only modestly above it. That spread is a reasonable reflection of how differently analysts weight the construction cycle.",
      "Estimates call for $79.4B of revenue and $27.12 of EPS this fiscal year, then $88.5B and $32.25 next year. The EPS step-up of about 19% on revenue growth of 11.5% again assumes margin expansion, which is plausible only if power generation and mining stay strong.",
      "A mean target is a third-party number, not a Stockmonk rating. When the average sits that far above the price, the useful question is what the analysts expect that the market does not.",
    ],
  },
  risks: {
    intro:
      "Caterpillar's risks are cyclical rather than financial. The balance sheet is sound and the franchise is durable; the uncertainty is where in the cycle the current earnings sit.",
    items: [
      {
        title: "Construction cycle",
        severity: "High",
        detail:
          "Non-residential construction and rental-fleet replacement drive machine volumes. A slowdown hits revenue before it hits costs, and margins fall faster than sales.",
        watch:
          "Dealer inventory, machine sales to end users and construction spending.",
      },
      {
        title: "Mining capital spending",
        severity: "High",
        detail:
          "Resource Industries depends on a handful of large miners approving projects. A fall in copper or iron ore prices can delay orders by years.",
        watch:
          "Commodity prices, mining capital budgets and Resource Industries order intake.",
      },
      {
        title: "Dealer credit and inventories",
        severity: "Medium",
        detail:
          "Independent dealers hold the inventory and the customer credit. If they are overstocked or overextended, they stop ordering regardless of end demand.",
        watch:
          "Dealer inventory months and Financial Products past dues.",
      },
      {
        title: "Input and tariff costs",
        severity: "Medium",
        detail:
          "Steel, castings and freight move faster than machine price lists. Tariffs add a cost that is hard to pass through on contracts already signed.",
        watch:
          "Gross margin and the price-cost commentary in each quarter.",
      },
      {
        title: "Peak-cycle earnings",
        severity: "Medium",
        detail:
          "A 21.6x multiple on earnings that may be above mid-cycle is not the same as 21.6x on normalised earnings.",
        watch:
          "The gap between current and five-year average operating margin.",
      },
    ],
    watchlist: [
      {
        title: "Dealer inventories",
        detail:
          "The clearest early warning. Rising inventory with flat retail sales precedes a production cut.",
      },
      {
        title: "Energy & Transportation orders",
        detail:
          "Power generation and oil and gas demand are holding up the mix. Watch order intake by end market.",
      },
      {
        title: "Financial Products credit",
        detail:
          "A captive finance arm can hide customer stress for a quarter or two. Past dues and write-offs show it first.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Caterpillar is a high-quality cyclical with a dealer network that converts machine sales into decades of parts and service revenue. The numbers show $77.8B of revenue, an 18.8% operating margin, $11.3B of free cash flow and net cash on the balance sheet. The franchise is not in question.",
      "What is in question is the cycle. Revenue grew 20.3% and the shares returned -1.1% over the same year, which is the market saying it does not believe the growth rate persists. Both views can be right: the business can be excellent and the earnings can be above normal.",
      "The reader's task is to separate the two. If mid-cycle operating margin is in the high teens, the current 20% is a peak, and the 14.5x EV/EBITDA is on peak EBITDA. If power generation demand has structurally raised the floor, the multiple is cheap. That is the argument to settle before anything else.",
    ],
    questions: [
      "How much of the recent margin expansion is price versus volume versus mix?",
      "What does dealer inventory look like relative to retail sales?",
      "How much of Energy & Transportation revenue is tied to data-centre power demand?",
      "What would operating margin be in a year when machine volumes fall 15%?",
    ],
  },
};
