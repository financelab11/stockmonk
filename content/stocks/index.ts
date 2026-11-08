import type { StockStory } from "./types";
import { NVDA } from "./NVDA";
import { MSFT } from "./MSFT";
import { AAPL } from "./AAPL";
import { GOOGL } from "./GOOGL";
import { AMZN } from "./AMZN";
import { META } from "./META";
import { AVGO } from "./AVGO";
import { TSLA } from "./TSLA";
import { LLY } from "./LLY";
import { JPM } from "./JPM";
import { ORCL } from "./ORCL";
import { AMD } from "./AMD";
import { MU } from "./MU";
import { AMAT } from "./AMAT";
import { LRCX } from "./LRCX";
import { KLAC } from "./KLAC";
import { ANET } from "./ANET";
import { CDNS } from "./CDNS";
import { SNPS } from "./SNPS";
import { NOW } from "./NOW";
import { PANW } from "./PANW";
import { CRWD } from "./CRWD";
import { INTU } from "./INTU";
import { APH } from "./APH";
import { PLTR } from "./PLTR";
import { ADI } from "./ADI";
import { FICO } from "./FICO";
import { ADBE } from "./ADBE";
import { CRM } from "./CRM";
import { CSCO } from "./CSCO";
import { DELL } from "./DELL";
import { HPQ } from "./HPQ";
import { IBM } from "./IBM";
import { INTC } from "./INTC";
import { QCOM } from "./QCOM";
import { TXN } from "./TXN";
import { DDOG } from "./DDOG";
import { SNOW } from "./SNOW";
import { NFLX } from "./NFLX";
import { TMUS } from "./TMUS";
import { DIS } from "./DIS";
import { CMCSA } from "./CMCSA";
import { SPOT } from "./SPOT";
import { PINS } from "./PINS";
import { HD } from "./HD";
import { LOW } from "./LOW";
import { MCD } from "./MCD";
import { BKNG } from "./BKNG";
import { TJX } from "./TJX";
import { ORLY } from "./ORLY";
import { RCL } from "./RCL";
import { CMG } from "./CMG";
import { DHI } from "./DHI";
import { ABNB } from "./ABNB";
import { UBER } from "./UBER";
import { SHOP } from "./SHOP";
import { COST } from "./COST";
import { WMT } from "./WMT";
import { PG } from "./PG";
import { KO } from "./KO";
import { PM } from "./PM";
import { CL } from "./CL";
import { PEP } from "./PEP";
import { JNJ } from "./JNJ";
import { ABBV } from "./ABBV";
import { ISRG } from "./ISRG";
import { TMO } from "./TMO";
import { VRTX } from "./VRTX";
import { ABT } from "./ABT";
import { BSX } from "./BSX";
import { SYK } from "./SYK";
import { MRK } from "./MRK";
import { REGN } from "./REGN";
import { ZTS } from "./ZTS";
import { IDXX } from "./IDXX";
import { PFE } from "./PFE";
import { UNH } from "./UNH";
import { BAC } from "./BAC";
import { GS } from "./GS";
import { MS } from "./MS";
import { V } from "./V";
import { MA } from "./MA";
import { BRK_B } from "./BRK.B";
import { SPGI } from "./SPGI";
import { BLK } from "./BLK";
import { AXP } from "./AXP";
import { SCHW } from "./SCHW";
import { CB } from "./CB";
import { PGR } from "./PGR";
import { ICE } from "./ICE";
import { CME } from "./CME";
import { AIG } from "./AIG";
import { C } from "./C";
import { WFC } from "./WFC";
import { GE } from "./GE";
import { GEV } from "./GEV";
import { CAT } from "./CAT";
import { RTX } from "./RTX";
import { ETN } from "./ETN";
import { VRT } from "./VRT";
import { PH } from "./PH";
import { URI } from "./URI";
import { UNP } from "./UNP";
import { WM } from "./WM";
import { TT } from "./TT";
import { HWM } from "./HWM";
import { AXON } from "./AXON";
import { BA } from "./BA";
import { DE } from "./DE";
import { HON } from "./HON";
import { LMT } from "./LMT";
import { XOM } from "./XOM";
import { CVX } from "./CVX";
import { COP } from "./COP";
import { EOG } from "./EOG";
import { WMB } from "./WMB";
import { NEE } from "./NEE";
import { CEG } from "./CEG";
import { VST } from "./VST";
import { SO } from "./SO";
import { DUK } from "./DUK";
import { LIN } from "./LIN";
import { SHW } from "./SHW";
import { FCX } from "./FCX";
import { ECL } from "./ECL";
import { PLD } from "./PLD";
import { EQIX } from "./EQIX";
import { WELL } from "./WELL";
import { CRDO } from "./CRDO";
import { ALAB } from "./ALAB";
import { CLS } from "./CLS";
import { CIEN } from "./CIEN";
import { LITE } from "./LITE";
import { COHR } from "./COHR";
import { POWL } from "./POWL";
import { NVT } from "./NVT";
import { FIX } from "./FIX";
import { STRL } from "./STRL";
import { BE } from "./BE";
import { NBIS } from "./NBIS";
import { IREN } from "./IREN";
import { APLD } from "./APLD";
import { CRWV } from "./CRWV";
import { AMSC } from "./AMSC";
import { PSTG } from "./PSTG";
import { ONTO } from "./ONTO";
import { CAMT } from "./CAMT";
import { FORM } from "./FORM";
import { RMBS } from "./RMBS";
import { SITM } from "./SITM";
import { LSCC } from "./LSCC";
import { MTSI } from "./MTSI";
import { AEIS } from "./AEIS";
import { POWI } from "./POWI";
import { AMKR } from "./AMKR";
import { S } from "./S";
import { RBRK } from "./RBRK";
import { TENB } from "./TENB";
import { GTLB } from "./GTLB";
import { IOT } from "./IOT";
import { PEGA } from "./PEGA";
import { ESTC } from "./ESTC";
import { MNDY } from "./MNDY";
import { IONQ } from "./IONQ";
import { RGTI } from "./RGTI";
import { QBTS } from "./QBTS";
import { SOFI } from "./SOFI";
import { AFRM } from "./AFRM";
import { UPST } from "./UPST";
import { TOST } from "./TOST";
import { FOUR } from "./FOUR";
import { HOOD } from "./HOOD";
import { CRCL } from "./CRCL";
import { PYPL } from "./PYPL";
import { PODD } from "./PODD";
import { TMDX } from "./TMDX";
import { INSP } from "./INSP";
import { PEN } from "./PEN";
import { GMED } from "./GMED";
import { TEM } from "./TEM";
import { HIMS } from "./HIMS";
import { VKTX } from "./VKTX";
import { CRNX } from "./CRNX";
import { RYTM } from "./RYTM";
import { INSM } from "./INSM";
import { MDGL } from "./MDGL";
import { KRYS } from "./KRYS";
import { BBIO } from "./BBIO";
import { ACLX } from "./ACLX";
import { RKLB } from "./RKLB";
import { ASTS } from "./ASTS";
import { LUNR } from "./LUNR";
import { KTOS } from "./KTOS";
import { AVAV } from "./AVAV";
import { PL } from "./PL";
import { JOBY } from "./JOBY";
import { ACHR } from "./ACHR";
import { SYM } from "./SYM";
import { RDW } from "./RDW";
import { OKLO } from "./OKLO";
import { SMR } from "./SMR";
import { UEC } from "./UEC";
import { LEU } from "./LEU";
import { FLNC } from "./FLNC";
import { MP } from "./MP";
import { USAR } from "./USAR";
import { ATI } from "./ATI";
import { CDE } from "./CDE";
import { IDR } from "./IDR";
import { TPL } from "./TPL";
import { CAVA } from "./CAVA";
import { BROS } from "./BROS";
import { ELF } from "./ELF";
import { ONON } from "./ONON";
import { CELH } from "./CELH";
import { DUOL } from "./DUOL";
import { RDDT } from "./RDDT";
import { WING } from "./WING";
import { AAON } from "./AAON";
import { MLI } from "./MLI";
import { ROAD } from "./ROAD";
import { WTS } from "./WTS";
import { DY } from "./DY";
import { BWXT } from "./BWXT";
import { KNF } from "./KNF";
import { KNSL } from "./KNSL";
import { RYAN } from "./RYAN";
import { PLMR } from "./PLMR";
import { EVR } from "./EVR";

export const STOCK_STORIES: Record<string, StockStory> = {
  "NVDA": NVDA,
  "MSFT": MSFT,
  "AAPL": AAPL,
  "GOOGL": GOOGL,
  "AMZN": AMZN,
  "META": META,
  "AVGO": AVGO,
  "TSLA": TSLA,
  "LLY": LLY,
  "JPM": JPM,
  "ORCL": ORCL,
  "AMD": AMD,
  "MU": MU,
  "AMAT": AMAT,
  "LRCX": LRCX,
  "KLAC": KLAC,
  "ANET": ANET,
  "CDNS": CDNS,
  "SNPS": SNPS,
  "NOW": NOW,
  "PANW": PANW,
  "CRWD": CRWD,
  "INTU": INTU,
  "APH": APH,
  "PLTR": PLTR,
  "ADI": ADI,
  "FICO": FICO,
  "ADBE": ADBE,
  "CRM": CRM,
  "CSCO": CSCO,
  "DELL": DELL,
  "HPQ": HPQ,
  "IBM": IBM,
  "INTC": INTC,
  "QCOM": QCOM,
  "TXN": TXN,
  "DDOG": DDOG,
  "SNOW": SNOW,
  "NFLX": NFLX,
  "TMUS": TMUS,
  "DIS": DIS,
  "CMCSA": CMCSA,
  "SPOT": SPOT,
  "PINS": PINS,
  "HD": HD,
  "LOW": LOW,
  "MCD": MCD,
  "BKNG": BKNG,
  "TJX": TJX,
  "ORLY": ORLY,
  "RCL": RCL,
  "CMG": CMG,
  "DHI": DHI,
  "ABNB": ABNB,
  "UBER": UBER,
  "SHOP": SHOP,
  "COST": COST,
  "WMT": WMT,
  "PG": PG,
  "KO": KO,
  "PM": PM,
  "CL": CL,
  "PEP": PEP,
  "JNJ": JNJ,
  "ABBV": ABBV,
  "ISRG": ISRG,
  "TMO": TMO,
  "VRTX": VRTX,
  "ABT": ABT,
  "BSX": BSX,
  "SYK": SYK,
  "MRK": MRK,
  "REGN": REGN,
  "ZTS": ZTS,
  "IDXX": IDXX,
  "PFE": PFE,
  "UNH": UNH,
  "BAC": BAC,
  "GS": GS,
  "MS": MS,
  "V": V,
  "MA": MA,
  "BRK.B": BRK_B,
  "SPGI": SPGI,
  "BLK": BLK,
  "AXP": AXP,
  "SCHW": SCHW,
  "CB": CB,
  "PGR": PGR,
  "ICE": ICE,
  "CME": CME,
  "AIG": AIG,
  "C": C,
  "WFC": WFC,
  "GE": GE,
  "GEV": GEV,
  "CAT": CAT,
  "RTX": RTX,
  "ETN": ETN,
  "VRT": VRT,
  "PH": PH,
  "URI": URI,
  "UNP": UNP,
  "WM": WM,
  "TT": TT,
  "HWM": HWM,
  "AXON": AXON,
  "BA": BA,
  "DE": DE,
  "HON": HON,
  "LMT": LMT,
  "XOM": XOM,
  "CVX": CVX,
  "COP": COP,
  "EOG": EOG,
  "WMB": WMB,
  "NEE": NEE,
  "CEG": CEG,
  "VST": VST,
  "SO": SO,
  "DUK": DUK,
  "LIN": LIN,
  "SHW": SHW,
  "FCX": FCX,
  "ECL": ECL,
  "PLD": PLD,
  "EQIX": EQIX,
  "WELL": WELL,
  "CRDO": CRDO,
  "ALAB": ALAB,
  "CLS": CLS,
  "CIEN": CIEN,
  "LITE": LITE,
  "COHR": COHR,
  "POWL": POWL,
  "NVT": NVT,
  "FIX": FIX,
  "STRL": STRL,
  "BE": BE,
  "NBIS": NBIS,
  "IREN": IREN,
  "APLD": APLD,
  "CRWV": CRWV,
  "AMSC": AMSC,
  "PSTG": PSTG,
  "ONTO": ONTO,
  "CAMT": CAMT,
  "FORM": FORM,
  "RMBS": RMBS,
  "SITM": SITM,
  "LSCC": LSCC,
  "MTSI": MTSI,
  "AEIS": AEIS,
  "POWI": POWI,
  "AMKR": AMKR,
  "S": S,
  "RBRK": RBRK,
  "TENB": TENB,
  "GTLB": GTLB,
  "IOT": IOT,
  "PEGA": PEGA,
  "ESTC": ESTC,
  "MNDY": MNDY,
  "IONQ": IONQ,
  "RGTI": RGTI,
  "QBTS": QBTS,
  "SOFI": SOFI,
  "AFRM": AFRM,
  "UPST": UPST,
  "TOST": TOST,
  "FOUR": FOUR,
  "HOOD": HOOD,
  "CRCL": CRCL,
  "PYPL": PYPL,
  "PODD": PODD,
  "TMDX": TMDX,
  "INSP": INSP,
  "PEN": PEN,
  "GMED": GMED,
  "TEM": TEM,
  "HIMS": HIMS,
  "VKTX": VKTX,
  "CRNX": CRNX,
  "RYTM": RYTM,
  "INSM": INSM,
  "MDGL": MDGL,
  "KRYS": KRYS,
  "BBIO": BBIO,
  "ACLX": ACLX,
  "RKLB": RKLB,
  "ASTS": ASTS,
  "LUNR": LUNR,
  "KTOS": KTOS,
  "AVAV": AVAV,
  "PL": PL,
  "JOBY": JOBY,
  "ACHR": ACHR,
  "SYM": SYM,
  "RDW": RDW,
  "OKLO": OKLO,
  "SMR": SMR,
  "UEC": UEC,
  "LEU": LEU,
  "FLNC": FLNC,
  "MP": MP,
  "USAR": USAR,
  "ATI": ATI,
  "CDE": CDE,
  "IDR": IDR,
  "TPL": TPL,
  "CAVA": CAVA,
  "BROS": BROS,
  "ELF": ELF,
  "ONON": ONON,
  "CELH": CELH,
  "DUOL": DUOL,
  "RDDT": RDDT,
  "WING": WING,
  "AAON": AAON,
  "MLI": MLI,
  "ROAD": ROAD,
  "WTS": WTS,
  "DY": DY,
  "BWXT": BWXT,
  "KNF": KNF,
  "KNSL": KNSL,
  "RYAN": RYAN,
  "PLMR": PLMR,
  "EVR": EVR,
};

export function getStockStory(ticker: string): StockStory | null {
  return STOCK_STORIES[ticker.toUpperCase()] ?? null;
}

export type { StockStory } from "./types";
