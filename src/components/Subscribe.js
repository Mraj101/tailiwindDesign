import React from "react";
import emailImg from "../assets/email.png";

const Subscribe = () => {
  return (
    <div className="flex items-center">
      <div className="py-7 w-full border-4 flex items-center justify-center flex-col">
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
          <div className="border border-black">
            <input
              className=" outline-none px-1"
              type="text"
            />
            <span  class="border-l-4 border-black h-full bg-red-500" >Subscribe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
