import type { StockStory } from "./types";

export const LMT: StockStory = {
  "ticker": "LMT",
  "kicker": "Industrials · Defense",
  "title": "Lockheed Martin earns a fee on other people's budgets",
  "dek": "Revenue is set by appropriations and delivered through cost-plus and fixed-price contracts. The 11.8% operating margin is the structure of the business, not a temporary shortfall.",
  "readingMinutes": 9,
  "takeaways": [
    "Q3 FY26 revenue reached $20.7B at an 11.8% operating margin, and consensus expects $81.4B and $30.62 of EPS for the full year.",
    "Free cash flow is $8.4B, 10.6% of revenue, and the 2.5% dividend plus buybacks are funded from it rather than from new debt.",
    "At {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA the shares sit well below the 31.0x and 20.4x peer medians, a discount built on 11.8% margins.",
    "Aeronautics is 40.3% of revenue and sustainment is the recurring part, but fixed-price development work in Space can erase a quarter's margin."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/936468/000162828026004195/lmt-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000936468&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Lockheed delivered $20.7B of revenue in the quarter ended 27 September 2026, with an 11.8% operating margin and $7.97 of diluted EPS. Revenue was $2.1B higher than the same quarter a year earlier, and the margin was 0.5 points lower, which is the normal texture of this business: the top line grows with appropriations and deliveries, while the margin is decided by contract estimates. The quarter confirms that the programme charges behind the 3.7% margin in Q4 FY24 and 4.1% in Q2 FY25 have not repeated.",
      "The structural context is appropriations. Aeronautics, at 40.3% of FY2025 revenue, sells fighters and transports and then sustains them for decades; Missiles and Fire Control, at 19.3%, is capacity-constrained rather than demand-constrained; Rotary and Mission Systems is 23.1%; Space is 17.4% and carries the most fixed-price development risk. With 71.6% of revenue sourced in the United States, a continuing resolution or a reprogramming decision moves the revenue base more than any commercial cycle.",
      "The valuation debate is whether a low-teens operating margin deserves a market multiple. {{marketCap}} is what the market pays for Lockheed at {{price}}: {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA, against 31.0x and 20.4x for the peer group. The gap is not a mispricing to be arbitraged; it reflects 3.9% revenue growth from FY2021 to FY2025 and a business whose profit is capped by contract type. The 15.8x P/FCF and 6.3% free-cash-flow yield are the more relevant parts of the return."
    ],
    "quote": "Lockheed's margin is negotiated, not earned: cost-plus contracts cap the upside and fixed-price contracts carry the downside."
  },
  "whatItDoes": {
    "paragraphs": [
      "Aeronautics is the largest segment and the one most people know. It builds the F-35 fighter, the F-16, the C-130 transport and the F-22 sustainment work, and it supports those fleets with spares, upgrades, training and depot maintenance. A fighter programme is not a one-time sale: the aircraft flies for decades, and the sustainment work that keeps it flying is a recurring revenue stream that grows with the fleet.",
      "Missiles and fire control makes air-defence interceptors, anti-tank missiles, precision-strike weapons and the sensors that guide them. Demand for these products is driven by inventories, by allied purchases and by the rate at which munitions are consumed in conflicts. Production capacity, not order intake, is often the constraint, and expanding a missile line takes years.",
      "Rotary and mission systems covers military helicopters, naval systems and training. Space builds satellites, missile-warning sensors and deep-space hardware, including the Orion crew vehicle. Space is the smallest and most technically uncertain part: contracts are often fixed-price development work, and the cost of a design change lands on the contractor."
    ],
    "bullets": [
      {
        "title": "Aeronautics",
        "detail": "Fighter and transport aircraft plus the sustainment work that follows the fleet for decades."
      },
      {
        "title": "Missiles and fire control",
        "detail": "Interceptors, anti-tank and precision-strike weapons. Capacity and inventory replenishment drive the cycle."
      },
      {
        "title": "Rotary, mission systems and space",
        "detail": "Helicopters, naval systems, satellites and Orion. More development risk, more fixed-price exposure."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The contract type decides the economics. On a cost-reimbursable contract the company is paid for allowable costs plus a negotiated fee, so revenue is defensible and margin is capped but stable. On a fixed-price contract the company keeps any saving and absorbs any overrun, so the upside is larger and the downside is a charge that can wipe out a year of margin growth. Most mature production and sustainment work sits somewhere between the two, with incentive fees tied to cost and schedule.",
      "The practical consequence is that revenue and profit do not move together. A quarter can deliver more revenue and less profit because a fixed-price programme revised its estimate, and the next quarter can deliver less revenue and more profit because the charge does not repeat. The Q2 FY25 quarter in the table is the example: $18.16B of revenue at a 4.1% operating margin, followed by $18.61B at 12.3% three months later.",
      "Cash works differently again. Governments pay progress payments as work is performed, which funds much of the working capital, and the final payment arrives on delivery or acceptance. That is why a defence contractor can carry a modest debt load relative to its revenue and still convert most of its net income into free cash flow. The constraint on growth is factory capacity and engineering hours, not cash."
    ]
  },
  "growth": {
    "paragraphs": [
      "Consensus expects $81.4B of revenue in 2026, 8.5% above FY2025, and $87.2B in 2027, another 7.1%. EPS is forecast at $30.62 and $33.30, so earnings growth outpaces revenue in 2026 and then converges with it. The 2026 step-up depends on the absence of programme charges as much as on volume: FY2025 operating margin was 10.3% against 12.6% in FY2023, so a normalisation of the contract estimates is worth several points before any new order arrives.",
      "The demand driver is inventory replenishment and allied procurement in missiles, and fleet sustainment in Aeronautics. A fighter programme generates revenue for decades after delivery, but the growth rate is set by flight hours and by the number of aircraft in service, not by a new order. Space is the swing factor: it is the smallest segment and the one where a design change lands on the contractor under a fixed-price development contract."
    ],
    "bullets": [
      {
        "title": "Munitions capacity",
        "detail": "Missiles and Fire Control is limited by production capacity, not order intake. Expanding a line takes years, so revenue follows capex already committed."
      },
      {
        "title": "Sustainment annuity",
        "detail": "Aeronautics earns follow-on work on the F-35, F-16 and C-130 fleets; that revenue tracks flight hours and depot schedules rather than new aircraft orders."
      },
      {
        "title": "International mix",
        "detail": "Europe was 11.7% and Asia Pacific 10.4% of FY2025 revenue. Allied purchases add growth, but they depend on export licences and buyer budgets."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The margin history is a record of contract estimates. Operating margin was 12.6% in FY2023, 9.9% in FY2024 and 10.3% in FY2025, and the quarterly range is wider: 3.7% in Q4 FY24, 4.1% in Q2 FY25 and 13.2% in Q1 FY25. The trailing margin is 11.8%, and Q3 FY26 matched it. A single revised estimate on a fixed-price programme can move a quarter by several points, which is why the annual average is more informative than any one period.",
      "Returns are high because the capital base is small, not because margins are. Return on invested capital is 25.9% against a 16.3% peer median, and return on equity is 64.7%, a figure that owes more to buybacks than to profitability. Net margin is 8.2%, so every 100 basis points of operating margin is worth roughly 12% of net income. That leverage to contract outcomes is the analytical point."
    ]
  },
  "cash": {
    "paragraphs": [
      "FCF was $8.4B over the trailing year, a 10.6% margin, and $6.9B in FY2025 after $1.6B of capex. The conversion is helped by progress payments: the government funds work as it is performed, so working capital is partly financed by the customer. The weak quarters are seasonal and programme-specific, with Q1 FY26 at -$291M and Q2 FY25 at -$150M, followed by $2.9B and $3.0B in the next two quarters.",
      "Net debt is $14.5B, 1.3x EBITDA, and interest cover is 8.6x, so the balance sheet does not constrain the dividend or the buyback. The 2.5% dividend consumes roughly $3.3B a year at the current market value, leaving most of the free cash flow for repurchases. That is the capital-allocation model: retire stock, shrink the equity base, and let the 64.7% return on equity flatter the result."
    ]
  },
  "valuation": {
    "paragraphs": [
      "{{marketCap}} is what the market pays for Lockheed at {{price}}, or {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA. The peer medians are 31.0x and 20.4x, so the discount is about 11 turns on earnings and seven on EBITDA. On the 2027 consensus EPS of $33.30 the multiple is roughly 17x, still below the market. A 15.8x multiple of free cash flow and a 6.3% free-cash-flow yield frame the cash return.",
      "The discount is defensible on growth and contract structure. GE Aerospace trades at 36.6x with a 20.3% operating margin and 22.2% revenue growth; RTX trades at 31.2x on an 11.8% margin and 11.6% growth. Lockheed's 7.9% trailing growth and 11.8% margin put it at the bottom of that group, and its fixed-price Space work adds a risk those peers do not carry to the same degree.",
      "What would justify a higher multiple is a budget cycle that funds new starts and a clean year without a reach-forward loss. What would break the current one is another charge large enough to cut FY2026 EPS, which consensus puts at $30.62, or a continuing resolution that delays the Q4 revenue step to $22.7B. The 6.3% free-cash-flow yield provides a floor that the earnings multiple alone does not."
    ]
  },
  "analysts": {
    "paragraphs": [
      "As of 18 November 2026, the Yahoo Finance consensus covers 22 analysts with a mean target of $661 and a range of $498 to $835. The mean is 16% above the current price, but the low end is 13% below it, and the neutral block is unusually large for a defence name with visible revenue.",
      "Revisions are stable and slightly positive, with the 90-day EPS change at 0.5%. The consensus assumes $30.62 for 2026 and $33.30 for 2027, a 42.5% jump followed by 8.7%, so the first year is a recovery from charges and the second is the underlying growth rate. The Q3 beat of $7.97 against $7.52 supports the near-term number; the FY2027 figure depends on appropriations that have not yet been enacted."
    ]
  },
  "risks": {
    "intro": "Lockheed's risks are budgetary and contractual. The balance sheet is conservative, the backlog is deep, and the uncertainty sits in what the government decides to buy and in the terms on which it buys it.",
    "items": [
      {
        "title": "Defence budgets and appropriations",
        "severity": "High",
        "detail": "Revenue is set by government spending. A continuing resolution delays new starts, and a change in priorities can cut a programme's quantity.",
        "watch": "Appropriations bills, program quantities and the backlog trend."
      },
      {
        "title": "Fixed-price programme charges",
        "severity": "High",
        "detail": "Contracts priced before the work is done transfer cost risk to the company. One revised estimate can erase a year of margin improvement.",
        "watch": "Segment operating margin and any disclosure of a reach-forward loss."
      },
      {
        "title": "Concentration in a few programmes",
        "severity": "High",
        "detail": "Fighter aircraft and missile defence account for a large share of revenue and profit. A production cut on one platform is felt across the group.",
        "watch": "Programme-level revenue disclosure and delivery schedules."
      },
      {
        "title": "Supply chain and capacity",
        "severity": "Medium",
        "detail": "Missile and aircraft production depends on engines, castings, electronics and solid rocket motors. Capacity cannot be added quickly.",
        "watch": "Delivery rates, supplier commentary and inventory days."
      },
      {
        "title": "International sales and export approvals",
        "severity": "Medium",
        "detail": "Allied orders are a growth driver, but they depend on export licences and on the purchasing country's budget and politics.",
        "watch": "Foreign military sales approvals and the international share of backlog."
      }
    ],
    "watchlist": [
      {
        "title": "Backlog and book-to-bill",
        "detail": "Backlog is the clearest forward indicator in defence. A book-to-bill below one means the order book is being consumed."
      },
      {
        "title": "Segment operating margin",
        "detail": "A single segment's margin can reveal a programme problem before the group result shows it."
      },
      {
        "title": "Cash from operations",
        "detail": "Progress payments make cash lumpy. The annual figure is more informative than any quarter."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Lockheed Martin is the largest defence contractor in the United States, with a portfolio of programmes that will be sustained for decades and a customer that pays on progress. That produces a thin but reliable operating margin, strong free-cash-flow conversion and a balance sheet that can support a 2.5% dividend and buybacks.",
      "The numbers describe a mature business rather than a growth stock. Revenue compounded at 3.9% a year from FY2021 to FY2025, the operating margin has been stable near 11% to 12% when no programme charge hits, and the trailing free-cash-flow yield of 6.4% is the main part of the return. The 20.1x earnings and 13.2x EBITDA multiples are below the industrial peers for exactly those reasons.",
      "What is not known is the next budget cycle and whether another fixed-price programme is carrying an unrecognised cost. The first is disclosed in appropriations documents and the second is only visible in the segment margin. A reader who tracks those two things will understand the stock better than one who tracks the quarterly earnings surprise."
    ],
    "questions": [
      "How much of revenue comes from cost-reimbursable contracts rather than fixed-price ones?",
      "What is the book-to-bill ratio, and which programmes are driving it?",
      "Which fixed-price development programmes remain without a reach-forward loss?",
      "Is the 64.7% return on equity telling us anything about the business, or only about the buybacks?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
