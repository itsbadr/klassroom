import styles from "../styles/Folder.module.css";

import { useState } from "react";

import ContextMenu from "../components/ContextMenu";

export default function Folder({ folder }) {

    const [showing, setShowing] = useState(false)
    const [position, setPositions] = useState([])

    function openContextMenu(event) {

        event.preventDefault();
        setShowing(prevState => !prevState)
        setPositions([event.screenX - 2010, event.screenY - 200])
    }

    return (
        <>
            <ContextMenu
                setShowing={setShowing}
                showing={showing}
                left={position[0]}
                top={position[1]}
                folder={folder} />
            <div
                onContextMenu={(event) => openContextMenu(event)}
                className={styles.folderContainer}>
                <img className={styles.folderImage} src="../folder.svg" alt="folder" />
                <h6 style={{ margin: "0", fontWeight: 600, textAlign: "center" }}>{folder.name}</h6>
            </div>
        </>
    )
}
