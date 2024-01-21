import React from "react";
import PartyImg from "../assets/party.png";
import twentyFourImg from "../assets/twentyFour.png";
const Party = () => {
  return (
    <div class=" py-7">
      <div class="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 rounded-lg bg-gradient-to-r from-black to-red-400"></div>
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 text-center  w-full flex items-center justify-between h-full">
          <div class="w-8/12 md:w-1/3 lg:w-4/5">
            <h1 className=" text-left font-inter font-bold text-xl sm:text-3xl md:text-5xl xl:text-6xl mb-2 text-white w-3/2 ">
              Welcome To Midnight Party
            </h1>
            <p className=" text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-orange-100 mb-2 font-thin">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              similique ut a perspiciatis
            </p>
            <button
              type="button"
              class="btn btn-outline-primary float-start text-white"
            >
              join Now
            </button>
          </div>
          <div class=" w-1/4">
            <img class="object-contain" src={twentyFourImg} alt="2k24" />
          </div>
        </div>
        <div>
          <img
            class="object-cover w-full"
            src={PartyImg}
            alt="party"
          />
        </div>
      </div>
    </div>
  );
};

export default Party;
