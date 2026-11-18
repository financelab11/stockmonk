import type { StockStory } from "./types";

export const QBTS: StockStory = {
  "ticker": "QBTS",
  "kicker": "Quantum · Computer Hardware",
  "title": "One large system sale can decide D-Wave's entire year",
  "dek": "Trailing revenue fell 44.2% because a single $15.0M quarter dropped out of the comparison window, not because demand collapsed. Gross margin is 64.2%, the operating loss is wide, and net cash is $511.2M.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $12.4M trailing twelve months, -44.2% year over year.",
    "Profitability: -1372.9% operating margin and -2001.6% net margin.",
    "Cash: -$119.1M free cash flow, a -958.4% margin.",
    "Scorecard: 32/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1907982/000190798226000026/qbts-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001907982&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "D-Wave Quantum Inc. generated $12.4M of revenue over the last twelve months, -44.2% versus the prior year. The investment case is a long-duration option on a technology that has not yet reached commercial scale.",
      "The latest reported quarter was Q2 FY26, with $3.1M of revenue and an operating margin of -1732.1%. The stock closed at $8.08 on 2026-11-17, giving a market capitalization of $3.1B.",
      "The shares sit 1% of the way up their 52-week range ($7.92 to $32.39). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "The revenue line here is not a demand curve. It is a delivery schedule, and a single order can move it by more than the entire annual run-rate."
  },
  "whatItDoes": {
    "paragraphs": [
      "There are three things for sale. The first is a quantum system, sold outright to a customer that wants the hardware on its own premises. The second is time on a hosted machine through Leap, sold as a subscription or consumption. The third is the software and services layer: Ocean for developers, and Launch for enterprises that need help framing a problem before they can buy anything.",
      "The commercial logic is that annealing hardware suits a narrow class of problems and needs a software wrapper to be usable. A logistics planner does not want to write quantum circuits; the company wants a scheduling answer that beats the current approach. Selling the tooling and the professional help is therefore part of the product, not an add-on.",
      "There is one reported revenue line and no segment split, so the mix between system sales, subscription and services is not visible in the statements. Given how much the quarterly revenue moves, that mix is exactly what a reader would want to know."
    ],
    "bullets": [
      {
        "title": "System sales",
        "detail": "Outright hardware. Rare, large, and decisive for any given quarter."
      },
      {
        "title": "Leap cloud access",
        "detail": "Recurring access to a live machine, hybrid solvers and developer tools."
      },
      {
        "title": "Launch services",
        "detail": "Paid work to move a customer from problem discovery to a production application."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Gross margin is 64.2%, well above the other listed quantum hardware companies. That is what a revenue mix weighted toward software subscriptions, cloud access and services looks like, rather than a mix driven by shipping machines with refrigeration and control electronics attached. It is the strongest evidence in the filing that some of this revenue is repeatable and software-like.",
      "The problem is scale. A 64.2% gross margin on $12.4M of revenue leaves a modest gross profit before the cost of running a quantum hardware programme. The operating loss was $100.4M in FY2025, so gross profit covers a small fraction of the engineering, fabrication and administrative base.",
      "The reported interest cover of -658.6x should not be read as a debt problem. The ratio is negative because operating earnings are negative, which makes the calculation meaningless. The relevant fact is that the company holds $511.2M of net cash and its interest bill is not what threatens the business."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 36.7% a year across the fiscal years in the dataset, and the latest quarter changed -0.6% year over year. Third-party estimates for the current fiscal year point to $37.3M of revenue and -$0.31 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of -1372.9% and return on invested capital of -23.6% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -1372.9%, the net margin is -2001.6% and diluted EPS is -$0.69. The latest quarter's operating margin was -1732.1%.",
      "Return on equity is -23.0%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY26: revenue of $3.1M, an operating margin of -1732.1% and a net margin of -1561.4%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$119.1M, a -958.4% margin. The balance sheet carries $511.2M of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was -$119.1M over the last twelve months and net debt was -$511.2M; interest cover was -658.6x."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $23.72; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "17 analysts contribute to the third-party consensus. The mean target is $23.72, with a range of $10.88 to $35.00.",
      "Current-year estimates call for $37.3M of revenue and -$0.31 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 17 analysts with a mean target of $23.72; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "The risk in D-Wave is not that the technology is uninteresting. It is that the commercial market may stay small enough that the cash pile, not the product, is what keeps the company listed.",
    "items": [
      {
        "title": "Revenue concentration",
        "severity": "High",
        "detail": "One order produced $15.0M in Q1 FY2025; the following five quarters averaged about $3M. A single delayed contract can remove most of a year's growth.",
        "watch": "System delivery announcements, backlog, and the split between recurring and one-off revenue."
      },
      {
        "title": "Commercial adoption of annealing",
        "severity": "High",
        "detail": "Annealing solves a narrower class of problems than a general gate-model machine. If buyers cannot show a production benefit, pilots do not renew.",
        "watch": "Repeat customers, conversion from Launch engagements to paid production work, and published results."
      },
      {
        "title": "Cash consumption",
        "severity": "High",
        "detail": "Free cash flow is -$119.1M on a trailing basis. The $511.2M of net cash is finite and the operating business does not yet contribute to it.",
        "watch": "Quarterly cash used in operations and any increase in capital spending on hardware."
      },
      {
        "title": "Dilution",
        "severity": "Medium",
        "detail": "Losses are funded from the balance sheet, and a future raise would be struck at whatever price the market offers at the time.",
        "watch": "Share count and any new issuance or shelf registration."
      },
      {
        "title": "Competing architectures",
        "severity": "Medium",
        "detail": "Trapped-ion and superconducting gate-model machines attract more research attention. A decisive result elsewhere would weaken the case for annealing.",
        "watch": "Independent benchmarks and how customers describe the problems they actually run."
      },
      {
        "title": "Reporting opacity",
        "severity": "Medium",
        "detail": "With one consolidated revenue line, a reader cannot separate recurring cloud revenue from a one-off machine sale. The quality of growth is hidden.",
        "watch": "Any new segment or revenue-type disclosure in the annual report."
      }
    ],
    "watchlist": [
      {
        "title": "Quarterly revenue pattern",
        "detail": "A run of quarters near $3M with no large delivery tells a very different story from a return to $15M quarters."
      },
      {
        "title": "Gross margin",
        "detail": "At 64.2% it is the best evidence of software-like revenue. Watch whether it holds as hardware sales mix in."
      },
      {
        "title": "Cash and share count",
        "detail": "The pair determines how long the option runs and what each holder owns at the end of it."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "D-Wave is an annealing quantum company with $12.4M of trailing revenue, a 64.2% gross margin, a -1372.9% operating margin and $511.2M of net cash. The trailing revenue decline is a window effect from one large quarter, not a collapse in demand; the underlying recurring base is roughly $3M a quarter.",
      "The gross margin is the most encouraging number in the file, because it suggests that if volume arrives, the incremental economics could be good. The revenue pattern is the least encouraging, because it shows how little of the business is repeatable today.",
      "The honest position is that this is a funded research programme with a commercial option. The cash buys several years. Whether those years produce a market is not something the financial statements can answer yet."
    ],
    "questions": [
      "What proportion of the $12.4M is recurring Leap subscription rather than system sales?",
      "How many Launch engagements have converted into production deployments?",
      "Does the 64.2% gross margin hold when a large hardware order is delivered?",
      "How many years of spending does $511.2M cover at the current burn?"
    ]
  }
};
