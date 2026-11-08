import type { StockStory } from "./types";

export const VRTX: StockStory = {
  ticker: "VRTX",
  kicker: "Healthcare · Biotechnology",
  title: "Vertex is a one-franchise company trying to buy a second act",
  dek: "Cystic fibrosis pays the bills at an 85.5% gross margin. Everything else in the valuation is a bet that pain, kidney disease and diabetes become real revenue before the CF base matures.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $12.95B, up 10.5%, at a 33.2% operating margin.",
    "Gross margin of 85.5% reflects small-molecule manufacturing, where the cost of goods is a small share of price.",
    "Free cash flow of $3.20B is a 24.7% margin, and the balance sheet holds $1.81B of net cash.",
    "FY2024 produced an operating loss of $232.9M and negative free cash flow of $790.3M after an acquired research charge, which shows how one deal can swamp a year.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/875320/000087532026000056/vrtx-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000875320&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Vertex Pharmaceuticals makes oral medicines for cystic fibrosis, a genetic disease that damages the lungs and digestive system. Its drugs correct the defective protein at the cell surface, and most patients in developed markets take one of them every day for life. That produces a revenue base that behaves more like a subscription than a typical pharmaceutical launch.",
      "The problem with a near-monopoly is that it runs out of patients. Cystic fibrosis is a finite population, and Vertex already treats most of the people who can be treated in the markets it serves. Growth has to come from younger patients, new geographies, better efficacy that expands the eligible group, and entirely new disease areas.",
      "Trailing revenue was $12.95B, up 10.5%, and the latest quarter grew 11.8% to $3.44B. The shares closed at $547.09, towards the top of a 52-week range of $406.67 to $568.67, for a market value of $138.71B. The stock is up 184.6% over five years, most of which was earned by the CF franchise.",
    ],
    quote:
      "This is a company with one of the highest gross margins in the industry and one of the narrowest revenue bases. The valuation is a judgement about how fast the second base arrives.",
  },
  whatItDoes: {
    paragraphs: [
      "The cystic fibrosis portfolio is a ladder of products covering different genetic mutations. Some patients need a single corrector; most need a combination. Over time the company has moved patients onto newer, more effective combinations, which raises revenue per patient even when the patient count is flat. That upgrade cycle is a quiet but important growth engine.",
      "Beyond CF, Vertex has been building in four directions: non-opioid pain, kidney disease, blood disorders treated with gene editing, and type 1 diabetes. These are early-stage businesses relative to CF, and each carries the binary risk that comes with clinical development. A successful programme can double the addressable market; a failed one is written off.",
      "The customer is the patient, but the payer is the insurer or national health system. Cystic fibrosis drugs are expensive, and reimbursement decisions in Europe and other markets determine how many patients can actually start therapy. That makes the international rollout a pricing negotiation as much as a clinical one.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 85.5% is what a small-molecule business looks like when the molecule is protected by patents: the chemical cost is trivial, and the price reflects the clinical value and the absence of competition. Almost all of the remaining 52 points of revenue go to research, sales and administration, leaving a 33.2% operating margin.",
      "Revenue per patient is high and recurring, so the model is sensitive to two variables: how many patients are on therapy, and what price the payer will accept. A new patient adds years of revenue; a patient who switches to a competitor removes years of revenue. This is why the quarterly patient numbers matter more than a single launch.",
      "The cost structure is unusual in one respect. Vertex spends heavily on research relative to its revenue, because it is trying to build businesses outside CF. That spending is a choice, and it means the operating margin understates the profitability of the CF franchise while the pipeline is being funded.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $7.57B in FY2021 to $12.00B in FY2025, and the trailing figure is $12.95B. The pace has slowed: the jump from FY2021 to FY2022 was 18%, while the trailing growth rate is 10.5%. That is what happens when a franchise reaches most of its eligible patients.",
      "Third-party estimates call for $13.25B this fiscal year and $14.64B next, both around 10% growth. For a company priced at 10.6x sales, 10% growth is the minimum the market needs to see; anything slower makes the multiple hard to defend.",
      "The next leg depends on launches that are not yet material. Pain, kidney disease, gene-edited blood disorders and diabetes all address large populations, but each is at an earlier stage and each will be judged on its own clinical data rather than on the CF track record.",
    ],
    bullets: [
      {
        title: "CF patient upgrades",
        detail:
          "Moving patients to newer combinations raises revenue per patient without needing new patients.",
      },
      {
        title: "Geographic expansion",
        detail:
          "New reimbursed markets add patients, but at lower prices than the United States.",
      },
      {
        title: "Non-CF pipeline",
        detail:
          "Pain, kidney disease, blood disorders and diabetes are the only routes to a second revenue base of meaningful size.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 33.2% and net margin is 30.7%, a small gap that reflects a modest interest burden and a low effective tax rate. Return on equity is 19.0% and return on invested capital 17.8%, both reasonable for a company that carries a large cash balance.",
      "The annual table contains a warning. FY2024 shows operating income of -$232.9M and free cash flow of -$790.3M after a large acquired research charge, in a year when revenue still grew to $11.02B. The following year produced $4.17B of operating income and $3.19B of free cash flow. Nothing about the underlying franchise changed across those two years; the accounting did.",
      "The quarterly sequence shows the same pattern at a smaller scale: operating margins of 38.8%, 38.6%, 37.8%, 38.1%, 37.4% and then 20.7%. Five quarters of remarkable consistency followed by one outlier is the signature of a charge, not of a deteriorating business.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $3.20B over the trailing year, a 24.7% margin. That is below the 30.7% net margin, which is unusual for a company with an 85.5% gross margin, and the explanation sits in capitalised research and in the working capital tied to manufacturing.",
      "The balance sheet holds $1.81B of net cash. That is comfortable but not lavish for a company that may need to buy pipeline assets or fund a gene-therapy manufacturing build-out. The FY2024 negative free cash flow shows how quickly a single acquisition can consume the cushion.",
      "There is no dividend. Capital allocation is entirely about research and acquisitions, and the quality of that spending will decide whether the second franchise arrives on schedule.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $547.09 the shares trade at 34.9x trailing earnings, 30.1x EV/EBITDA, 10.6x EV/Sales and 43.3x free cash flow, for a 2.3% free-cash-flow yield. The sales multiple is the one to watch, because earnings and cash flow are both distorted by research spending and by the FY2024 charge.",
      "Against the peer table, 30.1x EV/EBITDA sits below Intuitive at 37.1x and Lilly at 35.7x, and above Thermo Fisher at 25.9x, J&J at 26.8x and AbbVie at 26.6x. Vertex is being priced as a high-quality specialty pharma with a pipeline option, not as a broad pharmaceutical company.",
      "The multiple implies that CF revenue keeps growing at around 10% while at least one non-CF programme becomes a commercial product. If the CF base matures faster and the pipeline slips, both assumptions fail at the same time.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-eight analysts contribute to the attributed third-party consensus, with a mean target of $592.36 and a range of $350.00 to $725.00. The low end of that range is close to 40% below the mean, which is what a binary pipeline looks like in analyst form.",
      "Estimates call for $3.50B of revenue next quarter and $13.25B for the fiscal year, with EPS of $18.12. That EPS figure is above the $15.53 trailing number even though the latest quarter's earnings fell by more than a third, which tells you the estimate is not struck on the same basis as the reported result.",
      "The revenue estimates are more reliable: $13.25B and then $14.64B imply steady 10% growth with no credit for a new franchise. Anything the pipeline delivers would be upside to that base.",
    ],
  },
  risks: {
    intro:
      "Vertex's risks are concentrated in one franchise and one pipeline. The balance sheet is sound; the uncertainty is scientific and commercial.",
    items: [
      {
        title: "Cystic fibrosis concentration",
        severity: "High",
        detail:
          "Most revenue comes from a single disease. A safety signal, a pricing decision or a competing therapy would affect nearly the whole company at once.",
        watch:
          "CF revenue growth and the number of patients on therapy each quarter.",
      },
      {
        title: "Payer pricing pressure",
        severity: "High",
        detail:
          "High-priced chronic therapies attract negotiation. A lower net price applies to every year a patient stays on treatment.",
        watch:
          "Realised price and reimbursement decisions in Europe and other public systems.",
      },
      {
        title: "Pipeline binary risk",
        severity: "High",
        detail:
          "Pain, kidney disease, blood disorders and diabetes are the growth story, and each can fail in late-stage trials after years of spending.",
        watch:
          "Phase 3 readouts and regulatory filings outside CF.",
      },
      {
        title: "Acquisition accounting",
        severity: "Medium",
        detail:
          "FY2024 showed how an acquired research charge can turn a profitable year into a loss and push free cash flow negative.",
        watch:
          "Research and acquired in-process charges inside operating income.",
      },
      {
        title: "Competition in CF",
        severity: "Medium",
        detail:
          "Other companies are developing modulators and gene-based approaches. Even a partial alternative gives payers leverage.",
        watch:
          "Competitor clinical data and any shift in the CF treatment standard.",
      },
    ],
    watchlist: [
      {
        title: "Patients on therapy",
        detail:
          "The clearest measure of whether the CF base is still growing or has plateaued.",
      },
      {
        title: "Non-CF revenue",
        detail:
          "Any revenue from outside CF is the first evidence that the second franchise is real.",
      },
      {
        title: "Research spending",
        detail:
          "Rising research spending without pipeline progress is the pattern to avoid.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Vertex is a highly profitable specialist with a finite market. The CF franchise produces an 85.5% gross margin and $3.20B of free cash flow, and it has years of pricing power left. But the patient population is bounded, and 10% growth is what the base business can deliver on its own.",
      "The valuation is not paying for cystic fibrosis. It is paying for the option that one of the newer programmes — pain, kidney disease, gene-edited blood disorders, diabetes — becomes a second franchise. That option is real but unproven, and the FY2024 loss is a reminder of what happens when a bet is written off.",
      "The useful question is not whether Vertex is a good company. It is what proportion of the $138.71B market value is CF cash flow and what proportion is pipeline hope, because the two carry very different risks.",
    ],
    questions: [
      "How many eligible cystic fibrosis patients are still untreated in reimbursed markets?",
      "What share of revenue growth comes from price versus patient count?",
      "Which non-CF programme is closest to generating revenue?",
      "How much of the 184.6% five-year return came from margin expansion rather than revenue?",
    ],
  },
};
