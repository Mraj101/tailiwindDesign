import React from "react";
import FaceBookImg from "../assets/Facebook.png";
import InstaImg from "../assets/Instagram.png";
import LinkedinImg from "../assets/Linkedin.png";
import TwitterImg from "../assets/Twitter.png";

const Footer = () => {
  return (
    <div className="bg-black text-white font-inter p-4 rounded-t-lg ">
      <div class="flex items-center justify-center flex-col w-full py-7 text-center">
        <div class='flex items-center justify-center flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between xl:flex-row xl:justify-between 2xl:flex-row 2xl:justify-between w-full gap-2'>
          <div class="">
            <p>44, Big Building Roosevelt Street</p>
            <p>Beach Gardens Florida 33410</p>
          </div >
          <div class=""> 
            <p>+00 123 584 124</p>
            <p>www.website.com</p>
          </div>
        </div>

        {/* Top Right */}

        {/* Middle - Social Media Icons */}
        <div className="m-10 flex items-center justify-center w-11/12 gap-2">
          <img class="object-cover px-1" src={FaceBookImg} alt="Facebook" className="inline-block mx-2" />
          <img class="object-cover px-1" src={InstaImg} alt="Instagram" className="inline-block mx-2" />
          <img class="object-cover px-1" src={LinkedinImg} alt="LinkedIn" className="inline-block mx-2" />
          <img class="object-cover px-1" src={TwitterImg} alt="Twitter" className="inline-block mx-2" />
        </div>

        {/* Bottom Left */}

        <div class='flex items-center justify-center flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between xl:flex-row xl:justify-between  w-full gap-2'>
          <div class="">
            <p>2017, All Rights Reserved.</p>
          </div>
          <div class="">
            <p>Unsubscribe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
