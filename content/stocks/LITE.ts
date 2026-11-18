import type { StockStory } from "./types";

export const LITE: StockStory = {
  "ticker": "LITE",
  "kicker": "Photonics · Optical components",
  "title": "Lumentum's net income is not the story its lasers tell",
  "dek": "Operating income of $524.8M sits under a net income of $8.62B. The gap is a non-cash item, and the real question is whether an optical component maker can hold a 28.5% operating margin.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $3.7B trailing twelve months, +103.2% year over year.",
    "Profitability: 23.5% operating margin and 239.9% net margin.",
    "Cash: $356.3M free cash flow, a 9.5% margin.",
    "Scorecard: 53/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026057358/lite-20260627.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001633978&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Lumentum Holdings Inc. generated $3.7B of revenue over the last twelve months, +103.2% versus the prior year. Growth is tied to AI data-center spending, and the key question is how much of that spending becomes durable recurring demand.",
      "The latest reported quarter was Q1 FY27, with $1.3B of revenue and an operating margin of 28.5%. The stock closed at $559.97 on 2026-11-17, giving a market capitalization of $50.8B.",
      "The shares sit 36% of the way up their 52-week range ($229.59 to $1,143.00). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "When net margin is more than double the operating margin on a hardware business, the accountant is telling you about the balance sheet, not about the factory."
  },
  "whatItDoes": {
    "paragraphs": [
      "The datacom business is the one that matters for AI. Optical transceivers convert electrical signals to light and back, and the lasers and photonic components inside them are where Lumentum sells. As clusters grow, the number of links between accelerators rises faster than the number of accelerators, and each link needs a light source and the optics around it.",
      "The telecom business is older and cyclical. It supplies components for long-haul and metro networks, where carriers upgrade capacity in waves. The industrial laser business sells into welding, cutting, marking and medical applications, which is a slower market tied to manufacturing activity rather than to data-centre construction.",
      "The company employs 5,473 people and reports a single revenue line in the data. That is a real gap for a reader: the three end markets have different cycles, different margins and different competitors, and the consolidated number hides which one is driving the 103.2% growth."
    ],
    "bullets": [
      {
        "title": "Datacom",
        "detail": "Lasers, pump lasers and photonic components for optical transceivers in data centres. The AI-linked revenue."
      },
      {
        "title": "Telecom",
        "detail": "Components for carrier transport networks. Cyclical, tender-driven, and slower growing."
      },
      {
        "title": "Industrial and commercial lasers",
        "detail": "Lasers for manufacturing, inspection and life sciences. Tied to industrial production rather than to computing."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Lumentum sells components by the unit to transceiver makers and equipment vendors. Volumes are large and prices decline over the life of a product, so revenue growth depends on shipping more units or moving to a higher-value part before the old one commoditises. Gross margin of 45.9% reflects the manufacturing difficulty of compound semiconductor lasers, which require specialised fabs and tight process control.",
      "The cost structure is capital intensive in a way that a fabless chip company's is not. Laser fabrication needs its own equipment, clean rooms and yield learning, and that spending happens before the revenue arrives. It is why the operating margin went from negative to 28.5% so quickly: the fixed cost was already in place, and the revenue finally covered it.",
      "The gap between the 23.5% operating margin and the 9.5% free cash flow margin is the price of that structure. Capital expenditure consumes a large share of the operating profit, and inventory builds ahead of demand. A reader comparing Lumentum with a fabless designer on free cash flow conversion is comparing two different kinds of business."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 10.2% a year across the fiscal years in the dataset, and the latest quarter changed +136.5% year over year. Third-party estimates for the current fiscal year point to $6.7B of revenue and $24.94 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 23.5% and return on invested capital of 17.4% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Links per cluster",
        "detail": "Optical connections scale faster than accelerators. Each one needs a light source."
      },
      {
        "title": "Speed transitions",
        "detail": "Higher line rates need more sophisticated photonics, which raises the value of the component."
      },
      {
        "title": "Capacity and yield",
        "detail": "Laser fabrication capacity is the binding constraint. Expansion is slow and expensive."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 23.5%, the net margin is 239.9% and diluted EPS is -$89.62. The latest quarter's operating margin was 28.5%.",
      "Return on equity is 196.3%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q1 FY27: revenue of $1.3B, an operating margin of 28.5% and a net margin of 28.5%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $356.3M, a 9.5% margin. The balance sheet carries $580M of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $356.3M over the last twelve months and net debt was -$580M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 5.7x trailing earnings and 49.1x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $1,064.75; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "25 analysts contribute to the third-party consensus. The mean target is $1,064.75, with a range of $659.00 to $1,425.00.",
      "Current-year estimates call for $6.7B of revenue and $24.94 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 25 analysts with a mean target of $1.1K; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "The operating business is improving quickly. The risks are the durability of a supply-constrained margin, the capital intensity of staying at the front of the technology, and a set of reported numbers that are hard to read.",
    "items": [
      {
        "title": "Reported earnings quality",
        "severity": "High",
        "detail": "Net income of $8.62B against operating income of $524.8M, and an EPS with the opposite sign to net income. Until the composition is clear, earnings-based measures are unreliable.",
        "watch": "The reconciliation between operating income, net income and EPS in each filing."
      },
      {
        "title": "Capacity and capital intensity",
        "severity": "High",
        "detail": "Laser fabrication needs continuous investment. Free cash flow was 9.5% of revenue against a 23.5% operating margin, and the gap is capex.",
        "watch": "Capital expenditure as a share of revenue and the pace of fab expansion."
      },
      {
        "title": "Customer concentration",
        "severity": "Medium",
        "detail": "Optical components are sold to a small number of transceiver makers and equipment vendors, who pass them to a small number of hyperscalers.",
        "watch": "Revenue from the largest customers and any shift in transceiver sourcing."
      },
      {
        "title": "Margin normalisation",
        "severity": "Medium",
        "detail": "A 28.5% operating margin in a component business is high. It reflects tight supply as much as manufacturing skill.",
        "watch": "Gross margin by quarter and lead times for datacom components."
      },
      {
        "title": "Telecom and industrial drag",
        "severity": "Low",
        "detail": "The non-datacom businesses are cyclical and slower growing. They dilute the growth rate and can hide a datacom slowdown.",
        "watch": "The revenue split between datacom, telecom and industrial lasers."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "The only margin in the reported numbers that reflects the business rather than the balance sheet."
      },
      {
        "title": "Capital expenditure",
        "detail": "The difference between a good year and a cash-consuming one in this industry."
      },
      {
        "title": "EPS reconciliation",
        "detail": "Net income and EPS cannot keep pointing in opposite directions without an explanation."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Lumentum is an optical component maker that has just completed a genuine turnaround: operating income moved from negative $434.0M in FY2024 to positive $524.8M in FY2026, and the latest quarter reached a 28.5% operating margin on $1.26B of revenue. That is the business story, and it is a good one.",
      "The reported net income of $8.62B is not part of that story. It is the kind of figure that makes a screen show a 5.4x P/E and a reader conclude the shares are cheap. The educational point is that a multiple is only as good as the earnings in the denominator, and a net margin of 239.9% is a signal to go and read the reconciliation rather than a signal to buy.",
      "What is not known is the size and nature of the non-operating gain, why diluted EPS is negative when net income is positive, and how much of the current margin depends on a supply shortage. The AI build-out is a real source of demand for optical components; it does not resolve any of those three questions."
    ],
    "questions": [
      "What produced the $8.1B difference between operating income and net income?",
      "Why is diluted EPS negative when net income is positive?",
      "How much of the 28.5% operating margin comes from tight supply rather than manufacturing advantage?",
      "What capital expenditure is required to keep the datacom capacity at the current growth rate?"
    ]
  }
};
