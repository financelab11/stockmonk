import type { StockStory } from "./types";

export const AMD: StockStory = {
  "ticker": "AMD",
  "kicker": "Semiconductors · Processors and accelerators",
  "title": "AMD's growth is real; the margin is the part still under construction",
  "dek": "Revenue is up 41.9% and the shares trade at 96.7x earnings. The distance between those two facts is the whole report.",
  "readingMinutes": 9,
  "takeaways": [
    "Third-quarter 2026 revenue was $13.4B, up 44.7%, with a 21.2% operating margin and EPS of $1.46.",
    "Trailing revenue is $45.4B, up 41.9%, at a 53.7% gross margin and a 17.7% operating margin.",
    "Free cash flow is $7.1B, a 15.5% margin, and net cash is $8.7B; return on invested capital is 10.2%.",
    "{{pe}} trailing earnings and {{evEbitda}} EV/EBITDA compare with sector peer medians of 31.0x and 24.8x."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000018/amd-20251227.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000002488&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Data-center revenue reached 48.0% of the total, and the operating margin followed. Third-quarter revenue was $13.4B, up 44.7%, with an operating margin of 21.2%, a net margin of 18.2% and EPS of $1.46. Revenue has risen from $10.3B in the fourth quarter of fiscal 2025, and the operating margin has climbed from -1.7% in the second quarter of fiscal 2025. The operating leverage is the result that matters. The income statement has turned, and the margin is still rising.",
      "Datacenter is 48.0% of revenue, Client & Gaming 42.0% and Embedded 10.0%. Data-center processors and accelerators carry better margins than client chips, so the shift toward data center lifts gross margin. AMD is fabless, which keeps capex low, but the design roadmap is funded from a smaller revenue base than Nvidia's or Intel's. The data-center share is the variable to watch. The client business is the drag on the blended margin.",
      "The {{pe}} trailing multiple and {{evEbitda}} EV/EBITDA compare with peer medians of 31.0x and 24.8x. The premium is not subtle: AMD is the most expensive semiconductor in this group on trailing earnings. The price embeds data-center share gains and a successful entry into AI accelerators. The trailing business alone does not support it. The premium is a statement about the next product cycle, not the last one. The 2027 estimate is doing the work."
    ],
    "quote": "AMD has proved it can win server designs; the multiple now asks whether it can win accelerators without giving away the margin."
  },
  "whatItDoes": {
    "paragraphs": [
      "AMD sells into four broad markets. Data-center processors compete with Intel for the chips that run cloud and enterprise servers. Accelerators compete with Nvidia for the chips that train and run AI models. Client processors go into laptops and desktops, and embedded chips go into communications, industrial and automotive systems.",
      "The company reports these as separate segments, but the consolidated line is what the tables here use. The important structural point is that three of the four markets are won through design cycles that last several years. A server platform decision made by a cloud provider today determines revenue for the life of that generation.",
      "AMD's scale is smaller than its rivals'. It employs 12,600 people, against workforces several times larger at the companies it competes with. That is efficient per employee and also a constraint: the design roadmap has to be funded from a narrower base."
    ],
    "bullets": [
      {
        "title": "Data-center processors",
        "detail": "Server CPUs sold to cloud providers, enterprises and governments. The share gains here have been the most consistent part of the story."
      },
      {
        "title": "Accelerators",
        "detail": "GPUs for AI training and inference. The fastest-growing line and the one that decides the multiple."
      },
      {
        "title": "Client and embedded",
        "detail": "PC processors and chips for communications, industrial and automotive systems. Cyclical, lower margin, useful for absorbing fixed design costs."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The model is fabless: AMD pays a foundry for wafers, pays for packaging and memory, and sells the finished part. Gross margin of 53.7% is what is left after those costs. It is a hardware margin, well below what a software company earns, and it moves with the mix between client chips and data-center parts.",
      "Operating margin of 17.7% tells you where the rest goes. Roughly 36 points of revenue are consumed between gross profit and operating profit, mostly by research and development and by the sales organization that wins designs. That spending is largely fixed, which is why a 44.7% revenue increase produced a much larger swing in operating income.",
      "Pricing is set against two very different competitors. In server processors AMD prices against Intel on performance per watt and per dollar. In accelerators it prices against Nvidia, where the software ecosystem and the maturity of the platform matter as much as the chip. The second contest is harder to win on price alone."
    ]
  },
  "growth": {
    "paragraphs": [
      "Accelerator revenue is the fastest-growing line and the one with the least history. Revenue reached $22.7B in fiscal 2023, $25.8B in fiscal 2024, $34.6B in fiscal 2025 and $45.4B trailing. The growth rates were -3.9%, 13.7%, 34.3% and 41.9%, and the third quarter grew 44.7%. The acceleration is recent and tied to data-center products rather than the cyclical client business.",
      "Datacenter is 48.0% of revenue, Client & Gaming 42.0% and Embedded 10.0%. The data-center mix is the margin lever: trailing gross margin is 53.7%, up from 49.5% in fiscal 2025, and the operating margin has nearly doubled. Client and gaming remain cyclical, and embedded is small enough to be a rounding error. The risk is that systems sales dilute the mix.",
      "Consensus for 2026 is $52.2B revenue and $8.08 EPS, with 2027 at $95.9B and $17.64. The December quarter is estimated at $17.1B and $2.93, growth of 66.1% and 91.4%. The 2027 estimate assumes revenue nearly doubles again, a large bet on accelerator share and on supply being available to ship it. A shortfall there would quickly reset the equity story."
    ],
    "bullets": [
      {
        "title": "Accelerator ramp",
        "detail": "The fastest-growing product line and the one with the least history. The 2027 estimate depends on it more than on any other variable."
      },
      {
        "title": "Server share",
        "detail": "Datacenter is 48.0% of revenue. The server processor gains have been the most consistent part of the story."
      },
      {
        "title": "Gross margin mix",
        "detail": "The trailing gross margin is 53.7%, up from 49.5% in fiscal 2025. Systems sales could reverse that if they carry lower margins."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Operating margin nearly doubled to 17.7% trailing from 10.7% in fiscal 2025, and the third quarter reached 21.2%. Gross margin is 53.7%, so roughly 36 points of revenue are consumed between gross profit and operating profit, mostly by research and development and by the sales organisation that wins designs. That fixed cost base is why a 44.7% revenue increase produced a much larger swing in operating income.",
      "Return on invested capital is 10.2%, against a 22.6% peer median, and the 17.7% operating margin is below the 28.9% peer median. Return on equity is 11.1%. AMD is growing faster than the peer group but earning less on capital. The gap is the cost of competing at the leading edge and the lower margin on client and gaming revenue."
    ]
  },
  "cash": {
    "paragraphs": [
      "An $8.7B net cash position gives AMD room to fund supply commitments without new debt. Trailing free cash flow was $7.1B, a 15.5% margin. In fiscal 2025, capex of $974M was 12.6% of the $7.7B of operating cash flow and below 3% of revenue, so the cash conversion is mostly a working-capital story. Interest cover is 46.8x. The cash is a buffer for a supply-constrained ramp.",
      "The cash margin is well below Nvidia's 41.9% and Broadcom's 44.2%, which is the cost of ramping a new product line. Inventory and prepayments rise before accelerator revenue is invoiced, and the third quarter's free cash flow of $554M was much weaker than the trailing figure. The balance sheet can fund the ramp; the question is whether the conversion improves as volume scales."
    ]
  },
  "valuation": {
    "paragraphs": [
      "A 2027 EPS estimate of $17.64 is the number that makes the price coherent. On that estimate the shares trade near 26x, close to the peer median of 31.0x; on 2026 EPS of $8.08 they trade at about 57x. The {{pe}} trailing multiple of 99.9x and {{evEbitda}} EV/EBITDA of 178.5x are far above peer medians of 31.0x and 24.8x. The one-year return is {{return1y}}, and the shares sit {{rangePosition}} of the way up a 52-week range of {{range52}}.",
      "The forward multiple is the only way to make the price coherent. 2026 EPS of $8.08 implies about 57x; 2027 EPS of $17.64 implies about 26x. The 2027 multiple is close to the peer median, but only if EPS more than doubles. That is the bet: the price today discounts an accelerator ramp that has not yet shown its full margin.",
      "The peer gap is a bet on the 2027 estimate. Nvidia trades at 20.9x with a 65.2% operating margin, Broadcom at 38.6x with 48.0% and Micron at 9.5x with 74.6% but far more cyclical earnings. AMD at 99.9x is priced as the fastest grower, not the most profitable. A design loss or a margin-dilutive systems mix would compress the multiple faster than revenue."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Forty-nine analysts cover AMD, and the $658 mean target is about 43% above the current price. The range of $525 to $1.3K is unusual because even the low end sits above the market. That is a uniformly positive distribution, which raises the risk of a crowded estimate. The bar for the 2027 estimate is already high.",
      "The 30-day EPS revision is 6.7%, the strongest upward momentum in this group, and it explains the re-rating. 2026 revenue is forecast at $52.2B and EPS at $8.08; 2027 at $95.9B and $17.64. The December quarter is estimated at $17.1B and $2.93. The numbers assume accelerator revenue scales and gross margin holds near 53.7%."
    ]
  },
  "risks": {
    "intro": "AMD's financial position is strong; the risks are competitive and operational. Almost all of them run through the accelerator business.",
    "items": [
      {
        "title": "Accelerator competition",
        "severity": "High",
        "detail": "Nvidia's platform includes a mature software ecosystem and an annual product cadence. Matching the hardware is not the same as matching the switching cost.",
        "watch": "Accelerator revenue disclosures and the pace of new design wins at large customers."
      },
      {
        "title": "Customer concentration",
        "severity": "High",
        "detail": "A small number of cloud and system builders decide whether a new accelerator generation reaches volume. Their procurement choices can move a full year of estimates.",
        "watch": "Concentration in the largest customers and order patterns across quarters."
      },
      {
        "title": "Supply allocation",
        "severity": "Medium",
        "detail": "Leading-edge wafers and high-bandwidth memory are shared with other buyers. Demand can exceed what AMD is able to ship.",
        "watch": "Inventory, purchase commitments and lead times for accelerators."
      },
      {
        "title": "Margin mix",
        "severity": "Medium",
        "detail": "Selling whole accelerator systems rather than chips raises revenue and can lower the gross margin percentage at the same time.",
        "watch": "Gross margin alongside revenue growth, not in isolation."
      },
      {
        "title": "Client cyclicality",
        "severity": "Medium",
        "detail": "The PC market corrected sharply in FY2023 and took operating income with it. That segment has not disappeared.",
        "watch": "Client segment revenue and channel inventory."
      },
      {
        "title": "Export controls",
        "severity": "Medium",
        "detail": "Cross-border rules can remove addressable market for advanced accelerators or require lower-specification products.",
        "watch": "License changes and the geographic revenue split."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "A rising gross margin alongside rising revenue confirms the mix is improving; a falling one says volume is being bought with price."
      },
      {
        "title": "Operating margin trend",
        "detail": "The move from -1.7% to 21.2% is the core of the story. Watch whether the next four quarters continue it."
      },
      {
        "title": "Inventory",
        "detail": "Inventory growth ahead of revenue is normal before a launch and a warning sign after one."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "AMD is a fabless designer that has turned a challenged position into a growing franchise in server processors and is now attempting the same in AI accelerators. Revenue of $45.44B, up 41.9%, and an operating margin that has climbed to 21.2% are evidence that the operating model works.",
      "The valuation is the part that requires belief. At 96.7x trailing earnings, the price assumes revenue more than doubles and that the incremental business earns a better margin than today's blend. The balance sheet, with $8.70B of net cash, means the company can fund that attempt; it does not mean the attempt succeeds.",
      "The educational point is the difference between operating momentum and investment return. AMD's momentum is visible in every quarter of the table. Whether the price already reflects it is a separate question that the next section cannot answer either."
    ],
    "questions": [
      "How much of the accelerator revenue comes from the largest customers?",
      "Does gross margin rise or fall as accelerator systems scale?",
      "What share of the $95.71B next-year estimate depends on one product generation?",
      "How much of the server processor opportunity has already been captured?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
