import type { StockStory } from "./types";

export const ETN: StockStory = {
  ticker: "ETN",
  kicker: "Industrials · Electrical equipment and power management",
  title: "Eaton is selling the switchgear that electrification needs",
  dek: "Revenue is growing at a fifth a year while margins fall. That combination is the story: new capacity and project mix are diluting a business that used to earn more on less.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $32.0B, up 20.1%, at a 15.4% operating margin and a 12.2% net margin.",
    "The latest quarter grew 28.0% but the operating margin fell to 15.3% from 18.2% a year earlier.",
    "Free cash flow was $3.8B, an 11.9% margin, with $818M of net cash.",
    "The shares trade at 34.0x trailing earnings and 20.9x EV/EBITDA while sitting 18% up their 52-week range.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1551182/000155118226000007/etn-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001551182&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Eaton makes the components that move and control electricity: circuit breakers, switchgear, busway, transformers, uninterruptible power supplies, power distribution units and the software that monitors them. It also has aerospace and vehicle businesses, but the electrical side is what drives the growth and the multiple.",
      "Trailing revenue was $32.0B, up 20.1%, at a 15.4% operating margin. On the surface that is a healthy industrial. Underneath, the mix has shifted: the latest quarter grew 28.0% to $8.9B, but the operating margin slipped to 15.3% from 18.2% in the same quarter a year earlier. Growth is arriving with lower margins attached.",
      "At $341.72 the market value is $132.8B, or 34.0x trailing earnings and 20.9x EV/EBITDA. The shares sit about 18% of the way up a 52-week range of $311.92 to $478.00 and have returned -8.7% over the past year. The market has already marked the shares down while revenue accelerated, which makes the margin question the central one.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "Electrical Americas is the largest piece: distribution equipment, breakers, panelboards, switchgear and UPS systems sold to contractors, utilities, data-centre operators and industrial plants through distributors and directly. Electrical Global covers similar products outside the Americas, with a larger share of utility and industrial project work.",
      "Aerospace supplies hydraulic, fuel, actuation and electrical systems to aircraft makers and airlines. Vehicle makes transmissions, clutches and components for trucks and off-highway equipment. Both are solid businesses, but neither grows like the electrical side, and both carry the cyclicality of their end markets.",
      "The customer base matters for the economics. Distributors buy standard catalogue products in volume at negotiated prices. Utilities and data-centre developers buy engineered packages on project schedules, often with specification control that makes the brand hard to replace once designed in. That installed specification is Eaton's real moat: the cost of the switchgear is small relative to the cost of a building that cannot open without it.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Eaton sells components, not projects. A breaker or a panelboard is manufactured, stocked and shipped, and the price is set by catalogue and by negotiated distributor agreements. Gross margin of 35.0% is normal for that model: enough to cover materials, factory cost and the engineering that goes into product families, and low enough that a competitor can undercut on a commodity part.",
      "The barrier is specification. Once an engineer writes a particular breaker or busway into a design, replacing it means redesigning the distribution system, re-certifying it and taking on schedule risk. That gives Eaton pricing power on the installed base and makes the aftermarket for replacement parts and expansion durable. It is also why the electrical segment has historically earned better margins than the vehicle business.",
      "The 15.4% operating margin is the group number after corporate costs and after the lower-margin segments. The revenue growth is coming fastest in large data-centre and utility projects, which are competitive, engineered-to-order and priced before copper and labour costs are known. That is the mechanism behind the margin dilution: the fastest-growing part of the business is the part with the least pricing power per dollar of revenue.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $19.6B in 2021 to $20.8B, $23.2B, $24.9B and $27.5B in the following years, then reached $32.0B on a trailing basis. The acceleration in the last year is steep: the latest quarter alone grew 28.0%.",
      "The attributed consensus expects $33.7B of revenue and $13.75 of EPS this fiscal year, then $37.4B and $16.37 next year. That implies another year of double-digit growth and a meaningful step up in earnings, which requires the margin to stabilise rather than keep falling.",
      "The demand drivers are specific. Data centres need switchgear, busway and UPS capacity, and the build-out is constrained by exactly the equipment Eaton makes. Utilities are investing in grid capacity and resilience. Industrial customers are electrifying processes that used to run on gas. Reshoring of manufacturing adds factory load. The constraint is capacity: Eaton has been adding plant and acquiring capacity, and new plants take time to reach target margin.",
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly margin path is the most important table in the file: 16.9% in Q2 FY25, 18.2%, 18.4%, then 14.9% in Q1 FY26, 13.4% and 15.3% in Q3 FY26. Revenue grew every quarter. Something changed in the mix or the cost base at the start of FY26, and the company has been recovering from it since.",
      "Annual operating income has risen from $2.9B in 2021 to $4.9B in 2025 on revenue that grew from $19.6B to $27.5B. That is genuine operating leverage over four years: an operating margin of 14.8% in 2021 against 18.0% in 2025. The recent quarters interrupt that trend rather than reverse it.",
      "Diluted EPS was $10.01 trailing, but the quarterly series shows the pressure: $2.51, $2.59 and $2.91 in FY25, then $2.22, $2.11 and $2.77 in FY26. A company growing revenue at 28% that earns less per share than a year earlier is paying for growth with margin. Return on equity of 18.6% and return on invested capital of 19.2% are still respectable, which is why the market has not treated this as a broken story.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $3.8B, an 11.9% margin, against net income of roughly $3.9B implied by the 12.2% net margin. Conversion is close to one-for-one, which is what you want from a business that is adding capacity: the capital spending is being funded from operations rather than from the balance sheet.",
      "The balance sheet carries $818M of net cash, a thin cushion for a company of this size. It is enough to fund the capacity programme without stress, but not enough to absorb a large acquisition or a sharp downturn without new debt.",
      "At 35.0x free cash flow and a 2.9% FCF yield, the shares are priced for growth rather than for cash return. That makes the capital expenditure programme the swing factor: if the new capacity earns the returns it is meant to, the cash flow grows into the multiple; if it does not, both the earnings and the multiple come under pressure.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 34.0x trailing earnings and 20.9x EV/EBITDA, Eaton is priced as a growth industrial. Caterpillar trades at 21.6x and 14.5x, RTX at 30.4x and 18.1x, Vertiv at 33.6x and 22.7x, and GE at 36.7x and 24.3x. Eaton's revenue growth of 20.1% is in line with Caterpillar's, but its multiple is 57% higher on earnings.",
      "That premium rests on the durability of electrical demand. A switchgear order placed today is revenue in eighteen months, and the grid and data-centre build-out has years to run. The market is paying for that visibility, not for the current margin, which is why the recent dilution has not collapsed the multiple.",
      "The comparison with Vertiv is the interesting one. Vertiv grows at 35.3% and trades at 33.6x earnings; Eaton grows at 20.1% and trades at 34.0x. Either Eaton's installed base and specification lock-in justify the same multiple on slower growth, or the market is paying too much for the slower compounder.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-six analysts contribute to the attributed consensus, with a mean target of $476.97 and a range of $333.00 to $539.00. The mean is well above the latest close, and the range is wide, which reflects genuine disagreement about the margin trajectory rather than about demand.",
      "Estimates call for $33.7B of revenue and $13.75 of EPS this fiscal year, then $37.4B and $16.37 next year. The implied EPS growth of about 19% on revenue growth of 11% requires margins to recover, so the estimate set is effectively a bet that the dilution is temporary.",
      "For the next quarter the consensus is $8.82B of revenue and $4.14 of EPS. That EPS figure is a large step from the $2.77 just reported, which is a reminder that quarterly consensus numbers can be stale or can include adjustments. Read the annual estimates, not the quarterly ones, for a sense of direction.",
    ],
  },
  risks: {
    intro:
      "Eaton has the demand and the installed base. The risks are margin dilution from large projects, capacity execution, and a multiple that leaves little room for either to go wrong.",
    items: [
      {
        title: "Margin dilution",
        severity: "High",
        detail:
          "Large data-centre and utility projects are priced competitively before costs are known. If they keep growing faster than the catalogue business, the group margin stays under pressure.",
        watch:
          "Segment operating margin and the mix of project versus catalogue revenue.",
      },
      {
        title: "Capacity execution",
        severity: "Medium",
        detail:
          "New plants take years to reach target utilisation and margin. A delay leaves fixed costs without the revenue to cover them.",
        watch:
          "Capital expenditure, plant start-ups and incremental margin.",
      },
      {
        title: "Copper and component costs",
        severity: "Medium",
        detail:
          "Copper, steel and electrical components are a large share of cost. Contracts priced before a move in those inputs compress margin immediately.",
        watch:
          "Gross margin and the price-cost spread each quarter.",
      },
      {
        title: "Data-centre concentration",
        severity: "Medium",
        detail:
          "A pause in hyperscale construction would hit the fastest-growing part of the order book, and the effect would arrive with a lag as projects are cancelled or delayed.",
        watch:
          "Order intake in Electrical Americas and backlog conversion.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "At 34.0x earnings, the shares need the margin to recover and the growth to continue. A miss on either costs more than the miss itself.",
        watch:
          "The EV/EBITDA premium to Caterpillar and the direction of forward estimates.",
      },
    ],
    watchlist: [
      {
        title: "Segment margin recovery",
        detail:
          "The single number that decides whether the growth is worth the dilution. Watch Electrical Americas first.",
      },
      {
        title: "Order intake",
        detail:
          "Backlog and book-to-bill lead revenue by several quarters in this business.",
      },
      {
        title: "Capital spending",
        detail:
          "Capacity additions should show up as revenue within a year. If they do not, the fixed cost is stranded.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Eaton is a specification-driven electrical equipment franchise sitting in the path of grid and data-centre investment. Revenue reached $32.0B, up 20.1%, with $3.8B of free cash flow and a net cash balance sheet. Demand is not the problem.",
      "The problem is price. Growth is coming from project work that earns less per dollar than the catalogue business, and the margin has fallen from 18.4% to 15.3% in three quarters while revenue accelerated. Whether that is a temporary cost of expansion or a permanent mix shift is the whole question.",
      "At 34.0x earnings, the shares already assume the answer is temporary. The reader should decide that first, then look at the price.",
    ],
    questions: [
      "How much of the revenue growth is project work versus catalogue products?",
      "What margin do the new plants earn at full utilisation?",
      "Is the recent margin decline price, mix or cost inflation?",
      "Why does Eaton trade at the same multiple as Vertiv on half the growth rate?",
    ],
  },
};
