import type { StockStory } from "./types";

export const RMBS: StockStory = {
  "ticker": "RMBS",
  "kicker": "Semiconductors · Interface IP and memory chips",
  "title": "Rambus earns royalties on memory interfaces and sells the chips that use them",
  "dek": "A 79.1% gross margin is what a licensing business looks like. The growth is coming from physical memory-interface chips, which carry different economics and a different set of customers.",
  "readingMinutes": 9,
  "takeaways": [
    "September quarter revenue was $218.3M at a 38.3% operating margin, with EPS of $0.69 and free cash flow of $95.9M.",
    "Operating income rose from $24.3M in FY2021 to $260.2M in FY2025, so about 62 cents of each added revenue dollar reached the operating line.",
    "At 30.5x earnings and 24.3x EBITDA the shares trade below peer medians of 71.5x and 33.8x despite the group's highest operating margin.",
    "Net cash of $776.9M is about a tenth of the market value, and the 3.9% free-cash-flow yield is the highest in the peer group."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/917273/000119312526057101/rmbs-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000917273&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Royalties and interface chips produced $218.3M of revenue in the September 2026 quarter, a 38.3% operating margin and $0.69 of EPS. Trailing revenue is $796.1M, up 17.3%, and free cash flow is 39.3% of it. The shares have fallen 18.4% over a year while estimates rose, so the movement is a derating rather than a deterioration in the business. That leaves the distance between the operating record and the multiple as the central question.",
      "The licensing half sells access to interface technology written into memory standards, and the product half sells register clock drivers, data buffers and clocking parts that sit on a module. The first carries a near-zero marginal cost and the 79.1% gross margin; the second carries silicon cost, inventory and price competition. Korea supplied 46.5% of revenue and Singapore 23.2%, so the customer base is the memory industry itself, which is both the strength and the concentration.",
      "At 30.5x earnings and 24.3x EBITDA, Rambus trades at less than half the 71.5x peer earnings multiple and below the 33.8x EBITDA median, despite the highest operating margin in the group at 36.3%. Net cash of $776.9M is roughly a tenth of the market value. The discount is a judgement on licence renewals and the memory cycle, not on the delivered economics; the test is whether those risks are as large as the gap implies."
    ],
    "quote": "Rambus keeps 79.1 cents of every revenue dollar before operating expense because its portfolio is written into memory standards; the discount is about renewal, not delivery."
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
      "Memory content per server is the driver that matters. Each new DRAM generation adds interface components and raises the value of the designs Rambus licenses, so revenue grows with the memory content of a system rather than with the number of systems. The product line also compounds the royalty base, because a design win on a module generation tends to persist for that generation. Reported revenue went from $707.6M in FY2025 to $796.1M trailing, and the September quarter was 22.3% above the year-earlier $178.5M.",
      "The estimate path is steady rather than explosive: $838.4M for the current year, up 18.8%, and $1.0B next, up 20.5%, with the December quarter at $231.6M. What is not disclosed is the split between royalty and product revenue, so the durability of the base cannot be separated from the cyclicality of the chip business. A renewal at lower rates would reduce revenue without any change in demand, which is the risk the discount is pricing."
    ],
    "bullets": [
      {
        "title": "Standards position",
        "detail": "Participation in memory-interface standards gives early sight of each generation and underpins both licensing and product design."
      },
      {
        "title": "Server memory content",
        "detail": "More DRAM per system raises the unit content of interface chips, which is the cyclical part of the model."
      },
      {
        "title": "Licence renewals",
        "detail": "A small number of agreements carry most of the royalty revenue, and their terms are not disclosed."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Licensing economics show in the gross line. At 79.1%, Rambus keeps four-fifths of revenue before operating expense, and the operating margin of 36.3% means the remaining cost base is largely fixed patent, standards and design work. Operating income went from $24.3M in FY2021 to $260.2M in FY2025 on revenue that rose from $328.3M to $707.6M, so about 62 cents of each incremental revenue dollar reached operating profit.",
      "The net line is the noisy one. Net margin is 33.4% trailing, below the operating margin, but the annual record includes a 72.4% net margin in FY2023 and a -3.1% figure in FY2022, both driven by non-operating items. That is why operating income and cash flow are the reliable measures here. Returns are strong on the operating base: ROIC of 17.2% and ROE of 18.8% against peer medians of 9.4% and 8.3%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Royalty cash arrives with few deductions. Operating cash flow was $360.0M in FY2025 against $26.8M of capex, leaving $333.2M of free cash flow, a 47.1% margin. The trailing figure is $312.9M, or 39.3%, and the quarterly path has been $71.6M, $52.2M and $95.9M across the last three reports. A business that converts nearly half of revenue into cash does not need external capital to grow.",
      "Net cash of $776.9M is about 9.6% of the market value, and interest cover of 244.9x reflects the absence of a meaningful debt burden. Neither a dividend nor a repurchase programme appears in the financials, so the cash accumulates while the licensing negotiations roll. The capital allocation question is whether that balance is eventually returned or used to acquire additional interface technology; the record shows no answer yet."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Thirty times earnings, 24.3x EBITDA and 9.2x sales compare with peer medians of 71.5x and 33.8x, and the peer group is growing at 28.4%. The cash multiple is 25.9x, a 3.9% free-cash-flow yield, which is the highest yield in the group. On the current-year EPS of $3.11 the multiple is 24.4x, and on next year's $3.88 it is 19.6x. The gap to peers is wide enough that it cannot be explained by growth alone, since Rambus is growing at 17.3% against a 28.4% median.",
      "The discount is a concentration discount. A handful of licensees and two memory markets account for most of the revenue, and a renewal at lower rates or a standards change would remove revenue that costs nothing to deliver. Against that, the 79.1% gross margin and 39.3% cash margin give the business more downside protection than a chip maker with the same growth. The multiple would close if a renewal were disclosed on maintained terms; until then, the cash yield is the return."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Seven analysts in the Yahoo Finance survey of 18 November 2026, the thinnest coverage in the group after Power Integrations, carry a mean target of $141 against a $76 price. EPS estimates have moved up 2.3% over seven days and 2.5% over ninety, a modest revision trend that matches the steady rather than accelerating revenue path.",
      "Consensus has the operating margin holding. Current-year EPS of $3.11 and next year's $3.88 compare with $2.11 reported for FY2025, so the consensus is underwriting both revenue growth and a modest margin gain. The dispersion is narrower than the operating risk suggests: even the $103 low target is 36% above the price. What the estimates cannot capture is the renewal calendar, which is the variable that would move the stock most."
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
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
