import sys, json, urllib.request

# Get jobs for a specific run
run_id = sys.argv[1] if len(sys.argv) > 1 else "27411302805"
url = f"https://api.github.com/repos/habibrahmanyonocy786-cmyk/yonocytech-website/actions/runs/{run_id}/jobs"
req = urllib.request.Request(url, headers={"Accept": "application/vnd.github+json"})
with urllib.request.urlopen(req) as resp:
    data = json.load(resp)

for job in data.get("jobs", []):
    print(f"\n=== Job: {job['name']} | Status: {job['status']} | Conclusion: {job.get('conclusion')}")
    for step in job.get("steps", []):
        print(f"  Step: {step['name']:30s} | Status: {step['status']:12s} | Conclusion: {step.get('conclusion', 'N/A')}")