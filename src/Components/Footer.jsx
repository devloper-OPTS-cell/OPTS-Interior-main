import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {

    const recipientEmail = "hello@optsinterior.com"
    const phoneNumber = "+971543430661"
    const mapLink = "https://maps.app.goo.gl/YourCopiedLinkHere"

  return (
    <footer className=" bg-[#032859] text-white py-5 font-sans fixed bottom-0 -z-10  w-screen">
      {/* Top Section: Logo */}
      <div className="flex justify-center mb-8">
        {/* Replace the text below with your actual logo image for 100% accuracy */}
        {/* <img src="/path-to-schbang-logo.svg" alt="Schbang" className="h-12" /> */}
        <h1 className="text-5xl font-bold tracking-tight"></h1>
      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-white/20 mb-8 max-w-[95%] mx-auto"></div>

      {/* Bottom Section: Content */}
      <div className="max-w-[95%] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* Left: Social Icons */}
        <div className="flex items-center gap-6">
          <SocialIcon href="#" label="LinkedIn">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </SocialIcon>

          <SocialIcon href="#" label="Instagram">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </SocialIcon>

          <SocialIcon href="#" label="YouTube">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
          </SocialIcon>

          <SocialIcon href="#" label="Facebook">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </SocialIcon>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex items-center gap-6 text-sm md:text-base font-light">
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">Services</FooterLink>
          <FooterLink href="#">Work</FooterLink>
        </nav>

        {/* Right: Copyright Text */}
        <div className="text-center flex flex-col items-start text-xs md:text-sm font-light leading-relaxed opacity-90 gap-2">
          <p className='text-sm md:text-lg '>Reach Out</p>
          <div className='flex flex-col gap-3'>
        <a  href={`mailto:${recipientEmail}`}>
        <button className='flex items-center gap-2 cursor-pointer' >
          <Mail size={17} />
          <h1>hello@optsinterior.com</h1>
        </button>
      </a>
      <a href={`tel:${phoneNumber}`}>
      <button className='flex items-center gap-2 cursor-pointer'>
        <Phone size={17} />
        <h1>+9715434306616</h1>
      </button>
    </a>
    <a  
      href={mapLink} 
      target="_blank" 
      rel="noopener noreferrer" // Security best practice for _blank
    >
      <button className='flex items-start justify-center gap-2 text-left cursor-pointer'>
        <MapPin className='mt-1' size={20} />
          
        {/* Using a div to stack text if you want it exactly like the image */}
        <div className="flex flex-col">
<h1>OPTS, Plot No. 365-150,   </h1>
<h1>Warehouse No. 8 Opposite MTM,</h1>
<h1>Al Quoz Industrial Area 2,</h1>
<h1>Dubai</h1>
        </div>
      </button>
    </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components for cleaner code
const SocialIcon = ({ children, href, label }) => (
  <a 
    href={href} 
    aria-label={label}
    className="bg-white text-black p-1.5 rounded-sm hover:opacity-80 transition-opacity"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="w-5 h-5 block" // block ensures no extra spacing
    >
      {/* For YouTube specifically, we need fill handling differently usually, but stroke works for outline style. 
          If you want solid icons, remove stroke and add fill="black".
          Based on image, icons are black symbols on white boxes (or inverted).
          The image shows White icons on Black background? Actually, looking closer:
          The icons are White shapes.
      */}
      {/* CORRECTION based on Image: Icons are White shapes on Black background. */}
      {/* Let's fix styling inside the component below */}
      {children}
    </svg>
  </a>
);

// RE-WRITING SocialIcon to match image EXACTLY (White icon, transparent bg)
const ExactSocialIcon = ({ children, href, label }) => (
  <a 
    href={href} 
    aria-label={label}
    className="bg-white rounded-md p-1 flex items-center justify-center hover:opacity-80 transition-opacity"
    style={{ width: '32px', height: '32px' }}
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="black" 
      stroke="none"
      className="w-5 h-5"
    >
      {children}
    </svg>
  </a>
);

// UPDATED: The image shows white icons inside white rounded squares? 
// No, looking at the crop: They are White logos inside white squares? No. 
// They are Black logos inside White squares.
// The code below implements: White Square Container -> Black Icon Path.

const FooterLink = ({ href, children }) => (
  <a href={href} className="hover:underline hover:text-gray-300 transition-colors">
    {children}
  </a>
);

export default Footer;

// NOTE: To fix the icon component to match the image exactly:
// The image has white squares with the logo cut out (or black logo inside).
// Use this specific SocialIcon component definition:

const FinalSocialIcon = ({ children, href, label }) => (
    <a 
      href={href} 
      aria-label={label}
      className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-[4px] hover:bg-gray-200 transition-colors"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="0" 
      >
        {children}
      </svg>
    </a>
);