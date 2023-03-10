import React, { useEffect, useState } from 'react'

import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';


initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true)




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
                // const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage)
                // ..
            });
    }
    //create account using email and password
    const createUserUsingEmailPass = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                isLoading(false)
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage)
                // ..
            });
    }
    //log in user by email and pass
    const logInUsingEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user)
                setIsLoading(false)
                setErrorMsg('')

            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage)
            });
    }

    // remembering auth state
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setIsLoading(false)
                getIdToken(user)
                    .then(idToken => {
                      
                        localStorage.setItem('idToken', idToken)
                    })

            } else {
                setUser({})
            }
        });
    }, [])

    return {

        user,
        setUser,
        errorMsg,
        setErrorMsg,
        handleGoogleSignIn,
        handleSignOut,
        createUserUsingEmailPass,
        logInUsingEmailPass,
        isLoading,
        setIsLoading
    }


}

export default useFirebase