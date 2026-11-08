import type { StockStory } from "./types";

export const IONQ: StockStory = {
  ticker: "IONQ",
  kicker: "Quantum · Computer Hardware",
  title: "IonQ rents out a 20-qubit machine and loses three dollars per dollar of sales",
  dek: "Revenue grew 376.5% to $380.4M on a trailing basis while the operating margin stayed at -333.9%. The positive net income in the same period came from below the operating line, not from selling quantum computing.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $380.4M, up 376.5%, and the latest quarter grew 336.0%.",
    "The operating margin is -333.9%, so operating costs are more than four times revenue.",
    "Free cash flow is -$688.5M while the balance sheet holds $932.3M of net cash.",
    "Net margin of 67.0% and EPS of $1.41 do not describe the operating business; they come from non-operating items.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1824920/000119312526071562/ionq-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001824920&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "IonQ builds general-purpose quantum computers and sells access to them. The machines it describes carry 20 qubits, and most customers reach them through third-party cloud marketplaces or through IonQ's own cloud service rather than buying a system outright. The company was founded in 2015, is based in College Park, Maryland, and employs 202 people.",
      "Trailing revenue is $380.4M, up 376.5% from a year earlier, and the latest quarter grew 336.0%. The operating margin is -333.9%. Both facts come from the same filing. Demand for quantum time is real and rising fast; the cost of building the machines and the team around them is rising faster still.",
      "At $32.62 the equity is valued at $14.1B, or 34.6x trailing sales. The shares sit near the bottom of a 52-week range that runs from $24.91 to $73.65, which is what a long-dated technology story looks like when the market re-prices the option rather than the business.",
    ],
    quote:
      "The question is not whether quantum computing eventually matters. It is whether this company can fund the years between here and there without selling so much equity that the eventual payoff is diluted away.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is compute time on a trapped-ion quantum processor, delivered as a service. A research group or an enterprise team writes a problem, sends it to the machine, and gets results back. The same hardware can be rented by many customers, which is why cloud distribution matters: it spreads a very expensive asset across more users without each one paying for a system.",
      "IonQ also sells systems and takes on development work, which is how a company at this stage turns engineering progress into revenue before a mass market exists. The customer base is therefore a mixture of research institutions, government-funded programmes and corporate innovation groups, each buying a different thing: access, a machine, or a jointly funded project.",
      "The filing reports one consolidated revenue line with no segment split, so a reader cannot see how much of the $380.4M is recurring cloud usage, how much is one-off hardware, and how much is contracted development. That distinction matters enormously for the quality of the growth.",
    ],
    bullets: [
      {
        title: "Cloud access",
        detail:
          "Rental of machine time through marketplaces and IonQ's own service. Recurring, but priced against free or subsidised alternatives.",
      },
      {
        title: "System sales",
        detail:
          "Outright hardware sales to institutions that want their own machine. Lumpy and capital-intensive to deliver.",
      },
      {
        title: "Funded development",
        detail:
          "Contracts and grants that pay for engineering work. Useful cash, but not evidence of a commercial market.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from access fees, system sales and development contracts. Gross margin is 24.1%, which is low for anything described as a computing platform. The reason is that each sale carries real hardware, cryogenics and engineering support, and the company is still learning to build at volume. A software company at this revenue level would report gross margin several times higher.",
      "Below the gross line sits a large fixed cost base of physicists, engineers and fabrication. That is what produces a -333.9% operating margin: the company spends far more on building the next machine than the current machines earn. The operating leverage only appears if revenue grows faster than that engineering base for several years running.",
      "The clearest way to see the strain is in the annual series. Revenue went from $2.1M in FY2021 to $130.0M in FY2025, a 180.5% compound rate over the period. Over the same five years the operating loss went from $38.7M to $633.7M. Growth has been extraordinary and the loss has grown faster in absolute terms.",
    ],
  },
  growth: {
    paragraphs: [
      "The historical rate is the easy part: 180.5% a year across the fiscal years reported, with the latest quarter at 336.0%. The hard part is deciding what the next leg depends on. Three things have to go right at once: the qubit count and error rates have to improve enough for problems that classical machines cannot solve, customers have to pay for that capability rather than test it, and the company has to deliver without its costs scaling one-for-one with revenue.",
      "Third-party estimates point to $510.7M of revenue this fiscal year and $857.9M next year. Those numbers imply continued rapid growth from a small base. They also imply that the losses persist: the same estimates put EPS at -$2.37 and then -$2.95, so the dollar loss is expected to widen even as revenue roughly doubles.",
      "What would slow it down is not usually a lack of interest. It is a technical plateau, a rival architecture reaching a milestone first, or buyers concluding that the current generation of machines does not shorten the path to a useful answer. Any of those would compress the pipeline long before it showed up in reported revenue.",
    ],
    bullets: [
      {
        title: "Technical milestones",
        detail:
          "Qubit count, gate fidelity and error correction are the real product roadmap. Commercial usefulness follows them, not the other way round.",
      },
      {
        title: "Government and enterprise funding",
        detail:
          "Public research budgets and corporate innovation spending pay for the current generation of machines.",
      },
      {
        title: "Cloud distribution",
        detail:
          "Marketplace listings lower the cost of reaching a developer, but they also make it easy to compare and switch.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly operating margin has ranged from -776.0% in Q2 FY2025 to -249.1% in Q3 FY2026. That is a genuine improvement, and it came with revenue of $173.8M in the quarter, the largest in the series. The direction is right; the level is still far from breakeven.",
      "The net line is the trap. Net margin is 67.0% and diluted EPS is $1.41, both positive, while the operating margin is deeply negative. Quarterly net income swings from -$1.87B in Q2 FY2026 to +$564.0M in Q3 FY2026 without a comparable swing in the operating result. Items outside the operating business are driving those numbers, and they will keep swinging.",
      "Return on equity of 5.1% against a return on invested capital of -24.5% makes the same point from another angle. Equity returns are being flattered by non-operating gains while the capital actually invested in the business is being consumed. Judge this company on the operating line and the cash burn.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is -$688.5M on a trailing basis, a -181.0% margin, and the annual figure deteriorated from -$34.3M in FY2021 to -$299.6M in FY2025. The gap between the operating loss and the cash burn is modest, which is normal for a company whose costs are salaries and equipment rather than inventory.",
      "The balance sheet holds $932.3M of net cash. That is the entire margin for error. Against a trailing burn of this size the runway is measured in a small number of years, and the company has no debt to restructure if the plan slips — only equity to issue.",
      "So the cash question is really a dilution question. Every year of losses before commercial scale is funded by selling shares into a $14.1B valuation, and the number of shares grows each time. A reader tracking this business should follow the share count as closely as the revenue line.",
    ],
  },
  valuation: {
    paragraphs: [
      "The reported P/E of 55.4x is close to meaningless here, because the earnings it divides were produced by non-operating items. EV/EBITDA is not available, and trailing sales are 34.6x. The only multiple that carries information is the sales multiple, and it is pricing a future that has not arrived.",
      "Compare the peers. Rigetti trades at 259.1x sales with $13.4M of revenue and a -727.6% operating margin. D-Wave trades at 276.3x sales with $12.4M of revenue. IonQ's 34.6x is the lowest of the three only because its revenue base is far larger; on any measure of profitability the three are in the same place.",
      "A sales multiple on a company with a -333.9% operating margin is a bet on the terminal margin, not the current one. To justify $14.1B, the business has to reach a revenue scale and a margin that no quantum company has yet demonstrated. Nothing in the report says that cannot happen; nothing in it says it will.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirteen analysts contribute to the attributed third-party consensus, with a mean target of $56.30 and a range of $40.00 to $75.00. The range is wide relative to the $32.62 close, which is what you expect when the valuation rests on a technology timeline rather than on next year's earnings.",
      "The estimates underneath are more informative than the target. Current-year revenue of $510.7M and EPS of -$2.37, then $857.9M and -$2.95, describe a business that nearly doubles in two years and still loses more money in year two than in year one. Only three analysts contribute to the current-year revenue estimate, so the figure is thin.",
      "Those are third-party forecasts, not a Stockmonk view. What they tell a reader is that the professional base case is growth without profit for the foreseeable period, which makes the cash runway the binding constraint on the story.",
    ],
  },
  risks: {
    intro:
      "The risks here are not the usual ones about demand. They are about time, funding and whether the technical milestones arrive before the balance sheet forces a decision.",
    items: [
      {
        title: "Commercialisation takes longer than the cash lasts",
        severity: "High",
        detail:
          "Useful quantum advantage may be years away, and the company is spending against that date now. A slip of two or three years is a funding event, not an inconvenience.",
        watch:
          "Error-correction milestones and the mix between paid pilots and funded research.",
      },
      {
        title: "Cash burn against a finite balance",
        severity: "High",
        detail:
          "Free cash flow is -$688.5M on a trailing basis against $932.3M of net cash. The company has no operating cushion.",
        watch:
          "Quarterly cash used in operations and any change in the pace of capital spending.",
      },
      {
        title: "Equity dilution",
        severity: "High",
        detail:
          "The gap between spending and revenue is closed with shares. Each raise transfers part of the eventual payoff away from existing holders.",
        watch:
          "Share count, any at-the-market programme, and the price at which new stock is issued.",
      },
      {
        title: "Architecture risk",
        severity: "Medium",
        detail:
          "Trapped ions compete with superconducting circuits and annealing approaches. A rival reaching a decisive milestone first would re-price the whole group.",
        watch:
          "Independent benchmarks on error rates and the size of problems solved, not vendor claims.",
      },
      {
        title: "Revenue quality",
        severity: "Medium",
        detail:
          "With one consolidated revenue line, hardware sales, cloud usage and development contracts are indistinguishable. Growth driven by one-off systems is worth less than growth in recurring usage.",
        watch:
          "Recurring revenue disclosure, backlog and the number of repeat customers.",
      },
      {
        title: "Valuation resets",
        severity: "Medium",
        detail:
          "A 34.6x sales multiple on a loss-making business is sensitive to sentiment about long-duration technology, independent of company progress.",
        watch:
          "The sales multiple against peers and the size of the cash position relative to the market value.",
      },
    ],
    watchlist: [
      {
        title: "Technical progress",
        detail:
          "Qubit count, fidelity and error correction are the only leading indicators that matter before revenue scales.",
      },
      {
        title: "Cash runway",
        detail:
          "The number of quarters of burn covered by $932.3M of net cash determines how much dilution is coming.",
      },
      {
        title: "Paying customers",
        detail:
          "The shift from funded pilots to repeat commercial usage is the first real evidence of a market.",
      },
      {
        title: "Share count",
        detail:
          "Track it beside revenue; per-share progress is what an owner actually receives.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "IonQ is a quantum hardware company with $380.4M of trailing revenue, a -333.9% operating margin and -$688.5M of free cash flow. The revenue growth is real. So is the cost of pursuing it. The positive net income in the trailing period is an accounting result from outside the operating business and should not be read as progress toward profitability.",
      "The useful framing is an option, not a forecast. A buyer at $14.1B is paying 34.6x sales for a claim on a technology that has not yet shown a commercial market at scale. The option can be worth a great deal; it can also expire before the company can fund it, which is why the cash balance and the share count belong in the same sentence as the technical roadmap.",
      "What is genuinely unknown is the timing and the shape of demand. Nothing in the financial statements reveals how much of the revenue is repeat usage, how large a problem a customer can currently solve, or what a customer would pay for a machine that is twice as capable. Those are the questions the next few filings should answer.",
    ],
    questions: [
      "What share of the $380.4M is recurring cloud usage rather than one-off systems or funded research?",
      "How many quarters of spending does $932.3M of net cash cover at the current burn?",
      "Which technical milestone would turn a pilot customer into a repeat buyer?",
      "How much has the share count grown over the last three years, and at what prices?",
    ],
  },
};
