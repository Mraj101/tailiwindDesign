import React from "react";
import BannerImg from "../assets/Banner.png";

const Banner = () => {
  return (
    <div className=" flex items-center justify-center py-7 mb-20 font-inter">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 rounded-lg"></div>
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 text-center text-white w-9/12" >
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Happy New Year
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2">
            New Year Celebration Party
          </h1>
        </div>
        <img className="w-full" src={BannerImg} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
