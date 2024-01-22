import React from "react";
import DiscountImg from "../assets/discount.png";
import WomanImg from "../assets/woman.png";
import RectangleImg from "../assets/rectangleRed.png";
import GiftBox from "../assets/giftBox.png";

const HolidaySale = () => {
  return (
   
      <div class="mb-20 ">
        <div class=" flex justify-center items-center flex-col mb-2">
          <h2 class="text-md font-semibold text-black-600 py-2">
            What is Functional
          </h2>
          <h1 class="text-4xl font-bold text-black-600 py-1">
            <span class="text-4xl font-bold text-red-600">Holiday</span> Sale
            50%
          </h1>
          <p class="w-3/4 overflow-hidden py-1 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            fugiat eligendi doloremque distinctio incidunt vitae modi nam harum
            fugit inventore!
          </p>
        </div>
        <div class=" flex items-center justify-between">
          <div class="w-3/5"></div>
          <div class="relative w-1/3 ">
            <div class="w-20 md:w-36 lg:w-44 xl:w-52 2xl:w-92  absolute top-10 -left-10 md:top-16  md:-left-20 lg:top-20 lg:-left-24 xl:-left-28 2xl:-left-28 2xl:top-48">
              <img src={DiscountImg} alt="discounts" />
            </div>
            <img class="w-full" src={WomanImg} alt="WomanImg" />
          </div>
        </div>
        <div class="relative">
          <div class="absolute w-2/5 left-5 -top-20 md:-top-36 lg:-top-48 xl:-top-68 2xl:-top-72">
            <img src={GiftBox} alt="giftbox" />
          </div>
          <img class="w-full" src={RectangleImg} alt="rectangleImage" />
        </div>
      </div>
  );
};

export default HolidaySale;
