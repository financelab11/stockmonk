import type { StockStory } from "./types";

export const CRM: StockStory = {
  "ticker": "CRM",
  "kicker": "Software · Enterprise applications",
  "title": "Salesforce has learned to make money; now it has to grow again",
  "dek": "Operating income went from $548.0M to $8.33B in four years while revenue grew 11.2%. The next leg depends on selling more products to the customers it already has, at a price those customers will accept.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $43.9B trailing twelve months, +11.2% year over year.",
    "Profitability: 19.9% operating margin and 22.0% net margin.",
    "Cash: $15.2B free cash flow, a 34.5% margin.",
    "Scorecard: 61/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001108524&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "SALESFORCE COM INC. generated $43.9B of revenue over the last twelve months, +11.2% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q2 FY27, with $11.3B of revenue and an operating margin of 20.5%. The stock closed at $194.52 on 2026-11-17, giving a market capitalization of $160.1B.",
      "The shares sit 39% of the way up their 52-week range ($146.32 to $269.11). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "The question is no longer whether Salesforce can be profitable. It is whether a per-seat pricing model can grow when its customers are trying to reduce the number of seats."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core products are organised by function. Sales Cloud tracks leads, opportunities and forecasts. Service Cloud handles customer support tickets and field service. Marketing Cloud runs campaigns and customer journeys. Commerce Cloud runs online stores. Each is sold separately and priced per user per month, so a customer's bill rises with headcount and with the number of modules it adopts.",
      "Around that core sit the acquired pieces. Slack provides messaging and collaboration, Tableau provides analytics, and MuleSoft connects the platform to a customer's other systems. Data Cloud is the layer that unifies customer records so the AI features have something to work with. These products are sold into the same accounts, which is why cross-selling is the central growth assumption.",
      "Customers are large enterprises and, increasingly, mid-sized companies. A single contract often covers thousands of seats and runs for one to three years, with renewal negotiations that can move revenue by more than a new logo does. The company employed 56,606 people, a large sales and support organisation relative to the revenue base."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is subscription fees recognised over the contract term. Gross margin is 77.3%, lower than a pure software vendor's because Salesforce pays for hosting, support and the services that help customers implement the platform. That gross margin is the pool from which sales and marketing, research and administration are funded, leaving 19.9% at the operating line.",
      "The unit economics depend on the cost of acquiring a customer relative to the subscription it generates. Enterprise software sales are expensive: a large deal may take a year to close and require solution engineers, legal review and a proof of concept. Once the customer is live, the renewal is much cheaper to win, which is why the installed base is the most valuable asset.",
      "Cash collection runs ahead of revenue recognition because many customers pay annually in advance. That is why free cash flow of $15.15B is well above net income. The gap is not a problem, but it does mean that cash flow growth can look better than the underlying business in a year when bookings are strong and worse when they slow."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 15.9% a year across the fiscal years in the dataset, and the latest quarter changed +10.8% year over year. Third-party estimates for the current fiscal year point to $46.3B of revenue and $16.75 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 19.9% and return on invested capital of 10.8% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 19.9%, the net margin is 22.0% and diluted EPS is $10.97. The latest quarter's operating margin was 20.5%.",
      "Return on equity is 16.3%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY27: revenue of $11.3B, an operating margin of 20.5% and a net margin of 31.1%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $15.2B, a 34.5% margin. Net debt is $4.9B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $15.2B over the last twelve months and net debt was $4.9B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 16.6x trailing earnings and 13.0x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $287.08; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "53 analysts contribute to the third-party consensus. The mean target is $287.08, with a range of $165.00 to $475.00.",
      "Current-year estimates call for $46.3B of revenue and $16.75 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 53 analysts with a mean target of $287.08; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Salesforce's risks are competitive and structural. The balance sheet is strong and the cash flow is real; the uncertainty is whether per-seat pricing survives a period in which customers are trying to buy fewer seats.",
    "items": [
      {
        "title": "Seat-based pricing under pressure",
        "severity": "High",
        "detail": "If AI tools reduce headcount in sales and service teams, the per-user model shrinks with it. The company has to replace seats with consumption or platform fees.",
        "watch": "Revenue per customer and management commentary on pricing model changes."
      },
      {
        "title": "Competition from platform bundlers",
        "severity": "High",
        "detail": "Large cloud vendors can bundle customer software into existing enterprise agreements, which makes standalone purchase harder to justify.",
        "watch": "Win rates in large deals and the growth rate of the core clouds."
      },
      {
        "title": "Integration of acquired products",
        "severity": "Medium",
        "detail": "Slack, Tableau and MuleSoft were bought at large premiums. If they grow slowly or are written down, the returns on those deals deteriorate.",
        "watch": "Goodwill balances, segment disclosure and cross-sell metrics."
      },
      {
        "title": "Margin plateau",
        "severity": "Medium",
        "detail": "Operating margin has stayed in a narrow band for six quarters. Further expansion needs revenue growth, not more cost cuts.",
        "watch": "Operating margin against revenue growth each quarter."
      },
      {
        "title": "AI spending without revenue",
        "severity": "Low",
        "detail": "Building and running AI features raises hosting costs before it raises prices. Gross margin of 77.3% is the line where that shows up.",
        "watch": "Gross margin and the cost of revenue relative to subscription revenue."
      }
    ],
    "watchlist": [
      {
        "title": "Current remaining performance obligation",
        "detail": "Contracted revenue not yet recognised is the best forward indicator for a subscription business."
      },
      {
        "title": "Operating margin",
        "detail": "20% is the level the company fought to reach. Holding it while growing is the test."
      },
      {
        "title": "Free cash flow conversion",
        "detail": "Track free cash flow against operating income to see how much is collections timing."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Salesforce is a large, profitable subscription business with a strong balance sheet and a high free-cash-flow yield. The transformation from growth-at-all-costs to margin discipline is complete, and the financial statements show it clearly.",
      "What is not settled is the next phase. Revenue growth of 11.2% is respectable but decelerating, and the pricing model is built on seats in a market that is trying to use fewer of them. The consensus assumes revenue keeps growing and earnings per share do not, which is an unusual combination that a reader should interrogate.",
      "The stock is not priced for perfection. At 13.0x free cash flow, the market is already assuming slower growth. The question is whether it is assuming too much decline."
    ],
    "questions": [
      "Is revenue growth coming from new customers, cross-sell or price?",
      "How much of the installed base is on multi-year contracts with renewal pricing already fixed?",
      "Why does the consensus expect EPS to fall next year while revenue grows?",
      "What would a 5% decline in seat counts do to subscription revenue?"
    ]
  }
};
