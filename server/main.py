import pymongo
from auth import credentials
from config import Config
from googleapiclient.discovery import build
from flask import Flask
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
        return {
            "status": True,
            "courses": courses,
        }


app.run()
