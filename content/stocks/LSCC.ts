import type { StockStory } from "./types";

export const LSCC: StockStory = {
  "ticker": "LSCC",
  "kicker": "Semiconductors · Programmable logic",
  "title": "Lattice sells programmable logic into sockets that outlive the product around them",
  "dek": "A 68.6% gross margin says the chips are valuable. A 9.1% operating margin says the company is spending the difference, and its fastest-growing quarter made that gap wider.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $808.8M trailing twelve months, +63.4% year over year.",
    "Profitability: 9.1% operating margin and 5.5% net margin.",
    "Cash: $242.6M free cash flow, a 30.0% margin.",
    "Scorecard: 55/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/855658/000143774926004100/lscc20260103_10k.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000855658&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "LATTICE SEMICONDUCTOR CORP. generated $808.8M of revenue over the last twelve months, +63.4% versus the prior year. The cycle is driven by inventory, utilisation and the next node or packaging transition.",
      "The latest reported quarter was Q3 FY27, with $291M of revenue and an operating margin of 8.2%. The stock closed at $109.80 on 2026-11-17, giving a market capitalization of $15.6B.",
      "The shares sit 51% of the way up their 52-week range ($60.50 to $157.01). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "The socket is sticky, which is why the gross margin is 68.6%. The cost of supporting that socket is what turns it into a 9.1% operating margin."
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
      "Revenue compounded at 3.8% a year across the fiscal years in the dataset, and the latest quarter changed +118.3% year over year. Third-party estimates for the current fiscal year point to $998.2M of revenue and $2.51 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 9.1% and return on invested capital of 4.5% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Content per board",
        "detail": "More interfaces and sensors per system mean more small programmable parts, which is Lattice's sweet spot."
      },
      {
        "title": "Industrial and automotive durability",
        "detail": "Long product lives make each design win a multi-year revenue stream once it ramps."
      },
      {
        "title": "Communications and computing",
        "detail": "The volume end of the mix, and the part most exposed to a capex pause at customers."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 9.1%, the net margin is 5.5% and diluted EPS is $0.32. The latest quarter's operating margin was 8.2%.",
      "Return on equity is 3.2%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY27: revenue of $291M, an operating margin of 8.2% and a net margin of 3.9%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $242.6M, a 30.0% margin. The balance sheet carries $128.3M of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $242.6M over the last twelve months and net debt was -$128.3M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 349.1x trailing earnings and 264.0x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $156.19; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "13 analysts contribute to the third-party consensus. The mean target is $156.19, with a range of $95.44 to $200.00.",
      "Current-year estimates call for $998.2M of revenue and $2.51 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 13 analysts with a mean target of $156.19; third-party estimates can change without notice."
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
  }
};
