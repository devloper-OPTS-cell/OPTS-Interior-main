import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../Components/Seo';
import { breadcrumbSchema } from '../utils/seo';
import { projects } from '../data/projects';

function WorksPage() {
  return (
    <div className="px-6 py-10 md:px-20 md:py-16 flex flex-col max-w-[1920px] mx-auto md:mt-10 mt-20">
      <Seo
        title="Interior Design Projects in Dubai"
        description="Explore OPTS Express Interior Design project highlights across luxury villas, hospitality, and commercial spaces in Dubai."
        path="/projects"
        jsonLd={breadcrumbSchema("/projects")}
      />
      {/* Header */}
      <h1 className="text-5xl md:text-8xl font-bold font-grotesk mb-12 md:mb-24 text-center md:text-left">
        Interior Design Projects in Dubai
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-0">
        {projects.map((work, index) => (
          <div
            key={work.displayId}
            className={`w-full mx-auto flex flex-col ${
              // This logic creates the "zig-zag" effect on desktop only.
              // If index is odd (1, 3, 5), push it down.
              index % 2 !== 0 ? 'md:mt-32' : ''
            }`}
          >
            {/* Image Container */}
            <Link to={`/projects/${work.slug}`} className="relative group cursor-pointer">
              <div className="overflow-hidden rounded-md">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  width={work.width}
                  height={work.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Number Badge */}
              <div className="absolute -bottom-6 left-6 md:left-8 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#C88E32] text-white rounded-full text-lg md:text-xl font-bold z-10 shadow-lg">
                {work.displayId}
              </div>
            </Link>

            {/* Text Content */}
            <div className="pt-10 pb-4 px-2 md:px-6">
              <h2 className="text-2xl md:text-3xl font-medium text-black mb-4">
                <Link to={`/projects/${work.slug}`} className="hover:underline">
                  {work.title}
                </Link>
              </h2>
              <p className="text-lg md:text-xl font-light text-gray-900 leading-relaxed opacity-80">
                {work.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorksPage;
