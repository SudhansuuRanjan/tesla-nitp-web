import React from 'react'
import './Team.scss'
import Heading from '../../components/Headings/Heading'
import TeamCard from './TeamCard'

const Team = () => {
  const data=[
    
    {
    imgurl:"https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
    desc:"Web devloper and gamer",
  title:"Suraj Kumar"},
  {
    imgurl:"https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
  desc:"Web devloper and gamer",
title:"Suraj Kumar"}
  


  ]

  return (
    <div className='pt-16'>
      <Heading heading="Team"></Heading>
      <div className='team-container'>
        {
          data.map((team,i)=>(
            <TeamCard key={i} imgurl={team.imgurl} desc={team.desc} title={team.title}/>
          ))
        }
    </div>
    </div>
  )
}

export default Team