import { useState } from "react"

import styles from "../styles/Klassroom.module.css";

import Folders from "./Folders";

export default function Klassroom() {

    const [folders, makeFolder] = useState([{
        folderName: "folder",
        folderId: 123
    }])

    const [folderName, setFolderName] = useState("")

    function makeNewFolder(event) {

        event.preventDefault();

        const folder = {
            folderName,
            folderId: Math.floor(Math.random() * Math.floor(400))
        }
        setFolderName("");

        makeFolder(oldFolder => [...oldFolder, folder])

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
            <Folders folders={folders} />
        </div>
    )
}