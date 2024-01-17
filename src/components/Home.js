import React from 'react'
import Banner from './Banner'
import Deal from './Deal'
import Party from './Party'
import JoinNow from './JoinNow'

const Home = () => {
  return (
    <div class='border-4 border-solid border-red-500 flex justify-center' >
      <div class='w-10/12 border-4 border-yellow-200 '>
      <Banner/>
      <Deal/>
      <Party/>
      <JoinNow/>
      </div>
    </div>
  )
}

export default Home