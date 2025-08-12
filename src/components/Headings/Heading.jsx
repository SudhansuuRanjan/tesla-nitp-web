import React from 'react'
import './Heading.scss'

const Heading = ({ heading }) => {
    return (
        <h1 data-aos="fade-right" className='font-extrabold text-transparent lg:text-8xl md:text-7xl text-6xl bg-clip-text bg-gradient-to-r from-blue-400  to-sky-600 m-10 large-heading mt-16'>{heading}</h1>
    )
}

export default Heading

