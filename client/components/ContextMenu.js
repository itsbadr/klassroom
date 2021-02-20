import styles from "../styles/ContextMenu.module.css";

export default function ContextMenu({ setShowing, showing, top, left, folder, folders, updateFolders, closed, setClosed }) {

    function hideContextMenu(event) {
        event.preventDefault();
        setClosed(showing);
        setTimeout(() => {
            setShowing(false);
            setClosed(false);
        }, 200)
    }

    function deleteFolder() {
        fetch(`http://127.0.0.1:5000/delete_folder/${folder._id.$oid}`, {
            method: "DELETE",
        })
            .then(_ => {

                var newFolders = [...folders];
                newFolders = newFolders.filter(eachFolder => eachFolder._id.$oid !== folder._id.$oid);
                updateFolders(newFolders);

            });
    }

    return (
        <div onContextMenu={hideContextMenu}
            onClick={() => setShowing(false)} 
            style={{ display: showing ? "flex" : "none", top, left }} 
            className={`${styles.contextContainer} ${closed ? styles.contextContainerTest : null}`}
        >
            <h6 style={{ textAlign: "left", margin: "0px 5px" }}>{folder.name}</h6>
            <div onClick={deleteFolder}>
                <h5>Delete</h5>
            </div>
            <div>
                <h5>Edit</h5>
            </div>
        </div>
    )

}
