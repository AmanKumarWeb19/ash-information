import React from "react";

const Banner = () => {
  return (
    <div className="border border-red-500 w-full relative">
      <div className="w-full">
        <img
          className="w-full"
          src="https://d34mfkth6cubud.cloudfront.net/wp-content/uploads/2023/02/21093741/Pros-and-Cons-of-Living-in-Villas-_-Cover-21-2-23.jpg"
          alt=""
        />
      </div>

      <div className="border absolute top-1/2 transform translate-x-[21%] -translate-y-1/2 text-white w-5/12">
        <div className="flex gap-2">
          <div className="px-6 py-4 relative">
            <div className="absolute left-0 right-0 h-px bg-white top-1/2 transform -translate-y-1/2"></div>
          </div>
          <div>
            <p>We are Offering the</p>
          </div>
        </div>

        <div className="leading-relaxed ">
          <h1 className="text-6xl font-serif tracking-wide sm:text-4xl md:text-5xl">
            Best Real Estate Deals
          </h1>
          <p className="tracking-wide leading-relaxed text-gray-200 sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quam
            esse, commodi sint quia fugiat dolorem architecto vero enim mollitia
            sunt error quibusdam! Cum aperiam tempore repudiandae, saepe nobis
            pariatur.
          </p>
        </div>

        <div className="border border-red-500 w-28 p-2 leading-relaxed mt-6 bg-green-500 rounded-lg">
          <button>More Details</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
