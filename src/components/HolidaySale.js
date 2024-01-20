import React from "react";
import DiscountImg from "../assets/discount.png";
import WomanImg from "../assets/woman.png";
import RectangleImg from "../assets/rectangleRed.png";
import GiftBox from "../assets/giftBox.png";

const HolidaySale = () => {
  return (
    <div calss="flex items-center justify-center  ">
      <div class="py-7 ">
        <div class=" flex justify-center items-center flex-col mb-2 ">
          <h2 class="text-md font-semibold text-black-600">What is Functional</h2>
          <h1 class="text-4xl font-bold text-black-600">
            <span class="text-4xl font-bold text-red-600">Holiday</span> Sale 50%
          </h1>
          <p class="w-3/4 overflow-hidden ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            fugiat eligendi doloremque distinctio incidunt vitae modi nam harum
            fugit inventore!
          </p>
        </div>
        <div class=" flex items-center">
          <div class=" w-4/5"></div>
          <div class="relative">
            <div class="absolute w-52 top-20 -left-28">
              <img src={DiscountImg} alt="discounts" />
            </div>
            <img src={WomanImg} alt="WomanImg" />
          </div>
        </div>
        <div class="relative">
          <div class="absolute w-1/2 left-5 -top-72">
            <img src={GiftBox} alt="giftbox" />
          </div>
          <img src={RectangleImg} alt="rectangleImage" />
        </div>
      </div>
    </div>
  );
};

export default HolidaySale;
