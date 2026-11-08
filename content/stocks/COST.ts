import type { StockStory } from "./types";

export const COST: StockStory = {
  ticker: "COST",
  kicker: "Retail · Membership warehouses",
  title: "Costco sells merchandise near cost and charges for the right to shop",
  dek: "A 3.9% operating margin on $306B of revenue looks fragile until you notice that the membership fee arrives with almost no cost attached. The fee, not the markup, is the profit.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $306.4B, up 7.0%, with a 3.9% operating margin and a 3.1% net margin.",
    "Fiscal 2026 operating income was $11.69B on $303.15B of revenue, and free cash flow was $9.38B.",
    "Return on invested capital of 46.0% comes from turning inventory fast and being paid by members before suppliers are paid.",
    "At 49.6x earnings and 30.7x EBITDA, the shares carry a quality premium rather than a growth multiple.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/909832/000090983226000093/cost-20260830.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000909832&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Costco operates membership warehouses. It buys a limited selection of branded and private-label goods, sells them at low prices in large buildings, and charges customers an annual fee for the right to shop there. The company employs 214,500 people, most of them in warehouses.",
      "The model is deliberately upside down. Most retailers try to earn a margin on each item; Costco tries to earn almost nothing on the item and make its profit on the membership. That is why the gross margin is 9.8% and the operating margin is 3.9% — thin even by grocery standards — while the return on invested capital is 46.0%.",
      "Trailing revenue is $306.4B and the shares closed at $1,053.56, for a market capitalisation of $466.9B. The price is 83% of the way up a 52-week range of $844.06 to $1,096.50, and the dividend yield is 0.5%.",
    ],
    quote:
      "The membership fee is the product. Merchandise is the service that makes people willing to pay it, which is why the company will accept a near-zero markup to keep the traffic coming.",
  },
  whatItDoes: {
    paragraphs: [
      "A warehouse is a limited assortment of goods on pallets under a high ceiling. There is no elaborate shelving, few staff per square foot and almost no advertising. Members walk the aisles, buy in bulk, and pay an annual fee for the privilege. The limited assortment is the cost advantage: fewer items mean larger purchase orders, simpler logistics and faster turns.",
      "The treasure-hunt element matters for traffic. A rotating selection of seasonal and one-off items gives members a reason to come back regularly, and frequent visits are what make the membership feel worth renewing. Ancillary services such as fuel, pharmacy and optical departments add reasons to visit and add revenue at low incremental cost.",
      "The company operates in several countries, with the United States the largest market. Warehouses are large, expensive to build and slow to open, so growth arrives in annual increments rather than continuously. Each new building carries land, construction and fixture costs before it carries a member.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is merchandise sales plus membership fees. Merchandise is priced to cover the cost of the goods, the warehouse and the staff with a small margin left over; most of the operating profit comes from the fee, which has no cost of goods and almost no incremental expense. That is the mechanism behind the 3.9% operating margin: a few percent of a very large number, plus a fee stream that is nearly pure margin.",
      "The other half of the model is working capital. Members pay at the register, so cash arrives immediately. Suppliers are paid on normal trade terms, so cash leaves later. Inventory turns quickly because the assortment is narrow and bulk buying is planned. The result is that growth funds itself: a new warehouse's inventory is largely paid for by the members who buy it.",
      "The fee also creates a behavioural filter. A member who has paid for the year has an incentive to shop enough to justify it, which supports basket size and renewal rates. Renewal is the number that matters most, because a warehouse's economics assume a stable base of fee-paying members buying at a predictable rate.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 10.5% a year from $226.95B in fiscal 2022 to $303.15B in fiscal 2026, and the trailing figure is $306.4B after 7.0% growth. Fiscal 2026 revenue rose from $275.24B, and operating income rose from $10.38B to $11.69B over the same year.",
      "Growth has three sources and they compound slowly. New warehouses add capacity. Comparable sales at existing warehouses add volume and price. Membership fee increases add revenue with no cost, and they are rare enough to be an event rather than a trend. The consensus expects $329.56B this fiscal year and $353.88B next year, both above fiscal 2026's $303.15B, a modest acceleration from the trailing rate.",
      "The latest quarter's reported 37.5% revenue growth needs context. The fourth quarter produced $95.72B against $70.53B in the third, and the year-end period carries an extra stretch of selling days in some years because of the retail calendar. A single quarter's percentage change is not a demand signal; the annual rate is.",
    ],
    bullets: [
      {
        title: "New warehouses",
        detail:
          "Each building adds capacity and fixed cost. Returns depend on reaching member density in the surrounding area.",
      },
      {
        title: "Comparable sales",
        detail:
          "Volume and price at existing warehouses. Traffic matters more than ticket because the fee depends on visits.",
      },
      {
        title: "Membership",
        detail:
          "Renewal rates and fee levels. Renewal is the durable part of the model; fee increases are infrequent.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is unusually steady for a retailer. Operating income went from $7.79B in fiscal 2022 to $8.11B, $9.29B, $10.38B and $11.69B in the following four years. Revenue rose every year. There is no cyclical dip in this window, which is itself informative: the membership model produced a stability that most retailers did not have.",
      "Quarterly operating margins hover between 3.7% and 4.0%. That narrow band is the point. The company is not trying to expand the margin; it is trying to hold prices low enough to keep members renewing. A margin that suddenly widened would probably mean prices had risen faster than costs, which is not the strategy.",
      "Return on equity is 26.3% and return on invested capital is 46.0%. The gap between the two is leverage and leases: the company owns some real estate and leases the rest, so the invested capital base is smaller than the building footprint suggests. A 46% return on capital in a business with a 3.9% operating margin is only possible because capital turns over so fast.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $10.41B over the trailing period, a 3.4% margin, and $9.38B in fiscal 2026. The low percentage is not a weakness: a retailer with $306B of revenue and thin margins will always show a small free-cash-flow margin. What matters is the dollar amount and what it funds.",
      "Capital expenditure goes into new warehouses, depots and technology. Because buildings are large and land is expensive, a year with several openings absorbs more cash than a year with few. The company also pays a dividend yielding 0.5%, which is small relative to cash generation, and it has bought back stock historically.",
      "The balance sheet holds $15.14B of net cash. Combined with the negative working-capital cycle, that gives the company the ability to open warehouses through a downturn when competitors are retrenching. The main cash risk is not debt but overbuilding: a warehouse that fails to attract members is a permanent cost.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $1,053.56 the shares trade at 49.6x trailing earnings, 30.7x EV/EBITDA, 1.5x sales and 44.8x free cash flow. For a business growing revenue at the current 7.0%, those are not growth multiples; they are durability multiples.",
      "The peer comparison is striking. Walmart trades at 31.1x EV/EBITDA and 44.9x earnings, almost the same place on earnings despite a different model and a much larger revenue base. Procter & Gamble, with a 22.6% operating margin, trades at 16.6x EBITDA. Costco's premium over P&G is the market's price for predictability: a membership stream, high renewal and a format that has travelled well across borders.",
      "The risk in that premium is that it is not anchored to growth. If comparable sales slow to low single digits and the fee is not raised, earnings grow at roughly the rate of new warehouses. A 49.6x multiple on that outcome would be difficult to hold. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-seven analysts contribute to the third-party consensus, with a mean target of $1,071.32 and a range of $770.00 to $1,315.00. The mean is barely above the last close, which suggests the sell side sees the shares as fairly valued rather than cheap.",
      "Estimates call for $74.33B of revenue and $4.91 of EPS next quarter, then $76.56B and $5.12, with $329.56B and $22.81 for the fiscal year. Those quarterly figures imply a normal seasonal build toward the year-end quarter, not an acceleration. The following year's $353.88B of revenue and $25.08 of EPS assumes revenue and earnings both above the current year's forecast of $329.56B and $22.81, and the gap between the two is the entire investment case at this multiple: modest revenue growth plus a little margin and fee leverage.",
    ],
  },
  risks: {
    intro:
      "Costco's risks are about the membership rather than the merchandise. The balance sheet is strong and the format is proven; what could change the story is a member base that stops renewing, or a cost structure that forces prices up.",
    items: [
      {
        title: "Membership renewal",
        severity: "High",
        detail:
          "The fee is the profit. A fall in renewal rates would hit the highest-margin revenue line first and would be difficult to reverse quickly.",
        watch:
          "Renewal rate by market and the growth in paid member households.",
      },
      {
        title: "Price investment and cost inflation",
        severity: "High",
        detail:
          "The format depends on being the cheapest option. If wages, freight or tariffs rise faster than the company can absorb, it must choose between margin and price leadership.",
        watch:
          "Gross margin, warehouse wage rates and any tariff commentary.",
      },
      {
        title: "New warehouse returns",
        severity: "Medium",
        detail:
          "Each building is a large fixed commitment. Sites that fail to reach member density dilute returns and are hard to reverse.",
        watch:
          "Opening counts, sales per warehouse and cannibalisation of nearby locations.",
      },
      {
        title: "Competition from other formats",
        severity: "Medium",
        detail:
          "Discount grocers, club rivals and online retailers all compete for the same bulk purchase. Online delivery removes some of the reason to drive to a warehouse.",
        watch:
          "Comparable traffic and any acceleration in e-commerce fulfilment spend.",
      },
      {
        title: "Import and tariff exposure",
        severity: "Medium",
        detail:
          "A limited assortment means many items are sourced internationally. Duties raise landed cost and are difficult to pass through without breaking the price promise.",
        watch:
          "Landed cost commentary and the geographic mix of sourcing.",
      },
    ],
    watchlist: [
      {
        title: "Renewal rate",
        detail:
          "The single most important operating statistic. It predicts fee revenue a year ahead.",
      },
      {
        title: "Comparable sales traffic",
        detail:
          "Frequency supports renewal. A rising ticket with falling visits is the warning pattern.",
      },
      {
        title: "Operating margin band",
        detail:
          "A sustained move above 4% would suggest the price gap is widening, which is not the strategy.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Costco is a membership business wearing a retailer's clothes. The 3.9% operating margin and 9.8% gross margin are the visible part; the fee stream and the negative working-capital cycle are what produce a 46.0% return on invested capital.",
      "The educational point is that low margins are not the same as a weak business. A retailer that turns inventory quickly, is paid at the register and charges for access can earn high returns on very little capital. Judging Costco by its gross margin would miss the entire mechanism.",
      "What the numbers do not settle is how much of the 49.6x earnings multiple is durability and how much is habit. At 7% revenue growth, the multiple needs the membership to keep renewing and the price gap to keep widening. Those are observable, which is what makes the next few quarters informative.",
    ],
    questions: [
      "What is the renewal rate, and how does it differ between new and long-standing members?",
      "How much of comparable sales growth is traffic rather than price?",
      "What does a new warehouse earn in its first three years?",
      "How much of the earnings multiple is explained by the membership fee rather than merchandise?",
    ],
  },
};
