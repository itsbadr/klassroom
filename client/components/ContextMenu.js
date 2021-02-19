import styles from "../styles/ContextMenu.module.css";

export default function ContextMenu({ setShowing, showing, top, left, folder }) {

    function deleteFolder() {
        fetch(`http://127.0.0.1:5000/delete_folder/${folder._id.$oid}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(data => {
                if (data.status !== 200)
                    return
                
                
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