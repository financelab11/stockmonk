import type { StockStory } from "./types";

export const ALAB: StockStory = {
  ticker: "ALAB",
  kicker: "Semiconductors · AI connectivity",
  title: "Astera Labs sells the wiring diagram of an AI server",
  dek: "A chip company with a 73.9% gross margin and a 30.6% operating margin, growing 115%. The debate is about how much connectivity silicon one accelerator can absorb.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue reached $1.56B, up 115.2%, with a 30.6% operating margin.",
    "Gross margin of 73.9% against a 30.6% operating margin means most of the gross profit is spent on design and selling.",
    "The latest quarter jumped 49% sequentially to $584.9M and operating margin expanded to 30.6%.",
    "Free cash flow was $344.7M, but no trailing earnings multiple is available in the data.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1736297/000173629726000010/alab-20251231.htm",
  irUrl: "https://www.asteralabs.com",
  bigPicture: {
    paragraphs: [
      "Astera Labs designs the silicon that lets processors, memory and accelerators inside a server talk to each other. Its products are retimers, smart cable modules, memory controllers and fabric switches, sold mostly to hyperscalers and the contract manufacturers that build their racks. The company is small in headcount, 756 people, and large in market value at $33.33B.",
      "The financial trajectory is short and steep. FY2022 revenue was $79.9M with a $60.2M operating loss. FY2025 revenue was $852.5M with $173.4M of operating income. Trailing revenue is now $1.56B, up 115.2%, and the latest quarter alone booked $584.9M at a 30.6% operating margin.",
      "What makes the case interesting is the margin structure. A 73.9% gross margin is software-like; a 30.6% operating margin is not. Roughly 43 cents of every revenue dollar is consumed between gross profit and operating profit, which in a 756-person company means engineering and customer qualification, not factories.",
    ],
    quote:
      "In a rack of accelerators, the expensive part is the compute and the hard part is moving data between the compute. Astera sells the hard part.",
  },
  whatItDoes: {
    paragraphs: [
      "Modern AI servers are built from pools of accelerators, CPUs, memory and storage connected by high-speed links. Electrically, those links degrade over distance and lose integrity as speeds rise, so the signal has to be re-timed and re-driven at intervals. Astera's retimers and smart cable modules do that job. Its fabric switches connect multiple accelerators and memory pools within a rack, and its memory controllers manage the connection between processors and memory.",
      "The company is listed as designing and selling in Taiwan and the United States, which is where its customers build and where its supply chain sits. There is no segment disclosure in the data, so the split between retimers, cables, switches and controllers is not visible. That matters, because the four products have different competitive dynamics: retimers compete with integrated alternatives, while fabric switches compete with the networking incumbents.",
    ],
    bullets: [
      {
        title: "Signal integrity",
        detail:
          "Retimers and smart cable modules keep high-speed links working across a rack. The most mature product family.",
      },
      {
        title: "Fabric and memory",
        detail:
          "Switches and memory controllers that let accelerators share data and memory pools. The growth bet.",
      },
      {
        title: "Customer profile",
        detail:
          "Hyperscalers and the manufacturers that assemble their systems. Few buyers, long qualification, large programmes.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Astera sells chips, generally per unit, with pricing that depends on the speed and complexity of the link. A retimer that supports a faster generation commands more than the part it replaces, so revenue can grow even if the number of servers is flat. That is the content story, and it is why the gross margin has held at 73.9% while volume scaled.",
      "The expense base is design. Masks, packaging development, firmware, validation labs and applications engineers who sit with customers for months before a design is confirmed. A chip company at this stage spends heavily before it earns, and the operating margin only appears once a programme reaches volume. The FY2025 numbers show that happening: $852.5M of revenue converted into $173.4M of operating income after years of losses.",
      "One accounting detail is worth understanding. In FY2024 the company reported a $116.1M operating loss and $102.4M of positive free cash flow. A loss that large alongside positive cash generation means the income statement carried a big non-cash charge, and share-based compensation is the usual reason in a young semiconductor firm. It does not make the loss unreal, but it does mean the cash flow statement and the income statement are describing different things.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 120.2% a year across the fiscal years in the data, and the latest quarter grew 153.7%. The sequential step was even more striking: $392.4M in Q2 FY26 became $584.9M in Q3, a 49% increase in three months, with operating margin rising from 22.7% to 30.6% at the same time. That combination, faster growth and better margin, is what a successful new programme looks like when it reaches volume.",
      "The attributed consensus expects $2.03B of revenue and $4.38 of EPS this fiscal year, then $3.35B and $7.11 next year. Two things stand out. First, with $308.4M, $392.4M and $584.9M already booked, the annual figure implies roughly $744M in the current quarter, which is close to the $741.4M consensus for next quarter. Second, the following quarter is expected at $776.5M, only about 5% higher. The near-term estimates therefore describe a business that decelerates sharply after this quarter, while the next-year number requires 65% growth. Both can be true only if something new ramps in the second half.",
      "The growth drivers are the number of accelerators per rack, the amount of memory per accelerator, and the complexity of the fabric between them. All three rise with model size. The brakes are equally clear: a pause in cluster orders, a hyperscaler integrating the retimer function into its own chip, or a networking vendor bundling fabric switching into a switch it already sells.",
    ],
    bullets: [
      {
        title: "Where the gross margin goes",
        detail:
          "About 43 points of the 73.9% gross margin is absorbed before operating profit. Mostly engineering, validation and selling.",
      },
      {
        title: "Why margins appear late",
        detail:
          "Design cost is incurred years before a socket ships in volume. Operating margin arrives with the ramp, not with the design win.",
      },
      {
        title: "What dilutes it",
        detail:
          "A mix shift toward switches or cable modules, which carry more material cost than a bare retimer, would lower the blended margin.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a company crossing from development into volume. FY2022 and FY2023 were loss-making at the operating line on revenue of $79.9M and $115.8M. FY2024 lost $116.1M on $396.3M of revenue, which is the worst combination in the series because the expenses were scaled for a business that had not yet arrived. FY2025 earned $173.4M on $852.5M.",
      "Quarterly, operating margin has moved between 20.1% and 30.6% over the last six quarters while revenue nearly tripled. That is a narrower band than the annual figures suggest, and it tells you the company is managing expenses to revenue rather than letting margin swing. Return on equity is 28.2%; no return on invested capital is available, and with no meaningful debt the difference between the two measures would be small.",
      "Diluted EPS was $2.51 on a trailing basis. The quarterly path, from $0.44 in Q1 FY26 to $0.99 in Q3, is the cleanest evidence that the model is scaling rather than merely growing.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $344.7M over the trailing period, a 22.1% margin, which is lower than the 30.6% operating margin by a meaningful amount. The gap is working capital: inventory and receivables build when revenue grows this quickly, and a chip company has to commit to wafer and packaging capacity ahead of orders.",
      "The cash history shows the same pattern from the other side. Free cash flow was negative $39.8M, negative $15.5M and then positive $102.4M in FY2022 through FY2024, before reaching $281.8M in FY2025. The company has never needed to be rescued by its balance sheet; it has funded design work and inventory from operations and from the cash raised at listing.",
      "No net debt figure is available in the data. For a company with this margin profile and this cash generation, the absence of a leverage problem is the reasonable assumption, but a reader should treat it as an assumption rather than a disclosed fact.",
    ],
  },
  valuation: {
    paragraphs: [
      "There is no trailing P/E, EV/EBITDA or EV/Sales in the data, which is itself a signal: the company's earnings history is too short and too steep for a trailing multiple to mean much. What can be said is that a $33.33B market capitalisation against $1.56B of trailing revenue is roughly twenty-one times sales, and against $344.7M of free cash flow it is close to ninety-seven times. Those are the ratios a reader can compute even when the multiple table is empty.",
      "At that price, the market is not valuing the current quarter. It is valuing the belief that connectivity content per accelerator keeps rising and that Astera holds the socket while it does. The next-year consensus of $3.35B of revenue is the number that matters: it implies the company more than doubles again, and it requires the sequential deceleration implied by the near-term estimates to reverse.",
      "The peer comparison is awkward because the peers are at different stages. Credo grows 165.1% at a 31.7% operating margin and trades at 38.6x EV/EBITDA. Lumentum grows 103.2% at 23.5% and trades at 47.2x. Ciena grows 32.6% at 12.3% and trades at 39.9x. Astera's margin profile is closer to Credo's than to the optical component makers, which is the right comparison to start from.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-two analysts contribute to the attributed consensus, with a mean target of $347.18 and a range of $190.00 to $500.00. The range is wide in absolute terms, spanning more than two and a half times from low to high, and the low end is essentially the last traded price of $190.71. That distribution says the disagreement is not about whether the business is good but about how long the current growth rate lasts.",
      "The estimate path runs from $741.4M next quarter and $776.5M the quarter after, to $2.03B for the fiscal year and $3.35B the year after. EPS is expected at $4.38 and then $7.11. These are third-party forecasts. The useful thing to do with them is check the internal consistency: the quarterly numbers imply a sharp slowdown, the annual numbers imply an acceleration. A reader should decide which of those two the orders actually support.",
    ],
  },
  risks: {
    intro:
      "Astera has a strong margin and a fast-growing product. The risks sit in who buys it, what happens when the architecture changes, and what the share price already assumes.",
    items: [
      {
        title: "Hyperscaler concentration",
        severity: "High",
        detail:
          "A small number of hyperscalers design their own racks and qualify their own suppliers. Losing one programme removes a large block of revenue at once.",
        watch:
          "Customer concentration disclosures and the number of programmes in volume.",
      },
      {
        title: "Integration into custom silicon",
        severity: "High",
        detail:
          "Retimer and switch functions can be absorbed into an accelerator or a switch ASIC. That removes the standalone part rather than competing with it.",
        watch:
          "Whether new accelerator designs still need discrete retimers per link.",
      },
      {
        title: "The second-half ramp in the estimates",
        severity: "Medium",
        detail:
          "Near-term estimates imply about 5% sequential growth while the annual estimate requires 65% growth for the next year. Something has to change course.",
        watch:
          "The gap between quarterly estimates and the annual number, updated each quarter.",
      },
      {
        title: "Gross margin mix",
        severity: "Medium",
        detail:
          "Cable modules and switches carry more material content than bare retimers. A mix shift toward systems lowers the 73.9% gross margin.",
        watch:
          "Gross margin by quarter against the product mix disclosed in filings.",
      },
      {
        title: "Expense growth ahead of revenue",
        severity: "Medium",
        detail:
          "FY2024 showed what happens when the cost base is built for a business that has not arrived: a $116.1M operating loss on $396.3M of revenue.",
        watch:
          "Operating expense growth relative to revenue growth in each quarter.",
      },
    ],
    watchlist: [
      {
        title: "Content per accelerator",
        detail:
          "The dollar value of Astera parts in a typical rack is the single variable that drives the growth story.",
      },
      {
        title: "Share-based compensation",
        detail:
          "It explains the gap between operating losses and positive free cash flow, and it is a real cost to owners.",
      },
      {
        title: "Sequential revenue growth",
        detail:
          "The annual estimates depend on reacceleration. Two flat quarters would break that assumption.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Astera Labs is a connectivity chip designer with a 73.9% gross margin, a 30.6% operating margin and $1.56B of trailing revenue growing at 115.2%. It has crossed from losses to profits in three years and generates $344.7M of free cash flow. The product is technically demanding and the customer list is short and demanding.",
      "The educational point is the shape of a chip company's economics. Gross margin reflects the value of the design; operating margin reflects how much of that value is consumed by the next design. Astera spends about 43 points of gross margin on engineering and selling, which is normal for a company whose products are re-specified every generation. That spending is what makes the next socket possible, and it is also why a single lost programme hurts so much.",
      "What is not known is the true concentration of revenue, how much of the next year's estimate depends on programmes already awarded, and whether the sequential slowdown implied by the quarterly estimates is conservative or descriptive. The AI build-out is a real driver of this business; it is not a promise that the current growth rate continues.",
    ],
    questions: [
      "What share of revenue comes from the largest two or three customers?",
      "Does the next generation of accelerators need more or fewer discrete retimers per link?",
      "Why do the quarterly estimates imply a slowdown while the annual estimate implies acceleration?",
      "How much of the 73.9% gross margin survives a mix shift toward switches and cables?",
    ],
  },
};
