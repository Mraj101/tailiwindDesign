import React from "react";
import DealImg from "../assets/deal.png";

const Deal = () => {
  return (
    <div class=" py-7">
      <div class=" flex items-center flex-col w-7/12">
        <div class=" w-3/4 h-34 flex flex-col items-center">
          <h1 class="text-4xl font-bold text-red-600">65 % OFF</h1>
          <div>
            <p>our holiday deals are better</p>
            <p class="text-base font-bold text-black">All categories</p>
          </div>
        </div>
        <div>
          <img src={DealImg} alt="deal" />
        </div>
      </div>
    </div>
  );
};

export default Deal;
