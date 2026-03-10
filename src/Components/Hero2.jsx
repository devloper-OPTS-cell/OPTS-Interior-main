import React from "react";
import { Link } from "react-router-dom";
import { cdn } from "../utils/cdn";

const storyImage = cdn("left1.webp");

function Hero2() {
  return (
    <section className=" px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.9fr] lg:gap-20">
        <div className="max-w-3xl">
          <h2 className="font-grotesk text-5xl leading-[0.95] tracking-tight text-[#222] md:text-7xl">
            OPTS <span className="font-light text-[#525252]">interior vision</span>
          </h2>

          <p className="mt-10 text-2xl leading-relaxed text-[#323232] md:text-3xl">
            From concept to completion, OPTS Express Interior delivers refined interior
            solutions with attention to every detail.
          </p>

          <p className="mt-8 text-xl leading-relaxed text-[#474747] md:text-2xl">
            We create unique solutions in interior design and build exclusive spaces
            focused on modern needs, authenticity, and long-term functionality.
          </p>

          <Link
            to="/about-us"
            className="mt-12 inline-flex items-center justify-center border border-[#3b3b3b] px-8 py-3 text-sm tracking-widest text-[#2b2b2b] transition hover:bg-[#2b2b2b] hover:text-white"
          >
            READ MORE
          </Link>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden border border-black/10 shadow-sm">
            <img
              src={storyImage}
              alt="OPTS Interior design story"
              className="h-[420px] w-full object-cover grayscale md:h-[620px]"
              width={7990}
              height={5327}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
