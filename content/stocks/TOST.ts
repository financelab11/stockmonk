import type { StockStory } from "./types";

export const TOST: StockStory = {
  ticker: "TOST",
  kicker: "Fintech & Crypto · Application Software",
  title: "Toast gets paid twice per restaurant: a subscription and a slice of card volume",
  dek: "Revenue of $7.15B carries only a 27.0% gross margin because payment volume is recorded near gross. The operating margin has climbed from 5.1% to 8.3% as the installed restaurant base filled in.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $7.15B on a trailing basis, up 22.1%, with the latest quarter up 21.3%.",
    "Gross margin of 27.0% reflects a payments-heavy revenue mix, not weak software pricing.",
    "Operating income went from -$228.0M in FY2021 to +$292.0M in FY2025.",
    "Free cash flow of $604.0M and net cash of $1.89B give the company room to keep investing.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1650164/000165016426000057/tost-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001650164&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Toast sells a restaurant operating system: a point-of-sale terminal built on Android, the software that runs orders, menus, kitchen tickets, staff scheduling and online ordering, and the payments processing that sits underneath all of it. The company was founded in 2012 in Cambridge, Massachusetts, is now based in Boston and employs about 2,021 people.",
      "The model is deliberately two-sided. Restaurants pay a subscription for the software, then pay again through the spread on card payments. The software makes the terminal sticky; the payments make the money. That is why revenue of $7.15B produces a gross margin of 27.0% rather than the much higher margin a pure software company would report: most of the revenue is payment volume passing through card networks.",
      "The company is now profitable and has been since FY2024. Revenue grew from $1.71B in FY2021 to $6.15B in FY2025, and operating income went from -$228.0M to +$292.0M over the same period. At $34.67 the equity is worth $20.14B, in the upper part of a 52-week range of $22.26 to $39.67.",
    ],
    quote:
      "The software is the wedge and the payments are the business. Every restaurant that installs a Toast terminal becomes a stream of card volume that Toast processes at a spread.",
  },
  whatItDoes: {
    paragraphs: [
      "The hardware is a set of terminals, handhelds and kitchen displays, sold or leased to the restaurant. The software covers the parts of the day a restaurant has to manage: taking orders at the counter, sending tickets to the kitchen, running a delivery integration, tracking labour, and closing the books. The payments product authorises and settles the card transactions that flow through the same system.",
      "Toast also lends to its restaurant customers, which is a natural extension: it can see daily card volume and therefore has a real-time view of a borrower's revenue. That lending is small relative to payments but it is strategically important, because it deepens the relationship and gives the customer a reason not to switch.",
      "The customer base spans independent restaurants, multi-unit operators and franchise groups. Independents are numerous and cheap to reach through channel partners and referrals; multi-unit chains are fewer, larger and harder to win from incumbent systems. The mix between them determines both the average revenue per location and the churn rate.",
    ],
    bullets: [
      {
        title: "Subscription software",
        detail:
          "A recurring fee per location for the operating system. High margin, low revenue per customer, and the part that makes the product sticky.",
      },
      {
        title: "Payments",
        detail:
          "A spread on card volume. The largest revenue line and the reason the consolidated gross margin looks like a processor's.",
      },
      {
        title: "Lending and add-ons",
        detail:
          "Merchant cash advances, payroll, marketing and supplier tools. Small today, but each one raises the cost of leaving.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Payments revenue is recognised on the volume processed, with the card network and issuing bank costs sitting in cost of revenue. That is why the gross margin is 27.0%: the company keeps a spread on each transaction rather than the whole ticket. A restaurant doing $1M a year in card sales contributes a few percent of that as gross profit, plus a subscription fee per terminal.",
      "The operating leverage comes from the software layer. Once a restaurant is installed, the incremental cost of processing its payments is close to variable, but the cost of the platform, the sales channel and the support organisation is largely fixed. Each additional location spreads those costs further. That is what moved the operating margin from 5.1% in Q3 FY2025 to 8.3% in Q3 FY2026.",
      "The unit economics therefore hinge on two numbers a reader cannot see directly in the consolidated statements: revenue per location and the retention rate. Growing locations at a constant revenue per location produces linear growth; growing revenue per location through more products produces margin expansion on top of it.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew 22.1% on a trailing basis and 21.3% in the latest quarter. The annual series shows remarkable consistency: $1.71B, $2.73B, $3.87B, $4.96B and $6.15B. Unlike most high-growth companies, the growth rate has not collapsed as the base has grown; it has settled in the low twenties.",
      "The drivers are new locations, more products per location, and the growth of card volume per location as restaurants raise prices. The first is a sales and channel question, the second is a product question, and the third arrives with inflation. All three have been working at once, which is why growth has held up.",
      "What would slow it: restaurant closures, which remove locations and are a fact of the industry; competition from other terminal providers that bundle software; and any pressure on the payments spread as large chains negotiate. A restaurant downturn would hit all three at the same time, since closures reduce volume and surviving restaurants cut spending.",
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly trend is one of steady improvement. Operating margin went from 5.2% in Q2 FY2025 to 5.1%, 5.2%, 6.7%, 8.0% and 8.3% in Q3 FY2026. Net income rose from $80.0M to $169.0M and diluted EPS from $0.13 to $0.29 over the same six quarters. Revenue in the latest quarter was $1.98B.",
      "The longer record shows how much ground was covered. FY2021 had a net loss of $487.0M against an operating loss of $228.0M, meaning a large part of that year's loss came from below the operating line. By FY2024 the company was marginally profitable at $16.0M of operating income; by FY2025 that had become $292.0M.",
      "Returns look extreme: return on equity is 24.0% and return on invested capital is 100.6%. A return above 100% does not mean the business earns more than it invests in any ordinary sense; it means the invested capital base is very small relative to the profit, which is a feature of an asset-light model funded partly by merchant settlement timing. Read it as evidence of low capital intensity, not as a durability score.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is $604.0M on a trailing basis, an 8.4% margin, and the annual series has been positive since FY2023: $93.0M, $306.0M and $608.0M. That progression tracks operating income closely, which means the accounting profit is converting into cash rather than sitting in receivables.",
      "The balance sheet holds $1.89B of net cash. Toast does not need to raise money to fund growth at the current rate, and it has the option to invest in lending, hardware or acquisitions without diluting shareholders. That is a materially different position from the FY2022 period, when free cash flow was -$189.0M.",
      "One caveat on cash flow for any payments company: the movement of merchant settlement funds can distort the operating cash line from quarter to quarter. The annual figures are the more reliable signal, and they show a business that now generates cash consistently.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $34.67 the equity is worth $20.14B. The P/E is 36.6x, EV/EBITDA 32.5x, price-to-free-cash-flow 33.3x and EV/sales 2.6x. Those four are broadly consistent with each other, which is what you want to see before trusting any of them: a company trading at 36.6x earnings and 33.3x free cash flow is being valued on profit, not on revenue.",
      "The peer set splits along business model lines. Shift4 trades at 0.4x sales and 25.9x earnings on a much larger, lower-margin processing base. PayPal trades at 1.5x sales and 10.4x earnings. Affirm at 13.2x sales is valued on a lending model. Toast at 2.6x sales sits between the processors and the platforms.",
      "The multiple assumes the operating margin keeps climbing. At 8.3% the company is profitable but not yet earning the kind of margin a software business commands; the case for 36.6x earnings is that the margin has room to double as the fixed cost base is spread over a larger installed base.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-seven analysts contribute to the attributed third-party consensus, with a mean target of $38.96 and a range of $27.00 to $45.00. The range is narrow at the top and wide at the bottom, which suggests disagreement about the downside rather than the upside.",
      "Current-year estimates are $7.49B of revenue and EPS of $1.43, rising to $8.88B and $1.76 next year. Sixteen analysts contribute to each annual figure. The implied revenue growth is roughly in line with the trailing rate, and the EPS growth is faster, which again requires margin expansion.",
      "Those are third-party forecasts, not a Stockmonk view. The gap between the $1.43 estimate and the $0.92 trailing EPS is the margin-expansion assumption stated as a number.",
    ],
  },
  risks: {
    intro:
      "Toast's risks are the risks of its customers. Restaurants fail often, they are cyclical, and they negotiate hard when they get large.",
    items: [
      {
        title: "Restaurant closures and churn",
        severity: "High",
        detail:
          "A large share of the customer base is independent restaurants, a category with high failure rates. Closures remove both the subscription and the payment volume.",
        watch:
          "Net location additions, which separate new wins from losses, rather than gross installs.",
      },
      {
        title: "Payments spread pressure",
        severity: "Medium",
        detail:
          "Large multi-unit operators can negotiate lower processing rates, and competitors bundle hardware cheaply to win them.",
        watch:
          "Revenue as a percentage of processed volume and the mix between independent and chain locations.",
      },
      {
        title: "Competition from bundled terminals",
        severity: "Medium",
        detail:
          "Other terminal providers and software vendors sell overlapping products. Switching costs are real but not absolute, especially for a new restaurant.",
        watch:
          "Win rates in multi-unit deals and any change in hardware subsidy.",
      },
      {
        title: "Credit risk on restaurant lending",
        severity: "Medium",
        detail:
          "Merchant advances are underwritten against daily card volume. A restaurant slowdown raises losses on that book.",
        watch:
          "Loan book size, loss rates and provisioning for the lending product.",
      },
      {
        title: "Margin dependence on scale",
        severity: "Medium",
        detail:
          "The valuation assumes the operating margin keeps rising. If location growth slows, the fixed cost base becomes a drag rather than a lever.",
        watch:
          "Operating margin against location growth: both need to move together.",
      },
      {
        title: "Hardware and integration execution",
        severity: "Low",
        detail:
          "Terminals, kitchen displays and delivery integrations have to work in a live service environment where downtime is measured in lost covers.",
        watch:
          "Any increase in hardware subsidies or service credits.",
      },
    ],
    watchlist: [
      {
        title: "Net location additions",
        detail:
          "The growth engine. Gross installs hide churn; net additions do not.",
      },
      {
        title: "Operating margin",
        detail:
          "The path from 8.3% toward the mid-teens is the entire valuation case.",
      },
      {
        title: "Revenue per location",
        detail:
          "Rising revenue per location means more products are being sold to the same restaurant.",
      },
      {
        title: "Payments take rate",
        detail:
          "The spread kept on card volume, which is where most of the gross profit comes from.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Toast is a restaurant software and payments company with $7.15B of trailing revenue, a 7.2% operating margin, $604.0M of free cash flow and $1.89B of net cash. It has grown revenue every year in the series and turned an operating loss of $228.0M in FY2021 into a profit of $292.0M in FY2025.",
      "The 27.0% gross margin is the number most likely to be misread. It is a consequence of recording payment volume near gross, not evidence that the software is cheap or the business is weak. On gross profit the company looks much more like a software business, and the operating margin trend is the proof that the model scales.",
      "The open question is how much more margin is available. At 8.3%, Toast keeps a modest share of each restaurant's spend. The valuation assumes that share rises as the installed base grows, which is plausible and not yet demonstrated.",
    ],
    questions: [
      "What were net location additions in the last four quarters, after closures?",
      "How much revenue does the average location generate per year, and is it rising?",
      "What share of locations are multi-unit operators, and how does their pricing differ?",
      "How large is the lending book and what losses is it carrying?",
    ],
  },
};
