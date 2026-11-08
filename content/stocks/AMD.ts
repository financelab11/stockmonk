import type { StockStory } from "./types";

export const AMD: StockStory = {
  ticker: "AMD",
  kicker: "Semiconductors · Processors and accelerators",
  title: "AMD's growth is real; the margin is the part still under construction",
  dek: "Revenue is up 41.9% and the shares trade at 96.7x earnings. The distance between those two facts is the whole report.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $45.44B on a trailing basis, up 41.9%, and the latest quarter grew 44.7%.",
    "Gross margin is 53.7% and operating margin is 17.7%, so roughly 36 points of revenue go to operating costs.",
    "Free cash flow was $7.06B, a 15.5% margin, with $8.70B of net cash on the balance sheet.",
    "At $449.04 the shares trade at 96.7x trailing earnings and 82.3x EV/EBITDA, the highest earnings multiple in the peer table.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/2488/000000248826000018/amd-20251227.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000002488&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "AMD designs processors and sells them to the companies that build servers, PCs and accelerator systems. It owns no fabs. The chips are made by foundry partners, which means AMD competes on design, on software and on price rather than on manufacturing capacity.",
      "The latest quarter did $13.38B of revenue, up 44.7%, and earned a 21.2% operating margin. That margin is the number to notice: in Q2 FY2025 the same measure was -1.7%. AMD has moved from losing money at the operating line to earning a respectable return in five quarters.",
      "The shares are worth $736.46B at $449.04, inside a 52-week range of $188.22 to $658.52. Trailing P/E is 96.7x and EV/EBITDA is 82.3x. The price is not paying for the last year of revenue; it is paying for the next three.",
    ],
    quote:
      "AMD has proved it can win designs. The open question is whether winning designs in accelerators converts into the kind of margin that a 96.7x multiple requires.",
  },
  whatItDoes: {
    paragraphs: [
      "AMD sells into four broad markets. Data-center processors compete with Intel for the chips that run cloud and enterprise servers. Accelerators compete with Nvidia for the chips that train and run AI models. Client processors go into laptops and desktops, and embedded chips go into communications, industrial and automotive systems.",
      "The company reports these as separate segments, but the consolidated line is what the tables here use. The important structural point is that three of the four markets are won through design cycles that last several years. A server platform decision made by a cloud provider today determines revenue for the life of that generation.",
      "AMD's scale is smaller than its rivals'. It employs 12,600 people, against workforces several times larger at the companies it competes with. That is efficient per employee and also a constraint: the design roadmap has to be funded from a narrower base.",
    ],
    bullets: [
      {
        title: "Data-center processors",
        detail:
          "Server CPUs sold to cloud providers, enterprises and governments. The share gains here have been the most consistent part of the story.",
      },
      {
        title: "Accelerators",
        detail:
          "GPUs for AI training and inference. The fastest-growing line and the one that decides the multiple.",
      },
      {
        title: "Client and embedded",
        detail:
          "PC processors and chips for communications, industrial and automotive systems. Cyclical, lower margin, useful for absorbing fixed design costs.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The model is fabless: AMD pays a foundry for wafers, pays for packaging and memory, and sells the finished part. Gross margin of 53.7% is what is left after those costs. It is a hardware margin, well below what a software company earns, and it moves with the mix between client chips and data-center parts.",
      "Operating margin of 17.7% tells you where the rest goes. Roughly 36 points of revenue are consumed between gross profit and operating profit, mostly by research and development and by the sales organization that wins designs. That spending is largely fixed, which is why a 44.7% revenue increase produced a much larger swing in operating income.",
      "Pricing is set against two very different competitors. In server processors AMD prices against Intel on performance per watt and per dollar. In accelerators it prices against Nvidia, where the software ecosystem and the maturity of the platform matter as much as the chip. The second contest is harder to win on price alone.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $16.43B in FY2021 to $34.64B in FY2025, more than doubling in four years. The path was uneven: FY2023 revenue was $22.68B, slightly below FY2022, and operating income collapsed to $401.0M from $1.26B as the PC market corrected. The recovery since then has been driven by data-center parts.",
      "The trailing figure of $45.44B is up 41.9%, and quarterly revenue has risen from $7.68B in Q2 FY2025 to $13.38B in Q3 FY2026. Third-party estimates assume the pace continues: $52.24B this fiscal year and $95.71B the next. The second number is more than double the trailing revenue, so the estimate is really a forecast that accelerators become a business of tens of billions of dollars.",
      "What would slow it down is not a lack of demand but a lack of allocation. Accelerator supply depends on leading-edge wafer capacity and high-bandwidth memory, both of which are shared with other buyers. AMD can win a design and still be unable to ship it in the volume a customer expects.",
    ],
    bullets: [
      {
        title: "Accelerator ramp",
        detail:
          "The single largest swing factor in the estimates, and the one with the least history behind it.",
      },
      {
        title: "Server share",
        detail:
          "Each generation of server processors has taken share from Intel. The question is how much remains available.",
      },
      {
        title: "Supply allocation",
        detail:
          "Foundry capacity and memory supply determine how much of the demand AMD can actually invoice.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly operating margin series tells the story better than the annual one: -1.7%, 13.7%, 17.1%, 14.4%, 17.3% and 21.2% across the last six quarters. Revenue grew in every one of those periods, and the margin expanded as volume absorbed the fixed cost base.",
      "Trailing net margin is 16.8% and diluted EPS is $4.60. Return on equity is 11.1% and return on invested capital is 10.7%. Those are modest returns for a company priced at 96.7x earnings, and they are the clearest statement of the bet: the market expects today's invested capital to earn far more in future than it does now.",
      "The FY2023 experience is the reference point for how quickly this can reverse. Revenue fell 3.9% and operating income fell by roughly two-thirds in a single year. A business with 36 points of fixed cost between gross profit and operating profit has that kind of downside built into it.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $7.06B over the trailing period, a 15.5% margin. The fabless model keeps capital expenditure low, so the cash cost of growth mostly shows up as inventory and receivables rather than factories. In FY2025 free cash flow of $6.74B exceeded net income of $4.33B, which is the signature of a business with heavy non-cash charges.",
      "The balance sheet carries $8.70B of net cash, so net debt to EBITDA is negative. That gives AMD room to fund the accelerator ramp without raising capital, and it removes the refinancing risk that sits on the balance sheets of more leveraged semiconductor companies.",
      "The cash question is whether working capital absorbs the ramp faster than profit produces it. Inventory has to be built before revenue arrives, and a single quarter of over-ordering can turn a healthy cash conversion into a negative one.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $449.04, AMD trades at 96.7x trailing earnings, 82.3x EV/EBITDA, 16.0x sales and 104.4x free cash flow. The free-cash-flow yield is 1.0%. The highest earnings multiple in the peer table belongs to AMD, ahead of Broadcom at 36.6x, Microsoft at 27.6x and Nvidia at 23.3x.",
      "The comparison with Nvidia is the useful one. Nvidia earns a 65.2% operating margin and trades at 23.3x earnings; AMD earns 17.7% and trades at 96.7x. The difference is that the market expects AMD's margin to converge upward as accelerators scale, while Nvidia's is already there.",
      "That is a defensible expectation and an expensive one. It requires revenue to more than double, as the estimates assume, and it requires the incremental revenue to arrive at a better margin than the current blend. Stockmonk does not publish a target price; the multiples are a starting point for questions.",
    ],
  },
  analysts: {
    paragraphs: [
      "Nobody in the 47-strong analyst group has a target below $540.00, and the mean is $659.77 against a range that reaches $1,250.00. Six sit in the strongest positive bucket, 39 are positive and eight neutral.",
      "Forecasts put revenue at $17.06B next quarter with $2.93 of EPS, $52.24B this fiscal year with $8.09, and $95.71B next fiscal year with $17.64. The EPS estimate more than doubles alongside the revenue estimate, which is the same margin-convergence assumption expressed per share.",
      "A distribution with no negative ratings and a floor above the market price is a sentiment reading, not a valuation. Uniformity deserves more scrutiny than division.",
    ],
  },
  risks: {
    intro:
      "AMD's financial position is strong; the risks are competitive and operational. Almost all of them run through the accelerator business.",
    items: [
      {
        title: "Accelerator competition",
        severity: "High",
        detail:
          "Nvidia's platform includes a mature software ecosystem and an annual product cadence. Matching the hardware is not the same as matching the switching cost.",
        watch:
          "Accelerator revenue disclosures and the pace of new design wins at large customers.",
      },
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "A small number of cloud and system builders decide whether a new accelerator generation reaches volume. Their procurement choices can move a full year of estimates.",
        watch:
          "Concentration in the largest customers and order patterns across quarters.",
      },
      {
        title: "Supply allocation",
        severity: "Medium",
        detail:
          "Leading-edge wafers and high-bandwidth memory are shared with other buyers. Demand can exceed what AMD is able to ship.",
        watch:
          "Inventory, purchase commitments and lead times for accelerators.",
      },
      {
        title: "Margin mix",
        severity: "Medium",
        detail:
          "Selling whole accelerator systems rather than chips raises revenue and can lower the gross margin percentage at the same time.",
        watch:
          "Gross margin alongside revenue growth, not in isolation.",
      },
      {
        title: "Client cyclicality",
        severity: "Medium",
        detail:
          "The PC market corrected sharply in FY2023 and took operating income with it. That segment has not disappeared.",
        watch:
          "Client segment revenue and channel inventory.",
      },
      {
        title: "Export controls",
        severity: "Medium",
        detail:
          "Cross-border rules can remove addressable market for advanced accelerators or require lower-specification products.",
        watch:
          "License changes and the geographic revenue split.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "A rising gross margin alongside rising revenue confirms the mix is improving; a falling one says volume is being bought with price.",
      },
      {
        title: "Operating margin trend",
        detail:
          "The move from -1.7% to 21.2% is the core of the story. Watch whether the next four quarters continue it.",
      },
      {
        title: "Inventory",
        detail:
          "Inventory growth ahead of revenue is normal before a launch and a warning sign after one.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "AMD is a fabless designer that has turned a challenged position into a growing franchise in server processors and is now attempting the same in AI accelerators. Revenue of $45.44B, up 41.9%, and an operating margin that has climbed to 21.2% are evidence that the operating model works.",
      "The valuation is the part that requires belief. At 96.7x trailing earnings, the price assumes revenue more than doubles and that the incremental business earns a better margin than today's blend. The balance sheet, with $8.70B of net cash, means the company can fund that attempt; it does not mean the attempt succeeds.",
      "The educational point is the difference between operating momentum and investment return. AMD's momentum is visible in every quarter of the table. Whether the price already reflects it is a separate question that the next section cannot answer either.",
    ],
    questions: [
      "How much of the accelerator revenue comes from the largest customers?",
      "Does gross margin rise or fall as accelerator systems scale?",
      "What share of the $95.71B next-year estimate depends on one product generation?",
      "How much of the server processor opportunity has already been captured?",
    ],
  },
};
