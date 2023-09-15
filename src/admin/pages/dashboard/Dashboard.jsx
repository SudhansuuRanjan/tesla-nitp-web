import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import { useQueries } from '@tanstack/react-query';
import { getDocuments } from '../../../services/document';
import { getCounter } from '../../../services/counter';
import Loader from '../../../components/Loader';

const Dashboard = () => {

  useEffect(() => {
    document.title = 'Tesla NIT Patna | Admin Dashboard';
  }, []);

  const results = useQueries({
    queries: [
      {
        queryKey: ['news'],
        queryFn: () => getDocuments('news'),
        staleTime: Infinity
      },
      {
        queryKey: ['events'],
        queryFn: () => getDocuments('events'),
        staleTime: Infinity
      },
      {
        queryKey: ['projects'],
        queryFn: () => getDocuments('projects'),
        staleTime: Infinity
      },
      {
        queryKey: ['members'],
        queryFn: () => getDocuments('members'),
        staleTime: Infinity
      },
      {
        queryKey: ['gallery'],
        queryFn: () => getDocuments('gallery'),
        staleTime: Infinity
      },
      {
        queryKey: ['counter'],
        queryFn: () => getCounter(),
        staleTime: Infinity
      },
    ]
  });

  return (
    <div className='pt-16'>
      <h1 className='text-center mt-16 font-bold text-sky-500 lg:text-5xl md:text-4xl text-3xl'>Admin Dashboard</h1>

      {results[5].isLoading ? <div className='flex justify-center items-center w-full h-32'><Loader /></div> : results[5].isError ? <div>Something went wrong...</div> : <div className='pt-16  flex justify-center lg:gap-10 md:gap-10 gap-5'>
        <div className="g:py-7 md:py-6 py-5 px-5 lg:w-[12rem] md:w-[12rem] w-[40%]  text-center border text-sky-500 border-gray-800 hover:scale-[102%] hover:border-gray-700 hover:bg-[#131313] font-medium delay-[30ms] ease-in transition-all rounded-3xl text-lg">
          <h2 className='text-2xl '>{results[5].data[0].total}</h2>
          <h1 className='pt-2 text-white text-sm'>Total Page Visits</h1>

        </div>

        <div className="lg:py-7 md:py-6 py-5 px-5 lg:w-[12rem] hover:scale-[102%] md:w-[12rem] w-[40%]  text-center border text-sky-500 border-gray-800 hover:border-gray-700 hover:bg-[#131313] font-medium delay-[30ms] ease-in transition-all rounded-3xl text-lg">
          <h2 className='text-2xl'>{results[5].data[0].unique}</h2>
          <h1 className='pt-2 text-white text-sm'>Unique Visitors</h1>
        </div>
      </div>}

      <div className='max-w-[60rem] grid lg:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr)] md:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr)] grid-cols-[minmax(100px,_1fr)] gap-10 lg:px-10 md:px-10 px-8 m-auto my-16'>
        {
          results.slice(0, 5).map((response, idx) => {
            return <DashboardItem key={idx} response={response} idx={idx} />
          })
        }
      </div>
    </div>
  )
}

export default Dashboard;


const DashboardItem = ({ response, idx }) => {
  const data = [
    {
      title: 'Blogs',
      link: '/admin/blogs'
    },
    {
      title: 'Team Members',
      link: '/admin/team'
    },
    {
      title: 'Events',
      link: '/admin/events'
    },
    {
      title: 'Projects',
      link: '/admin/projects'
    },
    {
      title: 'Photos',
      link: '/admin/gallery'
    },
  ]
  return (
    <Link className='' to={data[idx].link}>
      <div className="py-7 px-5 flex justify-between text-center border text-white-500  border-[#0f0e0e] bg-[#0f0e0e] hover:border-gray-800  hover:bg-[#141313]  font-medium delay-[30ms] hover:scale-[101%] ease-in transition-all rounded-2xl text-lg">
        <div className='flex gap-4 items-center  hover:white'>
          {response.isLoading ? <Loader /> : response.isError ? <div className='text-5xl'>NA</div> : <div className='lg:text-5xl text-4xl mr-3'>
            {response.data.length}
          </div>}
          <div className='flex flex-col items-start'>
            <h1 className='text-xl text-white-800 '>Total</h1>
            <h2 className='my-2 text-sm text-sky-500'>{data[idx].title}</h2>
          </div>
        </div>

        <div className='flex items-center'>
          <p className='hover:scale-105 transition-all delay-[20ms] ease-in' >
            <FaArrowRight size={22} color='grey' />
          </p>
        </div>
      </div>
    </Link>
  )
}