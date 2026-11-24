import type { StockStory } from "./types";

export const TOST: StockStory = {
  "ticker": "TOST",
  "kicker": "Fintech & Crypto · Application Software",
  "title": "Toast gets paid twice per restaurant: a subscription and a slice of card volume",
  "dek": "Revenue of $7.15B carries only a 27.0% gross margin because payment volume is recorded near gross. The operating margin has climbed from 5.1% to 8.3% as the installed restaurant base filled in.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue of $7.2B grew 22.1% at a 27.0% gross margin, which is the arithmetic of recording restaurant card volume near gross, not a software margin.",
    "Operating margin rose from 5.1% to 8.3% in four quarters while free cash flow reached $604.0M, an 8.4% margin, and net cash reached $1.2B.",
    "At 34.1x earnings and 31.3x EBITDA the shares carry the highest P/E in the payments group, where the median is 25.9x.",
    "Twenty-seven analysts put the mean target at $39 against a $32 price, with eleven neutral views and estimates revised up 3.4% in the past month."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1650164/000165016426000057/tost-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001650164&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Restaurant locations are the unit that matters, and the September quarter shows the model working on them: revenue of $2.0B, an 8.3% operating margin and $0.29 of EPS, each better than the June quarter. Trailing revenue is $7.2B, up 22.1%, but the margin is the more important number. It has climbed from 5.1% a year earlier to 8.3%, which is what happens when a fixed platform and support organisation is spread over more locations.",
      "The 27.0% gross margin is a processing fact rather than a software fact. Toast books the card volume it settles and the network costs it pays, keeping a spread instead of the whole ticket, so the consolidated margin looks like an acquirer's. The subscription and the lending book sit inside that spread and carry better economics. That is why operating margin can rise while gross margin moves by little more than a point: the leverage is in the operating expense line, not in cost of goods.",
      "The $18.8B market value is 34.1x trailing earnings and 31.3x EBITDA, the top of a payments group whose median P/E is 25.9x. Shift4, smaller by revenue but growing faster at 27.0%, trades at 26.7x earnings and 7.7x EBITDA, so the gap is not about growth. It is about the quality of the revenue: Toast's 21.6% return on invested capital and $1.2B of net cash against Shift4's 4.7% return and $4.2B of net debt. The multiple is a claim on that difference persisting."
    ],
    "quote": "Toast keeps a few percent of every restaurant's card volume and a subscription on top, and the 8.3% operating margin is what those two now produce."
  },
  "whatItDoes": {
    "paragraphs": [
      "The hardware is a set of terminals, handhelds and kitchen displays, sold or leased to the restaurant. The software covers the parts of the day a restaurant has to manage: taking orders at the counter, sending tickets to the kitchen, running a delivery integration, tracking labour, and closing the books. The payments product authorises and settles the card transactions that flow through the same system.",
      "Toast also lends to its restaurant customers, which is a natural extension: it can see daily card volume and therefore has a real-time view of a borrower's revenue. That lending is small relative to payments but it is strategically important, because it deepens the relationship and gives the customer a reason not to switch.",
      "The customer base spans independent restaurants, multi-unit operators and franchise groups. Independents are numerous and cheap to reach through channel partners and referrals; multi-unit chains are fewer, larger and harder to win from incumbent systems. The mix between them determines both the average revenue per location and the churn rate."
    ],
    "bullets": [
      {
        "title": "Subscription software",
        "detail": "A recurring fee per location for the operating system. High margin, low revenue per customer, and the part that makes the product sticky."
      },
      {
        "title": "Payments",
        "detail": "A spread on card volume. The largest revenue line and the reason the consolidated gross margin looks like a processor's."
      },
      {
        "title": "Lending and add-ons",
        "detail": "Merchant cash advances, payroll, marketing and supplier tools. Small today, but each one raises the cost of leaving."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Payments revenue is recognised on the volume processed, with the card network and issuing bank costs sitting in cost of revenue. That is why the gross margin is 27.0%: the company keeps a spread on each transaction rather than the whole ticket. A restaurant doing $1M a year in card sales contributes a few percent of that as gross profit, plus a subscription fee per terminal.",
      "The operating leverage comes from the software layer. Once a restaurant is installed, the incremental cost of processing its payments is close to variable, but the cost of the platform, the sales channel and the support organisation is largely fixed. Each additional location spreads those costs further. That is what moved the operating margin from 5.1% in Q3 FY2025 to 8.3% in Q3 FY2026.",
      "The unit economics therefore hinge on two numbers a reader cannot see directly in the consolidated statements: revenue per location and the retention rate. Growing locations at a constant revenue per location produces linear growth; growing revenue per location through more products produces margin expansion on top of it."
    ]
  },
  "growth": {
    "paragraphs": [
      "Growth comes from two places the statements do not separate: more locations, and more revenue from each one. The reported line blends them, so a 22.1% trailing increase could be many new independents on thin product attach or fewer multi-unit operators buying payments, payroll and lending together. The margin trend is the clue. It rose from 5.1% to 8.3% over four quarters, which is hard to achieve on new locations alone, because a new restaurant starts near breakeven on subscription and takes time to add products.",
      "Estimates assume $7.5B of revenue in fiscal 2026, 21.7% growth, and $8.9B in 2027, 18.7%, with EPS rising 41.8% and then 23.4%. Profit growing twice as fast as revenue is the consensus asserting continued operating leverage. The revision trend supports it, up 3.4% in thirty days, and the last four quarters all beat the consensus figure. What the estimates cannot show is whether the leverage comes from software attach, which is durable, or from payment spread, which is not.",
      "Durability runs through retention. The customer base is weighted toward independent restaurants, a category with high failure rates, so gross installs overstate growth: a closure removes both the subscription and the payment volume. Net location additions are not reported, which is why the revenue line and the margin have to carry the argument. A payments business with a 27.0% gross margin and a 21.6% return on capital is a good business; whether it deserves 34.1x earnings depends on the churn inside that base."
    ],
    "bullets": [
      {
        "title": "Revenue per location",
        "detail": "More products per restaurant raise revenue without adding a customer, and the subscription, payments and lending stack is the mechanism behind the margin."
      },
      {
        "title": "Independent churn",
        "detail": "Closures remove subscription and volume at the same time, so net location additions matter more than the gross install number."
      },
      {
        "title": "Lending attach",
        "detail": "Merchant advances are underwritten against daily card volume, which gives a real-time view of a borrower's revenue and a credit exposure that grows with the book."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Almost all of the improvement sits in operating expenses. Gross margin was 25.9% in FY2025 and 27.0% trailing, a move of about a point, while operating margin went from 4.7% to 7.2% and then 8.3% in the September quarter. Sales, support and technology did not grow as fast as revenue, which is what a platform filling in looks like. Net margin followed from 5.6% to 7.7%, slightly above operating margin because interest income on the cash balance contributes.",
      "Annual EPS was $0.56 in FY2025, and the September quarter alone produced $0.29. Return on invested capital of 21.6% and return on equity of 24.0% are the highest in the payments group, and they are achieved with net cash rather than leverage. Against Shift4's 4.7% return on capital, the difference is not scale, since Shift4 has $4.9B of revenue to Toast's $7.2B, but the absence of acquisition amortisation and debt in Toast's structure.",
      "The quarterly margin path has been steady rather than spectacular: 6.7%, 8.0% and 8.3% through fiscal 2026, after 5.2% in the December 2025 quarter. That is a slower rate of improvement than the revenue growth would suggest, and it is the honest measure of how much operating leverage is left. A business at an 8.3% operating margin with a 27.0% gross margin has room, but the room is in scale, not in price."
    ]
  },
  "cash": {
    "paragraphs": [
      "Cash conversion of 8.4% is slightly above the 7.2% operating margin, so earnings are turning into cash rather than being absorbed by working capital. Capex is small, at $53.0M in FY2025 and under 1% of revenue, because the terminals are manufactured by partners and the platform is software. That is the structural reason a payments business with a 27.0% gross margin can produce software-like cash conversion: the capital intensity sits with the hardware partner, not on Toast's balance sheet.",
      "Net cash of $1.2B, equal to 2.1x EBITDA, lets the company fund merchant lending from its own balance sheet without borrowing. No dividend is paid, and the cash has been accumulated rather than returned; the interest it earns shows up in the net margin. The absence of debt also means interest cover of 10.0x is a formality rather than a constraint, which is unusual for a company growing this fast.",
      "The one place cash could leak is the lending book. Merchant advances are small relative to payments, but they are credit, and a restaurant slowdown would raise losses on a book underwritten against daily card volume. Size and loss rate are not disclosed, so the balance sheet risk has to be inferred from the net cash position. At $1.2B there is enough cushion to absorb a modest credit cycle without impairing the growth plan."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Shift4 is the comparison that matters. Toast trades at 34.1x trailing earnings and 31.3x EBITDA; Shift4, smaller by revenue but growing faster, trades at 26.7x and 7.7x. PayPal, the mature end of the same industry, trades at 9.7x and 7.5x. Toast's premium is justified only by returns, 21.6% on invested capital against 4.7% at Shift4 and 13.0% at PayPal, and by the fact that it carries net cash rather than $4.2B of debt.",
      "On the fiscal 2026 estimate of $1.44 the multiple is 22.2x, and on $1.77 for 2027 it is 18.1x. Those are ordinary prices for a company expected to grow revenue about 20% and EPS between 23% and 42%. The multiple therefore assumes the operating margin keeps climbing toward low double digits and that the 27.0% gross margin does not fall further as payments mix grows. The first is supported by the last four quarters; the second is the risk the estimates do not price.",
      "A 3.2% free cash flow yield is thin for a business with $1.2B of net cash earning interest, and it leaves little room if location growth slows into the high single digits. The fixed cost base that produced the leverage would stop spreading, and the 31.3x EBITDA multiple would have to be justified by something other than margin expansion. The 52-week low of $22 is the market's estimate of what that looks like."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Estimate revisions have been consistently positive: EPS is up 3.4% over thirty days and 3.7% over ninety, and the last four quarters all beat the consensus figure. Twenty-seven analysts contribute, with a mean target of $39 against a $32 price and a range of $27 to $45, according to Yahoo Finance on 18 November 2026.",
      "The dispersion is narrower than the count suggests, because the $27 low is only 16% below the market price. What the estimates embed is an operating margin near 9% in 2026 rising with revenue, and revenue growth decelerating from 21.7% to 18.7%. A neutral analyst at $27 is not forecasting failure; they are assuming the margin stalls where it is and the multiple drifts toward the peer median."
    ]
  },
  "risks": {
    "intro": "Toast's risks are the risks of its customers. Restaurants fail often, they are cyclical, and they negotiate hard when they get large.",
    "items": [
      {
        "title": "Restaurant closures and churn",
        "severity": "High",
        "detail": "A large share of the customer base is independent restaurants, a category with high failure rates. Closures remove both the subscription and the payment volume.",
        "watch": "Net location additions, which separate new wins from losses, rather than gross installs."
      },
      {
        "title": "Payments spread pressure",
        "severity": "Medium",
        "detail": "Large multi-unit operators can negotiate lower processing rates, and competitors bundle hardware cheaply to win them.",
        "watch": "Revenue as a percentage of processed volume and the mix between independent and chain locations."
      },
      {
        "title": "Competition from bundled terminals",
        "severity": "Medium",
        "detail": "Other terminal providers and software vendors sell overlapping products. Switching costs are real but not absolute, especially for a new restaurant.",
        "watch": "Win rates in multi-unit deals and any change in hardware subsidy."
      },
      {
        "title": "Credit risk on restaurant lending",
        "severity": "Medium",
        "detail": "Merchant advances are underwritten against daily card volume. A restaurant slowdown raises losses on that book.",
        "watch": "Loan book size, loss rates and provisioning for the lending product."
      },
      {
        "title": "Margin dependence on scale",
        "severity": "Medium",
        "detail": "The valuation assumes the operating margin keeps rising. If location growth slows, the fixed cost base becomes a drag rather than a lever.",
        "watch": "Operating margin against location growth: both need to move together."
      },
      {
        "title": "Hardware and integration execution",
        "severity": "Low",
        "detail": "Terminals, kitchen displays and delivery integrations have to work in a live service environment where downtime is measured in lost covers.",
        "watch": "Any increase in hardware subsidies or service credits."
      }
    ],
    "watchlist": [
      {
        "title": "Net location additions",
        "detail": "The growth engine. Gross installs hide churn; net additions do not."
      },
      {
        "title": "Operating margin",
        "detail": "The path from 8.3% toward the mid-teens is the entire valuation case."
      },
      {
        "title": "Revenue per location",
        "detail": "Rising revenue per location means more products are being sold to the same restaurant."
      },
      {
        "title": "Payments take rate",
        "detail": "The spread kept on card volume, which is where most of the gross profit comes from."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Toast is a restaurant software and payments company with $7.15B of trailing revenue, a 7.2% operating margin, $604.0M of free cash flow and $1.89B of net cash. It has grown revenue every year in the series and turned an operating loss of $228.0M in FY2021 into a profit of $292.0M in FY2025.",
      "The 27.0% gross margin is the number most likely to be misread. It is a consequence of recording payment volume near gross, not evidence that the software is cheap or the business is weak. On gross profit the company looks much more like a software business, and the operating margin trend is the proof that the model scales.",
      "The open question is how much more margin is available. At 8.3%, Toast keeps a modest share of each restaurant's spend. The valuation assumes that share rises as the installed base grows, which is plausible and not yet demonstrated."
    ],
    "questions": [
      "What were net location additions in the last four quarters, after closures?",
      "How much revenue does the average location generate per year, and is it rising?",
      "What share of locations are multi-unit operators, and how does their pricing differ?",
      "How large is the lending book and what losses is it carrying?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
