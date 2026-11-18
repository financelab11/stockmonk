import type { StockStory } from "./types";

export const UBER: StockStory = {
  "ticker": "UBER",
  "kicker": "Mobility · Ride-hailing and delivery platform",
  "title": "Uber keeps a slice of every trip, and the slice is getting thinner",
  "dek": "Revenue is the commission Uber retains after paying drivers and couriers, not the value of the rides. That distinction explains the 43.2% gross margin, the 12.4% operating margin and why free cash flow is larger than net income.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $56.5B trailing twelve months, +13.9% year over year.",
    "Profitability: 12.4% operating margin and 6.2% net margin.",
    "Cash: $10.4B free cash flow, a 18.4% margin.",
    "Scorecard: 36/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001543151&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Uber Technologies, Inc. generated $56.5B of revenue over the last twelve months, +13.9% versus the prior year. The business depends on traffic, basket size and the cost of serving the next customer.",
      "The latest reported quarter was Q3 FY26, with $14.8B of revenue and an operating margin of 9.8%. The stock closed at $68.81 on 2026-11-17, giving a market capitalization of $140.5B.",
      "The shares sit 17% of the way up their 52-week range ($64.04 to $92.92). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A platform's revenue is a fee, so a growing top line can mean either more trips or a higher fee. Separating the two is the whole analysis."
  },
  "whatItDoes": {
    "paragraphs": [
      "Ride-hailing is the original product and still the one that defines the brand. A rider opens the app, a nearby driver accepts, and the platform sets the price. Density is the engine: more riders per square kilometre shorten pick-up times, which makes drivers more productive per hour, which lowers the price the platform needs to charge to attract riders.",
      "Delivery works differently. The customer orders from a restaurant, a courier collects and delivers, and the platform takes a commission from the restaurant and a fee from the customer. The economics are thinner than ride-hailing because the order value is smaller and the delivery cost is a larger share of it. It is also more labour-intensive per dollar of revenue.",
      "Freight is a brokerage business that matches shippers with carriers. It is cyclical, capital-light and lower-margin, and it sits in Other Bets alongside the newer mobility products. The newer products are options on future platforms rather than current profit centres."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue per trip is the take rate. Uber sets the fare, pays the driver, and keeps the difference; on delivery it takes a commission from the restaurant and charges the customer a delivery and service fee. The take rate is the single most important variable in the model because the platform's costs — engineering, sales, support, insurance administration — do not scale with the number of trips in the same way.",
      "The cost structure has three layers. Direct costs include driver and courier payments, insurance and payment processing. Operating costs include product development, sales and marketing, and general administration. Below that sit interest and taxes. When trips grow faster than the middle layer, the operating margin expands; when the company invests in a new category, it contracts.",
      "Insurance is the cost that outsiders underestimate. Ride-hailing platforms carry commercial coverage for the trips on their network, and claims inflation raises the cost per mile regardless of the fare. That is one reason the operating margin moved from 14.6% in Q1 FY26 to 9.8% in Q3 FY26 even as revenue grew."
    ],
    "bullets": [
      {
        "title": "Mobility",
        "detail": "Ride commissions. The highest-margin part of the platform because the driver supplies the vehicle and the fuel."
      },
      {
        "title": "Delivery",
        "detail": "Restaurant commissions plus customer fees. More orders but a lower margin per dollar of revenue."
      },
      {
        "title": "Freight",
        "detail": "Brokerage margin between shipper and carrier. Cyclical and sensitive to freight rates."
      }
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 26.0% a year across the fiscal years in the dataset, and the latest quarter changed +9.6% year over year. Third-party estimates for the current fiscal year point to $57.8B of revenue and $2.59 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 12.4% and return on invested capital of 11.5% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 12.4%, the net margin is 6.2% and diluted EPS is $1.71. The latest quarter's operating margin was 9.8%.",
      "Return on equity is 12.0%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $14.8B, an operating margin of 9.8% and a net margin of 3.5%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $10.4B, a 18.4% margin. Net debt is $19.3B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $10.4B over the last twelve months and net debt was $19.3B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 40.3x trailing earnings and 20.5x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $98.23; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "45 analysts contribute to the third-party consensus. The mean target is $98.23, with a range of $70.00 to $150.00.",
      "Current-year estimates call for $57.8B of revenue and $2.59 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 45 analysts with a mean target of $98.23; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Uber's biggest risks are legal and competitive rather than financial. The company generates cash and carries debt at 2.5x EBITDA; what it does not control is how its drivers are classified or who owns the next transport platform.",
    "items": [
      {
        "title": "Driver classification",
        "severity": "High",
        "detail": "If regulators or courts require drivers to be employees, the cost structure changes fundamentally: benefits, minimum hours and payroll taxes would move onto the platform.",
        "watch": "Court rulings and legislation in large markets, and any change to driver pay structures."
      },
      {
        "title": "Insurance and claims inflation",
        "severity": "High",
        "detail": "Commercial coverage for trips is a large cost that rises with claims trends. It cannot be passed to riders immediately without losing volume.",
        "watch": "Cost per trip, insurance reserves and the share of trips covered by the platform."
      },
      {
        "title": "Autonomous vehicles",
        "severity": "Medium",
        "detail": "If robotaxis scale, the value of a human-driver network falls. Uber can partner with operators, but the margin and the moat would both change.",
        "watch": "Autonomous partnerships, pilot markets and the economics quoted per mile."
      },
      {
        "title": "Competition and take rate",
        "severity": "Medium",
        "detail": "Rival apps can subsidise riders and drivers. Fighting for share means lower fees or higher incentives, both of which reduce revenue per trip.",
        "watch": "Take rate, rider discounts and driver incentives as a share of bookings."
      },
      {
        "title": "Freight and Other Bets",
        "severity": "Low",
        "detail": "The smaller segments are cyclical and can absorb investment without contributing profit. They dilute the platform margin without adding much revenue today.",
        "watch": "Segment profitability and any change in disclosure."
      }
    ],
    "watchlist": [
      {
        "title": "Trips and take rate",
        "detail": "Trip growth shows demand; the take rate shows pricing power. A rising take rate with slowing trips is a warning."
      },
      {
        "title": "Operating margin",
        "detail": "The cleanest measure of the platform, because it excludes the below-the-line items that flatter net income."
      },
      {
        "title": "Free cash flow quality",
        "detail": "Compare free cash flow with net income and check how much of the gap is stock-based compensation rather than working capital."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Uber is a platform that has crossed from losses to profit. Revenue of $56.5B, operating income of $5.57B in fiscal 2025 and free cash flow of $10.4B are the evidence. It did that without owning vehicles or employing most of the people who do the work.",
      "The educational point is the difference between bookings and revenue. Because Uber reports only its commission, the revenue line is small relative to the activity on the platform, and the gross margin reflects driver pay rather than the cost of a product. A reader who compares Uber's revenue with a logistics company's revenue is comparing two different things.",
      "The open questions are whether the take rate holds against competition, whether the legal model survives, and whether free cash flow of $10.4B is a durable figure or an artefact of add-backs. Those three answers decide whether 13.4x cash flow is cheap or 40.2x earnings is expensive."
    ],
    "questions": [
      "How much of free cash flow comes from stock-based compensation add-backs?",
      "Is the take rate rising because of pricing power or because of higher rider fees?",
      "What would employee classification cost per trip in the largest markets?",
      "Which segment is carrying the growth, and at what margin?"
    ]
  }
};
