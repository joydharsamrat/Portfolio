import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const res = await fetch(
          "https://portfoloi-server.vercel.app/api/v1/skills"
        );
        const skillData = await res.json();
        setSkills(skillData.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    getSkills();
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="text-gray-100 mb-10" id="skills">
      <h1 className="text-3xl font-bold text-center text-white mb-12">
        Skills
      </h1>

      <div
        className="flex gap-32 justify-center flex-wrap"
        style={{ rowGap: "3rem", columnGap: "6rem" }}
      >
        {loading
          ? // Skeletons
            Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-5 animate-pulse"
              >
                <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
                <div className="h-6 w-24 bg-gray-600 rounded"></div>
              </div>
            ))
          : // Skills
            skills?.map((skill) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                key={skill._id}
                className="flex items-center gap-5"
              >
                <img className="h-8 w-8" src={skill.logo} alt={skill.title} />
                <p className="text-xl font-bold">{skill.title}</p>
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default Skills;
