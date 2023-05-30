import React from 'react'
import { Link } from "react-router-dom";

const ProjectCard = ({ imgUrl, title, desc, project_link, project_source, project_techstack0, project_techstack1, project_tags0, project_tags1 }) => {
    return (

        <div className='project_container'>
            <div className='project-card'>
                <div className='project_container_left'>
                    <img className='project_image' src={imgUrl} alt="project" />
                    <h3 className='project_title'>{title}</h3>
                    <p className='project_para'>{desc}</p>
                </div>
                <div className='project_container_right'>
                    <Link to={project_link} className="project_link">View Project</Link>
                    <Link to={project_source} className="project_src">Source Code</Link>

                </div>

            </div>

            <h2 className='project_head' > Tech Stack</h2>
            <div className='project_tech'>
                <h1 className='project_techstack'>{project_techstack0}</h1>
                <h1 className='project_techstack'>{project_techstack1}</h1>
            </div>
            <h2 className='project_head'>Tags</h2>
            <div className='project_tag'>
                <h1 className='project_tags'>{project_tags0}</h1>
                <h1 className='project_tags'>{project_tags1}</h1>

            </div>
        </div>

    )
}

export default ProjectCard