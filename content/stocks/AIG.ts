import type { StockStory } from "./types";

export const AIG: StockStory = {
  ticker: "AIG",
  kicker: "Insurance · Global property and casualty",
  title: "AIG is smaller than it used to be, and that is deliberate",
  dek: "Revenue fell from $52.2B in FY2021 to $27.7B as businesses were sold, so the headline contraction says more about portfolio reshaping than about demand. What remains is a property and casualty underwriter judged on its combined ratio.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $27.7B, up 1.2%, a modest organic rate after years of divestitures.",
    "Operating margin is 14.5% and net margin is 11.9%, thin for an insurer and a sign of expense and claims pressure.",
    "Return on invested capital of 2.8% is not meaningful for an insurer; underwriting margin and reserve development are.",
    "At $77.75 the shares trade at 12.2x trailing earnings but only 5.3x EV/EBITDA, a gap that shows how awkward both measures are here.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/5272/000000527226000023/aig-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000005272&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "American International Group is a global insurance company. It writes commercial property and casualty cover for large and mid-sized companies, personal lines in selected markets, and accident and health products. It also has life and retirement operations and mortgage insurance, though the group has been reshaped over the past several years.",
      "That reshaping is why the revenue history looks alarming at first glance. Revenue fell from $52.16B in FY2021 to $30.00B in FY2022 and then to $27.94B, $27.25B and $26.77B in the following years. The drop was driven by divestitures and by the separation of businesses, not by a collapse in demand for insurance. The trailing $27.73B is 1.2% higher than a year earlier, which is the more relevant organic signal.",
      "At $77.75 the equity is worth $40.3B, or 12.2x trailing earnings. The shares sit 41% of the way up a 52-week range of $71.25 to $87.29. The five-year return is 47.3%, well behind the best-performing insurers over the same period, which tells you that the market has not rewarded the turnaround as generously as it has rewarded a cleaner underwriter.",
    ],
    quote:
      "A smaller insurer can be a better insurer. The question is whether the businesses that remain earn an underwriting profit, not whether the group still has the revenue it had in 2021.",
  },
  whatItDoes: {
    paragraphs: [
      "The core is commercial property and casualty. AIG writes property, casualty, financial lines, professional liability and specialty cover for multinational corporations and mid-market companies. Large corporate risks are often brokered and priced individually; mid-market business is more standardized. Claims handling and risk engineering are part of the product, because corporate buyers care about recovery as much as price.",
      "Personal lines and accident and health add diversification. Personal lines cover individuals, often in markets where AIG has a direct or affinity relationship. Accident and health provides supplemental cover through employers and associations. Mortgage insurance protects lenders against borrower default and is sensitive to housing and unemployment.",
      "The life and retirement operations manage savings and retirement products, which earn fees and spreads on policyholder assets. They are less capital-intensive than P&C but carry interest-rate and longevity risk. The group's strategy has been to focus on P&C and reduce the complexity of the whole, which is why the revenue base is smaller and the remaining business is more comparable with a pure underwriter.",
    ],
    bullets: [
      {
        title: "Commercial P&C",
        detail:
          "Property, casualty, financial lines and specialty cover for corporations. The core underwriting engine.",
      },
      {
        title: "Personal and accident & health",
        detail:
          "Individual cover and supplemental health products. Diversification and fee income.",
      },
      {
        title: "Life, retirement and mortgage insurance",
        detail:
          "Savings products and mortgage credit protection. Interest-rate and housing sensitivity.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Premiums are collected, claims and expenses are paid, and the difference is the underwriting result. The combined ratio is the measure: claims plus expenses divided by premiums. A ratio below 100% is a profit; above 100% is a loss that must be covered by investment income. AIG's 14.5% operating margin implies a combined ratio above the best-in-class level, which is why improving underwriting is the central task.",
      "Investment income comes from the float. Premiums are invested in bonds until claims are paid, and the yield on that portfolio is a second profit engine. When rates rise, new money earns more; when rates fall, reinvestment income declines. The duration of the portfolio determines how quickly that happens.",
      "The expense ratio is AIG's specific challenge. A global insurer with a complex history carries more administrative cost than a leaner competitor. Reducing that cost is the difference between a mid-teens operating margin and the low-20s margin that a well-run commercial underwriter can earn. The revenue line is not the problem; the cost and claims lines are.",
    ],
  },
  growth: {
    paragraphs: [
      "The reported revenue decline is mostly a portfolio story. FY2021's $52.16B included businesses that have since been sold or separated; the subsequent figures reflect a smaller group. On a like-for-like basis, the trailing 1.2% growth and the latest quarter's 17.2% growth are the numbers that describe the current business. The quarter is unusually strong and may reflect timing or mix.",
      "Consensus estimates call for $28.94B of revenue and $8.21 of EPS this fiscal year, then $31.23B and $8.76 next year. The EPS estimate rises modestly, which assumes continued underwriting improvement and a stable investment yield rather than a return to the old revenue base.",
      "The durable drivers are commercial insurance pricing, new business in specialty lines and investment income on the float. The brakes are a soft pricing cycle, catastrophe losses, adverse reserve development and the cost of fixing the expense base. The last one is the most within management's control and the most important for the multiple.",
    ],
    bullets: [
      {
        title: "Underwriting improvement",
        detail:
          "A lower expense ratio and tighter claims handling lift the combined ratio without needing revenue growth.",
      },
      {
        title: "Commercial pricing",
        detail:
          "Rate increases in property and casualty expand the premium base when the market is tight.",
      },
      {
        title: "Investment income",
        detail:
          "The float earns a bond yield that rises with reinvestment rates.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 14.5%, net margin is 11.9% and diluted EPS is $6.14. Return on equity is not reported, and return on invested capital is 2.8%, which is not a useful measure for an insurer because invested capital includes reserves, goodwill and a bond portfolio. The operating margin and the combined ratio are the relevant measures.",
      "The annual record shows the reshaping: revenue of $52.16B, $30.00B, $27.94B, $27.25B and $26.77B, with net income of $10.37B, $10.23B, $3.64B, negative $1.40B and $3.10B. The FY2024 loss is a reminder that insurers can post a bad year even when underwriting is broadly intact, because of investment marks, reserve strengthening or one-off items.",
      "Quarterly operating margins have ranged from 10.1% to 21.8% over the last six quarters, and EPS moved between $0.93 and $1.98. The Q3 FY26 margin of 15.0% is in the middle of that range. A reader should not read a single quarter as a trend in either direction.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is reported as not available. For an insurer, that is reasonable: premiums, claims, reinsurance recoveries and investment purchases move through the balance sheet in ways that a conventional free-cash-flow calculation does not capture. The cash flow statement is a check, not the primary lens.",
      "The relevant measures are the combined ratio, reserve development, the investment portfolio's duration and the capital ratio. Reserves are estimates of future claims; if they prove too low, the insurer must strengthen them and earnings suffer. The bond portfolio's market value moves with rates. The capital ratio determines how much premium the insurer can write relative to equity.",
      "Interest cover is 9.9x, which is comfortable but not as strong as Chubb's 22.9x. That difference reflects a more leveraged balance sheet and a smaller earnings base. Capital return is a mix of dividends and buybacks, constrained by the insurance subsidiaries' capital requirements and by the rating agencies' expectations.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $77.75, AIG trades at 12.2x trailing earnings and 5.3x EV/EBITDA. The gap between the two is striking: the P/E is in line with a bank, while the EV/EBITDA is far below the market. The difference comes from how EBITDA is defined for an insurer and from the debt and reserve liabilities embedded in enterprise value. Neither multiple is a clean measure.",
      "The more useful frame is price to book against a sustainable return on equity. AIG's ROE is not reported in the dataset, so the reader cannot complete that comparison from these figures alone. The operating margin of 14.5% and the 9.9x interest cover suggest a business that is profitable but not yet earning best-in-class returns.",
      "Stockmonk does not publish a target price. The third-party mean in the next section is context, and the 80-to-101 range is narrow enough to suggest that analysts agree on the direction of the turnaround even if they disagree on its pace.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty analysts contribute to the attributed consensus, with a mean target of $88.40 and a range of $80.00 to $101.00. The low end is above the latest close, which is a positive signal, though the range is modest compared with the other insurers in this batch.",
      "Estimates call for $8.21 of EPS this fiscal year and $8.76 next year, with 18 and 22 analysts contributing. That path is consistent with gradual underwriting improvement rather than a step change.",
      "These are third-party forecasts and can change. A mean target is not a Stockmonk rating, and for an insurer the estimate dispersion is often driven by catastrophe and reserve assumptions.",
    ],
  },
  risks: {
    intro:
      "AIG's risks are underwriting, reserves and execution. The balance sheet is adequate, but the margin of safety is thinner than at a best-in-class insurer, so a bad catastrophe year or a reserve charge matters more.",
    items: [
      {
        title: "Catastrophe losses",
        severity: "High",
        detail:
          "A global property book is exposed to hurricanes, wildfires, floods and earthquakes. A single event can erase a quarter of underwriting profit.",
        watch:
          "Catastrophe loss ratios, reinsurance coverage and modelled peak exposures.",
      },
      {
        title: "Reserve adequacy",
        severity: "High",
        detail:
          "Long-tail casualty claims can develop for years. If reserves are short, the company must strengthen them, which hits earnings and credibility.",
        watch:
          "Prior-year reserve development and the ratio of reserves to paid claims.",
      },
      {
        title: "Expense ratio and turnaround execution",
        severity: "High",
        detail:
          "AIG's cost base is higher than a leaner underwriter's. Failure to reduce it keeps the operating margin below peers.",
        watch: "Expense ratio, headcount and management's cost targets.",
      },
      {
        title: "Soft commercial pricing",
        severity: "Medium",
        detail:
          "When the market softens, premium rates fall and underwriting margins compress. AIG has less room to absorb that than a higher-margin peer.",
        watch: "Rate change by line and new business volumes.",
      },
      {
        title: "Investment portfolio and rates",
        severity: "Medium",
        detail:
          "The float is invested in bonds. Rising rates reduce market value; falling rates reduce reinvestment income.",
        watch: "Portfolio duration, book yield and unrealised gains or losses.",
      },
    ],
    watchlist: [
      {
        title: "Combined ratio",
        detail: "The single best measure of whether the turnaround is working.",
      },
      {
        title: "Expense ratio",
        detail: "The cost lever that separates AIG from better-run peers.",
      },
      {
        title: "Reserve development",
        detail: "The earliest warning sign that past pricing was inadequate.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "AIG is a smaller, simpler insurer than it was in 2021, with a commercial P&C core and a collection of adjacent businesses. The 14.5% operating margin and 11.9% net margin are respectable but below the best underwriters, and the 9.9x interest cover shows a less cushioned balance sheet.",
      "The teaching point is that revenue growth can be the wrong question for a company that has been selling businesses. The relevant measures are the combined ratio, the expense ratio and reserve development. EV/EBITDA and ROIC are especially misleading for an insurer because of how reserves and investments sit in the balance sheet.",
      "The open questions are whether the expense ratio can fall enough to lift the margin, whether reserves are adequate, and how much of the earnings base depends on a hard commercial market.",
    ],
    questions: [
      "What is the combined ratio, and how does it compare with best-in-class peers?",
      "How much of the expense base is structural versus fixable?",
      "Is prior-year reserve development positive or negative?",
      "How much of the earnings base depends on commercial rate increases?",
    ],
  },
};
