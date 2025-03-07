import React from "react";

const About = () => {
  return (
    <>
      <div className="dark:bg-gray-950 dark:text-white duration-300 ">
        <div className="container min-h-[320px] max-w-[1300px] flex mt-10 sm:mt-0 py-20">
          {/* Text section */}

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className=" text-center text-3xl font-light tracking-wide"
          >
            Shree Durga Engineering is a trusted name in infrastructure
            development, civil construction and providing end-to-end solutions
            across solar and wind energy projects. Our expertise spans water
            supply and sewerage projects, renewable energy infrastructure
            development, mechanical and electro-mechanical installations,
            pipeline laying and civil construction. We specialize in
            fabrication, erection, and installation of structures for solar
            power projects, ensuring sustainable and energy-efficient solutions.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center text-center">
            {/* Mission section img*/}
            <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold text-primary"
                style={{ lineHeight: 1.2 }}
              >
                Mission
              </h1>
            </div>

            {/* Mission section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-justify text-2xl"
              >
                Our mission is to deliver high-quality, efficient, and
                sustainable engineering solutions across water, energy, and
                infrastructure sectors. We are dedicated to building a better
                future through precision engineering, innovation, and
                eco-friendly construction practices. By integrating cutting-edge
                technology and skilled expertise, we aim to contribute to
                India’s urban and industrial growth while maintaining a strong
                focus on safety, reliability, and sustainability.
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center text-center">
            {/* Vision section img*/}
            <div data-aos="zoom-in" className="order-1 sm:order-1 relative">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold text-primary"
                style={{ lineHeight: 1.2 }}
              >
                Vision
              </h1>
            </div>

            {/* Vision section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-justify text-2xl"
              >
                To be a leading force in engineering and infrastructure
                solutions, recognized for excellence, sustainability, and
                innovation. We strive to transform communities by developing
                resilient water supply systems, renewable energy solutions and
                advanced civil infrastructure. Our vision is to drive progress
                through engineering, ensuring a greener, more sustainable world
                for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dark:bg-gray-950 dark:text-white duration-300 ">
        <div className="container min-h-[320px] max-w-[1300px] text-center mt-10 sm:mt-0 py-20">
          {/* Text section */}
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl font-semibold text-primary"
            style={{ lineHeight: 1.2 }}
          >
            Our Philosophy
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="pt-5 text-3xl font-light tracking-wide"
          >
            Shree Durga Engineering is a trusted name in infrastructure
            development, civil construction and providing end-to-end solutions
            across solar and wind energy projects. Our expertise spans water
            supply and sewerage projects, renewable energy infrastructure
            development, mechanical and electro-mechanical installations,
            pipeline laying and civil construction. We specialize in
            fabrication, erection, and installation of structures for solar
            power projects, ensuring sustainable and energy-efficient solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
