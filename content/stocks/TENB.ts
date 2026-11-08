import type { StockStory } from "./types";

export const TENB: StockStory = {
  ticker: "TENB",
  kicker: "Software & Cyber · Exposure management",
  title: "Tenable's scanner franchise has matured; its cash flow has not",
  dek: "Revenue growth has slowed to 9.5% while free cash flow runs at 26.3% of sales. The distance between those two numbers is the whole investment question.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was $1.07B, up 9.5%, the slowest growth among its closest listed peers.",
    "Operating margin is 4.4% while the free-cash-flow margin is 26.3%.",
    "Net debt of $283.8M is 3.2x EBITDA, which puts the debt inside the valuation rather than beside it.",
    "A 279x price-to-earnings ratio sits next to a 15.7x price to free cash flow.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1660280/000166028026000005/tenb-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001660280&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Tenable sells the software that counts and checks the things on a network. Its Nessus scanner began life as a free tool for penetration testers and became the standard way security teams inventory assets and match them against known vulnerabilities. The modern product does the same job across cloud accounts, operational technology and web applications, and calls the discipline exposure management.",
      "Trailing revenue is $1.07B, up 9.5%. The latest quarter, Q3 FY26, produced $276.4M at a 6.0% operating margin. The shares closed at $42.13, giving a market capitalisation of $4.4B, and sit 70% of the way up a 52-week range of $15.72 to $53.22.",
      "The awkward fact is the valuation split. The price-to-earnings ratio is 279x because reported profit is almost nil, while the price to free cash flow is 15.7x and the free-cash-flow yield is 6.4%. Two multiples, one company, opposite impressions. Which one is describing the business?",
    ],
    quote:
      "A scanner is paid per asset it can see. Cloud computing multiplied the assets and made many of them temporary, which changes what a licence is worth.",
  },
  whatItDoes: {
    paragraphs: [
      "The product line runs from a free individual scanner to an enterprise platform that continuously inventories assets, prioritises findings by exploitability, and reports on compliance. Tenable.io is the cloud-delivered version, Tenable.sc the on-premises one, and the difference between them matters commercially: a customer moving from one to the other is not adding spend so much as re-timing it.",
      "Buyers are security and risk teams in finance, healthcare, energy, retail and government — organisations with auditors, regulators and a list of systems they must be able to prove they have checked. The company employs 1,367 people and reports one consolidated revenue line, with no segment or geography split in the dataset.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is a subscription, usually priced by the number of assets or users under management, billed annually and recognised over the term. Gross margin is 78.1%, which is normal for infrastructure software: the heavy computation happens on the customer's own machines or in a hosted tenant, so delivery cost stays modest.",
      "The operating margin of 4.4% is where the model gets interesting. Sales and marketing absorb the largest share of revenue because the product is sold to security teams through a direct and channel mix, and because the company has spent years converting an on-premises installed base to cloud subscriptions. That conversion lowers near-term revenue while it happens, even when it improves the long-term contract.",
      "Free cash flow of 26.3% of revenue sits far above operating margin because customers pay annually in advance while costs are recognised across the year. Deferred revenue is, in effect, an interest-free loan from customers, and it is what funds the difference between the two numbers.",
    ],
  },
  growth: {
    paragraphs: [
      "Annual revenue rose from $541.1M in FY2021 to $683.2M, $798.7M, $900.0M and $999.4M in FY2025. The latest quarter grew 9.5%, exactly in line with the trailing rate. Consensus estimates of $1.09B this fiscal year and $1.17B next imply the current pace continues rather than recovers.",
      "That is the central fact about Tenable: it is no longer a growth company in the way its peers are. SentinelOne grew 21.1%, GitLab 23.0%, Samsara 29.5% and Rubrik 42.4%. Tenable grew 9.5%.",
      "The remaining levers are narrower than they look. Cloud and operational-technology coverage add assets to the count. Federal and regulated buyers renew on schedule. But the base is large, the installed scanner is close to ubiquitous in large enterprises, and a customer that already counts every asset has limited room to count more.",
    ],
    bullets: [
      {
        title: "Asset growth",
        detail:
          "Cloud accounts, containers and connected industrial equipment all add things to inventory. This is the healthiest driver because it does not require a new customer.",
      },
      {
        title: "Module attach",
        detail:
          "Cloud security, web application scanning and identity exposure are sold on top of the core licence to the same buyer.",
      },
      {
        title: "Price, not volume",
        detail:
          "With a saturated base, revenue growth increasingly depends on raising price per asset at renewal — the hardest kind of growth to sustain against a competitor with a cheaper list price.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual operating line went from -$41.8M to -$67.8M, -$52.2M, -$6.9M and -$9.2M. The last two years are effectively breakeven, and the quarterly sequence shows the crossing point: -3.0%, 2.8%, 3.4%, 3.3%, 4.6% and 6.0% across the last six quarters.",
      "Return on equity is -59.6% while return on invested capital is 14.3%. The explanation is the denominator: after years of losses and a modest equity base, shareholders' equity is small or negative, so a small net loss produces an enormous negative return on it. ROIC uses a broader capital base and is the more meaningful of the two here.",
      "Diluted EPS is $0.13 on a trailing basis. The consensus figure of $2.18 for this fiscal year is an adjusted number, and the gap between the two is the usual collection of stock compensation and acquisition accounting.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow has risen every year in the dataset: $92.9M, $121.8M, $148.2M, $213.2M and $254.6M, reaching $280.4M on a trailing basis. That is a 26.3% margin and a 6.4% free-cash-flow yield at the current price.",
      "The offset is the balance sheet. Net debt is $283.8M, or 3.2x EBITDA. That is not dangerous for a business generating this much cash, but it is a real constraint, and it means the interest line and any refinancing matter.",
      "Capital intensity is low. The company does not build data centres or manufacture hardware; its capital spending is offices and systems, which is why a 26.3% free-cash-flow margin needs no unusual financing to support it.",
    ],
  },
  valuation: {
    paragraphs: [
      "Four multiples, four different answers. The price-to-earnings ratio of 279x says the company is expensive. EV/EBITDA of 53.3x says the same. EV/sales of 4.4x is in line with a mature infrastructure software company. Price to free cash flow of 15.7x says it is inexpensive.",
      "The resolution is that earnings are the least reliable of the four here. A 279x multiple on $0.13 of EPS is arithmetic on a number close to zero; a small improvement in operating margin would collapse the multiple without the share price moving. Cash flow is the more stable measure, which is why the 15.7x figure deserves more weight.",
      "Against the peer table, Tenable has the lowest growth in the group and one of the highest operating margins, but also the second-lowest EV/EBITDA after Pegasystems at 26.8x. Cheapness and slow growth are usually the same fact seen from two sides.",
      "Stockmonk does not publish a target price. The consensus figure in the next section is third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty analysts contribute to the attributed consensus. The mean target is $48.35 with a range of $35.00 to $60.00, a spread that reflects disagreement about how much the cash flow is worth rather than about the next quarter.",
      "Estimates call for $278.8M of revenue next quarter and EPS of $0.57, then $1.09B and $2.18 for the fiscal year, rising to $1.17B and $2.46 the year after. The implied trajectory is high single-digit revenue growth with steady margin expansion — a cash-flow story, not a growth story.",
    ],
  },
  risks: {
    intro:
      "Tenable's risks are the risks of a mature franchise with a leveraged balance sheet: slow growth, price pressure and a valuation that depends on cash rather than earnings.",
    items: [
      {
        title: "Growth has stopped compounding",
        severity: "High",
        detail:
          "At 9.5%, revenue growth is barely above the rate at which the installed base renews. A single lost large account would be visible in the total.",
        watch:
          "Quarterly revenue growth and the trend in calculated billings.",
      },
      {
        title: "Price pressure from bundling",
        severity: "High",
        detail:
          "Cloud platforms and larger security suites include vulnerability scanning as a feature. For a customer already paying for the platform, the marginal cost of switching is close to zero.",
        watch:
          "Average revenue per asset and discounting on renewals.",
      },
      {
        title: "Leverage",
        severity: "Medium",
        detail:
          "Net debt of $283.8M at 3.2x EBITDA is manageable but leaves less room than peers have if cash flow dips.",
        watch:
          "Net debt to EBITDA and the maturity profile of the debt.",
      },
      {
        title: "Cloud transition timing",
        severity: "Medium",
        detail:
          "Moving an on-premises customer to a cloud subscription can reduce recognised revenue in the short term even when the contract is larger over its life.",
        watch:
          "The mix of cloud versus self-hosted revenue and the pace of conversion.",
      },
      {
        title: "Automated triage",
        severity: "Medium",
        detail:
          "If AI tools can prioritise and remediate findings without a dedicated platform, the value of a scanner that produces a long list of issues falls.",
        watch:
          "Product positioning around prioritisation and remediation rather than detection counts.",
      },
    ],
    watchlist: [
      {
        title: "Free-cash-flow margin",
        detail:
          "The 26.3% margin is the strongest part of the story; it needs to hold as growth slows.",
      },
      {
        title: "Operating margin",
        detail:
          "The quarterly climb from -3.0% to 6.0% is the proof that scale is producing profit, not just cash.",
      },
      {
        title: "Net debt",
        detail:
          "At 3.2x EBITDA there is little room for a cash-flow surprise before the balance sheet becomes a topic.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Tenable is a profitable-on-cash-flow, slow-growing security company carrying modest debt and trading on a cash multiple that looks reasonable next to an earnings multiple that looks absurd. Both observations are correct.",
      "The lesson is about which number to trust when they disagree. Reported earnings near zero make the P/E meaningless, and free cash flow is the better lens for a subscription business with annual prepayment. But cash flow cannot grow faster than revenue forever, and revenue is growing at 9.5%.",
      "The question a reader should be able to answer is what the company does with the cash, and whether that use compounds value faster than the slow growth of the underlying business.",
    ],
    questions: [
      "How much of the free cash flow is a permanent feature of annual prepayment?",
      "What proportion of revenue still comes from self-hosted licences, and how fast is it converting?",
      "Is 9.5% growth the floor, or the middle of a continued decline?",
      "What is the debt refinancing schedule, and at what cost?",
    ],
  },
};
