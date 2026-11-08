import type { StockStory } from "./types";

export const RMBS: StockStory = {
  ticker: "RMBS",
  kicker: "Semiconductors · Interface IP and memory chips",
  title: "Rambus earns royalties on memory interfaces and sells the chips that use them",
  dek: "A 79.1% gross margin is what a licensing business looks like. The growth is coming from physical memory-interface chips, which carry different economics and a different set of customers.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $796.1M, up 17.3%, with an operating margin of 36.3% and free cash flow of $312.9M.",
    "Revenue compounded at 20.8% a year from FY2021 to FY2025, and operating income rose from $24.3M to $260.2M over the same span.",
    "Net income is the least reliable line in the accounts: it was negative in FY2022 and far above operating income in FY2023.",
    "Net cash of $776.9M and a 39.3% free-cash-flow margin fund the business without external capital.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/917273/000119312526057101/rmbs-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000917273&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Rambus designs the electrical interface between a processor and its memory, and it earns money from that position in two ways. One is licensing: patents and cell designs that memory manufacturers and chip designers need in order to build standards-compliant parts, paid for as royalties or licence fees. The other is product: memory-interface chips, clocking devices and controllers that Rambus sells as physical silicon. The company was founded in 1990, employs 623 people and is one of the few semiconductor businesses whose revenue is closer to a toll than to a product cycle.",
      "The question is which of the two engines sets the growth rate. Licensing revenue is high-margin and lumpy, tied to agreements that are renegotiated rather than ordered. Product revenue is lower-margin, follows server and data-centre builds, and competes on price against other interface suppliers. A quarter can look strong because a licence was signed or because DDR5 memory shipped in volume, and the two have very different durability.",
      "Trailing revenue was $796.1M, up 17.3%, with a gross margin of 79.1% and an operating margin of 36.3%. The latest quarter produced $218.3M at a 38.3% operating margin, the highest in the quarterly series shown. At $74.53 the shares sit about 6% of the way up a 52-week range of $68.19 to $174.10, after a twelve-month return of -30.0% against a five-year return of 210.7%.",
    ],
    quote:
      "Royalty revenue has no cost of goods in the usual sense. That is why the gross margin is 79.1%, and why a shift in the revenue mix moves the whole income statement.",
  },
  whatItDoes: {
    paragraphs: [
      "The licensing side sells access to interface technology that has been written into industry memory standards. A memory maker building a module that must meet a published specification needs the circuit designs and the patent rights that make it compliant, and Rambus holds a portfolio of both. The revenue arrives as royalties per unit or as fixed licence payments, and the marginal cost of an additional licensee is close to zero.",
      "The product side sells chips: register clock drivers and data buffers that sit on a memory module, clock generators, and interface components that clean up signals between a processor and DRAM. These are manufactured through partners and sold to module makers, server OEMs and hyperscale customers. The design win is the unit of competition, because once a part is qualified on a platform it tends to stay there for the life of that platform.",
      "The two halves reinforce each other in a way that is easy to miss. Standards work gives Rambus early sight of where interfaces are heading, and product designs give it working silicon that informs the next round of standards. Neither business would be as strong alone, but they are valued by the market on very different multiples.",
    ],
    bullets: [
      {
        title: "Patent and technology licensing",
        detail:
          "Royalties and licence fees on memory-interface standards. Near-zero marginal cost and the source of the 79.1% gross margin.",
      },
      {
        title: "Memory-interface chips",
        detail:
          "Register clock drivers, data buffers and clocking parts sold onto modules and boards. Revenue follows server and data-centre builds.",
      },
      {
        title: "Silicon IP",
        detail:
          "Interface core designs licensed to chip developers who would rather buy the block than build it.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Start with the gross margin. At 79.1%, Rambus keeps four-fifths of each revenue dollar before operating expense. That is not a manufacturing achievement; it is the signature of licensing, where the product has already been developed and the incremental delivery costs almost nothing. The chip business dilutes that margin, which means the blended figure is itself a disclosure about mix: when licensing grows faster, gross margin rises.",
      "Operating margin of 36.3% against a 79.1% gross margin leaves a large expense base, and that is the second thing to understand. Patent litigation, standards participation and advanced interface design are all expensive and largely fixed. Once the cost base is covered, additional royalty revenue falls almost entirely to operating profit, which is why operating income went from $24.3M in FY2021 to $260.2M in FY2025 on revenue that went from $328.3M to $707.6M.",
      "The product business works differently. Chips carry silicon cost, inventory and price competition, so incremental revenue there converts at a much lower rate. It is still worth having: it compounds the royalty base, it keeps the engineering organisation close to real silicon, and it grows with the memory content of each server rather than with the signing of agreements.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 20.8% a year across the five fiscal years shown, rising from $328.3M to $707.6M with no down year. The quarterly series is steadier still: $172.2M, $178.5M, $190.2M, $180.2M, $207.4M and $218.3M, with the operating margin moving between 34.3% and 38.3% across all six quarters. That stability is unusual in semiconductors and reflects the licensing base.",
      "The growth driver that matters now is memory content per system. Each generation of DRAM adds interface chips per module, and server platforms with more memory channels multiply the count. Third-party estimates call for $838.4M of revenue and $3.11 of EPS this fiscal year, then $1.01B and $3.88. The step past $1B is a product-cycle forecast, and it depends on server memory demand rather than on new licensing.",
      "What would slow it down is a memory downcycle or a standards transition that shifts value to another interface supplier. Licensing renewals are the other variable: a renegotiated agreement can move revenue by more than a product ramp, in either direction, without any change in unit volumes.",
    ],
    bullets: [
      {
        title: "Memory content",
        detail:
          "More DRAM per server and more channels per platform mean more interface chips per system.",
      },
      {
        title: "Standards transitions",
        detail:
          "Each new DRAM generation resets the interface design and creates a window to win or lose the socket.",
      },
      {
        title: "Licence renewals",
        detail:
          "A small number of agreements carry a large share of royalty revenue, and their terms change infrequently.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The operating trend is one of the cleanest in the coverage group. Operating income rose from $24.3M to $76.9M to $153.6M to $183.0M to $260.2M across the five years, while revenue rose from $328.3M to $707.6M. Margin expansion of that size on that revenue base is what happens when a fixed cost base is spread over a growing royalty stream.",
      "Net income tells a different and less useful story. It was $18.3M in FY2021, a loss of $14.3M in FY2022, $333.9M in FY2023, $179.8M in FY2024 and $230.5M in FY2025. The FY2023 figure is more than twice operating income, and the FY2022 loss came in a year when operating income was $76.9M. Non-operating items dominate the net line, so operating income and cash flow are the honest measures of the business.",
      "Return on invested capital is 35.6% and return on equity 18.8%. The operating business earns a high return on the capital it uses; the equity return is diluted by $776.9M of net cash sitting outside it. Trailing diluted EPS of $2.43 is the figure the earnings multiple is built on, and it is the number in this story most affected by items outside the operating business.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $312.9M on a trailing basis, a 39.3% margin, and it has exceeded net income in every year shown. FY2021 is the extreme case: $195.4M of free cash flow against $18.3M of net income. FY2022 repeated the pattern with $212.9M of cash against a net loss. Whatever is happening below the operating line, the cash account is not confused about it.",
      "The reason is structural. Licensing revenue arrives without inventory or receivables tied to physical production, and the development cost was expensed in earlier periods. The chip business does carry inventory, which is why free cash flow is not perfectly smooth, but the licensing base keeps the floor high.",
      "Net cash of $776.9M, or -2.6x EBITDA, means the company can fund patent work and product development through a memory downturn. That is the balance sheet's job in a business where the competitive asset is a portfolio built over decades rather than a factory that can be idled.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $74.53 the shares trade at 30.0x trailing earnings, 23.9x EV/EBITDA, 9.1x sales and 25.5x free cash flow, a 3.9% free-cash-flow yield. The EBITDA multiple is the lowest in the peer table shown, and the earnings multiple is mid-range. For a business with a 79.1% gross margin, that is not an obvious premium.",
      "The comparison that matters is within the company, not across the peer table. Licensing revenue deserves a royalty multiple; chip revenue deserves a semiconductor multiple. A blended 23.9x EV/EBITDA is the market's attempt to price the mix, and it will move when the mix moves, even if total revenue does not.",
      "The free-cash-flow multiple is the most informative of the four because it strips out the below-the-line items that distort net income. At 25.5x, the market is paying for the cash the business produces, not for the accounting result of any single year. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Seven analysts contribute to the consensus, with a mean target of $140.57 and a range of $103.00 to $165.00. The shares closed at $74.53, so every target in the range is far above the market price. When that happens after a -30.0% twelve-month return, the gap usually says more about the speed of the de-rating than about a disagreement over the business.",
      "The near-term estimates are for $231.6M of revenue and $0.87 of EPS next quarter, then $232.4M and $0.88. That is a plateau after $218.3M and $0.69 in Q3 FY26, with the EPS step coming from margin rather than volume. For the full year the consensus is $838.4M of revenue and $3.11 of EPS, then $1.01B and $3.88.",
      "Those are third-party forecasts. The number to test is the revenue mix behind them, because a forecast built on licensing renewals and one built on memory-module shipments have very different reliability.",
    ],
  },
  risks: {
    intro:
      "Rambus is financially strong and legally exposed at the same time. The balance sheet is not the risk; the durability of the royalty base is.",
    items: [
      {
        title: "Licence renewal risk",
        severity: "High",
        detail:
          "A small number of agreements carry a large share of royalty revenue. A renegotiation at lower rates would reduce revenue without any change in the underlying technology or demand.",
        watch:
          "Licensing revenue by type, contract duration disclosures and any litigation update.",
      },
      {
        title: "Memory cycle",
        severity: "High",
        detail:
          "The product business sells into server and data-centre memory builds. A DRAM downcycle cuts unit volumes and pricing at the same time.",
        watch:
          "Memory-interface product revenue and the memory makers' capital plans.",
      },
      {
        title: "Standards displacement",
        severity: "Medium",
        detail:
          "Rambus earns its position because its technology is in the standard. A standards change that favours a different interface approach would erode both licensing and product demand.",
        watch:
          "Participation in standards bodies and design wins on each new DRAM generation.",
      },
      {
        title: "Net income distortion",
        severity: "Medium",
        detail:
          "Non-operating items have produced a loss in a profitable year and a net figure far above operating income in another. Valuations built on the earnings multiple inherit that noise.",
        watch:
          "The gap between operating income and net income each quarter.",
      },
      {
        title: "Concentration in a few customers",
        severity: "Medium",
        detail:
          "Memory manufacturing is an industry with very few participants, so both licensing and product revenue depend on a handful of accounts.",
        watch:
          "Top-customer percentages and the number of licensees contributing more than 10% of revenue.",
      },
      {
        title: "Litigation and patent challenge",
        severity: "Low",
        detail:
          "Licensing businesses are periodically tested in court. A successful challenge to a core patent would remove revenue that costs nothing to deliver.",
        watch:
          "Legal proceedings disclosures and the outcome of any review of key patents.",
      },
    ],
    watchlist: [
      {
        title: "Licensing versus product mix",
        detail:
          "The blended gross margin reveals which engine grew, and the two deserve different multiples.",
      },
      {
        title: "Operating income",
        detail:
          "The cleanest measure of the business, given how often the net line is moved by non-operating items.",
      },
      {
        title: "Free cash flow",
        detail:
          "It has exceeded net income every year shown and is the basis for the most defensible multiple.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Rambus is a licensing business with a chip business attached, and the financial statements show both. The 79.1% gross margin and the operating leverage from $24.3M to $260.2M of operating income come from royalties. The revenue growth beyond the licensing base comes from memory-interface silicon.",
      "Three things the dataset cannot settle: the split between recurring royalty and unit-linked product, how long the current licence agreements run, and how much of the trailing free cash flow reflects timing rather than a steady rate.",
      "The lesson is narrower than it looks: for a company with a large licensing base, net income is the least informative line on the page. Operating income and cash flow describe the business; the net line describes the year.",
    ],
    questions: [
      "What share of revenue is royalty-based, and when do the largest agreements renew?",
      "How much of the product revenue depends on a single memory generation?",
      "Why has net income diverged so far from operating income in both directions?",
      "Is the 79.1% gross margin rising or falling as product revenue grows?",
    ],
  },
};
