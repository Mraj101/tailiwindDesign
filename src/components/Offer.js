import React from "react";
import FireworksImg from "../assets/Fireworks.png";
import NewYearImg from "../assets/newyear.png";
import "./css/Offer.css"; // Import your CSS file here (if not already done)

const Offer = () => {
  return (
    <div className="flex items-center justify-center offer-container mb-20 font-inter">
      <div className=" w-full flex flex-col md:flex-row items-center justify-between">
        <div className=" w-full md:w-1/3 h-72 overflow-hidden md:mb-0 ">
          <p className="offer-line font-inter text-center">New best offer coming soon</p>
          <h1 className="coming-soon-text font-inter text-center">Coming Soon</h1>
          <p className="font-inter font-light text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sit temporibus corporis sequi aliquam possimus repellat dignissimos blanditiis dolorum veritatis? Numquam facilis quos optio. Nihil laboriosam ex eius adipisci natus?
          </p>
        </div>
        <div className="w-8/12 md:w-1/4 flex items-center justify-center mb-4 md:mb-0">
          <div className="border-4 border-red-500 rounded-full">
            <img src={FireworksImg} alt="fireworks" className="fireworks-img w-full object-contain p-4" />
          </div>
        </div>
        <div className=" w-full md:w-1/3 flex  flex-col items-center md:items-start md:px-8 ">
          <div className=" w-7/12 md:w-full mb-4 md:mb-0">
            <h3 class="text-center text-lg md:text-start md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold text-red-500">2024</h3>
            <p class="text-center md:text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, sapiente?</p>
          </div>
          <div className="">
            <img src={NewYearImg} alt="newyear"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
