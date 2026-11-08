import type { StockStory } from "./types";

export const DUK: StockStory = {
  ticker: "DUK",
  kicker: "Utilities · Regulated electric and gas",
  title: "Duke Energy's 6.9x trailing P/E is an artefact, not a bargain",
  dek: "One quarter reported more than twice the normal revenue and seven times the normal profit. Strip that out and the picture is a $32B regulated utility earning roughly $5B a year, which is a different company from the one the multiples describe.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $42.6B and trailing net margin 34.0%, both inflated by a single unusual quarter.",
    "Q3 FY26 reported $18.21B of revenue and $10.65B of net income against $7.59B and $1.09B in the quarter before.",
    "FY2025, the cleanest recent year, delivered $31.74B of revenue, $8.63B of operating income and $4.97B of net income.",
    "Free cash flow is negative $3.69B, which is normal for a utility funding a large construction programme.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1326160/000132616026000014/duk-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001326160&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Duke Energy is a regulated electric and gas utility with three segments: electric utilities and infrastructure, gas utilities and infrastructure, and commercial renewables. It serves customers across the Carolinas, Florida and the Midwest, and its earnings come from the returns state commissions allow it to earn on the assets it has built.",
      "The trailing figures in the dataset need to be handled carefully. Q3 FY26 reported $18.21B of revenue and $10.65B of net income, against $7.59B and $1.09B in the immediately preceding quarter. A regulated utility does not double its revenue in three months because more people turned on the lights. A quarter that size is a transaction or an accounting event, and it distorts every trailing ratio built on it.",
      "The clean anchor is FY2025: $31.74B of revenue, $8.63B of operating income and $4.97B of net income. That is the scale of the underlying business, and it is consistent with the third-party estimate of $33.87B of revenue for the current fiscal year. The company is valued at $99.6B at $127.78 a share. The shares have ranged from $112.40 to $134.49 over the past year and sit in the upper part of that band.",
    ],
    quote:
      "Before using any trailing multiple, check whether the trailing period contains a quarter that does not belong. In regulated utilities, one unusual quarter can make a 20x business look like a 7x one.",
  },
  whatItDoes: {
    paragraphs: [
      "The electric utilities generate, transmit and distribute power to millions of retail customers under state-regulated tariffs. The gas utilities distribute natural gas for heating and industrial use, earning a delivery margin rather than a commodity margin. Commercial renewables owns and contracts renewable generation, some of it sold to third parties rather than to regulated customers.",
      "The regulated segments are the core. A commission sets the rates, and those rates are designed to recover operating costs plus a return on the capital invested in the system. The customer has no alternative supplier, and the company has no competitor to lose share to. In exchange, the company accepts a regulated return and must justify its spending.",
      "The commercial renewables segment operates differently. It sells power under contracts and takes construction and offtake risk, which is why it is usually a small share of earnings even when it is a large share of the headlines.",
    ],
    bullets: [
      {
        title: "Electric utilities and infrastructure",
        detail:
          "Generation, transmission and distribution in regulated territories. The largest share of the asset base and of group earnings.",
      },
      {
        title: "Gas utilities and infrastructure",
        detail:
          "Local gas distribution. Revenue is the delivery charge, and the commodity is largely passed through.",
      },
      {
        title: "Commercial renewables",
        detail:
          "Contracted wind, solar and storage. Smaller earnings, more construction and offtake risk.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The earnings equation is the asset base, times the return the commission authorises, plus recovery of approved operating costs. Rate base grows when the company invests in plants, poles, pipes and software. The regulator decides how much of that investment enters the base and what return it earns.",
      "That is why the reported margins look odd. Duke's gross margin is 5.5% while its operating margin is 44.1%, and the trailing net margin of 34.0% is above both. For a utility, the gross line is dominated by fuel and purchased power that are largely passed through, so it is not a measure of pricing power. The operating margin is distorted by the same unusual quarter that inflated revenue.",
      "The useful measure is not a margin at all. It is the spread between the allowed return on equity and the cost of the debt and equity used to finance the rate base. A utility that earns 9.5% on equity and finances at 7% creates value; one that earns 9% and finances at 9% does not, no matter how large the rate base grows.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew at a 4.5% compound rate from $24.5B in FY2021 to $31.7B in FY2025. Operating income grew faster, from $5.50B to $8.63B, and net income from $3.91B to $4.97B. That is a utility doing what a utility should: adding assets to the rate base and earning a return on them.",
      "Third-party estimates point to $33.87B of revenue and $6.74 of EPS for the current fiscal year, then $35.31B and $7.17. Note that the revenue estimate is well below the trailing $42.57B and close to the FY2025 figure. That is the clearest confirmation that the trailing number contains something that will not repeat.",
      "The growth driver going forward is the capital plan. Data centre demand, electrification of heating and transport, and the replacement of ageing infrastructure all require investment, and each dollar of accepted investment becomes rate base. The constraint is the commission and the cost of financing, not the demand for electricity.",
    ],
    bullets: [
      {
        title: "Rate base growth",
        detail:
          "Capital invested in regulated assets earns the allowed return once it enters service and is accepted into rates.",
      },
      {
        title: "Load growth",
        detail:
          "Data centres and electrification raise long-run demand, which supports new generation and transmission investment.",
      },
      {
        title: "Cost recovery mechanisms",
        detail:
          "Riders and formula rates reduce the wait between paying for something and being paid for it.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly record shows a stable regulated business with a clear seasonal shape. Operating margin ran between 24.8% and 30.3% from Q2 FY25 through Q2 FY26, with revenue between $7.37B and $8.99B. Then Q3 FY26 reported 65.0% on $18.21B.",
      "The reported return on equity of 114.2% and return on invested capital of 61.2% follow directly from that quarter and should not be used. A regulated utility earning a triple-digit return on equity would be a regulatory scandal, not an investment insight. On the FY2025 numbers, net income of $4.97B is a normal result for an asset base of this size.",
      "The trailing diluted EPS of $4.85 is the one number that sits oddly against the inflated quarter, which is a reminder that not every line in a dataset moves together. When the figures disagree, the fiscal-year history is the more reliable guide.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $3.69B, a negative 8.7% margin, and it has been negative in four of the last five fiscal years: negative $1.43B, negative $5.44B, negative $2.73B, positive $48M and negative $1.69B. This is the signature of a utility investing more than it depreciates.",
      "Construction has to be financed somehow, and the financing is a mix of new borrowing and share issuance. That works while the commissioned assets earn more than the money costs. It stops working when a commission disallows a project, because the company has already spent the money and no longer has an asset that earns.",
      "Net debt of $11.54B at 0.9x EBITDA looks low for a utility and is another figure affected by the unusual quarter, since the EBITDA denominator includes it. The leverage disclosed in the filing, rather than the ratio computed from a distorted trailing period, is the number to use.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $127.78 the shares trade at 6.9x trailing earnings, 8.8x EV/EBITDA and 2.6x sales, which would make Duke the cheapest large utility in the peer group by a wide margin. It is not. Divide the $99.6B market value by FY2025 net income of $4.97B and the multiple is about 20x, which is where a regulated utility with this growth profile normally trades.",
      "That correction matters because it changes the comparison entirely. On the trailing figures Duke looks like a deep-value utility at 8.8x EBITDA against NextEra at 26.9x. On a normalised basis it sits much closer to the middle of the sector, which is a far less exciting but far more accurate conclusion.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 19 analysts, with a mean target of $132.26 and a range of $121.00 to $145.00. The range is narrow for a utility, which is what you would expect when the earnings are set by regulators rather than by a commodity price.",
      "Estimates call for $33.87B of revenue and $6.74 of EPS this year across 16 analysts, then $35.31B and $7.17 across 22. Next quarter is forecast at $8.05B and $1.47. The analyst count rising from 16 to 22 for the following year suggests coverage is being added rather than withdrawn.",
      "The consensus revenue estimate of $33.87B is the single most useful line in this section, because it independently confirms that the trailing $42.57B is not the run-rate.",
    ],
  },
  risks: {
    intro:
      "Duke's risks are the standard regulated-utility set: what the commission allows, what the construction costs, and what the financing costs. The demand for electricity in its territories is not the problem.",
    items: [
      {
        title: "Regulatory outcomes",
        severity: "High",
        detail:
          "A commission can cut the authorised return, strike out spending it considers unnecessary, or stretch the recovery period over more years.",
        watch:
          "Filed cases, settlement offers and the authorised return in each state.",
      },
      {
        title: "Construction cost and schedule",
        severity: "High",
        detail:
          "Large generation and transmission projects are approved years before completion. Overruns are borne by shareholders until a regulator rules otherwise.",
        watch:
          "Capital cost estimates, in-service dates and any prudency proceedings.",
      },
      {
        title: "Financing cost",
        severity: "Medium",
        detail:
          "Negative free cash flow has to be funded. Higher interest rates raise the cost of that funding before rates adjust.",
        watch: "New debt issuance rates, the maturity schedule and any equity issuance.",
      },
      {
        title: "Weather and sales",
        severity: "Medium",
        detail:
          "Heating and cooling demand drive volumes, and a mild season reduces revenue that the rate design only partly recovers.",
        watch: "Weather-normalised sales and degree-day comparisons.",
      },
      {
        title: "Accounting complexity",
        severity: "Medium",
        detail:
          "A single quarter can move every trailing ratio by a wide margin. Readers who take the headline multiples at face value will misjudge the valuation.",
        watch:
          "One-off items in the quarterly results, and the gap between the trailing figures and the fiscal-year estimates.",
      },
    ],
    watchlist: [
      {
        title: "Allowed return versus cost of capital",
        detail:
          "The spread between what the commission allows and what the debt costs is the value creation test.",
      },
      {
        title: "Rate base",
        detail:
          "The asset base should grow in line with the capital plan, and every dollar of it should be earning.",
      },
      {
        title: "Normalised earnings",
        detail:
          "Use the fiscal-year figures, not the trailing ones, until the unusual quarter drops out of the comparison.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Duke Energy is a large regulated utility with a constructive service territory and a capital plan that should keep the rate base growing. The FY2025 results, with $31.74B of revenue and $4.97B of net income, describe a stable business earning a regulated return.",
      "The reporting in the trailing period does not describe that business. One quarter carried more than twice the normal revenue and roughly seven times the normal profit, and every trailing ratio inherited the distortion. The 6.9x P/E and the 114.2% return on equity are the most obvious symptoms.",
      "The lesson is procedural as much as analytical. Before comparing a utility's multiple with its peers, check whether the trailing period is representative. In a business where earnings are set by regulators and move slowly, a single anomalous quarter is a strong signal that the denominator is wrong.",
    ],
    questions: [
      "What caused the Q3 FY26 revenue and earnings spike, and will it recur?",
      "What return on equity is allowed in each jurisdiction, and what has actually been earned?",
      "How much of the capital plan is already reflected in rates?",
      "What does the financing plan imply for dilution and interest cost?",
    ],
  },
};
