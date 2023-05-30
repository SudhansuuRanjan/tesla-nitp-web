import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

const ProjectCard = ({ project }) => {
    return (

        <div className='project_container transition-all delay-[30ms] ease-in-out hover:scale-[101%]'>
            <div className='project-card'>
                <div className='project_container_left'>
                    <img className='project_image' src={project.imgUrl} alt="project" />
                    <h3 className='project_title'>{project.title}</h3>
                    <p className='project_para'>{project.desc.length > 150 ? project.desc.substring(0,150) + "...": project.desc}</p>
                </div>
                <div className='project_container_right'>
                    <div>
                        <h2 className='project_head' > Tech Stack</h2>
                        <div className='project_tech'>
                            {
                                project.techstack.map((tech, idx) => (
                                    <h1 key={idx} className='project_techstack'>{tech}</h1>
                                ))
                            }
                        </div>
                        <h2 className='project_head'>Tags</h2>
                        <div className='project_tag'>
                            {
                                project.tags.map((tag, idx) => (
                                    <h1 key={idx} className='project_techstack'>{tag}</h1>
                                ))
                            }
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <a href={project.link} className="project_link hover:bg-sky-600">View Project</a>
                        <a href={project.source_code} className="project_src hover:text-gray-300"><AiFillGithub size="26" /></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard