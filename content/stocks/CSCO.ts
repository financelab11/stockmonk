import type { StockStory } from "./types";

export const CSCO: StockStory = {
  ticker: "CSCO",
  kicker: "Technology · Networking equipment and software",
  title: "Cisco sells the network first and the subscription afterwards",
  dek: "Switches and routers are the entry point; software, security and support are the annuity. The installed base explains a 64.5% gross margin, and the consensus growth rate is the number that needs explaining.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $63.33B, up 11.8%, with gross margin of 64.5%.",
    "Operating margin is 24.3% and free cash flow was $12.77B, a 20.2% margin.",
    "Net debt is $13.62B at 0.8x EBITDA, with interest cover of 10.5x.",
    "At $93.85 the shares trade at 27.9x earnings and 29.0x free cash flow.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/858877/000085887726000132/csco-20260725.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000858877&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Cisco is the incumbent supplier of the equipment that moves data around buildings, campuses and data centres: switches, routers, wireless access points, and the software that manages and secures them. The hardware is the visible part. The business that matters is the installed base, because every network Cisco sells creates years of software subscriptions, support contracts and upgrades.",
      "That model produces a 64.5% gross margin, which is high for a company that ships metal boxes. The margin comes from the software and services attached to the hardware and from the fact that customers pay for reliability and compatibility rather than the lowest price per port. Operating margin is 24.3%, and free cash flow was $12.77B.",
      "At $93.85 the market capitalisation is $370.0B, or 27.9x trailing earnings and 21.4x EV/EBITDA. The shares sit 39% of the way up a 52-week range of $70.54 to $130.37 and returned 34.5% over the past year. That is a strong run for a company whose revenue compounded at 4.3% a year over the five years in the record.",
    ],
    quote:
      "Networking is a replacement market. The growth comes from what is attached to the replacement, not from the number of networks in the world.",
  },
  whatItDoes: {
    paragraphs: [
      "The portfolio is organised around where the data travels. Campus and branch switching connects buildings and floors. Routing connects sites and service providers. Wireless covers access points and the controllers behind them. Security covers firewalls and threat detection. Collaboration and observability sit alongside, and a large services organisation installs and maintains the whole estate.",
      "Customers are enterprises, public-sector bodies, service providers and, increasingly, large cloud and AI infrastructure builders. A hospital, a university, a bank and a telecom operator all buy similar products for different reasons, and all of them care about the network continuing to work. That is why Cisco can hold price on hardware that competitors can match on specification.",
      "Cisco employed 77,500 people. A large part of that headcount is in services and support, which is a lower-margin business than software but a stickier one. The mix between product and services is the main driver of gross margin from quarter to quarter.",
    ],
    bullets: [
      {
        title: "Networking",
        detail:
          "Switching, routing and wireless. The core franchise and the entry point for everything else.",
      },
      {
        title: "Security",
        detail:
          "Firewalls, access control and threat detection sold into the same installed base.",
      },
      {
        title: "Services",
        detail:
          "Support, installation and managed services. Lower margin, high renewal, and a useful signal of customer retention.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Product revenue is recognised when equipment ships. Software and subscription revenue is recognised over the contract term, and services revenue over the period the work is performed. The mix matters: a dollar of software carries a much higher gross margin than a dollar of hardware, so a shift toward subscriptions raises the blended margin even if total revenue is flat.",
      "The cost structure is hardware-heavy at the bottom and people-heavy in the middle. Cisco designs its own chips for some products but outsources manufacturing, which keeps capital expenditure low. The gross margin of 64.5% is what remains after component costs, manufacturing and the cost of delivering services.",
      "The operating leverage is real but limited. Operating income was $13.97B on $51.56B of revenue in FY2022 and $15.37B on $63.33B in FY2026. Revenue rose by $11.77B over that period while operating income rose by $1.40B, which tells you that much of the incremental revenue came with a normal cost of doing business attached.",
    ],
  },
  growth: {
    paragraphs: [
      "The five-year revenue record is flat with a dip in the middle: $51.56B in FY2022, $57.00B in FY2023, $53.80B in FY2024, $56.65B in FY2025 and $63.33B in FY2026. The FY2024 decline is the pattern to understand. When customers have ordered ahead during a shortage, they often spend the following year installing what they already bought rather than ordering more.",
      "The latest quarter grew 17.6% to $17.25B, and the attributed consensus expects $73.17B of revenue this fiscal year against $63.33B last year. That is a much faster rate than the five-year record, and it is the most important assumption in the current valuation. Something has to be driving a step-up of that size, whether it is a networking upgrade cycle, share gains or a large infrastructure build.",
      "The durable drivers are bandwidth growth, replacing ageing equipment and attaching more software to each sale. The brake is that networking is a replacement market with long refresh cycles. A customer that upgraded last year will not upgrade again next year, and no amount of sales effort changes that.",
    ],
  },
  performance: {
    paragraphs: [
      "The operating record is stable rather than dramatic. Operating income was $13.97B on $51.56B of revenue in FY2022, $15.03B on $57.00B in FY2023, $12.18B on $53.80B in FY2024, $11.76B on $56.65B in FY2025 and $15.37B on $63.33B in FY2026. That is a mature company's margin profile: it does not collapse in a downturn, and it does not expand much in a boom.",
      "Quarterly margins have improved through FY2026: 22.6% in Q3 FY2025, 21.0% in Q4, 22.6% in Q1 FY2026, 24.6% in Q2, 25.0% in Q3 and 24.7% in Q4. Revenue rose in each of those quarters, from $14.15B to $17.25B. The improvement is consistent with higher volumes spreading fixed costs and a richer software mix.",
      "Return on equity is 26.4% and return on invested capital is 19.0%. Both are healthy for a hardware-led business. Diluted EPS was $3.34 on a trailing basis, and the dividend yield is 1.8%, which reflects a company that returns a meaningful share of earnings rather than reinvesting all of it.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $12.77B, a 20.2% margin, and it has been volatile: $12.75B in FY2022, $19.04B in FY2023, $10.21B in FY2024, $13.29B in FY2025 and $12.77B in FY2026. The FY2023 spike and the FY2024 trough are working-capital effects, not changes in the underlying business.",
      "Net debt is $13.62B, or 0.8x EBITDA, and interest cover is 10.5x. That is a comfortable position for a company with this cash flow. The debt is a legacy of acquisitions and buybacks rather than a funding need, and the interest bill is easily covered.",
      "The cash flow supports a 1.8% dividend and a buyback. It also funds acquisitions, which is how Cisco has entered new markets without building them. The risk in that approach is paying too much, and the goodwill on the balance sheet is the place to look for evidence of past premiums.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 27.9x trailing earnings, 21.4x EV/EBITDA, 6.1x sales and 29.0x free cash flow, Cisco is not priced as a low-growth hardware company. The 3.5% free-cash-flow yield is modest. The multiple only makes sense if the consensus growth rate materialises and persists.",
      "The peer table is a reminder that multiples in this sector are wide. Nvidia trades at 23.3x earnings, Microsoft at 27.6x and Oracle at 18.6x. Cisco at 27.9x is at the top of that range, despite growing more slowly than any of them over the five-year record. The market is paying for the durability of the installed base and for the expected upgrade cycle.",
      "A useful cross-check is the relationship between growth and multiple. At a 4.3% historical growth rate, a high-twenties earnings multiple requires either a much better growth outlook or a belief that the earnings are unusually safe. The consensus provides the first; the installed base provides the second.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-five analysts contribute to the attributed consensus, with a mean target of $135.56 and a range of $110.00 to $170.00. The mean is well above the $93.85 close, and even the low end is above it. That is an unusually tight and optimistic distribution for a mature hardware company.",
      "Estimates call for $73.17B of revenue and $5.15 of EPS this fiscal year, then $78.09B and $5.62 next year. Next quarter is expected to produce $18.12B and $1.32. The revenue figures imply that the current quarter's 17.6% growth continues rather than fades.",
      "These are third-party forecasts. The gap between the consensus and the historical growth rate is the single fact a reader should carry into the next earnings report.",
    ],
  },
  risks: {
    intro:
      "Cisco's risks are cyclical and competitive rather than financial. The balance sheet can absorb a downturn; the question is whether the current growth rate is a cycle or a new baseline.",
    items: [
      {
        title: "Networking refresh cycles",
        severity: "High",
        detail:
          "Customers buy in waves. A strong year pulls forward demand and leaves a weaker one behind, which is what happened after FY2023.",
        watch:
          "Product orders, backlog and the revenue growth rate by quarter.",
      },
      {
        title: "Competition from merchant silicon",
        severity: "High",
        detail:
          "White-box switches built on commodity chips are cheaper and increasingly capable, which pressures hardware pricing at the low end.",
        watch:
          "Gross margin and the split between product and software revenue.",
      },
      {
        title: "Consensus growth assumption",
        severity: "Medium",
        detail:
          "The forecast implies a step-up far above the historical rate. If it does not arrive, the multiple has little support.",
        watch:
          "Quarterly revenue against the $73.17B full-year estimate.",
      },
      {
        title: "Services margin",
        severity: "Medium",
        detail:
          "Services are stickier than hardware but carry lower margins. A mix shift toward services can hold revenue while compressing profit.",
        watch:
          "Segment gross margin and services growth relative to product growth.",
      },
      {
        title: "Acquisition returns",
        severity: "Low",
        detail:
          "Cisco has bought its way into new markets. Large premiums only pay off if the acquired revenue grows faster than the price implied.",
        watch:
          "Goodwill, intangible amortisation and the growth rate of acquired lines.",
      },
    ],
    watchlist: [
      {
        title: "Product orders",
        detail:
          "Orders turn before revenue in networking, and backlog tells you how much is already sold.",
      },
      {
        title: "Gross margin",
        detail:
          "64.5% is the blended result of hardware, software and services. The mix is the story behind it.",
      },
      {
        title: "Free cash flow",
        detail:
          "$12.77B supports the dividend and buyback, but the annual swings are working capital, not profit.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Cisco is a durable franchise with a large installed base, a strong balance sheet and a habit of returning cash. The 64.5% gross margin and $12.77B of free cash flow are the evidence that the model works.",
      "The valuation, however, is not the valuation of a 4.3% grower. It is the valuation of a company expected to grow much faster this year. Whether that expectation is a one-cycle catch-up or a durable change is the question that decides the return.",
      "A reader should look at orders, backlog and the software mix rather than the headline revenue number. Those are the lines that show whether the current rate is demand or timing.",
    ],
    questions: [
      "How much of the expected revenue step-up is already in backlog?",
      "Is the growth coming from new customers or from replacements?",
      "What share of revenue is recurring software and services?",
      "What would a return to 4% growth do to a 27.9x earnings multiple?",
    ],
  },
};
