import type { StockStory } from "./types";

export const CRWV: StockStory = {
  "ticker": "CRWV",
  "kicker": "AI cloud · GPU infrastructure",
  "title": "CoreWeave's gross margin is 67% and its net margin is negative 25%",
  "dek": "The gap is not operations. It is the cost of financing a fleet of accelerators with debt, and thirty-eight analysts disagree about whether that is a problem or the point.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue of $7.6B grew 115.3%, and the 67.4% gross margin still leaves an operating margin of negative 3.0%.",
    "Free cash flow of negative $13.7B is 179.9% of revenue, a deficit that requires continuous access to capital.",
    "Interest cover is negative, so the debt that finances the fleet is serviced from new capital rather than from operating profit.",
    "At 5.7x EBITDA and 2.8x sales, the shares are priced as a leveraged lessor of depreciating equipment."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm",
  "irUrl": "https://www.coreweave.com",
  "bigPicture": {
    "paragraphs": [
      "A 67.4% gross margin and a negative 25.4% net margin in the same period is the whole CoreWeave argument. The gross spread says an hour of rented compute sells for much more than it costs to deliver. The net loss says the cost of financing the fleet, and the depreciation of equipment that loses value with each chip generation, consumes more than the operating profit leaves. Both statements are true at the same time, and the gap between them is the balance sheet.",
      "Customers sign multi-year contracts for clusters because moving a model to another provider is disruptive and because capacity is scarce at the scale they need. That is genuine demand, and it explains why revenue went from $1.9B in FY2024 to $5.1B in FY2025 and $7.6B trailing. It does not explain whether the contracts are priced high enough to cover the capital, which is a separate question answered by the cash flow.",
      "The operating margin of negative 3.0% is close to a threshold: a modest improvement in utilisation or pricing would push it positive. The net margin is further away because interest sits below the line. At 5.7x EBITDA the shares look cheap, but EBITDA adds back the depreciation that is the real cost of the fleet. The debate is about the balance sheet, not the product. The equity is a residual claim on a fleet whose value depends on the next generation of chips."
    ],
    "quote": "CoreWeave has proven the demand; the argument is whether the balance sheet leaves anything for the equity."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product is contracted access to clusters of accelerators, with the networking, storage and orchestration software needed to run training and inference workloads. Customers sign multi-year commitments because moving a model to a different provider is disruptive and expensive, and because capacity is scarce in the sizes they need.",
      "Delivering that product requires physical assets: buildings, power, cooling, networking and the machines themselves. CoreWeave does not make chips; it buys them, installs them and rents them. That places it in a capital-intensive position between a supplier with pricing power and customers who are large enough to negotiate.",
      "The competitive position depends on utilisation and on the cost of capital. A provider that keeps its fleet busy and finances it cheaply can earn a return on a 67.4% gross margin. A provider that does neither is left with depreciation and interest on equipment that is losing value every quarter, which is the risk that the negative net margin is pointing at."
    ],
    "bullets": [
      {
        "title": "Contracted capacity",
        "detail": "Multi-year commitments for accelerator clusters. The revenue is agreed in advance, which is why growth has been so fast."
      },
      {
        "title": "Owned infrastructure",
        "detail": "Buildings, power and networking as well as the machines. More capital than a reseller, more control than a tenant."
      },
      {
        "title": "Customer profile",
        "detail": "AI labs and enterprises that need capacity at a scale they cannot assemble themselves. Few, large, and technically demanding."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is a contracted rate for capacity over time. A 67.4% gross margin means the direct cost of delivering an hour of compute, including power, cooling and the depreciation of the equipment, takes about a third of the price. That is a healthy spread and it is the reason the business has been able to grow at all.",
      "Operating expenses consume nearly all of the remaining gross profit. Sales, engineering and administration brought the operating margin to negative 1.9%, which means the company is roughly at break-even before it pays for the money it borrowed. That is not unusual for a business expanding this quickly, and it does mean the operating result is close to a threshold: a modest improvement in utilisation or pricing would push it positive.",
      "The financing cost is what turns a near-zero operating margin into a 25.4% net loss. Interest on debt, and the amortisation of whatever fees and leases sit alongside it, is charged after operating profit. For a company with $7.59B of revenue and a fleet that has to be replaced every few years, the interest line is not a peripheral item. It is the difference between a viable infrastructure business and an expensive one."
    ]
  },
  "growth": {
    "paragraphs": [
      "Multi-year contracts are the reason growth has been so fast and so visible. Revenue climbed from $583.9M in the September 2024 quarter to $2.6B in June 2026, and the customer base is concentrated in AI labs and enterprises that need capacity at a scale they cannot assemble themselves. Contracted revenue is worth more than spot revenue, which is why the company has grown even while losing money.",
      "The constraint is capital, not demand. Each dollar of revenue requires accelerators, buildings, power and networking before the first invoice, and the equipment has to be replaced as new generations arrive. A provider that keeps its fleet busy and finances it cheaply can earn a return on a 67.4% gross margin; one that does neither is left with depreciation and interest on assets that are losing value every quarter.",
      "The estimates assume $13.1B of revenue in FY2026, 155.6% growth, and $27.1B in FY2027, another 106.6%, with losses per share in both years. A doubling of revenue on a base that is already $13.1B requires another fleet, which requires another round of financing. The forecast is therefore a capital-markets assumption as much as an operating one. The revenue line is the one the market can check; the financing line is the one that decides the equity."
    ],
    "bullets": [
      {
        "title": "Contracted demand",
        "detail": "Multi-year commitments make the revenue visible, but a few large customers account for much of it."
      },
      {
        "title": "Fleet renewal",
        "detail": "Accelerators lose value as new generations arrive, so the depreciation schedule is a competitive variable."
      },
      {
        "title": "Cost of capital",
        "detail": "The gap between the operating and net margins is the interest bill, and it decides whether the equity has value."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "At negative 3.0%, the operating margin is close enough to zero that small changes matter. The quarterly path ran 20.1% in September 2024, 15.0% in December, negative 2.7% in March 2025, 1.6%, 3.8%, negative 5.7%, negative 6.9% and negative 1.9% in June 2026. Revenue advanced every quarter; the margin did not, because depreciation and the cost of standing up new capacity grew as fast as the top line.",
      "Below the operating line, interest turns a small loss into a 25.4% net loss. Interest cover of negative 0.1x means operating profit does not cover the interest charge, so the debt is being serviced from cash that comes from financing rather than from operations. That is the difference between a business that is merely unprofitable and one whose capital structure is the problem.",
      "Return on invested capital of negative 3.6% and return on equity of negative 38.4% are the summary. The equity return is worse because leverage amplifies an operating return that is already below zero. For comparison, Nebius reports negative 7.3% on invested capital at a 68.6% gross margin, and IREN negative 6.1% at 72.2%; all three are building faster than they are earning."
    ]
  },
  "cash": {
    "paragraphs": [
      "A $13.7B cash deficit is 179.9% of revenue, which is the largest absolute deficit in the group. FY2025 operating cash flow was $3.1B against $10.3B of capex, and the June 2026 quarter alone consumed $5.7B. The deficit is not a working-capital timing issue; it is the cost of buying a fleet that is larger than the revenue it currently supports.",
      "The financing is the business model. Debt funds the equipment, interest is charged below the operating line, and the equity is the residual after the lenders are paid. Interest cover of negative 0.1x says the residual is currently negative. No dividend is paid, and the filings do not disclose the maturity schedule, which is the fact that would determine whether the structure is survivable."
    ]
  },
  "valuation": {
    "paragraphs": [
      "The lowest EBITDA multiple in the group belongs to the company with the largest absolute cash deficit. At 5.7x EBITDA, CoreWeave looks cheap against a 36.0x peer median, but EBITDA adds back the depreciation of assets that have to be replaced every few years. On sales the multiple is 2.8x, which is cheap only if the revenue is durable and the margin can turn positive.",
      "On the FY2026 revenue estimate of $13.1B the market value of $26.9B is about 2.1x sales, and on FY2027's $27.1B it is about 1.0x. Those multiples are typical of a capital-intensive lessor, not of a software company, and they are the right frame. The P/E is not usable because EPS is negative in both years, at -$4.75 and -$3.64. The market is valuing the fleet, not the earnings, because the earnings are negative.",
      "What justifies the price is utilisation high enough to cover depreciation and interest, which would make the equity a leveraged claim on a growing annuity. What breaks it is a customer renegotiation, a refinancing at a higher rate, or a new chip generation that shortens the life of the existing fleet. The negative 50.7% free cash flow yield is the measure of the capital still required."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Thirty-eight analysts sit behind the Yahoo Finance figures of 18 November 2026, the widest coverage in the group, with a mean target of $115 against a $48 price and a range of $39 to $278.",
      "Estimates have been cut: EPS revisions fell 7.1% over thirty days and 8.6% over ninety, and the last two quarters missed the published figure, at -$0.89 against -$0.68 and -$1.40 against -$1.20. FY2026 is $13.1B of revenue and -$4.75 of EPS, FY2027 $27.1B and -$3.64. The consensus assumes the loss narrows as revenue doubles, which requires the new capacity to earn a better margin than the old."
    ]
  },
  "risks": {
    "intro": "CoreWeave's risks are financial as much as operational. The demand has been proven; the question is whether the capital structure allows the company to serve it profitably.",
    "items": [
      {
        "title": "Financing cost",
        "severity": "High",
        "detail": "A negative 1.9% operating margin becomes a negative 25.4% net margin after interest. The debt is the difference between the two.",
        "watch": "Interest expense, the maturity schedule and the cost of any new borrowing."
      },
      {
        "title": "Customer concentration",
        "severity": "High",
        "detail": "A few large contracts account for much of the revenue. A renegotiation or a customer failure would hit revenue and the ability to service debt together.",
        "watch": "Revenue from the largest customers and the remaining contract terms."
      },
      {
        "title": "Equipment obsolescence",
        "severity": "High",
        "detail": "Accelerators lose value as new generations arrive. A fleet bought at one performance level has to compete with newer capacity.",
        "watch": "Depreciation policy, the useful life assumed and the pace of new chip generations."
      },
      {
        "title": "Utilisation",
        "severity": "Medium",
        "detail": "A 67.4% gross margin assumes the capacity is rented. Idle equipment still depreciates and still carries its share of the debt.",
        "watch": "Revenue per unit of installed capacity and any disclosure on contracted backlog."
      },
      {
        "title": "Capital intensity",
        "severity": "Medium",
        "detail": "Negative $13.65B of free cash flow means the company depends on continued access to capital markets at a workable price.",
        "watch": "The split between debt and equity raised, and the terms of each."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "It has ranged from negative 6.9% to positive 3.8%. Crossing zero sustainably would change the equity story."
      },
      {
        "title": "Debt disclosure",
        "detail": "The missing balance sheet detail is the most important thing to find in the filings."
      },
      {
        "title": "Contracted revenue",
        "detail": "The portion of future revenue already signed is what separates an infrastructure business from a spot rental one."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "CoreWeave is a GPU cloud with $7.59B of trailing revenue growing 115.3%, a 67.4% gross margin and a negative 25.4% net margin. It spent $13.65B more than it earned to build capacity, and it finances that capacity with debt. The operating business is close to break-even; the capital structure is not.",
      "The educational point is that the distance between gross margin and net margin measures the cost of the balance sheet, not the quality of the product. A company can have a good product, a growing market and a negative net margin at the same time, and the reason is usually that the assets are financed rather than owned outright. Whether that is sensible depends on the return on the assets against the interest rate, and that comparison is not in the data here.",
      "What is not known is the size and terms of the debt, the concentration of the contract book, and how quickly the equipment has to be replaced. The AI build-out created this business; it does not determine whether the financing structure will leave anything for the equity."
    ],
    "questions": [
      "What is the total debt, its maturity profile and its average interest rate?",
      "What share of revenue comes from the largest contracts?",
      "Over how many years are the accelerators depreciated, and does that match their economic life?",
      "What utilisation rate does the installed fleet run at today?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
