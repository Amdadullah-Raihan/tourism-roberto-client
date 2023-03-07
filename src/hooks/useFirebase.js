import React, { useEffect, useState } from 'react'

import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';


initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    


    //handle google popup sign in
    const handleGoogleSignIn = () => {
  
        return signInWithPopup(auth, googleProvider)

    }
    //handle log out
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
           
            }).catch((error) => {

            });
    }

    // remembering auth state
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setIsLogged(true)

            } else {
                setUser({})
            }
        });
    }, [])

    return {

        user,
        setUser,
        errorMsg,
        handleGoogleSignIn,
        handleSignOut,
        isLogged, 
    }


}

export default useFirebase