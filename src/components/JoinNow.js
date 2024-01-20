import React from "react";
import "./css/joinNow.css";
const JoinNow = () => {
  return (
    <div className="gradient-bg  py-7 rounded-lg h-96 flex justify-center items-center shadow-sm shadow-gray">
      <div class="flex items-center justify-center flex-col ">
        <p>
          <span>Place:</span>New Park hotel
        </p>
        <p>
          <span>Date:</span>31 December Night 2023
        </p>
        <p>
          <span>Time:</span>Evening 7:30 Pm To 12.30 Am
        </p>
        <button>JOIN NOW</button>
      </div>
    </div>
  );
};

export default JoinNow;
