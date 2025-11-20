import React from 'react'
import Card from './Card'
import mern from '../assets/MERN.png'
import user from '../assets/user1.png'

const ProfileCard = () => {
  return (
    <Card padding={0}>
      <div className='relative h-25'>
        <div className='relative w-full h-22 rounded-md'>
          <img src={mern} className='rounded-t-md h-full w-full' />
        </div>

        <div className='absolute top-14 left-6 z-10'>
          <img src={user} alt="Image" className='rounded-full border-2 h-16 w-16 border-white cursor-pointer' />
        </div>
      </div>

      <div className='p-5'>
        <div className='text-xl'>Megha Saju P</div>
        <div className='text-sm my-1'>MERN Stack Developer</div>
        <div className='text-sm my-1'>Bangalore, India</div>
        <div className='text-sm my-1'>Freelancer</div>
      </div>
    </Card>
  )
}

export default ProfileCard
