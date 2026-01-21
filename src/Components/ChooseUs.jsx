import React from 'react';
import { ArrowRight, Award, Users, Handshake } from 'lucide-react';
import right1 from '../assets/right1.jpg'
import left1 from '../assets/left1.jpg'
import right2 from '../assets/right2.jpg'
import left2 from '../assets/left2.jpg'
import hero from '../assets/hero.jpg'




const ChooseUs = () => {
  return (
    <div className="min-h-screen bg-[#fbfbf9] text-[#333333] font-sans selection:bg-[#dea03c] selection:text-white">
      
      {/* SECTION 1: HERO / WHY EPPRIGHT */}
      <div className="max-w-7xl mx-auto  py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 border-t border-gray-600">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl lg:text-8xl  font-mediuml leading-[0.9] tracking-tight mb-12 text-[#4a4a4a]">
            Why <br />
            <span className="font-normal">Choose Us</span>
          </h1>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            <p>
When choosing OPTS, you align with a creative team that brings 10+ years of expertise in fine furniture and residential interiors. We are specialists in custom upholstery, wood craftsmanship, spatial design, and project management. We begin by understanding your lifestyle needs, then guide you through every detail of the selection and fabrication process, until you settle into your beautifully transformed space.
            </p>
            <p>
              Experience for yourself why so many of our customers build with us again!
            </p>
          </div>

          <div className="mt-10">
            <button className="bg-[#dea03c] hover:bg-[#c98e32] transition-colors text-gray-900 px-8 py-4 font-medium flex items-center gap-3 rounded-sm shadow-sm">
              Desigin with us
              <ArrowRight size={20} className="stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Right Images (Collage) */}
        <div className="relative mt-12 lg:mt-0 h-[600px] w-full">
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
      <div className="max-w-7xl mx-auto  ">
        <div className="border-t border-gray-200">
          
          {/* Item 01 */}
          <div className="group border-b border-gray-200 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2 text-8xl  font-medium text-[#bfbfbf]">01</div>
            <div className="md:col-span-4 text-3xl font-normal text-[#4a4a4a]">Superior Quality</div>
            <div className="md:col-span-6 pl-4">
              <div className="mb-6">
                <Award size={48} className="text-gray-500 stroke-[1]" />
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                We take great pride in the quality of our construction. We design
                and build top-tier, superior quality homes that you will enjoy for
                years to come.
              </p>
            </div>
          </div>

          {/* Item 02 */}
          <div className="group border-b border-gray-200 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2 text-8xl  font-medium text-[#bfbfbf]">02</div>
            <div className="md:col-span-4 text-3xl font-normal text-[#4a4a4a]">Collaborative</div>
            <div className="md:col-span-6 pl-4">
              <div className="mb-6">
                <Users size={48} className="text-gray-500 stroke-[1]" />
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Our team of experts are with you each step of the way: From initial
                vision to land acquisition, architectural and interior design, all the
                way through construction, warranty, and on-going support.
              </p>
            </div>
          </div>

          {/* Item 03 */}
          <div className="group border-b border-gray-200 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2 text-8xl  font-medium text-[#bfbfbf]">03</div>
            <div className="md:col-span-4 text-3xl font-normal text-[#4a4a4a]">Comprehensive Support</div>
            <div className="md:col-span-6 pl-4">
              <div className="mb-6">
                <Handshake size={48} className="text-gray-500 stroke-[1]" />
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Our efforts don't end when we hand you the keys to your new
                home. We provide on-going personalized warranty support as well
                as copies of manuals, warranty and maintenance information.
              </p>
            </div>
          </div>

                    {/* Item 03 */}
          <div className="group border-b border-gray-200 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2 text-8xl  font-medium text-[#bfbfbf]">04</div>
            <div className="md:col-span-4 text-3xl font-normal text-[#4a4a4a]">Lorem ipsum</div>
            <div className="md:col-span-6 pl-4">
              <div className="mb-6">
                <Handshake size={48} className="text-gray-500 stroke-[1]" />
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Our efforts don't end when we hand you the keys to your new
                home. We provide on-going personalized warranty support as well
                as copies of manuals, warranty and maintenance information.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChooseUs;