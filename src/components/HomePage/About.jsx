import React from 'react'
import Heading1 from '../Headings/Heading1'
import Heading2 from '../Headings/Heading2'
import { Card1, Card2, HighlightCard } from '../Cards/Card'
import { BsFillPeopleFill, BsFillCalendarEventFill } from 'react-icons/bs'
import { RiProjector2Fill } from 'react-icons/ri'
import { AiFillProject } from 'react-icons/ai'

const About = () => {

  const aboutData =[
    {
      id:"0",
      title:"Join the T.E.S.L.A. Club at NIT Patna",
      description:"Join the vibrant T.E.S.L.A. Club at NIT Patna, focused on electrical engineering and blockchain. Explore new frontiers, collaborate on projects, and make a lasting impact in the world of technology.",
      image:"https://i0.wp.com/joinhandshake.com/wp-content/uploads/2021/12/HS_21Moments_BlogImage.jpg?resize=795%2C530&ssl=1",
    },
    {
      id:"0",
      title:"Unlock Your Potential with T.E.S.L.A. Club",
      description:"Develop your skills in electrical engineering and blockchain through hands-on projects, workshops, and competitions. Network with industry professionals and unleash your true potential with T.E.S.L.A. Club.",
      image:"https://sujeevshakya.com/wp-content/uploads/2017/12/unlockingpotential-1288x724.jpg",
    },
    {
      id:"0",
      title:"Connect and Innovate with T.E.S.L.A. Club",
      description:"Collaborate, share ideas, and explore emerging technologies with T.E.S.L.A. Club. Shape the future of electrical engineering and blockchain through industry interactions and hackathons.",
      image:"https://www.eschoolnews.com/files/2021/06/innovative-students-equity.jpeg",
    }
  ]


  return (
    <div>
      <Heading1 details={"Welcome to our community of builders! We are a diverse group of individuals driven by a shared passion for creating and innovating."} text1={"A community of"} text2={"builders"} />
      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        <HighlightCard icon={<BsFillPeopleFill className='text-sky-500' size={30} />} type={"Total members"} data={100} />
        <HighlightCard icon={<BsFillCalendarEventFill className='text-sky-500' size={30} />} type={"Events Conducted"} data={10} />
        <HighlightCard icon={<RiProjector2Fill className='text-sky-500' size={30} />} type={"Workshops Organized"} data={20} />
        <HighlightCard icon={<AiFillProject className='text-sky-500' size={30} />} type={"Ongoing Projects"} data={10} />
      </div>

      <Heading1 details={"Join our dynamic and innovative organization dedicated to fostering excellence in blockchain & Electrical Engg.We offer opportunities for learning, networking, growth and make a positive impact in the world."} text1={"More Info"} text2={"About Us"} />
      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        {
          aboutData.map((data) => (
            <Card1 key={data.id} title={data.title} description={data.description} image={data.image} />
          ))
        }
      </div>


      <Heading2 text1={"Partnership with"} text2={"world-class companies"} />
      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        <Card2 link="https://algorand.com" title="Building Accessible BlockChain" company={"Algorand"} image="https://algorand.com/static/algorand-og-image-98d634bc4a6f00c455b35830674ae96b.png" />
        <Card2 link="https://near.org/" title="BlockChain for All" company={"Near"} image="https://www.altcoinbuzz.io/wp-content/uploads/2022/01/what-is-near-protocol.jpg" />
        <Card2 link="https://www.edudao.io/" title="DAO for Students" company={"EduDAO"} image="https://pbs.twimg.com/profile_images/1470977630946181122/rXTRvqJV_400x400.jpg" />
      </div>
    </div>
  )
}

export default About