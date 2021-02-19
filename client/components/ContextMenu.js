import styles from "../styles/ContextMenu.module.css";

export default function ContextMenu({ setShowing, showing, top, left, folder, folders, updateFolder }) {

    function deleteFolder() {
        fetch(`http://127.0.0.1:5000/delete_folder/${folder._id.$oid}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                var newFolders = [...folders];
                newFolders = newFolders.filter(eachFolder => eachFolder._id.$oid !== folder._id.$oid)

                updateFolder(newFolders);

            })
            .catch(error => console.log(`Something went wrong: ${error}`))
    }

    return (
        <div onContextMenu={(event) => {
            event.preventDefault();
            setShowing(false);
        }}
            onClick={() => setShowing(false)} style={{ display: showing ? "flex" : "none", top, left }} className={styles.contextContainer}>
            <div onClick={deleteFolder}>
                <h5>Delete</h5>
            </div>
            <div>
                <h5>Edit</h5>
            </div>
        </div>
    )

}