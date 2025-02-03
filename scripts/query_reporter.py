import requests

search_criteria = {"project_nums": ["R34DA059513"]}
include_fields = ["ApplId", "ProjectTitle", "AbstractText"]

params = {"criteria": search_criteria, "limit": 1, "offset": 0}
if include_fields is not None:
    params["include_fields"] = include_fields

response = requests.post("https://api.reporter.nih.gov/v2/projects/search", json=params)

print(response.json()['results'][0]["abstract_text"])