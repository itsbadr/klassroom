from googleapiclient.discovery import build

from auth import credentials

service = build("classroom", "v1", credentials=credentials)

results = service.courses().list(pageSize=8).execute()
courses = results.get("courses", [])

if not courses:
    pass
else:
    for course in courses:
        print(course.courseMaterialSets)
