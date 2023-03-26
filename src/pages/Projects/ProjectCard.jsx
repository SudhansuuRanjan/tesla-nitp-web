import React from 'react'

const ProjectCard = ({ imgUrl, title, desc }) => {
    return (
        <div className='project-card'>
            <img src={imgUrl} alt="project" />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default ProjectCard