import { useEffect, useContext } from "react";

import styles from "../styles/Home.module.css";

import { AuthContext } from "../components/AuthContext";
import { FoldersProvider } from "../components/FoldersContext";

import Nav from "../components/Nav";
import Klassroom from "../components/Klassroom";
import Courses from "../components/Courses";

import { SCOPE, discoveryUrl } from "../utils/utils";

export default function Home() {

  const [ _, setGoogleAuth ] = useContext(AuthContext);

  const initializeGapi = () => {

      window.gapi.client.init({
          apiKey: process.env.googleDriveApiKey,
          clientId: process.env.googleDriveClientId,
          scope: SCOPE,
          discoveryDocs: [discoveryUrl]
      })
      .then(() => setGoogleAuth(window.gapi.auth2.getAuthInstance()));
  }

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.onload = () => window.gapi.load("client:auth2", initializeGapi);
    document.body.appendChild(script);

  }, []);

  return (
    <main>
      <Nav />
      <div className={styles.container}>
        <FoldersProvider>
          <Klassroom />
        </FoldersProvider>
        {/* <Courses /> */}
      </div>
    </main>
  )
}
