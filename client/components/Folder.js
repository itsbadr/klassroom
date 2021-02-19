import styles from "../styles/Folder.module.css";

export default function Folder({ folder }) {
    folder = JSON.parse(folder);
    return (
        <div style={{ maxWidth: "70px" }}>
            <div className={styles.folder}>
            </div>
            <h6 style={{ margin: 0, textAlign: "center", wordWrap: "break-word" }}>{folder.name}</h6>
        </div>

    )
}
