import styles from "../styles/Folder.module.css";

import { useState, useContext } from "react";

import { FoldersContext } from "../components/FoldersContext";
import ContextMenu from "../components/ContextMenu";

export default function Folder({ folder }) {

    const [ folders, updateFolders, 
            _, setCurrentFolder ] = useContext(FoldersContext);
    const [ closed, setClosed ] = useState(false);
    const [ showing, setShowing ] = useState(false);
    const [ position, setPositions ] = useState([]);

    function toggleContextMenu(event) {

        event.preventDefault();

        if (showing) {
            setClosed(showing);
            setTimeout(() => {
                setShowing(false);
                setClosed(false);
            }, 200);
            return;
        }

        setShowing(true);
        setPositions([ event.pageX, event.pageY ]);
    }

    return (
        <>
            <ContextMenu
                setShowing={setShowing}
                showing={showing}
                setClosed={setClosed}
                closed={closed}
                left={position[0]}
                top={position[1]}
                folders={folders}
                folder={folder}
                updateFolders={updateFolders} />
            <div
                onClick={() => setCurrentFolder(folder)}
                onContextMenu={toggleContextMenu}
                className={styles.folderContainer}>
                <img className={styles.folderImage} src="../folder.svg" alt="folder" />
                <h6 style={{ margin: "0", fontWeight: 600, textAlign: "center" }}>{folder.name}</h6>
            </div>
        </>
    )
}
