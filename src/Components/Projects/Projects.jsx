import React, { useState } from "react";
import WebProjects from "./WebProjects";
import AppProjects from "./AppProjects";
import { motion } from "framer-motion";

const Projects = () => {
  const [web, setWeb] = useState(true);
  const [app, setApp] = useState(false);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects_category">
        <ul>
          <li
            onClick={() => setWeb(true) & setApp(false)}
            className={`${web ? "active" : ""}`}
          >
            Web
          </li>
          <li
            onClick={() => setApp(true) & setWeb(false)}
            className={`${app ? "active" : ""}`}
          >
            App
          </li>
        </ul>
      </div>
      <motion.div
        initial={{ x: 200, opacity: 1, scale: 1 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="projects_container"
      >
        {web && <WebProjects />}
        {app && <AppProjects />}
      </motion.div>
    </section>
  );
};

export default Projects;
