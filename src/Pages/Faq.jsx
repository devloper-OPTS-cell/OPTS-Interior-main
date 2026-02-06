import React from "react";
import { Link } from "react-router-dom";
import Seo from "../Components/Seo";
import { breadcrumbSchema, faqSchema } from "../utils/seo";

const faqs = [
  {
    q: "What interior design services do you provide in Dubai?",
    a: "We offer complete interior design and fit-out services for residential and commercial spaces, including space planning, concept design, material selection, custom furniture, and turnkey execution.",
  },
  {
    q: "Do you handle both residential and commercial fit-out projects?",
    a: "Yes. We deliver fit-out solutions for villas, apartments, offices, retail spaces, hospitality projects, and showrooms with tailored design and execution.",
  },
  {
    q: "How long does a typical villa interior fit-out take?",
    a: "Timelines vary by scope, but most villa fit-out projects take 8–16 weeks from final design approval to handover.",
  },
  {
    q: "Can you work within a fixed budget?",
    a: "Absolutely. We optimize materials, finishes, and specifications to align with your budget while protecting quality and design intent.",
  },
  {
    q: "Do you provide 3D visualization before execution?",
    a: "Yes. We provide realistic 3D renders to finalize layouts, finishes, and lighting so you can approve the design with confidence.",
  },
  {
    q: "What is included in turnkey project execution?",
    a: "Turnkey includes design finalization, procurement, site execution, MEP coordination, joinery, installation, and final handover.",
  },
  {
    q: "Do you manufacture custom furniture in-house?",
    a: "Yes. We design and fabricate bespoke furniture and joinery tailored to the project’s style and functional needs.",
  },
  {
    q: "Can you manage approvals and permits?",
    a: "We can coordinate documentation and approvals where required, depending on the project type and authority guidelines.",
  },
  {
    q: "How do you ensure quality during execution?",
    a: "We follow strict QA/QC processes, on-site supervision, and material inspections to maintain consistent quality standards.",
  },
  {
    q: "Do you work with client-supplied contractors?",
    a: "We can collaborate with third-party teams if needed, but prefer an integrated execution approach to ensure quality and timelines.",
  },
  {
    q: "Can you renovate occupied spaces?",
    a: "Yes. We can plan phased execution and scheduling to minimize disruption in occupied villas, offices, or retail spaces.",
  },
  {
    q: "What is the first step to start a project?",
    a: "The first step is a consultation to understand your goals, budget, and timeline. We then proceed with site assessment and concept design.",
  },
  {
    q: "Do you offer post-handover support?",
    a: "Yes. We provide support after completion for any adjustments or maintenance guidance.",
  },
  {
    q: "Can you match a specific design style?",
    a: "Yes. We can design in modern, contemporary, classic, minimalist, or luxury styles based on your preferences.",
  },
  {
    q: "Do you provide full project management?",
    a: "Yes. Our team manages timelines, procurement, site coordination, and quality control from start to finish.",
  },
];

const Faq = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8 font-sans md:mt-10 mt-20">
      <Seo
        title="Interior Design FAQ"
        description="Answers to common questions about OPTS Express Interior Design services, timelines, and fit-out processes in Dubai."
        path="/faq"
        jsonLd={[breadcrumbSchema("/faq"), faqSchema(faqs)]}
      />
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="text-[#032859] space-y-8 mt-4 lg:mt-20">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#032859]/70 border border-[#032859]/20 px-3 py-1 rounded-full">
              FAQs
            </span>
            <h1 className="text-4xl md:text-5xl font-normal">Interior Design FAQs</h1>
            <p className="text-[#032859]/80 text-lg leading-relaxed max-w-md">
              Find quick answers about our interior design and fit-out process, timelines,
              materials, and execution standards in Dubai.
            </p>
          </div>

          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p className="text-[#032859]/80">
              Looking for details on scope or pricing? Explore our{" "}
              <Link to="/services" className="underline underline-offset-4">
                interior design services in Dubai
              </Link>{" "}
              to see what’s included.
            </p>
            <p className="text-[#032859]/80">
              Want inspiration? Browse our{" "}
              <Link to="/projects" className="underline underline-offset-4">
                interior fit-out projects in Dubai
              </Link>{" "}
              for recent work.
            </p>
            <p className="text-[#032859]/80">
              Ready to start?{" "}
              <Link to="/contact-us" className="underline underline-offset-4">
                Contact our interior designers in Dubai
              </Link>{" "}
              for a consultation.
            </p>
          </div>
        </div>

        <div className="bg-[#032859] rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden sm:mt-25">
          <div className="relative z-10">
            <h2 className="text-3xl font-medium text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border-b border-white/20 pb-4"
                >
                  <summary className="cursor-pointer text-white/90 text-base md:text-lg font-medium list-none flex items-center justify-between group-open:text-white">
                    <span>{faq.q}</span>
                    <span className="text-white/60 group-open:text-white group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-white/70 text-sm md:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
