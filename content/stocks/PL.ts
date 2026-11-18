import type { StockStory } from "./types";

export const PL: StockStory = {
  "ticker": "PL",
  "kicker": "Space · Earth-observation data",
  "title": "Planet Labs sells pictures of the Earth by subscription",
  "dek": "Gross margin of 55.4% and positive free cash flow sit above a -27.2% operating margin, while net income swings enough to make the 71.3x P/E misleading.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $378.3M trailing twelve months, +44.1% year over year.",
    "Profitability: -27.2% operating margin and -15.6% net margin.",
    "Cash: $24.7M free cash flow, a 6.5% margin.",
    "Scorecard: 54/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1836833/000119312526119957/pl-20260131.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001836833&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Planet Labs PBC generated $378.3M of revenue over the last twelve months, +44.1% versus the prior year. The business depends on contract wins, launch execution and the path from backlog to cash flow.",
      "The latest reported quarter was Q2 FY27, with $116.1M of revenue and an operating margin of -11.6%. The stock closed at $12.49 on 2026-11-17, giving a market capitalization of $4.5B.",
      "The shares sit 5% of the way up their 52-week range ($10.52 to $51.76). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ]
  },
  "whatItDoes": {
    "paragraphs": [
      "The company designs, builds and launches its own satellites, then delivers imagery through a cloud platform that handles processing, harmonisation and analysis. Customers buy either a subscription to a region and cadence or a licence to a data set, and increasingly they buy the analytics layered on top.",
      "The customer list is broad by design. Agriculture uses the data to track crop health, mapping and forestry use it for land classification, insurers use it to assess damage, and governments use it for monitoring and defence. Breadth protects the company from any single industry's budget cycle, but it also means selling to many buyers with different needs."
    ],
    "bullets": [
      {
        "title": "Constellation",
        "detail": "Small satellites built in-house and replaced on a cycle. Coverage frequency is the product differentiator."
      },
      {
        "title": "Data platform",
        "detail": "Cloud delivery, processing and harmonisation. This is where imagery becomes a usable time series."
      },
      {
        "title": "Analytics",
        "detail": "Derived products for agriculture, insurance and government that carry higher margin than raw pixels."
      },
      {
        "title": "Customers",
        "detail": "Agribusiness, mapping, forestry, finance and insurance, plus federal, state and local government."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is mostly subscription and licence based. A customer pays for access to a defined area at a defined revisit rate, or for a archive of imagery, and renews if the data keeps answering a question they care about. Renewal is the whole game: acquiring a new agriculture or government account costs more than keeping one.",
      "The cost structure has two layers. The first is the constellation: building, launching and operating satellites, which is capital spending followed by depreciation. The second is the go-to-market organisation: solution engineers, salespeople and support staff who translate imagery into a workflow a customer will pay for. The second layer is why a 55.4% gross margin becomes a -27.2% operating margin.",
      "Incremental revenue is valuable once the constellation exists. The same image can be licensed to an agribusiness and a reinsurer without additional manufacturing cost, so each additional customer improves the margin. The constraint is capacity: satellites have finite downlink and imaging time, and coverage promises have to be met before they can be sold."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 21.5% a year across the fiscal years in the dataset, and the latest quarter changed +58.1% year over year. Third-party estimates for the current fiscal year point to $437.7M of revenue and -$0.06 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of -27.2% and return on invested capital of n/a are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -27.2%, the net margin is -15.6% and diluted EPS is -$1.11. The latest quarter's operating margin was -11.6%.",
      "Return on equity is -31.2%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY27: revenue of $116.1M, an operating margin of -11.6% and a net margin of -8.1%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $24.7M, a 6.5% margin. The balance sheet carries $640.1M of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $24.7M over the last twelve months and net debt was -$640.1M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $30.27; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "11 analysts contribute to the third-party consensus. The mean target is $30.27, with a range of $17.00 to $50.00.",
      "Current-year estimates call for $437.7M of revenue and -$0.06 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 11 analysts with a mean target of $30.27; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Planet Labs has the balance sheet and the gross margin of a viable data business. The risks are the cost of staying in orbit, the concentration of large contracts and the quality of a cash-flow improvement that has only one year behind it.",
    "items": [
      {
        "title": "Satellite replenishment",
        "severity": "High",
        "detail": "Subscriptions promise a revisit rate. If launches fail or replacement satellites are delayed, the coverage promise weakens and renewals follow.",
        "watch": "Launch schedule, satellites in orbit and capital spending on the constellation."
      },
      {
        "title": "Government customer concentration",
        "severity": "High",
        "detail": "Large defence and civil contracts can dominate a quarter, and budget timing decides when revenue is recognised.",
        "watch": "Contract mix, backlog and the share of revenue from the largest customers."
      },
      {
        "title": "Cash-flow quality",
        "severity": "Medium",
        "detail": "The swing to positive free cash flow coincided with a $95.1M operating loss. Working capital can reverse.",
        "watch": "Operating cash flow excluding working-capital changes, and receivables."
      },
      {
        "title": "Price competition",
        "severity": "Medium",
        "detail": "More imaging capacity is being launched by others, and free or cheap imagery competes for the low end of the market.",
        "watch": "Average revenue per customer and gross margin trends."
      },
      {
        "title": "Net income volatility",
        "severity": "Low",
        "detail": "Non-operating items have moved net income by more than $100M between quarters, which distorts per-share measures.",
        "watch": "The reconciliation between operating income and net income each quarter."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "The path from -27.2% toward break-even is the core of the equity story."
      },
      {
        "title": "Gross margin",
        "detail": "At 55.4%, it is the company's main structural advantage and should be defended."
      },
      {
        "title": "Renewal and expansion",
        "detail": "Subscription businesses live or die on whether existing customers spend more each year."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Planet Labs has built a differentiated data asset, the best gross margin in this peer group and a balance sheet with $640.1M of net cash. It has not yet converted that into operating profit: the trailing operating margin is -27.2%.",
      "The educational point is that three multiples can disagree because they measure different things. Sales are stable, earnings are volatile and free cash flow has just crossed zero. Reading all three prevents a single number from doing too much work.",
      "What is not known is whether the FY2026 cash improvement repeats, how much of growth is new customers versus expansion, and what replacing the constellation costs over a full cycle."
    ],
    "questions": [
      "How much of the $57.6M FY2026 free cash flow came from working capital?",
      "What is the annual cost of keeping the constellation at its promised coverage?",
      "How concentrated is revenue among the largest government customers?",
      "Does the 58.1% latest-quarter growth repeat in the following quarter?"
    ]
  }
};
