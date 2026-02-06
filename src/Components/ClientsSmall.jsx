import React from 'react';
import Marquee from "react-fast-marquee";
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
    <div className='w-full flex flex-col items-center overflow-hidden py-10'>
      {/* Responsive Heading: Small on mobile, large on desktop */}
      <h1 className='font-grotesk text-5xl md:text-6xl lg:text-[6rem] mb-8 tracking-tight leading-none'>
        Our Clients
      </h1>

      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <img 
            key={index}
            className='mx-4 w-42 h-30 md:w-48 md:h-32 lg:w-60 lg:h-45 object-contain flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300' 
            src={logo} 
            alt={`Client Logo ${index + 1}`} 
            width={632}
            height={395}
            loading="lazy"
            decoding="async"
          />
        ))}
      </Marquee>
    </div>
  );
}

export default Clients;
