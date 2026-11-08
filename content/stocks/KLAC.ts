import type { StockStory } from "./types";

export const KLAC: StockStory = {
  ticker: "KLAC",
  kicker: "Semiconductors · Process control and metrology",
  title: "KLA sells the measurement that decides whether a wafer is worth keeping",
  dek: "A 90% gross margin from a hardware company comes from selling optics and algorithms, and from the cost of a bad wafer lot.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $14.51B on a trailing basis, up 15.8%, and the latest quarter grew 28.9% to $4.14B.",
    "Gross margin is 90.0%, the highest in this batch, and operating margin is 42.2%.",
    "Free cash flow was $4.04B, a 27.8% margin, with $982.1M of net debt.",
    "The reported EPS series swings between large negative and large positive quarters, so net income is the cleaner read.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/319201/000031920126000027/klac-20260630.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000319201&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "KLA makes the equipment that inspects a wafer and measures what is on it. A modern chip has dozens of layers, and a defect buried at layer five can ruin everything built on top of it. The earlier a fab finds that defect, the less money it wastes, which is why process control has become a larger share of the equipment budget with every generation.",
      "Process control is not the largest line in an equipment budget, but it earns the highest margin in one: 90.0% gross and 42.2% operating on $14.51B of trailing revenue, with the latest quarter up 28.9% to $4.14B. KLA has the smallest revenue base among the equipment makers covered here and the highest margins among them by a wide distance.",
      "KLA is valued at $180.45B at a share price of $138.49, close to the bottom of a $107.20 to $307.37 range. Trailing P/E is 34.3x and EV/EBITDA is 27.8x.",
    ],
    quote:
      "Inspection is sold on avoided loss rather than on throughput. That is why the price of a KLA tool is only loosely connected to the cost of building it.",
  },
  whatItDoes: {
    paragraphs: [
      "The portfolio has three parts. Inspection systems look for defects — particles, scratches, pattern errors — across a wafer. Metrology systems measure critical dimensions, film thickness and overlay, which is how precisely one layer aligns with the next. E-beam review zooms in on a defect that optical inspection has flagged.",
      "Customers are the logic and memory fabs, and to a lesser extent the equipment makers who need to characterise their own processes. The buying decision is made by process engineers, and it is tied to a specific node and a specific step, which makes the sale technical and the qualification slow.",
      "The software layer matters more than the revenue it produces. The value of an inspection tool depends on how quickly its output can be turned into a decision about a process, and that is a data and algorithms problem as much as an optics problem.",
    ],
    bullets: [
      {
        title: "Inspection",
        detail:
          "Optical systems that find defects across the wafer. The largest product line and the closest thing to a toll booth in the portfolio.",
      },
      {
        title: "Metrology",
        detail:
          "Measurement of dimensions, films and overlay. Sold on the same process steps as inspection.",
      },
      {
        title: "Service",
        detail:
          "Spares, upgrades and field service on an installed base that grows with every node transition.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 90.0% is not a normal hardware margin, and it is worth understanding why. The tool is an optical system plus a computing system plus the algorithms that interpret what the optics see. The materials cost is a small fraction of the price; the value comes from precision and from the cost of the mistake the tool prevents.",
      "Operating margin of 42.2% leaves roughly 48 points of gross profit for research, field support and administration. That is a much heavier cost ratio than Lam or Applied Materials carry, because KLA funds a large research organization relative to a smaller revenue base. The result is a 42% operating margin on 90% gross margin rather than a 40% operating margin on 51%.",
      "Pricing power comes from qualification. Once a fab has built a process around a particular inspection recipe, changing the tool means requalifying the process, which is expensive and risky. That is why incumbency in process control is worth more than incumbency in a tool that only moves wafers.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $9.21B in FY2022 to $13.58B in FY2026, with a dip to $9.81B in FY2024 when customers slowed spending. The quarterly series has been climbing steadily: $3.17B, $3.21B, $3.30B, $3.42B, $3.66B and $4.14B. Unlike the other equipment makers here, the progression has no sharp step.",
      "Third-party estimates call for $18.87B this fiscal year and $22.56B the next, which would be a 66% increase over FY2026 in two years. The assumption is that process control intensity keeps rising as nodes get harder and as advanced packaging adds new inspection steps.",
      "The constraint is the same as everywhere else in this group: the customers are few and their capital budgets are lumpy. KLA's smoother quarterly record partly reflects a mix that is less exposed to any single memory project.",
    ],
  },
  performance: {
    paragraphs: [
      "Annual operating margin moved from 37.9% in FY2022 to 32.5% in FY2024 and back to 41.3% in FY2026. The quarterly series has improved in each of the last four periods, reaching 44.1%. Net margin is 36.2%.",
      "Return on equity is 80.6% and return on invested capital is 64.4%. Both are extraordinary, and both are helped by a balance sheet that carries almost no net debt: $982.1M, or 0.2x EBITDA. A high return computed on a thin capital base is a real signal here, because the capital genuinely is thin.",
      "One line in the tables needs a warning. The diluted EPS series includes quarters at -$18.28, +$8.68, +$9.12 and -$22.60, and a trailing figure of -$3.62, while the company reported net income of $4.83B in FY2026. Those per-share numbers do not track the operating business. Use net income, operating margin and free cash flow instead.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $4.04B, a 27.8% margin. The annual record is consistent: $3.01B, $3.33B, $3.03B, $3.75B and $3.77B. For a company of this size that is a high conversion rate, and it reflects a business that does not need to build fabs or carry large inventories of finished goods.",
      "Net debt of $982.1M is 0.2x EBITDA, so the balance sheet is not a constraint. The company pays a dividend yielding 0.6% and has room to fund research through a downturn without adjusting its capital structure.",
      "The cash flow also funds the research that keeps the margin. Process control is a technology race as much as a manufacturing one, and the company that stops investing in optics and algorithms loses the qualification position that supports the price.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $138.49, KLA trades at 34.3x trailing earnings, 27.8x EV/EBITDA, 12.5x sales and 44.7x free cash flow, with a 2.2% free-cash-flow yield. Among the equipment makers in this batch it carries the highest sales multiple, and its EBITDA multiple sits between Nvidia at 22.0x and Broadcom at 33.1x.",
      "A 12.5x sales multiple for a company selling machines is a statement that the gross margin is durable. If the 90% gross margin holds, sales are worth more than they would be at a typical equipment maker's 50%. If competition erodes it, the multiple has much further to fall than the earnings do.",
      "The trailing P/E of 34.3x is also computed against a per-share earnings figure that the tables show to be unreliable. The free-cash-flow multiple is the more stable anchor here. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-six analysts cover the stock, with a mean target of $219.62 and a range of $175.00 to $275.00. Six sit in the strongest positive bucket, 15 are positive and eight neutral.",
      "The neutral share is what stands out. Eight of 26 is a high proportion for an equipment name, and the range is narrow in percentage terms. Together they describe a consensus that is positive but not excited: the analysts see the earnings growth and are unwilling to pay much more than the current multiple for it.",
      "Their estimates are $4.72B of revenue next quarter with $1.45 of EPS, $18.87B this fiscal year with $5.77, and $22.56B next fiscal year with $7.10. The revenue estimates are the reliable part; the per-share figures need checking against the basis used in the filing.",
    ],
  },
  risks: {
    intro:
      "KLA's risks are competitive and cyclical. Its balance sheet is close to pristine, so the uncertainty is about pricing power and order timing rather than solvency.",
    items: [
      {
        title: "Process-control competition",
        severity: "High",
        detail:
          "A 90% gross margin invites competition. A rival that qualifies an inspection step can take a franchise that lasts for years.",
        watch:
          "Gross margin and share of process-control spending at leading-edge nodes.",
      },
      {
        title: "Customer capital budgets",
        severity: "High",
        detail:
          "A small number of fabs decide when inspection tools are bought. A delayed node ramp delays the revenue with it.",
        watch:
          "Bookings and the split between logic, memory and foundry.",
      },
      {
        title: "Cyclicality of the installed base",
        severity: "Medium",
        detail:
          "Service revenue cushions a downturn, but upgrades are discretionary and are cut first.",
        watch:
          "Service revenue growth compared with tool revenue.",
      },
      {
        title: "Export controls",
        severity: "Medium",
        detail:
          "Restrictions on advanced equipment sales can remove demand from specific regions.",
        watch:
          "License changes and the geographic revenue split.",
      },
      {
        title: "Earnings quality",
        severity: "Medium",
        detail:
          "The per-share line has swung by tens of dollars between quarters while net income stayed positive, so headline EPS is misleading.",
        watch:
          "Net income and free cash flow rather than diluted EPS.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "The single number that justifies the sales multiple. Any sustained move below 90% changes the valuation arithmetic.",
      },
      {
        title: "Bookings",
        detail:
          "The leading indicator for revenue that arrives several quarters later.",
      },
      {
        title: "Cash conversion",
        detail:
          "Free cash flow has tracked net income closely. Watch whether that continues through the next ramp.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "KLA is the process-control specialist of the semiconductor equipment industry, with a 90.0% gross margin, a 42.2% operating margin and $4.04B of free cash flow. Revenue of $14.51B is up 15.8% and the latest quarter grew 28.9%.",
      "The investment question is whether a 90% gross margin is a durable feature of the industry or a temporary consequence of being the qualified supplier at the leading edge. Twelve and a half times sales says the market believes the first. Eight neutral ratings out of 26 suggest the analysts are less sure.",
      "The educational point is that gross margin is where competitive advantage shows up first. For a company selling machines, a 90% gross margin is an assertion that the customer is buying the result, not the hardware.",
    ],
    questions: [
      "How much of the gross margin comes from service and software rather than tools?",
      "What share of revenue depends on the leading-edge logic customers?",
      "Why does the diluted EPS line swing so far between quarters?",
      "How much inspection content does each new node add?",
    ],
  },
};
