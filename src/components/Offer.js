import React from "react";
import FireworksImg from "../assets/Fireworks.png";
import NewYearImg from "../assets/newyear.png"
import "./css/Offer.css"; // Import your CSS file here (if not already done)

const Offer = () => {
  return (
    <div class="flex items-center justify-center py-7 offer-container">
      <div class=" flex items-center w-full">
        <div class="w-1/3 offer-text">
          <p class="offer-line">New best offer coming soon</p>
          <h1 class="coming-soon-text">Coming Soon</h1>
          <p class="offer-paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sit
            temporibus corporis sequi aliquam possimus repellat dignissimos
            blanditiis dolorum veritatis? Numquam facilis quos optio. Nihil
            laboriosam ex eius adipisci natus?
          </p>
        </div>
        <div class="w-1/3 flex justify-center items-center m-10">
          <div class="border-4 border-red-500 rounded-full w-11/12 p-10">
            <img src={FireworksImg} alt="fireworks" class="fireworks-img " />
          </div>
        </div>
        <div class="w-1/3 new-year-info">
          <div class="new-year-text">2024</div>
          <div class="new-year-text">
            <img src={NewYearImg} alt="newyear" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
