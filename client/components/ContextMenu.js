import { useState } from "react";

import styles from "../styles/ContextMenu.module.css";

export default function ContextMenu({ setShowing, showing, top, left, folder, folders, updateFolders, closed, setClosed }) {

    const [ editShowing, setEditShowing ] = useState(false);
    const [ folderName, setFolderName ] = useState("");

    function hideContextMenu(event) {
        event.preventDefault();
        closeContextMenu();
    }

    function onContextClick() {
        if (editShowing) return;

        setShowing(false);
    }

    function deleteFolder() {
        fetch(`http://127.0.0.1:5000/delete_folder/${folder._id.$oid}`, {
            method: "DELETE",
        })
        .then(_ => {

            var newFolders = [...folders];
            newFolders = newFolders.filter(eachFolder => eachFolder._id.$oid !== folder._id.$oid);
            updateFolders(newFolders);

        });
    }

    function handleEditClick() {
        if (editShowing) {

            fetch(`http://127.0.0.1:5000/edit_folder_name/${folder._id.$oid}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    folderName: folderName
                }),
            })
            .then(_ => {
                folder.name = folderName;
                setFolderName("");
                closeContextMenu();
            });

        } else {
            setEditShowing(true);
        }
    }

    function handleFolderNameChange({ target }) {
        setFolderName(target.value);
    }

    function closeContextMenu(delay) {
        setClosed(showing);
        setTimeout(() => {
            setEditShowing(false);
            setShowing(false);
            setClosed(false);
        }, 200);
    }

    return (
        <div onContextMenu={hideContextMenu}
            onClick={() => {onContextClick}} 
            style={{ display: showing ? "flex" : "none", top, left }} 
            className={`${styles.contextContainer} 
            ${closed ? styles.contextContainerClose : null}
            ${editShowing ? styles.contextEdit : null}`}
        >
            {
                editShowing 
                ? 
                <input 
                    className={styles.contextEditInput} 
                    type="text" 
                    placeholder="NEW FOLDER NAME" 
                    value={folderName}
                    onChange={handleFolderNameChange}/>
                :
                <>
                    <h6 style={{ textAlign: "left", margin: "0px 5px" }}>{folder.name}</h6>
                    <div onClick={deleteFolder}>
                        <h5>Delete</h5>
                    </div>
                </>
            }
            <div onClick={handleEditClick}>
                <h5>{editShowing ? "Set new name" : "Edit" }</h5>
            </div>
        </div>
    )

}
