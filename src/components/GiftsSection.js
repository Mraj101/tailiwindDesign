import React from "react";
import BangleImg from "../assets/bangles.png";
import RedHillImg from "../assets/redhill.png";
import WhiteHillImg from "../assets/whitehill.png";
import VanityBagImg from "../assets/vanitybag.png";
import ParseImg from "../assets/parse.png";
import GlassImg from "../assets/glass.png";

const GiftsSection = () => {
  return (
    <div class="flex items-center">
      <div class="py-7 w-full">
        <div class="font-inter py-1">
          <h2 class="text-red-500 font-semibold py-1">The Best Gifts</h2>
          <h1 class="text-2xl font-extrabold py-2">Our Awesome Portfolio</h1>
          <p class="text-sm font-extralight text-black py-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            in.
          </p>
        </div>
        <div class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-5 md:px-0 lg:px-0 xl:px-0 2xl:px-0 gap-5">
          <div class="row-span-1">
            <img
              className="object-contain w-full h-full"
              src={VanityBagImg}
              alt="image"
            />
          </div>
          <div class="row-span-1">
            <img
              className="object-contain w-full h-full"
              src={ParseImg}
              alt="imgage"
            />
          </div>
          <div class="row-span-1">
            <img src={RedHillImg} alt="imgage" />
          </div>
          <div class="row-span-1">
            <img src={WhiteHillImg} alt="imgage" />
          </div>
          <div class="row-span-1">
            <img src={GlassImg} alt="imgage" />
          </div>
          <div class="row-span-1">
            <img src={BangleImg} alt="imgage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftsSection;
