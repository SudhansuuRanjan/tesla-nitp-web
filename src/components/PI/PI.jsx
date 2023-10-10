import React from 'react'

const PI = () => {
    return (
        <div data-aos="zoom-in" className='flex items-center justify-center py-16'>
            <div className='bg-gray-900 bg-opacity-50 backdrop-blur-md pb-20 lg:p-10 md:p-8 p-6 rounded-3xl'>
                <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold text-sky-500 text-center pb-8'>Message from our PI</h1>
                <div className='flex lg:flex-row md:flex-row flex-col items-center lg:gap-10 md:gap-6 gap-6'>
                    <div>
                        <div className='flex items-center justify-center h-[9rem] w-[9rem] overflow-hidden rounded-full'>
                            <img className='hover:scale-[103%] transition-all delay-75 ease-in' src="/images/PI.jpg" alt="PI Photo" height={144} width={144}/>
                        </div>
                        <div className='text-center pt-3'>
                            <p className='font-medium text-lg'>Dr. Amitesh Kumar</p>
                            <p className='text-sm text-gray-200'>NITP Professor (EED)</p>
                            <p className='text-sm text-sky-500'>Professor Incharge</p>
                        </div>
                    </div>
                    <div className='max-w-[34rem] text-justify'>
                        <p>
                            I whole-heartedly welcome you all to TESLA (Technical Electrical Society for Learning and Application), a club of NIT Patna focussed on activities and events carried out by electrical engineers.

                            The initiative for the formation of this club has been taken by a bunch of electrical engineering undergrads of 2019 with the vision of providing innovative programs and services for Electrical Engineering students of NIT Patna to lead, influence, and contribute to their communities locally, nationally, and globally. In this short span of time, TESLA managed to conduct few events in which appreciable number of students participated. TESLA will continue to conduct such engaging events to increase & motivate the students to take part in them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PI