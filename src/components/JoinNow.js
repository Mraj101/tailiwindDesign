import React from "react";
import "./css/joinNow.css";
const JoinNow = () => {
  return (
    <div className="gradient-bg  py-7 rounded-lg flex justify-center items-center shadow-sm shadow-gray mb-20">
      <div class="flex items-center justify-center flex-col font-inter w-full  p-5">
        <p class="p-1">
          <span class=" text-red-500 font-semibold text-lg">Place:</span>New Park hotel
        </p>
        <p class="p-1">
          <span class=" text-red-500 font-semibold text-lg"> Date:</span>31 December Night 2023
        </p>
        <p class="p-2">
          <span class=" text-red-500 font-semibold text-lg">Time:</span>Evening 7:30 Pm To 12.30 Am
        </p >
        <button class="p-1 px-3 border-2 rounded-lg bg-red-500 text-white mt-4">JOIN NOW</button>
      </div>
    </div>
  );
};

export default JoinNow;
