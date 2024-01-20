import React from "react";
import FireworksImg from "../assets/Fireworks.png";
import NewYearImg from "../assets/newyear.png"
import "./css/Offer.css"; // Import your CSS file here (if not already done)

const Offer = () => {
  return (
    <div class="flex items-center justify-center py-7 offer-container">
      <div class="w-full flex items-center justify-between">
        <div class=" offer-text w-1/3 h-72 overflow-hidden">
          <p class="offer-line">New best offer coming soon</p>
          <h1 class="coming-soon-text">Coming Soon</h1>
          <p class="offer-paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sit
            temporibus corporis sequi aliquam possimus repellat dignissimos
            blanditiis dolorum veritatis? Numquam facilis quos optio. Nihil
            laboriosam ex eius adipisci natus?
          </p>
        </div>
        <div class=" w-1/4 flex items-center justify-center">
          <div class="border-4 border-red-500 rounded-full   ">
            <img src={FireworksImg} alt="fireworks" class="fireworks-img w-full object-contain p-4" />
          </div>
        </div>
        <div class="-year-info  w-1/3  flex items-end flex-col">
          <div class="new-year-text text-center">
            <h3>2024</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, sapiente?</p>
          </div>
          <div class="new-year-text">
            <img src={NewYearImg} alt="newyear" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
