import React from 'react';
import { ArrowDown } from "lucide-react";
import { cdn } from '../utils/cdn';

const heroWebm = "https://opts-videos.pages.dev/IMG_5250-720p.webm";
const heroMp4 = "https://opts-videos.pages.dev/IMG_5250-720p.mp4";

function HeroSmall() {
  return (
    <section className="relative w-full h-screen p-2 md:p-4">
      {/* Container for Image and Overlay */}
      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
        
        {/* The "Top Layer" Gradient - Now respects rounded corners */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Text Content - Positioned over the gradient */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-20">
          <div className="max-w-4xl">
            <h1 className="text-white text-4xl md:text-6xl sm:leading-tight mb-4 drop-shadow-md tracking-tight">
              Luxury Interior Design & Fit-Out Company in Dubai
            </h1>
            
            <div className="border-t border-white/40 pt-4 mb-8 max-w-sm">
              <p className="text-white text-base md:text-xl leading-relaxed opacity-90">
                At OTPS Express Interior we build inspiration of your dreams into reality.
              </p>
            </div>
            
            <div className="text-white ">
              <ArrowDown size={34} />
            </div>
          </div>
        </div>

        {/* Background Image */}
<video 
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  title="OPTS Interior hero video"
  aria-label="OPTS Interior hero video"
  className="relative w-full h-full object-cover rounded-xl"
  poster="https://opts-assets.pages.dev/IMG_5250-poster.webp"
>
  <source src={heroWebm} type="video/webm" />
  <source src={heroMp4} type="video/mp4" />
</video>

      </div>
    </section>
  );
}


export default HeroSmall;
