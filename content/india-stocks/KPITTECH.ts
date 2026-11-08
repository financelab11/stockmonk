import type { StockStory } from "@/content/stocks/types";

export const KPITTECH: StockStory = {
  ticker: "KPITTECH",
  kicker: "Engineering R&D · Automotive embedded software",
  title: "KPIT's operating margin fell four points in a year, and that is a bench story rather than a demand story",
  dek: "Embedded software for cars, billed in dollars and euros and delivered from Pune. Revenue is ₹6,694 crore, free cash flow is ₹1,056 crore, and the shares have halved as the margin came off its peak.",
  readingMinutes: 11,
  takeaways: [
    "Trailing revenue is ₹6,694 crore, up 9.1%, with the latest quarter up 6.5% against a history of far faster growth.",
    "Operating margin fell from 21.1% in Q4 FY2025 to 15.3% in Q1 FY2027 before recovering to 15.8%.",
    "Free cash flow of ₹1,056 crore is 16.4% of revenue, well above the 8.0% net margin, because the business needs almost no capital.",
    "The shares are down 53.9% over a year and now trade at 12.6 times EBITDA, in line with the cheapest peer in the table.",
  ],
  filingUrl:
    "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=KPITTECH",
  irUrl: "https://www.kpit.com",
  bigPicture: {
    paragraphs: [
      "KPIT Technologies, founded in 1990 and based in Pune, writes software for vehicles. The work runs from advanced driver assistance and autonomous driving features to body electronics, chassis control, battery management, charging platforms and the electrical architecture that connects them. The customers are carmakers and their component suppliers in the Americas, the United Kingdom and Europe.",
      "Trailing revenue is ₹6,694 crore, up 9.1%, and the latest quarter, Q2 FY2027, reported ₹1,691 crore at a 15.8% operating margin with ₹121 crore of net profit. The shares closed at ₹543.90 for a market capitalisation of ₹14,806 crore, only 9% of the way up a 52-week range of ₹470.10 to ₹1,284.90, after falling 53.9% in a year.",
      "The question is what happened to the margin. It was 21.1% in Q4 FY2025 and 15.3% by Q1 FY2027. In a services business that move is rarely about pricing alone. It is usually a mix of utilisation, wage increases, the seniority of the people on the bench, and how much of the work is fixed-price rather than billed by the hour.",
    ],
    quote:
      "An engineering services firm sells the hours of people it has already hired. Between the hiring and the billing sits the bench, and the bench is where the margin goes.",
  },
  whatItDoes: {
    paragraphs: [
      "The work is deeply embedded in the vehicle. A carmaker defines a new electrical architecture, then needs software that makes the domain controllers talk to each other, that meets functional safety standards, and that can be validated across millions of kilometres of simulated and real driving. KPIT supplies engineers and platforms for that work, often as an extension of the customer's own engineering team.",
      "Two delivery models sit side by side. Time-and-materials contracts bill for people, which protects the supplier when scope grows. Fixed-price contracts bill for an outcome, which rewards efficiency but punishes estimation errors. A shift in the mix between the two changes the margin without any change in demand.",
      "The company employed 12,520 people at the last count. Against ₹6,694 crore of revenue, that is about ₹53 lakh of revenue per employee. That single ratio links hiring, utilisation and pricing: if the same people bill more days, or bill at a higher rate, the ratio rises and margin follows.",
    ],
    bullets: [
      {
        title: "ADAS and autonomous driving",
        detail:
          "Perception, planning, system engineering and functional safety work for driver-assistance programmes.",
      },
      {
        title: "Vehicle software platforms",
        detail:
          "Operating systems, middleware, AUTOSAR-compliant stacks and over-the-air update capability.",
      },
      {
        title: "Electrification",
        detail:
          "Battery management, charging platforms and vehicle control units for electric models.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin is 35.1%. That is the revenue left after paying the engineers who do the work, and it is the number that tells you how much the delivery model earns before sales, administration and facilities. Operating margin of 12.7% is what remains after the sales team, the offices, the tools and the management layer.",
      "The cost base is people, and people are paid in rupees while the revenue is invoiced in dollars and euros. That mismatch is the structural advantage of an Indian engineering exporter: when the rupee weakens, the same overseas invoice buys more Indian salary. When the rupee strengthens, the reverse happens, and no one in Pune can do anything about it.",
      "Utilisation is the second lever. Every engineer on the bench is a cost with no matching revenue. In a year when a large programme winds down before the next one ramps up, utilisation falls and the margin with it, even if the order book is healthy.",
      "The third lever is the pyramid. A team with many junior engineers and a few seniors costs less per hour than one weighted toward experience. Firms push work down the pyramid as a programme matures, which widens the margin without raising the price. A sudden need for senior people reverses that and compresses it.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from ₹2,036 crore in FY2021 to ₹6,455 crore in FY2026, and operating income from ₹307 crore to ₹1,220 crore. Net income peaked at ₹840 crore in FY2025 and then fell to ₹637 crore, even though revenue rose. Earnings per share went from ₹30.63 to ₹23.25 in the same year.",
      "The latest quarter grew 6.5% against a five-year record of far faster expansion. That is the important change: the growth rate has normalised while the cost base was built for the earlier pace. The third-party estimates expect ₹6,798 crore of revenue and ₹20.78 of earnings per share this year, then ₹7,429 crore and ₹29.98.",
      "What would slow it: a cut in research budgets at carmakers, which reaches suppliers before it reaches the headlines; a delay in a large platform programme; visa and onsite costs in the United States and Europe; and pricing pressure from larger Indian IT firms moving into automotive engineering.",
    ],
    bullets: [
      {
        title: "Programme wins",
        detail:
          "A new vehicle platform can run for five years or more, so each award is a multi-year revenue stream.",
      },
      {
        title: "Scope expansion",
        detail:
          "Existing customers add domains and models, which grows revenue without a new sales cycle.",
      },
      {
        title: "Offshore shift",
        detail:
          "Moving work from a customer site to India lowers the cost of delivery and widens the margin.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows the compression clearly. Operating income was ₹1,230 crore in FY2025 and ₹1,220 crore in FY2026 on revenue that rose from ₹5,842 crore to ₹6,455 crore. In margin terms the company gave up about two points of operating margin while growing 10%.",
      "The quarterly series is sharper. Operating margin was 20.7% in Q3 FY2025, 21.1% in Q4 FY2025, 19.2%, 18.8%, 19.2%, 18.5%, then 15.3% in Q1 FY2027 and 15.8% in Q2 FY2027. Revenue per quarter rose steadily from ₹1,478 crore to ₹1,691 crore throughout, so the drop was not caused by a fall in volume.",
      "Return on equity is 15.3% and return on invested capital is 26.0%. The gap is the cash on the balance sheet and the absence of debt. This is a high-return business on capital employed, which is a characteristic of services: the asset is the people and the client relationships, and neither sits on the balance sheet.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was ₹568 crore in FY2021, ₹406 crore, ₹335 crore, ₹847 crore, ₹1,262 crore and ₹1,056 crore in FY2026. That is 16.4% of revenue against a net margin of 8.0%, a gap that comes from depreciation and from collections arriving faster than costs are paid.",
      "The balance sheet holds ₹235 crore of net cash, and interest cover is 12.9 times. For a services firm that is the right shape: no debt, a cash buffer and a dividend capacity that does not depend on a lender.",
      "What the cash supports is hiring ahead of demand. An engineering firm has to recruit and train people before a contract starts, and that investment shows up as a cost before it shows up as revenue. The free cash flow is the cushion that lets the company do it without borrowing.",
    ],
  },
  valuation: {
    paragraphs: [
      "At ₹543.90 the shares trade at 27.8 times trailing earnings, 12.6 times EBITDA, 2.2 times sales and 14.0 times free cash flow, with a 7.1% free-cash-flow yield. After a 53.9% fall, the multiple is no longer a growth premium.",
      "The peer table puts Cyient at 12.6 times EBITDA and Sonata at 9.2, with Newgen at 12.4 and Intellect at 10.9. KPIT now sits level with Cyient despite a much higher return on invested capital, which is the market's way of saying that the growth premium has been removed.",
      "The earnings multiple of 27.8 rests on a depressed base. If the consensus figure of ₹29.98 for next year is achieved, the multiple falls to about 18 times without any change in the price. If the margin stays at 15.8%, it does not.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-one analysts contribute to the third-party consensus, with a mean target of ₹618.43 and a range of ₹470.00 to ₹870.00. The low end is below the current price, which is unusual and tells you that some analysts think the de-rating is not finished.",
      "The estimate set has ₹6,798 crore of revenue and ₹20.78 of earnings per share this year, then ₹7,429 crore and ₹29.98. For the next two quarters it expects ₹1,703 crore with ₹5.71 and ₹1,748 crore with ₹6.36. The step-up from ₹20.78 to ₹29.98 in one year assumes the margin recovers toward its old level.",
      "That is third-party work shown for context, not a Stockmonk view. The most useful check is whether the recovery is already visible in the quarterly margin: 15.3% then 15.8% is a stabilisation, not yet a recovery.",
    ],
  },
  risks: {
    intro:
      "The risks for an engineering exporter are concentrated in a handful of customer programmes and in the cost of the people delivering them.",
    items: [
      {
        title: "Client concentration",
        severity: "High",
        detail:
          "A few large automotive programmes can account for a substantial share of revenue. A platform cancellation removes revenue and leaves the bench behind.",
        watch:
          "The share of revenue from the top five and top ten clients.",
      },
      {
        title: "Utilisation and wage costs",
        severity: "High",
        detail:
          "Salary increases arrive on schedule while billing rates are renegotiated annually. A quarter with a deep bench or a senior-heavy pyramid compresses margin quickly.",
        watch:
          "Operating margin each quarter and any disclosed utilisation or headcount addition.",
      },
      {
        title: "Automotive research budgets",
        severity: "High",
        detail:
          "Carmakers cut engineering spending before they cut production. A model programme delayed by a year delays the software work with it.",
        watch:
          "Revenue growth from the largest accounts and commentary on programme ramp-ups.",
      },
      {
        title: "Currency",
        severity: "Medium",
        detail:
          "Revenue is invoiced in dollars and euros while most costs are in rupees. A stronger rupee reduces the rupee value of the same contract.",
        watch:
          "The realised rupee-dollar and rupee-euro rates against the prior quarter.",
      },
      {
        title: "AI and tooling",
        severity: "Medium",
        detail:
          "Code generation and automated testing can reduce the hours a programme needs, which cuts revenue in a time-and-materials model unless it is offset by more scope.",
        watch:
          "Revenue per employee and any shift toward fixed-price or outcome-based contracts.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The single number that captures utilisation, pricing and the pyramid at once.",
      },
      {
        title: "Revenue per employee",
        detail:
          "About ₹53 lakh today. A falling ratio means hiring is outrunning billing.",
      },
      {
        title: "Top-client revenue",
        detail:
          "Concentration decides how much a single programme cancellation can hurt.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "KPIT is a focused automotive engineering firm with ₹6,694 crore of revenue, a 26.0% return on invested capital, ₹1,056 crore of free cash flow and no net debt. The franchise is real and the cash conversion is better than most Indian IT services companies.",
      "What is not known is the client concentration, the utilisation rate, and the split between time-and-materials and fixed-price work. Those three numbers explain the four-point margin decline better than any commentary about demand.",
      "The educational point is that a services business is a spread on people. Revenue per employee, utilisation and billing rate are the unit economics, and a margin move of four points is usually visible in them before it appears in the headline.",
    ],
    questions: [
      "What share of revenue comes from the top five clients?",
      "What was utilisation in the last two quarters, and how does it compare with the prior year?",
      "How much of revenue is fixed-price rather than time-and-materials?",
      "Is the margin recovery in the estimates already visible in the quarterly numbers?",
    ],
  },
};
