// MainLayout.js
import React, { useState, useEffect, useRef } from 'react';
import Footer from '../Components/Footer';
import { cdn } from '../utils/cdn';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Instagram } from 'lucide-react'; // Added Instagram here
import Lenis from 'lenis';
import FloatingWhatsApp from '../Components/FloatingWhatsApp';
import { primaryPhoneNumber, whatsappUrl } from '../utils/contact';

const logo = cdn("logo.webp");

function MainLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for Mobile Menu
  const [showFloatingWhatsApp, setShowFloatingWhatsApp] = useState(false);
  const location = useLocation();
  const phoneNumber = primaryPhoneNumber;
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  const isHome = location.pathname === '/';
  
  // Text is white ONLY if on Home page AND at the very top
  const isTextWhite = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateFloatingVisibility = () => {
      if (location.pathname !== "/") {
        setShowFloatingWhatsApp(true);
        return;
      }

      const heroThreshold = Math.max(window.innerHeight * 0.82, 420);
      setShowFloatingWhatsApp(window.scrollY > heroThreshold);
    };

    updateFloatingVisibility();
    window.addEventListener("scroll", updateFloatingVisibility);
    window.addEventListener("resize", updateFloatingVisibility);

    return () => {
      window.removeEventListener("scroll", updateFloatingVisibility);
      window.removeEventListener("resize", updateFloatingVisibility);
    };
  }, [location.pathname]);

  // Scroll to top on route change (use Lenis if available)
  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname]);

  // Global smooth scrolling (keeps native touch scrolling on mobile)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Pause Lenis when the mobile menu is open
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (isMenuOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isMenuOpen]);

  return (
    <div className='relative min-h-screen'>
        
        {/* Injecting the shake animation styles directly here */}
        <style>{`
          @keyframes shake-intermittent {
            0% { transform: rotate(0deg); }
            5% { transform: rotate(-15deg); }
            10% { transform: rotate(15deg); }
            15% { transform: rotate(-15deg); }
            20% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }
          
          .shake-icon {
            animation: shake-intermittent 2.5s ease-in-out infinite;
            transform-origin: center;
          }
        `}</style>

        {/* --- Navbar --- */}
        <div 
          className={`fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-center transition-all duration-700 ease-in-out
            ${isScrolled 
              ? 'top-6 w-[90%] md:w-[85%] rounded-[3rem] bg-black/5 backdrop-blur-md py-3 shadow-sm' 
              : 'top-0 w-full py-6 bg-transparent'
            }`}
        >
            <div className={`flex items-center justify-between w-full transition-all duration-700 px-6 md:px-10 ${isScrolled ? 'px-6 md:px-8' : 'px-6 md:px-20'}`}>
                
                {/* Logo */}
                <Link to="/" className="z-50 flex items-center"> 
                  <img
                    className='h-22 md:h-[68px] object-contain'
                    src={logo}
                    alt="Logo"
                  /> 
                </Link>
                
                {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
                <div className={`hidden md:flex items-center gap-10 font-light transition-colors duration-300 ${isTextWhite ? 'text-white' : 'text-black'}`}>
                    <Link to="/about-us" className='text-lg hover:opacity-70 transition-opacity'> About Us </Link>
                    <Link to="/contact-us" className='text-lg hover:opacity-70 transition-opacity'> Contacts </Link>
                    <Link to="/services" className='text-lg hover:opacity-70 transition-opacity'> Services </Link>
                    <Link to="/projects" className='text-lg hover:opacity-70 transition-opacity'> Projects </Link>
                    <Link to="/faq" className='text-lg hover:opacity-70 transition-opacity'> FAQ </Link>
                    
                    <a href={`tel:${phoneNumber}`} className={`flex items-center justify-center border ${isTextWhite ? 'border-white' : 'border-black'} rounded-full px-4 py-2 gap-2 hover:bg-white hover:text-black transition-all duration-300`}>  
                      <Phone size={18} fill="currentColor" strokeWidth={0} className="shake-icon"/> 
                      <span className="text-sm tracking-widest font-medium">LET'S TALK</span> 
                    </a>
                </div>

                {/* --- MOBILE ICONS (Visible on Small Screens) --- */}
                <div className={`flex md:hidden items-center gap-5 transition-colors duration-300 ${isTextWhite ? 'text-white' : 'text-black'}`}>
                    {/* Mobile Call Icon */}
                    <a href={`tel:${phoneNumber}`}>
                      <Phone size={24} className={isScrolled ? "text-black" : "text-inherit"} />
                    </a>
                    
                    {/* Hamburger Menu Trigger */}
                    <button onClick={() => setIsMenuOpen(true)} className="focus:outline-none">
                      <Menu size={30} strokeWidth={1.5} className={isScrolled ? "text-black" : "text-inherit"} />
                    </button>
                </div>
            </div>
        </div>

        {/* --- MOBILE FULL SCREEN OVERLAY --- */}
        <div className={`fixed inset-0 z-[60] bg-[#1a1a1a]/95 backdrop-blur-xl transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            
            {/* Overlay Header */}
            <div className="flex justify-between items-center p-6 pt-8 text-white">
               {/* Using logo image for Overlay as well to keep it consistent */}
               <img className="h-12 object-contain  invert " src={logo} alt="OPTS Interior logo" />
               
               <div className="flex items-center gap-6">
                  <a href={`tel:${phoneNumber}`}>
                    <Phone size={24} className="text-white" />
                  </a>
                  <button onClick={() => setIsMenuOpen(false)}>
                    <X size={32} className="text-white font-light" />
                  </button>
               </div>
            </div>

            {/* Overlay Links */}
            <div className="flex flex-col items-center justify-center h-[60vh] gap-6 text-white font-light text-2xl tracking-wide">
                <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors">About Us</Link>
                <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors"> Projects</Link>
                <Link to="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors">Services</Link>
                <Link to="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors">FAQ</Link>
                <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors">Contacts</Link>
            </div>

            {/* Overlay Footer: Social Icons */}
            <div className="absolute bottom-10 left-0 w-full flex justify-center items-center gap-6 pb-4">
                {/* WhatsApp Icon */}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="ml-[1px] mb-[1px]">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                </a>

                {/* Instagram Icon */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                    <Instagram size={24} strokeWidth={1.5} />
                </a>
            </div>

        </div>

        {/* --- Main Page Content --- */}
        <div className="main relative z-10 bg-[#FBFBF9] shadow-2xl">
            {children}
        </div>

        {/* --- Footer --- */}
        <div className="footer">
            <Footer/>
        </div>

        <FloatingWhatsApp visible={!isMenuOpen && showFloatingWhatsApp} />
    </div>
  )
}

export default MainLayout;
