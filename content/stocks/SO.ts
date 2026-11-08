import type { StockStory } from "./types";

export const SO: StockStory = {
  ticker: "SO",
  kicker: "Utilities · Regulated electric and gas",
  title: "At Southern, negative free cash flow is the business model",
  dek: "The company spends more on new plants and wires than it collects in depreciation, which is why it reports a minus $3.5B cash margin and still pays a dividend. A regulator, not a market, decides whether that works.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $30.2B, up 8.3%, with a 24.2% operating margin and 14.4% net margin.",
    "Free cash flow is negative $3.47B, an 11.5% negative margin, because capital spending exceeds depreciation and the difference is financed.",
    "The gross margin of negative 31.6% alongside a 24.2% operating margin is a fuel-accounting effect, not a sign of negative economics.",
    "At $92.34 the shares trade at 23.8x earnings and 25.2x EV/EBITDA, with a 3.4x price-to-sales ratio.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/92122/000009212226000006/so-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000092122&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Southern Company distributes electricity and natural gas to roughly nine million customers across nine Southeastern states, and owns about 50 gigawatts of generating capacity. Its franchises are monopolies: a customer in its territory cannot choose another wire provider, and the state commission sets the price the company may charge.",
      "That arrangement is the whole business. The commission decides what the company may recover, including the return on the capital it has invested, and the company earns that return for as long as the assets remain in service. Growth comes from investing more capital into the territory and getting the regulator to accept it into the rate base.",
      "The company is valued at $103.4B at $92.34 a share, The shares have traded between $81.69 and $99.58, a little above the middle of that band. Revenue is $30.2B, operating income $7.29B in FY2025, net income $4.34B, and the earnings per share came to $3.91 on a trailing basis.",
    ],
    quote:
      "A regulated utility converts capital spending into earnings, but only at the rate the commission allows and only after the spending is judged to be prudent.",
  },
  whatItDoes: {
    paragraphs: [
      "The electric utilities generate, transmit and distribute power. Generation is a mix of gas, coal, nuclear and renewables; transmission moves bulk power across the region; distribution delivers it to homes and businesses. Each of those functions carries a different cost structure and a different regulatory treatment.",
      "The gas distribution business buys gas in the wholesale market and delivers it through local pipes. It earns a margin on delivery rather than on the commodity, so the customer's gas bill is mostly a pass-through with a regulated delivery charge attached.",
      "The customer base is the asset that cannot be replicated. Nine million meters in a growing region produce a predictable volume of sales, and a growing population means new connections and new capital investment without the company having to win a customer from a competitor.",
    ],
    bullets: [
      {
        title: "Electric utilities",
        detail:
          "Generation, transmission and distribution across the Southeast. The bulk of the rate base and most of the earnings.",
      },
      {
        title: "Gas distribution",
        detail:
          "Local gas delivery to homes and businesses. Revenue is the delivery charge, not the commodity.",
      },
      {
        title: "Wholesale and other",
        detail:
          "Sales to other utilities and industrial customers, plus smaller unregulated investments.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The first thing to understand is the strange margin pair. Southern reports a gross margin of negative 31.6% and an operating margin of 24.2%. That combination is possible because fuel and purchased power are large pass-through costs booked in cost of revenue, and the timing of when those costs are recognised does not always match when they are recovered from customers through the fuel clause.",
      "In plain terms, the gross line for a regulated utility says very little. The meaningful margin is the one the commission sets: the allowed return on rate base, plus recovery of costs the commission accepts as prudent. A negative gross margin and a healthy operating margin in the same year is an accounting presentation, not evidence that the company sells electricity below cost.",
      "The second thing to understand is that capital is the product. Every dollar invested in a new plant, a substation or a transmission line is a dollar of rate base that earns the allowed return once it enters service. The company's job is to make that investment useful and to persuade the regulator that it was needed.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew at a 5.5% compound rate from $23.1B in FY2021 to $29.6B in FY2025, and the trailing $30.2B grew 8.3%. For a regulated utility that is a solid rate, and it reflects both rate increases and customer growth in the Southeast.",
      "Third-party estimates point to $31.0B of revenue and $4.63 of EPS this fiscal year, then $32.9B and $4.93. That is a mid-single-digit earnings growth path, which is what a well-run regulated utility is expected to produce: not spectacular, but visible several years ahead.",
      "The constraint is the regulator. Each rate increase has to be justified, and each large project has to be shown to be necessary and prudently built. A commission that disallows a cost removes both the asset and the return from the equation, and the company has already spent the money.",
    ],
    bullets: [
      {
        title: "Rate base growth",
        detail:
          "New capital entering service increases the asset base on which the allowed return is earned.",
      },
      {
        title: "Customer growth",
        detail:
          "Population and business migration into the Southeast add meters and load without competing for them.",
      },
      {
        title: "Cost recovery",
        detail:
          "Fuel clauses and formula rates shorten the lag between spending and recovering the cost.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating income rose from $3.70B in FY2021 to $7.29B in FY2025, and net income from $2.31B to $4.34B. Revenue did not quite double over the period, so the improvement came from a mix of rate increases, cost control and a larger asset base earning a return.",
      "The quarters show the seasonal shape of a utility. Operating margin was 33.2% in Q3 FY25, the summer cooling season, and 13.1% in Q4 FY25 when demand fell away. Q1 FY26 earned 24.0% on $8.40B of revenue. Revenue is remarkably stable across the year; the margin is not, because a large part of the cost base does not flex with the weather.",
      "Return on equity is not disclosed in this dataset, which is a genuine gap for a regulated utility, because the allowed and earned returns are the core of the investment case. What can be said from the numbers is that a 14.4% net margin on a regulated asset base is consistent with a mid-single-digit return on equity, given how much of the balance sheet is financed with debt.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $3.47B over the trailing period, an 11.5% negative margin. That is not a one-off: the annual figures were negative $1.42B, negative $1.62B and negative $1.54B before a positive $833M in FY2024 and negative $2.94B in FY2025.",
      "For a utility in a construction cycle this is normal. Depreciation recovers the historical cost of old assets, while the company is building new ones at today's prices. The gap between the two is funded with debt and equity, and the dividend is paid from the same pool. The arrangement works as long as the new assets earn an allowed return above the cost of the capital used to build them.",
      "The absence of disclosed net debt in this dataset is a real limitation, because leverage is the other half of the utility equation. Without it, the reader cannot check whether the negative free cash flow is being financed at a sensible cost.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $92.34 the shares trade at 23.8x trailing earnings, 25.2x EV/EBITDA and 3.4x sales. Within the peer group that is towards the expensive end: Duke Energy trades at 8.8x EV/EBITDA, Vistra at 11.3x and Constellation at 18.8x, while NextEra at 26.9x is above Southern.",
      "The premium reflects the quality of the franchise rather than the growth rate. A monopoly utility in a growing region with a long record of constructive regulation is worth more per dollar of EBITDA than a merchant generator, because the cash flows are less uncertain. The risk is that the multiple already assumes the regulator keeps saying yes.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty analysts publish targets. The attributed mean is $96.10, with a range of $74.00 to $115.00. The current price sits below the mean and comfortably inside the range.",
      "Estimates call for $31.0B of revenue and $4.63 of EPS this year across 22 analysts, then $32.9B and $4.93 across 22. Next quarter is forecast at $6.99B and $0.44, a seasonal low point, followed by $8.67B and $1.34.",
      "The estimate base is broad for a utility, which makes the average more meaningful than it would be for a company covered by a handful of analysts. It also means the consensus is unlikely to move sharply on a single quarter.",
    ],
  },
  risks: {
    intro:
      "Southern's risks are regulatory, constructional and financial. The territory and the demand are not in question; the return on the capital invested to serve them is.",
    items: [
      {
        title: "Rate-case outcomes",
        severity: "High",
        detail:
          "A ruling can strike out spending the company has already made, lower the return it is permitted to earn, or push recovery years into the future.",
        watch:
          "Pending rate cases, the allowed return on equity in each state and any disallowance in the final order.",
      },
      {
        title: "Construction cost overruns",
        severity: "High",
        detail:
          "Large generating projects are approved years before completion. A delay or an overrun is borne by shareholders until the regulator decides otherwise.",
        watch:
          "Capital cost estimates against budget, in-service dates and any prudency review.",
      },
      {
        title: "Financing cost",
        severity: "Medium",
        detail:
          "The company funds construction with debt and equity. Higher rates raise the cost of the capital before the allowed return adjusts.",
        watch: "Interest expense, new debt issuance rates and the equity issuance plan.",
      },
      {
        title: "Weather and sales volume",
        severity: "Medium",
        detail:
          "A mild summer or winter reduces kilowatt-hour sales, and weather normalisation only adjusts part of the effect.",
        watch: "Weather-normalised retail sales and degree-day comparisons.",
      },
      {
        title: "Fuel and commodity cost",
        severity: "Medium",
        detail:
          "Gas prices flow through the fuel clause with a lag. A sharp move creates a working-capital gap even when the cost is ultimately recovered.",
        watch: "Under-recovered fuel balances and the timing of fuel-clause true-ups.",
      },
    ],
    watchlist: [
      {
        title: "Rate base growth",
        detail:
          "The asset base is the earnings engine. It should grow in line with the capital plan.",
      },
      {
        title: "Allowed return",
        detail:
          "The authorised return on equity in each jurisdiction sets the ceiling on profitability.",
      },
      {
        title: "Equity issuance",
        detail:
          "Selling shares to fund construction dilutes existing holders, so the size and price matter.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Southern is a large regulated utility with nine million customers, about 50 gigawatts of capacity and a long record of investing in its territory. Revenue of $30.2B, an operating margin of 24.2% and net income of $4.34B describe a stable, unspectacular business.",
      "The two numbers most likely to confuse a reader are the negative gross margin and the negative free cash flow. Neither is a distress signal. The first is a fuel-accounting artefact; the second is what a utility looks like when it is building faster than its assets depreciate.",
      "What matters is whether the commission allows a return above the cost of the capital being sunk into the territory. That question is answered in rate cases, not in the income statement, which is why the regulatory docket is more informative than the quarterly earnings release for this kind of company.",
    ],
    questions: [
      "What return on equity has each state commission allowed, and what has the company actually earned?",
      "How much of the construction programme is already included in rates?",
      "Why is the gross margin negative, and what does the fuel clause recover?",
      "How much equity will have to be issued to fund the capital plan?",
    ],
  },
};
