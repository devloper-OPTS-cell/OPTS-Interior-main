import React from "react";
import { Link } from "react-router-dom";
import Seo from "../Components/Seo";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#FBFBF9] flex items-center justify-center px-6 py-16 font-sans">
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist. Return to the homepage or contact us."
        path="/404"
        noIndex={true}
      />
      <div className="max-w-3xl w-full text-center">
        <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">404</p>
        <h1 className="text-4xl md:text-6xl font-grotesk font-bold text-[#032859] mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          The page you are looking for might have moved or doesn’t exist. Try going back home
          or contact our team for help.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-[#032859] text-white hover:bg-[#054494] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/contact-us"
            className="px-6 py-3 rounded-full border border-[#032859] text-[#032859] hover:bg-[#032859] hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
