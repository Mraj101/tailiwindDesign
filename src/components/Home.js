import React from 'react'
import Banner from './Banner'
import Deal from './Deal'
import Party from './Party'
import JoinNow from './JoinNow'
import Offer from './Offer'
import HolidaySale from './HolidaySale'
import GiftsSection from './GiftsSection'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <div class='flex justify-center items-center flex-col' >
      <div class=' shadow-sm shadow-black-50 bg-white m-2 lg:w-10/12 '>
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
      <Footer/>
    </>
    
  )
}

export default Home
