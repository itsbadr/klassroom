import { useState, useContext } from "react";

import { FoldersContext } from "../components/FoldersContext";

import styles from "../styles/FolderForm.module.css";

export default function FolderForm() {

    const [_, updateFolders] = useContext(FoldersContext);
    const [folderName, setFolderName] = useState("");

    function makeNewFolder(event) {

        event.preventDefault();

        const folder = {
            name: folderName,
        }

        fetch("http://127.0.0.1:5000/make_folder", {
            method: "POST",
            body: JSON.stringify(folder),
        })
            .then(response => response.json())
            .then(addedFolder => {

                const { id: { $oid } } = addedFolder;
                folder._id = { $oid }

                setFolderName("");
                updateFolders(oldFolder => [...oldFolder, folder]);

            })

    }

    function formText(event) {
        setFolderName(event.target.value);
    }

    return (
        <form className={styles.form}>
            <input type="text" placeholder="FOLDER NAME"
                value={folderName}
                onChange={formText} />
            <button
                onClick={makeNewFolder}>
                CREATE A NEW FOLDER
                </button>
        </form>
    )

}