import React from "react";
import DealImg from "../assets/deal.png";

const Deal = () => {
  return (
    <div class="border-4 border-blue-500 py-7">
      <div class="border border-yellow-500 flex items-center flex-col w-9/12">
        <div class="border border-red-300 w-3/4 h-34 flex flex-col items-center">
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
