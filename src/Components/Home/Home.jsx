import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home" id="home">
      <motion.div
        initial={{ x: -200, opacity: 1}}
        whileInView={{ x: 0, opacity: 1,}}
        transition={{ duration: .8 }}
        className="top"
      >
        <div>
          <h1>
            Hi, I'm <br /> Kranti Kumar
          </h1>
          <p>A FullStack Developer...</p>
          <aside>
            <button>
              <a href="mailto:krantikumar803@gmail.com">Hire Me</a>
            </button>
            <button>
              <a href="/">Download CV</a>
            </button>
          </aside>
        </div>
      </motion.div>
      <motion.div
        initial={{ x:200, opacity: 1 }}
        whileInView={{ x: 0, opacity: 1}}
        transition={{ duration:.8 }}
        className="bottom"
      >
        <p>Find Me On...</p>
        <div>
          <AiFillFacebook />
          <AiFillGithub />
          <AiFillInstagram />
          <BsTwitter />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
