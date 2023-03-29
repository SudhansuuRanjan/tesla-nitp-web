import React from 'react'
import './Newsletter.scss'

const News = () => {
  return (
    <>
      <div data-aos="fade-up" className="newsletter-card shadow-md">
        <div className="card-img flex items-center justify-center">
          <img className='hover:scale-[102%] transition-all delay-75 ease-in' src="images/algosession.jpg" alt="Event-image" />
        </div>
        <div className="card-info">
          <p className='text-base text-gray-400 font-medium'>2022-11-01</p>
          <h1 className='text-2xl font-semibold py-1'>Apple Park: Heart of a Trillion Dollar Company</h1>
          <p className='text-base text-gray-400 font-medium'>Apple Park was the dream of Steve Jobs. A headquarter like no other, a structure..</p>
          <a href="#">
            <button>Read →</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default News