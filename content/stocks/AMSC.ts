import type { StockStory } from "./types";

export const AMSC: StockStory = {
  "ticker": "AMSC",
  "kicker": "Grid equipment · Wind and power systems",
  "title": "AMSC's 8.4x earnings multiple is a one-off in disguise",
  "dek": "Operating margin is 5.2% and net margin is 38.6%, because a single quarter carried a gain the business did not earn. Revenue has nearly tripled, but the return on capital has not.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $349M trailing twelve months, +31.1% year over year.",
    "Profitability: 5.2% operating margin and 38.6% net margin.",
    "Cash: $15.4M free cash flow, a 4.4% margin.",
    "Scorecard: 58/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/880807/000143774926018542/amsc20260331_10k.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000880807&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "AMERICAN SUPERCONDUCTOR CORP /DE/ generated $349M of revenue over the last twelve months, +31.1% versus the prior year. Growth is tied to AI data-center spending, and the key question is how much of that spending becomes durable recurring demand.",
      "The latest reported quarter was Q2 FY27, with $94M of revenue and an operating margin of 5.7%. The stock closed at $22.16 on 2026-11-17, giving a market capitalization of $1.1B.",
      "The shares sit 2% of the way up their 52-week range ($21.47 to $60.18). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A small equipment company with a lumpy order book will occasionally book a quarter that does not resemble the business. The published multiple cannot tell the difference between that quarter and a year of ordinary trading."
  },
  "whatItDoes": {
    "paragraphs": [
      "The Grid segment sells systems that stabilise electricity networks. A transmission operator with a weak or congested line can install a voltage compensator rather than build a new line, and a utility integrating wind or solar needs equipment that holds frequency and voltage steady as the generation mix changes. The same technology is used on ships for power protection.",
      "The Wind segment sells the electrical control package inside a turbine: the converters, controls and software that let a variable-speed machine connect to the grid. Much of this business is licensed to manufacturers in Asia and Europe, which means revenue depends on those manufacturers' production volumes and on the terms of the licences.",
      "The two segments share an engineering base in power electronics. That is the strategic logic: the same people who design a grid compensator can design a turbine converter, and the same customers, utilities and large industrial users, buy both. It is a sensible structure for a company of this size, and it also means the revenue is concentrated in a small number of projects."
    ],
    "bullets": [
      {
        "title": "Grid",
        "detail": "Voltage compensation, switchgear, grid-forming inverters and control systems for transmission and distribution networks."
      },
      {
        "title": "Wind",
        "detail": "Electrical control systems and licences for wind turbine manufacturers. Revenue follows turbine production volumes."
      },
      {
        "title": "Scale",
        "detail": "225 employees and a few large orders. A single project can move a year's revenue by a meaningful percentage."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue comes from selling engineered equipment on a project basis, plus licence and royalty income from the wind business. Gross margin of 28.0% is the spread between the contract price and the cost of power electronics, magnetics, enclosures and assembly. It is a reasonable margin for equipment, and it is not high enough to absorb much overhead.",
      "The overhead is what keeps the operating margin at 5.2%. A 28.0% gross margin leaves 22.8 points to cover engineering, sales, administration and the cost of supporting a global installed base. At $349.0M of revenue, that is roughly $80M of operating expense, and a company with 225 employees and a technical product can consume that easily.",
      "The operating leverage is therefore the thing to watch. Revenue nearly tripled from FY2023 to FY2026, and operating income went from negative $33.0M to positive $11.4M. That is a swing of $44M on $193M of additional revenue, which implies the incremental business carries a high margin. If revenue keeps growing, the operating margin should follow; if it stalls, the expense base is heavy relative to the gross profit."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 29.4% a year across the fiscal years in the dataset, and the latest quarter changed +42.8% year over year. Third-party estimates for the current fiscal year point to $367.8M of revenue and $0.79 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 5.2% and return on invested capital of 3.5% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 5.2%, the net margin is 38.6% and diluted EPS is $2.92. The latest quarter's operating margin was 5.7%.",
      "Return on equity is 23.2%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY27: revenue of $94M, an operating margin of 5.7% and a net margin of 3.2%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $15.4M, a 4.4% margin. The balance sheet carries $169.9M of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $15.4M over the last twelve months and net debt was -$169.9M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 8.0x trailing earnings and 32.9x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $50.75; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "4 analysts contribute to the third-party consensus. The mean target is $50.75, with a range of $48.00 to $54.00.",
      "Current-year estimates call for $367.8M of revenue and $0.79 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 4 analysts with a mean target of $50.75; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "AMSC's risks are a thin operating margin, a concentrated order book and a reported profit that flatters the underlying business.",
    "items": [
      {
        "title": "Thin operating margin",
        "severity": "High",
        "detail": "A 5.2% operating margin leaves little room for a project overrun, a price concession or an expense increase. Return on invested capital of 3.5% is below the cost of capital.",
        "watch": "Gross margin by quarter and operating expense growth relative to revenue."
      },
      {
        "title": "Order concentration",
        "severity": "High",
        "detail": "A small number of large grid and wind projects can dominate a year. A delay moves revenue across periods.",
        "watch": "Backlog disclosure and the size of the largest orders."
      },
      {
        "title": "Reported earnings quality",
        "severity": "High",
        "detail": "Net margin of 38.6% against an operating margin of 5.2% means reported profit is dominated by a one-off item. The P/E is not comparable across periods.",
        "watch": "The reconciliation between operating income and net income in each filing."
      },
      {
        "title": "Wind licence dependence",
        "severity": "Medium",
        "detail": "The wind business depends on the production volumes and solvency of a small number of turbine manufacturers, several in markets with their own policy risk.",
        "watch": "Licence revenue and the concentration of wind customers."
      },
      {
        "title": "Grid project timing",
        "severity": "Medium",
        "detail": "Utility transmission projects are planned years in advance and can be deferred by regulatory decisions or budget cycles.",
        "watch": "Utility capital spending plans and the award timing of large grid projects."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "The only measure that shows whether the revenue growth is turning into a viable business."
      },
      {
        "title": "One-off items",
        "detail": "Until the gain is out of the trailing figures, every earnings multiple will overstate the business."
      },
      {
        "title": "Backlog",
        "detail": "For a company with a lumpy order book and 225 employees, the pipeline is the forecast."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "American Superconductor sells grid stability equipment and wind turbine control systems. Revenue is $349.0M, up 31.1%, operating margin is 5.2%, free cash flow is $15.4M and net cash is $169.9M. It has just turned profitable at the operating line after four years of losses.",
      "The educational point is that net margin and operating margin answer different questions, and the gap between them is a diagnostic. When net margin is seven times operating margin, the business is not what produced the profit. That does not make the company bad; it makes the trailing multiple useless, and a reader who does not check will misprice it.",
      "What is not known is how much of the FY2026 net income was the one-off gain, how concentrated the order book is, and whether the operating margin can expand enough to earn a return above the cost of capital. The AI build-out adds load growth that supports grid investment, but AMSC sells to utilities and project developers, and their spending follows its own cycle."
    ],
    "questions": [
      "What exactly produced the $117.8M of net income in the third quarter?",
      "How concentrated is revenue among the largest grid and wind customers?",
      "What operating margin is needed to earn a return above the cost of capital?",
      "How much of the backlog is firm orders rather than framework agreements?"
    ]
  }
};
