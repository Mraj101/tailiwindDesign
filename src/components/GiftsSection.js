import React from 'react'
import BangleImg from '../assets/bangles.png'
import RedHillImg from '../assets/redhill.png'
import WhiteHillImg from '../assets/whitehill.png'
import VanityBagImg from '../assets/vanitybag.png'
import ParseImg from '../assets/parse.png'
import GlassImg from '../assets/glass.png'

const GiftsSection = () => {
  return (
    <div class="flex items-center border-4">
        <div class="py-7 w-full">
            <div>
                <h2>The Best Gifts</h2>
                <h1>Our Awesome Portfolio</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, in.</p>
            </div>
            <div class="w-full grid grid-cols-3 grid-rows-2 gap-5">
                <div class="row-span-1">
                    <img className="object-contain w-full h-full" src={VanityBagImg} alt="image" />
                </div>
                <div class="row-span-1">
                    <img className="object-contain w-full h-full" src={ParseImg} alt="imgage" />
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
  )
}

export default GiftsSection