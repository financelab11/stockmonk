import type { StockStory } from "./types";

export const ACLX: StockStory = {
  ticker: "ACLX",
  kicker: "Healthcare Growth · Cell therapy",
  title: "Arcellx's revenue is a partnership, not a product",
  dek: "The company is developing a BCMA-directed CAR-T for multiple myeloma with a large partner. The revenue line is collaboration accounting, and it is shrinking toward zero as the upfront payment is used up.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $22.3M, down 79.4%, because it is partner collaboration revenue rather than product sales.",
    "The latest reported quarter had $1.7M of revenue, an operating margin of negative 3,850% and a net loss of $58.1M.",
    "Free cash flow was negative $142.7M, and net cash is $450.3M.",
    "No consensus target is available, so the equity has to be valued on pipeline probabilities.",
  ],
  filingUrl: "https://www.sec.gov/edgar/search/",
  irUrl: "https://www.sec.gov/edgar/search/",
  bigPicture: {
    paragraphs: [
      "Arcellx is a clinical-stage cell therapy company. Its lead programme is anito-cel, a CAR-T therapy that targets BCMA, a protein found on malignant plasma cells, for patients with relapsed or refractory multiple myeloma. The company is developing it with Kite, the cell-therapy business owned by Gilead, which handles much of the later-stage development and commercial work.",
      "The revenue line is not product revenue. It is collaboration revenue: upfront payments and milestones from the partner, recognised over time. That is why revenue fell from $110.3M in FY2023 to $107.9M in FY2024 and $22.3M in FY2025. The decline does not mean demand fell; it means the accounting balance of the upfront payment is running out.",
      "At $115.07 the market capitalisation is $6.73B, based on a snapshot dated 28 April 2026. The company holds $450.3M of net cash and burned $142.7M over the trailing period. The question is whether the myeloma data and the partner's commercial machine can turn a collaboration into a product before the cash runs low.",
    ],
    quote:
      "Collaboration revenue is a schedule, not a market. It tells you how much of a past payment has been recognised, not how many patients are being treated.",
  },
  whatItDoes: {
    paragraphs: [
      "Anito-cel is made by collecting a patient's T cells, engineering them to recognise BCMA and returning them after a conditioning regimen. It is a one-time treatment intended for patients whose myeloma has returned after prior therapies. The manufacturing is complex, the patient journey is long and the treatment is delivered at specialised centres.",
      "The partner relationship matters because cell therapy commercialisation requires a large manufacturing and sales infrastructure. Kite contributes that, while Arcellx contributes the construct and the clinical programme. The economics are shared, which reduces the funding burden but also reduces the upside per patient.",
      "The rest of the pipeline includes ACLX-001, a combination of ARC-T cells and SparX proteins targeting BCMA, and ACLX-002 and ACLX-003 for acute myeloid leukaemia and myelodysplastic syndrome. Those are earlier programmes that use the same cell-engineering approach in different diseases.",
    ],
    bullets: [
      {
        title: "Anito-cel",
        detail:
          "A BCMA-directed CAR-T for relapsed or refractory multiple myeloma, developed with Kite.",
      },
      {
        title: "ARC-T and SparX",
        detail:
          "A controllable cell-therapy platform being tested in myeloma and other blood cancers.",
      },
      {
        title: "AML and MDS",
        detail:
          "Earlier programmes that apply the same approach to different haematological diseases.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Today the company earns collaboration revenue from its partner. The payments are tied to development milestones and to the cost-sharing arrangement, and they are recognised over the period in which the work is performed. That makes the revenue line lumpy and unrelated to patient volume.",
      "If anito-cel is approved, the model would change to product revenue: a price per treatment, manufacturing cost, and a profit split with the partner. Cell therapy has a high price per patient but also a high cost of goods, because each dose is manufactured from the patient's own cells and requires a complex supply chain.",
      "The operating cost base is research and development. The company is spending on clinical trials, manufacturing process development and the people needed to run them. There is no gross margin to analyse because there is no product cost yet, and the reported gross margin is not meaningful.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue growth is not a useful measure for this company. The line is falling because the collaboration accounting is winding down, not because the business is shrinking. The operating loss is the better indicator of activity: it widened from $89.9M in FY2023 to $137.6M in FY2024 and $253.1M in FY2025.",
      "The catalysts are clinical. Anito-cel needs to show durable responses and a manageable safety profile in a patient population that already has other CAR-T options. The partner's manufacturing and commercial scale could accelerate adoption if the data support it.",
      "The addressable market is relapsed and refractory multiple myeloma, a disease with several approved therapies. Arcellx is not creating a new market; it is competing for share in an existing one. That means the data have to be competitive, not merely positive.",
    ],
    bullets: [
      {
        title: "Clinical data",
        detail:
          "Response rate, durability and safety in relapsed myeloma. The main driver of value.",
      },
      {
        title: "Partner execution",
        detail:
          "Kite's manufacturing and commercial reach determine how quickly a product could scale.",
      },
      {
        title: "Earlier programmes",
        detail:
          "AML, MDS and the ARC-T platform add optionality but are not near-term revenue.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "There is no meaningful operating margin because there is no product revenue. The operating loss was $89.9M in FY2023, $137.6M in FY2024 and $253.1M in FY2025. The quarterly loss has been between $47.1M and $62.3M over the last six reported quarters, which is a steadier run rate than the annual figures suggest.",
      "Diluted EPS was minus $4.07 on a trailing basis. Return on equity was minus 56.9% and return on invested capital minus 45.8%. Those numbers measure the cost of running the trials, not the quality of the business.",
      "The reported revenue of $1.7M in Q4 FY25 against a net loss of $58.1M is the clearest illustration of the stage the company is at. A negative operating margin of 3,850% is not a business metric; it is an accounting consequence of a pre-commercial company.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $142.7M over the trailing period, a negative 640.4% margin. The percentage is meaningless against a small revenue base; the dollar figure is what matters. The company is spending about $140M a year to run the programmes.",
      "Net cash is $450.3M. At the current burn, that is a runway of a few years, which is enough to reach the next set of readouts but not enough to commercialise a cell therapy alone. The partner arrangement is what makes the model viable: it shifts part of the development and commercial cost to a larger company.",
      "The cash-flow history shows the pattern. FY2023 was positive $116.8M because of a collaboration payment, then FY2024 was negative $174.5M and FY2025 negative $306.2M. A single upfront payment can flatter one year and obscure the underlying burn.",
    ],
  },
  valuation: {
    paragraphs: [
      "There is no earnings multiple and no meaningful sales multiple. EV/sales of 281.7x is an artefact; it compares a $6.73B market capitalisation with $22.3M of collaboration revenue that is on its way to zero.",
      "The right framework is a probability-weighted view of anito-cel. The company has $450.3M of net cash, so a meaningful part of the market value is the balance sheet plus the option on the pipeline. The rest is the market's estimate of approval, pricing and share in multiple myeloma.",
      "That kind of valuation is sensitive to a single data readout. A strong result can justify the current market capitalisation; a weak one can leave the shares trading close to cash.",
    ],
  },
  analysts: {
    paragraphs: [
      "The dataset does not include a third-party consensus target or a current-year estimate for Arcellx. That is not unusual for a clinical-stage company with no product revenue; the published research may exist, but it is not captured here.",
      "The absence of a consensus is itself informative. Without a revenue base or an earnings estimate, there is no common denominator for the models. Each analyst is valuing a different probability of success, which makes an average target less meaningful than it would be for a commercial company.",
      "A reader should treat the missing consensus as a gap, not as a signal. The clinical data and the cash balance are the available evidence.",
    ],
  },
  risks: {
    intro:
      "Arcellx is a clinical-stage cell therapy company with a partner, a cash balance and no product revenue. The risks are clinical, competitive, manufacturing-related and financial.",
    items: [
      {
        title: "Clinical failure",
        severity: "High",
        detail:
          "Anito-cel has to show competitive responses and safety in a disease with several approved therapies. A weak readout would remove most of the pipeline value.",
        watch:
          "Trial endpoints, durability and safety disclosures.",
      },
      {
        title: "Competition in myeloma",
        severity: "High",
        detail:
          "Other BCMA-directed CAR-T therapies and bispecific antibodies already treat relapsed myeloma. Arcellx has to differentiate on efficacy, safety or convenience.",
        watch:
          "Competitor data, approvals and market share.",
      },
      {
        title: "Cash runway",
        severity: "High",
        detail:
          "Net cash of $450.3M against a $142.7M annual burn gives a few years, not an indefinite runway.",
        watch:
          "Cash balance, quarterly burn and any financing.",
      },
      {
        title: "Partner dependence",
        severity: "Medium",
        detail:
          "Kite controls much of the development and commercial execution. A change in priorities or a dispute would affect the timeline.",
        watch:
          "Milestone disclosures and partnership updates.",
      },
      {
        title: "Manufacturing",
        severity: "Medium",
        detail:
          "Cell therapy requires a reliable vein-to-vein supply chain. A manufacturing failure can delay or derail a launch.",
        watch:
          "Manufacturing disclosures, capacity and turnaround times.",
      },
    ],
    watchlist: [
      {
        title: "Cash balance",
        detail:
          "The number of quarters funded is the constraint on every clinical decision.",
      },
      {
        title: "Clinical readouts",
        detail:
          "The binary events that drive the equity. Watch the trial design as well as the result.",
      },
      {
        title: "Partner milestones",
        detail:
          "The partnership is the commercial route. Milestone progress is a signal of confidence.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Arcellx is developing a BCMA-directed CAR-T for multiple myeloma with a large partner, funded by $450.3M of net cash. Its revenue is collaboration accounting, not product sales, and it is falling toward zero as the upfront payment is recognised.",
      "The company has no approved product and no consensus target in the dataset. The value rests on clinical data that have not yet been generated and on the partner's ability to commercialise a product if the data support it.",
      "The educational point is that revenue is not always a measure of demand. For a pre-commercial biotech, the collaboration line can rise and fall with accounting schedules while the underlying programme is making progress or stalling. The cash balance and the trial readouts are the real scoreboard.",
    ],
    questions: [
      "What is the next clinical readout for anito-cel, and what would count as a competitive result?",
      "How much cash remains, and how many quarters does it fund?",
      "What are the economics of the Kite partnership if the product is approved?",
      "Which earlier programme could become the second asset?",
    ],
  },
};
