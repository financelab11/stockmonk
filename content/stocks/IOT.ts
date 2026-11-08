import type { StockStory } from "./types";

export const IOT: StockStory = {
  ticker: "IOT",
  kicker: "Software & Cyber · Connected operations",
  title: "Samsara sells software with a sensor attached, and the hardware sets the terms",
  dek: "Revenue grew 29.5% to $1.85B and the operating line finally turned positive. A 76.4% gross margin shows what the connected-device model costs and what it is worth.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was $1.85B, up 29.5%, after compounding at 45.3% a year across the prior five fiscal years.",
    "Operating margin is 1.0% and free-cash-flow margin is 13.8%: the business has crossed into profit without yet earning much of it.",
    "Gross margin of 76.4% has to carry cameras, gateways, installation and cloud hosting, not just code.",
    "Free cash flow of $255.5M compares with -$190.8M in FY2022.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1642896/000162828026018167/iot-20260131.htm",
  irUrl: "https://www.samsara.com",
  bigPicture: {
    paragraphs: [
      "Samsara instruments the physical world and sells the resulting data as a subscription. A gateway plugged into a truck's diagnostic port reports location, engine behaviour and driver events. A camera watches the road and the cab. A sensor on a freezer, a generator or a pump reports whether the asset is where it should be and whether it is working.",
      "The customer is an operations director, not a chief information officer: a haulage firm, a utility, a construction company, a food distributor, a city. These buyers care about fuel, insurance claims, maintenance and whether a delivery arrived. The software is judged on those outcomes, which is why the company can charge a subscription for what looks at first like a hardware sale.",
      "Trailing revenue is $1.85B, up 29.5%. The latest quarter, Q2 FY27, produced $508.4M at a 1.0% operating margin. The shares closed at $40.98 for a $24.0B market capitalisation, 73% of the way up a 52-week range of $23.38 to $47.47.",
    ],
    quote:
      "The product is a camera bolted to a windscreen. The business is the eight years of subscription that follow the installation.",
  },
  whatItDoes: {
    paragraphs: [
      "Three product families share one cloud. Vehicle telematics covers location, routing, hours-of-service compliance and fuel. Video safety adds dash cameras and computer vision that flags harsh braking, tailgating and phone use, then produces a clip for a manager to review. Equipment and site monitoring extends the same idea to trailers, heavy machinery and fixed assets.",
      "The strategic logic is that each family raises the value of the others. A fleet that starts with tracking can add cameras without a new vendor, and a camera customer generates the video evidence that makes the tracking data actionable. Revenue per customer therefore grows with module attachment rather than with price increases.",
      "The company employs 4,100 people and reports one revenue line. The dataset does not split hardware from subscription or domestic from international revenue, which is a real limitation when the two have very different margins.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Customers sign multi-year subscriptions priced per vehicle or per asset, and the hardware is bundled into the deal. Accounting splits the two: device revenue is recognised when the unit ships, at a modest margin, while the subscription is recognised over the contract term at a much higher margin. The blended gross margin of 76.4% is the average of those two very different streams.",
      "That structure explains most of the income statement. Hardware pulls gross margin down and consumes working capital, because devices must be built and held in inventory before they are installed. Software pulls it up and scales. As the installed base grows, the software share of each contract rises and gross margin should drift upward — slowly, because every new customer starts with hardware.",
      "Operating margin is 1.0%, and the gap to the 13.8% free-cash-flow margin is the familiar software pattern of annual prepayment. There is a second gap worth noticing: net margin is 4.9%, above the operating margin, because interest earned on the cash balance and other non-operating items add to the net line. In the March quarter, net income of $44.5M against a 1.5% operating margin implies most of the profit came from below the operating line.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $428.3M in FY2022 to $652.5M, $937.4M, $1.25B and $1.62B in FY2026, a 45.3% compound rate. Quarterly revenue has climbed from $366.9M to $508.4M over the last six quarters, with the year-over-year rate holding near 30% rather than fading.",
      "Consensus estimates are $515.2M next quarter and $543.0M the quarter after, $2.05B for this fiscal year and $2.45B next, with EPS of $0.77 and $0.95. That is a forecast of continued compounding at roughly the current rate.",
      "What would slow it down is not demand so much as capacity. Devices have to be manufactured and shipped, installation has to be scheduled at customer sites, and the sales force has to be hired and trained before it produces. A hardware-linked model cannot scale as instantly as a pure download.",
    ],
    bullets: [
      {
        title: "Module attach",
        detail:
          "Adding video or equipment monitoring to an existing fleet is the cheapest revenue in the model because the account, the installer and the integration already exist.",
      },
      {
        title: "Fleet penetration",
        detail:
          "Most customers start with a subset of vehicles. Expanding from a pilot to the whole fleet is the main expansion path and the reason net retention matters here.",
      },
      {
        title: "New verticals",
        detail:
          "The same device and cloud work for utilities, construction, healthcare logistics and public sector, which widens the addressable market without new engineering.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual operating result improved from -$353.8M to -$259.5M, -$323.3M, -$190.0M and -$52.6M. The FY2024 step backwards is a reminder that this is a business investing through a build-out, not a smooth margin ramp.",
      "The quarterly sequence is cleaner: -9.1%, -6.8%, -0.4%, 2.0%, 1.5% and 1.0%. The crossing into positive territory happened in the December quarter, and the two quarters since have held just above zero rather than expanding. That flatness is the thing to watch: a hardware-heavy model can grow revenue for a long time without operating margin following.",
      "Return on equity is 6.4% and return on invested capital is not available in the dataset. Diluted EPS is $0.15 on a trailing basis.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow went from -$190.8M in FY2022 to -$136.3M, -$22.8M, $111.5M and $207.4M, reaching $255.5M on a trailing basis at a 13.8% margin. The improvement is faster than the operating margin because the subscription is billed in advance and because device costs are recovered early in a contract.",
      "Working capital is the constraint that does not appear in a software company. Devices sit in inventory, installations are paid for before the subscription revenue arrives, and a fast-growing customer base means the inventory balance keeps rising. Growth consumes cash here in a way it does not for a business that sells downloads.",
      "The dataset does not disclose net debt. What it does show is that the cash flow now covers the operating loss comfortably, so the company is funding its own expansion rather than relying on the equity market.",
    ],
  },
  valuation: {
    paragraphs: [
      "No price-to-earnings or EV/EBITDA multiple is available in the dataset, which is itself informative: at a 1.0% operating margin, an EBITDA multiple is being computed on a number close to zero and would not describe much. The usable anchors are the $24.0B market capitalisation against $1.85B of trailing revenue and a 13.8% free-cash-flow margin.",
      "Position within the peer group is easier to judge. Samsara's 29.5% growth is second only to Rubrik at 42.4% and well ahead of GitLab at 23.0%, SentinelOne at 21.1% and Tenable at 9.5%. Its 1.0% operating margin is positive, which only Tenable at 4.4% and Pegasystems at 9.9% also manage in this group.",
      "Samsara carries the largest market capitalisation in the peer set at $24.0B, ahead of Rubrik at $21.8B, while growing more slowly than Rubrik and losing far less at the operating line. Paying more for a smaller loss is a coherent position; it still requires the margin to expand.",
      "Stockmonk does not publish a target price. The consensus figure in the next section is third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-four analysts contribute to the attributed consensus. The mean target is $52.07 with a range of $39.00 to $60.00, a spread that brackets the current share price on both sides.",
      "Estimates are $515.2M of revenue and $0.19 of EPS next quarter, $2.05B and $0.77 for the fiscal year, then $2.45B and $0.95. The implied path is continued growth at roughly the recent rate with modest margin expansion — a demanding combination for a company that has to build and ship a device for every new vehicle it connects.",
    ],
  },
  risks: {
    intro:
      "Samsara's risks are operational and competitive rather than financial. Nothing in the reported numbers points to a financing problem; the questions are about hardware economics, field capacity and how defensible a camera on a truck really is.",
    items: [
      {
        title: "Hardware cost and supply",
        severity: "High",
        detail:
          "Every subscription begins with a device that must be manufactured, shipped and installed. Component costs, tariffs or a supply interruption hit gross margin before they hit revenue.",
        watch:
          "Gross margin by quarter and any commentary on device costs.",
      },
      {
        title: "Low-cost and bundled competition",
        severity: "High",
        detail:
          "Telematics is a crowded market with cheaper trackers and with vehicle manufacturers building connectivity into the truck itself. Either can cap what a subscription is worth.",
        watch:
          "Average revenue per vehicle and win rates against cheaper alternatives.",
      },
      {
        title: "Installation and service capacity",
        severity: "Medium",
        detail:
          "Growth depends on physically fitting devices at customer sites. That is a people constraint, not a software one, and it does not scale with a server bill.",
        watch:
          "The rate of new vehicle activations and the cost of onboarding a customer.",
      },
      {
        title: "Video and privacy regulation",
        severity: "Medium",
        detail:
          "Camera-based driver monitoring is regulated differently across jurisdictions, and rules on employee monitoring can change what the product is allowed to do.",
        watch:
          "Regional regulatory changes and the share of revenue from video.",
      },
      {
        title: "Thin operating margin",
        severity: "Medium",
        detail:
          "At 1.0%, the operating margin leaves no cushion. A slower quarter or a jump in device costs would push the company back to a loss.",
        watch:
          "Operating margin excluding stock compensation and the trend in sales spending.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "The blended 76.4% should rise as the software share of the base grows. If it does not, hardware is taking more of the value than the story assumes.",
      },
      {
        title: "Operating margin",
        detail:
          "Positive is not the same as expanding. Three quarters near 1% would suggest the model scales revenue but not profit.",
      },
      {
        title: "Net revenue retention",
        detail:
          "Expansion from a pilot fleet to a full fleet is the cheapest growth available, and the clearest signal of product fit.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Samsara has built a genuinely differentiated product by combining devices, cloud and computer vision into something an operations manager can use without a data team. It has also built a business that must manufacture, ship and install a physical object for every new subscription.",
      "That mixture explains the financial shape: fast growth, high but not software-like gross margin, and an operating line that has only just crossed zero. Free cash flow looks better than earnings because customers pay in advance, which is real but not unlimited.",
      "The reader should leave with a view on whether hardware is a moat — because it is hard to install and therefore hard to rip out — or a tax on a business that would otherwise earn software margins.",
    ],
    questions: [
      "What share of revenue comes from devices versus subscriptions, and how is that mix changing?",
      "How much of growth comes from adding vehicles at existing customers?",
      "Does gross margin rise as the installed base matures?",
      "What would a 10% increase in device costs do to the operating margin?",
    ],
  },
};
