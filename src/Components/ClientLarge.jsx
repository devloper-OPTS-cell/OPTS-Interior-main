import React from 'react';
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
    <section className='w-full py-10 flex flex-col items-center px-4'>
      {/* Dynamic Font Scaling */}
      <h1 className='font-grotesk text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] mb-12 text-center'>
        Our Clients
      </h1>

      {/* Grid: 2 cols on mobile, 3 on tablet, 5 on desktop */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 max-w-7xl w-full'>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img 
              className='w-full max-w-[180px] h-auto object-contain ' 
              src={logo} 
              alt={`Client ${index + 1}`} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;