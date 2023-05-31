import React from 'react'

const Heading1 = ({ text1, text2, details }) => {
    return (
        <div data-aos="fade-right">
            <h1 className='font-bold lg:text-4xl md:text-3xl text-2xl  mb-0'>{text1} <span className='text-sky-500'>{text2}</span></h1>
            <p className='text-slate-500 lg:text-base md:text-base text-sm  mt-3 max-w-xl'>
                {details ? details : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab deserunt aliquam ducimus debitis distinctio laudantium similique dolore harum autem."}
            </p>
        </div>
    )
}

export default Heading1