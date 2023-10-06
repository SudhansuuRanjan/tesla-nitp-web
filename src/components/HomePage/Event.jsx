import React from 'react'
import Heading1 from '../Headings/Heading1';
import { EventCard } from '../Cards/Card';
import { Link } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';
import Loader from '../Loader';
import { useQuery } from '@tanstack/react-query';
import { getDocuments } from '../../services/document';

const Event = () => {

    const { data, refetch, isLoading, isError } = useQuery({
        queryKey: ['events'],
        queryFn: () => getDocuments("events"),
        onSuccess: (data) => {
            // console.log(data);
        },
        staleTime: Infinity
    })


    return (
        <div>
            <Heading1 details={"Experience our exclusive events, workshops, expert sessions, and valuable networking opportunities. Stay tuned for updates on upcoming events!"} text1={"Our Exclusive"} text2={"Events"} />
            <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
                {isLoading ? <Loader /> : isError ? <p>Something went wrong.</p> : data.slice().reverse().slice(0, 3).map((event, id) => (
                    <EventCard data={event} key={id} />
                ))}
            </div>

            <Link data-aos="zoom-in" style={{ textDecoration: "none" }} to="/events" className='bg-sky-600 absolute lg:right-32 md:right-16 right-10 hover:bg-sky-500 text-white visited:text-white font-semi-bold py-2.5 px-5 rounded-full flex items-center -mt-10'>
                <button className="mr-2 text-white text-sm">
                    View All
                </button>
                <RxArrowRight size={18} />
            </Link>
        </div>
    )
}

export default Event;