import React from 'react'
import LandingPageImg from '../assets/landingpage_img.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='my-4 py-[50px] md:pl-[120px] px-5 md:flex justify-between'>
            <div className='md:w-[40%] flex flex-col items-center'>
                <div className='text-4xl mx-auto text-gray-500 text-center'>
                    Welcome To Your Professional Community
                </div>

                <div className='my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-3xl w-[70%] text-black cursor-pointer'>
                    Google
                </div>

                <div className='flex mx-auto mt-[20px] py-2 px-2 bg-white gap-2 rounded-3xl items-center w-[70%] justify-center text-black hover:bg-gray-100 border-2 cursor-pointer'>
                    Sign in with email
                </div>

                <div className='mx-auto mb-4 text-sm w-[70%] mt-6 text-center'>
                    By clicking Continue to join or sign in, you agree to
                    <span className='text-blue-800 cursor-pointer hover:underline'> LinkedIn's User Agreement</span>,
                    <span className='text-blue-800 cursor-pointer hover:underline'> Privacy Policy</span>, and
                    <span className='text-blue-800 cursor-pointer hover:underline'> Cookie Policy.</span>
                </div>

                <Link
                    to={'/signup'}
                    className='text-center text-lg mt-4'
                >
                    New to LinkedIn?
                    <span className='text-blue-800 cursor-pointer hover:underline'> Join now</span>
                </Link>
            </div>


            <div className='md:w-[50%] h-120'>
                <img src={LandingPageImg} alt="image" className='w-full h-full' />
            </div>
        </div>
    )
}

export default LandingPage
