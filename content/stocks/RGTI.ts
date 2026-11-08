import type { StockStory } from "./types";

export const RGTI: StockStory = {
  ticker: "RGTI",
  kicker: "Quantum · Computer Hardware",
  title: "Rigetti fabricates its own quantum chips, which is both the bet and the burden",
  dek: "The company designs and makes its superconducting processors in-house, so every delay is a manufacturing delay. Revenue was $7.1M in FY2025 against an operating loss of $84.7M, and the equity is valued at $3.9B.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $13.4M, up 68.5%, after three consecutive years in which annual revenue fell.",
    "The operating margin is -727.6% and free cash flow is -$87.6M, a -655.9% margin.",
    "Net cash of $443.5M is the whole funding base for a business burning roughly $77.2M a year.",
    "EV/sales of 259.1x prices a commercial business that does not yet exist.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1838359/000110465926023454/rgti-20251231x10k.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001838359&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Rigetti Computing builds quantum computers and the superconducting processors inside them. That vertical integration is unusual among the listed quantum names: most buy or outsource parts of the stack. Rigetti says its machines are integrated into public, private and hybrid clouds through its Quantum Cloud Services platform, so the same hardware can be sold as a system or rented by the hour.",
      "The company was founded in 2013, is based in Berkeley, California, and employs 144 people. That headcount is small for a hardware manufacturer, which tells you how much of the fabrication and testing depends on a narrow group of specialists.",
      "Trailing revenue is $13.4M, up 68.5%, and free cash flow is -$87.6M. The market value is $3.90B, or 259.1x trailing sales. There are only three listed pure-play quantum hardware companies of any size, and all three are priced on the same logic: a small revenue base, a large cash pile, and a technology timeline that decides whether either is worth anything.",
    ],
    quote:
      "Owning the fabrication line gives Rigetti control over its roadmap. It also means the company pays for the factory whether or not the machines sell.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is a superconducting quantum processor plus the dilution refrigeration and control electronics needed to run it. Rigetti sells the complete system and also sells access to it through the cloud. A customer that wants to experiment can rent time; a customer that wants its own machine can buy one. Both routes use the same processor design.",
      "The customers are research organisations, national laboratories, universities and corporate teams exploring optimisation, chemistry and materials problems. These are buyers with budget cycles and technical gatekeepers, which is why revenue arrives in lumps tied to a handful of systems rather than in a smooth subscription line.",
      "Because there is a single reported revenue line, hardware sales and cloud usage cannot be separated in the statements. For a company at this stage that is a real gap: a $5M quarter driven by one machine delivery tells a different story from a $5M quarter driven by hundreds of recurring users.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the price of a system or the price of time on one. Gross margin of 34.6% is the honest signature of a hardware business: the processor, the refrigeration, the wiring and the service engineer all sit in cost of revenue, so each sale carries a substantial bill of materials.",
      "The cost base underneath that gross profit is the fabrication operation and the engineering team. In FY2025 revenue was $7.1M and the operating loss was $84.7M, so the loss was nearly twelve times the revenue. That ratio is not a pricing problem; it is the cost of building a manufacturing capability before there is volume to fill it.",
      "The operating leverage, when it comes, will come from selling more systems off the same fabrication line. Fixed costs stay broadly flat while revenue per machine rises. Until then, every additional quarter of development adds to the loss, which is why the cash balance rather than the gross margin is the number that governs the story.",
    ],
  },
  growth: {
    paragraphs: [
      "The annual revenue record is not a growth story yet. Revenue was $8.2M in FY2021, $13.1M in FY2022, $12.0M in FY2023, $10.8M in FY2024 and $7.1M in FY2025. Three consecutive declines, in a period when the market value of quantum companies rose sharply. The trailing 68.5% growth comes from a low base: quarterly revenue moved from $1.5M in Q1 FY2025 to $5.1M in Q2 FY2026.",
      "That pattern says the business is project-driven. A couple of system deliveries can double a quarter; their absence can halve a year. The third-party estimates reflect the same lumpiness: $3.5M for the next quarter, then $9.8M for the following one. A forecast that jumps nearly threefold between consecutive quarters is a schedule of expected deliveries, not a demand curve.",
      "The durable growth drivers are technical: more qubits, lower error rates, and a modular architecture that lets a machine scale beyond what one chip can hold. The thing that would slow growth is simpler — a customer deciding that the current generation of machines does not solve a problem it cannot already solve on a classical computer.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating margins in the recent quarters run from -1469.6% in Q1 FY2025 to -546.2% in Q2 FY2026. The improvement tracks revenue, not cost reduction: operating losses of roughly $20M to $30M a quarter have stayed in a similar band while revenue moved up.",
      "The net figures are noisier than the operating ones. Q1 FY2025 shows net income of $42.6M on revenue of $1.5M, and Q3 FY2025 shows a net loss of $201.0M on revenue of $1.9M. Quarterly EPS swings between positive and negative in ways that cannot come from selling quantum computers. Non-operating items are doing the work, and the trailing net margin of -1787.4% is the arithmetic of that noise.",
      "Return on invested capital of -74.7% and return on equity of -43.7% both say the same thing without the distortion: the capital in this business is being consumed. The operating margin and the cash burn are the measures to follow.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$77.2M in FY2025 and -$87.6M on a trailing basis, a -655.9% margin. The annual series — -$85.4M, -$59.6M, -$61.7M, -$77.2M — has been remarkably stable for a company whose revenue moves around. That is what a fixed engineering and fabrication cost base looks like.",
      "The balance sheet holds $443.5M of net cash and no meaningful debt burden. Against an annual burn near $77M, that is a multi-year runway if spending does not rise. If the company accelerates fabrication or hires to support a larger machine, the runway shortens in proportion.",
      "Capital intensity is the part that separates Rigetti from a software story. A fab consumes equipment and yield learning, and both are paid for before the revenue arrives. The cash pile buys time; it does not buy customers.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $11.75 the market value is $3.90B against $13.4M of trailing revenue, or 259.1x sales. The P/E of -16.8x and EV/EBITDA of -45.2x are artefacts of negative earnings and carry no information about value. The approved factor chip describes the shares as in the 99th percentile for cheapness on EV/EBITDA within the coverage universe, which is a warning about the metric rather than a comment on the price.",
      "The stock sits near the bottom of its 52-week range of $9.19 to $37.14, having returned -65.8% over one year and 7.1% over five. That combination — a large five-year gain and a brutal single year — is typical of a name priced on sentiment toward a technology timeline.",
      "For context, IonQ trades at 34.6x sales on $380.4M of revenue, and D-Wave at 276.3x on $12.4M. Rigetti's multiple is in line with D-Wave's despite a fraction of IonQ's revenue. On a sales basis the three are being valued as options with different strike prices, not as businesses with different economics.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twelve analysts contribute to the attributed third-party consensus, with a mean target of $26.69 and a range of $17.30 to $40.00. The mean is far above the $11.75 close, which is worth pausing on: a target set before a sharp drawdown often says more about when it was written than about the business.",
      "The revenue estimates are $22.9M for the current fiscal year and $44.3M for the next, with EPS of -$0.19 and -$0.21. Ten analysts cover each year, so these are reasonably broad numbers. They describe a company that roughly doubles revenue and continues to lose money at a similar per-share rate.",
      "The near-term quarterly estimates — $3.5M then $9.8M — imply a large delivery landing in the second of the two quarters. That is a schedule assumption, and schedules in hardware slip. Read the quarterly estimate as a hope about timing, not a statement about demand.",
    ],
  },
  risks: {
    intro:
      "Rigetti's risks concentrate in one place: the distance between the technology it is building and the revenue it can charge for it today.",
    items: [
      {
        title: "Fabrication execution",
        severity: "High",
        detail:
          "Building processors in-house means yield, equipment and process problems land directly on the roadmap. A fab issue delays revenue and does not reduce the cost base.",
        watch:
          "Processor yield, machine delivery schedules and any change to the fabrication footprint.",
      },
      {
        title: "Cash runway",
        severity: "High",
        detail:
          "$443.5M of net cash against a burn near $77M a year gives several years, but the company has no operating cash inflow to extend it.",
        watch:
          "Quarterly cash used in operations and the pace of capital spending on fabrication.",
      },
      {
        title: "Revenue concentration and lumpiness",
        severity: "High",
        detail:
          "Annual revenue fell from $13.1M in FY2022 to $7.1M in FY2025. A handful of system sales decide the year.",
        watch:
          "Backlog disclosure, the number of systems delivered and the split between cloud usage and hardware.",
      },
      {
        title: "Technical competition",
        severity: "Medium",
        detail:
          "Superconducting circuits compete with trapped ions and annealing machines, and large technology companies are funding their own programmes.",
        watch:
          "Independent error-rate benchmarks and published results on problems classical machines cannot solve.",
      },
      {
        title: "Equity dilution",
        severity: "Medium",
        detail:
          "Losses are funded from the balance sheet and from share issuance. A lower share price makes each raise more expensive for existing holders.",
        watch:
          "Share count and any new issuance facility.",
      },
      {
        title: "Valuation sensitivity",
        severity: "Medium",
        detail:
          "At 259.1x sales, the price reflects expectations rather than current cash flows. Small changes in the perceived timeline move the shares far more than operating results.",
        watch:
          "The sales multiple relative to peers and the size of the cash balance relative to market value.",
      },
    ],
    watchlist: [
      {
        title: "System deliveries",
        detail:
          "The timing of machine sales is the single largest swing factor in quarterly revenue.",
      },
      {
        title: "Cash used in operations",
        detail:
          "The burn rate decides how many years of development the current balance funds.",
      },
      {
        title: "Error rates",
        detail:
          "Progress on fidelity and error correction is the leading indicator of commercial usefulness.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Rigetti is a vertically integrated quantum hardware company with $13.4M of trailing revenue, a -727.6% operating margin and $443.5M of net cash. Revenue has been lumpy and, at the annual level, declining until the most recent quarters. The improvement in FY2026 quarters is real but comes off a very small base.",
      "The investment question is whether in-house fabrication is an advantage or a fixed cost the company cannot fill. If quantum computing reaches a commercial market, owning the process is a durable edge. If the market takes another decade, the fab is a bill that arrives every quarter regardless.",
      "What the statements do not show is how close the technology is to solving a problem someone will pay to solve repeatedly. Until that appears, the balance sheet is the story, and the balance sheet has a clock on it.",
    ],
    questions: [
      "How much of the recent quarterly revenue came from system sales rather than recurring cloud usage?",
      "What annual burn should be assumed if fabrication spending rises?",
      "Which published benchmark would show the processor is closing the gap to a useful machine?",
      "At what share price would the next equity raise become materially dilutive?",
    ],
  },
};
