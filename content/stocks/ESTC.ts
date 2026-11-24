import type { StockStory } from "./types";

export const ESTC: StockStory = {
  "ticker": "ESTC",
  "kicker": "Software & Cyber · Search, observability and security",
  "title": "Elastic sells a search engine by the gigabyte, and that changes the economics",
  "dek": "Revenue of $1.80B grew 16.2% while the operating line stayed near breakeven. Usage pricing makes the product easier to adopt and the revenue harder to forecast.",
  "readingMinutes": 9,
  "takeaways": [
    "Elastic's revenue of $1.8B grew 16.2%, and free cash flow of $349.0M reached 19.4% of sales, within a point of the 20.3% peer median.",
    "The 20.8% net margin is not a trading result: one quarter with a 96.7% net margin produced most of it, and the operating line is -2.6%.",
    "Consumption pricing lets the hosted business expand without a sales call and contract when a customer tidies its logging pipeline.",
    "Twenty-six analysts carry a $111 mean target against an $82 price, with 11 neutral views and a $75 to $132 range."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1707753/000170775326000018/estc-20260430.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001707753&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Consumption pricing cuts both ways, and Elastic's accounts show the cut. Revenue reached $1.8B on a trailing basis, up 16.2%, with a 75.5% gross margin and a -2.6% operating margin. Hosted revenue moves with data ingested and queries run, so a customer that halves its log volume halves that part of the bill without cancelling anything. The revenue line is therefore more sensitive to customer efficiency than a seat-based product would be.",
      "The product is a search engine with three uses: enterprise search, observability and security. The buying centre is technical, and adoption often starts with a developer who downloads the software and ends with a manager paying for a production deployment. That is a cheap way to distribute and a slow way to monetise. The split between self-managed subscriptions and hosted consumption decides gross margin and revenue quality, and the reported figures do not disclose it.",
      "The valuation has to cope with an earnings figure that is not an earnings figure. P/E of 23.1x is calculated on a net margin inflated by one quarter, so it understates the multiple on trading profit. On sales the shares are at 4.3x, and on cash at 24.8x with a 4.0% yield. The cash multiple is the only one that describes the business consistently, and it is where a buyer should start."
    ],
    "quote": "Elastic charges for what customers index, so its revenue falls when they become more efficient, a growth model that rewards tidiness with a smaller bill."
  },
  "whatItDoes": {
    "paragraphs": [
      "Customers choose between running the software themselves and buying it as a hosted service. Self-managed deployments suit large organisations with data-residency constraints and existing infrastructure teams. The hosted service suits everyone who would rather pay for capacity than hire for it, and it is the part of the business that grows with the customer's data volume.",
      "The buying centre is technical: platform engineers, site reliability teams and security operations. That matters because the decision to adopt is often made by an individual developer and the decision to pay is made later, by a manager facing a production incident. The company employs 1,936 people and reports one revenue line, with no segment or geography split in the dataset."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "There are two revenue mechanics underneath the single reported line. Self-managed subscriptions are sold as annual tiers with support and extra features. The hosted service is billed on consumption — storage, compute and data ingest — so the bill moves month to month with how much the customer indexes and queries.",
      "Consumption pricing is genuinely customer-friendly at the start: a team can begin small and grow without renegotiating. It also means revenue falls when a customer tidies up its logging pipeline, a routine event in every observability account. A seat-based product loses revenue only when someone leaves; a consumption product loses revenue when someone becomes more efficient. That is the single most important difference between Elastic and a per-user software company.",
      "Gross margin is 75.5%. The shortfall from a pure licence business is the cost of running other people's workloads: servers, storage and the people who keep them available. Operating margin is -2.6%, so sales and research spending consume the gross profit. The company is close enough to breakeven that small changes in growth have large effects on the margin."
    ]
  },
  "growth": {
    "paragraphs": [
      "Data volume is the demand driver, and AI search is the newest reason for it to grow. A customer indexing more logs, documents or vectors pays more without renegotiating, which is why consumption pricing can expand faster than a seat contract. The same mechanic works in reverse. A platform team that compresses its logs or moves cold data to cheaper storage cuts the bill without churning, and that is a routine event rather than a crisis.",
      "The estimate path is steady rather than ambitious. FY2027 revenue is modelled at $2.0B, up 15.3%, and FY2028 at $2.3B, up 14.7%, with EPS of $3.36 and $3.98. Growth in the mid-teens is roughly where the trailing rate sits, so the consensus is assuming continuity rather than acceleration. For a company with a 75.5% gross margin and a -2.6% operating margin, continuity is also the assumption that lets the operating line reach breakeven."
    ],
    "bullets": [
      {
        "title": "Hosted versus self-managed",
        "detail": "Hosted revenue grows with usage and carries the cost of running other people's workloads; self-managed subscriptions are annual tiers with support and a higher margin."
      },
      {
        "title": "AI search",
        "detail": "Vector search is the newest workload, and the competition is specialist retrieval services rather than the general-purpose search vendors."
      },
      {
        "title": "Optimisation risk",
        "detail": "A customer that halves its ingest halves that part of the bill without cancelling, which makes the growth rate noisier than a seat model's."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Operating margin sat within a narrow band for six quarters, from -3.1% to 0.1%, before weakening to -4.9% in the July 2026 quarter. That band is the real performance record: the company is close enough to breakeven that small changes in growth move the margin, and it has not yet demonstrated the operating leverage a 75.5% gross margin should allow. The net line is a different story and a misleading one.",
      "The 20.8% trailing net margin and the $3.43 of FY2026 EPS both depend on a quarter with a 96.7% net margin, which is an item below the operating line rather than a change in the business. Excluding it, the company ran at roughly breakeven on operating profit and negative on net income in three of the last four quarters. Return on invested capital of -2.0% is the cleaner measure, and it sits at the peer median rather than above it.",
      "The same opacity applies to the hosted gross margin. Renting infrastructure places a floor under delivery cost, and the 75.5% blended margin is the average of a hosted business with a real cost of goods and a self-managed licence with almost none. A mix shift toward hosted usage would lower the blended margin even if every customer stayed. That is why the operating margin can improve while the gross line falls, and why the two should be read together."
    ]
  },
  "cash": {
    "paragraphs": [
      "Renting capacity rather than owning it keeps capital spending at $5.1M, 0.3% of revenue, and pushes the cost into gross margin instead. Free cash flow of $349.0M is 19.4% of sales, within a point of the 20.3% peer median, and it is generated by annual prepayment rather than by a wide operating margin. The cash conversion is good; the operating leverage is not yet visible.",
      "The reported balance sheet carries $889.8M more cash than debt and pays nothing out. At 24.8x free cash flow and a 4.0% yield, the shares are priced for the cash stream to keep growing in the mid-teens. The capital question is what the $889.8M is for. There is no acquisition or buyback in the reported figures, so it is optionality, and optionality is worth less when the operating margin is negative."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Twenty-five times free cash flow is the multiple to use, because the earnings multiple is an artefact. P/E of 23.1x divides the price by a net income that includes a one-off quarter; on operating profit there is no meaningful multiple at all. The sales multiple of 4.3x is the comparable number, and the peer set frames it: Tenable's 9.5% growth comes with a 4.4% operating margin, GitLab's 23.0% with -8.5%, Rubrik's 42.4% with -18.3%. Elastic's 16.2% growth and -2.6% margin sit in the middle of that range.",
      "The peer gap is a growth-for-margin trade, and the arithmetic of the position is narrow. Elastic's 16.2% growth is 6.7 points above Tenable's 9.5% and 6.8 points below GitLab's 23.0%, while its -2.6% operating margin is 7.0 points below Tenable's 4.4% and 5.9 points above GitLab's -8.5%. A company in the middle on both dimensions has no obvious mispricing to exploit, which is why the shares returned 18.3% over a year while the business grew 16.2%.",
      "What would justify the multiple is the operating margin crossing zero while revenue grows in the mid-teens, which is what the FY2027 estimate of $3.36 assumes. What would break it is a year of consumption optimisation, because the hosted business would slow without a corresponding cost reduction. The 4.0% cash yield is the part of the return that does not depend on that outcome."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Twenty-six analysts cover Elastic, with a mean target of $111 against an $82 price and a range of $75 to $132. A mean 35% above the market price is a strong signal, but the range is wide and the neutral block is large enough that the consensus is not unanimous about direction.",
      "Estimates have been stable, with a 90-day EPS revision of 3.6%, and every one of the last four quarters beat, the latest $0.70 against $0.58. FY2027 EPS of $3.36 implies 30.8% growth, which is a big number for a company with a -2.6% operating margin, and it depends on the operating line closing as much as on revenue. The consensus is assuming both, which is why the estimate carries more risk than the revenue line."
    ]
  },
  "risks": {
    "intro": "Elastic's risks are concentrated in its pricing mechanic and its open-source heritage. The balance sheet is strong; the uncertainty is how much revenue survives when customers optimise.",
    "items": [
      {
        "title": "Consumption volatility",
        "severity": "High",
        "detail": "Hosted revenue moves with data ingested and queries run. A customer that halves its log volume halves that part of the bill without cancelling anything.",
        "watch": "Growth in hosted revenue versus self-managed subscription revenue."
      },
      {
        "title": "Open-source and managed-service competition",
        "severity": "High",
        "detail": "The engine's availability has always created a tension: it drives adoption, and it also lets cloud platforms offer a managed version that competes with the paid service.",
        "watch": "Changes to licensing terms and the growth rate of the hosted business."
      },
      {
        "title": "Purpose-built search alternatives",
        "severity": "Medium",
        "detail": "Specialist vector databases and retrieval services are competing for the AI workload that Elastic wants to serve. A general engine is convenient; a specialised one can be faster.",
        "watch": "Product announcements around vector search and the attach rate in AI projects."
      },
      {
        "title": "Hosted gross margin",
        "severity": "Medium",
        "detail": "Renting infrastructure rather than owning it keeps capital spending low but places a floor under the cost of delivery.",
        "watch": "Gross margin by quarter and any shift toward owned capacity."
      },
      {
        "title": "Concentration of large spenders",
        "severity": "Medium",
        "detail": "Consumption models are sensitive to a few accounts that spend heavily. One customer reducing ingest can move a quarter.",
        "watch": "The revenue contribution of the largest customers and net expansion rates."
      }
    ],
    "watchlist": [
      {
        "title": "Hosted revenue growth",
        "detail": "The consumption side is the growth engine and the volatility source; its rate explains most of the quarter-to-quarter noise."
      },
      {
        "title": "Operating margin",
        "detail": "At -2.6% the company is close enough to breakeven that a small revenue miss changes the sign."
      },
      {
        "title": "Free-cash-flow margin",
        "detail": "The 19.4% margin is what supports the valuation while earnings are unreliable."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Elastic has a real technology franchise, three products built on one engine, and a distribution model that has put its software in front of far more developers than it could ever have sold to directly. It has converted that reach into $1.80B of revenue and a healthy cash flow.",
      "The lesson in its accounts is about pricing mechanics. Consumption revenue behaves differently from seat revenue: it expands without a sales call and contracts without a cancellation. That makes the growth rate noisier and the customer relationship more efficient, and it puts a premium on understanding what the customer is actually buying.",
      "The reader should finish by deciding whether the AI search wave expands Elastic's market or merely changes who competes in it."
    ],
    "questions": [
      "What share of revenue is consumption-based, and how does it grow relative to subscription?",
      "How much of the FY2026 net profit came from the one quarter, and from what item?",
      "Is the AI search opportunity adding new customers or selling more to existing ones?",
      "Does gross margin hold at 75% as hosted usage grows?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
