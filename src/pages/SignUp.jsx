import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='text-4xl mb-5'>Make the most of your professional life</div>
            <div className='w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10'>

                <div className='flex flex-col gap-4'>
                    <div>
                        <label htmlFor="fullname">Full name</label>
                        <input type="text" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Full name' />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Email' />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Password' />
                    </div>

                    <div className='w-full hover:bg-blue-900 bg-blue-800 text-white py-3 px-4 rounded-lg text-center text-lg cursor-pointer my-2'>
                        Register
                    </div>

                </div>

                <div className='flex items-center gap-2'>
                    <div className='border-b-2 border-gray-400 w-[45%]' /> <div>or</div> <div className='border-b-2 border-gray-400 w-[45%]'></div>
                </div>

                <div>Google</div>

            </div>

            <Link to={'/login'} className='mt-4 mb-10'>Already on LinkedIn?<span className='text-blue-800 cursor-pointer'>Sign in</span></Link>

        </div>
    )
}

export default SignUp
