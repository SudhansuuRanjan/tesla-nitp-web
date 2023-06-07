import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const AdminLayout = ({children}) => {
  return (
    <div className='relative'>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )
}

export default AdminLayout