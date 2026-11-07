import type { StockStory } from "./types";

export const NVDA: StockStory = {
  ticker: "NVDA",
  kicker: "Semiconductors · AI infrastructure",
  title: "Nvidia sells the picks and shovels of the AI build-out",
  dek: "A platform company whose growth, margins and concentration all trace back to one question: how long will customers keep paying up for accelerated computing?",
  readingMinutes: 12,
  takeaways: [
    "Revenue reached $303.0B on a trailing-twelve-month basis, up 83.4% year over year.",
    "Compute & Networking is 89.6% of the business, so the data-center cycle is the whole story.",
    "Operating margin of 65.2% and free-cash-flow margin of 41.9% are exceptional even by semiconductor standards.",
    "The balance sheet carries $66.0B of net cash, which gives Nvidia room to invest through a downturn.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm",
  irUrl: "https://investor.nvidia.com/",
  bigPicture: {
    paragraphs: [
      "Nvidia is the largest pure-play supplier of accelerated computing hardware and software. Its graphics processing units, networking gear and CUDA programming model have become the default plumbing for training and running large artificial-intelligence models. That position has turned a company that once sold mostly gaming cards into a $4.5T market-cap business with $303.0B of trailing revenue.",
      "The investment case is unusually concentrated. The data-center build-out by a handful of hyperscale customers drives the majority of growth, and the Compute & Networking segment now accounts for 89.6% of revenue. When that spending accelerates, Nvidia compounds quickly. When it pauses, the same operating leverage works in reverse — as it did in fiscal 2023, when revenue was flat and operating margin fell from 37.3% to 15.7%.",
      "The stock is not priced as a cyclical. At the latest close of $186.64 it trades at 23.3x trailing earnings and 22.0x EV/EBITDA, which is modest relative to the growth rate but assumes the AI capex cycle has several more years to run. The market is paying for durability, not just current demand.",
    ],
    quote:
      "The central debate is not whether Nvidia is a good business. It is how much of the current spending is a durable platform shift versus a one-time capacity build.",
  },
  whatItDoes: {
    paragraphs: [
      "Nvidia designs chips and the systems around them. Data-center customers buy GPU modules, full server systems, InfiniBand and Ethernet networking, and the software stack that makes those pieces usable. The company outsources fabrication to partners such as TSMC, which keeps capital intensity lower than an integrated manufacturer but ties Nvidia to a narrow supply base.",
      "The Graphics segment still serves gaming, professional visualization and automotive customers. It is a real business with loyal users, but at 10.4% of revenue it is now a supporting act. The reportable segment split understates the importance of software: CUDA, libraries and developer tools create switching costs that are not visible as a separate revenue line.",
    ],
    bullets: [
      {
        title: "Compute & Networking",
        detail:
          "Data-center GPUs, networking and systems. 89.6% of annual revenue and the engine of the AI build-out.",
      },
      {
        title: "Graphics",
        detail:
          "Gaming, professional visualization and automotive chips. 10.4% of revenue and a useful demand diversifier.",
      },
      {
        title: "Supply chain",
        detail:
          "Fabless model with leading-edge capacity concentrated at TSMC. Execution depends on packaging and memory availability as much as chip design.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Nvidia earns a gross margin above 70% because customers are buying a complete platform, not a commodity chip. The value comes from performance per watt, the maturity of the software ecosystem and the fact that switching a trained model to another accelerator is expensive. That pricing power is the source of the unusually high operating margin.",
      "Geographically, 69.3% of revenue is billed in the United States, 19.6% in Taiwan and 9.1% in China including Hong Kong. The Taiwan figure reflects where systems are assembled and shipped rather than where the ultimate customer sits, so it should not be read as end-demand concentration. The China exposure is the more important number because export controls can change it quickly.",
      "A useful way to read the mix is to separate where revenue is recognized from where demand originates. Hyperscalers and sovereign AI projects are global, but the billing location and the export-licence regime determine what Nvidia can actually ship.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew from $10.9B in fiscal 2020 to $215.9B in fiscal 2026, a 64.4% compound annual growth rate. The latest quarter, Q2 FY2027, delivered $96.2B of revenue, up 105.9% year over year. That is acceleration at a scale where percentage growth is increasingly hard to generate.",
      "Sell-side estimates imply the growth continues. The attributed consensus expects $109.0B of revenue next quarter and $411.7B for the current fiscal year, roughly 90% growth, before decelerating to about 68% in the following year. Those numbers are third-party forecasts, not Stockmonk projections, and they embed a strong assumption about customer capex budgets.",
      "The growth drivers are straightforward: more accelerators per cluster, networking attach, new product generations and sovereign AI. The risk is that all four are correlated with the same hyperscaler capital-spending cycle.",
    ],
    bullets: [
      {
        title: "Data-center capex",
        detail:
          "Hyperscalers are still increasing AI infrastructure budgets. Nvidia's order book and supply commitments are the cleanest read on near-term demand.",
      },
      {
        title: "Networking attach",
        detail:
          "InfiniBand and Spectrum-X Ethernet expand the revenue per AI cluster and deepen the platform relationship.",
      },
      {
        title: "Product cadence",
        detail:
          "Annual architecture transitions give customers a reason to refresh and help Nvidia defend pricing against custom silicon.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The income statement is exceptional. Trailing operating margin is 65.2%, net margin is 63.7% and return on invested capital is 95.8%. Those figures reflect both pricing power and a fabless model that does not carry leading-edge fabs on its own balance sheet.",
      "The margin history shows the cyclicality underneath. Operating margin was 15.7% in fiscal 2023 during the gaming correction, then expanded to 60%+ as data-center demand inflected. Investors should treat the current margin as a peak-cycle number rather than a permanent floor.",
      "Diluted EPS was $7.91 on a trailing basis. The consensus expects $9.31 for the current fiscal year and $15.91 for the next, which is the numerical expression of the durability debate.",
    ],
  },
  cash: {
    paragraphs: [
      "Nvidia generated $127.0B of free cash flow over the trailing twelve months, a 41.9% margin. Capital expenditure is modest at $7.4B because manufacturing is outsourced; the cash cost of growth shows up in inventory and supply prepayments rather than fabs.",
      "The balance sheet holds $99.4B of cash and investments against $33.4B of debt, for $66.0B of net cash. That cushion matters in a cyclical industry because it lets the company keep investing in software, networking and supply commitments when orders slow.",
      "Capital returns are growing but remain small relative to cash generation: $6.8B of dividends and $55.2B of buybacks over the trailing period. The priority is clearly reinvestment and supply security.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $186.64, Nvidia trades at 23.3x trailing earnings, 22.0x EV/EBITDA and 35.4x free cash flow. On a growth-adjusted basis those multiples are not extreme, but they are being applied to peak margins and a concentrated customer base.",
      "The multiple history is a useful sanity check. EV/EBITDA has compressed from much higher levels as earnings caught up with the share price, which is the healthy way for a high-growth company to de-rate. The risk is that earnings estimates, not the multiple, are the variable that disappoints.",
      "Stockmonk does not publish a target price. The attributed analyst mean target is shown in the next section purely as third-party context, and it should be read alongside the dispersion between the high and low estimates.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus includes 58 analysts. The mean target is $327.14, with a range of $180 to $515. The distribution is overwhelmingly positive — 10 in the strongest positive bucket, 49 positive, 2 neutral and 1 negative — which is itself a sentiment signal worth noticing.",
      "Estimates call for $109.0B of revenue next quarter and $9.31 of EPS for the current fiscal year. The gap between the high and low target is wide because the analysts disagree about the duration of the AI capex cycle, not because they disagree about the current quarter.",
      "These are third-party views. A high mean target is not a Stockmonk rating, and a wide range is often more informative than the average.",
    ],
  },
  risks: {
    intro:
      "Nvidia's risks are mostly strategic rather than financial. The balance sheet is strong; the uncertainty is about demand concentration, geopolitics and the durability of pricing power.",
    items: [
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "A small number of hyperscale customers account for a large share of data-center revenue. A coordinated capex pause would hit revenue and margins at the same time.",
        watch:
          "Hyperscaler capital-expenditure guidance and Nvidia's own supply commitments.",
      },
      {
        title: "Export controls and China",
        severity: "High",
        detail:
          "US export rules can remove addressable market or force lower-spec products. China including Hong Kong was 9.1% of annual revenue.",
        watch:
          "Changes to licence rules and the revenue contribution from China.",
      },
      {
        title: "Supply-chain concentration",
        severity: "Medium",
        detail:
          "Leading-edge fabrication and advanced packaging are concentrated in Taiwan. A disruption would be difficult to route around quickly.",
        watch:
          "TSMC capacity announcements, CoWoS packaging availability and lead times.",
      },
      {
        title: "Custom silicon and competition",
        severity: "Medium",
        detail:
          "Large customers are designing their own accelerators, and AMD is improving its data-center lineup. Custom chips may not replace Nvidia, but they can cap pricing.",
        watch:
          "Design wins at hyperscalers and the pace of Nvidia's annual architecture transitions.",
      },
      {
        title: "Cyclicality of peak margins",
        severity: "Medium",
        detail:
          "Operating margin has ranged from 15.7% to 65.2% in the last four years. A demand air pocket would compress the multiple and the earnings base together.",
        watch:
          "Inventory, days sales outstanding and gross-margin guidance.",
      },
    ],
    watchlist: [
      {
        title: "Hyperscaler capex",
        detail:
          "The quarterly capex plans of the largest cloud customers are the leading indicator for Nvidia's order book.",
      },
      {
        title: "Gross margin",
        detail:
          "A sustained move below the low 70s would suggest pricing pressure or a richer mix of lower-margin systems.",
      },
      {
        title: "China revenue",
        detail:
          "Track the absolute dollar contribution, not just the percentage, because the base is changing quickly.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Nvidia is a high-quality platform business enjoying an extraordinary demand cycle. The financial statements show real pricing power, a net-cash balance sheet and cash conversion that most semiconductor companies never achieve.",
      "The educational point is the difference between a good company and a good investment at a given price. The stock's 23x trailing earnings multiple looks reasonable against 83% growth, but both the multiple and the growth depend on the same variable: sustained AI infrastructure spending.",
      "A reader should leave with three questions: How concentrated is the customer base? How much of the margin is cycle versus platform? And what would a 12-month pause in hyperscaler capex do to the earnings base?",
    ],
    questions: [
      "What share of data-center revenue comes from the top few customers?",
      "How much of the 65% operating margin is protected by software switching costs?",
      "What happens to the multiple if growth decelerates to 20%?",
      "Is the China exposure priced as optionality or as a permanent part of the base?",
    ],
  },
};
