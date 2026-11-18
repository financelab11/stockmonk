import type { StockStory } from "./types";

export const RMBS: StockStory = {
  "ticker": "RMBS",
  "kicker": "Semiconductors · Interface IP and memory chips",
  "title": "Rambus earns royalties on memory interfaces and sells the chips that use them",
  "dek": "A 79.1% gross margin is what a licensing business looks like. The growth is coming from physical memory-interface chips, which carry different economics and a different set of customers.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $796.1M trailing twelve months, +17.3% year over year.",
    "Profitability: 36.3% operating margin and 33.4% net margin.",
    "Cash: $312.9M free cash flow, a 39.3% margin.",
    "Scorecard: 69/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/917273/000119312526057101/rmbs-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000917273&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "RAMBUS INC. generated $796.1M of revenue over the last twelve months, +17.3% versus the prior year. The cycle is driven by inventory, utilisation and the next node or packaging transition.",
      "The latest reported quarter was Q3 FY26, with $218.3M of revenue and an operating margin of 38.3%. The stock closed at $78.72 on 2026-11-17, giving a market capitalization of $8.4B.",
      "The shares sit 10% of the way up their 52-week range ($68.19 to $174.10). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Royalty revenue has no cost of goods in the usual sense. That is why the gross margin is 79.1%, and why a shift in the revenue mix moves the whole income statement."
  },
  "whatItDoes": {
    "paragraphs": [
      "The licensing side sells access to interface technology that has been written into industry memory standards. A memory maker building a module that must meet a published specification needs the circuit designs and the patent rights that make it compliant, and Rambus holds a portfolio of both. The revenue arrives as royalties per unit or as fixed licence payments, and the marginal cost of an additional licensee is close to zero.",
      "The product side sells chips: register clock drivers and data buffers that sit on a memory module, clock generators, and interface components that clean up signals between a processor and DRAM. These are manufactured through partners and sold to module makers, server OEMs and hyperscale customers. The design win is the unit of competition, because once a part is qualified on a platform it tends to stay there for the life of that platform.",
      "The two halves reinforce each other in a way that is easy to miss. Standards work gives Rambus early sight of where interfaces are heading, and product designs give it working silicon that informs the next round of standards. Neither business would be as strong alone, but they are valued by the market on very different multiples."
    ],
    "bullets": [
      {
        "title": "Patent and technology licensing",
        "detail": "Royalties and licence fees on memory-interface standards. Near-zero marginal cost and the source of the 79.1% gross margin."
      },
      {
        "title": "Memory-interface chips",
        "detail": "Register clock drivers, data buffers and clocking parts sold onto modules and boards. Revenue follows server and data-centre builds."
      },
      {
        "title": "Silicon IP",
        "detail": "Interface core designs licensed to chip developers who would rather buy the block than build it."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Start with the gross margin. At 79.1%, Rambus keeps four-fifths of each revenue dollar before operating expense. That is not a manufacturing achievement; it is the signature of licensing, where the product has already been developed and the incremental delivery costs almost nothing. The chip business dilutes that margin, which means the blended figure is itself a disclosure about mix: when licensing grows faster, gross margin rises.",
      "Operating margin of 36.3% against a 79.1% gross margin leaves a large expense base, and that is the second thing to understand. Patent litigation, standards participation and advanced interface design are all expensive and largely fixed. Once the cost base is covered, additional royalty revenue falls almost entirely to operating profit, which is why operating income went from $24.3M in FY2021 to $260.2M in FY2025 on revenue that went from $328.3M to $707.6M.",
      "The product business works differently. Chips carry silicon cost, inventory and price competition, so incremental revenue there converts at a much lower rate. It is still worth having: it compounds the royalty base, it keeps the engineering organisation close to real silicon, and it grows with the memory content of each server rather than with the signing of agreements."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 20.8% a year across the fiscal years in the dataset, and the latest quarter changed +22.3% year over year. Third-party estimates for the current fiscal year point to $838.4M of revenue and $3.11 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 36.3% and return on invested capital of 35.6% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Memory content",
        "detail": "More DRAM per server and more channels per platform mean more interface chips per system."
      },
      {
        "title": "Standards transitions",
        "detail": "Each new DRAM generation resets the interface design and creates a window to win or lose the socket."
      },
      {
        "title": "Licence renewals",
        "detail": "A small number of agreements carry a large share of royalty revenue, and their terms change infrequently."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 36.3%, the net margin is 33.4% and diluted EPS is $2.43. The latest quarter's operating margin was 38.3%.",
      "Return on equity is 18.8%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $218.3M, an operating margin of 38.3% and a net margin of 34.2%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $312.9M, a 39.3% margin. The balance sheet carries $776.9M of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $312.9M over the last twelve months and net debt was -$776.9M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 31.7x trailing earnings and 25.4x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $140.57; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "7 analysts contribute to the third-party consensus. The mean target is $140.57, with a range of $103.00 to $165.00.",
      "Current-year estimates call for $838.4M of revenue and $3.11 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 7 analysts with a mean target of $140.57; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Rambus is financially strong and legally exposed at the same time. The balance sheet is not the risk; the durability of the royalty base is.",
    "items": [
      {
        "title": "Licence renewal risk",
        "severity": "High",
        "detail": "A small number of agreements carry a large share of royalty revenue. A renegotiation at lower rates would reduce revenue without any change in the underlying technology or demand.",
        "watch": "Licensing revenue by type, contract duration disclosures and any litigation update."
      },
      {
        "title": "Memory cycle",
        "severity": "High",
        "detail": "The product business sells into server and data-centre memory builds. A DRAM downcycle cuts unit volumes and pricing at the same time.",
        "watch": "Memory-interface product revenue and the memory makers' capital plans."
      },
      {
        "title": "Standards displacement",
        "severity": "Medium",
        "detail": "Rambus earns its position because its technology is in the standard. A standards change that favours a different interface approach would erode both licensing and product demand.",
        "watch": "Participation in standards bodies and design wins on each new DRAM generation."
      },
      {
        "title": "Net income distortion",
        "severity": "Medium",
        "detail": "Non-operating items have produced a loss in a profitable year and a net figure far above operating income in another. Valuations built on the earnings multiple inherit that noise.",
        "watch": "The gap between operating income and net income each quarter."
      },
      {
        "title": "Concentration in a few customers",
        "severity": "Medium",
        "detail": "Memory manufacturing is an industry with very few participants, so both licensing and product revenue depend on a handful of accounts.",
        "watch": "Top-customer percentages and the number of licensees contributing more than 10% of revenue."
      },
      {
        "title": "Litigation and patent challenge",
        "severity": "Low",
        "detail": "Licensing businesses are periodically tested in court. A successful challenge to a core patent would remove revenue that costs nothing to deliver.",
        "watch": "Legal proceedings disclosures and the outcome of any review of key patents."
      }
    ],
    "watchlist": [
      {
        "title": "Licensing versus product mix",
        "detail": "The blended gross margin reveals which engine grew, and the two deserve different multiples."
      },
      {
        "title": "Operating income",
        "detail": "The cleanest measure of the business, given how often the net line is moved by non-operating items."
      },
      {
        "title": "Free cash flow",
        "detail": "It has exceeded net income every year shown and is the basis for the most defensible multiple."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Rambus is a licensing business with a chip business attached, and the financial statements show both. The 79.1% gross margin and the operating leverage from $24.3M to $260.2M of operating income come from royalties. The revenue growth beyond the licensing base comes from memory-interface silicon.",
      "Three things the dataset cannot settle: the split between recurring royalty and unit-linked product, how long the current licence agreements run, and how much of the trailing free cash flow reflects timing rather than a steady rate.",
      "The lesson is narrower than it looks: for a company with a large licensing base, net income is the least informative line on the page. Operating income and cash flow describe the business; the net line describes the year."
    ],
    "questions": [
      "What share of revenue is royalty-based, and when do the largest agreements renew?",
      "How much of the product revenue depends on a single memory generation?",
      "Why has net income diverged so far from operating income in both directions?",
      "Is the 79.1% gross margin rising or falling as product revenue grows?"
    ]
  }
};
