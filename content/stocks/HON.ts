import type { StockStory } from "./types";

export const HON: StockStory = {
  ticker: "HON",
  kicker: "Industrials · Diversified technology",
  title: "Honeywell's headline multiples are measuring a different company",
  dek: "A 5.1x EV/EBITDA multiple on a 32.7% operating margin is not a market price. The gap between $33.61B of trailing revenue and $20.16B expected this year explains why.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $33.61B, up 3.9%, but the consensus expects only $20.16B this fiscal year.",
    "The 32.7% trailing operating margin is not a run-rate; the latest quarter printed 21.3%.",
    "Free cash flow was $629M on a trailing basis against $5.42B in FY2025, so the trailing cash figure is not representative.",
    "At $220.05 the shares show 9.9x earnings and 5.1x EV/EBITDA, multiples that cannot be compared with industrial peers.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/773840/000077384026000013/hon-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000773840&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Honeywell is a diversified industrial technology group. It makes avionics, flight controls, propulsion and wheels and brakes for aircraft; building controls, fire and security systems; process automation for refiners, chemical plants and mines; warehouse automation; and specialty chemicals and materials. Customers range from aircraft manufacturers and airlines to building owners, refiners and logistics operators. Trailing revenue is $33.61B from 103,000 employees.",
      "The question that matters is what the go-forward company is worth. The trailing revenue figure covers a larger group than the one the analysts are modelling: the consensus expects $20.16B of revenue this fiscal year and $20.51B next year. That is a much smaller business than the $33.61B in the trailing column, and it means every trailing multiple in this report is being calculated on a perimeter that no longer exists.",
      "The shares closed at $220.05, for a market capitalisation of $69.83B and a position 38% of the way up a 52-week range of $195.87 to $260.28. The headline multiples are 9.9x trailing earnings, 5.1x EV/EBITDA and 1.9x sales, with a 111.0x price-to-free-cash-flow ratio and a 0.9% free-cash-flow yield. Those are not the multiples of a 32.7%-margin industrial, and the sections below explain why they appear.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "Aerospace is the most valuable franchise. Honeywell supplies avionics, flight-control systems, auxiliary power units, engines for small aircraft and wheels and brakes, and it supports that equipment through spares, repairs and upgrades for the life of the aircraft. The aftermarket is the profit engine: a part that is designed onto a type certificate stays specified for decades, and the airline has no practical alternative when it needs a replacement.",
      "Building technologies sells controls, sensors, fire and security systems, and the software that ties them together. The work splits between new construction, where the equipment is specified by a consultant and installed by a contractor, and service, where the installed base is maintained and upgraded. Service is the recurring part and it grows with the building stock rather than with construction starts.",
      "Process automation and warehouse automation are project businesses. A refinery or a distribution centre orders a system that takes years to design, build and commission, and the revenue is recognised as the work progresses. These projects are technically demanding and sticky once installed, but they carry execution risk and they are tied to the capital budgets of a small number of industries.",
    ],
    bullets: [
      {
        title: "Aerospace",
        detail:
          "Avionics, flight controls, engines and wheels and brakes, plus the spares and repair annuity on the installed fleet.",
      },
      {
        title: "Building technologies",
        detail:
          "Controls, fire and security systems and the service contracts that follow them through the life of a building.",
      },
      {
        title: "Process and warehouse automation",
        detail:
          "Long-cycle projects for refiners, chemical plants and logistics operators, recognised as the work progresses.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The high-margin revenue is the aftermarket. A spare part for an aircraft system is priced against the cost of an aircraft on the ground, not against the cost of the part, and the customer is locked in by certification. Service contracts on buildings work the same way at a smaller scale: the technician is already visiting, and the marginal cost of the visit is low. That is why a group with a 54.6% gross margin can carry a 32.7% trailing operating margin when the mix is favourable.",
      "The project businesses earn a lower return on sales but a durable one. A process-automation system is specified years before it is commissioned, and once it runs the plant it is expensive to replace. The revenue is recognised over the build, so a delay pushes revenue and profit to the right at the same time. That is the source of the quarterly swings in the table.",
      "The cost structure is a mix of fixed engineering and factory capacity and variable project labour. Software and aftermarket revenue drops through at a high rate because the development cost is already sunk; project revenue does not, because every hour of engineering on a refinery system is paid for. The consolidated margin therefore depends on the mix between the two, which is why the trailing figure can move so much without any change in the underlying businesses.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue was $34.39B in FY2021, $35.47B in FY2022, $33.01B in FY2023, $34.72B in FY2024 and $37.44B in FY2025, a compound rate of 0.3% a year. The trailing figure is $33.61B and the latest quarter grew 1.3%. This is a low-growth industrial group whose revenue has moved sideways for five years, with portfolio changes doing more to the total than any underlying growth rate.",
      "The consensus tells a different story about direction. It expects $20.16B this fiscal year and $20.51B next year, with $5.16B and $2.45 for the coming quarter. Read those numbers as a smaller company with a low single-digit growth rate, not as a collapsed one. The revenue step between the trailing figure and the forecast is a change in what is being counted, and it is the single most important thing to understand before comparing any multiple.",
      "The durable growth drivers are aerospace aftermarket volumes, which rise with flight hours and the installed fleet; building service contracts, which rise with the stock of controlled buildings; and automation, which rises with labour costs and refinery and warehouse investment. What would slow it down is a downturn in air travel, a pause in refining capital spending, or a separation that distracts management and raises the standalone cost base.",
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly table does not describe a stable operating business. Revenue alternates between roughly $9.7B and $5.0B; operating margin runs 22.8%, 17.6%, 57.0%, 23.3%, 23.0% and 21.3%; and the quarter with the 57.0% margin reports negative net income of $115M while another quarter reports $5.68B of net income and $17.83 of EPS. Those are the marks of a period reshaped by portfolio transactions and one-off items, not of a business whose economics changed that fast.",
      "The 32.7% trailing operating margin is therefore a blend, not a run-rate. The most recent quarter printed 21.3%, and the quarters around it printed 23.3% and 23.0%. A margin near 21% to 23% is what a diversified industrial of this quality should earn, and it is the number to use when comparing Honeywell with its peers. Net margin of 21.0% and EPS of $21.02 inherit the same distortion.",
      "Return on equity of 31.1% and return on invested capital of 52.7% are high even for a good industrial. They are measured against a capital base that has been reduced by buybacks and by the disposal of businesses, so they flatter the current perimeter. The useful question is what the remaining company earns on its own capital, which the filing's segment disclosure answers and this summary does not.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $629M over the trailing period, a 1.9% margin, against $8.47B in FY2021, $4.51B in FY2022, $4.60B in FY2023, $5.23B in FY2024 and $5.42B in FY2025. The trailing number is far below every annual figure in the table, which is the clearest evidence that the trailing period contains a transaction or a charge that the annual figures do not. On the FY2025 numbers the company converted $5.42B of free cash flow from $37.44B of revenue.",
      "The balance sheet shows $6.19B of net cash, which gives the group room to absorb separation costs, pay a dividend and keep investing in aerospace and automation. That cushion matters more than usual during a portfolio change, because separations consume cash before they produce a cleaner reporting structure.",
      "What the cash flow supports is the dividend and the restructuring, not a large acquisition. The 0.9% free-cash-flow yield and the 111.0x price-to-free-cash-flow ratio are artifacts of the depressed trailing figure; on the FY2025 cash flow the yield would be materially higher. The reader should treat any ratio built on the trailing number as unreliable until the transaction effects are stripped out.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $220.05 Honeywell shows 9.9x trailing earnings, 5.1x EV/EBITDA, 1.9x sales and 111.0x free cash flow. Compare those with the industrial peers: Caterpillar at 21.6x earnings and 14.5x EBITDA, RTX at 30.4x and 18.1x, Eaton at 34.0x and 20.9x, and GE at 36.7x and 24.3x. A 5.1x EBITDA multiple on a business with a 32.7% trailing operating margin is not a bargain; it is a signal that the denominator is inflated by items that will not repeat.",
      "The factor screen puts the stock in the 93rd percentile for cheapness on EV/EBITDA. That ranking is a good example of why screens need to be read with care: the same distorted EBITDA that produces the low multiple also produces the high percentile. The sales multiple of 1.9x is the least affected of the four, because revenue is harder to inflate with a one-off gain, and even that is measured on the larger trailing perimeter.",
      "What the valuation needs is a clean set of numbers for the go-forward company. Until the separation is complete and the standalone cost base is disclosed, any multiple is a guess built on a blend. Stockmonk does not publish a target price; the consensus figure below is third-party context for the smaller business the analysts are modelling.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 23 analysts with a mean target of $253.91 and a range of $186.00 to $290.00. Current fiscal-year estimates call for $20.16B of revenue and $8.44 of EPS, with 20 analysts contributing; next year carries $20.51B and $9.85. The coming quarter is expected to produce $5.16B and $2.45.",
      "The estimates are internally consistent with a smaller company: $20.16B of revenue and $8.44 of EPS is a very different business from the $33.61B and $21.02 in the trailing column, and the analysts are clearly modelling the post-transaction perimeter. The revenue estimate for next year is barely above this year's, which implies a low-single-digit growth rate once the portfolio is stable.",
      "These are third-party forecasts on a moving base. A mean target of $253.91 against a $220.05 price is not a strong signal when the earnings base itself is being redefined, and the range of $186.00 to $290.00 reflects that uncertainty.",
    ],
  },
  risks: {
    intro:
      "Honeywell's risks are transitional. The businesses are good; the uncertainty is what the remaining company looks like, what it costs to run standalone, and whether the trailing financials can be trusted as a guide.",
    items: [
      {
        title: "Portfolio separation execution",
        severity: "High",
        detail:
          "Separating businesses costs money, consumes management attention and can leave the remaining company with a higher cost base than the blended group carried.",
        watch:
          "Separation costs, standalone margin guidance and the pace of disposals.",
      },
      {
        title: "Aerospace aftermarket and build rates",
        severity: "High",
        detail:
          "Aerospace is the highest-margin franchise. A decline in flight hours or aircraft production would hit spares and original equipment at the same time.",
        watch:
          "Aerospace segment sales, orders and aftermarket growth.",
      },
      {
        title: "Refining and chemical capital spending",
        severity: "Medium",
        detail:
          "Process automation depends on customers approving large projects. A pause in refinery or chemical investment delays revenue that is already in the pipeline.",
        watch:
          "Process automation orders and backlog.",
      },
      {
        title: "Long-cycle project execution",
        severity: "Medium",
        detail:
          "Automation systems are priced before they are built. Cost overruns on a small number of large projects can move segment margin.",
        watch:
          "Segment margin and any project-specific disclosure.",
      },
      {
        title: "Legacy liabilities",
        severity: "Medium",
        detail:
          "A long history of industrial operations leaves environmental and product liabilities that survive the portfolio changes.",
        watch:
          "Environmental reserves and legal proceedings in the filing.",
      },
    ],
    watchlist: [
      {
        title: "Standalone cost base",
        detail:
          "The margin that matters is the one the remaining company earns after it pays for its own corporate functions.",
      },
      {
        title: "Cash conversion",
        detail:
          "FY2025 free cash flow of $5.42B is the benchmark. A trailing figure of $629M is a transaction effect until proven otherwise.",
      },
      {
        title: "Aerospace orders",
        detail:
          "The order book in the highest-margin segment is the best forward indicator for the group.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Honeywell owns several strong franchises, and aerospace is the best of them. Avionics and flight controls are certified onto aircraft that fly for decades, and the aftermarket that follows is high-margin and hard to displace. Building controls and process automation are slower-growing but similarly sticky once installed.",
      "The financial summary is not a reliable description of that business. Revenue alternates between two very different quarterly levels, operating margin ranges from 17.6% to 57.0%, net income is negative in a quarter with a 57.0% operating margin, and trailing free cash flow is a fraction of every annual figure in the table. The 9.9x earnings and 5.1x EBITDA multiples are computed on those distortions.",
      "The useful next step is not to compare Honeywell with peers on the trailing numbers, but to read the segment disclosure and the transaction accounting, build a standalone view of the remaining company, and then apply a multiple to that. Until then, the cheapness signal is an artifact and the consensus revenue figure of $20.16B is the only reliable guide to the size of the go-forward business.",
    ],
    questions: [
      "What does the remaining company earn before and after standalone corporate costs?",
      "How much of the trailing operating margin came from one-off gains rather than operations?",
      "What is the aerospace aftermarket share of segment profit?",
      "Why is trailing free cash flow $629M when every full year in the table is above $4.5B?",
    ],
  },
};
