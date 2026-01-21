import React from 'react'
import Hero from '../Components/Hero'
import Hero3 from '../Components/Hero3'
import Hero2 from '../Components/Hero2'
import Clients from '../Components/Clients'
import Works from '../Components/Works'
import ChooseUs from '../Components/ChooseUs'

function Home() {
  return (
    <div>
      <Hero/>
      <Hero3/>
      <Hero2/>
      <Clients/>
      <Works/>
      <ChooseUs/>
    </div>
  )
}

export default Home