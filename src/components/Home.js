import React from 'react'
import Banner from './Banner'
import Deal from './Deal'
import Party from './Party'
import JoinNow from './JoinNow'
import Offer from './Offer'

const Home = () => {
  return (
    <div class=' flex justify-center' >
      <div class='w-10/12'>
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
