import React from 'react'
import { Login } from './Login'
import { Register } from './Register'

export const AuthPage = () => {
  return (
    <div>
      <h1>Welcome to Flash Bot 👟</h1>   

        <Login />
        <Register />

              {/* about us section begins */}
      <h2>About Us</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <img
          src="https://th.bing.com/th/id/OIP.S2S8d0mhY0492hBSZLfzDQHaFS?w=264&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        />
      </div>
      {/* about us section ends */}
    </div>
  )
}
