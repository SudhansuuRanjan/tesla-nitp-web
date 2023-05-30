import React from "react";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ project }) => {
    return (
        <div className="project_container lg:p-8 md-p-8 p-4 transition-all delay-[30ms] ease-in-out hover:scale-[101%]">
            <div className="project-card lg:flex-row md:flex-row flex-col">
                <div className="project_container_left lg:w-[50%] md:w-[50%] w-full">
                    <img className="project_image lg:h-[7rem] md:h-[7rem] h-auto" src={project.imgUrl} alt="project" />
                    <h3 className="project_title">{project.title}</h3>
                    <p className="project_para">
                        {project.desc.length > 150
                            ? project.desc.substring(0, 150) + "..."
                            : project.desc}
                    </p>
                </div>
                <div className="project_container_right">
                    <div>
                        <h2 className="project_head"> Tech Stack</h2>
                        <div className="project_tech flex-wrap">
                            {project.techstack.map((tech, idx) => (
                                <h1 key={idx} className="project_techstack">
                                    {tech}
                                </h1>
                            ))}
                        </div>
                        <h2 className="project_head">Tags</h2>
                        <div className="project_tag flex-wrap">
                            {project.tags.map((tag, idx) => (
                                <h1 key={idx} className="project_techstack">
                                    {tag}
                                </h1>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-5 lg:mt-0 md:mt-0 mt-5">
                        <a href={project.link} className="project_link hover:bg-sky-600">
                            View Project
                        </a>
                        <a
                            href={project.source_code}
                            className="project_src hover:text-gray-300"
                        >
                            <AiFillGithub size="26" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
