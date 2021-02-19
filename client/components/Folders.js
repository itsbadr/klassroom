import Folder from "./Folder";

export default function Folders({ folders }) {

    return (
        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "300px" }}>
            {
                folders.map((folder) => {
                    return (
                        <Folder key={folder.folderId} folder={folder} />
                    )
                })
            }
        </div>
    )


}