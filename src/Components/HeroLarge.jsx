import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cdn } from '../utils/cdn'
// import hero from '../assets/hero.webp'
import { ArrowDown } from "lucide-react";

const right1 = cdn("right1.webp");
const left1 = cdn("left1.webp");
const right2 = cdn("right2.webp");
const left2 = cdn("left2.webp");
const heroWebm = "https://opts-videos.pages.dev/IMG_5250-720p.webm";
const heroMp4 = "https://opts-videos.pages.dev/IMG_5250-720p.mp4";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroLarge() {
  const sectionRef = useRef(null)
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const leftRef = useRef([])
  const rightRef = useRef([])

  const leftImages = [
    { src: left1, alt: "Interior design detail", w: "28vw", h: "29vh", x: "-7.5vw", y: "-45vh", iw: 7990, ih: 5327 },
    { src: left2, alt: "Luxury interior detail", w: "22vw", h: "25vh", x: "-1.5vw", y: "-15vh", iw: 5376, ih: 3584 },
  ]

  const rightImages = [
    { src: right1, alt: "Modern interior detail", w: "22vw", h: "25vh", x: "9.5vw", y: "-9vh", iw: 3000, ih: 2000 },
    { src: right2, alt: "Premium interior detail", w: "28vw", h: "29vh", x: "9.5vw", y: "17vh", iw: 4096, ih: 2800 },
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
          <h1 className="text-5xl leading-tight tracking-tight">Luxury Interior Design & Fit-Out Company in Dubai</h1>
          <p className="text-lg mb-20 text-xl w-[35vw] border-t mt-2 leading-tight text-white/90"> 
            From concept to completion, OPTS Express Interior delivers refined interior solutions with attention to every detail.
          </p>
          <p> <ArrowDown size={34} /> </p>
        </div>
        <video 
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://opts-assets.pages.dev/IMG_5250-poster.webp"
          title="OPTS Interior hero video"
          aria-label="OPTS Interior hero video"
          className="rounded-xl relative w-full h-full object-cover"
        >
          <source src={heroWebm} type="video/webm" />
          <source src={heroMp4} type="video/mp4" />
        </video>
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
              <img
                src={img.src}
                alt={img.alt}
                width={img.iw}
                height={img.ih}
                loading="lazy"
                decoding="async"
              />
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
              <img
                src={img.src}
                alt={img.alt}
                width={img.iw}
                height={img.ih}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
