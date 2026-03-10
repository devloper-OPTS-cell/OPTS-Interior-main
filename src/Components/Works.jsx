import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Works = () => {
  const featuredProjects = projects.slice(0, 6);
  const [activeId, setActiveId] = useState(featuredProjects[0]?.id ?? null);
  const [isMobile, setIsMobile] = useState(false);
  const activeProject =
    featuredProjects.find((p) => p.id === activeId) ?? featuredProjects[0];

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
        <h2 className="text-4xl md:text-6xl font-light uppercase condensed font-grotesk leading-tight tracking-tight">
          Selected <br className="hidden md:block" /> Client Projects
        </h2>
        <Link to='/projects' className="border italic border-white/40 px-6 py-3 text-sm md:text-lg uppercase tracking-wider rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center gap-2">
          View All Projects <ArrowRight size={16} />
        </Link>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 flex flex-col items-center justify-center relative w-full">
        
        {/* --- MOBILE VIEW: Horizontal Scroll (Enabled when < md) --- */}
        {isMobile ? (
          <div className="w-full flex overflow-x-auto snap-x snap-mandatory px-6 gap-4 pb-8 no-scrollbar">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="relative shrink-0 snap-center rounded-sm overflow-hidden shadow-xl block"
                style={{ width: "85vw", height: "50vh" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  decoding="async"
                />
                {/* Mobile Text Overlay (Better UX for scrolling) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-12">
                  <h3 className="text-2xl font-medium text-white mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-snug">{project.category}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* --- DESKTOP VIEW: The "Fan" (Enabled when >= md) --- */
          /* Keeping this EXACTLY as your original 'past' code */
          <>
            <div className="flex justify-center items-center h-[500px] w-full relative perspective-1000">
              {featuredProjects.map((project) => {
                const isActive = activeId === project.id;
                return (
                  <Link
                    key={project.id}
                    to={`/projects/${project.slug}`}
                    className="block"
                    onMouseEnter={() => setActiveId(project.id)}
                  >
                    <motion.div
                      className="relative cursor-pointer shrink-0 rounded-sm shadow-2xl overflow-hidden"
                      style={{
                        width: 320,
                        height: 480,
                        marginLeft: "-60px",
                        marginRight: "-60px",
                        zIndex: isActive ? 50 : project.zIndex, 
                        transformOrigin: "bottom center",
                        willChange: "transform"
                      }}
                      animate={{
                        y: isActive ? -30 : 0, 
                        scale: isActive ? 1.1 : 1, 
                        rotate: isActive ? 0 : project.rotate
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 transition-opacity duration-300"
                        style={{ opacity: isActive ? 0.25 : 0.6 }}
                      />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        width={project.width}
                        height={project.height}
                        loading="lazy"
                        decoding="async"
                      />
                    </motion.div>
                  </Link>
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
