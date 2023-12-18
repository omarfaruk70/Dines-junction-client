import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../config/firebase.config';

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login user with previous credientials
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password)
    }

    // login with google
    const googleLogin = () =>{
       setLoading(true);
       return signInWithPopup(auth, googleProvider)
    }

    // login with github (fun fact: not necessary, but as a dev🫡)
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // update user profile name and image
    const updateUserProfile = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photourl
        })
    }

    useEffect(()=> {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
      return () => unsubscribe();
    }, [])

    const logOutUser = () => {
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        user,
        logOutUser,
        loading,
        updateUserProfile
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProviders;
AuthProviders.propTypes = {
    children: PropTypes.object
}