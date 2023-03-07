import React, { useEffect, useState } from 'react'

import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';


initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');


    //handle google popup sign in
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
    
                setUser(result.user)
            }).catch(err => {

                setErrorMsg(err.maassege)
            })
    }

    // remembering auth state
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user){
            setUser(user)
                
                
            } else {
               setUser({})
            }
        });
    },[])

    return {

        user,
        setUser,
        errorMsg,
        handleGoogleSignIn,
    }


}

export default useFirebase