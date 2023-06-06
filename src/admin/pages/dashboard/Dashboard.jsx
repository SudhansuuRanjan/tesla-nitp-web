import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';

const Dashboard = () => {
  document.title = 'Tesla NIT Patna | Admin Dashboard';

  const data = [
    {
      id: 1,
      title: 'Total Blogs',
      count: 68,
      link: '/admin/blogs'
    },
    {
      id: 2,
      title: 'Total Team Members',
      count: 68,
      link: '/admin/team'
    },
    {
      id: 3,
      title: 'Total Events',
      count: 13,
      link: '/admin/events'
    },
    {
      id: 4,
      title: 'Total Projects',
      count: 68,
      link: '/admin/projects'
    },
    {
      id: 5,
      title: 'Total Photos',
      count: 68,
      link: '/admin/gallery'
    },
    {
      id: 6,
      title: 'Notes & Resources',
      count: 18,
      link: '/admin/notes'
    }
  ]

  return (
    <div className='pt-16'>
      <h1 className='text-center mt-16 font-bold text-sky-500 lg:text-5xl text-4xl'>Admin Dashboard</h1>

      <div className='pt-16 px-5 flex justify-center lg:gap-10 md:gap-10 gap-5'>
        <div className="g:py-7 md:py-6 py-5 px-5 lg:w-[12rem] md:w-[12rem] w-[40%]  text-center border text-sky-500 border-gray-800 hover:scale-[102%] hover:border-gray-700 hover:bg-[#131313] font-medium delay-[30ms] ease-in transition-all rounded-3xl text-lg">
          <h2 className='text-2xl '> 30000</h2>
          <h1 className='pt-2 text-white text-sm'>Total Visitors</h1>

        </div>

        <div className="lg:py-7 md:py-6 py-5 px-5 lg:w-[12rem] hover:scale-[102%] md:w-[12rem] w-[40%]  text-center border text-sky-500 border-gray-800 hover:border-gray-700 hover:bg-[#131313] font-medium delay-[30ms] ease-in transition-all rounded-3xl text-lg">
          <h2 className='text-2xl'> 20000</h2>
          <h1 className='pt-2 text-white text-sm'>Unique Visitors</h1>
        </div>
      </div>

      <div className='flex flex-wrap gap-10 my-16 items-center justify-evenly mx-10'>

        {data.map((item, idx) => (
          <Link key={item.id} className='lg:w-[24rem] md:w-[20rem] w-[100%] ' to={item.link}>
            <div className="py-7 px-5 flex justify-between text-center border text-white-500  border-[#0f0e0e] bg-[#0f0e0e] hover:border-gray-800  hover:bg-[#141313]  font-medium delay-[30ms] hover:scale-[101%] ease-in transition-all rounded-2xl text-lg">
              <div className='flex gap-4  hover:white'>
                <div className='text-5xl'>
                  {item.count}
                </div>
                <div className='flex flex-col items-start'>
                  <h1 className='text-xl text-white-800 '>Total</h1>
                  <h2 className='my-2 text-sm text-sky-500'>{item.title}</h2>
                </div>
              </div>

              <div className='flex items-center'>
                <a className='hover:scale-105 transition-all delay-[20ms] ease-in' >
                  <FaArrowRight size={22} color='grey' />
                </a>
              </div>
            </div>
          </Link>))}
      </div>
    </div>
  )
}

export default Dashboard