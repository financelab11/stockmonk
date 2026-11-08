import type { StockStory } from "./types";

export const CRNX: StockStory = {
  ticker: "CRNX",
  kicker: "Healthcare Growth · Rare endocrine disease",
  title: "Crinetics wants to replace injections with a daily pill",
  dek: "Paltusotine is an oral treatment for acromegaly, a rare hormone disorder usually managed with monthly injections. Early sales are small, the losses are large and the balance sheet is the constraint.",
  readingMinutes: 9,
  takeaways: [
    "Revenue is $18.1M on a trailing basis, up from a negligible base a year earlier.",
    "The FY2025 operating loss was $516.8M, and free cash flow was negative $513.6M.",
    "Net cash is $114.3M, which is thin relative to the recent cash burn.",
    "At 489.4x EV/sales, the revenue multiple is an artefact of a launch that has barely started.",
  ],
  filingUrl: "https://www.sec.gov/edgar/search/",
  irUrl: "https://www.sec.gov/edgar/search/",
  bigPicture: {
    paragraphs: [
      "Crinetics Pharmaceuticals develops oral drugs for rare endocrine diseases. Its lead product, paltusotine, is a once-daily pill that acts on the somatostatin receptor type 2. It is being used to treat acromegaly, a condition in which the pituitary gland produces too much growth hormone, causing gradual enlargement of the hands, feet and face. The standard treatment is a monthly injection of a somatostatin analogue; a pill would remove the injection and the clinic visit.",
      "Revenue reached $18.1M over the trailing twelve months, a figure that is growing fast from almost nothing but is still small relative to the cost base. The gross margin is 58.3%, the operating margin is negative, and free cash flow was negative $123.7M. The company is in the transition from a development organisation to a commercial one.",
      "The market capitalisation is $8.96B at $84.95 per share. That is a large valuation for a company with $18.1M of revenue, and it rests on the launch curve rather than the current income statement. The question is whether paltusotine can take share from established injectables quickly enough to fund the rest of the pipeline.",
    ],
    quote:
      "In a rare disease, the product is the patient journey. A pill that replaces a monthly injection changes convenience, but the payer still has to agree to pay for it.",
  },
  whatItDoes: {
    paragraphs: [
      "The patient has acromegaly, a rare condition that requires lifelong control of growth hormone and insulin-like growth factor 1. Many patients are managed with somatostatin analogue injections given monthly in a clinic, or with daily injections of a growth hormone receptor blocker. Paltusotine offers an oral alternative, which matters for patients who dislike injections and for clinics that want to reduce visit burden.",
      "The prescriber is an endocrinologist, often at a specialist centre. The drug is dispensed through a specialty pharmacy and paid for by insurers or government programmes. The commercial work is therefore a rare-disease launch: identify patients, convince specialists, secure coverage and support patients through prior authorisation.",
      "Beyond acromegaly, the company is developing paltusotine for carcinoid syndrome and nonfunctional neuroendocrine tumours, CRN04777 for congenital hyperinsulinism and CRN04894 for Cushing's disease and congenital adrenal hyperplasia. Those programmes are earlier and provide optionality rather than current revenue.",
    ],
    bullets: [
      {
        title: "Paltusotine",
        detail:
          "An oral somatostatin receptor type 2 agonist for acromegaly, with earlier work in neuroendocrine tumours.",
      },
      {
        title: "CRN04777",
        detail:
          "An oral somatostatin type 5 agonist in early testing for congenital hyperinsulinism, a rare paediatric condition.",
      },
      {
        title: "CRN04894",
        detail:
          "An oral ACTH antagonist in early testing for Cushing's disease and congenital adrenal hyperplasia.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The revenue model is a branded prescription drug: a price per patient per year, reimbursed by payers, dispensed through specialty pharmacy. The gross margin of 58.3% is low for a pharmaceutical product, which suggests that manufacturing, royalties or distribution costs take a meaningful share of the price. It should improve if volume grows and the cost base is spread.",
      "The operating cost base is a launch organisation plus a research pipeline. Sales representatives, medical affairs, market access and patient support are all needed before the revenue arrives. That is why the operating loss is so large relative to sales: the company is paying for a commercial infrastructure that is sized for a much bigger product.",
      "The operating leverage is therefore the whole story. If revenue scales toward the consensus estimate, the same cost base supports a much larger business. If the launch stalls, the cost base becomes a fixed burden and the company has to cut or raise more money.",
    ],
  },
  growth: {
    paragraphs: [
      "The reported growth rate of 2277.5% is an artefact of a base near zero. The useful numbers are the absolute ones: $18.1M over twelve months, $10.7M in the latest quarter, and a consensus estimate of $161.9M for the current fiscal year. The quarterly estimate of $41.7M for the next period implies a step-up, and the following quarter is estimated at $84.3M.",
      "That trajectory is what a launch looks like when payers start covering a new product. The drivers are patient identification, specialist adoption, payer coverage and the conversion of patients from injectable therapy. Each is a gating item, and each takes time in a rare disease.",
      "The risk is that the estimates assume a smooth launch. A single payer delay, a slow prior-authorisation process or a manufacturing constraint can push revenue into a later quarter without changing the underlying demand. The company has not yet reported enough quarters to distinguish a slope from a spike.",
    ],
    bullets: [
      {
        title: "Patient identification",
        detail:
          "Acromegaly is rare and often diagnosed late. Finding patients is a clinical-education problem.",
      },
      {
        title: "Payer coverage",
        detail:
          "A new oral drug has to win formulary access against established injectables.",
      },
      {
        title: "Label expansion",
        detail:
          "Neuroendocrine tumours and the earlier pipeline could add patients beyond acromegaly.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a company spending ahead of revenue. The operating loss widened from $107.7M in FY2021 to $167.9M, $222.6M, $338.9M and $516.8M in the following years. The FY2025 number includes the cost of preparing a launch as well as the clinical programmes.",
      "The quarterly operating margins are not meaningful because revenue is so small. What is meaningful is the net loss: $96.8M, $115.6M, $130.1M, $122.8M and $127.8M across the last five reported quarters. The loss has stabilised around $120M to $130M a quarter even as revenue started to appear, which is what a fixed cost base looks like before leverage kicks in.",
      "Diluted EPS was minus $5.13 on a trailing basis. Return on equity was minus 38.8% and return on invested capital minus 37.0%. Those are financing metrics as much as operating ones; they measure how much capital has been raised and how quickly it is being spent.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $123.7M over the trailing period and negative $513.6M in FY2025. The gap between those two numbers is large, and it matters: the annual figure includes the heaviest launch preparation, while the trailing figure may reflect a later period with different timing.",
      "Net cash is $114.3M. Against the FY2025 cash outflow, that is a thin balance. A reader should reconcile the two figures from the latest filing before drawing a conclusion about runway, because a company with a $9B market capitalisation and $114.3M of net cash would normally have accessed the capital markets during the year.",
      "What is clear is that the company is dependent on external financing until the launch covers its cost base. That makes the equity story sensitive to both the revenue trajectory and the terms on which new capital is raised.",
    ],
  },
  valuation: {
    paragraphs: [
      "The trailing P/E is negative and EV/EBITDA is negative, so neither is useful. EV/sales is 489.4x, which is not a valuation multiple in any normal sense; it is a measure of how far the revenue is from the cost base.",
      "The market capitalisation of $8.96B has to be justified by future revenue. The consensus estimate of $161.9M for this fiscal year and $178.6M next year is a start, but even at that level the company is being valued at a very high multiple of sales for a pharmaceutical launch.",
      "The right framework is a probability-weighted view of the launch and the pipeline. Acromegaly is a small market; the value comes from taking share, expanding into other indications and proving that the oral approach is durable. None of that is visible in the current multiples.",
    ],
  },
  analysts: {
    paragraphs: [
      "Eight analysts contribute to the attributed consensus, with a mean target of $85.00 and a range of $85.00 to $85.00. A range where every analyst has the same number is unusual and should be treated as a data limitation rather than a sign of agreement.",
      "Estimates call for $161.9M of revenue and a loss of $4.54 per share this fiscal year, then $178.6M and a loss of $4.01 next year. For the next quarter the consensus is $41.7M of revenue and a loss of $1.13 per share. Those are third-party forecasts and depend heavily on the launch curve.",
      "With a small number of analysts and a narrow published range, the consensus is less informative than usual. The reported quarterly revenue is a better guide than the average target.",
    ],
  },
  risks: {
    intro:
      "Crinetics has a differentiated product and a large addressable market in acromegaly. The risks are launch execution, payer coverage, competition from injectables, cash and the concentration of value in a single molecule.",
    items: [
      {
        title: "Launch execution",
        severity: "High",
        detail:
          "The company has to build a commercial organisation while revenue is still small. A slow start would leave the cost base without the sales to support it.",
        watch:
          "Quarterly revenue, prescription trends and the number of active prescribers.",
      },
      {
        title: "Payer coverage",
        severity: "High",
        detail:
          "Insurers may require patients to fail an injectable before covering an oral alternative. Prior authorisation can delay revenue even when the drug is prescribed.",
        watch:
          "Formulary decisions, coverage letters and gross-to-net pricing.",
      },
      {
        title: "Cash and financing",
        severity: "High",
        detail:
          "Net cash of $114.3M is small relative to the FY2025 cash outflow. The company may need to raise equity or debt.",
        watch:
          "Cash balance, quarterly burn and any financing announcement.",
      },
      {
        title: "Competition",
        severity: "Medium",
        detail:
          "Established injectable somatostatin analogues and other oral therapies compete for the same patients. A competitor with better efficacy or coverage can limit share.",
        watch:
          "Competitor launches, clinical data and payer contracts.",
      },
      {
        title: "Pipeline concentration",
        severity: "Medium",
        detail:
          "Most of the value rests on paltusotine. A problem with the molecule would leave the earlier programmes as the only assets.",
        watch:
          "Safety data, label changes and the progress of CRN04777 and CRN04894.",
      },
    ],
    watchlist: [
      {
        title: "Quarterly revenue",
        detail:
          "The launch curve is the single most important number. Watch the absolute step, not the percentage.",
      },
      {
        title: "Cash balance",
        detail:
          "The company has to fund the launch until it covers its costs.",
      },
      {
        title: "Payer coverage",
        detail:
          "Coverage decisions determine whether a prescription becomes revenue.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Crinetics has a genuine product innovation: an oral treatment for a disease that is usually managed with injections. Revenue has started, reaching $18.1M on a trailing basis, and the consensus expects a steep launch curve.",
      "The company is still spending far more than it earns. The FY2025 operating loss was $516.8M and free cash flow was negative $513.6M, while net cash is $114.3M. The launch has to work, and it has to work before the balance sheet forces a financing.",
      "The educational point is that a drug launch is a cost base followed by a revenue curve. The market is paying for the curve; the financial statements show the cost. Whether the two meet is the question that matters.",
    ],
    questions: [
      "How many acromegaly patients are currently on paltusotine?",
      "What proportion of prescriptions are covered without a prior-authorisation delay?",
      "How much cash did the company hold at the most recent quarter-end?",
      "What would a slower launch mean for the funding requirement?",
    ],
  },
};
