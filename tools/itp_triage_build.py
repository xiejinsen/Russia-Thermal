#!/usr/bin/env python3
"""Rebuild staged Kutateladze *review queues* after partial/complete archive recovery.

This title-only heuristic is for manual-review triage, NEVER admitted academic output.
Re-run for 2021 whenever official missing pages are recovered; IDs/source URLs stable.
"""
import argparse
import csv
import re
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
RAW=ROOT/"analysis/output-measurement/itp-annual-raw"
OUT=ROOT/"analysis/output-measurement/pilot-v1/triage"
MATCHERS=[
 ("HEAT_PIPE",re.compile(r"pulsating heat pipe|loop heat pipe|heat pipes?|vapor chamber|thermosyphon|thermosiphon|wick structures?|capillary[- ]porous|heat spreader|теплов(?:ая|ые|ой|ых) труб|термосифон",re.I)),
 ("MICROCHANNEL",re.compile(r"microchannel|mini-?channel|micro-?fluidic|narrow channel|thin-channel|flat channel|minichannel|микроканал|мини-канал",re.I)),
 ("BOILING_CRISES",re.compile(r"dryout|boiling|nucleate|critical heat flux|bubble dynamics|pool boiling|boiling crisis|boiling heat|boiling surface|biphilic|кипен|кризис.*тепло|пузырьк",re.I)),
 ("INTERFACE_CAPILLARY",re.compile(r"capillary wicking|wicking|capillary spreading|thermocapillary|wetting|wettability|contact angle|porous coating|hydrophobic surface|hydrophilic surface|liquid film rupture|film rupture|film evaporation|evaporat.*liquid film|капилл|смачиваем|гидрофоб|жидк.*пленк|разрыв.*пленк",re.I)),
 ("MEASUREMENT",re.compile(r"LED-interferometry|interferometr|heat flux density|local heat flux|heat flux measur|thermal diagnostic|heat transfer coefficient|liquid film thickness|IR thermograph|интерферометр|измерен.*теплов",re.I))
]
NEGATIVE=re.compile(r"combustion|burning|fuel|flame|ignition|turbine|oil recovery|hydrate synthesis|coal|geothermal|fire|rocket engine|nuclear fuel|building|wall insulation|atmospheric|горени|сгорания|пламен|нефт|топлив|угол|здания",re.I)
FIELDS=["year","archive_index","triage_priority","technical_signals","potential_non_mobile_context","source_page","citation_excerpt","review_state"]

def make_row(row):
    cite=row["bibliography"]
    title=cite.split(" // ",1)[0]
    signals=[key for key,p in MATCHERS if p.search(title)]
    if not signals:return None
    neg=bool(NEGATIVE.search(title))
    if not neg and ("HEAT_PIPE" in signals or "MICROCHANNEL" in signals or ("BOILING_CRISES" in signals and "INTERFACE_CAPILLARY" in signals)):
        priority="HIGH"
    elif not neg:
        priority="MEDIUM"
    else:
        priority="AMBIGUOUS"
    return {
        "year":row["year"],"archive_index":row["index_on_site"],
        "triage_priority":priority,"technical_signals":";".join(signals),
        "potential_non_mobile_context":"POSSIBLE_NON_MOBILE" if neg else "",
        "source_page":row["source_page"],"citation_excerpt":cite[:300],
        "review_state":"UNREVIEWED_NOT_COUNTABLE"
    }

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("--years",nargs="+",type=int,default=[2021])
    args=ap.parse_args()
    if not args.years or any(y not in range(2021,2026) for y in args.years):
        ap.error("Only 2021–2025 allowed")
    OUT.mkdir(parents=True,exist_ok=True)
    for y in args.years:
        with (RAW/f"{y}-candidates.tsv").open(encoding="utf-8",newline="") as f:
            source=list(csv.DictReader(f,delimiter="\t"))
        staged=[row for s in source if (row:=make_row(s)) is not None]
        path=OUT/f"{y}-keyword-candidates.tsv"
        with path.open("w",encoding="utf-8",newline="") as f:
            wr=csv.DictWriter(f,fieldnames=FIELDS,delimiter="\t",lineterminator="\n")
            wr.writeheader()
            wr.writerows(staged)
        from collections import Counter
        print(f"{y}: {len(staged)} UNREVIEWED leads from {len(source)} raw citations; priority {dict(Counter(r['triage_priority'] for r in staged))}")
        print(f"{path} is NOT verified relevant paper output")
if __name__=="__main__":
    main()
