import React from 'react';
import Marquee from "react-fast-marquee";

const logos = [
  'https://ail-media2.b-cdn.net/1.png',
  'https://ail-media2.b-cdn.net/2.png',
  'https://ail-media2.b-cdn.net/11.png',
  'https://ail-media2.b-cdn.net/4.png',
  'https://ail-media2.b-cdn.net/5.png',
  'https://ail-media2.b-cdn.net/6.png',
  'https://ail-media2.b-cdn.net/7.png',
  'https://ail-media2.b-cdn.net/8.png',
  'https://ail-media2.b-cdn.net/9.png',
  'https://ail-media2.b-cdn.net/10.png',
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
            className='mx-4 w-42 h-30 md:w-48 md:h-32 lg:w-60 lg:h-45 object-contain' 
            src={logo} 
            alt={`Client Logo ${index + 1}`} 
          />
        ))}
      </Marquee>
    </div>
  );
}

export default Clients;