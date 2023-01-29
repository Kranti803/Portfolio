import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall, IoIosSend } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact_container">
        <motion.div 
        initial={{x:-200, opacity:1, scale:1}}
        whileInView={{x:0, opacity:1, scale:1}}
        transition={{duration:.8}}
         className="left">
          <p>
            <IoIosCall /> +977 9801356025
          </p>
          <p>
            <GoLocation /> Kathmandu, Nepal
          </p>
          <p>
            <AiOutlineMail />
            krantikumar803@gmail.com
          </p>
        </motion.div>
        <motion.div
        initial={{x:200, opacity:1, scale:1}}
        whileInView={{x:0, opacity:1, scale:1}}
        transition={{duration:.8}}
         className="right">
          <form>
            <div>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <button>
              Send
              <IoIosSend />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
