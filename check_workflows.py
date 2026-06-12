import sys, json

data = json.load(sys.stdin)
for r in data.get("workflow_runs", []):
    print(f'{r["id"]} | {r["status"]:10s} | {r.get("conclusion") or "N/A":12s} | {r["event"]}')