import React from 'react'
import './HomePage.scss'

const HomePage = () => {
  document.title = 'Tesla NIT Patna | Home';
  return (
    <div className='pt-16 '>
      <div className='justify-center flex items-center my-[8rem] flex-col text-5xl font-bold'>
        <h1 className='font-extrabold text-transparent lg:text-8xl md:text-6xl text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Official Website of</h1>
        <h1 className='font-extrabold text-transparent lg:text-7xl md:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-sky-600 mt-2'>Tesla NIT Patna</h1>
      </div>
    </div>
  )
}

export default HomePage