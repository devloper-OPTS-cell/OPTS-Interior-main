import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from '../assets/projects/IMG_4983.png'
import img2 from '../assets/projects/IMG_5184.jpg'
import img3 from '../assets/projects/IMG_5186.jpg'
import img4 from '../assets/projects/IMG_5188.jpg'
import img5 from '../assets/projects/IMG_5189.jpg'
import img6 from '../assets/projects/IMG_1232.jpg'

const projects = [
  {
    id: 1,
    title: "Gulfood Dubai: Azerbaijan Pavilion",
    category: "Modern cultural design showcasing premium food brands with professional craftsmanship.",
    image: img1,
    bgColor: "#E3CAA5",
    rotate: -10,
    zIndex: 1,
  },
  {
    id: 2,
    title: "Luxury Villa Outdoor Design",
    category: "Modern resort-style living featuring premium materials and elegant outdoor functionality.",
    image: img2, 
    bgColor: "#95B2B0",
    rotate: -5,
    zIndex: 2,
  },
  {
    id: 3,
    title: "Bespoke Modern Luxury Bedroom",
    category: "Serene five-star retreat featuring premium textures and meticulous custom craftsmanship.",
    image: img3, 
    bgColor: "#F1F0EA",
    rotate: 0,
    zIndex: 3,
  },
  {
    id: 4,
    title: "Luxury Spa-Like Villa Bathroom",
    category: "Elegant marble retreat featuring custom fluted vanities and modern precision.",
    image: img4, 
    bgColor: "#1A1A1A",
    rotate: 5,
    zIndex: 2,
  },
  {
    id: 5,
    title: "Minimalist Modern Dining Space",
    category: "Warm wooden accents and cove lighting create a sophisticated dining atmosphere.",
    image: img6, 
    bgColor: "#D4D4D4",
    rotate: 10,
    zIndex: 1,
  },
  {
    id: 6,
    title: "Villa Entertainment Lounge",
    category: "Bold industrial-chic space blending high-end entertainment with modern comfort.",
    image: img5, 
    bgColor: "#D4D4D4",
    rotate: 15,
    zIndex: 0,
  },
];

const Works = () => {
  const [activeId, setActiveId] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const activeProject = projects.find((p) => p.id === activeId);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#032859] text-white flex flex-col overflow-x-hidden">
      
      {/* HEADER */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 mt-10 gap-6">
        <h2 className="text-4xl md:text-6xl font-light uppercase condensed font-grotesk leading-tight">
          Selected <br className="hidden md:block" /> Client Projects
        </h2>
        <Link to='/projects' className="border italic border-white/30 px-6 py-3 text-sm md:text-lg uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-2">
          View All Projects <ArrowRight size={16} />
        </Link>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 flex flex-col items-center justify-center relative w-full">
        
        {/* --- MOBILE VIEW: Horizontal Scroll (Enabled when < md) --- */}
        {isMobile ? (
          <div className="w-full flex overflow-x-auto snap-x snap-mandatory px-6 gap-4 pb-8 no-scrollbar">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="relative shrink-0 snap-center rounded-sm overflow-hidden shadow-xl"
                style={{ width: "85vw", height: "50vh" }}
                // Placeholder for navigation
                onClick={() => console.log(`Maps to project ${project.id}`)} 
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Mobile Text Overlay (Better UX for scrolling) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-12">
                   <h3 className="text-2xl font-medium text-white mb-1">{project.title}</h3>
                   <p className="text-gray-300 text-sm leading-snug">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* --- DESKTOP VIEW: The "Fan" (Enabled when >= md) --- */
          /* Keeping this EXACTLY as your original 'past' code */
          <>
            <div className="flex justify-center items-center h-[500px] w-full relative perspective-1000">
              {projects.map((project) => {
                const isActive = activeId === project.id;
                return (
                  <motion.div
                    key={project.id}
                    onMouseEnter={() => setActiveId(project.id)}
                    className="relative cursor-pointer shrink-0 rounded-sm shadow-2xl overflow-hidden"
                    style={{
                      width: 320,
                      height: 480,
                      marginLeft: "-60px",
                      marginRight: "-60px",
                      zIndex: isActive ? 50 : project.zIndex, 
                      transformOrigin: "bottom center" 
                    }}
                    animate={{
                      y: isActive ? -30 : 0, 
                      scale: isActive ? 1.1 : 1, 
                      rotate: isActive ? 0 : project.rotate, 
                      filter: isActive ? "brightness(1.1)" : "brightness(0.6)", 
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop Only Bottom Text */}
            <div className="mt-3 text-center max-w-lg h-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject ? activeProject.id : "empty"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-medium text-white mb-2">
                    {activeProject ? activeProject.title : ""}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {activeProject ? activeProject.category : ""}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Works;