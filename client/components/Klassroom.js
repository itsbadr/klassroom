import { useState, useEffect } from "react"

import styles from "../styles/Klassroom.module.css";

import Folders from "./Folders";

export default function Klassroom() {

    const [folders, makeFolder] = useState([]);

    const [folderName, setFolderName] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:5000/folders")
            .then(response => response.json())
            .then(data => makeFolder(data.folders))
    }, []);



    function makeNewFolder(event) {

        event.preventDefault();

        const folder = {
            name: folderName,
            _id: { $oid: 123 }
        }
        setFolderName("");
        makeFolder(oldFolder => [...oldFolder, folder]);
    }

    function formText(event) {
        setFolderName(event.target.value);
    }

    return (
        <div style={{ marginLeft: "10px" }}>
            <form className={styles.form}>
                <input type="text" placeholder="FOLDER NAME"
                    value={folderName}
                    onChange={(event) => formText(event)} />
                <button
                    onClick={(event) => makeNewFolder(event)}>
                    CREATE A NEW FOLDER
                </button>
            </form>
            {
                folders.length > 0 ? <Folders folders={folders} /> : null
            }
        </div>
    )
}