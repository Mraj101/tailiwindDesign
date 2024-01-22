import React from "react";
import DealImg from "../assets/deal.png";

const Deal = () => {
  return (
    <div class=" flex justify-center items-center mb-20 font-inter">
      <div class=" flex items-center justify-center flex-col w-full">
        <div class="w-full h-34 flex flex-col items-center">
          <h1 class="text-3xl md:text-6xl lg:text-6xl font-bold text-red-600 pb-3 md:pb-10 lg:pb-15 xl:">65 % OFF</h1>
          <div class="w-72 md:w-full text-center">
            <p class="font-inter text-base md:text-4xl lg:text-5xl p-1 md:pb-7 lg:pb-7 text-red-500 font-extralight">our holiday deals are better</p>
            <p class=" text-center text-base md:text-5xl lg:text-4xl font-bold text-black textce pb-4">All categories</p>
          </div>
        </div>
        <div class=" md:w-3/5 flex justify-center">
          <img src={DealImg} alt="deal" />
        </div>
      </div>
    </div>
  );
};

export default Deal;

