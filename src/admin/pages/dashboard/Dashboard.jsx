import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  document.title = 'Tesla NIT Patna | Admin Dashboard';

  return (
    <div className='pt-16'>
      <h1 className='text-center mt-10 font-bold text-sky-500 text-4xl'>Admin Dashboard</h1>
      <div className='flex flex-wrap gap-10 my-10 mx-5'>
        <Link to="/admin/blogs">
          <div className="py-7 px-5 w-[12rem] text-center border text-sky-500 border-sky-500 hover:bg-sky-500 hover:text-black font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">Blogs</div>
        </Link>
        <Link to="/admin/gallery">
          <div className="py-7 px-5 w-[12rem] text-center border text-sky-500 border-sky-500 hover:bg-sky-500 hover:text-black font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">Gallery</div>
        </Link>
        <Link to="/admin/projects">
          <div className="py-7 px-5 w-[12rem] text-center border text-sky-500 border-sky-500 hover:bg-sky-500 hover:text-black font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">Projects</div>
        </Link>
        <Link to="/admin/events">
          <div className="py-7 px-5 w-[12rem] text-center border text-sky-500 border-sky-500 hover:bg-sky-500 hover:text-black font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">Events</div>
        </Link>
        <Link to="/admin/team">
          <div className="py-7 px-5 w-[12rem] text-center border text-sky-500 border-sky-500 hover:bg-sky-500 hover:text-black font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">Team</div>
        </Link>
        <Link to="/admin/profile">
          <div className="py-7 px-5 w-[12rem] text-center border text-sky-500 border-sky-500 hover:bg-sky-500 hover:text-black font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">Profile</div>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard