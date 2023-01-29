import React from "react";
import Css from "../../assets/Css.png";
import Html from "../../assets/Html.png";
import Express from "../../assets/express.png";
import Firebase from "../../assets/Firebase.png";
import Js from "../../assets/Js.png";
import MongoDb from "../../assets/Mongodb.png";
import Node from "../../assets/Node.png";
import ReactJs from "../../assets/ReactJs.png";
import Redux from "../../assets/Redux.png";
import Sass from "../../assets/Sass.png";
import Git from "../../assets/Git.png";
import Github from "../../assets/Github.png";

import { motion } from "framer-motion";

const Skill = () => {
  const skillPng = [
    {
      text: "HTML",
      png: Html,
    },
    {
      text: "CSS",
      png: Css,
    },
    {
      text: "SASS",
      png: Sass,
    },
    {
      text: "JAVASCRIPT",
      png: Js,
    },
    {
      text: "REACT JS",
      png: ReactJs,
    },
    {
      text: "NODE JS",
      png: Node,
    },
    {
      text: "EXPRESS JS",
      png: Express,
    },
    {
      text: "MONGODB",
      png: MongoDb,
    },
    {
      text: "FIREBASE",
      png: Firebase,
    },
    {
      text: "REDUX",
      png: Redux,
    },
    {
      text: "GIT",
      png: Git,
    },
    {
      text: "GITHUB",
      png: Github,
    },
  ];

  return (
    <section
      className="skills"
      id="skills"
    >
      <h2>Skills</h2>
      <motion.div
      initial={{ x: -200, opacity: 1, scale: 1 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration:.8 }}
       className="skills_container">
        {skillPng.map((item, index) => (
          <div key={index}>
            <img src={item.png} alt="" />
            <p>{item.text}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skill;
