import React, { createContext } from 'react';
import useDatabase from '../hooks/useDatabase';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const firebaseContext = useFirebase();
    const services = useDatabase('./serviceData.json');
    const data = {
        firebaseContext,
        services
    };
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;