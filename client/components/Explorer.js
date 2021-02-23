import styles from "../styles/Explorer.module.css";

import { useContext } from "react";

import { FoldersContext } from "../components/FoldersContext";

export default function Explorer() {

    const [ folders, updateFolders, 
        currentFolder, setCurrentFolder ] = useContext(FoldersContext);



    return (
        <div className={styles.explorer}>
            <div className={styles.explorerMenu}>
                <h4>{currentFolder.name}</h4>
            </div>
        </div>
    )

}