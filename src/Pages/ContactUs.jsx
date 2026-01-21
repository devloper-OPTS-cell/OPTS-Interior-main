import React from 'react'
import { useState } from 'react'

function ContactUs() {

  const [status, setStatus] = useState("idle"); 
  const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

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
    const res = await fetch("/api/send-mail.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      setMessage("Application submitted successfully!");

      // ✅ CLEAR FORM
      setFormData({
        name: "",
        email: "",
        phone: "",
      });

      // Optional: auto-hide message
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
    <div className="min-h-screen px-6 md:px-16 py-12 flex flex-col md:flex-row gap-12">
      {/* LEFT: FORM */}
      <div className="w-full md:w-1/2">

        <form onSubmit={handleSubmit} className="mt-8 md:mt-10 space-y-8">
          {/* Name */}
          <div className="flex flex-col gap-6">
            <label className="text-lg md:text-2xl">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-black pb-4 text-base md:text-xl focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-6">
            <label className="text-lg md:text-2xl">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-black pb-4 text-base md:text-xl focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-6">
            <label className="text-lg md:text-2xl">Your Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-black pb-4 text-base md:text-xl focus:outline-none"
            />
          </div>


          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-3 rounded-lg transition ${
              status === "loading"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:opacity-90"
            }`}
          >
            {status === "loading" ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        {/* Status Message */}
        {status !== "idle" && (
          <div
            className={`mt-6 rounded-lg px-4 py-3 text-lg ${
              status === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}
      </div>


    </div>

  )
}

export default ContactUs