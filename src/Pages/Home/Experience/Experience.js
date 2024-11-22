import React, { useEffect, useState } from "react";
import Loader from "../../../components/loader";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExperiences = async () => {
      try {
        const res = await fetch(
          "https://portfoloi-server.vercel.app/api/v1/experiences"
        );
        const experienceData = await res.json();
        setExperiences(experienceData.data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    getExperiences();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className="py-10 min-h-screen " id="experience">
      <h1 className="text-3xl font-bold text-center text-white mb-12">
        Experience
      </h1>

      <div className="relative flex flex-col items-center">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[#44475a]"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp._id}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 0 ? "lg:items-start" : "lg:items-end"
            } mb-10 relative`}
          >
            {/* Connector Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-600 rounded-full border-4 border-gray-200"></div>

            {/* Content */}
            <div
              className={`relative w-full lg:w-5/12 p-6 bg-gray-600 rounded-lg shadow-lg ${
                index % 2 === 0 ? "lg:ml-10 text-left" : "lg:mr-10 lg:ml-auto "
              }`}
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                {exp.company}
              </h2>
              <p className="text-sm font-bold text-gray-200 mb-2">
                {exp.title}
              </p>
              <p className="text-[#f8f8f2] text-sm">
                {exp.startDate} - {exp.endDate} | {exp.location}
              </p>
              <p className="text-[#f8f8f2] mt-4">{exp.details}</p>

              {exp.website && (
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mt-4 inline-block"
                >
                  Visit Website
                </a>
              )}

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white">
                  Tech Stack:
                </h3>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {exp.techStack.map((tech, index) => (
                    <li
                      key={index}
                      className="px-3 py-1 bg-gray-200 text-[#1e1e2f] rounded-full text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
