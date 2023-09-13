import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { deleteDocument } from "../../services/document";
import { deleteFile } from "../../services/file";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, isAdmin, refetch }) => {
    return (
        <div data-aos="zoom-in" className="project_container lg:p-8 md-p-8 p-5 transition-all delay-[30ms] ease-in-out hover:scale-[101%]">
            {isAdmin && <div className='absolute z-10 right-5 top-2'>
                <Link to={`/edit/project/${project.$id}`} > <button className='text-blue-500 p-2'><FaEdit size={24} /></button></Link>
                <button onClick={async () => {
                    try {
                        await Promise.all([deleteDocument('projects', project.$id), deleteFile(project.imageId)]);
                        await refetch();
                        console.log("Document deleted successfully!");
                    } catch (error) {
                        console.log("Something went wrong!", error)
                    }
                }} className='text-rose-500 p-2'><FaTrash size={22} /></button>
            </div>}
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
