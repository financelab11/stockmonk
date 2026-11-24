import type { StockStory } from "./types";

export const UBER: StockStory = {
  "ticker": "UBER",
  "kicker": "Mobility · Ride-hailing and delivery platform",
  "title": "Uber keeps a slice of every trip, and the slice is getting thinner",
  "dek": "Revenue is the commission Uber retains after paying drivers and couriers, not the value of the rides. That distinction explains the 43.2% gross margin, the 12.4% operating margin and why free cash flow is larger than net income.",
  "readingMinutes": 9,
  "takeaways": [
    "Third-quarter 2026 revenue rose to $14.8B from $13.5B, but the operating margin fell to 9.8% from 14.6% in Q1 fiscal 2026.",
    "Mobility is 57.0% of revenue, Delivery 33.2% and Freight 9.8%, so the consolidated margin is a blend of three different take rates.",
    "Trailing free cash flow is $10.4B, an 18.4% margin, against net income of $3.4B; the gap is the central question for the equity.",
    "At 12.7x free cash flow and 38.2x earnings, the shares are priced for cash conversion rather than for accounting profit."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000015/uber-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001543151&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Uber reported third-quarter 2026 revenue of $14.8B, up from $13.5B a year earlier, with a 9.8% operating margin, a 3.5% net margin and $0.25 of diluted EPS. Revenue grew, but the operating margin was 14.6% in Q1 fiscal 2026 and 13.3% in Q2, so the trend through the year is down. The result matters because the company is still growing revenue while the profit margin is being squeezed by costs it does not fully control.",
      "The platform keeps a slice of each transaction. Mobility is 57.0% of revenue and carries the highest margin because the driver supplies the vehicle and fuel; Delivery is 33.2% and is more labour-intensive per dollar; Freight is 9.8% and is a cyclical brokerage. The United States is 45.7% of revenue, other countries 33.9% and the United Kingdom 20.4%. Insurance and driver classification are the two costs that can change the model without changing demand.",
      "The price is a wager on cash flow, not earnings. At $65 the shares carry 38.2x trailing earnings, 17.7x EV/EBITDA, 2.4x sales and 12.7x free cash flow, with a 7.9% free-cash-flow yield. The shares have ranged from $63 to $93 in the past year and are 22.6% lower over a year. Net debt is $5.6B at 0.7x EBITDA. The P/FCF multiple is less than a third of the P/E, which is the whole argument: the market is paying for cash, not for GAAP earnings."
    ],
    "quote": "Uber's free cash flow is nearly three times its net income, which is either the best thing about the stock or the accounting question that defines it."
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
      "The platform's revenue base has grown from $37.3B in fiscal 2023 to $44.0B, $52.0B and a trailing $56.5B, with the latest quarter at $14.8B. Consensus, carried by Yahoo Finance on 18 November 2026, looks for $57.8B in fiscal 2026 and $67.0B in fiscal 2027, growth of 11.1% and 15.9%. The deceleration in 2026 followed by reacceleration in 2027 is unusual, and it implies the newer categories start contributing more in the second year.",
      "Mobility is 57.0% of revenue, Delivery 33.2% and Freight 9.8%. Mobility is the profit engine; Delivery adds volume at a lower margin; Freight is cyclical and sensitive to shipping rates. The company does not report gross bookings or take rate, so the revenue growth cannot be decomposed into volume and price. What is visible is that revenue grew 13.9% trailing while the operating margin fell, which means costs grew faster than revenue.",
      "EPS falls to $2.59 in fiscal 2026, down 45.2%, then $4.41 in fiscal 2027, up 70.3%. A swing that large is not an operating forecast; it reflects items below the operating line and a low base. Revenue growth of 11.1% then 15.9% is the more useful guide. The durability question is the take rate: if competition or regulation forces Uber to keep less of each trip, the revenue line and the margin fall together."
    ],
    "bullets": [
      {
        "title": "Take rate",
        "detail": "Uber books its commission, not the fare. A lower take rate reduces revenue and operating profit at the same time, which is why it is the first variable to watch."
      },
      {
        "title": "Insurance",
        "detail": "Commercial coverage for trips is a large cost that rises with claims inflation. It cannot be passed to riders immediately without losing volume."
      },
      {
        "title": "Autonomous vehicles",
        "detail": "If robotaxis scale, the value of a human-driver network falls. Uber can partner with operators, but the margin and the moat would both change."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Operating margin is 12.4% trailing and net margin 6.1%, two measures that tell different stories. Gross margin is not reported, which is normal for a platform that books commissions rather than fares. In fiscal 2025 the operating margin was 10.7% and the net margin 19.3%; the net figure was inflated by items below the operating line, which is why the operating margin is the better comparison. Third-quarter 2026 operating margin was 9.8% and net margin 3.5%. The 6.3-point gap between the trailing operating and net margins is wider than it looks, because the trailing net margin is depressed by the latest quarter.",
      "The quarterly operating margin has fallen from 14.6% in Q1 fiscal 2026 to 13.3% in Q2 and 9.8% in Q3. Revenue rose from $13.2B to $14.2B to $14.8B over those quarters, so the decline is cost, not demand. Insurance and investment in new categories are the likely candidates, but they are not split. The 4.8-point drop over two quarters is large enough to change the earnings base.",
      "Returns are modest for a platform. Return on invested capital is 12.1% against a 24.6% peer median, and return on equity is 12.5%. The company does not own the vehicles or employ most of the drivers, so the capital base is small; the low ROIC reflects the cost of insurance, support and technology rather than heavy assets. The comparison with Shopify, at a 12.8% ROIC, is closer than the revenue models suggest."
    ]
  },
  "cash": {
    "paragraphs": [
      "Cash flow of $10.4B trailing, an 18.4% margin, is the strongest line in the accounts. In fiscal 2025, operating cash flow of $10.1B less capex of $336M produced $9.8B; capex is 0.6% of revenue because the platform does not own the fleet. Net debt is $5.6B at 0.7x EBITDA, and interest cover is 14.0x. The P/FCF multiple of 12.7x is the market's acknowledgment of that cash generation.",
      "The cash figure is nearly three times net income. Fiscal 2025 net income was $10.0B on $52.0B of revenue, while free cash flow was $9.8B, so the two were close that year; the trailing gap comes from the latest quarters, when net income fell but cash flow held. Stock-based compensation is not disclosed, and it is the usual bridge between the two. A reader should treat the cash figure as real but ask how much depends on add-backs.",
      "Debt reduction has come before distributions. Net debt fell from $5.1B in fiscal 2021 to $2.9B in fiscal 2025, then rose to $5.6B trailing, so the company has not been consistently deleveraging. It pays no dividend and reports no buybacks. With $10.4B of free cash flow, the company can fund insurance reserves, new categories and buybacks, but the rise in net debt suggests the cash is being used elsewhere."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Uber's $132.3B market value at $65 is 38.2x trailing earnings, 17.7x EV/EBITDA, 2.4x sales and 12.7x free cash flow, a 7.9% free-cash-flow yield. The 52-week range is $63 to $93 and the shares are 22.6% lower over a year. Peer medians are 24.3x earnings and 16.1x EBITDA. The P/E premium and the P/FCF discount are the same fact viewed from two accounting lines.",
      "At $2.59 of fiscal 2026 EPS, the multiple is 25.1x, and fiscal 2027 EPS of $4.41 puts it at 14.7x. The forward P/E collapses because the estimate assumes a large rebound, which is exactly what the trailing P/E does not show. The P/FCF multiple of 12.7x is the more stable measure, and it says the market is pricing the cash flow at a discount to the peer median.",
      "Shopify and Airbnb sit at the expensive end of the peer set. Shopify trades at 80.3x EV/EBITDA and 81.7x earnings with 32.5% growth; Airbnb at 36.6x and 32.4x with 16.7% growth; Uber at 17.7x and 38.2x with 13.9% growth. Uber is the cheapest on EBITDA despite similar growth, which reflects the legal and insurance risks in its model. A resolution of driver classification would narrow the discount; an adverse ruling would widen it."
    ]
  },
  "analysts": {
    "paragraphs": [
      "The $98 mean target is 51% above the $65 price, across 45 analysts in The 18 November 2026 Yahoo Finance snapshot, with a range of $70 to $150. Even the $70 low is 8% above it, so the consensus is unusually uniform in direction despite the margin decline.",
      "Consensus revenue is $57.8B, with $2.59 of EPS in fiscal 2026, then $67.0B and $4.41. The 30-day EPS revision is -18.4% and the 90-day is -19.9%, a sharp cut. The last four quarters were weak on earnings: $0.14 versus $0.78, $0.13 versus $0.71, $1.17 versus $0.83 and $0.25 versus $0.90. Consensus is implicitly assuming the margin compression is temporary and that the cash flow holds."
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
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
