import React from "react";
import netflix from "../../assets/netflix.png";
import { motion } from "framer-motion";
import { BsGlobe, BsGithub } from "react-icons/bs";

const WebProjects = () => {
  const projects = [
    {
      id: 1,
      poster: netflix,
      title: "Netflix Clone",
      tools: "ReactJs, Sass , Firebase",
      link1: "https://github.com/Kranti803/Netflix_Clone",
      link2: "https://netflix-clone-livid-kappa.vercel.app",
      icon1: <BsGithub />,
      icon2: <BsGlobe />,
    },
    {
      id: 2,
      poster: netflix,
      title: "Netflix Clone",
      tools: "ReactJs, Sass , Firebase",
      link1: "https://github.com/Kranti803/Netflix_Clone",
      link2: "https://netflix-clone-livid-kappa.vercel.app",
      icon1: <BsGithub />,
      icon2: <BsGlobe />,
    },
    {
      id: 3,
      poster: netflix,
      title: "Netflix Clone",
      tools: "ReactJs, Sass , Firebase",
      link1: "https://github.com/Kranti803/Netflix_Clone",
      link2: "https://netflix-clone-livid-kappa.vercel.app",
      icon1: <BsGithub />,
      icon2: <BsGlobe />,
    },
    {
      id: 4,
      poster: netflix,
      title: "Netflix Clone",
      tools: "ReactJs, Sass , Firebase",
      link1: "https://github.com/Kranti803/Netflix_Clone",
      link2: "https://netflix-clone-livid-kappa.vercel.app",
      icon1: <BsGithub />,
      icon2: <BsGlobe />,
    },
    {
      id: 5,
      poster: netflix,
      title: "Netflix Clone",
      tools: "ReactJs, Sass , Firebase",
      link1: "https://github.com/Kranti803/Netflix_Clone",
      link2: "https://netflix-clone-livid-kappa.vercel.app",
      icon1: <BsGithub />,
      icon2: <BsGlobe />,
    },
    {
      id: 6,
      poster: netflix,
      title: "Netflix Clone",
      tools: "ReactJs, Sass , Firebase",
      link1: "https://github.com/Kranti803/Netflix_Clone",
      link2: "https://netflix-clone-livid-kappa.vercel.app",
      icon1: <BsGithub />,
      icon2: <BsGlobe />,
    },
  ];
  return (
    <motion.div
      initial={{opacity: 1, scale:.7 }}
      animate={{opacity: 1, scale:1 }}
      transition={{duration:1}}
      className="web_projects"
    >
      {projects.map((i) => (
        <>
          <div className="projects_card" key={i.id}>
            <img src={i.poster} alt="" />
            <div className="overlay">
              <h4>{i.title}</h4>
              <p>{i.tools}</p>
              <div className="overlay_details">
                <button>
                  <a href={i.link1}>{i.icon1}</a>
                </button>
                <button>
                  <a href={i.link2}>{i.icon2}</a>
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </motion.div>
  );
};

export default WebProjects;
