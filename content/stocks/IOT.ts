import type { StockStory } from "./types";

export const IOT: StockStory = {
  "ticker": "IOT",
  "kicker": "Software & Cyber · Connected operations",
  "title": "Samsara sells software with a sensor attached, and the hardware sets the terms",
  "dek": "Revenue grew 29.5% to $1.85B and the operating line finally turned positive. A 76.4% gross margin shows what the connected-device model costs and what it is worth.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $1.8B trailing twelve months, +29.5% year over year.",
    "Profitability: 1.0% operating margin and 3.7% net margin.",
    "Cash: $255.5M free cash flow, a 13.8% margin.",
    "Scorecard: 39/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1642896/000162828026018167/iot-20260131.htm",
  "irUrl": "https://www.samsara.com",
  "bigPicture": {
    "paragraphs": [
      "Samsara Inc. generated $1.8B of revenue over the last twelve months, +29.5% versus the prior year. The model depends on net revenue retention, sales efficiency and the cost of acquiring the next customer.",
      "The latest reported quarter was Q2 FY27, with $508.4M of revenue and an operating margin of 1.0%. The stock closed at $39.27 on 2026-11-17, giving a market capitalization of $23B.",
      "The shares sit 66% of the way up their 52-week range ($23.38 to $47.47). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "The product is a camera bolted to a windscreen. The business is the eight years of subscription that follow the installation."
  },
  "whatItDoes": {
    "paragraphs": [
      "Three product families share one cloud. Vehicle telematics covers location, routing, hours-of-service compliance and fuel. Video safety adds dash cameras and computer vision that flags harsh braking, tailgating and phone use, then produces a clip for a manager to review. Equipment and site monitoring extends the same idea to trailers, heavy machinery and fixed assets.",
      "The strategic logic is that each family raises the value of the others. A fleet that starts with tracking can add cameras without a new vendor, and a camera customer generates the video evidence that makes the tracking data actionable. Revenue per customer therefore grows with module attachment rather than with price increases.",
      "The company employs 4,100 people and reports one revenue line. The dataset does not split hardware from subscription or domestic from international revenue, which is a real limitation when the two have very different margins."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Customers sign multi-year subscriptions priced per vehicle or per asset, and the hardware is bundled into the deal. Accounting splits the two: device revenue is recognised when the unit ships, at a modest margin, while the subscription is recognised over the contract term at a much higher margin. The blended gross margin of 76.4% is the average of those two very different streams.",
      "That structure explains most of the income statement. Hardware pulls gross margin down and consumes working capital, because devices must be built and held in inventory before they are installed. Software pulls it up and scales. As the installed base grows, the software share of each contract rises and gross margin should drift upward — slowly, because every new customer starts with hardware.",
      "Operating margin is 1.0%, and the gap to the 13.8% free-cash-flow margin is the familiar software pattern of annual prepayment. There is a second gap worth noticing: net margin is 4.9%, above the operating margin, because interest earned on the cash balance and other non-operating items add to the net line. In the March quarter, net income of $44.5M against a 1.5% operating margin implies most of the profit came from below the operating line."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 45.3% a year across the fiscal years in the dataset, and the latest quarter changed +29.9% year over year. Third-party estimates for the current fiscal year point to $2B of revenue and $0.77 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 1.0% and return on invested capital of n/a are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Module attach",
        "detail": "Adding video or equipment monitoring to an existing fleet is the cheapest revenue in the model because the account, the installer and the integration already exist."
      },
      {
        "title": "Fleet penetration",
        "detail": "Most customers start with a subset of vehicles. Expanding from a pilot to the whole fleet is the main expansion path and the reason net retention matters here."
      },
      {
        "title": "New verticals",
        "detail": "The same device and cloud work for utilities, construction, healthcare logistics and public sector, which widens the addressable market without new engineering."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 1.0%, the net margin is 3.7% and diluted EPS is $0.15. The latest quarter's operating margin was 1.0%.",
      "Return on equity is n/a. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY27: revenue of $508.4M, an operating margin of 1.0% and a net margin of 3.2%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $255.5M, a 13.8% margin. Net debt is not a meaningful measure for this business in the current dataset.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 335.6x trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $52.07; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "24 analysts contribute to the third-party consensus. The mean target is $52.07, with a range of $39.00 to $60.00.",
      "Current-year estimates call for $2B of revenue and $0.77 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 24 analysts with a mean target of $52.07; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Samsara's risks are operational and competitive rather than financial. Nothing in the reported numbers points to a financing problem; the questions are about hardware economics, field capacity and how defensible a camera on a truck really is.",
    "items": [
      {
        "title": "Hardware cost and supply",
        "severity": "High",
        "detail": "Every subscription begins with a device that must be manufactured, shipped and installed. Component costs, tariffs or a supply interruption hit gross margin before they hit revenue.",
        "watch": "Gross margin by quarter and any commentary on device costs."
      },
      {
        "title": "Low-cost and bundled competition",
        "severity": "High",
        "detail": "Telematics is a crowded market with cheaper trackers and with vehicle manufacturers building connectivity into the truck itself. Either can cap what a subscription is worth.",
        "watch": "Average revenue per vehicle and win rates against cheaper alternatives."
      },
      {
        "title": "Installation and service capacity",
        "severity": "Medium",
        "detail": "Growth depends on physically fitting devices at customer sites. That is a people constraint, not a software one, and it does not scale with a server bill.",
        "watch": "The rate of new vehicle activations and the cost of onboarding a customer."
      },
      {
        "title": "Video and privacy regulation",
        "severity": "Medium",
        "detail": "Camera-based driver monitoring is regulated differently across jurisdictions, and rules on employee monitoring can change what the product is allowed to do.",
        "watch": "Regional regulatory changes and the share of revenue from video."
      },
      {
        "title": "Thin operating margin",
        "severity": "Medium",
        "detail": "At 1.0%, the operating margin leaves no cushion. A slower quarter or a jump in device costs would push the company back to a loss.",
        "watch": "Operating margin excluding stock compensation and the trend in sales spending."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "The blended 76.4% should rise as the software share of the base grows. If it does not, hardware is taking more of the value than the story assumes."
      },
      {
        "title": "Operating margin",
        "detail": "Positive is not the same as expanding. Three quarters near 1% would suggest the model scales revenue but not profit."
      },
      {
        "title": "Net revenue retention",
        "detail": "Expansion from a pilot fleet to a full fleet is the cheapest growth available, and the clearest signal of product fit."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Samsara has built a genuinely differentiated product by combining devices, cloud and computer vision into something an operations manager can use without a data team. It has also built a business that must manufacture, ship and install a physical object for every new subscription.",
      "That mixture explains the financial shape: fast growth, high but not software-like gross margin, and an operating line that has only just crossed zero. Free cash flow looks better than earnings because customers pay in advance, which is real but not unlimited.",
      "The reader should leave with a view on whether hardware is a moat — because it is hard to install and therefore hard to rip out — or a tax on a business that would otherwise earn software margins."
    ],
    "questions": [
      "What share of revenue comes from devices versus subscriptions, and how is that mix changing?",
      "How much of growth comes from adding vehicles at existing customers?",
      "Does gross margin rise as the installed base matures?",
      "What would a 10% increase in device costs do to the operating margin?"
    ]
  }
};
