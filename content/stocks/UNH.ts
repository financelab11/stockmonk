import type { StockStory } from "./types";

export const UNH: StockStory = {
  ticker: "UNH",
  kicker: "Healthcare · Health Care Plans",
  title: "UnitedHealth is a spread business wearing a healthcare label",
  dek: "Revenue is $449.66B and operating margin is 5.3%, so one percentage point of cost moves about $4.5B of profit. That arithmetic is the whole investment case.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $449.66B, up 3.3%, while the latest quarter declined 0.4%.",
    "Operating margin has fallen from 8.7% in FY2023 to 5.3%, even as revenue rose from $371.62B to $449.66B.",
    "Free cash flow of $22.83B is a 5.1% margin, and net debt of $45.78B is 1.6x EBITDA.",
    "At 22.2x earnings, 14.2x EBITDA and 0.9x sales, the shares are priced on the spread rather than on revenue.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/731766/000073176626000062/unh-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000731766&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "UnitedHealth does two things. It insures people through UnitedHealthcare, selling employer plans, individual plans, Medicare Advantage and Medicaid coverage. And it sells health services through Optum, which runs clinics, a pharmacy benefit manager and a data and analytics business. The two halves are connected: premiums flow in, medical claims flow out, and Optum sells services back into the same system.",
      "That structure makes the company a spread business. It collects a premium per member and pays for care. The difference, after administrative costs, is the profit. On $449.66B of revenue the operating margin is 5.3%, so the company keeps about five cents of every dollar that passes through it.",
      "Trailing revenue was $449.66B, up 3.3%, and the latest quarter declined 0.4% to $112.69B. The shares closed at $394.15, in the upper half of a 52-week range of $255.97 to $461.62, for a market value of $353.17B. The stock is up 25.8% over the past year and down 6.7% over five.",
    ],
    quote:
      "A reported gross margin of 88.3% is an artefact of how costs are classified. For an insurer, the cost of goods is medical claims, and that line decides everything.",
  },
  whatItDoes: {
    paragraphs: [
      "UnitedHealthcare is the insurance side. Employer and individual plans cover working-age people; Medicare Advantage covers older people under a government-funded programme; Medicaid covers low-income members under state contracts. Each has its own reimbursement formula, its own risk pool and its own regulatory oversight.",
      "Optum is the services side. Optum Health employs or contracts with physicians and runs care delivery. Optum Rx administers pharmacy benefits and negotiates drug prices on behalf of plan sponsors. Optum Insight sells software and analytics. Each earns a fee or a spread rather than an insurance margin, which makes the economics different from the premium business.",
      "The connection between them is the contentious part. A company that both pays for care and provides it has an incentive to steer members toward its own services, and regulators scrutinise that relationship closely. The integration is also the source of the cost advantages the company claims, because it can coordinate care and data across both halves.",
    ],
    bullets: [
      {
        title: "UnitedHealthcare",
        detail:
          "Employer, individual, Medicare Advantage and Medicaid plans. Revenue is premium per member, and profit is the gap between premium and claims.",
      },
      {
        title: "Optum Health",
        detail:
          "Clinics, physician groups and care delivery. Paid per visit, per patient or per episode depending on the contract.",
      },
      {
        title: "Optum Rx",
        detail:
          "Pharmacy benefit management. Earns a spread or a fee on the drugs it administers and negotiates rebates with manufacturers.",
      },
      {
        title: "Optum Insight",
        detail:
          "Software, data and analytics sold to providers, payers and governments. The smallest segment and the closest to a traditional software business.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The insurance arithmetic is simple to state and hard to manage. Premium revenue per member is set a year in advance, based on expected medical costs. If members use more care than expected, the extra cost comes straight out of profit, because the premium cannot be raised until the next contract cycle. That timing mismatch is why medical cost trends dominate the quarterly results.",
      "The scale makes small percentages enormous. One percentage point of cost on $449.66B of revenue is about $4.5B. A 5.3% operating margin means the company has roughly $24B of operating profit to protect, so a two-point miss on medical costs would erase more than a third of it. This is the single most important number in the report.",
      "Optum changes the equation at the margin. Fee-based and software revenue carries a different risk profile from premium revenue, and services revenue can grow without taking on medical risk. But the segments also transact with each other, which means consolidated revenue includes internal activity that has to be eliminated and makes the top line harder to interpret than it looks."
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $287.60B in FY2021 to $447.57B in FY2025, a compound rate of about 12% a year. That growth came from more members, higher premiums and the expansion of Optum. The trailing figure of $449.66B is only 3.3% above the prior year, so the pace has slowed sharply.",
      "Third-party estimates call for $449.10B this fiscal year and $463.10B next, with EPS of $20.59 and $23.29. Revenue is essentially flat this year and grows about 3% next, while earnings recover — a combination that implies margin repair rather than expansion.",
      "The growth engine for the next few years is likely to be Optum rather than insurance. Medicare Advantage growth is constrained by government rate policy, and employer plans grow with employment rather than with price. Services revenue has more room, but it also attracts more regulatory attention."
    ],
  },
  performance: {
    paragraphs: [
      "The margin history is the story. Operating margin was 8.3% in FY2021, 8.8% in FY2022, 8.7% in FY2023, 8.1% in FY2024 and 4.2% in FY2025. Revenue rose 20% between FY2023 and FY2025 while operating income fell from $32.36B to $18.96B, a 41% decline.",
      "The quarterly table shows how uneven the recovery has been: operating margins of 4.6%, 3.8%, 0.3%, 8.0%, 7.1% and 5.8%. The fourth quarter of FY2025 produced $10.0M of net income on $113.22B of revenue, which is a rounding error against the scale of the business and a reminder of how little separates a good quarter from a bad one here.",
      "Return on equity is 15.0% and return on invested capital 12.5%. Both are respectable, but they are calculated on a small equity base relative to revenue, and they move sharply with the medical cost ratio. For an insurer, the medical loss ratio and the administrative expense ratio are more informative than return on capital."
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $22.83B over the trailing year, a 5.1% margin. The dollar figure is large, but the margin is thin, and it has fallen from $25.68B in FY2023 as operating profit declined.",
      "The balance sheet carries $45.78B of net debt, or 1.6x EBITDA. That is modest leverage for an insurer, whose premiums arrive before claims are paid, giving it a float that funds part of its operations. The risk is not solvency; it is that a sustained margin decline reduces the cash available to service the debt and fund buybacks.",
      "Capital spending is light because the business runs on contracts and technology rather than plants. Most free cash flow goes to acquisitions, buybacks and the dividend, and the pace of buybacks is the clearest signal of how management views the durability of the current margin."
    ],
  },
  valuation: {
    paragraphs: [
      "At $394.15 the shares trade at 22.2x trailing earnings, 14.2x EV/EBITDA, 0.9x EV/Sales and 15.5x free cash flow, for a 6.5% free-cash-flow yield. The sales multiple is the one that describes the business: a 0.9x multiple is what you pay for a pass-through revenue stream with a thin margin.",
      "The peer table in this batch is a poor comparison. It lists drug and device companies whose revenue is their own, not a pass-through of medical claims. A 14.2x EBITDA multiple for an insurer should be compared with other insurers and with the company's own history, not with a pharmaceutical company trading at 26x.",
      "What the multiple assumes is that the 5.3% operating margin is a trough rather than a new normal. At the 8.7% margin of FY2023, the same revenue would produce roughly $39B of operating income instead of $24B, and the shares would look far cheaper."
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-five analysts contribute to the attributed third-party consensus, with a mean target of $476.64 and a range of $380.00 to $531.00. The mean is about 21% above the last close, which is a meaningful gap for a company this large.",
      "Estimates call for $112.47B of revenue next quarter and EPS of $2.26 — well below the $4.56 just reported — then $113.70B and $8.17 in the following quarter. The low fourth-quarter estimate reflects the seasonal pattern in which the final quarter carries the year's true-up of medical costs.",
      "For the full year, estimates call for $20.59 of EPS and then $23.29, which implies a 13% recovery in earnings on 3% revenue growth. The analysts are forecasting margin repair, and that is the assumption to test."
    ],
  },
  risks: {
    intro:
      "UnitedHealth's risks are medical cost trend, government reimbursement and the regulatory scrutiny that comes with being both payer and provider.",
    items: [
      {
        title: "Medical cost trend",
        severity: "High",
        detail:
          "Premiums are set before costs are known. A one-point increase in medical spending on this revenue base is about $4.5B, which is a large share of operating profit.",
        watch:
          "The medical loss ratio and management's cost-trend commentary each quarter.",
      },
      {
        title: "Medicare Advantage funding",
        severity: "High",
        detail:
          "Government rate updates and risk-adjustment audits determine revenue per member in the largest growing programme. A rate cut or a coding change flows straight to margin.",
        watch:
          "Annual government rate notices and risk-adjustment audit outcomes.",
      },
      {
        title: "Vertical integration scrutiny",
        severity: "Medium",
        detail:
          "Owning both the payer and the provider invites antitrust and conflict-of-interest review, and pharmacy benefit reform could change how Optum Rx earns its spread.",
        watch:
          "Legislative proposals on pharmacy benefit managers and any antitrust action.",
      },
      {
        title: "Member attrition",
        severity: "Medium",
        detail:
          "Price increases to protect margin can push members to competitors, especially in employer plans where switching is annual.",
        watch:
          "Membership counts by segment and the retention rate in employer plans.",
      },
      {
        title: "Operational concentration",
        severity: "Low",
        detail:
          "A large share of claims and pharmacy transactions runs through a small number of technology platforms, so an outage is both an operational and a reputational event.",
        watch:
          "Disclosure of service disruptions and spending on system resilience.",
      },
    ],
    watchlist: [
      {
        title: "Medical loss ratio",
        detail:
          "The single ratio that explains most of the quarter-to-quarter variation in profit.",
      },
      {
        title: "Optum growth",
        detail:
          "The segment with the most room to grow and the least exposure to insurance pricing.",
      },
      {
        title: "Membership",
        detail:
          "Revenue per member only matters if the members stay; attrition would compound a margin problem.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "UnitedHealth is a $449.66B revenue business that keeps about five cents on the dollar. Its value comes from the spread between premium and medical cost, and from the services business that sells into the same system.",
      "The last two years have been a lesson in how quickly that spread can compress. Revenue rose 20% from FY2023 to FY2025 while operating income fell 41%. Nothing about the franchise broke; the cost of care rose faster than the premiums set to cover it.",
      "The shares at 14.2x EBITDA are priced for a partial recovery. The question is whether the margin can return to the 8% range, or whether government rate policy and medical cost trend have permanently reset it lower.",
    ],
    questions: [
      "What is driving the medical cost ratio: utilisation, acuity or price?",
      "How much of Optum's growth is internal versus acquired?",
      "What would a two-point margin recovery be worth per share?",
      "How exposed is Medicare Advantage revenue to a change in risk adjustment?",
    ],
  },
};
