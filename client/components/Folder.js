import styles from "../styles/Folder.module.css";

export default function Folder({ folder }) {
    return (

        <div>
            <div className={styles.folder}>
            </div>
            <h6 style={{ margin: 0, textAlign: "center" }}>{folder.folderName}</h6>
        </div>

    )
}
