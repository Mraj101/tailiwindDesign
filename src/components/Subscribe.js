import React from "react";
import emailImg from "../assets/email.png";

const Subscribe = () => {
  return (
    <div className="flex items-center p-2 mb-20">
      <div className="py-7 rounded-lg bg-gray-200 w-full flex items-center justify-center flex-col">
        <div>
          <img src={emailImg} alt="image" />
        </div>
        <div className=" w-4/5 flex items-center justify-center flex-col m-5">
          <h1 className="text-4xl font-extrabold text-center">Subscribe Newsletter</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sunt
            quaerat mollitia cum minima itaque omnis explicabo dolorum eius
            debitis laborum nam harum distinctio, ea, repellendus perferendis
            soluta rerum maxime!
          </p>
        </div>
        <div>
          {/* Enclose the input element within a container (e.g., div) */}
          <div class="relative">
            <input
              class="w-92 md:w-96 placeholder-black-500 border-black rounded-3xl pr-24 p-1.5"
              type="text"
            />
            <span  class="font-medium absolute border-l-1 border-red-300 p-1.5 right-0.5 top-0.7 rounded-r-3xl bg-red-500" >Subscribe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
