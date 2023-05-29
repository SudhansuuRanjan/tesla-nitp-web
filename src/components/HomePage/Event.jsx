import React from 'react'
import Heading1 from '../Headings/Heading1';
import { EventCard } from '../Cards/Card';
import { Link } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';

const Event = () => {
    const events = [
        {
            id: 0,
            name: "AlgoCamp",
            image: "https://algorand.com/static/algorand-og-image-98d634bc4a6f00c455b35830674ae96b.png",
            tag: "BlockChain",
            description: "Details about the event.",
            date: "2023-05-25",
            time: "10:00 AM",
            venue: "LT-1",
            link: "https://www.google.com"
        },
        {
            id: 1,
            name: "Event Name",
            image: "https://miro.medium.com/max/700/1*BFpFCJepifaREIg7qLSLag.jpeg",
            tag: "Web Dev",
            description: "Details about the event.",
            date: "2023-05-25",
            time: "10:00 AM",
            venue: "LT-1",
            link: "https://www.google.com"
        },
        {
            id: 2,
            name: "Event Name",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-N3suU4cbFWeot4OxL9gI90VxkyCTH5vPAZGOPvne65pbJ__g41hsUrpOfVsHYQWIBg&usqp=CAU",
            tag: "Core",
            description: "Details about the event.",
            date: "2023-05-25",
            time: "10:00 AM",
            venue: "LT-1",
            link: "https://www.google.com"
        }]


    return (
        <div>
            <Heading1 text1={"Our Exclusive"} text2={"Events"} />
            <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
                {events.map((event, id) => (
                    <EventCard data={event} key={id} />
                ))}
            </div>

            <Link style={{ textDecoration: "none" }} to="/events" className='bg-sky-600 absolute lg:right-32 md:right-16 right-10 hover:bg-sky-500 text-white visited:text-white font-semi-bold py-2.5 px-5 rounded-full flex items-center -mt-10'>
                <button className="mr-2 text-white text-sm">
                    View All
                </button>
                <RxArrowRight size={18}/>
            </Link>
        </div>
    )
}

export default Event;