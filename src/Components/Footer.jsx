import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const recipientEmail = "hello@optsinterior.com";
  const phoneNumber = "+971543430661";
  const mapLink = "https://maps.app.goo.gl/YourCopiedLinkHere";

  return (
    <footer className="bg-[#032859] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Divider */}
        <div className="h-px bg-white/20 mb-10" />

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Social Icons */}
{/* Social Icons */}
<div className="flex justify-center md:justify-start gap-6">
  <a href="#" className="hover:text-blue-400 transition-colors">
    <FaLinkedin size={28} className="sm:size-6 md:size-7 lg:size-8" />
  </a>
  <a href="#" className="hover:text-pink-500 transition-colors">
    <RiInstagramFill size={28} className="sm:size-6 md:size-7 lg:size-8" />
  </a>
  <a href="#" className="hover:text-red-600 transition-colors">
    <FaYoutube size={28} className="sm:size-6 md:size-7 lg:size-8" />
  </a>
  <a href="#" className="hover:text-blue-600 transition-colors">
    <FaFacebookSquare size={28} className="sm:size-6 md:size-7 lg:size-8" />
  </a>
</div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-light">
            <FooterLink to="/about-us">About Us</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/contact-us">Contact</FooterLink>
          </nav>

          {/* Contact */}
          <div className="text-sm space-y-4 text-center md:text-left">
            <p className="text-lg font-medium">Reach Out</p>

            <a href={`mailto:${recipientEmail}`} className="flex items-center justify-center md:justify-start gap-2 hover:opacity-80">
              <Mail size={16} />
              {recipientEmail}
            </a>

            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center md:justify-start gap-2 hover:opacity-80">
              <Phone size={16} />
              +971 543 430 661
            </a>

            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-center md:justify-start gap-2 hover:opacity-80"
            >
              <MapPin size={18} className="mt-1" />
              <span>
                OPTS, Plot No. 365-150<br />
                Warehouse No. 8, Al Quoz<br />
                Dubai
              </span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <p className="text-center text-xs opacity-70 mt-12">
          © {new Date().getFullYear()} OPTS Interior. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

/* Components */
const SocialIcon = ({ children, label }) => (
  <a
    href="#"
    aria-label={label}
    className="w-8 h-8 bg-white text-black rounded flex items-center justify-center hover:bg-gray-200 transition"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      {children}
    </svg>
  </a>
);

const FooterLink = ({ to, children }) => (
  <Link to={to} className="hover:underline hover:opacity-80 transition">
    {children}
  </Link>
);

export default Footer;
