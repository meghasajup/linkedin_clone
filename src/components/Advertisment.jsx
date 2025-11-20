import React from 'react'
import Card from './Card'
import landing from '../assets/landingpage_img.png'
import user from '../assets/user1.png'

const Advertisment = () => {
    return (
        <div className='sticky top-18'>
            <Card padding={0}>
                <div className='relative h-25'>
                    <div className='relative w-full h-22 rounded-md'>
                        <img src={landing} className='rounded-t-md h-full w-full' />
                    </div>

                    <div className='absolute top-14 left-[40%] z-10'>
                        <img src={user} alt="Image" className='rounded-full border-2 h-14 w-14 border-white cursor-pointer' />
                    </div>
                </div>

                <div className='px-5 my-5 mx-auto'>
                    <div className='text-sm font-semibold text-center'>Megha Saju P</div>
                    <div className='text-sm my-3 text-center'>Get the latest jobs and industry news</div>
                    <div className='text-sm my-1 border-1 text-center p-2 rounded-2xl font-bold border-blue-950 text-white bg-blue-800 cursor-pointer'>Explore</div>
                </div>

            </Card>
        </div>
    )
}

export default Advertisment
