import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "../../components/loader";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await fetch(
          `https://portfoloi-server.vercel.app/api/v1/projects/${id}`
        );
        const projectData = await res.json();
        setProject(projectData.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    getProject();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  const {
    name,
    description,
    role,
    startDate,
    endDate,
    images,
    clientRepoLink,
    serverRepoLink,
    liveDemoLink,
    techStack,
    teamMembers,
    testimonials,
  } = project;

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header Section */}
      <header className="bg-gray-600 text-white p-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="mt-2 text-lg">
            <span className="font-semibold">Role:</span> {role}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Duration:</span> {startDate} -{" "}
            {endDate}
          </p>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-10">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <div
            className="text-gray-600 prose"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </motion.div>

        {/* Images */}
        {images?.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-600">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Tech Stack */}
        {techStack?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-600">
              Tech Stack
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              {techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          {liveDemoLink && (
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md"
            >
              Live Demo
            </a>
          )}
          {clientRepoLink && (
            <a
              href={clientRepoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md"
            >
              Client Repo
            </a>
          )}
          {serverRepoLink && (
            <a
              href={serverRepoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md"
            >
              Server Repo
            </a>
          )}
        </motion.div>

        {/* Team Members */}
        {teamMembers?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-600">
              Team Members
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              {teamMembers.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Testimonials */}
        {testimonials?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-600">
              Testimonials
            </h2>
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={index}
                className="italic text-gray-700 mb-4 border-l-4 border-gray-500 pl-4"
              >
                {testimonial}
              </blockquote>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
