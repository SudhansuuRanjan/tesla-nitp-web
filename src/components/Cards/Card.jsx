import React from 'react'
import { Link } from 'react-router-dom'
import { BsDot } from 'react-icons/bs'
import CountUp from 'react-countup';

const Card1 = ({title,description,image}) => {
    return (
        <div data-aos="zoom-in" className='w-fit'>
            <div className='border-[1px]  border-gray-800 hover:border-gray-700 rounded-2xl w-[21rem] p-5 hover:scale-[102%] z-0 hover:z-10 bg-[#0a0a0a] transition-all delay-[30ms] ease-in-out'>
                <div className='h-[10rem] rounded flex items-center justify-center overflow-hidden bg-green-500 mb-5'>
                    <img loading='lazy' className='w-auto h-[13rem] bg-cover bg-center' src={image} alt="about" />
                </div>
                <div>
                    <h3 className='text-base font-semibold'>{title}</h3>
                    <p className='text-gray-500 text-sm font-medium leading-5 mt-1'>
                        {
                            description
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

const Card2 = ({ link, image, title, company }) => {
    return (
        <div data-aos="zoom-in" className='rounded-2xl w-[21rem] p-5 hover:scale-[102%] z-0   transition-all delay-[30ms] ease-in-out'>
            <a href={link} target='_blank' className='h-[10rem] flex items-center justify-center overflow-hidden bg-green-500 mb-5 rounded-xl'>
                <img loading='lazy' className='w-auto h-[13rem] bg-cover bg-center rounded-lg' src={image} alt={title} />
            </a>
            <div className='text-center -mt-1'>
                <h3 className='text-lg font-semibold'>{title}</h3>
                <p className='text-sky-500 font-medium'>{company}</p>
            </div>
        </div>
    )
}

const EventCard = ({ data }) => {
    return (
        <div data-aos="zoom-in" className='w-[20rem] p-4 border-2 hover:border-gray-800 hover:scale-[102%] transition-all delay-75 ease-in border-gray-900 rounded-2xl mt-5'>
            <div className='flex relative items-center h-44 overflow-hidden w-full rounded-lg border border-gray-900'>
                <img className='w-full z-0' src={data.image} alt={data.name} />
                <p className='py-1 absolute bottom-2 right-1 z-[5] px-3 rounded-full mt-2 text-sky-500 text-xs  bg-gray-900 w-fit bg-opacity-90'>{data.tag}</p>
            </div>
            <h3 className='text-xl font-semibold pl-2 mt-2'>{data.name}</h3>
            <p className='text-gray-500 text-sm pt-1 pl-2'>{data.description.length > 100 ? data.description.substring(0, 90) + "..." : data.description}</p>
            <div className='bg-gray-800 rounded-lg p-2 flex justify-between mt-2 flex-col'>
                <div className='flex justify-between text-xs'>
                    <div>
                        <p className='text-gray-400'>Date</p>
                        <p className='text-sm'>{data.date}</p>
                    </div>

                    <div className='text-right'>
                        <p className='text-gray-400'>Venue</p>
                        <p className='text-sm'>{data.venue}</p>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div>
                        <p className='text-gray-400 text-xs'>Time</p>
                        <p className='text-sm'>{data.time}</p>
                    </div>

                    <div className='text-right'>
                        <p className='text-gray-400 text-xs'>Reg. Link</p>
                        <a style={{ textDecoration: "none" }} target='_blank' href={data.link} className='text-sm visited:text-sky-500 text-blue-500'>Click</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HighlightCard = ({ type, data, icon }) => {
    return (
        <div data-aos="fade-up" className='rounded-2xl w-[16rem] p-5 hover:scale-[102%] z-0 hover:z-[5]  transition-all delay-[30ms] ease-in-out border border-gray-900 bg-[#0c0c0c]'>
            <div>
                {icon}
            </div>
            <h3 className='text-3xl font-semibold mt-3'>
                <CountUp end={data} enableScrollSpy={true} />+
            </h3>
            <p className='text-gray-500 font-medium'>{type}</p>
        </div>
    )
}

const BlogCard = ({ data }) => {
    return (
        <Link data-aos="fade-up" style={{textDecoration:'none'}} to={`/news/${data.id}`} className='rounded-2xl w-[20rem] p-4 hover:scale-[102%] z-0 hover:z-[5]  transition-all delay-[30ms] ease-in-out border border-gray-900 hover:border-gray-800 bg-[#0c0c0c]'>
            <div className='flex items-center gap-1 text-sky-500 text-sm'>
                <p>{data.tag}</p>
                <BsDot className='text-gray-500' />
                <p className='text-gray-500'>{data.minutes} min read</p>
            </div>
            <div className='h-[9rem] rounded flex items-center justify-center overflow-hidden bg-green-500 my-2'>
                <img loading='lazy' className='w-auto rounded h-[12rem] bg-cover bg-center' src={data.image} alt="about" />
            </div>
            <div>
                <h3 className='text-base font-semibold text-white'>{data.title}</h3>
                <p className='text-gray-500 text-xs font-medium leading-5 mt-1'>
                    {data.description.substring(0, 100) + "..."}
                </p>
            </div>
            <div className='flex items-center gap-2 mt-2'>
                <img loading='lazy' className='w-8 h-8 rounded-full' src={data.authorImage} alt={data.author} />
                <div className='flex items-center gap-0.5 text-gray-500 text-xs'>
                    <p className='font-semibold text-gray-400 leading-5 mt-1'>{data.author}</p>
                    <BsDot />
                    <p className='font-medium leading-5 mt-1'>{data.date}</p>
                </div>
            </div>
        </Link>
    )
}

export { Card1, Card2, EventCard, HighlightCard, BlogCard };