import { useState, useEffect } from "react"

import FolderForm from "./FolderForm";
import Folders from "./Folders";

export default function Klassroom() {

    const [folderName, setFolderName] = useState("");

    const [folders, updateFolder] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/folders")
            .then(response => response.json())
            .then(data => updateFolder(data.folders))
    }, []);

    return (
        <div style={{ marginLeft: "10px" }}>
            <FolderForm
                setFolderName={setFolderName}
                folderName={folderName}
                updateFolder={updateFolder}
            />
            <div>
                {
                    folders.length > 0 ? <Folders updateFolder={updateFolder} folders={folders} /> : null
                }
            </div>
        </div>
    )
}