import type { StockStory } from "./types";

export const PSTG: StockStory = {
  "ticker": "PSTG",
  "kicker": "Enterprise storage · All-flash arrays",
  "title": "Pure Storage sells storage as a subscription, and the accounts need care",
  "dek": "A 77.6% gross margin is what software-like storage economics look like. The published multiples are not, and a reader has to reconstruct the income statement before using them.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue reached $4.3B trailing, up 27.2%, yet free cash flow fell to $128.2M because the August 2026 quarter consumed $237.6M.",
    "A 69.7% gross margin produces only a 5.3% operating margin, below the 13.7% peer median despite the software-rich product.",
    "At 88.5x earnings and 174.8x free cash flow, the shares price a recovery the trailing accounts have not delivered.",
    "Growth ranks in the sixth percentile of a peer group with a 77.4% median, so the premium rests on mix and installed base."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1474432/000147443226000027/pstg-20260201.htm",
  "irUrl": "https://www.sec.gov/edgar/search/",
  "bigPicture": {
    "paragraphs": [
      "A record quarter arrived with a cash outflow. Revenue in the three months to 2 August 2026 reached $1.2B, the operating margin improved to 5.3% and EPS was $0.21, but free cash flow was -$237.6M after +$111.8M in the preceding quarter. That combination frames the debate: the income statement is improving while the balance sheet absorbs cash. Trailing revenue is $4.3B, up 27.2%, and the revenue base is larger than at any point in the annual record.",
      "The product is block, file and object storage on one all-flash platform, sold mainly through resellers and integrators to enterprises and service providers. A 69.7% gross margin is the signature of software-rich storage: the flash media is bought in, while the controllers and data services carry the price. What the gross line does not show is the cost of the channel and of a development programme that has to keep pace with larger competitors. Operating margin is 5.3% against a 13.7% median for the AI-infrastructure peers, so the software economics are not reaching the operating line.",
      "Net cash fell from $854.9M at the February 2026 year-end to $385.7M by the trailing date, after $264.3M of capital expenditure in FY2026 and the cash absorbed in the August quarter. At 5.2x sales and 174.8x free cash flow, the shares are priced for a margin and cash-conversion recovery rather than for the 27.2% growth on offer. A return to FY2026's 16.6% free-cash-flow margin would generate roughly $714M on $4.3B of revenue, still about 31x the market value."
    ],
    "quote": "Pure earns a 69.7% gross margin on storage that looks like software, but only 5.3% reaches the operating line after channel and development costs."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product line is a set of all-flash arrays for block, file and object storage, plus the management software that runs across them. Block storage serves databases and virtual machines; file and object storage serve analytics, container platforms and, increasingly, the data sets used to train and run AI models. The same hardware platform serves all three through different software.",
      "The channel is a network of resellers and systems integrators. That choice keeps the company's own sales cost low and puts the product in front of customers who already buy infrastructure from a partner, but it also means Pure shares the margin with the channel and depends on partners to position the product correctly.",
      "The customer base is enterprises and service providers rather than hyperscalers, who design their own storage. That is an important distinction in an AI context: Pure is not selling into the largest training clusters, which are usually built with custom or directly attached storage. It is selling the storage that sits behind enterprise AI projects, analytics and virtualisation, which is a smaller and steadier pool of demand."
    ],
    "bullets": [
      {
        "title": "All-flash arrays",
        "detail": "Block, file and object storage on solid-state media. The hardware platform, differentiated by the software that runs on it."
      },
      {
        "title": "Subscription and consumption",
        "detail": "Capacity sold with an expectation of continuous upgrade, with a large share of revenue recognised over time."
      },
      {
        "title": "Channel distribution",
        "detail": "Resellers and integrators carry the product to enterprise buyers. Lower selling cost, less control over the message."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue comes from three places: hardware and the software licence bundled with it, subscription services that include support and upgrade rights, and consumption-based arrangements where the customer pays for what they use. The subscription portion is the strategic one, because it is recurring and because it keeps the customer inside the upgrade cycle.",
      "A 77.6% gross margin tells a reader where the cost sits. Flash media is a commodity bought from a handful of suppliers; the controllers and the software are where the price is set. Deduplication and compression matter commercially because they let a customer store more data on less media, so the software effectively competes against the cost of buying more drives.",
      "The operating leverage should come from the installed base. Each array sold adds a support and subscription revenue stream that costs relatively little to serve, so a growing base should expand the margin over time. The data here cannot confirm that, because the annual operating income figures and the quarterly margins do not reconcile. What can be said is that the gross margin is consistent with a software-rich product and that the model has the right shape for operating leverage."
    ]
  },
  "growth": {
    "paragraphs": [
      "Installed-base expansion is the mechanism the model depends on. Each array sold brings support and subscription revenue that costs little to serve, and the quarterly revenue path from $778.5M in the May 2025 quarter to $1.2B in August 2026 shows the base growing. What is not disclosed is the split between product and recurring revenue, so the durability of that base cannot be measured directly. The 27.2% trailing growth is faster than FY2026's 15.6%, which suggests the second half of the fiscal year carried the acceleration.",
      "Demand comes from two places with different cycles. Enterprise AI projects need shared storage behind analytics and model development, a pool that grows with data volumes but excludes the hyperscale training clusters that design their own systems. The general replacement cycle, in which customers refresh arrays every three to five years, is steadier but slower. On the evidence, the business is growing in the high teens to high twenties, not at the 77.4% median of the AI-infrastructure peer group, and no current-year revenue estimate is published to test the next step."
    ],
    "bullets": [
      {
        "title": "Subscription attach",
        "detail": "A larger installed base should raise the recurring share, but the product-versus-subscription split is not reported, so the mix shift is inferred rather than observed."
      },
      {
        "title": "Enterprise AI storage",
        "detail": "AI projects create demand for shared file and object storage, although the largest training clusters build custom storage outside Pure's reach."
      },
      {
        "title": "Refresh timing",
        "detail": "Storage is replaced on a three-to-five year rhythm, so a pause in enterprise infrastructure spending reaches revenue within a quarter."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Gross margin held at 69.7% on a trailing basis, close to the 70.4% reported for FY2026 and above the 68.2% of FY2021, so pricing in the product has been stable through the cycle. The operating margin is 5.3%, and the difference between the two lines is operating expense: sales, channel programmes and development absorb about 64 cents of every revenue dollar. Net margin is 5.9%, slightly above the operating margin, because $385.7M of net cash earns interest. EPS was $0.55 in FY2026 against $0.31 a year earlier.",
      "The quarterly record shows how quickly the operating line moves. Operating margin was 8.2% in the February 2026 quarter, fell to 1.9% in May and recovered to 5.3% in August, on revenue that moved from $1.1B to $1.1B to $1.2B. That is not a pricing story; it is the cost base and the timing of shipments. Return on invested capital is 13.2% trailing against 6.8% for FY2026, a wide swing that reflects the small profit base rather than a change in the assets employed. The annual and quarterly series do not reconcile, which is why the gross line and the cash flow carry more weight than any single year's operating profit."
    ]
  },
  "cash": {
    "paragraphs": [
      "The trailing $128.2M of free cash flow is the sum of four very different quarters: $52.6M, $201.4M, $111.8M and -$237.6M. FY2026 was the strong year, with $880.1M of operating cash flow, $264.3M of capex and $615.7M of free cash flow, a 16.6% margin. The August quarter alone consumed almost twice the $128.2M that the trailing year generated, which is why the trailing margin is 3.0% rather than the mid-teens the annual record implies.",
      "Net cash of $385.7M is still a comfortable position, about 1x EBITDA, and interest cover of 213.9x means financing costs are irrelevant to the income statement. The question is what the cash went into. Inventory and receivables ahead of a $1.2B quarter would explain the outflow and reverse; a permanent step-up in working capital per dollar of revenue would not. There is no payout, so the balance sheet is the only place the cash can accumulate."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Eighty-eight times trailing earnings and 58.3x EBITDA compare with peer medians of 36.6x and 31.0x, and 5.2x sales is a software multiple applied to a hardware-led revenue base. The cash multiple is the starkest: 174.8x free cash flow, a 0.6% yield. Those figures are calculated on a trailing year distorted by one weak cash quarter, which is why the annual FY2026 margin of 16.6% is the more useful reference for what the business can generate at scale.",
      "At the peer median 10.2% free-cash-flow margin, $4.3B of revenue would produce about $439M, or 51x the market value; reaching 30x would require roughly $747M, a 17.4% margin. The current share price therefore assumes Pure returns to its FY2026 cash conversion and then improves on it. The multiple can be defended on gross margin and recurring mix, but not on the 27.2% growth rate, which ranks in the sixth percentile of the peer group."
    ]
  },
  "analysts": {
    "paragraphs": [
      "No Nasdaq analyst estimate set dated 18 November 2026 is published for Pure, so the usual revision and dispersion tests are unavailable. That absence matters more here than for the rest of the group, because the investment case turns on a cash-flow inflection that sell-side estimates would normally frame. The only guide in the record is the quarterly revenue path and the FY2026 cash conversion.",
      "Without a published estimate, the implicit consensus has to be read from the multiple. At 174.8x trailing free cash flow the price requires either a return to the 16.6% FY2026 margin or revenue growth well above the 27.2% trailing rate. A covering analyst would need to underwrite both the working-capital reversal and the subscription mix to get there; neither is disclosed, which is why the estimate gap is wider than usual."
    ]
  },
  "risks": {
    "intro": "Pure Storage's risks are competitive, cyclical and, in this dataset, analytical: the reported figures do not yet support a confident read on profitability.",
    "items": [
      {
        "title": "Reporting consistency",
        "severity": "High",
        "detail": "Operating income, net margin, EPS and free cash flow do not reconcile with each other or with the quarterly table. Any conclusion about profitability rests on unverified numbers.",
        "watch": "The income statement and cash flow statement in the next filing, read together."
      },
      {
        "title": "Storage competition",
        "severity": "High",
        "detail": "Storage is a mature market with large incumbents and price pressure from commodity flash. Growth depends on taking share rather than on market expansion.",
        "watch": "Gross margin by quarter and the revenue growth rate relative to the market."
      },
      {
        "title": "Subscription conversion",
        "severity": "Medium",
        "detail": "A subscription model should produce recurring revenue and rising cash conversion. A 0.7% free cash flow margin against a 46.8% reported net margin is not that.",
        "watch": "Deferred revenue, remaining performance obligations and operating cash flow."
      },
      {
        "title": "Replacement cycle timing",
        "severity": "Medium",
        "detail": "Storage is bought on a three-to-five year cycle. A pause in enterprise infrastructure spending delays refresh decisions and hits revenue quickly.",
        "watch": "Order trends and the age of the installed base."
      },
      {
        "title": "Channel dependence",
        "severity": "Low",
        "detail": "Most revenue arrives through partners, which lowers selling cost but reduces control over pricing and positioning.",
        "watch": "Channel concentration and partner certification levels."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "77.6% is the number that makes the model work. A decline would compress everything below it."
      },
      {
        "title": "Free cash flow",
        "detail": "For a subscription business, this is the measure that matters and the one that currently looks wrong."
      },
      {
        "title": "Filing reconciliation",
        "detail": "Until the annual and quarterly figures agree, any valuation multiple is a guess."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Pure Storage sells all-flash enterprise storage with a software-heavy product and a subscription-style commercial model. Revenue is $7.76B, up 15.5%, gross margin is 77.6%, and the balance sheet holds $1.55B of net cash. Those are the parts of the record that hold together.",
      "The educational point is that a dataset can be internally inconsistent, and a reader has to notice. When operating income is $2.78B on $6.00B of revenue while the quarterly margins in the same era are in the single digits, one of those numbers is not measuring what its label says. Recognising that is more valuable than any multiple, because a multiple built on the wrong denominator is worse than no multiple at all.",
      "What is not known is the true operating margin, the split between recurring and product revenue, and why free cash flow is 0.7% of revenue when the reported net margin is 46.8%. The AI build-out creates demand for shared storage behind enterprise AI projects; it does not resolve any of those questions, and it does not make a 2.7x sales multiple cheap or expensive on its own."
    ],
    "questions": [
      "Which figures in the quarterly table are three-month periods and which are fiscal-year totals?",
      "What share of revenue is recurring subscription rather than product?",
      "Why is free cash flow 0.7% of revenue when the reported net margin is 46.8%?",
      "How much of the growth comes from AI-related storage rather than the general replacement cycle?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
