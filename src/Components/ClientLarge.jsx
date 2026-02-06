import React from 'react';
import { cdn } from '../utils/cdn';

const accor = cdn("Accor_logo.svg-removebg-preview.webp");
const booking = cdn("Booking-Logo-removebg-preview.webp");
const google = cdn("google-removebg-preview.webp");
const huawei = cdn("huawei-logo-picture-41-removebg-preview.webp");
const juniper = cdn("juniper-removebg-preview.webp");
const lenovo = cdn("lenovo-removebg-preview.webp");
const wyndham = cdn("wyndham-removebg-preview.webp");
const bighill = cdn("bighill-removebg-preview.webp");
const qog = cdn("qog-1-removebg-preview.webp");
const karam = cdn("karam-removebg-preview.webp");



const logos = [
  accor,
  booking,
  google,
  huawei,
  juniper,
  lenovo,
  wyndham,
  bighill,
  qog,
  karam
];

function Clients() {
  return (
    <section className='w-full py-14 md:py-20 flex flex-col items-center px-4 text-[#111111]'>
      {/* Dynamic Font Scaling */}
      <h1 className='font-grotesk text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] mb-12 text-center tracking-tight leading-none'>
        Our Clients
      </h1>

      {/* Grid: 2 cols on mobile, 3 on tablet, 5 on desktop */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 max-w-7xl w-full'>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img 
              className='w-full max-w-[180px] h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300' 
              src={logo} 
              alt={`Client ${index + 1}`} 
              width={632}
              height={395}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
