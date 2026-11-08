import type { StockStory } from "./types";

export const AMSC: StockStory = {
  ticker: "AMSC",
  kicker: "Grid equipment · Wind and power systems",
  title: "AMSC's 8.4x earnings multiple is a one-off in disguise",
  dek: "Operating margin is 5.2% and net margin is 38.6%, because a single quarter carried a gain the business did not earn. Revenue has nearly tripled, but the return on capital has not.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $349.0M, up 31.1%, with operating margin at 5.2%.",
    "Net margin was 38.6% because one quarter reported $117.8M of net income on $74.5M of revenue.",
    "Return on invested capital is 3.5%, well below any reasonable cost of capital.",
    "The company holds $169.9M of net cash against a $1.13B market capitalisation, with 225 employees.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/880807/000143774926018542/amsc20260331_10k.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000880807&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "American Superconductor makes megawatt-scale electrical equipment for two markets. The Grid segment supplies voltage compensation, switchgear, grid-forming inverters and control systems that keep power networks stable. The Wind segment supplies the electrical control systems inside wind turbines, largely through licences and supply agreements with turbine manufacturers.",
      "The company is small: 225 employees, $349.0M of trailing revenue and a $1.13B market capitalisation. It is also one of the fastest-growing names in this coverage group, with revenue that went from $106.0M in FY2023 to $222.8M in FY2025 and $299.2M in FY2026. Growth of that magnitude in a company this size usually comes from a small number of large orders.",
      "The reported profit is where the story gets confusing. Trailing operating margin is 5.2%, which is thin for an equipment maker. Trailing net margin is 38.6%, which is higher than most software companies. Both figures are correct. The difference between them is a non-operating gain large enough to determine the reported earnings, and it makes the 8.4x P/E meaningless.",
    ],
    quote:
      "A small equipment company with a lumpy order book will occasionally book a quarter that does not resemble the business. The published multiple cannot tell the difference between that quarter and a year of ordinary trading.",
  },
  whatItDoes: {
    paragraphs: [
      "The Grid segment sells systems that stabilise electricity networks. A transmission operator with a weak or congested line can install a voltage compensator rather than build a new line, and a utility integrating wind or solar needs equipment that holds frequency and voltage steady as the generation mix changes. The same technology is used on ships for power protection.",
      "The Wind segment sells the electrical control package inside a turbine: the converters, controls and software that let a variable-speed machine connect to the grid. Much of this business is licensed to manufacturers in Asia and Europe, which means revenue depends on those manufacturers' production volumes and on the terms of the licences.",
      "The two segments share an engineering base in power electronics. That is the strategic logic: the same people who design a grid compensator can design a turbine converter, and the same customers, utilities and large industrial users, buy both. It is a sensible structure for a company of this size, and it also means the revenue is concentrated in a small number of projects.",
    ],
    bullets: [
      {
        title: "Grid",
        detail:
          "Voltage compensation, switchgear, grid-forming inverters and control systems for transmission and distribution networks.",
      },
      {
        title: "Wind",
        detail:
          "Electrical control systems and licences for wind turbine manufacturers. Revenue follows turbine production volumes.",
      },
      {
        title: "Scale",
        detail:
          "225 employees and a few large orders. A single project can move a year's revenue by a meaningful percentage.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue comes from selling engineered equipment on a project basis, plus licence and royalty income from the wind business. Gross margin of 28.0% is the spread between the contract price and the cost of power electronics, magnetics, enclosures and assembly. It is a reasonable margin for equipment, and it is not high enough to absorb much overhead.",
      "The overhead is what keeps the operating margin at 5.2%. A 28.0% gross margin leaves 22.8 points to cover engineering, sales, administration and the cost of supporting a global installed base. At $349.0M of revenue, that is roughly $80M of operating expense, and a company with 225 employees and a technical product can consume that easily.",
      "The operating leverage is therefore the thing to watch. Revenue nearly tripled from FY2023 to FY2026, and operating income went from negative $33.0M to positive $11.4M. That is a swing of $44M on $193M of additional revenue, which implies the incremental business carries a high margin. If revenue keeps growing, the operating margin should follow; if it stalls, the expense base is heavy relative to the gross profit.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 29.4% a year across the fiscal years in the data: $108.4M, $106.0M, $145.6M, $222.8M and $299.2M, then $349.0M trailing. The latest quarter grew 42.8% to $94.0M. Two flat years followed by three years of growth is the signature of an order cycle turning rather than a steady compounding business.",
      "The attributed consensus expects $90.6M of revenue and $0.24 of EPS next quarter, $99.5M and $0.28 the quarter after, $367.8M and $0.88 for the fiscal year, and $423.6M and $1.35 for the next. The EPS figures are the important part: $0.88 for the current year against a trailing $2.92 tells a reader exactly how much of the trailing earnings was a one-off.",
      "The demand drivers are grid investment, the connection of renewable generation, and the stabilisation equipment that goes with both. Data centres add to the load growth that motivates transmission spending, but indirectly: AMSC sells to the utility and the project developer, not to the data-centre operator. The brake is the order cycle. A pause in utility capital spending or a delay in a large wind programme moves revenue by a year.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a turnaround in progress. Operating income was negative $21.1M, negative $33.0M, negative $11.4M, negative $1.1M and positive $11.4M across five fiscal years. The company crossed into operating profit in FY2026 after four years of losses, and the margin is 5.2%, which is a start rather than an achievement.",
      "The net income line is not usable as a measure of the business. FY2026 net income was $133.8M against operating income of $11.4M. The third quarter alone reported $117.8M of net income on $74.5M of revenue with a 4.5% operating margin. Whatever produced that gain, it was not the sale of grid equipment, and it will not recur at that scale.",
      "Return on equity is 23.2% and return on invested capital 3.5%. The gap between them is the point. Equity is flattered by the one-off gain, while invested capital includes the cash and the operating assets that the business actually uses. A 3.5% return on capital is below the cost of capital for an industrial company, which means the business has not yet earned what it has spent.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $15.4M over the trailing period, a 4.4% margin, against a net margin of 38.6%. That comparison is the clearest evidence that the reported profit did not arrive in cash. The operating business generated a small amount of cash, and the rest of the net income was an accounting event.",
      "The annual history is modest in both directions: negative $19.9M, negative $23.7M, positive $1.2M, positive $25.9M and positive $18.3M. A company that has just turned cash-positive on $349.0M of revenue is at the beginning of its self-funding life, not the middle of it.",
      "The balance sheet holds $169.9M of net cash, about 6.2x EBITDA on the negative side, which is roughly 15% of the $1.13B market capitalisation. For a company with a lumpy order book and a 5.2% operating margin, that cash is the difference between waiting for a large order and needing one. It is the strongest part of the financial position.",
    ],
  },
  valuation: {
    paragraphs: [
      "Discard the 8.4x P/E. It divides a $23.39 share price by $2.92 of trailing EPS that includes a gain the operations did not produce. On the consensus for the current year, $0.88 of EPS, the multiple at the same price is closer to 27x, and on next year's $1.35 it is about 17x. Neither of those is the number shown, and both are more informative.",
      "The multiples that survive are EV/Sales at 2.8x and EV/EBITDA at 35.1x. The second is high because EBITDA is small relative to revenue: with a 5.2% operating margin, a small change in profit moves the ratio a long way. The first is the more stable measure, and 2.8x sales for a 28.0% gross margin equipment maker is a full price that assumes the margin expands.",
      "The peer comparison is not especially useful here, because AMSC's 5.2% operating margin puts it in a different category from the optical and semiconductor names. The relevant comparison is with other small grid equipment suppliers, which typically trade on the expectation of margin normalisation rather than on trailing profit. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Four analysts contribute to the attributed consensus, with a mean target of $61.75 and a range of $54.00 to $71.00. The mean is more than two and a half times the last close of $23.39. With four analysts, that is a narrow group's view rather than a market consensus, and the 31% spread between the low and high target is large for a company this size.",
      "The estimates are $90.6M of revenue and $0.24 of EPS next quarter, $99.5M and $0.28 the quarter after, $367.8M and $0.88 for the fiscal year, and $423.6M and $1.35 for the next. The analysts are modelling a business that grows revenue about 5% this year and 15% next while gradually improving the margin. That is a more modest picture than the trailing growth rate implies, and it is probably the right one to work from.",
    ],
  },
  risks: {
    intro:
      "AMSC's risks are a thin operating margin, a concentrated order book and a reported profit that flatters the underlying business.",
    items: [
      {
        title: "Thin operating margin",
        severity: "High",
        detail:
          "A 5.2% operating margin leaves little room for a project overrun, a price concession or an expense increase. Return on invested capital of 3.5% is below the cost of capital.",
        watch:
          "Gross margin by quarter and operating expense growth relative to revenue.",
      },
      {
        title: "Order concentration",
        severity: "High",
        detail:
          "A small number of large grid and wind projects can dominate a year. A delay moves revenue across periods.",
        watch:
          "Backlog disclosure and the size of the largest orders.",
      },
      {
        title: "Reported earnings quality",
        severity: "High",
        detail:
          "Net margin of 38.6% against an operating margin of 5.2% means reported profit is dominated by a one-off item. The P/E is not comparable across periods.",
        watch:
          "The reconciliation between operating income and net income in each filing.",
      },
      {
        title: "Wind licence dependence",
        severity: "Medium",
        detail:
          "The wind business depends on the production volumes and solvency of a small number of turbine manufacturers, several in markets with their own policy risk.",
        watch:
          "Licence revenue and the concentration of wind customers.",
      },
      {
        title: "Grid project timing",
        severity: "Medium",
        detail:
          "Utility transmission projects are planned years in advance and can be deferred by regulatory decisions or budget cycles.",
        watch:
          "Utility capital spending plans and the award timing of large grid projects.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The only measure that shows whether the revenue growth is turning into a viable business.",
      },
      {
        title: "One-off items",
        detail:
          "Until the gain is out of the trailing figures, every earnings multiple will overstate the business.",
      },
      {
        title: "Backlog",
        detail:
          "For a company with a lumpy order book and 225 employees, the pipeline is the forecast.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "American Superconductor sells grid stability equipment and wind turbine control systems. Revenue is $349.0M, up 31.1%, operating margin is 5.2%, free cash flow is $15.4M and net cash is $169.9M. It has just turned profitable at the operating line after four years of losses.",
      "The educational point is that net margin and operating margin answer different questions, and the gap between them is a diagnostic. When net margin is seven times operating margin, the business is not what produced the profit. That does not make the company bad; it makes the trailing multiple useless, and a reader who does not check will misprice it.",
      "What is not known is how much of the FY2026 net income was the one-off gain, how concentrated the order book is, and whether the operating margin can expand enough to earn a return above the cost of capital. The AI build-out adds load growth that supports grid investment, but AMSC sells to utilities and project developers, and their spending follows its own cycle.",
    ],
    questions: [
      "What exactly produced the $117.8M of net income in the third quarter?",
      "How concentrated is revenue among the largest grid and wind customers?",
      "What operating margin is needed to earn a return above the cost of capital?",
      "How much of the backlog is firm orders rather than framework agreements?",
    ],
  },
};
