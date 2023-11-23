import React from "react";
import Banner from "./Banner/Banner";
import { ContactMe } from "./ContactMe/Contact";
import ProjectsSummary from "./Projects/ProjectsSummary";
import Skills from "./Skills/Skills";
import About from "./About/About";
import Experience from "./Experience/Experience";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <ProjectsSummary></ProjectsSummary>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
