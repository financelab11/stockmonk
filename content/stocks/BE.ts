import type { StockStory } from "./types";

export const BE: StockStory = {
  ticker: "BE",
  kicker: "Fuel cells · On-site power generation",
  title: "Bloom Energy sells power that skips the grid queue",
  dek: "Fuel cells give data-centre developers electricity without waiting years for a utility connection. Revenue doubled, and so did the price of the shares relative to earnings.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $3.81B, up 112.2%, with operating margin at 14.9% and 18.3% in the latest quarter.",
    "The company lost money every year from FY2021 to FY2025, cumulatively well over $800M, before this profitable stretch.",
    "Free cash flow turned from negative $456.3M in FY2023 to positive $436.7M on a trailing basis.",
    "At 78.4x EV/EBITDA and 12.8x sales, the price assumes the growth continues well past the current order book.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1664703/000162828026006516/be-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001664703&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Bloom Energy makes solid oxide fuel cells and packages them into the Bloom Energy Server, a box that converts fuel into electricity on site. The pitch is always-on power for sites that cannot rely on the grid alone: manufacturing plants, hospitals, retail campuses, universities, utilities and, increasingly, data centres. The company employs 1,524 people and its customers include large Fortune 100 organisations.",
      "The commercial problem it solves is a queue. A large data-centre campus can need more electricity than the local utility can connect quickly, and the interconnection process can take years. A fuel cell installed on the site generates power without waiting for a transmission upgrade. That is why the technology has moved from a niche sustainability purchase to a speed-to-power purchase.",
      "The financial history is a long loss followed by a sharp turn. Net losses were $164.4M, $301.7M, $302.1M, $29.2M and $88.4M across the five fiscal years. Trailing revenue is now $3.81B, up 112.2%, with a 14.9% operating margin and $436.7M of free cash flow. The company has been profitable at the operating line for roughly a year.",
    ],
    quote:
      "The value of on-site generation is set by the alternative, and the alternative is waiting. When a utility needs five years to deliver a connection, a generator that arrives in eighteen months can charge for the difference.",
  },
  whatItDoes: {
    paragraphs: [
      "The Energy Server is a modular generator. Fuel, usually natural gas but potentially hydrogen, is fed into stacks of solid oxide cells that produce electricity electrochemically rather than by combustion. Because there is no flame, the emissions profile is different from a gas turbine, and because the units are modular, capacity can be added in blocks as a site grows.",
      "Bloom sells the equipment and, in many cases, keeps servicing it afterwards. Data centres buy the power, not the box, in some structures, which makes Bloom responsible for availability. The company also sells into microgrids, where a site uses its own generation as the primary supply rather than as backup.",
      "The manufacturing base is in the United States, and the fuel cell stacks are the expensive, technically difficult part. The company is small relative to its revenue, 1,524 people producing $3.81B, which says most of the cost of goods is materials and manufacturing rather than labour.",
    ],
    bullets: [
      {
        title: "Energy Server",
        detail:
          "Modular solid oxide fuel cell generators. Sold as equipment or as power under a service arrangement.",
      },
      {
        title: "Service and maintenance",
        detail:
          "Ongoing support for installed units. Recurring revenue that grows with the installed base rather than with new orders.",
      },
      {
        title: "Data-centre power",
        detail:
          "On-site generation for campuses that need electricity before the grid can deliver it. The fastest-growing use case.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The revenue model has two parts. Equipment sales are recognised when a unit is delivered and accepted, at a gross margin of 32.5%. Service arrangements run for years and generate revenue per kilowatt-hour or per month, with a cost structure that is mostly field engineers and replacement stacks.",
      "The unit economics depend on the installed cost per kilowatt against the cost of grid power in that location, and on how long the stacks last before they need replacing. A fuel cell that runs continuously wears out, so the service contract is not a free annuity: it carries an obligation to replace the expensive part of the machine. That is why the gross margin is 32.5% rather than the 50% or more that a pure equipment vendor might earn.",
      "The operating leverage is now visible. Revenue went from $396.3M in Q2 FY25 to $1.23B in Q3 FY26, and the operating margin went from negative 0.9% to 18.3%. The factory, the engineering and the field organisation were already in place; the additional revenue carried most of its gross profit to the operating line. That is the same mechanism that produced the losses in the other direction when revenue was $1.27B in FY2023.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 18.4% a year across the fiscal years in the data, which understates what has happened recently: $1.44B in FY2024, $2.00B in FY2025, $3.81B trailing, and a latest quarter that grew 139.8% to $1.23B. The recent growth is an order of magnitude faster than the multi-year average.",
      "The attributed consensus expects $1.46B next quarter and $1.43B the quarter after, $4.53B and $3.27 of EPS for the fiscal year, and $7.09B and $5.32 for the next. Note the near-term pattern: the second quarterly estimate is below the first, so the professional view is that the sequential growth pauses before resuming. The annual step from $4.53B to $7.09B is another 56% of growth on top.",
      "The driver is power scarcity. Data-centre demand is outpacing what grids can connect, and a fuel cell can be on site in a fraction of the time. The constraints are gas supply at the site, permitting for on-site generation, the price of the equipment relative to grid power, and the manufacturing capacity to build the stacks. A fall in the price of grid electricity, or a faster interconnection process, would remove the urgency.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a company that spent four years losing money at the operating line. Operating income was negative $114.5M, negative $261.0M, negative $208.9M and then positive $22.9M and $72.8M. The turn is recent, and it came with revenue growth rather than cost cuts: the cost base was already built.",
      "The quarterly progression is the clearest evidence of the change: operating margin of negative 0.9%, 1.5%, 11.3%, 9.7%, 17.2% and 18.3%. Six quarters of improvement, with the last four at double digits. Return on equity is 54.6%; no return on invested capital is available, which matters for a capital-intensive manufacturer.",
      "One figure needs care. The trailing net margin is 28.1% against a 14.9% operating margin, which means non-operating income contributed more to net profit than operations did. The Q4 FY25 quarter shows the pattern starkly: $550.9M of net income on an 11.3% operating margin. A reader should treat the net margin as a reported outcome that includes items outside the business, and use the operating margin for the operating story.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $436.7M over the trailing period, an 11.5% margin. That is the most important number in the report, because it is the first time in the company's history that the business has funded itself. Free cash flow was negative $110.5M, negative $308.5M, negative $456.3M, positive $33.1M and positive $57.2M across the five fiscal years, then turned strongly positive on a trailing basis.",
      "The balance sheet holds $2.49B of net cash, about 4.0x EBITDA on the negative side. For a manufacturer that spent years consuming cash, that cushion is what allowed the strategy to survive long enough to work. It is also a reminder that the cash was raised, not earned, during the loss-making years.",
      "The cash flow now supports the expansion: more manufacturing capacity for stacks, more inventory for equipment sales, and the field organisation for service contracts. The risk is that the service obligation is a long-dated cost. A company that sells a machine and promises to maintain it for a decade has taken on a liability that does not appear in the free cash flow of the year of sale.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $173.24 the shares trade at 47.8x trailing earnings, 78.4x EV/EBITDA, 12.8x sales and 117.3x free cash flow, with a 0.9% free cash flow yield. On a $51.22B market capitalisation against $3.81B of revenue, the market is valuing the company at more than thirteen times what it sells in a year.",
      "Those multiples are only defensible if the growth continues at something close to the current rate for several years and the margin keeps expanding. The consensus revenue of $7.09B next year would be roughly double the trailing figure. At a 20% operating margin on that revenue, the business would earn far more than it does today, and the multiple would compress quickly. At a 10% margin, it would not.",
      "The peer comparison is not especially helpful, because none of the optical and semiconductor names share this business model. The closer reference is a power equipment manufacturer with a long service tail, and those trade on mid-cycle earnings rather than on a multiple of current sales. The 78.4x EV/EBITDA is the number that requires the most explanation.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-six analysts contribute to the attributed consensus, with a mean target of $283.85 and a range of $102.00 to $380.00. The mean is 64% above the last close of $173.24, and the range is extremely wide: the low end is 41% below the traded price and the high end is more than double it.",
      "The estimates are $1.46B of revenue and $1.12 of EPS next quarter, $1.43B and $0.98 the quarter after, $4.53B and $3.27 for the fiscal year, and $7.09B and $5.32 for the next. That spread between the highest and lowest target is the widest in this group, which is what happens when the valuation depends on a growth rate rather than on a current margin. Third-party views of this kind should be read as a distribution, not a number.",
    ],
  },
  risks: {
    intro:
      "Bloom's risks are execution at scale, the cost of the service obligation, and a valuation that has already priced several years of success.",
    items: [
      {
        title: "Service obligation",
        severity: "High",
        detail:
          "Fuel cell stacks wear out. A service contract sold with the equipment is a multi-year cost obligation that may not be fully reflected in the year of sale.",
        watch:
          "Gross margin on service revenue and the disclosure of warranty and service liabilities.",
      },
      {
        title: "Valuation",
        severity: "High",
        detail:
          "78.4x EV/EBITDA and 12.8x sales leave little room for a growth disappointment, and the earnings base is only a year old.",
        watch:
          "The gap between trailing EBITDA and the consensus for next year.",
      },
      {
        title: "Dependence on grid delays",
        severity: "Medium",
        detail:
          "The product's advantage is speed relative to a utility connection. Faster interconnection or cheaper grid power reduces the premium customers will pay.",
        watch:
          "Interconnection timelines in the markets where Bloom sells and the pricing relative to grid power.",
      },
      {
        title: "Fuel and permitting",
        severity: "Medium",
        detail:
          "The units need a gas supply and a permit to operate on site. Either can delay a project that was sold on speed.",
        watch:
          "Project conversion timelines and any regulatory change to on-site generation.",
      },
      {
        title: "Reported profit versus operating profit",
        severity: "Medium",
        detail:
          "A 28.1% net margin against a 14.9% operating margin means non-operating items are a large part of reported earnings.",
        watch:
          "The reconciliation between operating income and net income each quarter.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The measure that reflects the manufacturing and service business rather than the reported net figure.",
      },
      {
        title: "Free cash flow",
        detail:
          "One year of positive cash flow is not a track record. Watch whether it survives a slower order quarter.",
      },
      {
        title: "Installed base",
        detail:
          "Service revenue depends on the number of units in the field, not the number sold this quarter.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Bloom Energy sells on-site fuel cell power, mostly to customers who need electricity faster than the grid can provide it. Revenue is $3.81B, up 112.2%, operating margin is 14.9% and free cash flow is $436.7M. After years of losses and cash burn, the business is now funding itself.",
      "The educational point is the difference between a technology that is finally working and a valuation that assumes it keeps working. The operating turnaround is visible in six consecutive quarters of margin improvement. The price is visible in a 78.4x EV/EBITDA multiple that requires the growth to continue for years. Both facts are in the same report.",
      "What is not known is how much of the revenue comes from data centres, how large the future service obligation is relative to the equipment margin, and whether the near-term pause implied by the quarterly estimates is a blip or the start of a slower phase. The AI build-out is a genuine source of demand for on-site power; it is not the only thing that determines whether this business earns its cost of capital.",
    ],
    questions: [
      "What share of revenue comes from data-centre customers rather than industrial and institutional ones?",
      "How much of the service revenue is consumed by stack replacements over the contract life?",
      "What happens to demand if a utility can connect a campus in two years instead of five?",
      "How much of the reported net income comes from operations rather than from below the line?",
    ],
  },
};
