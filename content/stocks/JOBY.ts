import type { StockStory } from "./types";

export const JOBY: StockStory = {
  ticker: "JOBY",
  kicker: "Advanced air mobility · Electric air taxi",
  title: "Joby is an airline that has to build its own aircraft first",
  dek: "Revenue of $148.8M sits against a -$784.5M cash burn and a -658.1% operating margin. Certification, not demand, is the gate between here and a ridesharing business.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was $148.8M, up 557.2%, but this is early-stage revenue rather than air-taxi fares at scale.",
    "Operating margin was -658.1%, net margin -899.2% and free cash flow -$784.5M.",
    "Net cash of $1.50B is the runway, and the trailing burn rate determines how long it lasts.",
    "At 30.5x EV/sales the price already assumes certification and commercial service.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1819848/000181984826000160/joby-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001819848&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Joby Aviation is building an electric aircraft that takes off and lands vertically, with the intention of operating it as an air taxi service. The company is vertically integrated: it designs the aircraft, builds it, and plans to run the flights itself rather than sell vehicles to airlines.",
      "That choice determines the financial statements. A manufacturer spends on tooling and recognises revenue when it delivers. An airline spends on aircraft and crews and recognises revenue per passenger. Joby does both, which is why the cost base is in place years before the revenue is. Trailing revenue was $148.8M and free cash flow was -$784.5M.",
      "The share price of $5.93 gives a $6.03B market value; EV/sales is 30.5x. The range over the past year was $4.43 to $17.10 and the stock is down 58.6% over twelve months. The company employs 1,422 people while the aircraft does not yet carry paying passengers.",
    ],
    quote:
      "Certification is a binary gate. Until the regulator signs the design and the production system, there is no service to sell, however good the aircraft is.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is a piloted electric vertical takeoff and landing aircraft intended for short trips over congested roads. The value proposition is time: a journey that takes an hour in traffic might take minutes in the air, and the aircraft is quiet and electric enough to operate near the places people live.",
      "Turning that into a business requires more than an aircraft. It requires type certification of the design, approval of the production system, operational authorisation to fly commercially, a network of landing sites, and maintenance arrangements that keep aircraft flying instead of waiting for parts. Each is a separate approval with its own queue.",
    ],
    bullets: [
      {
        title: "The aircraft",
        detail:
          "Electric vertical takeoff and landing vehicle designed for short urban and regional trips.",
      },
      {
        title: "Certification",
        detail:
          "Design and production approval from the aviation regulator. Without it, no paying passenger flights.",
      },
      {
        title: "Manufacturing",
        detail:
          "An in-house factory must move from hand-built prototypes to repeatable production at a known cost per aircraft.",
      },
      {
        title: "Operations",
        detail:
          "Pilots, maintenance, landing sites and dispatch. The airline side of the business, which has its own cost structure.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The intended revenue is fare revenue per seat, and the unit economics are decided by four variables: how many seats are filled, how many trips an aircraft flies per hour, what the aircraft costs to own, and what maintenance and energy cost per flight hour. A vehicle that sits idle still depreciates and still needs its crew.",
      "That makes utilisation the most important number in the model. An aircraft doing short trips back to back with high occupancy spreads its fixed cost over many fares. The same aircraft in the same city with poor scheduling and low occupancy can lose money at any ticket price.",
      "Because Joby intends to operate the service rather than sell aircraft, it also carries the costs of an airline: pilots, maintenance technicians, landing fees, insurance and dispatch. Those are people-intensive and grow with the network. The operating loss of -$658.1% on $148.8M of revenue is the cost of building that capability before it has routes to fly.",
    ],
  },
  growth: {
    paragraphs: [
      "The reported growth rate is not informative. Revenue compounded at 619.5% a year across the fiscal years in the dataset because it started at zero: $0 in FY2021, $0 in FY2022, $1.0M in FY2023, $136,000 in FY2024 and $53.4M in FY2025. The latest quarter grew 144.0% to $55.1M.",
      "The consensus expects $129.5M of revenue this fiscal year and $217.4M next. More revealing is the next-quarter estimate of $19.3M, which is lower than the $55.1M just reported. The analysts covering the company do not expect the current quarter's revenue to be the new run rate.",
      "Real growth will come from certification, then from routes. Each city adds revenue and cost at the same time, so the question is not whether revenue grows but whether it grows faster than the operation required to deliver it.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating losses have widened every year: $259.1M in FY2021, $392.2M in FY2022, $472.1M in FY2023, $596.8M in FY2024 and $719.6M in FY2025. Revenue arrived only in the last two of those years, so the loss is a development cost rather than a sign that the product is mispriced.",
      "Net loss is larger still: $929.8M in FY2025 against the $719.6M operating loss. The gap sits below the operating line, and one quarter shows how extreme it can be: Q4 FY2025 reported $30.8M of revenue and a $770.9M net loss. Diluted EPS was -$0.71, return on equity -76.6% and return on invested capital -307.6%.",
      "Those returns are not comparable to a mature business. When the asset base is small and the loss is large, return on invested capital becomes a measure of how much has been spent relative to how little has been earned.",
    ],
  },
  cash: {
    paragraphs: [
      "The trailing cash outflow was -$784.5M, a -527.2% margin. The annual trend is relentless: -$228.1M, -$290.8M, -$344.4M, -$476.9M and -$563.8M across FY2021 to FY2025, with the trailing figure higher again as production and certification work accelerated.",
      "The company funds this from a $1.50B net cash position. The arithmetic a reader should do is simple: divide the cash balance by the annual burn. That gives the number of years the current plan can run without new financing, and it is the single most useful calculation in the file.",
      "Capital spending is the other claim on cash. Factories, tooling and test aircraft are bought before they generate revenue, and each new city adds landing infrastructure and staff. Financing that gap with shares transfers value from existing holders; financing it with debt adds a fixed payment before revenue arrives.",
    ],
  },
  valuation: {
    paragraphs: [
      "Earnings-based multiples do not work. The trailing P/E is -3.9x because earnings are negative, and EV/EBITDA is unavailable. The only usable measure is 30.5x EV/sales, and even that is distorted: revenue is not yet fare revenue from a scaled network.",
      "The peer set shows how differently the market treats pre-commercial aviation. Archer Aviation trades at 280.9x EV/sales on $6.9M of revenue; Joby at 30.5x on $148.8M; Rocket Lab at 38.2x; AST SpaceMobile at 26.1x. Joby's multiple is lower mainly because it has more revenue, not because it is closer to profit.",
      "A 30.5x EV/sales multiple on a company burning $784.5M a year is a statement about certification probability and eventual route density. It is not a statement about the current operation.",
    ],
  },
  analysts: {
    paragraphs: [
      "Nine analysts cover the company. The mean target of $9.40 compares with a $5.93 share price, and the range of $4.00 to $18.00 straddles it, a more balanced distribution than the average alone suggests.",
      "Their forecasts are $129.5M of revenue and -$0.77 of EPS this fiscal year, then $217.4M and -$0.65 next year. The loss per share is expected to narrow even as spending continues, which implies either cost discipline or a larger share count absorbing the loss.",
      "These are third-party forecasts on a business with no commercial history. They should be read as scenarios rather than predictions.",
    ],
  },
  risks: {
    intro:
      "Joby's risks are certification, manufacturing and financing, in that order. Demand is not the constraint yet; the ability to produce a certified aircraft and operate it at a viable cost is.",
    items: [
      {
        title: "Certification delay",
        severity: "High",
        detail:
          "Without design and production approval there is no commercial service, and the cost base continues regardless.",
        watch:
          "Certification milestones, regulator communications and the number of aircraft in the test programme.",
      },
      {
        title: "Manufacturing ramp",
        severity: "High",
        detail:
          "Hand-built prototypes do not prove that the aircraft can be produced repeatedly at a predictable cost.",
        watch:
          "Aircraft produced per quarter and disclosed unit cost trends.",
      },
      {
        title: "Cash runway",
        severity: "High",
        detail:
          "A -$784.5M trailing burn against $1.50B of net cash leaves a finite number of years before new funding is needed.",
        watch:
          "Quarterly cash used in operations, capital expenditure and any equity or debt raised.",
      },
      {
        title: "Unit economics",
        severity: "Medium",
        detail:
          "The model depends on high aircraft utilisation and occupancy. Neither has been demonstrated at scale.",
        watch:
          "Trips per aircraft per day, load factor and cost per flight hour once service begins.",
      },
      {
        title: "Operating safety",
        severity: "Medium",
        detail:
          "An accident in early commercial service would stop flights and damage the regulatory relationship.",
        watch:
          "Safety reporting, incident disclosure and any grounding.",
      },
    ],
    watchlist: [
      {
        title: "Certification milestones",
        detail:
          "Each approval stage is a gate that either opens the next spend or delays it.",
      },
      {
        title: "Cash burn",
        detail:
          "The gap between the $1.50B balance and the annual outflow sets the financing timetable.",
      },
      {
        title: "Aircraft output",
        detail:
          "Production numbers show whether the factory, not just the design, is ready.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Joby has a credible aircraft, a large engineering organisation and $1.50B of net cash. It has no commercial service, a -$784.5M annual cash burn and a -658.1% operating margin.",
      "The trade-off to understand is that vertical integration cuts both ways. Building and operating the aircraft captures more of the value chain, but it also means funding a factory and an airline before either has a customer.",
      "The decisive unknowns are the certification timetable, the cost of building an aircraft at volume, and the utilisation the service can achieve. The first is regulatory, the second is industrial, the third is commercial.",
    ],
    questions: [
      "How many years does $1.50B of net cash cover at the trailing burn rate?",
      "What does one aircraft cost to produce at the planned volume?",
      "Which certification approvals are still outstanding?",
      "What occupancy and trips per day does the fare model require?",
    ],
  },
};
