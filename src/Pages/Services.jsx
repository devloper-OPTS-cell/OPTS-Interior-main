import React from 'react';
import { ArrowUpRight } from 'lucide-react'; 
import { cdn } from '../utils/cdn';
import Seo from '../Components/Seo';
import { breadcrumbSchema, offerCatalogSchema } from '../utils/seo';

const left1 = cdn("left1.webp");
const img1 = cdn("service-fitout.webp");
const img2 = cdn("service-design.webp");
const img3 = cdn("service-furniture.webp");
const img4 = cdn("service-3d.webp");
const img5 = cdn("service-turnkey.webp");

const Office = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#f8f8f8] font-sans overflow-x-hidden text-[#1c1c1c]">
      <Seo
        title="Interior Design & Fit-Out Services in Dubai"
        description="Explore OPTS Express Interior Design services: residential and commercial fit-out, interior design solutions, custom furniture, 3D visualization, and turnkey execution."
        path="/services"
        jsonLd={[breadcrumbSchema("/services"), offerCatalogSchema]}
      />
      
      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="relative min-h-screen flex flex-col justify-between p-6 md:p-12 lg:p-16">
        
        {/* Main Hero Content */}
        <main className="flex-grow flex flex-col justify-center relative z-10 mt-20 md:mt-0">
          <div className="max-w-7xl mx-auto w-full relative">
            
            {/* Floating Image Card */}
            <div className="mb-8 md:absolute md:-top-5 md:-left-12 lg:left-1 md:mb-0 w-32 md:w-48 -z-10 hover:rotate-0 transition-transform duration-500 ease-out">
              <div className="relative border-4 border-white shadow-xl overflow-hidden rounded-sm bg-black">
                <img 
                  src={left1} 
                  alt="Project Preview" 
                  className="w-full h-auto object-cover opacity-80"
                  width={7990}
                  height={5327}
                  decoding="async"
                  loading="eager"
                />
              </div>
            </div>

            {/* Hero Typography */}
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tighter font-medium">
              <span className="ml-0 md:ml-32 lg:ml-58">Shaping functional </span> 
              <br className="hidden md:block" />
              <span> interiors for homes, offices, </span> 
              <br className="hidden md:block" />
              <span className="text-[#d1d1d1]"> and commercial spaces.</span>
            </h1>

          </div>
        </main>

        {/* Hero Footer */}
        <footer className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-16 md:mt-0">
          <div className="max-w-md text-sm md:text-base lg:text-lg leading-relaxed tracking-tight font-medium">
            <p>
Our services cover every stage of the interior process, including concept development, space planning, custom furniture, fit-out execution, and final installation. Each service is delivered with a clear process, technical precision, and attention to detail to ensure smooth project completion.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-tight animate-bounce cursor-pointer">
            (Scroll <span className="rotate-90 md:rotate-0">↓</span>)
          </div>
        </footer>
      </section>


      {/* =========================================
          SECTION 2: SERVICES
      ========================================= */}
      <div className='bg-[#f5f5f0] p-1'>
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-24 pt-12 md:pt-0">
          
          {/* Services Header Group */}
          <div className="mb-12 md:mb-20">
            
            {/* Small Tagline */}
            <div className="flex items-center gap-2 text-[#a1a1a1] text-xs md:text-sm mb-6 md:mb-8 font-medium mt-5">
              <span>•</span>
              <span>Erase the average, embrace the bold.</span>
            </div>

            {/* Content Row: Flex Container for Alignment */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
              
              {/* LEFT SIDE: Main Headline */}
              <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] tracking-tighter leading-[0.95] font-medium max-w-4xl">
                From concept to execution, our services are designed to set you apart.
              </h2>
              
              {/* RIGHT SIDE: Column containing Badge (Top) and CTA (Bottom) */}
              <div className="flex flex-col items-end justify-between h-full gap-8 md:gap-0 mt-2 md:mt-0 self-stretch">
                
                {/* --- BADGE (Top Right) --- */}
                <div className="relative w-28 h-28 hidden md:block">
                   <div className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                         <path 
                           id="textPath" 
                           d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
                           fill="transparent" 
                         />
                         <text className="text-[14px] uppercase font-bold tracking-[0.2em] fill-[#1c1c1c]">
                           <textPath href="#textPath" startOffset="0%">
                             Since 2016 • Leading •
                           </textPath>
                         </text>
                      </svg>
                   </div>
                   <div className="absolute inset-0 m-auto w-14 h-14 bg-[#C88E32] rounded-full flex items-center justify-center">
                      <ArrowUpRight size={24} className="text-white" />
                   </div>
                </div>

                {/* --- CTA LINK (Bottom Right) --- */}
                <a 
                  href="#" 
                  className="group flex items-center gap-1 text-sm md:text-xl font-medium border-b border-black pb-0.5 hover:opacity-70 transition-opacity whitespace-nowrap mb-2 md:mb- self-end md:mt-50"
                >
                  Start your project with us today 
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>

              </div>
            </div>
          </div>

          <div>
            {/* Divider Number */}
            <div className="text-lg md:text-2xl font-medium text-[#1c1c1c] mb-4">
              (01)
            </div>

            {/* Horizontal Line */}
            <div className="w-full h-[1px] bg-[#d4d4d4] mb-12"></div>

            {/* Three-Column Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12">
              
              {/* Col 1: Title */}
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">Residential & Commercial Fit-Out</h3>
              </div>

              {/* Col 2: Description */}
              <div className="md:col-span-5">
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#4a4a4a]">
We provide complete interior fit-out solutions for residential and commercial spaces, including villas, apartments, offices, retail outlets, and showrooms. Our fit-out services cover planning, site execution, finishing works, and installations, ensuring every project is delivered with quality craftsmanship, technical accuracy, and on-time completion.
                </p>
              </div>

              {/* Col 3: List & Tag */}
              <div className="md:col-span-4 flex flex-col justify-between h-full">
                <div className="w-full aspect-square overflow-hidden rounded-sm bg-[#e6e6e6] mb-4">
                  <img
                    src={img1}
                    alt="Residential and commercial fit-out"
                    className="w-full h-full object-cover opacity-85"
                    width={1200}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="mt-8 md:mt-12 flex justify-end md:justify-end">
                   
                </div>
              </div>

            </div>
          </div>


          <div className='mt-10'>
            <div className="text-lg md:text-2xl font-medium text-[#1c1c1c] mb-4">
              (02)
            </div>
            <div className="w-full h-[1px] bg-[#d4d4d4] mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12">
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">Interior Design Solutions
</h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#4a4a4a]">
Our interior design services focus on creating spaces that are functional, visually appealing, and aligned with your lifestyle or brand identity. From concept development and layout planning to material selection and detailed design, we ensure every design solution is practical, cohesive, and tailored to your specific requirements.

                </p>
              </div>
              <div className="md:col-span-4 flex flex-col justify-between h-full">
                <div className="w-full aspect-square overflow-hidden rounded-sm bg-[#e6e6e6] mb-4">
                  <img
                    src={img2}
                    alt="Interior design materials and samples"
                    className="w-full h-full object-cover opacity-85"
                    width={1200}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-8 md:mt-12 flex justify-end md:justify-end">
                   
                </div>
              </div>
            </div>
          </div>

          {/* Block 4 */}
          <div className='mt-10'>
            <div className="text-lg md:text-2xl font-medium text-[#1c1c1c] mb-4">
              (03)
            </div>
            <div className="w-full h-[1px] bg-[#d4d4d4] mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12">
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">Custom Furniture Manufacturing</h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#4a4a4a]">
We design and manufacture bespoke furniture that fits seamlessly into your space. Our custom furniture solutions include wardrobes, kitchens, storage units, and specialized joinery, crafted using quality materials and precise workmanship to meet both aesthetic and functional needs.
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col justify-between h-full">
                <div className="w-full aspect-square overflow-hidden rounded-sm bg-[#e6e6e6] mb-4">
                  <img
                    src={img3}
                    alt="Custom furniture manufacturing workshop"
                    className="w-full h-full object-cover opacity-85"
                    width={1200}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-8 md:mt-12 flex justify-end md:justify-end">
                   
                </div>
              </div>
            </div>
          </div>

          <div className='mt-10'>
            <div className="text-lg md:text-2xl font-medium text-[#1c1c1c] mb-4">
              (04)
            </div>
            <div className="w-full h-[1px] bg-[#d4d4d4] mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12">
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">Space Planning & 3D Visualization</h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#4a4a4a]">
We offer smart space planning and realistic 3D visualizations to help clients clearly understand the final look and layout before execution begins. Our 3D designs allow better decision-making regarding space usage, materials, finishes, and overall design flow.
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col justify-between h-full">
                <div className="w-full aspect-square overflow-hidden rounded-sm bg-[#e6e6e6] mb-4">
                  <img
                    src={img4}
                    alt="Space planning and 3D visualization"
                    className="w-full h-full object-cover opacity-85"
                    width={1200}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-8 md:mt-12 flex justify-end md:justify-end">
                   
                </div>
              </div>
            </div>
          </div>

          <div className='mt-10'>
            <div className="text-lg md:text-2xl font-medium text-[#1c1c1c] mb-4">
              (05)
            </div>
            <div className="w-full h-[1px] bg-[#d4d4d4] mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12">
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">Turnkey Project Execution</h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#4a4a4a]">
Our turnkey solutions cover the entire interior project lifecycle — from design and material procurement to execution and final handover. We manage coordination, timelines, and quality control, providing clients with a smooth, efficient, and hassle-free interior experience.
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col justify-between h-full">
                <div className="w-full aspect-square overflow-hidden rounded-sm bg-[#e6e6e6] mb-4">
                  <img
                    src={img5}
                    alt="Turnkey project execution"
                    className="w-full h-full object-cover opacity-85"
                    width={1200}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-8 md:mt-12 flex justify-end md:justify-end">
                   
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Office;
