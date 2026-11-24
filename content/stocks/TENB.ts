import type { StockStory } from "./types";

export const TENB: StockStory = {
  "ticker": "TENB",
  "kicker": "Software & Cyber · Exposure management",
  "title": "Tenable's scanner franchise has matured; its cash flow has not",
  "dek": "Revenue growth has slowed to 9.5% while free cash flow runs at 26.3% of sales. The distance between those two numbers is the whole investment question.",
  "readingMinutes": 9,
  "takeaways": [
    "A 9.5% growth rate on $1.1B of revenue came with $280.4M of free cash flow, 26.3% of sales and the widest cash margin in the software peer set.",
    "Operating margin improved from -7.4% in March 2025 to 6.0% in September 2026, a run in which only one quarter failed to advance.",
    "At 17.0x free cash flow and a 5.9% cash yield, the shares cost a fraction of what the 301.5x earnings multiple implies.",
    "Twenty analysts cluster at a $48 mean target against a $46 price, with 12 neutral views and a $35 to $60 range that spans the debate."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1660280/000166028026000005/tenb-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001660280&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Nine and a half percent growth is the whole problem and the whole defence. Revenue reached $1.1B on a trailing basis, up 9.5%, while free cash flow ran at 26.3% of sales. A scanner franchise that renews an installed base does not need to grow quickly to produce cash, and Tenable does not. The September quarter produced a 6.0% operating margin, the best in the series and up from -7.4% in March 2025. Cash is compounding; the top line is not.",
      "The product is a subscription priced by assets or users under management, billed annually. That billing convention is the reason cash flow outruns earnings: customers prepay, costs are recognised across the year, and deferred revenue acts as working capital. The installed base is security and risk teams in finance, healthcare, energy, retail and government, buyers with auditors and a list of systems they must prove they have checked. Renewal is the base case; new logos are the variable.",
      "The valuation argument is a single question about which number to trust. Trailing earnings of 1.5% of revenue produce a 301.5x multiple that says nothing useful; 17.0x free cash flow and a 5.9% yield say the market expects the cash stream to persist but not to grow. The peer set splits along that line. Elastic grows 16.2% at a -2.6% operating margin; GitLab 23.0% at -8.5%; Tenable 9.5% at 4.4%, the slowest growth and the strongest margin of the three."
    ],
    "quote": "Tenable's scanner renews like a subscription and pays out like a utility, and the shares are priced for the second half of that sentence."
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
      "Asset counts are the volume driver, and they grow with the customer's estate rather than with its headcount. A bank that adds cloud accounts, containers and remote endpoints gives the scanner more to inventory, and pricing follows the count. The limit is that the buyer can consolidate vendors or negotiate a cap, which is why growth has settled near 9.5% rather than the 20%-plus of the earlier years. Cloud conversion adds a second, smaller lever: moving a self-hosted customer to the hosted service re-times revenue without necessarily raising it.",
      "Estimates assume the current rate persists rather than recovers. The 2026 fiscal year is modelled at $1.1B of revenue, up 8.6%, and 2027 at $1.2B, up 7.5%, with EPS of $2.18 and $2.46. That is a forecast of gradual decay, not a rebound, and it is consistent with a market where vulnerability scanning is increasingly bundled into larger security platforms. The offset is margin: EPS growth of 37.0% in 2026 on 8.6% revenue growth requires operating leverage, not volume."
    ],
    "bullets": [
      {
        "title": "Renewal base",
        "detail": "At 9.5% growth, most of the revenue is renewal; a single lost enterprise account would be visible in the total."
      },
      {
        "title": "Pricing per asset",
        "detail": "Growth depends on estates expanding faster than buyers consolidate tools, and the average revenue per asset is not disclosed."
      },
      {
        "title": "Cloud conversion",
        "detail": "Moving a customer from the on-premises scanner to the hosted service can lower recognised revenue in the year of the move even when the contract is larger."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "A 78.1% gross margin has been stable for six years, moving between 77.0% and 82.4%, so delivery cost is not where the story changes. The operating margin did: -8.3% in FY2020, -0.9% in FY2025, 4.4% trailing. The improvement came from sales efficiency rather than from the gross line, and the quarterly path shows it clearly — 5.5% in December 2024, then -7.4%, -3.0%, 2.8%, 3.4%, 3.3%, 4.6% and 6.0% in September 2026.",
      "Net margin is 1.5% and EPS is barely positive, which is why the earnings multiple is meaningless and the cash multiple is not. Return on invested capital of -2.0% and return on equity of -59.6% are the arithmetic of a small equity base and a large cash balance, not evidence of a broken business. Against Elastic's -2.6% operating margin and GitLab's -8.5%, Tenable's 4.4% is the best of the three; against Pegasystems' 9.9%, it is the price of growing at 9.5% rather than standing still."
    ]
  },
  "cash": {
    "paragraphs": [
      "Annual prepayment is the mechanism, and it is worth being precise about what it does. Free cash flow of $280.4M compares with operating profit of roughly $48M on a 4.4% margin. The difference is depreciation, stock compensation and the prepayment cycle, and only the last of those is a durable source of cash. That does not make the cash unreal, because customers do pay in advance, but it does mean the cash margin cannot grow faster than billings for long.",
      "Capex is negligible at $12.1M in FY2025, 1.2% of revenue, so almost all of the operating cash reaches free cash flow. Interest cover of 1.7x is not a useful signal when operating profit is this close to zero; the cash generation is. The capital-allocation question is therefore simple: $280.4M a year accumulates, and the reported figures show no buyback absorbing it.",
      "What the company does with the cash is the open question, and the accounts do not answer it. There is no disclosed buyback, no dividend and no large acquisition in the numbers. At a 5.9% free-cash-flow yield, a holder is being paid to wait for a decision, and the risk is that the cash is spent on acquisitions that dilute the margin rather than returned."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Seventeen times free cash flow is the anchor, and it is low for a software company with a 78.1% gross margin. The earnings multiple of 301.5x is not a valuation; it is a rounding error in the net margin. On sales the shares are at 4.0x, and the peer set frames the trade: 16.2% growth at a -2.6% margin for Elastic, 23.0% at -8.5% for GitLab, 9.5% at 4.4% for Tenable. The market is treating the growth rate as the dominant variable, which is the right call for a business whose cash conversion is already proven.",
      "The peer gap is about durability rather than price. Elastic's 16.2% growth comes with a -2.6% operating margin; Tenable's 9.5% comes with 4.4%. If Tenable's growth holds near 9%, the cash yield of 5.9% does most of the work. If growth falls to 5%, the multiple has no support from the earnings line, because there is barely an earnings line to support it.",
      "EV/EBITDA of 48.5x sits below the 126.4x peer median, a comparison that says more about how little EBITDA the group produces than about Tenable's cheapness. The multiple that matters is 17.0x cash flow. What would break it is a year in which growth falls below 5% and the cash margin narrows at the same time, because the two together would turn a 5.9% yield into a warning."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Twenty analysts publish on Tenable, with a mean target of $48 against a $46 price and a range of $35 to $60. A $13 spread around the mean is wide for a company this size, and it maps onto the growth debate rather than the margin one.",
      "Estimate revisions have turned. EPS forecasts rose 9.8% over 30, 60 and 90 days, and each of the last four quarters beat, the latest $0.63 against $0.51. The 2026 estimate of $2.18 implies 37.0% EPS growth on 8.6% revenue growth, which is the operating leverage story in one line. The consensus is not assuming a recovery in demand; it is assuming the cost base stays put while revenue crawls."
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
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
