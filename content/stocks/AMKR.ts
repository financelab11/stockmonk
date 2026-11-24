import type { StockStory } from "./types";

export const AMKR: StockStory = {
  "ticker": "AMKR",
  "kicker": "Semiconductors · Outsourced packaging and test",
  "title": "Amkor assembles and tests the chips that other companies design",
  "dek": "Packaging and test is the most capital-hungry step in the semiconductor chain and the least visible. Revenue is $7.46B, free cash flow is negative, and a 6.4x EV/EBITDA multiple is pricing a building phase.",
  "readingMinutes": 9,
  "takeaways": [
    "September quarter revenue was $2.0B at an 11.3% operating margin, the best in the series, but flat year on year.",
    "Free cash flow was -$156.1M trailing, with the last three quarters consuming $79.5M, $227.3M and $61.6M.",
    "At 6.2x EBITDA and 13.8x earnings the shares are the cheapest in the group, where the medians are 33.8x and 71.5x.",
    "FY2025 capex of $904.6M was 13.5% of revenue, and the return depends on utilisation after the lines are finished."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1047127/000104712726000014/amkr-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001047127&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Assembly and test revenue reached $2.0B in the September 2026 quarter, with an 11.3% operating margin and $0.76 of EPS, the best margin in the series. Revenue was flat year on year, though, and free cash flow was -$61.6M, the third consecutive quarter of cash consumption. Trailing revenue is $7.5B, up 15.7%, so the growth is in the first half of the year, not the latest quarter. A year of 15.7% trailing growth that ends with a flat quarter is a cycle losing momentum, not a business breaking down.",
      "Amkor assembles and tests chips for companies that design them, a service that turns a finished wafer into a packaged part and checks it electrically and thermally before shipment. Advanced packaging, from multi-die stacks to interposers and fine-pitch routing, carries better pricing than a standard leadframe package and is where the capital is going. The gross margin of 16.6% describes the model: the customer can see what the capacity costs, and pricing is anchored to cost plus a return on equipment.",
      "At 6.2x EBITDA and 13.8x earnings the shares are the cheapest in the group by a wide margin; the peer medians are 33.8x and 71.5x. The discount is not a mispricing; it is the market's price for a 16.6% gross margin, a 13.5% capital intensity and a free-cash-flow line that is negative while capacity is built. Whether the capex cycle ends before the next downturn is the open question for the equity."
    ],
    "quote": "Amkor sells capacity by the programme, so a 16.6% gross margin and a 6.2x EBITDA multiple are two descriptions of the same capital intensity."
  },
  "whatItDoes": {
    "paragraphs": [
      "The service has two halves. Assembly takes a finished wafer, thins it, cuts it into dies, stacks or mounts the dies in a package and connects them with wire bonds, flip-chip bumps or copper pillars. Test then checks the packaged part electrically, at temperature and under conditions that resemble real use. Both halves require customer-specific tooling and process recipes, so each programme is a project before it becomes a production flow.",
      "The customer list is essentially the semiconductor industry. Integrated device manufacturers outsource the packages they no longer want to build, fabless companies have no factories at all, and foundries hand off wafers for assembly at the end of their own process. That gives Amkor a broad base, but it also means the company is exposed to whatever mix of end markets its customers serve, from phones to cars to data centres.",
      "Advanced packaging is where the growth is concentrated. Stacking memory next to logic, routing signals through an interposer and shrinking the pitch between connections all require assembly capability that is closer to wafer fabrication than to traditional packaging. That work carries better pricing than a standard leadframe package, and it is the reason the company invests in new capacity even when the near-term demand is flat."
    ],
    "bullets": [
      {
        "title": "Assembly",
        "detail": "Die attach, wire bonding, flip-chip and moulding: the steps that turn a bare die into a usable component."
      },
      {
        "title": "Test",
        "detail": "Electrical and thermal testing of the finished package, which is the last chance to catch a defect before shipment."
      },
      {
        "title": "Advanced packaging",
        "detail": "Multi-die stacks, interposers and fine-pitch routing that behave more like wafer fabrication than traditional assembly."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The gross margin is the first thing to understand. At 16.6%, Amkor keeps a much smaller share of each revenue dollar than a chip designer or an equipment maker, because it sells manufacturing capacity and the customer can see what that capacity costs. Operating margin of 9.5% leaves a thin spread for administration and development. There is no royalty, no design lock-in and no software attach.",
      "Pricing is negotiated per programme, and it is anchored to the cost of the process plus a return on the equipment. When utilisation is high, the return is real; when utilisation falls, the same equipment has to be paid for out of a smaller revenue base. That is why operating margin ranged from 6.0% to 11.3% across the six quarters shown on revenue between $1.51B and $1.99B.",
      "The capital intensity is the defining feature. A packaging plant is a building full of specialised tools, and each new advanced-packaging line is a large commitment made years before the revenue arrives. Depreciation is a real cost that runs whether or not the line is busy, which is why a modest revenue decline can eliminate the operating margin entirely."
    ]
  },
  "growth": {
    "paragraphs": [
      "Advanced packaging capacity is the growth driver, and it is being built ahead of the revenue. The work that stacks memory next to logic and routes signals through an interposer behaves more like wafer fabrication than traditional assembly, and it carries better pricing. Revenue went from $6.7B in FY2025 to $7.5B trailing, but the September quarter was flat year on year at $2.0B, so the trailing growth of 15.7% came from the first half.",
      "The forecast path implies a reacceleration: $7.5B for the current year, up 12.2%, and $8.6B next, up 14.1%, with the December quarter at $2.0B, up 3.6%. That is consistent with capacity coming on line rather than with a demand surge. The risk is timing: a packaging line is committed years before the revenue arrives, and if the customer's programme slips, depreciation runs against an empty plant."
    ],
    "bullets": [
      {
        "title": "Advanced packaging",
        "detail": "Multi-die and interposer work carries better pricing than standard assembly but consumes more capital per unit of revenue."
      },
      {
        "title": "Capex timing",
        "detail": "FY2025 capex of $904.6M was 13.5% of revenue, and the return depends on utilisation after the line is finished."
      },
      {
        "title": "Programme concentration",
        "detail": "A few large customers and programmes can dominate a year, and each programme has a finite life."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Depreciation and utilisation set the margin, not pricing. Gross margin is 16.6% and operating margin 9.5%, and the quarterly path has been 6.0%, 10.5% and 11.3% as revenue moved from $1.7B to $2.0B. The September quarter's $0.76 of EPS compares with $0.33 in March. A contract manufacturer with a 16.6% gross margin has little room for a cost overrun, so the improvement is mostly volume against a fixed depreciation base.",
      "The returns are adequate rather than exceptional. ROIC is 8.3%, level with the peer median, and ROE is 12.9% because the balance sheet carries debt. Depreciation from $904.6M of FY2025 capex will rise as the new lines are completed, which is why the operating margin needs volume to stay above 10%. Against Advanced Energy, at a 16.0% operating margin and 10.7% ROIC, Amkor earns a lower return on a much thinner gross margin."
    ]
  },
  "cash": {
    "paragraphs": [
      "Negative free cash flow is the defining fact. The trailing figure is -$156.1M, a -2.1% margin, and the last three quarters consumed $79.5M, $227.3M and $61.6M. FY2025 was positive at $191.0M because operating cash flow of $1.1B covered $904.6M of capex, but the current build has moved the line back into deficit. For a capacity business, that is the expected shape of an investment cycle.",
      "Net debt of $269.1M is 0.2x EBITDA and interest cover is 9.7x, so the build is funded without strain; the position was net cash of $372.8M at the FY2025 year-end. The dividend absorbs 1.1% of the share price, a small claim against the capex budget. The capital allocation question is whether the new lines earn their cost of capital before the cycle turns, which the free-cash-flow line will answer first."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Six times EBITDA, 13.8x earnings and 1.2x sales are the lowest multiples in the group by a wide margin, and no free-cash-flow multiple is meaningful while free cash flow is negative. The discount is structural: a 16.6% gross margin and a capital-intensive model do not deserve a chip designer's multiple. The debate is whether 6.2x is too low even for that model, given an 8.3% ROIC and a 9.5% operating margin.",
      "On the current-year EPS of $2.50 the multiple is 13.6x, and on next year's $2.78 it is 12.2x. Those estimates sit below the $3.04 annualised from the September quarter, so the consensus already assumes a fade. A re-rating would need free cash flow to turn positive as capex normalises; without that, the low multiple is a fair price for a business that consumes cash to grow."
    ]
  },
  "analysts": {
    "paragraphs": [
      "A mean target of $66 against a $34 price implies a 94% gap, and the ten analysts in the 18 November 2026 Yahoo Finance survey span a range of $38 to $92, the widest in the group. The revision trend is the only negative one in the group: EPS estimates fell 2.0% over thirty, sixty and ninety days, and the September quarter missed by $0.02.",
      "The consensus assumes a margin fade rather than a continuation. Current-year EPS of $2.50 is below the $3.04 annualised from the September quarter, and next year's $2.78 is below it too. That is unusual for a cyclical at this point in the cycle, and it suggests the analysts expect either depreciation to rise or revenue to soften. The wide target range reflects that uncertainty more than a disagreement about the business."
    ]
  },
  "risks": {
    "intro": "Amkor's balance sheet is sound and its customer base is broad. The risks are capital intensity, utilisation and the gap between spending and the revenue it eventually produces.",
    "items": [
      {
        "title": "Capital spending ahead of demand",
        "severity": "High",
        "detail": "Free cash flow is negative because the company is building capacity for advanced packaging. If the demand arrives later than planned, depreciation runs against revenue that is not there.",
        "watch": "Capital expenditure, depreciation and the utilisation commentary in each filing."
      },
      {
        "title": "Utilisation and pricing",
        "severity": "High",
        "detail": "Operating margin moved between 6.0% and 11.3% on a revenue range of $1.51B to $1.99B. A contract manufacturer cannot hold price when its plants are empty.",
        "watch": "Quarterly operating margin and revenue per plant."
      },
      {
        "title": "Thin gross margin",
        "severity": "Medium",
        "detail": "At 16.6%, there is little room for a cost overrun, a yield problem or a wage increase before the operating margin disappears.",
        "watch": "Gross margin and input cost commentary."
      },
      {
        "title": "Customer concentration",
        "severity": "Medium",
        "detail": "A few large customers and a few large programmes can dominate revenue in a given year, and each programme has a life cycle.",
        "watch": "Top-customer disclosures and the number of customers above 10% of revenue."
      },
      {
        "title": "Geographic and geopolitical exposure",
        "severity": "Medium",
        "detail": "Assembly capacity is concentrated in Asia, and rules that affect cross-border shipments can raise costs or redirect demand.",
        "watch": "The geographic distribution of plants and any change in trade rules."
      },
      {
        "title": "Demand cyclicality",
        "severity": "Medium",
        "detail": "The latest quarter grew 0.2% while the trailing year grew 15.7%. A flat quarter can become a down year quickly in a capacity business.",
        "watch": "Quarterly revenue growth and the book-to-bill trend."
      }
    ],
    "watchlist": [
      {
        "title": "Free cash flow",
        "detail": "The negative trailing figure is the clearest evidence that the company is in a building phase."
      },
      {
        "title": "Utilisation",
        "detail": "The only variable that can move a 16.6% gross margin into a double-digit operating margin."
      },
      {
        "title": "Advanced packaging revenue",
        "detail": "The mix shift that justifies the capital spending, and the one that carries better pricing."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Amkor is a pure-play assembly and test business with a 16.6% gross margin, a 9.8% return on invested capital and $885.5M of net debt at 0.6x EBITDA. It sells capacity, and capacity is only valuable when it is full.",
      "Still unknown: how much of the capital spending is committed to programmes that already have customers attached, how much revenue comes from advanced packaging, and when the free-cash-flow line turns positive.",
      "Cheap against chip designers is not the same as cheap. A contract manufacturer earns its return on plants that have to be built before they can be used, and 6.4x EV/EBITDA is the market's price for that sequence."
    ],
    "questions": [
      "How much of the capital spending is already backed by customer commitments?",
      "What share of revenue comes from advanced packaging rather than standard assembly?",
      "When does free cash flow turn positive, and at what revenue level?",
      "Is the flat latest quarter a seasonal pause or the start of a downcycle?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
