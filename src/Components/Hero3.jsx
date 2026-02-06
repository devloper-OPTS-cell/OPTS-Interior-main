import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IMG_5079 from '../assets/IMG_5079.jpg';
import IMG_5078 from '../assets/IMG_5078.png';
import IMG_5080 from '../assets/IMG_5080.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Hero3() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=140%",
          pin: true,
          scrub: true,
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

      // 🟡 HOLD img-1
      tl.to({}, { duration: 0.35 });

      // 🔵 img-1 → img-2
      tl.to(".img-2", { opacity: 1, duration: 0.7, ease: "power1.out" })
        .to(".img-1", { opacity: 0, duration: 0.7, ease: "power1.out" }, "<")
        .to(".text-1", { clipPath: "inset(0 0 100% 0)", opacity: 0, duration: 0.01 }, "<")
        .to(".text-2", { clipPath: "inset(0 0 0% 0)", opacity: 1, duration: 0.01 }, "<");

      // 🟡 HOLD img-2
      tl.to({}, { duration: 0.35 });

      // 🔵 img-2 → img-3
      tl.to(".img-3", { opacity: 1, duration: 0.7, ease: "power1.out" })
        .to(".img-2", { opacity: 0, duration: 0.7, ease: "power1.out" }, "<")
        .to(".text-2", { clipPath: "inset(0 0 100% 0)", opacity: 0, duration: 0.01 }, "<")
        .to(".text-3", { clipPath: "inset(0 0 0% 0)", opacity: 1, duration: 0.01 }, "<");

      // 🟡 HOLD img-3
      tl.to({}, { duration: 0.35 });

      // ✅ refresh ONLY after images load
      const images = sectionRef.current.querySelectorAll("img");
      let loaded = 0;

      images.forEach(img => {
        if (img.complete) {
          loaded++;
        } else {
          img.addEventListener("load", () => {
            loaded++;
            if (loaded === images.length) {
              ScrollTrigger.refresh();
            }
          });
        }
      });

      if (loaded === images.length) {
        ScrollTrigger.refresh();
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Reusable Component with Responsive Margin
  const TextContent = ({ colorClass }) => (
    <>
      <div className={`energy-text text-1 ${colorClass}`}>
        <h1>Design</h1> <h1 className="-mt-2 md:-mt-10">Excellence</h1>
      </div>
      <div className={`energy-text text-2 ${colorClass}`}>
        <h1>Futuristic</h1> <h1 className="-mt-2 md:-mt-10">Interior</h1>
      </div>
      <div className={`energy-text text-3 ${colorClass}`}>
        <h1>Cost-Effective</h1> <h1 className="-mt-2 md:-mt-10">Interiors</h1>
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
              <img src={IMG_5080} className="img-cover" alt="IMG_5080" />
              <h1 className="energy-text2">
Well-planned interiors where aesthetics, comfort, and functionality come together seamlessly.
              </h1>
            </div>

            {/* WRAPPER 2 */}
            <div className="energy-img img-2">
              <img src={IMG_5078} className="img-cover" alt="IMG_5078" />
              <h1 className="energy-text2">
Our designs embrace modern materials, clean lines, and smart layouts to create interiors that feel contemporary, efficient, and future-ready.
              </h1>
            </div>

            {/* WRAPPER 3 */}
            <div className="energy-img img-3">
              <img src={IMG_5079} className="img-cover" alt="IMG_5079" />
              <h1 className="energy-text2">
We create interiors that balance quality, design, and budget — delivering smart solutions that look premium without unnecessary cost.
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

        .energy-img {
          position: absolute;
          width: 90%;
          height: 95%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .img-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          z-index: 1;
          border-radius: 0.75rem;
        }

        .energy-text2 {
          position: absolute;
          z-index: 2;
          bottom: 20px;
          right: 20px;
          width: 300px;
          color: white;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          text-align: right;
          font-size: 1.5rem;
          line-height: 1.3;
        }

        /* --- TEXT POSITIONING --- */
        .text-stack-positioner {
          position: absolute;
          left: -10%;
          top: 0%;
          width: 100%;
          pointer-events: none;
        }

        .energy-text,
        .white-mask-container {
          will-change: clip-path;
        }

        .energy-text {
          position: absolute;
          font-size: 4rem;
          font-weight: 400;
          white-space: nowrap;
        }

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
          pointer-events: none;
        }

        .text-white {
          color: white;
        }

        /* ===================== */
        /* 📱 RESPONSIVE (MOBILE) */
        /* ===================== */

        @media (max-width: 768px) {
          
          .energy-section {
            min-height: 100svh;
          }

          .content-box {
            width: 90vw;
            height: 85vh; 
          }

          .energy-img {
            width: 100%;
            height: 80%; /* Slightly smaller height to fit text */
            top: 55%;    /* Push image DOWN to make room for text */
          }

          .img-cover {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.8);
            border-radius: 0.75rem; /* ✅ Added rounded-xl equivalent */
          }

          /* Unset Clip path on mobile */
          .white-mask-container {
             clip-path: inset(0 0 0 0); 
          }



          .energy-text {
            font-size: 2.8rem;
            line-height: 1.1;
          }

          /* 👇 TEXT POSITION FIXED: Pushed down (15%) to clear navbar */
          .text-stack-positioner {
            left: 20px !important; 
            top: 15% !important; /* Clears the navbar */
            width: auto;
          }

          .energy-text2 {
            width: 80%;
            font-size: 1rem;
            bottom: 20px;
            right: 20px;
          }
        }

        @media (max-width: 480px) {
          .energy-text {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
}
