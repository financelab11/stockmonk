import json, openpyxl
wb = openpyxl.load_workbook("Refinitiv/India_Multifactor_SectorNeutral_1000Cr.xlsx", read_only=True, data_only=True)
ws = wb.active
rows = ws.iter_rows(values_only=True)
headers = next(rows)
idx = {h: i for i, h in enumerate(headers) if h}
def col(name):
    for h, i in idx.items():
        if h.replace("\n"," ").startswith(name):
            return i
    raise KeyError(name)
ric = col("Identifier (RIC)")
name = col("Company Name")
sector = col("GICS Sector Name")
industry = col("GICS Industry Name")
cap = col("Company Market Cap")
fwd = col("Revenue - SmartEstimate Growth")
data = []
for r in rows:
    try:
        c = float(r[cap] or 0)
    except Exception:
        c = 0
    if not r[ric] or c <= 0: continue
    data.append({
        "ric": str(r[ric]).strip(),
        "name": str(r[name]).strip(),
        "sector": str(r[sector] or "").strip(),
        "industry": str(r[industry] or "").strip(),
        "marketCapMInr": c,
        "forwardRevenueGrowth": float(r[fwd]) if isinstance(r[fwd], (int,float)) else None,
    })
data.sort(key=lambda x: -x["marketCapMInr"])
print(len(data))
json.dump(data[:600], open("data/growth-ranker/refinitiv-top.json","w"), indent=1)
print(json.dumps(data[:5], indent=1))
