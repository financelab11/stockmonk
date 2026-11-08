import type { StockStory } from "./types";

export const BBIO: StockStory = {
  ticker: "BBIO",
  kicker: "Healthcare Growth · Genetic medicine",
  title: "BridgeBio spreads risk across a portfolio and carries the debt",
  dek: "Acoramidis is the commercial product now, but the company still funds a pipeline of roughly thirty programmes. The revenue is real; the balance sheet is the part that needs watching.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $945.5M, up 167.3%, as acoramidis scaled.",
    "The operating margin is negative 38.5%, but the latest quarter narrowed to negative 3.3%.",
    "Free cash flow was negative $369.8M and net debt is $938.6M.",
    "The consensus expects $1.66B of revenue next year and a loss of only $0.27 per share.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1743881/000174388126000009/bbio-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001743881&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "BridgeBio Pharma develops medicines for genetic diseases. Its commercial product is acoramidis, an oral stabiliser of transthyretin used to treat transthyretin amyloidosis with cardiomyopathy, a condition in which a misfolded protein deposits in the heart and causes it to stiffen. The company also has a pipeline of roughly thirty programmes spanning metabolic disease, skeletal dysplasia, adrenal disorders and gene therapy.",
      "Revenue reached $945.5M over the trailing twelve months, up 167.3%. The latest quarter produced $353.2M and an operating margin of negative 3.3%, a dramatic improvement from the negative 90.5% posted in Q4 FY25. The gross margin is 94.3%, which is what a branded oral drug should earn.",
      "At $74.29 the market capitalisation is $14.47B, or 16.3x EV/sales. The company has $938.6M of net debt and consumed $369.8M of cash over the trailing period. The question is whether acoramidis can generate enough cash to fund the pipeline and service the debt before the next financing.",
    ],
    quote:
      "A portfolio of thirty programmes is a portfolio of thirty chances. It is also thirty budgets, and someone has to pay for all of them.",
  },
  whatItDoes: {
    paragraphs: [
      "The acoramidis patient has ATTR-CM, a progressive heart condition that mainly affects older adults. The drug is taken orally twice a day and is intended to stabilise the transthyretin protein so that it does not form amyloid deposits. The prescriber is a cardiologist, often at an amyloidosis centre, and the diagnosis is made through imaging and genetic testing.",
      "The pipeline is organised around genetic diseases with a defined mechanism. Encaleret targets autosomal dominant hypocalcemia type 1, BBP-631 is a gene therapy for congenital adrenal hyperplasia, BBP-831 targets achondroplasia and BBP-711 targets hyperoxaluria. Each is a small programme with a specific patient population.",
      "The company employs about 392 people and operates as a group of programme teams rather than a single commercial organisation. That structure lets it run many early-stage experiments, but it also means the corporate cost base is spread across assets that may never reach the market.",
    ],
    bullets: [
      {
        title: "Acoramidis",
        detail:
          "An oral TTR stabiliser for ATTR-CM. The commercial product and the source of current revenue.",
      },
      {
        title: "Rare-disease pipeline",
        detail:
          "Encaleret, BBP-631, BBP-831 and BBP-711, each targeting a defined genetic condition.",
      },
      {
        title: "Portfolio model",
        detail:
          "Many programmes, each with its own trial and budget. Diversification at the cost of complexity.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Acoramidis is a branded oral drug sold at a price per patient per year. The 94.3% gross margin leaves most of the price for commercial spending. The operating margin depends on how much is spent on the sales force, on payer access and on the pipeline.",
      "The revenue is concentrated in one product. That is both the strength and the weakness: acoramidis can scale quickly because ATTR-CM is a defined, diagnosed population, but the company has no second commercial product to fall back on if growth slows.",
      "The cost base includes a cardiology sales force, medical affairs, market access and the research budgets for the pipeline. The Q3 FY26 operating margin of negative 3.3% shows that revenue is approaching the level needed to cover those costs. The remaining gap is the pipeline spend, which is discretionary but central to the strategy.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $69.7M in FY2021 to $77.6M, $9.3M, $221.9M, $502.1M and then $945.5M on a trailing basis. The FY2023 dip reflects the loss of collaboration revenue before acoramidis launched. The recent growth is the launch, not a steady compound rate.",
      "The drivers are acoramidis penetration, diagnosis of ATTR-CM, international launches and pipeline readouts. ATTR-CM is underdiagnosed, so growth depends on cardiologists testing more patients. Competition from tafamidis and from newer therapies limits pricing and share.",
      "The consensus expects $1.10B of revenue this fiscal year and $1.66B next year, with the loss per share narrowing from $2.49 to $0.27. That assumes acoramidis keeps scaling and the pipeline spending stays controlled. The revenue estimate is plausible; the profit estimate depends on cost discipline.",
    ],
    bullets: [
      {
        title: "Acoramidis penetration",
        detail:
          "More diagnosed ATTR-CM patients on therapy. The main revenue driver.",
      },
      {
        title: "Diagnosis",
        detail:
          "ATTR-CM is often mistaken for other forms of heart failure. More testing means more patients.",
      },
      {
        title: "Pipeline readouts",
        detail:
          "A second commercial product would change the growth profile and reduce concentration.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a company that has spent heavily for years. Operating losses were $576.6M, $512.2M, $607.4M, $593.0M and $523.4M from FY2021 to FY2025. The consistency of the loss while revenue grew is the portfolio model: as one programme advanced, another consumed the savings.",
      "The quarterly trend is the turn. Operating margin was negative 121.4% in Q2 FY25, negative 120.3% in Q3, negative 90.5% in Q4, negative 54.5% in Q1 FY26, negative 43.9% in Q2 and negative 3.3% in Q3. Revenue grew from $110.6M to $353.2M over the same period. That is operating leverage arriving quickly.",
      "Net margin is negative 122.9%, far worse than the operating margin. The gap is a non-operating charge, visible in the Q4 FY25 net loss of $782.6M on $154.2M of revenue. It is not a change in the drug economics, but it does affect book value and the reported return on equity, which is positive 70.3% despite the losses and should not be read as a profitability measure.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $369.8M over the trailing period, a negative 39.1% margin. FY2025 was worse at negative $447.0M. The company is consuming cash even as revenue grows, because the pipeline and the launch are both being funded from the same balance sheet.",
      "Net debt is $938.6M. That is a real constraint: the company has more debt than cash, and it is still burning. The debt was raised to fund the portfolio, and servicing it requires acoramidis revenue to keep growing.",
      "The cash-flow history shows the scale of the investment. Free cash flow was negative $511.2M, $424.3M, $529.0M, $521.7M and $447.0M over the five years. The trailing figure is the smallest of the group, which suggests the burn is moderating, but it is still a large outflow relative to the revenue base.",
    ],
  },
  valuation: {
    paragraphs: [
      "The trailing P/E is negative and EV/EBITDA is not meaningful. The stock trades at 16.3x EV/sales, a growth valuation for a company with a negative operating margin.",
      "The forward math is the interesting part. The consensus expects $1.66B of revenue and a loss of $0.27 per share next year. If that is right, the company is close to breakeven on a revenue base that would make the sales multiple look reasonable. If the loss stays wide, the multiple is being applied to a business that still needs capital.",
      "The comparison with a profitable specialty pharmaceutical is not direct because of the pipeline. BridgeBio is valued as a portfolio, not as a single product. The market is paying for the option value of the thirty programmes as well as the acoramidis cash flow.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty analysts contribute to the attributed consensus, with a mean target of $106.85 and a range of $80.00 to $156.00. The range is wide, which is normal for a company with a pipeline and a leveraged balance sheet.",
      "Estimates call for $1.10B of revenue and a loss of $2.49 per share this fiscal year, then $1.66B and a loss of $0.27 next year. For the next quarter the consensus is $304.6M of revenue and a loss of $0.50 per share. The next-year estimate implies a sharp reduction in the loss.",
      "Those are third-party forecasts. The revenue estimate is supported by the launch trajectory; the profit estimate depends on how much the company chooses to spend on the pipeline.",
    ],
  },
  risks: {
    intro:
      "BridgeBio has a commercial product, a broad pipeline and a leveraged balance sheet. The risks are product concentration, competition, pipeline spending and the debt that has to be serviced while the company is still burning cash.",
    items: [
      {
        title: "Product concentration",
        severity: "High",
        detail:
          "Acoramidis is the only commercial product. A safety issue, a pricing change or slower adoption would hit revenue directly.",
        watch:
          "Acoramidis revenue, prescription trends and safety disclosures.",
      },
      {
        title: "Competition in ATTR-CM",
        severity: "High",
        detail:
          "Established stabilisers and newer therapies compete for the same patients. Pricing and formulary placement decide share.",
        watch:
          "Competitor data, approvals and payer contracts.",
      },
      {
        title: "Debt and cash burn",
        severity: "High",
        detail:
          "Net debt of $938.6M against negative free cash flow of $369.8M leaves limited room if revenue slows.",
        watch:
          "Cash balance, free cash flow, interest cost and any refinancing.",
      },
      {
        title: "Pipeline spending",
        severity: "Medium",
        detail:
          "Thirty programmes consume capital. A failure in a late-stage asset could force a write-down and a strategic reset.",
        watch:
          "R&D spend, trial readouts and programme discontinuations.",
      },
      {
        title: "Diagnosis rates",
        severity: "Medium",
        detail:
          "ATTR-CM is underdiagnosed. If testing does not expand, the addressable population is smaller than the market assumes.",
        watch:
          "Diagnosis rates, referral patterns and imaging adoption.",
      },
    ],
    watchlist: [
      {
        title: "Acoramidis revenue",
        detail:
          "The commercial product funds everything else. Watch the quarterly step.",
      },
      {
        title: "Free cash flow",
        detail:
          "The company has to close the gap between revenue and spending to service the debt.",
      },
      {
        title: "Pipeline readouts",
        detail:
          "A second product would reduce concentration and support the valuation.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "BridgeBio has a commercial product in acoramidis, $945.5M of revenue growing 167.3%, a 94.3% gross margin and a pipeline of roughly thirty programmes. The latest quarter came close to operating breakeven, which is the most important development in the file.",
      "The company also carries $938.6M of net debt and burned $369.8M over the trailing period. The portfolio model is expensive, and the balance sheet assumes acoramidis keeps growing while the pipeline produces a second product.",
      "The educational point is that a portfolio strategy trades concentration risk for financing risk. The diversification is real, but it has to be paid for, and the debt makes the company sensitive to any slowdown in the commercial product.",
    ],
    questions: [
      "How much of the revenue base is acoramidis, and how fast is it growing?",
      "What is the interest cost on the debt, and when does it mature?",
      "Which pipeline programme is closest to a registrational readout?",
      "Can the company reach free-cash-flow breakeven without another raise?",
    ],
  },
};
