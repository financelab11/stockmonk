import type { StockStory } from "./types";

export const MSFT: StockStory = {
  ticker: "MSFT",
  kicker: "Application software · Cloud infrastructure",
  title: "Microsoft is selling AI through the software enterprises already own",
  dek: "The cloud is the growth engine, but the installed base of Office, Windows and developer tools is what makes Microsoft's AI distribution unusually cheap.",
  readingMinutes: 11,
  takeaways: [
    "Revenue reached $346.4B on a trailing basis, up 17.9% year over year.",
    "Intelligent Cloud is 41.5% of revenue and the fastest-growing major segment.",
    "Operating margin is 47.1%, but free-cash-flow margin is only 17.3% because AI capex is heavy.",
    "Net cash of $29.0B gives Microsoft room to keep investing without balance-sheet strain.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm",
  irUrl: "https://www.microsoft.com/en-us/investor",
  earningsReleaseUrl:
    "https://www.sec.gov/Archives/edgar/data/789019/000119312526436122/msft-ex99_1.htm",
  bigPicture: {
    paragraphs: [
      "Microsoft is one of the few companies that can distribute AI through products enterprises already buy. Office, Windows, Azure, GitHub and the Power Platform reach hundreds of millions of users, so a new capability can be monetised as an add-on rather than acquired through a new vendor relationship.",
      "The financial profile reflects that advantage. Revenue has compounded at 15.1% a year from fiscal 2020 to fiscal 2026, reaching $331.8B, and trailing revenue is now $346.4B. Operating margin has expanded from 37.0% to 47.1% over the same period as the mix shifted toward cloud and subscription software.",
      "The tension is capital intensity. Microsoft is spending heavily on data centers and accelerators, which is why free-cash-flow margin is 17.3% even though operating margin is 47.1%. The market is paying for the revenue growth and trusting that the capex eventually earns a return.",
    ],
    quote:
      "Microsoft's advantage is not that it has the best model. It is that it has the shortest path from a model to a paying enterprise seat.",
  },
  whatItDoes: {
    paragraphs: [
      "The company reports three segments. Productivity & Business Processes contains Office, LinkedIn and Dynamics. Intelligent Cloud contains Azure, server products and enterprise services. More Personal Computing contains Windows, gaming, search and devices.",
      "The segment names hide the interconnection. Azure sells compute and AI services, but Office and Windows generate the data, identity and workflow context that make those services stickier. A customer that already runs Microsoft 365 and Entra ID has a lower switching cost to Azure than to a rival cloud.",
      "Microsoft also owns a large stake in OpenAI and has integrated its models into Copilot products. That relationship is a strategic asset and a governance question at the same time, because the terms can change and the investment is not a conventional wholly-owned business.",
    ],
    bullets: [
      {
        title: "Productivity & Business Processes",
        detail:
          "Office 365, LinkedIn, Dynamics. 42.2% of annual revenue and the subscription base that funds the rest.",
      },
      {
        title: "Intelligent Cloud",
        detail:
          "Azure, server products, enterprise services. 41.5% of revenue and the main AI growth vector.",
      },
      {
        title: "More Personal Computing",
        detail:
          "Windows, gaming, search and devices. 16.3% of revenue and a cyclical consumer exposure.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Most of Microsoft's revenue is recurring. Commercial subscriptions renew on multi-year contracts, and Azure consumption grows with customer workloads. That model produces high visibility and negative working capital, which is why the company can fund a large dividend and buyback while still investing heavily.",
      "The United States is 51.5% of revenue and non-US markets are 48.5%, so Microsoft is genuinely global. Currency movements matter, but the bigger driver is the pace at which existing customers move workloads to the cloud and add AI seats.",
      "The mix is shifting toward infrastructure, which is lower-margin than software but larger and stickier. Investors should watch the gross margin of Intelligent Cloud separately from the company average, because AI capacity costs land there first.",
    ],
  },
  growth: {
    paragraphs: [
      "Trailing revenue growth is 17.9%, and the latest quarter, Q1 FY2027, grew 18.8% to $92.3B. That is remarkably steady for a company of this size. The attributed consensus expects $395.9B of revenue for the current fiscal year, up 19.3%, and $476.4B the following year.",
      "The growth engines are Azure AI consumption, Copilot seat adoption and the security business. Each is tied to the same enterprise budget, which is a strength in good times and a correlation risk in a slowdown.",
      "The key question is whether AI revenue is incremental or a reallocation of existing cloud spend. Microsoft does not disclose AI revenue separately, so investors have to infer it from Azure growth and commentary about capacity constraints.",
    ],
    bullets: [
      {
        title: "Azure AI consumption",
        detail:
          "Customers pay for compute and model inference as they use it. Growth is high but capacity-constrained.",
      },
      {
        title: "Copilot seats",
        detail:
          "AI add-ons to Office and GitHub expand revenue per user without acquiring a new customer.",
      },
      {
        title: "Security",
        detail:
          "A large and growing subscription business that benefits from bundling and consolidation.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin of 47.1% and net margin of 41.2% are elite for a company with a large infrastructure business. Return on invested capital is 29.2%, well above the cost of capital even after the recent capex surge.",
      "The margin trend has been consistently upward: 37.0% in fiscal 2020, 41.6% in fiscal 2021, 44.6% in fiscal 2024 and 47.1% on a trailing basis. The risk is that AI depreciation and energy costs stop that expansion.",
      "Diluted EPS reached $17.95 in fiscal 2026, and consensus expects $20.00 this year and $24.18 next year. EPS growth has been helped by buybacks, so revenue and operating income are the cleaner operating indicators.",
    ],
  },
  cash: {
    paragraphs: [
      "Microsoft generated $60.0B of free cash flow on a trailing basis, a 17.3% margin. That is a sharp decline from the 30%+ margins the company used to post, because capital expenditure has risen to fund AI capacity.",
      "The balance sheet remains strong: $29.0B of net cash after debt. That gives Microsoft the ability to keep building data centers through a downturn, which is a competitive advantage against smaller cloud providers.",
      "The cash-flow statement is the place to watch the AI investment cycle. If capex grows faster than operating cash flow for several more years, free cash flow per share will lag earnings growth even if the income statement looks healthy.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $530.61, Microsoft trades at 27.6x trailing earnings, 19.4x EV/EBITDA and 65.7x free cash flow. The earnings multiple is below the company's recent history; the free-cash-flow multiple is elevated because of the capex cycle.",
      "That divergence is the valuation debate in one line. Investors who believe the capex is a temporary investment in a durable AI franchise will focus on earnings. Investors who think depreciation and competition will cap returns will focus on free cash flow.",
      "Stockmonk does not set a price target. The attributed consensus mean is shown in the next section as third-party context, and the range is more useful than the average.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus includes 54 analysts with a mean target of $634.14. The recommendation mix is strongly positive, and estimates call for 19.3% revenue growth this fiscal year.",
      "The estimates are relatively tightly clustered for a company this large, which reflects the visibility of subscription revenue. The main source of disagreement is the margin trajectory, not the top line.",
      "A high mean target is not a Stockmonk rating. It is a snapshot of how the sell side is modelling the same capex and AI adoption questions covered in this report.",
    ],
  },
  risks: {
    intro:
      "Microsoft's balance sheet and recurring revenue reduce financial risk. The important risks are competitive, regulatory and capital-allocation related.",
    items: [
      {
        title: "AI capex returns",
        severity: "High",
        detail:
          "Capital expenditure is rising faster than free cash flow. If AI demand does not scale as expected, depreciation will weigh on margins.",
        watch:
          "Capital expenditure guidance, Azure growth and management commentary on capacity utilisation.",
      },
      {
        title: "OpenAI relationship",
        severity: "Medium",
        detail:
          "Microsoft's AI position depends partly on a partner it does not control. Changes in governance, economics or model access would matter.",
        watch:
          "Contract disclosures and changes to the OpenAI commercial arrangement.",
      },
      {
        title: "Cloud competition",
        severity: "Medium",
        detail:
          "AWS and Google Cloud are aggressive on price and AI services. Azure's growth premium is not guaranteed.",
        watch:
          "Azure growth relative to AWS and Google Cloud, and gross-margin trends.",
      },
      {
        title: "Regulation",
        severity: "Medium",
        detail:
          "Bundling, cloud licensing and the Activision acquisition have attracted regulatory scrutiny in multiple jurisdictions.",
        watch:
          "Antitrust proceedings and changes to software licensing terms.",
      },
      {
        title: "Consumer and PC cyclicality",
        severity: "Low",
        detail:
          "Windows and gaming are exposed to hardware cycles, but they are a smaller part of the mix than they used to be.",
        watch:
          "PC shipment data and gaming content releases.",
      },
    ],
    watchlist: [
      {
        title: "Azure growth",
        detail:
          "The quarterly growth rate is the cleanest read on AI demand and competitive position.",
      },
      {
        title: "Capex as a share of revenue",
        detail:
          "A rising ratio is not automatically bad, but it needs to translate into future revenue.",
      },
      {
        title: "Copilot monetisation",
        detail:
          "Seat counts and average revenue per user would show whether AI is expanding the software budget.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Microsoft is a high-quality compounder with a rare distribution advantage in enterprise software. Revenue is recurring, margins are high and the balance sheet is strong.",
      "The educational point is that free cash flow and earnings can tell different stories during a heavy investment cycle. Microsoft's earnings multiple looks reasonable while its free-cash-flow multiple looks expensive, and both are correct depending on the time horizon.",
      "The reader should focus on three things: Azure's growth durability, the return on AI capex, and whether Copilot expands the software budget or merely shifts it.",
    ],
    questions: [
      "How much of Azure growth is AI inference versus traditional cloud migration?",
      "When does the capex cycle peak relative to revenue?",
      "Is Copilot incremental revenue or a defensive feature?",
      "What would a 10% enterprise IT budget cut do to growth?",
    ],
  },
};
