
import { stringify } from 'postcss';
import React, { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { user, handleGoogleSignIn, setUser, createUserUsingEmailPass, errorMsg, setErrorMsg } = useFirebase();
 
    //handle log in
    const handleRedirect = () => {
        handleGoogleSignIn()
            .then(result => {
                setUser(result.user)
            })
    }
    //create user
    const handleCreateUser = e =>{
        e.preventDefault()
        if(password.length < 6){
            setErrorMsg('Password must be at least 6 characters long')
            return;
        }
        createUserUsingEmailPass(email, password)
    }

    return (
        <div className='min-h-[31vh] w-full py-16'>

            <div className='max-w-md md:mx-auto border mx-6 md:my-16 flex flex-col items-center justify-center rounded-lg'>
                <h1 className='mt-4 text-2xl uppercase'>Sign Up</h1>
                <form className='w-full p-4 text-start' onSubmit={handleCreateUser}>

                    <label htmlFor="">Email</label>

                    <input type="email" className='border w-full mb-4 h-12 px-4' placeholder='Enter your email address' required onBlur={(e)=>setEmail(e.target.value)} /> <br />

                    <label htmlFor="">Password</label>

                    <input type="password" className='border w-full mb-4 h-12 px-4' placeholder='Enter your password' onBlur={(e) => setPassword(e.target.value)} required/> <br />
                    <p className='text-red-500 mb-4'>{errorMsg}</p>
                    <p className='text-gray-500'>Already have an account? <Link className='text-blue-500 underline' to="/login">Login</Link></p> <br />

                    <input type="submit" value="sign up " className='btn px-12 rounded-full bg-teal-500 border-none' />
                    <div className="divider ">OR</div>
                    <input onClick={handleRedirect} type="button" className='btn btn-outline border-teal-500 rounded-full w-full' value="Continue with google" />

                </form>



            </div>

        </div>
    )
}

export default Login