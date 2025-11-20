import React from 'react'
import Navbar1 from './components/NavbarV1/Navbar1'
import LandingPage from './pages/LandingPage.jsx'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login.jsx'
import Navbar2 from './components/NavbarV1/Navbar2.jsx'
import Feeds from './pages/Feeds.jsx'

const App = () => {

  const isLogin = true;

  return (
    <div className='bg-gray-100 w-[100%] h-[100%] box-border'>

      {isLogin ? <Navbar2 /> : <Navbar1 />}
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<Feeds />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
