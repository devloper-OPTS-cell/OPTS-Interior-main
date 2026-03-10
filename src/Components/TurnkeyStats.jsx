import React from "react";
import { Link } from "react-router-dom";

const stats = [
  {
    label: "Projects Finished",
    value: "1000+",
    description: "Across villas, apartments, offices, and retail spaces",
  },
  {
    label: "Specialized Departments",
    value: "9",
    description: "Self-sustained and well-organized in-house facilities",
  },
  {
    label: "In-House Workforce",
    value: "30+",
    description: "Qualified carpenters, painters, foremen, and assemblers",
  },
  {
    label: "Service Coverage",
    value: "UAE & GCC",
    description: "Delivering projects within UAE and neighboring countries",
  },
];

function TurnkeyStats() {
  return (
    <section className="px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-[1600px] rounded-2xl border border-[#d5dae6]  p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="max-w-4xl">
            <h2 className="font-grotesk text-4xl leading-tight text-[#0c1637] md:text-6xl">
              Turnkey Solutions with Uncompromised Quality
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-[#3f495f] md:text-2xl">
              OPTS Express Interior is a leading renovation, fit-out, and
              interior design company in Dubai, UAE. We deliver end-to-end
              services for dream homes and commercial spaces, from focused
              upgrades to large-scale turnkey projects.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <Link
              to="/contact-us"
              className="inline-flex rounded-full bg-[#1f3c88] px-10 py-4 text-sm tracking-[0.2em] text-white transition hover:bg-[#162f6e]"
            >
              BOOK SITE VISIT
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#d5dae6] bg-[#f6f7fb] p-6"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-[#5d6c97] md:text-sm">
                {item.label}
              </p>
              <p className="mt-3 font-grotesk text-5xl text-[#1f3c88]">{item.value}</p>
              <p className="mt-4 text-lg leading-relaxed text-[#4b556e]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TurnkeyStats;
