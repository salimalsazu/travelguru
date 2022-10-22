import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import { app } from '../Firebase/Firebase.config';

const contextProvider = createContext();

const auth = getAuth(app);

const AuthContext = ({ children }) => {




    const authInfo = {};

    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default AuthContext;