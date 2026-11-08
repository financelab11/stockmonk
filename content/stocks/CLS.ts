import type { StockStory } from "./types";

export const CLS: StockStory = {
  ticker: "CLS",
  kicker: "Electronics manufacturing · AI hardware",
  title: "Celestica assembles the AI rack and keeps the sliver",
  dek: "Revenue nearly tripled in four years on hyperscale networking and compute. At an 8.3% operating margin, the profit is in the throughput, not the box.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $18.23B, up 61.6%, on an 11.5% gross margin and an 8.3% operating margin.",
    "The latest quarter produced $5.83B of revenue but only a 7.9% operating margin, down from 10.2% a year earlier.",
    "Free cash flow was $545.4M, a 3.0% margin, because growth absorbs cash into inventory and receivables.",
    "The balance sheet holds $3.14B of net cash, which is the buffer that makes thin margins survivable.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1030894/000103089426000011/cls-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001030894&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Celestica builds things for other companies. It runs two segments, Advanced Technology Solutions and Connectivity and Cloud Solutions, and the work ranges from designing and manufacturing networking equipment and servers to running the supply chain behind them. Its customers include hyperscalers, original equipment makers in aerospace, defence, industrial, energy and health technology, and cloud service providers.",
      "The company is the largest business in this coverage group by revenue and the thinnest by margin. Trailing revenue is $18.23B, up 61.6%, growing out of $5.63B in FY2021. Gross margin is 11.5% and operating margin 8.3%. Celestica keeps eight cents of every revenue dollar before interest and tax, and that is the whole investment case.",
      "At $206.68 the shares sit almost exactly at the bottom of a $197.50 to $474.02 range, down 39.3% over the past year while revenue grew by more than half. The market has not been short of growth to look at; it has been repricing how much that growth is worth.",
    ],
    quote:
      "A contract manufacturer earns its return on assets and turns, not on price. The question is never whether the revenue arrives; it is whether the working capital needed to serve it arrives first.",
  },
  whatItDoes: {
    paragraphs: [
      "The two segments serve different demand cycles. Connectivity and Cloud Solutions covers the data-centre side: switches, routers, data-centre interconnects, edge equipment, servers and storage. Advanced Technology Solutions covers everything else, including aerospace and defence, industrial, energy, health technology and capital equipment. The first segment carries the AI exposure and the growth; the second provides a base that does not move with hyperscale capital spending.",
      "The service range is broader than assembly. Celestica does design and development, new product introduction, component sourcing, testing, systems integration, precision machining, fulfilment, logistics and after-market repair. That matters for the economics: the more of the supply chain a customer hands over, the more value Celestica can add without owning the product or the brand.",
      "The company employs 20,611 people and operates in North America, Europe and Asia. There is no segment revenue split in the data, which is a real limitation: the reader cannot see how much of the 61.6% growth came from cloud and how much from the industrial base.",
    ],
    bullets: [
      {
        title: "Connectivity and Cloud Solutions",
        detail:
          "Switches, routers, servers, storage and interconnect hardware for hyperscalers and cloud providers. The growth engine.",
      },
      {
        title: "Advanced Technology Solutions",
        detail:
          "Aerospace and defence, industrial, energy, health technology and capital equipment. Slower, steadier, and a hedge on the data-centre cycle.",
      },
      {
        title: "Manufacturing services",
        detail:
          "Design, sourcing, test, integration and repair. The customer outsources the factory and often the supply chain with it.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Celestica charges for manufacturing services, usually as a markup on materials plus a conversion fee, or on a cost-plus basis negotiated per programme. Because the customer supplies the design and often the brand, the price is set by competitive tender and by the customer's own margin pressure. An 11.5% gross margin is the result: most of the revenue dollar is pass-through material cost.",
      "The operating leverage comes from fixed plant, test equipment and engineering overhead spread across more units. That is why an 8.3% operating margin is not as fragile as it looks: a small improvement in utilisation moves a large share of the gross profit to the operating line. FY2021 produced $178.0M of operating income on $5.63B of revenue; FY2025 produced $1.04B on $12.39B. The margin roughly doubled while the revenue roughly doubled.",
      "The other lever is working capital. A contract manufacturer buys components months before it ships, and it is paid by the customer later still. When revenue grows quickly, inventory and receivables grow faster than profit, which is why a business with a 6.8% net margin generated only a 3.0% free cash flow margin.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 13.2% a year across the fiscal years in the data, but that average hides the shape: $5.63B, $7.25B, $7.96B, $9.65B, $12.39B, then a trailing $18.23B. The latest quarter grew 82.5% year over year to $5.83B. Whatever the multi-year average says, the last two years have been a different business.",
      "The attributed consensus expects $21.04B of revenue and $11.56 of EPS this fiscal year, then $40.19B and $21.76 next year. Treat the second number carefully. It is roughly double the current year, and it is the average of only seven analysts, against twenty for the current year. A doubling in one year is possible for an assembler that wins a large programme, but the estimate rests on a much thinner sample than the current-year figure.",
      "The growth driver is the hyperscale build-out and the outsourcing that comes with it. The constraints are less about demand than about capacity: floor space, test equipment, skilled labour and the willingness of customers to concentrate more of their supply chain in one supplier. The quarterly margin record shows the tension. Operating margin was 10.2% in Q3 FY25, fell to 6.7% in Q1 FY26 as revenue jumped, and recovered to 9.8% in Q2 before easing to 7.9% in Q3 FY26.",
    ],
    bullets: [
      {
        title: "Hyperscale outsourcing",
        detail:
          "Cloud providers buy more hardware and design more of it themselves, which pushes assembly and supply chain work to companies like Celestica.",
      },
      {
        title: "Programme wins",
        detail:
          "One large socket can add billions of revenue. The risk is that it also adds the working capital to serve it.",
      },
      {
        title: "Ramp execution",
        detail:
          "New programmes start at low utilisation and improve. Margin dips during ramps are normal and reverse if the ramp goes well.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is one of steady margin expansion. Operating income rose from $178.0M in FY2021 to $1.04B in FY2025, and net income from $103.9M to $832.5M. Return on invested capital reached 38.7% and return on equity 20.0%, which is high for a manufacturer and reflects a balance sheet that carries more cash than debt and a capital base that is smaller than the revenue line suggests.",
      "The quarterly record is more volatile. Operating margin has ranged from 6.7% to 10.2% over six quarters, and the two quarters with the fastest revenue growth, Q1 and Q3 FY26, were also the two with the weakest margins. That is the signature of ramp costs and mix: new programmes at low utilisation, and a heavier share of material-intensive system assembly versus higher-value engineering work.",
      "Diluted EPS was $10.56 on a trailing basis, and the quarterly path rose from $1.82 to $3.26. Earnings are growing faster than revenue, which is what operating leverage looks like when it works. The question the margin series raises is whether the leverage is a trend or a cycle.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $545.4M over the trailing period, a 3.0% margin, against a net margin of 6.8%. More than half of the accounting profit was absorbed by the balance sheet. The annual history shows the same pattern at a smaller scale: $102.1M, $201.1M and $303.0M of free cash flow in FY2022 through FY2024, then $458.3M in FY2025, always well below net income.",
      "The buffer is $3.14B of net cash, or about 1.9x EBITDA on the negative side of the net debt line. That is what allows a company with single-digit margins to fund a doubling of revenue without a crisis. It is also the reason the balance sheet scores well while the cash conversion scores poorly: the cash is there, it is just tied up in the operating cycle.",
      "A reader should watch two things here. Inventory days rising faster than revenue would signal a demand problem rather than a growth problem. And a persistent gap between net income and free cash flow during a revenue plateau would mean the working capital never comes back. When revenue does stop growing, the cycle reverses and free cash flow can exceed net income for a period, which is the release valve that makes the thin margin survivable.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $206.68 the shares trade at 20.9x trailing earnings, 13.6x EV/EBITDA and 1.3x sales. The sales multiple is the one that suits the business: a 1.3x multiple on an 8.3% operating margin is a very different proposition from a 13x multiple on a 30% margin, and an assembler should always trade at a low multiple of revenue because most of that revenue is somebody else's material cost.",
      "The 20.9x earnings multiple is where the debate lives. For a business with a 6.8% net margin, small changes in margin move earnings a lot. If operating margin settles at 7.9% rather than 8.3%, trailing earnings fall by roughly a twentieth and the multiple rises accordingly. If it returns to 10.2%, the reverse happens. That sensitivity, not the revenue growth rate, is what the price is arguing about.",
      "Against the peer set, Celestica is the cheapest on EV/EBITDA at 13.6x, against 38.6x for Credo, 39.9x for Ciena and 47.2x for Lumentum. The gap is not an oversight. Those companies sell designed products with gross margins in the forties and sixties; Celestica sells throughput at 11.5%.",
    ],
  },
  analysts: {
    paragraphs: [
      "Eighteen analysts contribute to the attributed consensus, with a mean target of $464.78 against a last close of $206.68, a range of $385.00 to $535.00. Even the low end of the range is well above the traded price, which is an unusual distribution and suggests the estimates were formed before the recent de-rating or that the market is pricing something the analysts are not.",
      "The estimates are $6.47B of revenue and $3.45 of EPS next quarter, $21.04B and $11.56 for the fiscal year, and $40.19B and $21.76 for the next. The current-year revenue figure looks achievable against $18.23B trailing and $5.83B in the latest quarter. The next-year figure does not have the same support: seven analysts, a doubling, and a margin assumption that has to hold through a much larger revenue base. These are third-party views and should be read with the sample size in mind.",
    ],
  },
  risks: {
    intro:
      "Celestica's risks are the classic contract manufacturer set: concentration, margin, working capital and the possibility that the customer insources what it used to outsource.",
    items: [
      {
        title: "Customer and programme concentration",
        severity: "High",
        detail:
          "A few hyperscale programmes drive a large share of cloud revenue. Losing one, or having it re-tendered, changes the revenue base in a single quarter.",
        watch:
          "Customer concentration disclosures and the revenue attributable to the largest programmes.",
      },
      {
        title: "Margin compression in ramps",
        severity: "High",
        detail:
          "The two fastest-growing quarters had the weakest margins. If new programmes stay at low utilisation, growth destroys value rather than creating it.",
        watch:
          "Operating margin by quarter against the revenue growth rate.",
      },
      {
        title: "Working capital absorption",
        severity: "Medium",
        detail:
          "Free cash flow was 3.0% of revenue against a 6.8% net margin. A sudden slowdown would leave inventory that has to be written down.",
        watch:
          "Inventory days and the gap between net income and operating cash flow.",
      },
      {
        title: "Insourcing by customers",
        severity: "Medium",
        detail:
          "Hyperscalers that design their own hardware can also build it. The more proprietary the design, the more likely the assembly moves in-house.",
        watch:
          "Whether large customers are adding their own manufacturing capacity.",
      },
      {
        title: "Thin-margin sensitivity",
        severity: "Medium",
        detail:
          "At a 6.8% net margin, a one-point change in operating margin moves earnings by roughly a sixth. Component cost inflation is hard to pass through.",
        watch:
          "Gross margin and the timing of price adjustments with customers.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin during ramps",
        detail:
          "The clearest evidence that growth is profitable rather than merely large.",
      },
      {
        title: "Free cash flow conversion",
        detail:
          "A move above 5% of revenue would show the working capital cycle normalising.",
      },
      {
        title: "The next-year estimate",
        detail:
          "Seven analysts forecasting a doubling is a thin consensus. Watch how it changes as more coverage updates.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Celestica is a $18.23B revenue manufacturer earning an 8.3% operating margin, with $3.14B of net cash and a 38.7% return on invested capital. It has grown revenue more than threefold since FY2021 and expanded its operating margin at the same time, which is an unusual combination for a contract manufacturer.",
      "The educational point is that revenue growth and value creation are different questions in this business model. An assembler can double revenue and barely move earnings if the new work arrives at a lower margin or requires more working capital than the old work. The numbers here show both effects: earnings grew faster than revenue, but free cash flow grew slower than earnings.",
      "What is not known is the true programme concentration, whether the current margin is a cycle peak or a new baseline, and whether the next-year consensus of $40.19B reflects awarded work or expectation. The AI build-out explains the revenue; it does not explain the multiple, and at 20.9x earnings the multiple needs the margin to hold.",
    ],
    questions: [
      "What share of revenue comes from the largest hyperscale programmes?",
      "Does the 8.3% operating margin reflect a new baseline or a favourable mix that will revert?",
      "How much working capital is required per dollar of new revenue?",
      "Why is the next-year consensus double the current year on a third of the analyst coverage?",
    ],
  },
};
