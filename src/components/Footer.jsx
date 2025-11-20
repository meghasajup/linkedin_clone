import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='w-[100%] bg-gray-200 flex justify-center'>
            <div className='md:p-3 w-[100%] flex flex-col items-center py-4'>
                {/* Logo */}
                <div className='flex gap-0 items-center cursor-pointer'>
                    <h3 className='text-blue-800 font-bold text-xl'>Linked</h3>
                    <img src={logo} alt="Logo" className='w-9 h-6' />
                </div>
                <div className='text-sm'>©Copyright 2025</div>
            </div>
        </div>
    )
}

export default Footer
