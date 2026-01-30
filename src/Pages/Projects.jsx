import React from 'react';

const worksData = [
  {
    id: '01',
    title: 'First things first: Strategie',
    desc: 'Wir verschaffen uns einen Überblick über den Status Quo, stecken gemeinsam künftige Ziele ab und entwickeln auf dieser Basis einen soliden Projektplan. Dabei verstehen wir uns als beratender Partner.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'We Made cool things',
    desc: 'Wir verschaffen uns einen Überblick über den Status Quo, stecken gemeinsam künftige Ziele ab und entwickeln auf dieser Basis einen soliden Projektplan. Dabei verstehen wir uns als beratender Partner.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Digital Experience',
    desc: 'Wir verschaffen uns einen Überblick über den Status Quo, stecken gemeinsam künftige Ziele ab und entwickeln auf dieser Basis einen soliden Projektplan. Dabei verstehen wir uns als beratender Partner.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Creative Solutions',
    desc: 'Wir verschaffen uns einen Überblick über den Status Quo, stecken gemeinsam künftige Ziele ab und entwickeln auf dieser Basis einen soliden Projektplan. Dabei verstehen wir uns als beratender Partner.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '05',
    title: 'Brand Identity',
    desc: 'Wir verschaffen uns einen Überblick über den Status Quo, stecken gemeinsam künftige Ziele ab und entwickeln auf dieser Basis einen soliden Projektplan. Dabei verstehen wir uns als beratender Partner.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '06',
    title: 'Future Proofing',
    desc: 'Wir verschaffen uns einen Überblick über den Status Quo, stecken gemeinsam künftige Ziele ab und entwickeln auf dieser Basis einen soliden Projektplan. Dabei verstehen wir uns als beratender Partner.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
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
                {work.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorksPage;