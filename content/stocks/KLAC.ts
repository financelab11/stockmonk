import type { StockStory } from "./types";

export const KLAC: StockStory = {
  "ticker": "KLAC",
  "kicker": "Semiconductors · Process control and metrology",
  "title": "KLA sells the measurement that decides whether a wafer is worth keeping",
  "dek": "A 90% gross margin from a hardware company comes from selling optics and algorithms, and from the cost of a bad wafer lot.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $14.5B trailing twelve months, +15.8% year over year.",
    "Profitability: 42.2% operating margin and 36.2% net margin.",
    "Cash: $4B free cash flow, a 27.8% margin.",
    "Scorecard: 57/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000027/klac-20260630.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000319201&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "KLA TENCOR CORP. generated $14.5B of revenue over the last twelve months, +15.8% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q1 FY27, with $4.1B of revenue and an operating margin of 44.1%. The stock closed at $144.56 on 2026-11-17, giving a market capitalization of $188.4B.",
      "The shares sit 19% of the way up their 52-week range ($107.20 to $307.37). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Inspection is sold on avoided loss rather than on throughput. That is why the price of a KLA tool is only loosely connected to the cost of building it."
  },
  "whatItDoes": {
    "paragraphs": [
      "The portfolio has three parts. Inspection systems look for defects — particles, scratches, pattern errors — across a wafer. Metrology systems measure critical dimensions, film thickness and overlay, which is how precisely one layer aligns with the next. E-beam review zooms in on a defect that optical inspection has flagged.",
      "Customers are the logic and memory fabs, and to a lesser extent the equipment makers who need to characterise their own processes. The buying decision is made by process engineers, and it is tied to a specific node and a specific step, which makes the sale technical and the qualification slow.",
      "The software layer matters more than the revenue it produces. The value of an inspection tool depends on how quickly its output can be turned into a decision about a process, and that is a data and algorithms problem as much as an optics problem."
    ],
    "bullets": [
      {
        "title": "Inspection",
        "detail": "Optical systems that find defects across the wafer. The largest product line and the closest thing to a toll booth in the portfolio."
      },
      {
        "title": "Metrology",
        "detail": "Measurement of dimensions, films and overlay. Sold on the same process steps as inspection."
      },
      {
        "title": "Service",
        "detail": "Spares, upgrades and field service on an installed base that grows with every node transition."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Gross margin of 90.0% is not a normal hardware margin, and it is worth understanding why. The tool is an optical system plus a computing system plus the algorithms that interpret what the optics see. The materials cost is a small fraction of the price; the value comes from precision and from the cost of the mistake the tool prevents.",
      "Operating margin of 42.2% leaves roughly 48 points of gross profit for research, field support and administration. That is a much heavier cost ratio than Lam or Applied Materials carry, because KLA funds a large research organization relative to a smaller revenue base. The result is a 42% operating margin on 90% gross margin rather than a 40% operating margin on 51%.",
      "Pricing power comes from qualification. Once a fab has built a process around a particular inspection recipe, changing the tool means requalifying the process, which is expensive and risky. That is why incumbency in process control is worth more than incumbency in a tool that only moves wafers."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 15.2% a year across the fiscal years in the dataset, and the latest quarter changed +28.9% year over year. Third-party estimates for the current fiscal year point to $18.9B of revenue and $5.77 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 42.2% and return on invested capital of 64.4% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 42.2%, the net margin is 36.2% and diluted EPS is -$3.62. The latest quarter's operating margin was 44.1%.",
      "Return on equity is 80.6%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q1 FY27: revenue of $4.1B, an operating margin of 44.1% and a net margin of 37.4%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $4B, a 27.8% margin. Net debt is $982.1M.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $4B over the last twelve months and net debt was $982.1M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 35.8x trailing earnings and 29.1x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $219.62; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "26 analysts contribute to the third-party consensus. The mean target is $219.62, with a range of $175.00 to $275.00.",
      "Current-year estimates call for $18.9B of revenue and $5.77 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 26 analysts with a mean target of $219.62; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "KLA's risks are competitive and cyclical. Its balance sheet is close to pristine, so the uncertainty is about pricing power and order timing rather than solvency.",
    "items": [
      {
        "title": "Process-control competition",
        "severity": "High",
        "detail": "A 90% gross margin invites competition. A rival that qualifies an inspection step can take a franchise that lasts for years.",
        "watch": "Gross margin and share of process-control spending at leading-edge nodes."
      },
      {
        "title": "Customer capital budgets",
        "severity": "High",
        "detail": "A small number of fabs decide when inspection tools are bought. A delayed node ramp delays the revenue with it.",
        "watch": "Bookings and the split between logic, memory and foundry."
      },
      {
        "title": "Cyclicality of the installed base",
        "severity": "Medium",
        "detail": "Service revenue cushions a downturn, but upgrades are discretionary and are cut first.",
        "watch": "Service revenue growth compared with tool revenue."
      },
      {
        "title": "Export controls",
        "severity": "Medium",
        "detail": "Restrictions on advanced equipment sales can remove demand from specific regions.",
        "watch": "License changes and the geographic revenue split."
      },
      {
        "title": "Earnings quality",
        "severity": "Medium",
        "detail": "The per-share line has swung by tens of dollars between quarters while net income stayed positive, so headline EPS is misleading.",
        "watch": "Net income and free cash flow rather than diluted EPS."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "The single number that justifies the sales multiple. Any sustained move below 90% changes the valuation arithmetic."
      },
      {
        "title": "Bookings",
        "detail": "The leading indicator for revenue that arrives several quarters later."
      },
      {
        "title": "Cash conversion",
        "detail": "Free cash flow has tracked net income closely. Watch whether that continues through the next ramp."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "KLA is the process-control specialist of the semiconductor equipment industry, with a 90.0% gross margin, a 42.2% operating margin and $4.04B of free cash flow. Revenue of $14.51B is up 15.8% and the latest quarter grew 28.9%.",
      "The investment question is whether a 90% gross margin is a durable feature of the industry or a temporary consequence of being the qualified supplier at the leading edge. Twelve and a half times sales says the market believes the first. Eight neutral ratings out of 26 suggest the analysts are less sure.",
      "The educational point is that gross margin is where competitive advantage shows up first. For a company selling machines, a 90% gross margin is an assertion that the customer is buying the result, not the hardware."
    ],
    "questions": [
      "How much of the gross margin comes from service and software rather than tools?",
      "What share of revenue depends on the leading-edge logic customers?",
      "Why does the diluted EPS line swing so far between quarters?",
      "How much inspection content does each new node add?"
    ]
  }
};
