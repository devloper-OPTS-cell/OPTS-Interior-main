import React from 'react';
import { ArrowRight, Award, Users, Handshake, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

// Placeholder imports for demo purposes - ensure these match your actual paths
import right1 from '../assets/right1.jpg';
import left1 from '../assets/left1.jpg';
// import right2 from '../assets/right2.jpg';
// import left2 from '../assets/left2.jpg';
// import hero from '../assets/hero.jpg';

const ChooseUs = () => {
  return (
    <div className="min-h-screen bg-[#fbfbf9] text-[#333333] font-sans selection:bg-[#dea03c] selection:text-white">
      
      {/* SECTION 1: HERO / WHY CHOOSE US */}
      {/* Added px-4 sm:px-6 lg:px-8 for horizontal gutters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 border-t border-gray-600">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          {/* Responsive Text: text-5xl on mobile, 8xl on desktop */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-medium leading-[0.9] tracking-tight mb-8 lg:mb-12 text-[#4a4a4a]">
            Why <br />
            <span className="font-normal">Choose Us</span>
          </h1>

          <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
Choosing OPTS means partnering with a team that understands design, functionality, and execution. We focus on creating interiors that are not only visually appealing but also practical, durable, and tailored to your needs.
            </p>
            <p>
With hands-on industry experience, skilled craftsmanship, and a detail-oriented approach, we manage every stage of the project — from design planning to final installation — ensuring a smooth and reliable experience.
            </p>
          </div>

          <div className="mt-8 lg:mt-10">
            <Link to='/contact-us' className="bg-[#dea03c] hover:bg-[#c98e32] transition-colors text-gray-900 px-8 py-4 font-medium flex items-center gap-3 rounded-sm shadow-sm w-fit">
              Design with us
              <ArrowRight size={20} className="stroke-[1.5]" />
            </Link>
          </div>
        </div>

        {/* Right Images (Collage) */}
        {/* Responsive Height: h-[400px] on mobile, h-[600px] on desktop */}
        <div className="relative mt-8 lg:mt-0 h-[400px] lg:h-[600px] w-full">
          {/* Main Large Image (Back) */}
          <div className="absolute top-0 right-0 w-4/5 h-4/5 overflow-hidden shadow-sm">
            <img 
              src={left1}
              alt="House Exterior with trees" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Image (Front/Bottom Left) */}
          <div className="absolute bottom-0 left-0 w-3/5 h-[55%] overflow-hidden shadow-lg border-4 border-[#fbfbf9]">
            <img 
              src={right1}
              alt="Outdoor shower detail" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>


      {/* SECTION 2: NUMBERED LIST */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200">
          
          {/* Item 01 */}
          <div className="group border-b border-gray-200 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Number: Smaller on mobile (6xl) */}
            <div className="md:col-span-2 text-6xl md:text-8xl font-medium text-[#bfbfbf]">01</div>
            {/* Title */}
            <div className="md:col-span-4 text-2xl md:text-3xl font-normal text-[#4a4a4a]">Quality Craftsmanship</div>
            {/* Content: Removed pl-4 on mobile, kept on desktop */}
            <div className="md:col-span-6 pl-0 md:pl-4">
              <div className="mb-4 md:mb-6 hidden md:block">
                <Award size={48} className="text-gray-500 stroke-[1]" />
              </div>
              {/* Mobile icon inline option (optional, if you want icon visible on mobile) */}
               <div className="mb-4 md:hidden">
                <Award size={32} className="text-gray-500 stroke-[1]" />
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
At OPTS Express Interior, quality is built through skilled craftsmanship, careful material selection, and precise execution — resulting in interiors that feel refined and long-lasting.
              </p>
            </div>
          </div>

          {/* Item 02 */}
          <div className="group border-b border-gray-200 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="md:col-span-2 text-6xl md:text-8xl font-medium text-[#bfbfbf]">02</div>
            <div className="md:col-span-4 text-2xl md:text-3xl font-normal text-[#4a4a4a]">Client-Focused Collaboration</div>
            <div className="md:col-span-6 pl-0 md:pl-4">
              <div className="mb-4 md:mb-6 hidden md:block">
                <Users size={48} className="text-gray-500 stroke-[1]" />
              </div>
              <div className="mb-4 md:hidden">
                <Users size={32} className="text-gray-500 stroke-[1]" />
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
We believe great interiors are built through collaboration. Our team listens carefully to your requirements, offers clear guidance, and works closely with you to ensure the final result aligns perfectly with your vision.
              </p>
            </div>
          </div>

          {/* Item 03 */}
          <div className="group border-b border-gray-200 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="md:col-span-2 text-6xl md:text-8xl font-medium text-[#bfbfbf]">03</div>
            <div className="md:col-span-4 text-2xl md:text-3xl font-normal text-[#4a4a4a]">Complete Interior Solutions</div>
            <div className="md:col-span-6 pl-0 md:pl-4">
              <div className="mb-4 md:mb-6 hidden md:block">
                <Handshake size={48} className="text-gray-500 stroke-[1]" />
              </div>
              <div className="mb-4 md:hidden">
                <Handshake size={32} className="text-gray-500 stroke-[1]" />
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
From design concepts and space planning to custom furniture, fit-out, and installation, we handle the entire interior process under one roof — ensuring consistency, efficiency, and timely delivery.
              </p>
            </div>
          </div>

          {/* Item 04 */}
          <div className="group border-b border-gray-200 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="md:col-span-2 text-6xl md:text-8xl font-medium text-[#bfbfbf]">04</div>
            <div className="md:col-span-4 text-2xl md:text-3xl font-normal text-[#4a4a4a]">Reliable Execution & Support</div>
            <div className="md:col-span-6 pl-0 md:pl-4">
              <div className="mb-4 md:mb-6 hidden md:block">
                <ShieldCheck size={48} className="text-gray-500 stroke-[1]" />
              </div>
              <div className="mb-4 md:hidden">
                <ShieldCheck size={32} className="text-gray-500 stroke-[1]" />
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
We are committed to smooth project execution and dependable support. Our team ensures proper coordination, on-site management, and follow-through to deliver interiors you can trust, even after project completion.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChooseUs;