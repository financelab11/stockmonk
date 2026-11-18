import type { StockStory } from "./types";

export const NVDA: StockStory = {
  ticker: "NVDA",
  kicker: "Semiconductors · AI infrastructure",
  title: "Nvidia sells the picks and shovels of the AI build-out",
  dek: "Revenue grew 106% and guidance rose again, yet the shares are down 16% over a year. The gap between the business and the multiple is the report.",
  readingMinutes: 12,
  takeaways: [
    "Q2 FY2027 revenue was $96.2B, up 106% year over year and 18% sequentially; Data Center contributed $89.0B, up 117%.",
    "Third-quarter guidance is $108.0B at ±2% with a 74.0% gross margin, and it assumes no China data-center compute revenue.",
    "Trailing revenue is $303B at a 65.2% operating margin, with $127B of free cash flow and $66B of net cash.",
    "At {{price}} the shares trade at {{pe}} trailing earnings, {{evEbitda}} EV/EBITDA and about 16.6x consensus FY2027 EPS, while the one-year return is {{return1y}}.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm",
  irUrl: "https://investor.nvidia.com/",
  earningsReleaseUrl:
    "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27pr.htm",
  narrativeSource: "handwritten",
  narrativeUpdatedAt: "2026-11-18",
  bigPicture: {
    paragraphs: [
      "Nvidia reported second-quarter fiscal 2027 revenue of $96.2B on 26 August 2026, up 106% from a year earlier and 18% from the prior quarter. Data Center revenue was $89.0B, up 117%, and the reportable split put $88.3B in Compute & Networking and $7.9B in Graphics. Gross margin was 75.0%, GAAP operating income was $63.7B and GAAP diluted EPS was $2.46. Management's framing was that compute has become a revenue line rather than a cost centre, which is a fair description of what the income statement shows.",
      "Guidance for the third quarter is $108.0B at plus or minus 2%, with gross margin guided to 74.0% and GAAP operating expenses of about $9.2B. The important detail sits in the footnote: the outlook assumes no Data Center compute revenue from China. Guidance therefore describes demand outside the market that export policy has already removed, which makes the 12% sequential step-up a cleaner read on the rest of the customer base than the headline suggests.",
      "The market has not paid for the growth. The shares closed at {{price}}, {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA, which is a lower multiple than a year ago against a much larger earnings base. The stock sits {{rangePosition}} of the way up a 52-week range of {{range52}} and is {{return1y}} over twelve months. The open question is not whether the quarter was strong; it is whether the AI capex cycle that produced it has another year of this pace in it.",
    ],
    quote:
      "The central debate is not whether Nvidia is a good business. It is how much of the current spending is a durable platform shift versus a one-time capacity build.",
  },
  whatItDoes: {
    paragraphs: [
      "Nvidia designs chips and the systems around them. Data-center customers buy GPU modules, full server systems, InfiniBand and Ethernet networking, and the software stack that makes those pieces usable. The company outsources fabrication to partners such as TSMC, which keeps capital intensity lower than an integrated manufacturer but ties Nvidia to a narrow supply base.",
      "The Graphics segment still serves gaming, professional visualization and automotive customers. It is a real business with loyal users, but at $7.9B against $96.2B of quarterly revenue it is now a supporting act. The reportable segment split understates the importance of software: CUDA, libraries and developer tools create switching costs that are not visible as a separate revenue line.",
    ],
    bullets: [
      {
        title: "Compute & Networking",
        detail:
          "Data-center GPUs, networking and systems. $88.3B of the $96.2B reported in Q2 FY2027, or 91.8% of revenue.",
      },
      {
        title: "Graphics",
        detail:
          "Gaming, professional visualization and automotive chips. $7.9B in Q2, up 46% year over year, and a useful demand diversifier.",
      },
      {
        title: "Supply chain",
        detail:
          "Fabless model with leading-edge capacity concentrated at TSMC. Execution depends on packaging and memory availability as much as chip design.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Nvidia earns a gross margin above 70% because customers are buying a complete platform, not a commodity chip. The value comes from performance per watt, the maturity of the software ecosystem and the fact that switching a trained model to another accelerator is expensive. That pricing power is the source of the unusually high operating margin, and it is why a 75.0% gross margin survived a quarter in which revenue rose 18% sequentially.",
      "The demand mix matters more than the billing geography. In Q2, hyperscale customers accounted for $48.7B of Data Center revenue and AI clouds, industrial and enterprise customers accounted for $40.3B, up 138% year over year. The second group is the faster-growing one, which is a meaningful change from the earlier phase of the build-out when a handful of cloud budgets drove almost everything.",
      "China is now a policy variable rather than a revenue line in guidance. Management excluded Data Center compute revenue from China from the third-quarter outlook, so the guidance is a statement about the rest of the world. A useful way to read the mix is to separate where revenue is recognized from where demand originates: hyperscalers and sovereign AI projects are global, but the billing location and the export-licence regime determine what Nvidia can actually ship.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $60.9B in fiscal 2024 to $130.5B in fiscal 2025 and $215.9B in fiscal 2026, and trailing twelve-month revenue is now $303B. The sequential path through fiscal 2027 has been $81.6B in Q1 and $96.2B in Q2, with $108.0B guided for Q3. Growth at this scale is unusual, but the base effect means the percentage will fall even if the dollar increase keeps rising.",
      "The segment detail explains where the increment comes from. Compute & Networking grew 114% year over year to $88.3B, while Graphics grew 46% to $7.9B. Within Data Center, the non-hyperscale group grew 138%, faster than the hyperscale group's 102%, so the customer base is broadening even as concentration remains high in absolute terms.",
      "Third-party estimates put current-fiscal-year revenue at $412B and EPS at $9.34, with next year at $689B and $15.86. Those are consensus numbers, not Stockmonk projections, and they embed an assumption that hyperscaler budgets keep rising through 2027. The estimate for the next quarter alone is $125B, which is above management's guidance and therefore already assumes an upside case.",
    ],
    bullets: [
      {
        title: "Data-center capex",
        detail:
          "Hyperscaler budgets remain the largest single driver. The 13% sequential growth in hyperscale revenue is the number to watch against their capex guidance.",
      },
      {
        title: "Networking attach",
        detail:
          "InfiniBand and Spectrum-X Ethernet raise revenue per AI cluster and deepen the platform relationship beyond the accelerator itself.",
      },
      {
        title: "Product cadence",
        detail:
          "Annual architecture transitions give customers a reason to refresh and help Nvidia defend pricing against custom silicon.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarter's gross margin was 75.0%, up from 72.4% a year earlier, and the operating margin was 66.2%. GAAP net income was $59.7B and diluted EPS was $2.46 against $1.08 a year ago. On a trailing basis the operating margin is 65.2%, the net margin 63.7% and EPS about $7.99, which is the denominator behind the {{pe}} multiple.",
      "Returns remain extreme: return on equity is 84.2% and return on invested capital 95.8%. The operating margin has ranged from 15.7% to 66.2% over the last four years, which is the useful reminder in this report. The current margin is the top of that range, supported by a product cycle and pricing power that have not yet been tested by a demand pause.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $127B over the trailing period, a 41.9% margin, and the balance sheet carries $66B of net cash. At the current price the shares trade at {{pfcf}} trailing free cash flow, a {{fcfYield}} free-cash-flow yield. The gap between the earnings multiple and the cash multiple is the capital intensity of the supply chain, most of which sits with Nvidia's manufacturing partners rather than on its own balance sheet.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit. For Nvidia the near-term risk is inventory and prepayments ahead of a product transition; for a fabless company, the cash conversion is usually clean until the ramp accelerates.",
    ],
  },
  valuation: {
    paragraphs: [
      "At {{price}} the market capitalisation is {{marketCap}}, or {{pe}} trailing earnings, {{evEbitda}} EV/EBITDA and {{pfcf}} trailing free cash flow. The stock is {{rangePosition}} of the way up its 52-week range ({{range52}}) and has returned {{return1y}} over the past year, so the multiple has compressed even as revenue and EPS rose. That combination is the cleanest summary of the current debate: the earnings estimate went up and the price went down.",
      "On consensus numbers the forward picture is cheaper. FY2027 EPS of $9.34 implies about 16.6x, and FY2028 EPS of $15.86 implies about 9.8x. Those multiples are only as good as the estimates behind them; both years assume the capex cycle continues, and the next-quarter consensus of $125B is already above guidance. A PEG-style comparison flatters the stock while growth is above 80% and stops being useful if growth decelerates toward 20%.",
      "The peer table below compares Nvidia with a group of semiconductor and platform businesses. The multiple is a starting point for questions, not a verdict: a 19.5x trailing earnings multiple on peak-cycle margins is not the same asset as a 19.5x multiple on normalised margins.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus covers 55 analysts with a mean target of $265.23 and a range of $130.00 to $515.00, as of 18 November 2026. The dispersion is wide enough to be informative: the low end is below the current price and the high end is more than three times it, so the average hides genuine disagreement about the durability of the cycle.",
      "Current-year estimates call for $412B of revenue and $9.34 of EPS; next year is $689B and $15.86. These are third-party forecasts and can change without notice. They are shown for context, not as a recommendation, and they are the reason the forward multiple looks lower than the trailing one.",
    ],
  },
  risks: {
    intro:
      "Nvidia's risks are mostly strategic rather than financial. The balance sheet is strong; the uncertainty is about demand concentration, geopolitics and the durability of pricing power at the top of the margin range.",
    items: [
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "A small number of hyperscale customers still account for a large share of data-center revenue, even as the non-hyperscale group grows faster. A coordinated capex pause would hit revenue and margins at the same time.",
        watch:
          "Hyperscaler capital-expenditure guidance and the hyperscale versus AI-cloud split in each quarter.",
      },
      {
        title: "Export controls and China",
        severity: "High",
        detail:
          "Third-quarter guidance assumes no Data Center compute revenue from China. Further tightening, or a decision to re-enter with lower-spec products, changes both the revenue base and the margin mix.",
        watch:
          "Licence rules, the China commentary on each call and whether guidance starts to include any China compute again.",
      },
      {
        title: "Supply-chain concentration",
        severity: "Medium",
        detail:
          "Leading-edge fabrication and advanced packaging are concentrated in Taiwan. A disruption would be difficult to route around quickly enough to protect the guided quarter.",
        watch: "TSMC capacity announcements, CoWoS packaging availability and lead times.",
      },
      {
        title: "Custom silicon and competition",
        severity: "Medium",
        detail:
          "Large customers are designing their own accelerators and AMD is improving its data-centre lineup. Custom chips may not replace Nvidia, but they can cap pricing at the margin.",
        watch:
          "Design wins at hyperscalers and the pace of Nvidia's annual architecture transitions.",
      },
      {
        title: "Cyclicality of peak margins",
        severity: "Medium",
        detail:
          "The operating margin has ranged from 15.7% to 66.2% in four years. A demand air pocket would compress the multiple and the earnings base together, and the current multiple is set on the top of that range.",
        watch: "Inventory, days sales outstanding and gross-margin guidance.",
      },
    ],
    watchlist: [
      {
        title: "Hyperscaler capex",
        detail:
          "The quarterly capex plans of the largest cloud customers remain the leading indicator for the order book.",
      },
      {
        title: "Gross margin",
        detail:
          "Guidance is 74.0% for the third quarter. A sustained move below the low 70s would suggest pricing pressure or a richer mix of lower-margin systems.",
      },
      {
        title: "China policy",
        detail:
          "Track the absolute dollar contribution if compute sales resume, not just the percentage, because the base is changing quickly.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Nvidia is a high-quality platform business enjoying an extraordinary demand cycle. The latest quarter shows real pricing power: revenue up 106%, a 75% gross margin, $127B of trailing free cash flow and $66B of net cash.",
      "The educational point is the difference between a good company and a good investment at a given price. At {{pe}} trailing earnings against 83% trailing growth, the multiple looks reasonable, but both the multiple and the growth depend on the same variable: sustained AI infrastructure spending. The shares are {{return1y}} over a year while EPS rose, which is what multiple compression looks like before it shows up in the headlines.",
      "A reader should leave with three questions: how concentrated the customer base remains after the shift toward AI clouds and enterprise; how much of the 66% operating margin is cycle versus platform; and what a 12-month pause in hyperscaler capex would do to the earnings base and the multiple together.",
    ],
    questions: [
      "What share of data-center revenue comes from the top few customers, and is that share falling?",
      "How much of the 66% operating margin survives if gross margin normalises toward the guided 74%?",
      "What happens to the multiple if growth decelerates to 20% while the earnings base keeps rising?",
      "Is China priced as optionality or excluded entirely after the third-quarter guidance?",
    ],
  },
};
