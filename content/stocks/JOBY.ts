import type { StockStory } from "./types";

export const JOBY: StockStory = {
  "ticker": "JOBY",
  "kicker": "Advanced air mobility · Electric air taxi",
  "title": "Joby is an airline that has to build its own aircraft first",
  "dek": "Revenue of $148.8M sits against a -$784.5M cash burn and a -658.1% operating margin. Certification, not demand, is the gate between here and a ridesharing business.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue of $148.8M is almost entirely new, up 557.2%, but the operating margin is -658.1% and the business is still pre-commercial.",
    "Free cash flow was -$784.5M, so the $1.50B net cash balance covers roughly two years at the trailing burn.",
    "The September quarter produced $55.1M of revenue against $193.4M of cash use; consensus expects revenue to fall to $20.2M in the December quarter.",
    "At 16.4x sales there is no earnings multiple to anchor the price; certification timing and unit cost are the only variables that matter."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000160/joby-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001819848&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Revenue of $55.1M in the September quarter was a record, and it came with a -504.8% operating margin and $193.4M of cash use. The top line is growing because early flight and service work is being booked, not because a commercial network is running. The result matters for what it does not show: there is still no certified aircraft carrying paying passengers at scale. Until there is, the income statement remains a spending plan with a small revenue offset.",
      "The business is vertically integrated by design. Joby intends to own the aircraft, the factory and the operating airline, which captures more of the value chain than selling aircraft to operators would. It also means funding certification, production tooling, pilots, maintenance and landing sites before the first fare. Flight Services is 100% of reported revenue, a single line that hides the different economics of flight testing, early operations and service work.",
      "Cash is the clock. Net cash of $1.50B against a $3.9B market value means the enterprise is valued at about $2.4B, or 16.4x sales. The burn is the number that matters: at -$784.5M trailing, the cash covers less than two years, and the December quarter is expected to bring less revenue. A financing before certification is the base case, not a tail risk, and the price already reflects that expectation today."
    ],
    "quote": "Joby has built an aircraft and an airline organisation; the cash balance is financing the gap until the regulator allows the two to meet."
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
      "Every dollar of Joby's revenue today comes from activity that precedes commercial service: flight testing, early operations and service work. The growth rate is therefore not a demand signal. The demand signal will be the first certified route and the load factor it achieves. Until then, the revenue line measures how much of the certification programme can be billed rather than how large the market is. That is a narrow definition of growth, but it is the honest one.",
      "The addressable market is short trips over congested roads, where the alternative is a slow car journey. The unit economics depend on four variables: seats filled, trips per aircraft per hour, aircraft ownership cost and maintenance plus energy per flight hour. Utilisation is the one that decides everything, because an idle aircraft still depreciates and still needs a crew. None of those variables has been demonstrated at scale.",
      "Consensus does not assume a smooth ramp. FY2026 revenue is estimated at $138.9M, below the trailing $148.8M, and the December quarter is expected at $20.2M, 34.4% below the year-earlier figure and well below the September quarter. FY2027 is estimated at $198.1M, up 42.6%, on two analysts. The estimates are thin and volatile, which is appropriate for a company whose revenue depends on certification milestones rather than on a sales pipeline."
    ],
    "bullets": [
      {
        "title": "Certification",
        "detail": "Design and production approval are sequential gates; a delay adds cost without adding revenue, and the December estimate already assumes a pause."
      },
      {
        "title": "Manufacturing cost",
        "detail": "A hand-built prototype does not prove serial production; the cost per aircraft at volume decides whether the service can be priced to fill seats."
      },
      {
        "title": "Utilisation",
        "detail": "Trips per aircraft per day and load factor determine whether the airline side covers its crew, maintenance and landing costs."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Percentage margins on $148.8M of revenue are not a useful way to read the business. The operating loss is the number: -658.1% of revenue, or roughly $979M on a trailing basis. That is the cost of certification, engineering, test aircraft and the operating organisation. The net margin of -462.8% is smaller in magnitude because non-operating items offset part of the operating loss. The revenue base is too small to absorb that.",
      "The quarterly progression shows the spending rate rather than the business. Q1 FY2026 used $222.4M of cash, Q2 $201.8M and Q3 FY2026 $193.4M, while revenue climbed from $24.2M to $55.1M. The operating loss narrowed from -963.4% to -504.8% partly because the revenue denominator grew. In dollar terms, the loss is still large, the trend is flat, and the dollar loss is what has to be funded.",
      "There is no return on capital to measure in a meaningful way. ROIC of -31.6% and ROE of -39.4% are negative because the invested capital is a development programme, not a fleet earning fares. The comparison that matters is cash used per quarter against cash raised, not operating margin against a peer. Until the first aircraft enters service, those returns describe spending, not economics."
    ]
  },
  "cash": {
    "paragraphs": [
      "Cash used in operations was $509.9M in FY2025, capex $53.9M and free cash flow -$563.8M. Trailing free cash flow is -$784.5M, a -527.2% margin, as spending accelerated through 2026. The September quarter alone used $193.4M. At the current rate the next twelve months will consume more than the last, and that is the number to annualise when thinking about runway.",
      "The $1.50B cash balance covers roughly two years at the trailing rate. It is higher than a year earlier despite the burn, which implies new financing during the period; the reported figures do not break out how much came from equity versus debt. Either way, the company is funding a factory and an airline before either has a customer, so the next raise is a question of when rather than whether.",
      "Capital allocation has no dividend or buyback to discuss. Capex rose from $40.6M in FY2024 to $53.9M in FY2025 and is running higher in 2026 as manufacturing tooling is installed. That spending is necessary for certification and production, but it also raises the fixed cost that has to be covered once service starts. The risk is a certification delay that leaves the factory built and the aircraft uncertified."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Sixteen times sales is the only multiple that can be computed, because there are no earnings and free cash flow is negative. The sales base is $148.8M, so the multiple is really a price on the certification option rather than on current revenue. EV/Sales of 16.4x is high against AVAV and Kratos at 2.4x, but those businesses already sell certified products; Joby is selling a future fleet.",
      "What the multiple assumes is a certified aircraft, a production line and a service that fills seats. On the FY2027 revenue estimate of $198.1M, the enterprise value would still be about 12x sales, which is not a valuation that a mature airline would command. The price only makes sense if revenue grows into the hundreds of millions after certification, and that is a 2028 or later event.",
      "A certification slip that forces another equity raise at a lower price would break it. The 52-week range of $4 to $17 shows the market has already repriced the timetable once. A successful certification would not automatically justify the multiple either; the unit economics of the first routes would then become the test, and no route has yet been flown commercially."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Nine analysts cover Joby, with a mean target of $9 and a range of $4 to $18, in Yahoo Finance's 18 November 2026 consensus. That is an unusual spread for a company with a single certification path, and it reflects different assumptions about timing rather than about demand.",
      "Only one analyst contributes to the FY2026 estimate of $138.9M of revenue and a loss of $1.01 per share; FY2027 has two, at $198.1M and -$0.65. The 30-day EPS revision is +31.2%, a large move on a small estimate base. The consensus therefore assumes revenue falls in the December quarter and resumes growth in 2027, which is a timetable assumption as much as a financial forecast."
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
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
