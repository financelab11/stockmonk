import type { StockStory } from "./types";

export const LITE: StockStory = {
  "ticker": "LITE",
  "kicker": "Photonics · Optical components",
  "title": "Lumentum's net income is not the story its lasers tell",
  "dek": "Operating income of $524.8M sits under a net income of $8.62B. The gap is a non-cash item, and the real question is whether an optical component maker can hold a 28.5% operating margin.",
  "readingMinutes": 9,
  "takeaways": [
    "Operating income of $524.8M in FY2026 reversed a $434.0M loss two years earlier, and the September quarter held a 28.5% margin on $1.3B of revenue.",
    "Systems are 66.5% of segment revenue, so transceiver demand rather than telecom or industrial lasers decides whether the margin holds.",
    "Capex of $451.3M absorbed most of $751.4M of operating cash flow in FY2026, leaving free cash flow at 9.5% of revenue.",
    "At 49.0x EBITDA and 13.4x sales, the shares discount another year of triple-digit growth before the margin is tested."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026057358/lite-20260627.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001633978&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "A 28.5% operating margin on $1.3B of September-quarter revenue is the cleanest evidence yet that Lumentum's fixed cost base is covered. A year earlier the same line was 1.3% on $533.8M, and the four quarters since then ran 9.7%, 21.6%, 27.8% and 28.5%. Revenue roughly doubled while the fabs, clean rooms and engineering organisation stayed in place, which is operating leverage in its purest form rather than the result of a cost programme.",
      "The demand behind that jump comes from the links between accelerators. A cluster needs far more optical connections than it has chips, and each connection needs a laser and the photonics around it. Systems are 66.5% of segment revenue and components 33.5%, with Asia Pacific at 58.1% of the total, but the consolidated line does not show how much of either is datacom rather than telecom or industrial work. Those older markets still dilute the growth and carry their own cycles.",
      "What the equity is worth depends on whether 28.5% is a manufacturing advantage or a shortage rent. EV/EBITDA of 49.0x against a 31.0x peer median, and 13.4x sales, price the first interpretation. Capex of $451.3M and net debt of $780.3M are the cost of testing it. The reported net income of $8.62B against $524.8M of operating income makes the earnings multiple meaningless, so the 0.7% cash yield is the more honest starting point."
    ],
    "quote": "Lumentum has proved its fabs can earn a margin; the open question is whether that margin survives the next round of capacity."
  },
  "whatItDoes": {
    "paragraphs": [
      "The datacom business is the one that matters for AI. Optical transceivers convert electrical signals to light and back, and the lasers and photonic components inside them are where Lumentum sells. As clusters grow, the number of links between accelerators rises faster than the number of accelerators, and each link needs a light source and the optics around it.",
      "The telecom business is older and cyclical. It supplies components for long-haul and metro networks, where carriers upgrade capacity in waves. The industrial laser business sells into welding, cutting, marking and medical applications, which is a slower market tied to manufacturing activity rather than to data-centre construction.",
      "The company employs 5,473 people and reports a single revenue line in the data. That is a real gap for a reader: the three end markets have different cycles, different margins and different competitors, and the consolidated number hides which one is driving the 103.2% growth."
    ],
    "bullets": [
      {
        "title": "Datacom",
        "detail": "Lasers, pump lasers and photonic components for optical transceivers in data centres. The AI-linked revenue."
      },
      {
        "title": "Telecom",
        "detail": "Components for carrier transport networks. Cyclical, tender-driven, and slower growing."
      },
      {
        "title": "Industrial and commercial lasers",
        "detail": "Lasers for manufacturing, inspection and life sciences. Tied to industrial production rather than to computing."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Lumentum sells components by the unit to transceiver makers and equipment vendors. Volumes are large and prices decline over the life of a product, so revenue growth depends on shipping more units or moving to a higher-value part before the old one commoditises. Gross margin of 45.9% reflects the manufacturing difficulty of compound semiconductor lasers, which require specialised fabs and tight process control.",
      "The cost structure is capital intensive in a way that a fabless chip company's is not. Laser fabrication needs its own equipment, clean rooms and yield learning, and that spending happens before the revenue arrives. It is why the operating margin went from negative to 28.5% so quickly: the fixed cost was already in place, and the revenue finally covered it.",
      "The gap between the 23.5% operating margin and the 9.5% free cash flow margin is the price of that structure. Capital expenditure consumes a large share of the operating profit, and inventory builds ahead of demand. A reader comparing Lumentum with a fabless designer on free cash flow conversion is comparing two different kinds of business."
    ]
  },
  "growth": {
    "paragraphs": [
      "Each accelerator added to a cluster adds links faster than it adds compute, and every link carries a laser, a pump laser or a photonic component. That arithmetic explains why revenue went from $533.8M in the September 2025 quarter to $1.3B a year later. The constraint is fabrication capacity and yield, not demand, which is why capex rose to $451.3M in FY2026 from $231.0M in FY2025 and why the company is adding clean-room space before the orders are visible.",
      "The third-party estimate for the fiscal year ending June 2027 is $6.7B of revenue and $24.94 of EPS, rising to $10.5B and $40.13 in FY2028. Hitting the first number requires the December quarter to produce $1.6B, 138.5% above the prior year. The second requires the current growth rate to persist through a capacity cycle that has historically overshot; FY2024 revenue fell 23.1% after the telecom inventory correction, and the fabs kept depreciating through it."
    ],
    "bullets": [
      {
        "title": "Links per cluster",
        "detail": "Optical connections scale faster than accelerators, and each one needs a light source and the optics around it."
      },
      {
        "title": "Line-rate transitions",
        "detail": "Higher speeds per lane raise the value of the photonic content, but they also reset the price of the previous generation."
      },
      {
        "title": "Fab yield",
        "detail": "Capacity is added in clean-room space and qualified over quarters, so supply cannot respond within a single demand spike."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Gross margin of 45.9% is the standout number, up from 28.0% in FY2025 and 18.5% in FY2024, when the company was carrying idle capacity through a downturn. Operating margin followed from negative 10.9% to 23.5% on a trailing basis and 17.4% for FY2026. The incremental revenue arrived at a gross margin well above the corporate average, which is what a fab utilisation recovery looks like when the fixed cost is already sunk.",
      "Returns are less impressive than the income statement. ROIC is 9.5%, below the 12.2% peer median and far below Comfort Systems' 48.1%, because the asset base is a set of fabs rather than a crew and a van. Net margin cannot be used this year: the $8.62B reported profit is a non-operating item, and diluted EPS carries the opposite sign. The operating margin is the only profitability measure here that describes the business rather than the balance sheet."
    ]
  },
  "cash": {
    "paragraphs": [
      "Capital expenditure of $451.3M in FY2026 was more than half of the $751.4M generated by operations, and it turned a good operating year into $300.1M of free cash flow. The trailing figure is $356.3M, a 9.5% margin. Two years earlier free cash flow was negative $108.3M on $133.0M of capex, which shows how quickly the cash line moves with utilisation when the fixed asset base is already in place.",
      "The September quarter produced only $37.9M of free cash flow after $196.2M in the June quarter, a swing that points to inventory and receivables building ahead of the December shipments implied by the $1.6B revenue estimate. That is the working-capital cost of a ramp, and it is the reason a 28.5% operating margin converts into a 9.5% cash margin rather than something closer to 20%.",
      "Net debt of $780.3M is 0.8x EBITDA and interest cover is 47.5x, so the balance sheet is not the constraint. The company pays no dividend and the filings do not report buybacks. Capital is going into capacity, and the test is whether the next $450M of capex earns a return above the 9.5% currently recorded on invested capital. At that leverage, a delay in datacom orders would be absorbed without a refinancing, which is the strongest argument for the equity in a cyclical industry."
    ]
  },
  "valuation": {
    "paragraphs": [
      "The cash yield is 0.7%, and the price-to-free-cash-flow multiple is 138.5x, so a buyer at $544 is paying for cash flow that has not yet arrived. EV/Sales of 13.4x is more than double Coherent's 5.7x and close to Bloom Energy's 13.2x, two businesses with very different capital intensity. EV/EBITDA of 49.0x compares with CIEN at 44.1x and a peer median of 31.0x, a premium that assumes the margin is structural.",
      "On the third-party estimates the arithmetic changes. FY2027 EPS of $24.94 puts the shares at about 22x, and FY2028 EPS of $40.13 at about 14x. Those multiples are ordinary for a hardware maker if the estimates are right; the estimates assume revenue of $6.7B and then $10.5B, against $3.7B trailing. The gap between 49.0x trailing EBITDA and 14x forward earnings is entirely a bet on that revenue line arriving.",
      "What would justify the price is a datacom franchise that holds its gross margin through a capacity cycle, with telecom and industrial shrinking as a share of revenue. What would break it is the historical pattern: FY2024 showed that optical demand can fall 23.1% in a year, and a fab cannot be idled without taking the margin with it. The 28.5% operating margin is the variable to watch, not the revenue."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Estimate revisions, not the target, are the informative part of the record. Over ninety days FY2027 EPS estimates rose 15.3%, and over thirty days 14.5%, after four consecutive quarters in which revenue and earnings came in above the published figures. Yahoo Finance counts twenty-five analysts as of 18 November 2026; the mean target is $1.1K and the range runs from $659 to $1.4K, a spread that still leaves the lowest view above the current price.",
      "That is a constructive group, but the dispersion is about how much upside exists rather than whether the business is working. The estimates embed $6.7B of FY2027 revenue, a 121.1% increase, and a further 57.9% in FY2028, so the target range is really a range of views on how long the optical shortage lasts."
    ]
  },
  "risks": {
    "intro": "The operating business is improving quickly. The risks are the durability of a supply-constrained margin, the capital intensity of staying at the front of the technology, and a set of reported numbers that are hard to read.",
    "items": [
      {
        "title": "Reported earnings quality",
        "severity": "High",
        "detail": "Net income of $8.62B against operating income of $524.8M, and an EPS with the opposite sign to net income. Until the composition is clear, earnings-based measures are unreliable.",
        "watch": "The reconciliation between operating income, net income and EPS in each filing."
      },
      {
        "title": "Capacity and capital intensity",
        "severity": "High",
        "detail": "Laser fabrication needs continuous investment. Free cash flow was 9.5% of revenue against a 23.5% operating margin, and the gap is capex.",
        "watch": "Capital expenditure as a share of revenue and the pace of fab expansion."
      },
      {
        "title": "Customer concentration",
        "severity": "Medium",
        "detail": "Optical components are sold to a small number of transceiver makers and equipment vendors, who pass them to a small number of hyperscalers.",
        "watch": "Revenue from the largest customers and any shift in transceiver sourcing."
      },
      {
        "title": "Margin normalisation",
        "severity": "Medium",
        "detail": "A 28.5% operating margin in a component business is high. It reflects tight supply as much as manufacturing skill.",
        "watch": "Gross margin by quarter and lead times for datacom components."
      },
      {
        "title": "Telecom and industrial drag",
        "severity": "Low",
        "detail": "The non-datacom businesses are cyclical and slower growing. They dilute the growth rate and can hide a datacom slowdown.",
        "watch": "The revenue split between datacom, telecom and industrial lasers."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "The only margin in the reported numbers that reflects the business rather than the balance sheet."
      },
      {
        "title": "Capital expenditure",
        "detail": "The difference between a good year and a cash-consuming one in this industry."
      },
      {
        "title": "EPS reconciliation",
        "detail": "Net income and EPS cannot keep pointing in opposite directions without an explanation."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Lumentum is an optical component maker that has just completed a genuine turnaround: operating income moved from negative $434.0M in FY2024 to positive $524.8M in FY2026, and the latest quarter reached a 28.5% operating margin on $1.26B of revenue. That is the business story, and it is a good one.",
      "The reported net income of $8.62B is not part of that story. It is the kind of figure that makes a screen show a 5.4x P/E and a reader conclude the shares are cheap. The educational point is that a multiple is only as good as the earnings in the denominator, and a net margin of 239.9% is a signal to go and read the reconciliation rather than a signal to buy.",
      "What is not known is the size and nature of the non-operating gain, why diluted EPS is negative when net income is positive, and how much of the current margin depends on a supply shortage. The AI build-out is a real source of demand for optical components; it does not resolve any of those three questions."
    ],
    "questions": [
      "What produced the $8.1B difference between operating income and net income?",
      "Why is diluted EPS negative when net income is positive?",
      "How much of the 28.5% operating margin comes from tight supply rather than manufacturing advantage?",
      "What capital expenditure is required to keep the datacom capacity at the current growth rate?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
