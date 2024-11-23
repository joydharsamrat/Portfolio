import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";
import "../Projects/projects.css";

const ProjectsSummary = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://portfoloi-server.vercel.app/api/v1/projects"
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }

        const projectData = await res.json();
        setProjects(projectData.data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center py-20">
        <h2 className="text-2xl">Loading Projects...</h2>
        <p className="text-gray-400">Please wait a moment.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {/* Skeleton Loader */}
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-white text-center py-20">
        <h2 className="text-2xl">Error Loading Projects</h2>
        <p className="text-gray-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="text-white mb-12 py-5" id="projects">
      <h1 className="text-3xl font-bold text-center text-white mb-12">
        Projects
      </h1>
      <div className="md:w-3/4 mx-auto">
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
                className={`card lg:w-72 h-96 bg-gray-600 shadow-xl bg-clip-padding border-2 bg-opacity-100`}
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
