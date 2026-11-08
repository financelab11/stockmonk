import type { StockStory } from "./types";

export const TPL: StockStory = {
  ticker: "TPL",
  kicker: "Land and royalties · Permian Basin surface",
  title: "Texas Pacific Land collects rent from 880,000 acres",
  dek: "No wells to drill and no production to fund. Royalties, easements and water sales are why a 99-person company runs a 75% operating margin.",
  readingMinutes: 9,
  takeaways: [
    "Revenue is $967.8M, up 25.3%, with each of the last four quarters larger than the one before.",
    "The operating margin is 75.5% and free cash flow was $530.5M.",
    "Free cash flow has exceeded net income in each of the last three years.",
    "Two analysts cover the stock and their published targets differ by a factor of about 2.6.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1811074/000181107426000018/tpl-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001811074&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Texas Pacific Land owns roughly 880,000 acres in West Texas. It is not an oil and gas producer. It owns the surface and retains royalty interests under parts of its land, and it earns money from everything that happens on top of it: royalties on the oil and gas produced, fees for the use of the land, sales of caliche used to build roads and pads, water for drilling and treated produced water, saltwater disposal, and easements for pipelines, power lines and utilities.",
      "That makes it a landlord in the middle of the Permian Basin. When drilling activity rises, more wells are drilled, more water is sold, more pipelines are laid and more royalties are paid. When activity falls, revenue falls with it, but the company has no wells to shut in and no capital programme to defend.",
      "Trailing revenue is $967.8M, up 25.3%, and the operating margin is 75.5%. At $272.36 the market value is $18.79B, the shares are 3% up a 52-week range of $265.31 to $547.20, and the dividend yield is 0.9%. The stock is down 18.7% over the year even as revenue grew, which is a valuation story rather than an operating one.",
    ],
    quote:
      "A royalty is a claim on someone else's production. The landowner contributes the acreage and collects a share, which is why the cost base stays small while revenue scales with activity.",
  },
  whatItDoes: {
    paragraphs: [
      "The revenue lines fall into three groups. Royalties are a share of the oil and gas produced from the land. Surface revenue covers land use, caliche, water and saltwater disposal, which are tied to drilling and completion activity rather than to production. Easements and commercial leases are long-term contracts for pipelines, power lines and facilities crossing the property.",
      "Water is the fastest-moving part. Hydraulic fracturing consumes large volumes of water, and disposing of the water that comes back out of a well is a growing problem in the Permian. A landowner with water rights and disposal capacity can charge for both, and the volumes track the number of wells completed rather than the oil price alone.",
      "The company employs 99 people, which is the whole point of the model. There is no drilling rig, no operating crew and no inventory of equipment. The asset is the deed and the contracts attached to it, and the cost of administering them is small relative to the revenue they produce.",
    ],
    bullets: [
      {
        title: "Royalties",
        detail:
          "A retained share of oil and gas production from the land. The largest and most oil-price-sensitive revenue line.",
      },
      {
        title: "Surface and water",
        detail:
          "Caliche, sourced water, treated produced water and saltwater disposal. Tied to drilling and completion activity.",
      },
      {
        title: "Easements and leases",
        detail:
          "Pipeline, power line and utility rights of way, plus commercial leases. Long-dated and relatively predictable.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Royalty revenue has almost no cost attached to it. The operator spends the capital, drills the well and pays the landowner a share of the proceeds. That is why the operating margin is 75.5% and why free cash flow tracks net income so closely: there is no capital expenditure to subtract and very little working capital to fund.",
      "The reported gross margin of 17.3% looks inconsistent with that, and a reader should not take it at face value. The royalty and easement lines have no meaningful cost of sales, while the water and materials lines involve buying and handling physical product. A blended gross margin computed across those different economics does not describe any one of them, so the operating margin is the better guide.",
      "The operating leverage runs off two variables: the price of oil and gas, and the number of wells drilled on or near the land. Price affects royalties immediately. Drilling activity affects water, caliche and easement revenue, usually with a lag of a few quarters, because a permit has to be filed and a pad built before the volumes arrive.",
    ],
  },
  growth: {
    paragraphs: [
      "The dataset puts compound revenue growth at 8.5% a year. The path was uneven: $451.0M in FY2021, $667.4M in FY2022, $631.6M in FY2023, $705.8M in FY2024 and $798.2M in FY2025, with the dip coming when oil prices softened. The quarterly record is much more consistent: $187.5M, $203.1M, $211.6M, $236.8M, $246.1M and $273.4M in successive quarters, with the last one up 34.6% year over year.",
      "The growth drivers are all external. Higher oil and gas prices raise royalties. More drilling raises water, caliche and easement revenue. New uses for the land, such as data centres, power generation or carbon management, could add a fourth revenue line that is not tied to hydrocarbon production at all.",
      "Consensus expects $1.02B of revenue this fiscal year and $1.14B next, with earnings per share of $9.24 and $10.20. Those are modest increases against the recent quarterly momentum, which suggests the analysts assume activity levels rather than a continued acceleration.",
    ],
    bullets: [
      {
        title: "Drilling activity",
        detail:
          "The number of wells completed on the land drives water, caliche and easement revenue with a lag.",
      },
      {
        title: "Commodity prices",
        detail:
          "Royalty revenue moves with oil and gas prices, which no landowner controls.",
      },
      {
        title: "Land use beyond oil",
        detail:
          "Power, data and industrial uses could add revenue that is not correlated with drilling.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating income has grown from $362.4M in FY2021 to $592.2M in FY2025, and the margin has stayed in a narrow band: 80.4% in FY2021, 84.3% in FY2022, 77.0% in FY2023, 76.4% in FY2024 and 74.2% in FY2025. That is an unusually stable profile for a business tied to a commodity, and it comes from the absence of operating costs.",
      "The quarterly margins confirm the stability: 76.6%, 73.4%, 70.5%, 77.0%, 78.0% and 76.0%. The variation is mostly mix, as water and materials revenue carries a lower margin than royalties. When surface activity grows faster than royalty volumes, the blended margin drifts down even though revenue rises.",
      "Return on equity is 32.6% and return on invested capital is 40.3%. Those are high because the asset base is land carried at a modest book value, not because the company is reinvesting heavily. A high ROIC here reflects the accounting history of the land more than the returns on new capital.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $248.7M in FY2021, $428.2M in FY2022, $575.7M in FY2023, $703.2M in FY2024 and $721.8M in FY2025, with $530.5M on a trailing basis. In each of the last three years the figure exceeds net income, which is the signature of a business with depletion but almost no capital spending.",
      "That gap is worth understanding. Net income includes depletion of the royalty interests, a non-cash charge that reduces reported profit but does not consume cash. With no wells to drill, the cash that would otherwise be capital expenditure stays in the business, which is why the balance sheet holds $369.6M of net cash.",
      "The dividend yield is 0.9%, so most of the cash is retained. A company with no capital programme and a stable asset has limited uses for retained cash beyond acquisitions of more land or more royalties, which is the strategic question the balance sheet poses.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 32.0x trailing earnings, 22.8x EV/EBITDA and 35.4x free cash flow, TPL is priced as a high-quality compounder rather than as an oil-linked royalty. EV/Sales of 19.0x is the number that captures the model: the market is paying a large multiple of revenue because the revenue comes with almost no cost.",
      "The comparison to make is with other royalty companies, which typically trade on yield and on the durability of the underlying production. TPL's advantage is that its land also earns from water, easements and surface use, so it is not purely a bet on oil. Its disadvantage is that a large share of revenue is still tied to Permian drilling.",
      "Stockmonk does not publish a target price. The attributed consensus mean of $443.00 is well above the $272.36 close, but with only two analysts contributing, the average is a thin signal.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers two analysts with a mean target of $443.00 and a range of $247.00 to $639.00. The low end is below the current price and the high end is more than double it, so the two analysts disagree about something fundamental: probably the durability of Permian activity and the multiple the market should pay for it.",
      "Estimates call for $281.0M of revenue next quarter and $286.0M the quarter after, with earnings per share of $2.61 and $2.57. For the current fiscal year the pair expects $1.02B of revenue and $9.24 of earnings per share; next year, $1.14B and $10.20.",
      "With two contributors, each forecast carries half the weight of the average. Treat the numbers as two scenarios rather than as a consensus.",
    ],
  },
  risks: {
    intro:
      "TPL's risks are external. The company has no operating leverage to manage and no debt problem, but it also has no control over the activity that generates its revenue.",
    items: [
      {
        title: "Oil and gas prices",
        severity: "High",
        detail:
          "Royalty revenue falls when prices fall, and the cost base does not shrink in proportion. The FY2023 dip shows the sensitivity.",
        watch:
          "Realised prices and the royalty share of total revenue.",
      },
      {
        title: "Drilling activity in the Permian",
        severity: "High",
        detail:
          "Water, caliche, easement and disposal revenue all depend on wells being drilled and completed. A slowdown in activity hits those lines before it hits royalties.",
        watch:
          "Rig counts, permits and completed wells on or near the land.",
      },
      {
        title: "Concentration in one basin",
        severity: "Medium",
        detail:
          "Almost all of the land is in West Texas. A regional downturn, a water shortage or a regulatory change affects the whole portfolio at once.",
        watch:
          "Regional activity data and any change to state water or land rules.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "A 32.0x earnings multiple on a commodity-linked revenue stream leaves little room for a growth disappointment. The 52-week range of $265.31 to $547.20 shows how far the multiple can move.",
        watch:
          "The earnings multiple against the revenue growth rate and the oil price.",
      },
      {
        title: "Water and disposal regulation",
        severity: "Medium",
        detail:
          "Produced water disposal and water sourcing are regulated. Stricter rules on disposal wells or water use would affect a growing part of the revenue.",
        watch:
          "Disposal well permits, water rights and state regulatory actions.",
      },
    ],
    watchlist: [
      {
        title: "Royalty revenue per acre",
        detail:
          "A clean measure of the productivity of the land, independent of acreage changes.",
      },
      {
        title: "Water and surface revenue",
        detail:
          "The line that gives TPL diversification away from the oil price. Track its share of the total.",
      },
      {
        title: "Cash returned versus retained",
        detail:
          "With no capital programme, the dividend and buyback policy is the main decision management makes with the cash.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Texas Pacific Land is a landowner with $967.8M of trailing revenue, a 75.5% operating margin and $530.5M of free cash flow. It earns royalties, water and surface fees from 880,000 acres in West Texas without drilling a single well.",
      "The educational point is that the highest-margin businesses often own an asset rather than operate it. A royalty converts someone else's capital spending into the landowner's revenue, and the absence of capital expenditure is what turns a 75% operating margin into free cash flow that closely tracks profit.",
      "What is not known from these tables is the split between royalty and surface revenue, and how much of the growth is price rather than activity. Those two details decide how the business behaves in the next downturn.",
    ],
    questions: [
      "What share of revenue comes from royalties versus water, caliche and easements?",
      "How many wells were completed on the land in the last year, and how does that compare with the prior year?",
      "What is the royalty rate on new leases compared with older ones?",
      "What would revenue be if oil prices fell 25% and drilling activity stayed flat?",
    ],
  },
};
