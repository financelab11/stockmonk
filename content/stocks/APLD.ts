import type { StockStory } from "./types";

export const APLD: StockStory = {
  ticker: "APLD",
  kicker: "Data-centre development · AI hosting",
  title: "Applied Digital is a landlord with 55 employees and a $4.5B bill",
  dek: "Revenue grew 467% and free cash flow was negative $4.46B. Building shells for AI tenants is a real estate business, and it is judged on leases, not on gross margin.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $774.7M, up 466.7%, with a 66.4% gross margin.",
    "Free cash flow was negative $4.46B, more than five times revenue, spent on buildings and equipment.",
    "The balance sheet holds $2.95B of net cash, so the build has been funded with equity rather than debt.",
    "The consensus expects $158.4M next quarter, well below the $262.8M just reported.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1144879/000114487926000048/apld-20260531.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001144879&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Applied Digital designs, builds and operates data centres for high-performance computing. It was formerly Applied Blockchain, renamed in November 2022, and it began by hosting bitcoin mining equipment before moving into AI infrastructure. It is based in Dallas, was incorporated in 2001, and employs 55 people.",
      "That headcount is the story in one number. A company with 55 employees booked $774.7M of revenue and spent $4.46B more than it earned. The money went into land, buildings, power connections, cooling and the equipment inside them. This is a real estate development business attached to a technology demand cycle, and it should be read with the tools used for real estate rather than the tools used for software.",
      "The financial shape is unusual even for a developer. Gross margin is 66.4%, which is what a landlord earns on a leased building. Operating margin is negative 39.2%, which is what a landlord earns when the depreciation, interest and development costs arrive before the rent does. Net cash of $2.95B is what has kept the company solvent while that gap was open.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The product is a data hall with power, cooling and networking, leased to a customer who installs their own accelerators. In some cases the company provides the equipment as well. The customer is buying time and certainty: a site with an interconnection, a shell that meets the cooling and power density they need, and a contract that fixes the price.",
      "The development process is sequential and slow. A site needs land, a power connection, permits, construction, electrical equipment with long lead times, and commissioning. Each stage can take months, and the revenue only begins when the hall is energised and the tenant takes possession. That is why the income statement lags the capital spending by years rather than quarters.",
      "The competitive position depends on three things: the quality of the sites, the speed of delivery, and the price of the capital used to build. Sites near cheap power with existing interconnection rights are scarce, and that scarcity is the company's main asset. Speed and cost of capital are where it competes with larger developers and with the hyperscalers building for themselves.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from leasing capacity, usually on multi-year contracts with escalation clauses. A gross margin of 66.4% is the spread between the rent and the direct cost of operating the building: power, cooling, maintenance and site staff. That is a good margin for a landlord, and it is the reason the model is attractive when the building is full.",
      "The costs below the gross line are what turn the margin negative. Depreciation on a newly built hall is large and starts immediately. Development and general expenses run ahead of revenue. Share-based compensation is a real cost in a company that pays employees partly in equity. And in some periods there are impairments and write-downs on assets that did not perform as planned.",
      "The financing is the third layer. The company has used equity rather than debt, which is why net cash is $2.95B rather than a large net debt position. That choice protects the balance sheet in a delay and dilutes existing holders in a rally. A reader should treat the share count as an input to the valuation, not an afterthought.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 190.8% a year across the fiscal years in the data: $8.5M, $55.4M, $165.6M, $228.6M, $611.3M, then $774.7M trailing. The latest quarter grew 224.7% year over year and booked $262.8M. Almost all of the growth is recent, and almost all of it comes from capacity that did not exist two years ago.",
      "The attributed consensus expects $158.4M next quarter and $212.9M the quarter after, which implies a 40% sequential decline before a recovery. Then $977.6M for the fiscal year and $1.97B for the next, with losses of $1.06 and $0.78 per share. The shape of those estimates says the analysts expect revenue to be lumpy as halls come online, not smooth.",
      "The drivers are tenant demand for AI capacity and the company's ability to deliver powered shells. The constraints are power interconnection, equipment lead times and capital. A tenant signing a large lease is a step change in revenue and a step change in the capital required to serve it, which is why both the revenue and the cash burn arrive in jumps.",
    ],
    bullets: [
      {
        title: "Build",
        detail:
          "Land, power, shells and cooling for AI tenants. The spending is the business, not an expense around it.",
      },
      {
        title: "Lease",
        detail:
          "Long-dated contracts with tenants who need capacity. Revenue follows energisation, not construction.",
      },
      {
        title: "Fund",
        detail:
          "$2.95B of net cash and repeated capital raises. The development cycle is financed before it is earned.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a company that has never earned an operating profit. Operating income was negative $20.9M, negative $42.9M, negative $98.3M, negative $72.2M and negative $236.5M across five fiscal years, on revenue that grew from $8.5M to $611.3M. The loss grew with the revenue, which is what a developer's income statement looks like while it is building.",
      "The quarterly series needs a warning. One period, Q4 FY25, reports negative revenue of $33.3M and an operating margin of 132.4%, which cannot describe an operating quarter. That points to a restatement or a reclassification. The other quarters show operating margins between negative 12.1% and negative 67.6%, which is the range a reader should work with.",
      "Return on equity is negative 26.9%. No return on invested capital is available, which is unfortunate, because that is the measure that matters most for a company investing $4.46B. Diluted EPS was negative $1.65 trailing, and the quarterly path deteriorated from negative $0.07 to negative $0.82 as the build accelerated.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $4.46B over the trailing period, a negative 575.1% margin. In plain terms, the company spent nearly six dollars for every dollar of revenue it collected. That is not a working capital swing; it is the purchase of a fixed asset base that will earn revenue for a decade.",
      "The annual history shows the escalation: negative $55.8M, negative $72.5M, negative $128.0M, negative $797.0M and negative $2.78B. Each year's spending was larger than the last, and the FY2026 figure alone was almost four times revenue. The company has been in a continuous state of raising and deploying capital.",
      "Net cash of $2.95B is the result of that fundraising. It is a genuine strength: a developer with cash and no debt can survive a delay that would force a levered peer to restructure. It is also a warning about dilution, because the cash came from issuing shares. The market capitalisation of $4.70B against $2.95B of net cash means the enterprise is valued at roughly $1.75B, which is a different picture from the headline market value.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $15.55 the shares trade at 32.7x trailing earnings, 2.3x sales and no EV/EBITDA, with a negative free cash flow yield of 94.8%. The earnings multiple is meaningless because trailing EPS is negative $1.65: a positive P/E on a negative EPS can only come from a period with a large non-operating gain.",
      "The sales multiple is the useful one, and it needs adjusting for the cash. With $2.95B of net cash against a $4.70B market value, the enterprise value is around $1.75B, which on $774.7M of trailing revenue is about 2.3x. That is roughly the multiple a developer gets before the buildings are leased, and it rises or falls with the delivery schedule rather than with the current quarter.",
      "On the $1.97B consensus for next year, the sales multiple would fall to under one time enterprise value. That is the bet: the capacity under construction gets leased at the expected rate and the revenue arrives. If it does not, the company owns buildings and the market revalues them at replacement cost minus the cost of finishing them. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sixteen analysts contribute to the attributed consensus, with a mean target of $60.94 and a range of $22.00 to $93.00. The mean is almost four times the last close of $15.55. The shares are down 50.0% over the past year, which is most of the explanation for a gap that size.",
      "The estimates are $158.4M of revenue and a loss of $0.17 per share next quarter, $212.9M and a loss of $0.25 the quarter after, $977.6M and a loss of $1.06 for the fiscal year, and $1.97B and a loss of $0.78 for the next. Those quarterly figures come from two and three analysts, so they are individual models rather than a consensus. The expected narrowing of the loss alongside a doubling of revenue is the assumption to test.",
    ],
  },
  risks: {
    intro:
      "Applied Digital's risks are delivery, tenant concentration, dilution and the gap between a good gross margin and a negative operating margin.",
    items: [
      {
        title: "Construction and energisation delays",
        severity: "High",
        detail:
          "Revenue begins when a hall is powered and occupied. A delay in equipment or interconnection pushes revenue past the period in which the cost was incurred.",
        watch:
          "Capacity under construction, megawatts energised and the leasing schedule.",
      },
      {
        title: "Tenant concentration",
        severity: "High",
        detail:
          "A small number of large tenants can account for most of the leased capacity. One renegotiation changes the revenue base.",
        watch:
          "Disclosure of revenue from the largest tenants and the remaining lease term.",
      },
      {
        title: "Dilution",
        severity: "High",
        detail:
          "The build has been funded with equity. Every capital raise solves the funding problem and reduces the claim of existing holders.",
        watch:
          "Share count growth and the terms of any new issuance.",
      },
      {
        title: "Depreciation on new assets",
        severity: "Medium",
        detail:
          "A 66.4% gross margin turns into a negative operating margin once depreciation on a new hall is charged. The margin only works at high occupancy.",
        watch:
          "Occupancy, depreciation as a share of revenue and the operating margin by quarter.",
      },
      {
        title: "Reporting quality",
        severity: "Medium",
        detail:
          "One quarter reports negative revenue and a 132.4% operating margin, which signals a restatement or reclassification.",
        watch:
          "Restatements and the note explaining unusual period items.",
      },
    ],
    watchlist: [
      {
        title: "Megawatts leased",
        detail:
          "The unit of account for this business. Revenue follows the megawatts that are contracted and energised.",
      },
      {
        title: "Capital raised",
        detail:
          "The pace of issuance relative to the build determines what the existing shares are worth.",
      },
      {
        title: "Operating margin excluding one-offs",
        detail:
          "The reported figure includes impairments and charges that obscure the underlying economics.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Applied Digital is a data-centre developer with 55 employees, $774.7M of trailing revenue, a 66.4% gross margin and $2.95B of net cash. It spent $4.46B more than it earned to build capacity for AI tenants, and it funded that with equity rather than debt.",
      "The educational point is that a landlord's income statement is a poor guide to a landlord's business during the construction phase. The gross margin describes a leased building. The operating margin describes a building that has been depreciated but not yet fully occupied. Neither describes the value of the site, the power connection or the lease, which is where the economics actually sit.",
      "What is not known is the contracted revenue from signed leases, the cost and schedule of the capacity under construction, and how much dilution is still to come. The AI build-out is why anyone would build these halls; it does not tell a reader whether this developer will finish them on budget or at a price that rewards the shareholders who funded it.",
    ],
    questions: [
      "How many megawatts are leased, and how many are energised and billing?",
      "What is the remaining construction cost, and how will it be funded?",
      "What share of revenue comes from the largest tenants?",
      "How much has the share count grown over the past three years?",
    ],
  },
};
