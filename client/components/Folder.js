import styles from "../styles/Folder.module.css";

import { useState, useContext } from "react";

import { FoldersContext } from "../components/FoldersContext";
import ContextMenu from "../components/ContextMenu";

export default function Folder({ folder }) {

    const [ folders, updateFolders ] = useContext(FoldersContext);
    const [ showing, setShowing ] = useState(false);
    const [ position, setPositions ] = useState([]);

    function openContextMenu(event) {

        event.preventDefault();
        setShowing(previousShowing => !previousShowing);
        setPositions([ event.screenX - 2010, event.screenY - 200 ]);

    }

    return (
        <>
            <ContextMenu
                setShowing={setShowing}
                showing={showing}
                left={position[0]}
                top={position[1]}
                folders={folders}
                folder={folder}
                updateFolders={updateFolders} />
            <div
                onContextMenu={openContextMenu}
                className={styles.folderContainer}>
                <img className={styles.folderImage} src="../folder.svg" alt="folder" />
                <h6 style={{ margin: "0", fontWeight: 600, textAlign: "center" }}>{folder.name}</h6>
            </div>
        </>
    )
}
