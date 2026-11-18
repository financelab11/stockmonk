import type { StockStory } from "./types";

export const TENB: StockStory = {
  "ticker": "TENB",
  "kicker": "Software & Cyber · Exposure management",
  "title": "Tenable's scanner franchise has matured; its cash flow has not",
  "dek": "Revenue growth has slowed to 9.5% while free cash flow runs at 26.3% of sales. The distance between those two numbers is the whole investment question.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $1.1B trailing twelve months, +9.5% year over year.",
    "Profitability: 4.4% operating margin and 1.5% net margin.",
    "Cash: $280.4M free cash flow, a 26.3% margin.",
    "Scorecard: 29/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1660280/000166028026000005/tenb-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001660280&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Tenable Holdings, Inc. generated $1.1B of revenue over the last twelve months, +9.5% versus the prior year. The model depends on net revenue retention, sales efficiency and the cost of acquiring the next customer.",
      "The latest reported quarter was Q3 FY26, with $276.4M of revenue and an operating margin of 6.0%. The stock closed at $38.60 on 2026-11-17, giving a market capitalization of $4B.",
      "The shares sit 61% of the way up their 52-week range ($15.73 to $53.22). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A scanner is paid per asset it can see. Cloud computing multiplied the assets and made many of them temporary, which changes what a licence is worth."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product line runs from a free individual scanner to an enterprise platform that continuously inventories assets, prioritises findings by exploitability, and reports on compliance. Tenable.io is the cloud-delivered version, Tenable.sc the on-premises one, and the difference between them matters commercially: a customer moving from one to the other is not adding spend so much as re-timing it.",
      "Buyers are security and risk teams in finance, healthcare, energy, retail and government — organisations with auditors, regulators and a list of systems they must be able to prove they have checked. The company employs 1,367 people and reports one consolidated revenue line, with no segment or geography split in the dataset."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is a subscription, usually priced by the number of assets or users under management, billed annually and recognised over the term. Gross margin is 78.1%, which is normal for infrastructure software: the heavy computation happens on the customer's own machines or in a hosted tenant, so delivery cost stays modest.",
      "The operating margin of 4.4% is where the model gets interesting. Sales and marketing absorb the largest share of revenue because the product is sold to security teams through a direct and channel mix, and because the company has spent years converting an on-premises installed base to cloud subscriptions. That conversion lowers near-term revenue while it happens, even when it improves the long-term contract.",
      "Free cash flow of 26.3% of revenue sits far above operating margin because customers pay annually in advance while costs are recognised across the year. Deferred revenue is, in effect, an interest-free loan from customers, and it is what funds the difference between the two numbers."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 18.9% a year across the fiscal years in the dataset, and the latest quarter changed +9.5% year over year. Third-party estimates for the current fiscal year point to $1.1B of revenue and $2.18 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 4.4% and return on invested capital of 14.3% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Asset growth",
        "detail": "Cloud accounts, containers and connected industrial equipment all add things to inventory. This is the healthiest driver because it does not require a new customer."
      },
      {
        "title": "Module attach",
        "detail": "Cloud security, web application scanning and identity exposure are sold on top of the core licence to the same buyer."
      },
      {
        "title": "Price, not volume",
        "detail": "With a saturated base, revenue growth increasingly depends on raising price per asset at renewal — the hardest kind of growth to sustain against a competitor with a cheaper list price."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 4.4%, the net margin is 1.5% and diluted EPS is $0.13. The latest quarter's operating margin was 6.0%.",
      "Return on equity is -59.6%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $276.4M, an operating margin of 6.0% and a net margin of 4.1%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $280.4M, a 26.3% margin. Net debt is $283.8M.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $280.4M over the last twelve months and net debt was $283.8M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 255.6x trailing earnings and 49.1x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $48.35; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "20 analysts contribute to the third-party consensus. The mean target is $48.35, with a range of $35.00 to $60.00.",
      "Current-year estimates call for $1.1B of revenue and $2.18 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 20 analysts with a mean target of $48.35; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Tenable's risks are the risks of a mature franchise with a leveraged balance sheet: slow growth, price pressure and a valuation that depends on cash rather than earnings.",
    "items": [
      {
        "title": "Growth has stopped compounding",
        "severity": "High",
        "detail": "At 9.5%, revenue growth is barely above the rate at which the installed base renews. A single lost large account would be visible in the total.",
        "watch": "Quarterly revenue growth and the trend in calculated billings."
      },
      {
        "title": "Price pressure from bundling",
        "severity": "High",
        "detail": "Cloud platforms and larger security suites include vulnerability scanning as a feature. For a customer already paying for the platform, the marginal cost of switching is close to zero.",
        "watch": "Average revenue per asset and discounting on renewals."
      },
      {
        "title": "Leverage",
        "severity": "Medium",
        "detail": "Net debt of $283.8M at 3.2x EBITDA is manageable but leaves less room than peers have if cash flow dips.",
        "watch": "Net debt to EBITDA and the maturity profile of the debt."
      },
      {
        "title": "Cloud transition timing",
        "severity": "Medium",
        "detail": "Moving an on-premises customer to a cloud subscription can reduce recognised revenue in the short term even when the contract is larger over its life.",
        "watch": "The mix of cloud versus self-hosted revenue and the pace of conversion."
      },
      {
        "title": "Automated triage",
        "severity": "Medium",
        "detail": "If AI tools can prioritise and remediate findings without a dedicated platform, the value of a scanner that produces a long list of issues falls.",
        "watch": "Product positioning around prioritisation and remediation rather than detection counts."
      }
    ],
    "watchlist": [
      {
        "title": "Free-cash-flow margin",
        "detail": "The 26.3% margin is the strongest part of the story; it needs to hold as growth slows."
      },
      {
        "title": "Operating margin",
        "detail": "The quarterly climb from -3.0% to 6.0% is the proof that scale is producing profit, not just cash."
      },
      {
        "title": "Net debt",
        "detail": "At 3.2x EBITDA there is little room for a cash-flow surprise before the balance sheet becomes a topic."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Tenable is a profitable-on-cash-flow, slow-growing security company carrying modest debt and trading on a cash multiple that looks reasonable next to an earnings multiple that looks absurd. Both observations are correct.",
      "The lesson is about which number to trust when they disagree. Reported earnings near zero make the P/E meaningless, and free cash flow is the better lens for a subscription business with annual prepayment. But cash flow cannot grow faster than revenue forever, and revenue is growing at 9.5%.",
      "The question a reader should be able to answer is what the company does with the cash, and whether that use compounds value faster than the slow growth of the underlying business."
    ],
    "questions": [
      "How much of the free cash flow is a permanent feature of annual prepayment?",
      "What proportion of revenue still comes from self-hosted licences, and how fast is it converting?",
      "Is 9.5% growth the floor, or the middle of a continued decline?",
      "What is the debt refinancing schedule, and at what cost?"
    ]
  }
};
