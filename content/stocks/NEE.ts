import type { StockStory } from "./types";

export const NEE: StockStory = {
  "ticker": "NEE",
  "kicker": "Utilities · Regulated electric and renewables",
  "title": "NextEra is a rate base that grows, paid for with other people's money",
  "dek": "A regulated utility earns an allowed return on the capital it has invested, so growth means spending more. That is why $108.4B of net debt and $1.4B of free cash flow describe a healthy company rather than a distressed one.",
  "readingMinutes": 9,
  "takeaways": [
    "First-quarter FY26 revenue of $6.1B came with a 36.2% operating margin and $1.04 of EPS; trailing revenue is $26.0B, up 8.3%.",
    "Net debt is $101.1B, or 6.7x EBITDA, which is normal for a regulated utility funding a capital programme rather than a warning sign.",
    "Free cash flow and capex are not reported, so the $12.5B of FY2025 operating cash flow is the only cash measure available.",
    "At {{pe}} earnings and {{evEbitda}} EV/EBITDA, the shares carry a premium to Duke at 19.6x and 11.2x despite a lower 5.2% return on invested capital."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/753308/000075330826000015/nee-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000753308&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "NextEra's regulated utility and its renewables arm share one balance sheet, and the first quarter of 2026 shows how that arrangement earns: $6.1B of revenue, a 36.2% operating margin and $1.04 of EPS. Trailing revenue is $26.0B, 8.3% above a year earlier, and the net margin is 31.5%. The result matters less for its size than for its composition, because a regulated utility earns a return on the capital it has invested rather than on the volume it sells.",
      "The group combines a regulated utility with a competitive renewables arm and a smaller gas infrastructure book. The regulated utility has a legal monopoly on distribution in its territory and earns whatever return the state commission allows; the renewables arm builds wind, solar and storage under long-term power purchase agreements, earning the difference between the contracted price and the cost of construction. The regulated balance sheet lowers the cost of capital for the developer, and the developer supplies the utility with projects. Gas pipelines and storage earn a regulated or contracted return and add a third, smaller leg. That is the logic of the combination.",
      "The valuation is a spread argument. NextEra's {{marketCap}} market value at {{price}} is {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA, against 22.3x and 12.2x for the utility peer group. Duke trades at 19.6x and 11.2x, Southern at 25.0x and 13.1x. The premium to Duke is being paid for growth and for the renewables pipeline, but the return on invested capital of 5.2% is below Duke's 5.4% and Southern's 5.7%. The gap between the two is the market's estimate of what the renewables pipeline is worth."
    ],
    "quote": "NextEra grows by putting more capital into a regulated rate base, so the allowed return matters more than the demand forecast."
  },
  "whatItDoes": {
    "paragraphs": [
      "The regulated utility serves retail customers in its service territory: households, businesses and industrial plants. It has a legal monopoly on distribution in that territory, and in exchange the state commission sets the prices it can charge and the return it can earn. The customer cannot switch, and the company cannot set its own price.",
      "The competitive generation business is a different animal. Wind and solar projects are built with a specific capital cost and sold under a power purchase agreement that fixes the price for a decade or more. The developer earns the difference between the contracted price and the cost of building and running the project, plus whatever tax attributes the financing structure can use.",
      "The two halves fit together because the competitive business gives the regulated utility a pipeline of projects to buy or contract with, and the regulated balance sheet gives the group access to capital at a lower cost than a standalone developer. Whether that combination is worth a premium is the question the valuation is asking."
    ],
    "bullets": [
      {
        "title": "Regulated utility",
        "detail": "Monopoly distribution and generation. Earnings are the rate base times the return the commission allows."
      },
      {
        "title": "Competitive renewables",
        "detail": "Wind, solar and storage sold under long-term contracts. Returns depend on construction cost and contract price."
      },
      {
        "title": "Gas infrastructure",
        "detail": "Pipeline and storage investments that earn a regulated or contracted return, with less exposure to weather."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The regulated revenue model is unusual, and the reported margins look strange as a result. A utility recovers fuel and purchased power through separate cost-recovery mechanisms, so those costs are largely passed through rather than absorbed. That is why NextEra reports a gross margin of 83.6% and an operating margin of 31.2%: most of what sits between the two lines is operating expense, depreciation and the costs the regulator allows it to recover.",
      "The earnings formula is short. Rate base, multiplied by the allowed return on equity, gives the permitted profit. Operating costs that the commission accepts are recovered on top. Anything the commission disallows comes out of shareholder returns. A rate case is therefore not a negotiation about price in the ordinary sense; it is an audit of which costs are legitimate and what return is fair.",
      "The competitive business earns a different way. A wind farm with a 20-year contract has a known revenue stream and a mostly fixed cost base, so the return is set at the moment the project is priced. The risk is construction cost, transmission interconnection, and whether the contract counterparty pays."
    ]
  },
  "growth": {
    "paragraphs": [
      "Consensus expects revenue of $30.6B in 2026 and $34.2B in 2027, with EPS of $4.03 and $4.38. The first part of that estimate is a utility adding capital to its rate base: revenue rises with the asset base, while EPS rises with the allowed return and the financing cost. The trailing revenue base is $26.0B, so the estimates imply a substantial step-up in invested capital rather than a sudden increase in electricity demand.",
      "The growth is capital-funded. Every new substation, transmission line and renewable project is a dollar of invested capital that earns a regulated or contracted return once it enters service. The constraint is not demand; it is the regulator's approval of the spending and the cost of the debt used to fund it. The competitive renewables arm adds a second constraint: interconnection queues and equipment costs between contract signing and completion."
    ],
    "bullets": [
      {
        "title": "Rate base",
        "detail": "Regulated earnings are rate base multiplied by the allowed return. Growth comes from adding assets, not from selling more kilowatt-hours at a higher price."
      },
      {
        "title": "Renewables pipeline",
        "detail": "Wind, solar and storage sold under long-term contracts earn a return fixed at the point of pricing. Construction cost and interconnection timing are the risks."
      },
      {
        "title": "Financing cost",
        "detail": "With $101.1B of net debt, the spread between the allowed return and the cost of new debt decides how much of each dollar of capex reaches EPS."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The operating margin is 31.7% trailing, against 32.1% in FY2025. The annual range is wide, from 15.5% in FY2021 to 41.3% in FY2023, which for a regulated utility reflects the timing of cost recovery and rate increases as much as operating efficiency. The quarterly range since then has also been wide: 17.8% in Q4 FY24, 42.6% in Q3 FY24 and 36.2% in Q1 FY26. The annual average is the meaningful measure.",
      "The net margin of 31.5% sits almost on top of the operating margin, which is unusual for a company carrying $101.1B of net debt. The disclosure does not break out the items below the operating line that produce that result, so the net margin should not be read as a free cash margin. Return on invested capital is 5.2%, below the 5.6% peer median, and return on equity is 14.8%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow after capex is not reported, and capex is not in the annual table, so the cash section has to be built from operating cash flow and the balance sheet. Operating cash flow was $12.5B in FY2025, down from $13.3B in FY2024, against net debt of $101.1B. For a utility that is building, negative free cash flow is the normal condition: capex exceeds depreciation, and the gap is funded with debt and equity.",
      "The relevant tests are interest cover and the cost of new debt, and the first is not reported. Net debt at 6.7x EBITDA is high in absolute terms but standard for the sector; Southern carries 5.0x and Constellation 2.9x. The 3.0% dividend absorbs a modest share of operating cash flow. The real constraint is the spread between the allowed return on equity and the rate the company pays to borrow, which is the number the disclosure does not give."
    ]
  },
  "valuation": {
    "paragraphs": [
      "NextEra's {{marketCap}} market value at {{price}} is {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA. The utility peer medians are 22.3x and 12.2x, so the earnings multiple is roughly in line while the EBITDA multiple carries a six-turn premium. P/FCF and the free-cash-flow yield are not available because free cash flow is not reported. On the FY2027 estimate of $4.38 the multiple is about 19.2x.",
      "The EBITDA premium is the market's price for growth. NextEra's trailing revenue growth of 8.3% is in line with Southern's, but the consensus expects $34.2B by 2027 against $26.0B trailing, which is a faster capital deployment story than Duke's or Southern's. The offset is a 5.2% return on invested capital, the lowest in the peer group, which means the growth is being bought with capital rather than earned on it.",
      "What would justify the multiple is a regulatory spread that stays positive as the asset base grows, plus renewables projects that earn their contracted return. What would break it is a rate case that lowers the allowed return or a rise in the cost of new debt that compresses the spread before rates adjust. The 3.0% dividend is the part of the return that does not depend on that spread."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Nineteen analysts are included in The Yahoo Finance data from 18 November 2026, which has a mean target of $94 and a range of $56 to $110. The mean is 12% above the current price, but the range is wide for a utility, from 33% below the price to 31% above it.",
      "Revisions are slightly negative, with the 90-day EPS change at -0.5% and the 60-day at -0.6%. Consensus expects $4.03 for 2026 and $4.38 for 2027, a steady progression from $3.30 reported in FY2025. The dispersion in targets therefore reflects different assumptions about the allowed return and the financing cost, not different views on electricity demand."
    ]
  },
  "risks": {
    "intro": "NextEra's risks are regulatory, financial and executional. The demand for electricity is not in doubt; the return the company is allowed to earn on serving it is.",
    "items": [
      {
        "title": "Rate-case outcomes",
        "severity": "High",
        "detail": "A commission can disallow costs, lower the allowed return or delay recovery. Each of those decisions removes earnings from assets that already exist.",
        "watch": "Filed rate cases, intervenor testimony and the allowed return on equity in each jurisdiction."
      },
      {
        "title": "Interest rates",
        "severity": "High",
        "detail": "The company borrows to build. Higher rates raise the cost of new debt before the allowed return adjusts, and they also lower the value the market puts on a long-dated earnings stream.",
        "watch": "Weighted average cost of debt, maturity schedule and the spread between allowed and actual returns."
      },
      {
        "title": "Construction and interconnection",
        "severity": "Medium",
        "detail": "Renewable projects depend on transmission interconnection queues and on equipment costs that can move between contract signing and completion.",
        "watch": "Project backlog, in-service dates and any impairments on cancelled projects."
      },
      {
        "title": "Weather and load",
        "severity": "Medium",
        "detail": "Revenue depends on heating and cooling demand, and a mild season reduces volumes. Weather normalisation only goes so far.",
        "watch": "Weather-normalised sales growth and degree-day comparisons."
      },
      {
        "title": "Policy support for renewables",
        "severity": "Medium",
        "detail": "The competitive business relies on tax attributes and on policies that support renewable generation. A change in either alters project economics.",
        "watch": "Tax credit rules, state renewable portfolio standards and contract pricing."
      }
    ],
    "watchlist": [
      {
        "title": "Rate base",
        "detail": "The number that earnings are calculated from. It should grow faster than the capital spending that feeds it."
      },
      {
        "title": "Allowed versus earned return",
        "detail": "A utility that earns less than its allowed return is leaving money on the table."
      },
      {
        "title": "Financing plan",
        "detail": "The mix of debt, equity and project financing determines how much dilution each new project costs."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "NextEra is a regulated utility with a large competitive renewables arm attached. Revenue of $27.8B, an operating margin of 31.2% and $6.8B of net income describe a profitable, low-volatility business that grows by investing.",
      "The financial statements look alarming if read with industrial-company habits. Ten turns of leverage, a 4.9% free-cash-flow margin and a 3.7% return on invested capital are all normal for a regulated network that funds itself with debt and earns a return set by a commission.",
      "The reader's job is to decide whether the allowed return exceeds the cost of capital, because that spread is the entire investment case. Everything else, from the renewables backlog to the load growth forecasts, is a means of putting more capital to work at that spread."
    ],
    "questions": [
      "What return on equity has each jurisdiction actually allowed, and how does it compare with the cost of debt?",
      "How much of the capital plan is already approved and included in rates?",
      "What share of earnings comes from the competitive business rather than the regulated one?",
      "What would a two-point rise in the cost of new debt do to earnings per share?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
