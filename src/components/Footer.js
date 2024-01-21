import React from "react";
import FaceBookImg from "../assets/Facebook.png";
import InstaImg from "../assets/Instagram.png";
import LinkedinImg from "../assets/Linkedin.png";
import TwitterImg from "../assets/Twitter.png";

const Footer = () => {
  return (
    <div className="bg-black text-white p-7">
      <div class="flex items-center justify-center flex-col w-full py-7">
        <div class='flex items-center justify-between w-full'>
          <div className="float-left">
            <p>44, Big Building Roosevelt Street</p>
            <p>Beach Gardens Florida 33410</p>
          </div>
          <div className="float-right">
            <p>+00 123 584 124</p>
            <p>www.website.com</p>
          </div>
        </div>

        {/* Top Right */}

        {/* Middle - Social Media Icons */}
        <div className="m-10 flex items-center justify-center w-11/12 ">
          <img class="object-cover px-1" src={FaceBookImg} alt="Facebook" className="inline-block mx-2" />
          <img class="object-cover px-1" src={InstaImg} alt="Instagram" className="inline-block mx-2" />
          <img class="object-cover px-1" src={LinkedinImg} alt="LinkedIn" className="inline-block mx-2" />
          <img class="object-cover px-1" src={TwitterImg} alt="Twitter" className="inline-block mx-2" />
        </div>

        {/* Bottom Left */}

        <div class=' flex items-center justify-between w-full'>
          <div >
            <p>2017, All Rights Reserved.</p>
          </div>
          <div >
            <p>Unsubscribe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
