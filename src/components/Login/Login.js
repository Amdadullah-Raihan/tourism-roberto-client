
import { stringify } from 'postcss';
import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase'

const Login = () => {

    const { user, handleGoogleSignIn, setUser } = useFirebase();
    const location = useLocation();
    const navigate = useNavigate();


    const redirect_uri = location.state?.from.pathname || '/'
    console.log(redirect_uri);

    const handleRedirect = () => {
        handleGoogleSignIn()
            .then(result => {
                setUser(result.user)
                // navigate(redirect_uri)
            })
    }

    return (
        <div className='min-h-[31vh] w-full py-16'>

            <div className='max-w-md mx-auto border my-16 flex items-center justify-center h-60 '>

                <button onClick={handleRedirect} className="btn">Continue with Google</button>
               

            </div>

        </div>
    )
}

export default Login