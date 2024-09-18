import React, { createContext, useContext, useState } from "react";


const AuthContext = createContext(undefined);

export const AuthProvider = ({ Children }) => {
    const [token, setToken] = useState(null);

    const login = (returnedToken) => setToken(returnedToken);
    const logout = () => setToken(null);

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {Children}
        </AuthContext.Provider>
    );

};