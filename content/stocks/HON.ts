import type { StockStory } from "./types";

export const HON: StockStory = {
  "ticker": "HON",
  "kicker": "Industrials · Diversified technology",
  "title": "Honeywell's headline multiples are measuring a different company",
  "dek": "A 5.1x EV/EBITDA multiple on a 32.7% operating margin is not a market price. The gap between $33.61B of trailing revenue and $20.16B expected this year explains why.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue fell to $5.0B in Q3 FY26 from $9.7B in Q2, and consensus puts the current year at $20.2B, 46.2% below FY2025.",
    "Trailing free cash flow is $629M, a fraction of the $5.4B reported in FY2025, so the cash statement is not comparable across periods.",
    "The 10.0x earnings and 6.4x EV/EBITDA multiples are computed on a half-sized, one-off-heavy base; the 32.7% operating margin reflects the same distortions.",
    "Aerospace was 46.8% of FY2025 revenue, so the remaining automation businesses carry the $70.5B market value on about $20B of sales."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/773840/000077384026000013/hon-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000773840&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Half of Honeywell disappeared from the revenue line in the third quarter of fiscal 2026: sales fell to $5.0B from $9.7B, with a 21.3% operating margin and $2.08 of EPS. The step-down is a portfolio event, not a demand collapse, and the consensus now models $20.2B of revenue for the full year. That reset is the most important fact in the results because every trailing multiple is calculated across two different companies.",
      "Before the separation, the group was a set of automation and aerospace franchises. Aerospace was 46.8% of FY2025 revenue and carried the aftermarket annuity; Building Automation was 19.7% and Industrial Automation 25.1%, with Energy & Sustainability at 8.4%. Aerospace and Building Automation earn high margins on installed-base service and software, while process and warehouse automation are long-cycle projects recognised as work progresses. The mix between those two models explains most of the quarterly margin volatility, and it is the first thing to rebuild after the separation.",
      "The valuation debate is about what to apply a multiple to. Honeywell's market value is {{marketCap}} at {{price}}, equal to {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA, both far below peer medians of 31.0x and 20.4x. That is not cheapness; the earnings and EBITDA figures are distorted by separation accounting and one-off gains, and they describe a business that no longer exists in that form. The market capitalisation against $20.2B of expected revenue is a cleaner starting point than either multiple."
    ],
    "quote": "Honeywell's 6.4x EBITDA multiple is not a discount to peers; it is the arithmetic of a company that has been taken apart."
  },
  "whatItDoes": {
    "paragraphs": [
      "Aerospace is the most valuable franchise. Honeywell supplies avionics, flight-control systems, auxiliary power units, engines for small aircraft and wheels and brakes, and it supports that equipment through spares, repairs and upgrades for the life of the aircraft. The aftermarket is the profit engine: a part that is designed onto a type certificate stays specified for decades, and the airline has no practical alternative when it needs a replacement.",
      "Building technologies sells controls, sensors, fire and security systems, and the software that ties them together. The work splits between new construction, where the equipment is specified by a consultant and installed by a contractor, and service, where the installed base is maintained and upgraded. Service is the recurring part and it grows with the building stock rather than with construction starts.",
      "Process automation and warehouse automation are project businesses. A refinery or a distribution centre orders a system that takes years to design, build and commission, and the revenue is recognised as the work progresses. These projects are technically demanding and sticky once installed, but they carry execution risk and they are tied to the capital budgets of a small number of industries."
    ],
    "bullets": [
      {
        "title": "Aerospace",
        "detail": "Avionics, flight controls, engines and wheels and brakes, plus the spares and repair annuity on the installed fleet."
      },
      {
        "title": "Building technologies",
        "detail": "Controls, fire and security systems and the service contracts that follow them through the life of a building."
      },
      {
        "title": "Process and warehouse automation",
        "detail": "Long-cycle projects for refiners, chemical plants and logistics operators, recognised as the work progresses."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The high-margin revenue is the aftermarket. A spare part for an aircraft system is priced against the cost of an aircraft on the ground, not against the cost of the part, and the customer is locked in by certification. Service contracts on buildings work the same way at a smaller scale: the technician is already visiting, and the marginal cost of the visit is low. That is why a group with a 54.6% gross margin can carry a 32.7% trailing operating margin when the mix is favourable.",
      "The project businesses earn a lower return on sales but a durable one. A process-automation system is specified years before it is commissioned, and once it runs the plant it is expensive to replace. The revenue is recognised over the build, so a delay pushes revenue and profit to the right at the same time. That is the source of the quarterly swings in the table.",
      "The cost structure is a mix of fixed engineering and factory capacity and variable project labour. Software and aftermarket revenue drops through at a high rate because the development cost is already sunk; project revenue does not, because every hour of engineering on a refinery system is paid for. The consolidated margin therefore depends on the mix between the two, which is why the trailing figure can move so much without any change in the underlying businesses."
    ]
  },
  "growth": {
    "paragraphs": [
      "The go-forward growth rate is low. Consensus expects $20.2B of revenue this year and $20.5B next, a low-single-digit increase, with EPS rising from $8.42 to $9.88 as the standalone cost base settles. That is a margin-recovery story rather than a volume one. The businesses that remain are mature: building controls grow with building stock and service contracts, and process automation grows with refinery and chemical capital budgets, neither of which is expanding quickly.",
      "Aerospace was the highest-margin franchise and it is no longer in the consolidated number. What is left is a set of installed-base businesses with the same switching-cost logic: a building control system or a refinery automation stack is expensive to replace once it runs the site. Whether the standalone company can earn the same segment margins without the group's shared engineering and corporate overhead is the open question behind the 17.3% EPS increase expected next year.",
      "The consensus assumes the margin does the work. That EPS increase on a low-single-digit revenue rise requires either price above inflation or cost taken out of the standalone base. Service-heavy businesses such as Building Automation can deliver the first through mix, while the project side, including process and warehouse automation, is exposed to customer capital budgets. If refinery and chemical capital budgets pause, that exposure arrives before the cost base adjusts, and the margin has to do more work than the consensus assumes."
    ],
    "bullets": [
      {
        "title": "Installed-base service",
        "detail": "Service contracts on buildings and spares on aircraft systems recur through the life of the asset. The aircraft piece now sits outside the consolidated revenue base."
      },
      {
        "title": "Project timing",
        "detail": "Process automation revenue is recognised over multi-year builds, so a delayed refinery or warehouse order moves a quarter without changing the underlying pipeline."
      },
      {
        "title": "Standalone costs",
        "detail": "Separation leaves the remaining company to fund corporate functions on a smaller revenue base, which is why consensus looks for a 17.3% EPS increase on flat revenue."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin of 32.7% is more than double the 18.2% peer median and above every full year in the table, which ranged from 18.4% in FY2020 to 22.9% in FY2023. It is not an operating achievement. Q2 FY26 carried a 58.5% net margin and $17.83 of EPS, and Q4 FY25 reported a 57.0% operating margin alongside negative net income. Those are one-off gains and transaction effects, and they make the trailing margin a poor guide to the remaining business.",
      "Strip out the distortions and the underlying margin is closer to the low-twenties that the company earned from FY2021 to FY2025. The third quarter's 21.3% operating margin on $5.0B of revenue is a better anchor, as is the 23.0% return on invested capital and 31.5% return on equity on the trailing figures. Both returns are measured on a shrunken equity base after disposals, so they overstate the earning power of the go-forward group."
    ]
  },
  "cash": {
    "paragraphs": [
      "Twelve-month cash generation is $629M, a 1.9% margin, against $5.4B in FY2025 and at least $4.5B in every year since FY2020. The quarterly path is erratic: -$873M in Q1 FY26, $961M in Q2 and -$52M in Q3. Separation payments and working-capital timing can all move a quarter, but a full-year figure this far below the historical range needs the cash-flow statement rather than the income statement to explain it.",
      "The balance sheet is not the problem. Net debt is $10.4B, 0.8x EBITDA, and interest cover is 8.9x, so the group can fund separation costs without strain. Capex was $986M in FY2025, 2.6% of revenue, against $6.4B of operating cash flow, a low intensity that reflects an asset-light mix of software, service and project engineering. The 1.3% dividend is easily covered on the historical cash flow, less so on the trailing number."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Honeywell's market value is {{marketCap}} at {{price}}. The trailing P/E of {{pe}} and EV/EBITDA of {{evEbitda}} are the lowest in the industrial peer group by a wide margin, and that is the tell: the figures mix the continuing business with disposed segments and one-off gains. The 2.4x EV/Sales and the $20.2B consensus revenue are more comparable across the transition than either earnings measure.",
      "On a standalone basis the relevant comparison is the remaining automation businesses. GE trades at 29.8x EV/EBITDA on a 20.3% operating margin and RTX at 18.1x on 11.8%, so a 6.4x multiple on Honeywell's 21.3% third-quarter margin is the anomaly to explain. Either the market is applying the multiple to the wrong earnings base or it expects the remaining margin to fall. The first is an accounting problem, the second an investment one.",
      "What would settle it is a clean standalone segment disclosure and a full year of separation-free cash flow. Until then, the market value of {{marketCap}} against $20.2B of revenue is the only ratio that does not depend on which quarter's accounting is included. If the remaining company earns a low-twenties operating margin on that revenue, the current price is not demanding; if standalone costs take five points off it, the discount is deserved."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Twenty-three analysts contribute to Yahoo Finance's 18 November 2026 estimate set, which carries a mean target of $254 and a range of $186 to $290. The mean is 14% above the current price, but the spread from $186 to $290 is wide for a company of this size, which reflects disagreement about the earnings base rather than about the businesses.",
      "Revisions have turned modestly positive, with the 30-day EPS change at 1.4% and the 90-day at 1.1%. Consensus expects $8.42 for the current year and $9.88 for the next, assumptions that depend on the separation being complete and the standalone cost base being known. That is an accounting assumption as much as an operating one, and it is why the target range is wider than the revenue outlook implies."
    ]
  },
  "risks": {
    "intro": "Honeywell's risks are transitional. The businesses are good; the uncertainty is what the remaining company looks like, what it costs to run standalone, and whether the trailing financials can be trusted as a guide.",
    "items": [
      {
        "title": "Portfolio separation execution",
        "severity": "High",
        "detail": "Separating businesses costs money, consumes management attention and can leave the remaining company with a higher cost base than the blended group carried.",
        "watch": "Separation costs, standalone margin guidance and the pace of disposals."
      },
      {
        "title": "Aerospace aftermarket and build rates",
        "severity": "High",
        "detail": "Aerospace is the highest-margin franchise. A decline in flight hours or aircraft production would hit spares and original equipment at the same time.",
        "watch": "Aerospace segment sales, orders and aftermarket growth."
      },
      {
        "title": "Refining and chemical capital spending",
        "severity": "Medium",
        "detail": "Process automation depends on customers approving large projects. A pause in refinery or chemical investment delays revenue that is already in the pipeline.",
        "watch": "Process automation orders and backlog."
      },
      {
        "title": "Long-cycle project execution",
        "severity": "Medium",
        "detail": "Automation systems are priced before they are built. Cost overruns on a small number of large projects can move segment margin.",
        "watch": "Segment margin and any project-specific disclosure."
      },
      {
        "title": "Legacy liabilities",
        "severity": "Medium",
        "detail": "A long history of industrial operations leaves environmental and product liabilities that survive the portfolio changes.",
        "watch": "Environmental reserves and legal proceedings in the filing."
      }
    ],
    "watchlist": [
      {
        "title": "Standalone cost base",
        "detail": "The margin that matters is the one the remaining company earns after it pays for its own corporate functions."
      },
      {
        "title": "Cash conversion",
        "detail": "FY2025 free cash flow of $5.42B is the benchmark. A trailing figure of $629M is a transaction effect until proven otherwise."
      },
      {
        "title": "Aerospace orders",
        "detail": "The order book in the highest-margin segment is the best forward indicator for the group."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Honeywell owns several strong franchises, and aerospace is the best of them. Avionics and flight controls are certified onto aircraft that fly for decades, and the aftermarket that follows is high-margin and hard to displace. Building controls and process automation are slower-growing but similarly sticky once installed.",
      "The financial summary is not a reliable description of that business. Revenue alternates between two very different quarterly levels, operating margin ranges from 17.6% to 57.0%, net income is negative in a quarter with a 57.0% operating margin, and trailing free cash flow is a fraction of every annual figure in the table. The 9.9x earnings and 5.1x EBITDA multiples are computed on those distortions.",
      "The useful next step is not to compare Honeywell with peers on the trailing numbers, but to read the segment disclosure and the transaction accounting, build a standalone view of the remaining company, and then apply a multiple to that. Until then, the cheapness signal is an artifact and the consensus revenue figure of $20.16B is the only reliable guide to the size of the go-forward business."
    ],
    "questions": [
      "What does the remaining company earn before and after standalone corporate costs?",
      "How much of the trailing operating margin came from one-off gains rather than operations?",
      "What is the aerospace aftermarket share of segment profit?",
      "Why is trailing free cash flow $629M when every full year in the table is above $4.5B?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
