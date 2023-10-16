import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className='relative'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AdminLayout