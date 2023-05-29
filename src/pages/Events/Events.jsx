import React from 'react'
import './Events.scss'
import Heading from '../../components/Headings/Heading'
import { EventCard } from '../../components/Cards/Card'

const Events = () => {

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
    <div className='pt-16'>
      <Heading heading="EVENTS"></Heading>
      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        {events.map((event, id) => (
          <EventCard data={event} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Events