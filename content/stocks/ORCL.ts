import type { StockStory } from "./types";

export const ORCL: StockStory = {
  "ticker": "ORCL",
  "kicker": "Technology · Enterprise software and cloud infrastructure",
  "title": "Oracle is trading a software multiple for a data-center balance sheet",
  "dek": "Revenue is accelerating while free cash flow is deeply negative. This report explains why those two facts belong in the same paragraph.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $71.8B trailing twelve months, +21.6% year over year.",
    "Profitability: 32.1% operating margin and 26.4% net margin.",
    "Cash: -$28.7B free cash flow, a -40.0% margin.",
    "Scorecard: 45/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1341439/000119312526277521/orcl-20260531.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001341439&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "ORACLE CORP. generated $71.8B of revenue over the last twelve months, +21.6% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q1 FY27, with $19.3B of revenue and an operating margin of 34.8%. The stock closed at $115.00 on 2026-11-17, giving a market capitalization of $358.5B.",
      "The shares sit 4% of the way up their 52-week range ($109.21 to $250.25). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "The question is not whether Oracle can sign cloud contracts. It is whether the capital required to serve them earns more than that capital costs."
  },
  "whatItDoes": {
    "paragraphs": [
      "Oracle reports as one operating company, so the consolidated revenue line is what the tables show. Behind it sit three businesses. The first is the database and middleware franchise: licenses, support and maintenance on software that runs payroll, supply chains and transaction systems at very large organizations.",
      "The second is applications — finance, human resources, supply chain and industry suites for large enterprises, plus a mid-market accounting and planning product. The third is cloud infrastructure, where Oracle rents compute, storage and database services, including capacity aimed at artificial-intelligence training and inference.",
      "The parts have different economics. Support renewals on existing licenses arrive with very little incremental cost. Cloud infrastructure requires Oracle to buy servers, networking and data-center capacity before a customer pays for any of it. The company employs 135,000 people, and the mix between the three parts decides whether the consolidated margin holds."
    ],
    "bullets": [
      {
        "title": "Database and support",
        "detail": "License and support revenue on software already installed at large enterprises. High margin, slow growth, very sticky."
      },
      {
        "title": "Applications",
        "detail": "Enterprise resource planning, human capital and industry suites, plus a mid-market product. Sold on subscription."
      },
      {
        "title": "Cloud infrastructure",
        "detail": "Rented compute and database services, including capacity for AI workloads. Capital-hungry and priced against hyperscale competitors."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Support contracts are the engine of the historical margin. A customer running Oracle databases pays an annual fee to keep them patched, supported and licensed, and the cost of providing that is small relative to the fee. That is why gross margin has held at 64.0% even as lower-margin hardware and cloud capacity have grown.",
      "Cloud infrastructure inverts the model. Oracle builds capacity first — land, power, servers, networking — and rents it afterwards. Revenue from a new region arrives after depreciation has started. The 32.1% operating margin is therefore a blend of a very high-margin annuity and a capital-intensive rental business, and the blend moves as the second grows faster than the first.",
      "The unit economics to watch are revenue per dollar of capital spent and the depreciation life assigned to the equipment. A long useful life flatters near-term margins and moves the cost into later years, which is why the accounting policy note matters as much as the growth rate."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 9.5% a year across the fiscal years in the dataset, and the latest quarter changed +29.6% year over year. Third-party estimates for the current fiscal year point to $90.5B of revenue and $8.15 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 32.1% and return on invested capital of 11.7% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "AI capacity",
        "detail": "Large blocks of GPU and CPU capacity contracted by AI developers and model builders."
      },
      {
        "title": "Database migration",
        "detail": "Moving existing on-premise workloads into Oracle's cloud protects the customer relationship but changes the margin."
      },
      {
        "title": "Application attach",
        "detail": "Selling finance, HR and industry suites into a database customer base that already trusts the vendor."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 32.1%, the net margin is 26.4% and diluted EPS is $6.38. The latest quarter's operating margin was 34.8%.",
      "Return on equity is 28.2%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q1 FY27: revenue of $19.3B, an operating margin of 34.8% and a net margin of 24.6%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$28.7B, a -40.0% margin. Net debt is $88.3B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was -$28.7B over the last twelve months and net debt was $88.3B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 19.0x trailing earnings and 13.8x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $236.18; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "40 analysts contribute to the third-party consensus. The mean target is $236.18, with a range of $110.00 to $400.00.",
      "Current-year estimates call for $90.5B of revenue and $8.15 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 40 analysts with a mean target of $236.18; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Oracle's risks concentrate where the balance sheet has changed: capital spending, leverage, and the customers behind the new capacity.",
    "items": [
      {
        "title": "Capital intensity",
        "severity": "High",
        "detail": "Cloud growth consumes cash before it produces it. If billed revenue lags the build, free cash flow stays negative for longer than planned.",
        "watch": "Capital spending, free cash flow, and the gap between the two."
      },
      {
        "title": "Leverage",
        "severity": "High",
        "detail": "Net debt of $88.26B is 2.7x EBITDA. Refinancing costs and covenants matter more when operating cash flow is under pressure.",
        "watch": "Net debt to EBITDA, interest expense and the maturity schedule."
      },
      {
        "title": "Customer concentration",
        "severity": "High",
        "detail": "A small number of very large cloud buyers can swing revenue and pricing. Losing one contract would be visible immediately.",
        "watch": "Concentration disclosures and contracted but unbilled backlog."
      },
      {
        "title": "Hyperscale competition",
        "severity": "Medium",
        "detail": "The largest cloud providers sell equivalent compute and database services and can cut price faster than Oracle can cut its capital budget.",
        "watch": "Cloud revenue growth measured against growth in capital spending."
      },
      {
        "title": "Installed-base migration",
        "severity": "Medium",
        "detail": "The on-premise database base is the profit pool. Moving it to Oracle's cloud keeps the customer but changes the margin on that relationship.",
        "watch": "Support revenue trend compared with cloud revenue."
      }
    ],
    "watchlist": [
      {
        "title": "Free cash flow",
        "detail": "The single number that decides whether the build is working: how close it gets to zero, and when."
      },
      {
        "title": "Cloud revenue versus capital spending",
        "detail": "Compare the change in each over the same period. Revenue should eventually outrun the spending that produced it."
      },
      {
        "title": "Net debt to EBITDA",
        "detail": "Watch for leverage rising while free cash flow is still negative."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Oracle is a high-margin software annuity with a capital-intensive cloud business attached. Revenue growth has accelerated to 21.6% on a trailing basis and 29.6% in the latest quarter, and the operating margin has expanded to 34.8%.",
      "What the numbers do not settle is whether the new capacity earns an adequate return. Free cash flow of -$28.72B, net debt of $88.26B and a return on invested capital of 11.7% say that question is still open. The consensus expects $90.45B this year and $131.82B next, which is a large bet on delivery.",
      "The educational point is that a low P/E is not automatically cheap when the business has changed shape. For a company funding growth with debt, both P/E and EV/EBITDA flatter the picture until capital spending is subtracted."
    ],
    "questions": [
      "How much of the new cloud capacity is contracted before it is built?",
      "What depreciation life is applied to the servers and data-center equipment?",
      "How much of the $88.26B net debt refinances within two years?",
      "Does support revenue hold up as customers migrate to the cloud?"
    ]
  }
};
