import React from 'react';
import { cdn } from '../utils/cdn';

const img1 = cdn("IMG_4983.webp");
const img2 = cdn("IMG_5184.webp");
const img3 = cdn("IMG_5186.webp");
const img4 = cdn("IMG_5188.webp");
const img5 = cdn("IMG_5189.webp");
const img6 = cdn("IMG_1232.webp");

const worksData = [
  {
    id: '01',
    title: "Gulfood Dubai: Azerbaijan Pavilion",
    category: "A refined cultural pavilion celebrating Azerbaijan’s premium food brands with elegant exhibition layouts, warm material tones, and precision-built detailing. The space blends modern presentation with handcrafted finishes to create an upscale, welcoming experience for visitors.",
    img: img1,
    width: 5712,
    height: 4284
  },
  {
    id: '02',
    title: "Luxury Villa Outdoor Design",
    category: "Resort-inspired outdoor living designed for comfort and sophistication, featuring premium stone, rich textures, and tailored lighting. The layout balances open-air relaxation with functional zones for dining, lounging, and entertaining in a private villa setting.",
    img: img2,
    width: 1280,
    height: 720
  },
  {
    id: '03',
        title: "Bespoke Modern Luxury Bedroom",
    category: "A calm, five‑star bedroom retreat defined by bespoke millwork, layered textures, and soft ambient lighting. Every element is tailored for comfort and refinement, from the custom headboard to the finely detailed joinery and finishes.",
    img: img3,
    width: 1280,
    height: 960
  },
  {
    id: '04',
    title: "Luxury Spa-Like Villa Bathroom",
    category: "A spa‑inspired bathroom with elegant marble surfaces, custom fluted vanities, and clean architectural lines. The design emphasizes serenity and precision, combining high‑end materials with a refined, minimalist layout.",
    img: img4,
    width: 960,
    height: 1280
  },
  {
    id: '05',
    title: "Minimalist Modern Dining Space",
    category: "A minimalist dining environment elevated by warm wood tones, soft cove lighting, and a balanced material palette. The space is designed for modern entertaining with a clean, sophisticated aesthetic that feels both intimate and luxurious.",
    img: img5,
    width: 1280,
    height: 960
  },
  {
    id: '06',
    title: "Villa Entertainment Lounge",
    category: "An industrial‑chic entertainment lounge that pairs bold textures with high‑end comfort. Thoughtful lighting, tailored built‑ins, and a streamlined layout create a premium setting for media, gatherings, and relaxed social evenings.",
    img: img6,
    width: 1280,
    height: 1280
  },
];

function WorksPage() {
  return (
    <div className="px-6 py-10 md:px-20 md:py-16 flex flex-col max-w-[1920px] mx-auto md:mt-10 mt-20">
      {/* Header */}
      <h1 className="text-5xl md:text-8xl font-bold font-grotesk mb-12 md:mb-24 text-center md:text-left">
        Our Top Works
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-0">
        {worksData.map((work, index) => (
          <div
            key={work.id}
            className={`w-full mx-auto flex flex-col ${
              // This logic creates the "zig-zag" effect on desktop only.
              // If index is odd (1, 3, 5), push it down.
              index % 2 !== 0 ? 'md:mt-32' : ''
            }`}
          >
            {/* Image Container */}
            <div className="relative group cursor-pointer">
              <div className="overflow-hidden rounded-md">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  width={work.width}
                  height={work.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Number Badge */}
              <div className="absolute -bottom-6 left-6 md:left-8 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#C88E32] text-white rounded-full text-lg md:text-xl font-bold z-10 shadow-lg">
                {work.id}
              </div>
            </div>

            {/* Text Content */}
            <div className="pt-10 pb-4 px-2 md:px-6">
              <h2 className="text-2xl md:text-3xl font-medium text-black mb-4">
                {work.title}
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed opacity-80">
                {work.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorksPage;
