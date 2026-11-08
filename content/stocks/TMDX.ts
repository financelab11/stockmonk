import type { StockStory } from "./types";

export const TMDX: StockStory = {
  ticker: "TMDX",
  kicker: "Healthcare Growth · Organ preservation",
  title: "TransMedics turned organ preservation into a logistics business",
  dek: "The Organ Care System keeps donor organs warm and perfused instead of on ice. Selling the console is only the start; the revenue now depends on disposable sets and on running the transport of the organ itself.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $727.6M over twelve months, up 28.5%, and the latest quarter grew 41.1%.",
    "The 58.6% gross margin is well below a pure device company because the service layer carries real operating costs.",
    "Free cash flow is $44.7M, or 6.1% of revenue, and the company carries almost no net debt.",
    "Operating margin fell from 23.2% to 7.6% across recent quarters before recovering to 13.9%.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1756262/000119312526067032/tmdx-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001756262&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "TransMedics builds the Organ Care System, a platform that keeps a donor heart, lung or liver functioning outside the body while it is transported to a transplant centre. Cold storage puts an organ on ice and races the clock; the OCS perfuses it with blood and oxygen, which extends the usable window and lets surgeons assess the organ before committing.",
      "The device is only half of the business. A transplant programme needs a console, a single-use perfusion set for every organ, and people who know how to run the equipment. TransMedics increasingly supplies that service layer as well, coordinating retrieval and transport and charging per case. Revenue reached $727.6M over the trailing period, up 28.5%, with the latest quarter up 41.1% at $203.0M.",
      "The shares trade at $88.24 for a $3.1B market capitalisation. That is 21.2x trailing earnings but 68.6x free cash flow, because the cash-flow margin is thin. The question is whether the service layer is a moat that eventually earns a device-like margin, or a lower-margin logistics operation that permanently changes the economics.",
    ],
    quote:
      "Every transplant is a one-off operation with a fixed window. The company that controls the organ, the machine and the flight has more influence over the outcome than the company that only sells the machine.",
  },
  whatItDoes: {
    paragraphs: [
      "The clinical customer is a transplant centre: cardiac, pulmonary or liver surgeons, perfusionists and procurement teams. The patient is the recipient, but the buyer is the hospital, and the decision is made by a small group of specialists who have to trust the technology with an organ that cannot be replaced.",
      "The OCS is placed at the centre and used case by case. Each use consumes a disposable perfusion set, and the service model adds organ retrieval and transport. That means the company's revenue per transplant is not just a device price; it includes the consumable and, in the service model, the cost of moving the organ from the donor hospital to the recipient.",
      "TransMedics is a small company by headcount, about 109 people, but it operates in a capital-intensive way: consoles have to be placed before revenue arrives, and the logistics network has to be staffed even when case volumes are uneven. The company sells in the United States and selected international markets, where transplant volumes and reimbursement differ.",
    ],
    bullets: [
      {
        title: "Organ Care System",
        detail:
          "The console that perfuses the organ. Installed at transplant centres and used across heart, lung and liver cases.",
      },
      {
        title: "Perfusion sets",
        detail:
          "Single-use consumables for every case. This is the recurring revenue that grows with procedure volume.",
      },
      {
        title: "Service model",
        detail:
          "Retrieval, preservation and transport managed by the company and billed per case. It deepens the relationship and raises revenue per transplant.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "There are three revenue streams: consoles, disposable sets and service fees. The console is a capital sale or placement that establishes the account. The set is consumed with every organ. The service fee pays for the retrieval and transport work, including the people and aircraft that make a time-critical transplant possible.",
      "That mix explains the 58.6% gross margin. A company selling only a proprietary disposable would expect something closer to the 70% to 90% range common in medtech. TransMedics carries service costs, logistics and perfusion specialists in its cost of revenue, so each case generates revenue but also consumes labour and transport capacity.",
      "The operating leverage comes from spreading the fixed part of that network across more cases. A console base that is already installed and a logistics team that is already staffed can absorb additional volume at a lower incremental cost. The quarterly margin swing shows both directions: operating margin was 23.2% in Q2 FY25, fell to 7.6% in Q1 FY26 and recovered to 13.9% in Q3 FY26.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $30.3M in FY2021 to $93.5M, $241.6M, $441.5M and $605.5M in the following years. That is a 69.2% compound annual rate, driven by adoption across heart, lung and liver programmes and by the shift toward a service model that raises revenue per case.",
      "The latest quarter grew 41.1% year over year to $203.0M, but the sequential step from Q2's $189.9M is smaller. The consensus for the next quarter is $202.2M, essentially flat, which suggests the analysts expect a pause rather than a continuation of the same slope. For the full year the estimate is $769.1M, then $895.1M next year.",
      "The growth ceiling is anatomical. There are only so many donor organs, and the number of transplant centres is finite. Growth has to come from taking share from cold storage, expanding into organs the system does not yet serve well, and increasing the service attach rate. Those are different problems from selling more software seats, and they depend on clinical evidence and hospital budgets.",
    ],
    bullets: [
      {
        title: "Heart and lung",
        detail:
          "The original beachhead. These organs are the most time-sensitive and the most likely to benefit from perfusion rather than cold storage.",
      },
      {
        title: "Liver",
        detail:
          "A larger procedure pool, but also the area where cold storage is most entrenched and where cost pressure is strongest.",
      },
      {
        title: "Service attach",
        detail:
          "The more cases the company manages end to end, the more revenue it captures per organ and the stickier the account.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The company crossed into profitability in FY2024, with $37.5M of operating income on $441.5M of revenue, after losing money in each of the three prior years. FY2025 operating income reached $108.6M on $605.5M of revenue. The trailing operating margin is 11.9%, which is respectable for a company still building a service network.",
      "The quarterly path is less smooth. Operating margin was 16.2% in Q3 FY25, 13.2% in Q4, then 7.6% in Q1 FY26 as costs rose faster than revenue. It recovered to 12.5% and 13.9% in the next two quarters. A service business with fixed logistics capacity will always show this pattern when case volume is uneven.",
      "Net margin is higher than operating margin, at 19.9%, and return on equity is 26.2% against a 12.0% return on invested capital. The gap between those two returns usually means the equity base is small relative to debt or that non-operating income is helping. Neither changes the operating story, but it does mean the headline ROE overstates the return on the actual transplant business.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $32.4M, negative $57.7M and negative $164.9M in FY2021 to FY2023, then positive $133.6M in FY2025. The trailing figure is $44.7M, a 6.1% margin and well below the FY2025 number, which points to working capital absorbing cash as revenue grows.",
      "Net debt is $16.9M, or 0.1x EBITDA. For practical purposes the company is unlevered. That is unusual for a business that has to buy or lease aircraft and place consoles, and it gives management room to invest without a refinancing overhang.",
      "The cash flow supports the service build-out, but it does not yet support much else. A 6.1% free-cash-flow margin means the company is funding growth from operations and a small amount of debt, not returning capital. The priority is clearly fleet, consoles and perfusion capacity.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $88.24 the shares trade at 21.2x trailing earnings, 24.3x EV/EBITDA and 68.6x free cash flow, on 4.2x EV/sales. The earnings multiple looks reasonable; the cash multiple does not. The difference is depreciation on consoles and aircraft plus the working capital that a service model requires.",
      "The peer set spans a wide range. Globus Medical trades at 9.4x EV/EBITDA, Insulet at 15.2x and Penumbra at 56.9x. TransMedics at 24.3x is being priced as a growth medtech company with a service overlay, not as a mature device maker and not as a pure software-like platform.",
      "The multiple assumes that margins recover toward the high teens as the service network matures. If gross margin stays near 58.6% and operating margin near 12%, the cash-flow multiple is hard to justify. If the service layer scales and the disposable mix rises, the same revenue base could produce materially more cash.",
    ],
  },
  analysts: {
    paragraphs: [
      "Eleven analysts contribute to the attributed consensus, with a mean target of $102.55 and a range of $70.00 to $125.00. The dispersion is wide relative to the current price, which is what you would expect when the debate is about margin structure rather than the next quarter.",
      "Estimates call for $769.1M of revenue and $1.68 of EPS this fiscal year, then $895.1M and $2.25 next year. Only four analysts contribute to the current-year revenue estimate, so the consensus is thinner than the headline count suggests. For the next quarter the estimate is $202.2M of revenue and $0.46 of EPS.",
      "These are third-party forecasts and should be treated as such. A mean target above the current price is not a signal that the shares are cheap; it is a summary of how the published models value the service transition.",
    ],
  },
  risks: {
    intro:
      "TransMedics has a strong clinical position and a nearly clean balance sheet. The risks are about procedure volume, service execution and whether the economics of moving an organ can ever look like the economics of selling a device.",
    items: [
      {
        title: "Transplant volume ceiling",
        severity: "High",
        detail:
          "The number of donor organs is finite. Growth depends on taking share from cold storage and expanding into new organ types, not on an unlimited patient pool.",
        watch:
          "Case volumes by organ, new centre openings and the number of active OCS programmes.",
      },
      {
        title: "Service-model execution",
        severity: "High",
        detail:
          "Retrieval and transport are operationally complex. A missed flight, a staffing gap or a quality problem damages the clinical relationship as well as the quarter.",
        watch:
          "Gross margin, service revenue per case and any disclosed logistics disruptions.",
      },
      {
        title: "Margin structure",
        severity: "Medium",
        detail:
          "A 58.6% gross margin is low for a proprietary medical device. If the service mix keeps rising, operating leverage may be weaker than the revenue growth implies.",
        watch:
          "The split between device, disposable and service revenue, and gross margin by line.",
      },
      {
        title: "Hospital budgets and reimbursement",
        severity: "Medium",
        detail:
          "Transplant centres pay for the technology out of their own budgets. There is no separate payment that makes the decision costless, so adoption depends on the clinical and economic case.",
        watch:
          "Payer coverage, hospital capital budgets and transplant programme margins.",
      },
      {
        title: "Competition from cold storage",
        severity: "Medium",
        detail:
          "Cold storage is cheap, familiar and improving. The OCS has to be clinically better enough to justify a higher cost per case.",
        watch:
          "Clinical publications, competitor preservation trials and centre-level adoption.",
      },
    ],
    watchlist: [
      {
        title: "Case volume",
        detail:
          "The single best indicator of disposable and service revenue. Watch the absolute number, not just the growth rate.",
      },
      {
        title: "Gross margin",
        detail:
          "The clearest signal of whether the service layer is scaling or becoming a permanent drag.",
      },
      {
        title: "Service attach rate",
        detail:
          "The share of cases where TransMedics manages the whole process. Higher attach means more revenue per organ.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "TransMedics has built a real clinical franchise in organ preservation and added a service layer that raises revenue per transplant. Revenue has grown from $30.3M in FY2021 to $727.6M on a trailing basis, and the company is now profitable, with $108.6M of operating income in FY2025.",
      "The unresolved question is margin. A service business that transports organs will never have the gross margin of a disposable device, and the quarterly operating margin has already ranged from 7.6% to 23.2%. The market is paying 24.3x EV/EBITDA for the belief that scale fixes this. That belief is plausible but unproven.",
      "The balance sheet gives the company time to find out. Net debt is $16.9M and free cash flow is positive. What a reader should track is whether procedure volume grows faster than the cost of serving it.",
    ],
    questions: [
      "How many transplant centres are active, and how many organs does the average centre run through the system?",
      "What share of revenue is service rather than device and disposable?",
      "Can gross margin move back above 60% as volume scales?",
      "What happens to the model if a large centre adopts a cheaper preservation alternative?",
    ],
  },
};
