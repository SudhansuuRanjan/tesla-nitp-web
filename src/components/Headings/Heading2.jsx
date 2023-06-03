import React from 'react'
import { Link } from 'react-router-dom'

const Heading2 = ({ text1,text2 }) => {
    return (
        <div data-aos="fade-right">
            <h1 className='font-bold lg:text-3xl md:text-3xl text-3xl  mb-0'>{text1} <span className='text-sky-500'>{text2}</span></h1>
            <p className='text-gray-500 mt-4 max-w-2xl'>
                We are proud to collaborate with leading global companies, bringing you unparalleled opportunities for internships, projects, and industry exposure.
            </p>
            <Link to='/about_partners' className='text-white decoration-wavy visited:text-white no-underline decoration-white font-medium'>
                <p className='no-underline mt-4'>Discover our Partner events  &gt;</p>
            </Link>
        </div>
    )
}

export default Heading2