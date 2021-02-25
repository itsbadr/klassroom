import styles from "../styles/Explorer.module.css";

import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../components/AuthContext";
import { FoldersContext } from "../components/FoldersContext";

import Folder from "./Folder";

export default function Explorer() {

    const [ folderInformation, setFolderInformation ] = useState([]);

    const [ folders, updateFolders, 
        currentFolder, setCurrentFolder ] = useContext(FoldersContext);
    
    const [ googleAuth, _ ] = useContext(AuthContext);

    useEffect(() => {
        if (googleAuth) {
            window.gapi.client.request({
                path: `https://www.googleapis.com/drive/v2/files/${process.env.classroomFolderId}/children`,
            })
            .then(({result}) => {
                result.items.forEach(item => {
                    window.gapi.client.request({
                        path: `https://www.googleapis.com/drive/v3/files/${item.id}`,
                    })
                    .then(item => {
                        setFolderInformation(previousFolders => [...previousFolders, item.result])
                    })
                    .catch(error => console.log(error))
                });
            })
            .catch(err => console.log(err));
        }
    }, [])

    return (
        <div className={styles.explorer}>
            <div className={styles.explorerMenu}>
                <h4>{currentFolder.name}</h4>
            </div>
            <div style={{ display: "flex" }}>
                {
                folderInformation.map(folder => (
                    <Folder key={folder.id} folder={folder}/>
                ))
                }
            </div>
        </div>
    )

}