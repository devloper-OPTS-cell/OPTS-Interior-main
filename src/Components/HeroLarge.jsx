import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import right1 from '../assets/right1.jpg'
import left1 from '../assets/left1.jpg'
import right2 from '../assets/right2.jpg'
import left2 from '../assets/left2.jpg'
import hero from '../assets/hero.jpg'
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger)

export default function HeroLarge() {
  const sectionRef = useRef(null)
  const heroRef = useRef(null)
  const textRef = useRef(null)
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
    // 1. Initialize MatchMedia
    let mm = gsap.matchMedia();
    
    // 2. Create the context
    const ctx = gsap.context(() => {

      // 3. WRAP EVERYTHING IN MATCH MEDIA
      // This code ONLY runs if screen width is 800px or larger
      mm.add("(min-width: 800px)", () => {

          // --- ALL YOUR PREVIOUS ANIMATION CODE GOES HERE ---
          
          // Set initial positions
          leftRef.current.forEach(el => {
            gsap.set(el, { x: el.dataset.x, y: el.dataset.y })
          })
          rightRef.current.forEach(el => {
            gsap.set(el, { x: el.dataset.x, y: el.dataset.y })
          })

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=200%",
              scrub: 0.6,
              pin: true,
              // preventOverlaps: true, // Good for resize robustness
              // fastScrollEnd: true    // Good for fast scrolling
            },
          })

          // Text Fade
          tl.to(textRef.current, { opacity: 0, duration: 0.2, ease: "power1.out" }, 0)

          // Hero Shrink
          tl.to(heroRef.current, {
            width: "28%",
            height: "71vh",
            ease: "power3.inOut",
            top: "8%"
          }, 0)

          // Left Items In
          tl.from(leftRef.current, {
            x: "-=40vw", y: "+=100", force3D: true, stagger: 0.15, ease: "power3.out",
          }, 0.2)

          // Right Items In
          tl.from(rightRef.current, {
            x: "+=40vw", y: "+=100", force3D: true, stagger: 0.15, ease: "power3.out",
          }, 0.2)

          // Hold Frame
          tl.to({}, { duration: 0.4 })
      }); 

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="scroll-section flex justify-center overflow-hidden">

      {/* MOBILE CSS STRATEGY: 
         Since GSAP won't run on mobile, these elements will sit in their default CSS positions.
         
         1. Hero: On mobile (default), it will just be full screen because of 'w-screen h-screen'.
         2. Text: On mobile, it stays visible because GSAP never fades it out.
         3. Side Images: IMPORTANT! Add 'hidden md:block' to hide the flying images on mobile, 
            otherwise they will sit nicely on top of your hero and look broken.
      */}

      {/* FULLSCREEN HERO */}
      <div ref={heroRef} className="hero-full p-2 relative w-screen h-screen">
        {/* Shadow Overlay Layer - Locked to the image container area */}
        <div className="absolute inset-2 z-[5] bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-xl pointer-events-none" />
        
        <div ref={textRef} className="absolute h-full w-[50vw] z-10 text-white flex flex-col justify-end items-start p-20 ">
          <h1 className="text-5xl leading-tight">Building designed spaces with precision for you. </h1>
          <p className="text-lg mb-20 text-xl w-[35vw] border-t mt-2 leading-tight"> 
            At OTPS Express Interior we build inspiration of your dreams into reality. 
          </p>
          <p> <ArrowDown size={34} /> </p>
        </div>
        <img className="rounded-xl relative w-full h-full object-cover" src={hero} alt="Hero" />
      </div>

      {/* GRID CONTENT */}
      {/* ADDED 'hidden md:block' -> This hides the side columns on mobile so they don't look broken */}
      <div className="grid-layout hidden md:block">
        <div className="side-column">
          {leftImages.map((img, i) => (
            <div key={i} ref={el => leftRef.current[i] = el} className="side-item"
              data-x={img.x} data-y={img.y}
              style={{ width: img.w, height: img.h }}
            >
              <img src={img.src} alt="" />
            </div>
          ))}
        </div>

        <div className="hero-slot" />

        <div className="side-column">
          {rightImages.map((img, i) => (
            <div key={i} ref={el => rightRef.current[i] = el} className="side-item"
              data-x={img.x} data-y={img.y}
              style={{ width: img.w, height: img.h }}
            >
              <img src={img.src} alt="" />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}