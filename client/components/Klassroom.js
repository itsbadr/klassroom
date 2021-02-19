import { useState } from "react"

import Folders from "./Folders";

export default function Klassroom() {

    const [folders, makeFolder] = useState([{
        folderName: "folder",
        folderId: 123
    }])

    function makeNewFolder() {

        const folder = {
            folderName: "folder",
            folderId: 123
        }

        makeFolder(oldFolder => [...oldFolder, folder])

    }

    return (
        <div>
            <h2>Klassroom</h2>
            <button onClick={makeNewFolder}>
                Create a new folder
            </button>
            <Folders folders={folders} />

        </div>
    )
}