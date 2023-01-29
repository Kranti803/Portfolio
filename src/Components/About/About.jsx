import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <aside className="about_container">
        <motion.div
          initial={{ x: 200, opacity: 1, scale: 1 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1623984109622-f9c970ba32fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 1, scale: 1 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h4>A short background of me...</h4>
          <div>
            <p>
              "As a dedicated and self-motivated individual, I am a full-stack
              developer with a passion for creating elegant and efficient
              solutions. I am a student with a strong background in computer
              science and a self-taught developer who is always eager to expand
              my skillset. My technical expertise includes proficiency in
              various programming languages such as JavaScript, C++ as well as
              experience with popular web development frameworks and libraries
              such as React and Node.js and MongoDB as a databse . My experience
              in both front-end and back-end development allows me to create
              seamless and responsive web applications. I am a proactive
              problem-solver and I am always looking for ways to improve and
              optimize my code. I am excited to bring my skills and experience
              to a professional setting and contribute to creating innovative
              and impactful projects."
            </p>
          </div>
        </motion.div>
      </aside>
    </section>
  );
};

export default About;
