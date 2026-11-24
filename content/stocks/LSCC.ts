import type { StockStory } from "./types";

export const LSCC: StockStory = {
  "ticker": "LSCC",
  "kicker": "Semiconductors · Programmable logic",
  "title": "Lattice sells programmable logic into sockets that outlive the product around them",
  "dek": "A 68.6% gross margin says the chips are valuable. A 9.1% operating margin says the company is spending the difference, and its fastest-growing quarter made that gap wider.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue more than doubled in five quarters to $291.0M, but operating income stayed between $22M and $26M across the last three.",
    "Free cash flow of $242.6M is 30.0% of revenue, more than five times the 5.5% net margin, because non-cash charges sit between the two.",
    "The 359.6x earnings and 540.5x EBITDA multiples are artifacts; 20.8x sales is the measure that describes what is being paid.",
    "The current-year EPS estimate of $2.51 is almost eight times the $0.32 earned across the last four quarters."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/855658/000143774926004100/lscc20260103_10k.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000855658&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Programmable logic revenue more than doubled in five quarters, from $124.0M to $291.0M, but the operating margin fell in the latest step, from 11.1% to 8.2%. Trailing revenue is $808.8M, up 63.4%, at a 68.6% gross margin, and free cash flow is 30.0% of revenue. The company is selling more chips and keeping less of each additional dollar, which is the puzzle these accounts set. For a business that spent three years recovering from a 30.9% revenue decline, the choice is between a cycle and a permanently higher cost base.",
      "An FPGA is a grid of logic the customer wires up in software, and Lattice's parts are small and low-power enough for battery-operated, thermally constrained equipment. The design is won at the schematic stage and then persists for the life of the platform, which is why revenue lags design activity by two or three years. End markets are spread across communications and computing for volume, industrial and automotive for durability, and consumer for a cyclical kicker; Asia is 67.6% of revenue.",
      "At 20.8x sales, 359.6x earnings and 540.5x EBITDA, the multiples describe a company whose profit is close to zero rather than one priced at a premium. The usable measures are 66.3x free cash flow and a 1.5% cash yield, both high for a 63.4% grower. Net debt of $740.8M replaced net cash of $133.9M during the year, so the balance sheet has also become a variable rather than a given."
    ],
    "quote": "Lattice's 68.6% gross margin buys the right to spend; the 9.1% operating margin shows how much of the design-win base is still being paid for."
  },
  "whatItDoes": {
    "paragraphs": [
      "An FPGA is a grid of logic that the customer wires up in software. That makes it useful in three situations: when volumes are too low to justify a custom chip, when the standard is still moving, and when a product needs to be updated in the field. Lattice's devices are small and low-power, which pushes them toward battery-operated, thermally constrained and always-on applications rather than toward the large accelerators that dominate the headlines.",
      "The customer relationship is design-led. An engineer selects a part at the schematic stage, writes the logic, validates the board and then places production orders. That process takes months to years and creates a switching cost that has nothing to do with price. It also means revenue lags design activity: the sockets won today show up as revenue when the customer's product ramps, which may be two or three years later.",
      "The end markets are deliberately spread. Communications and computing provide volume, industrial and automotive provide durability, and consumer provides a cyclical kicker. That mix is why the company's revenue held up better than many semiconductor peers in the last downturn, and why it did not escape the downturn entirely."
    ],
    "bullets": [
      {
        "title": "Low-power FPGAs",
        "detail": "Small programmable devices used for interface bridging, power sequencing and sensor processing."
      },
      {
        "title": "Design-win economics",
        "detail": "Revenue arrives years after the design decision, and the part tends to stay for the platform's life."
      },
      {
        "title": "End-market spread",
        "detail": "Communications, computing, industrial, automotive and consumer, each with a different cycle."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The gross margin is the franchise. At 68.6%, Lattice keeps more than two-thirds of each revenue dollar after the cost of the silicon, which is what a design-led programmable business should look like. The chips are fabricated by partners, so the company does not carry a fab, and the gross margin reflects design value rather than manufacturing scale.",
      "Everything after that is the problem. Operating margin of 9.1% means operating expense is absorbing most of the contribution. Research and development for a programmable architecture is permanent and expensive, because the software tools, the intellectual property library and the silicon roadmap all have to be maintained whether or not revenue grows. Sales and applications engineering are the other large block, since each design win requires support at the customer's bench.",
      "The operating leverage should therefore be dramatic when revenue scales. In practice it has not been. Revenue rose from $145.8M in Q4 FY26 to $170.9M, $201.1M and $291.0M, while operating margin went from 0.7% to 15.3%, 11.1% and 8.2%. The direction of travel reversed exactly when the growth accelerated, which is the central puzzle in these accounts."
    ]
  },
  "growth": {
    "paragraphs": [
      "Design wins convert into revenue years later, so the current ramp reflects sockets won in 2023 and 2024. Revenue went from $124.0M in the June 2025 quarter to $133.3M, $145.8M, $170.9M, $201.1M and $291.0M, a pace faster than a normal end-market recovery. Low-power programmable logic is designed into interface bridging, power sequencing and sensor processing, and those sockets tend to stay for the platform's life once qualified.",
      "Consensus revenue has the ramp continuing: $998.2M for the current year, up 90.8%, and $1.6B next, up 61.5%, with the December quarter at $335.2M. That is more than double the trailing revenue base. The risk is that a steep ramp of this shape includes channel fill or one large programme, and the company does not disclose enough end-market detail to separate the two. The 8.2% operating margin in the September quarter is the evidence that incremental revenue is not yet profitable."
    ],
    "bullets": [
      {
        "title": "Design-win lag",
        "detail": "Revenue arrives two to three years after the socket is won, so today's ramp reflects decisions made before the current demand cycle."
      },
      {
        "title": "Asia concentration",
        "detail": "Asia supplied 67.6% of revenue, tying the business to the region's communications and computing equipment builders."
      },
      {
        "title": "End-market spread",
        "detail": "Industrial and automotive sockets last longer than consumer ones, but communications and computing set the volume."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The 68.6% gross margin is the franchise, and the 9.1% operating margin is the cost of running it. Operating income was $26.2M in the March 2026 quarter, $22.3M in June and $23.9M in September, while revenue climbed from $170.9M to $291.0M. Essentially all of the incremental gross profit went to operating expense over those three quarters, which is the opposite of what a design-led model is supposed to deliver.",
      "The annual record shows how cyclical the operating line is. Revenue fell 30.9% in FY2024 and the operating margin fell from 28.8% to 6.8%; the year to January 2026 grew 2.7% and the margin recovered only to 2.1%. EPS was $0.02 for the year to January 2026, and the trailing four quarters sum to about $0.32. ROIC is 2.4% and ROE 3.2%, against peer medians of 9.4% and 8.3%."
    ]
  },
  "cash": {
    "paragraphs": [
      "The cash statement of $242.6M is 30.0% of trailing revenue, more than five times the net margin, because non-cash charges sit between the two. The January 2026 fiscal year produced $175.1M of operating cash flow against $42.5M of capex, leaving $132.6M, and the September quarter alone generated $77.6M. A company with a 2.4% return on capital is producing a 30% cash margin, which tells a reader that accounting profit understates cash generation but not necessarily economic profit.",
      "Net debt of $740.8M at the trailing date compares with net cash of $133.9M at the January 2026 year-end, a swing of roughly $875M in nine months that makes the balance sheet a more important part of the story than it was. Interest cover is 6.4x, so the debt is serviceable, but the change in capital structure is recent enough that its purpose is not yet visible. Capital returns are absent."
    ]
  },
  "valuation": {
    "paragraphs": [
      "An EV/EBITDA of 540.5x and a P/E of 359.6x are artifacts of a near-zero profit base; the only meaningful multiples are 20.8x sales and 66.3x free cash flow, a 1.5% yield. Sales is the right denominator at 63.4% growth and a 68.6% gross margin, but 20.8x is a price that assumes the operating margin normalises. Peer median growth is 17.3%, so Lattice is being paid for growth, not for current profitability.",
      "The current-year estimate of $2.51 is almost eight times the $0.32 earned across the last four quarters, and at $113 it implies 45.0x, below the 54.4x peer median. The multiple therefore rests on operating leverage arriving in the next two quarters, not on the September quarter's 8.2% margin. The estimate requires a net margin far above the 0.6% reported for the year to January 2026, and nothing in the quarterly record yet supports it."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Thirteen analysts in the 18 November 2026 Yahoo Finance survey sit around a mean target of $156 against a $113 price, with a range of $95 to $200. The revision trend is the strongest in the group: EPS estimates rose 17.4% over seven days and 18.0% over ninety, and the September quarter beat by 31%.",
      "The estimates embed a rapid conversion of revenue into profit. Current-year EPS of $2.51 compares with $0.32 trailing, and next year's $4.39 is three-quarters higher again. The September quarter's $0.08, annualised at $0.32, is nowhere near that path, so the consensus is assuming the operating margin recovers as revenue scales. The $95 low target, 16% below the price, is the only published view that does not."
    ]
  },
  "risks": {
    "intro": "Lattice's balance sheet is sound and its gross margin is enviable. The risk is that the cost base has grown into a revenue level the business may not sustain.",
    "items": [
      {
        "title": "Operating leverage in reverse",
        "severity": "High",
        "detail": "Revenue rose from $201.1M to $291.0M in Q3 FY27 while the operating margin fell from 11.1% to 8.2%. If incremental revenue does not convert, the recovery does not produce earnings.",
        "watch": "Operating margin each quarter and operating expense growth relative to revenue."
      },
      {
        "title": "Revenue durability after a steep ramp",
        "severity": "High",
        "detail": "Quarterly revenue more than doubled from $124.0M to $291.0M in five quarters. Ramps of that shape can include channel fill or one large programme.",
        "watch": "Sequential revenue, distributor inventory and any customer concentration disclosure."
      },
      {
        "title": "Design-win dependence",
        "severity": "Medium",
        "detail": "Revenue arrives years after the design decision, so a slowdown in wins today shows up as a revenue gap later, when it is too late to fix quickly.",
        "watch": "Design-win counts and the commentary on new product ramps."
      },
      {
        "title": "Non-cash charges",
        "severity": "Medium",
        "detail": "Free cash flow of $242.6M against $0.32 of diluted EPS implies large amortisation or share-based compensation. Those are real costs to shareholders even when they do not use cash.",
        "watch": "The cash-flow statement and the share count over time."
      },
      {
        "title": "End-market concentration",
        "severity": "Medium",
        "detail": "Communications and computing provide the volume, and those are the markets most exposed to a customer capex pause.",
        "watch": "The end-market revenue split and commentary on the largest segment."
      },
      {
        "title": "Competition from larger programmable vendors",
        "severity": "Low",
        "detail": "The large FPGA vendors have broader portfolios and can bundle software and support. Lattice competes on power and size, which is a defensible niche but a narrow one.",
        "watch": "Gross margin and whether new sockets are won at lower prices."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "The 68.6% gross margin is not in question; the conversion of it is."
      },
      {
        "title": "Sequential revenue",
        "detail": "Five quarters of growth need to become a base before the forward estimates can be believed."
      },
      {
        "title": "Cash flow versus earnings",
        "detail": "The 30.0% free-cash-flow margin is the strongest evidence that the business still works."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Lattice owns a valuable niche: low-power programmable logic designed into sockets that last for years, earning a 68.6% gross margin. The last three years showed how cyclical that niche is and how much operating expense the company carries through a downturn.",
      "The dataset leaves three questions open: whether $291.0M a quarter is a new base, why operating margin fell as revenue rose, and how much of the cash-flow strength reflects charges that will eventually be paid in shares or cash.",
      "The educational point is that a high gross margin is a necessary condition for a good business, not a sufficient one. The distance between 68.6% and 9.1% is the cost of running the company, and it is where the investment case will be decided."
    ],
    "questions": [
      "Why did the operating margin fall in the quarter with the largest revenue increase?",
      "What share of the revenue ramp came from new programmes versus channel restocking?",
      "How large are the non-cash charges that separate free cash flow from net income?",
      "Can operating expense grow more slowly than revenue from here?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
