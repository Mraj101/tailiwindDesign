import React from 'react'
import Banner from './Banner'
import Deal from './Deal'
import Party from './Party'
import JoinNow from './JoinNow'
import Offer from './Offer'

const Home = () => {
  return (
    <div class='flex justify-center bg-yellow-100' >
      <div class='w-9/12  shadow-sm shadow-black-50 bg-white'>
      <Banner/>
      <Deal/>
      <Party/>
      <JoinNow/>
      <Offer/>
      </div>
    </div>
  )
}

export default Home
