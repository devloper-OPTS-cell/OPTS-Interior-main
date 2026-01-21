import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import right1 from '../assets/right1.jpg';
import left1 from '../assets/left1.jpg';
import right2 from '../assets/right2.jpg';
import left2 from '../assets/left2.jpg';
import hero from '../assets/hero.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Hero2() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: true
        }
      });

      // INITIAL STATES
      gsap.set(".img-2, .img-3", { opacity: 0 });
      gsap.set(".img-1", { opacity: 1 });
      gsap.set(".text-2, .text-3", {
        clipPath: "inset(0 0 100% 0)",
        opacity: 0
      });
      gsap.set(".text-1", {
        clipPath: "inset(0 0 0% 0)",
        opacity: 1
      });

      // STEP 1 → 2
      tl.to(".img-2", { opacity: 1, duration: 0.4, ease: "power1.out" })
        .to(".img-1", { opacity: 0, duration: 0.4, ease: "power1.out" }, "<")
        .to(".text-1", { clipPath: "inset(0 0 100% 0)", opacity: 0, duration: 0.15, ease: "power0.out" }, "<")
        .to(".text-2", { clipPath: "inset(0 0 0% 0)", opacity: 1, duration: 0.15, ease: "power0.out" }, "<");

      // STEP 2 → 3
      tl.to(".img-3", { opacity: 1, duration: 0.4, ease: "power1.out" })
        .to(".img-2", { opacity: 0, duration: 0.4, ease: "power1.out" }, "<")
        .to(".text-2", { clipPath: "inset(0 0 100% 0)", opacity: 0, duration: 0.15, ease: "power0.out" }, "<")
        .to(".text-3", { clipPath: "inset(0 0 0% 0)", opacity: 1, duration: 0.15, ease: "power0.out" }, "<");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Reusable Component
  const TextContent = ({ colorClass }) => (
    <>
      <div className={`energy-text text-1 ${colorClass}`}>
        <h1>Amazing</h1> <h1 className="-mt-10">designs</h1> 
      </div>
      <div className={`energy-text text-2 ${colorClass}`}>
        <h1>Futuristic</h1> <h1 className="-mt-10">Interior</h1> 
      </div>
      <div className={`energy-text text-3 ${colorClass}`}>
        <h1>Affordable</h1> <h1 className="-mt-10">Energy</h1>
      </div>
    </>
  );

  return (
    <section ref={sectionRef} className="energy-section">
      <div className="energy-wrapper">
        <div className="content-box">
          
          {/* LAYER 1: BLACK TEXT (Behind Image) */}
          <div className="text-stack-positioner layer-black">
             <TextContent colorClass="text-black" />
          </div>

          {/* LAYER 2: IMAGES + LOREM IPSUM (Middle) */}
          <div className="image-stack">
            
            {/* WRAPPER 1 */}
            <div className="energy-img img-1">
                <img src={hero} className="img-cover" alt="hero" /> 
                <h1 className="energy-text2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, deserunt.
                </h1>
            </div>

            {/* WRAPPER 2 */}
            <div className="energy-img img-2">
                <img src={left2} className="img-cover" alt="left2" /> 
                <h1 className="energy-text2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde cumque quaerat.
                </h1>
            </div>

            {/* WRAPPER 3 */}
            <div className="energy-img img-3">
                <img src={right2} className="img-cover" alt="right2" />
                <h1 className="energy-text2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci porro.
                </h1>
            </div>

          </div>

          {/* LAYER 3: WHITE TEXT (Top - Masked) */}
          <div className="white-mask-container">
             <div className="text-stack-positioner">
                <TextContent colorClass="text-white" />
             </div>
          </div>

        </div>
      </div>

      <style>{`
        .energy-section {
          height: 100vh;
          position: relative;
          display: flex;
        }

        .energy-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .content-box {
          position: relative;
          width: 70vw;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* --- IMAGES --- */
        .image-stack {
          position: absolute;
          inset: 0;
          z-index: 10;
        }

        /* The Wrapper Div */
        .energy-img {
          position: absolute;
          width: 90%;
          height: 95%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          /* Ensure children (text) are positioned relative to this box */
          display: flex; 
          justify-content: center;
          align-items: center;
        }

        /* The Actual Image Tag */
        .img-cover {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            inset: 0;
            z-index: 1; /* Lowest inside the wrapper */
        }

        /* The Lorem Ipsum Text */
        .energy-text2 {
            position: absolute;
            z-index: 2; /* Sits on top of img-cover */
            bottom: 20px; /* Position at bottom */
            right: 20px;  /* Position at right */
            width: 300px; /* Limit width so it wraps */
            color: white;
            font-size: 1rem;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5); /* Make it readable */
            text-align: right;
            font-size: 2rem;
        }


        /* --- TEXT POSITIONING --- */
        .text-stack-positioner {
          position: absolute;
          left: -10%; 
          top: 0%;
          width: 100%;
          pointer-events: none;
        }

        .energy-text {
          position: absolute;
          font-size: 5rem;
          font-weight: 500;
          white-space: nowrap;
        }

        /* --- LAYER LOGIC --- */
        .layer-black {
            z-index: 5;
        }
        .text-black {
            color: black;
        }

        .white-mask-container {
            position: absolute;
            inset: 0;
            z-index: 20;
            clip-path: inset(2.5% 5% 2.5% 5%);
            pointer-events: none; /* Important so you can click/select stuff below if needed */
        }

        .text-white {
            color: white;
        }

      `}</style>
    </section>
  );
}