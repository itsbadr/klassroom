import styles from "../styles/FolderForm.module.css";

export default function FolderForm({ setFolderName, folderName, makeFolder }) {

    function makeNewFolder(event) {

        event.preventDefault();

        const folder = {
            name: folderName,
            _id: { $oid: 123 }
        }
        setFolderName("");
        makeFolder(oldFolder => [...oldFolder, folder]);
    }

    function formText(event) {
        setFolderName(event.target.value);
    }

    return (
        <form className={styles.form}>
            <input type="text" placeholder="FOLDER NAME"
                value={folderName}
                onChange={(event) => formText(event)} />
            <button
                onClick={(event) => makeNewFolder(event)}>
                CREATE A NEW FOLDER
                </button>
        </form>
    )

}