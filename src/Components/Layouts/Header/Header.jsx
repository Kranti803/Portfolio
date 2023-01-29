import React, { useState } from "react";
import { AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const navLinks = [
    {
      id: 1,
      title: "Home",
      link: "#home",
    },
    {
      id: 2,
      title: "Projects",
      link: "#projects",
    },
    {
      id: 3,
      title: "Skills",
      link: "#skills",
    },
    {
      id: 4,
      title: "About",
      link: "#about",
    },
    {
      id: 5,
      title: "Contact",
      link: "#contact",
    },
  ];

  const [nav, setNav] = useState(false);

  //changing navbar color on scroll..

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 98.02) {
      setColor(true);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <nav className={`${color ? "nav_scrolled" : ""}`}
      
      >
        <h2>Kranti</h2>
        <RxHamburgerMenu size={30} onClick={() => setNav(!nav)} />
        <ul>
          {navLinks.map((i) => (
            <li key={i.id}>
              <a href={i.link}>{i.title}</a>
            </li>
          ))}
          <div>
            <button>
              <AiOutlineMail size={20} />
              <a href="mailto:Krantikumar803@gmail.com">Mail</a>
            </button>
          </div>
        </ul>

        {/* ********* mobile-nav ********* */}
        <div className={`mobile_nav ${nav ? "mobile_nav_opens" : ""}`}
        >
          <div>
            <h2>Kranti</h2>
            <AiOutlineClose size={35} onClick={() => setNav(false)} />
          </div>
          <ul>
            {navLinks.map((i) => (
              <li
              onClick={()=>setNav(false)}
               key={i.id}>
                <a href={i.link}>{i.title}</a>
              </li>
            ))}
            <button>
              <AiOutlineMail size={20} />
              <a href="mailto:Krantikumar803@gmail.com">Mail</a>
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
