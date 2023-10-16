import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;