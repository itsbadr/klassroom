import pymongo
import json
from bson import json_util
from auth import credentials
from config import Config
from googleapiclient.discovery import build
from flask import Flask, request, jsonify
from flask_cors import CORS

# Flask

app = Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

# MongoDB

client = pymongo.MongoClient(Config.MONGO_URI)
klassroom_database = client["klassroom"]
folder_collection = klassroom_database["folders"]

service = build("classroom", "v1", credentials=credentials)


@app.route('/courses', methods=["GET"])
def get_courses():

    results = service.courses().list(pageSize=8).execute()
    courses = results.get("courses", [])

    if not courses:
        return {
            "message": "No courses found"
        }
    else:
        with open("courses.json") as file:
            data = json.load(file)

        for course in courses:
            if course["id"] in data:
                course["alternateName"] = data[course["id"]]

        return {
            "status": True,
            "courses": courses,
        }


@app.route('/folders', methods=["GET"])
def get_folders():

    response = {
        "folders": [],
    }

    for folder in folder_collection.find():
        response["folders"].append(json.loads(json_util.dumps(folder)))

    return response


@app.route('/make_folder', methods=["POST"])
def make_folder():

    folder = request.data
    print(json.loads(folder))
    added_folder = folder_collection.insert_one(json.loads(folder))

    return {
        "status": True,
        "id": json.loads(json_util.dumps(added_folder.inserted_id))
    }


app.run()
