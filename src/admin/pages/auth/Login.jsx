import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
  document.title = 'Tesla NIT Patna | Admin | Login';

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="login__container rounded-lg p-5 border">
          <h1 className='bg'>Admin Login</h1>
          <Link to="/admin/dashboard">
            <button className="px-8 py-2 my-3 bg-sky-500 rounded-full">Login</button>
          </Link>
        </div>
    </div>
  )
}

export default Login