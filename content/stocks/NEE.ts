import type { StockStory } from "./types";

export const NEE: StockStory = {
  ticker: "NEE",
  kicker: "Utilities · Regulated electric and renewables",
  title: "NextEra is a rate base that grows, paid for with other people's money",
  dek: "A regulated utility earns an allowed return on the capital it has invested, so growth means spending more. That is why $108.4B of net debt and $1.4B of free cash flow describe a healthy company rather than a distressed one.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $27.8B, up 10.9%, with a 31.2% operating margin and 23.8% net margin.",
    "Free cash flow is only $1.4B, a 4.9% margin, because most operating cash goes back into the asset base.",
    "Net debt is $108.4B, or 10.0x EBITDA. That leverage is the financing model, not a warning sign.",
    "At $86.95 the shares trade at 27.6x earnings and 26.9x EV/EBITDA, with a 133.1x price-to-free-cash-flow ratio.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/753308/000075330826000015/nee-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000753308&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "NextEra Energy is two businesses under one holding company. The regulated utility side owns generation, transmission and distribution assets and sells electricity to customers at prices approved by state regulators. The competitive side builds and operates wind and solar farms and sells the output under long-term contracts to utilities and large buyers.",
      "The regulated half is the part that explains the balance sheet. A utility is allowed to earn a return on its rate base, which is roughly the capital it has invested in plants, poles and wires. To earn more, it has to invest more. Every dollar of new capital that goes into service adds to the earnings base, and the regulator decides what return is allowed on it.",
      "That mechanic produces a company that grows revenue steadily, borrows heavily and reports very little free cash flow. NextEra is valued at $182.4B at $86.95 a share, with revenue of $27.8B, an operating margin of 31.2% and $108.4B of net debt. The shares have traded between $74.41 and $98.75 over the past year, a little above the midpoint.",
    ],
    quote:
      "For a regulated utility, capital spending is not a cost to be minimised. It is the mechanism by which earnings grow, as long as the regulator allows the spending into rates.",
  },
  whatItDoes: {
    paragraphs: [
      "The regulated utility serves retail customers in its service territory: households, businesses and industrial plants. It has a legal monopoly on distribution in that territory, and in exchange the state commission sets the prices it can charge and the return it can earn. The customer cannot switch, and the company cannot set its own price.",
      "The competitive generation business is a different animal. Wind and solar projects are built with a specific capital cost and sold under a power purchase agreement that fixes the price for a decade or more. The developer earns the difference between the contracted price and the cost of building and running the project, plus whatever tax attributes the financing structure can use.",
      "The two halves fit together because the competitive business gives the regulated utility a pipeline of projects to buy or contract with, and the regulated balance sheet gives the group access to capital at a lower cost than a standalone developer. Whether that combination is worth a premium is the question the valuation is asking.",
    ],
    bullets: [
      {
        title: "Regulated utility",
        detail:
          "Monopoly distribution and generation. Earnings are the rate base times the return the commission allows.",
      },
      {
        title: "Competitive renewables",
        detail:
          "Wind, solar and storage sold under long-term contracts. Returns depend on construction cost and contract price.",
      },
      {
        title: "Gas infrastructure",
        detail:
          "Pipeline and storage investments that earn a regulated or contracted return, with less exposure to weather.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The regulated revenue model is unusual, and the reported margins look strange as a result. A utility recovers fuel and purchased power through separate cost-recovery mechanisms, so those costs are largely passed through rather than absorbed. That is why NextEra reports a gross margin of 83.6% and an operating margin of 31.2%: most of what sits between the two lines is operating expense, depreciation and the costs the regulator allows it to recover.",
      "The earnings formula is short. Rate base, multiplied by the allowed return on equity, gives the permitted profit. Operating costs that the commission accepts are recovered on top. Anything the commission disallows comes out of shareholder returns. A rate case is therefore not a negotiation about price in the ordinary sense; it is an audit of which costs are legitimate and what return is fair.",
      "The competitive business earns a different way. A wind farm with a 20-year contract has a known revenue stream and a mostly fixed cost base, so the return is set at the moment the project is priced. The risk is construction cost, transmission interconnection, and whether the contract counterparty pays.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew at a 6.7% compound rate from $18.8B in FY2021 to $25.8B in FY2025, and the trailing $27.8B is 10.9% higher again. For a utility that is fast. Regulated revenue normally grows with customer count and with the rate increases approved to recover new investment, both of which are slow.",
      "Third-party estimates point to $30.6B of revenue and $4.03 of EPS this fiscal year, then $34.2B and $4.38. The pattern is steady single-digit to low-double-digit growth, which is exactly what a rate-base compounder is supposed to deliver.",
      "The constraint on that growth is not demand. It is the regulator and the capital market. Each new project needs approval, and each dollar of it needs financing. When interest rates rise, the cost of the debt that funds the rate base rises before the allowed return catches up, and the spread between the two narrows.",
    ],
    bullets: [
      {
        title: "Rate base growth",
        detail:
          "Approved capital investment enters the rate base and earns the allowed return. This is the primary earnings driver.",
      },
      {
        title: "Load growth",
        detail:
          "Data centres, electrification and population growth raise long-run demand, which supports new investment.",
      },
      {
        title: "Renewable backlog",
        detail:
          "Contracted projects under construction convert capital spending into revenue when they enter service.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating income went from $2.91B in FY2021 to $10.24B in FY2023, then settled at $7.48B and $8.28B. The FY2023 jump is the year the margin structurally changed, and the level has held since. Net income followed: $3.57B, $4.15B, $7.31B, $6.95B and $6.83B.",
      "The trailing quarter shows why operating margin and net income are different questions for a utility. Q3 FY26 produced $8.09B of revenue at a 32.1% operating margin, a perfectly healthy operating result, and a net loss of $247M. The operating business was fine; something below the operating line, whether interest, a mark on hedges or an impairment, took the quarter negative.",
      "Return on equity is 8.9% and return on invested capital is 3.7%. The gap between those two numbers is leverage. A utility earns a regulated return on equity of roughly high single digits and funds about half the balance sheet with debt, so the return on total capital is structurally lower than the return on equity.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow of $1.37B is a 4.9% margin, and the price-to-free-cash-flow ratio of 133.1x tells you the market is not valuing the company on that number. It should not be. A utility in a capital programme spends more on new assets than it depreciates, so free cash flow after capital expenditure is small or negative by design.",
      "The relevant question is whether the commission lets the company earn a return on the money it is spending. If it does, negative free cash flow is a sign of growth rather than distress, because the spending creates a regulated asset that generates earnings for decades. If it does not, the same spending destroys value.",
      "Net debt of $108.4B at 10.0x EBITDA is high in absolute terms and normal for the sector. The dividend is paid from operating cash flow plus new financing, and the 2.8% yield is the return a shareholder receives while waiting for the rate base to compound.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $86.95 the shares trade at 27.6x trailing earnings, 26.9x EV/EBITDA and 10.4x sales, with a 0.8% free-cash-flow yield. Every one of those multiples is high next to the industrial companies in the wider coverage universe, and all of them are consistent with a low-risk, low-growth, capital-intensive business.",
      "The comparison inside the sector is more useful. Constellation trades at 18.8x EV/EBITDA and Vistra at 11.3x, because both sell merchant power with no regulated return. NextEra's premium is the price of that regulated certainty, and the risk is that a higher cost of debt compresses the spread the regulated return depends on.",
    ],
  },
  analysts: {
    paragraphs: [
      "Nineteen analysts are included in the attributed consensus. The mean target is $94.00, inside a range of $56.00 to $110.00. That range is unusually wide for a regulated utility, and the low end reflects a genuine disagreement about the value of the competitive renewables business rather than about the regulated one.",
      "Estimates call for $30.6B of revenue and $4.03 of EPS this year, then $34.2B and $4.38. The next quarter is forecast at $7.96B and $0.57 across 12 analysts, which is far below the annual EPS estimate because utility earnings are seasonal: summer cooling demand and winter heating demand do not fall evenly across the calendar.",
    ],
  },
  risks: {
    intro:
      "NextEra's risks are regulatory, financial and executional. The demand for electricity is not in doubt; the return the company is allowed to earn on serving it is.",
    items: [
      {
        title: "Rate-case outcomes",
        severity: "High",
        detail:
          "A commission can disallow costs, lower the allowed return or delay recovery. Each of those decisions removes earnings from assets that already exist.",
        watch: "Filed rate cases, intervenor testimony and the allowed return on equity in each jurisdiction.",
      },
      {
        title: "Interest rates",
        severity: "High",
        detail:
          "The company borrows to build. Higher rates raise the cost of new debt before the allowed return adjusts, and they also lower the value the market puts on a long-dated earnings stream.",
        watch: "Weighted average cost of debt, maturity schedule and the spread between allowed and actual returns.",
      },
      {
        title: "Construction and interconnection",
        severity: "Medium",
        detail:
          "Renewable projects depend on transmission interconnection queues and on equipment costs that can move between contract signing and completion.",
        watch: "Project backlog, in-service dates and any impairments on cancelled projects.",
      },
      {
        title: "Weather and load",
        severity: "Medium",
        detail:
          "Revenue depends on heating and cooling demand, and a mild season reduces volumes. Weather normalisation only goes so far.",
        watch: "Weather-normalised sales growth and degree-day comparisons.",
      },
      {
        title: "Policy support for renewables",
        severity: "Medium",
        detail:
          "The competitive business relies on tax attributes and on policies that support renewable generation. A change in either alters project economics.",
        watch: "Tax credit rules, state renewable portfolio standards and contract pricing.",
      },
    ],
    watchlist: [
      {
        title: "Rate base",
        detail:
          "The number that earnings are calculated from. It should grow faster than the capital spending that feeds it.",
      },
      {
        title: "Allowed versus earned return",
        detail:
          "A utility that earns less than its allowed return is leaving money on the table.",
      },
      {
        title: "Financing plan",
        detail:
          "The mix of debt, equity and project financing determines how much dilution each new project costs.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "NextEra is a regulated utility with a large competitive renewables arm attached. Revenue of $27.8B, an operating margin of 31.2% and $6.8B of net income describe a profitable, low-volatility business that grows by investing.",
      "The financial statements look alarming if read with industrial-company habits. Ten turns of leverage, a 4.9% free-cash-flow margin and a 3.7% return on invested capital are all normal for a regulated network that funds itself with debt and earns a return set by a commission.",
      "The reader's job is to decide whether the allowed return exceeds the cost of capital, because that spread is the entire investment case. Everything else, from the renewables backlog to the load growth forecasts, is a means of putting more capital to work at that spread.",
    ],
    questions: [
      "What return on equity has each jurisdiction actually allowed, and how does it compare with the cost of debt?",
      "How much of the capital plan is already approved and included in rates?",
      "What share of earnings comes from the competitive business rather than the regulated one?",
      "What would a two-point rise in the cost of new debt do to earnings per share?",
    ],
  },
};
