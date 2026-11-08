import type { StockStory } from "./types";

export const BRK_B: StockStory = {
  ticker: "BRK.B",
  kicker: "Diversified holdings · Insurance, rail, utilities and equities",
  title: "Berkshire Hathaway is a portfolio, not a single business",
  dek: "Insurance underwriting, a railroad, utilities and a large equity book sit under one roof. That structure makes consolidated revenue and GAAP earnings poor guides to the economics, and it makes book value the more honest anchor.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $259.7B, up 5.7%, with the latest quarter at $70.11B.",
    "Operating margin is 32.6% and net margin is 22.3%, but both swing with investment marks rather than operating performance.",
    "Free cash flow is $24.2B, a 9.3% margin; the more important asset is the insurance float and the cash it supports.",
    "No P/E or EV/EBITDA is reported, and that is appropriate: the earnings mix includes investment gains that do not belong in an operating multiple.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1067983/000119312526083899/brka-20251231.htm",
  irUrl: "https://www.berkshirehathaway.com",
  bigPicture: {
    paragraphs: [
      "Berkshire Hathaway is a collection of businesses: property and casualty insurance and reinsurance, a Class I railroad, regulated electric and gas utilities, manufacturing and retail operations, and a large portfolio of publicly traded securities. The parent allocates capital across them and holds a substantial reserve of cash and short-term instruments.",
      "Consolidated revenue of $259.7B is 5.7% higher than a year earlier, and the latest quarter grew 14.2%. But revenue is the least informative line in this report. Insurance premiums, railroad freight, utility rates and manufacturing sales are different businesses with different margins, and the consolidated figure blends them without saying which one is working.",
      "At $570.89 the equity is worth $1.22T. The shares sit near the top of their 52-week range of $464.01 to $586.30, and a five-year holder has made 97.7%. No P/E or EV/EBITDA is reported, which is not an oversight: GAAP net income includes unrealised investment gains and losses, and enterprise value is difficult to define when the balance sheet holds a securities portfolio and insurance liabilities.",
    ],
    quote:
      "Berkshire is best read from the bottom up: what each operating business earns, what the float costs, and what the parent does with the cash that is left over.",
  },
  whatItDoes: {
    paragraphs: [
      "Insurance is the foundation. Berkshire writes commercial property and casualty, personal auto through GEICO, and reinsurance through several units. Premiums are collected before claims are paid, and the difference sits on the balance sheet as float — money that belongs to policyholders but can be invested in the meantime. When underwriting is profitable, the float costs less than nothing.",
      "BNSF is a Class I railroad that moves freight across North America: coal, agricultural products, consumer goods and industrial inputs. It is capital-intensive, regulated and exposed to industrial volumes. Berkshire Hathaway Energy owns regulated utilities and pipelines, where returns are set by regulators and growth comes from investing in the rate base.",
      "The manufacturing and retail group includes industrial products, building materials, apparel and consumer brands, plus a large distribution business. The equity portfolio holds significant stakes in public companies, and the parent also owns a portfolio of cash and short-term instruments. Together these pieces make Berkshire part operating company, part closed-end fund and part insurance balance sheet.",
    ],
    bullets: [
      {
        title: "Insurance and reinsurance",
        detail:
          "Premiums, float and underwriting discipline. The cheapest source of funding in the structure.",
      },
      {
        title: "Rail and utilities",
        detail:
          "BNSF and Berkshire Hathaway Energy. Capital-intensive, regulated and long-lived.",
      },
      {
        title: "Manufacturing, retail and equities",
        detail:
          "Operating subsidiaries plus a portfolio of public securities and cash.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Insurance earns an underwriting result — premiums minus claims and expenses — and an investment result on the float. The combined ratio is the key measure: below 100% means the underwriting itself is profitable, above 100% means the float carries a cost. Berkshire's discipline has historically been to shrink when prices are inadequate rather than chase volume.",
      "The railroad and utility businesses earn a return on invested capital that is regulated or contract-based. They are not high-margin, but they are durable and they produce predictable cash. The manufacturing and retail businesses earn ordinary operating margins and are valued on their earnings. The equity portfolio earns dividends and capital gains, which flow through GAAP net income and distort it.",
      "The parent's job is capital allocation. Cash generated by the operating businesses is either reinvested, used to buy more businesses or securities, or returned through buybacks. Berkshire pays no dividend, so the entire return depends on the value the parent creates with retained cash. That is the mechanism a reader should focus on, not the consolidated margin.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $191.25B in FY2021 to $254.91B in FY2023, then eased to $249.71B and $247.24B in FY2024 and FY2025. The step up in FY2023 reflects acquisitions and a larger operating base; the subsequent drift reflects softer freight, insurance and manufacturing conditions rather than a broken franchise. The latest quarter's 14.2% growth shows how quickly the consolidated line can move.",
      "There is no current-year consensus revenue or EPS estimate in the dataset, and only a single mean target of $550.00 with no range and no analyst count. That thin coverage is itself a fact: Berkshire is followed by fewer sell-side analysts than a typical large cap, and the ones who cover it often value the parts rather than forecast the whole.",
      "The realistic growth drivers are insurance pricing, freight volumes, utility rate-base investment and the return on the equity portfolio. The brakes are a soft insurance market, a recession that cuts rail volumes, regulatory limits on utility returns and a prolonged period in which cash earns little. None of those shows up cleanly in a single revenue growth rate.",
    ],
    bullets: [
      {
        title: "Insurance cycle",
        detail:
          "Hard markets allow premium growth; soft markets reward discipline over volume.",
      },
      {
        title: "Freight and utility investment",
        detail:
          "Rail volumes track industrial activity, while utilities grow by investing in regulated assets.",
      },
      {
        title: "Capital deployment",
        detail:
          "The return on retained cash depends on what the parent buys and at what price.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 32.6%, net margin is 22.3% and return on equity is 12.1%. Those consolidated figures hide enormous variation. FY2022 shows operating income of negative $30.50B and net income of negative $22.76B, while FY2023 shows operating income of $120.17B and net income of $96.22B. The swing is driven by investment marks, not by the railroad or the utilities.",
      "The quarterly series makes the same point. Operating margin was 8.7% in Q1 FY25, 24.0% in Q2, 59.8% in Q3, 39.0% in Q4, then 19.5% and 45.7% in the first two quarters of FY26. A business with that much quarterly margin movement is not a stable industrial compounder; it is a portfolio whose reported earnings include mark-to-market swings.",
      "The useful measure is operating earnings before investment results, which the company discloses in its filing, combined with book value per share. Neither is in this dataset, so the honest conclusion is that the consolidated margin and ROE are starting points for questions rather than answers.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $24.21B, a 9.3% margin, down from $29.79B in FY2023 and $25.04B in FY2025. The margin is low because the railroad and utility businesses consume a lot of capital, and because insurance cash flow can be affected by claims timing. It is not a sign of weak economics; it is a sign of a capital-intensive asset base.",
      "The distinctive feature of Berkshire's balance sheet is the cash and short-term securities held at the parent, alongside the insurance float. That liquidity is strategic: it lets the company write large insurance policies, fund acquisitions without raising capital and act as a buyer of last resort when markets seize up. It also earns a return that rises and falls with short-term rates.",
      "Berkshire pays no dividend, so capital return happens through buybacks when the shares trade below the parent's estimate of intrinsic value. The absence of a dividend means the cash-flow statement is less about distributions and more about how much liquidity the parent keeps. A reader should look at the cash and securities balance, the float and the buyback activity together.",
    ],
  },
  valuation: {
    paragraphs: [
      "No P/E or EV/EBITDA is reported for Berkshire. That is not a data gap to be papered over; it is a signal that the standard multiples do not fit. GAAP earnings include investment gains and losses that can swing by tens of billions, and enterprise value is ambiguous when the asset side includes a securities portfolio and the liability side includes insurance reserves.",
      "The traditional approach is price to book value, adjusted for the quality of the operating businesses and the size of the cash pile. A second approach is a sum-of-the-parts valuation: value the insurance float, the railroad, the utilities, the manufacturing group and the equity portfolio separately, then subtract parent liabilities. Both require figures that are not in this dataset.",
      "Stockmonk does not publish a target price. The single third-party mean of $550.00 sits below the latest close of $570.89, with no range or analyst count disclosed. That is a thin signal, and it should not be treated as a verdict on a conglomerate this complex.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is unusually thin. The dataset shows a mean target of $550.00, no low or high range and no analyst count. For a company with a $1.22T market capitalization, that is a striking absence, and it reflects Berkshire's unusual structure and its long-standing preference for talking to shareholders directly rather than to sell-side analysts.",
      "There are no current-year revenue or EPS estimates in the dataset. Without those, the consensus target cannot be reconciled with an earnings forecast, which makes it less useful than the target for a bank or a payments network.",
      "These are third-party figures and can change. A mean target is not a Stockmonk rating. For Berkshire, the more informative exercise is to read the annual report's segment disclosure and form a view on each operating business.",
    ],
  },
  risks: {
    intro:
      "Berkshire's risks are concentrated in insurance catastrophes, investment outcomes and the difficulty of allocating an enormous capital base. The balance sheet is exceptionally strong, so the threats are to returns rather than to solvency.",
    items: [
      {
        title: "Catastrophe and reserve risk",
        severity: "High",
        detail:
          "A large hurricane, earthquake or wildfire can produce claims that overwhelm a year of underwriting profit. Reserve estimates for long-tail liabilities can also prove wrong years later.",
        watch:
          "Catastrophe losses, prior-year reserve development and the combined ratio.",
      },
      {
        title: "Concentration in the equity portfolio",
        severity: "High",
        detail:
          "A handful of large public holdings can dominate the investment result. A decline in those positions hits book value and reported earnings at the same time.",
        watch:
          "The largest equity holdings as a share of the portfolio and the mark-to-market result.",
      },
      {
        title: "Succession and capital-allocation discipline",
        severity: "Medium",
        detail:
          "The franchise is built around a specific approach to allocating capital. A change in leadership could alter the willingness to hold cash or the discipline of the buyback.",
        watch:
          "Management commentary on capital deployment and buyback pricing.",
      },
      {
        title: "Rail and utility regulation",
        severity: "Medium",
        detail:
          "Regulators set railroad rates and utility returns. Adverse decisions reduce the cash those assets can generate.",
        watch:
          "Rate cases, regulatory rulings and volume trends at the railroad.",
      },
      {
        title: "Insurance market softening",
        severity: "Medium",
        detail:
          "When premiums fall, Berkshire historically shrinks volume rather than write unprofitable business. That preserves margins but reduces revenue.",
        watch:
          "Premium volume, pricing trends and management commentary on discipline.",
      },
    ],
    watchlist: [
      {
        title: "Float and underwriting result",
        detail:
          "The cost of the float is the single best indicator of the insurance engine.",
      },
      {
        title: "Book value per share",
        detail:
          "The cleanest anchor for value when GAAP earnings are distorted by investment marks.",
      },
      {
        title: "Cash and buyback activity",
        detail:
          "The size of the liquidity pool and the price at which shares are repurchased.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Berkshire Hathaway is a diversified operating company with an insurance balance sheet attached. Revenue of $259.7B, a 32.6% operating margin and a 12.1% return on equity are real, but they are consolidated figures that mix businesses with very different economics.",
      "The teaching point is that GAAP earnings can be a poor guide when a company owns a large securities portfolio. Investment marks swing reported profit, and standard multiples like P/E and EV/EBITDA lose their meaning. Book value, float, underwriting results and segment earnings are the right instruments.",
      "What is not known from this dataset is how much of the earnings base comes from underwriting versus investments, and what the parent will do with its cash. Those are the questions that determine the next decade of returns.",
    ],
    questions: [
      "Is the insurance operation producing an underwriting profit or a loss?",
      "How much of book value is represented by the equity portfolio rather than operating businesses?",
      "What price is the parent willing to pay for its own shares?",
      "How sensitive are the railroad and utility earnings to a recession?",
    ],
  },
};
