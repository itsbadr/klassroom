import styles from "../styles/Folder.module.css";

export default function Folder({ folder }) {
    return (
        <div className={styles.folderContainer}>
            <img className={styles.folderImage} src="../folder.svg" alt="folder" />
            <h6 style={{ margin: 0, fontWeight: 600, textAlign: "center", wordWrap: "break-word" }}>{folder.name}</h6>
        </div>

    )
}
