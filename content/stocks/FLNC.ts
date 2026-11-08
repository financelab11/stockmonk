import type { StockStory } from "./types";

export const FLNC: StockStory = {
  ticker: "FLNC",
  kicker: "Energy storage · Systems and services",
  title: "Fluence sells battery systems on a 9% gross margin",
  dek: "The company assembles storage plants from bought-in cells. That thin spread explains why four years of revenue growth produced one profitable year.",
  readingMinutes: 9,
  takeaways: [
    "Revenue is $2.63B, up 7.5%, after growing from $680.8M in FY2021.",
    "Gross margin is 9.3% and the operating margin is -3.6%.",
    "FY2024 was the only profitable year in the dataset, with $39.6M of operating income on $2.70B of revenue.",
    "Free cash flow was -$115.3M and the balance sheet carries $52.8M of net debt.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1868941/000186894125000081/flnc-20250930.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001868941&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Fluence builds and services grid-scale battery storage. A project is a containerised assembly of battery cells, power conversion equipment, thermal management and control software, installed at a substation or next to a wind or solar farm. The buyer is usually a utility, a renewable developer or an independent power producer that needs to shift electricity from one part of the day to another.",
      "The company does not make battery cells. It buys them, designs the system around them, integrates the components and takes responsibility for commissioning and long-term operation. That position in the value chain explains almost everything in the financial statements: revenue is large because the cells are expensive, and gross margin is thin because the cells are a commodity input with many suppliers.",
      "At $5.27 the market value is $972.8M against $2.63B of revenue. The shares are at the bottom of a 52-week range of $4.94 to $33.51 and have fallen 73.4% in a year and 85.4% over five. Revenue went up, the share price went down, and the gap between those two facts is the subject of this report.",
    ],
    quote:
      "A systems integrator earns the difference between the price of a finished storage plant and the cost of the components inside it. When cells are scarce the spread widens; when they are abundant the spread goes to whoever bids lowest.",
  },
  whatItDoes: {
    paragraphs: [
      "The product line runs from grid-scale systems down to smaller commercial installations, with the same integration logic at each size. Fluence also sells software that monitors and dispatches storage, and long-term service agreements that keep a plant available for a decade or more. The service book matters because it produces recurring revenue from an installed base that competitors cannot easily take away.",
      "The customer base is concentrated in project developers and utilities. A single large project can be hundreds of megawatt-hours and can move a quarter's revenue, which makes the order book a better guide to the next year than the trailing quarter. The company employs 2,021 people, a large share of them in engineering, delivery and service rather than manufacturing.",
      "Geographically the business sells into the main storage markets: the United States, parts of Europe, and Australia and Asia. Demand in each is shaped by local grid rules, renewable penetration and the availability of tax or capacity incentives, so the revenue mix moves with policy rather than with a single global cycle.",
    ],
    bullets: [
      {
        title: "Grid-scale systems",
        detail:
          "The bulk of revenue. Large projects sold to utilities and developers, priced per megawatt-hour of storage capacity.",
      },
      {
        title: "Software and controls",
        detail:
          "Dispatch and monitoring software that raises the value of the hardware and creates switching costs once a plant is installed.",
      },
      {
        title: "Long-term service",
        detail:
          "Availability commitments and maintenance on the installed base. Recurring, higher-margin and linked to past sales rather than to the next order.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is recognised on projects, usually as work progresses, and the cost of cells, enclosures, power electronics and installation is booked against it. With a 9.3% gross margin, roughly nine dollars of every ten of revenue is cost of goods. That leaves very little room for a pricing mistake, a delay or a rise in cell prices before the gross profit disappears.",
      "The operating cost base sits on top of that thin spread. Sales, engineering, warranties and administration consumed enough in FY2025 to turn a modest gross profit into a $45.1M operating loss. This is the structural problem of an integrator: it carries the complexity of an engineering firm on the margin of a distributor.",
      "The best years are the ones where the spread widens. FY2024 produced $39.6M of operating income and $22.7M of net income on $2.70B of revenue, the only profitable year in the dataset. That is a net margin below 1% at the peak of the cycle, which tells you how little buffer exists when the market turns.",
    ],
  },
  growth: {
    paragraphs: [
      "The dataset puts compound revenue growth at 32.2% a year, and the path shows why the pace has slowed: $680.8M in FY2021, $1.20B in FY2022, $2.22B in FY2023, $2.70B in FY2024 and $2.26B in FY2025. The trailing figure of $2.63B is up 7.5%, so the rapid phase has given way to something closer to flat.",
      "The quarterly pattern is strongly seasonal. Q4 FY2025 delivered $1.04B of revenue, more than twice the Q2 FY2026 figure of $464.9M. Projects are commissioned to deadlines, often tied to incentive schemes or grid connection dates, so revenue clusters at the end of the calendar year. Reading a single quarter as a trend is a mistake in this business.",
      "Consensus looks for $2.40B this fiscal year and $3.01B next, with losses per share of $1.30 and $0.53. The implied recovery in the second year depends on converting the order book into revenue at a better margin, not just on selling more systems.",
    ],
    bullets: [
      {
        title: "Order book conversion",
        detail:
          "The backlog is the leading indicator. Revenue follows project schedules, and a slipped commissioning date moves a quarter.",
      },
      {
        title: "Service revenue",
        detail:
          "The installed base grows every year and brings maintenance and software fees that do not depend on new orders.",
      },
      {
        title: "Cell prices",
        detail:
          "Cheaper cells lower the cost of a project but also lower the price competitors can bid. The net effect on margin is not automatic.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The operating margin history is a cycle in miniature. FY2021 lost $160.2M on $680.8M of revenue; FY2022 lost $287.8M on $1.20B; FY2023 lost $100.3M on $2.22B; FY2024 earned $39.6M on $2.70B; FY2025 lost $45.1M on $2.26B. Scale helped, but it did not make the business reliably profitable.",
      "The quarterly record shows the swing within a year. Q4 FY2025 ran a 4.4% operating margin while Q1 FY2026 ran -14.8%. A few large projects priced at different points in the cell cycle can move the consolidated margin by several points in a single quarter.",
      "Return on equity is -18.8% and return on invested capital is -15.6%. Neither is close to the cost of capital, which matters because storage projects consume working capital: inventory and contract assets build up before the customer pays.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$269.6M in FY2021, -$290.3M in FY2022, -$114.9M in FY2023, positive $71.6M in FY2024 and -$160.4M in FY2025. The positive year is the profitable one, which confirms that cash generation follows margin rather than revenue.",
      "Working capital is the swing factor. A storage project requires the company to buy cells and components before it is paid, so a growing order book absorbs cash even when the projects are profitable. A shrinking order book releases cash, which can make a weak year look better on the cash flow statement than on the income statement.",
      "The balance sheet carries $52.8M of net debt. That is modest against $2.63B of revenue, but it leaves less room than a net cash position would, and it means a bad year has to be funded from operations or new borrowing rather than from a surplus.",
    ],
  },
  valuation: {
    paragraphs: [
      "The trailing multiple is -8.7x earnings, which is not a valuation so much as a marker that there are no earnings to value. EV/Sales of 0.4x is the more informative number: the market is valuing the entire business at less than half of one year's revenue.",
      "That is what a low-margin integrator looks like when it is losing money. A 0.4x sales multiple would be cheap for a software company and expensive for a distributor. The question is which of the two Fluence resembles once the storage market matures, and the 9.3% gross margin suggests the distributor comparison is closer today.",
      "Stockmonk does not publish a target price. The attributed consensus mean of $7.95 appears below as third-party context; the spread between $3.00 and $15.00 shows how differently analysts weigh the same order book.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 20 analysts with a mean target of $7.95 and a range of $3.00 to $15.00. The mean is about 50% above the $5.27 close, but a range that wide on a company with this margin structure is a warning about precision.",
      "Estimates call for $812.2M of revenue next quarter, which fits the year-end pattern, and $580.2M the quarter after. For the current fiscal year the group expects $2.40B of revenue and a loss of $1.30 per share; next year, $3.01B and a loss of $0.53.",
      "The forecast improvement in losses without a forecast improvement in gross margin would have to come from operating cost control. That is the assumption to test against the next few quarters.",
    ],
  },
  risks: {
    intro:
      "Fluence's risks sit in the spread between component cost and contract price, and in the working capital needed to bridge the two.",
    items: [
      {
        title: "Thin and volatile gross margin",
        severity: "High",
        detail:
          "At a 9.3% gross margin, a small increase in cell or enclosure costs, or a fixed-price contract signed before prices moved, can wipe out the profit on a project.",
        watch:
          "Gross margin per quarter and any change in the mix of fixed-price versus index-linked contracts.",
      },
      {
        title: "Competition from cell manufacturers",
        severity: "High",
        detail:
          "Battery makers and low-cost Asian integrators can sell complete systems and capture the integration margin. A commodity product invites price competition.",
        watch:
          "Backlog margin, average selling price per megawatt-hour and win rates on large tenders.",
      },
      {
        title: "Working capital",
        severity: "Medium",
        detail:
          "Cell purchases are paid for before customers pay. Rapid growth absorbs cash, and a slowdown releases it, so the cash flow statement can mislead in both directions.",
        watch:
          "Inventory, contract assets and the length of the cash conversion cycle.",
      },
      {
        title: "Policy and incentive dependence",
        severity: "Medium",
        detail:
          "Storage demand is shaped by tax credits, capacity markets and grid rules. A change in any of them moves project economics and order timing.",
        watch:
          "Changes to storage incentives in the main markets and the share of revenue exposed to them.",
      },
      {
        title: "Project execution and warranties",
        severity: "Medium",
        detail:
          "A storage plant that misses its availability commitment costs money for years. Fire and safety incidents can also trigger recalls and reputational damage.",
        watch:
          "Warranty provisions, service costs and any incident disclosures.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "The single number that decides whether revenue growth creates or destroys value.",
      },
      {
        title: "Backlog and its margin",
        detail:
          "Order intake tells you about demand; the margin embedded in those orders tells you about the future income statement.",
      },
      {
        title: "Cash conversion",
        detail:
          "Compare operating cash flow with net income to see whether growth is being funded by customers or by the balance sheet.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Fluence is a large, low-margin systems integrator in a fast-growing market. Revenue of $2.63B produced a 9.3% gross margin, a -3.6% operating margin and negative free cash flow, and only one year in the dataset was profitable.",
      "The educational point is that revenue growth is not a strategy on its own. In a business where the input is a commodity and the output is a project, the only durable advantages are scale in procurement, software that raises the value of the hardware, and a service book that outlives the installation.",
      "What the tables do not show is the margin embedded in the current backlog. That single figure would tell a reader more about the next four quarters than any forecast of revenue.",
    ],
    questions: [
      "What gross margin is embedded in the current order book?",
      "How much of revenue comes from service and software rather than new projects?",
      "How much working capital does each dollar of new backlog absorb?",
      "What happens to the margin if cell prices fall further and competitors cut prices?",
    ],
  },
};
