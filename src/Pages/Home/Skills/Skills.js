import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className="text-gray-100 mb-10" id="skills">
      <h1 className="mt-12 mb-5 text-3xl lg:text-5xl font-bold">
        Technical Skills
      </h1>

      <div className="my-20 flex justify-center items-center gap-20 flex-wrap">
        <div className="flex flex-col items-center justify-center gap-2">
          <motion.div
            initial={{ scale: 0.1 }}
            animate={isInView ? { rotateX: 360, scale: 1 } : "none"}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-24 w-24   rounded-full flex items-center justify-center "
          >
            <img
              className="rounded-full"
              src="https://i.ibb.co/yn9t0Mx/js.png"
              alt=""
            />
          </motion.div>
          <div>
            <h1 className="text-2xl font-bold">JAVASCRIPT</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <motion.div
            initial={{ scale: 0.1 }}
            animate={isInView ? { rotateX: 360, scale: 1 } : "none"}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-24 w-24   rounded-full flex items-center justify-center "
          >
            <img
              className="rounded-full"
              src="https://i.ibb.co/V2VLD4Y/react.png"
              alt=""
            />
          </motion.div>
          <div>
            <h1 className="text-2xl font-bold">REACT</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <motion.div
            initial={{ scale: 0.1 }}
            animate={isInView ? { rotateX: 360, scale: 1 } : "none"}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-24 w-24   rounded-full flex items-center justify-center "
          >
            <img
              className="rounded-full"
              src="https://i.ibb.co/PgBcrJX/express.webp"
              alt=""
            />
          </motion.div>

          <div>
            <h1 className="text-2xl font-bold">EXPRESS JS</h1>
          </div>
        </div>
      </div>

      <div
        className="flex gap-32 justify-center flex-wrap"
        style={{ rowGap: "3rem", columnGap: "6rem" }}
      >
        <div className="flex items-center gap-5">
          <img
            className="h-8 w-8"
            src="https://i.ibb.co/TvKjPjs/html.png"
            alt=""
          />
          <p className="text-xl font-bold">HTML5</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            className="h-8 w-8"
            src="https://i.ibb.co/ts73rXb/css.png"
            alt=""
          />
          <p className="text-xl font-bold">CSS3</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            className="h-8 w-8"
            src="https://i.ibb.co/tpR55Qb/sass-image-depositphotos-bgremover.png"
            alt=""
          />
          <p className="text-xl font-bold">SASS</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            className="h-8 w-8 rounded-full"
            src="https://i.ibb.co/559qhbp/nextjs-logo-square.webp"
            alt=""
          />
          <p className="text-xl font-bold">NEXT.JS</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            className="h-8 w-8 rounded-full"
            src="https://i.ibb.co/WtT08bz/redux.png"
            alt=""
          />
          <p className="text-xl font-bold">REDUX</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            className="h-8 w-8 rounded-full"
            src="https://i.ibb.co/c2v3FDF/Mongo-DB-Emblem.jpg"
            alt=""
          />
          <p className="text-xl font-bold">MONGODB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
