import React from 'react'
import Banner from './Banner'
import Deal from './Deal'
import Party from './Party'
import JoinNow from './JoinNow'
import Offer from './Offer'
import HolidaySale from './HolidaySale'
import GiftsSection from './GiftsSection'
import Subscribe from './Subscribe'

const Home = () => {
  return (
    <div class='flex justify-center bg-yellow-100' >
      <div class=' shadow-sm shadow-black-50 bg-white  lg:w-9/12 '>
      <Banner/>
      <Deal/>
      <Party/>
      <JoinNow/>
      <Offer/>
      <HolidaySale/>
      <GiftsSection/>
      <Subscribe/>
      </div>
    </div>
  )
}

export default Home
