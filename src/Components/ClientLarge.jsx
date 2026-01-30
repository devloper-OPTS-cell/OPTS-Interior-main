import React from 'react';

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
              className='w-full max-w-[180px] h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300' 
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