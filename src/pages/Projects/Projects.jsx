import React from "react";
import "./Projects.scss";
import Heading from "../../components/Headings/Heading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const data = [
    {
      imgUrl:
        "https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc: "The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title: " SELF BALANCING BOT",
      link: "https://tesla-nitp.vercel.app/ ",
      source_code: "https://github.com/SudhansuuRanjan/tesla-nitp-web",
      techstack: ["reactjs", "Firebase"],
      Tags: ["#alumni", "#nitp"],
    },
    {
      imgUrl:
        "https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc: "The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title: " SELF BALANCING BOT",
      link: "https://tesla-nitp.vercel.app/ ",
      source_code: "https://github.com/SudhansuuRanjan/tesla-nitp-web",
      techstack: ["reactjs", "Firebase"],
      Tags: ["#alumni", "#nitp"],
    },
    {
      imgUrl:
        "https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc: "The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title: " SELF BALANCING BOT",
      link: "https://tesla-nitp.vercel.app/ ",
      source_code: "https://github.com/SudhansuuRanjan/tesla-nitp-web",
      techstack: ["reactjs", "Firebase"],
      Tags: ["#alumni", "#nitp"],
    },
    {
      imgUrl:
        "https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc: "The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title: "SELF BALANCING BOT",
      link: "https://tesla-nitp.vercel.app/ ",
      source_code: "https://github.com/SudhansuuRanjan/tesla-nitp-web",
      techstack: ["reactjs", "Firebase"],
      Tags: ["#alumni", "#nitp"],
    },
    {
      imgUrl:
        "https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc: "The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title: " SELF BALANCING BOT",
      link: "https://tesla-nitp.vercel.app/ ",
      source_code: "https://github.com/SudhansuuRanjan/tesla-nitp-web",
      techstack: ["reactjs", "Firebase"],
      Tags: ["#alumni", "#nitp"],
    },
  ];

  return (
    <div className="pt-16">
      <Heading heading="PROJECTS"></Heading>
      <div className="project_main">
        {data.map((project, i) => (
          <ProjectCard
            key={i}
            imgUrl={project.imgUrl}
            desc={project.desc}
            title={project.title}
            project_link={project.link}
            project_source={project.source_code}
            project_techstack0={project.techstack[0]}
            project_techstack1={project.techstack[1]}
            project_tags0={project.Tags[0]}
            project_tags1={project.Tags[1]}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
