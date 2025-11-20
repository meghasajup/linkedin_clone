import React from 'react'
import { Link } from 'react-router-dom'
import GoogleLog from '../components/GoogleLog'

const Login = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>

            {/* Login card container */}
            <div className='w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10'>

                {/* Title */}
                <div className='text-3xl'>Sign In</div>

                {/* Google login button */}
                <div className='my-5'>
                    <GoogleLog />
                </div>

                {/* OR line */}
                <div className='flex items-center gap-2'>
                    <div className='border-b-2 border-gray-400 w-[45%]' />
                    <div>or</div>
                    <div className='border-b-2 border-gray-400 w-[45%]'></div>
                </div>

                {/* Email & Password Inputs */}
                <div className='flex flex-col gap-4'>

                    {/* Email field */}
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Email' />
                    </div>

                    {/* Password field */}
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Password' />
                    </div>

                    {/* Login button */}
                    <div className='w-full hover:bg-blue-900 bg-blue-800 text-white py-3 px-4 rounded-lg text-center text-lg cursor-pointer my-2'>
                        Login
                    </div>
                </div>
            </div>

            {/* Signup redirect link */}
            <div className='mt-4 mb-26'>
                New to LinkedIn?
                <Link to='/signup' className="text-blue-800"> Join Now</Link>
            </div>

        </div>
    )
}

export default Login
