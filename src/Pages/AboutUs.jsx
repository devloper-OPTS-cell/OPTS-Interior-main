import React from 'react';
import right1 from '../assets/right1.jpg';

// --- PLACEHOLDER IMAGES ---
const founderImg = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop";
const mdImg = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop";
const gmImg = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop";

// --- REUSABLE COMPONENTS ---

const TeamMember = ({ image, role, description, isReversed }) => (
  <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center `}>
    <div className="w-full md:w-1/3 flex-shrink-0">
      <div className="aspect-[4/4.1] rounded-2xl overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
        <img src={image} alt={role} className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="w-full md:w-2/3 flex flex-col justify-center">
      {/* HEADING: Blue (Brand Accent) */}
      <h3 className="text-2xl sm:text-4xl font-bold font-grotesk mb-4 ">
        {role}
      </h3>
      {/* BODY: Gray (Consistent with Home Page) */}
      <p className="text-base sm:text-lg leading-relaxed opacity-80 text-gray-700">
        {description}
      </p>
    </div>
  </div>
);

const Separator = () => (
  <hr className="border-t border-gray-200 w-1/2 mx-auto my-16" />
);

const ServiceTag = ({ text }) => (
  <span className="inline-block px-5 py-2 bg-[#032859] text-white rounded-full text-sm font-medium hover:bg-[#054494] transition-colors cursor-default shadow-md">
    {text}
  </span>
);

const AboutUs = () => {
  return (
    <div className="font-sans">
      
      <div className="p-8 sm:p-16 max-w-[1440px] mx-auto">
        
        {/* --- SECTION 1: INTRO --- */}
        <div className="mb-24">
          {/* HEADING: Blue to match Footer */}
          <h1 className="text-4xl sm:text-8xl font-bold font-grotesk mb-12 ">
            ABOUT US
          </h1>
          <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl">
            <img
              src={right1}
              alt="OPTS Interior Design showcased space"
              className="w-full h-64 sm:h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
            <div className="md:w-1/2">
              {/* SUB-HEADING: Keeping it Dark Gray/Black for neutrality */}
              <p className="text-xl sm:text-3xl font-medium leading-snug text-gray-900">
                OPTS Express Interior Design is a professional interior design and fit-out company based in Dubai, UAE.
              </p>
            </div>
            <div className="md:w-1/3 text-gray-600 leading-relaxed text-base sm:text-lg">
              <p>
                We deliver creative, functional, and high-quality interior solutions for residential, commercial, and retail spaces. Located in Al Quoz Industrial Area 2, we are at the heart of Dubai's manufacturing hub.
              </p>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: LEADERSHIP TEAM --- */}
        <div className="mt-32">
          <div className="mb-20 md:w-2/3">
            <h6 className=" font-bold tracking-widest uppercase mb-4 text-sm">The Minds Behind OPTS</h6>
            <h2 className="text-3xl sm:text-6xl font-bold font-grotesk mb-6 text-gray-900">
              Our Leadership Team
            </h2>
            <p className="text-lg opacity-70 leading-relaxed max-w-2xl text-gray-700">
              Behind OPTS Express Interior Design is a strong leadership team with hands-on industry experience, technical expertise, and a passion for design and craftsmanship.
            </p>
          </div>

          <div className="flex flex-col">
            <TeamMember
              image={founderImg}
              role="Founder"
              description="The Founder of OPTS Express Interior Design laid the foundation of the company with a mission to build a reliable interior design and fit-out brand in Dubai. With deep knowledge of interior works and workshop operations, he focuses on quality standards, innovation, and long-term growth."
            />
            <Separator />
            <TeamMember
              isReversed={true}
              image={mdImg}
              role="Managing Director"
              description="The Managing Director oversees company operations, project execution, and client relationships. He plays a key role in business development, ensuring every project is delivered on time, within budget, and aligned with the client’s vision."
            />
            <Separator />
            <TeamMember
              image={gmImg}
              role="General Manager"
              description="The General Manager manages daily operations, production coordination, and team performance. With strong technical and managerial experience, he ensures smooth workflow between design, workshop, and site execution."
            />
          </div>
        </div>
      </div>

      {/* ================= SECTION 3: WHO WE ARE (Warm Stone Background) ================= */}
      <div className="bg-[#F5F5F0]  py-24 px-8 sm:px-16 mt-20">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          
          <div className="md:w-1/3 border-t border-[#032859]/20 pt-8">
            <h2 className="text-3xl sm:text-6xl font-bold font-grotesk leading-tight">
              Who<br />We Are
            </h2>
          </div>

          <div className="md:w-2/3 flex flex-col gap-8 border-t border-[#032859]/20 pt-8">
            {/* Lead paragraph can use the Blue for emphasis on this colored background */}
            <p className="text-xl sm:text-3xl font-light leading-relaxed ">
              OPTS Express Interior Design was founded with a clear vision: to provide reliable, innovative, and affordable interior design services in Dubai.
            </p>
            
            {/* Secondary text returns to Dark Gray for readability */}
            <p className="text-base sm:text-lg opacity-70 leading-relaxed max-w-2xl text-gray-800">
              From concept development to final execution, our experienced team ensures that every project is delivered with precision, creativity, and professionalism, without compromising on quality.
            </p>

            <div className="mt-10">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Our Expertise</p>
              <div className="flex flex-wrap gap-3">
                <ServiceTag text="Space Planning" />
                <ServiceTag text="3D Concepts" />
                <ServiceTag text="Production" />
                <ServiceTag text="Installation" />
                <ServiceTag text="Renovation" />
                <ServiceTag text="Turnkey Fit-out" />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AboutUs;