import type { StockStory } from "./types";

export const LITE: StockStory = {
  ticker: "LITE",
  kicker: "Photonics · Optical components",
  title: "Lumentum's net income is not the story its lasers tell",
  dek: "Operating income of $524.8M sits under a net income of $8.62B. The gap is a non-cash item, and the real question is whether an optical component maker can hold a 28.5% operating margin.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $3.74B, up 103.2%, with operating margin at 23.5% and 28.5% in the latest quarter.",
    "FY2026 net income of $8.62B against $524.8M of operating income means the profit line is dominated by something outside the business.",
    "Free cash flow was $356.3M, a 9.5% margin, well short of operating profit because of capital spending.",
    "The 5.4x P/E is not a cheap multiple; it is a multiple computed on earnings the operations did not produce.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1633978/000162828026057358/lite-20260627.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001633978&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Lumentum makes light sources and the components that manage light. Its datacom products feed optical transceivers inside data centres; its telecom products sit in carrier networks; and its industrial and commercial lasers go into manufacturing, inspection and life-science equipment. It is a component supplier, one layer below the systems companies that assemble the boxes.",
      "Two years ago this was a loss-making business. Operating income was negative $115.7M in FY2023, negative $434.0M in FY2024 and negative $180.1M in FY2025. FY2026 produced $524.8M of operating income on $3.01B of revenue, and the latest quarter reached a 28.5% operating margin. Trailing revenue is $3.74B, up 103.2%.",
      "Then there is the net income line, which reports $8.62B for FY2026 and a trailing net margin of 239.9%. No component manufacturer earns more than twice its revenue. The operating business produced $524.8M; the rest of the profit came from something below the operating line, and it is almost certainly non-cash. Working out which number to trust is the first job of this report.",
    ],
    quote:
      "When net margin is more than double the operating margin on a hardware business, the accountant is telling you about the balance sheet, not about the factory.",
  },
  whatItDoes: {
    paragraphs: [
      "The datacom business is the one that matters for AI. Optical transceivers convert electrical signals to light and back, and the lasers and photonic components inside them are where Lumentum sells. As clusters grow, the number of links between accelerators rises faster than the number of accelerators, and each link needs a light source and the optics around it.",
      "The telecom business is older and cyclical. It supplies components for long-haul and metro networks, where carriers upgrade capacity in waves. The industrial laser business sells into welding, cutting, marking and medical applications, which is a slower market tied to manufacturing activity rather than to data-centre construction.",
      "The company employs 5,473 people and reports a single revenue line in the data. That is a real gap for a reader: the three end markets have different cycles, different margins and different competitors, and the consolidated number hides which one is driving the 103.2% growth.",
    ],
    bullets: [
      {
        title: "Datacom",
        detail:
          "Lasers, pump lasers and photonic components for optical transceivers in data centres. The AI-linked revenue.",
      },
      {
        title: "Telecom",
        detail:
          "Components for carrier transport networks. Cyclical, tender-driven, and slower growing.",
      },
      {
        title: "Industrial and commercial lasers",
        detail:
          "Lasers for manufacturing, inspection and life sciences. Tied to industrial production rather than to computing.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Lumentum sells components by the unit to transceiver makers and equipment vendors. Volumes are large and prices decline over the life of a product, so revenue growth depends on shipping more units or moving to a higher-value part before the old one commoditises. Gross margin of 45.9% reflects the manufacturing difficulty of compound semiconductor lasers, which require specialised fabs and tight process control.",
      "The cost structure is capital intensive in a way that a fabless chip company's is not. Laser fabrication needs its own equipment, clean rooms and yield learning, and that spending happens before the revenue arrives. It is why the operating margin went from negative to 28.5% so quickly: the fixed cost was already in place, and the revenue finally covered it.",
      "The gap between the 23.5% operating margin and the 9.5% free cash flow margin is the price of that structure. Capital expenditure consumes a large share of the operating profit, and inventory builds ahead of demand. A reader comparing Lumentum with a fabless designer on free cash flow conversion is comparing two different kinds of business.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 10.2% a year across the fiscal years in the data, which is a misleading summary because the base was shrinking for three of those years. The relevant sequence is $1.65B in FY2025 to $3.01B in FY2026, and then a latest quarter of $1.26B that grew 136.5% year over year.",
      "The attributed consensus expects $6.69B of revenue and $24.99 of EPS this fiscal year, then $10.47B and $39.75 next year. On a trailing base of $3.74B, the current-year estimate implies another 79% of growth and the next year implies 56% on top of that. Those are extraordinary numbers for a component supplier, and they rest on 21 and 23 analysts respectively, which is a reasonable sample.",
      "The driver is straightforward: more optical links per cluster, and more optical content per link as speeds rise. The constraint is capacity. Laser fabs take time to expand, and yield improvements are learned rather than bought. That is why the margin has expanded at the same time as revenue: demand is outrunning supply, and component pricing is firm.",
    ],
    bullets: [
      {
        title: "Links per cluster",
        detail:
          "Optical connections scale faster than accelerators. Each one needs a light source.",
      },
      {
        title: "Speed transitions",
        detail:
          "Higher line rates need more sophisticated photonics, which raises the value of the component.",
      },
      {
        title: "Capacity and yield",
        detail:
          "Laser fabrication capacity is the binding constraint. Expansion is slow and expensive.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Read the operating line first. Operating income went from negative $115.7M in FY2023 to negative $434.0M in FY2024, negative $180.1M in FY2025, then positive $524.8M in FY2026. The quarterly progression is consistent: operating margin of negative 1.7%, then 1.3%, 9.7%, 21.6%, 27.8% and 28.5% across six quarters. That is a genuine turnaround in the underlying business, and it is visible without any adjustment.",
      "Now read the net line, and be careful. Net income of $8.62B in FY2026 against operating income of $524.8M means roughly $8.1B arrived from somewhere other than operations. Trailing net margin is 239.9% and return on equity is 196.3%, both impossible as operating outcomes and both the arithmetic consequence of that item.",
      "The per-share figures confirm that something unusual is happening. Trailing diluted EPS is negative $89.62 while net income is strongly positive, and Q4 FY26 shows $8.40B of net income with an EPS of negative $95.55. Net income and earnings per share cannot have opposite signs unless the share count or the claims ahead of ordinary shares are doing something strange. A reader should not use the 5.4x P/E for anything until that is resolved.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $356.3M over the trailing period, a 9.5% margin. That is the cleanest measure of what the operations actually generated, and it is roughly two-thirds of operating income. The difference went into capital expenditure and working capital for the capacity expansion.",
      "The annual record shows how much the cash flow depends on the cycle. FY2022 produced $368.1M, FY2023 $51.3M, FY2024 negative $108.3M and FY2025 negative $104.7M, before FY2026 turned positive at $300.1M. A business that can burn $100M in a bad year and generate $300M in a good one is a business with real operating leverage and real cyclicality.",
      "The balance sheet holds $580M of net cash, about 0.6x EBITDA on the negative side. That is modest comfort rather than a fortress. It is enough to fund a normal capacity cycle, and it is not enough to fund a very large one without external capital.",
    ],
  },
  valuation: {
    paragraphs: [
      "Discard the P/E of 5.4x. It is computed by dividing the share price by a trailing EPS that does not correspond to the reported net income, and both of those numbers are distorted by the same non-operating item. A multiple built that way tells a reader nothing about the price of the business.",
      "The multiples that survive are EV/EBITDA at 47.2x, EV/Sales at 12.9x and price to free cash flow at 137.1x. On those, Lumentum is expensive in absolute terms. A 12.9x sales multiple for a component supplier is a statement that the market expects the current growth to continue for several years and the margin to hold near 28%.",
      "The peer comparison shows how differently the market treats the optical chain. Ciena trades at 39.9x EV/EBITDA on a 12.3% operating margin, Credo at 38.6x on 31.7%, Coherent at 3.8x on 12.5%. Lumentum at 47.2x is the highest, on a margin that is newer and less proven than Credo's. That premium is the thing to interrogate, not the P/E.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-six analysts contribute to the attributed consensus, with a mean target of $1,100.15 and a range of $685.00 to $1,425.00. Against a last close of $538.59, the mean implies a doubling and the low end implies a 27% gain. That is an unusually confident distribution for a company that lost money at the operating line in three of the last five fiscal years.",
      "The estimates are $1.59B of revenue and $4.60 of EPS next quarter, $6.69B and $24.99 for the fiscal year, and $10.47B and $39.75 for the next. The EPS estimates assume the operating margin holds and that the non-operating items that dominate the reported net income do not repeat. Both assumptions are reasonable for a forward estimate, and both should be checked against the actual income statement each quarter.",
    ],
  },
  risks: {
    intro:
      "The operating business is improving quickly. The risks are the durability of a supply-constrained margin, the capital intensity of staying at the front of the technology, and a set of reported numbers that are hard to read.",
    items: [
      {
        title: "Reported earnings quality",
        severity: "High",
        detail:
          "Net income of $8.62B against operating income of $524.8M, and an EPS with the opposite sign to net income. Until the composition is clear, earnings-based measures are unreliable.",
        watch:
          "The reconciliation between operating income, net income and EPS in each filing.",
      },
      {
        title: "Capacity and capital intensity",
        severity: "High",
        detail:
          "Laser fabrication needs continuous investment. Free cash flow was 9.5% of revenue against a 23.5% operating margin, and the gap is capex.",
        watch:
          "Capital expenditure as a share of revenue and the pace of fab expansion.",
      },
      {
        title: "Customer concentration",
        severity: "Medium",
        detail:
          "Optical components are sold to a small number of transceiver makers and equipment vendors, who pass them to a small number of hyperscalers.",
        watch:
          "Revenue from the largest customers and any shift in transceiver sourcing.",
      },
      {
        title: "Margin normalisation",
        severity: "Medium",
        detail:
          "A 28.5% operating margin in a component business is high. It reflects tight supply as much as manufacturing skill.",
        watch:
          "Gross margin by quarter and lead times for datacom components.",
      },
      {
        title: "Telecom and industrial drag",
        severity: "Low",
        detail:
          "The non-datacom businesses are cyclical and slower growing. They dilute the growth rate and can hide a datacom slowdown.",
        watch:
          "The revenue split between datacom, telecom and industrial lasers.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The only margin in the reported numbers that reflects the business rather than the balance sheet.",
      },
      {
        title: "Capital expenditure",
        detail:
          "The difference between a good year and a cash-consuming one in this industry.",
      },
      {
        title: "EPS reconciliation",
        detail:
          "Net income and EPS cannot keep pointing in opposite directions without an explanation.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Lumentum is an optical component maker that has just completed a genuine turnaround: operating income moved from negative $434.0M in FY2024 to positive $524.8M in FY2026, and the latest quarter reached a 28.5% operating margin on $1.26B of revenue. That is the business story, and it is a good one.",
      "The reported net income of $8.62B is not part of that story. It is the kind of figure that makes a screen show a 5.4x P/E and a reader conclude the shares are cheap. The educational point is that a multiple is only as good as the earnings in the denominator, and a net margin of 239.9% is a signal to go and read the reconciliation rather than a signal to buy.",
      "What is not known is the size and nature of the non-operating gain, why diluted EPS is negative when net income is positive, and how much of the current margin depends on a supply shortage. The AI build-out is a real source of demand for optical components; it does not resolve any of those three questions.",
    ],
    questions: [
      "What produced the $8.1B difference between operating income and net income?",
      "Why is diluted EPS negative when net income is positive?",
      "How much of the 28.5% operating margin comes from tight supply rather than manufacturing advantage?",
      "What capital expenditure is required to keep the datacom capacity at the current growth rate?",
    ],
  },
};
