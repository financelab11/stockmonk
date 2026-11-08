import type { StockStory } from "@/content/stocks/types";

export const NETWEB: StockStory = {
  ticker: "NETWEB",
  kicker: "IT & ER&D · High-end computing hardware",
  title: "Netweb's AI server revenue tripled, but the cash arrived later",
  dek: "Netweb assembles supercomputers, AI servers and private-cloud hardware in Faridabad. Revenue reached ₹37.2B, up 174.9%, on a 19.6% gross margin. Free cash flow was only ₹1.6B, which is why the shares trade at 145 times free cash flow.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached ₹37.2B on a trailing basis, 174.9% higher, with a 14.6% operating margin.",
    "Gross margin is 19.6% because most of the cost is imported computing components.",
    "Free cash flow of ₹1.61B is just 7.4% of revenue; net cash is ₹7.92B.",
    "At ₹3,925.50 the stock trades at 63.8 times earnings and 43.9 times EV/EBITDA.",
  ],
  filingUrl:
    "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=NETWEB",
  irUrl: "https://www.netwebindia.com",
  bigPicture: {
    paragraphs: [
      "Netweb Technologies designs and assembles high-end computing systems in India: supercomputers, AI training and inference servers, private-cloud and hyperconverged infrastructure, high-performance storage and enterprise workstations. It sells under the Tyrone brand to IT services companies, media firms, banks, government and defence departments, and telecom operators. The company employed 569 people and is based in Faridabad.",
      "The trailing year's revenue was ₹37.2B, 174.9% more than the year before. One quarter, Q2 FY27, accounted for ₹13.23B of it and earned a 14.9% operating margin. That is a step change from FY2025, when revenue was ₹11.49B. The market value at ₹3,925.50 is ₹233.4B, and the shares have recovered 35% from the low of a ₹2,920.00 to ₹5,813.00 range.",
      "The question is not whether the AI hardware cycle is real. The reported numbers show that it is. The question is how much of the revenue becomes profit and cash for Netweb, given that the most expensive components come from overseas and the customer frequently pays after delivery.",
    ],
    quote:
      "In hardware, revenue is a poor guide to value. The bill of materials, the inventory held before shipment and the collection period decide whether a fast-growing order book produces cash or consumes it.",
  },
  whatItDoes: {
    paragraphs: [
      "The product range maps onto the way large computing projects are bought. A research institution or a government department tends to buy a full supercomputing cluster, including compute nodes, networking, storage and management software. An enterprise buying AI capacity tends to buy a smaller number of GPU servers plus high-performance storage. A company that wants private cloud buys hyperconverged infrastructure rather than raw servers.",
      "Netweb also sells services around the hardware: cloud migration, managed Kubernetes, AI and machine-learning deployment, optimisation advice and technical support. Those services are a small part of revenue but matter for stickiness, because a customer that has integrated Netweb's cluster into its operations is less likely to switch on the next refresh. The dataset does not split product from service revenue, so the consolidated figures are the only base available.",
    ],
    bullets: [
      {
        title: "Supercomputing",
        detail:
          "Cluster design and integration for research, weather, defence and academic workloads.",
      },
      {
        title: "AI systems",
        detail:
          "GPU servers and workstations used for model training and inference.",
      },
      {
        title: "Private cloud and storage",
        detail:
          "Hyperconverged infrastructure, cloud-native storage and data-centre servers.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Netweb is an integrator, not a chipmaker. It buys processors, accelerators, memory, storage and networking equipment, then designs them into a system, assembles it, tests it, installs it and supports it. The gross margin of 19.6% is the spread between the selling price of the system and the cost of those components plus assembly. That is thin by software standards and normal for hardware integration.",
      "The operating margin of 14.6% is unusually close to the gross margin, which tells you the operating cost base is lean. Sales, administration and research together consume only about five percentage points of revenue. That leanness is a strength when volumes rise, because incremental revenue drops through quickly. It is also a vulnerability: a small change in component prices or a discount on one large tender can erase a disproportionate share of profit.",
      "Working capital is the real constraint. Components must be bought and inventory held before a cluster is shipped, and government or large-enterprise customers pay after acceptance. That is why the company carries debt even though it has ₹7.92B of net cash and why interest cover is 10.9 times rather than the triple-digit figures seen at software companies.",
    ],
  },
  growth: {
    paragraphs: [
      "The five-year climb runs from ₹1.43B in FY2021 to ₹21.84B in FY2026, and the trailing twelve months are already ₹37.2B. The quarterly jump is stark: Q2 FY26 revenue was ₹3.04B, Q3 FY26 was ₹8.05B, and Q2 FY27 was ₹13.23B. A single large order can double a quarter.",
      "The drivers are AI infrastructure spending, data-centre buildout and government-funded computing. India's public research and defence programmes buy domestic systems, and enterprises building private AI capacity need servers that can be delivered and supported locally. The risk is that this is a capital-spending cycle rather than a recurring subscription: once a customer has installed a cluster, it does not buy another the following year.",
      "The consensus expects ₹45.34B of revenue this fiscal year and ₹53.20B next year. Against the ₹37.2B trailing figure, that implies growth of roughly a fifth rather than the near-tripling just reported. Even the analysts, in other words, expect the growth rate to normalise.",
    ],
    bullets: [
      {
        title: "AI capacity",
        detail:
          "Enterprises and research institutions buying GPU clusters for training and inference.",
      },
      {
        title: "Domestic manufacturing",
        detail:
          "Locally assembled systems are favoured in government and defence procurement.",
      },
      {
        title: "Refresh cycles",
        detail:
          "Each generation of accelerators makes older clusters obsolete, creating repeat demand.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating profit rose from ₹14 crore in FY2021 to ₹2.85B in FY2026, and the trailing operating margin is 14.6%. The quarterly margins have been stable in a narrow band, between 12.2% and 15.0% over the last eight quarters, even as revenue multiplied. That stability is impressive for a hardware business and suggests pricing has kept pace with component costs.",
      "There is one anomaly worth flagging. In FY2024, operating profit was ₹1.03B but net profit was only ₹76 crore. A gap that large between operating and net profit is not explained by tax alone and points to interest, depreciation or one-off charges below the operating line. The annual report would show which. Equity returns 27.3% and invested capital 37.0%, both strong, but they are flattered by the current upcycle.",
      "Trailing diluted EPS is ₹63.31 against ₹36.15 reported for FY2026, so the trailing period is running well ahead of the last full year.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was ₹1.61B, or 7.4% of revenue, against net profit of roughly ₹2.06B in FY2026. The gap is working capital: inventory and receivables grow faster than payables when revenue is scaling this quickly. In FY2025 free cash flow was negative ₹36 crore, and in FY2022 and FY2024 it was effectively zero.",
      "The balance sheet still shows ₹7.92B of net cash, which sounds comfortable until you notice the borrowing used for working capital and the 10.9 times interest cover. Net cash here is a snapshot after a period of strong collections; it can reverse if a large order is shipped but not paid for.",
      "The market is paying 144.9 times free cash flow and a 0.7% free-cash-flow yield. Those numbers only make sense if free cash flow grows several-fold. That is possible if revenue keeps rising and working capital stabilises, but it is not what the trailing figures show today.",
    ],
  },
  valuation: {
    paragraphs: [
      "The market is paying 63.8 times trailing earnings and 43.9 times EV/EBITDA at the ₹3,925.50 close, or 6.1 times sales. The peer table makes the premium obvious: KPIT and Cyient trade at 12.6 times EV/EBITDA, Newgen at 12.4 times, Intellect at 10.9 times. Netweb is priced at more than three times the multiple of the next most expensive IT peer.",
      "The justification has to be growth and return on capital. A 37.0% ROIC and a business growing at triple digits can support a high multiple for a while. The danger is that hardware revenue is cyclical and low-margin, so the multiple is being applied to earnings that may be near a peak. A 43.9 times EV/EBITDA multiple on 14.6% operating margin leaves little room for a downcycle.",
    ],
  },
  analysts: {
    paragraphs: [
      "Four analysts cover Netweb. Their mean target is ₹5,582.00, inside a range of ₹5,250.00 to ₹5,990.00, and the estimates are outside context rather than a Stockmonk view. The targets are clustered tightly, which is unusual for a stock with this much operating volatility.",
      "This year's estimates put revenue at ₹45.34B and EPS at ₹72.77, though only two analysts contribute to the revenue number. Next year's estimates, with four contributors, are ₹53.20B and ₹89.21. The next-quarter estimate of ₹11.31B is below the ₹13.23B just reported, which suggests some estimates were set before the latest results and have not been revised.",
    ],
  },
  risks: {
    intro:
      "Netweb's risks are those of a fast-growing hardware integrator: component supply, customer concentration, working capital and a valuation that assumes the AI spending cycle continues.",
    items: [
      {
        title: "AI capex cycle",
        severity: "High",
        detail:
          "Revenue is tied to customers building compute capacity. If AI infrastructure spending pauses, orders can fall faster than costs.",
        watch:
          "Order intake, quarterly revenue sequence and commentary on the pipeline.",
      },
      {
        title: "Component availability and pricing",
        severity: "High",
        detail:
          "Accelerators, memory and networking gear are sourced from a small number of global suppliers; allocation or price spikes hit both revenue and margin.",
        watch: "Gross margin and inventory days.",
      },
      {
        title: "Working capital",
        severity: "High",
        detail:
          "Inventory and receivables absorb cash as revenue scales. Free cash flow has been near zero or negative in several past years.",
        watch:
          "The gap between net profit and operating cash flow, and short-term borrowings.",
      },
      {
        title: "Customer concentration",
        severity: "Medium",
        detail:
          "Large government, defence and enterprise orders can dominate a quarter, so the loss or delay of one tender matters.",
        watch: "Revenue from the largest customers and the order book mix.",
      },
      {
        title: "Valuation risk",
        severity: "Medium",
        detail:
          "At 43.9 times EV/EBITDA, the price assumes years of high growth. A single disappointing quarter can compress the multiple sharply.",
        watch: "Forward EV/EBITDA and the rate of estimate revisions.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "A 19.6% gross margin leaves little buffer; a two-point fall would cut operating profit by more than a tenth.",
      },
      {
        title: "Cash conversion",
        detail:
          "Free cash flow of ₹1.61B on ₹37.2B of revenue is the weakest part of the report.",
      },
      {
        title: "Order pipeline",
        detail:
          "Hardware revenue is lumpy, so the pipeline matters more than the trailing growth rate.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Netweb is a genuine beneficiary of the AI hardware buildout. Revenue of ₹37.2B, a 14.6% operating margin and a 27.3% return on equity describe a business executing well in a strong market. The shares have re-rated to 63.8 times earnings and 43.9 times EV/EBITDA on the back of that.",
      "The weak point is cash. A hardware integrator that grows this fast has to fund inventory and receivables, and the trailing free-cash-flow margin of 7.4% shows the cost. Net cash of ₹7.92B is a comfort, but it is not a substitute for cash conversion.",
      "What is not known is how much of the current revenue is a one-time buildout and how much is a recurring refresh cycle. That distinction decides whether the current earnings are a base or a peak.",
    ],
    questions: [
      "How much of revenue comes from the top five customers?",
      "What portion of the order book is government and defence versus enterprise?",
      "Can free cash flow grow faster than revenue as working capital normalises?",
      "What happens to margin if accelerator prices rise or supply tightens?",
    ],
  },
};
