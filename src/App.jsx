import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Skill from "./components/skill/Skill";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./index.css"

const App = () => {

  // State to manage theme
  const [isLightTheme, setIsLightTheme] = useState(() => {
    return localStorage.getItem("theme") === "Light";
  });
  const [picAbout, setPicAbout] = useState(true)

  // Toggle the theme
  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
    setPicAbout((prevState) => !prevState)
  };

  // Apply the theme class to <body>
  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
    localStorage.setItem("theme", isLightTheme ? "light" : "dark");
  }, [isLightTheme]);

  return (
    <>
      <Header />
      <Nav theme={toggleTheme}/>
      <About picAbout={picAbout}/>
      <Experience />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
