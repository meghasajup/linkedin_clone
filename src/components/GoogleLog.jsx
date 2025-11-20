import React from 'react'
import { GoogleLogin } from '@react-oauth/google'

const GoogleLog = () => {

  const handleOnSucess = (credentialResponse) => {
    console.log(credentialResponse)
  }

  return (
    <div className='w-full'>
      <GoogleLogin
        onSuccess={(credentialResponse) => handleOnSucess(credentialResponse)}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  )
}

export default GoogleLog
