import React from 'react';
import Marquee from "react-fast-marquee";
import accor from '../assets/logos_client/Accor_logo.svg-removebg-preview.png';
import booking from '../assets/logos_client/Booking-Logo-removebg-preview.png';
import google from '../assets/logos_client/google-removebg-preview.png';
import huawei from '../assets/logos_client/huawei-logo-picture-41-removebg-preview.png';
import juniper from '../assets/logos_client/juniper-removebg-preview.png';
import lenovo from '../assets/logos_client/lenovo-removebg-preview.png';
import wyndham from '../assets/logos_client/wyndham-removebg-preview.png';
import bighill from '../assets/logos_client/bighill-removebg-preview.png';
import qog from '../assets/logos_client/qog-1-removebg-preview.png';
import karam from '../assets/logos_client/karam-removebg-preview.png';

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
    <div className='w-full  flex flex-col items-center overflow-hidden mb-10'>
      {/* Responsive Heading: Small on mobile, large on desktop */}
      <h1 className='font-grotesk text-5xl md:text-6xl lg:text-[6rem] mb-8'>
        Our Clients
      </h1>

      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <img 
            key={index}
            className='mx-4 w-42 h-30 md:w-48 md:h-32 lg:w-60 lg:h-45 object-contain flex items-center justify-center' 
            src={logo} 
            alt={`Client Logo ${index + 1}`} 
          />
        ))}
      </Marquee>
    </div>
  );
}

export default Clients;