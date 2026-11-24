import type { StockStory } from "./types";

export const RBRK: StockStory = {
  "ticker": "RBRK",
  "kicker": "Software & Cyber · Data security and cyber resilience",
  "title": "Rubrik turned data backup into a security product, and the cash arrived first",
  "dek": "Revenue is growing 42.4% while the GAAP loss narrows. The open question is whether a subscription that includes the hardware it runs on can earn software margins at scale.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue reached $1.5B on a trailing basis, up 42.4%, while the operating margin improved from -26.2% in FY2026 to -18.3%.",
    "Gross margin stepped from 70.0% in FY2025 to 80.2%, the single largest change in the accounts and the assumption behind a 14.3x sales multiple.",
    "Free cash flow of $303.9M equals 19.7% of revenue against a 16.8% operating loss, a gap built on annual prepayment and stock compensation.",
    "Twenty-eight analysts carry a $124 mean target against a $116 price, and the October-quarter estimate implies growth halving to 22.9%."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm",
  "irUrl": "https://www.rubrik.com",
  "bigPicture": {
    "paragraphs": [
      "The July quarter produced $427.3M of revenue, 37.9% more than a year earlier, and cut the operating loss to 16.8% of sales from 30.5% in the comparable quarter. That combination is unusual at this size: growth accelerated while the loss narrowed. The gross line did most of the work, at 80.2% trailing against 70.0% in FY2025. A ten-point step in gross margin on a subscription that includes hardware is the number to interrogate, because the 14.3x sales multiple rests on it surviving.",
      "Backup was a procurement line item with a low price ceiling. Rubrik sells the same function as cyber resilience, priced on data protected and modules attached, which moves the conversation from storage cost to the cost of an unrecoverable breach. The customer is a large enterprise or public body with an auditor and a recovery obligation, and the modules for cloud posture and data classification attach without a new buying cycle. That is why revenue can grow 42.4% on a product that began as backup, and why EMEA at 23.8% of revenue is the second engine.",
      "With $1.7B more cash than debt and no dividend, the capital question is not survival but what the cash is for. Rubrik trades at 78.3x free cash flow and a 1.3% cash yield, so the buyer is paying for growth that has not yet reached the operating line. The peer set does not settle it: Samsara grows 29.5% with a 1.0% operating margin, Elastic 16.2% at -2.6%, Tenable 9.5% at 4.4%. Rubrik's premium is the price of 42.4% growth and an 80% gross margin arriving together."
    ],
    "quote": "Backup was sold on the cost of storage; Rubrik sells the cost of not getting the data back, and charges accordingly."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core subscription covers data protection, threat detection on the copied data, and orchestration of the recovery itself. Around it sit modules for cloud posture, data classification, and the monitoring of sensitive data wherever it lives. Each module is designed to attach to an account that already trusts the recovery layer, which is how revenue per customer rises without a new buying cycle.",
      "Customers are large enterprises and public-sector organisations with substantial data estates and a regulatory reason to prove they can recover. The company employs 3,797 people and reports a single revenue line, so the mix between subscription, appliance and support is not disclosed in the dataset. Neither is the geography split."
    ],
    "bullets": [
      {
        "title": "Protect",
        "detail": "Immutable copies of workloads, databases, cloud accounts and SaaS data, with the copy store isolated from production credentials."
      },
      {
        "title": "Detect",
        "detail": "Anomaly detection on the backup data itself, which is useful precisely because an attacker may already be inside production."
      },
      {
        "title": "Recover",
        "detail": "Orchestrated restoration at scale, including to a clean environment, which is the capability customers actually pay to test."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The subscription is term-based, usually multi-year, and priced on the amount of data protected and the modules in use. Gross margin is 80.2%, which is healthy but below what a pure software licence would earn, because delivering the service involves running and shipping infrastructure as well as code. A subscription that bundles software with the hardware it runs on carries a cost of goods that a hosted-only product does not.",
      "The operating loss of 16.8% comes from sales and marketing rather than delivery. Rubrik sells to large organisations through a mix of direct account teams and channel partners, and enterprise data-security deals are slow, technical and proof-heavy. The company is paying for distribution ahead of the recurring revenue that distribution will eventually produce.",
      "That is also why the cash flow looks so different from the income statement: multi-year contracts are often billed annually in advance, so cash arrives before revenue is recognised, and a portion of compensation is paid in stock. Both effects flatter free cash flow relative to operating income, and both are normal at this stage."
    ]
  },
  "growth": {
    "paragraphs": [
      "Expansion inside existing accounts is the engine the single reported revenue line hides. Modules for cloud posture, classification and sensitive-data monitoring attach to an account that already trusts the recovery layer, so incremental revenue arrives without a new logo or a new procurement cycle. The evidence is indirect but consistent: revenue grew 42.4% while the customer base is described as large enterprises and public bodies, a segment that does not multiply quickly. Growth of that size in that customer set has to come from existing accounts buying more.",
      "The consensus does not extrapolate the current rate. Estimates for the October quarter sit at $430.5M, which is 22.9% growth against the 37.9% just reported, and the full fiscal year is modelled at $1.7B, up 28.5%. That is a forecast of deceleration within two quarters, and it is the more conservative assumption given the comparison base. The FY2028 figure of $2.1B implies 21.7%, so the estimate path has growth fading toward the low twenties without ever turning negative.",
      "Growth of 42.4% in a business selling to large enterprises is a statement about expansion, not about new logos, and expansion is the part of the model that is hardest to verify from outside. The 28.5% modelled for FY2027 is a softer version of the same claim. If the modules continue to attach at the current rate, the estimate is conservative; if the recovery layer is the only thing customers buy, the estimate is optimistic. The reported line cannot distinguish the two."
    ],
    "bullets": [
      {
        "title": "Module attach",
        "detail": "Each new module sells into an installed base that has already passed a recovery test, which is cheaper than finding a new enterprise buyer."
      },
      {
        "title": "International mix",
        "detail": "EMEA is 23.8% of revenue and Asia Pacific 3.9%, so the growth rate still depends mostly on the Americas at 72.3%."
      },
      {
        "title": "Estimate reset",
        "detail": "The 90-day EPS revision of 60.2% against 0.2% over 30 days says the upgrade happened in the summer, not in the last month."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Eighty cents of every revenue dollar became gross profit on a trailing basis, up from 70.0% in FY2025 and 76.9% in FY2024. That is the margin sequence that matters: the operating loss narrowed from 26.2% in FY2026 to 18.3% without a visible cut in sales spending. Net margin followed from -26.5% to -16.5%, and the quarterly loss per share went from -$0.53 in Q1 FY2026 to -$0.30 in Q2 FY2027, the July quarter. Return on equity of 50.9% says little, because the equity base is small.",
      "Elastic runs a -2.6% operating margin on 16.2% growth; Tenable 4.4% on 9.5%; Samsara 1.0% on 29.5%. Rubrik's -18.3% is the weakest of the four, and an 80.2% gross margin leaves the operating line to absorb the entire cost of selling. That gap is the cost of enterprise distribution through direct teams and channel partners, and it is the line that has to close."
    ]
  },
  "cash": {
    "paragraphs": [
      "Cash arrived before revenue did. Free cash flow of $303.9M, 19.7% of revenue, is a $578M swing from the $274M operating loss implied by an 18.3% margin, and the explanation is in the contract terms: multi-year subscriptions billed annually in advance, plus a share of compensation paid in stock. Payroll settled in equity does not leave the bank account, which is why a company losing money on the income statement can add to its cash balance.",
      "Capex is not the story. Capital spending was $29.6M in FY2026, about 2% of revenue, because the heavy lifting happens in facilities the customer or a cloud provider already owns. The balance sheet carries $1.7B more cash than debt, and the company pays no dividend. What the cash is for is undisclosed: there is no acquisition programme or buyback in the reported figures, so the pile is optionality, and at a 1.3% cash yield the market is not paying for the interest it earns."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Fourteen times trailing sales is a demanding multiple, and the peer set does not contain a company growing at the same rate with the same margin. Samsara grows 29.5% at a 1.0% operating margin, Elastic 16.2% at -2.6%, Tenable 9.5% at 4.4% and GitLab 23.0% at -8.5%. Rubrik's 42.4% growth is the fastest and its -18.3% margin the weakest, so the multiple is a bet that the second number converges on the first.",
      "FCF gives a different answer. At 78.3x cash flow the shares yield 1.3%, against a peer median free-cash-flow margin of 20.3%; Rubrik's own 19.7% is in line with that median, so the premium sits in the multiple rather than in the conversion. The company is valued on the revenue line because the cash line is already expensive. That works while growth is 42.4%; it stops working when growth converges on the 21.7% modelled for FY2028.",
      "What would justify the multiple is the operating line crossing zero while revenue compounds in the high twenties. What would break it is the gross margin giving back the ten points it gained in FY2026, because the loss would widen at the same time as growth slowed. The 90-day EPS revision of 60.2% shows how quickly the estimate base can move in either direction when the starting point is near zero."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Twenty-eight analysts publish on the stock, with a mean target of $124 against a $116 price and a range of $110 to $155. That is not a consensus with a bear case in it; it is a group that agrees on direction and argues about multiple.",
      "Estimates embed a sharp deceleration. The October quarter is modelled at $430.5M, 22.9% growth, and FY2027 at $1.7B, 28.5%, before fading to 21.7% in FY2028. The last four quarters all beat the consensus figure, including $0.20 against $0.04 in July, so the estimate base has been revised up rather than down. The risk in that pattern is that beats have become the baseline."
    ]
  },
  "risks": {
    "intro": "Rubrik's risks sit at the intersection of competition, delivery cost and the credibility of its cash conversion. The income statement is still the problem, and it is competition plus cost of goods that will decide whether it stops being one.",
    "items": [
      {
        "title": "Platform bundling",
        "severity": "High",
        "detail": "Cloud providers and large infrastructure vendors sell native backup and snapshot tooling as part of a broader agreement. For a customer already committed to that platform, the incremental cost of using it is close to zero.",
        "watch": "Win rates in accounts that are heavy users of a single cloud platform, and average selling price at renewal."
      },
      {
        "title": "Durability of the growth rate",
        "severity": "High",
        "detail": "Growth accelerated from a flat year to 42.4%. Re-acceleration is harder to sustain than steady compounding, and the comparison base gets tougher each quarter.",
        "watch": "Quarterly revenue growth and the split between new customers and expansion."
      },
      {
        "title": "Gross margin and delivery cost",
        "severity": "Medium",
        "detail": "A subscription that includes infrastructure carries a cost of goods that grows with the customer's data. Scale does not automatically improve this the way it does for a pure licence.",
        "watch": "Gross margin by quarter and any shift toward cloud-hosted delivery."
      },
      {
        "title": "Cash conversion quality",
        "severity": "Medium",
        "detail": "Free cash flow of 19.7% of revenue against a 16.8% operating loss depends on billing terms and stock compensation. If billings slow, the cash advantage narrows quickly.",
        "watch": "Deferred revenue growth and stock-based compensation as a share of revenue."
      },
      {
        "title": "Large-deal concentration",
        "severity": "Medium",
        "detail": "Enterprise data-security purchases are lumpy. A handful of large contracts can decide a quarter, in either direction.",
        "watch": "The number of large deals per quarter and the spread of revenue across the customer base."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin trend",
        "detail": "The path from -33.4% to -13.6% and back to -16.8% needs to resume its direction for the growth story to hold together."
      },
      {
        "title": "Free cash flow versus operating loss",
        "detail": "The 19.7% cash margin is the company's strongest argument; a narrowing gap would weaken it."
      },
      {
        "title": "Gross margin",
        "detail": "Eighty percent is the floor to defend. Below that, the hardware inside the subscription starts to look like a structural drag."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Rubrik has found a way to sell an old category — backup — as a new one — cyber resilience — and has priced it accordingly. Revenue growth and cash generation both support the story. The GAAP loss is the part that has not yet been resolved.",
      "The instructive feature of this company is the distance between its three profit measures. Gross margin says the product is worth 80 cents on the dollar. Operating margin says the company spends more than that to sell it. Free cash flow says the cash arrives early. All three are true at once.",
      "The reader should leave asking whether the growth is being bought with sales spending that will eventually fall, or maintained with spending that has to stay."
    ],
    "questions": [
      "How much of the 42.4% growth comes from expansion inside existing accounts?",
      "What share of the subscription is infrastructure rather than software, and how does that cap gross margin?",
      "Is the 19.7% free-cash-flow margin a permanent feature of multi-year billing or a timing effect?",
      "How quickly does the operating loss close if growth slows to 25%?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
