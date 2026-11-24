import type { StockStory } from "./types";

export const VST: StockStory = {
  "ticker": "VST",
  "kicker": "Utilities · Competitive retail and generation",
  "title": "Vistra sells the same electron twice",
  "dek": "It runs 39,000 megawatts of generation and supplies 4.3 million retail customers. Owning both the plant and the customer means it can earn a margin on the wholesale sale and another on the retail contract.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $19B trailing twelve months, +18.6% year over year.",
    "Profitability: 18.8% operating margin and 11.7% net margin.",
    "Cash: $2.3B free cash flow, a 11.9% margin.",
    "factor summary: 45/100 average percentile across the factor set."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000006/vistra-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001692819&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Vistra Corp. generated $19B of revenue over the last twelve months, +18.6% versus the prior year. Returns depend on regulated rates, capital investment and the cost of financing the asset base.",
      "The latest reported quarter was Q2 FY26, with $4.4B of revenue and an operating margin of 12.6%. The stock closed at $123.87 on Nov 23, 2026, giving a market capitalization of $42B.",
      "The shares sit 18% of the way up their 52-week range ($110.89 to $182.56). The analysis uses reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "VST is a Utilities business with $19B of trailing revenue. The useful question is what the current margin and growth rate imply about the next few years, not whether the last quarter beat a forecast."
  },
  "whatItDoes": {
    "paragraphs": [
      "The generation fleet is dispatched into wholesale markets. Gas plants set the price at the margin in most hours, nuclear and renewables run baseload, and batteries shift energy from cheap hours to expensive ones. Each asset earns the clearing price minus its own fuel and operating cost.",
      "The retail business signs contracts with households and businesses, often at a fixed price per kilowatt-hour for twelve or twenty-four months. It then has to supply that load, either from its own plants or by buying in the market. Marketing, billing and customer service sit underneath, and the brand competes on price, service and the range of plans, including more than fifty renewable options.",
      "The fleet also includes a large battery storage project under construction in California, sized at 400 megawatts and 1,600 megawatt-hours. Storage earns money by charging when power is cheap and discharging when it is expensive, which makes it a trading asset as much as a generation asset."
    ],
    "bullets": [
      {
        "title": "Retail supply",
        "detail": "Fixed-price electricity and gas contracts for 4.3 million customers. Revenue is the tariff, cost is the wholesale supply."
      },
      {
        "title": "Generation",
        "detail": "39,000 megawatts sold into wholesale markets. Revenue is the clearing price, cost is fuel plus fixed operating expense."
      },
      {
        "title": "Storage and renewables",
        "detail": "Batteries and contracted renewable purchases that shift energy across hours and support the retail plans."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "There are two margins, and they behave differently. The retail margin is the price on the customer's contract minus the cost of supplying that customer. It is stable while the contract runs, because the price is fixed, but it is only stable if the supply is hedged. An unhedged retailer in a price spike can lose more in a month than it earned in a year.",
      "The generation margin is the wholesale price minus fuel and fixed cost. Gas plants have a fuel cost that moves with the gas market, so their margin is a spread between power and gas rather than a price level. Nuclear plants have almost no fuel cost, so their margin is close to the power price itself.",
      "Putting the two together, Vistra can supply its retail book from its own fleet and capture both margins on the same megawatt-hour. That is the logic of the integrated model, and it is also its limitation: the company is only as good as its hedging, because a mismatch between contracted load and available generation turns the whole thing back into a price bet.",
      "The gross margin of 53.9% against an operating margin of 18.8% shows how much sits between the two lines. Fuel, purchased power and retail operating costs are large, and the fixed cost of the fleet is large. What is left is thin relative to revenue and very sensitive to the spread."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 8.7% a year across the fiscal years in the dataset, and the latest quarter changed +17.3% year over year. Third-party estimates for the current fiscal year point to $22.3B of revenue and $9.19 of EPS.",
      "growth matters when it produces a return on capital. The operating margin of 18.8% and return on invested capital of 11.2% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Rate base growth",
        "detail": "Approved capital investment earns a regulated return over time."
      },
      {
        "title": "Load growth",
        "detail": "Data centers and electrification can raise long-run demand."
      },
      {
        "title": "Cost recovery",
        "detail": "Rate cases determine whether higher costs are passed through."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 18.8%, the net margin is 11.7% and diluted EPS is $5.92. The latest quarter's operating margin was 12.6%. The quarter shown is the latest reported period in the dataset.",
      "Return on equity is 40.5%. Capital intensity should be measured against the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin."
    ]
  },
  "cash": {
    "paragraphs": [
      "The cash statement over the trailing period was $2.3B, a 11.9% margin. Net debt is $19.2B. The cash figures are trailing twelve-month values unless the section says otherwise.",
      "cash conversion connects earnings to distributable cash and the capital returned to owners. Net income has outrun free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 18.9x trailing earnings and 11.3x EV/EBITDA. The valuation reflects the growth and margin record described above, not for the past alone.",
      "The attributed third-party mean target is $197.18; that is a consensus figure, not a Stockmonk price target. The peer comparison sets out the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "23 analysts contribute to the third-party consensus. The mean target is $197.18, with a range of $106.00 to $270.00. The consensus is a third-party snapshot and can change without notice.",
      "Current-year estimates call for $22.3B of revenue and $9.19 of EPS. Third-party estimates can change without notice; they are shown for context, not as a recommendation."
    ]
  },
  "risks": {
    "intro": "Vistra's risks sit at the intersection of commodity prices, contract hedging and a leveraged balance sheet. The assets are good; the question is what happens when the hedges and the market disagree.",
    "items": [
      {
        "title": "Wholesale power prices",
        "severity": "High",
        "detail": "Generation margin is a price spread. A fall in clearing prices reduces it directly, and the retail book only partly offsets it.",
        "watch": "Realised power price, open position disclosure and forward price curves in each market."
      },
      {
        "title": "Hedging and position risk",
        "severity": "High",
        "detail": "A retailer that has sold fixed-price contracts and not bought enough power is short the market. The loss years in FY2021 and FY2022 show what a mismatch can do.",
        "watch": "Hedge ratios, mark-to-market on derivatives and the maturity of the hedging book."
      },
      {
        "title": "Leverage",
        "severity": "Medium",
        "detail": "Net debt of $19.2B at 3.5x EBITDA leaves limited room for a repeat of a cash-negative year without asset sales or equity issuance.",
        "watch": "Net debt to EBITDA, maturity schedule and credit rating."
      },
      {
        "title": "Weather",
        "severity": "Medium",
        "detail": "Heating and cooling demand drive volumes and prices at the same time, so a mild season hits revenue and margin together.",
        "watch": "Degree days against normal, and weather-normalised retail volumes."
      },
      {
        "title": "Market design and regulation",
        "severity": "Medium",
        "detail": "Capacity markets, bid caps and state policies determine how generators are paid for being available, not just for producing.",
        "watch": "Capacity auction results and state-level market reform proposals."
      }
    ],
    "watchlist": [
      {
        "title": "Retail gross margin per customer",
        "detail": "Shows whether the retail book is earning a real spread or just passing power through."
      },
      {
        "title": "Hedge position",
        "detail": "The single most important disclosure for understanding how much of next year is already locked in."
      },
      {
        "title": "Free cash flow after capex",
        "detail": "The measure that determines whether the buyback and the dividend are funded from operations."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Vistra is an integrated competitive power business with a large fleet, a large retail book and a leveraged balance sheet. Revenue of $19.0B, an 18.8% operating margin and $2.25B of free cash flow describe a business that works when the hedges and the market agree.",
      "The five-year record shows how much can go wrong and right inside that model. Two loss years followed by three profitable ones, with the same assets in place, is the clearest possible illustration that the earnings are a function of price and position rather than of operational quality.",
      "The 11.3x EV/EBITDA multiple is the market's attempt to price that uncertainty. Whether it is enough depends on how much of the fleet's output is contracted and at what price, which is disclosed but rarely read."
    ],
    "questions": [
      "What share of next year's expected generation is hedged, and at what price?",
      "How much of the retail book is fixed-price, and how is it supplied?",
      "What happens to free cash flow in a repeat of FY2022?",
      "Is the battery storage pipeline earning a contract-like return or taking merchant risk?"
    ]
  },
  "narrativeSource": "auto-curated",
  "narrativeUpdatedAt": "2026-11-24"
};
