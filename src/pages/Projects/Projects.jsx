import React from "react";
import "./Projects.scss";
import Heading from "../../components/Headings/Heading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  document.title = 'Tesla NIT Patna | Projects';

  const data = [
    {
      imgUrl: "https://github.com/SudhansuuRanjan/tesla-nitp-web/raw/main/teslaclublive.png",
      desc: "Official website of Tesla Club using ReactJs, Tailwind and Firebase with animations and dark theme, which also has an admin portal.",
      title: "T.E.S.L.A Official Website",
      link: "https://tesla-nitp.vercel.app/",
      source_code: "https://github.com/SudhansuuRanjan/tesla-nitp-web",
      techstack: ["ReactJs", "Firebase", "aos"],
      tags: ["#tesla", "#nitp", "#reactjs"],
      id: "p01"
    },
    {
      imgUrl: "https://i.ibb.co/GtdqMzw/Screenshot-1384.png",
      desc: "Official Alumni protal of NIT, Patna using ReactJs, Tailwind and Firebase with animations and dark theme, which also has an admin portal.",
      title: "NITP Alumni Portal",
      link: "https://alumini-nitp.vercel.app/",
      source_code: "https://github.com/Rishabh-25-code/alumini-cell-nitp",
      techstack: ["ReactJs", "Firebase", "aos"],
      tags: ["#alumni", "#nitp", "#reactjs"],
      id: "p02"
    },

  ];

  return (
    <div className="pt-16">
      <Heading heading="PROJECTS"></Heading>
      <div className="project_main">
        {data.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
