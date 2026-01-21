import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import right1 from '../assets/right1.jpg'
import left1 from '../assets/left1.jpg'
import right2 from '../assets/right2.jpg'
import left2 from '../assets/left2.jpg'
import hero from '../assets/hero.jpg'


gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.normalizeScroll(true)



export default function Hero() {
  const sectionRef = useRef(null)
  const heroRef = useRef(null)
  const leftRef = useRef([])
  const rightRef = useRef([])
const leftImages = [
  { src: left1, w: "28vw", h: "29vh", x: "-7.5vw", y: "-45vh" },
  { src: left2, w: "22vw", h: "25vh", x: "-1.5vw", y: "-15vh" },
]

const rightImages = [
  { src: right1, w: "22vw", h: "25vh", x: "9.5vw", y: "-9vh" },
  { src: right2, w: "28vw", h: "29vh", x: "9.5vw", y: "17vh" },
]






  useEffect(() => {



    const ctx = gsap.context(() => {


    leftRef.current.forEach(el => {
  gsap.set(el, {
    x: el.dataset.x,
    y: el.dataset.y,
  })
})

rightRef.current.forEach(el => {
  gsap.set(el, {
    x: el.dataset.x,
    y: el.dataset.y,
  })
})

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 0.6,
          pin: true,
        },
        
      })

      // HERO SHRINK
tl.to(heroRef.current, {
  width: "28%",
  height: "71vh",
  ease: "power3.inOut",
  top:"8%"
},
0
)




      // LEFT ITEMS IN
tl.from(
  leftRef.current,
  {
    x: "-=40vw",
    y: "+=100",
    force3D: true,
    stagger: 0.15,
    ease: "power3.out",
  },
  0.2
)

tl.from(
  rightRef.current,
  {
    x: "+=40vw",
    y: "+=100",
    force3D: true,
    stagger: 0.15,
    ease: "power3.out",
  },
  0.2
)


      // HOLD FRAME
      tl.to({}, { duration: 0.4 })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
<section ref={sectionRef} className="scroll-section flex  justify-center">

  {/* FULLSCREEN HERO (INITIAL) , comfort, and practical living */}
  <div ref={heroRef} className="hero-full p-2 relative">
    <div className="absolute w-full h-full z-10 text-white  font-semibold flex flex-col justify-end items-center ">
        <h1 className="text-[4.8vw]">Designing interiors and furniture that balance </h1>
        <h1 className="text-[20vw] -mt-[8vw] " > aesthetics  </h1>
        </div>
    <img className="rounded-xl relative " src={hero} />

  </div>

  {/* GRID CONTENT (REVEALED LATER) */}
  <div className="grid-layout">
    <div className="side-column">
      {leftImages.map((img, i) => (
        <div key={i} ref={el => leftRef.current[i] = el} className="side-item"
          data-x={img.x}
  data-y={img.y}
            style={{
      width: img.w,
      height: img.h,


    }}
        >
          <img className="" src={img.src} />
        </div>
      ))}
    </div>

<div className="hero-slot" />


    <div className="side-column">
      {rightImages.map((img, i) => (
        <div key={i} ref={el => rightRef.current[i] = el} className="side-item"
          data-x={img.x}
  data-y={img.y}
            style={{
      width: img.w,
      height: img.h,

    }}
        >
          <img src={img.src} />
        </div>
      ))}
    </div>
  </div>

</section>

  )
}
