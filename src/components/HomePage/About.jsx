import React from 'react'
import Heading1 from '../Headings/Heading1'
import Heading2 from '../Headings/Heading2'
import { Card1, Card2, HighlightCard } from '../Cards/Card'
import { BsFillPeopleFill, BsFillCalendarEventFill } from 'react-icons/bs'
import { RiProjector2Fill } from 'react-icons/ri'
import { AiFillProject } from 'react-icons/ai'

const About = () => {
  return (
    <div>
      
      <Heading1 text1={"A community of"} text2={"builders"} />
      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        <HighlightCard icon={<BsFillPeopleFill className='text-sky-500' size={30} />} type={"Total members"} data={"100+"} />
        <HighlightCard icon={<BsFillCalendarEventFill className='text-sky-500' size={30} />} type={"Events Conducted"} data={"10+"} />
        <HighlightCard icon={<RiProjector2Fill className='text-sky-500' size={30} />} type={"Workshops Organized"} data={"20+"} />
        <HighlightCard icon={<AiFillProject className='text-sky-500' size={30} />} type={"Ongoing Projects"} data={"10+"} />
      </div>


      <Heading1 text1={"Deliver an Optimized"} text2={"User Experience"} />
      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        <Card1 />
        <Card1 />
        <Card1 />
      </div>


      <Heading2 text1={"Partnership with"} text2={"world-class companies"} />
      <div className='my-20 flex flex-wrap gap-10 items-center justify-evenly'>
        <Card2 link="https://algorand.com" title="Building Accessible BlockChain" company={"Algorand"} image="https://algorand.com/static/algorand-og-image-98d634bc4a6f00c455b35830674ae96b.png" />
        <Card2 link="https://near.com" title="BlockChain for All" company={"Near"} image="https://www.altcoinbuzz.io/wp-content/uploads/2022/01/what-is-near-protocol.jpg" />
        <Card2 link="https://edudao.com" title="DAO for Students" company={"EduDAO"} image="https://pbs.twimg.com/profile_images/1470977630946181122/rXTRvqJV_400x400.jpg" />
      </div>
    </div>
  )
}

export default About