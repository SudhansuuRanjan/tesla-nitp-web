import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import transition from '../../utils/transition';


const Resources = () => {
    const { type } = useParams("");

    return (
        <div className='pt-20 relative min-h-[70vh]'>
            <div className='m-auto lg:mx-32 md:mx-10 mx-5'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl leading-normal font-bold my-5'>
                    <span className='text-sky-500'>{type[0].toUpperCase() + type.substring(1)}</span>
                </h1>
                <div className='border-t-[1px] border-t-gray-800 py-8'>
                    <CurrentView />
                </div>
            </div>
        </div>
    )
}

export default transition(Resources);

const CurrentView = () => {
    return (
        <div className='flex items-center flex-col justify-center px-6'>
            <p className='text-xl font-semibold pt-24'>This page is under development.</p>
            <p className='text-lg font-medium text-sky-500'>Please check again later!</p>
            <Link className='px-8 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full mt-12' to='/'>Go to Home</Link>
        </div>
    )
}