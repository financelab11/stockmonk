import type { StockStory } from "./types";

export const CAT: StockStory = {
  "ticker": "CAT",
  "kicker": "Industrials · Machinery, engines and financing",
  "title": "Caterpillar's margins come from the dealer network, not the iron",
  "dek": "The machines are the visible product. The profit engine is parts, service and a captive finance book that keeps customers buying through the cycle.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $77.8B trailing twelve months, +20.3% year over year.",
    "Profitability: 18.8% operating margin and 15.2% net margin.",
    "Cash: $11.3B free cash flow, a 14.5% margin.",
    "Scorecard: 64/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000018230&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "CATERPILLAR INC. generated $77.8B of revenue over the last twelve months, +20.3% versus the prior year. Revenue is tied to capital spending, backlogs and the ability to pass through input costs.",
      "The latest reported quarter was Q3 FY26, with $20.7B of revenue and an operating margin of 20.4%. The stock closed at $570.79 on 2026-11-17, giving a market capitalization of $261.2B.",
      "The shares sit 6% of the way up their 52-week range ($537.08 to $1,073.46). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Heavy equipment is a cyclical business wrapped in an annuity. The machine sale starts the relationship; the parts counter and the finance contract are where the returns come from."
  },
  "whatItDoes": {
    "paragraphs": [
      "The four segments are deliberately spread across different cycles. Construction equipment follows non-residential building and rental-fleet replacement; mining equipment follows commodity capital budgets; engines and turbines follow energy investment and power generation; locomotives follow rail volumes. A downturn in one rarely arrives at the same time as a downturn in another, which is why the group revenue line is smoother than any single end market.",
      "What ties them together is the dealer and the installed base. Machines are sold through independent dealers who stock parts, service the equipment and often arrange the financing. That structure keeps the factory focused on production and puts the customer relationship, the maintenance work and the credit decision close to the machine. It also means Caterpillar's revenue quality depends on how well those dealers are capitalised."
    ],
    "bullets": [
      {
        "title": "Construction Industries",
        "detail": "Excavators, loaders, dozers and compact machines. Volume-driven, sensitive to non-residential construction and to rental-fleet replacement cycles."
      },
      {
        "title": "Resource Industries",
        "detail": "Mining trucks, shovels and support equipment. Few units, high price, long lives, and a customer base that invests when commodity prices justify it."
      },
      {
        "title": "Energy & Transportation",
        "detail": "Engines, turbines, locomotives and power generation. The most diverse end-market mix and the one most exposed to energy capital spending."
      },
      {
        "title": "Financial Products",
        "detail": "Captive lending and leasing. It supports equipment sales and adds a credit risk that a pure manufacturer does not carry."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "A new machine is sold at a price that has to cover steel, castings, freight and a factory that runs below capacity in downturns. The gross margin of 43.8% looks generous until you remember that the dealer takes a cut of the transaction and that the factory carries a lot of fixed cost. The operating margin of 18.8% is what is left after selling, engineering and administrative costs.",
      "Parts and service are the better business. Once a machine is in a customer's yard, replacement parts are bought on availability and dealer relationships rather than on price, and the margins are materially higher than on a new unit. Caterpillar does not report the split in this dataset, but the pattern is visible in the way margins hold up when equipment volumes fall.",
      "Financial Products changes the arithmetic. The finance arm borrows to lend, so its assets and liabilities sit on the consolidated balance sheet and its revenue is interest income rather than equipment revenue. That is why return on invested capital of 167.5% and return on equity of 79.8% should not be read as industrial returns: the denominator is reduced by customer deposits, payables and the structure of the finance book. The more honest comparison is the 18.8% operating margin and the 14.5% free-cash-flow margin."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 3.9% a year across the fiscal years in the dataset, and the latest quarter changed +17.3% year over year. Third-party estimates for the current fiscal year point to $79.4B of revenue and $27.03 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 18.8% and return on invested capital of 167.5% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 18.8%, the net margin is 15.2% and diluted EPS is $25.49. The latest quarter's operating margin was 20.4%.",
      "Return on equity is 79.8%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $20.7B, an operating margin of 20.4% and a net margin of 15.9%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $11.3B, a 14.5% margin. The balance sheet carries $7.9B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $11.3B over the last twelve months and net debt was -$7.9B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 22.1x trailing earnings and 14.9x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $807.26; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "26 analysts contribute to the third-party consensus. The mean target is $807.26, with a range of $575.00 to $1,027.00.",
      "Current-year estimates call for $79.4B of revenue and $27.03 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 26 analysts with a mean target of $807.26; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Caterpillar's risks are cyclical rather than financial. The balance sheet is sound and the franchise is durable; the uncertainty is where in the cycle the current earnings sit.",
    "items": [
      {
        "title": "Construction cycle",
        "severity": "High",
        "detail": "Non-residential construction and rental-fleet replacement drive machine volumes. A slowdown hits revenue before it hits costs, and margins fall faster than sales.",
        "watch": "Dealer inventory, machine sales to end users and construction spending."
      },
      {
        "title": "Mining capital spending",
        "severity": "High",
        "detail": "Resource Industries depends on a handful of large miners approving projects. A fall in copper or iron ore prices can delay orders by years.",
        "watch": "Commodity prices, mining capital budgets and Resource Industries order intake."
      },
      {
        "title": "Dealer credit and inventories",
        "severity": "Medium",
        "detail": "Independent dealers hold the inventory and the customer credit. If they are overstocked or overextended, they stop ordering regardless of end demand.",
        "watch": "Dealer inventory months and Financial Products past dues."
      },
      {
        "title": "Input and tariff costs",
        "severity": "Medium",
        "detail": "Steel, castings and freight move faster than machine price lists. Tariffs add a cost that is hard to pass through on contracts already signed.",
        "watch": "Gross margin and the price-cost commentary in each quarter."
      },
      {
        "title": "Peak-cycle earnings",
        "severity": "Medium",
        "detail": "A 21.6x multiple on earnings that may be above mid-cycle is not the same as 21.6x on normalised earnings.",
        "watch": "The gap between current and five-year average operating margin."
      }
    ],
    "watchlist": [
      {
        "title": "Dealer inventories",
        "detail": "The clearest early warning. Rising inventory with flat retail sales precedes a production cut."
      },
      {
        "title": "Energy & Transportation orders",
        "detail": "Power generation and oil and gas demand are holding up the mix. Watch order intake by end market."
      },
      {
        "title": "Financial Products credit",
        "detail": "A captive finance arm can hide customer stress for a quarter or two. Past dues and write-offs show it first."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Caterpillar is a high-quality cyclical with a dealer network that converts machine sales into decades of parts and service revenue. The numbers show $77.8B of revenue, an 18.8% operating margin, $11.3B of free cash flow and net cash on the balance sheet. The franchise is not in question.",
      "What is in question is the cycle. Revenue grew 20.3% and the shares returned -1.1% over the same year, which is the market saying it does not believe the growth rate persists. Both views can be right: the business can be excellent and the earnings can be above normal.",
      "The reader's task is to separate the two. If mid-cycle operating margin is in the high teens, the current 20% is a peak, and the 14.5x EV/EBITDA is on peak EBITDA. If power generation demand has structurally raised the floor, the multiple is cheap. That is the argument to settle before anything else."
    ],
    "questions": [
      "How much of the recent margin expansion is price versus volume versus mix?",
      "What does dealer inventory look like relative to retail sales?",
      "How much of Energy & Transportation revenue is tied to data-centre power demand?",
      "What would operating margin be in a year when machine volumes fall 15%?"
    ]
  }
};
