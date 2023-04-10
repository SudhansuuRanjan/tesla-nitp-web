import React from 'react'

const TeamCard = ({imgurl,title,desc}) => {
  return (
    <div className='team-card'>
        <img src={imgurl} alt="team"/>
        <h3>{title}</h3>
        <p>{desc}</p>
      
    </div>
  )
}

export default TeamCard