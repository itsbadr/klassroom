import Folder from "./Folder";

export default function Folders({ folders, updateFolder }) {

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                folders.map((folder) => {
                    return (
                        <Folder updateFolder={updateFolder} folders={folders} key={folder._id.$oid} folder={folder} />
                    )
                })
            }
        </div>
    )


}