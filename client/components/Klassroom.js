import { useContext } from "react"

import { FoldersContext } from "../components/FoldersContext";

import FolderForm from "./FolderForm";
import Folders from "./Folders";

export default function Klassroom() {

    const [ folders, ] = useContext(FoldersContext);

    return (
        <div style={{ marginLeft: "10px" }}>
            <FolderForm />

            <div>
                {
                    folders.length > 0 ? <Folders folders={folders} /> : null
                }
            </div>
        </div>
    )
}
