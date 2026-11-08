import type { StockStory } from "./types";

export const AMKR: StockStory = {
  ticker: "AMKR",
  kicker: "Semiconductors · Outsourced packaging and test",
  title: "Amkor assembles and tests the chips that other companies design",
  dek: "Packaging and test is the most capital-hungry step in the semiconductor chain and the least visible. Revenue is $7.46B, free cash flow is negative, and a 6.4x EV/EBITDA multiple is pricing a building phase.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $7.46B, up 15.7%, but the latest quarter grew only 0.2% year over year at $1.99B.",
    "Gross margin is 16.6% and operating margin 9.5%, the thinnest in this peer group by a wide margin.",
    "Free cash flow was -$156.1M on a trailing basis, a -2.1% margin, as capital spending outran operating cash flow.",
    "Net debt of $885.5M is only 0.6x EBITDA, and the shares trade at 13.1x earnings and 6.4x EV/EBITDA.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1047127/000104712726000014/amkr-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001047127&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Amkor provides outsourced semiconductor packaging and test services to integrated device manufacturers, fabless chip companies and contract foundries. When a wafer leaves the fab it is a bare die; something has to connect it to the outside world, protect it, manage its heat and confirm that it works. Amkor does that work for customers who would rather not build the capability themselves, and it does it at a scale that few others can match.",
      "The business exists because packaging became too specialised and too capital-intensive to keep in-house. A leading-edge package now involves multiple dies, silicon interposers, fine-pitch redistribution layers and thermal structures, and the process know-how sits with the assembly houses rather than with the designers. That is a durable position, but it is also a position that requires continuous investment in plants that are expensive to build and expensive to leave idle.",
      "The trailing numbers show a business at a turning point. Revenue of $7.46B was up 15.7% for the year, yet the latest quarter grew only 0.2% year over year at $1.99B. At $32.82 the shares sit about 5% of the way up a 52-week range of $29.76 to $96.68, on an $8.13B market capitalisation, after a -6.0% twelve-month return.",
    ],
    quote:
      "An assembly plant earns money when it is full and loses money when it is not. That sentence explains more about Amkor's financials than any demand forecast.",
  },
  whatItDoes: {
    paragraphs: [
      "The service has two halves. Assembly takes a finished wafer, thins it, cuts it into dies, stacks or mounts the dies in a package and connects them with wire bonds, flip-chip bumps or copper pillars. Test then checks the packaged part electrically, at temperature and under conditions that resemble real use. Both halves require customer-specific tooling and process recipes, so each programme is a project before it becomes a production flow.",
      "The customer list is essentially the semiconductor industry. Integrated device manufacturers outsource the packages they no longer want to build, fabless companies have no factories at all, and foundries hand off wafers for assembly at the end of their own process. That gives Amkor a broad base, but it also means the company is exposed to whatever mix of end markets its customers serve, from phones to cars to data centres.",
      "Advanced packaging is where the growth is concentrated. Stacking memory next to logic, routing signals through an interposer and shrinking the pitch between connections all require assembly capability that is closer to wafer fabrication than to traditional packaging. That work carries better pricing than a standard leadframe package, and it is the reason the company invests in new capacity even when the near-term demand is flat.",
    ],
    bullets: [
      {
        title: "Assembly",
        detail:
          "Die attach, wire bonding, flip-chip and moulding: the steps that turn a bare die into a usable component.",
      },
      {
        title: "Test",
        detail:
          "Electrical and thermal testing of the finished package, which is the last chance to catch a defect before shipment.",
      },
      {
        title: "Advanced packaging",
        detail:
          "Multi-die stacks, interposers and fine-pitch routing that behave more like wafer fabrication than traditional assembly.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The gross margin is the first thing to understand. At 16.6%, Amkor keeps a much smaller share of each revenue dollar than a chip designer or an equipment maker, because it sells manufacturing capacity and the customer can see what that capacity costs. Operating margin of 9.5% leaves a thin spread for administration and development. There is no royalty, no design lock-in and no software attach.",
      "Pricing is negotiated per programme, and it is anchored to the cost of the process plus a return on the equipment. When utilisation is high, the return is real; when utilisation falls, the same equipment has to be paid for out of a smaller revenue base. That is why operating margin ranged from 6.0% to 11.3% across the six quarters shown on revenue between $1.51B and $1.99B.",
      "The capital intensity is the defining feature. A packaging plant is a building full of specialised tools, and each new advanced-packaging line is a large commitment made years before the revenue arrives. Depreciation is a real cost that runs whether or not the line is busy, which is why a modest revenue decline can eliminate the operating margin entirely.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 8.8% a year across the five fiscal years shown, from $6.14B to $6.71B, with a peak of $7.09B in FY2022 and a trough of $6.32B in FY2024. That is a narrow range for a semiconductor business, which reflects the diversity of the customer base and the stability of the assembly content per chip.",
      "The growth driver that matters is what goes into the package rather than how many packages are made. A standard package carries a small amount of assembly value; an advanced package with multiple dies, an interposer and fine-pitch routing carries much more. As chips become systems, the assembly content per unit rises, and that is the mechanism behind the long-run growth rate.",
      "The near-term picture is less clear. The latest quarter grew 0.2%, and the trailing 15.7% growth rate comes from the earlier part of the year. Third-party estimates expect $7.53B of revenue and $2.50 of EPS this fiscal year, then $8.59B and $2.78, which requires a reacceleration that the last quarter does not show.",
    ],
    bullets: [
      {
        title: "Content per package",
        detail:
          "More dies and finer routing per package raise the assembly value even if unit volumes are flat.",
      },
      {
        title: "Customer outsourcing",
        detail:
          "Integrated manufacturers continue to hand off packaging work they no longer want to run themselves.",
      },
      {
        title: "Capacity additions",
        detail:
          "New advanced-packaging lines add revenue only after they are qualified and loaded, which takes years.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a business with real cyclical amplitude. Operating income was $763.4M, $897.2M, $470.3M, $438.5M and $467.4M across the five years, on revenue that moved much less: from $6.14B to $7.09B, then $6.50B, $6.32B and $6.71B. A revenue decline from $7.09B to $6.50B took operating income from $897.2M to $470.3M, which is the leverage of a capital-intensive manufacturer.",
      "The quarterly recovery is genuine but modest. Operating margin went from 6.1% in Q2 FY25 to 8.0%, 9.8%, 6.0%, 10.5% and 11.3% in Q3 FY26, while revenue went from $1.51B to $1.99B. The margin improvement came from utilisation, not from pricing, and that is the only lever a contract manufacturer has in the short run.",
      "Return on equity is 12.8% and return on invested capital 9.8%. For a business with a 16.6% gross margin, a 9.8% return on capital is a reasonable outcome, but it is not high enough to fund growth from internal cash alone when a building phase coincides with a demand pause.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$156.1M on a trailing basis, a -2.1% margin. That is the single most important number in this report. A company with $7.46B of revenue and $190.6M of quarterly net income generated less cash than it spent, because capital expenditure and working capital absorbed the operating cash flow.",
      "The annual record shows how variable this can be: $341.5M, $190.5M, $520.6M, $345.1M and $191.0M. The strongest year, FY2023, came when revenue was falling and capital spending was being cut. The weakest years come when the company is building. That inverse relationship is the signature of a capacity business.",
      "Net debt of $885.5M is only 0.6x EBITDA, so the balance sheet can carry the building phase. The dividend consumes a small amount of cash at a 1.0% yield. The constraint is not solvency; it is that every dollar of growth has to be financed before it earns, and the return on that dollar depends on utilisation several years later.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $32.82 the shares trade at 13.1x trailing earnings, 6.4x EV/EBITDA, 1.2x sales and a negative free-cash-flow yield of -1.9%. The EBITDA and sales multiples are the lowest in the peer table by a wide margin, and the earnings multiple is less than half the next lowest. That is what a capital-intensive contract manufacturer looks like when it is compared with design businesses.",
      "The discount is not irrational. A 16.6% gross margin with negative free cash flow deserves a lower multiple than a 68.6% gross margin with a 30.0% cash margin. The question is whether 6.4x EBITDA is too low for a business with a 9.8% return on invested capital and net debt at 0.6x EBITDA.",
      "The free-cash-flow multiple cannot be used because the denominator is negative, which is itself informative: the valuation has to rest on EBITDA or on a normalised cash flow that does not yet exist. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Ten analysts contribute to the consensus, with a mean target of $66.00 and a range of $41.00 to $92.00. The shares closed at $32.82, so every target in the range is above the market price and the mean is far above it. A gap that wide usually means the estimates were built before a de-rating, or that the market is discounting something the analysts are not.",
      "The near-term estimates point down, not up. After $0.76 of EPS in Q3 FY26, the consensus expects $0.72 next quarter on $1.96B of revenue, then $0.54 on $1.90B. A sequential decline in both revenue and earnings is a seasonal assumption, and it sits oddly against a stock priced for recovery.",
      "For the full year the consensus is $7.53B of revenue and $2.50 of EPS, then $8.59B and $2.78 next year. Those are third-party forecasts, and the next-year revenue figure requires a reacceleration from the 0.2% growth of the latest quarter.",
    ],
  },
  risks: {
    intro:
      "Amkor's balance sheet is sound and its customer base is broad. The risks are capital intensity, utilisation and the gap between spending and the revenue it eventually produces.",
    items: [
      {
        title: "Capital spending ahead of demand",
        severity: "High",
        detail:
          "Free cash flow is negative because the company is building capacity for advanced packaging. If the demand arrives later than planned, depreciation runs against revenue that is not there.",
        watch:
          "Capital expenditure, depreciation and the utilisation commentary in each filing.",
      },
      {
        title: "Utilisation and pricing",
        severity: "High",
        detail:
          "Operating margin moved between 6.0% and 11.3% on a revenue range of $1.51B to $1.99B. A contract manufacturer cannot hold price when its plants are empty.",
        watch:
          "Quarterly operating margin and revenue per plant.",
      },
      {
        title: "Thin gross margin",
        severity: "Medium",
        detail:
          "At 16.6%, there is little room for a cost overrun, a yield problem or a wage increase before the operating margin disappears.",
        watch:
          "Gross margin and input cost commentary.",
      },
      {
        title: "Customer concentration",
        severity: "Medium",
        detail:
          "A few large customers and a few large programmes can dominate revenue in a given year, and each programme has a life cycle.",
        watch:
          "Top-customer disclosures and the number of customers above 10% of revenue.",
      },
      {
        title: "Geographic and geopolitical exposure",
        severity: "Medium",
        detail:
          "Assembly capacity is concentrated in Asia, and rules that affect cross-border shipments can raise costs or redirect demand.",
        watch:
          "The geographic distribution of plants and any change in trade rules.",
      },
      {
        title: "Demand cyclicality",
        severity: "Medium",
        detail:
          "The latest quarter grew 0.2% while the trailing year grew 15.7%. A flat quarter can become a down year quickly in a capacity business.",
        watch:
          "Quarterly revenue growth and the book-to-bill trend.",
      },
    ],
    watchlist: [
      {
        title: "Free cash flow",
        detail:
          "The negative trailing figure is the clearest evidence that the company is in a building phase.",
      },
      {
        title: "Utilisation",
        detail:
          "The only variable that can move a 16.6% gross margin into a double-digit operating margin.",
      },
      {
        title: "Advanced packaging revenue",
        detail:
          "The mix shift that justifies the capital spending, and the one that carries better pricing.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Amkor is a pure-play assembly and test business with a 16.6% gross margin, a 9.8% return on invested capital and $885.5M of net debt at 0.6x EBITDA. It sells capacity, and capacity is only valuable when it is full.",
      "Still unknown: how much of the capital spending is committed to programmes that already have customers attached, how much revenue comes from advanced packaging, and when the free-cash-flow line turns positive.",
      "Cheap against chip designers is not the same as cheap. A contract manufacturer earns its return on plants that have to be built before they can be used, and 6.4x EV/EBITDA is the market's price for that sequence.",
    ],
    questions: [
      "How much of the capital spending is already backed by customer commitments?",
      "What share of revenue comes from advanced packaging rather than standard assembly?",
      "When does free cash flow turn positive, and at what revenue level?",
      "Is the flat latest quarter a seasonal pause or the start of a downcycle?",
    ],
  },
};
