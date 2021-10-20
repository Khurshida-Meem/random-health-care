import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Pages/SignIn/Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // create user using email password
    const createUsingEmailPassword = (uname, email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUserName(uname);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    };
    // set name 
    const setUserName = (uname) => {
        updateProfile(auth.currentUser, { displayName: uname })
            .then(result => { })
    }
    // login with email password
    const signInUsingEmailandPass = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // sign in using google
    const signInUsingGoogle = () => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider);
    }

    // Get the currently signed-in user
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });
        return (() => unSubscribed);
    }, [])

    // signout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        isLoading,
        error,
        setError,
        setUser,
        setIsLoading,
        createUsingEmailPassword,
        signInUsingGoogle,
        signInUsingEmailandPass,
        logOut
    }
};

export default useFirebase;