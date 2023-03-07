
import React from 'react'
import useFirebase from '../../hooks/useFirebase'

const Login = () => {

    const {user, errorMsg, handleGoogleSignIn} = useFirebase();
    

    return (
        <div className='min-h-[31vh] w-full py-16'>
            
            <div className='max-w-md mx-auto border my-16 flex items-center justify-center h-60 '>

                <button onClick={handleGoogleSignIn} className="btn">Continue with Google</button>
                <p>{errorMsg}</p>

          </div>

        </div>
    )
}

export default Login