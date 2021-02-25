from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow

import os.path
import pickle

credentials = None

if os.path.exists("token.pickle"):
    with open("token.pickle", "rb") as token:
        credentials = pickle.load(token)

if not credentials or not credentials.valid:
    if credentials and credentials.expired and credentials.refresh_token:
        credentials.refresh(Request())
    else:
        flow = InstalledAppFlow.from_client_secrets_file(
            "credentials.json",
            ["https://www.googleapis.com/auth/classroom.courses.readonly"],
        )
        credentials = flow.run_local_server(port=5000)

    with open("token.pickle", "wb") as token:
        pickle.dump(credentials, token)
