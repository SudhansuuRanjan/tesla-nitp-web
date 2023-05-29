import React from 'react'
import { Link } from 'react-router-dom'

const Heading2 = ({ text1,text2 }) => {
    return (
        <div>
            <h1 className='font-bold lg:text-3xl md:text-3xl text-3xl  mb-0'>{text1} <span className='text-sky-500'>{text2}</span></h1>
            <p className='text-gray-500 mt-4 max-w-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab deserunt aliquam ducimus debitis distinctio laudantium similique dolore harum autem.
            </p>
            <Link to='/about' className='text-white decoration-wavy visited:text-white no-underline decoration-white font-medium'>
                <p className='no-underline mt-4'>Discover our events  &gt;</p>
            </Link>
        </div>
    )
}

export default Heading2