import React from "react";
import { FaSolarPanel } from "react-icons/fa";
import { GiTeePipe, GiMechanicalArm, GiWindTurbine } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Solar Infrastructure",
    icon: <FaSolarPanel className="text-4xl text-primary" />,
    link: "#",
    description: " ",
    aosDelay: "0",
  },
  {
    name: "Piping Infrastructure",
    icon: <GiTeePipe className="text-4xl text-primary" />,
    link: "#",
    description: " ",
    aosDelay: "300",
  },
  {
    name: "EPC FOR SOLAR AND WIND",
    icon: <GiWindTurbine className="text-4xl text-primary" />,
    link: "#",
    description: " ",
    aosDelay: "500",
  },
  {
    name: "Mechanical and Fabrication work",
    icon: <GiMechanicalArm className="text-4xl text-primary" />,
    link: "#",
    description: " ",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container text-justify">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We offer a comprehensive range of engineering, construction, and
              infrastructure solutions tailored to meet the needs of diverse
              industries.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">
              <a href="/services">Learn More</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
