import type { StockStory } from "./types";

export const GEV: StockStory = {
  ticker: "GEV",
  kicker: "Industrials · Power generation and grid equipment",
  title: "GE Vernova sells equipment for a grid that has to be rebuilt",
  dek: "Gas turbines, grid gear and wind nacelles are long-cycle orders. The company is profitable again, but the reported net income is flattered by gains and the cash flow runs ahead of the earnings.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $44.0B, up 16.9%, at a 12.8% operating margin.",
    "Net margin of 23.5% is higher than the operating margin, so non-operating gains are doing real work in the reported profit.",
    "Free cash flow was $17.1B, a 38.9% margin, far above net income because customers pay as equipment is built.",
    "The attributed consensus expects EPS to fall from $31.73 to $25.84 next year even as revenue grows, which tells you the current year includes one-off items.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000015/gev-20251231.htm",
  irUrl: "https://www.gevernova.com",
  bigPicture: {
    paragraphs: [
      "GE Vernova makes the hardware that sits between a power plant and a customer: gas and steam turbines, generators, transformers, switchgear, grid automation and control systems, plus onshore and offshore wind turbines. It also services the equipment it has already installed, which is the part of the business that behaves least like a capital-goods cycle.",
      "The company was spun out of General Electric in 2024, and the early financials carry the marks of a business that was being reorganised. Revenue was $29.7B in 2022 with a $2.9B operating loss, then $33.2B, $34.9B and $38.1B in the following years, reaching $44.0B on a trailing basis. Operating income turned positive in 2024 and has widened since.",
      "At $774.11 the market value is $204.9B. The dataset carries no P/E or EV/EBITDA for the company, which is a hint that trailing earnings are not a clean base: net margin of 23.5% against an operating margin of 12.8% means a meaningful part of profit came from below the operating line. The shares sit about 37% of the way up a 52-week range of $530.16 to $1,195.94.",
    ],
    quote:
      "This is a backlog business. What matters is not the quarter's revenue but the price at which future equipment was sold and whether the cost to build it holds.",
  },
  whatItDoes: {
    paragraphs: [
      "Power is the core. Gas turbines for utilities and independent power producers, steam turbines for conventional and nuclear plants, and the service contracts that keep them running. The order book stretches years ahead, and each turbine sold creates a multi-decade parts and maintenance relationship.",
      "Electrification covers the grid itself: transformers, switchgear, high-voltage transmission equipment and the software that controls it. This is the part of the portfolio most exposed to the current wave of grid investment, because connecting new generation and new load requires hardware that is in short supply.",
      "Wind completes the set: onshore and offshore turbines, largely in Europe and North America. It is the segment that has struggled to earn a return, and its losses are the main reason the consolidated operating margin is 12.8% rather than something closer to the Power segment's own profitability.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Equipment is sold on a contract-by-contract basis, with price agreed before the work is done. That makes margin a function of estimating and procurement quality as much as of manufacturing efficiency. When steel, copper or specialised labour costs move after the order is signed, the company absorbs the difference unless the contract has an escalation clause.",
      "Revenue is recognised over the life of the project, which is why a single quarter can look odd. A large turbine order signed in one year may contribute revenue for three. Service revenue is the stabiliser: it is recurring, priced closer to annually, and carries a better margin than new equipment because the engineering cost was sunk years ago.",
      "The consolidated economics are thinner than the product list suggests. Gross margin is 21.8% and operating margin 12.8%, so most of each revenue dollar goes to bought-in materials, project labour and warranty. Operating leverage is real but slow: fixed engineering and factory costs are spread over a backlog that takes years to convert.",
    ],
  },
  growth: {
    paragraphs: [
      "The revenue path has been steady since the spin-off, and the latest quarter accelerated: $12.6B in Q3 FY26, up 26.8%, at an 11.0% operating margin. That is the highest quarterly revenue in the series and the best margin the company has reported in the period covered here.",
      "The attributed consensus expects $47.1B of revenue and $31.73 of EPS this fiscal year, then $53.6B and $25.84 next year. The revenue line grows 13.9% while EPS falls. That combination only makes sense if the current year's profit includes gains that do not repeat, and it is the single most important thing to understand about the estimate set.",
      "Demand comes from three places: utilities replacing ageing plants and adding capacity for data centres and electrification, grid operators catching up on transmission investment, and governments funding dispatchable generation for reliability. The constraint is supply, not demand. Turbine slots, transformer capacity and skilled labour are all scarce, which supports pricing but caps how fast revenue can grow.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a turnaround rather than a steady compounder. Operating income went from a $2.9B loss in 2022 to a $923M loss in 2023, a $471M profit in 2024 and $1.4B in 2025. Revenue rose 28% over the same period. Margin expansion, not volume, did most of the work.",
      "Quarterly margins have been volatile: 4.1%, 3.7% and 5.5% through FY25, then 1.9%, 5.9% and 11.0% in the first three quarters of FY26. The trend is up, but the level is low for a business with this much engineering content. A single loss-making wind project can move the consolidated number by a percentage point.",
      "Reported net income is not a good proxy for earnings power. Net margin of 23.5% exceeds operating margin of 12.8%, and the quarterly series shows why: Q4 FY25 net income of $3.7B and Q1 FY26 net income of $4.8B were several times the operating profit in those quarters. Return on equity of 93.0% is an artefact of that and of a small equity base, not evidence of a 93% return on capital.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $17.1B, a 38.9% margin, against net income of roughly $10.3B implied by the reported net margin. Cash exceeding profit by that much is normal for a business that takes progress payments: customers fund equipment while it is being built, so cash arrives before revenue is recognised and before the cost is fully booked.",
      "That makes the cash flow statement a poor guide to the current year's economics and a good guide to the order book. A growing backlog pulls cash forward; a shrinking one releases it in reverse. The balance sheet is reported without a net debt figure, so the capital structure cannot be assessed from the snapshot alone.",
      "What the cash does support is investment. Grid and turbine capacity is being expanded, and wind needs fixing. The dividend is small at a 0.3% yield, which leaves retained cash for capacity and for the balance sheet rather than for distribution.",
    ],
  },
  valuation: {
    paragraphs: [
      "The snapshot carries no P/E and no EV/EBITDA, so there is no clean multiple to compare with peers. That is not a data accident: trailing EPS of $38.00 includes gains that the consensus expects to disappear next year, and any multiple built on it would overstate the earnings base.",
      "The better frame is the estimate path. The consensus sees $31.73 of EPS this year and $25.84 next year, so the market is valuing a business whose earnings are expected to fall before they grow again. On that basis the shares are being bought for the revenue backlog and the margin recovery, not for near-term earnings.",
      "Compare the operating profile with the peer set: GE at a 20.3% operating margin, Caterpillar at 18.8%, Eaton at 15.4%, RTX at 11.8%. GE Vernova's 12.8% is near the bottom, and its revenue growth of 16.9% is mid-pack. The case has to rest on margin expansion from a low base, and that is a slower, less certain story than the multiple-free snapshot suggests.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-three analysts contribute to the attributed consensus, with a mean target of $1,182.83 and a range of $940.00 to $1,400.00. The mean is well above the latest close, and even the low end sits above it, which is unusual and worth noticing: the sell side is not divided about direction, only about magnitude.",
      "Quarterly estimates are $14.0B of revenue and $6.91 of EPS for the next quarter, then $11.3B and $5.01. The step down between those two quarters is seasonal, not deterioration. For the full year, $47.1B and $31.73; for the next, $53.6B and $25.84.",
      "The gap between the revenue growth and the EPS decline is the analytical crux. If the current-year profit is clean, next year's estimate is too low. If it is not, the market is paying a high price for a lower earnings base. These are third-party figures, not a Stockmonk view.",
    ],
  },
  risks: {
    intro:
      "The company has demand and a backlog. Its risks are execution on long contracts, the drag from wind, and the difficulty of valuing a business whose reported profit is not its operating profit.",
    items: [
      {
        title: "Wind segment losses",
        severity: "High",
        detail:
          "Offshore projects carry installation and warranty risk that can overwhelm the margin on the rest of the portfolio. The segment has been the main obstacle to a higher consolidated margin.",
        watch:
          "Wind segment operating result and the provisions taken against offshore contracts.",
      },
      {
        title: "Contract estimating",
        severity: "High",
        detail:
          "Equipment is priced years before it is built. Cost inflation on copper, steel, freight or labour lands on the company if the contract lacks escalation.",
        watch:
          "Gross margin by quarter and any change in contract loss provisions.",
      },
      {
        title: "Grid and turbine capacity",
        severity: "Medium",
        detail:
          "Revenue is limited by factory slots and skilled labour, not by orders. Capacity additions take years and can arrive just as demand cools.",
        watch:
          "Order backlog conversion, capacity expansion announcements and lead times.",
      },
      {
        title: "Policy and permitting",
        severity: "Medium",
        detail:
          "Grid investment, offshore wind and nuclear all depend on permits, subsidies and interconnection queues that the company does not control.",
        watch:
          "Utility capital plans and the pace of interconnection approvals.",
      },
      {
        title: "Earnings quality",
        severity: "Medium",
        detail:
          "Net margin above operating margin means reported profit includes items that do not recur. Valuing the shares on trailing EPS would overstate the base.",
        watch:
          "The gap between operating income and pre-tax income each quarter.",
      },
    ],
    watchlist: [
      {
        title: "Backlog and book-to-bill",
        detail:
          "The order book is the leading indicator. Watch both the value and the margin embedded in new orders.",
      },
      {
        title: "Wind segment result",
        detail:
          "A return to break-even in wind would lift the consolidated margin more than any other single factor.",
      },
      {
        title: "Cash versus revenue",
        detail:
          "Progress payments make cash flow lumpy. A swing from inflow to outflow usually means the backlog is being consumed.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "GE Vernova is a set of long-cycle equipment franchises with a service tail, assembled into one company at the moment grid spending turned up. The operating margin has gone from negative to 12.8% in three years, and revenue reached $44.0B. The direction is clear even if the level is not yet impressive.",
      "What is not known is how much of the improvement is structural. Wind losses, contract estimating and factory utilisation all affect the same margin line, and the reported net income is too distorted by non-operating items to settle the question. The cash flow is real but reflects customer prepayments as much as profit.",
      "The valuation carries no usable trailing multiple, so the reader is left with a forecast rather than a fact. The reasonable next step is to separate the operating margin trend from the one-off gains, then ask what the backlog is worth if wind never earns a profit.",
    ],
    questions: [
      "How much of the last four quarters' net income came from below the operating line?",
      "What would the consolidated margin be if wind broke even?",
      "How much of the backlog is priced with cost escalation clauses?",
      "Is the grid capacity being added likely to arrive before or after the current order cycle peaks?",
    ],
  },
};
