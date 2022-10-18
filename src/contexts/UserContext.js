import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading]=useState(true)

    const googleProvider = new GoogleAuthProvider();

    // registration auth
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in auth
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // sign out auth
    const logOut = () => {
        return signOut(auth);
    }

    // jehetu outside e jabe tai useEffect use korte hobe, current user ke ekjayga theke barbar pawar jonno ei kaj,, jehetu kon jaygay change hobe jana jacce na tai ekta variable e rekhe unsubscribe kora hoyeche 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state changes', currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, createUser, signIn,signInWithGoogle, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;