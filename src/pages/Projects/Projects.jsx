import React, { useEffect } from "react";
import "./Projects.scss";
import Heading from "../../components/Headings/Heading";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import { getDocuments } from "../../services/document";

const Projects = () => {

  useEffect(() => {
    document.title = 'Tesla NIT Patna | Projects';
  }, [])

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getDocuments("projects"),
    onSuccess: (data) => {
      console.log(data.documents);
    },
    staleTime:Infinity
  })

  return (
    <div className="pt-16">
      <Heading heading="PROJECTS"></Heading>
      <div className="project_main">
        {isLoading ? <Loader></Loader> : isError ? <p>Something went wrong.</p> : data.slice().reverse().map((project) => (
          <ProjectCard
            key={project.$id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
