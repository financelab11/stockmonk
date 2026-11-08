import type { StockStory } from "./types";

export const ANET: StockStory = {
  ticker: "ANET",
  kicker: "Technology · Data-center networking",
  title: "Arista's switches carry software margins on hardware revenue",
  dek: "A 62.9% gross margin from selling boxes is the anomaly. The explanation is the operating system, and the risk is who buys it.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $11.89B on a trailing basis, up 40.7%, and the latest quarter grew 58.5% to $3.66B.",
    "Gross margin is 62.9%, operating margin is 43.8%, and free cash flow was $3.79B.",
    "The trailing net margin of 1.4% and the 1,253.9x P/E are distortions from a one-time charge, not the operating business.",
    "Net cash is $14.36B, and the shares sit near the top of their 52-week range.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000013/anet-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001596532&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Arista sells Ethernet switches for data centers and campus networks. The hardware is largely built from merchant silicon that anyone can buy. What customers pay for is the network operating system on top, the management software around it and the predictability of a design that has been qualified at very large scale.",
      "The latest quarter grew 58.5% to $3.66B at a 44.9% operating margin, on top of 40.7% growth for the trailing year to $11.89B. Growth of that size at a company already generating $9.01B in FY2025 is unusual, and it is concentrated in a small group of very large buyers whose needs are decided in annual capital budgets.",
      "The shares are at $170.80, near the top of a $114.52 to $217.41 range, for a market value of $215.79B. The trailing P/E of 1,253.9x and EV/EBITDA of 38.0x look absurd side by side, and the next section explains why only one of them is usable.",
    ],
    quote:
      "A switch is a commodity. A network that thousands of servers depend on is not. Arista is paid for the second and ships the first.",
  },
  whatItDoes: {
    paragraphs: [
      "The product line covers data-center switching, campus and branch networking, and the software that manages both. Customers fall into two groups. Cloud and AI customers buy very large numbers of high-speed switches for a small number of sites. Enterprise customers buy smaller quantities across many sites, with more software and support attached.",
      "The split matters because the two groups have different economics. Cloud orders are large, negotiated hard and delivered fast. Enterprise orders carry more software and services and renew over years. Arista's growth has been driven by the first group, and its durability depends on the second.",
      "The company employs 2,613 people, which is small for a business of this revenue. That is possible because the manufacturing is outsourced and the engineering effort goes into one architecture rather than a broad portfolio.",
    ],
    bullets: [
      {
        title: "Cloud and AI switching",
        detail:
          "High-speed Ethernet for the networks that connect large clusters of servers and accelerators. The fastest-growing and most concentrated part.",
      },
      {
        title: "Enterprise and campus",
        detail:
          "Smaller deployments with more software, management and support attached. The diversification story.",
      },
      {
        title: "EOS and management software",
        detail:
          "The network operating system and the tools that run it. Not a separate revenue line, but the reason the hardware earns a software margin.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 62.9% is high for a hardware seller. Part of the explanation is that Arista designs the system rather than assembling commodity parts, and part is that the software is bundled into the price of the switch. A customer buying a switch is also buying the operating system it runs, and that is where the pricing power sits.",
      "Operating margin of 43.8% is higher still, which is unusual for a company with a concentrated customer base. Large orders carry low selling costs, and one architecture spread across the product line keeps research spending efficient. The quarterly record shows how stable this is: 44.7%, 42.4%, 41.5%, 42.7%, 45.4% and 44.9%.",
      "The unit economics are therefore closer to a software company than to a hardware company, with one important difference: the revenue is recognized when switches ship, so a single customer's deployment schedule can move a quarter. Software companies with subscription billing have a smoother line.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $2.95B in FY2021 to $9.01B in FY2025, roughly tripling in four years. The quarterly series continues the climb: $2.20B, $2.31B, $2.49B, $2.71B, $3.04B and $3.66B. The last step is the largest.",
      "Third-party estimates call for $13.38B this fiscal year and $18.70B the next, which would put revenue 40% higher again in a single year. Those numbers assume the AI cluster build-out keeps consuming high-speed Ethernet at the current rate.",
      "The drivers are straightforward: more accelerators per cluster means more switch ports, faster speeds mean higher revenue per port, and AI networks need lower latency than general-purpose cloud networks. The brake is that the buyers are few, and their spending is decided in annual capital budgets.",
    ],
  },
  performance: {
    paragraphs: [
      "The operating margin has held between 41.5% and 45.4% for six consecutive quarters while revenue grew 66% from the first of those quarters to the last. That combination — rapid growth without margin decay — is rare and is the strongest evidence that the pricing power is real.",
      "The trailing net margin of 1.4% is not a measure of the business. Q4 FY2025 included a charge large enough to produce a net loss of $3.62B for the quarter, which dragged the trailing net income and the return on equity down with it. In FY2025 as a whole, net income was $3.51B on $9.01B of revenue, a 39.0% net margin.",
      "That is why the P/E of 1,253.9x should be ignored. A multiple computed on a denominator distorted by a one-off item says nothing about value. The operating margin, the free-cash-flow margin and the sales multiple are the measures that survive the distortion.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $3.79B, a 31.9% margin. The annual record shows the working-capital effect: $951.1M in FY2021, $448.2M in FY2022, $2.00B, $3.68B and $4.25B. FY2022 is the instructive year, when free cash flow fell even as revenue grew 48%, because inventory and receivables absorbed the cash.",
      "The balance sheet holds $14.36B of net cash, which is a large buffer relative to $11.89B of annual revenue. It means Arista can fund inventory ahead of a product transition without borrowing, which matters in a market where customers expect delivery on schedule.",
      "The company pays no dividend. Cash is retained and used to fund growth and buy back shares, and the net cash position means neither activity depends on the credit markets.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $170.80, Arista trades at 16.9x sales, 38.0x EV/EBITDA and 56.9x free cash flow, with a 1.8% free-cash-flow yield. Its EBITDA multiple is above Nvidia at 22.0x, Microsoft at 19.4x and Broadcom at 33.1x, and its sales multiple is the highest among the hardware and semiconductor names here.",
      "Those multiples are being applied to a business with a 43.8% operating margin, which is why they are not as stretched as they first appear. A company earning 44 cents of operating profit per dollar of revenue can carry a higher sales multiple than one earning 18 cents.",
      "What the multiple assumes is that the hyperscale networking cycle has several more years and that enterprise revenue grows fast enough to reduce concentration. Stockmonk does not publish a target price; the consensus below is third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-eight analysts, a mean target of $250.00 and a range of $205.00 to $305.00. Eight sit in the strongest positive bucket and 21 are positive, with no neutral or negative ratings at all.",
      "The estimates are $3.98B of revenue next quarter with $1.29 of EPS, $13.38B this fiscal year with $4.38, and $18.70B next fiscal year with $5.99. That is 37% EPS growth on 40% revenue growth, which implies the operating margin holds roughly where it is.",
      "A unanimous distribution is a sentiment fact worth separating from an analytical one. It says nobody is willing to argue the other side in public, not that the outcome is known.",
    ],
  },
  risks: {
    intro:
      "Arista's risks are concentrated in its customer list. The product position is strong; the question is how few buyers stand behind it.",
    items: [
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "A small number of cloud and AI customers account for a large share of revenue. A change in one deployment plan is visible in the next quarter.",
        watch:
          "Concentration disclosures and the split between cloud and enterprise revenue.",
      },
      {
        title: "Hyperscale capital spending",
        severity: "High",
        detail:
          "The growth rate depends on cluster construction continuing at the current pace. Networking is bought after compute, so a pause in accelerators reaches Arista with a delay.",
        watch:
          "Customer capital-expenditure guidance and order patterns.",
      },
      {
        title: "Merchant silicon and white boxes",
        severity: "High",
        detail:
          "The same silicon is available to any competitor, and large customers can build their own switches with their own software. That caps pricing over time.",
        watch:
          "Gross margin and the share of revenue from customers with in-house networking teams.",
      },
      {
        title: "Competition from incumbents",
        severity: "Medium",
        detail:
          "The largest networking vendor has a much broader installed base and can bundle switching with other infrastructure.",
        watch:
          "Win rates at enterprise accounts and the pace of campus adoption.",
      },
      {
        title: "Earnings quality",
        severity: "Low",
        detail:
          "A one-time charge has made the trailing net margin and P/E unreadable for now. The operating business is unaffected.",
        watch:
          "Whether net margin returns to the FY2025 level as the charge rolls out of the trailing period.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "The 62.9% figure is the proof of pricing power. A decline would mean the software premium is eroding.",
      },
      {
        title: "Enterprise revenue share",
        detail:
          "The measure of whether the customer base is broadening beyond a few cloud buyers.",
      },
      {
        title: "Operating margin",
        detail:
          "It has held in a narrow band for six quarters. Watch whether growth starts to cost margin.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Arista is a networking company that earns software economics on hardware revenue: 62.9% gross margin, 43.8% operating margin and $3.79B of free cash flow. Revenue of $11.89B grew 40.7% and the latest quarter grew 58.5%.",
      "The financial statements carry one large distortion. A charge in Q4 FY2025 pushed the trailing net margin to 1.4% and the P/E to four digits, which makes both numbers useless for comparison. The FY2025 net margin of 39.0% is the better reference.",
      "The educational point is that not every reported multiple means something. When a one-off item moves the denominator, the honest response is to switch to a measure it did not touch and to say so plainly.",
    ],
    questions: [
      "What share of revenue comes from the three largest customers?",
      "How much of the growth is ports versus price per port?",
      "Does enterprise revenue grow when cloud orders slow?",
      "How much of the 62.9% gross margin is attributable to bundled software?",
    ],
  },
};
