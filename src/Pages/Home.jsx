import React from 'react'
import HeroLarge from '../Components/HeroLarge'
import HeroSmall from '../Components/HeroSmall'
import Hero3 from '../Components/Hero3'
import Hero2 from '../Components/Hero2'
import Clients from '../Components/Clients'
import Works from '../Components/Works'
import ChooseUs from '../Components/ChooseUs'

function Home() {
  return (
    <div>
<div className="hidden lg:block">
        <HeroLarge />
      </div>

      {/* Shown on small screens, hidden on 'lg' and up */}
      <div className="block lg:hidden">
        <HeroSmall />
      </div>
      <Hero2/>
      <Hero3/>
      <Clients/>
      <Works/>
      <ChooseUs/>
    </div>
  )
}

export default Home