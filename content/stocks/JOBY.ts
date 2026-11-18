import type { StockStory } from "./types";

export const JOBY: StockStory = {
  "ticker": "JOBY",
  "kicker": "Advanced air mobility · Electric air taxi",
  "title": "Joby is an airline that has to build its own aircraft first",
  "dek": "Revenue of $148.8M sits against a -$784.5M cash burn and a -658.1% operating margin. Certification, not demand, is the gate between here and a ridesharing business.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $148.8M trailing twelve months, +557.2% year over year.",
    "Profitability: -658.1% operating margin and -899.2% net margin.",
    "Cash: -$784.5M free cash flow, a -527.2% margin.",
    "Scorecard: 42/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000160/joby-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001819848&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Joby Aviation, Inc. generated $148.8M of revenue over the last twelve months, +557.2% versus the prior year. The business depends on contract wins, launch execution and the path from backlog to cash flow.",
      "The latest reported quarter was Q3 FY26, with $55.1M of revenue and an operating margin of -504.8%. The stock closed at $4.38 on 2026-11-17, giving a market capitalization of $4.5B.",
      "The shares sit 0% of the way up their 52-week range ($4.37 to $16.58). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Certification is a binary gate. Until the regulator signs the design and the production system, there is no service to sell, however good the aircraft is."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product is a piloted electric vertical takeoff and landing aircraft intended for short trips over congested roads. The value proposition is time: a journey that takes an hour in traffic might take minutes in the air, and the aircraft is quiet and electric enough to operate near the places people live.",
      "Turning that into a business requires more than an aircraft. It requires type certification of the design, approval of the production system, operational authorisation to fly commercially, a network of landing sites, and maintenance arrangements that keep aircraft flying instead of waiting for parts. Each is a separate approval with its own queue."
    ],
    "bullets": [
      {
        "title": "The aircraft",
        "detail": "Electric vertical takeoff and landing vehicle designed for short urban and regional trips."
      },
      {
        "title": "Certification",
        "detail": "Design and production approval from the aviation regulator. Without it, no paying passenger flights."
      },
      {
        "title": "Manufacturing",
        "detail": "An in-house factory must move from hand-built prototypes to repeatable production at a known cost per aircraft."
      },
      {
        "title": "Operations",
        "detail": "Pilots, maintenance, landing sites and dispatch. The airline side of the business, which has its own cost structure."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The intended revenue is fare revenue per seat, and the unit economics are decided by four variables: how many seats are filled, how many trips an aircraft flies per hour, what the aircraft costs to own, and what maintenance and energy cost per flight hour. A vehicle that sits idle still depreciates and still needs its crew.",
      "That makes utilisation the most important number in the model. An aircraft doing short trips back to back with high occupancy spreads its fixed cost over many fares. The same aircraft in the same city with poor scheduling and low occupancy can lose money at any ticket price.",
      "Because Joby intends to operate the service rather than sell aircraft, it also carries the costs of an airline: pilots, maintenance technicians, landing fees, insurance and dispatch. Those are people-intensive and grow with the network. The operating loss of -$658.1% on $148.8M of revenue is the cost of building that capability before it has routes to fly."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 619.5% a year across the fiscal years in the dataset, and the latest quarter changed +144.0% year over year. Third-party estimates for the current fiscal year point to $138.9M of revenue and -$1.01 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of -658.1% and return on invested capital of -307.6% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -658.1%, the net margin is -899.2% and diluted EPS is -$0.71. The latest quarter's operating margin was -504.8%.",
      "Return on equity is -76.6%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $55.1M, an operating margin of -504.8% and a net margin of -384.5%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$784.5M, a -527.2% margin. The balance sheet carries $1.5B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was -$784.5M over the last twelve months and net debt was -$1.5B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $8.84; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "9 analysts contribute to the third-party consensus. The mean target is $8.84, with a range of $4.00 to $18.00.",
      "Current-year estimates call for $138.9M of revenue and -$1.01 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 9 analysts with a mean target of $8.84; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Joby's risks are certification, manufacturing and financing, in that order. Demand is not the constraint yet; the ability to produce a certified aircraft and operate it at a viable cost is.",
    "items": [
      {
        "title": "Certification delay",
        "severity": "High",
        "detail": "Without design and production approval there is no commercial service, and the cost base continues regardless.",
        "watch": "Certification milestones, regulator communications and the number of aircraft in the test programme."
      },
      {
        "title": "Manufacturing ramp",
        "severity": "High",
        "detail": "Hand-built prototypes do not prove that the aircraft can be produced repeatedly at a predictable cost.",
        "watch": "Aircraft produced per quarter and disclosed unit cost trends."
      },
      {
        "title": "Cash runway",
        "severity": "High",
        "detail": "A -$784.5M trailing burn against $1.50B of net cash leaves a finite number of years before new funding is needed.",
        "watch": "Quarterly cash used in operations, capital expenditure and any equity or debt raised."
      },
      {
        "title": "Unit economics",
        "severity": "Medium",
        "detail": "The model depends on high aircraft utilisation and occupancy. Neither has been demonstrated at scale.",
        "watch": "Trips per aircraft per day, load factor and cost per flight hour once service begins."
      },
      {
        "title": "Operating safety",
        "severity": "Medium",
        "detail": "An accident in early commercial service would stop flights and damage the regulatory relationship.",
        "watch": "Safety reporting, incident disclosure and any grounding."
      }
    ],
    "watchlist": [
      {
        "title": "Certification milestones",
        "detail": "Each approval stage is a gate that either opens the next spend or delays it."
      },
      {
        "title": "Cash burn",
        "detail": "The gap between the $1.50B balance and the annual outflow sets the financing timetable."
      },
      {
        "title": "Aircraft output",
        "detail": "Production numbers show whether the factory, not just the design, is ready."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Joby has a credible aircraft, a large engineering organisation and $1.50B of net cash. It has no commercial service, a -$784.5M annual cash burn and a -658.1% operating margin.",
      "The trade-off to understand is that vertical integration cuts both ways. Building and operating the aircraft captures more of the value chain, but it also means funding a factory and an airline before either has a customer.",
      "The decisive unknowns are the certification timetable, the cost of building an aircraft at volume, and the utilisation the service can achieve. The first is regulatory, the second is industrial, the third is commercial."
    ],
    "questions": [
      "How many years does $1.50B of net cash cover at the trailing burn rate?",
      "What does one aircraft cost to produce at the planned volume?",
      "Which certification approvals are still outstanding?",
      "What occupancy and trips per day does the fare model require?"
    ]
  }
};
