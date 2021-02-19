import Folder from "./Folder";

export default function Folders({ folders }) {

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                folders.map((folder) => {
                    return (
                        <Folder key={folder._id.$oid} folder={folder} />
                    )
                })
            }
        </div>
    )


}