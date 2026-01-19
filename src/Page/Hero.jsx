import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import right1 from '../assets/right1.jpg'
import left1 from '../assets/left1.jpg'
import right2 from '../assets/right2.jpg'
import left2 from '../assets/left2.jpg'
import hero from '../assets/hero.jpg'
import { Flip } from "gsap/flip"
gsap.registerPlugin(ScrollTrigger, Flip)
ScrollTrigger.normalizeScroll(true)



export default function Hero() {
  const sectionRef = useRef(null)
  const heroRef = useRef(null)
  const leftRef = useRef([])
  const rightRef = useRef([])
const leftImages = [
  { src: left1, w: "28vw", h: "29vh", x: -125, y: -370 },
  { src: left2, w: "22vw", h: "25vh", x: -39, y: -125  },
]

const rightImages = [
  { src: right1, w: "22vw", h: "25vh", x: 150, y: -110 },
  { src: right2, w: "28vw", h: "29vh", x: 150, y: 100 },
]





  useEffect(() => {



    const ctx = gsap.context(() => {


    leftRef.current.forEach(el => {
  gsap.set(el, {
    x: Math.round(Number(el.dataset.x)),
    y: Math.round(Number(el.dataset.y)),
  })
})

rightRef.current.forEach(el => {
  gsap.set(el, {
    x: Math.round(Number(el.dataset.x)),
    y: Math.round(Number(el.dataset.y)),
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
  width: "30%",
  height: "75vh",
  ease: "power3.inOut",
  top:"5%"
},
0
)




      // LEFT ITEMS IN
tl.from(
  leftRef.current,
  {
    x: "-=510",
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
    x: "+=510",
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

  {/* FULLSCREEN HERO (INITIAL) */}
  <div ref={heroRef} className="hero-full p-2 ">
    <img className="rounded-xl" src={hero} />
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
