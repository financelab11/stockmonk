import type { StockStory } from "./types";

export const TEM: StockStory = {
  "ticker": "TEM",
  "kicker": "Healthcare Growth · Precision medicine data",
  "title": "Tempus AI sells sequencing now and data later",
  "dek": "Genomic tests generate the revenue today; the de-identified clinical and molecular data is the asset that could change the margin. The company is still losing money while it builds both.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $1.5B trailing twelve months, +36.6% year over year.",
    "Profitability: -18.5% operating margin and -9.0% net margin.",
    "Cash: -$136.8M free cash flow, a -9.1% margin.",
    "Scorecard: 51/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1717115/000119312526066961/tem-20251231.htm",
  "irUrl": "https://www.tempus.com",
  "bigPicture": {
    "paragraphs": [
      "Tempus AI, Inc. generated $1.5B of revenue over the last twelve months, +36.6% versus the prior year. The value sits in a small number of clinical programmes, so trial data and cash runway matter more than near-term revenue.",
      "The latest reported quarter was Q3 FY26, with $411.5M of revenue and an operating margin of -13.8%. The stock closed at $63.43 on 2026-11-17, giving a market capitalization of $11.6B.",
      "The shares sit 47% of the way up their 52-week range ($40.77 to $89.09). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A sequencing lab earns a fee per test. A data business earns a fee per question. Tempus is trying to run both through the same clinical footprint."
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
      "The operating leverage depends on which engine grows faster. If testing grows, revenue rises but so do laboratory costs. If data grows, incremental revenue drops through at a high rate. The blended operating margin is the scoreboard, and it improved from minus 24.3% in Q1 FY26 to minus 13.8% in Q3."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 58.3% a year across the fiscal years in the dataset, and the latest quarter changed +23.1% year over year. Third-party estimates for the current fiscal year point to $1.6B of revenue and -$0.10 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of -18.5% and return on invested capital of n/a are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Test volume",
        "detail": "More reports per oncologist and more oncologists using the platform. The base of the data flywheel."
      },
      {
        "title": "Reimbursement",
        "detail": "Coverage decisions determine whether a test is a paid procedure or a cost the hospital absorbs."
      },
      {
        "title": "Data contracts",
        "detail": "Pharma partnerships are lumpy and long-dated, but they carry much higher incremental margins than testing."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -18.5%, the net margin is -9.0% and diluted EPS is -$1.07. The latest quarter's operating margin was -13.8%.",
      "Return on equity is n/a. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $411.5M, an operating margin of -13.8% and a net margin of -3.6%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$136.8M, a -9.1% margin. Net debt is not a meaningful measure for this business in the current dataset.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $89.56; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "18 analysts contribute to the third-party consensus. The mean target is $89.56, with a range of $70.00 to $120.00.",
      "Current-year estimates call for $1.6B of revenue and -$0.10 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 18 analysts with a mean target of $89.56; third-party estimates can change without notice."
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
  }
};
