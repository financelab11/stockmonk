import type { StockStory } from "./types";

export const MSFT: StockStory = {
  "ticker": "MSFT",
  "kicker": "Application software · Cloud infrastructure",
  "title": "Microsoft is selling AI through the software enterprises already own",
  "dek": "Azure grew 48% and the cloud business now bills $63.9B a quarter. The question is whether the capital behind it earns its cost.",
  "readingMinutes": 11,
  "takeaways": [
    "Q1 FY2027 revenue was $92.3B, up 19%; operating income rose 21% to $45.9B and GAAP EPS was $4.92, up 32%.",
    "Microsoft Cloud revenue was $63.9B, up 30%, Azure grew 48%, and commercial remaining performance obligation rose 73% to $677B.",
    "Trailing revenue is $346.4B at a 47.1% operating margin, with $60B of free cash flow and $29B of net cash.",
    "At {{price}} the shares trade at {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA, with a {{return1y}} one-year return and a {{fcfYield}} free-cash-flow yield."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm",
  "irUrl": "https://www.microsoft.com/en-us/investor",
  "earningsReleaseUrl": "https://www.sec.gov/Archives/edgar/data/789019/000119312526436122/msft-ex99_1.htm",
  "bigPicture": {
    "paragraphs": [
      "Microsoft reported first-quarter fiscal 2027 revenue of $92.3B on 28 October 2026, up 19% from a year earlier. Operating income rose 21% to $45.9B, net income rose 32% to $36.6B and GAAP diluted EPS was $4.92. The GAAP figure includes the impact of the OpenAI investment; non-GAAP EPS was $4.89, up 18%, which is a cleaner read on the operating business.",
      "The cloud detail is where the growth sits. Microsoft Cloud revenue was $63.9B, up 30% and accelerating, Azure grew 48%, and commercial remaining performance obligation rose 73% to $677B. That backlog matters more than a single quarter's beat: it is contracted work that has not yet been recognised, and it supports the case that AI demand is being converted into multi-year enterprise commitments rather than one-off pilots.",
      "The market has priced a good deal of this. At {{price}} the market capitalisation is {{marketCap}}, or {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA. The shares are {{rangePosition}} of the way up a 52-week range of {{range52}} and have returned {{return1y}} over the year, so the multiple has done most of the work while earnings grew. The debate is now about capital intensity: whether the data-centre spend behind Azure earns a return above its cost of capital, or merely buys revenue at a lower margin."
    ],
    "quote": "Microsoft's advantage is not that it has the best model. It is that it has the shortest path from a model to a paying enterprise seat."
  },
  "whatItDoes": {
    "paragraphs": [
      "The company reports three segments. Productivity & Business Processes contains Office, LinkedIn and Dynamics. Intelligent Cloud contains Azure, server products and enterprise services. More Personal Computing contains Windows, gaming, search and devices.",
      "The segment names hide the interconnection. Azure sells compute and AI services, but Office and Windows generate the data, identity and workflow context that make those services stickier. A customer that already runs Microsoft 365 and Entra ID has a lower switching cost to Azure than to a rival cloud.",
      "Microsoft also owns a large stake in OpenAI and has integrated its models into Copilot products. That relationship is a strategic asset and a governance question at the same time, because the terms can change and the investment is not a conventional wholly-owned business."
    ],
    "bullets": [
      {
        "title": "Productivity & Business Processes",
        "detail": "Office 365, LinkedIn, Dynamics. 42.2% of annual revenue and the subscription base that funds the rest."
      },
      {
        "title": "Intelligent Cloud",
        "detail": "Azure, server products, enterprise services. 41.5% of revenue and the main AI growth vector."
      },
      {
        "title": "More Personal Computing",
        "detail": "Windows, gaming, search and devices. 16.3% of revenue and a cyclical consumer exposure."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Most of Microsoft's revenue is recurring. Commercial subscriptions renew on multi-year contracts, and Azure consumption grows with customer workloads. That model produces high visibility and negative working capital, which is why the company can fund a large dividend and buyback while still investing heavily.",
      "The United States is 51.5% of revenue and non-US markets are 48.5%, so Microsoft is genuinely global. Currency movements matter, but the bigger driver is the pace at which existing customers move workloads to the cloud and add AI seats.",
      "The mix is shifting toward infrastructure, which is lower-margin than software but larger and stickier. Investors should watch the gross margin of Intelligent Cloud separately from the company average, because AI capacity costs land there first."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue has compounded through the cloud transition and is now $346.4B on a trailing basis, up 17.9% year over year. The quarterly path through fiscal 2027 started at $92.3B, up from $90.0B in the June quarter, and consensus looks for $96.7B next quarter. Growth at this scale is unusual for a company of Microsoft's size, and it is being driven by consumption rather than by licence renewals.",
      "The composition matters. Azure grew 48%, faster than the cloud average, while Microsoft 365 commercial cloud grew 18% (19% in constant currency) on an adjusted basis. The commercial RPO of $677B, up 73%, is the strongest forward indicator in the release: it converts a demand narrative into contracted obligations that will be recognised over the next several years.",
      "Third-party estimates put current-fiscal-year revenue at $396B and EPS at $20.01, with next year at $477B and $24.20. Those are consensus numbers, not Stockmonk projections. They assume Azure keeps growing at a rate well above the corporate average and that the AI attach to Office continues to convert seats into higher revenue per user."
    ],
    "bullets": [
      {
        "title": "Azure and AI consumption",
        "detail": "Azure grew 48% in the quarter. Consumption growth is the cleanest signal that AI workloads are moving from trials into production."
      },
      {
        "title": "Commercial RPO",
        "detail": "$677B of contracted but unrecognised revenue, up 73%, gives more visibility than a backlog of renewals alone."
      },
      {
        "title": "Copilot attach",
        "detail": "Microsoft 365 commercial cloud growth of 18% shows the installed base is still expanding revenue per seat, not just adding users."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The quarter's operating margin was 49.8%, up from 45.1% in the June quarter, and net income of $36.6B was 39.7% of revenue. GAAP EPS of $4.92 rose 32%, helped by the OpenAI investment treatment; the non-GAAP figure of $4.89, up 18%, is the better comparison against the operating result.",
      "On a trailing basis the operating margin is 47.1%, the net margin 41.2%, return on equity 30.3% and return on invested capital 29.2%. Those are strong numbers for a capital-intensive cloud business, but the trend to watch is the relationship between revenue growth and capital expenditure: the free-cash-flow margin of 17.3% is well below the software-only history, because the AI build-out consumes cash before it produces revenue."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow was $60B over the trailing period, a 17.3% margin, and the balance sheet carries $29B of net cash. At the current price the shares trade at {{pfcf}} trailing free cash flow, a {{fcfYield}} free-cash-flow yield. That is the price of the AI investment: a business that once converted most of its operating profit into cash is now reinvesting a large share of it in data centres.",
      "The cash question is not whether Microsoft can fund the build-out; it can. It is whether the incremental capex earns a return. Commercial RPO gives visibility on the revenue side, but the margin on AI workloads will be lower than on traditional software licences, at least while the infrastructure is being depreciated."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At {{price}} the market capitalisation is {{marketCap}}, or {{pe}} trailing earnings, {{evEbitda}} EV/EBITDA and {{pfcf}} trailing free cash flow. The stock is {{rangePosition}} of the way up its 52-week range ({{range52}}) and has returned {{return1y}} over the past year, so the multiple has compressed slightly even as earnings grew.",
      "On consensus numbers the forward picture is about 25.3x FY2027 EPS of $20.01 and about 20.9x FY2028 EPS of $24.20. Those multiples are a premium to the market, which is defensible if Azure keeps growing near 40% and the RPO converts at the current margin. They are harder to defend if cloud growth decelerates toward 20% while capex stays at the current pace.",
      "The peer table below compares Microsoft with a group of large software and platform businesses. The multiple is a starting point for questions, not a verdict: a 47% operating margin with a 17% free-cash-flow margin is a different business from a 47% operating margin with a 35% cash margin."
    ]
  },
  "analysts": {
    "paragraphs": [
      "The attributed third-party consensus covers 54 analysts with a mean target of $636.12 and a range of $440.00 to $870.00, as of 18 November 2026. The spread reflects genuine disagreement about how much of the AI infrastructure spend converts into profitable cloud revenue over the next two years.",
      "Current-year estimates call for $396B of revenue and $20.01 of EPS; next year is $477B and $24.20. These are third-party forecasts and can change without notice. They are shown for context, not as a recommendation, and they are the reason the forward multiple looks lower than the trailing one."
    ]
  },
  "risks": {
    "intro": "Microsoft's balance sheet and recurring revenue reduce financial risk. The important risks are competitive, regulatory and capital-allocation related.",
    "items": [
      {
        "title": "AI capex returns",
        "severity": "High",
        "detail": "Capital expenditure is rising faster than free cash flow. If AI demand does not scale as expected, depreciation will weigh on margins.",
        "watch": "Capital expenditure guidance, Azure growth and management commentary on capacity utilisation."
      },
      {
        "title": "OpenAI relationship",
        "severity": "Medium",
        "detail": "Microsoft's AI position depends partly on a partner it does not control. Changes in governance, economics or model access would matter.",
        "watch": "Contract disclosures and changes to the OpenAI commercial arrangement."
      },
      {
        "title": "Cloud competition",
        "severity": "Medium",
        "detail": "AWS and Google Cloud are aggressive on price and AI services. Azure's growth premium is not guaranteed.",
        "watch": "Azure growth relative to AWS and Google Cloud, and gross-margin trends."
      },
      {
        "title": "Regulation",
        "severity": "Medium",
        "detail": "Bundling, cloud licensing and the Activision acquisition have attracted regulatory scrutiny in multiple jurisdictions.",
        "watch": "Antitrust proceedings and changes to software licensing terms."
      },
      {
        "title": "Consumer and PC cyclicality",
        "severity": "Low",
        "detail": "Windows and gaming are exposed to hardware cycles, but they are a smaller part of the mix than they used to be.",
        "watch": "PC shipment data and gaming content releases."
      }
    ],
    "watchlist": [
      {
        "title": "Azure growth",
        "detail": "The quarterly growth rate is the cleanest read on AI demand and competitive position."
      },
      {
        "title": "Capex as a share of revenue",
        "detail": "A rising ratio is not automatically bad, but it needs to translate into future revenue."
      },
      {
        "title": "Copilot monetisation",
        "detail": "Seat counts and average revenue per user would show whether AI is expanding the software budget."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Microsoft is one of the few companies that can distribute AI through software enterprises already pay for. The latest quarter supports that: revenue up 19%, Azure up 48%, cloud revenue up 30% and a commercial backlog of $677B that grew 73%.",
      "The educational point is that growth and cash conversion have diverged. Operating margin is 47.1% but the free-cash-flow margin is 17.3%, because the AI build-out consumes capital before it produces revenue. The shares at {{pe}} trailing earnings are not expensive against that growth, but the multiple depends on Azure sustaining its rate and on the capex earning a return.",
      "A reader should leave with three questions: how much of Azure's growth is AI consumption versus migration; when the capex cycle peaks relative to revenue; and what the margin looks like once the new capacity is fully depreciated."
    ],
    "questions": [
      "What share of Azure growth comes from AI workloads rather than traditional cloud migration?",
      "How much of the $677B RPO converts within the next four quarters, and at what margin?",
      "When does capital expenditure peak as a share of revenue?",
      "What happens to the multiple if Azure growth settles near 25%?"
    ]
  },
  "narrativeSource": "handwritten",
  "narrativeUpdatedAt": "2026-11-18"
};
