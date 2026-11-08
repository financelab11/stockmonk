import type { StockStory } from "./types";

export const SYK: StockStory = {
  ticker: "SYK",
  kicker: "Healthcare · Medical Devices",
  title: "Stryker compounds revenue at 10% behind a lumpy margin line",
  dek: "Revenue rose from $17.11B to $25.12B in four years. Quarterly operating margins swing between 15% and 25%, which makes a steady business look volatile.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $26.30B, up 7.9%, and the latest quarter grew 7.6%.",
    "Operating margin is 20.7% on a trailing basis but has ranged from 15.5% to 25.2% across the last six quarters.",
    "Free cash flow of $4.57B is a 17.4% margin, and the balance sheet holds $3.27B of net cash.",
    "At 17.1x EV/EBITDA the shares are cheaper than most of the healthcare peer group despite a 10% revenue compound rate.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/310764/000031076426000010/syk-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000310764&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Stryker makes orthopaedic implants, surgical instruments, endoscopy systems, operating-room equipment, neurovascular devices and spinal hardware. Its best-known product is the Mako robotic arm used in knee and hip replacement, but the company earns most of its revenue from the implants and disposable instruments that go with every operation.",
      "The business sits at the intersection of two durable trends: an ageing population that needs more joints replaced, and a shift of those procedures from inpatient hospitals to ambulatory surgery centres. The first expands the market. The second changes who buys the equipment and how much they are willing to pay for it.",
      "Trailing revenue was $26.30B, up 7.9%, and the latest quarter grew 7.6% to $6.52B. The shares closed at $325.87, in the middle of a 52-week range of $267.00 to $389.33, for a market value of $124.06B.",
    ],
    quote:
      "A joint replacement is a manufacturing business wrapped in a clinical relationship. The implant is the product, but the surgeon's loyalty and the hospital's supply contract are the assets.",
  },
  whatItDoes: {
    paragraphs: [
      "Orthopaedics is the largest piece: hips, knees, trauma and extremities, and spine. These are elective procedures, which means patients can postpone them when they are worried about cost or when hospitals are full. Demand is deferrable in a way that a cardiac emergency is not.",
      "MedSurg covers endoscopy, surgical instruments, operating-room integration and communications. It is less glamorous than orthopaedics but more recurring: a hospital that standardises on Stryker's endoscopic towers and instruments keeps buying the disposables that go with them.",
      "Neurovascular treats strokes with catheters, coils and stents that are used in an emergency setting. That business has a different demand profile from elective joints — strokes do not wait for a convenient quarter — and it gives the company a counter-cyclical line inside the portfolio.",
    ],
    bullets: [
      {
        title: "Orthopaedics",
        detail:
          "Hips, knees, trauma and spine. Elective, procedure-driven and exposed to hospital and surgery-centre budgets.",
      },
      {
        title: "MedSurg",
        detail:
          "Endoscopy, instruments and operating-room equipment. Recurring consumables attached to capital placements.",
      },
      {
        title: "Neurovascular",
        detail:
          "Stroke intervention devices. Emergency demand that does not move with the elective calendar.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 65.3% reflects the pricing power of an implant that a surgeon has trained on and a hospital has standardised. The cost of goods includes machining, sterilisation and inventory in a consignment model, where trays of implants sit in hospital storage until they are used. That consignment stock is a real working-capital cost that does not appear as a fixed asset.",
      "The robot is the demand-generation tool. A hospital that installs Mako commits to a workflow, trains its surgeons and then buys the implants that the system is designed around. The capital sale is less important than the pull-through it creates, which is why robotic placements are a leading indicator of orthopaedic share.",
      "The operating margin of 20.7% is the result of scale in manufacturing and a large direct sales force. That force is expensive and largely fixed, so the margin depends on revenue per representative as much as on gross margin.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $17.11B in FY2021 to $25.12B in FY2025, a compound rate of about 10% a year. The growth was remarkably consistent: every year in that stretch except FY2021 shows an increase, and the trailing figure of $26.30B continues the pattern.",
      "Third-party estimates call for $26.81B this fiscal year and $29.25B next, implying about 7% and then 9% growth. That is a modest deceleration from the five-year record but not a stall, and it is consistent with a market that grows with procedure volumes plus a point or two of share gain.",
      "The drivers are straightforward. More joints are replaced as populations age; more procedures move to ambulatory centres, where Stryker sells a tailored product line; and each new robot placement pulls through implants for years. The risk is that ambulatory surgery centres are more price-sensitive than hospitals and negotiate harder.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin was 15.1% in FY2021, 15.4% in FY2022, 19.0% in FY2023, 16.3% in FY2024 and 19.5% in FY2025. The trend is upward but the path is uneven, and the unevenness is mostly about charges rather than about pricing.",
      "The quarterly table shows it more clearly. Margins of 18.5%, 18.7%, 25.2%, 15.5%, 25.2% and 15.9% sit alongside revenue that barely moves between adjacent quarters. A business does not double its margin and halve it again in six months; the reported figures are absorbing items that the annual numbers smooth out.",
      "Return on equity is 15.4% and return on invested capital is 21.3%. The gap between them is unusual — normally leverage makes equity returns higher — and it reflects a large equity base relative to debt. The 21.3% return on invested capital is the more meaningful number for judging whether the acquisitions and capital spending have paid off.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $4.57B over the trailing year, a 17.4% margin, up from $2.74B in FY2021. The improvement is larger than the revenue increase, which means the company has become more efficient at converting sales into cash as it has grown.",
      "The balance sheet holds $3.27B of net cash. That gives Stryker room to make acquisitions without levering up, and it removes interest cost from the list of things that can go wrong. It also means the 15.4% return on equity is not being flattered by borrowed money.",
      "The main call on cash is working capital. Consignment inventory, receivables from hospitals and a large instrument pool all absorb cash as revenue grows, and a sudden slowdown would leave that inventory sitting in hospital storage rooms rather than turning into sales.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $325.87 the shares trade at 34.2x trailing earnings, 17.1x EV/EBITDA, 4.6x EV/Sales and 27.1x free cash flow, for a 3.7% free-cash-flow yield. The earnings multiple looks high; the EBITDA multiple does not.",
      "The gap is explained by the tax and interest lines and by the difference between a 20.7% operating margin and a 13.8% net margin. On EV/EBITDA, Stryker at 17.1x is far below J&J at 26.8x, Thermo Fisher at 25.9x and Intuitive at 37.1x, and only Boston Scientific at 11.4x is cheaper in this table.",
      "That is a notable discount for a company with a 10% revenue compound rate and a 21.3% return on invested capital. It suggests the market is pricing the orthopaedic franchise as a mature, price-pressured business rather than as a compounder, and that is the assumption worth testing.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-seven analysts contribute to the attributed third-party consensus, with a mean target of $340.48 and a range of $275.00 to $465.00. The high end implies more than 40% upside and the low end implies a decline, which is a wide spread for a company with predictable revenue.",
      "Estimates call for $7.68B of revenue next quarter — well above the $6.52B just reported — and $14.83 of EPS for the fiscal year, then $29.25B and $16.31. The jump in the quarterly revenue estimate reflects the seasonal strength of the fourth quarter, which was $7.17B in FY2025.",
      "The EPS estimate of $14.83 against $9.39 trailing is another case where the two numbers are not on the same basis. The revenue line is the cleaner comparison, and it implies mid-to-high single-digit growth.",
    ],
  },
  risks: {
    intro:
      "Stryker's risks sit in hospital budgets, orthopaedic pricing and the shift of procedures to lower-cost settings. The balance sheet is not one of them.",
    items: [
      {
        title: "Elective procedure deferral",
        severity: "High",
        detail:
          "Joint replacement can be postponed. In a weak consumer environment or a hospital staffing crunch, patients wait and revenue slips into a later year.",
        watch:
          "Orthopaedics revenue growth and procedure volume commentary.",
      },
      {
        title: "Site-of-service shift",
        severity: "Medium",
        detail:
          "Ambulatory surgery centres negotiate lower prices than hospitals. A shift in where procedures happen can raise volume while lowering revenue per case.",
        watch:
          "Price per procedure and the share of revenue from ambulatory settings.",
      },
      {
        title: "Orthopaedic pricing pressure",
        severity: "Medium",
        detail:
          "Implants are a visible cost to payers, and group purchasing organisations push prices down year after year.",
        watch:
          "Gross margin and realised implant pricing.",
      },
      {
        title: "Robotics competition",
        severity: "Medium",
        detail:
          "Competing surgical robots can win a hospital's workflow and take the implant pull-through with it. Losing a robotics account is more expensive than losing a single product line.",
        watch:
          "Robot placement numbers and orthopaedic share in accounts that switch platforms.",
      },
      {
        title: "Acquisition integration",
        severity: "Low",
        detail:
          "The company has grown partly by acquisition, and each deal adds products, people and goodwill that have to be absorbed.",
        watch:
          "Return on invested capital and any goodwill impairment.",
      },
    ],
    watchlist: [
      {
        title: "Orthopaedics growth",
        detail:
          "The largest segment and the clearest read on elective procedure demand.",
      },
      {
        title: "Robot placements",
        detail:
          "A leading indicator of future implant share, because the platform locks in the workflow.",
      },
      {
        title: "Operating margin excluding charges",
        detail:
          "The reported series is noisy; the underlying trend is what matters for the multiple.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Stryker is a steady compounder with a noisy quarterly income statement. Revenue grew from $17.11B to $25.12B in four years, free cash flow more than kept pace, and the balance sheet moved into net cash.",
      "The reported margin is the confusing part. A 20.7% trailing operating margin that swings between 15.5% and 25.2% quarter to quarter is not a business with unstable economics; it is a business whose reported profit absorbs charges at irregular intervals.",
      "At 17.1x EBITDA the market is not paying a compounder's multiple. The question is whether that reflects a genuine slowdown in orthopaedic pricing and procedure growth, or a temporary discount created by the last few noisy quarters.",
    ],
    questions: [
      "How much of the quarterly margin swing is charges versus mix?",
      "Is orthopaedic revenue growing with procedures or taking share?",
      "How much does an ambulatory surgery centre pay for the same joint replacement?",
      "What share of implant revenue is tied to Mako accounts?",
    ],
  },
};
