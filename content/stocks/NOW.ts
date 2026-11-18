import type { StockStory } from "./types";

export const NOW: StockStory = {
  "ticker": "NOW",
  "kicker": "Technology · Enterprise workflow software",
  "title": "ServiceNow's cash flow and its earnings describe two different companies",
  "dek": "The platform converts 30.8% of revenue into free cash flow and reports a 9.7% operating margin. Both numbers are real, and the gap between them is the point.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $15.4B trailing twelve months, +21.8% year over year.",
    "Profitability: 9.7% operating margin and 9.4% net margin.",
    "Cash: $4.8B free cash flow, a 30.8% margin.",
    "Scorecard: 38/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1373715/000137371526000007/now-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001373715&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "ServiceNow, Inc. generated $15.4B of revenue over the last twelve months, +21.8% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q3 FY26, with $4.1B of revenue and an operating margin of 9.4%. The stock closed at $92.90 on 2026-11-17, giving a market capitalization of $96.4B.",
      "The shares sit 12% of the way up their 52-week range ($81.24 to $175.00). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A seat-based software company is a bet on the customer's headcount. Every AI product it sells is an attempt to need fewer seats per customer."
  },
  "whatItDoes": {
    "paragraphs": [
      "The platform is organized by department rather than by product. Technology workflows cover IT service management and operations. Customer workflows cover service and field operations. Employee workflows cover HR delivery and onboarding. Security and risk workflows cover incident response and compliance. A creator layer lets customers build their own applications on the same data model.",
      "Customers are large enterprises, governments and, increasingly, mid-sized companies. Deals usually start in one department and expand as other teams adopt the platform, which is why the company talks about expansion within accounts rather than new logos.",
      "The company employs 13,096 people. Most of them are in sales, customer success and research, and that mix explains why the operating margin is thin while the gross margin is high: the cost of acquiring and expanding accounts sits in operating expenses, not in cost of revenue."
    ],
    "bullets": [
      {
        "title": "Technology workflows",
        "detail": "IT service management and operations. The entry point for most customers and still the largest part of the base."
      },
      {
        "title": "Customer and employee workflows",
        "detail": "Service cases, field operations, HR delivery and onboarding. The expansion story inside existing accounts."
      },
      {
        "title": "Creator and platform",
        "detail": "Tools for customers to build their own applications on the same data model. Raises the cost of leaving."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is subscription, priced mostly per user with tiered packages. It is recognized rateably over the contract, so a large deal signed in December produces revenue over the following years rather than in the quarter it is signed. That is why billings and remaining performance obligations matter more than the income statement to anyone trying to forecast the next year.",
      "Gross margin of 73.1% covers hosting, support and the delivery organization. Everything else — sales commissions, marketing, research and stock-based compensation — sits below that line. The 9.7% operating margin is what remains after all of it.",
      "Free cash flow is 30.8% of revenue, and the gap to operating margin is mostly stock-based compensation, which is a real cost to shareholders but not a cash cost to the business, plus the timing benefit of collecting subscription fees in advance. Deferred revenue is a source of funding that grows with the business, and it flatters cash flow in exactly the years when growth is fastest."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 25.1% a year across the fiscal years in the dataset, and the latest quarter changed +20.5% year over year. Third-party estimates for the current fiscal year point to $16.2B of revenue and $3.95 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 9.7% and return on invested capital of 7.4% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Account expansion",
        "detail": "Selling another department the same platform is cheaper than winning a new customer and carries a higher margin."
      },
      {
        "title": "International",
        "detail": "Revenue outside North America has grown faster than the base, from a smaller starting point."
      },
      {
        "title": "AI products",
        "detail": "Priced as add-ons to existing subscriptions. The open question is whether they expand the contract or replace seats inside it."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 9.7%, the net margin is 9.4% and diluted EPS is $1.39. The latest quarter's operating margin was 9.4%.",
      "Return on equity is 11.0%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $4.1B, an operating margin of 9.4% and a net margin of 6.7%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $4.8B, a 30.8% margin. Net debt is $2.9B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $4.8B over the last twelve months and net debt was $2.9B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 66.7x trailing earnings and 36.0x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $155.82; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "46 analysts contribute to the third-party consensus. The mean target is $155.82, with a range of $72.00 to $266.00.",
      "Current-year estimates call for $16.2B of revenue and $3.95 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 46 analysts with a mean target of $155.82; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "ServiceNow's risks are about pricing model and growth duration. The balance sheet and the cash flow are strong enough that solvency is not the question.",
    "items": [
      {
        "title": "Seat-based pricing",
        "severity": "High",
        "detail": "Revenue is priced largely per user. If AI reduces the number of people a customer needs, seat growth slows even if usage rises.",
        "watch": "Revenue per customer and the mix of subscription types disclosed in the filing."
      },
      {
        "title": "Growth duration",
        "severity": "High",
        "detail": "A 7.0x sales multiple assumes the 20% growth rate persists. Deceleration to the mid-teens would change the arithmetic quickly.",
        "watch": "Remaining performance obligations and the growth rate of large deals."
      },
      {
        "title": "Stock-based compensation",
        "severity": "Medium",
        "detail": "It is a large part of the gap between cash flow and earnings, and it transfers value from existing holders to employees.",
        "watch": "Share count growth and the ratio of stock-based compensation to revenue."
      },
      {
        "title": "Competition from suites",
        "severity": "Medium",
        "detail": "Large platform vendors can bundle adjacent workflow products into contracts the customer has already signed.",
        "watch": "Win rates in new departments and average contract value."
      },
      {
        "title": "Large-deal concentration",
        "severity": "Medium",
        "detail": "A small number of very large contracts carry a disproportionate share of growth, and their timing moves the quarter.",
        "watch": "The count of large deals and the change in remaining performance obligations."
      }
    ],
    "watchlist": [
      {
        "title": "Free cash flow",
        "detail": "The 30.8% margin is the number that supports the valuation. Watch whether it holds as growth slows."
      },
      {
        "title": "Remaining performance obligations",
        "detail": "Contracted revenue not yet recognized. It is the best available read on the next four quarters."
      },
      {
        "title": "Operating margin",
        "detail": "The path from 9.7% upward is the bridge between the two valuation multiples."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "ServiceNow is a workflow platform with a 73.1% gross margin, a 30.8% free-cash-flow margin and revenue growing at 21.8% on a $15.43B base. Very few software companies sustain that combination at this size.",
      "The financial statements are harder to read than the business. Stock-based compensation and deferred revenue push free cash flow far above reported profit, which is why the P/E and the P/FCF tell different stories. Neither is wrong, and neither is sufficient.",
      "The educational point is that the gap between earnings and cash flow is not automatically a red flag or a hidden asset. It is a question about which costs are cash costs and which are transfers of ownership, and the answer changes the multiple you should use."
    ],
    "questions": [
      "How much of the free-cash-flow margin comes from deferred revenue growth?",
      "Does AI expand the contract or reduce the number of seats billed?",
      "What share of revenue growth comes from existing customers rather than new ones?",
      "How fast is the share count growing through stock-based compensation?"
    ]
  }
};
