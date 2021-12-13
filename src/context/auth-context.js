import React from 'react';

export const AuthContext = React.createContext({
    authToken: null,
    setAuth: () => { }
});

export const AuthProvider = ({ children}) => {
    const [authToken, setAuth] = React.useState();

    return (
        <AuthContext.Provider
            value={[authToken, setAuth]}
        >
            {children}
        </AuthContext.Provider>
    );
};

