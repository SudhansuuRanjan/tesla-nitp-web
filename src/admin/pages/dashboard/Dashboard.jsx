import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';

const Dashboard = () => {
  document.title = 'Tesla NIT Patna | Admin Dashboard';

  return (
    <div className='pt-16'>
      <h1 className='text-center mt-10 font-bold text-sky-500 text-4xl'>Admin Dashboard</h1>
      <div className='pt-16 px-16 flex justify-center gap-10'>
        <div className="py-7 px-5 w-[12rem]  text-center border text-sky-500 border-gray-500 hover:bg-sky-500 hover:text-black font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">
          <h2 className='text-2xl '> 30000</h2>
          <h1 className='pt-2 text-white text-sm'>Total Visitors</h1>

        </div>

        <div className="py-7 px-5 w-[12rem] text-center border text-sky-500 border-gray-500 hover:bg-sky-500 hover:text-black font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">
          <h2 className='text-2xl'> 20000</h2>
          <h1 className='pt-2 text-white text-sm'>Unique Visitors</h1>
        </div>
      </div>
      <div className='grid grid-cols-2  place-items-center  gap-10 my-16 mx-5'>
        <Link to="/admin/blogs">
          <div className="py-7 px-5 w-[20rem] flex justify-between text-center border text-white-500  border-[#0f0e0e] bg-[#0f0e0e]  hover:bg-sky-500  font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">

            <div className='flex gap-4 items-center hover:white'>
              <div className='text-5xl'>
                18
              </div>
              <div className='flex flex-col items-start' >
                <h1 className='text-xl text-white-800 '>Total</h1>
                <h2 className='my-2 text-sm text-sky-500'>Blogs</h2>
              </div>
            </div>

            <div className='flex items-center'>
              <a className='hover:scale-105 transition-all delay-[20ms] ease-in' >
                <FaArrowRight size={22} color='grey' />
              </a>
            </div>
          </div>

        </Link>
        <Link to="/admin/gallery">
          <div className="py-7 px-5 w-[20rem] flex justify-between text-center border text-white-500  border-[#0f0e0e] bg-[#0f0e0e]  hover:bg-sky-500  font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">

            <div className='flex gap-4  hover:white'>
              <div className='text-5xl'>
                68
              </div>
              <div className='flex flex-col items-start'>
                <h1 className='text-xl text-white-800 '>Total</h1>
                <h2 className='my-2 text-sm text-sky-500'>Team Members</h2>
              </div>
            </div>

            <div className='flex items-center'>
              <a className='hover:scale-105 transition-all delay-[20ms] ease-in' >
                <FaArrowRight size={22} color='grey' />
              </a>
            </div>
          </div>

        </Link>
        <Link to="/admin/projects">
          <div className="py-7 px-5 w-[20rem] flex justify-between text-center border text-white-500  border-[#0f0e0e] bg-[#0f0e0e]  hover:bg-sky-500  font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">

            <div className='flex gap-4 items-center hover:white'>
              <div className='text-5xl'>
                13
              </div>
              <div className='flex flex-col items-start'>
                <h1 className='text-xl text-white-800 '>Total</h1>
                <h2 className='my-2 text-sm text-sky-500'>Events</h2>
              </div>
            </div>

            <div className='flex items-center'>
              <a className='hover:scale-105 transition-all delay-[20ms] ease-in' >
                <FaArrowRight size={22} color='grey' />
              </a>
            </div>
          </div>

        </Link>
        <Link to="/admin/events">
          <div className="py-7 px-5 w-[20rem] flex justify-between text-center border text-white-500  border-[#0f0e0e] bg-[#0f0e0e]  hover:bg-sky-500  font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">

            <div className=' flex gap-4 items-center hover:text-white'>
              <div className='text-5xl'>
                18
              </div>
              <div className='flex flex-col items-start'>
                <h1 className='text-xl text-white-800 '>Total</h1>
                <h2 className='my-2 text-sm text-sky-500'>Projects</h2>
              </div>
            </div>

            <div className='flex items-center'>
              <a className='hover:scale-105 transition-all delay-[20ms] ease-in' >
                <FaArrowRight size={22} color='grey' />
              </a>
            </div>
          </div>

        </Link>
        <Link to="/admin/team">
          <div className="py-7 px-5 w-[20rem] flex justify-between text-center border text-white-500  border-[#0f0e0e] bg-[#0f0e0e]  hover:bg-sky-500  font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">

            <div className='flex gap-4 items-center  hover:white'>
              <div className='text-5xl'>
                38
              </div>
              <div className='flex flex-col items-start'>
                <h1 className='text-xl text-white-800 '>Total</h1>
                <h2 className='my-2 text-sm text-sky-500'>Gallery Photos</h2>
              </div>
            </div>

            <div className='flex items-center'>
              <a className='hover:scale-105 transition-all delay-[20ms] ease-in' >
                <FaArrowRight size={22} color='grey' />
              </a>
            </div>
          </div>

        </Link>
        <Link to="/admin/profile">
          <div className="py-7 px-5 w-[20rem] flex justify-between text-center border text-white-500  border-[#0f0e0e] bg-[#0f0e0e]  hover:bg-sky-500  font-medium delay-[30ms] ease-in transition-all rounded-2xl text-lg">

            <div className='flex gap-4 items-center hover:white'>
              <div className='text-5xl'>
                18
              </div>
              <div className='flex flex-col items-start'>
                <h1 className='text-xl text-white-800 '>Total</h1>
                <h2 className='my-2 text-sm text-sky-500'>Notes & Resources</h2>
              </div>
            </div>

            <div className='flex items-center'>
              <a className='hover:scale-105 transition-all delay-[20ms] ease-in' >
                <FaArrowRight size={22} color='grey' />
              </a>
            </div>
          </div>

        </Link>
      </div>
    </div>
  )
}

export default Dashboard