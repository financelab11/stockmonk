import type { StockStory } from "./types";

export const MSFT: StockStory = {
  "ticker": "MSFT",
  "kicker": "Application software · Cloud infrastructure",
  "title": "Microsoft is selling AI through the software enterprises already own",
  "dek": "Azure grew 48% and the cloud business now bills $63.9B a quarter. The question is whether the capital behind it earns its cost.",
  "readingMinutes": 11,
  "takeaways": [
    "First-quarter fiscal 2027 revenue was $92.3B, up 19%, with operating income of $45.9B and GAAP EPS of $4.92.",
    "Microsoft Cloud revenue reached $63.9B, up 30%, Azure grew 48%, and commercial remaining performance obligation rose 73% to $677B.",
    "Trailing revenue is $346.4B at a 47.1% operating margin, but free cash flow is $60.0B, a 17.3% margin, as capex reached $115.9B in fiscal 2026.",
    "A {{pe}} multiple is a discount to the 32.0x peer median for a business with a 47.1% operating margin."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm",
  "irUrl": "https://www.microsoft.com/en-us/investor",
  "earningsReleaseUrl": "https://www.sec.gov/Archives/edgar/data/789019/000119312526436122/msft-ex99_1.htm",
  "bigPicture": {
    "paragraphs": [
      "Azure's 48% growth did the heavy lifting in the September quarter, but the consolidated numbers were just as strong. Revenue reached $92.3B, up 19%, operating income $45.9B, up 21%, and GAAP EPS $4.92. Net income rose 32% to $36.6B, helped by the OpenAI investment treatment; non-GAAP EPS of $4.89, up 18%, is the cleaner operating comparison. The composition matters more than the headline, because the cloud mix sets the margin.",
      "Microsoft Cloud revenue was $63.9B, up 30%, and commercial remaining performance obligation rose 73% to $677B. That backlog is contracted work, not a pipeline, and it supports the case that AI demand is becoming multi-year enterprise commitments. The cost is visible in capex: $115.9B in fiscal 2026 against $64.6B a year earlier, with depreciation still ahead. The backlog is the strongest forward indicator in the release, and it is growing faster than revenue.",
      "The shares carry a {{pe}} trailing multiple and {{evEbitda}} EV/EBITDA, below peer medians of 32.0x and 25.5x, despite a 47.1% operating margin. The discount is not about Azure's growth; it is about the gap between a 47.1% operating margin and a 17.3% free-cash-flow margin. Whether the data-centre spend earns its cost of capital is the question that sets the multiple. The market is charging for the capex, not doubting the franchise."
    ],
    "quote": "Microsoft's $677B backlog turns AI demand into contracted revenue; the capex line decides whether that revenue is profitable."
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
      "Azure consumption is the growth engine, and it is still accelerating. Azure grew 48%, ahead of Microsoft 365 commercial cloud at 18%, while the commercial RPO rose 73% to $677B. The installed base matters: customers already running Microsoft 365 and Entra ID have a shorter path to Azure than to a rival cloud, which is why the AI attach is converting into contracted spend rather than pilots.",
      "Revenue is shifting toward infrastructure. Productivity & Business Processes is 42.2% of annual revenue, Intelligent Cloud 41.5% and More Personal Computing 16.3%. Infrastructure is lower-margin than software but larger and stickier. Consolidated gross margin slipped to 67.7%, and the trend will continue as AI capacity costs land in Intelligent Cloud before the revenue they support. Intelligent Cloud carries the capital cost before the revenue.",
      "Fiscal 2027 consensus of $396.0B revenue and $20.01 EPS assumes 19.3% growth, with EPS growth of 15.8% lagging because of depreciation. Fiscal 2028 is $477.1B and $24.20, a re-acceleration to 20.9% EPS growth. The December quarter is estimated at $96.7B, so the near-term bar is already above the current run rate. The estimate assumes depreciation peaks without a demand pause."
    ],
    "bullets": [
      {
        "title": "Azure consumption",
        "detail": "Azure grew 48% in the quarter. Consumption is the cleanest evidence that AI workloads are moving from trials into production rather than staying in pilot budgets."
      },
      {
        "title": "RPO conversion",
        "detail": "The $677B commercial RPO, up 73%, is contracted but unrecognised revenue. The timing and margin of conversion matter more than the headline figure."
      },
      {
        "title": "Copilot attach",
        "detail": "Microsoft 365 commercial cloud grew 18%, showing the installed base is expanding revenue per seat, not just adding users."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Operating margin of 49.8% was up from 45.1% in the June quarter, and net income of $36.6B was 39.7% of revenue. GAAP EPS rose 32%, helped by the OpenAI treatment; non-GAAP EPS rose 18%. The gap between the two is a reminder that reported earnings can move for reasons unrelated to the operating business, and the non-GAAP line is the better guide to the margin trend.",
      "Trailing operating margin is 47.1%, net margin 41.2% and return on equity 30.3%. Return on invested capital is 25.9%, above the 18.8% peer median, and the operating margin is well above the 27.7% median. The anomaly is cash conversion: the 17.3% free-cash-flow margin is below the 28.8% peer median because $115.9B of capex is landing before the revenue it supports."
    ]
  },
  "cash": {
    "paragraphs": [
      "Capex of $115.9B absorbed 63% of the $182.9B of operating cash flow in fiscal 2026, which is the shape of a cloud build rather than a software-only business. Trailing free cash flow was $60.0B, a 17.3% margin. Net cash is $29.0B and interest cover is 50.6x, so the balance sheet is not the constraint. The gap is the cost of capacity that has not yet been billed.",
      "Capital allocation has a clear order. The dividend and buyback are funded, but capex has first claim. Commercial RPO gives visibility on the revenue side, yet AI workloads carry a lower margin than traditional licences while the infrastructure is depreciated. At {{pfcf}} trailing free cash flow and a {{fcfYield}} yield, the shares are priced for a successful conversion; a capex peak without an Azure slowdown would be the bullish resolution."
    ]
  },
  "valuation": {
    "paragraphs": [
      "A 26.0x trailing multiple is a discount to the 32.0x peer median for a business with a 47.1% operating margin. EV/EBITDA of 18.2x compares with 25.5x, and P/FCF of 61.7x shows the cash penalty from the build. The shares sit {{rangePosition}} of the way up a 52-week range of {{range52}} and have returned {{return1y}} over the year. The gap is about cash conversion, not demand.",
      "Forward multiples depend on the capex cycle. Fiscal 2027 EPS of $20.01 implies about 25x and fiscal 2028 EPS of $24.20 about 21x. Those are below the peer median despite the margin, which is unusual for a franchise with this much recurring revenue. A dollar of Azure revenue is worth less than a dollar of software revenue until the capex turns.",
      "The peer set shows the trade-off. Nvidia trades at 20.9x with a 65.2% operating margin and a 41.9% free-cash-flow margin; Apple at 38.4x with 33.0%; Broadcom at 38.6x with 48.0% but more leverage. Microsoft at 26.0x sits in the middle, reasonable if Azure stays near 40% and capex peaks. A slowdown to 25% would make the multiple look full. The shares price a successful conversion, not a capex-led margin shock."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Targets range from $440 to $870, with a mean of $636, about 28% above the current price. The 54 analysts are unusually clustered on the upside: only a handful sit below the market, and the dispersion is mostly about the pace of Azure rather than the direction. That is a consensus with a narrow bear case.",
      "The revision trend is modestly positive. EPS estimates rose 1.2% over 30 days and 1.4% over 90 days, while the December quarter is forecast at $96.7B of revenue. Fiscal 2027 revenue is $396.0B and EPS $20.01; fiscal 2028 is $477.1B and $24.20. The estimates embed Azure near 40%, the RPO converting on schedule and capex decelerating without a margin shock."
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
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
