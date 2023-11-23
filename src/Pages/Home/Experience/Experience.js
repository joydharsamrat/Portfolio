import React from "react";
import "../Experience/experience.css";
import { HiDesktopComputer } from "react-icons/hi";
import { RxDotFilled } from "react-icons/rx";
import { TbTriangleInverted } from "react-icons/tb";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className=" text-white py-5 min-h-[700px]" id="experience">
      <h1 className="mt-12 mb-12 text-3xl lg:text-5xl font-bold ">
        Experience
      </h1>
      <div className=" relative ">
        <div className="experience text-3xl grid place-items-center">
          <HiDesktopComputer></HiDesktopComputer>
        </div>

        <div className="next text-3xl grid place-items-center">
          <motion.p
            initial={{ y: 5, opacity: 0.2 }}
            animate={{ y: -8, opacity: 1 }}
            transition={{
              duration: 1,
              yoyo: Infinity,
            }}
          >
            <TbTriangleInverted></TbTriangleInverted>
          </motion.p>
        </div>
        <div className="grid lg:grid-cols-2 lg:justify-center gap-5 lg:gap-36 ml-10 lg:ml-0 items-start">
          <div className="lg:text-right title">
            <h2 className="text-2xl font-bold ">Position</h2>
            <p className="font-semibold">Duration</p>
          </div>
          <div className="text-left">
            <p className="font-semibold text-justify">Responsibilities</p>
          </div>
        </div>
        <div className="insituExp text-3xl  grid place-items-center">
          <motion.p
            initial={{ scale: 0.2 }}
            animate={{ scale: 2 }}
            transition={{
              duration: 1,
              yoyo: Infinity,
            }}
          >
            <RxDotFilled></RxDotFilled>
          </motion.p>
        </div>
        <div className="grid lg:grid-cols-2 justify-center gap-5 lg:gap-36 items-start ml-10 lg:ml-0 mt-12 lg:mt-32">
          <div className="lg:text-right title">
            <h2 className="text-2xl font-bold ">Web Developer Intern</h2>
            <p className="font-semibold">February 2023 - Jun 2023</p>
          </div>
          <div className="text-left">
            <p className="font-semibold lg:text-justify">
              I have independently developed a website for the company using
              Next.js for front-end development, Express.js for server-side
              scripting, and MongoDB for database management. <br />
              <a
                className="btn btn-link text-blue-700"
                target="_blank"
                rel="noreferrer"
                href="https://www.insituagritech.com/"
              >
                Website
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
