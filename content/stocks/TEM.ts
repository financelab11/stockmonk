import type { StockStory } from "./types";

export const TEM: StockStory = {
  ticker: "TEM",
  kicker: "Healthcare Growth · Precision medicine data",
  title: "Tempus AI sells sequencing now and data later",
  dek: "Genomic tests generate the revenue today; the de-identified clinical and molecular data is the asset that could change the margin. The company is still losing money while it builds both.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $1.51B, up 36.6%, with the latest quarter at $411.5M.",
    "The operating loss narrowed to 13.8% of revenue in Q3 FY26 from 24.3% in Q1.",
    "Free cash flow was negative $136.8M, and the brief does not provide a net debt figure.",
    "There is no meaningful earnings multiple, so the valuation rests on revenue growth and a future margin.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1717115/000119312526066961/tem-20251231.htm",
  irUrl: "https://www.tempus.com",
  bigPicture: {
    paragraphs: [
      "Tempus AI is a precision medicine company with two engines. The first is genomic testing: it sequences tumour tissue and blood to identify mutations that guide cancer treatment, and it runs hereditary testing to find inherited risk. The second is data and applications: it licenses de-identified clinical and molecular data to pharmaceutical companies, builds algorithms on top of it and helps match patients to clinical trials.",
      "Trailing revenue is $1.51B, up 36.6%, and the latest quarter produced $411.5M. Gross margin is 64.5%, which is low for a data business and normal for a laboratory. The operating loss was 13.8% of revenue in Q3 FY26, an improvement from 24.3% in Q1. Free cash flow was negative $136.8M.",
      "At $76.05 the market capitalisation is $13.87B against $1.51B of revenue. There is no trailing earnings multiple because the company is unprofitable, and the brief does not provide an EV/EBITDA or EV/sales figure. The question is whether the testing business can reach scale economics while the data business becomes large enough to lift the blended margin.",
    ],
    quote:
      "A sequencing lab earns a fee per test. A data business earns a fee per question. Tempus is trying to run both through the same clinical footprint.",
  },
  whatItDoes: {
    paragraphs: [
      "The testing customer is an oncologist or a pathologist who needs to know what is driving a tumour. Tempus collects the sample, sequences it and returns a report that lists actionable mutations and, where relevant, available therapies or trials. The hereditary test serves a different customer: a patient or family member who may carry an inherited cancer risk.",
      "The data customer is a pharmaceutical company, a researcher or a health system. Tempus aggregates the test results and the associated clinical information, removes identifying details and licenses access. It also sells software that helps clinicians find trials and helps drug developers find patients. The two businesses share a common input: every test adds to the data set.",
      "The company employs about 3,800 people and operates primarily in the United States. Laboratories are capital-intensive and regulated, and the sales cycle for a health system or a pharma data contract is long. That combination explains why revenue can grow quickly while profit lags.",
    ],
    bullets: [
      {
        title: "Genomic testing",
        detail:
          "Tumour profiling and hereditary testing. Billed to payers and hospitals, with revenue recognised per report.",
      },
      {
        title: "Data licensing",
        detail:
          "De-identified clinical and molecular data sold to drug developers and researchers, usually under multi-year contracts.",
      },
      {
        title: "Applied AI",
        detail:
          "Algorithms and trial-matching tools built on the data set. Small today, but the part that could change the margin.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Testing revenue is a fee per report. The payer is usually a health insurer or a hospital, and coverage depends on the test's clinical utility and on the specific billing code. The cost of goods includes reagents, sequencing capacity, laboratory staff and the bioinformatics that turns a sequence into a report. That is why gross margin is 64.5% rather than the 80% to 90% of a software company.",
      "Data revenue is a contract, not a transaction. A pharmaceutical company pays for access to a defined data set or for a research collaboration, and the revenue is recognised over the contract term. The marginal cost of delivering an additional data query is low, so this line has the potential to carry a much higher margin than testing.",
      "The operating leverage depends on which engine grows faster. If testing grows, revenue rises but so do laboratory costs. If data grows, incremental revenue drops through at a high rate. The blended operating margin is the scoreboard, and it improved from minus 24.3% in Q1 FY26 to minus 13.8% in Q3.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 58.3% a year across the fiscal years in the dataset, from $320.7M in FY2022 to $1.27B in FY2025. Part of that was acquisition: revenue jumped from $693.4M in FY2024 to $1.27B in FY2025, a step change too large to be organic. The latest quarter grew 23.1%, which is the more relevant rate for the current business.",
      "The drivers are test volume, reimbursement expansion, new data contracts and international growth. Each additional test improves the data set, which makes the data product more valuable, which funds more tests. That flywheel is the core of the investment case, and it is also the reason the company is willing to accept low margins while it scales.",
      "The consensus expects $1.60B of revenue this fiscal year and $1.99B next year, with EPS of minus $0.10 and minus $0.04. The estimate implies the operating loss nearly disappears, which would require either faster data revenue or a sharp slowdown in laboratory spending.",
    ],
    bullets: [
      {
        title: "Test volume",
        detail:
          "More reports per oncologist and more oncologists using the platform. The base of the data flywheel.",
      },
      {
        title: "Reimbursement",
        detail:
          "Coverage decisions determine whether a test is a paid procedure or a cost the hospital absorbs.",
      },
      {
        title: "Data contracts",
        detail:
          "Pharma partnerships are lumpy and long-dated, but they carry much higher incremental margins than testing.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a company investing ahead of revenue. Operating losses were $265.4M in FY2022 and $196.1M in FY2023, then $691.1M in FY2024. The FY2024 figure is far larger than the revenue base and does not fit the trend of the surrounding years, which points to a one-off charge rather than the ordinary cost of running the business. FY2025 improved to a $252.9M loss.",
      "The quarterly trend is more informative. Operating margin was minus 19.6% in Q2 FY25, minus 18.3% in Q3, minus 16.7% in Q4, then minus 24.3% in Q1 FY26 before improving to minus 19.8% and minus 13.8%. The direction is right, but the company is still spending more than it earns.",
      "Net margin is minus 12.5% and return on equity is minus 37.5%. Q2 FY26 produced a small net profit of $5.6M on a $382.5M revenue base, but that was not repeated in Q3, when the net loss was $14.9M. One profitable quarter is not a trend.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $136.8M over the trailing period, a negative 9.1% margin. That is better than the operating loss suggests, because depreciation, share-based compensation and working capital differ from accounting profit. It is still a cash-consuming business.",
      "The brief does not provide a net debt or cash balance, so the liquidity position cannot be assessed from these tables. That is a real gap: for a company burning cash, the size of the balance sheet determines how much time the strategy has.",
      "What can be said is that the cash flow is improving in line with the operating loss. FY2022 and FY2023 consumed $186.6M and $248.9M, FY2024 consumed $211.2M and FY2025 consumed $239.1M. The trailing figure of $136.8M is lower than any of those, which suggests the company is moving toward self-funding, but it has not arrived.",
    ],
  },
  valuation: {
    paragraphs: [
      "There is no trailing P/E or EV/EBITDA because the company is unprofitable. The only anchor in the brief is the market capitalisation of $13.87B against $1.51B of trailing revenue. That is a revenue multiple in the high single digits, which is a growth valuation, not a value one.",
      "The comparison with profitable medtech is instructive. Globus Medical trades at 2.9x EV/sales with a 21.6% operating margin. Tempus is being valued at a much higher multiple of sales with a negative operating margin. The market is paying for the data business that does not yet exist at scale.",
      "The valuation therefore depends on a margin story. If data revenue grows faster than testing and the blended gross margin rises, the current sales multiple can be justified. If testing remains the growth engine, the company looks like a laboratory with a software option attached.",
    ],
  },
  analysts: {
    paragraphs: [
      "Eighteen analysts contribute to the attributed consensus, with a mean target of $89.56 and a range of $70.00 to $120.00. The range is wide, which is normal for a company whose value depends on a future margin rather than current earnings.",
      "Estimates call for $1.60B of revenue and minus $0.10 of EPS this fiscal year, then $1.99B and minus $0.04 next year. For the next quarter the consensus is $459.2M of revenue and minus $0.27 of EPS. The estimates imply that revenue grows while the loss shrinks, which is the definition of operating leverage.",
      "Only four analysts contribute to the next-quarter revenue estimate and two to the following quarter, so the near-term consensus is thin. The annual estimates are broader but still rest on assumptions about data contracts that are not visible in the reported segment detail.",
    ],
  },
  risks: {
    intro:
      "Tempus is a growth company with a credible data asset and a cash-consuming laboratory. The risks are reimbursement, contract concentration, competition and the simple possibility that the data business never becomes large enough to change the margin.",
    items: [
      {
        title: "Reimbursement for genomic tests",
        severity: "High",
        detail:
          "Testing revenue depends on payer coverage and on billing codes. A coverage restriction would hit volume and price at the same time.",
        watch:
          "Payer policies, CMS rates and the share of tests that are reimbursed.",
      },
      {
        title: "Data contract concentration",
        severity: "High",
        detail:
          "A small number of pharmaceutical partners likely account for a large share of data revenue. Losing one would be visible immediately.",
        watch:
          "Contract disclosures, backlog and the number of data partners.",
      },
      {
        title: "Cash consumption",
        severity: "High",
        detail:
          "The company burned $136.8M over the trailing period and the brief does not disclose a cash balance. Continued losses could require new financing.",
        watch:
          "Free cash flow, cash and equivalents, and any equity or debt raise.",
      },
      {
        title: "Laboratory competition",
        severity: "Medium",
        detail:
          "Large diagnostic laboratories and hospital systems run their own sequencing. Price competition in testing is intense.",
        watch:
          "Gross margin and average revenue per test.",
      },
      {
        title: "Regulation and privacy",
        severity: "Medium",
        detail:
          "The data business depends on de-identification and on rules covering health information. A change in the rules would affect what can be licensed.",
        watch:
          "Privacy regulation, data-use agreements and any enforcement action.",
      },
    ],
    watchlist: [
      {
        title: "Blended gross margin",
        detail:
          "The clearest signal of whether data revenue is becoming a larger part of the mix.",
      },
      {
        title: "Free cash flow",
        detail:
          "The company has to fund its own growth eventually. Watch the trend, not the level.",
      },
      {
        title: "Data revenue disclosures",
        detail:
          "Any detail on contract count, duration or average size would clarify the flywheel.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Tempus AI has built a real genomic testing franchise and a data asset that is genuinely differentiated. Revenue is $1.51B, growing 36.6%, and the operating loss is narrowing. Those are the facts that support the story.",
      "The company is still unprofitable, burns cash and does not disclose enough about its balance sheet or its data contracts to judge the durability of either engine. The valuation of $13.87B is a bet that the data business becomes large and high-margin enough to change the blended economics.",
      "The educational point is that revenue growth is not the same as business quality. A laboratory that grows quickly but earns 64.5% gross margin and loses money is a different proposition from a data company with the same revenue. The mix, not the headline growth, decides which one Tempus becomes.",
    ],
    questions: [
      "What share of revenue comes from data licensing rather than testing?",
      "How much cash does the company hold, and how many quarters does it fund?",
      "What is the gross margin on a data contract versus a genomic test?",
      "How concentrated is data revenue among the largest partners?",
    ],
  },
};
