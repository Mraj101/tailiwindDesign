import React from "react";
import PartyImg from "../assets/party.png";
import twentyFourImg from "../assets/twentyFour.png"
const Party = () => {
  return (
    <div class=" py-7">
      <div class="relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg gradient-overlay"></div>
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 text-center  w-full flex items-center justify-center h-full">
          <div class=' w-8/12'>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl xl:text-6xl mb-2 text-white">
              Welcome To Midnight Party
            </h1>
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-orange-100">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque similique ut a perspiciatis officiis ipsum, facere 
            </h1>
            <button type="button" class="btn btn-outline-primary float-start">join Now</button>
          </div>
          <div  class=" w-1/4">
            <img class='object-contain ' src={twentyFourImg} alt="2k24" />
          </div>
        </div>
        <img src={PartyImg} alt="party" />
      </div>
    </div>
  );
};

export default Party;
