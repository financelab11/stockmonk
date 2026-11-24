import type { StockStory } from "./types";

export const ALAB: StockStory = {
  "ticker": "ALAB",
  "kicker": "Semiconductors · AI connectivity",
  "title": "Astera Labs sells the wiring diagram of an AI server",
  "dek": "A chip company with a 73.9% gross margin and a 30.6% operating margin, growing 115%. The debate is about how much connectivity silicon one accelerator can absorb.",
  "readingMinutes": 9,
  "takeaways": [
    "Sales of $1.6B grew 115.2% at a 73.9% gross margin, and the September quarter reached a 30.6% operating margin on $584.9M.",
    "Free cash flow was $344.7M, a 22.1% margin, and net cash of $1.4B means the design cycle is funded without debt.",
    "At 89.4x EBITDA and 111.0x free cash flow the shares are the most expensive in the connectivity group, above Coherent at 36.0x and Ciena at 44.1x.",
    "The fiscal 2026 estimate of $2.0B in revenue is more than double the $852.5M reported for 2025, with EPS estimated at $4.38."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1736297/000173629726000010/alab-20251231.htm",
  "irUrl": "https://www.asteralabs.com",
  "bigPicture": {
    "paragraphs": [
      "The September 2026 quarter produced $584.9M of revenue, up from $392.4M in June, with the operating margin rising to 30.6% from 22.7%. That is what a chip programme looks like when it reaches volume: the design was paid for in earlier quarters and the incremental revenue carried a very high contribution. The result matters because it is the first quarter at a scale where the fixed design cost is small relative to revenue, and it is also the quarter that sets the base for the next estimate.",
      "Astera sells retimers, smart cable modules, fabric switches and memory controllers into AI racks. The products do different jobs: retimers keep a high-speed link working across a rack, fabric switches let accelerators share data and memory pools, and controllers manage the processor-to-memory connection. The customer list is short because hyperscalers design their own racks and qualify their own suppliers, and the geography of reported revenue — Singapore 32.5%, China 30.1%, Taiwan 29.0% — reflects where systems are assembled rather than where they are used.",
      "How much connectivity silicon one accelerator can absorb is the valuation question. At 89.4x EBITDA and 23.7x sales the shares are priced above Coherent at 36.0x and Ciena at 44.1x, for a 25.5% operating margin that is higher than either. The risk is not that AI racks stop being built; it is that the retimer and switch functions get absorbed into the accelerator or the switch ASIC, which removes the standalone part rather than competing with it."
    ],
    "quote": "Astera's margin depends on the accelerator needing a discrete retimer for every high-speed link, and that is an architectural assumption."
  },
  "whatItDoes": {
    "paragraphs": [
      "Modern AI servers are built from pools of accelerators, CPUs, memory and storage connected by high-speed links. Electrically, those links degrade over distance and lose integrity as speeds rise, so the signal has to be re-timed and re-driven at intervals. Astera's retimers and smart cable modules do that job. Its fabric switches connect multiple accelerators and memory pools within a rack, and its memory controllers manage the connection between processors and memory.",
      "The company is listed as designing and selling in Taiwan and the United States, which is where its customers build and where its supply chain sits. There is no segment disclosure in the data, so the split between retimers, cables, switches and controllers is not visible. That matters, because the four products have different competitive dynamics: retimers compete with integrated alternatives, while fabric switches compete with the networking incumbents."
    ],
    "bullets": [
      {
        "title": "Signal integrity",
        "detail": "Retimers and smart cable modules keep high-speed links working across a rack. The most mature product family."
      },
      {
        "title": "Fabric and memory",
        "detail": "Switches and memory controllers that let accelerators share data and memory pools. The growth bet."
      },
      {
        "title": "Customer profile",
        "detail": "Hyperscalers and the manufacturers that assemble their systems. Few buyers, long qualification, large programmes."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Astera sells chips, generally per unit, with pricing that depends on the speed and complexity of the link. A retimer that supports a faster generation commands more than the part it replaces, so revenue can grow even if the number of servers is flat. That is the content story, and it is why the gross margin has held at 73.9% while volume scaled.",
      "The expense base is design. Masks, packaging development, firmware, validation labs and applications engineers who sit with customers for months before a design is confirmed. A chip company at this stage spends heavily before it earns, and the operating margin only appears once a programme reaches volume. The FY2025 numbers show that happening: $852.5M of revenue converted into $173.4M of operating income after years of losses.",
      "One accounting detail is worth understanding. In FY2024 the company reported a $116.1M operating loss and $102.4M of positive free cash flow. A loss that large alongside positive cash generation means the income statement carried a big non-cash charge, and share-based compensation is the usual reason in a young semiconductor firm. It does not make the loss unreal, but it does mean the cash flow statement and the income statement are describing different things."
    ]
  },
  "growth": {
    "paragraphs": [
      "At $79.9M of revenue in FY2022, Astera was a design house with a product; by FY2025 it had $852.5M, and the trailing figure is $1.6B. The path ran through $115.8M in FY2023 and $396.3M in FY2024, and the quarterly sequence through 2026 is $308.4M, $392.4M and $584.9M. The third quarter added $192.5M sequentially — more than the whole of FY2022 — so growth here is a function of programmes reaching volume, not of a market expanding smoothly.",
      "The estimates assume the volume holds: $741.9M next quarter, $2.0B for fiscal 2026 and $3.4B for 2027. The near-term number implies about 27% sequential growth from the September quarter, and the annual number implies the December quarter is not a peak. The product mix is the unknown: cable modules and switches carry more material content than bare retimers, so a shift toward systems lowers the 73.9% gross margin even as revenue rises."
    ],
    "bullets": [
      {
        "title": "Content per link",
        "detail": "A retimer for a faster generation sells for more than the part it replaces, so revenue can grow even when server counts are flat."
      },
      {
        "title": "Programme concentration",
        "detail": "A handful of hyperscalers qualify their own suppliers, and losing one programme removes a large block of revenue at once."
      },
      {
        "title": "Mix and margin",
        "detail": "Switches and cable modules carry more material cost than bare retimers, which is why the 73.9% gross margin is not a fixed feature."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The gross margin has been remarkably stable: 73.5% in FY2022, 68.9% in FY2023, 76.4% in FY2024, 75.7% in FY2025 and 73.9% trailing. That stability through a period in which revenue rose from $79.9M to $1.6B is evidence that the product is specified rather than bid. The operating margin is the volatile line: -75.4% in FY2022, -25.5% in FY2023, -29.3% in FY2024, 20.3% in FY2025 and 25.5% trailing, because design spending is committed before the revenue arrives.",
      "The FY2024 accounts are the instructive case: revenue of $396.3M produced a $116.1M operating loss and $102.4M of positive free cash flow. That combination means the income statement carried a large non-cash charge, most likely share-based compensation, and it means the cash flow statement and the income statement were describing different stages of the same business. Return on invested capital is 19.9% trailing and return on equity 23.1%, both helped by a net cash balance sheet."
    ]
  },
  "cash": {
    "paragraphs": [
      "Astera converted $319.3M of operating cash flow in FY2025 against $37.5M of capex, leaving $281.8M of free cash flow; the trailing figure is $344.7M, a 22.1% margin. The fabless model keeps capex low, so cash conversion depends on working capital and on how much inventory is built ahead of a ramp. The September 2026 quarter produced $133.9M of free cash flow, the highest of the year, which is consistent with revenue reaching scale.",
      "With $1.4B of net cash and no debt, interest cover is not meaningful. The company has funded the transition from a $79.9M revenue base to $1.6B without leverage, and the cash balance is roughly 3.7% of the market capitalisation. No buyback or dividend is disclosed. For a company at this stage the relevant question is not what it returns but whether the $344.7M of free cash flow is repeatable when the next design cycle raises spending."
    ]
  },
  "valuation": {
    "paragraphs": [
      "The {{evEbitda}} EBITDA multiple is roughly three times the 31.0x peer median, and a 111.0x price to free cash flow leaves little room for a miss on the next ramp. Coherent at 36.0x grows 30.8% with a 12.5% operating margin; Ciena at 44.1x grows 32.6% with 12.3%. Astera's 115.2% growth and 25.5% margin are better, and the multiple already assumes they persist.",
      "The fiscal 2026 estimate of $4.38 implies about 50x, and $7.15 for 2027 about 31x. The compression from 83x trailing to 31x forward is the entire bull case: earnings are expected to more than triple while the price stays still. That requires revenue of $3.4B in 2027, four times the 2025 figure, and a gross margin near 74% through a mix shift toward switches and cables.",
      "Architectural persistence is the condition: each accelerator generation needing more discrete connectivity parts, and Astera holding the socket. Integration would break it, with the retimer or switch function moving into the accelerator package or the switch ASIC and the standalone part disappearing. The seven neutral views among twenty-five and the $225 low target are the market's way of pricing that possibility without rejecting the growth."
    ]
  },
  "analysts": {
    "paragraphs": [
      "As of 18 November 2026, Yahoo Finance shows 22 analysts on Astera with a mean target of $344 and a range of $225 to $500 against a $219 price. The mean is 57% above the market and the low end is only 3% above it, so even the cautious end of the range assumes the growth continues; the disagreement is about the multiple, not the business.",
      "Astera's 2026 estimate is $2.0B of revenue and $4.38 of EPS, with 2027 at $3.4B and $7.15. Revisions are strongly positive at +8.5% over 30, 60 and 90 days, and the last four quarters beat by 11% to 16%. The consensus assumes the September quarter's $584.9M is a base rather than a peak and that the gross margin holds near 74% as switches and cable modules become a larger share."
    ]
  },
  "risks": {
    "intro": "Astera has a strong margin and a fast-growing product. The risks sit in who buys it, what happens when the architecture changes, and what the share price already assumes.",
    "items": [
      {
        "title": "Hyperscaler concentration",
        "severity": "High",
        "detail": "A small number of hyperscalers design their own racks and qualify their own suppliers. Losing one programme removes a large block of revenue at once.",
        "watch": "Customer concentration disclosures and the number of programmes in volume."
      },
      {
        "title": "Integration into custom silicon",
        "severity": "High",
        "detail": "Retimer and switch functions can be absorbed into an accelerator or a switch ASIC. That removes the standalone part rather than competing with it.",
        "watch": "Whether new accelerator designs still need discrete retimers per link."
      },
      {
        "title": "The second-half ramp in the estimates",
        "severity": "Medium",
        "detail": "Near-term estimates imply about 5% sequential growth while the annual estimate requires 65% growth for the next year. Something has to change course.",
        "watch": "The gap between quarterly estimates and the annual number, updated each quarter."
      },
      {
        "title": "Gross margin mix",
        "severity": "Medium",
        "detail": "Cable modules and switches carry more material content than bare retimers. A mix shift toward systems lowers the 73.9% gross margin.",
        "watch": "Gross margin by quarter against the product mix disclosed in filings."
      },
      {
        "title": "Expense growth ahead of revenue",
        "severity": "Medium",
        "detail": "FY2024 showed what happens when the cost base is built for a business that has not arrived: a $116.1M operating loss on $396.3M of revenue.",
        "watch": "Operating expense growth relative to revenue growth in each quarter."
      }
    ],
    "watchlist": [
      {
        "title": "Content per accelerator",
        "detail": "The dollar value of Astera parts in a typical rack is the single variable that drives the growth story."
      },
      {
        "title": "Share-based compensation",
        "detail": "It explains the gap between operating losses and positive free cash flow, and it is a real cost to owners."
      },
      {
        "title": "Sequential revenue growth",
        "detail": "The annual estimates depend on reacceleration. Two flat quarters would break that assumption."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Astera Labs is a connectivity chip designer with a 73.9% gross margin, a 30.6% operating margin and $1.56B of trailing revenue growing at 115.2%. It has crossed from losses to profits in three years and generates $344.7M of free cash flow. The product is technically demanding and the customer list is short and demanding.",
      "The educational point is the shape of a chip company's economics. Gross margin reflects the value of the design; operating margin reflects how much of that value is consumed by the next design. Astera spends about 43 points of gross margin on engineering and selling, which is normal for a company whose products are re-specified every generation. That spending is what makes the next socket possible, and it is also why a single lost programme hurts so much.",
      "What is not known is the true concentration of revenue, how much of the next year's estimate depends on programmes already awarded, and whether the sequential slowdown implied by the quarterly estimates is conservative or descriptive. The AI build-out is a real driver of this business; it is not a promise that the current growth rate continues."
    ],
    "questions": [
      "What share of revenue comes from the largest two or three customers?",
      "Does the next generation of accelerators need more or fewer discrete retimers per link?",
      "Why do the quarterly estimates imply a slowdown while the annual estimate implies acceleration?",
      "How much of the 73.9% gross margin survives a mix shift toward switches and cables?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
