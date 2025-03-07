import React from "react";
import Brand1 from "../../assets/brands/1.png";
import Brand2 from "../../assets/brands/2.png";
import Brand3 from "../../assets/brands/3.png";
import Brand4 from "../../assets/brands/4.jpg";
import Brand5 from "../../assets/brands/5.png";
import Brand6 from "../../assets/brands/6.png";

const BrandsLogo = () => {
  return (
    <>
      <div className="container mb-12 mt-12 sm:mt-0 py-10">
        <h1 className="text-3xl font-semibold sm:text-3xl text-center text-violet-950 dark:text-primary">
          Valuable Clients
        </h1>
        <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">
          <img src={Brand1} alt="" className="w-20" />
          <img src={Brand2} alt="" className="w-20" />
          <img src={Brand3} alt="" className="w-20" />
          <img src={Brand4} alt="" className="w-20" />
          <img src={Brand5} alt="" className="w-20" />
          <img src={Brand6} alt="" className="w-20" />
        </div>
      </div>
    </>
  );
};

export default BrandsLogo;
