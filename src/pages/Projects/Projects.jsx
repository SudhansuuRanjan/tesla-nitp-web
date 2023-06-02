import React from "react";
import "./Projects.scss";
import Heading from "../../components/Headings/Heading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  document.title = 'Tesla NIT Patna | Projects';

  const data = [
    {
      imgUrl:
        "https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc: "The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title: "SELF BALANCING BOT",
      link: "https://tesla-nitp.vercel.app/ ",
      source_code: "https://github.com/SudhansuuRanjan/tesla-nitp-web",
      techstack: ["ReactJs", "Firebase"],
      tags: ["#alumni", "#nitp"],
      id: "p01"
    },
    {
      imgUrl:
        "https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc: "The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title: "SELF BALANCING BOT",
      link: "https://tesla-nitp.vercel.app/ ",
      source_code: "https://github.com/SudhansuuRanjan/tesla-nitp-web",
      techstack: ["ReactJs", "Firebase"],
      tags: ["#alumni", "#nitp"],
      id: "p02"
    },
    {
      imgUrl:
        "https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc: "The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title: "SELF BALANCING BOT",
      link: "https://tesla-nitp.vercel.app/ ",
      source_code: "https://github.com/SudhansuuRanjan/tesla-nitp-web",
      techstack: ["ReactJs", "Firebase"],
      tags: ["#alumni", "#nitp"],
      id: "p03"
    },
    {
      imgUrl:
        "https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc: "The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title: "SELF BALANCING BOT",
      link: "https://tesla-nitp.vercel.app/ ",
      source_code: "https://github.com/SudhansuuRanjan/tesla-nitp-web",
      techstack: ["ReactJs", "Firebase"],
      tags: ["#alumni", "#nitp"],
      id: "p04"
    },
    {
      imgUrl:
        "https://cdn.sanity.io/images/58siqeyu/production/bb92a30fe0cc9ffb4caa9b16ed83a6a3dfde3e09-563x372.png",
      desc: "The self-balancing robot is similar to an upside-down pendulum. Unlike a normal pendulum which keeps on swinging once given a nudge,",
      title: "SELF BALANCING BOT",
      link: "https://tesla-nitp.vercel.app/ ",
      source_code: "https://github.com/SudhansuuRanjan/tesla-nitp-web",
      techstack: ["ReactJs", "Firebase"],
      tags: ["#alumni", "#nitp"],
      id: "p05"
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
