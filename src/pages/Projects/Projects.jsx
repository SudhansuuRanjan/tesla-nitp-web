import React from 'react'
import './Projects.scss'
import Heading from '../../components/Headings/Heading'
import ProjectCard from './ProjectCard'

const Projects = () => {

  const data = [
    {
      imgUrl:"https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc:"The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title:"1 SELF BALANCING BOT"
    },
    {
      imgUrl:"https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc:"The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title:"2 SELF BALANCING BOT"
    },
    {
      imgUrl:"https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc:"The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title:"3 SELF BALANCING BOT"
    },
    {
      imgUrl:"https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc:"The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title:"4 SELF BALANCING BOT"
    },
    {
      imgUrl:"https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc:"The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title:"5 SELF BALANCING BOT"
    },
  ]

  return (
    <div className='pt-16'>
      <Heading heading="PROJECTS"></Heading>
      <div className='project-container'>
        {
          data.map((project,i)=>(
              <ProjectCard key={i} imgUrl={project.imgUrl} desc={project.desc} title={project.title}/>
          ))
        }
      </div> 
    </div>
  )
}

export default Projects