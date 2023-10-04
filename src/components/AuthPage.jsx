import React from 'react'
import { Login } from './Login'
import { Register } from './Register'
import { AuthAboutUs } from './AuthAboutUs'

export const AuthPage = () => {
  return (
    <div className=''>
      <style type='text/css'>
        {`
          .authTitle {
            font-weight: bold;
            font-family: fantasy;
            letter-spacing: 5px;
            text-align:center;
            margin: 3rem 0rem;
          }
          
        `}
      </style>

      <h1 className='authTitle'>Welcome to Flash Bot 👟</h1>   

        <Login />
        <Register />
        <AuthAboutUs />
 
    </div>
  )
}
