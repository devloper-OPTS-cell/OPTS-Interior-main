// MainLayout.js
import React from 'react';
import Footer from '../Components/Footer';

function MainLayout({ children }) {
  return (
    <div className='relative min-h-screen'>
        <div className="nav">
            {/* Your Nav Code */}
        </div>



        <div className="main relative z-10 bg-white mb-[400px] md:mb-[300px] shadow-2xl bg-[#FBFBF9]">
            {children}
        </div>

        {/* Footer sits fixed behind the main div */}
        <div className="footer">
            <Footer/>
        </div>
    </div>
  )
}

export default MainLayout;