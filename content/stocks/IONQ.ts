import type { StockStory } from "./types";

export const IONQ: StockStory = {
  "ticker": "IONQ",
  "kicker": "Quantum · Computer Hardware",
  "title": "IonQ rents out a 20-qubit machine and loses three dollars per dollar of sales",
  "dek": "Revenue grew 376.5% to $380.4M on a trailing basis while the operating margin stayed at -333.9%. The positive net income in the same period came from below the operating line, not from selling quantum computing.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue of $380.4M grew 376.5%, and the September quarter alone produced $173.8M, more than the whole of FY2025.",
    "The operating loss is 333.9% of revenue and free cash flow is -$688.5M, so growth is being bought with cash at a steep rate.",
    "Net cash of $932.3M covers a little over a year of the trailing burn, which makes funding a nearer question than the technology roadmap.",
    "Fourteen analysts carry a $54 mean target against a $23 price while cutting 30-day EPS estimates by 46.3%."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1824920/000119312526071562/ionq-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001824920&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Trapped-ion compute sold by the hour is the product, and the revenue it produced in the September quarter was $173.8M against $39.9M a year earlier. That is a 336% increase in one quarter, and it is larger than the whole of FY2025. The operating loss in the same quarter was 249.1% of revenue. Both numbers are real, and the gap between them is the investment case: demand is arriving faster than the cost base can be brought under control.",
      "The company sells three different things through one reported line: access to a machine, the machine itself, and funded development work. Research institutions, government programmes and corporate innovation groups buy different combinations, and the quality of the revenue depends on which dominates. A system sale is lumpy and hardware-heavy; cloud usage is recurring and priced against free or subsidised alternatives. The accounts do not separate them, and that ambiguity is why the sales multiple is the only valuation measure with any purchase.",
      "The valuation has no earnings anchor. At 26.1x sales, the market value of $10.9B is a claim on a commercial market that does not yet exist at scale, and the P/E of 42.5x is calculated on a net profit that came from below the operating line. Rigetti produced $13.4M of revenue and D-Wave $12.4M, each at an operating loss larger than 700% of sales. IonQ's revenue is thirty times larger, and its loss rate is less than half Rigetti's and a quarter of D-Wave's."
    ],
    "quote": "IonQ has proved it can sell quantum computing before it has proved the machines can solve problems worth paying for repeatedly."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product is compute time on a trapped-ion quantum processor, delivered as a service. A research group or an enterprise team writes a problem, sends it to the machine, and gets results back. The same hardware can be rented by many customers, which is why cloud distribution matters: it spreads a very expensive asset across more users without each one paying for a system.",
      "IonQ also sells systems and takes on development work, which is how a company at this stage turns engineering progress into revenue before a mass market exists. The customer base is therefore a mixture of research institutions, government-funded programmes and corporate innovation groups, each buying a different thing: access, a machine, or a jointly funded project.",
      "The filing reports one consolidated revenue line with no segment split, so a reader cannot see how much of the $380.4M is recurring cloud usage, how much is one-off hardware, and how much is contracted development. That distinction matters enormously for the quality of the growth."
    ],
    "bullets": [
      {
        "title": "Cloud access",
        "detail": "Rental of machine time through marketplaces and IonQ's own service. Recurring, but priced against free or subsidised alternatives."
      },
      {
        "title": "System sales",
        "detail": "Outright hardware sales to institutions that want their own machine. Lumpy and capital-intensive to deliver."
      },
      {
        "title": "Funded development",
        "detail": "Contracts and grants that pay for engineering work. Useful cash, but not evidence of a commercial market."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue comes from access fees, system sales and development contracts. Gross margin is 24.1%, which is low for anything described as a computing platform. The reason is that each sale carries real hardware, cryogenics and engineering support, and the company is still learning to build at volume. A software company at this revenue level would report gross margin several times higher.",
      "Below the gross line sits a large fixed cost base of physicists, engineers and fabrication. That is what produces a -333.9% operating margin: the company spends far more on building the next machine than the current machines earn. The operating leverage only appears if revenue grows faster than that engineering base for several years running.",
      "The clearest way to see the strain is in the annual series. Revenue went from $2.1M in FY2021 to $130.0M in FY2025, a 180.5% compound rate over the period. Over the same five years the operating loss went from $38.7M to $633.7M. Growth has been extraordinary and the loss has grown faster in absolute terms."
    ]
  },
  "growth": {
    "paragraphs": [
      "System sales explain the step changes, and cloud usage explains the base. The September quarter's $173.8M is more than three times the June quarter's $80.0M, a jump that a recurring subscription base does not produce; a small number of large orders does. FY2025 revenue of $130.0M grew 201.9%, and the trailing figure of $380.4M grew 376.5%, so each period has been dominated by a different set of deals.",
      "The estimates assume the step changes keep coming. FY2026 revenue is modelled at $510.5M, up 292.6%, and FY2027 at $874.1M, up 71.2%. Those are not penetration curves; they are forecasts of continued large orders. The EPS estimates are negative in both years, at -$2.23 and -$3.14, so the consensus is explicitly assuming that growth does not bring profitability within the forecast window."
    ],
    "bullets": [
      {
        "title": "Revenue mix",
        "detail": "Cloud access, system sales and funded development are reported as one line, so the recurring share of $380.4M is not visible."
      },
      {
        "title": "Cash burn",
        "detail": "Free cash flow of -$688.5M against $932.3M of net cash leaves a little over a year of funding at the trailing rate."
      },
      {
        "title": "Milestones",
        "detail": "Error correction, not revenue, is the technical gate; a paid pilot becomes a repeat buyer only when the machine solves a problem the customer cannot solve otherwise."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The loss widened as the revenue grew, which is the opposite of operating leverage. FY2025 revenue of $130.0M came with a 487.4% operating loss; the trailing period produced $380.4M with a 333.9% loss. The percentage improved because revenue grew faster than the loss, but the absolute loss still rose. The gross margin of 24.1% leaves too little after hardware, cryogenics and engineering support to cover a fixed base of physicists and fabrication.",
      "The net line is not a guide to the business. Net margin of 67.1% in the trailing period and positive EPS in three of the last four quarters come from items below the operating line, and the quarterly EPS has ranged from $3.07 to -$5.08. Return on invested capital of -25.1% is the cleaner measure. Against Rigetti's -14.3% and D-Wave's -12.1%, IonQ is burning capital at a faster rate relative to its invested base."
    ]
  },
  "cash": {
    "paragraphs": [
      "Six hundred and eighty-eight million dollars of negative free cash flow is the number that governs the story. Capex is small at $16.4M in FY2025, so almost all of the burn is operating: people, fabrication and the cost of running machines that are not yet generating repeat revenue. Against $932.3M of net cash, the trailing burn covers a little over a year at the current rate, and the September quarter alone used $331.9M.",
      "The funding model is equity, not debt. A company with a negative operating margin of this size cannot service leverage, and the reported balance sheet shows no meaningful debt. That makes the share count as important as the cash balance: each raise transfers part of the eventual payoff to new holders, and the price at which the stock is issued decides how much. At $23, against a 52-week high of $74, the currency is cheaper than it was."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Twenty-six times sales is an extreme multiple in absolute terms, and the peer multiples are not comparable, because the other two quantum names lose money at a rate that makes an earnings multiple meaningless. Rigetti produced $13.4M of revenue at a -727.6% operating margin, D-Wave $12.4M at -1372.9%. IonQ's $380.4M at -333.9% is a different scale of business. The peer median revenue growth is 18.0%, which says nothing useful about a company growing 376.5%.",
      "The multiple assumes the revenue becomes recurring and the gross margin rises. At a 24.1% gross margin, every dollar of revenue carries about 76 cents of delivery cost, so operating leverage has to come from scale in fabrication and from a mix shift toward cloud usage. If the September quarter was a system sale, the margin will fall back; if it was cloud usage, the base is larger than it looks. The reported line cannot distinguish them.",
      "What would justify the price is a 2027 revenue base near the $874.1M estimate with a gross margin moving toward software levels. What would break it is a funding raise at a lower price before either of those appears. The P/E of 42.5x should be ignored; it is calculated on a profit that the operating business did not earn. The cash balance buys time, and the multiple already assumes that time produces a market."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Fourteen analysts cover IonQ, with a mean target of $54 against a $23 price and a range of $40 to $70. A mean more than twice the market price is not a forecast anyone can act on literally; it is a statement that the published models are built on a longer timeline than the share price is.",
      "The estimate revisions tell the opposite story. EPS forecasts have been cut 46.3% over 30 days and 50.3% over 60, and the quarterly EPS has swung from $3.07 to -$5.08. FY2026 EPS of -$2.23 and FY2027 of -$3.14 assume the loss per share widens as revenue grows. The consensus is therefore positive on the technology and negative on the near-term economics, a difficult combination to price."
    ]
  },
  "risks": {
    "intro": "The risks here are not the usual ones about demand. They are about time, funding and whether the technical milestones arrive before the balance sheet forces a decision.",
    "items": [
      {
        "title": "Commercialisation takes longer than the cash lasts",
        "severity": "High",
        "detail": "Useful quantum advantage may be years away, and the company is spending against that date now. A slip of two or three years is a funding event, not an inconvenience.",
        "watch": "Error-correction milestones and the mix between paid pilots and funded research."
      },
      {
        "title": "Cash burn against a finite balance",
        "severity": "High",
        "detail": "Free cash flow is -$688.5M on a trailing basis against $932.3M of net cash. The company has no operating cushion.",
        "watch": "Quarterly cash used in operations and any change in the pace of capital spending."
      },
      {
        "title": "Equity dilution",
        "severity": "High",
        "detail": "The gap between spending and revenue is closed with shares. Each raise transfers part of the eventual payoff away from existing holders.",
        "watch": "Share count, any at-the-market programme, and the price at which new stock is issued."
      },
      {
        "title": "Architecture risk",
        "severity": "Medium",
        "detail": "Trapped ions compete with superconducting circuits and annealing approaches. A rival reaching a decisive milestone first would re-price the whole group.",
        "watch": "Independent benchmarks on error rates and the size of problems solved, not vendor claims."
      },
      {
        "title": "Revenue quality",
        "severity": "Medium",
        "detail": "With one consolidated revenue line, hardware sales, cloud usage and development contracts are indistinguishable. Growth driven by one-off systems is worth less than growth in recurring usage.",
        "watch": "Recurring revenue disclosure, backlog and the number of repeat customers."
      },
      {
        "title": "Valuation resets",
        "severity": "Medium",
        "detail": "A 34.6x sales multiple on a loss-making business is sensitive to sentiment about long-duration technology, independent of company progress.",
        "watch": "The sales multiple against peers and the size of the cash position relative to the market value."
      }
    ],
    "watchlist": [
      {
        "title": "Technical progress",
        "detail": "Qubit count, fidelity and error correction are the only leading indicators that matter before revenue scales."
      },
      {
        "title": "Cash runway",
        "detail": "The number of quarters of burn covered by $932.3M of net cash determines how much dilution is coming."
      },
      {
        "title": "Paying customers",
        "detail": "The shift from funded pilots to repeat commercial usage is the first real evidence of a market."
      },
      {
        "title": "Share count",
        "detail": "Track it beside revenue; per-share progress is what an owner actually receives."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "IonQ is a quantum hardware company with $380.4M of trailing revenue, a -333.9% operating margin and -$688.5M of free cash flow. The revenue growth is real. So is the cost of pursuing it. The positive net income in the trailing period is an accounting result from outside the operating business and should not be read as progress toward profitability.",
      "The useful framing is an option, not a forecast. A buyer at $14.1B is paying 34.6x sales for a claim on a technology that has not yet shown a commercial market at scale. The option can be worth a great deal; it can also expire before the company can fund it, which is why the cash balance and the share count belong in the same sentence as the technical roadmap.",
      "What is genuinely unknown is the timing and the shape of demand. Nothing in the financial statements reveals how much of the revenue is repeat usage, how large a problem a customer can currently solve, or what a customer would pay for a machine that is twice as capable. Those are the questions the next few filings should answer."
    ],
    "questions": [
      "What share of the $380.4M is recurring cloud usage rather than one-off systems or funded research?",
      "How many quarters of spending does $932.3M of net cash cover at the current burn?",
      "Which technical milestone would turn a pilot customer into a repeat buyer?",
      "How much has the share count grown over the last three years, and at what prices?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
