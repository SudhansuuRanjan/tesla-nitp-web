import React from 'react'
import './Team.scss'
import Heading from '../../components/Headings/Heading'
import TeamCard from './TeamCard'



const Team = () => {
  document.title = 'Tesla NIT Patna | Team';


  const members = [
    {
      name: 'Aman Kumar',
      position: 'President',
      image: 'https://images.theconversation.com/files/491994/original/file-20221026-19-1q1c4p.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      linkedin: 'https://www.linkedin.com/in/aman-kumar-2b1b3b1b3/',
      github: 'https://github.com',
      instagram: 'https://instagram.com',
      twitter: 'https://www.twitter.com',
      discord: "https://discord.com",
      about: "A web3 enthusiast and an upcoming electrical engineer.",
      email: "aman@gmail.com",
      id: "0"
    },
    {
      name: 'Ashutosh Kumar',
      position: 'Secretary',
      image: 'https://images.theconversation.com/files/491994/original/file-20221026-19-1q1c4p.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      linkedin: 'https://www.linkedin.com/in/aman-kumar-2b1b3b1b3/',
      github: 'https://github.com',
      instagram: 'https://instagram.com',
      twitter: 'https://www.twitter.com',
      discord: "https://discord.com",
      about: "A web3 enthusiast and an upcoming electrical engineer.",
      email: "aman@gmail.com",
      id: "1"
    },
    {
      name: 'Ashutosh Kumar',
      position: 'Secretary',
      image: 'https://images.theconversation.com/files/491994/original/file-20221026-19-1q1c4p.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      linkedin: 'https://www.linkedin.com/in/aman-kumar-2b1b3b1b3/',
      github: 'https://github.com',
      instagram: 'https://instagram.com',
      twitter: 'https://www.twitter.com',
      discord: "https://discord.com",
      about: "A web3 enthusiast and an upcoming electrical engineer.",
      email: "aman@gmail.com",
      id: "2"
    },
    {
      name: 'Ashutosh Kumar',
      position: 'Secretary',
      image: 'https://images.theconversation.com/files/491994/original/file-20221026-19-1q1c4p.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      linkedin: 'https://www.linkedin.com/in/aman-kumar-2b1b3b1b3/',
      github: 'https://github.com',
      instagram: 'https://instagram.com',
      twitter: 'https://www.twitter.com',
      discord: "https://discord.com",
      about: "A web3 enthusiast and an upcoming electrical engineer. A web3 enthusiast and an upcoming electrical engineer.",
      email: "aman@gmail.com",
      id: "3"
    },
    {
      name: 'Ashutosh Kumar',
      position: 'Secretary',
      image: 'https://images.theconversation.com/files/491994/original/file-20221026-19-1q1c4p.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      linkedin: 'https://www.linkedin.com/in/aman-kumar-2b1b3b1b3/',
      github: 'https://github.com',
      instagram: 'https://instagram.com',
      twitter: 'https://www.twitter.com',
      discord: "https://discord.com",
      about: "A web3 enthusiast and an upcoming electrical engineer.",
      email: "aman@gmail.com",
      id: "4"
    },
    {
      name: 'Ashutosh Kumar',
      position: 'Secretary',
      image: 'https://images.theconversation.com/files/491994/original/file-20221026-19-1q1c4p.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      linkedin: 'https://www.linkedin.com/in/aman-kumar-2b1b3b1b3/',
      github: 'https://github.com',
      instagram: 'https://instagram.com',
      twitter: 'https://www.twitter.com',
      discord: "https://discord.com",
      about: "A web3 enthusiast and an upcoming electrical engineer.",
      email: "aman@gmail.com",
      id: "5"
    },
    {
      name: 'Ashutosh Kumar',
      position: 'Secretary',
      image: 'https://images.theconversation.com/files/491994/original/file-20221026-19-1q1c4p.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      linkedin: 'https://www.linkedin.com/in/aman-kumar-2b1b3b1b3/',
      github: 'https://github.com',
      instagram: 'https://instagram.com',
      twitter: 'https://www.twitter.com',
      discord: "https://discord.com",
      about: "A web3 enthusiast and an upcoming electrical engineer.",
      email: "aman@gmail.com",
      id: "5"
    }
  ]

  return (
    <div className='pt-16'>
      <Heading heading="Team"></Heading>
      <div className='my-20 mx-5 flex flex-wrap gap-10 items-center justify-center' id='Team_main'>
        {members.map((member, id) => (
          <TeamCard member={member} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Team