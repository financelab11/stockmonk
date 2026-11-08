import type { StockStory } from "./types";

export const MDGL: StockStory = {
  ticker: "MDGL",
  kicker: "Healthcare Growth · Liver disease",
  title: "Madrigal turned a liver disease into a launch story",
  dek: "Resmetirom is an oral treatment for MASH, a silent liver condition that is common but hard to diagnose. The product is working commercially; the constraint is finding patients and getting payers to cover them.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $1.43B, up 92.8%, with the latest quarter at $431.3M.",
    "Q3 FY26 was the first quarter with a positive operating margin, at 13.0%.",
    "Gross margin is 91.0%, but free cash flow is still negative $169.4M.",
    "The consensus expects $2.18B of revenue and $11.21 of EPS next year, based on only three analysts.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1157601/000162828026009514/mdgl-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001157601&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Madrigal Pharmaceuticals sells resmetirom, an oral drug for metabolic dysfunction-associated steatohepatitis, or MASH. The condition is a build-up of fat in the liver that causes inflammation and, in some patients, scarring. Resmetirom is a liver-directed thyroid hormone receptor beta agonist; it is taken once a day and is intended for patients with moderate to advanced fibrosis.",
      "Revenue reached $1.43B over the trailing twelve months, up 92.8%, and the latest quarter produced $431.3M. The gross margin is 91.0%, which is what a branded oral drug should earn. The operating margin is still negative at 10.7% on a trailing basis, but Q3 FY26 was the first quarter with a positive operating margin, at 13.0%, and net income of $55.4M.",
      "At $399.63 the market capitalisation is $9.28B, or 6.1x EV/sales. The company has $619.7M of net cash. The question is how quickly a silent disease can be diagnosed and treated, because the launch depends on patients who often do not know they have it.",
    ],
    quote:
      "MASH is common but quiet. The drug can only be sold to patients who have been tested, staged and referred, and most of them have not been.",
  },
  whatItDoes: {
    paragraphs: [
      "The patient has MASH, usually alongside obesity, type 2 diabetes or metabolic syndrome. The disease is diagnosed through blood tests, imaging or a liver biopsy, and the decision to treat depends on the stage of fibrosis. The prescriber is a hepatologist or a gastroenterologist, often at a specialist liver clinic.",
      "Resmetirom is dispensed through specialty pharmacy and reimbursed by insurers. Coverage usually requires documentation of the diagnosis and the fibrosis stage, which makes the diagnostic pathway part of the commercial model. A patient who is not staged cannot be treated.",
      "The company employs about 92 people, a small team for a business with $1.43B of revenue. That reflects the decision to commercialise with a focused specialty sales force rather than a large primary-care organisation. The trade-off is reach: a small sales force can cover liver specialists but not every doctor who might see a MASH patient.",
    ],
    bullets: [
      {
        title: "Resmetirom",
        detail:
          "A once-daily oral drug for MASH with fibrosis. The entire revenue base.",
      },
      {
        title: "Specialist call point",
        detail:
          "Hepatologists and gastroenterologists. A concentrated prescriber base that a small sales force can cover.",
      },
      {
        title: "Diagnosis",
        detail:
          "Testing and staging are prerequisites for treatment. The bottleneck is upstream of the prescription.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The revenue model is a branded oral drug sold at a price per patient per year. The gross margin of 91.0% leaves most of the price for commercial spending, and the operating margin depends on how much of that gross profit is consumed by the sales force, payer negotiations and patient support.",
      "The cost base is a specialty sales team, medical affairs, market access and the diagnostics work that supports staging. Those costs are largely fixed, so the operating margin improves as revenue grows. Q3 FY26 is the first evidence of that: revenue of $431.3M produced a 13.0% operating margin, compared with negative 29.8% in Q1 FY26.",
      "The pricing environment is the risk. A large, chronic population attracts payer scrutiny, and competition from other MASH therapies and from GLP-1 drugs gives insurers alternatives. The gross-to-net spread, not the list price, determines the revenue.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from zero in FY2023 to $180.1M in FY2024, $958.4M in FY2025 and $1.43B on a trailing basis. That is a launch, not a compound growth rate. The latest quarter grew 50.1%, slower than the earlier quarters, which is normal as the base gets larger.",
      "The drivers are diagnosis rates, specialist adoption, payer coverage and, eventually, international launches. MASH is estimated to affect a large share of adults with obesity, but only a fraction are diagnosed and staged. The company's growth depends on expanding testing and on convincing primary-care doctors to refer.",
      "The consensus expects $1.59B of revenue this fiscal year and $2.18B next year. Only one analyst contributes to the current-year revenue estimate and three to next year, so the consensus is thin. The estimate is a signal of direction, not a reliable forecast.",
    ],
    bullets: [
      {
        title: "Diagnosis and staging",
        detail:
          "The largest constraint. More testing means more identifiable patients.",
      },
      {
        title: "Payer coverage",
        detail:
          "Coverage tied to fibrosis stage determines who can actually be treated.",
      },
      {
        title: "International",
        detail:
          "Launches outside the United States add patients but require separate regulatory and reimbursement work.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a company spending through a launch. Operating losses were $242.5M, $293.6M and $380.5M in FY2021 to FY2023, then $497.9M in FY2024 as the launch began, before narrowing to $300.1M in FY2025. The trailing operating margin is still negative 10.7%.",
      "The quarterly trend is the important one. Operating margin was negative 22.2% in Q2 FY25, negative 39.7% in Q3, negative 18.6% in Q4, negative 29.8% in Q1 FY26, negative 15.5% in Q2 and positive 13.0% in Q3. Revenue grew from $212.8M to $431.3M over the same period, which is exactly the operating leverage the model needs.",
      "Net income turned positive in Q3 FY26 at $55.4M, or $1.83 per share. The trailing net margin is still negative 10.9%, and return on invested capital is negative 1,663.4% because the invested-capital base is small relative to the accumulated losses. Those trailing figures will lag the quarterly improvement.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $169.4M over the trailing period, a negative 11.9% margin. That is smaller than the operating loss, but it is still a cash outflow, and it reflects the working capital needed to support a launch: inventory, receivables and the cost of building a commercial organisation.",
      "Net cash is $619.7M. With a modest burn and a business approaching operating breakeven, the balance sheet is not the main constraint. The company has enough cash to fund the current plan without an immediate financing, assuming the launch does not require a step-up in spending.",
      "The cash-flow history shows the cost of getting here. Free cash flow was negative $184.1M, $225.1M, $325.7M and $457.0M in the four years before FY2025, then negative $190.0M as revenue began to cover some of the spending.",
    ],
  },
  valuation: {
    paragraphs: [
      "The trailing P/E is negative and EV/EBITDA is not meaningful. The stock trades at 6.1x EV/sales, which is lower than many growth pharmaceutical companies because the revenue base is already substantial.",
      "The forward math is more interesting. The consensus expects $2.18B of revenue and $11.21 of EPS next year, which would put the shares on a low earnings multiple if the estimate is right. But only three analysts contribute to that estimate, and the current-year EPS estimate is negative $2.00. The swing from a loss to $11.21 in one year is a large assumption.",
      "The valuation therefore depends on the margin trajectory. If Q3 FY26 is the start of sustained profitability, the shares are reasonably priced against next year's estimate. If the quarter was a one-off, the earnings base is much lower.",
    ],
  },
  analysts: {
    paragraphs: [
      "Eighteen analysts contribute to the attributed consensus, with a mean target of $688.94 and a range of $479.00 to $962.00. The wide range reflects different assumptions about diagnosis rates and payer coverage.",
      "Estimates call for $1.59B of revenue and a loss of $2.00 per share this fiscal year, then $2.18B and $11.21 next year. For the next quarter the consensus is $477.7M of revenue and $1.92 of EPS, based on two analysts. The small number of contributors is a limitation, not a detail.",
      "Those are third-party forecasts. The revenue estimates are plausible given the launch; the profit estimate for next year is the part that needs scrutiny, because it assumes a margin that the company has achieved for only one quarter.",
    ],
  },
  risks: {
    intro:
      "Madrigal has a first-mover position in MASH and a product that is already generating $1.43B of revenue. The risks are diagnosis, payer coverage, competition and the durability of the new margin.",
    items: [
      {
        title: "Diagnosis bottleneck",
        severity: "High",
        detail:
          "MASH is underdiagnosed. Growth depends on testing and staging patients who are currently outside the specialist system.",
        watch:
          "Diagnosis rates, referral volumes and the number of active prescribers.",
      },
      {
        title: "Payer coverage",
        severity: "High",
        detail:
          "Insurers may restrict coverage to patients with advanced fibrosis or require documentation that is hard to obtain. That limits the treated population.",
        watch:
          "Coverage policies, prior-authorisation rates and gross-to-net pricing.",
      },
      {
        title: "Competition",
        severity: "High",
        detail:
          "Other MASH therapies and GLP-1 drugs compete for the same patients. A competitor with a better profile or a lower price would limit share.",
        watch:
          "Competitor approvals, clinical data and formulary placement.",
      },
      {
        title: "Margin durability",
        severity: "Medium",
        detail:
          "The positive operating margin in Q3 FY26 was the first. A return to losses would undermine the forward earnings estimate.",
        watch:
          "Operating margin, sales-and-marketing spend and gross margin.",
      },
      {
        title: "Thin consensus",
        severity: "Low",
        detail:
          "Only a handful of analysts contribute to the annual estimates, so the average can move sharply on new information.",
        watch:
          "The number of estimates and the range around them.",
      },
    ],
    watchlist: [
      {
        title: "Quarterly revenue",
        detail:
          "The launch curve is the base for every other number in the model.",
      },
      {
        title: "Operating margin",
        detail:
          "One profitable quarter is a data point; two would be a trend.",
      },
      {
        title: "Payer coverage",
        detail:
          "Coverage determines how many diagnosed patients can actually be treated.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Madrigal has taken a liver disease with no approved oral therapy and turned it into a $1.43B revenue business growing 92.8%. Gross margin is 91.0%, and the latest quarter produced the first positive operating margin.",
      "The constraint is upstream of the prescription. MASH is common but silent, and patients have to be tested, staged and referred before they can be treated. Payer coverage adds another filter. The company's growth depends on expanding that funnel, not on selling more to existing patients.",
      "The valuation is not demanding on next year's consensus, but that consensus rests on a small number of analysts and a large margin swing. The reader should treat the forward EPS as an assumption and focus on the diagnosis and coverage data.",
    ],
    questions: [
      "How many patients are diagnosed and staged versus the estimated prevalence?",
      "What share of prescriptions are covered without a prior-authorisation delay?",
      "Is the Q3 FY26 operating margin repeatable?",
      "How much of the next-year revenue estimate depends on international launches?",
    ],
  },
};
