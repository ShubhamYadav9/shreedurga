import React from "react";
import yellowCar from "../../assets/website/team.png";
import pipe from "../../assets/services/pipe.webp";
import solar from "../../assets/services/solar.webp";
import fab from "../../assets/services/fab.webp";
import epc from "../../assets/services/epc.webp";
import elec from "../../assets/services/elec.webp";
import civil from "../../assets/services/civil.webp";

// import pipe from "../../assets/services/pipe.webp";

const ServicesPage = () => {
  return (
    <>
      <div className="dark:bg-gray-950 dark:text-white duration-300 ">
        <div className="container min-h-[220px] max-w-[1300px] flex mt-10 sm:mt-0 py-20">
          {/* Text section */}

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className=" text-center text-3xl font-light tracking-wide"
          >
            At Shree Durga Engineering, we offer a comprehensive range of
            engineering, construction, and infrastructure solutions tailored to
            meet the needs of diverse industries.
          </p>
        </div>
      </div>

      {/* SOlar infra section */}
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center text-center">
            <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
              {" "}
              <img
                src={solar}
                alt=""
                className="w-full sm:max-w-[280px] md:max-w-[430px]"
              />
            </div>

            <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold text-primary"
                style={{ lineHeight: 1.2 }}
              >
                Solar Power Infrastructure
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-justify text-2xl"
              >
                Fabrication and erection of structures for solar power projects,
                supporting renewable energy development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline Infra section */}
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center text-center">
            <div data-aos="zoom-in" className="order-1 sm:order-1 relative">
              {" "}
              <img
                src={pipe}
                alt=""
                className="w-full sm:max-w-[280px] md:max-w-[430px]"
              />
            </div>

            <div className="space-y-5 order-2 sm:order-2 xl:pr-40 ">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold text-primary"
                style={{ lineHeight: 1.2 }}
              >
                Pipeline Infrastructure
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-justify text-2xl"
              >
                Laying, jointing, hydrotesting, and commissioning of MS
                pipelines for water supply and sewerage projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mechanical and Fabrication work section */}
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center text-center">
            <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
              {" "}
              <img
                src={fab}
                alt=""
                className="w-full sm:max-w-[280px] md:max-w-[430px]"
              />
            </div>

            <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold text-primary"
                style={{ lineHeight: 1.2 }}
              >
                Mechanical and Fabrication work
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-justify text-2xl"
              >
                Structural fabrication, erection, and installation of industrial
                and engineering components.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Civil section */}
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center text-center">
            <div data-aos="zoom-in" className="order-1 sm:order-1 relative">
              {" "}
              <img
                src={civil}
                alt=""
                className="w-full sm:max-w-[280px] md:max-w-[430px]"
              />
            </div>

            <div className="space-y-5 order-2 sm:order-2 xl:pr-40 ">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold text-primary"
                style={{ lineHeight: 1.2 }}
              >
                Civil Construction
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-justify text-2xl"
              >
                Building structures for industrial, commercial, and solar power
                projects, including reservoirs, pump houses, and treatment
                plants.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* EPC section */}
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center text-center">
            <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
              {" "}
              <img
                src={epc}
                alt=""
                className="w-full sm:max-w-[280px] md:max-w-[430px]"
              />
            </div>

            <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold text-primary"
                style={{ lineHeight: 1.2 }}
              >
                COMPLETE EPC FOR SOLAR AND WIND
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-justify text-2xl"
              >
                Complete engineering, procurement, and construction solutions
                for solar and wind energy projects, from design to installation
                and commissioning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Electro-Mech install section */}
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center text-center">
            <div data-aos="zoom-in" className="order-1 sm:order-1 relative">
              {" "}
              <img
                src={elec}
                alt=""
                className="w-full sm:max-w-[280px] md:max-w-[430px]"
              />
            </div>

            <div className="space-y-5 order-2 sm:order-2 xl:pr-40 ">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold text-primary"
                style={{ lineHeight: 1.2 }}
              >
                ELECTRO-MECHANICAL INSTALLATIONS
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-justify text-2xl"
              >
                Installation of pumps, motors, and other electro-mechanical
                systems essential for water management and industrial
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
