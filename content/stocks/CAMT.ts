import type { StockStory } from "./types";

export const CAMT: StockStory = {
  ticker: "CAMT",
  kicker: "Semiconductor equipment · Inspection and metrology",
  title: "Camtek inspects the package, not the transistor",
  dek: "A 446-person Israeli toolmaker earns a 50.5% gross margin selling inspection systems into packaging lines. The 87.7x trailing multiple rests on a depressed net income figure, which makes the cash-flow multiple the better starting point.",
  readingMinutes: 9,
  takeaways: [
    "Revenue rose from $269.7M in FY2021 to $496.1M in FY2025, a 24.4% compound rate with a flat year in FY2023.",
    "Operating margin is 25.8% on a trailing basis and free cash flow was $127.5M, a 25.7% margin.",
    "Net income fell to $50.7M in FY2025 from $118.5M in FY2024 while operating income rose, so the difference sits below the operating line.",
    "At $97.05 the shares trade at 87.7x trailing earnings, 31.8x EV/EBITDA and 34.9x free cash flow, near the bottom of a $89.13 to $215.99 range.",
  ],
  filingUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001109138&type=10-K&dateb=&owner=include&count=40",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001109138&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Camtek makes optical inspection and metrology equipment for the back end of the semiconductor process, the part where a finished die is packaged and connected rather than patterned. Its systems check advanced interconnect packaging, memory, image sensors, MEMS and RF devices, and they are sold across Asia Pacific, the United States and Europe. The company employs 446 people, which is small for a $4.45B market value and tells you what kind of business this is: high value per tool, low volume per customer.",
      "The question that matters is whether packaging inspection keeps becoming more demanding or settles into a replacement market. Advanced packaging stacks dies, routes them through silicon interposers and moves to panel-sized substrates, and each of those changes creates new ways for a package to fail. If that progression continues, Camtek sells more capable tools into more steps. If it stalls, the installed base is replaced and growth slows to the rate of the customers' capacity budgets.",
      "The trailing numbers show a business that has grown steadily but not smoothly. Revenue of $496.1M compares with $269.7M in FY2021, and operating income rose from $70.9M to $128.2M over the same span. The latest quarter grew 82.3% year over year. At $97.05 the shares are about 6% of the way up a 52-week range of $89.13 to $215.99, having returned -19.3% over twelve months and 122.9% over five years.",
    ],
    quote:
      "A package either passes inspection or it does not. That binary outcome is why customers pay for optical tools even when they are cutting everything else.",
  },
  whatItDoes: {
    paragraphs: [
      "The product line splits by what is being inspected. One family handles two-dimensional inspection and metrology for wafers and packages. Another adds three-dimensional measurement for advanced packaging, where the height of a bump or the depth of a cavity matters as much as its position. A third addresses panel-level processing, where fan-out packaging spreads the work across a rectangular panel instead of a round wafer and the inspection problem changes scale.",
      "Customers are the companies doing the packaging step: outsourced assembly houses, memory manufacturers, foundries extending into packaging, and specialist device makers in image sensors, MEMS and RF. Camtek sells into Asia Pacific, the United States and Europe, with the manufacturing base of the industry concentrated in the first of those. Support and service follow the tool, which gives the company a recurring relationship with a customer base that changes slowly even when orders are lumpy.",
    ],
    bullets: [
      {
        title: "Two-dimensional inspection",
        detail:
          "Finds defects and measures features across a wafer or package surface. The workhorse product for mature packaging flows.",
      },
      {
        title: "Advanced packaging metrology",
        detail:
          "Adds height and depth measurement on the same platform, which matters when a stack has to align across multiple dies.",
      },
      {
        title: "Panel-level inspection",
        detail:
          "Scales the same job to rectangular panels used in fan-out packaging, where area and warpage behave differently from a wafer.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The model is tool sales plus service. A system is booked when it is accepted, so revenue tracks the customer's capacity decision rather than the customer's shipment volume. Gross margin is 50.5% on a trailing basis, which is respectable for an equipment maker but well below what a design-only chip vendor earns, because Camtek buys optics, motion stages and computing hardware and assembles them into a machine.",
      "Operating margin of 25.8% against a 50.5% gross margin means operating expense has to account for the remaining spread. With 446 employees, that expense is mostly engineering and field support rather than factories. The leverage is therefore strong on the way up and unforgiving on the way down: a modest revenue shortfall hits a cost base that cannot be cut quarter by quarter without damaging the next product cycle.",
      "There is a second layer to the economics. Camtek's net margin, 10.2%, is far below its operating margin of 25.8%. The gap is not gross margin deterioration; operating income rose in FY2025. The difference sits below the operating line, which is where a reader should look first when a company's profit falls while its business improves.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 24.4% a year across the years in the dataset, but the path was uneven: $269.7M, $320.9M, $315.4M, $429.2M and $496.1M. FY2023 was flat, which is what a packaging equipment cycle looks like when customers digest capacity. The latest quarter grew 82.3%, so the direction has clearly turned.",
      "What drives the next leg is the number of inspection steps per package. Stacked memory, interposers, finer bump pitch and panel-level fan-out all add measurement points, and each one has to be bought as a tool. Third-party estimates put revenue at $596.4M and EPS at $3.60 for the current fiscal year, then $804.2M and $5.10 the year after. The step from the trailing $496.1M to $596.4M is a capacity-cycle assumption; the step after that is where the optimism lives.",
    ],
    bullets: [
      {
        title: "Packaging complexity",
        detail:
          "Each added layer or interconnection is another opportunity for a defect and another inspection step.",
      },
      {
        title: "Memory and image sensors",
        detail:
          "Two of Camtek's core end markets, both sensitive to consumer and data-centre demand rather than to leading-edge logic spending.",
      },
      {
        title: "Geographic concentration",
        detail:
          "Demand is concentrated in Asia Pacific, so the company's growth depends on capex decisions made in a handful of countries.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The long-run margin record is good. Operating income rose from $70.9M in FY2021 to $128.2M in FY2025 while revenue went from $269.7M to $496.1M, so the business gained operating leverage rather than losing it. Gross margin has held near the low 50s, and free cash flow has been positive in every year shown, ranging from $49.6M in FY2022 to $127.5M in FY2025.",
      "The FY2025 net income figure of $50.7M breaks the pattern. Operating income rose from $108.1M to $128.2M, revenue rose from $429.2M to $496.1M, and yet net income fell by more than half from $118.5M. Since the operating line improved, the explanation has to be a below-the-line item, and the trailing net margin of 10.2% against a 25.8% operating margin is the visible scar.",
      "Return on equity is not reported in the dataset, which makes the capital-efficiency comparison harder. What can be said is that the company generates more cash than it reports as profit at the net line: $127.5M of free cash flow against $50.7M of FY2025 net income. That gap is the most useful correction to the headline numbers.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $127.5M in FY2025, a 25.7% margin, and it has exceeded net income in four of the five years shown. A tool business that converts cash faster than earnings is usually one where depreciation, amortisation and share-based compensation are meaningful, and where working capital does not balloon during a growth year.",
      "Capital intensity is low relative to revenue. Camtek designs and assembles rather than fabricating semiconductors, so the balance sheet does not carry a fab. That is the main reason a company with 446 employees can fund its own development; the constraint is engineering talent and customer qualification time, not steel and concrete.",
      "The dataset does not report net debt, so leverage cannot be assessed directly. The cash generation supports continued investment in inspection capability through a downcycle, which matters because packaging transitions are won during the periods when customers are designing the next flow, not when they are buying.",
    ],
  },
  valuation: {
    paragraphs: [
      "Camtek trades at 87.7x trailing earnings, 31.8x EV/EBITDA, 9.0x sales and 34.9x free cash flow, for a free-cash-flow yield of 2.9%. Those numbers describe different things. The earnings multiple is inflated by the depressed net income year. The cash-flow multiple is the cleanest of the four because it is not distorted by the below-the-line item.",
      "The peer set spans a wide range. EV/EBITDA among the comparables runs from 23.9x to 31.8x, and trailing earnings multiples from 30.0x to 87.7x. Camtek sits at the top of the EBITDA range and the top of the earnings range, which is what a specialist with a 25.8% operating margin in a growing niche should look like relative to larger, slower equipment vendors.",
      "Stockmonk does not publish a target price. The consensus figure in the next section is third-party context, and the gap between it and the last close is itself information.",
    ],
  },
  analysts: {
    paragraphs: [
      "Ten analysts contribute to the consensus, with a mean target of $155.60 and a range of $120.00 to $200.00. The entire range sits above the $97.05 close. That is not a subtle signal: the published targets were built on an earnings path the market is no longer willing to pay for, or the market is pricing something the analysts have not yet marked down.",
      "Estimates call for $180.2M of revenue and $1.15 of EPS next quarter, then $192.2M and $1.22. For the current fiscal year the consensus is $596.4M of revenue and $3.60 of EPS, rising to $804.2M and $5.10 next year. The implied revenue growth is well above the 24.4% historical compound rate, which means the forecast is not simply an extrapolation.",
      "Those are third-party views. A wide gap between the mean target and the share price is often more informative than the mean itself, because it shows where the disagreement sits.",
    ],
  },
  risks: {
    intro:
      "Camtek's risks are about the timing of other companies' capacity decisions. The company is profitable and cash-generative; what it cannot control is when a packaging customer decides to build.",
    items: [
      {
        title: "Packaging capex timing",
        severity: "High",
        detail:
          "Orders arrive in project-sized batches. A single large customer delaying a line can move a quarter's revenue by a wide margin, and the FY2023 flat year shows what that looks like.",
        watch:
          "Quarterly order commentary, backlog and the capacity plans of the largest packaging customers.",
      },
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "With 446 employees and a narrow product set, a handful of accounts almost certainly dominate revenue. Losing one qualification would be difficult to replace within a year.",
        watch:
          "The top-customer percentage and the number of customers above 10% of revenue in the annual report.",
      },
      {
        title: "Below-the-line items",
        severity: "Medium",
        detail:
          "FY2025 net income fell by more than half while operating income rose. Whatever caused that gap can recur, and it distorts the earnings multiple that investors use to compare the stock.",
        watch:
          "The tax and finance lines in each annual report, and the difference between operating and net income.",
      },
      {
        title: "Competition in inspection",
        severity: "Medium",
        detail:
          "Large process-control vendors sell broader portfolios and can bundle inspection with other yield tools. A specialist has to win on capability at the specific step, not on breadth.",
        watch:
          "Gross margin and whether new products are sold at a discount to win the first tools at an account.",
      },
      {
        title: "Geographic and export exposure",
        severity: "Medium",
        detail:
          "Revenue is concentrated in Asia Pacific, including China. Licensing rules that restrict tool shipments can remove demand that exists commercially.",
        watch:
          "The geographic revenue split and any change in licence terms.",
      },
      {
        title: "Small-company execution",
        severity: "Low",
        detail:
          "A 446-person organisation has limited bench depth. A product delay or a senior departure matters more here than at a larger vendor.",
        watch:
          "Headcount growth, product launch timing and key hires.",
      },
    ],
    watchlist: [
      {
        title: "Quarterly order intake",
        detail:
          "The leading indicator for a business that recognises revenue on tool acceptance.",
      },
      {
        title: "Net income versus operating income",
        detail:
          "The FY2025 gap is the reason the earnings multiple looks so high.",
      },
      {
        title: "Advanced packaging mix",
        detail:
          "The higher-value systems carry the margin; the mix decides whether 25.8% holds.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Camtek is a focused equipment maker with a 50.5% gross margin, a 25.8% operating margin and a strong cash conversion record. It sells into the packaging step, which is becoming more complex and therefore more inspection-intensive, and it has grown revenue at 24.4% a year across the dataset.",
      "The complication is that the trailing earnings figure is not representative. A below-the-line item cut net income to $50.7M while operating income rose, and the 87.7x multiple is calculated on that reduced number. Anyone comparing Camtek with its peers on P/E is comparing a distorted figure with a normal one.",
      "The open questions are about durability: whether the current quarter's 82.3% growth is a cycle turn or a restock, how concentrated the customer base is, and whether the packaging roadmap keeps adding inspection steps at the same pace.",
    ],
    questions: [
      "What caused the FY2025 gap between operating income and net income, and will it repeat?",
      "How many customers account for most of revenue?",
      "Is the 82.3% quarterly growth a new baseline or a catch-up quarter?",
      "Does panel-level packaging add inspection steps or simply move existing ones?",
    ],
  },
};
