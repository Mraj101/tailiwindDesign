import React from "react";
import BannerImg from "../assets/Banner.png";

const Banner = () => {
  return (
    <div className="border-4 border-red-200 flex items-center justify-center py-14">
      <div className="border-4 w-4/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35"></div>
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2">Happy New Year</h1>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">New Year Celebration Party</h2>
        </div>
        <img className="w-full h-auto " src={BannerImg} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
