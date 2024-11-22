import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";
import "../Projects/projects.css";

const ProjectsSummary = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch(
        "https://portfoloi-server.vercel.app/api/v1/projects"
      );

      const projectData = await res.json();
      setProjects(projectData.data);
    };

    getProjects();
  }, []);

  return (
    <div className=" text-white mb-12 py-5 " id="projects">
      <h1 className="text-3xl font-bold text-center text-white mb-12">
        Projects
      </h1>
      <div className="md:w-3/4 mx-auto ">
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          slidesPerView={"auto"}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1150: {
              slidesPerView: 3,
            },
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          loop={true}
        >
          {projects?.map((project) => (
            <SwiperSlide key={project?._id}>
              <div
                className={`card lg:w-72 h-96 bg-gray-600 shadow-xl  bg-clip-padding   border-2  bg-opacity-100  `}
              >
                <div className="h-full overflow-y-hidden hover:overflow-y-scroll px-5 pt-5 element">
                  <img
                    className="rounded-xl w-full"
                    src={project?.images[0]}
                    alt={project.name}
                  />
                </div>

                <div className="py-2 flex flex-col justify-between items-center gap-5">
                  <h2 className="card-title">{project.name}</h2>
                  <div className="flex items-center justify-center gap-2">
                    <motion.a
                      target="_blank"
                      href={project.liveDemoLink}
                      whileHover={{ scale: 1.1 }}
                      className="p-1 border border-gray-300 rounded text-xs"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={`/project/${project._id}`}
                      whileHover={{ scale: 1.1 }}
                      className="p-1 border border-gray-300 rounded text-xs"
                    >
                      Details
                    </motion.a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectsSummary;
