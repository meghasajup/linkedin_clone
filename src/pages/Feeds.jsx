import React, { useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import Card from '../components/Card'
import user from '../assets/user1.png'
import VideocamIcon from '@mui/icons-material/Videocam';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';
import Advertisment from '../components/Advertisment';
import Post from '../components/Post';
import Modal from '../components/Modal';

const Feeds = () => {

    const [addPostModal,setAddPostModal] = useState(false);

    return (
        <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>

            {/* ---------------- LEFT SIDE SECTION ---------------- */}
            <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
                
                {/* Profile Card */}
                <div className='h-fit'>
                    <ProfileCard />
                </div>

                {/* Profile card */}
                <div className='w-full my-5'>
                    <Card padding={1}>
                        <div className='w-full flex justify-between'>
                            <div>Profile Viewers</div>
                            <div className='text-blue-900'>23</div>
                        </div>
                        <div className='w-full flex justify-between'>
                            <div>Post Impressions</div>
                            <div className='text-blue-900'>90</div>
                        </div>
                    </Card>
                </div>
            </div>


            {/* ---------------- MIDDLE FEED SECTION ---------------- */}
            <div className='w-[100%] py-5 sm:w-[50%]'>

                {/* Post creation section */}
                <div>
                    <Card padding={1}>
                        {/* Input-like area to start a post */}
                        <div className='flex gap-2 items-center'>
                            <img src={user} className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer' 
                            />
                            <div className='w-full border-2 py-3 px-3 rounded-3xl cursor-pointer'>
                                Start a post
                            </div>
                        </div>

                        {/* Post type options */}
                        <div className='w-full flex mt-3'>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'>
                                <VideocamIcon sx={{color:"green"}} />Video
                            </div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'>
                                <ImageIcon sx={{color:"blue"}} />Photo
                            </div>
                            <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100'>
                                <DescriptionIcon sx={{color:"orange"}} />Article
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Divider line */}
                <div className='border-b-2 border-gray-300 w-[100%] my-5' />

                {/* Feed posts list */}
                <div className='w-full flex flex-col gap-5'>
                    <Post />

                    <Post />
                </div>
            </div>


            {/* ---------------- RIGHT SIDE SECTION ---------------- */}
            <div className='w-[26%] py-5 hidden md:block'>
                
                {/* LinkedIn news card */}
                <div>
                    <Card padding={1}>
                        <div className='text-xl'>LinkedIn News</div>
                        <div className='text-gray-600'>Top stories</div>

                        {/* News item 1 */}
                        <div className='my-1'>
                            <div className='text-md'>Buffett to remain Berkshire chair</div>
                            <div className='text-xs'>2h ago</div>
                        </div>

                        {/* News item 2 */}
                        <div className='my-1'>
                            <div className='text-md'>Foreign investments surge again</div>
                            <div className='text-xs'>3h ago</div>
                        </div>
                    </Card>
                </div>

                {/* Advertisement section */}
                <div className='my-5 sticky top-15'>
                    <Advertisment />
                </div>
            </div>
            
        </div>
    )
}

export default Feeds