import React from "react";
import './styles/app.scss'
import Header from "./Components/Layouts/Header/Header"
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Skill from "./Components/Skills/Skill";
import Footer from "./Components/Layouts/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Projects/>
    <Skill/>
    <About/>
    <Contact/>
    <Footer/>
    {/* <Toaster/> */}
    </>
  );
}

export default App;
