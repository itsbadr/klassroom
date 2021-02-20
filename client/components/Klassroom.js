import { useContext } from "react"

import { FoldersContext } from "../components/FoldersContext";

import FolderForm from "./FolderForm";
import Folders from "./Folders";

import styles from "../styles/Klassroom.module.css";

export default function Klassroom() {

    const [ folders, ] = useContext(FoldersContext);

    return (
        <div className={styles.klassroomContainer}>
            <FolderForm />

            <div>
                {
                    folders.length > 0 ? <Folders folders={folders} /> : null
                }
            </div>
        </div>
    )
}
