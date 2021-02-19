import { useState, useEffect } from "react"

import styles from "../styles/Klassroom.module.css";

import Folders from "./Folders";

export default function Klassroom() {

    const [folders, makeFolder] = useState([]);

    const [folderName, setFolderName] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:5000/folders")
            .then(response => response.json())
            .then(({ folders }) => {
                if (folders.length > 0)
                    makeFolder(oldFolder => [...oldFolder, folders]);
            });
    }, []);

    function makeNewFolder(event) {

        event.preventDefault();

        const folder = {
            folderName,
            folderId: Math.floor(Math.random() * Math.floor(400))
        }
        setFolderName("");

        makeFolder(oldFolder => [...oldFolder, folder]);
    }

    function formText(event) {
        setFolderName(event.target.value);
    }

    return (
        <div>
            <h2>Klassroom</h2>
            <form className={styles.form}>
                <input type="text" placeholder="Folder name"
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