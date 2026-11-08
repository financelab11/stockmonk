import type { StockStory } from "./types";

export const GE: StockStory = {
  ticker: "GE",
  kicker: "Industrials · Commercial and defence aerospace",
  title: "GE Aerospace earns most of its money after the engine ships",
  dek: "A jet engine is sold at a thin margin into a market with only a handful of suppliers, then serviced for decades. That makes the installed fleet, not the order book, the number that drives the profit.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $52.6B, up 22.2% year over year, at a 20.3% operating margin.",
    "Free cash flow was $8.0B, a 15.3% margin, and the balance sheet carries $44.7B of net cash.",
    "The shares trade at 36.7x trailing earnings and 24.3x EV/EBITDA, the richest multiples in the industrial peer group shown here.",
    "Revenue fell from $56.5B in 2021 to $29.1B in 2022 as the portfolio was separated; the smaller business has grown every year since.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/40545/000004054526000008/ge-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000040545&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "GE is the aviation business that was left after the old conglomerate was taken apart. It designs and builds commercial and military jet engines, sells spare parts, and overhauls engines in its own shops and through partners. The customer list is narrow by design: two large airframers, airlines, cargo carriers, leasing companies and defence ministries.",
      "The financial shape follows from that model. Trailing revenue reached $52.6B, up 22.2%, at a 20.3% operating margin and a 17.3% net margin. The latest quarter, Q3 FY26, produced $14.1B of revenue at a 19.9% operating margin. Equipment deliveries set the pace of the top line; the profit comes from the fleet already flying.",
      "At $323.24 the company is valued at $334.0B, or 36.7x trailing earnings and 24.3x EV/EBITDA. The shares sit about 45% of the way up a 52-week range of $268.91 to $388.84. The one question that matters is how much of that multiple is supported by the aftermarket annuity rather than by the current delivery cycle.",
    ],
    quote:
      "An engine programme is a decades-long service contract dressed up as a manufacturing business. The sale is close to a loss leader; the shop visit is the product.",
  },
  whatItDoes: {
    paragraphs: [
      "The commercial side supplies engines for narrowbody and widebody aircraft, mostly through CFM International, the joint venture that builds the LEAP engine. Engines go to the airframers as part of a new aircraft and to airlines as spares. Every one of those deliveries enters an installed base that will need parts, repairs and full overhauls for as long as the aircraft stays in service.",
      "The defence side builds and supports engines for fighters, transports and rotorcraft. It behaves differently from the commercial business: contracts are awarded by governments, volumes are smaller, and revenue is tied to procurement budgets rather than to passenger traffic. The two halves share engineering, supply chains and shop capacity, which is where most of the operating leverage sits.",
    ],
    bullets: [
      {
        title: "Commercial Engines & Services",
        detail:
          "New engine deliveries plus spare parts, repairs and overhauls. The services tail is the profit pool and the reason the installed base is tracked so closely.",
      },
      {
        title: "Defence & Systems",
        detail:
          "Military engines and support. Longer contract cycles, government customers, and revenue that follows appropriations more than air travel.",
      },
      {
        title: "The joint venture",
        detail:
          "CFM splits programme cost and risk with a partner, so the economics of each engine family are shared across two balance sheets. That makes the group margin harder to compare with a single-owner manufacturer.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "A new engine is priced to win the aircraft programme, not to earn a manufacturing return. The development cost is sunk before the first delivery, the production ramp is capital-hungry, and the airframer holds most of the negotiating power. That is why reported gross margin is only 24.4%: a large share of revenue is bought-in parts and assembly labour sold at a modest markup.",
      "The money is made later. Once an engine is in service, the operator has little choice about where to buy parts or who performs the overhaul, and pricing is set contract by contract with limited competition. Spare parts carry far better margins than new engines, and shop visits are priced on work scope. As the fleet mix shifts toward services, the consolidated operating margin of 20.3% and net margin of 17.3% improve without any change in unit volume.",
      "The mechanism to understand is the shape of the profit curve, not the level. Early in a programme, deliveries dilute margins. As the fleet matures and the first heavy shop visits come due, the same installed base produces a rising stream of high-margin service revenue. Long-term service agreements smooth that stream and lock in the aftermarket, but they also fix prices years ahead, which cuts both ways when inflation runs.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $29.1B in 2022 to $35.4B in 2023, $38.7B in 2024 and $45.9B in 2025, and the latest quarter grew 15.9% to $14.1B. That is faster than global air traffic, which tells you the growth is coming from deliveries and from service work recovering at the same time.",
      "The attributed consensus expects $50.9B of revenue and $8.16 of EPS for the current fiscal year, then $56.8B and $9.98 next year. Note that the current-year revenue estimate sits below the $52.6B trailing figure, which suggests the estimate set has not fully caught up with the last two quarters. Treat the direction as informative and the level with caution.",
      "Three things drive the next leg. Flight hours determine how much service work is done. The size of the LEAP fleet determines when the next wave of shop visits arrives. Airframer build rates determine how many new engines are delivered and how much margin dilution the mix carries. A pause in any one of them slows revenue, and a pause in aircraft production slows it fastest.",
    ],
    bullets: [
      {
        title: "Flight hours",
        detail:
          "The single best proxy for parts and overhaul demand. It tracks passenger and cargo traffic, not aircraft orders.",
      },
      {
        title: "Fleet maturity",
        detail:
          "Engines move from warranty to paid service over time, so an ageing installed base raises revenue per aircraft.",
      },
      {
        title: "Defence budgets",
        detail:
          "Procurement and sustainment funding set the pace of the military side, which does not move with air travel.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin has held in a narrow band for six quarters: 21.7% in Q2 FY25, 20.6%, 22.4%, then 17.7% in Q1 FY26, 21.0% and 19.9% in Q3 FY26. The dip in the March quarter is seasonal rather than structural. Annual operating income tells the more useful story: $10.4B in 2023, $7.6B in 2024 and $10.0B in 2025, on revenue that rose from $35.4B to $45.9B.",
      "Diluted EPS was $8.66 on a trailing basis. Return on equity of 51.3% looks extraordinary, and in one sense it is: the company carries $44.7B of net cash and has retired a large slice of its equity through buybacks, so the denominator is small. A high ROE here is a capital-structure result as much as an operating one, and it should not be compared with a leveraged industrial.",
      "The cleaner test is incremental margin. Revenue rose $7.2B from 2024 to 2025 while operating income rose $2.4B, which implies roughly a third of each extra revenue dollar reaching operating profit. That is a reasonable conversion for a business with a large fixed cost base in engineering and shops, and it is the rate to watch as deliveries ramp.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $8.0B, or 15.3% of revenue, against net income that works out to roughly $9.1B on the reported net margin. The gap is modest by industrial standards, which is what you would expect from a business whose earnings are already mostly cash: service revenue is collected quickly, and the capital tied up in engines on lease or in inventory is the main drag.",
      "The balance sheet carries $44.7B of net cash, or about 3.8x EBITDA in net cash terms. That is unusual for a manufacturer and reflects the break-up proceeds and the cash-generative service base. It gives management room to fund development, absorb a delivery slowdown, and keep returning capital through a cycle.",
      "Capital return is small relative to the cash pile: the dividend yield is 0.5%, and buybacks have done more of the work. At 41.7x free cash flow and a 2.4% FCF yield, the market is paying a high price for each dollar of current cash flow, which puts the burden on growth rather than on the payout.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 36.7x trailing earnings and 24.3x EV/EBITDA, GE is the most expensive name in the industrial comparison set. Caterpillar trades at 21.6x earnings and 14.5x EBITDA, RTX at 30.4x and 18.1x, Eaton at 34.0x and 20.9x, and Vertiv at 33.6x and 22.7x. Only Vertiv grows faster, and it does so from a much smaller revenue base.",
      "The premium is not irrational, but it is a statement about duration. A business that earns a rising service stream from an installed fleet deserves a higher multiple than one selling capital equipment into a replacement cycle, because its revenue is less sensitive to the order book. The risk is that the market is capitalising the current aftermarket margin as if it were permanent.",
      "Stockmonk does not publish a target price. The useful exercise is to ask what growth rate the multiple requires: at 24.3x EBITDA, the company needs several years of high-single-digit revenue growth with stable margins simply to earn a normal return, before any multiple compression.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus covers 21 analysts with a mean target of $378.43 and a range of $280.00 to $431.00. The mean sits above the latest close, and the low end is below it, so the dispersion is wider than the average suggests.",
      "Estimates call for $50.9B of revenue and $8.16 of EPS this fiscal year, then $56.8B and $9.98 next year. The implied EPS step-up of about 22% is larger than the implied revenue growth, which only works if margins expand or the share count keeps falling. That is the assumption to interrogate.",
      "These are third-party forecasts and they change with every quarter. A mean target is not a Stockmonk rating, and the average hides the fact that analysts disagree most about the pace of aftermarket recovery, not about the current quarter.",
    ],
  },
  risks: {
    intro:
      "The balance sheet is strong and the demand backlog is long. The risks are therefore about the pace of the service cycle, the concentration of the customer base and the price being paid for both.",
    items: [
      {
        title: "Flight hours and traffic",
        severity: "High",
        detail:
          "Parts and overhaul revenue is billed per hour flown. A recession, a health scare or a fuel shock cuts flying hours and service revenue together, with little warning.",
        watch:
          "Industry revenue passenger kilometres and the company's own service revenue growth.",
      },
      {
        title: "Airframe build rates",
        severity: "High",
        detail:
          "New engine deliveries depend on the two large airframers hitting their production plans. Their delays cut revenue and leave fixed costs spread over fewer units.",
        watch:
          "Monthly aircraft delivery totals and engine shipment disclosures.",
      },
      {
        title: "Supply chain and shop capacity",
        severity: "Medium",
        detail:
          "Forgings, castings and specialised labour are scarce. A shortage limits both new deliveries and the shop visits that generate the profit.",
        watch:
          "Time on wing, turnaround times and supplier lead-time commentary.",
      },
      {
        title: "Defence appropriations",
        severity: "Medium",
        detail:
          "Military engine revenue follows government budgets and continuing resolutions. A delayed appropriation slows orders without changing the long-run need.",
        watch:
          "Defence segment revenue and order intake by programme.",
      },
      {
        title: "Multiple compression",
        severity: "Medium",
        detail:
          "At 36.7x earnings, a modest downgrade in expected growth can move the share price far more than it moves the business.",
        watch:
          "The EV/EBITDA multiple versus its own five-year history and versus Eaton and RTX.",
      },
    ],
    watchlist: [
      {
        title: "Service revenue growth",
        detail:
          "The highest-margin line. If it lags flight hours, pricing or mix is deteriorating.",
      },
      {
        title: "Installed base and shop visits",
        detail:
          "Track the size of the fleet in service and the number of heavy overhauls completed each quarter.",
      },
      {
        title: "Cash conversion",
        detail:
          "Free cash flow should track net income. A widening gap means inventory or engine leasing is absorbing the profit.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "GE is one of a handful of suppliers of aircraft engines, with a service business that compounds as the fleet ages. The financials show a 20% operating margin on $52.6B of revenue, $8.0B of free cash flow and a $44.7B net cash position. Those are the facts, and they describe a good business.",
      "What is not known is how much of the current margin is cycle. Service pricing has been strong while shop capacity is tight; if capacity catches up, the same volume could earn less. Nor is it clear how quickly the next engine generation reaches the shop-visit stage, which is when the service tail gets steepest.",
      "The price already assumes a lot. At 24.3x EBITDA the shares need years of compounding to justify themselves, and the reader's job is to decide whether the installed base is as durable as the multiple implies.",
    ],
    questions: [
      "How much of revenue is service, and how does that share change as the fleet ages?",
      "What happens to margins if airframers cut build rates by a fifth?",
      "Is the aftermarket pricing power structural, or a symptom of today's shop-capacity shortage?",
      "How much of the 36.7x multiple is explained by the net cash balance?",
    ],
  },
};
