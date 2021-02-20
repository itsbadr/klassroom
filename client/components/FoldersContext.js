import { useState, useEffect, createContext } from "react";

export const FoldersContext = createContext()

export function FoldersProvider({ children }) {

    const [folders, updateFolders] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/folders")
            .then(response => response.json())
            .then(data => updateFolders(data.folders));
    }, []);

    return (
        <FoldersContext.Provider value={[folders, updateFolders]}>
            {children}
        </FoldersContext.Provider>
    )

}