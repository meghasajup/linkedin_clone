import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar2.css'
import user1 from '../../assets/user1.png'
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import user from '../../assets/user1.png'
import { useLocation } from 'react-router-dom';

const Navbar2 = () => {

    // State for controlling search dropdown visibility
    const [dropDown, setDropDown] = useState(false);

    // Get current route path for highlighting active menu icon
    const location = useLocation();

    console.log(location);

    return (
        //navbar fixed at top
        <div className='bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-1000'>

            {/* Left side: Logo + Search bar */}
            <div className='flex gap-2 items-center'>

                {/* Logo */}
                <div>
                    <img src={logo} alt="Logo" className='w-12 h-9' />
                </div>

                {/* Search bar */}
                <div className='relative'>
                    <input
                        className='searchInput w-70 bg-gray-100 rounded-sm h-10 px-4'
                        placeholder='search'
                        // Show dropdown on focus
                        onFocus={() => setDropDown(true)}
                        // Hide dropdown on blur
                        onBlur={() => setDropDown(false)}
                    />

                    {/* Search result dropdown */}
                    {
                        dropDown && (
                            <div className='absolute w-88 left-0 bg-gray-200'>
                                <div className='flex gap-2 mb-1 items-center cursor-pointer'>
                                    <div><img src={user1} className='w-10 h-10 rounded-full' /></div>
                                    <div>Abhin</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            {/* Right side navigation items*/}
            <div className='hidden gap-10 md:flex'>

                {/* Home */}
                <div className='flex flex-col items-center cursor-pointer'>
                    <HomeIcon sx={{ color: location.pathname === '/feed' ? "black" : "gray" }} />
                    <div className={`text-sm text-gray-500 ${location.pathname === '/feed' ? "border-b-2" : ""}`}>Home</div>
                </div>

                {/* My Network */}
                <div className='flex flex-col items-center cursor-pointer'>
                    <GroupsIcon sx={{ color: location.pathname === '/mynetwork' ? "black" : "gray" }} />
                    <div className={`text-sm text-gray-500 ${location.pathname === '/mynetwork' ? "border-b-2" : ""}`}>My network</div>
                </div>

                {/* Resume */}
                <div className='flex flex-col items-center cursor-pointer'>
                    <WorkIcon sx={{ color: location.pathname === '/resume' ? "black" : "gray" }} />
                    <div className={`text-sm text-gray-500 ${location.pathname === '/resume' ? "border-b-2" : ""}`}>Resume</div>
                </div>

                {/* Messages */}
                <div className='flex flex-col items-center cursor-pointer'>
                    <MessageIcon sx={{ color: location.pathname === '/messages' ? "black" : "gray" }} />
                    <div className={`text-sm text-gray-500 ${location.pathname === '/messages' ? "border-b-2" : ""}`}>Message</div>
                </div>

                {/* Notifications */}
                <div className='flex flex-col items-center cursor-pointer'>
                    <div>
                        <NotificationsActiveIcon sx={{ color: location.pathname === '/notifications' ? "black" : "gray" }} />
                        {/* Notification badge */}
                        <span className='px-2 py-1 rounded-full text-sm bg-red-700 text-white'>1</span>
                    </div>
                    <div className={`text-sm text-gray-500 ${location.pathname === '/notifications' ? "border-b-2" : ""}`}>Notification</div>
                </div>

                {/* User Profile */}
                <div className='flex flex-col items-center cursor-pointer'>
                    <img src={user} className='w-8 h-7 rounded-full' />
                    <div className='text-sm text-gray-500'>Me</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar2
