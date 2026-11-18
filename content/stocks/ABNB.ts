import type { StockStory } from "./types";

export const ABNB: StockStory = {
  "ticker": "ABNB",
  "kicker": "Travel · Short-term rental marketplace",
  "title": "Airbnb is a two-sided marketplace with a summer-shaped year",
  "dek": "Guests pay, hosts supply the rooms, and Airbnb keeps a fee on both sides. The model is asset-light and highly seasonal, which makes the summer quarter carry the annual result.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $13.9B trailing twelve months, +16.7% year over year.",
    "Profitability: 22.5% operating margin and 30.6% net margin.",
    "Cash: n/a free cash flow, a n/a margin.",
    "Scorecard: 40/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1559720/000155972026000004/abnb-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001559720&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Airbnb, Inc. generated $13.9B of revenue over the last twelve months, +16.7% versus the prior year. The business depends on traffic, basket size and the cost of serving the next customer.",
      "The latest reported quarter was Q3 FY26, with $4.9B of revenue and an operating margin of 41.5%. The stock closed at $180.94 on 2026-11-17, giving a market capitalization of $108B.",
      "The shares sit 81% of the way up their 52-week range ($110.81 to $197.87). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "The platform's profit is the gap between what a guest pays and what a host receives. Everything about the business — trust, supply density, regulation — affects the size of that gap or the number of times it is charged."
  },
  "whatItDoes": {
    "paragraphs": [
      "Supply is the product. A guest chooses a destination and a date, and the platform has to show enough credible options that the guest books rather than opening a hotel site. Density in a city is therefore the thing that makes the marketplace work: more listings improve the odds of a match, and more bookings attract more hosts.",
      "Demand is leisure-led, with a meaningful share of longer stays and family or group travel where a whole home beats several hotel rooms. The guest segment matters for the economics: a group splitting a house is less price-sensitive than a business traveller on an expense account, but also more exposed to a consumer slowdown.",
      "The company also sells experiences and services alongside stays, and hosts pay for additional tools. Those are smaller lines, but they matter strategically because they increase the revenue per booking without adding a night of accommodation."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is a percentage of the value of the booking, not the value itself. That single sentence explains most of the financial statements: a $1,000 stay might produce a few hundred dollars of revenue, so the company's top line grows with nights booked and with average daily rates, and it is unaffected by the cost of the room.",
      "The cost of revenue is mostly payment processing, customer support and the technology to run the platform. Everything else — engineering, marketing, administration — is largely fixed in the short run. That is why an 83.1% gross margin turns into a 22.5% operating margin rather than a much higher one: the fixed costs are big, and they do not shrink when bookings fall.",
      "Seasonality is the defining feature of the income statement. Operating margin was 19.8% in Q2 FY25, 39.7% in Q3 FY25 and 9.7% in Q4 FY25, then 3.2% in Q1 FY26, 21.0% in Q2 FY26 and 41.5% in Q3 FY26. The fixed cost base is spread over a demand curve that peaks in the northern summer, so a single quarter's margin tells you more about the calendar than about the business."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 16.9% a year across the fiscal years in the dataset, and the latest quarter changed +18.9% year over year. Third-party estimates for the current fiscal year point to $14.4B of revenue and $5.58 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 22.5% and return on invested capital of 23.8% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 22.5%, the net margin is 30.6% and diluted EPS is $1.47. The latest quarter's operating margin was 41.5%.",
      "Return on equity is 45.7%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $4.9B, an operating margin of 41.5% and a net margin of 38.8%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was n/a, a n/a margin. The balance sheet carries $10.2B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was n/a over the last twelve months and net debt was -$10.2B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 25.4x trailing earnings and 38.2x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $205.44; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "39 analysts contribute to the third-party consensus. The mean target is $205.44, with a range of $147.00 to $245.00.",
      "Current-year estimates call for $14.4B of revenue and $5.58 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 39 analysts with a mean target of $205.44; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Airbnb's risks are external. The financial model is strong and the balance sheet has net cash, so the threats come from regulators, competitors and the travel cycle rather than from the capital structure.",
    "items": [
      {
        "title": "Short-term rental regulation",
        "severity": "High",
        "detail": "Cities and countries can cap nights, require permits or ban certain listings. Each rule reduces bookable supply in that market and can spread to others.",
        "watch": "Registration requirements in the largest cities and the number of active listings there."
      },
      {
        "title": "Travel demand cyclicality",
        "severity": "High",
        "detail": "Leisure travel is discretionary. A consumer slowdown reduces nights booked, and because costs are fixed, it hits the operating margin harder than revenue.",
        "watch": "Nights and gross booking value growth, especially in the off-season quarters."
      },
      {
        "title": "Competition for supply and guests",
        "severity": "Medium",
        "detail": "Hotels, online travel agencies and other rental platforms compete for the same trip. Discounting or higher host incentives would lower the take rate.",
        "watch": "Take rate, marketing spend as a share of revenue and host churn."
      },
      {
        "title": "Trust and safety incidents",
        "severity": "Medium",
        "detail": "A serious incident in a listing damages the brand in a way that advertising cannot repair. The platform's quality controls matter more than its growth rate in that moment.",
        "watch": "Verification policies, insurance coverage and any change in guest refunds."
      },
      {
        "title": "Margin dependency on fixed costs",
        "severity": "Medium",
        "detail": "The 22.5% operating margin exists because fixed costs are spread across a large booking base. If growth stalls, the same costs produce a much thinner margin.",
        "watch": "Operating margin in the seasonally weak quarters, not only in the summer."
      }
    ],
    "watchlist": [
      {
        "title": "Nights and average daily rate",
        "detail": "Volume and price move the top line separately. A rising rate with falling nights is a different business from the reverse."
      },
      {
        "title": "Take rate",
        "detail": "Revenue as a share of booking value. A falling take rate means the platform is paying to keep either guests or hosts."
      },
      {
        "title": "Cash conversion",
        "detail": "The dataset omits free cash flow, so the filing's cash-flow statement is the place to check how much of the operating profit becomes cash."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Airbnb is an asset-light marketplace with a genuinely global supply base, a high gross margin and a seasonal profit pattern. Trailing revenue is $13.9B, operating margin is 22.5% and the balance sheet holds $10.2B of net cash.",
      "The educational point is the difference between gross margin and operating margin in a platform business. An 83.1% gross margin sounds like a software company, but the fixed costs of engineering, marketing and support are what turn it into a 22.5% operating margin. In the weakest quarter of the year, that same cost base produces 3.2%.",
      "The open questions are about durability rather than solvency: whether regulation shrinks the addressable market, whether the take rate holds as competition intensifies, and whether a 43x EBITDA multiple can survive a year of slower bookings."
    ],
    "questions": [
      "How much of revenue growth comes from nights booked rather than from higher nightly rates?",
      "What share of listings sits in cities with active restrictions on short-term rentals?",
      "Why does net margin exceed operating margin, and is that source of income repeatable?",
      "What does the summer quarter's margin look like after stock-based compensation?"
    ]
  }
};
