import styles from "../styles/ContextMenu.module.css";

export default function ContextMenu({ setShowing, showing, top, left, folder }) {


    return (
        <div onContextMenu={(event) => {
            event.preventDefault();
            setShowing(false);
        }}
            onClick={() => setShowing(false)} style={{ display: showing ? "flex" : "none", top, left }} className={styles.contextContainer}>
            <div>
                <h5>Delete</h5>
            </div>
            <div>
                <h5>Edit</h5>
            </div>
        </div>
    )

}