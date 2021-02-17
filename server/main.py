from googleapiclient.discovery import build

from auth import credentials

from flask import Flask

app = Flask(__name__)
app.config["DEBUG"] = True

service = build("classroom", "v1", credentials=credentials)


@app.route('/courses', methods=["GET"])
def get_courses():

    results = service.courses().list(pageSize=8).execute()
    courses = results.get("courses", [])

    added_courses = {}

    if not courses:
        return {
            "message": "No courses found"
        }
    else:
        for course in courses:
            added_courses[course["name"]] = course["id"]

    return added_courses


app.run()
