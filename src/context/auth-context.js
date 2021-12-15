import React from 'react';

export const AuthContext = React.createContext({
    authToken:{ userInfo:{} },
    setAuth: () => { }
});

export const AuthProvider = ({ children}) => {
    const [authToken, setAuth] = React.useState({idToken: null,userInfo:{}});

    return (
        <AuthContext.Provider
            value={[authToken, setAuth]}
        >
            {children}
        </AuthContext.Provider>
    );
};

