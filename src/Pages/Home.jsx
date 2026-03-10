import React, { Suspense } from 'react'
import Seo from '../Components/Seo'
import { Helmet } from "react-helmet-async";
import { businessSchema, breadcrumbSchema } from '../utils/seo'
import HeroLarge from '../Components/HeroLarge'
import HeroSmall from '../Components/HeroSmall'
import Hero3 from '../Components/Hero3'
import Hero2 from '../Components/Hero2'
import TurnkeyStats from '../Components/TurnkeyStats'

const Clients = React.lazy(() => import("../Components/Clients"));
const Works = React.lazy(() => import("../Components/Works"));
const ChooseUs = React.lazy(() => import("../Components/ChooseUs"));

function Home() {
  return (
    <div>
      <Seo
        title="Interior Design & Fit-Out Company in Dubai"
        description="OPTS Express Interior Design provides premium interior design, fit-out, and custom furniture solutions for residential and commercial spaces in Dubai."
        path="/"
        jsonLd={[businessSchema, breadcrumbSchema("/")]}
      />
      <Helmet>
        <link
          rel="preload"
          as="video"
          href="https://opts-videos.pages.dev/IMG_5250-720p.mp4"
          type="video/mp4"
        />
        <link
          rel="preload"
          as="video"
          href="https://opts-videos.pages.dev/IMG_5250-720p.webm"
          type="video/webm"
        />
      </Helmet>
<div className="hidden lg:block">
        <HeroLarge />
      </div>

      {/* Shown on small screens, hidden on 'lg' and up */}
      <div className="block lg:hidden">
        <HeroSmall />
      </div>
      <Hero2/>
      <Hero3/>
      <Suspense fallback={<div className="min-h-[280px]" />}>
        <Clients />
      </Suspense>
      <Suspense fallback={<div className="min-h-[280px]" />}>
        <Works />
      </Suspense>
            <TurnkeyStats />
      <Suspense fallback={<div className="min-h-[220px]" />}>
        <ChooseUs />
      </Suspense>

    </div>
  )
}

export default Home
