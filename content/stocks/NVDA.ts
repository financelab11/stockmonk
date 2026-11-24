import type { StockStory } from "./types";

export const NVDA: StockStory = {
  "ticker": "NVDA",
  "kicker": "Semiconductors · AI infrastructure",
  "title": "Nvidia sells the picks and shovels of the AI build-out",
  "dek": "Revenue grew 106% and guidance rose again, yet the shares are down 16% over a year. The gap between the business and the multiple is the report.",
  "readingMinutes": 12,
  "takeaways": [
    "Second-quarter fiscal 2027 revenue was $96.2B, up 106% year over year, with Data Center at $89.0B and Compute & Networking at $88.3B.",
    "Third-quarter guidance of $108.0B at plus or minus 2% and a 74.0% gross margin assumes no China data-center compute revenue.",
    "Trailing revenue is $303.0B at a 65.2% operating margin, with $127.0B of free cash flow and a 63.0% return on invested capital.",
    "The shares are {{return1y}} over a year in which earnings rose, leaving the {{pe}} multiple below the 32.0x peer median."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm",
  "irUrl": "https://investor.nvidia.com/",
  "earningsReleaseUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27pr.htm",
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24",
  "bigPicture": {
    "paragraphs": [
      "Second-quarter fiscal 2027 revenue of $96.2B, reported on 26 August 2026, was 106% above a year earlier and 18% above the prior quarter. Data Center contributed $89.0B, up 117%, with $88.3B in Compute & Networking and $7.9B in Graphics. Gross margin was 75.0%, operating income $63.7B and diluted EPS $2.46. The scale is the point: a company this large grew faster than most small-cap software firms. Demand is running ahead of the supply chain's ability to add capacity.",
      "Demand is broadening. Hyperscale customers bought $48.7B of Data Center revenue, while AI clouds, industrial and enterprise buyers contributed $40.3B, up 138%. Third-quarter guidance of $108.0B at plus or minus 2% assumes no China data-center compute revenue, so the 12% sequential step-up describes the addressable market Nvidia can actually serve. Supply remains the binding constraint: leading-edge wafers and advanced packaging are concentrated at TSMC, and networking attach now adds revenue per cluster.",
      "The shares have de-rated even as earnings rose. At a {{price}} share price the {{pe}} trailing multiple and {{evEbitda}} EV/EBITDA sit below peer medians of 32.0x and 25.5x, despite a 65.2% operating margin. A year ago the stock was priced for a cycle that had not yet peaked; today it is priced for the possibility that this one has. The debate is whether a 65% margin is a platform rent or a capacity cycle, and the answer decides whether the multiple is cheap or late."
    ],
    "quote": "Nvidia's 65% operating margin is either a platform rent or a cycle peak, and the multiple is a wager on which one it is."
  },
  "whatItDoes": {
    "paragraphs": [
      "Nvidia designs chips and the systems around them. Data-center customers buy GPU modules, full server systems, InfiniBand and Ethernet networking, and the software stack that makes those pieces usable. The company outsources fabrication to partners such as TSMC, which keeps capital intensity lower than an integrated manufacturer but ties Nvidia to a narrow supply base.",
      "The Graphics segment still serves gaming, professional visualization and automotive customers. It is a real business with loyal users, but at $7.9B against $96.2B of quarterly revenue it is now a supporting act. The reportable segment split understates the importance of software: CUDA, libraries and developer tools create switching costs that are not visible as a separate revenue line."
    ],
    "bullets": [
      {
        "title": "Compute & Networking",
        "detail": "Data-center GPUs, networking and systems. $88.3B of the $96.2B reported in Q2 FY2027, or 91.8% of revenue."
      },
      {
        "title": "Graphics",
        "detail": "Gaming, professional visualization and automotive chips. $7.9B in Q2, up 46% year over year, and a useful demand diversifier."
      },
      {
        "title": "Supply chain",
        "detail": "Fabless model with leading-edge capacity concentrated at TSMC. Execution depends on packaging and memory availability as much as chip design."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Nvidia earns a gross margin above 70% because customers are buying a complete platform, not a commodity chip. The value comes from performance per watt, the maturity of the software ecosystem and the fact that switching a trained model to another accelerator is expensive. That pricing power is the source of the unusually high operating margin, and it is why a 75.0% gross margin survived a quarter in which revenue rose 18% sequentially.",
      "The demand mix matters more than the billing geography. In Q2, hyperscale customers accounted for $48.7B of Data Center revenue and AI clouds, industrial and enterprise customers accounted for $40.3B, up 138% year over year. The second group is the faster-growing one, which is a meaningful change from the earlier phase of the build-out when a handful of cloud budgets drove almost everything.",
      "China is now a policy variable rather than a revenue line in guidance. Management excluded Data Center compute revenue from China from the third-quarter outlook, so the guidance is a statement about the rest of the world. A useful way to read the mix is to separate where revenue is recognized from where demand originates: hyperscalers and sovereign AI projects are global, but the billing location and the export-licence regime determine what Nvidia can actually ship."
    ]
  },
  "growth": {
    "paragraphs": [
      "Hyperscale budgets remain the largest single driver, but the customer base is widening. Non-hyperscale Data Center revenue grew 138% to $40.3B, faster than the hyperscale group at 102%. Fiscal 2027 consensus of $412.0B assumes that mix continues: the current-quarter estimate of $124.9B is above management's $108.0B guidance, so the forecast already embeds an upside case. The incremental dollar is the number the supply chain has to deliver.",
      "Compute & Networking grew 114% to $88.3B, while Graphics grew 46% to $7.9B. The segment split understates the platform: CUDA and the software stack are not a reported line, but they are why customers pay a premium for the whole system rather than a chip. Supply is the constraint, with CoWoS packaging and memory availability deciding how much of the demand reaches revenue.",
      "The base effect will slow the headline. Revenue was $60.9B in fiscal 2024, $130.5B in fiscal 2025 and $215.9B in fiscal 2026; a $303.0B trailing base cannot keep growing at triple digits. Consensus for fiscal 2028 is $688.7B, which is still 67.2% growth. That is the estimate that carries the valuation, and it assumes hyperscaler spending rises through 2027 without a pause."
    ],
    "bullets": [
      {
        "title": "Customer mix",
        "detail": "Hyperscale contributed $48.7B and AI clouds, industrial and enterprise $40.3B in Q2. The second group grew 138%, which is the offset to concentration."
      },
      {
        "title": "Supply chain",
        "detail": "The fabless model keeps capex at $6.0B in fiscal 2026, but CoWoS packaging and memory availability can cap shipments regardless of demand."
      },
      {
        "title": "China optionality",
        "detail": "Guidance excludes China data-center compute. Any re-entry would add revenue but probably at a lower margin, so it is optionality rather than a base-case line."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Gross margin of 75.0% was up from 72.4% a year earlier, and the operating margin reached 66.2%. GAAP net income was $59.7B and diluted EPS $2.46 against $1.08. Operating leverage did the work: revenue doubled while operating expenses grew far more slowly. Guidance for a 74.0% gross margin in the third quarter implies a small give-back as mix and supply normalise.",
      "Trailing returns are extreme. The operating margin is 65.2%, the net margin 63.7% and return on equity 84.2%; return on invested capital is 63.0% against an 18.8% peer median. The operating margin has ranged from 15.7% to 66.2% in four years, so today's figure is the top of the range, not the middle. That range is the single best argument for treating the current earnings base as cyclical."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow after capex of $127.0B, a 41.9% margin, is the cleanest evidence of the platform's economics. Capex was only $6.0B in fiscal 2026 against $102.7B of operating cash flow, because Nvidia pays partners for wafers and packaging rather than owning fabs. Leverage is negligible at 0.1x EBITDA and interest cover is 426.7x. The balance sheet is not a constraint on the build.",
      "Working capital is the number to watch. A 63.7% net margin against a 41.9% free-cash-flow margin points to inventory, prepayments and supply commitments absorbing cash ahead of the ramp. That is normal before a product transition, but a persistent gap would signal that the supply chain is eating the upside. Capital returns are small, with a 0.8% dividend yield leaving room for further prepayments or debt reduction."
    ]
  },
  "valuation": {
    "paragraphs": [
      "A 20.9x trailing multiple is below the 32.0x peer median, and 20.0x EV/EBITDA is below 25.5x, despite a 65.2% operating margin. The discount is the market's way of saying that the current margin is a cycle peak rather than a platform rent. On fiscal 2027 EPS of $9.34 the shares trade at about 18x, and on fiscal 2028 EPS of $15.86 about 11x. The forward numbers are cheaper, but they carry the same margin assumption.",
      "The historical range explains the discount. Over four years the operating margin has been as low as 15.7% and as high as 66.2%, and the shares are priced nearer the top than the middle. A platform business deserves a premium to a cyclical semiconductor; a capacity cycle deserves a discount. Today's 20.9x is a bet that the answer is somewhere in between.",
      "Peer multiples frame the gap. Broadcom trades at 38.6x with a 48.0% operating margin, Micron at 9.5x with a 74.6% margin and far more cyclical earnings, and AMD at 99.9x on a much smaller profit base. Nvidia's 20.9x sits between the platform premium and the cyclical discount. A 12-month hyperscaler pause would compress both the earnings base and the multiple, which is why the discount is not free."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Fifty-five analysts cover the stock, and their mean target of $265 sits about 59% above the current price. The range runs from $130 to $515, a spread wide enough to contain both a cycle-peak view and a platform view. The low end is below the market price, so the average is not a consensus in the usual sense; it is an average of genuinely different models.",
      "Estimate momentum has slowed. The 90-day EPS revision is 4.2%, but the 30-day move is only 0.3%, which suggests the upgrades came earlier in the quarter. Fiscal 2027 revenue is forecast at $412.0B and EPS at $9.34; fiscal 2028 at $688.7B and $15.86. Those numbers assume hyperscaler capex keeps rising and China stays excluded rather than becoming a negative surprise."
    ]
  },
  "risks": {
    "intro": "Nvidia's risks are mostly strategic rather than financial. The balance sheet is strong; the uncertainty is about demand concentration, geopolitics and the durability of pricing power at the top of the margin range.",
    "items": [
      {
        "title": "Customer concentration",
        "severity": "High",
        "detail": "A small number of hyperscale customers still account for a large share of data-center revenue, even as the non-hyperscale group grows faster. A coordinated capex pause would hit revenue and margins at the same time.",
        "watch": "Hyperscaler capital-expenditure guidance and the hyperscale versus AI-cloud split in each quarter."
      },
      {
        "title": "Export controls and China",
        "severity": "High",
        "detail": "Third-quarter guidance assumes no Data Center compute revenue from China. Further tightening, or a decision to re-enter with lower-spec products, changes both the revenue base and the margin mix.",
        "watch": "Licence rules, the China commentary on each call and whether guidance starts to include any China compute again."
      },
      {
        "title": "Supply-chain concentration",
        "severity": "Medium",
        "detail": "Leading-edge fabrication and advanced packaging are concentrated in Taiwan. A disruption would be difficult to route around quickly enough to protect the guided quarter.",
        "watch": "TSMC capacity announcements, CoWoS packaging availability and lead times."
      },
      {
        "title": "Custom silicon and competition",
        "severity": "Medium",
        "detail": "Large customers are designing their own accelerators and AMD is improving its data-centre lineup. Custom chips may not replace Nvidia, but they can cap pricing at the margin.",
        "watch": "Design wins at hyperscalers and the pace of Nvidia's annual architecture transitions."
      },
      {
        "title": "Cyclicality of peak margins",
        "severity": "Medium",
        "detail": "The operating margin has ranged from 15.7% to 66.2% in four years. A demand air pocket would compress the multiple and the earnings base together, and the current multiple is set on the top of that range.",
        "watch": "Inventory, days sales outstanding and gross-margin guidance."
      }
    ],
    "watchlist": [
      {
        "title": "Hyperscaler capex",
        "detail": "The quarterly capex plans of the largest cloud customers remain the leading indicator for the order book."
      },
      {
        "title": "Gross margin",
        "detail": "Guidance is 74.0% for the third quarter. A sustained move below the low 70s would suggest pricing pressure or a richer mix of lower-margin systems."
      },
      {
        "title": "China policy",
        "detail": "Track the absolute dollar contribution if compute sales resume, not just the percentage, because the base is changing quickly."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Nvidia is a high-quality platform business enjoying an extraordinary demand cycle. The latest quarter shows real pricing power: revenue up 106%, a 75% gross margin, $127B of trailing free cash flow and a net cash balance sheet.",
      "The educational point is the difference between a good company and a good investment at a given price. At {{pe}} trailing earnings against 83% trailing growth, the multiple looks reasonable, but both the multiple and the growth depend on the same variable: sustained AI infrastructure spending. The shares are {{return1y}} over a year while EPS rose, which is what multiple compression looks like before it shows up in the headlines.",
      "A reader should leave with three questions: how concentrated the customer base remains after the shift toward AI clouds and enterprise; how much of the 66% operating margin is cycle versus platform; and what a 12-month pause in hyperscaler capex would do to the earnings base and the multiple together."
    ],
    "questions": [
      "What share of data-center revenue comes from the top few customers, and is that share falling?",
      "How much of the 66% operating margin survives if gross margin normalises toward the guided 74%?",
      "What happens to the multiple if growth decelerates to 20% while the earnings base keeps rising?",
      "Is China priced as optionality or excluded entirely after the third-quarter guidance?"
    ]
  }
};
