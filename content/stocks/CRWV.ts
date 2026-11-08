import type { StockStory } from "./types";

export const CRWV: StockStory = {
  ticker: "CRWV",
  kicker: "AI cloud · GPU infrastructure",
  title: "CoreWeave's gross margin is 67% and its net margin is negative 25%",
  dek: "The gap is not operations. It is the cost of financing a fleet of accelerators with debt, and thirty-eight analysts disagree about whether that is a problem or the point.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $7.59B, up 115.3%, with a 67.4% gross margin.",
    "Operating margin was negative 1.9% but the net margin was negative 25.4%, so most of the loss sits below the operating line.",
    "Free cash flow was negative $13.65B, as capital spending ran at nearly twice revenue.",
    "The analyst target range runs from $39 to $278, a spread that reflects a disagreement about financing rather than demand.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm",
  irUrl: "https://www.coreweave.com",
  bigPicture: {
    paragraphs: [
      "CoreWeave rents out artificial intelligence computing. It builds data centres and fills them with accelerators, then sells capacity to AI developers, model labs and enterprises on contracts that typically run for several years. The company is based in Livingston, New Jersey, employs 2,189 people, and has grown from $229.0M of revenue in FY2023 to $7.59B on a trailing basis.",
      "The financial structure is the whole argument. Gross margin is 67.4%, which is a good number for a business that owns its equipment. Operating margin is negative 1.9%, which is close to break-even. Net margin is negative 25.4%, which is not. The difference between a small operating loss and a large net loss is interest and other financing costs, and those costs exist because the fleet was bought with borrowed money.",
      "There is no trailing earnings multiple, no EV/EBITDA and no net debt figure in the data. That combination tells a reader something: the company is at a stage where the standard screens do not apply. What can be measured is revenue, gross margin, the operating result and the cash flow, and those four numbers describe a business that is expanding faster than it is earning.",
    ],
    quote:
      "A GPU depreciates whether or not it is rented. Debt service arrives on a fixed schedule regardless. The mismatch between those two clocks is the risk in every neocloud.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is contracted access to clusters of accelerators, with the networking, storage and orchestration software needed to run training and inference workloads. Customers sign multi-year commitments because moving a model to a different provider is disruptive and expensive, and because capacity is scarce in the sizes they need.",
      "Delivering that product requires physical assets: buildings, power, cooling, networking and the machines themselves. CoreWeave does not make chips; it buys them, installs them and rents them. That places it in a capital-intensive position between a supplier with pricing power and customers who are large enough to negotiate.",
      "The competitive position depends on utilisation and on the cost of capital. A provider that keeps its fleet busy and finances it cheaply can earn a return on a 67.4% gross margin. A provider that does neither is left with depreciation and interest on equipment that is losing value every quarter, which is the risk that the negative net margin is pointing at.",
    ],
    bullets: [
      {
        title: "Contracted capacity",
        detail:
          "Multi-year commitments for accelerator clusters. The revenue is agreed in advance, which is why growth has been so fast.",
      },
      {
        title: "Owned infrastructure",
        detail:
          "Buildings, power and networking as well as the machines. More capital than a reseller, more control than a tenant.",
      },
      {
        title: "Customer profile",
        detail:
          "AI labs and enterprises that need capacity at a scale they cannot assemble themselves. Few, large, and technically demanding.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is a contracted rate for capacity over time. A 67.4% gross margin means the direct cost of delivering an hour of compute, including power, cooling and the depreciation of the equipment, takes about a third of the price. That is a healthy spread and it is the reason the business has been able to grow at all.",
      "Operating expenses consume nearly all of the remaining gross profit. Sales, engineering and administration brought the operating margin to negative 1.9%, which means the company is roughly at break-even before it pays for the money it borrowed. That is not unusual for a business expanding this quickly, and it does mean the operating result is close to a threshold: a modest improvement in utilisation or pricing would push it positive.",
      "The financing cost is what turns a near-zero operating margin into a 25.4% net loss. Interest on debt, and the amortisation of whatever fees and leases sit alongside it, is charged after operating profit. For a company with $7.59B of revenue and a fleet that has to be replaced every few years, the interest line is not a peripheral item. It is the difference between a viable infrastructure business and an expensive one.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 373.4% a year across the fiscal years in the data: $229.0M, $1.92B, $5.13B, then $7.59B trailing. The latest quarter grew 112.5% to $2.58B. This is one of the fastest revenue ramps in the market, and it has been achieved by signing large contracts and then building the capacity to serve them.",
      "The attributed consensus expects $3.54B next quarter and $4.69B the quarter after, $12.87B for the fiscal year and $26.45B for the next, with losses of $5.19 and $4.74 per share. Note the direction of the loss: it narrows while revenue roughly doubles. That is the analysts assuming operating leverage eventually outruns the financing cost.",
      "The drivers are AI training and inference demand, and the willingness of customers to commit to multi-year contracts for capacity they cannot get elsewhere at short notice. The brakes are the availability of power and equipment, the cost of financing, and the possibility that a customer with a large contract renegotiates or fails. In a business with this much debt, a single large contract problem is a solvency question rather than an earnings question.",
    ],
    bullets: [
      {
        title: "Contract wins",
        detail:
          "Each large commitment adds revenue and requires a matching build. Growth arrives in steps.",
      },
      {
        title: "Capacity delivery",
        detail:
          "Power, buildings and equipment have to be in place before the contract can be billed.",
      },
      {
        title: "Utilisation",
        detail:
          "A rented accelerator earns; an idle one depreciates. Utilisation is the difference between the gross margin and the operating margin.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a business that was loss-making before it was large. Operating income was negative $14.0M in FY2023 on $229.0M of revenue, positive $324.0M in FY2024 on $1.92B, and negative $46.0M in FY2025 on $5.13B. The FY2024 profit did not survive the expansion, which is a warning about how thin the operating margin is at scale.",
      "Quarterly operating margins have been between negative 6.9% and positive 3.8% over six quarters. That band is narrow in absolute terms and the wrong side of zero more often than not. Return on equity is negative 43.6%, which follows from the net loss and a capital base that includes a large amount of debt.",
      "The reported losses are consistent across the annual and quarterly tables in a way that makes them credible as a description of the business: FY2023 lost $594.0M on $229.0M of revenue, and the recent quarters lose $626.0M to $740.0M each. Those are not accounting accidents. They are the cost of carrying a fleet that is being bought faster than it is being paid for.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $13.65B over the trailing period, a negative 179.9% margin. Capital spending is running at close to twice revenue. That is the arithmetic of a build: the equipment is bought up front and the revenue is collected over the term of the contract.",
      "The annual history shows the same thing at a smaller scale: negative $1.11B, negative $5.95B and negative $7.25B in FY2023 through FY2025. Each year's shortfall was larger than the last, and none of them was covered by operating cash flow. The company has been funded by raising capital and by borrowing, which is where the interest charge comes from.",
      "No net debt figure is available in the data, which is the most important omission in this report. For a business with this cash flow profile, the size and structure of the debt determines the equity value more than the revenue trajectory does. A reader should treat the absence as a gap to fill from the filings, not as evidence that leverage is modest.",
    ],
  },
  valuation: {
    paragraphs: [
      "There is no trailing P/E, no EV/EBITDA and no EV/Sales in the data, so the multiples have to be built from the market capitalisation of $25.59B and the revenue line. Against $7.59B that is about 3.4x sales. Against the $26.45B consensus for next year it would be under one time sales, before adjusting for debt.",
      "That range is what makes the shares difficult to value. At 3.4x trailing sales, CoreWeave is priced as an infrastructure company with a lot of growth left. At under one time forward sales, it would be priced as a utility. The difference between those two outcomes is whether the revenue arrives and whether the margins improve, and both depend on the financing cost staying manageable.",
      "Stockmonk does not publish a target price. The honest statement is that a negative net margin makes the equity a leveraged claim on the operating business: small improvements in utilisation or pricing flow almost entirely to the bottom line, and small deteriorations do the same in reverse. That asymmetry is the reason the analyst targets are spread so widely.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-eight analysts contribute to the attributed consensus, with a mean target of $131.53 and a range of $39.00 to $278.00. The mean is nearly three times the last close of $46.40, and the range spans more than seven times from low to high. That is the widest dispersion in this coverage group, and it is not a disagreement about whether AI demand exists.",
      "The estimates are $3.54B of revenue and a loss of $1.55 per share next quarter, $4.69B and a loss of $1.11 the quarter after, $12.87B and a loss of $5.19 for the fiscal year, and $26.45B and a loss of $4.74 for the next. Eighteen analysts cover each of the next two quarters, which is unusually deep coverage for a company this young. The disagreement is about the balance sheet, and the estimates say so.",
    ],
  },
  risks: {
    intro:
      "CoreWeave's risks are financial as much as operational. The demand has been proven; the question is whether the capital structure allows the company to serve it profitably.",
    items: [
      {
        title: "Financing cost",
        severity: "High",
        detail:
          "A negative 1.9% operating margin becomes a negative 25.4% net margin after interest. The debt is the difference between the two.",
        watch:
          "Interest expense, the maturity schedule and the cost of any new borrowing.",
      },
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "A few large contracts account for much of the revenue. A renegotiation or a customer failure would hit revenue and the ability to service debt together.",
        watch:
          "Revenue from the largest customers and the remaining contract terms.",
      },
      {
        title: "Equipment obsolescence",
        severity: "High",
        detail:
          "Accelerators lose value as new generations arrive. A fleet bought at one performance level has to compete with newer capacity.",
        watch:
          "Depreciation policy, the useful life assumed and the pace of new chip generations.",
      },
      {
        title: "Utilisation",
        severity: "Medium",
        detail:
          "A 67.4% gross margin assumes the capacity is rented. Idle equipment still depreciates and still carries its share of the debt.",
        watch:
          "Revenue per unit of installed capacity and any disclosure on contracted backlog.",
      },
      {
        title: "Capital intensity",
        severity: "Medium",
        detail:
          "Negative $13.65B of free cash flow means the company depends on continued access to capital markets at a workable price.",
        watch:
          "The split between debt and equity raised, and the terms of each.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "It has ranged from negative 6.9% to positive 3.8%. Crossing zero sustainably would change the equity story.",
      },
      {
        title: "Debt disclosure",
        detail:
          "The missing balance sheet detail is the most important thing to find in the filings.",
      },
      {
        title: "Contracted revenue",
        detail:
          "The portion of future revenue already signed is what separates an infrastructure business from a spot rental one.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "CoreWeave is a GPU cloud with $7.59B of trailing revenue growing 115.3%, a 67.4% gross margin and a negative 25.4% net margin. It spent $13.65B more than it earned to build capacity, and it finances that capacity with debt. The operating business is close to break-even; the capital structure is not.",
      "The educational point is that the distance between gross margin and net margin measures the cost of the balance sheet, not the quality of the product. A company can have a good product, a growing market and a negative net margin at the same time, and the reason is usually that the assets are financed rather than owned outright. Whether that is sensible depends on the return on the assets against the interest rate, and that comparison is not in the data here.",
      "What is not known is the size and terms of the debt, the concentration of the contract book, and how quickly the equipment has to be replaced. The AI build-out created this business; it does not determine whether the financing structure will leave anything for the equity.",
    ],
    questions: [
      "What is the total debt, its maturity profile and its average interest rate?",
      "What share of revenue comes from the largest contracts?",
      "Over how many years are the accelerators depreciated, and does that match their economic life?",
      "What utilisation rate does the installed fleet run at today?",
    ],
  },
};
