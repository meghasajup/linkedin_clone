import React, { useState } from 'react'
import Card from './Card'
import user from '../assets/user1.png'
import post1 from '../assets/post1.png'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';

const Post = () => {

    const [seeMore, setSeeMore] = useState(false);

    const [comment, setComment] = useState(false);

    const handleSendComment = (e) => {
        e.preventDefault();
    }

    // Dummy post description
    const desc = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dolores, vitae reiciendis asperiores dolorum accusantium iusto nulla dicta voluptatum omnis corporis esse vero eaque. Excepturi hic id aut maxime ut?'

    return (
        <Card padding={0}>
            
            {/* USER INFO SECTION */}
            <div className='flex gap-3 p-4'>
                <div className='w-12 h-12 rounded-4xl'>
                    <img 
                        src={user} 
                        className='rounded-4xl w-12 h-12 border-2 border-white cursor-pointer' 
                    />
                </div>
                <div>
                    <div className='text-lg font-semibold'>Dummy User</div>
                    <div className='text-xs text-gray-500'>MERN Stack Developer</div>
                </div>
            </div>

            {/* POST DESCRIPTION */}
            <div className='text-md p-4 my-3 whitespace-pre-line flex-grow'>
                {/* Toggle between short and full description */}
                {seeMore ? desc : `${desc.slice(0, 50)}.....`} 
                
                {/* Toggle button */}
                <span 
                    onClick={() => setSeeMore(prev => !prev)} 
                    className='cursor-pointer text-gray-500'
                >
                    {seeMore ? "see Less" : "See More"}
                </span>
            </div>

            {/* POST IMAGE */}
            <div className='w-[100%] h-[300px]'>
                <img src={post1} className='w-full h-full' />
            </div>

            {/* LIKE & COMMENT COUNT */}
            <div className='my-2 p-4 flex justify-between items-center'>
                <div className='flex gap-1 items-center'>
                    <ThumbUpAltIcon sx={{ color: "blue", fontsize: 12 }} /> 
                    <div className='text-sm text-gray-600'>1 Likes</div>
                </div>

                <div className='flex gap-1 items-center'>
                    <div className='text-sm text-gray-600'>2 Comments</div>
                </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className='flex p-1'>
                <div className='w-[33%] justify-center flex gap-2 items-center border-r-2 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'>
                    <ThumbUpAltIcon sx={{ fontSize: 22, color: "blue" }} /> 
                    <span>Like</span> 
                </div>

                {/* Open comment section */}
                <div 
                    onClick={()=>setComment(true)} 
                    className='w-[33%] justify-center flex gap-2 items-center border-r-2 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'
                >
                    <CommentIcon sx={{ fontSize: 22 }} /> 
                    <span>Comment</span> 
                </div>

                <div className='w-[33%] justify-center flex gap-2 items-center border-r-2 border-gray-100 p-2 cursor-pointer hover:bg-gray-100'>
                    <SendIcon sx={{ fontSize: 22 }} /> 
                    <span>Share</span> 
                </div>
            </div>

            {/* COMMENT SECTION */}
            {
                comment && (
                    <div className='p-4 w-full'>
                        
                        {/* INPUT COMMENT */}
                        <div className='flex gap-2 items-center'>
                            <img src={user} className='rounded-full w-12 h-12 border-2 border-white cursor-pointer' />

                            <form 
                                className='w-full flex gap-2' 
                                onSubmit={handleSendComment}
                            >
                                <input 
                                    placeholder='Add a comment...' 
                                    className='w-full border-2 py-3 px-5 rounded-3xl hover:bg-gray-100' 
                                />
                                <button 
                                    type='submit' 
                                    className='cursor-pointer bg-blue-800 text-white rounded-3xl py-1 px-3'
                                >
                                    Send
                                </button>
                            </form>
                        </div>

                        {/* OTHER USERS' COMMENTS */}
                        <div className='w-full p-4'>
                            <div className='my-4'>
                                <div className='flex gap-3'>
                                    <img src={user} className='rounded-full w-10 h-10 border-2 border-white cursor-pointer' />
                                    <div className='cursor-pointer'>
                                        <div className='text-md'>Dummy User</div>
                                        <div className='text-sm text-gray-500'>Freelancer MERN Stack Developer</div>
                                    </div>
                                </div>

                                <div className='px-11 my-2'>
                                    Hi this is beautiful
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </Card>
    )
}

export default Post