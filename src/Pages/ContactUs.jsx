import React, { useState } from 'react';
import { Mail, Phone, MapPin } from "lucide-react";

function ContactUs() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

    const recipientEmail = "hello@optsinterior.com"
    const phoneNumber = "+971543430661"
    const mapLink = "https://maps.app.goo.gl/YourCopiedLinkHere"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage("Application submitted successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
        });

        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 4000);
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Server error. Please try later.");
    }
  };

  return (
    // 1. Main Background changed to white
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* LEFT SIDE: Text is now Dark Blue (#032859) to be visible on white bg */}
        <div className="text-[#032859] space-y-8 mt-4 lg:mt-20">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-normal">Contact Us</h1>
            <p className="text-[#032859]/80 text-lg leading-relaxed max-w-md">
              Not sure what you need? The team at OPTS will be happy to listen to you and suggest event ideas you hadn't considered.
            </p>
          </div>

        <div className="text-center flex flex-col items-start text-xs md:text-sm font-light leading-relaxed opacity-90 gap-2">
          <div className='flex flex-col gap-3'>
        <a  href={`mailto:${recipientEmail}`}>
        <button className='flex items-center gap-2 cursor-pointer' >
          <Mail size={27} />
          <h1 className='text-xl'>hello@optsinterior.com</h1>
        </button>
      </a>
      <a href={`tel:${phoneNumber}`}>
      <button className='flex items-center gap-2 cursor-pointer'>
        <Phone size={27} />
        <h1 className='text-xl'>+9715434306616</h1>
      </button>
    </a>
    <a  
      href={mapLink} 
      target="_blank" 
      rel="noopener noreferrer" // Security best practice for _blank
    >
      <button className='flex items-start justify-center gap-2 text-left cursor-pointer'>
        <MapPin className='mt-1' size={25} />
          
        {/* Using a div to stack text if you want it exactly like the image */}
        <div className="flex flex-col text-xl">
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

        {/* RIGHT SIDE: Card background changed to #032859 */}
        <div className="bg-[#032859] rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
           
           {/* Decorative Circles (Opacity lowered for better blend) */}
          <div className="absolute -top-10 -right-10 pointer-events-none opacity-20">
             <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="50" r="49.5" stroke="white"/>
                <circle cx="150" cy="50" r="79.5" stroke="white"/>
                <circle cx="150" cy="50" r="109.5" stroke="white"/>
             </svg>
          </div>

          <div className="relative z-10">
            {/* Headings inside card must be White now */}
            <h2 className="text-3xl font-medium text-white mb-8">
              We'd love to hear from you!<br />Let's get in touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Field 1: Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=""
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition text-white"
                />
              </div>

              {/* Field 2: Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Your Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition placeholder-gray-400 text-white"
                  />
                </div>
              </div>

              {/* Field 3: Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Your Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder=""
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition text-white"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-3 rounded-lg font-medium transition duration-200 ${
                  status === "loading"
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-white text-[#032859] hover:bg-gray-100" 
                    // Button changed to White to pop against the dark blue card
                }`}
              >
                {status === "loading" ? "Submitting..." : "Send Message"}
              </button>
            </form>

            {/* Status Message */}
            {status !== "idle" && (
              <div
                className={`mt-4 rounded-lg px-4 py-3 text-sm font-medium text-center ${
                  status === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;