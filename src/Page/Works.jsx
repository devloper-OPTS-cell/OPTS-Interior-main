import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// 1. Data Configuration
const projects = [
  {
    id: 1,
    title: "Vibrant",
    category: "Unified branding and website for a health and longevity practice",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", // Abstract Orange
    bgColor: "#E3CAA5",
    rotate: -10,
    zIndex: 1,
  },
  {
    id: 2,
    title: "Just Salad",
    category: "Playful web experience bringing BBMG's iconic branding to life",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop", // Salad Bowl
    bgColor: "#95B2B0",
    rotate: -5,
    zIndex: 2,
  },
  {
    id: 3,
    title: "Eppright Homes",
    category: "Premium digital showcase for a custom homebuilder",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", // Modern House
    bgColor: "#F1F0EA",
    rotate: 0,
    zIndex: 3,
  },
  {
    id: 4,
    title: "PBS - North Carolina",
    category: "Interactive website for a storied regional broadcaster",
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=800&auto=format&fit=crop", // Portrait/Person
    bgColor: "#1A1A1A",
    rotate: 5,
    zIndex: 2,
  },
  {
    id: 5,
    title: "Titan",
    category: "Webflow redesign for a modern RIA growth platform",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop", // Statue/Classic
    bgColor: "#D4D4D4",
    rotate: 10,
    zIndex: 1,
  },
  {
    id: 6,
    title: "Titan",
    category: "Webflow redesign for a modern RIA growth platform",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop", // Statue/Classic
    bgColor: "#D4D4D4",
    rotate: 15,
    zIndex: 0,
  },

];

const Works = () => {
  // Default to the middle project (index 2)
  const [activeId, setActiveId] = useState(3);

  // Helper to find active project data
  const activeProject = projects.find((p) => p.id === activeId);

  return (
    <div className="min-h-screen bg-[#032859] text-white flex flex-col  overflow-hidden ">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-10 w-full  flex justify-between items-end mb-24 mt-10">
        <h2 className="text-6xl font-light uppercase  condensed font-grotesk">
          Selected Client Projects
        </h2>
        <button className="border italic border-white/30 px-6 py-3 text-lg  uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-2">
          View All Projects <ArrowRight size={16} />
        </button>
      </div>

      {/* CARD FAN SECTION */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        
        {/* The Fan Container */}
        <div className="flex justify-center items-center h-[500px] w-full relative perspective-1000">
          {projects.map((project) => {
            const isActive = activeId === project.id;

            return (
              <motion.div
                key={project.id}
                layout
                onMouseEnter={() => setActiveId(project.id)}
                className="relative cursor-pointer shrink-0 rounded-sm shadow-2xl overflow-hidden"
                
                // STYLES
                style={{
                  width: 320,
                  height: 480,
                  marginLeft: "-60px", // Creates the overlap
                  marginRight: "-60px",
                  zIndex: isActive ? 50 : project.zIndex, // Active card jumps to front
                }}
                
                // ANIMATION VARIANTS
                animate={{
                  y: isActive ? -30 : 0, // Lift up slightly when active
                  scale: isActive ? 1.1 : 1, // Scale up
                  rotate: isActive ? 0 : project.rotate, // Straighten or keep rotate
                  filter: isActive ? "brightness(1.1)" : "brightness(0.6)", // Dim others
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                {/* Image Overlay/Texture Effect (Optional) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Text inside card (Optional, visible if needed) */}
                <div className="absolute bottom-6 left-6 z-20 opacity-0 hover:opacity-100 transition-opacity">
                   {/* You can add internal card labels here if needed */}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM TEXT: DYNAMIC DESCRIPTION */}
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

      </div>
    </div>
  );
};

export default Works;