import type { StockStory } from "./types";

export const PODD: StockStory = {
  ticker: "PODD",
  kicker: "Healthcare Growth · Diabetes technology",
  title: "Insulet sells the pod, then keeps selling pods",
  dek: "Omnipod is a disposable insulin pump worn on the body. The business runs on recurring pod shipments, payer coverage and manufacturing scale, and the shares now trade at an ordinary medtech multiple.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $3.2B, up 26.5% year over year, with a 71.9% gross margin.",
    "Q3 FY26 revenue was $842.0M and the operating margin jumped to 22.5%.",
    "Free cash flow was $260M, only 8.2% of revenue, because capacity and working capital absorb the rest.",
    "The shares are down 54.7% over a year even though revenue grew, so the debate is about duration, not the last quarter.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1145197/000114519726000028/podd-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001145197&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Insulet makes Omnipod, a tubeless insulin pump. A patient fills a small pod with insulin, sticks it on the body and controls it from a handheld device or a phone app. The pod is worn for up to three days and then thrown away, which makes the product less of a device sale and more of a consumable.",
      "The company reported $3.2B of revenue over the trailing twelve months, up 26.5%, at a 71.9% gross margin. The latest quarter, Q3 FY26, produced $842.0M of revenue and a 22.5% operating margin, the best quarterly margin in the table. The annual history shows the same direction: operating income rose from $126.0M in FY2021 to $473.8M in FY2025.",
      "At $146.51 the shares sit well below the 52-week high of $354.88 and have lost 54.7% over twelve months. Nothing in the revenue line explains that. What changed is the price the market is willing to pay for growth: the stock trades at 23.7x trailing earnings and 15.2x EV/EBITDA, both ordinary for a profitable medtech company. The question is whether the 19.2% growth in the latest quarter is a pause or the start of a slower phase.",
    ],
    quote:
      "A disposable pump creates a recurring revenue stream, but only while patients keep reordering. Retention and reimbursement matter more than the size of the addressable market.",
  },
  whatItDoes: {
    paragraphs: [
      "Omnipod is used by people with insulin-dependent diabetes. The core customer is someone with type 1 diabetes who needs continuous insulin and does not want tubing, but the company has been pushing into type 2 diabetes, where the population is far larger and insulin use is growing. The pod pairs with a continuous glucose monitor and an algorithm to adjust insulin automatically, which is the competitive frontier in diabetes technology.",
      "The product reaches patients through endocrinologists, diabetes educators and distributors. In the United States, pumps are typically covered under durable medical equipment or pharmacy benefits depending on the channel, and each payer decides how much of the cost it will carry. That makes reimbursement a commercial function, not an administrative one.",
      "Insulet manufactures the pods itself rather than outsourcing, and employs about 1,900 people. Owning production protects margin and quality but turns volume forecasts into a capital-planning problem: a new plant or a line expansion has to be built before the patients arrive.",
    ],
    bullets: [
      {
        title: "The pod",
        detail:
          "A disposable pump worn for up to three days. Each patient consumes a steady stream of pods, which is the recurring revenue.",
      },
      {
        title: "The controller",
        detail:
          "A handheld device or app used to drive the pod. Sold or supplied at the start of therapy and replaced less often than the pods.",
      },
      {
        title: "The channel",
        detail:
          "Distributors, diabetes clinics and payers. Coverage terms and patient out-of-pocket cost decide whether a prescription becomes a filled order.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The economics are a razor-and-blade model with a medical device attached. A new patient needs a controller and training, then buys pods indefinitely. Pod revenue carries the 71.9% gross margin and scales with the installed base, while the controller is closer to a customer-acquisition cost.",
      "The cost structure below gross profit is mostly people: a field sales force, clinical specialists who train patients and support prescribers, and the manufacturing overhead that comes with running plants. That is why a 71.9% gross margin produces an 18.4% operating margin rather than a software-like number. Every additional patient spreads those fixed costs a little further.",
      "The operating leverage is real but not automatic. Q3 FY26 shows what happens when volume and price mix cooperate: operating margin reached 22.5%. The earlier quarters in the same year sat between 16.0% and 18.7%, which is the more normal range when a plant is ramping or the geographic mix is shifting toward lower-priced markets.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 24.2% a year across the fiscal years in the dataset, from $1.10B in FY2021 to $2.71B in FY2025. The trailing-twelve-month figure of $3.2B is 26.5% higher than the prior period, but the latest quarter grew 19.2%. A company does not move from 26% to 19% because demand disappeared; it moves there when the base gets larger and the easiest patients have already been converted.",
      "The plausible drivers are type 2 penetration, upgrades to the automated version of the system, international expansion and the shift of prescriptions into pharmacy channels where filling is easier. Each one adds patients to the same pod-reordering annuity. The constraint is not manufacturing capacity in the long run; it is how many patients a doctor is willing to switch and how much a payer is willing to cover.",
      "Third-party estimates point to $3.30B of revenue this fiscal year and $3.69B next year, with EPS of $6.77 and $7.90. Those numbers assume the current growth rate decelerates gradually rather than breaking. If the latest quarter is the new normal, the forward estimates are too high; if it was a channel or comparison effect, they are reasonable.",
    ],
    bullets: [
      {
        title: "Type 2 diabetes",
        detail:
          "A much larger population than type 1, but patients are older, more price-sensitive and more likely to be managed on injections first.",
      },
      {
        title: "Automated insulin delivery",
        detail:
          "The closed-loop feature is the reason to choose Omnipod over a conventional pump. Upgrade cycles keep the installed base current.",
      },
      {
        title: "International",
        detail:
          "Additional geographies add patients but usually at lower average selling prices and with their own reimbursement negotiations.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a margin recovery story. Operating income was $126.0M on $1.10B of revenue in FY2021, fell to $37.6M in FY2022 as costs grew faster than sales, then climbed to $220.1M, $308.9M and $473.8M in the following three years. The FY2022 dip is a useful reminder that a manufacturing business can lose margin while growing.",
      "The quarterly table shows more volatility than the annual one. Operating margin moved from 18.7% in Q2 FY25 to 16.7%, 18.7%, 16.0% and 16.2% before reaching 22.5% in Q3 FY26. Net income of $141.1M and EPS of $2.03 in that quarter were well above the run rate, so the margin should be read as a good quarter rather than a new floor until it repeats.",
      "One line deserves a second look. FY2024 net income of $418.3M was higher than operating income of $308.9M. That gap came from something below the operating line, not from the pump business suddenly becoming more profitable. Return on equity of 27.2% and return on invested capital of 23.7% are strong, but they are flattered by a relatively small equity base.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $260M over the trailing period, an 8.2% margin. That is a long way from the 18.4% operating margin, and the difference is the cost of running a manufacturing network: capital expenditure, inventory to support pod supply, and the working capital that comes with selling through distributors.",
      "The annual cash history explains the transition. Free cash flow was negative $180.0M in FY2021 and negative $3.9M in FY2022, then turned positive at $70.1M, $305.3M and $377.7M. A company that once consumed cash to build capacity now generates it, but the trailing figure of $260M is below the FY2025 number, which suggests working capital has been absorbing some of the profit.",
      "Net debt is $377.7M, or 0.5x EBITDA. That is a manageable load for a business with this margin, and it leaves room to fund capacity without issuing equity. It also means the balance sheet is not the reason to own or avoid the shares; the reordering rate is.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $146.51 the shares trade at 23.7x trailing earnings, 15.2x EV/EBITDA, 3.3x EV/sales and 39.1x free cash flow. The earnings multiple is unremarkable for a medtech company growing in the twenties. The cash multiple is higher because free cash flow conversion is thin relative to accounting profit.",
      "The peer table puts the multiple in context. Globus Medical trades at 9.4x EV/EBITDA with a 21.6% operating margin, while Penumbra trades at 56.9x on a 12.1% margin. Insulet sits in between at 15.2x, which implies the market expects growth to continue but no longer awards a premium for it. The fall from $354.88 is the de-rating, not a collapse in the business.",
      "The useful valuation question is what the installed base is worth. A pod patient generates recurring revenue at a high gross margin for as long as they stay on the system. If retention is stable, the current multiple is not demanding. If retention or reimbursement is deteriorating, the same multiple is being applied to a shrinking annuity.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus includes 23 analysts with a mean target of $178.35 and a range of $160.00 to $200.00. The range is unusually narrow for a stock that has moved this much, which suggests the analysts agree on the business and disagree mainly about timing.",
      "Estimates call for $3.30B of revenue and $6.77 of EPS this fiscal year, then $3.69B and $7.90 next year. For the next quarter the consensus is $899.8M of revenue and $1.75 of EPS. Those are third-party forecasts, not Stockmonk projections, and they will be revised if the growth rate stays near 19%.",
      "A mean target is not a rating. The more informative signal is the gap between the target range and the current price: the lowest target of $160.00 is still above $146.51, which means the bearish case in the published range is milder than the market's own de-rating.",
    ],
  },
  risks: {
    intro:
      "Insulet's risks sit in reimbursement, competition and manufacturing rather than in the balance sheet. The company is profitable and only lightly levered, so the things that matter are the things that decide how many patients reorder.",
    items: [
      {
        title: "Reimbursement and channel mix",
        severity: "High",
        detail:
          "Pump coverage depends on payer contracts and on whether the prescription is filled through a distributor or a pharmacy. A change in coverage terms can slow starts without any change in the product.",
        watch:
          "Payer wins and losses, distributor rebates and the split between DME and pharmacy revenue.",
      },
      {
        title: "Competition in automated insulin delivery",
        severity: "High",
        detail:
          "Tubed pumps, other patch pumps and newer closed-loop systems all compete for the same patients. GLP-1 drugs can also delay the point at which a type 2 patient needs insulin at all.",
        watch:
          "New patient starts, prescription share and the pace of upgrades to the automated system.",
      },
      {
        title: "Growth deceleration",
        severity: "High",
        detail:
          "The latest quarter grew 19.2% against 26.5% for the trailing period. A sustained step-down would compress the multiple even if margins hold.",
        watch:
          "Quarterly revenue growth and the gap between guidance and the consensus estimate.",
      },
      {
        title: "Manufacturing execution",
        severity: "Medium",
        detail:
          "Pods are produced in-house. A plant ramp, quality issue or supply interruption would hit revenue and gross margin at the same time.",
        watch:
          "Gross margin, backorder disclosures and inventory levels.",
      },
      {
        title: "Balance-sheet capacity",
        severity: "Low",
        detail:
          "Net debt of $377.7M is only 0.5x EBITDA, but capacity expansion is capital-hungry and could require more borrowing if demand outruns the current plants.",
        watch:
          "Capital expenditure, net debt/EBITDA and any new credit facilities.",
      },
    ],
    watchlist: [
      {
        title: "Pod revenue per patient",
        detail:
          "The recurring line is the business. Watch whether revenue grows with the patient base or only with price.",
      },
      {
        title: "Gross margin",
        detail:
          "A move below the low 70s would signal manufacturing strain or a less favourable geographic mix.",
      },
      {
        title: "New patient starts",
        detail:
          "The leading indicator for future pod shipments, and the first place a reimbursement problem would show up.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Insulet is a profitable manufacturer of a disposable insulin pump with a 71.9% gross margin and a growing installed base. The trailing numbers are strong: $3.2B of revenue, 26.5% growth, $473.8M of operating income in FY2025 and $260M of free cash flow.",
      "The uncertainty is concentrated in one place. Revenue growth decelerated to 19.2% in the latest quarter, and the shares have fallen 54.7% over a year. Either the market is early in repricing a durable mid-teens grower, or it is correctly anticipating slower patient additions. The reimbursement system and the competitive set will decide which.",
      "The balance sheet does not settle the argument. Net debt is small, cash flow is positive and the company can fund itself. What a reader needs is evidence on retention and on the type 2 opportunity, because those are the variables that make the annuity larger or smaller.",
    ],
    questions: [
      "How much of pod revenue comes from patients who started in the last twelve months?",
      "What share of new starts is type 2 diabetes, and how does retention compare with type 1?",
      "Is the Q3 FY26 margin of 22.5% repeatable, or was it a mix and timing benefit?",
      "What would a payer decision to narrow pump coverage do to the installed base?",
    ],
  },
};
