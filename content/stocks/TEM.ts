import type { StockStory } from "./types";

export const TEM: StockStory = {
  "ticker": "TEM",
  "kicker": "Healthcare Growth · Precision medicine data",
  "title": "Tempus AI sells sequencing now and data later",
  "dek": "Genomic tests generate the revenue today; the de-identified clinical and molecular data is the asset that could change the margin. The company is still losing money while it builds both.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue of $1.5B grew 36.6% while the operating margin improved from -24.3% in March to -13.8% in September, a narrowing loss on a fixed laboratory base.",
    "Free cash flow of -$136.8M is a -9.1% margin, but the September quarter was essentially breakeven at -$0.1M, the first sign of self-funding.",
    "Net cash of $590.5M and a 6.6x sales multiple price the data business as the margin lever, not the testing laboratory.",
    "Eighteen analysts average $90 against a $58 price, with ten neutral views and EPS estimates cut 60% over ninety days."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1717115/000119312526066961/tem-20251231.htm",
  "irUrl": "https://www.tempus.com",
  "bigPicture": {
    "paragraphs": [
      "The operating loss narrowed from -24.3% in the March quarter to -19.8% and then -13.8% in September, on revenue that rose from $348.1M to $411.5M. That is 18% revenue growth across two quarters with the loss rate nearly halving, which is what a laboratory does when volume fills capacity. The September net margin of -3.6% against an operating margin of -13.8% also shows how much interest income on the cash balance is doing.",
      "Tempus sells two things from one input. Genomic testing is a fee per report, billed to payers and hospitals, with reagents, sequencing and laboratory staff in cost of revenue. Data licensing is a contract with pharmaceutical companies for de-identified clinical and molecular data, with a marginal cost near zero. Every test adds to the data set, which is the strategic link. The 64.5% gross margin is the testing business's arithmetic, not the data business's.",
      "The market value is $10.5B, 6.6x trailing sales and no meaningful earnings multiple. The company consumed $136.8M of free cash flow over the trailing year and holds $590.5M of net cash. The sales multiple is a bet that data licensing becomes large enough to lift the blended margin, because testing alone at 64.5% gross and a -13.8% operating margin does not support it. The 52-week range of $41 to $89 says the market has moved between those readings within a year."
    ],
    "quote": "Tempus runs a laboratory to generate the data it licenses, and the valuation depends on which of those two businesses ends up setting the margin."
  },
  "whatItDoes": {
    "paragraphs": [
      "The testing customer is an oncologist or a pathologist who needs to know what is driving a tumour. Tempus collects the sample, sequences it and returns a report that lists actionable mutations and, where relevant, available therapies or trials. The hereditary test serves a different customer: a patient or family member who may carry an inherited cancer risk.",
      "The data customer is a pharmaceutical company, a researcher or a health system. Tempus aggregates the test results and the associated clinical information, removes identifying details and licenses access. It also sells software that helps clinicians find trials and helps drug developers find patients. The two businesses share a common input: every test adds to the data set.",
      "The company employs about 3,800 people and operates primarily in the United States. Laboratories are capital-intensive and regulated, and the sales cycle for a health system or a pharma data contract is long. That combination explains why revenue can grow quickly while profit lags."
    ],
    "bullets": [
      {
        "title": "Genomic testing",
        "detail": "Tumour profiling and hereditary testing. Billed to payers and hospitals, with revenue recognised per report."
      },
      {
        "title": "Data licensing",
        "detail": "De-identified clinical and molecular data sold to drug developers and researchers, usually under multi-year contracts."
      },
      {
        "title": "Applied AI",
        "detail": "Algorithms and trial-matching tools built on the data set. Small today, but the part that could change the margin."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Testing revenue is a fee per report. The payer is usually a health insurer or a hospital, and coverage depends on the test's clinical utility and on the specific billing code. The cost of goods includes reagents, sequencing capacity, laboratory staff and the bioinformatics that turns a sequence into a report. That is why gross margin is 64.5% rather than the 80% to 90% of a software company.",
      "Data revenue is a contract, not a transaction. A pharmaceutical company pays for access to a defined data set or for a research collaboration, and the revenue is recognised over the contract term. The marginal cost of delivering an additional data query is low, so this line has the potential to carry a much higher margin than testing.",
      "The operating leverage depends on which engine grows faster. If testing grows, revenue rises but so do laboratory costs. If data grows, incremental revenue drops through at a high rate. The blended operating margin is the scoreboard, and it improved from minus 24.3% in Q1 FY26 to minus 13.8% in Q3 FY2026."
    ]
  },
  "growth": {
    "paragraphs": [
      "Genomic testing pays the bills today, and it grew revenue 36.6% trailing after 83.4% in FY2025. Testing and data are not split in the segment line, so the mix has to be inferred from the margin: a shift toward data licensing would lift gross margin, and gross margin is not reported. What is visible is that revenue growth has decelerated from 83.4% to 36.6% to a 25.9% estimate for 2026, a normalisation after a very strong year.",
      "Consensus assumes $1.6B of revenue in 2026, 25.9% growth, and $2.0B in 2027, 24.1%, with EPS improving from -$0.10 to -$0.04. The company is expected to remain loss-making on a reported basis through 2027, which means the estimates do not assume the data business becomes large enough to change the blended margin. That is a conservative assumption relative to the 6.6x sales multiple, and the two are difficult to reconcile.",
      "Durability depends on contract concentration. A small number of pharmaceutical partners likely account for a large share of data revenue, and backlog and partner count are not disclosed. The testing business is more diversified but exposed to reimbursement, where coverage decisions set both volume and price. The 36.6% growth is real; the question is how much of it is repeatable without a new contract."
    ],
    "bullets": [
      {
        "title": "Testing volume",
        "detail": "Every genomic report is billed to a payer or hospital, so revenue follows test volume and coverage decisions rather than a subscription base."
      },
      {
        "title": "Data licensing",
        "detail": "De-identified clinical and molecular data sold to drug developers carries a near-zero marginal cost, which is why the mix decides the margin."
      },
      {
        "title": "Cash runway",
        "detail": "Net cash of $590.5M against $136.8M of trailing cash burn gives roughly four years of funding at the current rate."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The improvement is coming from operating expenses rather than gross margin. Top-line growth of 18% over two quarters came with an operating loss rate falling from -24.3% to -13.8%, which implies the laboratory and personnel base did not grow proportionally. That is the operating leverage the model needs, and it is the first sustained evidence of it: the quarterly operating margins through fiscal 2025 were -26.9%, -19.6%, -18.3% and -16.7%, a slower rate of improvement.",
      "Net margin is much better than operating margin, at -3.6% against -13.8% in September and 1.5% against -19.8% in June, because interest income on $590.5M of net cash and other items sit below the operating line. That is a real benefit but not an operating one, and it shrinks if the cash is spent. The 2026 EPS estimate of -$0.10 against a -$1.41 loss in FY2025 is therefore a blend of operating improvement and below-the-line income.",
      "Return on invested capital of -44.0% and return on equity of -37.8% are the arithmetic of a business that has raised capital and not yet earned a return on it. The comparison with Penumbra, at 9.0%, is not fair, since Penumbra is profitable and Tempus is not, but it shows the distance to a normal diagnostics return. The relevant milestone is an operating margin near zero, not a return on capital."
    ]
  },
  "cash": {
    "paragraphs": [
      "Cash burn is the constraint, and it is improving. Free cash flow was -$136.8M over the trailing year, a -9.1% margin, after -$239.1M in FY2025 and -$211.2M in FY2024. The September quarter was essentially breakeven at -$0.1M, following -$13.7M in June and -$81.5M in March. A laboratory that reaches breakeven cash flow at 25% revenue growth is a different business from the one that burned $239.1M.",
      "Net cash of $590.5M against that burn gives roughly four years of runway at the current rate, and there is no debt to refinance. Capex is modest at $21.0M in FY2025, so most of the cash goes to laboratory operations and to the sales organisation that signs data contracts. The balance sheet is not the risk; the risk is that the burn stops improving before the data business scales.",
      "No dividend or buyback is possible while the company is loss-making, so capital allocation is really capital consumption. The relevant question is whether $590.5M is enough to reach breakeven without dilution. At the current burn it is, but the burn has been volatile: the June 2026 quarter produced +$516.4M of free cash flow, which is working-capital timing rather than operating cash generation."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Six and a half times sales is the price of a diagnostics business with a data option attached. The device peers trade lower, with Insulet at 3.0x, TransMedics at 3.7x and Globus at 2.6x, and Penumbra at 7.7x is the only comparable. The premium to the device group is a bet on the data business, because testing at a 64.5% gross margin and a -13.8% operating margin would not command 6.6x sales on its own.",
      "There is no P/E or EV/EBITDA to use: the company is loss-making, and negative free cash flow makes the cash yield -1.3%. The only operational multiples are EV/Sales and, eventually, EV/Gross Profit, and the latter cannot be computed separately for testing and data because the split is not disclosed. A reader is left with the sales multiple and the cash balance, which is 5.6% of the market value.",
      "What would justify the multiple is evidence that data licensing is growing faster than testing and carries a materially higher margin, which would show up as gross margin expansion or as an inflection in operating margin. What would break it is a reimbursement restriction on genomic testing or the loss of a large pharmaceutical data contract, either of which would hit revenue at the same time as the fixed laboratory cost."
    ]
  },
  "analysts": {
    "paragraphs": [
      "A 60% cut to EPS estimates over ninety days is the loudest signal in the estimate set, and it sits alongside a share price that has fallen 24.0% over twelve months. The mean target of $90 is 55% above the $58 price, with a range of $70 to $120; even the low end is 21% above the market.",
      "The cuts are not a demand warning. Revenue estimates still imply 25.9% growth in 2026 and 24.1% in 2027; what fell was the profit line, with the 2026 estimate now -$0.10 and 2027 at -$0.04. That is the consensus repricing the cost of growth rather than the growth itself. The $70 low target is the case where the data business does not scale and the laboratory consumes the cash; the $120 high target is the case where it does."
    ]
  },
  "risks": {
    "intro": "Tempus is a growth company with a credible data asset and a cash-consuming laboratory. The risks are reimbursement, contract concentration, competition and the simple possibility that the data business never becomes large enough to change the margin.",
    "items": [
      {
        "title": "Reimbursement for genomic tests",
        "severity": "High",
        "detail": "Testing revenue depends on payer coverage and on billing codes. A coverage restriction would hit volume and price at the same time.",
        "watch": "Payer policies, CMS rates and the share of tests that are reimbursed."
      },
      {
        "title": "Data contract concentration",
        "severity": "High",
        "detail": "A small number of pharmaceutical partners likely account for a large share of data revenue. Losing one would be visible immediately.",
        "watch": "Contract disclosures, backlog and the number of data partners."
      },
      {
        "title": "Cash consumption",
        "severity": "High",
        "detail": "The company burned $136.8M over the trailing period and the brief does not disclose a cash balance. Continued losses could require new financing.",
        "watch": "Free cash flow, cash and equivalents, and any equity or debt raise."
      },
      {
        "title": "Laboratory competition",
        "severity": "Medium",
        "detail": "Large diagnostic laboratories and hospital systems run their own sequencing. Price competition in testing is intense.",
        "watch": "Gross margin and average revenue per test."
      },
      {
        "title": "Regulation and privacy",
        "severity": "Medium",
        "detail": "The data business depends on de-identification and on rules covering health information. A change in the rules would affect what can be licensed.",
        "watch": "Privacy regulation, data-use agreements and any enforcement action."
      }
    ],
    "watchlist": [
      {
        "title": "Blended gross margin",
        "detail": "The clearest signal of whether data revenue is becoming a larger part of the mix."
      },
      {
        "title": "Free cash flow",
        "detail": "The company has to fund its own growth eventually. Watch the trend, not the level."
      },
      {
        "title": "Data revenue disclosures",
        "detail": "Any detail on contract count, duration or average size would clarify the flywheel."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Tempus AI has built a real genomic testing franchise and a data asset that is genuinely differentiated. Revenue is $1.51B, growing 36.6%, and the operating loss is narrowing. Those are the facts that support the story.",
      "The company is still unprofitable, burns cash and does not disclose enough about its balance sheet or its data contracts to judge the durability of either engine. The valuation of $13.87B is a bet that the data business becomes large and high-margin enough to change the blended economics.",
      "The educational point is that revenue growth is not the same as business quality. A laboratory that grows quickly but earns 64.5% gross margin and loses money is a different proposition from a data company with the same revenue. The mix, not the headline growth, decides which one Tempus becomes."
    ],
    "questions": [
      "What share of revenue comes from data licensing rather than testing?",
      "How much cash does the company hold, and how many quarters does it fund?",
      "What is the gross margin on a data contract versus a genomic test?",
      "How concentrated is data revenue among the largest partners?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
