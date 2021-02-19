import { useState } from "react"

export default function Klassroom() {

    const [folders, makeFolder] = useState([{
        folderName: "folder",
        folderId: 123
    }])

    function makeNewFolder() {

        const folder = {
            folderName: "newFolder",
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
            <div>
                {
                    folders.map((folder) => {
                        return (
                            <div key={folder.id}>{folder.folderName}</div>
                        )
                    })
                }
            </div>

        </div>
    )
}