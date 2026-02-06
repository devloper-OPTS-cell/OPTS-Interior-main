import React from "react";
import { useParams, Link } from "react-router-dom";
import Seo from "../Components/Seo";
import { breadcrumbSchema } from "../utils/seo";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FBFBF9] flex items-center justify-center px-6 py-16 font-sans">
        <Seo
          title="Project Not Found"
          description="The project you are looking for does not exist."
          path="/projects"
          noIndex={true}
        />
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-grotesk font-bold text-[#032859] mb-4">
            Project Not Found
          </h1>
          <Link to="/projects" className="text-[#032859] underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBF9] font-sans md:mt-10 mt-20">
      <Seo
        title={project.title}
        description={project.category}
        path={`/projects/${project.slug}`}
        type="article"
        jsonLd={breadcrumbSchema(`/projects/${project.slug}`, project.title)}
      />
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 md:py-16">
        <div className="mb-10">
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-3">
            Interior Design Project
          </p>
          <h1 className="text-4xl md:text-6xl font-grotesk font-bold text-[#032859] mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
            {project.category}
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[320px] md:h-[520px] object-cover"
            width={project.width}
            height={project.height}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-medium text-[#032859]">
              Project Overview
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {project.overview}
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {project.highlights}
            </p>
          </div>

          <aside className="bg-[#032859] text-white rounded-2xl p-6 h-fit">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-2">
                Project Type
              </p>
              <p className="text-lg font-medium">{project.type}</p>
            </div>
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-2">
                Location
              </p>
              <p className="text-lg font-medium">{project.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60 mb-2">
                Scope
              </p>
              <div className="flex flex-wrap gap-2">
                {project.scope.map((item) => (
                  <span
                    key={item}
                    className="text-xs uppercase tracking-wider border border-white/20 rounded-full px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-full border border-[#032859] text-[#032859] hover:bg-[#032859] hover:text-white transition-colors"
          >
            Back to Projects
          </Link>
          <Link
            to="/contact-us"
            className="px-6 py-3 rounded-full bg-[#032859] text-white hover:bg-[#054494] transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
