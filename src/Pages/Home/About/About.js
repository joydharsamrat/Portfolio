import React from "react";
import "../About/about.css";

const About = ({ about }) => {
  return (
    <div className="aboutContainer px-2 lg:px-10" id="about">
      <div className=" text-white mb-12 py-5">
        <h1 className="mt-12 mb-12 text-3xl lg:text-5xl font-bold ">
          About Me
        </h1>
        <div className="text-justify ">
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
