import { useState, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [ googleAuth, setGoogleAuth ] = useState(null);

    return (
        <AuthContext.Provider value={[ googleAuth, setGoogleAuth ]}>
            {children}
        </AuthContext.Provider>
    )
}
