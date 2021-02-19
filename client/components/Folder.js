import styles from "../styles/Folder.module.css";

export default function Folder({ folder }) {
    return (
        <div style={{ maxWidth: "70px" }}>
            <img style={{ filter: "invert(77%) sepia(48%) saturate(6389%) hue-rotate(147deg) brightness(104%) contrast(73%)", margin: "15px" }} src="../folder.svg" alt="folder" />
            <h6 style={{ margin: 0, textAlign: "center", wordWrap: "break-word" }}>{folder.name}</h6>
        </div>

    )
}
