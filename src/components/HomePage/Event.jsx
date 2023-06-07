import React from 'react'
import Heading1 from '../Headings/Heading1';
import { EventCard } from '../Cards/Card';
import { Link } from 'react-router-dom';
import { RxArrowRight } from 'react-icons/rx';

const Event = () => {
    const events = [
        {
            id: 0,
            name: "Blockchain Technology for Next-Generation Applications",
            image: "public/images/algorand.jpg",
            tag: "BlockChain",
            description: 'Faculty Development Program on “Blockchain Technology for Next-Generation Applications”',
            date: "19th-24th June 2023",
            time: "10:00 AM",
            venue: "Vishwesharaiya Hall",
            link: "https://forms.gle/G29EKJovMpqAr4ei6"
        },
        {
            id: 1,
            name: "Algo Camp",
            image: "https://miro.medium.com/max/700/1*BFpFCJepifaREIg7qLSLag.jpeg",
            tag: "BlockChain",
            description: "A 3-day workshop on Blockchain Technology by Algorand Foundation.",
            date: "2023-01-25",
            time: "10:00 AM",
            venue: "Meghnad Saha Hall",
            link: "/404"
        },
        {
            id: 2,
            name: "EduDAO Info Session",
            image: "./images/edudao.jpg",
            tag: "Technology",
            description: "An info session on EduDAO, a DAO for students by students.",
            date: "2023-05-02",
            time: "05:00 PM",
            venue: "Meghnad Saha Hall",
            link: "/404"
        }]


    return (
        <div>
            <Heading1 details={"Experience our exclusive events, workshops, expert sessions, and valuable networking opportunities. Stay tuned for updates on upcoming events!"} text1={"Our Exclusive"} text2={"Events"} />
            <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
                {events.map((event, id) => (
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